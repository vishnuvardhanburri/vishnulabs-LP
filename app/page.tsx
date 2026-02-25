import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { SolutionSection } from "@/components/solution-section"
import { AutomationRecommendationsSection } from "@/components/automation-recommendations-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <SolutionSection />
        <AutomationRecommendationsSection />
        <ProcessSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
