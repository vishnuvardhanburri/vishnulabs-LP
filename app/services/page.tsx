import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, CheckCircle2, Settings2, ShieldCheck, Workflow } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | Stealth Vault",
  description: "See how Stealth Vault is deployed: connect systems, define policy, monitor and enforce.",
  alternates: {
    canonical: "/services",
  },
}

const rolloutSteps = [
  {
    title: "Connect systems",
    detail: "Place Stealth Vault between the user, the internal surface, and the AI endpoint.",
  },
  {
    title: "Define policies",
    detail: "Choose what must be allowed, blocked, redacted, and logged before AI usage expands further.",
  },
  {
    title: "Monitor and enforce",
    detail: "See activity, blocked requests, and policy outcomes in one control layer.",
  },
]

const serviceNotes = [
  "The product is standard. The deployment shape changes by environment.",
  "Some teams need a browser-level control path. Others need API or internal tool protection.",
  "The job stays the same in every case: prevent sensitive data from leaving unchecked.",
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#ebf3ff_40%,#f7faff_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="rounded-[34px] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,8,23,1)_0%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_24px_72px_rgba(2,8,23,0.38)] sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <Settings2 className="h-3.5 w-3.5" />
                  Deployment path
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  The rollout is simple. The control stays strict.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                  This page is not about selling custom services. It shows how Stealth Vault gets connected, how policy is defined, and how
                  enforcement is kept visible after launch.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                    className="h-12 rounded-full border-white/18 bg-white/8 px-7 text-sm font-semibold text-white hover:bg-white/14 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/pricing">
                      View Pricing
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="rounded-[34px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff5ff_100%)] p-6 shadow-[0_18px_46px_rgba(15,23,42,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why this matters</p>
                <div className="mt-5 space-y-3">
                  {serviceNotes.map((item) => (
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
            <div className="grid gap-4 md:grid-cols-3">
              {rolloutSteps.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-white/90 bg-white/98 p-5 shadow-[0_16px_38px_rgba(15,23,42,0.08)] sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,8,23,1)_0%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_24px_72px_rgba(2,8,23,0.38)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Core promise</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                The team can keep using AI. The company keeps control of what enters AI.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                AI adoption does not have to stop. What has to stop is sensitive data entering those requests without policy, logging, or
                enforcement in front of it.
              </p>
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {[
                  "Control before the request leaves",
                  "Policy before the habit spreads",
                  "Logs before the incident is disputed",
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/12 bg-slate-900/70 px-4 py-4 text-sm text-slate-100">
                    <div className="flex gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
