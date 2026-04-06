"use client"

import { createContext, useContext, useMemo, useState } from "react"
import { Loader2, Sparkles } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type LeadCaptureContextValue = {
  openLeadCapture: (source?: string) => void
}

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null)

type FormState = {
  name: string
  email: string
  website: string
  problem: string
}

const initialFormState: FormState = {
  name: "",
  email: "",
  website: "",
  problem: "",
}

const directBookingUrl =
  process.env.NEXT_PUBLIC_SYSTEM_AUDIT_CALENDAR_URL || "https://cal.com/vishnuvardhanburri/15min"

function trackLeadEvent(eventName: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return

  const eventPayload = {
    page: window.location.pathname,
    ...payload,
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag

  if (gtag) {
    gtag("event", eventName, eventPayload)
    return
  }

  console.info(`[track] ${eventName}`, eventPayload)
}

export function LeadCaptureProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState("homepage")
  const [form, setForm] = useState<FormState>(initialFormState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const value = useMemo<LeadCaptureContextValue>(
    () => ({
      openLeadCapture(nextSource = "homepage") {
        setSource(nextSource)
        setOpen(true)
        setSubmitError("")
        trackLeadEvent("CTA_CLICK", { source: nextSource })
        trackLeadEvent("FORM_OPEN", { source: nextSource })
      },
    }),
    [],
  )

  const resetForm = () => {
    setForm(initialFormState)
    setErrors({})
    setSubmitError("")
    setSubmitted(false)
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      resetForm()
      setSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name"
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email"
    }

    if (!form.problem.trim()) {
      nextErrors.problem = "Please describe what is not working"
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await submitForm()
  }

  const submitForm = async () => {
    setSubmitError("")

    if (!validate()) {
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("/api/contact/system-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source,
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setSubmitted(true)
      trackLeadEvent("FORM_SUBMIT", { source })
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <LeadCaptureContext.Provider value={value}>
      {children}

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-[560px] rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(9,14,30,0.98),rgba(7,10,24,0.96))] p-0 text-white shadow-[0_30px_120px_rgba(3,10,24,0.45)] backdrop-blur-2xl">
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_26%)] p-6 md:p-7">
            <DialogHeader className="text-left">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                Free system audit
              </div>
              <DialogTitle className="mt-5 font-heading text-[34px] font-semibold leading-[0.96] tracking-[-0.04em] text-white">
                Tell us what&apos;s not working
              </DialogTitle>
              <DialogDescription className="mt-3 max-w-xl text-[15px] leading-7 text-white/64">
                We&apos;ll review and get back within 24 hours.
              </DialogDescription>
            </DialogHeader>

            {submitted ? (
              <div className="mt-8 rounded-[24px] border border-cyan-300/18 bg-cyan-400/10 p-5">
                <p className="font-heading text-[24px] font-semibold text-white">Request received</p>
                <p className="mt-3 text-[15px] leading-7 text-white/72">We&apos;ll review your system and respond within 24 hours.</p>
                <a
                  href={directBookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
                >
                  Skip the wait — book your audit now
                </a>
              </div>
            ) : (
              <form className="mt-8 grid gap-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Name"
                    error={errors.name}
                    input={
                      <Input
                        value={form.name}
                        onChange={(event) => handleChange("name", event.target.value)}
                        placeholder="Your name"
                        className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
                        autoComplete="name"
                      />
                    }
                  />

                  <Field
                    label="Email"
                    error={errors.email}
                    input={
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        placeholder="you@company.com"
                        className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
                        autoComplete="email"
                      />
                    }
                  />
                </div>

                <Field
                  label="Website"
                  error={errors.website}
                  input={
                    <Input
                      value={form.website}
                      onChange={(event) => handleChange("website", event.target.value)}
                      placeholder="company.com"
                      className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
                      autoComplete="url"
                    />
                  }
                />

                <Field
                  label="Problem"
                  error={errors.problem}
                  input={
                    <Textarea
                      value={form.problem}
                      onChange={(event) => handleChange("problem", event.target.value)}
                      placeholder="Describe what’s not working (leads, follow-ups, no-shows, etc.)"
                      className="min-h-[140px] rounded-[24px] border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
                    />
                  }
                />

                {submitError ? (
                  <div className="rounded-[18px] border border-red-300/14 bg-red-500/10 p-4">
                    <p className="text-sm leading-6 text-red-200">{submitError} Please try again in a moment.</p>
                    <button
                      type="button"
                      onClick={() => void submitForm()}
                      disabled={submitting}
                      className="mt-3 inline-flex rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/8 disabled:opacity-60"
                    >
                      Retry
                    </button>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="glow-button mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  Request Audit
                </button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </LeadCaptureContext.Provider>
  )
}

function Field({
  label,
  input,
  error,
}: {
  label: string
  input: React.ReactNode
  error?: string
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-white/78">{label}</span>
      {input}
      {error ? <span className="text-sm leading-6 text-red-300">{error}</span> : null}
    </label>
  )
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext)

  if (!context) {
    throw new Error("useLeadCapture must be used within LeadCaptureProvider")
  }

  return context
}
