"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { useLeadCapture } from "@/components/home/lead-capture-provider"

export function MagneticButton({
  href,
  children,
  className = "",
  captureAudit = false,
  trackingSource,
}: {
  href: string
  children: React.ReactNode
  className?: string
  captureAudit?: boolean
  trackingSource?: string
}) {
  const { openLeadCapture } = useLeadCapture()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)
  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.55 })
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.55 })
  const springScale = useSpring(scale, { stiffness: 210, damping: 18, mass: 0.6 })
  const rotate = useTransform(springX, [-32, 32], [-3.2, 3.2])

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY, rotate, scale: springScale }}
      onClick={(event) => {
        if (!captureAudit) return
        event.preventDefault()
        openLeadCapture(trackingSource)
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.2)
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.22)
        scale.set(1.05)
      }}
      onMouseEnter={() => scale.set(1.03)}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
        scale.set(1)
      }}
      className={`glow-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-black ${className}`}
    >
      {children}
    </motion.a>
  )
}
