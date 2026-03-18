import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { LiveChatAssistant } from "@/components/live-chat-assistant"
import { CustomSolutionNote, customPackageMailto } from "@/components/custom-solution-note"

type IndustryTemplateProps = {
  title: string
  subtitle: string
  painPoints: string[]
  solutionStack: string[]
  outcomes: string[]
  investment: string
}

export function IndustryPageTemplate({
  title,
  subtitle,
  painPoints,
  solutionStack,
  outcomes,
  investment,
}: IndustryTemplateProps) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10">
        <Link href="/" className="text-sm text-primary hover:text-primary/80">
          ← Back to Home
        </Link>

        <section className="mt-6 rounded-3xl border border-border/35 bg-card/60 p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-primary/80">Industry Solution</p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90">
              <Link href="/book" data-track="industry_page_book_meeting">
                Book Meeting
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-border/50 hover:bg-secondary">
              <a href={customPackageMailto} data-track="industry_page_email">
                Mail Us for Custom Package
              </a>
            </Button>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Common Pain Points</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {painPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Solution Stack</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {solutionStack.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/35 bg-card/55 p-6">
            <p className="text-sm font-semibold text-foreground">Expected Outcomes</p>
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
