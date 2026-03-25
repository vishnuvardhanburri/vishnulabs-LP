"use client"

import { Calendar, Mail } from "lucide-react"

export function GlobalMobileConversionBar() {
  return (
    <div className="mobile-safe-pad fixed inset-x-0 bottom-0 z-50 border-t border-white/75 bg-white/88 px-3 pt-3 backdrop-blur-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <a
          href="https://cal.com/vishnuvardhanburri/15min"
          data-track="funnel_mobile_book_demo_click"
          className="tap-target inline-flex items-center justify-center gap-2 rounded-[18px] bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
        >
          <Calendar className="h-4 w-4" />
          Book Review
        </a>
        <a
          href="/pricing"
          data-track="funnel_mobile_email_click"
          className="tap-target inline-flex items-center justify-center gap-2 rounded-[18px] border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.06)]"
        >
          <Mail className="h-4 w-4" />
          View Pricing
        </a>
      </div>
    </div>
  )
}
