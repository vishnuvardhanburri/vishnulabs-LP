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
import { UsageControlPricing } from "@/components/usage-control-pricing"
import { Button } from "@/components/ui/button"

const featureCards = [
  {
    title: "Real-time filtering",
    detail: "Inspect every request before the AI receives it.",
  },
  {
    title: "Secret + PII detection",
    detail: "Catch keys, personal data, and internal records automatically.",
  },
  {
    title: "Policy engine",
    detail: "Set what is allowed, blocked, redacted, or logged.",
  },
  {
    title: "AI request monitoring",
    detail: "Know what your team is sending and where it goes.",
  },
  {
    title: "Audit logs",
    detail: "Keep a clear record for review, follow-up, and internal control.",
  },
  {
    title: "API + internal tools protection",
    detail: "Apply the same control layer to internal apps and AI-connected systems.",
  },
]

const problemPoints = [
  "Employees paste confidential data into ChatGPT.",
  "API keys and internal instructions get exposed.",
  "There is no monitoring or enforcement.",
  "Risk stays invisible until something leaks.",
]

const trustPoints = [
  "Prevents leaks before they happen",
  "Built for AI-first teams that still need control",
  "Security-first architecture from the first request",
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#eef4ff_42%,#f7faff_100%)] pb-20 pt-28 sm:pt-32">
        <section className="relative pb-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-8%] top-10 h-[300px] w-[300px] rounded-full bg-sky-400/10 blur-[120px]" />
            <div className="absolute right-[-6%] top-24 h-[280px] w-[280px] rounded-full bg-indigo-400/14 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr]">
              <article className="rounded-[34px] border border-white/10 bg-slate-950/92 p-6 shadow-[0_30px_120px_rgba(2,8,23,0.42)] sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  AI Usage Control Layer
                </div>

                <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[4.35rem] lg:text-[5.3rem]">
                  Control what your team sends to AI before it leaves your system.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Stealth Vault is the control layer between your systems and AI. It blocks sensitive data, secrets, and internal information
                  from leaking into AI tools in real time.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/book">
                      Start Protecting Your Data
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
                    { label: "Core value", value: "Adopt AI without risking your data" },
                    { label: "What changes", value: "Scan. Block. Redact. Log." },
                    { label: "Why it matters", value: "One leak is enough." },
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
                      <p className="mt-1 text-sm text-slate-300">Stealth Vault sits between the user and the AI.</p>
                    </div>
                    <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                      Control first
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Flow</p>
                          <p className="mt-2 text-base font-semibold text-white">User → Stealth Vault → AI</p>
                        </div>
                        <ShieldCheck className="h-9 w-9 rounded-2xl border border-white/10 bg-sky-400/10 p-2 text-sky-200" />
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-4">
                        {["Detect", "Block", "Redact", "Audit"].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Live example</p>
                      <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10">
                        <Image
                          src="/marketing/sentinel-shield/final_hero_shot.png"
                          alt="Stealth Vault control interface"
                          width={1600}
                          height={1000}
                          priority
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="mt-4 rounded-[22px] border border-red-400/20 bg-red-500/10 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-200">Blocked request</p>
                        <p className="mt-3 text-base font-semibold text-white">Input: “Send client database”</p>
                        <p className="mt-2 text-base font-semibold text-red-200">Output: Blocked</p>
                        <p className="mt-2 text-sm leading-7 text-slate-300">Reason: Sensitive data detected before the request reached AI.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-white/95 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Category</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Stealth Vault is the AI usage control layer between your systems and AI.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Others help teams use AI. Stealth Vault controls how AI is used so sensitive data does not leave the organization without review,
                policy, or enforcement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_28px_90px_rgba(2,8,23,0.34)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Problem</p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                You do not control what your team sends to AI.
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {problemPoints.map((item) => (
                  <div key={item} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                    <CircleBlock />
                    <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] border border-red-400/20 bg-red-500/10 p-5">
                <p className="text-xl font-semibold text-white sm:text-2xl">One leak is enough.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Solution</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Put one control layer between your systems and AI.
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-5">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                    {["User", "Stealth Vault", "AI"].map((item, index) => (
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Inside Stealth Vault</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-4">
                      {["Detect", "Block", "Redact", "Enforce"].map((item) => (
                        <div key={item} className="rounded-[20px] border border-white/10 bg-slate-950 px-3 py-3 text-center text-sm font-semibold text-white">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-[20px] border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300">Everything is logged for audit and review.</div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What changes</p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Teams can adopt AI without losing control of internal data.",
                      "Security leaders can set policy instead of hoping staff remember it.",
                      "Ops teams can see what was blocked, what was redacted, and why.",
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

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-white/95 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Features</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Everything needed to control AI usage, not just observe it.
              </h2>

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

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <article className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_28px_90px_rgba(2,8,23,0.34)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">How it works</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Three steps. No long rollout story.</h2>
              </article>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Connect systems",
                    detail: "Put Stealth Vault between the user, your internal tools, and the AI endpoint.",
                  },
                  {
                    step: "02",
                    title: "Define policies",
                    detail: "Choose what must be blocked, redacted, logged, or allowed.",
                  },
                  {
                    step: "03",
                    title: "Monitor and enforce",
                    detail: "See request activity, blocked actions, and policy outcomes in one place.",
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

        <section className="py-8 sm:py-10" id="pricing">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <UsageControlPricing />
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Trust</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Security and control should feel mandatory, not optional.
                </h2>
                <div className="mt-6 space-y-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_28px_90px_rgba(2,8,23,0.34)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">About</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Vishnu Labs builds control around AI usage, not just access to AI.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  The product exists for teams that want AI adoption without the usual loss of oversight. The job is simple: prevent sensitive
                  data from leaving the organization unchecked.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-6 pt-8 sm:pb-10 sm:pt-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[36px] border border-white/10 bg-slate-950 p-6 text-center shadow-[0_28px_100px_rgba(2,8,23,0.38)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Final CTA</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Secure your AI usage before it becomes a risk.
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                  <a href="/book">
                    Start Protecting Your Data
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
