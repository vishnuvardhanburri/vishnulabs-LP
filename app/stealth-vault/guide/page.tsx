import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const steps = [
  {
    title: "Step 1: Environment lock",
    text: "Deploy the Vault node on your internal workstation/server. Restrict outbound internet access and whitelist only internal systems.",
  },
  {
    title: "Step 2: Document ingest",
    text: "Upload case files, SOPs, contracts, and policy docs to the local knowledge folder. Run the index command once to build memory.",
  },
  {
    title: "Step 3: Role access + redaction",
    text: "Create staff roles and enable redaction rules for PII, financial identifiers, and regulated health/legal fields.",
  },
  {
    title: "Step 4: Validation test",
    text: "Run 20 internal test prompts covering legal and compliance scenarios. Verify response speed, accuracy, and redaction behavior.",
  },
  {
    title: "Step 5: Go live",
    text: "Enable production mode, connect internal team endpoints, and monitor system logs. Weekly policy review is recommended.",
  },
]

export default function StealthVaultGuidePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 lg:px-10">
        <section className="surface-glass rounded-2xl p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Stealth Vault Installation Guide</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">5-step deployment plan</h1>
          <p className="mt-3 text-base text-muted-foreground">
            This is the same installation content sent after payment. You can also download the PDF version for internal IT approval.
          </p>

          <a
            href="/guides/stealth-vault-installation-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-xl border border-border/55 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Download PDF guide
          </a>

          <div className="mt-8 grid gap-4">
            {steps.map((step) => (
              <article key={step.title} className="rounded-xl border border-border/45 bg-card/55 p-4">
                <h2 className="text-base font-semibold text-foreground">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
