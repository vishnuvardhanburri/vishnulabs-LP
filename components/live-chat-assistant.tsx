"use client"

import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import { Mail, MessageCircle, RotateCcw, Send, X } from "lucide-react"

type ChatMessage = {
  role: "user" | "assistant"
  text: string
}

type Intent = {
  id: string
  patterns: string[]
  answer: string
}

type AssistantLead = {
  name: string
  email: string
  phone: string
  useCase: string
  website: string
}

type TrackPayload = Record<string, string | number | boolean>

const STORAGE_KEY = "vishnulabs_assistant_messages_v4"

const initialAssistantMessage: ChatMessage = {
  role: "assistant",
  text: "Hi, I am VishnuLabs Assistant. Ask about pricing, products, websites, custom software, security, launch scope, or the Stealth Vault.",
}

const quickPrompts = [
  "What services do you offer?",
  "Do you build websites too?",
  "Show pricing and package ranges",
  "What is Stealth Vault?",
  "How does payment work?",
  "How fast can you go live?",
  "What happens after I say yes?",
]

const defaultLead: AssistantLead = {
  name: "",
  email: "",
  phone: "",
  useCase: "",
  website: "",
}

const fallbackMailto =
  "mailto:hello@vishnulabs.com?subject=Need%20Help%20From%20Live%20Assistant&body=Hi%20VishnuLabs%2C%0A%0AThe%20live%20assistant%20widget%20could%20not%20send%20my%20request.%20Please%20contact%20me.%0A%0AName%3A%0AEmail%3A%0APhone%3A%0AUse-case%3A%0A"

const intents: Intent[] = [
  {
    id: "services_catalog",
    patterns: ["services", "service", "offer", "offering", "products", "what do you do", "automation list"],
    answer:
      "Core offers: AI Voice Receptionist, AI Scheduling & Reminder System, AI Legal Intake Automation, and Stealth-Mode Internal AI Vault. We also build websites, domain-management support, custom software solutions, CRM layers, lead-nurture flows, and broader workflow systems for startups, hospitals, clinics, transport and logistics teams, moving companies, and law-service operators.",
  },
  {
    id: "pricing",
    patterns: ["price", "pricing", "cost", "fees", "how much", "budget", "investment", "quote"],
    answer:
      "Pricing is shown as a starting point, not a forced final package. Stealth Vault plans start from the listed product tiers, and the final quote depends on policy depth, protected systems, rollout model, and support. Public prices are shown in USD for US and UK-facing projects. India pricing is scoped separately and can be quoted in INR or USD based on workflow depth, integrations, deployment, and budget comfort. If you want the right fit without delays or unnecessary scope, email hello@vishnulabs.com for a direct recommendation.",
  },
  {
    id: "platform_services",
    patterns: ["website", "websites", "domain", "domains", "software solution", "software solutions", "platform"],
    answer:
      "Yes, VishnuLabs can scope website creation, domain management, and custom software solutions alongside the automation systems. The goal is a more complete SaaS-style platform view instead of isolated pieces.",
  },
  {
    id: "stealth_vault",
    patterns: ["vault", "stealth", "private ai", "local ai", "air gap", "air-gapped", "data leak", "secure ai"],
    answer:
      "Stealth-Mode Internal AI Vault is a private local AI stack for confidential operations. It is air-gapped, supports redaction controls, and keeps data inside your environment. The current launch offer is $15,000 one-time for the first 100 members, with post-delivery support included. Custom vault requirements are also available for sensitive teams.",
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
      "Best fit industries now include startups, hospitals and clinics, transport and logistics teams, moving companies, lawyers and law services, real estate, mortgage, and service businesses with inbound lead volume or operational bottlenecks.",
  },
  {
    id: "websites",
    patterns: ["website", "websites", "landing page", "site", "web design", "domain", "domains"],
    answer:
      "Yes, VishnuLabs builds websites and landing pages for startups, hospitals and clinics, transport and logistics teams, moving companies, and law-service businesses. Domain management and launch support are also available.",
  },
  {
    id: "custom_software",
    patterns: ["custom software", "software", "portal", "dashboard", "internal tool", "admin tool", "custom system"],
    answer:
      "Yes, VishnuLabs also builds custom software solutions like admin dashboards, workflow tools, and operating-system layers that connect your website, automation, and team operations. If you are not sure what to choose, email hello@vishnulabs.com and VishnuLabs will suggest the right custom package with transparent pricing.",
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
      "For Stealth Vault, payment is Payoneer only. Use the tier links on /stealth-vault or email hello@vishnulabs.com for customizations. After payment, VishnuLabs manually sends the invoice, Loom demo link, guide, key, and setup-call booking within 24 hours.",
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

function trackAssistantEvent(eventName: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag

  if (typeof gtag !== "function") return

  gtag("event", eventName, {
    event_category: "funnel",
    event_label: window.location.pathname,
    path: window.location.pathname,
    ...payload,
  })
}

export function LiveChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([initialAssistantMessage])
  const [leadCaptureOpen, setLeadCaptureOpen] = useState(false)
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const [leadLoading, setLeadLoading] = useState(false)
  const [leadError, setLeadError] = useState("")
  const [leadForm, setLeadForm] = useState<AssistantLead>(defaultLead)
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
    const openChat = () => {
      setOpen(true)
      trackAssistantEvent("funnel_live_assistant_open")
    }

    window.addEventListener("open-live-chat", openChat)
    return () => window.removeEventListener("open-live-chat", openChat)
  }, [])

  const canSend = useMemo(() => input.trim().length > 0, [input])

  const userMessageCount = useMemo(() => messages.filter((msg) => msg.role === "user").length, [messages])

  useEffect(() => {
    if (leadSubmitted || leadCaptureOpen) return
    if (userMessageCount < 3) return

    setLeadCaptureOpen(true)
    trackAssistantEvent("funnel_live_assistant_lead_prompt_shown")
  }, [leadCaptureOpen, leadSubmitted, userMessageCount])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    trackAssistantEvent("funnel_live_assistant_message_sent")
    const reply = answerFor(trimmed)
    setMessages((prev) => [...prev, { role: "user", text: trimmed }, { role: "assistant", text: reply }])
    setInput("")
  }

  const resetChat = () => {
    setMessages([initialAssistantMessage])
    setLeadCaptureOpen(false)
    setLeadSubmitted(false)
    setLeadLoading(false)
    setLeadError("")
    setLeadForm(defaultLead)
    window.localStorage.removeItem(STORAGE_KEY)
  }

  const submitLeadCapture = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLeadLoading(true)
    setLeadError("")
    trackAssistantEvent("funnel_live_assistant_lead_submit_attempt")

    try {
      const response = await fetch("/api/contact/stealth-vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          message: `[Live Assistant Lead]\nUse-case: ${leadForm.useCase}`,
          website: leadForm.website,
          source: "live_assistant",
          page: window.location.pathname,
        }),
      })

      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        setLeadError(data.error || "The assistant could not send this request right now. Email us directly and we will reply quickly with the right next step.")
        trackAssistantEvent("funnel_live_assistant_lead_submit_error", { response_status: response.status })
        return
      }

      setLeadSubmitted(true)
      setLeadCaptureOpen(false)
      setLeadForm(defaultLead)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Thanks, details received. VishnuLabs team will contact you shortly from hello@vishnulabs.com.",
        },
      ])
      trackAssistantEvent("funnel_live_assistant_lead_submit_success")
    } catch {
      setLeadError("The assistant hit a temporary delivery issue. Email hello@vishnulabs.com and we will reply as soon as possible.")
      trackAssistantEvent("funnel_live_assistant_lead_submit_error", { response_status: 0 })
    } finally {
      setLeadLoading(false)
    }
  }

  return (
    <>
      {open && (
        <section
          id="chat"
          className="assistant-shell assistant-enter fixed bottom-[calc(94px+env(safe-area-inset-bottom))] right-2 z-[60] hidden w-[calc(100vw-1rem)] max-w-[400px] flex-col overflow-hidden rounded-[28px] md:bottom-20 md:right-4 md:flex md:w-[400px]"
        >
          <header className="flex items-center justify-between border-b border-border/50 px-4 py-3">
            <div>
              <p className="text-base font-semibold text-foreground">VishnuLabs Live Assistant</p>
              <p className="text-[11px] text-muted-foreground">Ask about pricing, scope, delivery, and best-fit systems</p>
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

          <div ref={listRef} className="max-h-[380px] space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.role}-${idx}`}
                className={`rounded-2xl px-3 py-2.5 text-sm leading-relaxed shadow-[0_8px_20px_rgba(15,23,42,0.04)] ${
                  msg.role === "assistant" ? "border border-white/80 bg-white/86 text-foreground" : "ml-10 bg-slate-950 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {leadCaptureOpen && !leadSubmitted ? (
              <form onSubmit={submitLeadCapture} className="rounded-[24px] border border-white/80 bg-white/82 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Want help fast?</p>
                <p className="mt-1 text-xs text-muted-foreground">Share details and we will reach out with the best-fit solution.</p>

                <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0" aria-hidden>
                  <label>
                    Website
                    <input
                      type="text"
                      value={leadForm.website}
                      onChange={(event) => setLeadForm((prev) => ({ ...prev, website: event.target.value }))}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </label>
                </div>

                <div className="mt-2 grid gap-2">
                  <input
                    required
                    value={leadForm.name}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Name"
                    className="h-9 rounded-lg border border-border/60 bg-background/90 px-2.5 text-xs text-foreground outline-none focus:border-primary/65"
                  />
                  <input
                    required
                    type="email"
                    value={leadForm.email}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="Work email"
                    className="h-9 rounded-lg border border-border/60 bg-background/90 px-2.5 text-xs text-foreground outline-none focus:border-primary/65"
                  />
                  <input
                    required
                    value={leadForm.phone}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, phone: event.target.value }))}
                    placeholder="Phone"
                    className="h-9 rounded-lg border border-border/60 bg-background/90 px-2.5 text-xs text-foreground outline-none focus:border-primary/65"
                  />
                  <textarea
                    required
                    rows={3}
                    value={leadForm.useCase}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, useCase: event.target.value }))}
                    placeholder="Use-case"
                    className="rounded-lg border border-border/60 bg-background/90 px-2.5 py-2 text-xs text-foreground outline-none focus:border-primary/65"
                  />
                </div>

                {leadError ? (
                  <div className="mt-3 rounded-[22px] border border-primary/12 bg-primary/5 px-3.5 py-3.5 text-[11px] leading-5 text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                    <p className="font-semibold uppercase tracking-[0.18em] text-primary">Direct contact fallback</p>
                    <p className="mt-2">{leadError}</p>
                    <a
                      href={fallbackMailto}
                      className="mt-3 inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Email us instead
                    </a>
                  </div>
                ) : null}

                <div className="mt-2 flex gap-2">
                  <button
                    type="submit"
                    data-track="funnel_live_assistant_lead_submit_click"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-slate-950 px-3.5 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                    disabled={leadLoading}
                  >
                    {leadLoading ? "Sending..." : "Submit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLeadCaptureOpen(false)
                      trackAssistantEvent("funnel_live_assistant_lead_prompt_dismissed")
                    }}
                    className="inline-flex h-9 items-center justify-center rounded-full border border-border/60 bg-white/70 px-3 text-xs text-muted-foreground"
                  >
                    Skip
                  </button>
                </div>
              </form>
            ) : null}
          </div>

          <div className="border-t border-border/50 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-white/80 bg-white/72 px-2.5 py-1 text-[11px] text-muted-foreground shadow-[0_6px_16px_rgba(15,23,42,0.03)] hover:bg-secondary hover:text-foreground"
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
                className="h-11 w-full rounded-full border border-white/80 bg-white/84 px-4 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground shadow-[0_8px_20px_rgba(15,23,42,0.04)] focus:border-primary/65"
                placeholder="Ask about services, pricing, security, payment..."
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                disabled={!canSend}
                className="tap-target inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white disabled:cursor-not-allowed disabled:opacity-50"
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
        onClick={() => {
          setOpen((prev) => !prev)
          trackAssistantEvent("funnel_live_assistant_toggle_click")
        }}
        data-track="funnel_live_assistant_toggle_click"
        className="tap-target cta-glow fixed bottom-[calc(94px+env(safe-area-inset-bottom))] right-3 z-[55] hidden items-center gap-2 rounded-full border border-slate-900/20 bg-slate-950 px-4 py-3 text-sm font-semibold text-white md:bottom-6 md:right-6 md:inline-flex pulse-glow"
      >
        <MessageCircle className="h-4 w-4" />
        Live Assistant
      </button>
    </>
  )
}
