import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Home, Hospital, Rocket, Scale, ShieldCheck, Truck } from "lucide-react"

import { AppLink } from "@/components/app-link"
import { ConfidenceRail } from "@/components/confidence-rail"
import { CustomSolutionNote } from "@/components/custom-solution-note"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

type Industry = {
  bullets: string[]
  description: string
  href: string
  icon: LucideIcon
  title: string
}

export const metadata: Metadata = {
  title: "Industries | VishnuLabs",
  description: "Industry-specific pages for startups, hospitals and clinics, transport and logistics, law services, real estate, and mortgage teams.",
  alternates: {
    canonical: "/industries",
  },
}

const industries: Industry[] = [
  {
    title: "Startups",
    description: "Launch faster with stronger websites, lead capture, and custom software support before a bigger ops team is even needed.",
    href: "/industries/startups",
    icon: Rocket,
    bullets: ["Website + automation fit", "Founder visibility", "Lean ops support"],
  },
  {
    title: "Hospitals & Clinics",
    description: "Improve appointment response, admin coordination, and service clarity without adding friction to already-busy teams.",
    href: "/industries/hospitals-clinics",
    icon: Hospital,
    bullets: ["Scheduling support", "Patient-service clarity", "Ops visibility"],
  },
  {
    title: "Transport & Logistics",
    description: "Bring better visibility to moving-company and logistics inquiries, callbacks, quotes, and dispatch handoff.",
    href: "/industries/transport-logistics",
    icon: Truck,
    bullets: ["Quote capture", "Moving-company visibility", "Dispatch handoff"],
  },
  {
    title: "Lawyers & Law Services",
    description: "Automate intake, consultation handling, and workflow follow-up for legal teams that need speed and professionalism together.",
    href: "/industries/law-services",
    icon: Scale,
    bullets: ["Consultation coverage", "Legal workflow control", "Private AI options"],
  },
  {
    title: "PI Law Firms",
    description: "Automate intake, call handling, and private AI workflows without exposing sensitive matter data.",
    href: "/industries/pi-law-firms",
    icon: Scale,
    bullets: ["Case qualification", "Private AI support", "Follow-up automation"],
  },
  {
    title: "Real Estate",
    description: "Respond to new inquiries faster, nurture leads automatically, and keep agent follow-up consistent.",
    href: "/industries/real-estate",
    icon: Home,
    bullets: ["Lead response speed", "Automated nurture", "Booking workflows"],
  },
  {
    title: "Mortgage",
    description: "Reduce manual follow-up lag and move borrower conversations through a cleaner intake pipeline.",
    href: "/industries/mortgage",
    icon: Building2,
    bullets: ["Pipeline visibility", "Reminder flows", "Structured intake"],
  },
]

const industryHeroSignals = [
  {
    title: "Startup launches",
    detail: "Lean teams that need a cleaner front-end, stronger lead routing, and early operational support.",
  },
  {
    title: "Clinic operations",
    detail: "Appointment-heavy teams that need visibility, cleaner response flow, and less manual admin drag.",
  },
  {
    title: "Transport handoff",
    detail: "Quote, callback, dispatch, and moving-company workflows that need clearer intake before teams scale.",
  },
  {
    title: "Legal intake clarity",
    detail: "Consultation, intake, and private AI paths built for firms that need speed without looking sloppy.",
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

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
                    Automation systems adapted to the workflow pressure of each industry.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Startups, hospitals and clinics, transport and logistics teams, moving companies, lawyers, law services, real estate,
                    and mortgage teams all need fast response and cleaner operations, but the workflow details differ. These pages show where
                    VishnuLabs fits.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Launch-ready", "Clinic response", "Transport visibility", "Legal intake clarity"].map((item) => (
                      <span key={item} className="soft-chip border-primary/10 bg-white text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 rounded-[28px] border border-slate-200/90 bg-slate-50 p-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Where we fit best
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Teams that need better intake, faster response, stronger visibility, and cleaner operations without adding process chaos.
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why this reads cleaner</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        One entry page, one industry fit, one next step. Buyers can see where they belong before booking a call.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                      <AppLink href="/book">
                        Request Demo
                        <ArrowRight className="h-4 w-4" />
                      </AppLink>
                    </Button>
                    <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                      <AppLink href="/automations">
                        Explore Automations
                        <ArrowUpRight className="h-4 w-4" />
                      </AppLink>
                    </Button>
                  </div>

                  <div className="mt-6 max-w-2xl">
                    <CustomSolutionNote compact title="Custom industry solution available" />
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

        <ConfidenceRail />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
