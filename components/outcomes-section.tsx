const outcomes = [
  {
    metric: "50-80%",
    label: "Reduction in Manual Work",
    description:
      "Free teams for higher-value decisions instead of repetitive tasks and admin.",
  },
  {
    metric: "Instant",
    label: "Lead Response Time",
    description:
      "Every inbound lead qualified and routed in seconds, 24/7.",
  },
  {
    metric: "100%",
    label: "System Availability",
    description:
      "Your revenue engine runs around the clock, even when you sleep or take weekends off.",
  },
  {
    metric: "Zero",
    label: "Maintenance Headaches",
    description:
      "Scalable, enterprise-grade systems built to run without constant supervision.",
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
            Measurable impact for revenue teams
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Every engagement anchors to quantifiable results—revenue, efficiency, and scale.
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
