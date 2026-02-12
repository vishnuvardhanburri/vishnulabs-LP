import { AlertTriangle, X } from "lucide-react"

const problems = [
  {
    title: "Fragile Workflows",
    description:
      "No-code tools duct-taped together. One API change breaks the entire chain at 2 AM with no alerting, no fallback, and no one who knows how to fix it.",
  },
  {
    title: "Tool Overload",
    description:
      "Dozens of SaaS subscriptions with no unified data layer. Information silos, duplicated logic, and monthly bills for tools no one actually uses.",
  },
  {
    title: "No Backend Architecture",
    description:
      "Automations built without a foundation. No error handling, no retry logic, no monitoring. When it breaks, you only find out from your customers.",
  },
  {
    title: "Zero Scalability",
    description:
      "Systems that handle 10 users collapse at 1,000. No capacity planning, no load strategy, and no path forward without a complete rewrite.",
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
            Why Most Automation Projects Fail
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Most businesses invest in automation that looks impressive in a demo
            but falls apart the moment it hits production.
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
