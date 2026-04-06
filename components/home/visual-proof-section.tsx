"use client"

import { motion } from "framer-motion"

import { visualProofLayers } from "@/components/home/site-data"

export function VisualProofSection() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-[1200px] rounded-[40px] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            Visual proof
          </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
            A simple view of how the system works when it is fixed.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
            Clean inputs, clear ownership, and follow-up that actually reaches the calendar.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/18 p-6 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">Before vs after</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-red-400/12 bg-red-500/[0.04] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-red-200/78">Before</p>
                <ul className="mt-4 grid gap-3 text-[15px] leading-7 text-white/66">
                  <li>Leads sit too long before anyone responds.</li>
                  <li>Handoffs break between tools and teams.</li>
                  <li>Reporting looks active, but bookings stay flat.</li>
                </ul>
              </div>
              <div className="rounded-[24px] border border-cyan-300/14 bg-cyan-400/[0.05] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/78">After</p>
                <ul className="mt-4 grid gap-3 text-[15px] leading-7 text-white/72">
                  <li>Every lead is usable before the next step fires.</li>
                  <li>Ownership is clear from first inquiry to booked call.</li>
                  <li>Results are visible because the path is consistent.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 backdrop-blur-2xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">System architecture</p>
            <div className="mt-8 grid gap-4">
              {visualProofLayers.map((layer, index) => (
                <div key={layer.label} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0.4, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px flex-1 origin-left bg-[linear-gradient(90deg,rgba(34,211,238,0.1),rgba(34,211,238,0.95))]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="min-w-[220px] rounded-[22px] border border-white/10 bg-black/18 px-4 py-4 backdrop-blur-xl md:min-w-[280px]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/72">{layer.label}</p>
                    <p className="mt-2 text-[15px] leading-7 text-white/74">{layer.state}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
