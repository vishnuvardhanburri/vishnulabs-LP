import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CalendarClock,
  CarFront,
  CheckCircle2,
  Globe,
  MessageCircleHeart,
  MessageSquareMore,
  PanelsTopLeft,
  ServerCog,
  ShieldCheck,
} from "lucide-react"

import { CustomSolutionNote } from "@/components/custom-solution-note"
import { ConfidenceRail } from "@/components/confidence-rail"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing | VishnuLabs",
  description: "Pricing overview for the Stealth Vault and done-for-you automation builds.",
  alternates: {
    canonical: "/pricing",
  },
}

const vaultBullets = [
  "Air-gapped and local deployment",
  "PII and secret redaction before AI processing",
  "Offline secure search across internal files",
  "Lifetime updates every 6 months",
  "One month of post-delivery support included",
]

const customBullets = [
  "AI voice reception",
  "Lead qualification and intake flows",
  "Scheduling and reminder automation",
  "Reporting, alerts, and admin handoff",
]

type AutomationPackage = {
  bullets: string[]
  href: string
  icon: LucideIcon
  note: string
  price: string
  title: string
}

type ComboOffer = {
  audience: string
  badge: string
  bullets: string[]
  href: string
  icon: LucideIcon
  price: string
  summary: string
  title: string
}

type ProductizedOffer = {
  audience: string
  billing: string
  bullets: string[]
  icon: LucideIcon
  note: string
  price: string
  title: string
}

const automationPackages: AutomationPackage[] = [
  {
    title: "AI Scheduling + Reminder Assistant",
    price: "Starting at $6,500",
    note: "Best for teams that need booking automation, reminder logic, and calendar sync with low manual overhead.",
    href: "/automations#ai-scheduling-reminder-assistant",
    icon: CalendarClock,
    bullets: ["Natural language scheduling", "Google Calendar / Calendly sync", "SMS + email reminders"],
  },
  {
    title: "Legal Client Intake Bot",
    price: "Starting at $8,500",
    note: "Built for law firms that need conversational intake, qualification, and clean structured summaries before lawyer review.",
    href: "/automations#legal-client-intake-bot",
    icon: MessageSquareMore,
    bullets: ["Dynamic AI intake flow", "Document upload support", "CRM and lawyer handoff"],
  },
  {
    title: "AI Legal Research Assistant",
    price: "Starting at $9,500",
    note: "Designed for document-heavy legal work where OCR, fact extraction, summaries, and templates save review time.",
    href: "/automations#ai-legal-research-assistant",
    icon: BrainCircuit,
    bullets: ["PDF / Word ingestion", "OCR + summarization", "Template generation"],
  },
  {
    title: "Real Estate Lead Nurture Bot",
    price: "Starting at $5,500",
    note: "Ideal for brokers and teams that need automated SMS + email follow-up until the lead replies or books.",
    href: "/automations#real-estate-lead-nurture-bot",
    icon: Building2,
    bullets: ["Follow-up sequences", "Reply detection", "CRM lead tracking"],
  },
]

const comboOffers: ComboOffer[] = [
  {
    title: "Startup Launch Combo",
    badge: "Startup",
    audience: "Best for startups and lean service teams that need fast front-desk automation without hiring a larger ops team first.",
    price: "From $9,500",
    summary: "Bundle AI Voice Receptionist with Scheduling + Reminder flows so inbound demand gets answered, booked, and followed through in one system.",
    href: "/book",
    icon: CalendarClock,
    bullets: [
      "Voice reception + booking flow in one scope",
      "Shared reminder and confirmation logic",
      "Optional website creation add-on for launch-ready funnels",
      "Cleaner bundled pricing than separate builds",
    ],
  },
  {
    title: "Website + Automation Combo",
    badge: "Web",
    audience: "For teams that want a cleaner public-facing presence before routing traffic into AI booking, intake, or follow-up workflows.",
    price: "From $11,500",
    summary: "Bundle website creation, domain setup, and one core automation product so launch, lead capture, and operations work as one package.",
    href: "/book",
    icon: Globe,
    bullets: [
      "Website creation aligned to the offer",
      "Domain management and launch support",
      "Automation-ready forms, booking, and CTA flow",
    ],
  },
  {
    title: "Industry Growth Combo",
    badge: "Industry",
    audience: "For law firms, clinics, real estate teams, mortgage operators, and service businesses that need industry-specific workflow logic.",
    price: "From $14,500",
    summary: "Pair the core response layer with legal intake, lead nurture, or reporting automation so each industry gets a fitted operating system instead of disconnected tools.",
    href: "/industries",
    icon: Building2,
    bullets: [
      "Pick voice + intake, scheduling, or nurture",
      "Industry-fit qualification and handoff rules",
      "Unified CRM, reminders, and admin reporting",
    ],
  },
  {
    title: "Private Ops Combo",
    badge: "Secure",
    audience: "For sensitive teams that need both client-facing automation and leak-proof internal AI controls.",
    price: "From $21,000",
    summary: "Bundle Stealth-Mode Internal AI Vault with one automation product for a secure stack that handles both internal knowledge and external demand capture.",
    href: "/stealth-vault",
    icon: ServerCog,
    bullets: [
      "Stealth Vault + one production automation",
      "Optional website and domain support around the secure stack",
      "Private AI controls across sales and operations",
      "Best fit for compliance-heavy teams",
    ],
  },
]

const priceComparisons = [
  {
    title: "Websites",
    market: "$8,000-$35,000+",
    ours: "From $6,500",
    note: "Focused website builds with conversion structure, mobile polish, and domain-launch support.",
  },
  {
    title: "AI Automations",
    market: "$8,000-$30,000+",
    ours: "From $4,997",
    note: "Productized automations with clearer scope and faster deployment than typical agency custom work.",
  },
  {
    title: "Custom Software",
    market: "$25,000-$120,000+",
    ours: "From $12,500",
    note: "Smaller, focused systems for real workflow bottlenecks instead of oversized enterprise-style builds.",
  },
  {
    title: "Private AI Vault",
    market: "$30,000-$150,000+",
    ours: "$15,000 launch offer",
    note: "Current one-time lifetime offer for the first 100 members, with custom requirements available.",
  },
]

const productizedOffers: ProductizedOffer[] = [
  {
    title: "Clinic Revenue Rescue",
    audience: "For clinics and patient-service teams that need front-desk coverage, stronger booking flow, and cleaner follow-up without adding more manual admin.",
    price: "Setup from $12,000",
    billing: "$2,000-$4,000/mo retainer",
    note: "Serious clinic-grade build for revenue rescue, appointment recovery, and day-to-day patient communication continuity.",
    icon: MessageCircleHeart,
    bullets: [
      "AI receptionist",
      "Appointment booking",
      "Missed-call recovery",
      "WhatsApp follow-up",
      "Website/chat integration",
    ],
  },
  {
    title: "Dealership Lead Capture System",
    audience: "For dealerships that need after-hours lead response, faster qualification, and tighter booking flow across sales and service demand.",
    price: "$18,000-$30,000",
    billing: "Optional support retainer",
    note: "Growth-tier system for dealerships where lead speed, booking quality, and CRM visibility affect revenue directly.",
    icon: CarFront,
    bullets: [
      "Test-drive booking",
      "Service booking",
      "Instant lead qualification",
      "After-hours response",
      "CRM/dashboard",
    ],
  },
  {
    title: "Premium Full-Stack Build",
    audience: "For teams that want the website, booking flow, CRM/admin layer, AI automation, and privacy positioning built as one premium operating system.",
    price: "$45,000-$100,000+",
    billing: "Enterprise/private AI tier",
    note: "Best fit for high-trust teams that need full-stack delivery quality, AI automation depth, and stronger privacy/security positioning in one scope.",
    icon: PanelsTopLeft,
    bullets: [
      "Website redesign",
      "Full-stack booking/CRM/admin panel",
      "AI automation layer",
      "Privacy/security positioning",
    ],
  },
]

const seriousPriceBands = [
  {
    label: "Starter systems",
    value: "$7k-$12k",
    detail: "Entry-point productized builds with defined scope and lighter integration complexity.",
  },
  {
    label: "Growth systems",
    value: "$15k-$30k",
    detail: "Stronger lead handling, CRM logic, reporting, and multi-step operational automation.",
  },
  {
    label: "Enterprise / private AI",
    value: "$40k-$100k+",
    detail: "Security-heavy or multi-surface systems with private AI, deeper integrations, and stakeholder handoff.",
  },
  {
    label: "Full-stack custom + AI",
    value: "$25k-$150k+",
    detail: "If you want full-stack build, AI automation, deployment, and support together, we quote in this range based on scope.",
  },
]

const pricingSignals = ["Transparent pricing", "Productized offers", "Combo bundles", "Custom packages", "Private AI available"]

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell app-shell-enter px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10" data-reveal>
              <div className="cloud-soft left-6 top-16 hidden h-16 w-24 lg:block" />
              <div className="cloud-soft right-20 top-24 hidden h-14 w-24 lg:block" />
              <div className="absolute -left-14 top-14 h-48 w-48 rounded-full bg-primary/10 blur-3xl orb-float" />
              <div className="absolute right-4 top-0 h-52 w-52 rounded-full bg-sky-300/14 blur-3xl orb-float-slow" />

              <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
                <article className="section-shell-dark ambient-grid-dark beam-sweep p-6 sm:p-8" data-reveal>
                  <div className="badge-pill border-white/10 bg-white/5 text-slate-200">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
                    Pricing anchor
                  </div>
                  <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    $15,000 one-time lifetime vault license
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    The flagship offer combines private AI search, redaction, offline retrieval, risk blocking, and a clear operational story
                    for security-sensitive teams.
                  </p>

                  <div className="mt-5 rounded-[24px] border border-primary/18 bg-primary/10 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100">Launch scarcity</p>
                        <p className="mt-2 text-lg font-semibold text-white">First 100 members only</p>
                      </div>
                      <span className="rounded-full border border-sky-300/20 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                        20-day window
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      The one-time lifetime vault license is a launch offer for the first 100 members. Once those slots are filled, Tier 1
                      closes even if the timer still has time left.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {vaultBullets.map((item) => (
                      <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white hover:bg-slate-900">
                      <Link href="/stealth-vault">
                        View Offer Details
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10">
                      <Link href="/book">Book Buying Call</Link>
                    </Button>
                  </div>
                </article>

                <article className="panel-premium hero-sky-grid overflow-hidden p-6 sm:p-8" data-reveal style={{ transitionDelay: "80ms" }}>
                  <div className="badge-pill border-primary/10 bg-white/80 text-slate-700">Custom systems</div>
                  <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    Done-for-you automation builds starting at $4,997
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Voice, intake, reminders, reporting, and workflow automation packages are scoped around business impact and operational
                    complexity.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {pricingSignals.map((item) => (
                      <span key={item} className="soft-chip border-primary/10 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {customBullets.map((item) => (
                      <div key={item} className="metric-float px-4 py-3 text-sm font-medium text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Build focus", value: "Conversion" },
                      { label: "Delivery style", value: "Systemized" },
                      { label: "Ops fit", value: "Custom-scoped" },
                    ].map((item) => (
                      <div key={item.label} className="metric-float p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-950">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white hover:bg-slate-900">
                      <Link href="/book">
                        Request Demo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                      <Link href="/automations">Compare Automations</Link>
                    </Button>
                  </div>

                  <div className="dashboard-stage px-3 pt-3">
                    <Image
                      src="/marketing/sentinel-shield/vishnulabs_sales_demo_v1_3.webp"
                      alt="VishnuLabs sales and offer walkthrough"
                      width={1920}
                      height={1080}
                      quality={100}
                      priority
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="h-full w-full rounded-[24px] object-cover object-top"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Why choose us</p>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Transparent pricing, cleaner scope, and a stronger operating fit.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Buyers should not have to guess what they are paying for. VishnuLabs keeps the pricing story clear: typical market ranges,
                  our starting points, and what is actually included.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
                {priceComparisons.map((item, index) => (
                  <article
                    key={item.title}
                    className="metric-float hover-rise-strong p-6"
                    data-reveal
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <p className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</p>
                    <div className="mt-5 rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Typical market range</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">{item.market}</p>
                    </div>
                    <div className="mt-3 rounded-[20px] border border-primary/20 bg-primary/10 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Our pricing</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">{item.ours}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.note}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "Clear scope before build starts",
                  "Direct access for custom-package questions",
                  "Real proof and operating context, not vague promises",
                ].map((item) => (
                  <div key={item} className="metric-float px-4 py-4 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <CustomSolutionNote title="Not sure which package fits?" />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-4 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <ConfidenceRail
              eyebrow="Pricing confidence"
              title="The page should make internal approval easier, not harder."
              subtitle="This structure is designed so founders, operators, and decision-makers can scan the range, compare options, and understand where custom scope starts without digging through vague sales copy."
            />
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Productized offers</p>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Three serious offers with pricing that matches real business impact.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  These are not small-freelancer packages. Each offer is scoped for teams that need a real front-desk, lead-capture, or
                  full-stack operating system with cleaner ownership and stronger execution.
                </p>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                {productizedOffers.map((offer, index) => {
                  const Icon = offer.icon

                  return (
                    <article
                      key={offer.title}
                      className="metric-float hover-rise-strong beam-sweep relative flex h-full flex-col overflow-hidden p-6"
                      data-reveal
                      style={{ transitionDelay: `${index * 70}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
                          <Icon className="h-5 w-5 text-sky-300" />
                        </div>
                        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {offer.billing}
                        </div>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{offer.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{offer.audience}</p>

                      <div className="mt-4 rounded-[20px] border border-white/80 bg-white/76 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Pricing</p>
                        <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{offer.price}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{offer.note}</p>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {offer.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto grid gap-3 pt-6">
                        <Button asChild className="h-11 w-full rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900">
                          <Link href="/book">
                            Request Offer Scope
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 w-full rounded-full border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                          <Link href="/products">
                            Compare With Other Products
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {seriousPriceBands.map((item, index) => (
                  <article
                    key={item.label}
                    className="metric-float hover-rise-strong p-5"
                    data-reveal
                    style={{ transitionDelay: `${index * 55}ms` }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8">
                <CustomSolutionNote title="Need a custom full-stack + AI package?" />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Combo offers</p>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Bundle pricing for startups and every industry stage
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  If you need more than one product, we scope it as one operating system instead of stacking disconnected projects. That keeps
                  the handoff cleaner, the rollout faster, and the total investment easier to justify.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-2 2xl:grid-cols-4">
                {comboOffers.map((offer, index) => {
                  const Icon = offer.icon

                  return (
                    <article
                      key={offer.title}
                      className="metric-float hover-rise-strong flex h-full flex-col p-6"
                      data-reveal
                      style={{ transitionDelay: `${index * 65}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
                          <Icon className="h-5 w-5 text-sky-300" />
                        </div>
                        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {offer.badge}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <h3 className="max-w-[14ch] text-2xl font-semibold tracking-tight text-slate-950">{offer.title}</h3>
                        <div className="shrink-0 rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                          {offer.price}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">{offer.audience}</p>
                      <p className="mt-4 rounded-[20px] border border-white/80 bg-white/76 px-4 py-3 text-sm leading-7 text-slate-700">
                        {offer.summary}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {offer.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto grid gap-3 pt-6">
                        <Button asChild className="h-11 w-full rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900">
                          <Link href="/book">
                            Request Combo Quote
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 w-full rounded-full border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                          <Link href={offer.href}>
                            Learn More
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Automation pricing</p>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Pricing for the new automation systems
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  These are starting prices for the core automation packages. Final scope depends on integrations, branching logic,
                  messaging volume, compliance requirements, and handoff complexity.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {automationPackages.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.title}
                      className="metric-float hover-rise-strong flex h-full flex-col p-6"
                      data-reveal
                      style={{ transitionDelay: `${index * 70}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Icon className="h-5 w-5 text-sky-300" />
                        </div>
                        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {item.price}
                        </div>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.note}</p>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button asChild className="h-11 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900">
                          <Link href="/book">
                            Request Demo
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 rounded-full border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                          <Link href={item.href}>
                            View Details
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What is included in every deployment</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  "Discovery and architecture alignment",
                  "QA checklist and go-live validation",
                  "Admin handoff plus post-launch support",
                ].map((item) => (
                  <div key={item} className="metric-float px-5 py-5 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
