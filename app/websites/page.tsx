import type { Metadata } from "next"
import { ArrowRight, CheckCircle2, Globe, Hospital, Scale, ShieldCheck, Truck } from "lucide-react"

import { ConfidenceRail } from "@/components/confidence-rail"
import { CustomSolutionNote } from "@/components/custom-solution-note"
import { TestimonialCard } from "@/components/testimonial-card"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { testimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Websites | VishnuLabs",
  description:
    "If your site gets attention but the pipeline stays quiet, demand is leaking. Fix the conversion path and response system.",
  alternates: {
    canonical: "/websites",
  },
}

const websiteCollections = [
  {
    title: "Startup Websites",
    lead: "Stop losing early demand because the first step feels unclear or slow.",
    icon: Globe,
    bullets: ["Traffic turns into booked calls", "Clear trust above the fold", "No dead-end forms"],
  },
  {
    title: "Hospitals & Clinics",
    lead: "Reduce missed inquiries and booking drop-off before it becomes a no-show problem.",
    icon: Hospital,
    bullets: ["Appointments hold more often", "Less back-and-forth", "Faster confirmation"],
  },
  {
    title: "Transport, Logistics & Moving Companies",
    lead: "Quote requests leak when follow-up is slow and service info is unclear. Fix that path.",
    icon: Truck,
    bullets: ["Quotes captured cleanly", "Callbacks stop slipping", "Less manual chasing"],
  },
  {
    title: "Lawyers & Law Services",
    lead: "Legal leads go cold fast. Your website should not be the weak link.",
    icon: Scale,
    bullets: ["Fewer missed consultations", "Faster first response", "Higher trust on mobile"],
  },
]

const websiteHeroSignals = [
  {
    title: "Conversion structure",
    detail: "The path to a call is obvious.",
  },
  {
    title: "Launch routing",
    detail: "No broken links. No silent form failures.",
  },
  {
    title: "Ops-ready CTA flow",
    detail: "Inquiry goes somewhere fast.",
  },
  {
    title: "Credibility on mobile",
    detail: "Trust holds on phones.",
  },
]

export default function WebsitesPage() {
  return (
      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell app-shell-enter px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10" data-reveal>
              <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                <div
                  className="rounded-[34px] border border-slate-200/90 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-8"
                  data-reveal
                  style={{ transitionDelay: "30ms" }}
                >
                  <div className="badge-pill border-primary/20 bg-slate-50 text-slate-700">Website systems</div>
                  <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem]">
                    If your site gets attention but the pipeline stays quiet, demand is leaking.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Weak trust, slow response, and broken handoffs cost more than a redesign. Fix the conversion path. Then keep the response
                    system stable.
                  </p>

                  <div className="mt-6 rounded-[28px] border border-slate-200/90 bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-950">This is not for early-stage teams experimenting.</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      This is for companies already operating with real data and revenue.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Lost inquiries", "Weak trust", "Slow response", "Broken handoff"].map((item) => (
                      <span key={item} className="soft-chip border-primary/10 bg-white text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 rounded-[28px] border border-slate-200/90 bg-slate-50 p-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        What changes
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Buyers do not guess what happens next. Response does not depend on someone noticing the lead.
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Best fit</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Teams with real demand and real follow-up pressure.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <AuditCtaButton trackingSource="websites_hero_cta" className="h-12 px-7 text-sm">
                      Get Free System Audit
                      <ArrowRight className="h-4 w-4" />
                    </AuditCtaButton>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">Limited onboarding capacity. No long-term contracts.</p>

                  <div className="mt-6 max-w-2xl">
                    <CustomSolutionNote compact title="Operating with real demand?" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2" data-reveal style={{ transitionDelay: "110ms" }}>
                  {websiteHeroSignals.map((item) => (
                    <article key={item.title} className="light-panel-solid flex min-h-[190px] flex-col p-5 sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                      <p className="mt-4 text-base leading-8 text-slate-700">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConfidenceRail />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-2">
              {websiteCollections.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="section-shell hover-rise-strong flex h-full flex-col p-6 sm:p-7"
                    data-reveal
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5 text-sky-300" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.lead}</p>
                    <ul className="mt-5 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Custom solution available. Email hello@vishnulabs.com
                    </p>
                  </article>
                )
              })}
            </div>
            <div className="mt-6">
              <TestimonialCard testimonial={testimonials.sophie} />
            </div>
          </div>
        </section>
      </main>
  )
}
