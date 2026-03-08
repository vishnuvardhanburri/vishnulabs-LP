"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { MessageCircle, RotateCcw, Send, X } from "lucide-react"

type ChatMessage = {
  role: "user" | "assistant"
  text: string
}

type Intent = {
  id: string
  patterns: string[]
  answer: string
}

const STORAGE_KEY = "vishnulabs_assistant_messages_v2"

const initialAssistantMessage: ChatMessage = {
  role: "assistant",
  text: "Hi, I am VishnuLabs Assistant. Ask me about services, pricing, Stealth Vault security, payment, timeline, integrations, or ownership.",
}

const quickPrompts = [
  "What are your prices?",
  "What is Stealth Vault and why now?",
  "How does payment work?",
  "What integrations do you support?",
  "What is your delivery timeline?",
  "Do we own the system after delivery?",
]

const intents: Intent[] = [
  {
    id: "pricing",
    patterns: ["price", "pricing", "cost", "fees", "how much", "budget", "investment", "quote"],
    answer:
      "Transparent pricing: AI Voice Receptionist starts at $4,997 one-time. Scheduling system is typically $6,500-$9,500. Legal intake is typically $8,500-$15,000. Stealth-Mode Internal AI Vault is $15,000 one-time lifetime license.",
  },
  {
    id: "voice",
    patterns: ["voice", "receptionist", "call", "calls", "inbound"],
    answer:
      "AI Voice Receptionist is built for teams missing inbound calls. It answers in under 2 seconds, qualifies intent, routes priority leads, and can auto-book consultations.",
  },
  {
    id: "scheduling",
    patterns: ["schedule", "scheduling", "calendar", "reminder", "reschedule", "no show"],
    answer:
      "The AI Scheduling & Reminder system automates booking, reminders, reschedules, and no-show recovery across SMS and email, with CRM status sync.",
  },
  {
    id: "legal_intake",
    patterns: ["legal", "intake", "law firm", "lawyer", "attorney", "pi", "personal injury"],
    answer:
      "AI Legal Intake Automation captures leads 24/7, asks structured questions, generates summaries, and routes the right cases to legal staff quickly.",
  },
  {
    id: "vault",
    patterns: ["vault", "stealth", "air gap", "air-gapped", "private ai", "local ai", "data leak", "security"],
    answer:
      "Stealth-Mode Internal AI Vault is a private, air-gapped local AI system for law firms/clinics. No data leaves your office. It includes document memory, redaction controls, and a one-time $15,000 lifetime license.",
  },
  {
    id: "why_now",
    patterns: ["why now", "today", "market", "chatgpt", "ai agent", "risk", "leak"],
    answer:
      "Why now: many teams already use ChatGPT/AI agents in daily workflows. Without strict controls, confidential data can leak through public AI usage. A private vault keeps AI speed while reducing cloud exposure risk.",
  },
  {
    id: "market_compare",
    patterns: ["benchmark", "market price", "market pricing", "compared", "comparison", "expensive", "cheap"],
    answer:
      "For private AI + compliance-heavy customization, market implementations commonly run well above entry-level deployments. VishnuLabs positions Stealth Vault at $15,000 one-time for a lower-friction security-first rollout.",
  },
  {
    id: "timeline",
    patterns: ["timeline", "how long", "delivery", "days", "go live", "implementation"],
    answer:
      "Typical timeline: core implementations usually go live in 5-7 days. Delivery framework: Day 1 audit + architecture, Day 3 build + QA, Day 5 go-live + monitoring.",
  },
  {
    id: "ownership",
    patterns: ["ownership", "own", "lock in", "lock-in", "vendor lock", "handoff"],
    answer:
      "You own delivered workflows and documentation. Handoff includes SOPs and operational clarity, designed to avoid brittle setup and vendor lock-in.",
  },
  {
    id: "integrations",
    patterns: ["integration", "integrations", "crm", "twilio", "calendly", "google calendar", "zapier", "make", "n8n"],
    answer:
      "Common integrations include CRM pipelines, Calendly/Google Calendar, Twilio SMS/calls, email systems, and workflow tools like n8n, Make, and Zapier.",
  },
  {
    id: "payments",
    patterns: ["payment", "paypal", "card", "payoneer", "checkout", "buy"],
    answer:
      "Stealth Vault checkout is via PayPal (card/wallet). Payoneer is available as fallback. After successful payment, the system sends license key, installation guide, and onboarding resource links by email.",
  },
  {
    id: "customization",
    patterns: ["custom", "customization", "customize", "tailored", "specific workflow"],
    answer:
      "Yes, custom security and automation workflows are supported. Use the customization form on the Stealth Vault page or contact hello@vishnulabs.com with your stack and requirements.",
  },
  {
    id: "support",
    patterns: ["support", "maintenance", "monitoring", "post launch", "after launch"],
    answer:
      "Every project includes post-launch support. Ongoing monitoring/optimization can be added based on your team capacity and operating model.",
  },
  {
    id: "industries",
    patterns: ["industry", "industries", "real estate", "mortgage", "clinic", "consulting", "who is this for"],
    answer:
      "Primary fit: law firms, real estate teams, mortgage operations, clinics, and consulting/service businesses with lead-response or intake bottlenecks.",
  },
  {
    id: "book",
    patterns: ["book", "demo", "call", "meeting", "contact", "talk"],
    answer:
      "You can book a live demo at /book. For direct email, use hello@vishnulabs.com. If you share your use case, I can suggest the best product path first.",
  },
]

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function scoreIntent(query: string, intent: Intent) {
  let score = 0

  for (const pattern of intent.patterns) {
    if (query.includes(pattern)) {
      score += pattern.split(" ").length > 1 ? 3 : 2
    }
  }

  return score
}

function answerFor(input: string) {
  const query = normalizeText(input)
  if (!query) return initialAssistantMessage.text

  let bestIntent: Intent | null = null
  let bestScore = 0

  for (const intent of intents) {
    const score = scoreIntent(query, intent)
    if (score > bestScore) {
      bestScore = score
      bestIntent = intent
    }
  }

  if (bestIntent && bestScore > 0) {
    return bestIntent.answer
  }

  return "I can help with services, pricing, Stealth Vault security, payment, timeline, integrations, and ownership. For custom questions, book at /book or email hello@vishnulabs.com."
}

export function LiveChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([initialAssistantMessage])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as ChatMessage[]
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMessages(parsed.slice(-20))
      }
    } catch {
      // ignore parsing issues and continue with defaults
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-20)))
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

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

  const resetChat = () => {
    setMessages([initialAssistantMessage])
    window.localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <>
      {open && (
        <section
          id="chat"
          className="fixed bottom-[calc(94px+env(safe-area-inset-bottom))] right-2 z-[60] flex w-[calc(100vw-1rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-[0_20px_42px_rgba(249,115,22,0.2)] backdrop-blur-xl md:bottom-20 md:right-4 md:w-[390px]"
        >
          <header className="flex items-center justify-between border-b border-border/50 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">VishnuLabs Live Assistant</p>
              <p className="text-[11px] text-muted-foreground">Full-site product, pricing, and security answers</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className="tap-target rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                aria-label="Reset chat"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="tap-target rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          <div ref={listRef} className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-3">
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

          <div className="border-t border-border/50 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-border/60 px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-secondary hover:text-foreground"
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
                className="h-10 w-full rounded-lg border border-border/60 bg-card/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/65"
                placeholder="Ask about products, pricing, security, payment..."
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
        className="tap-target fixed bottom-[calc(94px+env(safe-area-inset-bottom))] right-3 z-[55] inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(249,115,22,0.26)] md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-4 w-4" />
        Live Assistant
      </button>
    </>
  )
}
