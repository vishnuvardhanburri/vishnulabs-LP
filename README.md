# VishnuLabs Website

Production website for VishnuLabs (Next.js + Tailwind) with automation services, demo content, and commerce flow for the Stealth Vault offer.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Stripe Checkout (card payments)
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

## New Stealth Vault Flow
### Page routes
- `/stealth-vault`
- `/stealth-vault/success`
- `/stealth-vault/guide`
- `/guides/stealth-vault-installation-guide.pdf`

### API routes
- `POST /api/checkout/stealth-vault`
- `POST /api/webhooks/stripe`
- `POST /api/contact/stealth-vault`

### Checkout behavior
1. User fills company/email/phone/business type on `/stealth-vault`.
2. Card payment runs through Stripe Checkout for `$15,000`.
3. On payment success, Stripe webhook triggers:
   - Customer email with license key + Loom link + installation guide PDF link.
   - Internal notification to `hello@vishnulabs.com`.
4. Customization form sends request to `hello@vishnulabs.com`.

## Required Environment Variables
Use `.env.example`.

Critical vars:
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Optional:
- `NEXT_PUBLIC_PAYONEER_PAYMENT_URL`
- `NEXT_PUBLIC_PAYONEER_EMAIL`
- `STEALTH_VAULT_LOOM_URL`
- `STEALTH_VAULT_GUIDE_URL`
- `STEALTH_VAULT_LICENSE_SALT`

## Stripe Webhook Setup
Create webhook endpoint in Stripe Dashboard:
- URL: `https://vishnulabs.com/api/webhooks/stripe`
- Event: `checkout.session.completed`

Copy webhook secret into `STRIPE_WEBHOOK_SECRET`.

## Notes
- Homepage hero includes a new badge linking to `/stealth-vault`.
- Navbar/Footer include Stealth Vault navigation.
- Payoneer is included as alternate payment path:
  - primary: `NEXT_PUBLIC_PAYONEER_PAYMENT_URL`
  - fallback: mail request to `vishnuvardanbirri19@gmail.com`
