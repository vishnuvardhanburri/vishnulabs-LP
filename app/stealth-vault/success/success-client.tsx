"use client"

import { CheckCircle2, FileText, KeyRound, Mail } from "lucide-react"

export function StealthVaultSuccessClient() {
  return (
    <>
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Payment received
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Payment received. Thank you!</h1>
      <p className="mt-4 text-base text-muted-foreground">
        We will manually contact you within 24 hours with invoice, demo, guide, and key.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border/40 bg-card/55 p-4 text-sm text-muted-foreground">
          <FileText className="mb-2 h-4 w-4 text-primary" />
          Manual invoice follow-up
        </div>
        <div className="rounded-xl border border-border/40 bg-card/55 p-4 text-sm text-muted-foreground">
          <KeyRound className="mb-2 h-4 w-4 text-primary" />
          License key and guide
        </div>
        <div className="rounded-xl border border-border/40 bg-card/55 p-4 text-sm text-muted-foreground">
          <Mail className="mb-2 h-4 w-4 text-primary" />
          Direct support via hello@vishnulabs.com
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/guides/stealth-vault-installation-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90"
        >
          View installation guide
        </a>
        <a
          href="https://cal.com/vishnuvardhanburri/15min"
          className="inline-flex items-center rounded-xl border border-border/55 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
        >
          Book setup call
        </a>
      </div>
    </>
  )
}
