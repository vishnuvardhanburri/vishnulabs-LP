import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Workflow } from "lucide-react"

import { TestimonialCard } from "@/components/testimonial-card"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Automations | VishnuLabs",
  description: "Workflow systems that replace brittle automations with reliable execution paths and clearer operational control.",
  alternates: {
    canonical: "/automations",
  },
}

const workflowCards = [
  {
    title: "Intake systems that hold up",
    detail: "Replace fragile form-to-spreadsheet chains with validated intake logic and clean routing.",
  },
  {
    title: "Workflow logic with operator visibility",
    detail: "Keep the team informed on what ran, what failed, and what needs intervention before customers feel it.",
  },
  {
    title: "Assistant workflows with guardrails",
    detail: "Use automation where it helps, but keep routing, validation, and fallbacks explicit.",
  },
  {
    title: "Operational tools that stay predictable",
    detail: "Stabilize internal dashboards, API-connected tools, and notification paths that currently require constant checking.",
  },
]

const workflowReasons = [
  "Most automation problems are architecture problems in disguise.",
  "A workflow is not reliable if one missed event breaks the next three steps.",
  "The goal is consistent execution, not just fewer clicks.",
]

export default function AutomationsPage() {
  return (
      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#edf4ff_44%,#f8fbff_100%)] pb-14 pt-28 sm:pb-18 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="dark-panel-solid p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <Workflow className="h-3.5 w-3.5" />
                  Workflow stabilization
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  We replace brittle automation with workflows that keep running cleanly.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                  This page is about operational reliability. VishnuLabs rebuilds the workflow when scheduling, routing, reminders, or
                  internal automations keep failing quietly and pulling the team back into manual work.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AuditCtaButton
                    trackingSource="automations_hero_cta"
                    className="h-12 px-7 text-sm sm:h-14 sm:px-8 sm:text-base"
                  >
                    Get Free System Audit
                    <ArrowRight className="h-4 w-4" />
                  </AuditCtaButton>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-white/26 bg-white/12 px-7 text-sm font-semibold text-white hover:bg-white/18 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/proof">
                      View Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="light-panel-solid p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why this matters</p>
                <div className="mt-5 space-y-3">
                  {workflowReasons.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                ))}
                </div>
                <div className="mt-5">
                  <TestimonialCard testimonial={testimonials.james} className="shadow-none" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-4 md:grid-cols-2">
              {workflowCards.map((item) => (
                <article key={item.title} className="light-panel-solid p-5 sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <TestimonialCard testimonial={testimonials.carlos} className="shadow-none" />
            </div>
          </div>
        </section>
      </main>
  )
}
