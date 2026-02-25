import { Calendar, Mail, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-card/50">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/6 blur-[80px]" />
          </div>

          <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/50 px-4 py-1.5">
              <span className="text-xs font-medium text-muted-foreground">Transparent scope. Transparent timeline. Transparent delivery.</span>
            </div>

            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
              Ready to stop losing revenue to manual follow-up?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Book a live demo to review your current workflow and see exactly how we can launch your first automation in under a week.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              Typical investment: $1,000 to $10,000 based on scope and integration requirements.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="gap-2 rounded-xl bg-foreground px-8 py-6 text-base font-medium text-background hover:bg-foreground/90"
              >
                <a
                  href="https://calendly.com/vishnuvardhanburri19/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4" />
                  Book Live Demo
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2 rounded-xl border-border/50 px-8 py-6 text-base font-medium hover:bg-secondary"
              >
                <a href="mailto:hello@vishnulabs.com?subject=Start%20Setup%20-%20VishnuLabs">
                  <Rocket className="h-4 w-4" />
                  Start Setup
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="gap-2 rounded-xl px-8 py-6 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <a href="mailto:hello@vishnulabs.com">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>

            <p className="mt-7 text-xs text-muted-foreground/60">US business-hours response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
