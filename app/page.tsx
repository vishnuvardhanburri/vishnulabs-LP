import { HeroSection } from "@/components/landing/hero-section"
import { IntentLinksSection } from "@/components/landing/intent-links-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { SystemFlowSection } from "@/components/landing/system-flow-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-18rem] top-[-14rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/12 blur-[160px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/14 blur-[160px] mix-blend-screen" />
        <div className="orb-float absolute bottom-[-12rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px] mix-blend-screen [animation-delay:2.2s]" />
      </div>

      <HeroSection />

      <div className="section-cinema-stack">
        <section className="section-cinema section-cinema-delay-1">
          <div className="section-divider-beam" />
          <div className="section-spotlight-drift section-spotlight-a" />
          <SystemFlowSection />
        </section>

        <section className="section-cinema section-cinema-delay-2">
          <div className="section-divider-beam" />
          <div className="section-spotlight-drift section-spotlight-b" />
          <IntentLinksSection />
        </section>

        <section className="section-cinema section-cinema-delay-3">
          <div className="section-divider-beam" />
          <div className="section-spotlight-drift section-spotlight-c" />
          <PricingSection />
        </section>

        <section className="section-cinema section-cinema-delay-4">
          <div className="section-divider-beam" />
          <div className="section-spotlight-drift section-spotlight-d" />
          <TestimonialsSection />
        </section>
      </div>
    </main>
  )
}
