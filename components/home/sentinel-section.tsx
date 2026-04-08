"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

import { sentinelFeatures } from "@/components/home/site-data"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export function SentinelSection() {
  return (
    <section className="px-5 pb-24">
      <div className="relative mx-auto max-w-[1200px] rounded-[40px] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_16%_0%,rgba(123,102,255,0.12),transparent_34%),radial-gradient(circle_at_84%_0%,rgba(104,171,255,0.12),transparent_30%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
              Sentinel
            </p>
            <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
              Sentinel — AI Data Protection & Governance Platform
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/82">
              Prevent data leaks, enforce compliance, and control every AI interaction before it leaves your system.
            </p>
            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-white/76">
              Critical infrastructure for teams handling sensitive client and patient data.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/76">
              Not for experimentation. Built for teams already operating with real data and revenue.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_24px_90px_rgba(3,10,24,0.24)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(104,171,255,0.12),transparent_18%),radial-gradient(circle_at_18%_78%,rgba(123,102,255,0.1),transparent_20%)]" />
            <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full border border-cyan-300/12 bg-white/[0.03] shadow-[0_0_30px_rgba(104,171,255,0.12)]" />
            <div className="pointer-events-none absolute bottom-10 right-20 h-14 w-14 rounded-full border border-fuchsia-300/12 bg-white/[0.02] shadow-[0_0_22px_rgba(191,123,255,0.1)]" />
            <div className="pointer-events-none absolute left-10 top-24 h-px w-28 bg-[linear-gradient(90deg,rgba(104,171,255,0),rgba(104,171,255,0.7),rgba(104,171,255,0))]" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
              </span>
              <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/84">Enterprise platform</p>
              <p className="mt-1 text-sm leading-6 text-white/76">Deploys as governed protection around AI usage</p>
            </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {sentinelFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[24px] border border-white/10 bg-black/18 px-4 py-5 text-[15px] leading-7 text-white/84"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <AuditCtaButton trackingSource="home_sentinel_cta">Get Free System Audit</AuditCtaButton>
              <p className="mt-3 text-sm leading-7 text-white/74">Limited onboarding capacity. No long-term contracts.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
