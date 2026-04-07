# VishnuLabs Website

Production website for VishnuLabs (Next.js + Tailwind) with services, Sentinel product pages, lead capture flows, and enterprise marketing surfaces.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Resend (transactional emails)

## Local Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: `http://localhost:3000`

## Build
```bash
npm run build
npm run start
```

## Core Conversion Flows
### Homepage system audit
- `POST /api/contact/system-audit`
- Stores audit leads, emails the team, and sends an auto-response.

### Sentinel lead capture
- `POST /api/sentinel/lead`
- Stores Sentinel leads, tags intent, emails the team, and sends an auto-response.

## Required Environment Variables
Use `.env.example`.

Critical vars:
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Optional:
- `SYSTEM_AUDIT_EMAIL`
- `SYSTEM_AUDIT_CALENDAR_URL`
- `NEXT_PUBLIC_SYSTEM_AUDIT_CALENDAR_URL`
- `SENTINEL_LEADS_EMAIL`
- `SYSTEM_AUDIT_CALENDAR_URL`
- `SENTINEL_CALENDAR_URL`
- `NEXT_PUBLIC_SENTINEL_CALENDAR_URL`
- `NOTION_TOKEN`
- `NOTION_LEADS_DATABASE_ID`
- `AIRTABLE_TOKEN`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME`

## Notes
- Homepage and Sentinel pages use modal lead capture instead of redirect-first flows.
- Sentinel lives at `/sentinel` with FAQ at `/sentinel/faq`.
- The repo contains both service-led and product-led conversion paths.
