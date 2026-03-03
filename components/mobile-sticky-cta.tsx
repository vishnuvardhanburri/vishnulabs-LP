"use client"

import { Calendar, MessageSquareText } from "lucide-react"

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-background/95 p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <a
          href="/book"
          data-track="mobile_book_meeting"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-3 text-sm font-semibold text-background"
        >
          <Calendar className="h-4 w-4" />
          Book Meeting
        </a>
        <button
          type="button"
          data-track="mobile_open_chat"
          onClick={() => window.dispatchEvent(new Event("open-live-chat"))}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-card/60 px-3 py-3 text-sm font-semibold text-foreground"
        >
          <MessageSquareText className="h-4 w-4" />
          Ask Questions
        </button>
      </div>
    </div>
  )
}
