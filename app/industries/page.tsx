import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Home, Scale } from "lucide-react"

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
  description: "Industry-specific AI automation pages for law firms, real estate, and mortgage teams.",
  alternates: {
    canonical: "/industries",
  },
}

const industries: Industry[] = [
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

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Industries</p>
                  <h1 className="mt-3 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4rem]">
                    Automation systems adapted to the workflow pressure of each industry.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Law, real estate, and mortgage teams all need fast response and cleaner operations, but the workflow details differ.
                    These pages show where VishnuLabs fits.
                  </p>
                </div>

                <div className="grid gap-4">
                  {industries.map((industry) => {
                    const Icon = industry.icon

                    return (
                      <div key={industry.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                            <Icon className="h-5 w-5 text-orange-300" />
                          </div>
                          <p className="text-lg font-semibold text-slate-950">{industry.title}</p>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                  <Link href="/book">
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                  <Link href="/automations">
                    Explore Automations
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon

                return (
                  <article key={industry.title} className="section-shell hover-rise-strong flex h-full flex-col p-6 sm:p-7" data-reveal>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5 text-orange-300" />
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
                    <Link href={industry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-primary">
                      Open industry page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
