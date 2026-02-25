import { Bot, CalendarClock, FileSearch, Gavel, Headset, Home, MessageCircleMore } from "lucide-react"

type AutomationOption = {
  title: string
  idealClients: string
  useCase: string
  stack: string
  pricing: string
}

const automationOptions: AutomationOption[] = [
  {
    title: "AI Voice Receptionist Agent",
    idealClients: "Clinics, law firms, real estate offices, local service businesses",
    useCase: "Answers inbound calls, captures lead details, and routes urgent calls in real-time.",
    stack: "Twilio Voice + AI speech + CRM/webhook",
    pricing: "$1,000 to $10,000",
  },
  {
    title: "AI Scheduling & Reminder Assistant",
    idealClients: "Solo lawyers, consultants, coaches, real estate agents",
    useCase: "Books calls, sends reminders, handles reschedules, and reduces no-shows.",
    stack: "Calendly/Google Calendar + Twilio + n8n",
    pricing: "$1,000 to $10,000",
  },
  {
    title: "Legal Client Intake Chatbot",
    idealClients: "Immigration, family, and personal injury law firms",
    useCase: "Collects structured case intake 24/7 and sends qualified summaries to team/CRM.",
    stack: "GPT workflow + CRM/email + file upload",
    pricing: "$1,000 to $10,000",
  },
  {
    title: "AI Research Assistant for Lawyers",
    idealClients: "Solo attorneys, legal assistants, boutique legal teams",
    useCase: "Summarizes case docs, extracts facts, and pre-fills legal templates.",
    stack: "Document parsing + prompt workflows + template engine",
    pricing: "$1,000 to $10,000",
  },
  {
    title: "Real Estate Lead Nurture Bot",
    idealClients: "Real estate agencies and independent agents",
    useCase: "Runs multi-step follow-up via SMS/email and surfaces hot replies instantly.",
    stack: "CRM + drip orchestration + AI response scoring",
    pricing: "$1,000 to $10,000",
  },
  {
    title: "Sales Chatbot for Website/WhatsApp",
    idealClients: "Agencies, SaaS startups, and local businesses",
    useCase: "Qualifies visitors, answers FAQs, captures leads, and hands off to sales.",
    stack: "Website widget/WhatsApp + GPT + CRM integration",
    pricing: "$1,000 to $10,000",
  },
  {
    title: "Lead Follow-up Reactivation Agent",
    idealClients: "Businesses with old CRM databases and stale leads",
    useCase: "Re-engages old leads with personalized outreach and books warm callbacks.",
    stack: "CRM sync + email/SMS automation + booking links",
    pricing: "$1,000 to $10,000",
  },
]

const iconByIndex = [Headset, CalendarClock, Gavel, FileSearch, Home, MessageCircleMore, Bot]

export function AutomationRecommendationsSection() {
  return (
    <section className="relative py-24 md:py-32" id="automations">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Recommended Automations</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Pick the right automation based on your client profile
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Use this list to match business needs with the best automation package and fastest ROI path.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {automationOptions.map((option, index) => {
            const Icon = iconByIndex[index]

            return (
              <article
                key={option.title}
                className="rounded-2xl border border-border/35 bg-card/55 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" />
                  Automation {index + 1}
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-foreground">{option.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{option.useCase}</p>

                <div className="mt-4 grid gap-2 text-sm">
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Ideal Clients</span>
                    <p className="font-medium text-foreground">{option.idealClients}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Suggested Stack</span>
                    <p className="font-medium text-foreground">{option.stack}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Investment Range</span>
                    <p className="font-medium text-foreground">{option.pricing} (based on requirements)</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
