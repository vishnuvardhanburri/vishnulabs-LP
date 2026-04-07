import { PricingSection } from "@/components/home/pricing-section"

export function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-5 pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-12rem] top-[6rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <section className="cinema-section-shell reveal-in px-6 py-8 md:px-8 md:py-10">
          <p className="section-kicker inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase">
            Pricing
          </p>
          <h1 className="mt-6 max-w-[13ch] text-balance font-heading text-[44px] font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-[58px] xl:text-[64px]">
            Retainers built for systems that cannot fail quietly.
          </h1>
          <p className="section-support-copy mt-5 max-w-3xl text-[18px] leading-8">
            Choose the level of implementation support you need now, then expand only when the system demands it.
          </p>
        </section>
      </div>
      <PricingSection />
    </main>
  )
}
