import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const principles = [
  "Deterministic logic over fragile prompt chains",
  "Monitoring, retries, and failure visibility by default",
  "Documented handoff and full ownership transfer",
  "Transparent scope, timeline, and pricing before build starts",
]

export function AboutSection() {
  return (
    <section className="relative border-y border-border/30 py-24 md:py-32" id="about">
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-2xl border border-border/35 bg-card/50">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZimsoQzLU1lkQEgOzbMbgT8RIDw1eB.png"
              alt="Vishnu Vardhan Burri"
              className="h-[460px] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Founder</p>
              <p className="text-base font-semibold text-foreground">VishnuLabs</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent/80">About</p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
              Backend-first automation partner for revenue-critical workflows
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I help US SMB service teams replace manual lead handling with stable automation systems. My background includes enterprise and startup engineering environments, including work across Microsoft and Google teams, but delivery here is focused on practical outcomes for SMB operators.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Every build ships with deterministic flows, operational safeguards, and complete documentation so your team can run it without dependency risk.
            </p>

            <div className="mt-6 grid gap-2 text-sm">
              {principles.map((item) => (
                <div key={item} className="rounded-lg border border-border/35 bg-background px-3 py-2 text-foreground">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/vishnuvardhanburri/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/vishnuvardhanburri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="mailto:hello@vishnulabs.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> hello@vishnulabs.com
              </a>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                size="sm"
                asChild
                className="gap-2 rounded-lg bg-foreground px-5 text-background hover:bg-foreground/90"
              >
                <a
                  href="https://calendly.com/vishnuvardhanburri19/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Live Demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2 rounded-lg border-border/50 px-5 hover:bg-secondary"
              >
                <a href="mailto:hello@vishnulabs.com?subject=Start%20Setup%20-%20VishnuLabs">
                  Start Setup
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
