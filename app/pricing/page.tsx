import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CalendarClock,
  CheckCircle2,
  MessageSquareMore,
  ShieldCheck,
} from "lucide-react"

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
      "Cleaner bundled pricing than separate builds",
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
    icon: ShieldCheck,
    bullets: [
      "Stealth Vault + one production automation",
      "Private AI controls across sales and operations",
      "Best fit for compliance-heavy teams",
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <article className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-white/10 bg-white/5 text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
                  Pricing anchor
                </div>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">$15,000 one-time lifetime vault license</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  The flagship offer combines private AI search, redaction, offline retrieval, risk blocking, and a clear operational story
                  for security-sensitive teams.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {vaultBullets.map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-400">
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

              <article className="section-shell p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-slate-200 bg-slate-950 text-white">Custom systems</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Done-for-you automation builds starting at $4,997</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Voice, intake, reminders, reporting, and workflow automation packages are scoped around business impact and operational
                  complexity.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {customBullets.map((item) => (
                    <div key={item} className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
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
                    <div key={item.label} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white hover:bg-slate-900">
                    <Link href="/book">
                      Request Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                    <Link href="/automations">Compare Automations</Link>
                  </Button>
                </div>
              </article>
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

              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                {comboOffers.map((offer) => {
                  const Icon = offer.icon

                  return (
                    <article key={offer.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Icon className="h-5 w-5 text-orange-300" />
                        </div>
                        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {offer.badge}
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{offer.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{offer.audience}</p>
                        </div>
                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                          {offer.price}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">{offer.summary}</p>

                      <ul className="mt-5 space-y-2">
                        {offer.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button asChild className="h-11 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900">
                          <Link href="/book">
                            Request Combo Quote
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 rounded-full border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 hover:bg-slate-50">
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
                {automationPackages.map((item) => {
                  const Icon = item.icon

                  return (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Icon className="h-5 w-5 text-orange-300" />
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
                  <div key={item} className="rounded-[22px] border border-slate-200 bg-white p-5 text-sm text-slate-700">
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
