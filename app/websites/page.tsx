import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Hospital, Scale, Truck } from "lucide-react"

import { ConfidenceRail } from "@/components/confidence-rail"
import { CustomSolutionNote } from "@/components/custom-solution-note"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Websites | VishnuLabs",
  description:
    "Website creation for startups, hospitals, clinics, transport and logistics teams, moving companies, and law-service businesses.",
  alternates: {
    canonical: "/websites",
  },
}

const websiteCollections = [
  {
    title: "Startup Websites",
    lead: "Fast, clean launch sites and landing pages that help new companies look credible early and convert interest into booked calls.",
    icon: Globe,
    bullets: ["Launch pages with strong CTA structure", "Investor, product, and demo-ready sections", "Mobile-first performance and clear conversion flow"],
  },
  {
    title: "Hospitals & Clinics",
    lead: "High-trust websites built around appointments, patient-service clarity, and a calmer experience for busy operations teams.",
    icon: Hospital,
    bullets: ["Appointment and inquiry routing", "Service clarity and trust-building page structure", "Operationally clean forms and follow-up paths"],
  },
  {
    title: "Transport, Logistics & Moving Companies",
    lead: "Sites designed for stronger visibility, quote capture, dispatch-ready lead handling, and clearer service positioning across local or regional coverage.",
    icon: Truck,
    bullets: ["Quote and booking flow for moving companies", "Coverage-area and service visibility", "Lead capture tied to ops and callback workflows"],
  },
  {
    title: "Lawyers & Law Services",
    lead: "Professional websites for firms that need authority, fast inquiry response, and cleaner handoff from public page to intake workflow.",
    icon: Scale,
    bullets: ["Practice-area landing pages", "Consultation booking and intake-ready CTA flow", "High-trust visibility for legal buyers"],
  },
]

export default function WebsitesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell app-shell-enter px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10" data-reveal>
              <div className="grid items-start gap-8 lg:grid-cols-[0.98fr_1.02fr]">
                <div data-reveal style={{ transitionDelay: "30ms" }}>
                  <div className="badge-pill border-primary/20 bg-white/75 text-slate-700">Website systems</div>
                  <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem]">
                    Websites built for visibility, trust, and clean conversion.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    VishnuLabs builds modern websites for startups, hospitals, clinics, transport and logistics teams, moving companies,
                    and law-service businesses that need stronger credibility and cleaner lead capture.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Startup-ready", "Clinic trust", "Law-service clarity", "Domain + launch support"].map((item) => (
                      <span key={item} className="soft-chip border-primary/10 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                      <Link href="/book">
                        Request Website Plan
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                      <Link href="/pricing">
                        View Combo Pricing
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 max-w-2xl">
                    <CustomSolutionNote compact title="Custom website solution available" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2" data-reveal style={{ transitionDelay: "110ms" }}>
                  {[
                    "Website creation with conversion-first page structure",
                    "Domain management, launch routing, and SSL support",
                    "Booking, intake, and automation-ready CTA flows",
                    "Built to feel credible on both desktop and mobile",
                  ].map((item) => (
                    <article key={item} className="metric-float p-5 text-sm leading-7 text-slate-700">
                      {item}
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
