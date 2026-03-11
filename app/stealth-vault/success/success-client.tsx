"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, CheckCircle2, FileText, KeyRound, LoaderCircle, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"

type CaptureStatus = "capturing" | "success" | "already" | "error" | "missing"

export function StealthVaultSuccessClient() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<CaptureStatus>("capturing")
  const [errorMessage, setErrorMessage] = useState("")
  const hasCapturedRef = useRef(false)

  useEffect(() => {
    if (hasCapturedRef.current) return

    const orderId = searchParams.get("token")

    if (!orderId) {
      setStatus("missing")
      return
    }

    hasCapturedRef.current = true

    const companyName = searchParams.get("companyName") || ""
    const email = searchParams.get("email") || ""
    const phone = searchParams.get("phone") || ""
    const businessType = searchParams.get("businessType") || ""

    void (async () => {
      try {
        const response = await fetch("/api/checkout/stealth-vault/capture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            companyName,
            email,
            phone,
            businessType,
          }),
        })

        const data = (await response.json()) as { ok?: boolean; alreadyCaptured?: boolean; error?: string }

        if (!response.ok || !data.ok) {
          setStatus("error")
          setErrorMessage(data.error || "Unable to confirm payment capture.")
          return
        }

        if (data.alreadyCaptured) {
          setStatus("already")
          return
        }

        setStatus("success")
      } catch {
        setStatus("error")
        setErrorMessage("Unexpected error while confirming payment.")
      }
    })()
  }, [searchParams])

  if (status === "capturing") {
    return (
      <div className="rounded-xl border border-border/40 bg-card/55 p-5 text-sm text-muted-foreground">
        <p className="flex items-center gap-2 text-foreground">
          <LoaderCircle className="h-4 w-4 animate-spin text-primary" />
          Finalizing your confirmation and provisioning your license...
        </p>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="rounded-xl border border-destructive/35 bg-destructive/10 p-5 text-sm text-destructive">
        <p className="flex items-start gap-2">
          <AlertTriangle className="mt-0.5 h-4 w-4" />
          {errorMessage || "Unable to verify payment."}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">If you have already paid, email hello@vishnulabs.com with your company name and payment confirmation.</p>
      </div>
    )
  }

  if (status === "missing") {
    return (
      <div className="rounded-xl border border-border/40 bg-card/55 p-5 text-sm text-muted-foreground">
        <p>No confirmation token was found. If payment was already handled manually, email hello@vishnulabs.com and we will respond ASAP.</p>
      </div>
    )
  }

  return (
    <>
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <CheckCircle2 className="h-3.5 w-3.5" />
        {status === "already" ? "Payment already captured" : "Payment captured successfully"}
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">You are in. Stealth Vault onboarding is now active.</h1>
      <p className="mt-4 text-base text-muted-foreground">
        Payment is confirmed. I personally send your invoice, demo, installation guide, and license key within 24 hours. If anything looks
        unclear, message hello@vishnulabs.com and we will respond ASAP.
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
          href="/guides/stealth-vault-installation-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
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
    </>
  )
}
