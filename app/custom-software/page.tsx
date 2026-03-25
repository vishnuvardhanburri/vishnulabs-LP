import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2, Hospital, Scale, Truck, Workflow } from "lucide-react"

import { ConfidenceRail } from "@/components/confidence-rail"
import { CustomSolutionNote } from "@/components/custom-solution-note"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Custom Software Solutions | VishnuLabs",
  description:
    "Custom software solutions for startups, hospitals and clinics, transport and logistics teams, moving companies, and law-service operations.",
  alternates: {
    canonical: "/custom-software",
  },
}

const softwareCollections = [
  {
    title: "Startup Software Solutions",
    lead: "Internal tools, customer-facing workflow layers, and automation-ready dashboards for teams building their operating system from the ground up.",
    icon: Workflow,
    bullets: ["Admin dashboards and internal tooling", "Lead-routing and ops workflow layers", "Custom product support around launch-stage teams"],
  },
  {
    title: "Hospital & Clinic Operations",
    lead: "Software flows for appointment routing, intake coordination, reminders, admin visibility, and calmer patient-service operations.",
    icon: Hospital,
    bullets: ["Ops dashboards and workflow logic", "Appointment and intake coordination", "Support for sensitive operational processes"],
  },
  {
    title: "Transport, Logistics & Moving Ops",
    lead: "Dispatch-friendly systems, quote tracking, callback logic, and workflow visibility for transport, logistics, and moving companies.",
    icon: Truck,
    bullets: ["Dispatch and quote workflow support", "Lead-to-ops handoff visibility", "Moving-company booking and follow-up layers"],
  },
  {
    title: "Lawyers & Law Services",
    lead: "Software solutions for intake, matter triage, document workflows, and admin routing where professional handling matters.",
    icon: Scale,
    bullets: ["Legal intake and routing support", "Matter-status and handoff workflows", "Custom logic for law-service operations"],
  },
]

export default function CustomSoftwarePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell app-shell-enter px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10" data-reveal>
              <div className="grid items-start gap-8 lg:grid-cols-[0.98fr_1.02fr]">
                <div data-reveal style={{ transitionDelay: "30ms" }}>
                  <div className="badge-pill border-primary/20 bg-white/75 text-slate-700">Custom software solutions</div>
                  <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem]">
                    Software systems designed around the real workflow, not generic templates.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    We build custom software solutions for startups, hospitals, clinics, transport and logistics teams, moving companies,
                    and law-service businesses that need cleaner operations, better visibility, and stronger handoff between teams.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Ops dashboards", "Workflow engines", "Booking + CRM", "Private AI options"].map((item) => (
                      <span key={item} className="soft-chip border-primary/10 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                      <Link href="https://cal.com/vishnuvardhanburri/15min">
                        Request Software Scope
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                      <Link href="/pricing">
                        Review Platform Pricing
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 max-w-2xl">
                    <CustomSolutionNote compact title="Custom software available" />
                  </div>
                </div>

                <div className="grid gap-4" data-reveal style={{ transitionDelay: "110ms" }}>
                  {[
                    "Custom internal tools tied to the real ops bottleneck",
                    "Workflow layers that connect websites, automation, and team actions",
                    "Visibility for admins, owners, and revenue teams",
                    "AI Vault custom requirements available for sensitive environments",
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
              {softwareCollections.map((item, index) => {
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
