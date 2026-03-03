import { Search, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    day: "Day 1",
    title: "Audit & Architecture",
    description:
      "We map your full lead path, define business rules, and lock technical scope before any build starts.",
  },
  {
    icon: Code2,
    day: "Day 3",
    title: "Build & QA",
    description:
      "We implement workflows, connect integrations, add fallback logic, and test call + booking paths end-to-end.",
  },
  {
    icon: Rocket,
    day: "Day 5",
    title: "Go Live & Monitor",
    description:
      "We launch, monitor live traffic, and hand over reporting + SOPs so your team runs operations confidently.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32" id="delivery">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Delivery Framework</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            What happens after you say yes
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Fixed checkpoints, transparent ownership, and production controls from week one.
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
