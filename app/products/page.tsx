import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2, KeyRound, LockKeyhole, ScanSearch, ShieldAlert, ShieldCheck, ShieldEllipsis, Workflow } from "lucide-react"

import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Products | Control Layers for Lead and Data Risk | VishnuLabs",
  description: "See where revenue or data leaves the system. Start with the leak, prove the fix, then expand only where needed.",
  alternates: {
    canonical: "/products",
  },
}

const productSurfaces = [
  {
    icon: ShieldAlert,
    title: "Lead capture breakdowns",
    detail: "Find where inbound demand dies first: weak intake, slow follow-up, missing routing, or silent handoff failure.",
    bullets: ["Stop lead loss at entry", "See where the handoff breaks", "Restore control before demand cools"],
  },
  {
    icon: KeyRound,
    title: "Dependency risk",
    detail: "Stabilize the third-party tools, credentials, and external services that quietly turn into operating risk.",
    bullets: ["Catch integration failure early", "Control retries and fallback paths", "Make recovery visible"],
  },
  {
    icon: ScanSearch,
    title: "Sensitive data paths",
    detail: "Protect customer records and internal state from bad writes, broken prompts, duplicate events, and missing audit trails.",
    bullets: ["Validate before writes", "Block uncontrolled data movement", "Keep a clean review trail"],
  },
  {
    icon: Workflow,
    title: "Workflow control",
    detail: "Fix the internal tools, API-connected paths, and automations teams depend on when revenue is already moving through the system.",
    bullets: ["Protect internal apps too", "Apply one control model", "Scale after the fix is proven"],
  },
]

const collectionCards = [
  {
    icon: LockKeyhole,
    title: "System stabilization",
    summary: "Stops weak validation, silent failure, and bad state changes before they spread downstream.",
    cta: "/pricing",
    ctaLabel: "View pricing",
  },
  {
    icon: ShieldCheck,
    title: "Sentinel",
    summary: "Blocks sensitive data from leaving AI tools without policy, visibility, or audit control.",
    cta: "/sentinel",
    ctaLabel: "Open Sentinel",
  },
  {
    icon: Workflow,
    title: "Operational workflows",
    summary: "Fix follow-up, reminders, routing, and handoffs where revenue is already leaking.",
    cta: "/services",
    ctaLabel: "See rollout",
  },
  {
    icon: ShieldEllipsis,
    title: "Enterprise rollout",
    summary: "Audit first. Pilot next. Expand only after the failure mode is proven closed.",
    cta: "https://cal.com/vishnuvardhanburri/15min",
    ctaLabel: "Book review",
  },
]

const whyItMatters = [
  "Failure usually starts with one weak handoff, not one dramatic outage.",
  "The risky event is often small: one missed follow-up, one bad write, one uncontrolled prompt.",
  "We close that gap before it turns into lost revenue, exposure, or cleanup work.",
]

export default function ProductsPage() {
  return (
      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#edf4ff_40%,#f8fbff_100%)] pb-12 pt-28 sm:pb-16 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="dark-panel-solid p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Coverage map
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  See where revenue or data leaves the system.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  Missed intake. Weak follow-up. Uncontrolled AI use. Start with the leak. Then close it.
                </p>

                <div className="mt-6 rounded-[26px] border border-white/12 bg-white/[0.05] px-4 py-4">
                  <p className="text-sm font-medium text-white">This is not for early-stage teams experimenting.</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    This is for companies already operating with real data and revenue.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AuditCtaButton trackingSource="products_hero_cta" className="h-12 px-7 text-sm sm:h-14 sm:px-8 sm:text-base">
                    Get Free System Audit
                    <ArrowRight className="h-4 w-4" />
                  </AuditCtaButton>
                </div>
                <p className="mt-4 text-sm text-slate-300">Limited onboarding capacity. No long-term contracts.</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Core promise", value: "One control model across lead flow, workflow execution, and data risk." },
                    { label: "What it removes", value: "Fragile handoffs, missed follow-up, and manual rescue work." },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-sm leading-7 text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="light-panel-solid p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Quick collection view</p>
                    <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                      A buyer map, not a product catalog.
                    </h2>
                  </div>
                  <div className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 sm:max-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Typical entry</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">$1.5K audit → $7.5K pilot</p>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/marketing/sentinel-shield/final_hero_shot.png"
                    alt="VishnuLabs system coverage surface"
                    width={1200}
                    height={760}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  {whyItMatters.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-slate-200 bg-white px-4 py-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/90 bg-white p-6 shadow-[0_18px_46px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Collection</p>
                  <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    One control layer. Deployed where failure starts.
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  This is not separate software for every problem. It is one operating model deployed across the places where lead loss,
                  data exposure, and workflow failure usually begin.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {collectionCards.map((item) => {
                  const Icon = item.icon

                  return (
                    <article key={item.title} className="light-panel-solid p-5 sm:p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="mt-6 h-11 w-full rounded-full border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                      >
                        <a href={item.cta}>
                          {item.ctaLabel}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/90 bg-white/98 p-6 shadow-[0_18px_46px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Where failure starts</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                The work follows the system wherever leads, private information, or critical dependencies slip out of control.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Buyers do not need a long catalog. They need to know whether the risk is in intake, AI usage, internal tools, customer
                records, or API-connected workflows. This page answers that quickly.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {productSurfaces.map((item) => {
                  const Icon = item.icon

                  return (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                      <div className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </article>
                  )
                })}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <TestimonialCard testimonial={testimonials.jonas} />
                <TestimonialCard testimonial={testimonials.noah} />
              </div>
              <p className="mt-6 text-sm text-slate-600">Most teams start with pilot. Full deployment follows once the fix is proven.</p>
            </div>
          </div>
        </section>
      </main>
  )
}
