import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { GlobalBackground } from "@/components/layout/global-background"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalBackground />
      <Navbar />
      <div className="relative z-10 min-h-screen pt-[5.75rem] md:pt-[6.25rem]">{children}</div>
      <Footer />
    </>
  )
}
