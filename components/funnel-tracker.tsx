"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function FunnelTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag

    if (typeof gtag !== "function") return

    gtag("event", "funnel_page_view", {
      event_category: "funnel",
      event_label: pathname,
      path: pathname,
    })
  }, [pathname])

  return null
}
