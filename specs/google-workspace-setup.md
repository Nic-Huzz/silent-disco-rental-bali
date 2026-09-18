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
