import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "How transparent is pricing and scope?",
    a: "Before build starts, you get a written scope with exact deliverables, timeline, integrations, and pricing. No hidden charges during implementation.",
  },
  {
    q: "How fast can we launch?",
    a: "Most starter systems go live in 5-7 days. Larger multi-workflow deployments run 1-3 weeks depending on integrations and QA cycles.",
  },
  {
    q: "Who owns the system after delivery?",
    a: "Your business owns the workflows, documentation, and operational logic. VishnuLabs provides handoff SOPs so your team is not locked in.",
  },
  {
    q: "What if something fails in production?",
    a: "We implement monitoring, retries, and fallback rules by default. You get issue visibility and escalation paths instead of silent failures.",
  },
  {
    q: "Which tools can you integrate?",
    a: "Calendly/Google Calendar, Twilio, CRMs, email systems, and workflow platforms like n8n/Make/Zapier depending on your stack.",
  },
  {
    q: "What is the support model after go-live?",
    a: "Every project includes post-launch support. Ongoing monitoring and optimization retainers are available if you want managed support.",
  },
]

export function FaqSection() {
  return (
    <section className="relative border-y border-border/30 py-24 md:py-32" id="faq">
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">FAQ</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Questions teams ask before they start
          </h2>
        </div>

        <Accordion type="single" collapsible className="rounded-2xl border border-border/35 bg-card/60 px-5 py-2">
          {faqs.map((item, idx) => (
            <AccordionItem key={item.q} value={`faq-${idx}`} className="border-border/35">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline md:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
