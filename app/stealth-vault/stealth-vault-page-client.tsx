"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Mail,
  PhoneCall,
  ShieldCheck,
  Siren,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type ContactFormState = {
  name: string
  email: string
  phone: string
  message: string
}

type TrackPayload = Record<string, string | number | boolean>

const defaultContactForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const featureList = [
  "100% air-gapped & local - no data ever leaves your office",
  "Autonomous 24/7 watchdog - auto-scans/redacts on file drop",
  "Surgical redaction - PII/secrets masked before AI sees them",
  "Offline secure search - simple CLI query for instant answers",
  "Critical alerts - email/Slack on high risk (once/day max)",
  'Monthly ROI email report - "Blocked X leaks, saved Y hours"',
]

const licensePoints = [
  "$15,000 one-time lifetime license (firm-wide, unlimited installs/users)",
  "Lifetime free updates every 6 months",
  "1-month free support after delivery (fix bugs/issues from our side)",
  "Optional ongoing support after 1 month",
]

const paymentDeliverables = ["Invoice", "Loom demo", "Installation guide", "License key", "Setup call"]

const trustVerticals = ["Personal Injury Law", "Family Law", "Outpatient Clinics", "Mortgage Advisory"]

const PAYPAL_ME_URL = "https://paypal.me/vishnuvardhanburri?locale.x=en_GB&country.x=IN"
const DEFAULT_PAYONEER_EMAIL = "vishnuvardanbirri19@gmail.com"

function trackStealthVaultEvent(eventName: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag

  if (typeof gtag !== "function") return

  gtag("event", eventName, {
    event_category: "stealth_vault",
    event_label: window.location.pathname,
    ...payload,
  })
}

export function StealthVaultPageClient() {
  const [contactForm, setContactForm] = useState<ContactFormState>(defaultContactForm)
  const [contactLoading, setContactLoading] = useState(false)
  const [contactState, setContactState] = useState<"idle" | "success" | "error">("idle")
  const [contactError, setContactError] = useState("")

  const payoneerEmail = process.env.NEXT_PUBLIC_PAYONEER_EMAIL || DEFAULT_PAYONEER_EMAIL

  const payoneerRequestMailto = useMemo(() => {
    const subject = encodeURIComponent("Payment Request - Stealth-Mode Internal AI Vault ($15,000)")
    const body = encodeURIComponent(
      "Hi VishnuLabs, we want to purchase the Stealth-Mode Internal AI Vault for $15,000. Please share the payment request and onboarding steps.",
    )
    return `mailto:${payoneerEmail}?subject=${subject}&body=${body}`
  }, [payoneerEmail])

  useEffect(() => {
    trackStealthVaultEvent("stealth_vault_page_view")
  }, [])

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    trackStealthVaultEvent("stealth_vault_contact_submit_attempt")
    setContactLoading(true)
    setContactState("idle")
    setContactError("")

    try {
      const response = await fetch("/api/contact/stealth-vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        setContactState("error")
        setContactError(data.error || "Unable to send message right now.")
        trackStealthVaultEvent("stealth_vault_contact_submit_error", {
          error_type: "api_error",
          response_status: response.status,
        })
        return
      }

      setContactForm(defaultContactForm)
      setContactState("success")
      trackStealthVaultEvent("stealth_vault_contact_submit_success")
    } catch {
      setContactState("error")
      setContactError("Unexpected error while sending your message.")
      trackStealthVaultEvent("stealth_vault_contact_submit_error", {
        error_type: "unexpected_error",
      })
    } finally {
      setContactLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-28 text-slate-100 sm:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(249,115,22,0.26),transparent_38%),radial-gradient(circle_at_84%_12%,rgba(234,88,12,0.2),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200">
          <BadgeCheck className="h-3.5 w-3.5 text-orange-400" />
          Trusted by law firms & clinics across the US
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
            <h1 className="text-balance text-[1.95rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[2.55rem] lg:text-[3.1rem]">
              Stealth-Mode Internal AI Vault - 100% Private & Leak-Proof AI
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Stop data leaks from ChatGPT/Claude. Local, air-gapped AI that auto-redacts PII/secrets, remembers all files, answers
              offline in 2 seconds. One-time $15,000 lifetime license - no monthly fees.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {featureList.map((feature) => (
                <div key={feature} className="rounded-xl border border-white/15 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                    <span>{feature}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {trustVerticals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-300/30 bg-orange-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-orange-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.42)] hover:bg-orange-400"
              >
                <a
                  href={PAYPAL_ME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="stealth_vault_paypal_click_hero"
                  onClick={() => trackStealthVaultEvent("stealth_vault_paypal_click", { source: "hero" })}
                >
                  Pay $15,000 Now
                </a>
              </Button>

              <Button asChild variant="outline" className="h-11 rounded-full border-white/25 bg-transparent px-6 text-sm text-white hover:bg-white/10">
                <a href="/book" data-track="stealth_vault_book_call_click_hero" onClick={() => trackStealthVaultEvent("stealth_vault_book_call_click", { source: "hero" })}>
                  Book Setup Call
                </a>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-2xl border border-orange-300/30 bg-orange-500/10 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.28)]">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
                <ShieldCheck className="h-4 w-4" />
                Why Buy Now
              </p>
              <p className="mt-3 text-sm leading-relaxed text-orange-50">
                Worried about data leaks from everyday AI usage? This is your private alternative. Keep AI speed, remove public-cloud leak
                exposure, and keep full ownership inside your office.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Pricing & License</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white">$15,000</p>
              <p className="text-sm text-slate-300">One-time lifetime license</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {licensePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-xl border border-white/15 bg-slate-900/70 p-3 text-sm text-slate-200">
                Avoid compliance penalties and reclaim associate hours. Typical buyer target is reducing manual review load by $5k-$20k/month.
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <Mail className="h-4 w-4 text-orange-400" />
              Payment Options
            </p>

            <div className="mt-4 grid gap-3">
              <a
                href={PAYPAL_ME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="stealth_vault_paypal_click_payment"
                onClick={() => trackStealthVaultEvent("stealth_vault_paypal_click", { source: "payment_block" })}
                className="inline-flex w-full items-center justify-between rounded-xl border border-orange-300/35 bg-orange-500/15 px-4 py-3 text-sm font-semibold text-orange-50 transition-colors hover:bg-orange-500/25"
              >
                <span>PayPal: Pay $15,000 Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={payoneerRequestMailto}
                data-track="stealth_vault_payoneer_click"
                onClick={() => trackStealthVaultEvent("stealth_vault_payoneer_click")}
                className="inline-flex w-full items-center justify-between rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-800"
              >
                <span>Payoneer: {payoneerEmail}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-4 rounded-xl border border-white/15 bg-slate-900/70 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">After payment, what happens:</p>
              <p className="mt-2">
                After payment, we manually send invoice, Loom demo, installation guide, license key, and setup call within 24 hours.
              </p>
              <p className="mt-2">You will also receive confirmation mail from hello@vishnulabs.com.</p>
              <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                {paymentDeliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5" id="vault-contact">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <Sparkles className="h-4 w-4 text-orange-400" />
              Customizations & Questions
            </p>

            <p className="mt-3 text-sm text-slate-300">
              For customizations or questions, email <a className="underline underline-offset-2" href="mailto:hello@vishnulabs.com" data-track="stealth_vault_email_click">hello@vishnulabs.com</a>. You can also book a direct call for urgent setup planning.
            </p>

            <form onSubmit={handleContactSubmit} className="mt-4 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm text-slate-300">
                  Name
                  <input
                    value={contactForm.name}
                    onChange={(event) => setContactForm((prev) => ({ ...prev, name: event.target.value }))}
                    required
                    className="h-11 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
                  />
                </label>

                <label className="grid gap-1.5 text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => setContactForm((prev) => ({ ...prev, email: event.target.value }))}
                    required
                    className="h-11 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
                  />
                </label>
              </div>

              <label className="grid gap-1.5 text-sm text-slate-300">
                Phone
                <input
                  value={contactForm.phone}
                  onChange={(event) => setContactForm((prev) => ({ ...prev, phone: event.target.value }))}
                  required
                  className="h-11 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
                />
              </label>

              <label className="grid gap-1.5 text-sm text-slate-300">
                Message
                <textarea
                  value={contactForm.message}
                  onChange={(event) => setContactForm((prev) => ({ ...prev, message: event.target.value }))}
                  required
                  rows={4}
                  className="rounded-lg border border-white/20 bg-slate-900/70 px-3 py-2.5 text-sm text-white outline-none focus:border-orange-400"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  disabled={contactLoading}
                  data-track="stealth_vault_contact_submit_click"
                  className="h-11 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-400 disabled:opacity-70"
                >
                  {contactLoading ? "Sending..." : "Send Request"}
                </Button>

                <Button asChild variant="outline" className="h-11 rounded-full border-white/25 bg-transparent px-6 text-sm text-white hover:bg-white/10">
                  <a href="/book" data-track="stealth_vault_book_call_click_form" onClick={() => trackStealthVaultEvent("stealth_vault_book_call_click", { source: "form_block" })} className="inline-flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    Call / Book Meeting
                  </a>
                </Button>
              </div>

              {contactState === "success" ? (
                <p className="rounded-lg border border-emerald-400/35 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                  Message sent. VishnuLabs will reply from hello@vishnulabs.com.
                </p>
              ) : null}

              {contactState === "error" ? (
                <p className="flex items-start gap-2 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  <AlertTriangle className="mt-0.5 h-4 w-4" />
                  {contactError || "Request failed. Please try again."}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-slate-200">
          <p className="inline-flex items-start gap-2 font-semibold text-white">
            <Siren className="mt-0.5 h-4 w-4 text-orange-400" />
            Security-first teams move now, not after a leak.
          </p>
          <p className="mt-2 leading-relaxed text-slate-300">
            Public AI tools are useful, but confidential legal and clinical workflows need an internal vault with deterministic controls.
            VishnuLabs builds the secure path so your team can keep speed without exposing sensitive data.
          </p>
        </div>
      </div>
    </section>
  )
}
