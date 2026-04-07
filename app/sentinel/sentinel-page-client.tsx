"use client"

import { useSentinelLeadCapture } from "@/components/sentinel/lead-capture-provider"

const problemPoints = [
  "Employees pasting client data into AI tools",
  "No visibility into AI usage",
  "No clear audit trail for compliance",
  "Shadow AI usage growing across teams",
]

const licensePricing = [
  {
    title: "Starter",
    price: "$10K–$20K/year",
    description: "For small teams with basic AI usage.",
  },
  {
    title: "Professional",
    price: "$20K–$50K/year",
    description: "For growing teams with active workflows.",
  },
  {
    title: "Enterprise",
    price: "$50K–$100K+/year",
    description: "For high-scale, compliance-heavy systems.",
  },
]

const features = [
  "Real-time PII interception",
  "Policy enforcement",
  "Immutable audit logs",
  "Multi-model AI gateway",
  "Compliance-ready workflows",
  "Shadow AI detection",
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
  const { openSentinelLeadCapture } = useSentinelLeadCapture()

  return (
    <main className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-14rem] top-[8rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
        <div className="orb-float absolute bottom-[16rem] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px] mix-blend-screen [animation-delay:2s]" />
      </div>
      <section className="px-5 pb-24 pt-36 text-center md:pt-40">
        <div className="cinema-section-shell reveal-in mx-auto max-w-6xl px-6 py-12 shadow-[0_24px_90px_rgba(3,10,24,0.28)] md:px-10 md:py-16">
          <p className="section-kicker reveal-in text-[11px] uppercase">AI Data Protection & Governance Platform</p>
          <h1 className="reveal-in reveal-delay-1 mt-6 text-balance font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-7xl">
            Prevent data leaks and enforce AI compliance before it happens
          </h1>
          <p className="section-support-copy reveal-in reveal-delay-1 mx-auto mt-5 max-w-3xl text-lg leading-8">
            Prevent data leaks, enforce compliance, and control every AI interaction before it leaves your system.
          </p>
          <p className="section-support-copy reveal-in reveal-delay-2 mx-auto mt-4 max-w-3xl text-base leading-8">
            This is not for teams experimenting with AI. This is for teams already using AI with real data and need control.
          </p>
          <p className="reveal-in reveal-delay-2 mx-auto mt-4 max-w-3xl text-base leading-8 text-white/56">
            Most organizations are already leaking sensitive data through AI tools without realizing it.
          </p>
          <p className="reveal-in reveal-delay-2 mt-4 text-sm leading-7 text-cyan-100/80">Supports HIPAA, GDPR, DPDP-ready workflows</p>
          <p className="reveal-in reveal-delay-2 mt-2 text-sm leading-7 text-white/52">Built for teams handling sensitive client and patient data</p>
          <button
            type="button"
            onClick={() => openSentinelLeadCapture("ASSESSMENT", "sentinel_hero")}
            className="reveal-in reveal-delay-3 mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition duration-500 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Request Sentinel Demo & Risk Assessment
          </button>
          <button
            type="button"
            onClick={() => openSentinelLeadCapture("PILOT", "sentinel_hero_pilot")}
            className="reveal-in reveal-delay-3 mt-3 inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition duration-500 hover:-translate-y-0.5 hover:bg-white/[0.08]"
          >
            Start Pilot Deployment
          </button>
          <div className="reveal-in reveal-delay-3 mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm leading-7 text-white/54">
            <span>Used in environments handling legal, medical, and financial data</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 md:inline-block" />
            <span>Supports HIPAA, GDPR, DPDP-ready workflows</span>
          </div>
          <p className="reveal-in reveal-delay-3 mt-4 text-sm leading-7 text-white/54">Start with a demo + evaluation before full deployment</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">AI is leaking sensitive data, silently</h2>
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
        <div className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-10 text-center md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">How Sentinel Works</h2>
          <p className="mt-6 text-lg leading-8 text-white/68">User Input → Scan → Redact → Policy Check → Route → Log</p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/56">
            Sentinel sits between your team and AI systems, scans every interaction, blocks or redacts sensitive data, and logs everything.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="cinema-section-shell reveal-in mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">How it works</h2>
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
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Core Features</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Flexible Deployment Model</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="cinema-card cinema-card-hover float-card-soft rounded-[24px] px-5 py-6">
              <p className="section-kicker text-[11px] uppercase">Platform License (annual)</p>
              <div className="mt-4 grid gap-3">
                {licensePricing.map((plan) => (
                  <div key={plan.title} className="cinema-card rounded-[20px] bg-black/18 px-4 py-4 text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/74">{plan.title}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{plan.price}</p>
                    <p className="mt-2 text-sm leading-7 text-white/56">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cinema-card cinema-card-hover float-card-soft float-card-delay-1 rounded-[24px] px-5 py-6 text-left">
              <p className="section-kicker text-[11px] uppercase">Pilot Deployment (2–3 weeks)</p>
              <p className="mt-4 text-3xl font-semibold text-white">$5K–$10K</p>
              <p className="mt-4 text-base leading-8 text-white/64">
                Scoped to one workflow or team and credited toward full deployment if you proceed.
              </p>
              <div className="mt-4 grid gap-2 text-base leading-8 text-white/64">
                <p>Risk assessment</p>
                <p>Limited rollout</p>
                <p>Real system validation</p>
              </div>
            </div>

            <div className="cinema-card cinema-card-hover float-card-soft float-card-delay-2 rounded-[24px] px-5 py-6 text-left">
              <p className="section-kicker text-[11px] uppercase">Custom Deployment (one-time)</p>
              <p className="mt-4 text-3xl font-semibold text-white">$10K–$50K+</p>
              <div className="mt-4 grid gap-2 text-base leading-8 text-white/64">
                <p>Integrations</p>
                <p>Policy setup</p>
                <p>Workflow configuration</p>
                <p>Compliance setup</p>
              </div>
            </div>

            <div className="cinema-card cinema-card-hover float-card-soft float-card-delay-1 rounded-[24px] px-5 py-6 text-left">
              <p className="section-kicker text-[11px] uppercase">Enterprise (custom)</p>
              <p className="mt-4 text-3xl font-semibold text-white">Custom</p>
              <p className="mt-4 text-base leading-8 text-white/64">
                For broader rollouts, stricter control requirements, and deeper compliance coverage.
              </p>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-white/56">
            Final pricing depends on system complexity, integrations, and compliance requirements.
          </p>
          <p className="mt-2 text-base leading-8 text-white/56">
            Most teams start in the Professional range depending on usage and compliance requirements.
          </p>
          <p className="mt-2 text-base leading-8 text-white/52">
            No long-term lock-in for initial deployment — start with assessment.
          </p>
          <p className="mt-2 text-base leading-8 text-white/48">
            Typical deployment timeline:
            <br />
            2–4 weeks depending on integrations and system complexity
          </p>
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
            Start with a Sentinel Risk Assessment
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
            We evaluate your current AI usage and identify where exposure risk exists.
          </p>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => openSentinelLeadCapture("ASSESSMENT", "sentinel_entry_offer")}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
            >
              Request Sentinel Risk Assessment
            </button>
            <button
              type="button"
              onClick={() => openSentinelLeadCapture("PILOT", "sentinel_entry_offer_pilot")}
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Start Pilot Deployment
            </button>
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
          <button
            type="button"
            onClick={() => openSentinelLeadCapture("ASSESSMENT", "sentinel_final_cta")}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
          >
            Request Sentinel Risk Assessment
          </button>
          <button
            type="button"
            onClick={() => openSentinelLeadCapture("PILOT", "sentinel_final_cta_pilot")}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            Start Pilot Deployment
          </button>
          <p className="mt-4 text-sm leading-7 text-white/54">Start with a demo + evaluation before full deployment</p>
          <p className="mt-2 text-sm leading-7 text-white/54">We respond within 24 hours with next steps.</p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/42">
            Enterprise-grade security, auditability, and policy control
          </p>
        </div>
      </section>
    </main>
  )
}
