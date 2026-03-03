import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AutomationRecommendationsSection } from "@/components/automation-recommendations-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ProofSection } from "@/components/proof-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { LiveChatAssistant } from "@/components/live-chat-assistant"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <AutomationRecommendationsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ProofSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileStickyCta />
      <LiveChatAssistant />
    </>
  )
}
