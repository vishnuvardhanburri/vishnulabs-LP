"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "They identified the weak handoff, rebuilt the flow, and the system finally behaved the way the business needed.",
    author: "Daniel Brooks",
    title: "CTO, SaaS Platform",
  },
  {
    quote: "The real value was control. We stopped guessing where inquiries were breaking and started seeing stable output.",
    author: "Rachel Kim",
    title: "Head of Revenue Ops, B2B SaaS",
  },
  {
    quote: "Response speed improved, follow-up became consistent, and the workflow stopped depending on constant manual rescue.",
    author: "Oliver Grant",
    title: "Founder, Service Business",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.19, 1, 0.22, 1] },
  },
}

export function TestimonialsSection() {
  return (
    <section className="px-5 pb-28 pt-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Trust</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Trusted when reliability matters more than another tool.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.018 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1], delay: index * 0.02 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.18),transparent_30%)]" />
                <div className="absolute inset-[1px] rounded-[1.72rem] border border-sky-300/24 shadow-[0_0_0_1px_rgba(96,165,250,0.08),0_0_80px_rgba(217,70,239,0.12)]" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(196,181,253,0.8)_42%,rgba(125,211,252,0.55)_100%)] bg-clip-text text-6xl font-semibold leading-none text-transparent opacity-80 drop-shadow-[0_0_22px_rgba(96,165,250,0.2)]">
                    "
                  </span>
                  <span className="pt-3 text-sm tracking-[0.28em] text-sky-200">★★★★★</span>
                </div>

                <p className="mt-3 text-lg leading-8 text-zinc-300">{item.quote}</p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-base font-medium text-white">{item.author}</p>
                  <p className="mt-1 bg-[linear-gradient(90deg,rgba(125,211,252,0.92)_0%,rgba(196,181,253,0.88)_58%,rgba(244,114,182,0.76)_100%)] bg-clip-text text-sm font-medium text-transparent">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
