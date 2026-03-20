import { Mail, Sparkles } from "lucide-react"

type CustomSolutionNoteProps = {
  dark?: boolean
  compact?: boolean
  title?: string
}

const customPackageSubject = encodeURIComponent("Custom Package Request - VishnuLabs")
const customPackageBody = encodeURIComponent(
  [
    "Hi VishnuLabs,",
    "",
    "I am not fully sure which package is the right fit for us yet.",
    "",
    "Business / industry:",
    "Country / market:",
    "Need India-specific pricing or scope version? Yes / No:",
    "Preferred quote currency for India scope: INR / USD",
    "What we need help with:",
    "Website / domain / software / automation requirements:",
    "Timeline:",
    "Budget range:",
    "",
    "Please suggest the best custom package and transparent pricing for our case.",
  ].join("\n"),
)

export const customPackageMailto = `mailto:hello@vishnulabs.com?subject=${customPackageSubject}&body=${customPackageBody}`

export function CustomSolutionNote({
  dark = false,
  compact = false,
  title = "Custom solution available",
}: CustomSolutionNoteProps) {
  return (
    <div
      className={`rounded-[22px] border p-4 ${
        dark ? "border-white/12 bg-white/5 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-700"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
            dark ? "bg-primary/14 text-sky-100" : "bg-slate-950 text-white"
          }`}
        >
          <Sparkles className="h-4.5 w-4.5" />
        </div>
        <div>
          <p className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-950"}`}>{title}</p>
          <p className={`mt-2 text-sm leading-7 ${compact ? "" : "max-w-3xl"} ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Not sure what you actually need yet? Go for a custom package with transparent pricing. Mail us at{" "}
            <a
              href={customPackageMailto}
              className={`font-semibold underline underline-offset-2 ${dark ? "text-sky-100" : "text-slate-950"}`}
            >
              hello@vishnulabs.com
            </a>{" "}
            and we will recommend the right setup for your team. The public prices on this site are for US and UK-facing projects and are shown
            in USD. India pricing is quoted separately based on scope, workflow depth, integrations, deployment, and support, and can be shared
            in INR or USD depending on your preference.
          </p>
          <div className={`mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
            <Mail className="h-3.5 w-3.5" />
            Direct response from VishnuLabs
          </div>
        </div>
      </div>
    </div>
  )
}
