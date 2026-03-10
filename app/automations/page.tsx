import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  BrainCircuit,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileText,
  MessageSquareMore,
  ShieldCheck,
} from "lucide-react"

import { ArchitecturePlaceholder } from "@/components/automations/architecture-placeholder"
import { AutomationCard } from "@/components/automations/automation-card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

type Automation = {
  description: string
  detail: string
  features: string[]
  href: string
  icon: LucideIcon
  nodes: string[]
  slug: string
  subtitle: string
  title: string
}

export const metadata: Metadata = {
  title: "AI Automations | VishnuLabs",
  description:
    "Explore VishnuLabs automation systems for scheduling, legal intake, legal research, and real estate lead nurture.",
  alternates: {
    canonical: "/automations",
  },
}

const automations: Automation[] = [
  {
    slug: "ai-scheduling-reminder-assistant",
    title: "AI Scheduling + Reminder Assistant",
    subtitle: "Natural language scheduling that keeps calendars full without manual back-and-forth.",
    description:
      "Automates appointment booking using natural language requests and syncs with Google Calendar or Calendly for confirmations and reminders.",
    detail:
      "This system reads scheduling intent from chat, email, or forms, checks availability, books the meeting, and triggers confirmation plus reminder sequences by SMS and email.",
    icon: CalendarClock,
    href: "#ai-scheduling-reminder-assistant",
    features: [
      "Natural language scheduling",
      "Calendar integrations",
      "Automated reminders",
      "Configurable business hours",
      "Retry + fallback logic",
    ],
    nodes: ["User request", "AI scheduler", "Calendar integration", "SMS + email reminders"],
  },
  {
    slug: "legal-client-intake-bot",
    title: "Legal Client Intake Bot",
    subtitle: "Conversational intake that screens, qualifies, and summarizes matters before handoff.",
    description:
      "AI chatbot that collects legal client information, validates responses, handles document uploads, and pushes summaries into lawyer workflows or CRMs.",
    detail:
      "The intake bot asks dynamic follow-up questions, gathers files, checks missing answers, and creates a structured summary so legal teams receive cleaner case context faster.",
    icon: MessageSquareMore,
    href: "#legal-client-intake-bot",
    features: [
      "Conversational intake flow",
      "Dynamic AI questioning",
      "Document upload support",
      "Case qualification",
      "CRM integration",
    ],
    nodes: ["Client conversation", "AI intake logic", "Docs + validation", "CRM + lawyer summary"],
  },
  {
    slug: "ai-legal-research-assistant",
    title: "AI Legal Research Assistant",
    subtitle: "Turn uploaded legal documents into facts, summaries, and draftable outputs.",
    description:
      "AI system that analyzes legal documents, extracts facts, summarizes content, and optionally fills legal templates automatically.",
    detail:
      "Built for document-heavy teams that need faster review. Upload PDFs or Word files, extract usable facts, generate summaries, and create template-ready output without repetitive manual review.",
    icon: BrainCircuit,
    href: "#ai-legal-research-assistant",
    features: [
      "Document ingestion (PDF / Word)",
      "OCR + text extraction",
      "Fact extraction",
      "Summarization",
      "Template generation",
    ],
    nodes: ["Document upload", "OCR + extraction", "Fact + summary layer", "Template output"],
  },
  {
    slug: "real-estate-lead-nurture-bot",
    title: "Real Estate Lead Nurture Bot",
    subtitle: "Automated follow-up that keeps new leads warm until they reply or book.",
    description:
      "Sends personalized email and SMS follow-up sequences to real estate leads until the lead responds, while updating CRM status behind the scenes.",
    detail:
      "The nurture bot keeps outreach active after inquiry capture, personalizes the message tone, detects replies, and hands active conversations back to agents with clean lead history.",
    icon: Building2,
    href: "#real-estate-lead-nurture-bot",
    features: [
      "Automated follow-up sequences",
      "AI personalized messages",
      "Email + SMS outreach",
      "Reply detection",
      "CRM lead tracking",
    ],
    nodes: ["Lead trigger", "AI follow-up engine", "Reply detection", "CRM tracking"],
  },
]

export default function AutomationsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="relative pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-12 h-[320px] w-[320px] rounded-full bg-orange-500/15 blur-[130px]" />
            <div className="absolute right-[-8%] top-10 h-[360px] w-[360px] rounded-full bg-amber-300/16 blur-[140px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div data-reveal>
                <div className="badge-pill border-primary/20 bg-white/75 text-slate-700">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Automation systems for modern business operations
                </div>

                <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem] lg:text-[5.2rem]">
                  AI Automation Systems for Modern Businesses
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Deploy scheduling, intake, research, and nurture workflows that remove repetitive ops work, keep response times fast,
                  and move clean data into the tools your team already uses.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    size="lg"
                    asChild
                    className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <Link href="/book" data-track="automations_request_demo_hero">
                      Request Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-slate-300/80 bg-white/75 px-7 text-sm font-semibold text-slate-900 hover:bg-white sm:h-14 sm:px-8 sm:text-base"
                  >
                    <Link href="/book" data-track="automations_book_consultation_hero">
                      Book Consultation
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="section-shell-dark ambient-grid-dark p-5 sm:p-6" data-reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: CalendarClock,
                      title: "Scheduling",
                      body: "Book meetings, send reminders, and respect business-hour logic.",
                    },
                    {
                      icon: MessageSquareMore,
                      title: "Intake",
                      body: "Collect structured client details before the handoff reaches your team.",
                    },
                    {
                      icon: FileText,
                      title: "Research",
                      body: "Extract facts and summaries from uploaded files without manual rework.",
                    },
                    {
                      icon: BellRing,
                      title: "Nurture",
                      body: "Follow up until the lead replies, with CRM visibility preserved.",
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <article key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5 halo-outline">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/12 text-orange-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl" data-reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Automation Grid</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Productized automations built to ship fast and run clean.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Start with one workflow or stack multiple systems together. Every automation below has a reusable structure and a clear
                deployment path.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {automations.map((automation) => (
                <AutomationCard
                  key={automation.slug}
                  description={automation.description}
                  href={automation.href}
                  icon={automation.icon}
                  title={automation.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl" data-reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Detailed Sections</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Automation detail, architecture flow, and next actions.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Each automation section below is built for client conversations: what it does, how it flows, and the next step to get it deployed.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {automations.map((automation, index) => {
                const Icon = automation.icon
                const dark = index % 2 === 0

                return (
                  <section
                    key={automation.slug}
                    id={automation.slug}
                    className={`${dark ? "section-shell-dark ambient-grid-dark" : "section-shell"} p-6 sm:p-8`}
                    data-reveal
                  >
                    <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                      <div>
                        <div
                          className={`badge-pill ${dark ? "border-white/10 bg-white/5 text-slate-200" : "border-slate-200 bg-slate-950 text-white"}`}
                        >
                          <Icon className={`h-3.5 w-3.5 ${dark ? "text-orange-300" : "text-orange-200"}`} />
                          Automation system
                        </div>

                        <h3 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
                          {automation.title}
                        </h3>
                        <p className={`mt-3 text-base leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{automation.subtitle}</p>
                        <p className={`mt-4 text-sm leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{automation.detail}</p>

                        <ul className="mt-6 space-y-3">
                          {automation.features.map((feature) => (
                            <li
                              key={feature}
                              className={`flex items-start gap-2 text-sm leading-6 ${dark ? "text-slate-200" : "text-slate-700"}`}
                            >
                              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-orange-300" : "text-primary"}`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                          <Button
                            asChild
                            className={`h-12 rounded-full px-6 text-sm font-semibold ${
                              dark
                                ? "bg-orange-500 text-white shadow-[0_16px_38px_rgba(249,115,22,0.35)] hover:bg-orange-400"
                                : "bg-slate-950 text-white hover:bg-slate-900"
                            }`}
                          >
                            <Link href="/book" data-track={`automations_${automation.slug}_request_demo`}>
                              Request Demo
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            className={`h-12 rounded-full px-6 text-sm font-semibold ${
                              dark
                                ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                                : "border-slate-300 bg-white text-slate-950 hover:bg-slate-50"
                            }`}
                          >
                            <Link href="/book" data-track={`automations_${automation.slug}_book_consultation`}>
                              Book Consultation
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-5">
                        <ArchitecturePlaceholder caption="Architecture diagram placeholder" nodes={automation.nodes} />

                        <div className={`grid gap-4 sm:grid-cols-2 ${dark ? "text-white" : "text-slate-950"}`}>
                          <article className={`rounded-[24px] border p-5 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
                            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
                              Workflow focus
                            </p>
                            <p className="mt-3 text-sm leading-7">{automation.description}</p>
                          </article>

                          <article className={`rounded-[24px] border p-5 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
                            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
                              Delivery note
                            </p>
                            <p className="mt-3 text-sm leading-7">
                              Designed to plug into existing calendars, CRMs, document flows, and messaging channels with minimal friction.
                            </p>
                          </article>
                        </div>
                      </div>
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell-dark ambient-grid-dark p-6 text-center sm:p-10" data-reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Footer CTA</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Deploy automation in your business within weeks
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Pick the workflow you need first, then expand from there. We scope, build, and launch systems your team can actually use.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-orange-500 px-7 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(249,115,22,0.35)] hover:bg-orange-400"
                >
                  <Link href="/book" data-track="automations_footer_request_demo">
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Link href="/book" data-track="automations_footer_book_consultation">
                    Book Consultation
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
