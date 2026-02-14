import { Bot, Workflow, Plug, ShieldCheck } from "lucide-react"

const solutions = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Deterministic agents with tested prompts, contracts, and live monitoring—no black boxes.",
  },
  {
    icon: Workflow,
    title: "Backend Workflows",
    description:
      "Event-driven orchestration with retries, dead-letter queues, and idempotency so work never disappears.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Single integration layer that normalizes data across CRM, ERP, and support with full observability.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Systems",
    description:
      "Health checks, alerting, circuit breakers, and horizontal scaling baked into the design.",
  },
]

export function SolutionSection() {
  return (
    <section
      className="relative border-y border-border/30 py-28 md:py-36"
      id="solutions"
    >
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Architecture-Led Engagement
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Automation architecture that survives production
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Blueprint before code—so every build is maintainable, observable, and ready for load.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative rounded-2xl border border-border/30 bg-card/50 p-7 transition-all duration-300 hover:border-primary/20 hover:bg-card"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
                <solution.icon className="h-4.5 w-4.5 text-primary/80" />
              </div>
              <h3 className="mb-2.5 text-lg font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
