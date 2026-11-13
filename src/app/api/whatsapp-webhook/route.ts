import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.OPENWA_WEBHOOK_SECRET || ''
  // Verify shared secret if configured
  if (WEBHOOK_SECRET) {
    const authHeader = req.headers.get('x-webhook-secret') || req.headers.get('authorization')
    if (authHeader !== WEBHOOK_SECRET && authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  try {
    const payload = await req.json()
    const event = payload.event || payload.type || 'unknown'
    const data = payload.data || payload

    // Handle message events from OpenWA
    if (
      event === 'message.received' ||
      event === 'message.sent' ||
      event === 'onMessage' ||
      event === 'onAnyMessage'
    ) {
      const isIncoming = event === 'message.received' || event === 'onMessage'

      const messageId = data.id || data._serialized || null
      const chatId = data.chatId || data.from || data.chat?.id || ''
      const sender = data.sender?.id || data.from || data.author || ''
      const senderName = data.sender?.pushname || data.notifyName || data.sender?.name || null
      const content = data.body || data.text || data.caption || null
      const messageType = data.type || (data.mimetype ? 'media' : 'text')
      const mediaUrl = data.mediaUrl || data.deprecatedMms3Url || null
      const msgTimestamp = data.timestamp
        ? new Date(data.timestamp * 1000).toISOString()
        : new Date().toISOString()

      const { error } = await getSupabase().from('whatsapp_messages').insert({
        message_id: messageId,
        chat_id: chatId.replace('@c.us', '').replace('@g.us', ''),
        sender: sender.replace('@c.us', '').replace('@g.us', ''),
        sender_name: senderName,
        direction: isIncoming ? 'incoming' : 'outgoing',
        content,
        message_type: messageType,
        media_url: mediaUrl,
        timestamp: msgTimestamp,
        raw_payload: payload,
      })

      if (error) {
        console.error('Insert error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      return NextResponse.json({ ok: true, event })
    }

    // Non-message events — acknowledge
    return NextResponse.json({ ok: true, event, skipped: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
