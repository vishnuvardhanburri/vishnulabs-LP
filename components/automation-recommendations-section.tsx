import {
  Bot,
  MessageCircleMore,
  PhoneCall,
  Building2,
  BellRing,
  FileText,
  UserRoundSearch,
} from "lucide-react"

type AutomationOption = {
  title: string
  idealClients: string
  useCase: string
  impact: string
  investment: string
}

const automationOptions: AutomationOption[] = [
  {
    title: "AI Front-Desk Voice Agent",
    idealClients: "Clinics, home services, law firms, brokerages",
    useCase: "Handles overflow and after-hours calls, captures caller intent, routes by priority.",
    impact: "Fewer missed calls and faster callback handling.",
    investment: "$1,000 to $10,000",
  },
  {
    title: "Missed-Call Text Back Agent",
    idealClients: "High-call-volume SMBs",
    useCase: "Triggers instant SMS after missed call with booking and intake prompts.",
    impact: "Recovers leads that normally drop after one missed attempt.",
    investment: "$1,000 to $10,000",
  },
  {
    title: "Sales Chatbot (Website + WhatsApp)",
    idealClients: "Consultants, agencies, local businesses",
    useCase: "Qualifies inbound visitors, answers FAQs, and routes warm leads to booking.",
    impact: "Shorter lead response cycle and higher lead capture rate.",
    investment: "$1,000 to $10,000",
  },
  {
    title: "Real Estate Lead Reactivation Bot",
    idealClients: "Real estate teams with stale CRM lists",
    useCase: "Runs personalized SMS and email reactivation flows for old leads.",
    impact: "Turns dormant contacts into active conversations.",
    investment: "$1,000 to $10,000",
  },
  {
    title: "Client Follow-up Reminder Engine",
    idealClients: "Law firms, consultants, service providers",
    useCase: "Automates reminders for pending documents, calls, and approvals.",
    impact: "Improves client response consistency and reduces admin load.",
    investment: "$1,000 to $10,000",
  },
  {
    title: "Proposal and Quote Follow-up Agent",
    idealClients: "Consulting firms and service businesses",
    useCase: "Sends timed follow-ups and intent-based nudges after quote delivery.",
    impact: "Faster deal progression and fewer lost proposals.",
    investment: "$1,000 to $10,000",
  },
  {
    title: "Onboarding Workflow Automation",
    idealClients: "B2B service teams and boutique agencies",
    useCase: "Automates onboarding checklists, document collection, and kickoff scheduling.",
    impact: "Cuts onboarding delay and standardizes delivery quality.",
    investment: "$1,000 to $10,000",
  },
]

const iconByIndex = [PhoneCall, BellRing, MessageCircleMore, Building2, UserRoundSearch, FileText, Bot]

export function AutomationRecommendationsSection() {
  return (
    <section className="relative py-24 md:py-32" id="automations">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Explore More Automations</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Additional systems you can add after the primary package
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose add-ons based on channel mix, lead volume, and where revenue leakage is happening now.
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
                  Add-on {index + 1}
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-foreground">{option.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{option.useCase}</p>

                <div className="mt-4 grid gap-2 text-sm">
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Ideal Clients</span>
                    <p className="font-medium text-foreground">{option.idealClients}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Impact</span>
                    <p className="font-medium text-foreground">{option.impact}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Investment Range</span>
                    <p className="font-medium text-foreground">{option.investment}</p>
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
