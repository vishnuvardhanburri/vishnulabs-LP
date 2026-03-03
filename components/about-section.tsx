import { ArrowUpRight, CheckCircle2, FileCheck2, Shield, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

const principles = [
  "Deterministic logic and tested workflows, not fragile prompt-only chains",
  "Monitoring + retry strategy included in every production deployment",
  "Documentation and handoff playbook so your team owns operations",
  "Clear scope, timeline, and integration list before implementation starts",
]

const deliverables = [
  {
    icon: Workflow,
    title: "Architecture Blueprint",
    description: "Flow map, integration paths, fallback logic, and owner roles.",
  },
  {
    icon: FileCheck2,
    title: "Launch SOPs",
    description: "Runbook, issue handling checklist, and escalation protocol.",
  },
  {
    icon: Shield,
    title: "Stability Controls",
    description: "Retries, error handling, and reporting baseline from day one.",
  },
]

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent/80">Why VishnuLabs</p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
              SaaS-agency level execution without the slow agency overhead
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              VishnuLabs is a specialized AI automation partner focused on revenue-critical workflows. We operate as an implementation pod
              with architecture, build, QA, and deployment ownership.
            </p>

            <div className="mt-6 grid gap-2 text-sm">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-lg border border-border/35 bg-card/55 px-3 py-2 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="sm" asChild className="gap-2 rounded-lg bg-foreground px-5 text-background hover:bg-foreground/90">
                <a href="/book">
                  Book Live Demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="gap-2 rounded-lg border-border/50 px-5 hover:bg-secondary">
                <a href="mailto:hello@vishnulabs.com?subject=Project%20Scope%20Request">Request Scope Doc</a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Included in Every Engagement</p>
            <div className="mt-4 grid gap-3">
              {deliverables.map((item) => (
                <article key={item.title} className="rounded-xl border border-border/35 bg-background/70 p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
