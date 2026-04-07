"use client"

import { type ButtonHTMLAttributes } from "react"

import { useLeadCapture } from "@/components/home/lead-capture-provider"

type AuditCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  trackingSource?: string
}

export function AuditCtaButton({ trackingSource, className = "", onClick, type = "button", ...props }: AuditCtaButtonProps) {
  const { openLeadCapture } = useLeadCapture()

  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        openLeadCapture(trackingSource)
      }}
      className={`glow-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black ${className}`}
      {...props}
    />
  )
}
