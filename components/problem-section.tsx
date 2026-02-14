import { AlertTriangle, X } from "lucide-react"

const problems = [
  {
    title: "Brittleness in revenue ops",
    description:
      "SaaS glued together; one API change stalls revenue ops at 2 AM with no alerting or fallback.",
  },
  {
    title: "Tool sprawl with no spine",
    description:
      "Dozens of tools, no shared data layer, duplicated logic, and wasted spend with no ownership.",
  },
  {
    title: "No deterministic backend",
    description:
      "Automations lack retries, idempotency, and runbooks—you hear about failures from customers first.",
  },
  {
    title: "Breaks under scale",
    description:
      "Systems fine at 10 users crumble at 1,000 with no capacity plan or path to grow.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-28 md:py-36" id="problem">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-destructive/80">
            The Problem
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Why most automation leaks revenue
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Impressive demos collapse in production—causing missed leads, angry customers, and 2 AM fire drills.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-2xl border border-border/30 bg-card/50 p-7 transition-all duration-300 hover:border-destructive/20 hover:bg-card"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/8">
                <X className="h-4 w-4 text-destructive/70" />
              </div>
              <h3 className="mb-2.5 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
