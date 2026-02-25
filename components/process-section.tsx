import { Search, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    day: "Day 1",
    title: "Audit",
    description:
      "We map your current lead flow, identify where revenue leaks, and define deterministic automation rules.",
  },
  {
    icon: Code2,
    day: "Day 3",
    title: "Build",
    description:
      "We connect your stack, implement retries and monitoring, and configure production-safe workflows with clear ownership.",
  },
  {
    icon: Rocket,
    day: "Day 5",
    title: "Go Live",
    description:
      "We launch, validate with real traffic, and hand over runbooks so your team can operate confidently.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32" id="delivery">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">What Happens After You Say Yes</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Day 1 to Day 5 delivery framework
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Short cycle, transparent checkpoints, and production controls from the first week.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.day}
              className="rounded-2xl border border-border/35 bg-card/55 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">{step.day}</p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
