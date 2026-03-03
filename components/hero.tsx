import { ArrowUpRight, Calendar, CheckCircle2, PlayCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroPoints = [
  "Answers inbound calls in under 2 seconds",
  "Qualifies leads and books consultations automatically",
  "Runs reminders and reschedules to reduce no-shows by 30-40%",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40 lg:pt-44">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-24 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 lg:px-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/55 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Premium AI automation systems for US SMB teams
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            Never Miss Another
            <br />
            Lead After Hours
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            VishnuLabs builds AI voice and revenue automation systems that answer every call, qualify intent, schedule consultations,
            and keep your pipeline moving without manual follow-up bottlenecks.
          </p>

          <ul className="mt-6 flex max-w-2xl flex-col gap-2.5">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground md:text-[15px]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild className="gap-2 rounded-xl bg-foreground px-8 py-6 text-base text-background hover:bg-foreground/90">
              <a href="/book" data-track="hero_book_meeting">
                <Calendar className="h-4 w-4" />
                Book Meeting
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 rounded-xl border-border/60 px-8 py-6 text-base font-medium hover:bg-secondary"
            >
              <a href="#services" data-track="hero_view_services">
                View Services
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-4 border-t border-border/40 pt-7 text-center sm:text-left">
            <div>
              <p className="text-2xl font-semibold text-foreground">5-7 days</p>
              <p className="text-xs text-muted-foreground">First deployment live</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">$4,997+</p>
              <p className="text-xs text-muted-foreground">Starter implementation</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">24/7</p>
              <p className="text-xs text-muted-foreground">Lead response coverage</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-border/40 bg-card/65 p-5 shadow-2xl shadow-black/25 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">15-second demo preview</p>
            <a href="#proof" className="text-xs text-primary hover:text-primary/80">
              Watch outcomes
            </a>
          </div>

          <div className="group flex h-[220px] items-center justify-center rounded-xl border border-border/40 bg-background/70">
            <PlayCircle className="h-14 w-14 text-primary transition-transform group-hover:scale-105" />
          </div>

          <div className="mt-4 rounded-xl border border-border/40 bg-background/70 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Implementation Snapshot</p>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <p>1) Inbound call hits AI voice receptionist</p>
              <p>2) Lead qualifies and consultation slot is booked</p>
              <p>3) SMS + email reminders auto-trigger with reschedule support</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-primary/35 bg-primary/8 p-4">
            <p className="text-sm font-medium text-foreground">Agency-grade delivery, not freelancer patchwork.</p>
            <p className="mt-1 text-xs text-muted-foreground">Architecture, implementation, QA, and monitoring included.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
