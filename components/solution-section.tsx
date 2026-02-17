import { Bot, Workflow, Plug, ShieldCheck } from "lucide-react"

const solutions = [
  {
    icon: Bot,
    title: "AI Receptionist / Inbound",
    description:
      "Handle every call and chat instantly. Qualify visitors 24/7 and book meetings directly into your calendar.",
  },
  {
    icon: Workflow,
    title: "Lead Qual & Outbound",
    description:
      "Identify and engage high-value prospects on autopilot. Personalized outreach at scale that feels human.",
  },
  {
    icon: Plug,
    title: "Ops Workflow Automation",
    description:
      "Connect your tools and data. Eliminate manual entry, sync CRMs, and streamline fulfillment seamlessly.",
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
            Services
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            End-to-end revenue automation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            From first touch to closed deal—architected for reliability and speed.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
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
