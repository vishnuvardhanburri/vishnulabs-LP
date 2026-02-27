import type { Metadata, Viewport } from "next"
import Script from "next/script"

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
      <body className="font-sans antialiased">
        {children}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`(function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69a1402c0f6e4e000d6aec3c"})},document.head.appendChild(o)})();`}
        </Script>
      </body>
    </html>
  )
}
