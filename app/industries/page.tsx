import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import { ArrowRight, Building2, CheckCircle2, Home, Hospital, Rocket, Scale, ShieldCheck, Truck } from "lucide-react"

import { AppLink } from "@/components/app-link"
import { ConfidenceRail } from "@/components/confidence-rail"
import { CustomSolutionNote } from "@/components/custom-solution-note"
import { TestimonialCard } from "@/components/testimonial-card"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { testimonials } from "@/lib/testimonials"

type Industry = {
  bullets: string[]
  description: string
  href: string
  icon: LucideIcon
  title: string
}

export const metadata: Metadata = {
  title: "Industries | Where Revenue and Control Break First | Xavira Tech Labs",
  description: "Different industries. Same failure pattern: missed response, dropped follow-up, and weak control under real operating pressure.",
  alternates: {
    canonical: "/industries",
  },
}

const industries: Industry[] = [
  {
    title: "Startups",
    description: "Leads slip when founders route everything manually. We tighten intake, response, and visibility before scale exposes the weakness.",
    href: "/industries/startups",
    icon: Rocket,
    bullets: ["Cleaner lead intake", "Founder visibility", "Less manual rescue"],
  },
  {
    title: "Hospitals & Clinics",
    description: "No-shows rise when reminders, routing, and admin follow-up stay manual. We make response and booking control predictable.",
    href: "/industries/hospitals-clinics",
    icon: Hospital,
    bullets: ["Lower no-show risk", "Cleaner scheduling flow", "Ops visibility"],
  },
  {
    title: "Transport & Logistics",
    description: "Quote requests and dispatch handoffs fail quietly when callbacks lag. We restore visibility before jobs are lost.",
    href: "/industries/transport-logistics",
    icon: Truck,
    bullets: ["Quote capture", "Dispatch control", "Callback visibility"],
  },
  {
    title: "Lawyers & Law Services",
    description: "Consultations are lost when intake is slow, sloppy, or inconsistent. We tighten the path from inquiry to booked call.",
    href: "/industries/law-services",
    icon: Scale,
    bullets: ["Consultation coverage", "Legal workflow control", "Faster first response"],
  },
  {
    title: "PI Law Firms",
    description: "PI intake breaks under speed pressure and sensitive matter handling. We fix the workflow without exposing case data.",
    href: "/industries/pi-law-firms",
    icon: Scale,
    bullets: ["Case qualification", "Private workflow support", "Follow-up control"],
  },
  {
    title: "Real Estate",
    description: "Property inquiries cool fast when agent follow-up is uneven. We fix response speed, nurture timing, and booking flow.",
    href: "/industries/real-estate",
    icon: Home,
    bullets: ["Lead response speed", "Nurture control", "Booking workflows"],
  },
  {
    title: "Mortgage",
    description: "Borrower conversations stall when intake and reminders stay manual. We clean up the pipeline before leads disappear.",
    href: "/industries/mortgage",
    icon: Building2,
    bullets: ["Pipeline visibility", "Reminder flow", "Structured intake"],
  },
]

const industryHeroSignals = [
  {
    title: "Demand comes in",
    detail: "Leads, bookings, requests, and staff actions enter the system every day.",
  },
  {
    title: "Response slows",
    detail: "Manual intake, missed follow-up, or weak routing starts cooling intent.",
  },
  {
    title: "Handoffs break",
    detail: "One weak transition creates cleanup work, delays, and lost confidence.",
  },
  {
    title: "Revenue or trust leaks",
    detail: "The visible problem changes by industry. The failure pattern does not.",
  },
]

export default function IndustriesPage() {
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
                  <div className="badge-pill border-primary/20 bg-slate-50 text-slate-700">Industries</div>
                  <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.1rem]">
                    The leak changes by industry. The failure pattern does not.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Missed response. Dropped follow-up. Uncontrolled data. These pages show where it breaks first and how to stop it.
                  </p>

                  <div className="mt-6 rounded-[28px] border border-slate-200/90 bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-950">This is not for early-stage teams experimenting.</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      This is for companies already operating with real data and revenue.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Law firms", "Clinics", "Real estate", "Revenue-critical ops"].map((item) => (
                      <span key={item} className="soft-chip border-primary/10 bg-white text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 rounded-[28px] border border-slate-200/90 bg-slate-50 p-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Best fit
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Teams already handling live demand, live data, and live operating pressure.
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What changes</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        One entry page. One industry fit. One audit-first next step.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <AuditCtaButton trackingSource="industries_hero_cta" className="h-12 px-7 text-sm">
                      Get Free System Audit
                      <ArrowRight className="h-4 w-4" />
                    </AuditCtaButton>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">Limited onboarding capacity. No long-term contracts.</p>

                  <div className="mt-6 max-w-2xl">
                    <CustomSolutionNote compact title="Operating with real revenue or sensitive data?" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2" data-reveal style={{ transitionDelay: "110ms" }}>
                  {industryHeroSignals.map((item) => (
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

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <article className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Ops flow</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  One control layer. Different industry surface.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  The same path works across every industry: intake and staff actions pass through validation before downstream systems
                  write new state. That is how speed stops creating failure.
                </p>
                <div className="mt-6 rounded-[26px] border border-slate-200 bg-slate-950 p-5 shadow-[0_22px_60px_rgba(2,8,23,0.25)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Flow diagram</p>
                  <p className="mt-3 text-base font-semibold text-white">Input → Validation → Processing → Output</p>
                  <svg className="mt-4 h-20 w-full" viewBox="0 0 520 80" role="img" aria-label="Industry workflow diagram">
                    <defs>
                      <linearGradient id="flowLineIndustry" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <circle cx="40" cy="40" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="260" cy="40" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="480" cy="40" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
                    <line x1="70" y1="40" x2="230" y2="40" stroke="url(#flowLineIndustry)" strokeWidth="3" />
                    <line x1="290" y1="40" x2="450" y2="40" stroke="url(#flowLineIndustry)" strokeWidth="3" />
                    <text x="40" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Input</text>
                    <text x="260" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Validation</text>
                    <text x="480" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="10">Processing</text>
                  </svg>
                  <p className="mt-2 text-xs text-slate-300">Inspect → Validate → Route → Log before failure reaches the customer.</p>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                  <div className="aspect-[4/3] w-full">
                    <Image src="/media/team-1.png" alt="Xavira Tech Labs delivery team" width={900} height={600} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                  <div className="aspect-[4/3] w-full">
                    <Image src="/media/team-2.png" alt="Xavira Tech Labs operations team" width={900} height={600} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConfidenceRail />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="mb-6 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Industry fit</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Choose the surface where failure is already happening.
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Start with the page that matches your operating pressure. Then we audit the exact leak.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon

                return (
                  <article key={industry.title} className="section-shell hover-rise-strong flex h-full flex-col p-6 sm:p-7" data-reveal>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5 text-sky-300" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{industry.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
                    <ul className="mt-5 space-y-2">
                      {industry.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <AppLink href={industry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-primary">
                      Open industry page
                      <ArrowRight className="h-4 w-4" />
                    </AppLink>
                  </article>
                )
              })}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <TestimonialCard testimonial={testimonials.oliver} />
              <TestimonialCard testimonial={testimonials.omar} />
              <TestimonialCard testimonial={testimonials.sophie} />
            </div>
          </div>
        </section>
      </main>
  )
}
