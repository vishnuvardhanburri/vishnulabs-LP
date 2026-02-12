const outcomes = [
  {
    metric: "80%",
    label: "Reduction in Manual Ops",
    description:
      "Automate repetitive workflows so your team focuses on high-value decisions.",
  },
  {
    metric: "3x",
    label: "Lead Processing Speed",
    description:
      "AI-driven qualification ensures every inbound lead is handled instantly.",
  },
  {
    metric: "99.9%",
    label: "System Uptime",
    description:
      "Production infrastructure with monitoring, failover, and graceful degradation.",
  },
  {
    metric: "10x",
    label: "Faster Deployment",
    description:
      "Architecture-first methodology means automations ship faster with fewer iterations.",
  },
]

export function OutcomesSection() {
  return (
    <section className="relative border-y border-border/30 py-28 md:py-36" id="outcomes">
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent/80">
            Outcomes
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Measurable Business Impact
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Every engagement is designed to deliver quantifiable results.
            No vanity metrics, just real operational improvements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="rounded-2xl border border-border/30 bg-card/50 p-7"
            >
              <p className="text-4xl font-bold tracking-tight text-primary">
                {outcome.metric}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {outcome.label}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
