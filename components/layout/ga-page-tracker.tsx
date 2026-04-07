"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function GaPageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    const pageLocation = `${pathname}${window.location.search || ""}`

    if (gtag) {
      gtag("event", "page_view", {
        page_path: pageLocation,
        page_location: window.location.href,
        page_title: document.title,
      })
      return
    }

    console.info("[track] page_view", { page_path: pageLocation })
  }, [pathname])

  return null
}
