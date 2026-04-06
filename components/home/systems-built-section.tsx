"use client"

import { motion } from "framer-motion"

import { systemsWeBuild } from "@/components/home/site-data"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function SystemsBuiltSection() {
  return (
    <section id="systems-built" className="px-5 pb-24">
      <div className="mx-auto max-w-[1200px] rounded-[40px] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            Systems we build
          </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
            Systems we build repeatedly for teams that need cleaner conversions.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
            These are not products. They are the client systems we build again and again when booked calls need to rise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
        >
          {systemsWeBuild.map((system) => (
            <motion.article
              key={system.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.28, ease: [0.2, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 shadow-[0_20px_80px_rgba(3,10,24,0.24)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[30px] border border-cyan-300/22 shadow-[0_0_0_1px_rgba(34,211,238,0.1),0_0_70px_rgba(34,211,238,0.12)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_34%)]" />
              </div>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">Built for clients</p>
                <h3 className="mt-5 font-heading text-[24px] font-semibold leading-tight text-white">{system.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-white/68">{system.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
