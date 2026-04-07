import { ArrowUpRight } from "lucide-react"

import { AppLink } from "@/components/app-link"

const plans = [
  { name: "Starter", price: "$149", detail: "For teams cleaning up one fragile workflow.", highlight: false },
  { name: "Growth", price: "$799", detail: "For operations that need broader routing, validation, and visibility.", highlight: true },
  { name: "Pro", price: "$1499", detail: "For teams stabilizing multiple critical paths at once.", highlight: false },
  { name: "Enterprise", price: "Custom", detail: "For high-volume or compliance-heavy systems with deeper rollout needs.", highlight: false },
]

export function PricingSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-10 xl:py-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Pricing</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Clear pricing for teams that need stable systems.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-zinc-400">
            Pick the level of control you need now. Expand only when the system earns it.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`group relative overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.018] ${
                plan.highlight
                  ? "border-sky-300/40 bg-white/[0.1]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_32%)]" />
                <div className="absolute inset-[1px] rounded-[1.72rem] border border-sky-300/24 shadow-[0_0_0_1px_rgba(96,165,250,0.08),0_0_80px_rgba(217,70,239,0.12)]" />
              </div>

              {plan.highlight ? (
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-sky-300/26 shadow-[0_0_0_1px_rgba(96,165,250,0.12),0_0_90px_rgba(96,165,250,0.12)]" />
              ) : null}

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">{plan.name}</p>
                <p className="mt-6 bg-[linear-gradient(90deg,#ffffff_0%,#c4b5fd_38%,#7dd3fc_100%)] bg-clip-text text-5xl font-semibold tracking-[-0.06em] text-transparent">
                  {plan.price}
                </p>
                <p className="mt-4 min-h-[84px] text-sm leading-7 text-zinc-400">{plan.detail}</p>
                {plan.highlight ? (
                  <AppLink
                    href="/book"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(186,230,253,0.92))] px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_18px_50px_rgba(56,189,248,0.18)] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Book System Review
                    <ArrowUpRight className="h-4 w-4" />
                  </AppLink>
                ) : (
                  <AppLink
                    href="/book"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-sky-200 transition-all hover:bg-white/[0.08] hover:text-white"
                  >
                    Book System Review
                    <ArrowUpRight className="h-4 w-4" />
                  </AppLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
