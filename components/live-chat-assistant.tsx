"use client"

import { useEffect, useMemo, useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"

type ChatMessage = {
  role: "user" | "assistant"
  text: string
}

const quickPrompts = [
  "How transparent is pricing?",
  "What is included in $4,997?",
  "How long does setup take?",
  "Do we own the system after delivery?",
]

function answerFor(input: string) {
  const q = input.toLowerCase()

  if (q.includes("price") || q.includes("cost") || q.includes("pricing")) {
    return "Pricing is transparent and scoped in writing before build. Starter projects begin at $4,997. Multi-workflow systems usually range from $6,500 to $15,000 depending on integrations and complexity."
  }

  if (q.includes("4,997") || q.includes("included")) {
    return "The $4,997 starter package covers architecture mapping, one primary workflow build, core integrations, QA, launch support, and handoff documentation."
  }

  if (q.includes("time") || q.includes("days") || q.includes("timeline") || q.includes("setup")) {
    return "Most starter implementations go live in 5-7 days. Larger multi-workflow deployments usually take 1-3 weeks based on scope and approvals."
  }

  if (q.includes("own") || q.includes("ownership") || q.includes("lock") || q.includes("locked")) {
    return "You own the delivered workflows and documentation. VishnuLabs provides SOPs and handoff so your team can operate without vendor lock-in."
  }

  if (q.includes("support") || q.includes("maintenance") || q.includes("monitor")) {
    return "Every project includes post-launch support. Ongoing monitoring and optimization is available as an optional monthly service."
  }

  if (q.includes("integrat") || q.includes("crm") || q.includes("calendar") || q.includes("twilio")) {
    return "We commonly integrate Calendly/Google Calendar, Twilio SMS/calls, CRM pipelines, email systems, and workflow platforms like n8n/Make/Zapier."
  }

  if (q.includes("security") || q.includes("privacy") || q.includes("data")) {
    return "We design with controlled access, clear event logging, and explicit data flow mapping. Privacy and Terms pages are included, and platform access stays under your ownership."
  }

  return "Good question. For an exact answer based on your stack, book a 15-minute call at /book or email hello@vishnulabs.com."
}

export function LiveChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi, I am VishnuLabs Assistant. Ask me about pricing transparency, scope, timeline, integrations, ownership, or support.",
    },
  ])

  useEffect(() => {
    const openChat = () => setOpen(true)
    window.addEventListener("open-live-chat", openChat)
    return () => window.removeEventListener("open-live-chat", openChat)
  }, [])

  const canSend = useMemo(() => input.trim().length > 0, [input])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const reply = answerFor(trimmed)
    setMessages((prev) => [...prev, { role: "user", text: trimmed }, { role: "assistant", text: reply }])
    setInput("")
  }

  return (
    <>
      {open && (
        <section
          id="chat"
          className="fixed bottom-[calc(94px+env(safe-area-inset-bottom))] right-2 z-[60] flex w-[calc(100vw-1rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-border/55 bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl md:bottom-20 md:right-4 md:w-[380px]"
        >
          <header className="flex items-center justify-between border-b border-border/45 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">VishnuLabs Live Assistant</p>
              <p className="text-[11px] text-muted-foreground">Transparency-first answers</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="tap-target rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="max-h-[320px] space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.role}-${idx}`}
                className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  msg.role === "assistant" ? "bg-secondary text-foreground" : "ml-10 bg-primary/15 text-foreground"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t border-border/45 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-border/55 px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input)
                }}
                className="h-10 w-full rounded-lg border border-border/55 bg-card/70 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/60"
                placeholder="Ask about pricing, timeline, integrations..."
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                disabled={!canSend}
                className="tap-target inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        data-track="open_live_assistant"
        className="tap-target fixed bottom-[calc(94px+env(safe-area-inset-bottom))] right-3 z-[55] inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-4 w-4" />
        Live Assistant
      </button>
    </>
  )
}
