import type { Metadata, Viewport } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Vishnu Vardhan Burri | Automation Architect — Vishnu Labs",
  description:
    "Production-ready AI automation, backend systems, and workflow architecture. Senior-level automation engineering for serious business outcomes.",
  keywords: [
    "AI automation",
    "backend systems",
    "workflow architecture",
    "API integration",
    "automation architect",
  ],
  openGraph: {
    title: "Vishnu Vardhan Burri | Automation Architect",
    description:
      "Production-ready AI automation & backend systems. Architecture-first approach for measurable business outcomes.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#080b12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
