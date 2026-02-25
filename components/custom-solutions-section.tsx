import { ArrowUpRight, Calendar, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CustomSolutionsSection() {
  return (
    <section className="relative py-24 md:py-32" id="custom-solutions">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border/35 bg-card/55">
          <div className="absolute inset-0">
            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 px-8 py-12 md:grid-cols-2 md:px-12 md:py-14">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Have an idea?
              </div>

              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                Custom AI solutions built for your exact workflow
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Share your requirement and we will design, build, and deploy a custom automation system end-to-end.
              </p>
            </div>

            <div className="rounded-2xl border border-border/40 bg-background/50 p-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Project investment</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">$1,000 to $10,000</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Final pricing depends on scope, integrations, and delivery timeline based on client requirements. Transparent scope, transparent timeline, and transparent communication before development starts.</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="gap-2 rounded-xl bg-foreground px-6 text-background hover:bg-foreground/90"
                >
                  <a
                    href="https://calendly.com/vishnuvardhanburri19/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Now
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="gap-2 rounded-xl border-border/50 px-6 hover:bg-secondary"
                >
                  <a href="mailto:hello@vishnulabs.com">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </a>
                </Button>
              </div>

              <a
                href="https://calendly.com/vishnuvardhanburri19/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Discuss custom scope
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
