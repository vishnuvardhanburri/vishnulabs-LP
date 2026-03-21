import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Workflow } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Automations | Stealth Vault",
  description: "Protected workflows and AI-connected operations controlled through Stealth Vault.",
  alternates: {
    canonical: "/automations",
  },
}

const workflowCards = [
  {
    title: "Protected intake flows",
    detail: "Use AI on inbound information without sending raw sensitive data straight into the model.",
  },
  {
    title: "Protected internal search",
    detail: "Let teams query internal knowledge with policy, redaction, and logging in front of the response layer.",
  },
  {
    title: "Protected assistant workflows",
    detail: "Connect AI-driven internal flows while keeping request monitoring and enforcement in one place.",
  },
  {
    title: "Protected operational tools",
    detail: "Apply the same control layer to internal dashboards, API calls, and AI-connected tools.",
  },
]

const workflowReasons = [
  "The company may still want AI in the workflow.",
  "The missing piece is control over what enters the workflow.",
  "Stealth Vault makes those workflows usable without staying blind to risk.",
]

export default function AutomationsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#eef4ff_42%,#f7faff_100%)] pb-20 pt-28 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_28px_100px_rgba(2,8,23,0.38)] sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <Workflow className="h-3.5 w-3.5" />
                  Protected workflows
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  AI can stay in the workflow. Uncontrolled data cannot.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  This page is not about generic automations. It shows where Stealth Vault sits when AI becomes part of an intake flow,
                  assistant flow, search flow, or internal operational process.
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
                    className="h-12 rounded-full border-white/14 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/proof">
                      View Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why this matters</p>
                <div className="mt-5 space-y-3">
                  {workflowReasons.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
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
            <div className="grid gap-4 md:grid-cols-2">
              {workflowCards.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/96 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
