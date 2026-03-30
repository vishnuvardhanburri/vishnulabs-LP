import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { LiveChatAssistant } from "@/components/live-chat-assistant"
import { CustomSolutionNote, customPackageMailto } from "@/components/custom-solution-note"
import type { Testimonial } from "@/lib/testimonials"

type IndustryTemplateProps = {
  title: string
  subtitle: string
  painPoints: string[]
  solutionStack: string[]
  outcomes: string[]
  investment: string
  testimonial: Testimonial
}

export function IndustryPageTemplate({
  title,
  subtitle,
  painPoints,
  solutionStack,
  outcomes,
  investment,
  testimonial,
}: IndustryTemplateProps) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10">
        <Link href="/" className="text-sm text-primary hover:text-primary/80">
          ← Back to Home
        </Link>

        <section className="mt-6 rounded-3xl border border-border/35 bg-card/60 p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-primary/80">Industry Systems</p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90">
              <Link href="https://cal.com/vishnuvardhanburri/15min" data-track="industry_page_book_meeting">
                Book System Review
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-border/50 hover:bg-secondary">
              <a href={customPackageMailto} data-track="industry_page_email">
                Request Scoped Proposal
              </a>
            </Button>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Common Failure Modes</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {painPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Stabilization Approach</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {solutionStack.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Expected Resolution</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-border/35 bg-background/70 p-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Investment range:</span> {investment}
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <TestimonialCard testimonial={testimonial} />
          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Visual Direction</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>Use structure diagrams and operating-state indicators instead of abstract hero art.</p>
              <p>Show where requests enter, where validation happens, and where teams recover visibility.</p>
              <p>Support trust with clear spacing, high-contrast CTA treatment, and zero stock-photo dependency.</p>
            </div>
          </article>
        </section>

        <section className="mt-8">
          <CustomSolutionNote />
        </section>
      </main>
      <Footer />
      <MobileStickyCta />
      <LiveChatAssistant />
    </>
  )
}
