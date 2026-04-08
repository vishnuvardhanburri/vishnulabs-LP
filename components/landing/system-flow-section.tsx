import { ArrowRight, Database, ShieldCheck, Sparkles, Workflow } from "lucide-react"

const nodes = [
  { icon: Database, label: "Input", detail: "Calls, forms, inbound demand" },
  { icon: ShieldCheck, label: "Validation", detail: "Stops bad inputs and missed steps" },
  { icon: Workflow, label: "Execution", detail: "No dropped handoffs" },
  { icon: Sparkles, label: "Outcome", detail: "Booked calls, kept appointments, controlled data" },
]

export function SystemFlowSection() {
  return (
    <section id="system-flow" className="relative px-5 py-24 sm:px-6 lg:px-10 xl:py-28">
      <div className="cinema-section-shell reveal-in mx-auto max-w-7xl p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="section-kicker text-[11px] uppercase">System Flow</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Input to output, without silent failure in the middle.
          </h2>
          <p className="section-support-copy mt-4 text-lg leading-8">
            Close the leak. Keep it closed.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[repeat(4,minmax(0,1fr))]">
          {nodes.map((node, index) => {
            const Icon = node.icon

            return (
              <div
                key={node.label}
                className={`cinema-card cinema-card-hover relative rounded-[1.75rem] p-5 ${
                  index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                }`}
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.1),transparent_30%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    {index < nodes.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-zinc-400 lg:block" /> : null}
                  </div>
                  <p className="mt-6 text-2xl font-semibold text-white">{node.label}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-200">{node.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
