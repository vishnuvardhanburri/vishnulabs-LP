"use client"

import { FormEvent, useMemo, useState } from "react"
import { AlertTriangle, ArrowUpRight, CheckCircle2, CreditCard, Mail, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

type PurchaseFormState = {
  companyName: string
  email: string
  phone: string
  businessType: string
}

type CustomFormState = {
  name: string
  email: string
  phone: string
  message: string
}

const defaultPurchaseForm: PurchaseFormState = {
  companyName: "",
  email: "",
  phone: "",
  businessType: "",
}

const defaultCustomForm: CustomFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const benefitList = [
  "100% local, air-gapped AI system. No data leaves your office.",
  "Private memory across contracts, case notes, SOPs, and intake workflows.",
  "Answer time in ~2 seconds with deterministic policy controls.",
  "Sensitive data redaction before output to staff.",
  "One-time $15,000 lifetime license. No monthly lock-in.",
]

const savingsList = [
  "Avoid privacy violations from cloud AI tooling",
  "Reduce legal/compliance exposure and breach liability",
  "Save $5,000-$20,000/month in repetitive associate effort",
]

export function StealthVaultPageClient() {
  const [purchaseForm, setPurchaseForm] = useState<PurchaseFormState>(defaultPurchaseForm)
  const [customForm, setCustomForm] = useState<CustomFormState>(defaultCustomForm)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState("")
  const [contactLoading, setContactLoading] = useState(false)
  const [contactState, setContactState] = useState<"idle" | "success" | "error">("idle")
  const [contactError, setContactError] = useState("")

  const payoneerEmail = process.env.NEXT_PUBLIC_PAYONEER_EMAIL || "vishnuvardanbirri19@gmail.com"
  const payoneerPaymentUrl = process.env.NEXT_PUBLIC_PAYONEER_PAYMENT_URL || ""

  const payoneerFallbackHref = useMemo(() => {
    const subject = encodeURIComponent("Stealth-Mode Internal AI Vault - Payment Request ($15,000)")
    const body = encodeURIComponent(
      "Hi VishnuLabs, I want to purchase the Stealth-Mode Internal AI Vault for $15,000. Please send a Payoneer payment request and onboarding steps.",
    )
    return `mailto:${payoneerEmail}?subject=${subject}&body=${body}`
  }, [payoneerEmail])

  async function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setCheckoutError("")
    setCheckoutLoading(true)

    try {
      const response = await fetch("/api/checkout/stealth-vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(purchaseForm),
      })

      const data = (await response.json()) as { url?: string; error?: string }

      if (!response.ok || !data.url) {
        setCheckoutError(data.error || "Unable to start checkout. Please retry.")
        return
      }

      window.location.href = data.url
    } catch {
      setCheckoutError("Unexpected error while starting checkout.")
    } finally {
      setCheckoutLoading(false)
    }
  }

  async function handleCustomizationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setContactError("")
    setContactState("idle")
    setContactLoading(true)

    try {
      const response = await fetch("/api/contact/stealth-vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customForm),
      })

      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        setContactError(data.error || "Unable to submit customization request.")
        setContactState("error")
        return
      }

      setCustomForm(defaultCustomForm)
      setContactState("success")
    } catch {
      setContactError("Unexpected error while sending your message.")
      setContactState("error")
    } finally {
      setContactLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div className="reveal-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <Shield className="h-3.5 w-3.5 text-primary" />
            Stealth Product: Internal AI Security Stack
          </div>

          <h1 className="mt-5 text-balance text-[2rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[2.8rem] lg:text-[3.5rem]">
            Stop Data Leaks Forever
            <br />
            Private AI Vault
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A 100% air-gapped internal AI brain for mid-size law firms and clinics. Full document memory, sub-2 second answers,
            automated sensitive-data redaction, and zero cloud exposure.
          </p>

          <div className="mt-6 grid gap-3">
            {benefitList.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-card/50 px-3 py-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {savingsList.map((item) => (
              <div key={item} className="rounded-xl border border-primary/35 bg-primary/10 px-3 py-3 text-sm text-foreground/95">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border/40 bg-card/50 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Lifetime License</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">$15,000 one-time</p>
            <p className="mt-2 text-sm text-muted-foreground">No subscriptions. Full ownership. Includes installation handoff and docs.</p>
          </div>
        </div>

        <div className="surface-glass reveal-in reveal-delay-1 rounded-2xl p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold text-foreground">Secure Card Checkout</p>
          </div>

          <form onSubmit={handleCheckout} className="grid gap-3">
            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Company name
              <input
                value={purchaseForm.companyName}
                onChange={(event) => setPurchaseForm((prev) => ({ ...prev, companyName: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>

            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Work email
              <input
                type="email"
                value={purchaseForm.email}
                onChange={(event) => setPurchaseForm((prev) => ({ ...prev, email: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>

            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Phone
              <input
                value={purchaseForm.phone}
                onChange={(event) => setPurchaseForm((prev) => ({ ...prev, phone: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>

            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Business type
              <select
                value={purchaseForm.businessType}
                onChange={(event) => setPurchaseForm((prev) => ({ ...prev, businessType: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              >
                <option value="">Select</option>
                <option value="Law firm">Law firm</option>
                <option value="Clinic">Clinic</option>
                <option value="Healthcare group">Healthcare group</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <Button
              type="submit"
              disabled={checkoutLoading}
              className="mt-1 h-11 w-full rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90 disabled:opacity-70"
            >
              {checkoutLoading ? "Redirecting to secure checkout..." : "Pay $15,000 Now"}
            </Button>

            {checkoutError ? (
              <p className="rounded-lg border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive">{checkoutError}</p>
            ) : null}
          </form>

          <div className="mt-4 rounded-xl border border-border/45 bg-background/60 p-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Alternative payment</p>
            <p className="mt-1 text-sm text-muted-foreground">Payoneer is available if card checkout is blocked by your billing policy.</p>
            <a
              href={payoneerPaymentUrl || payoneerFallbackHref}
              target={payoneerPaymentUrl ? "_blank" : undefined}
              rel={payoneerPaymentUrl ? "noopener noreferrer" : undefined}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary/70"
            >
              Pay via Payoneer
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <p className="mt-2 text-xs text-muted-foreground">Payoneer account: {payoneerEmail}</p>
          </div>

          <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-foreground/95">
            <p className="flex items-start gap-2">
              <Zap className="mt-0.5 h-4 w-4 text-primary" />
              After successful payment, the buyer gets a license key, setup guide link, and Loom onboarding link automatically by email.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="surface-glass reveal-in reveal-delay-2 rounded-2xl p-4 sm:p-6" id="vault-contact">
          <div className="mb-4 flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold text-foreground">Need customization after purchase?</p>
          </div>

          <form onSubmit={handleCustomizationSubmit} className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Name
              <input
                value={customForm.name}
                onChange={(event) => setCustomForm((prev) => ({ ...prev, name: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>
            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Email
              <input
                type="email"
                value={customForm.email}
                onChange={(event) => setCustomForm((prev) => ({ ...prev, email: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>
            <label className="grid gap-1.5 text-sm text-muted-foreground">
              Phone
              <input
                value={customForm.phone}
                onChange={(event) => setCustomForm((prev) => ({ ...prev, phone: event.target.value }))}
                required
                className="h-11 rounded-lg border border-border/55 bg-background/75 px-3 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>
            <label className="grid gap-1.5 text-sm text-muted-foreground md:col-span-2">
              Message
              <textarea
                value={customForm.message}
                onChange={(event) => setCustomForm((prev) => ({ ...prev, message: event.target.value }))}
                required
                rows={4}
                className="rounded-lg border border-border/55 bg-background/75 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/60"
              />
            </label>

            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={contactLoading}
                className="h-11 rounded-xl bg-foreground px-6 text-base text-background hover:bg-foreground/90 disabled:opacity-70"
              >
                {contactLoading ? "Sending..." : "Send customization request"}
              </Button>
            </div>

            {contactState === "success" ? (
              <p className="md:col-span-2 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                Request sent. Team VishnuLabs will reply at hello@vishnulabs.com.
              </p>
            ) : null}

            {contactState === "error" ? (
              <p className="md:col-span-2 flex items-start gap-2 rounded-lg border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4" />
                {contactError || "Request failed. Please try again."}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
