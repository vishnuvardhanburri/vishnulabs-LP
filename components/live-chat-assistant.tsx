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

const STORAGE_KEY = "vishnulabs_assistant_messages_v3"

const initialAssistantMessage: ChatMessage = {
  role: "assistant",
  text: "Hi, I am VishnuLabs Assistant. Ask me about services, pricing, payment, security, timelines, support, integrations, or the Stealth Vault.",
}

const quickPrompts = [
  "What services do you offer?",
  "Show pricing and package ranges",
  "What is Stealth Vault?",
  "How does payment work?",
  "How fast can you go live?",
  "What happens after I say yes?",
]

const intents: Intent[] = [
  {
    id: "services_catalog",
    patterns: ["services", "service", "offer", "offering", "products", "what do you do", "automation list"],
    answer:
      "Core offers: AI Voice Receptionist, AI Scheduling & Reminder System, AI Legal Intake Automation, and Stealth-Mode Internal AI Vault. We also build custom CRM, lead-nurture, and workflow automations for law, real estate, mortgage, clinics, and service teams.",
  },
  {
    id: "pricing",
    patterns: ["price", "pricing", "cost", "fees", "how much", "budget", "investment", "quote"],
    answer:
      "Transparent ranges: AI Voice Receptionist starts at $4,997 one-time. Scheduling systems usually run $6,500-$9,500. Legal intake systems are usually $8,500-$15,000. Stealth-Mode Internal AI Vault is $15,000 one-time lifetime license.",
  },
  {
    id: "stealth_vault",
    patterns: ["vault", "stealth", "private ai", "local ai", "air gap", "air-gapped", "data leak", "secure ai"],
    answer:
      "Stealth-Mode Internal AI Vault is a private local AI stack for confidential operations. It is air-gapped, supports redaction controls, and keeps data inside your environment. Price is $15,000 one-time lifetime license with post-delivery support.",
  },
  {
    id: "vault_why_now",
    patterns: ["why now", "chatgpt risk", "claude risk", "leak risk", "security risk", "compliance risk"],
    answer:
      "Why now: teams already use ChatGPT/AI daily. Without internal controls, confidential details can leak through prompts and files. A private vault keeps AI speed while reducing exposure risk and improving policy control.",
  },
  {
    id: "voice",
    patterns: ["voice", "receptionist", "phone", "call", "inbound", "after hours"],
    answer:
      "AI Voice Receptionist answers calls quickly, captures lead intent, qualifies, routes, and can trigger booking workflows. It is built for teams losing inbound opportunities after-hours or during busy windows.",
  },
  {
    id: "scheduling",
    patterns: ["schedule", "scheduling", "calendar", "reminder", "reschedule", "no show", "booking"],
    answer:
      "Scheduling & Reminder automation handles booking, confirmations, reminders, reschedules, and no-show recovery with CRM updates. Typical outcome is faster response and fewer missed appointments.",
  },
  {
    id: "legal_intake",
    patterns: ["legal", "law", "intake", "attorney", "pi", "personal injury", "case qualification"],
    answer:
      "Legal intake automation collects structured case data, qualifies leads, and routes strong matters to your team faster. It is designed for law-firm response speed, consistency, and intake quality.",
  },
  {
    id: "real_estate",
    patterns: ["real estate", "realtor", "broker", "buyer", "seller", "property lead"],
    answer:
      "For real estate teams, we automate lead follow-up, inbound qualification, booking flows, and reminders so agents spend more time closing instead of chasing callbacks.",
  },
  {
    id: "mortgage",
    patterns: ["mortgage", "loan", "refinance", "lender", "mortgage relief"],
    answer:
      "For mortgage operations, we automate intake capture, lead routing, reminder workflows, and pipeline handoffs to reduce manual follow-up delays and improve conversion consistency.",
  },
  {
    id: "industries",
    patterns: ["industry", "industries", "who is this for", "who is it for", "best fit"],
    answer:
      "Best fit industries: law firms, clinics, real estate, mortgage, and service businesses with inbound lead volume, intake bottlenecks, or compliance/security requirements.",
  },
  {
    id: "delivery",
    patterns: ["timeline", "how long", "delivery", "go live", "implementation", "days"],
    answer:
      "Typical delivery: 5-7 days for core deployments. Execution model is clear: audit and architecture first, then build and QA, then go-live with monitoring and support.",
  },
  {
    id: "after_yes",
    patterns: ["after yes", "next steps", "what happens after", "onboarding", "start process"],
    answer:
      "After agreement: Day 1 discovery + system map, Day 3 build + integration checks, Day 5 go-live + monitoring handoff. You get documentation, ownership clarity, and support.",
  },
  {
    id: "integrations",
    patterns: ["integration", "integrations", "crm", "twilio", "calendly", "google calendar", "zapier", "make", "n8n", "slack"],
    answer:
      "Common integrations: CRM pipelines, Twilio, Calendly, Google Calendar, email systems, Slack alerts, and automation orchestration via n8n/Make/Zapier depending on your stack.",
  },
  {
    id: "transparency",
    patterns: ["transparent", "transparency", "reliability", "monitoring", "retry", "retries", "deterministic", "ownership"],
    answer:
      "Delivery is transparency-first: deterministic workflows, explicit retries, monitoring signals, and clear handoff documentation. Goal is reliable systems, not brittle automations.",
  },
  {
    id: "ownership",
    patterns: ["ownership", "own", "vendor lock", "lock in", "lock-in", "handoff"],
    answer:
      "You keep operational ownership after delivery. VishnuLabs provides documentation and implementation clarity so your team is not stuck in opaque vendor dependencies.",
  },
  {
    id: "support",
    patterns: ["support", "maintenance", "after launch", "post launch", "issue", "help"],
    answer:
      "Support is included post-launch for stabilization. For Stealth Vault, one month support is included, and ongoing support can be added based on scope.",
  },
  {
    id: "payment",
    patterns: ["payment", "paypal", "payoneer", "card", "checkout", "buy", "invoice"],
    answer:
      "Payment options include PayPal (card/wallet) and Payoneer fallback for policy-restricted teams. After payment, VishnuLabs sends invoice, Loom demo, installation guide, license key, and setup call details.",
  },
  {
    id: "contact",
    patterns: ["contact", "email", "phone", "reach", "talk to team", "sales"],
    answer:
      "Contact: hello@vishnulabs.com or book directly at /book. You can also use the live form on /stealth-vault for customization requests.",
  },
  {
    id: "demo",
    patterns: ["demo", "video", "vedio", "walkthrough", "show me", "sample"],
    answer:
      "You can book a live walkthrough at /book. Demo preview is available on the homepage and product pages. For a focused demo, share your workflow and team size in the booking form.",
  },
  {
    id: "results",
    patterns: ["results", "roi", "outcome", "case study", "proof", "metrics"],
    answer:
      "Reported outcomes vary by workflow, but common patterns include faster lead response, fewer no-shows, improved intake consistency, and reduced manual operational load.",
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

  return "I can help with services, pricing, Stealth Vault security, payment, timeline, integrations, support, and ownership. Ask a specific question, or book at /book."
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
        setMessages(parsed.slice(-30))
      }
    } catch {
      // ignore parsing issues and continue with defaults
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)))
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
              <p className="text-[11px] text-muted-foreground">Full-site product, pricing, and delivery answers</p>
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
                placeholder="Ask about services, pricing, security, payment..."
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
