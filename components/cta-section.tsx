import Link from "next/link"
import { Calendar, Mail, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="surface-glass reveal-in relative overflow-hidden rounded-3xl" id="pricing">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[90px]" />
          </div>

          <div className="relative px-5 py-14 text-center sm:px-8 md:px-16 md:py-20">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/55 px-4 py-1.5">
              <span className="text-xs font-medium text-muted-foreground">Transparent pricing. Transparent delivery. Production-ready outcomes.</span>
            </div>

            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
              Ready to move from missed calls to booked revenue?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Starter package begins at <span className="font-semibold text-foreground">$4,997</span>. Multi-service deployments range to <span className="font-semibold text-foreground">$15,000</span> based on integrations and routing complexity.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              Includes architecture, implementation, go-live support, and monitoring setup.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                asChild
                className="w-full gap-2 rounded-xl bg-foreground px-8 py-6 text-base font-medium text-background hover:bg-foreground/90 sm:w-auto"
              >
                <Link href="https://cal.com/vishnuvardhanburri/15min" data-track="cta_book_meeting">
                  <Calendar className="h-4 w-4" />
                  Book Meeting
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full gap-2 rounded-xl border-border/55 px-8 py-6 text-base font-medium hover:bg-secondary sm:w-auto"
              >
                <a href="mailto:hello@vishnulabs.com?subject=Start%20Setup%20-%20VishnuLabs" data-track="cta_start_setup">
                  <Rocket className="h-4 w-4" />
                  Start Setup
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="w-full gap-2 rounded-xl px-8 py-6 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground sm:w-auto"
              >
                <a href="mailto:hello@vishnulabs.com" data-track="cta_email_us">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>

            <p className="mt-7 text-xs text-muted-foreground/70">US business-hours response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
