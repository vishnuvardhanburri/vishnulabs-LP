import { CheckCircle2, FileText, KeyRound, Mail } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function StealthVaultSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 lg:px-10">
        <section className="surface-glass rounded-2xl p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Payment captured successfully
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">You are in. Stealth Vault onboarding is now active.</h1>
          <p className="mt-4 text-base text-muted-foreground">
            We have sent your receipt resources by email: license key, guide link, and Loom walkthrough. If you do not see it in 3-5 minutes,
            check spam/promotions and then message hello@vishnulabs.com.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-card/55 p-4 text-sm text-muted-foreground">
              <KeyRound className="mb-2 h-4 w-4 text-primary" />
              License key delivered by email
            </div>
            <div className="rounded-xl border border-border/40 bg-card/55 p-4 text-sm text-muted-foreground">
              <FileText className="mb-2 h-4 w-4 text-primary" />
              Installation guide link included
            </div>
            <div className="rounded-xl border border-border/40 bg-card/55 p-4 text-sm text-muted-foreground">
              <Mail className="mb-2 h-4 w-4 text-primary" />
              Direct support via hello@vishnulabs.com
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/guides/stealth-vault-installation-guide.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90"
            >
              View installation guide
            </a>
            <a
              href="/book"
              className="inline-flex items-center rounded-xl border border-border/55 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Book onboarding call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
