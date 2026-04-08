"use client"

import { MessageSquareText, Sparkles } from "lucide-react"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export function MobileStickyCta() {
  return (
    <div className="mobile-safe-pad fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/45 px-3 pt-3 backdrop-blur-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <AuditCtaButton
          trackingSource="mobile_sticky_cta"
          data-track="mobile_sticky_audit"
          className="tap-target rounded-lg px-3 py-3 text-sm font-semibold"
        >
          <Sparkles className="h-4 w-4" />
          Get Free System Audit
        </AuditCtaButton>
        <button
          type="button"
          data-track="mobile_open_chat"
          onClick={() => window.dispatchEvent(new Event("open-live-chat"))}
          className="tap-target inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
        >
          <MessageSquareText className="h-4 w-4" />
          Ask Questions
        </button>
      </div>
    </div>
  )
}
