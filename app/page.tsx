import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PremiumProductsShowcase } from "@/components/premium-products-showcase"
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
import { Footer } from "@/components/footer"
import { SecurityTransparencySection } from "@/components/security-transparency-section"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <div data-reveal>
          <Hero />
        </div>
        <div data-reveal>
          <PremiumProductsShowcase />
        </div>
        <div data-reveal>
          <TrustStrip />
        </div>
        <SecurityTransparencySection />
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
    </>
  )
}
