import { ArrowUpRight, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-28 md:py-36" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-card/50">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/6 blur-[80px]" />
          </div>

          <div className="relative px-8 py-20 text-center md:px-16 md:py-28">
            <div className="mx-auto mb-6 flex items-center justify-center gap-2 rounded-full border border-border/40 bg-secondary/50 px-4 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                2 architecture audit slots available this month
              </span>
            </div>

            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              {"Let\u2019s make your automation reliable"}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {"Book a 30-minute architecture audit—no sales script, just a frank review of your automation stack and how I'd harden it for scale."}
            </p>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Designed for teams serious about production-ready systems, not quick hacks.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                  Book Architecture Audit Call
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2 rounded-xl border-border/50 px-8 py-6 text-base font-medium hover:bg-secondary"
              >
                <a href="mailto:hello@vishnulabs.com">
                  <Mail className="h-4 w-4" />
                  hello@vishnulabs.com
                </a>
              </Button>
            </div>

            <p className="mt-8 text-xs text-muted-foreground/60">
              {"Typical response within 24 hours \u00B7 Serious inquiries only"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
