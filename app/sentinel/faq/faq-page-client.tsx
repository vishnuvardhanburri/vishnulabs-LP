"use client"

import { useState } from "react"

import { FAQItem } from "@/components/sentinel/faq-item"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"

type FaqGroup = {
  title: string
  items: Array<{
    question: string
    answer: string
  }>
}

const faqGroups: FaqGroup[] = [
  {
    title: "Need / Risk",
    items: [
      {
        question: "Do we really need this?",
        answer:
          "If your team uses AI tools with any sensitive data, you already have exposure risk. Most organizations do not realize where leaks happen until those paths are mapped.",
      },
      {
        question: "What kind of data risks are we talking about?",
        answer:
          "Client data, patient records, financial data, internal documents, and any other information shared with AI tools without clear control.",
      },
    ],
  },
  {
    title: "How It Works",
    items: [
      {
        question: "How does Sentinel actually work?",
        answer:
          "It sits between your team and AI systems, scans every interaction, blocks or redacts sensitive data, and logs everything.",
      },
      {
        question: "Will this slow down our systems?",
        answer:
          "No. Sentinel operates in real-time with minimal latency, so teams keep moving while governance stays in place.",
      },
    ],
  },
  {
    title: "Implementation",
    items: [
      {
        question: "How long does deployment take?",
        answer:
          "Most deployments are completed within 2–4 weeks depending on system complexity. A pilot deployment can start in 2–3 weeks for one workflow or team.",
      },
      {
        question: "Do we need to change our existing tools?",
        answer:
          "No. Sentinel integrates with your current workflows and systems, so teams do not need to replace their working stack.",
      },
    ],
  },
  {
    title: "Compliance",
    items: [
      {
        question: "Does this help with compliance?",
        answer:
          "Yes. Sentinel provides audit logs, policy enforcement, and the visibility needed for compliance workflows like HIPAA, GDPR, and DPDP-ready environments.",
      },
      {
        question: "Can we track and audit activity?",
        answer:
          "Yes. Every interaction is logged and traceable, which makes review and audit preparation much easier.",
      },
    ],
  },
  {
    title: "Pricing",
    items: [
      {
        question: "Why is Sentinel priced at this level?",
        answer:
          "Sentinel is critical infrastructure for data protection. It helps prevent leaks and compliance failures that can cost far more than the platform and deployment itself.",
      },
      {
        question: "Can we start smaller?",
        answer:
          "Yes. You can start with a risk assessment or a pilot deployment scoped to one workflow or team, then credit that work toward a broader rollout.",
      },
    ],
  },
]

export function FaqPageClient() {
  const [openItem, setOpenItem] = useState<string | null>("Need / Risk-0")

  return (
    <main className="relative overflow-hidden bg-black px-5 pb-24 pt-36 text-white md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-12rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
      </div>
      <section className="cinema-section-shell reveal-in mx-auto max-w-5xl px-6 py-12 text-center shadow-[0_24px_90px_rgba(3,10,24,0.24)] md:px-10 md:py-16">
        <p className="section-kicker text-[11px] uppercase">Sentinel FAQ</p>
        <h1 className="mt-6 text-balance font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-7xl">
          Sentinel — Questions & Answers
        </h1>
        <p className="section-support-copy mx-auto mt-5 max-w-3xl text-lg leading-8">
          Everything you need to understand how Sentinel protects your systems and data.
        </p>
        <div className="mt-8 flex justify-center">
          <AuditCtaButton trackingSource="sentinel_faq_hero_cta" className="px-7 py-3 text-sm">
            Get Free System Audit
          </AuditCtaButton>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/54">Limited onboarding capacity. No long-term contracts.</p>
      </section>

      <section className="mx-auto mt-8 max-w-5xl grid gap-6">
        {faqGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            className={`cinema-section-shell reveal-in rounded-[36px] px-6 py-8 md:px-8 md:py-10 ${
              groupIndex % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
            }`}
            style={{ animationDelay: `${groupIndex * 0.12}s` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker text-[11px] uppercase">FAQ Section</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{group.title}</h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {group.items.map((item, index) => {
                const itemId = `${group.title}-${index}`
                const isOpen = openItem === itemId

                return (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    isOpen={isOpen}
                    onToggle={() => setOpenItem((current) => (current === itemId ? null : itemId))}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="cinema-section-shell reveal-in mx-auto mt-8 max-w-5xl px-6 py-12 text-center shadow-[0_24px_90px_rgba(3,10,24,0.22)] md:px-10 md:py-14">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Still unsure if Sentinel is needed?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
          We&apos;ll show exactly where your risks are.
        </p>
        <div className="mt-8 flex justify-center">
          <AuditCtaButton trackingSource="sentinel_faq_final_cta" className="px-7 py-3 text-sm">
            Get Free System Audit
          </AuditCtaButton>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/54">Limited onboarding capacity. No long-term contracts.</p>
      </section>
    </main>
  )
}
