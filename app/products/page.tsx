import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CarFront,
  CheckCircle2,
  FolderLock,
  Globe,
  MessageCircleHeart,
  PanelsTopLeft,
  Workflow,
} from "lucide-react"

import { CustomSolutionNote } from "@/components/custom-solution-note"
import { ConfidenceRail } from "@/components/confidence-rail"
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

const productHeroSignals = ["AI automations", "Websites", "Custom software", "Private AI", "Custom packages available"]

const productHeroStats = [
  { value: "4 product lanes", label: "Clearer navigation" },
  { value: "$7k-$150k+", label: "Transparent ranges" },
  { value: "Founder-led", label: "Direct ownership" },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell app-shell-enter px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10" data-reveal>
              <div className="cloud-soft left-8 top-20 hidden h-16 w-24 lg:block" />
              <div className="cloud-soft right-16 top-24 hidden h-14 w-24 lg:block" />
              <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl orb-float" />
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-sky-300/18 blur-3xl orb-float-slow" />

              <div className="grid items-start gap-8 lg:grid-cols-[0.96fr_1.04fr]">
                <div data-reveal style={{ transitionDelay: "30ms" }}>
                  <div className="badge-pill border-primary/12 bg-white/80 text-slate-700">Product hub</div>
                  <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem]">
                    A cleaner product catalog for websites, systems, and private AI.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Explore automations, websites, custom software solutions, and the private AI vault through one sharper structure that
                    helps buyers move from category to fit without getting lost in agency-style clutter.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {productHeroSignals.map((item) => (
                      <span key={item} className="soft-chip border-primary/10 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
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

                <div className="panel-premium hero-sky-grid overflow-hidden p-4 sm:p-5" data-reveal style={{ transitionDelay: "100ms" }}>
                  <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="dashboard-stage px-3 pt-3">
                      <Image
                        src="/marketing/sentinel-shield/vishnulabs_sales_demo_v1_3.webp"
                        alt="VishnuLabs sales and product walkthrough interface"
                        width={1920}
                        height={1080}
                        quality={100}
                        priority
                        sizes="(max-width: 1024px) 100vw, 34vw"
                        className="h-full w-full rounded-[24px] object-cover object-top"
                      />
                    </div>

                    <div className="grid gap-3">
                      <div className="metric-float p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Platform view</p>
                        <div className="mt-3 grid gap-2">
                          {[
                            "Websites that route into real operations",
                            "Software layers for admin and reporting",
                            "Private AI and security-first build paths",
                          ].map((item) => (
                            <div key={item} className="rounded-2xl border border-white/80 bg-white/78 px-3 py-3 text-sm text-slate-700">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {productHeroStats.map((item) => (
                          <div key={item.label} className="metric-float px-4 py-3">
                            <p className="text-sm font-semibold text-slate-950 sm:text-base">{item.value}</p>
                            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
                        <Icon className="h-5 w-5 text-sky-300" />
                      </div>
                      <span className="soft-chip border-primary/10 text-slate-700">Open route</span>
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

                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                      <Button asChild className="h-11 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900">
                        <Link href={item.href}>
                          Open product page
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="h-11 rounded-full border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                        <Link href="/book">
                          Book fit call
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
                {productizedOffers.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.title}
                      className="metric-float hover-rise-strong beam-sweep relative flex h-full flex-col overflow-hidden p-6"
                      data-reveal
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
                          <Icon className="h-5 w-5 text-sky-300" />
                        </div>
                        <div className="rounded-full border border-primary/16 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {item.price}
                        </div>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.lead}</p>

                      <div className="mt-4 rounded-[24px] border border-white/85 bg-white/76 px-4 py-3 text-sm font-medium text-slate-700">
                        Custom solution available. Message or email us to tailor this to your workflow.
                      </div>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-col gap-3 pt-6">
                        <Button asChild className="h-11 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900">
                          <Link href="/pricing">
                            View serious pricing
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 rounded-full border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                          <Link href="/book">
                            Book offer review
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
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

        <section className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <ConfidenceRail
              eyebrow="How buyers read this page"
              title="Clear lanes, serious pricing, and less agency noise."
              subtitle="The product page now follows a calmer SaaS structure: route first, offer next, then proof and pricing. That helps buyers understand where they fit before they ever book a call."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
