import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Clock3, DollarSign, Layers } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { LiveChatAssistant } from "@/components/live-chat-assistant"
import { CustomSolutionNote, customPackageMailto } from "@/components/custom-solution-note"
import type { Testimonial } from "@/lib/testimonials"

type ServiceTemplateProps = {
  title: string
  subtitle: string
  forWho: string[]
  problems: string[]
  includes: string[]
  outcomes: string[]
  timeline: string
  price: string
  testimonial: Testimonial
}

export function ServicePageTemplate({
  title,
  subtitle,
  forWho,
  problems,
  includes,
  outcomes,
  timeline,
  price,
  testimonial,
}: ServiceTemplateProps) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10">
        <Link href="/" className="text-sm text-primary hover:text-primary/80">
          ← Back to Home
        </Link>

        <section className="mt-6 rounded-3xl border border-border/35 bg-card/60 p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-primary/80">System Intervention</p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90">
              <Link href="https://cal.com/vishnuvardhanburri/15min" data-track="service_page_book_meeting">
                Book System Review
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-border/50 hover:bg-secondary">
              <a href={customPackageMailto} data-track="service_page_scope_request">
                Request Scoped Proposal
              </a>
            </Button>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Layers className="h-4.5 w-4.5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Best Fit</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Clock3 className="h-4.5 w-4.5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Timeline & Pricing</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Timeline:</span> {timeline}
              </p>
              <p>
                <span className="font-medium text-foreground">Price:</span> {price}
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <DollarSign className="h-4.5 w-4.5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Expected Resolution</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Failure Modes Addressed</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {problems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Intervention Scope</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <TestimonialCard testimonial={testimonial} />
          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Visual Direction</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>Show the workflow as inputs, validation, processing, and outputs. Avoid decorative illustration.</p>
              <p>Use calm status colors: failure states in muted red, stabilized states in slate and cyan.</p>
              <p>Keep the CTA high-contrast and static. Motion should feel like a stable system heartbeat, not a product demo reel.</p>
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
