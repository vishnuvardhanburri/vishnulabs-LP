const outcomes = [
  {
    metric: "80%",
    label: "Reduction in Manual Ops",
    description:
      "Free teams for higher-value decisions instead of repetitive tasks.",
  },
  {
    metric: "3x",
    label: "Lead Processing Speed",
    description:
      "Every inbound handled instantly with guardrails and routing logic.",
  },
  {
    metric: "99.9%",
    label: "System Uptime",
    description:
      "Monitored, fail-safe infrastructure with graceful degradation.",
  },
  {
    metric: "10x",
    label: "Faster Deployment",
    description:
      "Architecture-first delivery reduces iterations, rework, and risk.",
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
            Measurable impact for ops-heavy teams
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Every engagement anchors to quantifiable results—not vanity metrics.
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
