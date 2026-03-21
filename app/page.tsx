import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  CircleAlert,
  LockKeyhole,
  MessageSquareMore,
  ShieldCheck,
  Workflow,
} from "lucide-react"

import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { TrustStrip } from "@/components/trust-strip"
import { Button } from "@/components/ui/button"

const demoUrl = "https://cal.com/vishnuvardhanburri/sentinel-shield-poc-demo"
const whatsappDemoUrl = "https://wa.me/919392338269?text=DEMO"

type ProductOffer = {
  icon: LucideIcon
  name: string
  shortLabel: string
  headline: string
  whatItDoes: string
  whoItsFor: string[]
  capabilities: string[]
  usdPricing: string[]
  indiaPricing: string[]
  note: string
  image: string
  imageAlt: string
  tone: "dark" | "light"
}

const productOffers: ProductOffer[] = [
  {
    icon: ShieldCheck,
    name: "Sentinel Shield",
    shortLabel: "High-privacy AI system",
    headline: "Offline voice reception and lead control for teams that cannot risk leaks.",
    whatItDoes:
      "Air-gapped AI voice receptionist and lead manager with real-time PII/PHI redaction, local control, and clear operator visibility.",
    whoItsFor: ["Hospitals", "Clinics", "IVF centers", "Dental groups", "Cosmetic practices", "High-privacy service teams"],
    capabilities: [
      "Offline voice receptionist and lead capture",
      "Real-time PII / PHI redaction before AI handling",
      "Leak prevention, alerting, and audit visibility",
      "Missed-call recovery and lead follow-up logic",
    ],
    usdPricing: ["Starting point: $1,500 for a focused PoC", "Production systems: $5,000-$18,000+"],
    indiaPricing: ["India starting point: INR 1.1L", "India production systems: INR 4L-INR 12L+"],
    note: "Best fit when privacy, compliance, and lead control matter at the same time.",
    image: "/marketing/sentinel-shield/final_hero_shot.png",
    imageAlt: "Sentinel Shield dashboard",
    tone: "dark",
  },
  {
    icon: Workflow,
    name: "Jarvis",
    shortLabel: "Ops automation layer",
    headline: "Task handling, reminders, and follow-up without the usual admin drag.",
    whatItDoes:
      "AI automation assistant for reminders, task handling, basic CRM actions, booking support, and day-to-day workflow follow-through.",
    whoItsFor: ["SMBs", "CAs", "Real estate teams", "Dealerships", "Logistics operators", "Lean operations teams"],
    capabilities: [
      "Task handling and reminder automation",
      "Basic CRM updates and status visibility",
      "Lead follow-up, booking support, and missed-response recovery",
      "Operational handoff that keeps teams moving without more manual chasing",
    ],
    usdPricing: ["Starting point: $1,000 for a focused PoC", "Production systems: $4,000-$15,000+"],
    indiaPricing: ["India starting point: INR 75K-INR 90K", "India production systems: INR 3L-INR 10L+"],
    note: "Best fit when speed, reminders, and operator consistency are the main bottlenecks.",
    image: "/marketing/sentinel-shield/terminal_demo.png",
    imageAlt: "Jarvis workflow interface",
    tone: "light",
  },
]

const outcomeBullets = [
  "No more silent lead drop-off after missed calls or delayed follow-up.",
  "No more guessing where sensitive data goes inside the workflow.",
  "No more manual chasing for reminders, callbacks, or status updates.",
  "No more vague pricing before buyers understand the right scope.",
]

const pricingNotes = [
  "All prices shown are starting points, not final quotes.",
  "Final scope depends on channels, integrations, workflow depth, compliance needs, and support expectations.",
  "US and UK-facing pricing is shown in USD for clarity.",
  "India pricing is quoted separately based on scope and can be shared in INR or USD.",
]

const trustLanes = [
  { label: "Sentinel Shield", value: "privacy-first voice + lead control" },
  { label: "Jarvis", value: "automation, reminders, tasks, and basic CRM flow" },
  { label: "Entry point", value: "low-risk PoCs before larger deployment" },
  { label: "Delivery style", value: "productized where possible, custom where needed" },
]

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="relative pb-12 pt-28 sm:pb-16 sm:pt-34 lg:pb-18" id="top">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-8%] top-20 h-[300px] w-[300px] rounded-full bg-[#4f46e5]/14 blur-[120px] orb-float" />
            <div className="absolute right-[-6%] top-12 h-[340px] w-[340px] rounded-full bg-sky-300/16 blur-[130px] orb-float-slow" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-8">
              <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-45" />

              <div className="relative grid items-start gap-8 lg:grid-cols-[1fr_0.96fr] lg:gap-8">
                <div data-reveal>
                  <div className="badge-pill border-primary/12 bg-white/82 text-slate-700">
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                    Minimal product page. Clear next step.
                  </div>

                  <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.94] tracking-[-0.05em] text-slate-950 sm:text-[4.1rem] lg:text-[5.2rem]">
                    No more delayed follow-up,
                    <span className="block text-gradient-fire">missed leads, or blind security risk.</span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    VishnuLabs offers two flagship systems. Sentinel Shield for high-privacy reception and lead control. Jarvis for reminders,
                    task handling, and daily workflow follow-through. Both start small. Both scale into production builds.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="soft-chip">Sentinel Shield from $1,500</span>
                    <span className="soft-chip">Jarvis from $1,000</span>
                    <span className="soft-chip">India pricing available</span>
                    <span className="soft-chip">All prices are starting points</span>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      size="lg"
                      asChild
                      className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900 sm:h-14 sm:px-8 sm:text-base"
                    >
                      <a href={demoUrl} target="_blank" rel="noreferrer">
                        Book Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="h-12 rounded-full border-slate-200/90 bg-white/80 px-7 text-sm font-semibold text-slate-900 hover:bg-white sm:h-14 sm:px-8 sm:text-base"
                    >
                      <a href={whatsappDemoUrl} target="_blank" rel="noreferrer">
                        WhatsApp DEMO
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {productOffers.map((offer, index) => (
                      <article
                        key={offer.name}
                        className={`metric-float hover-rise-strong p-4 sm:p-5 ${index === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"}`}
                        data-reveal
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                            <offer.icon className="h-4.5 w-4.5 text-sky-200" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-950">{offer.name}</p>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{offer.shortLabel}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{offer.note}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {offer.usdPricing.map((item) => (
                            <span key={item} className="soft-chip border-primary/10 text-slate-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div data-reveal>
                  <div className="dashboard-stage gradient-flow px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                    <div className="grid gap-4">
                      <div className="rounded-[30px] border border-white/85 bg-slate-950 p-3 shadow-hero-panel">
                        <Image
                          src="/marketing/sentinel-shield/final_hero_shot.png"
                          alt="Sentinel Shield product interface"
                          width={1600}
                          height={1000}
                          priority
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          className="h-auto w-full rounded-[22px] border border-white/10 object-cover"
                        />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {trustLanes.map((item, index) => (
                          <article
                            key={item.label}
                            className={`metric-float beam-sweep p-4 ${index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"}`}
                          >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                            <p className="mt-2 text-sm font-semibold text-slate-950">{item.value}</p>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="py-12 sm:py-16" id="products">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <SectionHeading
              eyebrow="Flagship systems"
              title="Two products. Clear fit. Low-risk entry."
              description="Pick the lane that matches the actual problem first. We can always expand scope later, but the first step should stay easy to understand."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {productOffers.map((offer, index) => (
                <article
                  key={offer.name}
                  className={offer.tone === "dark" ? "section-shell-dark ambient-grid-dark p-6 sm:p-8" : "section-shell p-6 sm:p-8"}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="grid gap-6">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${offer.tone === "dark" ? "bg-white/8 text-sky-200" : "bg-primary text-sky-100"}`}>
                        <offer.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className={`text-lg font-semibold ${offer.tone === "dark" ? "text-white" : "text-slate-950"}`}>{offer.name}</p>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${offer.tone === "dark" ? "text-slate-400" : "text-primary"}`}>{offer.shortLabel}</p>
                      </div>
                    </div>

                    <h3 className={`text-3xl font-bold tracking-tight ${offer.tone === "dark" ? "text-white" : "text-slate-950"}`}>{offer.headline}</h3>

                    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                      <Image
                        src={offer.image}
                        alt={offer.imageAlt}
                        width={1400}
                        height={960}
                        quality={88}
                        sizes="(max-width: 1024px) 100vw, 44vw"
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${offer.tone === "dark" ? "text-sky-200" : "text-primary"}`}>What it does</p>
                        <p className={`mt-3 text-sm leading-7 ${offer.tone === "dark" ? "text-slate-300" : "text-slate-600"}`}>{offer.whatItDoes}</p>
                      </div>

                      <div>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${offer.tone === "dark" ? "text-sky-200" : "text-primary"}`}>Who it is for</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {offer.whoItsFor.map((item) => (
                            <span
                              key={item}
                              className={
                                offer.tone === "dark"
                                  ? "rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                                  : "rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                              }
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${offer.tone === "dark" ? "text-sky-200" : "text-primary"}`}>Key capabilities</p>
                        <ul className="mt-3 space-y-2">
                          {offer.capabilities.map((item) => (
                            <li key={item} className={`flex items-start gap-2 text-sm leading-6 ${offer.tone === "dark" ? "text-slate-200" : "text-slate-700"}`}>
                              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${offer.tone === "dark" ? "text-sky-300" : "text-primary"}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${offer.tone === "dark" ? "text-sky-200" : "text-primary"}`}>Pricing</p>
                        <div className="mt-3 space-y-2">
                          {offer.usdPricing.map((item) => (
                            <div
                              key={item}
                              className={
                                offer.tone === "dark"
                                  ? "rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                                  : "rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                              }
                            >
                              {item}
                            </div>
                          ))}
                          {offer.indiaPricing.map((item) => (
                            <div
                              key={item}
                              className={
                                offer.tone === "dark"
                                  ? "rounded-[18px] border border-sky-400/15 bg-sky-400/10 px-4 py-3 text-sm text-sky-100"
                                  : "rounded-[18px] border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-slate-700"
                              }
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className={`text-sm leading-7 ${offer.tone === "dark" ? "text-slate-300" : "text-slate-600"}`}>{offer.note}</p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className={offer.tone === "dark" ? "h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-100" : "cta-glow h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white hover:bg-slate-900"}
                      >
                        <a href={demoUrl} target="_blank" rel="noreferrer">
                          Book Demo
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className={offer.tone === "dark" ? "h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10" : "h-12 rounded-full border-slate-200 bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-50"}
                      >
                        <a href={whatsappDemoUrl} target="_blank" rel="noreferrer">
                          WhatsApp DEMO
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" id="proof">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">What changes after rollout</p>
                  <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    Better response speed. Better control. Fewer preventable mistakes.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    This page should make one thing obvious: the right AI system removes operational drag. It does not add more dashboards,
                    more confusion, or more risk.
                  </p>

                  <div className="mt-6 space-y-3">
                    {outcomeBullets.map((item) => (
                      <div key={item} className="flex items-start gap-2 rounded-[20px] border border-slate-200 bg-white/78 px-4 py-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="section-shell-dark ambient-grid-dark p-4" data-reveal>
                    <div className="rounded-[24px] border border-white/10 bg-black/40 p-3">
                      <Image
                        src="/marketing/sentinel-shield/dashboard_v1.png"
                        alt="Sentinel Shield proof surface"
                        width={1400}
                        height={980}
                        quality={88}
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="h-auto w-full rounded-[18px] border border-white/10 object-cover"
                      />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">Sentinel Shield keeps sensitive workflows private and visible.</p>
                  </article>

                  <article className="section-shell p-5" data-reveal>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sky-100 shadow-[0_14px_30px_rgba(79,70,229,0.24)]">
                      <CircleAlert className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-semibold text-slate-950">The buying decision should feel low-risk.</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Low entry pricing for PoCs.",
                        "Production-grade deployment path when the fit is proven.",
                        "Scope is clarified early, not hidden until after the call.",
                        "India, US, and UK buyers can all get region-appropriate pricing clarity.",
                      ].map((item) => (
                        <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-white/10 bg-white/5 text-slate-200">
                  <LockKeyhole className="h-3.5 w-3.5 text-sky-300" />
                  Pricing note
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Every number on this page is a starting point.</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Final pricing depends on scope, integrations, channels, compliance requirements, reporting depth, and support expectations.
                  That keeps the first conversation honest and keeps larger deployments grounded in the actual workflow.
                </p>

                <div className="mt-6 space-y-3">
                  {pricingNotes.map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                  >
                    <a href={demoUrl} target="_blank" rel="noreferrer">
                      Book Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <a href={whatsappDemoUrl} target="_blank" rel="noreferrer">
                      WhatsApp DEMO
                    </a>
                  </Button>
                </div>
              </article>

              <article className="section-shell p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-primary/12 bg-primary text-white">
                  <MessageSquareMore className="h-3.5 w-3.5 text-sky-200" />
                  Best-fit scope
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Start small if you want. Expand only when the workflow proves itself.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  That is the whole model. We use low-friction starting points to make adoption easier, then scope the full build only when
                  the business case is clear.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="metric-float p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Sentinel Shield</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">$1,500 starting point</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">$5,000-$18,000+ production systems. India: INR 1.1L to INR 12L+.</p>
                  </div>
                  <div className="metric-float p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Jarvis</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">$1,000 starting point</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">$4,000-$15,000+ production systems. India: INR 75K to INR 10L+.</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  If you already know you need a broader build, we can scope websites, software, CRM layers, reminders, reporting, and
                  private AI controls together. If you need a budget-friendly first step, we start with the tightest useful version.
                </p>
              </article>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell-dark ambient-grid-dark p-6 text-center sm:p-10" data-reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Next step</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Pick the product lane. Book the demo. Get the right scope.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
                No more delays. No more preventable lead loss. No more unclear security posture around customer conversations.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  <a href={demoUrl} target="_blank" rel="noreferrer">
                    Book Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <a href={whatsappDemoUrl} target="_blank" rel="noreferrer">
                    WhatsApp DEMO
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  )
}
