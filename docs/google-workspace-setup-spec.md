# Google Workspace Setup Spec
**Owner:** Huzz (Nic)  
**Date:** 2026-09-18  
**Priority:** High — active leads going to spam, revenue at risk

---

## Objective
Migrate all business email from Cloudflare Email Routing + Resend to Google Workspace to fix Gmail deliverability. Leads replying to sales outreach are landing in spam — this is not acceptable for an active sales pipeline.

---

## Current Setup (broken)
- Email routing via **Cloudflare Email Routing** for all 3 domains
- Outbound sending via **Resend**
- Gmail is flagging emails as spam due to Cloudflare forwarding chain appearing bot-like
- DMARC not fully configured

---

## Target Setup

### Google Workspace Plan
- **Plan:** Business Starter
- **Cost:** $6 USD/month (1 user)
- **User:** 1 (Huzz/Nic)

### Email Accounts
| Email Address | Domain Role | Used For |
|---|---|---|
| `huzz@nichuzz.com` | Primary domain | Personal / general |
| `nic@buysilentdiscoheadphones.com` | Alias domain | Worldwide headset sales leads |
| `nic@silentdiscorentalbali.com` | Alias domain | Bali rental event leads |

All three addresses route to **one Gmail inbox**. Can send-as any of the three when replying.

---

## DNS Changes Required (Cloudflare)

All 3 domains are on **Cloudflare DNS**. For each domain, the following changes are needed:

### Step 1 — Remove Cloudflare Email Routing
- Disable Cloudflare Email Routing for each domain
- Delete any existing Cloudflare email routing MX records

### Step 2 — Add Google MX Records
Add the following MX records for **each domain**:

| Type | Name | Value | Priority |
|---|---|---|---|
| MX | @ | aspmx.l.google.com | 1 |
| MX | @ | alt1.aspmx.l.google.com | 5 |
| MX | @ | alt2.aspmx.l.google.com | 5 |
| MX | @ | alt3.aspmx.l.google.com | 10 |
| MX | @ | alt4.aspmx.l.google.com | 10 |

### Step 3 — Add SPF Record
For each domain, add/update TXT record:
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all
```

### Step 4 — Add DKIM
- In Google Workspace Admin → Apps → Gmail → Authenticate email
- Generate DKIM key for each domain
- Add the TXT record Google provides to Cloudflare DNS for each domain

### Step 5 — Add DMARC
For each domain:
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:huzz@nichuzz.com
```

---

## Google Workspace Admin Steps

1. Sign up at workspace.google.com → Business Starter
2. Set **nichuzz.com** as primary domain
3. Verify domain ownership (Google gives you a TXT record to add to Cloudflare)
4. Add `buysilentdiscoheadphones.com` as alias domain → verify
5. Add `silentdiscorentalbali.com` as alias domain → verify
6. In Gmail settings → "Send mail as" → add all 3 addresses
7. Set default "send as" per context (optional)

---

## What Resend is Used For
- Resend was used for outbound sales emails
- Post-migration: **manual replies go from Gmail directly** (no Resend in the chain)
- Resend can remain for bulk/automated sequences if needed, but all lead replies must go direct from Gmail

---

## Success Criteria
- [ ] All 3 domains verified in Google Workspace
- [ ] MX, SPF, DKIM, DMARC records live on Cloudflare for all 3 domains
- [ ] Can send and receive from all 3 addresses in one Gmail inbox
- [ ] Test email to hurrellnic@gmail.com lands in **inbox** (not spam)
- [ ] Run mail-tester.com → score 9+/10

---

## Notes
- Do NOT cancel Cloudflare email routing until Google MX records are live and verified (to avoid email downtime)
- DNS propagation can take up to 48hrs but usually under 1hr on Cloudflare
- Google Workspace free trial is 14 days — start immediately
