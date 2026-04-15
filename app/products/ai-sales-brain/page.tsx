import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Bot,
  BrainCircuit,
  Building2,
  Cpu,
  Mail,
  Network,
  ShieldCheck,
  ShieldOff,
  Sparkles,
} from "lucide-react"

import { AppLink } from "@/components/app-link"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export const metadata: Metadata = {
  title: "AI Sales Brain | Enterprise Outbound Infrastructure | VishnuLabs",
  description:
    "Private outbound infrastructure for companies that want to own the engine, scale personalized outreach, and stop paying recurring SaaS tax.",
  alternates: {
    canonical: "/products/ai-sales-brain",
  },
}

const heroStats = [
  {
    label: "Scalable outreach",
    value: "10,000 emails/day",
    detail: "Distributed sending architecture designed for inbox-first outbound at real volume.",
  },
  {
    label: "Asset ownership",
    value: "Code, servers, database",
    detail: "This is private infrastructure you own after delivery, not rented software with seat caps.",
  },
  {
    label: "Launch window",
    value: "60-day rollout",
    detail: "Cluster deployment, warm-up, agent tuning, and full scale-up handled in one implementation path.",
  },
]

const swarmAgents = [
  {
    icon: BrainCircuit,
    name: "The Lead Researcher",
    role: "SDR Agent",
    description:
      "Scans LinkedIn profiles, company sites, and recent news to write hyper-personalized opening lines that sound like a top rep did the homework.",
  },
  {
    icon: Sparkles,
    name: "The Intent Specialist",
    role: "AE Agent",
    description:
      "Monitors replies in real time and classifies them into Interested, Not Interested, Out of Office, or Follow-up Requested with LLM-based intent detection.",
  },
  {
    icon: Network,
    name: "The Multi-Touch Orchestrator",
    role: "Account swarm agent",
    description:
      "Runs account-based sequences across the CEO, manager, and CXO layers while keeping threads coordinated so the motion feels like a real internal conversation.",
  },
]

const infrastructure = [
  {
    icon: Cpu,
    title: "Distributed pod cluster",
    detail:
      "Deploy across 10+ VPS pods, each with its own IP and isolated risk profile. If one pod is throttled, the remaining cluster keeps working.",
  },
  {
    icon: Bot,
    title: "Decoupled intelligence stack",
    detail:
      "Java backend for execution, Next.js dashboard for control, BillionMail for sending power, and OpenRouter-backed LLMs for research, writing, and reply handling.",
  },
  {
    icon: ShieldCheck,
    title: "Global killswitch",
    detail:
      "24/7 monitoring pauses every pod instantly if bounce rates rise above the safety threshold, protecting domain reputation before damage spreads.",
  },
]

const roadmap = [
  {
    window: "Days 1-15",
    title: "Foundation",
    detail: "Deploy the pod cluster, configure VPS nodes, and harden SPF, DKIM, and DMARC.",
  },
  {
    window: "Days 16-30",
    title: "Intelligence training",
    detail: "Train the AI agents on your product knowledge, voice, positioning, and media kit.",
  },
  {
    window: "Days 31-45",
    title: "Trust building",
    detail: "Warm domains and establish sending credibility with Google and Outlook before aggressive scale.",
  },
  {
    window: "Days 46-60",
    title: "War speed",
    detail: "Scale to full outbound velocity with CRM syncing, automated reply handling, and live monitoring.",
  },
]

const packages = [
  {
    name: "Startup Package",
    label: "The launch wedge",
    price: "$7,000",
    podCluster: "1-2 pod cluster",
    sendVolume: "2,000 emails/day",
    features: [
      "Basic AI personalization",
      "Core sequence engine",
      "60-day white-glove setup and management",
    ],
  },
  {
    name: "The Team Replacement",
    label: "Best fit for growth teams",
    price: "$14,000",
    podCluster: "5 pod cluster",
    sendVolume: "5,000 emails/day",
    features: [
      "Account-based logic",
      "Sentiment and intent detection",
      "60-day white-glove setup and management",
    ],
    featured: true,
  },
  {
    name: "Enterprise Beast",
    label: "Full outbound ownership",
    price: "$21,000",
    podCluster: "10+ pod cluster",
    sendVolume: "10,000+ emails/day",
    features: [
      "Full white-label dashboard",
      "Priority ghost threading",
      "Continuous deliverability insurance",
    ],
  },
]

const supportLayers = [
  "Postmaster monitoring to protect IP health and inbox placement.",
  "Domain rotation strategy to keep high-volume sending stable.",
  "Brain upgrades as new LLM models become faster and smarter.",
  "Ongoing pod maintenance so your team stays focused on closing.",
]

const roiCards = [
  {
    label: "Traditional human team",
    value: "~$165,000 / year",
    detail: "Salaries, software fees, coordination overhead, and recurring outbound tooling tax.",
    tone: "border-red-400/16 bg-red-500/[0.05]",
  },
  {
    label: "AI Sales Brain",
    value: "~$22,750 year 1",
    detail: "Includes the one-time build plus ongoing infrastructure support starting on day 91.",
    tone: "border-cyan-300/18 bg-cyan-400/[0.06]",
  },
  {
    label: "Year 1 savings",
    value: "$142,250",
    detail: "Year 2 and beyond typically clears $155,000+ in annual savings while you still own the stack.",
    tone: "border-emerald-300/18 bg-emerald-400/[0.08]",
  },
]

export default function AiSalesBrainPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Sales Brain",
    description:
      "Enterprise outbound infrastructure for owning private sales infrastructure, scaling AI-powered outreach, and reducing dependence on recurring SDR and SaaS spend.",
    brand: { "@type": "Brand", name: "VishnuLabs" },
    category: "Enterprise Outbound Infrastructure",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "7000",
      highPrice: "21000",
      offerCount: "3",
    },
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 text-white md:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-12rem] top-[8rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[160px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/12 blur-[160px] mix-blend-screen" />
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm leading-7 text-white/64 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>

        <section className="cinema-section-shell reveal-in mt-6 px-6 py-10 shadow-[0_24px_90px_rgba(3,10,24,0.22)] md:px-8 md:py-12">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="section-kicker text-[11px] uppercase">Enterprise outbound infrastructure</p>
              <h1 className="mt-6 text-balance font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white md:text-7xl">
                AI Sales Brain
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Own the engine. Stop paying the SaaS tax. We build a private outbound system your team controls forever, with AI agents
                doing the research, writing, routing, and reply handling that usually burns headcount and margin.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <AuditCtaButton trackingSource="ai_sales_brain_hero_cta" className="px-7 py-3 text-sm">
                  Get Free System Audit
                  <ArrowUpRight className="h-4 w-4" />
                </AuditCtaButton>
                <AppLink
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  View pricing
                  <ArrowRight className="h-4 w-4" />
                </AppLink>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
                <p className="text-sm leading-7 text-white/86">
                  Most outbound teams rent fragile software stacks and keep adding SDR cost on top. This flips the model: private
                  infrastructure, full ownership, and high-volume execution without seat limits or lead caps.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {heroStats.map((item) => (
                <article key={item.label} className="cinema-card rounded-[28px] bg-black/22 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-white/68">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="cinema-card cinema-card-hover float-card-soft rounded-[28px] px-6 py-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">The vision</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Replace rented outbound tooling with owned infrastructure.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              The AI Sales Brain is built for companies that want more than a campaign tool. It is a private outbound layer that keeps
              the sending engine, deliverability controls, and intelligence stack under your control.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "No per-lead tax, no seat pricing, no rented growth bottleneck.",
              "AI agents work around the clock without handoff fatigue or inconsistency.",
              "Reply handling, account-based logic, and CRM sync stay inside one operating model.",
            ].map((item, index) => (
              <article
                key={item}
                className={`cinema-card cinema-card-hover rounded-[28px] px-6 py-6 ${
                  index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                }`}
              >
                <p className="text-sm leading-7 text-white/78">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cinema-section-shell reveal-in mt-8 px-6 py-10 md:px-8 md:py-12">
          <div className="max-w-3xl">
            <p className="section-kicker text-[11px] uppercase">Agent swarm</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Your digital workforce runs research, intent triage, and multi-touch sequencing 24/7.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/64">
              Three specialized agents replace repetitive outbound labor while keeping the motion personalized, coordinated, and measurable.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {swarmAgents.map((agent, index) => {
              const Icon = agent.icon

              return (
                <article
                  key={agent.name}
                  className={`cinema-card cinema-card-hover rounded-[30px] px-6 py-6 ${
                    index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-zinc-300">{agent.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{agent.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">{agent.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="cinema-section-shell reveal-in px-6 py-10 md:px-8 md:py-12">
            <p className="section-kicker text-[11px] uppercase">Technical backbone</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Built like infrastructure, not a lightweight app.</h2>
            <div className="mt-6 grid gap-4">
              {infrastructure.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="cinema-card rounded-[26px] bg-black/18 px-5 py-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-white/68">{item.detail}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </article>

          <article className="cinema-card cinema-card-hover float-card-soft rounded-[28px] px-6 py-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">Why operators buy this</p>
            <div className="mt-5 grid gap-3">
              {[
                {
                  icon: Mail,
                  title: "Primary-inbox design",
                  detail: "Deliverability strategy is built into the infrastructure from day one instead of treated like a later repair.",
                },
                {
                  icon: Building2,
                  title: "White-label control",
                  detail: "The dashboard, servers, and outbound logic can all live under your operational ownership.",
                },
                {
                  icon: ShieldOff,
                  title: "No seat caps",
                  detail: "Growth is not tied to adding more licenses every time you want to widen a campaign.",
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="rounded-[24px] border border-white/10 bg-black/18 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-fuchsia-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/68">{item.detail}</p>
                  </div>
                )
              })}
            </div>
          </article>
        </section>

        <section className="cinema-section-shell reveal-in mt-8 px-6 py-10 md:px-8 md:py-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-[11px] uppercase">Implementation roadmap</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                60 days from raw infrastructure to full outbound speed.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/64">
              The rollout is staged to protect deliverability while the engine learns your positioning, sequence logic, and response handling.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((phase, index) => (
              <article
                key={phase.window}
                className={`cinema-card rounded-[28px] bg-black/18 px-5 py-5 ${
                  index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : index === 2 ? "float-card-soft float-card-delay-2" : "float-card-soft"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">{phase.window}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{phase.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="cinema-section-shell reveal-in mt-8 px-6 py-10 md:px-8 md:py-12">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-[11px] uppercase">Pricing</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                One-time build pricing for teams that want to own the stack.
              </h2>
            </div>
            <div className="rounded-[24px] border border-amber-300/18 bg-amber-400/[0.08] px-5 py-4 text-sm leading-7 text-amber-100">
              All packages include a 60-day white-glove setup and management period.
            </div>
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-3">
            {packages.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[32px] border px-6 py-6 shadow-[0_20px_80px_rgba(3,10,24,0.2)] ${
                  plan.featured
                    ? "border-cyan-300/22 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(255,255,255,0.04))]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">{plan.label}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{plan.price}</p>
                  <p className="pb-1 text-sm text-white/60">one-time</p>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="cinema-card rounded-[22px] bg-black/18 px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">Cluster</p>
                    <p className="mt-2 text-sm leading-7 text-white/80">{plan.podCluster}</p>
                  </div>
                  <div className="cinema-card rounded-[22px] bg-black/18 px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">Volume</p>
                    <p className="mt-2 text-sm leading-7 text-white/80">{plan.sendVolume}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3 rounded-[22px] border border-white/10 bg-black/18 p-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-7 text-white/76">{feature}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
            <article className="cinema-card rounded-[30px] border border-white/10 bg-white/[0.04] px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">Ongoing support</p>
              <div className="mt-4 flex items-end gap-2">
                <BadgeDollarSign className="h-6 w-6 text-emerald-200" />
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">$750 / month</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Starting on day 91, we keep the engine sharp so your domain health, pods, and AI agents stay production-ready.
              </p>
            </article>

            <div className="grid gap-3 md:grid-cols-2">
              {supportLayers.map((item) => (
                <article key={item} className="cinema-card rounded-[24px] bg-black/18 px-5 py-4">
                  <p className="text-sm leading-7 text-white/76">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="cinema-section-shell reveal-in px-6 py-10 md:px-8 md:py-12">
            <p className="section-kicker text-[11px] uppercase">ROI</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The million-dollar difference is not hype. It is math.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/64">
              Traditional outbound teams compound cost through people, tooling, and coordination. AI Sales Brain compresses that spend
              into owned infrastructure with lower recurring overhead.
            </p>
          </article>

          <div className="grid gap-4">
            {roiCards.map((item) => (
              <article key={item.label} className={`rounded-[30px] border px-6 py-6 ${item.tone}`}>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cinema-section-shell reveal-in mt-8 px-6 py-12 text-center shadow-[0_24px_90px_rgba(3,10,24,0.2)] md:px-10 md:py-14">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to own your sales infrastructure?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
            We&apos;ll map the outbound architecture, show the best-fit cluster size, and give you a clear rollout path before anything gets built.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <AuditCtaButton trackingSource="ai_sales_brain_final_cta" className="px-7 py-3 text-sm">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </AuditCtaButton>
            <AppLink
              href="https://cal.com/vishnuvardhanburri/15min"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Book strategy call
              <ArrowRight className="h-4 w-4" />
            </AppLink>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/54">We respond within 24 hours.</p>
        </section>
      </div>
    </main>
  )
}
