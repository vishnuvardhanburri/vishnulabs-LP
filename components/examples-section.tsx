import { Bot, Workflow, Plug, ArrowUpRight } from "lucide-react"

const examples = [
  {
    icon: Bot,
    title: "Lead Qualification AI Agent",
    description:
      "Real-time triage, CRM routing, Slack alerts, and tailored outreach—built to hit SLA.",
    integrations: ["CRM", "Slack", "Email", "AI/LLM"],
    metric: "60%",
    metricLabel: "faster lead response",
  },
  {
    icon: Workflow,
    title: "Operations Workflow Engine",
    description:
      "Event-driven ops replacing approvals and data entry with live dashboards and recoverable workflows.",
    integrations: ["ERP", "Databases", "Dashboards", "Webhooks"],
    metric: "80%",
    metricLabel: "less manual work",
  },
  {
    icon: Plug,
    title: "API Orchestration Hub",
    description:
      "Monitored integration layer with retries and transformations—one source of truth across tools.",
    integrations: ["REST APIs", "Webhooks", "ETL", "Monitoring"],
    metric: "1",
    metricLabel: "single source of truth",
  },
]

export function ExamplesSection() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">
            Real Systems
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Automation running in production
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Examples of backend-first automation removing bottlenecks for SaaS and ops-heavy teams.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {examples.map((example) => (
            <div
              key={example.title}
              className="group flex flex-col rounded-2xl border border-border/30 bg-card/50 p-7 transition-all duration-300 hover:border-primary/20 hover:bg-card"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
                <example.icon className="h-4.5 w-4.5 text-primary/80" />
              </div>

              <h3 className="mb-2.5 text-lg font-semibold text-foreground">
                {example.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {example.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {example.integrations.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-baseline gap-2 border-t border-border/30 pt-5">
                <span className="text-2xl font-bold text-accent">
                  {example.metric}
                </span>
                <span className="text-sm text-muted-foreground">
                  {example.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
