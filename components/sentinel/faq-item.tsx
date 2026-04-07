"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold leading-8 text-white">{question}</h3>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
          <ChevronDown
            className={`h-5 w-5 text-cyan-200 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="border-t border-white/10 px-5 py-5 text-base leading-8 text-white/68">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
