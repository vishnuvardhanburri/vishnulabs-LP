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
  title: "AI Sales Brain | Enterprise Revenue Infrastructure | Xavira Tech Labs",
  description:
    "Private revenue infrastructure for companies that want to own the engine, replace rented sales software, and scale high-volume outbound on private servers.",
  alternates: {
    canonical: "/products/ai-sales-brain",
  },
}

const heroStats = [
  {
    label: "Execution speed",
    value: "10,000+ emails/day",
    detail: "Distributed cluster logic built for high-volume execution while protecting primary-domain reputation.",
  },
  {
    label: "Ownership",
    value: "Engine, code, data",
    detail: "Once deployed, you own the full software stack and database instead of paying recurring SaaS tax.",
  },
  {
    label: "Autonomy",
    value: "Zero-touch funnel flow",
    detail: "Input credentials, choose your industry, and let the Brain run lead hunting through reply triage.",
  },
]

const swarmAgents = [
  {
    icon: BrainCircuit,
    name: "SDR Agent",
    role: "The Researcher",
    description:
      "Scans LinkedIn, recent news, and podcasts to write hyper-personalized intro lines for every prospect.",
  },
  {
    icon: Network,
    name: "Account Swarm",
    role: "The Orchestrator",
    description:
      "Executes multi-touch account-based sequences across CEOs, Managers, and CXOs simultaneously without handoff fatigue.",
  },
  {
    icon: Sparkles,
    name: "AE Agent",
    role: "The Intent Specialist",
    description:
      "Monitors your inbox in real time, classifying replies like Interested, OOO, and Objection with human-level sentiment detection.",
  },
]

const infrastructure = [
  {
    icon: Cpu,
    title: "Decoupled pod architecture",
    detail:
      "Provision a private 10-pod VPS cluster with isolated sending logic so scale can increase without exposing your main brand domain.",
  },
  {
    icon: Bot,
    title: "Zero-touch autonomy",
    detail:
      "The Brain handles lead hunting, message generation, orchestration, and reply handling after setup instead of waiting on constant human intervention.",
  },
  {
    icon: ShieldCheck,
    title: "Owned infrastructure",
    detail:
      "Private servers, private data, private engine. No middleman controls the software stack after deployment.",
  },
]

const roadmap = [
  {
    window: "Phase 1",
    title: "Foundation",
    detail: "Provision your private VPS cluster and harden SPF, DKIM, and DMARC for enterprise-grade inbox trust.",
  },
  {
    window: "Phase 2",
    title: "Intelligence Mapping",
    detail: "Train the AI agents on your tone of voice, product knowledge, personas, and proprietary mapping templates.",
  },
  {
    window: "Phase 3",
    title: "The Trust Handshake",
    detail: "Warm domains and build sender reputation so global mail servers recognize the infrastructure as high-authority.",
  },
  {
    window: "Phase 4",
    title: "War Speed Execution",
    detail: "Scale to full velocity with autonomous reply handling, Ghost Threading, and live CRM synchronization.",
  },
]

const packages = [
  {
    name: "The Launch Wedge",
    label: "Best for small founders",
    price: "$7,000",
    podCluster: "1-2 pod cluster",
    sendVolume: "2,000 leads/day",
    features: [
      "White-glove setup and 60 days of technical management",
      "Private outbound infrastructure foundation",
      "Fastest path to owned outbound execution",
    ],
  },
  {
    name: "The Autonomous Sales Dept",
    label: "Replaces 5+ full-time SDRs",
    price: "$14,000",
    podCluster: "5 pod cluster",
    sendVolume: "5,000 leads/day",
    features: [
      "Full account-based mapping",
      "AI reply intent classification",
      "White-glove setup and 60 days of technical management",
    ],
    featured: true,
  },
  {
    name: "The Enterprise Beast",
    label: "The 10k/day infrastructure",
    price: "$21,000",
    podCluster: "10+ pod cluster",
    sendVolume: "10,000+ leads/day",
    features: [
      "Full white-label dashboard",
      "Priority Ghost Threading",
      "White-glove setup and 60 days of technical management",
    ],
  },
]

const fuelInputs = [
  "Your private VPS logins.",
  "Your OpenRouter AI keys.",
  "Your sending domains.",
]

const roiCards = [
  {
    label: "Traditional team",
    value: "~$165,000 / year",
    detail: "Salaries plus rented software keep the cost base high before you even improve output.",
    tone: "border-red-400/16 bg-red-500/[0.05]",
  },
  {
    label: "AI Sales Brain",
    value: "~$22,750 year 1",
    detail: "Year 1 investment stays far below the cost of people plus recurring outbound SaaS.",
    tone: "border-cyan-300/18 bg-cyan-400/[0.06]",
  },
  {
    label: "The difference",
    value: "$142,250",
    detail: "Year 2 and beyond can clear $155,000+ in annual savings while you still own the stack.",
    tone: "border-emerald-300/18 bg-emerald-400/[0.08]",
  },
]

export default function AiSalesBrainPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Sales Brain",
    description:
      "Enterprise revenue infrastructure for owning private outbound operations, replacing rented sales software, and scaling AI-powered outreach on private servers.",
    brand: { "@type": "Brand", name: "Xavira Tech Labs" },
    category: "Enterprise Revenue Infrastructure",
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
              <p className="section-kicker text-[11px] uppercase">Enterprise revenue infrastructure</p>
              <h1 className="mt-6 text-balance font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white md:text-7xl">
                AI Sales Brain
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                The last sales team you&apos;ll ever hire. AI Sales Brain is a private, owned outbound infrastructure designed to replace
                traditional rented SaaS software with a system you control on your own servers.
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
                  Stop renting your growth. Most companies are trapped in rising subscriptions and rising headcount cost. We flip the
                  model with total asset ownership, zero-touch autonomy, and private infrastructure built for scale.
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
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Owned infrastructure, not rented growth.</h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              You own the engine, the code, and the data forever. The Brain replaces fragile subscription tooling with private revenue
              infrastructure your team controls end to end.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Total asset ownership after deployment with no middleman between your team and the outbound engine.",
              "Zero-touch autonomy that can run from lead hunting all the way through reply triage.",
              "Decoupled pod architecture designed for 10,000+ emails a day while keeping primary-domain reputation safe.",
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
            <p className="section-kicker text-[11px] uppercase">Digital workforce</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Three specialized agents replace the repetitive labor of a human sales department.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/64">
              They work 24/7 with zero handoff fatigue while keeping research, orchestration, and inbox triage inside one agent swarm.
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
            <p className="section-kicker text-[11px] uppercase">Infrastructure</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built as enterprise revenue infrastructure, not lightweight sales software.
            </h2>
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
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">Why this wins</p>
            <div className="mt-5 grid gap-3">
              {[
                {
                  icon: Mail,
                  title: "SaaS tax removed",
                  detail: "No seat-based growth penalty and no recurring rented stack sitting between you and outbound execution.",
                },
                {
                  icon: Building2,
                  title: "Private servers",
                  detail: "You provide the infrastructure inputs, which keeps ownership real instead of dependent on another vendor.",
                },
                {
                  icon: ShieldOff,
                  title: "Primary-domain safety",
                  detail: "Decoupled sending pods separate scale from the reputation risk of your core branded domain.",
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
              <p className="section-kicker text-[11px] uppercase">Path to war speed</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                The system scales only after trust is built.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/64">
              We move away from rigid calendars and harden the infrastructure first so the engine reaches high-authority status before scale.
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
                The investment in your future.
              </h2>
            </div>
            <div className="rounded-[24px] border border-amber-300/18 bg-amber-400/[0.08] px-5 py-4 text-sm leading-7 text-amber-100">
              All packages include white-glove setup and 60 days of technical management.
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
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300">The Fuel</p>
              <div className="mt-4 flex items-end gap-2">
                <BadgeDollarSign className="h-6 w-6 text-emerald-200" />
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">What you provide</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/68">
                To ensure 100% ownership, you provide the raw materials and we build the engine around them.
              </p>
            </article>

            <div className="grid gap-3 md:grid-cols-3">
              {fuelInputs.map((item) => (
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
              The million-dollar difference.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/64">
              Traditional teams burn money on salaries and rented software. AI Sales Brain compresses that spend into owned infrastructure
              with radically lower annual cost.
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
            Ready to own your revenue infrastructure?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
            We&apos;ll map the architecture, show the right cluster for your volume, and lay out the clearest path to war speed before anything gets built.
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
