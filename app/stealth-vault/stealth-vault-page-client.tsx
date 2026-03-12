"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  Calculator,
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
  website: string
}

type TrackPayload = Record<string, string | number | boolean>
type CountdownState = {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

const defaultContactForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
}

const featureList = [
  "100% air-gapped & local – no data ever leaves your office",
  "Autonomous 24/7 watchdog – auto-scans/redacts on file drop",
  "Surgical redaction – PII/secrets masked before AI sees them",
  "Offline secure search – simple CLI query for instant answers",
  "Critical alerts – email/Slack on high risk (once/day max)",
  'Monthly ROI email report – "Blocked X leaks, saved Y hours"',
]

const trustVerticals = ["Personal Injury Law", "Family Law", "Outpatient Clinics", "Mortgage Advisory"]

const PAYONEER_EMAIL = "vishnuvardhanburri19@gmail.com"
const TIER_ONE_PAYMENT_HREF = `mailto:${PAYONEER_EMAIL}?subject=Sentinel%20Shield%20Payment%20-%20Tier%201%20-%20%2415%2C000`
const TIER_TWO_PAYMENT_HREF = `mailto:${PAYONEER_EMAIL}?subject=Sentinel%20Shield%20Payment%20-%20Tier%202%20-%20%2410%2C000%20%2B%20%241%2C000%2Fmo`
const LIMITED_OFFER_END = new Date("2026-03-31T23:59:59+05:30").getTime()

const pricingTiers = [
  {
    name: "Tier 1 – Lifetime License",
    eyebrow: "Recommended",
    price: "$15,000",
    summary: "$15,000 one-time payment",
    ctaLabel: "Pay $15,000 Lifetime Now",
    ctaHref: TIER_ONE_PAYMENT_HREF,
    points: [
      "Launch offer reserved for the first 100 members",
      "Lifetime license (firm-wide, unlimited installs/users)",
      "Lifetime free updates every 6 months",
      "1-month free support after delivery (we fix bugs/issues from our side)",
      "Optional ongoing support after 1 month",
    ],
  },
  {
    name: "Tier 2 – Lower Upfront + Monthly Support",
    eyebrow: "Flexible",
    price: "$10,000",
    summary: "$10,000 one-time payment + $1,000/month maintenance & support",
    ctaLabel: "Pay $10,000 + $1,000/mo Now",
    ctaHref: TIER_TWO_PAYMENT_HREF,
    points: [
      "Same full product + lifetime updates",
      "Ongoing priority support (we monitor, fix, keep it running)",
      "Lower upfront cost with retained monthly maintenance",
    ],
  },
]

const proofStats = [
  {
    label: "Air-gap status",
    value: "100%",
    detail: "Zero outbound network leakage across the vault environment.",
  },
  {
    label: "Runtime response",
    value: "2 sec",
    detail: "Offline answers pulled from local knowledge and prior file memory.",
  },
  {
    label: "Alert posture",
    value: "24/7",
    detail: "Watchdog monitors file drops, redacts, logs, and throttles alerts.",
  },
]

const recentFindings = [
  {
    title: "AWS Secret Detected",
    age: "2m ago",
    severity: "High",
    detail: "Masked before archive and secured inside the vault.",
  },
  {
    title: "Unmasked PII Found",
    age: "1h ago",
    severity: "Medium",
    detail: "SSN pattern intercepted and redacted before model access.",
  },
  {
    title: "SSH Key Exposed",
    age: "4h ago",
    severity: "Critical",
    detail: "Outbound risk blocked and operator notified once for the day.",
  },
]

const alertLogLines = [
  "[INFO] Guardian maintenance: rotating logs and verifying disk health...",
  "[INFO] Fetching all recognizers for language en",
  "[WARNING] SYSTEM RISK: /Users/ops/.zsh_history (Risk: 7.0)",
  "[CRITICAL] CRITICAL LEAK BLOCKED: handover_test.txt | Risk: 10.00 | Detected: ['AWS Token', 'Secret Key', 'PII (SSN)']",
  "[INFO] Throttling outbound alert for handover_test.txt (Already sent one today)",
  "[INFO] Report cycle check: 0 days since last report (Goal: 1)",
]

const SALES_EMAIL = "hello@vishnulabs.com"
const PRODUCT_PRICE = 15000

function trackEvent(eventName: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag

  if (typeof gtag !== "function") return

  gtag("event", eventName, {
    event_category: "funnel",
    event_label: window.location.pathname,
    path: window.location.pathname,
    ...payload,
  })
}

function formatUsd(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
}

function getCountdownState(targetTime: number): CountdownState {
  const diff = targetTime - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, expired: false }
}

export function StealthVaultPageClient() {
  const [contactForm, setContactForm] = useState<ContactFormState>(defaultContactForm)
  const [contactLoading, setContactLoading] = useState(false)
  const [contactState, setContactState] = useState<"idle" | "success" | "error">("idle")
  const [contactError, setContactError] = useState("")
  const [countdown, setCountdown] = useState<CountdownState>(() => getCountdownState(LIMITED_OFFER_END))

  const [teamMembers, setTeamMembers] = useState(8)
  const [hourlyRate, setHourlyRate] = useState(60)
  const [hoursSavedPerMember, setHoursSavedPerMember] = useState(12)
  const [incidentsPrevented, setIncidentsPrevented] = useState(2)

  const paymentHelpPoints = useMemo(
    () => [
      `Payoneer: Send to ${PAYONEER_EMAIL} (USD account)`,
      "Tier 1 is reserved for the first 100 members or until the 20-day launch window closes",
      "Personal follow-up only after payment",
      "For customizations or questions, email hello@vishnulabs.com",
    ],
    [],
  )

  const monthlyLaborSavings = Math.max(teamMembers, 0) * Math.max(hourlyRate, 0) * Math.max(hoursSavedPerMember, 0)
  const monthlyRiskProtection = Math.max(incidentsPrevented, 0) * 1500
  const monthlyValue = monthlyLaborSavings + monthlyRiskProtection
  const paybackMonths = PRODUCT_PRICE / Math.max(monthlyValue, 1)

  useEffect(() => {
    trackEvent("funnel_stealth_page_view")
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState(LIMITED_OFFER_END))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    trackEvent("funnel_stealth_form_submit_attempt")
    setContactLoading(true)
    setContactState("idle")
    setContactError("")

    try {
      const response = await fetch("/api/contact/stealth-vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contactForm,
          source: "stealth_vault_page",
          page: "/stealth-vault",
        }),
      })

      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        setContactState("error")
        setContactError(data.error || "Unable to send message right now.")
        trackEvent("funnel_stealth_form_submit_error", {
          error_type: "api_error",
          response_status: response.status,
        })
        return
      }

      setContactForm(defaultContactForm)
      setContactState("success")
      trackEvent("funnel_stealth_form_submit_success")
    } catch {
      setContactState("error")
      setContactError("Unexpected error while sending your message.")
      trackEvent("funnel_stealth_form_submit_error", {
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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200" data-reveal>
          <BadgeCheck className="h-3.5 w-3.5 text-orange-400" />
          Trusted by law firms & clinics across the US
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8" data-reveal>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-100">
              Limited-time lifetime license for first 100 members
            </div>
            <h1 className="text-balance text-[1.95rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[2.55rem] lg:text-[3.1rem]">
              Stealth-Mode Internal AI Vault – 100% Private & Leak-Proof AI
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Stop data leaks from ChatGPT/Claude. Local, air-gapped AI that auto-redacts PII/secrets, remembers all files, answers offline in 2 seconds.
            </p>

            <div className="mt-5 rounded-2xl border border-orange-300/25 bg-black/30 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-100">Grab offer</p>
                  <p className="mt-1 text-sm text-slate-200">
                    Limited-time one-time lifetime license at $15,000 for the first 100 members. Offer closes in 20 days or when the first
                    100 slots are filled.
                  </p>
                </div>
                <span className="rounded-full border border-orange-300/25 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
                  First 100 only
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                  { label: "Seconds", value: countdown.seconds },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-center">
                    <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{String(item.value).padStart(2, "0")}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              {countdown.expired ? (
                <p className="mt-3 text-sm text-amber-200">
                  The limited-time lifetime-license window has ended. Contact VishnuLabs for current terms and remaining availability.
                </p>
              ) : null}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {featureList.map((feature) => (
                <div key={feature} className="rounded-xl border border-white/15 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200" data-reveal>
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button
                asChild
                className="min-h-12 rounded-2xl bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.42)] hover:bg-orange-400"
              >
                <a
                  href={TIER_ONE_PAYMENT_HREF}
                  data-track="funnel_stealth_cta_tier_one_click_hero"
                  onClick={() => trackEvent("funnel_stealth_cta_tier_one_click", { source: "hero" })}
                >
                  Pay $15,000 Lifetime Now
                </a>
              </Button>

              <Button asChild variant="outline" className="min-h-12 rounded-2xl border-white/25 bg-transparent px-5 py-3 text-center text-sm text-white hover:bg-white/10">
                <a
                  href={TIER_TWO_PAYMENT_HREF}
                  data-track="funnel_stealth_cta_tier_two_click_hero"
                  onClick={() => trackEvent("funnel_stealth_cta_tier_two_click", { source: "hero" })}
                >
                  Pay $10,000 + $1,000/mo Now
                </a>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4" data-reveal>
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
              <div className="mt-4 grid gap-4">
                {pricingTiers.map((tier, index) => (
                  <div
                    key={tier.name}
                    className={
                      index === 0
                        ? "rounded-2xl border border-orange-300/30 bg-orange-500/10 p-4"
                        : "rounded-2xl border border-white/12 bg-slate-900/70 p-4"
                    }
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">{tier.eyebrow}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{tier.name}</p>
                      </div>
                      {index === 0 ? (
                        <span className="rounded-full border border-orange-300/25 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
                          First 100 + 20 days
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-4 text-3xl font-bold tracking-tight text-white">{tier.price}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{tier.summary}</p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-200">
                      {tier.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2" data-reveal>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:col-span-2">
            <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <article className="rounded-[28px] border border-white/12 bg-slate-900/70 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                      <ShieldCheck className="h-4 w-4 text-orange-400" />
                      Live product proof
                    </p>
                    <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
                      Buyers can inspect the vault, not just hear the pitch.
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Real screenshots
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                  Security sidebar, risk chart, recent findings, Ingest control, compliance export, and live operator prompts are shown
                  from the actual product screens. This keeps the sales story grounded in visible proof.
                </p>

                <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-black">
                  <Image
                    src="/marketing/sentinel-shield/final_hero_shot.png"
                    alt="Stealth vault interface showing a high-risk intercept and local vault response"
                    width={2940}
                    height={1846}
                    priority
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {proofStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="grid gap-6">
                <article className="rounded-[28px] border border-white/12 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Security overview</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        Sidebar navigation, stats, risk propagation chart, recent findings, and Ingest button remain visible.
                      </p>
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                      Dashboard
                    </span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-black">
                    <Image
                      src="/marketing/sentinel-shield/dashboard_v1.png"
                      alt="SentinelVault dashboard with risk chart, recent findings, sidebar, and ingest document button"
                      width={2940}
                      height={1846}
                      sizes="(min-width: 1280px) 32vw, 100vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </article>

                <article className="rounded-[28px] border border-white/12 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Compliance proof</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        Audit-table evidence for redacted files, risk index, archive status, and export-ready operator review.
                      </p>
                    </div>
                    <span className="rounded-full border border-orange-300/20 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
                      Audit ready
                    </span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-black">
                    <Image
                      src="/marketing/sentinel-shield/compliance_proof.png"
                      alt="Compliance view with timestamped audit log export and archived file statuses"
                      width={2940}
                      height={1846}
                      sizes="(min-width: 1280px) 32vw, 100vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:col-span-2">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <article className="rounded-[28px] border border-white/12 bg-slate-900/70 p-4 sm:p-5">
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                  <Siren className="h-4 w-4 text-orange-400" />
                  Proof alert logs
                </p>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
                  Alert output that shows the vault is actually catching things.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  This is the trust layer buyers need: visible leak interception, recognizer scans, throttled outbound alerts, and
                  report-cycle logging from the running environment.
                </p>

                <div className="mt-5 overflow-hidden rounded-[24px] border border-emerald-500/25 bg-black">
                  <Image
                    src="/marketing/sentinel-shield/terminal_demo.png"
                    alt="Terminal proof showing air-gapped vault status and secure offline query results"
                    width={2940}
                    height={1846}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </article>

              <div className="grid gap-6">
                <article className="rounded-[28px] border border-white/12 bg-slate-900/70 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Recent findings</p>
                  <div className="mt-4 grid gap-3">
                    {recentFindings.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-black/45 p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-white">{item.title}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.age}</p>
                          </div>
                          <span
                            className={
                              item.severity === "Critical"
                                ? "rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-200"
                                : item.severity === "High"
                                  ? "rounded-full border border-orange-300/20 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100"
                                  : "rounded-full border border-amber-300/20 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100"
                            }
                          >
                            {item.severity}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[28px] border border-white/12 bg-slate-900/70 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Runtime signal feed</p>
                  <div className="mt-4 rounded-[24px] border border-white/10 bg-black/70 p-4 font-mono text-[12px] leading-6">
                    {alertLogLines.map((line) => (
                      <p
                        key={line}
                        className={
                          line.includes("[CRITICAL]")
                            ? "text-orange-300"
                            : line.includes("[WARNING]")
                              ? "text-amber-200"
                              : "text-emerald-200"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <Mail className="h-4 w-4 text-orange-400" />
              Payoneer Only
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">Payoneer: Send to vishnuvardhanburri19@gmail.com (USD account)</p>

            <div className="mt-4 grid gap-3">
              <a
                href={TIER_ONE_PAYMENT_HREF}
                data-track="funnel_stealth_cta_tier_one_click_payment"
                onClick={() => trackEvent("funnel_stealth_cta_tier_one_click", { source: "payment_block" })}
                className="inline-flex w-full items-center justify-between rounded-xl border border-orange-300/35 bg-orange-500/15 px-4 py-3 text-sm font-semibold text-orange-50 transition-colors hover:bg-orange-500/25"
              >
                <span>Pay $15,000 Lifetime Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={TIER_TWO_PAYMENT_HREF}
                data-track="funnel_stealth_cta_tier_two_click_payment"
                onClick={() => trackEvent("funnel_stealth_cta_tier_two_click", { source: "payment_block" })}
                className="inline-flex w-full items-center justify-between rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-800"
              >
                <span>Pay $10,000 + $1,000/mo Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-4 rounded-xl border border-white/15 bg-slate-900/70 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Manual follow-up after payment:</p>
              <p className="mt-2">
                After payment, we manually send invoice, Loom demo link, installation guide, license key, and setup call booking within
                24 hours. No auto-emails — personal follow-up only.
              </p>
              <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                {paymentHelpPoints.map((item) => (
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
              For customizations or questions, email{" "}
              <a className="underline underline-offset-2" href="mailto:hello@vishnulabs.com" data-track="funnel_stealth_cta_email_click">
                hello@vishnulabs.com
              </a>
              .
            </p>

            <form onSubmit={handleContactSubmit} className="mt-4 grid gap-3">
              <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0" aria-hidden>
                <label>
                  Website
                  <input
                    type="text"
                    value={contactForm.website}
                    onChange={(event) => setContactForm((prev) => ({ ...prev, website: event.target.value }))}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </label>
              </div>

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
                  data-track="funnel_stealth_form_submit_click"
                  className="h-11 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-400 disabled:opacity-70"
                >
                  {contactLoading ? "Sending..." : "Send Request"}
                </Button>

                <Button asChild variant="outline" className="h-11 rounded-full border-white/25 bg-transparent px-6 text-sm text-white hover:bg-white/10">
                  <a
                    href="/book"
                    data-track="funnel_stealth_cta_book_call_click_form"
                    onClick={() => trackEvent("funnel_stealth_cta_book_call_click", { source: "form_block" })}
                    className="inline-flex items-center gap-2"
                  >
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

        <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5" data-reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            <Calculator className="h-4 w-4 text-orange-400" />
            ROI Calculator (Estimate)
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <label className="grid gap-1 text-xs text-slate-300">
              Team members using AI
              <input
                type="number"
                min={1}
                value={teamMembers}
                onChange={(event) => setTeamMembers(Number(event.target.value || 0))}
                className="h-10 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
              />
            </label>
            <label className="grid gap-1 text-xs text-slate-300">
              Avg hourly cost (USD)
              <input
                type="number"
                min={1}
                value={hourlyRate}
                onChange={(event) => setHourlyRate(Number(event.target.value || 0))}
                className="h-10 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
              />
            </label>
            <label className="grid gap-1 text-xs text-slate-300">
              Hours saved / member / month
              <input
                type="number"
                min={1}
                value={hoursSavedPerMember}
                onChange={(event) => setHoursSavedPerMember(Number(event.target.value || 0))}
                className="h-10 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
              />
            </label>
            <label className="grid gap-1 text-xs text-slate-300">
              Leak incidents prevented / month
              <input
                type="number"
                min={0}
                value={incidentsPrevented}
                onChange={(event) => setIncidentsPrevented(Number(event.target.value || 0))}
                className="h-10 rounded-lg border border-white/20 bg-slate-900/70 px-3 text-sm text-white outline-none focus:border-orange-400"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-widest text-slate-400">Monthly labor savings</p>
              <p className="mt-1 text-xl font-semibold text-white">{formatUsd(monthlyLaborSavings)}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-widest text-slate-400">Risk protection value</p>
              <p className="mt-1 text-xl font-semibold text-white">{formatUsd(monthlyRiskProtection)}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/70 p-3">
              <p className="text-[11px] uppercase tracking-widest text-slate-400">Estimated payback</p>
              <p className="mt-1 text-xl font-semibold text-white">{paybackMonths.toFixed(1)} months</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-400">
            Estimator for planning only. Final ROI depends on workflow volume, compliance burden, current manual process, and team behavior.
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-slate-200" data-reveal>
          <p className="inline-flex items-start gap-2 font-semibold text-white">
            <Siren className="mt-0.5 h-4 w-4 text-orange-400" />
            Security-first teams move now, not after a leak.
          </p>
          <p className="mt-2 leading-relaxed text-slate-300">
            Public AI tools are useful, but confidential legal and clinical workflows need an internal vault with deterministic controls.
            VishnuLabs builds the secure path so your team can keep speed without exposing sensitive data.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              asChild
              className="min-h-12 rounded-2xl bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.42)] hover:bg-orange-400"
            >
              <a
                href={TIER_ONE_PAYMENT_HREF}
                data-track="funnel_stealth_cta_tier_one_click_footer"
                onClick={() => trackEvent("funnel_stealth_cta_tier_one_click", { source: "footer" })}
              >
                Pay $15,000 Lifetime Now
              </a>
            </Button>

            <Button asChild variant="outline" className="min-h-12 rounded-2xl border-white/25 bg-transparent px-5 py-3 text-center text-sm text-white hover:bg-white/10">
              <a
                href={TIER_TWO_PAYMENT_HREF}
                data-track="funnel_stealth_cta_tier_two_click_footer"
                onClick={() => trackEvent("funnel_stealth_cta_tier_two_click", { source: "footer" })}
              >
                Pay $10,000 + $1,000/mo Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
