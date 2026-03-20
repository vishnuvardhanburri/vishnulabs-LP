const trustItems = [
  "US PI law firm operations",
  "UK-facing service workflows",
  "Family law intake teams",
  "Real estate brokerages",
  "Mortgage advisory firms",
  "Outpatient clinic operations",
  "Startup founder systems",
  "Transport and logistics ops",
  "Consulting service teams",
  "Calendar + CRM + SMS stack",
  "Monitoring + retries + ownership",
]

const trustStats = [
  { label: "Typical deployment", value: "5-7 days" },
  { label: "Lead response", value: "24/7" },
  { label: "Transparent build ranges", value: "$4,997+" },
]

const operatorNotes = [
  {
    title: "Reads like a product company",
    detail: "The site explains what gets built, how it runs, and why teams trust it without forcing buyers through vague agency language.",
  },
  {
    title: "Pricing is easier to defend internally",
    detail: "Decision-makers can scan the bands, understand custom scope, and move forward with fewer approval bottlenecks.",
  },
  {
    title: "Global-facing and operationally credible",
    detail: "The visual system works for US, UK, and India buyers who expect modern SaaS clarity with actual technical depth.",
  },
]

const trustSignals = [
  "Founder-led architecture review",
  "Privacy-first systems available",
  "Website + software + automation in one scope",
  "Custom packages with transparent pricing",
  "Operational proof before hype",
  "Built for trust-sensitive teams",
]

export function TrustStrip() {
  const mobileTrustItems = trustItems.slice(0, 6)
  const mobileTrustSignals = trustSignals.slice(0, 4)

  return (
    <section className="relative py-6 sm:py-8">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="section-shell px-5 py-6 sm:px-7 sm:py-7" data-reveal>
          <p className="text-center text-sm font-semibold text-foreground sm:text-base">
            Trusted by law firms, clinics, startups, and operations teams serving the US, UK, and India
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
            VishnuLabs pairs product clarity with technical delivery: websites, automations, private AI, custom software, and cleaner handoff after launch.
          </p>

          <div className="mt-4 overflow-hidden rounded-[24px] border border-white/70 bg-white/72 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <div className="flex flex-wrap gap-2 md:hidden">
              {mobileTrustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200/70 bg-white/82 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {item}
                </div>
              ))}
              {mobileTrustSignals.map((item) => (
                <div
                  key={`${item}-mobile`}
                  className="rounded-full border border-primary/10 bg-slate-950 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="hidden min-w-max gap-2 md:flex md:animate-marquee-slow">
              {[...trustItems, ...trustItems].map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className="rounded-full border border-slate-200/70 bg-white/82 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-2 hidden min-w-max gap-2 md:flex md:animate-marquee-reverse">
              {[...trustSignals, ...trustSignals].map((item, idx) => (
                <div
                  key={`${item}-signal-${idx}`}
                  className="rounded-full border border-primary/10 bg-slate-950 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-2 text-center sm:grid-cols-3 sm:text-left">
            {trustStats.map((item) => (
              <div key={item.label} className="metric-float float-card-soft px-4 py-3">
                <p className="text-base font-semibold text-foreground">{item.value}</p>
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {operatorNotes.map((item, index) => (
              <article
                key={item.title}
                className={`metric-float beam-sweep p-4 text-left ${index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"}`}
              >
                <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
