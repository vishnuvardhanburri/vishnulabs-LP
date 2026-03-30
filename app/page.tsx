import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  LockKeyhole,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { TestimonialCard } from "@/components/testimonial-card"
import { UsageControlPricing } from "@/components/usage-control-pricing"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/testimonials"

const featureCards = [
  {
    title: "Failure-point mapping",
    detail: "Find where the workflow breaks before the problem spreads downstream.",
  },
  {
    title: "Data and event validation",
    detail: "Stop bad payloads, duplicate writes, and unstable handoffs before they create cleanup work.",
  },
  {
    title: "Workflow enforcement",
    detail: "Define what should route, retry, alert, or halt when the system leaves the happy path.",
  },
  {
    title: "Operational visibility",
    detail: "See what the system is doing without relying on guesswork or inbox archaeology.",
  },
  {
    title: "Recovery-ready logs",
    detail: "Keep a clear record for review, follow-up, and dependable incident response.",
  },
  {
    title: "Scalable backend paths",
    detail: "Build systems that can grow without requiring constant manual intervention from the team.",
  },
]

const problemPoints = [
  "Critical workflows depend on brittle automations and silent retries.",
  "Bad data moves between services before anyone notices.",
  "Teams are forced into manual follow-up to keep operations moving.",
  "The system looks fine until load, edge cases, or integrations expose the weak path.",
]

const trustPoints = [
  "System behavior becomes easier to reason about",
  "Fragile automation gets replaced with validated workflow logic",
  "Operators regain visibility without more dashboard clutter",
  "Backend-heavy fixes are delivered with long-term maintainability in mind",
]

const offerCards = [
  {
    label: "Starter",
    title: "Stabilize one critical path first",
    price: "From $149/mo",
    detail: "For teams that need one unstable workflow brought under control quickly without a long rollout.",
    bullets: ["One workflow intervention", "Operational visibility", "Fast first deployment"],
  },
  {
    label: "Growth",
    title: "Harden the workflow that the team relies on daily",
    price: "From $799/mo",
    detail: "For companies where routing, validation, retries, and operator review need to work together in production.",
    bullets: ["Broader workflow coverage", "Logs and recovery paths", "Production rollout support"],
  },
  {
    label: "Enterprise",
    title: "Broader system coverage and deeper architecture work",
    price: "Custom scope",
    detail: "For environments that need custom deployment, deeper infrastructure decisions, and broader internal system coverage.",
    bullets: ["Private infrastructure options", "Architecture review", "Internal systems coverage"],
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#eef4ff_42%,#f7faff_100%)] pb-20 pt-28 sm:pt-32">
        <section className="relative pb-12">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <video
              className="h-full w-full object-cover opacity-30"
              src="/media/stealth-vault-proof.mp4"
              poster="/marketing/sentinel-shield/final_hero_shot.png"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.55)_0%,rgba(11,23,39,0.5)_35%,rgba(238,244,255,0.7)_70%,rgba(247,250,255,0.95)_100%)]" />
            <div className="absolute left-[-8%] top-10 h-[300px] w-[300px] rounded-full bg-sky-400/12 blur-[120px]" />
            <div className="absolute right-[-6%] top-24 h-[280px] w-[280px] rounded-full bg-indigo-400/16 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr]">
              <article className="rounded-[34px] border border-white/10 bg-slate-950/92 p-6 shadow-[0_30px_120px_rgba(2,8,23,0.42)] sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Backend stabilization
                </div>

                <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[4.35rem] lg:text-[5.3rem]">
                  Fix the backend systems that keep your team in recovery mode.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  VishnuLabs fixes broken backend workflows, replaces fragile automations, and builds infrastructure that holds up as usage
                  grows. The goal is simple: fewer recurring failures, clearer system behavior, and a platform your team can trust.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="https://cal.com/vishnuvardhanburri/15min">
                      Book System Review
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

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Core value", value: "Reliable execution across backend workflows" },
                    { label: "What changes", value: "Validate. Route. Recover. Observe." },
                    { label: "What it stops", value: "Silent failures, manual rescue work, and inconsistent behavior" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-7 text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[34px] border border-white/12 bg-white/92 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-6">
                <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-4 shadow-[0_18px_60px_rgba(2,8,23,0.28)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">System flow</p>
                      <p className="mt-1 text-sm text-slate-300">A structured operating layer between input, processing, and output.</p>
                    </div>
                    <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                      Stability first
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Flow</p>
                          <p className="mt-2 text-base font-semibold text-white">Inputs → Validation → Processing → Outputs</p>
                        </div>
                        <ShieldCheck className="h-9 w-9 rounded-2xl border border-white/10 bg-sky-400/10 p-2 text-sky-200" />
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-4">
                        {["Inspect", "Validate", "Process", "Log"].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Live example</p>
                      <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/40">
                        <video
                          className="h-auto w-full object-cover"
                          src="/media/stealth-vault-proof.mp4"
                          poster="/marketing/sentinel-shield/final_hero_shot.png"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        />
                      </div>
                      <div className="mt-4 rounded-[22px] border border-red-400/20 bg-red-500/10 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-200">Contained failure</p>
                        <p className="mt-3 text-base font-semibold text-white">Invalid write detected in booking workflow</p>
                        <p className="mt-2 text-base font-semibold text-red-200">Output: Stopped before downstream sync</p>
                        <p className="mt-2 text-sm leading-7 text-slate-300">Reason: Validation caught the bad payload before it created cross-system inconsistency.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-6">
              <div className="rounded-[30px] border border-slate-200/80 bg-white/94 p-4 sm:p-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Trusted by teams fixing broken systems</p>
                <TestimonialCard testimonial={testimonials.daniel} className="shadow-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/90 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Category</p>
                  <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    VishnuLabs is the team you bring in when backend behavior stops being trustworthy.
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                    Most companies do not need more tooling. They need the unstable workflow fixed properly. VishnuLabs focuses on the path
                    between input, validation, processing, and output so the system behaves consistently again.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[430px]">
                  {[
                    { label: "What gets fixed", value: "Fragile workflows, data consistency, scaling pain" },
                    { label: "What it changes", value: "Validated execution before failures spread" },
                    { label: "How it feels", value: "Straightforward delivery, deeper engineering" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-7 text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8" id="shop">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_28px_90px_rgba(2,8,23,0.34)] sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Choose the rollout path</p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    Start with the system depth you actually need today.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Every plan is a starting point. Scope expands when coverage, operational risk, or deployment depth expands.
              </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {offerCards.map((card, index) => (
                  <article
                    key={card.label}
                    className={`rounded-[28px] border p-5 shadow-[0_18px_44px_rgba(2,8,23,0.16)] ${
                      index === 1
                        ? "border-sky-300/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(96,165,250,0.10)_100%)]"
                        : "border-white/10 bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                        {card.label}
                      </span>
                      <span className="text-sm font-semibold text-white">{card.price}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.detail}</p>
                    <div className="mt-5 space-y-2.5">
                      {card.bullets.map((item) => (
                        <div key={item} className="flex gap-3 rounded-[18px] border border-white/10 bg-slate-950/60 px-4 py-3">
                          <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sky-200" />
                          <p className="text-sm leading-6 text-slate-200">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-100">
                        <a href="/pricing">
                          View Pricing
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-11 rounded-full border-white/14 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        <a href="https://cal.com/vishnuvardhanburri/15min">
                          Book Review
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_26px_70px_rgba(15,23,42,0.12)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Problem</p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                The system is creating drag because too much depends on manual recovery.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Most operational pain does not look dramatic at first. It shows up as missed callbacks, inconsistent states, broken syncs,
                and staff doing cleanup work the backend should have handled.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {problemPoints.map((item) => (
                  <div key={item} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.06)]">
                    <CircleBlock />
                    <p className="mt-4 text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] border border-red-300 bg-[linear-gradient(135deg,rgba(254,242,242,1)_0%,rgba(254,226,226,0.98)_100%)] p-5 shadow-[0_18px_44px_rgba(239,68,68,0.14)]">
                <p className="text-xl font-semibold text-red-700 sm:text-2xl">One weak handoff is enough.</p>
                <p className="mt-2 text-sm leading-7 text-red-600">
                  One missing validation rule, one unstable integration, or one silent retry loop is enough to turn normal growth into
                  recurring operational friction.
                </p>
              </div>
              <div className="mt-6">
                <TestimonialCard testimonial={testimonials.ananya} className="shadow-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Solution</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Rebuild the weak path so the system behaves predictably again.
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-5">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                    {["Input", "Validation", "Processing"].map((item, index) => (
                      <div key={item} className="contents">
                        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-5 text-center">
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">{item}</p>
                        </div>
                        {index < 2 ? (
                          <div className="hidden items-center justify-center sm:flex">
                            <ArrowRight className="h-5 w-5 text-slate-500" />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-sky-300/16 bg-sky-400/8 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Inside the operating layer</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-4">
                      {["Inspect", "Validate", "Route", "Record"].map((item) => (
                        <div key={item} className="rounded-[20px] border border-white/10 bg-slate-950 px-3 py-3 text-center text-sm font-semibold text-white">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-[20px] border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300">Everything important stays visible for operators and technical review.</div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What changes</p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Move faster because the workflow is structurally more reliable.",
                      "Replace manual checking with validation and recovery logic that is explicit.",
                      "See where the system stopped, recovered, or needs follow-up.",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 rounded-[22px] border border-slate-200 bg-white px-4 py-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Features</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Everything needed to stabilize execution, not just observe failure.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Built for teams that do not want another dashboard-only layer. The job here is simple: fix the weak path, make decisions
                explicit, and keep a usable record of what happened when the workflow was under pressure.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featureCards.map((item, index) => (
                  <article key={item.title} className={`rounded-[28px] border border-slate-200 p-5 shadow-sm ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                      {index % 3 === 0 ? <ShieldCheck className="h-5 w-5" /> : index % 3 === 1 ? <ShieldAlert className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                    </div>
                    <p className="mt-4 text-lg font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Delivery team</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Backend-first execution with fast fixes when the system shows you the real issue.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  We work where reliability actually lives: backend services, workflow validation, and observability. When a workflow breaks,
                  we fix it quickly and document it clearly.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Validation logic handled end-to-end",
                    "Live monitoring tied to real workflows",
                    "Fast fixes during rollout",
                    "Clear handoff and operator notes",
                  ].map((item) => (
                    <div key={item} className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                    <div className="aspect-[4/3] w-full">
                      <Image src="/media/team-1.png" alt="VishnuLabs delivery team" width={900} height={600} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                    <div className="aspect-[4/3] w-full">
                      <Image src="/media/team-2.png" alt="VishnuLabs operations team" width={900} height={600} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="rounded-[26px] border border-slate-200 bg-slate-950 p-5 shadow-[0_22px_60px_rgba(2,8,23,0.25)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Flow diagram</p>
                  <p className="mt-3 text-base font-semibold text-white">Input → Validation → Processing → Output</p>
                  <svg className="mt-4 h-20 w-full" viewBox="0 0 520 80" role="img" aria-label="System workflow diagram">
                    <defs>
                      <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <circle cx="40" cy="40" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="260" cy="40" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="480" cy="40" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
                    <line x1="70" y1="40" x2="230" y2="40" stroke="url(#flowLine)" strokeWidth="3" />
                    <line x1="290" y1="40" x2="450" y2="40" stroke="url(#flowLine)" strokeWidth="3" />
                    <text x="40" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Input</text>
                    <text x="260" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Validation</text>
                    <text x="480" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Processing</text>
                  </svg>
                  <p className="mt-2 text-xs text-slate-300">Inspect → Validate → Route → Log before failures reach customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <article className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">How it works</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Three steps. No long sales theater.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  We are strongest in backend implementation, workflow redesign, and record-time fixes when teams need the system working
                  fast and correctly.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Backend-heavy implementation, not surface-only setup",
                    "Validation logic wired cleanly into the real workflow",
                    "Fast fixes when failure points show up live",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3">
                      <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Connect systems",
                    detail: "Map where the workflow breaks and define the operating path that needs to be stabilized first.",
                  },
                  {
                    step: "02",
                    title: "Define controls",
                    detail: "Choose what must validate, retry, alert, or halt before bad state moves any further.",
                  },
                  {
                    step: "03",
                    title: "Monitor behavior",
                    detail: "See system activity, recovery events, and operator action points in one place.",
                  },
                ].map((item) => (
                  <article key={item.step} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{item.step}</p>
                    <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8" id="pricing">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <UsageControlPricing />
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Trust</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  No more guessing where the workflow failed. No more delayed response after the damage is already visible.
                </h2>
                <div className="mt-6 space-y-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex gap-3 rounded-[24px] border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[34px] border border-slate-200 bg-[linear-gradient(180deg,#f9fbff_0%,#f1f6ff_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">About</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  This is the team you call when the system needs engineering depth, not another quick patch.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  VishnuLabs is for teams that need reliable execution without overengineering. That is why the page stays simple: one
                  problem, one stabilization path, one clear next step.
                </p>
                <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-950 px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">Execution strength</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    VishnuLabs is especially strong on backend architecture, workflow reliability, and fixing critical control gaps in record time.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-4 pt-8 sm:pb-8 sm:pt-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <TestimonialCard testimonial={testimonials.rachel} />
              <TestimonialCard testimonial={testimonials.ethan} />
            </div>
            <div className="rounded-[36px] border border-white/10 bg-slate-950 p-6 text-center shadow-[0_28px_100px_rgba(2,8,23,0.38)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Final CTA</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Fix the unstable system before it costs more than a proper rebuild.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Start with a smaller engagement if needed. Expand when workflow depth, infrastructure coverage, or operator needs expand.
                Every price on the site is a starting point, not a forced final package.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                  <a href="https://cal.com/vishnuvardhanburri/15min">
                    Book System Review
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function CircleBlock() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
      <ShieldAlert className="h-4 w-4" />
    </div>
  )
}
