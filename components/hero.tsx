import { ArrowUpRight, Calendar, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-32 md:flex-row md:items-center md:gap-16 md:pb-32 md:pt-40 lg:gap-20 lg:px-10 lg:pt-44">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-start gap-8">
          <div className="flex items-center gap-3 rounded-full border border-border/50 bg-secondary/50 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
            <span className="relative flex items-center gap-2 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now booking
            </span>
            <span className="text-xs text-muted-foreground">
              2 architecture slots open
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
            Backend-First AI Automation • Architecture-Led Delivery • Built for Scale
          </p>

          <h1 className="text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] lg:text-[4.25rem]">
            I build backend-first AI systems
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              that keep your revenue ops
            </span>
            <br />
            reliable at any scale.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I design deterministic agents, workflow engines, and integration layers so SaaS and ops-heavy teams stop firefighting and keep revenue moving.
          </p>

          <ul className="flex max-w-lg list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
            <li>Remove 70–90% of manual steps in core ops</li>
            <li>Respond to every inbound lead in seconds with guardrails</li>
            <li>Ship automation with monitoring, alerts, and clear ownership</li>
          </ul>

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
                Book Architecture Audit Call
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 rounded-xl border-border/50 px-8 py-6 text-base font-medium hover:bg-secondary"
            >
              <a
                href="https://www.linkedin.com/in/vishnuvardhanburri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="gap-2 rounded-xl px-8 py-6 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <a href="#projects">
                Review live projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex items-center gap-8 border-t border-border/30 pt-8">
            <div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-xs text-muted-foreground">Production systems shipped</p>
            </div>
            <div className="h-8 w-px bg-border/30" />
            <div>
              <p className="text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-xs text-muted-foreground">Uptime maintained</p>
            </div>
            <div className="h-8 w-px bg-border/30" />
            <div>
              <p className="text-2xl font-bold text-foreground">3x</p>
              <p className="text-xs text-muted-foreground">Faster to production vs agencies</p>
            </div>
          </div>
        </div>

        {/* Right portrait */}
        <div className="relative mt-12 flex-shrink-0 md:mt-0">
          {/* Glow behind image */}
          <div className="absolute -inset-8 rounded-3xl bg-primary/8 blur-3xl" />

          <div className="relative animate-float">
            <div className="relative h-[380px] w-[320px] overflow-hidden rounded-2xl border border-border/30 sm:h-[440px] sm:w-[360px] lg:h-[500px] lg:w-[400px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZimsoQzLU1lkQEgOzbMbgT8RIDw1eB.png"
                alt="Vishnu Vardhan Burri - AI Automation Architect"
                className="h-full w-full object-cover object-top"
              />
              {/* Bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border/30 bg-card/90 px-5 py-3 shadow-2xl backdrop-blur-sm sm:-left-6">
              <p className="text-xs font-medium tracking-wider text-muted-foreground">
                FOUNDER
              </p>
              <p className="text-base font-semibold text-foreground">Vishnu Labs</p>
            </div>

            {/* Experience badge */}
            <div className="absolute -right-4 top-6 rounded-xl border border-border/30 bg-card/90 px-4 py-2.5 shadow-2xl backdrop-blur-sm sm:-right-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Experience
              </p>
              <p className="text-sm font-semibold text-foreground">
                Ex-Microsoft • Ex-Google
              </p>
            </div>

            {/* Small accent dot */}
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
