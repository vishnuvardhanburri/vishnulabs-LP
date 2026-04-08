"use client"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"

const problemPoints = [
  "Employees pasting client data into AI tools",
  "No visibility into AI usage",
  "No clear audit trail for compliance",
  "Shadow AI usage growing across teams",
]

const deploymentOffers = [
  {
    title: "Risk Assessment",
    price: "$1,500",
    description: "See where AI usage is exposing the business before you deploy anything bigger.",
    stack: [
      "Outcome: exposure map and priority controls",
      "Speed: clear next steps in days",
      "Risk removal: no rollout required",
      "Proof: built from live AI usage patterns",
      "Access: direct audit review",
    ],
  },
  {
    title: "Pilot Deployment",
    price: "$7,500",
    description: "Control one workflow first. Validate the control layer before a broader rollout.",
    stack: [
      "Outcome: one risky workflow brought under control",
      "Speed: 2–3 weeks",
      "Risk removal: scoped and measurable",
      "Proof: production validation",
      "Access: audit + pilot review",
    ],
  },
  {
    title: "Full Deployment",
    price: "$18K–$35K",
    description: "Deploy the control layer across the workflows that matter most.",
    stack: [
      "Outcome: policy enforcement, logging, and control in the live path",
      "Speed: 2–4 weeks",
      "Risk removal: pilot first if needed",
      "Proof: law firm deployment model",
      "Access: review until stable",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For multi-team rollouts, stricter compliance coverage, and deeper governance requirements.",
    stack: [
      "Outcome: controlled AI usage at scale",
      "Speed: phased rollout",
      "Risk removal: staged deployment",
      "Proof: auditability and control coverage",
      "Access: priority support",
    ],
  },
]

const controlOutcomes = [
  "Sensitive prompts stopped before they leave the system",
  "Policy checks happen before AI output is returned",
  "Every interaction is logged and traceable",
  "Shadow AI usage becomes visible",
  "Compliance teams get audit-ready records",
  "Approved usage stays usable for staff",
]

const industries = [
  {
    title: "Law Firms",
    detail: "Protect confidential case data and keep it out of uncontrolled AI usage.",
  },
  {
    title: "Healthcare",
    detail: "Protect patient data and keep AI usage inside controlled workflows.",
  },
  {
    title: "Enterprises",
    detail: "Prevent internal leaks and control AI usage around sensitive business data.",
  },
]

const processSteps = [
  { title: "Risk Assessment", detail: "Map current AI usage and identify where data exposure risks exist." },
  { title: "System Design", detail: "Define the right controls, policies, and routing for your environment." },
  { title: "Pilot Deployment", detail: "Run a limited rollout on one workflow or team to validate the control layer in production." },
  { title: "Full Deployment", detail: "Integrate Sentinel into the workflows and systems your teams already use." },
  { title: "Monitoring & Protection", detail: "Keep AI activity controlled with ongoing visibility, alerts, and enforcement." },
]

const faqItems = [
  {
    question: "Why do teams need Sentinel?",
    answer:
      "Because AI usage usually spreads before control does. Sentinel adds the policy, logging, and interception layer before sensitive data leaves the system.",
  },
  {
    question: "How fast can Sentinel be deployed?",
    answer:
      "Most teams start with a risk assessment or pilot first. Typical deployment timing depends on workflow complexity and integrations.",
  },
  {
    question: "Does Sentinel support compliance work?",
    answer:
      "Yes. It helps teams build visibility, audit logs, and policy enforcement around HIPAA, GDPR, and similar requirements.",
  },
  {
    question: "Can teams start small?",
    answer:
      "Yes. A pilot deployment is the lowest-friction way to validate control on one workflow or one team before expanding.",
  },
  {
    question: "What kind of teams is Sentinel built for?",
    answer:
      "It is built for teams handling real client, patient, or operational data. Not lightweight experimentation use cases.",
  },
]

export function SentinelPageClient() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-14rem] top-[8rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
        <div className="orb-float absolute bottom-[16rem] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px] mix-blend-screen [animation-delay:2s]" />
      </div>
      <section className="px-5 pb-24 pt-36 text-center md:pt-40">
        <div className="cinema-section-shell reveal-in mx-auto max-w-6xl px-6 py-12 shadow-[0_24px_90px_rgba(3,10,24,0.28)] md:px-10 md:py-16">
          <p className="section-kicker reveal-in text-[11px] uppercase">Sentinel</p>
          <h1 className="reveal-in reveal-delay-1 mt-6 text-balance font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-7xl">
            AI Data Protection & Governance Infrastructure
          </h1>
          <p className="section-support-copy reveal-in reveal-delay-1 mx-auto mt-5 max-w-3xl text-lg leading-8">
            If your team uses AI with client, patient, or operational data, exposure is already happening.
          </p>
          <p className="section-support-copy reveal-in reveal-delay-2 mx-auto mt-4 max-w-3xl text-base leading-8">
            Missed policy checks. No audit trail. Sensitive prompts leaving the system.
          </p>
          <div className="reveal-in reveal-delay-2 mx-auto mt-6 max-w-3xl rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md">
            <p className="text-sm leading-7 text-white/88">
              This is not for early-stage teams experimenting. This is for companies already operating with real data and revenue.
            </p>
          </div>
          <p className="reveal-in reveal-delay-2 mx-auto mt-6 max-w-3xl text-base leading-8 text-white/56">
            Most organizations are already leaking sensitive data through AI tools without realizing it.
          </p>
          <p className="reveal-in reveal-delay-2 mt-4 text-sm leading-7 text-cyan-100/80">Critical infrastructure for AI data protection</p>
          <p className="reveal-in reveal-delay-2 mt-2 text-sm leading-7 text-white/52">Supports HIPAA, GDPR, DPDP-ready workflows</p>
          <div className="reveal-in reveal-delay-3 mt-8 flex justify-center">
            <AuditCtaButton trackingSource="sentinel_hero_cta" className="px-7 py-3 text-sm">
              Get Free System Audit
            </AuditCtaButton>
          </div>
          <div className="reveal-in reveal-delay-3 mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm leading-7 text-white/54">
            <span>Used in environments handling legal, medical, and financial data</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 md:inline-block" />
            <span>Supports HIPAA, GDPR, DPDP-ready workflows</span>
          </div>
          <p className="reveal-in reveal-delay-3 mt-4 text-sm leading-7 text-white/54">Limited onboarding capacity. No long-term contracts.</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Risk shows up quietly</h2>
          <ul className="mt-8 grid gap-4 text-base leading-8 text-white/72 md:grid-cols-2">
            {problemPoints.map((item, index) => (
              <li
                key={item}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-4 ${
                  index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                }`}
                style={{ animationDelay: `${index * 0.22}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-8 text-white/60">Most teams don&apos;t realize where data is leaking until it&apos;s too late.</p>
          <p className="mt-6 text-base leading-8 text-white/52">One unnoticed data leak can cost more than Sentinel itself.</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Not for everyone</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Not for early-stage teams without real workflows",
              "Not for teams without sensitive data",
              "Not for experimentation use cases",
            ].map((item, index) => (
              <div
                key={item}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-5 text-base leading-8 text-white/68 ${
                  index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-white/60">
            Sentinel is built for teams handling real client, patient, or operational data.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">What this looks like in the real world</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="float-card-soft rounded-[24px] border border-red-400/12 bg-red-500/[0.04] px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:bg-red-500/[0.06]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-red-200/76">Without Sentinel</p>
              <p className="mt-4 text-base leading-8 text-white/72">
                An employee pastes client data into ChatGPT. No visibility. No control. No audit trail.
              </p>
            </div>
            <div className="float-card-soft float-card-delay-1 rounded-[24px] border border-cyan-300/12 bg-cyan-400/[0.04] px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-400/[0.06]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/76">With Sentinel</p>
              <p className="mt-4 text-base leading-8 text-white/72">
                Sentinel intercepts, blocks, logs, and alerts instantly before sensitive data leaves the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">How it works</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
            User input enters. Sensitive data is checked. Unsafe prompts are blocked or redacted. Safe activity is logged.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-5 ${
                  index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">0{index + 1}</p>
                <p className="mt-4 text-xl font-semibold text-white">{step.title}</p>
                <p className="mt-3 text-base leading-8 text-white/64">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Control layer</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {controlOutcomes.map((feature, index) => (
              <div
                key={feature}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-5 text-base leading-8 text-white/72 ${
                  index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                }`}
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <p className="section-kicker text-[11px] uppercase">Sentinel case study</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Blocked sensitive client data from leaving AI tools
          </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="cinema-card cinema-card-hover float-card-soft rounded-[24px] px-5 py-5">
                <p className="section-kicker text-[11px] uppercase">Context</p>
                <p className="mt-3 text-base leading-8 text-white/72">Law Firm (AI Governance System)</p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/42">Problem</p>
              <p className="mt-3 text-base leading-8 text-white/64">
                Staff were using AI with confidential client data and no control layer in place.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/42">Solution</p>
              <p className="mt-3 text-base leading-8 text-white/64">
                Sentinel intercepts prompts, redacts sensitive data, and logs all activity before anything leaves the system.
              </p>
            </div>
            <div className="cinema-card cinema-card-hover float-card-soft float-card-delay-1 rounded-[24px] border-cyan-300/12 bg-cyan-400/[0.04] px-5 py-5">
              <p className="section-kicker text-[11px] uppercase">Result</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-[20px] border border-white/10 bg-black/18 px-4 py-4 text-2xl font-semibold text-white">
                  0 data leaks after deployment
                </div>
                <div className="rounded-[20px] border border-white/10 bg-black/18 px-4 py-4 text-2xl font-semibold text-white">
                  Full audit visibility
                </div>
              </div>
                <p className="mt-5 text-base leading-8 text-white/60">Deployed in 3 weeks</p>
              </div>
            </div>
            <div className="cinema-card cinema-card-hover float-card-soft mt-6 rounded-[24px] bg-black/18 px-5 py-5">
              <p className="text-base leading-8 text-white/72">
                “Before Sentinel, we had zero visibility into how AI was being used with client data. Now everything is controlled and logged.”
              </p>
              <p className="mt-3 text-sm leading-7 text-cyan-100/78">— Operations Lead, Law Firm</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/42">Based on real deployment scenarios</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-100/48">
                Deployment validated with real client workflows
              </p>
            </div>
          </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Who this is for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-5 ${
                  index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                }`}
              >
                <p className="text-xl font-semibold text-white">{industry.title}</p>
                <p className="mt-3 text-base leading-8 text-white/64">{industry.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Law Firms", "Healthcare", "Finance / Ops Teams"].map((tag) => (
              <span key={tag} className="cinema-card rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-6xl px-6 py-10 text-center md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Deployment ladder</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {deploymentOffers.map((offer, index) => (
              <div
                key={offer.title}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-6 text-left ${
                  offer.title === "Pilot Deployment"
                    ? "float-card-soft border-cyan-300/22 bg-cyan-400/[0.06]"
                    : index % 2 === 0
                      ? "float-card-soft"
                      : "float-card-soft float-card-delay-1"
                }`}
              >
                <p className="section-kicker text-[11px] uppercase">{offer.title}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{offer.price}</p>
                <p className="mt-4 text-base leading-8 text-white/64">{offer.description}</p>
                <div className="mt-5 grid gap-2 text-sm leading-7 text-white/66">
                  {offer.stack.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-white/56">Most teams start with pilot.</p>
          <p className="mt-2 text-base leading-8 text-white/52">2–4 weeks depending on integrations and system complexity.</p>
          <p className="mt-2 text-base leading-8 text-white/48">Limited onboarding capacity. No long-term contracts.</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Common questions</h2>
          <div className="mt-8 grid gap-4">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-5 ${
                  index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                }`}
                style={{ animationDelay: `${index * 0.16}s` }}
              >
                <p className="text-xl font-semibold text-white">{item.question}</p>
                <p className="mt-3 text-base leading-8 text-white/64">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 text-center">
        <div className="cinema-section-shell reveal-in mx-auto mb-8 max-w-5xl px-6 py-12 shadow-[0_24px_90px_rgba(3,10,24,0.18)] md:px-10 md:py-14">
          <p className="section-kicker text-[11px] uppercase">Entry offer</p>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Start with a free system audit
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
            We show where AI usage creates exposure, where policy breaks, and what to control first.
          </p>
          <div className="mx-auto mt-8 flex justify-center">
            <AuditCtaButton trackingSource="sentinel_entry_offer_cta" className="px-7 py-3 text-sm">
              Get Free System Audit
            </AuditCtaButton>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            {["Map AI usage across team", "Identify data leak points", "Show how Sentinel would prevent them"].map((item, index) => (
              <div
                key={item}
                className={`cinema-card cinema-card-hover rounded-[24px] px-5 py-5 text-base leading-8 text-white/72 ${
                  index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="cinema-section-shell reveal-in reveal-delay-1 mx-auto max-w-5xl px-6 py-12 shadow-[0_24px_90px_rgba(3,10,24,0.22)] md:px-10 md:py-14">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            If you&apos;re handling sensitive data, you already have exposure risk.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
            Sentinel prevents costly leaks, compliance failures, and unsafe AI usage before they spread.
          </p>
          <div className="mt-8 flex justify-center">
            <AuditCtaButton trackingSource="sentinel_final_cta" className="px-7 py-3 text-sm">
              Get Free System Audit
            </AuditCtaButton>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/54">Limited onboarding capacity. No long-term contracts.</p>
          <p className="mt-2 text-sm leading-7 text-white/54">We respond within 24 hours with next steps.</p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/42">
            Enterprise-grade security, auditability, and policy control
          </p>
        </div>
      </section>
    </main>
  )
}
