import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { GlobalBackground } from "@/components/layout/global-background"
import { PageTransition } from "@/components/layout/page-transition"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalBackground />
      <Navbar />
      <div className="relative z-10 min-h-screen pt-[5.75rem] md:pt-[6.25rem]">
        <PageTransition>{children}</PageTransition>
      </div>
      <MobileStickyCta />
      <Footer />
    </>
  )
}
