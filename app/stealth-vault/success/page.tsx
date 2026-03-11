import { Suspense } from "react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { StealthVaultSuccessClient } from "@/app/stealth-vault/success/success-client"

export default function StealthVaultSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 lg:px-10">
        <section className="surface-glass rounded-2xl p-6 sm:p-8">
          <Suspense
            fallback={
              <div className="rounded-xl border border-border/40 bg-card/55 p-5 text-sm text-muted-foreground">
                Preparing your manual follow-up details...
              </div>
            }
          >
            <StealthVaultSuccessClient />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  )
}
