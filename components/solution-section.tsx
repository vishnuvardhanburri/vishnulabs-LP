import Link from "next/link"
import { CalendarClock, Gavel, PhoneCall, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Offer = {
  icon: typeof CalendarClock
  title: string
  bestFor: string
  painSolved: string
  outcomes: string
  delivery: string
  investment: string
  serviceLink: string
}

const offers: Offer[] = [
  {
    icon: PhoneCall,
    title: "AI Voice Receptionist",
    bestFor: "Real estate teams, law firms, brokers, local service businesses",
    painSolved: "Missed inbound calls and delayed callback loops that leak qualified opportunities.",
    outcomes: "Answers every call, qualifies intent, routes priority leads, and books consultations automatically.",
    delivery: "5 to 7 days",
    investment: "$4,997 one-time",
    serviceLink: "/services/ai-voice-receptionist",
  },
  {
    icon: CalendarClock,
    title: "AI Scheduling & Reminder System",
    bestFor: "Consulting, legal, mortgage, and high-volume appointment teams",
    painSolved: "Manual scheduling and reminder gaps causing no-shows and pipeline stalls.",
    outcomes: "Automated booking, reschedule handling, and reminder orchestration with CRM status sync.",
    delivery: "5 to 7 days",
    investment: "$6,500 to $9,500",
    serviceLink: "/services/ai-scheduling-reminder",
  },
  {
    icon: Gavel,
    title: "AI Legal Intake Automation",
    bestFor: "Immigration, PI, family, and civil litigation firms",
    painSolved: "Inconsistent intake quality and delayed lead triage after business hours.",
    outcomes: "24/7 intake capture, structured summaries, and attorney/staff routing with audit trail.",
    delivery: "6 to 9 days",
    investment: "$8,500 to $15,000",
    serviceLink: "/services/ai-legal-intake",
  },
]

export function SolutionSection() {
  return (
    <section className="relative border-y border-border/35 py-24 md:py-32" id="services">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="reveal-in mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/85">Core Services</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Productized automation services designed for fast buying decisions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Every service includes architecture, implementation, QA, deployment support, and production monitoring setup.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, idx) => (
            <article
              key={offer.title}
              className={`lift-card reveal-in rounded-2xl border border-border/45 bg-card/65 p-5 sm:p-6 ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12">
                <offer.icon className="h-4.5 w-4.5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>

              <div className="mt-4 grid gap-2 text-sm">
                <div className="rounded-lg border border-border/45 bg-background/75 px-3 py-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Best For</span>
                  <p className="font-medium text-foreground">{offer.bestFor}</p>
                </div>
                <div className="rounded-lg border border-border/45 bg-background/75 px-3 py-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Pain Solved</span>
                  <p className="font-medium text-foreground">{offer.painSolved}</p>
                </div>
                <div className="rounded-lg border border-border/45 bg-background/75 px-3 py-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Expected Outcomes</span>
                  <p className="font-medium text-foreground">{offer.outcomes}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-border/45 bg-background/75 px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Delivery</span>
                    <p className="font-medium text-foreground">{offer.delivery}</p>
                  </div>
                  <div className="rounded-lg border border-border/45 bg-background/75 px-3 py-2">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Investment</span>
                    <p className="font-medium text-foreground">{offer.investment}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <Button asChild variant="outline" className="w-full gap-2 rounded-xl border-border/55 hover:bg-secondary">
                  <Link href={offer.serviceLink} data-track={`service_details_${offer.title.toLowerCase().replace(/\s+/g, "_")}`}>
                    Service Page
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="w-full gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90">
                  <Link href="https://cal.com/vishnuvardhanburri/15min" data-track={`service_book_${offer.title.toLowerCase().replace(/\s+/g, "_")}`}>
                    Book Meeting
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
