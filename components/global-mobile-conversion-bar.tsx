"use client"

import { Calendar, Mail } from "lucide-react"

export function GlobalMobileConversionBar() {
  return (
    <div className="mobile-safe-pad fixed inset-x-0 bottom-0 z-50 border-t border-border/45 bg-background/95 px-3 pt-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <a
          href="/book"
          data-track="funnel_mobile_book_demo_click"
          className="tap-target inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-3 text-sm font-semibold text-background shadow-[0_8px_22px_rgba(249,115,22,0.22)]"
        >
          <Calendar className="h-4 w-4" />
          Book Demo
        </a>
        <a
          href="mailto:hello@vishnulabs.com?subject=Invoice%20Request%20-%20VishnuLabs&body=Hi%20VishnuLabs%2C%20please%20send%20the%20invoice%20and%20payment%20link."
          data-track="funnel_mobile_invoice_request_click"
          className="tap-target inline-flex items-center justify-center gap-2 rounded-lg border border-primary/45 bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Mail className="h-4 w-4" />
          Request Invoice
        </a>
      </div>
    </div>
  )
}
