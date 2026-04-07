"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { reviews } from "@/components/home/site-data"

const sectionReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardReveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-review-card]")

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.42, y: 38 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            delay: index * 0.06,
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="reviews" ref={sectionRef} className="px-5 pb-24">
      <div className="mx-auto max-w-[1200px] rounded-[40px] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
              Reviews
            </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
            Trusted by teams building reliable systems
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/82">
            When the lead flow works, teams feel it quickly. These reviews show the trust that comes from more booked calls and fewer missed chances.
          </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/22 px-6 py-5 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/62">Average rating</p>
            <div className="mt-3 flex items-end gap-3">
              <p className="font-heading text-[44px] font-semibold leading-none text-white">4.9/5</p>
              <p className="pb-1 text-amber-300">★★★★★</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.article
              key={`${review.name}-${review.role}`}
              data-review-card
              variants={cardReveal}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.2, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 shadow-[0_20px_80px_rgba(3,10,24,0.26)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[30px] border border-cyan-300/22 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_70px_rgba(34,211,238,0.12)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-[22px] font-semibold text-white">{review.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/72">{review.role}</p>
                  </div>
                  <p className="text-amber-300">{renderStars(review.rating)}</p>
                </div>

                <p className="mt-6 text-[15px] leading-7 text-white/86">{review.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function renderStars(rating: number) {
  return Array.from({ length: rating }, () => "★").join("")
}
