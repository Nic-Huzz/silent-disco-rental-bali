# Google Workspace Setup Spec
**Owner:** Huzz (Nic Hurrell)
**Date:** 2026-09-18
**Purpose:** Fix email deliverability across all 3 business domains. Current setup (Resend + Cloudflare email routing) is landing in Gmail spam. Google Workspace gives full Gmail trust.

---

## Goal
Migrate all email sending/receiving to Google Workspace so that:
- Replies to leads land in inbox (not spam)
- All 3 domains managed in one place
- One inbox, send-as from any domain

---

## Domains to migrate
| Domain | Business | Email address |
|---|---|---|
| `nichuzz.com` | Personal / Agent ops | `huzz@nichuzz.com` |
| `buysilentdiscoheadphones.com` | E-commerce sales worldwide | `nic@buysilentdiscoheadphones.com` |
| `silentdiscorentalbali.com` | Bali event rentals | `nic@silentdiscorentalbali.com` |

---

## Plan

### Step 1 — Create Google Workspace account
- Go to: https://workspace.google.com
- Plan: Business Starter ($6 USD/month)
- Primary domain: `nichuzz.com`
- User: `huzz@nichuzz.com`

### Step 2 — Add alias domains
In Google Admin Console (admin.google.com):
- Domains → Add domain → Add as **domain alias**
- Add: `buysilentdiscoheadphones.com`
- Add: `silentdiscorentalbali.com`

### Step 3 — Update DNS for each domain (in Cloudflare)
For **each of the 3 domains**, do the following in Cloudflare DNS:

#### Remove
- Any existing MX records
- Cloudflare Email Routing rules

#### Add Google MX records
| Priority | Value |
|---|---|
| 1 | ASPMX.L.GOOGLE.COM |
| 5 | ALT1.ASPMX.L.GOOGLE.COM |
| 5 | ALT2.ASPMX.L.GOOGLE.COM |
| 10 | ALT3.ASPMX.L.GOOGLE.COM |
| 10 | ALT4.ASPMX.L.GOOGLE.COM |

#### Add SPF record (TXT)
```
Name: @
Value: v=spf1 include:_spf.google.com ~all
```

#### Add DKIM
- Generated in Google Admin → Apps → Gmail → Authenticate email
- Add the TXT record Google gives you to Cloudflare DNS

#### Add DMARC (TXT)
```
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:huzz@nichuzz.com
```

### Step 4 — Configure Send As in Gmail
- Gmail Settings → Accounts → Send mail as
- Add: `nic@buysilentdiscoheadphones.com`
- Add: `nic@silentdiscorentalbali.com`
- Set SMTP: smtp.gmail.com, port 587, your Google credentials

### Step 5 — Test deliverability
- Send test emails from each address to a Gmail inbox
- Run: https://www.mail-tester.com
- Confirm inbox placement (not spam)

---

## What this fixes
- ✅ Full Gmail trust — no more spam
- ✅ One inbox for all 3 domains
- ✅ Send-as any domain when replying to leads
- ✅ Clean SPF/DKIM/DMARC across all domains
- ✅ Cloudflare email routing removed (was causing the issue)

---

## Cost
- $6 USD/month (1 user, Business Starter)
- No extra charge for additional domains

---

## Notes for the agent executing this
- All 3 domains are currently on Cloudflare — DNS access is already available
- Do NOT delete Cloudflare routing until Google MX records are live and tested
- DNS propagation can take up to 48hrs but usually under 1hr on Cloudflare
- Resend (used for automated/bulk emails) can remain — just update sending domain authentication after migration

---

## Gmail API + OAuth — Agent Email Sending

Once Google Workspace is live, the AI agent can send emails directly via Gmail API (not Resend). This is the cleanest setup — emails look 100% human, full inbox trust, replies land in Gmail.

### How it works
- Agent connects to Gmail via Gmail API + OAuth
- Huzz authorises once — agent gets a persistent token
- Agent can send from `nic@buysilentdiscoheadphones.com` or any alias
- Emails appear sent from actual Gmail — identical to a human sending

This is how tools like Instantly, Lemlist, and Smartlead work under the hood.

### What it takes to set up
1. Google Workspace live (Step 1–4 above)
2. Enable Gmail API in Google Cloud Console (free)
3. Create OAuth 2.0 credentials (Client ID + Secret)
4. Huzz authorises the agent once via OAuth flow
5. Agent stores refresh token — sends forever without re-auth

### Gmail sending limits
- Google Workspace Business Starter: **2,000 emails/day**
- More than enough for lead sequences and invoices

### Full email setup once live

| Task | How |
|---|---|
| Email sequences to leads | Agent → via Gmail API |
| Replies to warm leads | Huzz → Gmail directly |
| Invoices / quotes | Agent → via Gmail API |
| Bulk cold outreach | Resend (separate sending reputation) |

### Notes for the agent executing this
- Gmail API docs: https://developers.google.com/gmail/api
- Enable API at: https://console.cloud.google.com
- Scopes needed: `gmail.send`, `gmail.compose`
- OAuth type: Web application (with redirect URI for the agent's auth flow)
- Store refresh token securely in environment variables (not hardcoded)
