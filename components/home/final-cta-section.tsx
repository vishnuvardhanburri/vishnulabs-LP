"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"

export function FinalCtaSection() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-[1200px] rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.028))] px-6 py-10 shadow-[0_24px_90px_rgba(3,10,24,0.28)] backdrop-blur-2xl md:px-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            Final step
          </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[56px]">
            Still losing leads without knowing why?
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
            We&apos;ll show you exactly where your system is breaking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" captureAudit trackingSource="final_cta">
            Get Free System Audit
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <p className="mt-3 text-sm leading-7 text-white/54">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
          <p className="mt-1 text-sm leading-7 text-white/48">No long-term contracts. Start with a single audit.</p>
        </motion.div>
      </div>
    </section>
  )
}
