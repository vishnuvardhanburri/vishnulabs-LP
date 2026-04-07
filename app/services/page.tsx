import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, CheckCircle2, Settings2, ShieldCheck, Workflow } from "lucide-react"

import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Services | VishnuLabs",
  description: "See how VishnuLabs stabilizes systems, replaces fragile automations, and restores operational control.",
  alternates: {
    canonical: "/services",
  },
}

const rolloutSteps = [
  {
    title: "Connect systems",
    detail: "Map the current workflow, isolate breakpoints, and put control around the unstable handoff.",
  },
  {
    title: "Define operating rules",
    detail: "Set validation, routing, retries, and escalation logic so the workflow behaves consistently under pressure.",
  },
  {
    title: "Monitor and harden",
    detail: "Track system behavior, resolve hidden failure modes, and leave the team with a workflow that is easier to reason about.",
  },
]

const serviceNotes = [
  "We start with the failure pattern, not a pre-selected stack.",
  "Some teams need backend stabilization. Others need brittle automation replaced with workflow logic that actually holds.",
  "The goal stays the same in every environment: restore control, consistency, and operator visibility.",
]

export default function ServicesPage() {
  return (
      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#edf4ff_44%,#f8fbff_100%)] pb-14 pt-28 sm:pb-18 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="dark-panel-solid p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <Settings2 className="h-3.5 w-3.5" />
                  Systems delivery
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  We fix the part of the system that keeps failing in production.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                  VishnuLabs steps in when backend workflows are unpredictable, automations require constant supervision, or infrastructure
                  decisions are starting to slow the team down. The structure stays straightforward: identify the failure mode, stabilize
                  the path, and leave behind a system that behaves consistently.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                    className="h-12 rounded-full border-white/26 bg-white/12 px-7 text-sm font-semibold text-white hover:bg-white/18 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/pricing">
                      View Pricing
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="light-panel-solid p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why this matters</p>
                <div className="mt-5 space-y-3">
                  {serviceNotes.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                ))}
                </div>
                <div className="mt-5 grid gap-3">
                  <TestimonialCard testimonial={testimonials.lukas} className="shadow-none" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-4 md:grid-cols-3">
              {rolloutSteps.map((item) => (
                <article key={item.title} className="light-panel-solid p-5 sm:p-6">
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
            <div className="dark-panel-solid p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Core promise</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Reliable execution comes from cleaner architecture, not more operator effort.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                We do not optimize for surface-level speed. We remove failure points, rebuild the weak handoff, and make the system easier
                to operate when load, edge cases, and business pressure increase at the same time.
              </p>
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {[
                  "Validation before bad data propagates",
                  "Structure before manual work piles up",
                  "Visibility before incidents become expensive",
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/12 bg-slate-900/70 px-4 py-4 text-sm text-slate-100">
                    <div className="flex gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <TestimonialCard testimonial={testimonials.michael} intent="dark" className="shadow-none" />
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
