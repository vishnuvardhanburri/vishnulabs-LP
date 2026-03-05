import { ArrowUpRight, Calendar, CheckCircle2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroPoints = [
  "Answers inbound calls in under 2 seconds",
  "Qualifies leads and books consultations automatically",
  "Runs reminders and reschedules to reduce no-shows by 30-40%",
]

const demoHighlights = ["Instant pickup", "Auto booking", "Smart reminders"]

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 md:pb-28 md:pt-40 lg:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-[320px] w-[320px] rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-12 lg:px-10">
        <div className="reveal-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/55 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Premium AI automation systems for US SMB teams
          </div>

          <h1 className="mt-6 text-balance text-[2.2rem] font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            Never Miss Another
            <br />
            Lead After Hours
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
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
            <Button
              size="lg"
              asChild
              className="w-full gap-2 rounded-xl bg-foreground px-8 py-6 text-base text-background shadow-[0_8px_24px_rgba(47,128,255,0.18)] hover:bg-foreground/90 sm:w-auto"
            >
              <a href="/book" data-track="hero_book_meeting">
                <Calendar className="h-4 w-4" />
                Book Meeting
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full gap-2 rounded-xl border-border/60 px-8 py-6 text-base font-medium hover:bg-secondary sm:w-auto"
            >
              <a href="#services" data-track="hero_view_services">
                View Services
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-2 border-t border-border/45 pt-6 text-center sm:gap-4 sm:text-left">
            <div className="rounded-lg border border-border/40 bg-card/40 px-2 py-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
              <p className="text-xl font-semibold text-foreground sm:text-2xl">5-7 days</p>
              <p className="text-[11px] text-muted-foreground sm:text-xs">First deployment live</p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/40 px-2 py-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
              <p className="text-xl font-semibold text-foreground sm:text-2xl">$4,997+</p>
              <p className="text-[11px] text-muted-foreground sm:text-xs">Starter implementation</p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/40 px-2 py-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
              <p className="text-xl font-semibold text-foreground sm:text-2xl">24/7</p>
              <p className="text-[11px] text-muted-foreground sm:text-xs">Lead response coverage</p>
            </div>
          </div>
        </div>

        <div className="surface-glass lift-card reveal-in reveal-delay-1 relative rounded-2xl p-3 sm:p-5">
          <div className="overflow-hidden rounded-xl border border-border/45 bg-background/70 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
            <video
              className="aspect-video w-full object-contain bg-background/75"
              src="/videos/vishnulabs-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              style={{ objectPosition: "center top" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {demoHighlights.map((item) => (
              <div key={item} className="rounded-lg border border-border/45 bg-background/65 px-3 py-2 text-center text-[11px] font-medium text-muted-foreground">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-primary/35 bg-primary/10 p-4">
            <p className="text-xs uppercase tracking-widest text-primary/90">Transparent Delivery</p>
            <p className="mt-1 text-sm text-foreground">
              Deterministic workflows, retries, monitoring dashboards, and clean handoff documentation included.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
