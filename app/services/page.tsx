import type { Metadata } from "next"
import { ArrowRight, CheckCircle2, Settings2, ShieldCheck, Workflow } from "lucide-react"

import { TestimonialCard } from "@/components/testimonial-card"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Services | Xavira Tech Labs",
  description: "Backend systems, SaaS platforms, AI-driven automation, and cloud-native infrastructure built for production reliability.",
  alternates: {
    canonical: "/services",
  },
}

const services = [
  {
    title: "Backend Systems Development",
    detail: "APIs, data models, and integrations built for reliability, observability, and long-term maintainability.",
  },
  {
    title: "SaaS Product Development",
    detail: "Production-grade platforms with clean architecture, multi-tenant patterns, and durable execution paths.",
  },
  {
    title: "AI & Automation Systems",
    detail: "AI-assisted workflows and automation systems designed for safety, control, and measurable execution.",
  },
  {
    title: "Cloud & Infrastructure Engineering",
    detail: "Cloud-native deployments, CI/CD, infrastructure-as-code, and runtime hardening for stable operations.",
  },
]

const serviceNotes = [
  "Backend-first architecture and clear contracts.",
  "Reliability, observability, and safe rollouts.",
  "Systems designed for scale from day one.",
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
                  Production engineering
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Production-grade software systems for real-world scale.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                  We build backend systems, SaaS platforms, AI-driven automation, and cloud-native infrastructure with reliability and scalability as first-class constraints.
                </p>

                <div className="mt-6 rounded-[26px] border border-white/12 bg-white/[0.05] px-4 py-4">
                  <p className="text-sm font-medium text-white">Clear scope. Production execution.</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Engineering-first delivery with stability, performance, and long-term maintainability.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AuditCtaButton trackingSource="services_hero_cta" className="h-12 px-7 text-sm sm:h-14 sm:px-8 sm:text-base">
                    Request Consultation
                    <ArrowRight className="h-4 w-4" />
                  </AuditCtaButton>
                </div>
                <p className="mt-4 text-sm text-slate-300">Start with a short consultation. Move into scoped delivery.</p>
              </article>

              <article className="light-panel-solid p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What changes</p>
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((item) => (
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">What we remove</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Reliability is designed, not hoped for.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                We focus on stable execution: clear contracts, defensive design, observable behavior, and failure handling that keeps systems predictable under real traffic and edge cases.
              </p>
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {[
                  "Clear boundaries and interfaces",
                  "Failure handling and safe fallbacks",
                  "Observability and operational ownership",
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
              <p className="mt-5 text-sm text-slate-300">Most teams start with a scoped build. Delivery is production-first.</p>
            </div>
          </div>
        </section>
      </main>
  )
}
