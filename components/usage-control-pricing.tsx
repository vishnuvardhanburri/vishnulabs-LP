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
  monthlyPrice?: number
  yearlyPrice?: number
  note: string
  points: string[]
  fit: string
  coverage: string
  deployment: string
  highlight?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyLabel: "$149/month",
    yearlyLabel: "$1,490/year",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    note: "For a small team that needs first control and first visibility fast.",
    points: ["Real-time filtering", "Core secret + PII detection", "Basic audit visibility"],
    fit: "Small teams with immediate AI usage and no policy layer yet.",
    coverage: "Single team or first internal surface",
    deployment: "Fast first rollout",
  },
  {
    name: "Growth",
    monthlyLabel: "$799/month",
    yearlyLabel: "$7,990/year",
    monthlyPrice: 799,
    yearlyPrice: 7990,
    note: "For teams already using AI across daily work and needing policy enforcement.",
    points: ["Policy engine", "AI request monitoring", "Centralized logs"],
    fit: "Cross-team usage with more daily prompting and higher review needs.",
    coverage: "Broader internal coverage",
    deployment: "Standard production rollout",
    highlight: true,
  },
  {
    name: "Pro",
    monthlyLabel: "$1,499/month",
    yearlyLabel: "$14,990/year",
    monthlyPrice: 1499,
    yearlyPrice: 14990,
    note: "For heavier internal usage, more systems, and stricter review requirements.",
    points: ["More protected surfaces", "Deeper controls", "Broader internal coverage"],
    fit: "High-volume internal use with stricter policy depth.",
    coverage: "Multiple surfaces + stricter controls",
    deployment: "Deeper rollout with more review",
  },
  {
    name: "Enterprise",
    monthlyLabel: "$10K+/year",
    yearlyLabel: "$10K+/year",
    note: "For custom policy, custom deployment, and enterprise governance requirements.",
    points: ["Custom environments", "Private rollout planning", "Annual enterprise contracting"],
    fit: "Sensitive environments with custom policy and deployment requirements.",
    coverage: "Custom by environment and usage",
    deployment: "Private or enterprise rollout",
  },
]

const compareRows = [
  { label: "Best fit", key: "fit" as const },
  { label: "Coverage", key: "coverage" as const },
  { label: "Deployment", key: "deployment" as const },
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
    <div className="rounded-[32px] border border-white/10 bg-slate-950 p-5 shadow-[0_28px_90px_rgba(2,8,23,0.38)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Pricing</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Choose the control layer that fits current risk.</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
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
          {billingMode === "yearly" ? (
            <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Save 2 months
            </span>
          ) : null}
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
            {billingMode === "yearly" && plan.monthlyPrice && plan.yearlyPrice ? (
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Save ${(plan.monthlyPrice * 12 - plan.yearlyPrice).toLocaleString()}/year
              </p>
            ) : null}
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Starting point</p>
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
              <AppLink href="https://cal.com/vishnuvardhanburri/15min" prefetch>
                Start Now
                <ArrowUpRight className="h-4 w-4" />
              </AppLink>
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Plan comparison</p>
            <p className="mt-2 text-lg font-semibold text-white">One quick view before anyone books a call.</p>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Use this as a buying guide, not a locked contract. India pricing can be scoped separately in INR or USD based on rollout depth,
            support requirements, and budget comfort.
          </p>
        </div>

        <div className="mt-5 overflow-x-auto">
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[190px_repeat(4,minmax(0,1fr))] gap-3">
              <div className="rounded-[20px] border border-white/10 bg-slate-900/70 px-4 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                What changes
              </div>
              {plans.map((plan) => (
                <div
                  key={`head-${plan.name}`}
                  className={`rounded-[20px] border px-4 py-4 ${
                    plan.highlight ? "border-sky-300/30 bg-sky-400/10" : "border-white/10 bg-slate-900/70"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">{plan.name}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{billingMode === "yearly" ? plan.yearlyLabel : plan.monthlyLabel}</p>
                </div>
              ))}

              {compareRows.map((row) => (
                <div key={row.label} className="contents">
                  <div className="rounded-[20px] border border-white/10 bg-slate-900/70 px-4 py-4 text-sm font-semibold text-white">
                    {row.label}
                  </div>
                  {plans.map((plan) => (
                    <div key={`${row.label}-${plan.name}`} className="rounded-[20px] border border-white/10 bg-slate-900/40 px-4 py-4 text-sm leading-7 text-slate-300">
                      {plan[row.key]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
