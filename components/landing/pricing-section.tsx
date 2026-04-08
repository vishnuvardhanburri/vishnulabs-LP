import { ArrowUpRight } from "lucide-react"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"

const offers = [
  {
    name: "Risk Assessment",
    price: "$1,500",
    highlight: false,
    outcome: "See exactly where leads or data are leaking.",
    valueStack: [
      "Outcome: failure map + priority fixes",
      "Speed: 2–4 weeks to a stable deployment (if you proceed)",
      "Risk removal: pilot-first rollout",
      "Proof: +47% consults, -52% no-shows, 3x response",
      "Access: direct audit review",
    ],
  },
  {
    name: "Pilot Deployment",
    price: "$7,500",
    highlight: true,
    outcome: "Validate the fix on one workflow before you scale.",
    valueStack: [
      "Outcome: one workflow stops failing",
      "Speed: 2–3 weeks",
      "Risk removal: scoped, reversible, measurable",
      "Proof: real metrics in production",
      "Access: audit + pilot review",
    ],
  },
  {
    name: "Full Deployment",
    price: "$18K–$35K",
    highlight: false,
    outcome: "Stop missed follow-ups. Stop silent handoffs. Stop exposure.",
    valueStack: [
      "Outcome: end-to-end execution you can trust",
      "Speed: 2–4 weeks",
      "Risk removal: pilot first if needed",
      "Proof: result-first delivery",
      "Access: ongoing review until stable",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlight: false,
    outcome: "Multi-team rollout with compliance and control.",
    valueStack: [
      "Outcome: controlled execution at scale",
      "Speed: phased rollouts",
      "Risk removal: pilot + staged expansion",
      "Proof: auditability + measurable lift",
      "Access: priority support",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-10 xl:py-28">
      <div className="cinema-section-shell reveal-in mx-auto max-w-7xl p-6 md:p-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker text-[11px] uppercase">Pricing</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Choose the entry point that removes risk first.
            </h2>
          </div>
          <p className="section-support-copy max-w-xl text-base leading-8">
            Most teams start with a pilot. It proves the fix before you commit.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <article
              key={offer.name}
              className={`group relative overflow-hidden rounded-[1.75rem] p-5 backdrop-blur-md ${
                offer.highlight
                  ? "cinema-card cinema-card-hover border-sky-300/28 bg-white/[0.12] float-card-soft"
                  : index % 2 === 0
                    ? "cinema-card cinema-card-hover float-card-soft"
                    : "cinema-card cinema-card-hover float-card-soft float-card-delay-1"
              }`}
              style={{ animationDelay: `${index * 0.28}s` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_32%)]" />
                <div className="absolute inset-[1px] rounded-[1.72rem] border border-sky-300/24 shadow-[0_0_0_1px_rgba(96,165,250,0.08),0_0_80px_rgba(217,70,239,0.12)]" />
              </div>

              {offer.highlight ? (
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-sky-300/26 shadow-[0_0_0_1px_rgba(96,165,250,0.12),0_0_90px_rgba(96,165,250,0.12)]" />
              ) : null}

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">{offer.name}</p>
                <p className="mt-6 bg-[linear-gradient(90deg,#ffffff_0%,#c4b5fd_38%,#7dd3fc_100%)] bg-clip-text text-5xl font-semibold tracking-[-0.06em] text-transparent">
                  {offer.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-100">{offer.outcome}</p>

                <div className="mt-5 grid gap-2">
                  {offer.valueStack.map((item) => (
                    <p key={item} className="text-sm leading-7 text-white/72">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-7">
                  <AuditCtaButton
                    trackingSource={`pricing_offer_${offer.name.toLowerCase().replace(/\s+/g, "_")}`}
                    className={
                      offer.highlight
                        ? "w-full px-4 py-3 text-sm"
                        : "w-full border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white hover:bg-white/[0.08]"
                    }
                  >
                    Get Free System Audit
                    <ArrowUpRight className="h-4 w-4" />
                  </AuditCtaButton>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/64">Limited onboarding capacity. No long-term contracts.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
