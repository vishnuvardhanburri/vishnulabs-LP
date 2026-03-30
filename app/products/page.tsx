import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2, KeyRound, LockKeyhole, ScanSearch, ShieldAlert, ShieldCheck, ShieldEllipsis, Workflow } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Products | VishnuLabs",
  description: "See where VishnuLabs applies structured backend thinking across fragile workflows, data consistency, and operational load.",
  alternates: {
    canonical: "/products",
  },
}

const productSurfaces = [
  {
    icon: ShieldAlert,
    title: "Failure-prone intake points",
    detail: "Identify where bad inputs, dropped events, and missing validation begin to destabilize the wider system.",
    bullets: ["Stop bad data at the edge", "See where the workflow breaks", "Apply control before problems propagate"],
  },
  {
    icon: KeyRound,
    title: "Critical dependencies",
    detail: "Handle credentials, integrations, and third-party services with explicit safeguards and clearer fallback behavior.",
    bullets: ["Catch dependency risk early", "Control retries and fallback paths", "Record recovery behavior clearly"],
  },
  {
    icon: ScanSearch,
    title: "Data consistency paths",
    detail: "Protect customer records and internal state from inconsistent writes, duplicate events, and broken handoffs.",
    bullets: ["Monitor data transitions", "Validate before writes", "Keep a review trail"],
  },
  {
    icon: Workflow,
    title: "Workflow execution surfaces",
    detail: "Stabilize the internal tools, API-connected paths, and automations that teams depend on every day.",
    bullets: ["Protect internal apps too", "Apply one operating model", "Scale control across surfaces"],
  },
]

const collectionCards = [
  {
    icon: LockKeyhole,
    title: "System stabilization",
    summary: "The layer that restores validation, control, and observability before workflow issues multiply downstream.",
    cta: "/pricing",
    ctaLabel: "View pricing",
  },
  {
    icon: ShieldCheck,
    title: "Structured intake",
    summary: "Keep intake, reception, and routing predictable even when volume rises and edge cases appear.",
    cta: "/automations",
    ctaLabel: "See workflows",
  },
  {
    icon: Workflow,
    title: "Operational workflows",
    summary: "Give teams validated workflows, cleaner state transitions, and fewer manual rescue steps.",
    cta: "/services",
    ctaLabel: "See rollout",
  },
  {
    icon: ShieldEllipsis,
    title: "Scalable architecture",
    summary: "Expand into custom deployment, broader internal coverage, and stronger infrastructure decisions only when needed.",
    cta: "https://cal.com/vishnuvardhanburri/15min",
    ctaLabel: "Book review",
  },
]

const whyItMatters = [
  "System failure usually starts with one weak handoff, not one dramatic outage.",
  "The risky event is often small: one bad payload, one missed retry, one integration edge case.",
  "VishnuLabs exists to stop that small event before it turns into a larger operational problem.",
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />

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
                  One engineering approach. Multiple places where systems usually break down.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  This page is the fast buyer view. Start with the coverage area, then see where the failure is concentrated: intake,
                  dependencies, data consistency, or workflow execution.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                    <a href="https://cal.com/vishnuvardhanburri/15min">
                      Book Review
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-white/14 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/proof">
                      View Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Core promise", value: "Reliable execution without constant operator rescue." },
                    { label: "What it replaces", value: "Fragile workflows, hidden failure modes, and manual recovery." },
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
                      A clearer systems catalog for buyers who need fit fast.
                    </h2>
                  </div>
                  <div className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 sm:max-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Starting ranges</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">$149/mo → enterprise scope</p>
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
                    Start with the core layer, then choose where control needs to show up first.
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  This is not a long list of services. It is one product deployed across the places where teams usually lose control first.
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Where VishnuLabs fits</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                The work follows the system wherever private information, customer data, or critical dependencies can slip out of control.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Clients do not need a big catalog. They need to know whether the risk is in staff prompting, internal tools, customer records,
                or API-connected workflows. This page answers that quickly.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
