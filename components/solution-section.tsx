import { CalendarClock, Gavel, PhoneCall, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Offer = {
  icon: typeof CalendarClock
  title: string
  idealClient: string
  coreProblem: string
  measurableImpact: string
  buildTime: string
  investment: string
}

const offers: Offer[] = [
  {
    icon: CalendarClock,
    title: "AI Scheduling & Reminder System",
    idealClient: "Consultants, law firms, real estate agents",
    coreProblem: "Leads drop when booking, reminders, and reschedules are handled manually.",
    measurableImpact: "Reduce no-shows by 20% to 40% and recover missed bookings automatically.",
    buildTime: "3 to 5 days",
    investment: "$1,000 to $10,000",
  },
  {
    icon: Gavel,
    title: "Legal Client Intake Automation",
    idealClient: "US law firms (immigration, family, personal injury)",
    coreProblem: "Intake is inconsistent, slow, and unstructured after office hours.",
    measurableImpact: "Capture and qualify intake 24/7 with structured summaries to your team or CRM.",
    buildTime: "4 to 6 days",
    investment: "$1,000 to $10,000",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Receptionist",
    idealClient: "Service businesses handling inbound calls daily",
    coreProblem: "Missed calls and slow callback cycles cause direct revenue leakage.",
    measurableImpact: "Answer every inbound call, collect lead context, and route qualified calls in real time.",
    buildTime: "3 to 5 days",
    investment: "$1,000 to $10,000",
  },
]

export function SolutionSection() {
  return (
    <section className="relative border-y border-border/30 py-24 md:py-32" id="offers">
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Primary Offers</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Three revenue automation packages that are easy to buy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Built for US SMBs that need fast implementation, measurable impact, and production-grade reliability.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="rounded-2xl border border-border/35 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <offer.icon className="h-4.5 w-4.5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>

              <div className="mt-4 grid gap-2 text-sm">
                <div className="rounded-lg border border-border/35 bg-background px-3 py-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Ideal Client</span>
                  <p className="font-medium text-foreground">{offer.idealClient}</p>
                </div>
                <div className="rounded-lg border border-border/35 bg-background px-3 py-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Core Problem Solved</span>
                  <p className="font-medium text-foreground">{offer.coreProblem}</p>
                </div>
                <div className="rounded-lg border border-border/35 bg-background px-3 py-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Measurable Impact</span>
                  <p className="font-medium text-foreground">{offer.measurableImpact}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-border/35 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Build Time</span>
                    <p className="font-medium text-foreground">{offer.buildTime}</p>
                  </div>
                  <div className="rounded-lg border border-border/35 bg-background px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Investment</span>
                    <p className="font-medium text-foreground">{offer.investment}</p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-5 w-full gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90">
                <a
                  href="https://calendly.com/vishnuvardhanburri19/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
