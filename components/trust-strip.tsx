"use client"

import { Server, Bot, ShieldCheck, Globe, Zap } from "lucide-react"

const capabilities = [
  { icon: Server, label: "Backend-first architecture (no brittle zaps)" },
  { icon: Bot, label: "AI agents that stay deterministic" },
  { icon: ShieldCheck, label: "Production-grade reliability & alerting" },
  { icon: Globe, label: "Built for global scale" },
  { icon: Zap, label: "You own the code and infra" },
]

const companies = [
  "Microsoft",
  "Google",
  "Expressway Startup",
]

function CapabilityItem({ icon: Icon, label }: { icon: typeof Server; label: string }) {
  return (
    <div className="flex flex-shrink-0 items-center gap-2.5 px-6">
      <Icon className="h-4 w-4 text-primary/70" />
      <span className="whitespace-nowrap text-[13px] font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function TrustStrip() {
  return (
    <section className="relative border-y border-border/30">
      <div className="absolute inset-0 bg-secondary/20" />

      {/* Capabilities marquee */}
      <div className="relative overflow-hidden py-4">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((item, i) => (
            <CapabilityItem key={`${item.label}-${i}`} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      {/* Companies strip */}
      <div className="relative border-t border-border/20 overflow-hidden py-3.5">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee-fast flex w-max items-center">
          {[...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies].map((company, i) => (
            <div key={`${company}-${i}`} className="flex flex-shrink-0 items-center gap-3 px-8">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-secondary/80">
                <span className="text-[10px] font-bold text-foreground/60">
                  {company.charAt(0)}
                </span>
              </div>
              <span className="whitespace-nowrap text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
