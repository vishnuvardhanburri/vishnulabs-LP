import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProjectsSection } from "@/components/projects-section"
import { DemoVideosSection } from "@/components/demo-videos-section"
import { ExamplesSection } from "@/components/examples-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { CustomSolutionsSection } from "@/components/custom-solutions-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProjectsSection />
        <DemoVideosSection />
        <ProblemSection />
        <SolutionSection />
        <ExamplesSection />
        <OutcomesSection />
        <ProcessSection />
        <AboutSection />
        <CustomSolutionsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
