"use client"

import { BellRing, Bot, RefreshCw, ShieldCheck, Server, Workflow } from "lucide-react"

const capabilities = [
  { icon: Workflow, label: "Deterministic workflows with clear rules" },
  { icon: RefreshCw, label: "Retries, idempotency, and failure handling" },
  { icon: BellRing, label: "Monitoring and alerting from day one" },
  { icon: Server, label: "Backend-first architecture, no brittle zaps" },
  { icon: Bot, label: "AI where it improves speed, not reliability risk" },
  { icon: ShieldCheck, label: "Transparent pricing, timelines, and ownership" },
]

function CapabilityItem({ icon: Icon, label }: { icon: typeof Server; label: string }) {
  return (
    <div className="flex flex-shrink-0 items-center gap-2.5 px-6">
      <Icon className="h-4 w-4 text-primary/70" />
      <span className="whitespace-nowrap text-[13px] font-medium tracking-wide text-muted-foreground">{label}</span>
    </div>
  )
}

export function TrustStrip() {
  return (
    <section className="relative border-y border-border/30">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative overflow-hidden py-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((item, i) => (
            <CapabilityItem key={`${item.label}-${i}`} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
