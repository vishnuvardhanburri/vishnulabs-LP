import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "System Audit",
    description:
      "Map workflows, stack, and failure points to set the baseline.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Architecture Design",
    description:
      "Define data flows, integrations, safeguards, and scale envelopes in a blueprint.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Production Build",
    description:
      "Implement clean, tested systems with monitoring, documentation, and ownership.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deployment & Monitoring",
    description:
      "Staged rollout with health checks, alerting, and continuous verification in production.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-28 md:py-36" id="process">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Delivery Framework
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Execution with clear ownership and controls
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A repeatable, auditable path from audit to monitored production.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="group flex gap-6 md:gap-8">
                {/* Step node */}
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 bg-card transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                    <step.icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 pb-2 pt-0.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/50">
                      Step {step.number}
                    </span>
                    <div className="h-px w-6 bg-border/30" />
                    <h3 className="text-base font-semibold text-foreground md:text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
