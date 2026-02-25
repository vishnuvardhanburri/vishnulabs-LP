import { ArrowUpRight, Calendar, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-32 md:flex-row md:items-center md:gap-16 md:pb-32 md:pt-40 lg:gap-20 lg:px-10 lg:pt-44">
        <div className="flex flex-1 flex-col items-start gap-8">
          <div className="flex items-center gap-3 rounded-full border border-border/50 bg-secondary/50 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
            <span className="relative flex items-center gap-2 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Revenue automation for US SMBs
            </span>
            <span className="text-xs text-muted-foreground">Law firms • Real estate • Consultants</span>
          </div>

          <h1 className="text-balance text-[2.4rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.45rem] lg:text-[4.1rem]">
            Losing qualified leads because
            <br />
            response is manual and slow?
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Fix it in 5 days.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            VishnuLabs builds backend-first automation systems that handle inbound calls, intake, scheduling, and follow-up with deterministic logic. Every build includes monitoring, retries, and clear ownership. No brittle zaps.
          </p>

          <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
            <li>Typical response-time reduction: from hours to under 60 seconds</li>
            <li>Expected no-show reduction: 20% to 40% with reminders and reschedules</li>
            <li>First automation live in 3 to 5 days, investment from $1,000 to $10,000</li>
          </ul>

          <div className="rounded-2xl border border-border/40 bg-card/60 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Primary offer</p>
            <p className="mt-1 text-sm font-medium text-foreground">
              Revenue Automation Launch: AI Scheduling + Legal Intake + AI Voice Receptionist
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
              <a href="#offers">
                View Packages
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-8 border-t border-border/30 pt-8">
            <div>
              <p className="text-2xl font-bold text-foreground">3-5 Days</p>
              <p className="text-xs text-muted-foreground">First System Live</p>
            </div>
            <div className="h-8 w-px bg-border/30" />
            <div>
              <p className="text-2xl font-bold text-foreground">$1k-$10k</p>
              <p className="text-xs text-muted-foreground">Investment Range</p>
            </div>
            <div className="h-8 w-px bg-border/30" />
            <div>
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p className="text-xs text-muted-foreground">Automated Coverage</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex-shrink-0 md:mt-0">
          <div className="absolute -inset-8 rounded-3xl bg-primary/8 blur-3xl" />

          <div className="relative animate-float">
            <div className="relative h-[380px] w-[320px] overflow-hidden rounded-2xl border border-border/30 sm:h-[440px] sm:w-[360px] lg:h-[500px] lg:w-[400px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZimsoQzLU1lkQEgOzbMbgT8RIDw1eB.png"
                alt="Vishnu Vardhan Burri - VishnuLabs"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border/30 bg-card/90 px-5 py-3 shadow-2xl backdrop-blur-sm sm:-left-6">
              <p className="text-xs font-medium tracking-wider text-muted-foreground">DELIVERY MODEL</p>
              <p className="text-base font-semibold text-foreground">Backend-first, monitored, deterministic</p>
            </div>

            <div className="absolute -right-4 top-6 rounded-xl border border-border/30 bg-card/90 px-4 py-2.5 shadow-2xl backdrop-blur-sm sm:-right-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Credibility</p>
              <p className="text-sm font-semibold text-foreground">Enterprise + SMB implementation experience</p>
            </div>

            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
