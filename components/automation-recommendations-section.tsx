import { Building2, BriefcaseBusiness, Scale, Home, PhoneCall, UserRoundSearch, Wallet, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Playbook = {
  title: string
  segment: string
  whatWeAutomate: string
  value: string
  range: string
  industryLink: string
}

const playbooks: Playbook[] = [
  {
    title: "Law Firm Intake & Follow-up",
    segment: "PI, Family, Immigration, Civil Litigation",
    whatWeAutomate: "Lead qualification, consultation booking, document reminders, and case-status follow-up.",
    value: "Higher qualified consult volume with less staff coordination overhead.",
    range: "$8,500 to $15,000",
    industryLink: "/industries/pi-law-firms",
  },
  {
    title: "Real Estate Lead Response Engine",
    segment: "Solo agents and broker teams",
    whatWeAutomate: "After-hours call answering, buyer/seller qualification, and viewing appointment scheduling.",
    value: "Faster speed-to-lead and stronger conversion from online inquiries.",
    range: "$4,997 to $9,500",
    industryLink: "/industries/real-estate",
  },
  {
    title: "Mortgage Intake Acceleration",
    segment: "Brokers and loan operations teams",
    whatWeAutomate: "Intent routing, callback workflows, missing-doc reminders, and nurture touchpoints.",
    value: "Reduced drop-off from form lead to consultation call.",
    range: "$6,000 to $10,500",
    industryLink: "/industries/mortgage",
  },
  {
    title: "Voice Front Desk Automation",
    segment: "Service businesses with high call volume",
    whatWeAutomate: "24/7 AI answering, reason-for-call capture, and smart transfer or callback scheduling.",
    value: "Fewer missed opportunities and lower receptionist overload.",
    range: "$4,997 to $8,000",
    industryLink: "/services/ai-voice-receptionist",
  },
  {
    title: "Proposal Follow-up Workflow",
    segment: "Consulting and B2B service firms",
    whatWeAutomate: "Automated follow-ups after proposal send with next-step nudges and owner alerts.",
    value: "More proposals converted into active deal conversations.",
    range: "$5,500 to $9,000",
    industryLink: "/book",
  },
  {
    title: "Client Onboarding Control Layer",
    segment: "Agencies and implementation teams",
    whatWeAutomate: "Onboarding checklists, kickoff scheduling, data collection, and task orchestration.",
    value: "Cleaner delivery handoff and faster time-to-value for new accounts.",
    range: "$6,500 to $12,000",
    industryLink: "/book",
  },
  {
    title: "CRM Reactivation Campaign",
    segment: "Teams with stale lead databases",
    whatWeAutomate: "Segment-based SMS/email reactivation with interest scoring and booking handoff.",
    value: "Reopens dead pipeline opportunities without manual list work.",
    range: "$4,997 to $7,500",
    industryLink: "/book",
  },
]

const iconByIndex = [Scale, Home, Wallet, PhoneCall, BriefcaseBusiness, Building2, UserRoundSearch]

export function AutomationRecommendationsSection() {
  return (
    <section className="relative py-24 md:py-32" id="industries">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Industry Playbooks</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Automation systems by business model and lead type
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Pick the playbook aligned to your lead volume, channel mix, and sales cycle. We configure flows to your current team capacity.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {playbooks.map((option, index) => {
            const Icon = iconByIndex[index]

            return (
              <article
                key={option.title}
                className="rounded-2xl border border-border/35 bg-card/55 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" />
                  Playbook {index + 1}
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-foreground">{option.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{option.whatWeAutomate}</p>

                <div className="mt-4 grid gap-2 text-sm">
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Segment</span>
                    <p className="font-medium text-foreground">{option.segment}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Business Value</span>
                    <p className="font-medium text-foreground">{option.value}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Typical Investment</span>
                    <p className="font-medium text-foreground">{option.range}</p>
                  </div>
                </div>

                <Button asChild variant="outline" className="mt-4 w-full gap-2 rounded-xl border-border/50 hover:bg-secondary">
                  <a href={option.industryLink} data-track={`playbook_open_${(index + 1).toString()}`}>
                    View Plan
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
