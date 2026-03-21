"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

import { AppLink } from "@/components/app-link"
import { Button } from "@/components/ui/button"

type BillingMode = "monthly" | "yearly"

type Plan = {
  name: string
  monthlyLabel: string
  yearlyLabel: string
  note: string
  points: string[]
  highlight?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyLabel: "$149/month",
    yearlyLabel: "$1,490/year",
    note: "For a small team that needs first control and first visibility fast.",
    points: ["Real-time filtering", "Core secret + PII detection", "Basic audit visibility"],
  },
  {
    name: "Growth",
    monthlyLabel: "$799/month",
    yearlyLabel: "$7,990/year",
    note: "For teams already using AI across daily work and needing policy enforcement.",
    points: ["Policy engine", "AI request monitoring", "Centralized logs"],
    highlight: true,
  },
  {
    name: "Pro",
    monthlyLabel: "$1,499/month",
    yearlyLabel: "$14,990/year",
    note: "For heavier internal usage, more systems, and stricter review requirements.",
    points: ["More protected surfaces", "Deeper controls", "Broader internal coverage"],
  },
  {
    name: "Enterprise",
    monthlyLabel: "$10K+/year",
    yearlyLabel: "$10K+/year",
    note: "For custom policy, custom deployment, and enterprise governance requirements.",
    points: ["Custom environments", "Private rollout planning", "Annual enterprise contracting"],
  },
]

export function UsageControlPricing() {
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly")

  const subtitle = useMemo(() => {
    if (billingMode === "yearly") {
      return "Annual billing includes 2 months free on Starter, Growth, and Pro."
    }

    return "Monthly billing keeps the first rollout simple while the team proves fit."
  }, [billingMode])

  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-950 p-6 shadow-[0_28px_90px_rgba(2,8,23,0.38)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Pricing</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Clear plans. No hidden layer later.</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>
        </div>

        <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          {[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setBillingMode(item.value as BillingMode)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billingMode === item.value ? "bg-white text-slate-950 shadow-sm" : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[28px] border p-5 transition sm:p-6 ${
              plan.highlight
                ? "border-sky-300/30 bg-sky-400/10 shadow-[0_18px_44px_rgba(59,130,246,0.16)]"
                : "border-white/10 bg-white/5"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">{plan.name}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{billingMode === "yearly" ? plan.yearlyLabel : plan.monthlyLabel}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{plan.note}</p>

            <div className="mt-5 space-y-3">
              {plan.points.map((point) => (
                <div key={point} className="flex gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Button asChild className="mt-6 h-11 w-full rounded-full bg-white text-slate-950 hover:bg-slate-100">
              <AppLink href="/book" prefetch>
                Start Now
                <ArrowUpRight className="h-4 w-4" />
              </AppLink>
            </Button>
          </article>
        ))}
      </div>
    </div>
  )
}
