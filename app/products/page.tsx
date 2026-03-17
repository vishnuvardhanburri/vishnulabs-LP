import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, ArrowUpRight, CalendarClock, CarFront, CheckCircle2, FolderLock, Globe, MessageCircleHeart, PanelsTopLeft, Workflow } from "lucide-react"

import { CustomSolutionNote } from "@/components/custom-solution-note"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

type ProductHubCard = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  bullets: string[]
}

type ProductizedOfferCard = {
  bullets: string[]
  icon: LucideIcon
  lead: string
  price: string
  title: string
}

export const metadata: Metadata = {
  title: "Products | VishnuLabs",
  description: "Browse VishnuLabs products across automations, websites, custom software solutions, and private AI systems.",
  alternates: {
    canonical: "/products",
  },
}

const productHubCards: ProductHubCard[] = [
  {
    title: "AI Automations",
    description: "Scheduling, intake, research, voice, and nurture systems built to remove repetitive ops work and improve response speed.",
    href: "/automations",
    icon: CalendarClock,
    bullets: ["Voice, scheduling, intake, and nurture", "Productized flows for faster launch", "Custom variations available"],
  },
  {
    title: "Websites",
    description: "High-visibility websites and landing pages for startups, hospitals, clinics, transport teams, moving companies, and law services.",
    href: "/websites",
    icon: Globe,
    bullets: ["Conversion-focused page structure", "Domain management support", "Automation-ready lead capture"],
  },
  {
    title: "Custom Software",
    description: "Internal tools, dashboards, workflow layers, and custom software solutions built around the actual operational bottleneck.",
    href: "/custom-software",
    icon: Workflow,
    bullets: ["Admin and ops dashboards", "Workflow-specific tools", "Connected website-to-ops systems"],
  },
  {
    title: "Stealth-Mode AI Vault",
    description: "Private internal AI infrastructure with redaction, offline retrieval, and leak-proof controls for sensitive environments.",
    href: "/stealth-vault",
    icon: FolderLock,
    bullets: ["Air-gapped and private", "Custom vault requirements available", "Manual onboarding and support"],
  },
]

const productizedOffers: ProductizedOfferCard[] = [
  {
    title: "Clinic Revenue Rescue",
    lead: "AI receptionist, booking, missed-call recovery, WhatsApp follow-up, and website/chat integration for clinics that need stronger revenue capture.",
    price: "Setup from $12,000 + monthly retainer",
    icon: MessageCircleHeart,
    bullets: ["AI receptionist", "Appointment booking", "Missed-call recovery", "WhatsApp follow-up", "Website/chat integration"],
  },
  {
    title: "Dealership Lead Capture System",
    lead: "Lead handling system for dealerships that need fast qualification, booking, and after-hours response across sales and service demand.",
    price: "$18,000-$30,000",
    icon: CarFront,
    bullets: ["Test-drive booking", "Service booking", "Instant lead qualification", "After-hours response", "CRM/dashboard"],
  },
  {
    title: "Premium Full-Stack Build",
    lead: "For businesses that want the redesign, booking stack, CRM/admin layer, AI automation, and privacy positioning handled as one serious build.",
    price: "$45,000-$100,000+",
    icon: PanelsTopLeft,
    bullets: ["Website redesign", "Full-stack booking/CRM/admin panel", "AI automation layer", "Privacy/security positioning"],
  },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
              <div data-reveal>
                <div className="badge-pill border-primary/20 bg-white/75 text-slate-700">Product hub</div>
                <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem]">
                  One place to view the full VishnuLabs platform.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Explore automations, websites, custom software solutions, and the private AI vault in a cleaner structure so buyers can
                  move from category to detail without getting lost.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                    <Link href="/book">
                      Book Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                    <Link href="/pricing">
                      View Pricing
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 max-w-2xl">
                  <CustomSolutionNote compact title="Need a custom product mix?" />
                </div>
              </div>

              <div className="section-shell-dark ambient-grid-dark p-6" data-reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "AI products and custom requirements in one navigation flow",
                    "Websites and domain support for visibility-focused teams",
                    "Custom software solutions for operational bottlenecks",
                    "Private AI vault options for sensitive environments",
                  ].map((item) => (
                    <article key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                      {item}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-2">
              {productHubCards.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="section-shell hover-rise-strong flex h-full flex-col p-6 sm:p-7"
                    data-reveal
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    <ul className="mt-5 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-primary">
                      Open product page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Productized offers</p>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  The offers buyers can understand quickly.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  If you want a cleaner sales story than “everything is custom,” these are the three serious packaged offers VishnuLabs can
                  lead with before moving into deeper custom scope.
                </p>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                {productizedOffers.map((item) => {
                  const Icon = item.icon

                  return (
                    <article key={item.title} className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.lead}</p>
                      <div className="mt-4 rounded-[20px] border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-slate-950">
                        {item.price}
                      </div>
                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                  <Link href="/pricing">
                    View Serious Pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                  <Link href="/book">
                    Book Offer Review
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
