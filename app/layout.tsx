import type { Metadata, Viewport } from "next"
import Script from "next/script"

import "./globals.css"
import { LeadCaptureProvider } from "@/components/home/lead-capture-provider"
import { GaPageTracker } from "@/components/layout/ga-page-tracker"
import { AppShell } from "@/components/layout/app-shell"

const gaId = process.env.NEXT_PUBLIC_GA_ID
const apolloAppId = process.env.NEXT_PUBLIC_APOLLO_APP_ID

export const metadata: Metadata = {
  metadataBase: new URL("https://vishnulabs.com"),
  title: "Xavira Tech Labs — Scalable Software Systems for Real-World Production",
  description:
    "We design and build secure, scalable backend systems, SaaS platforms, AI-driven automation, and cloud-native infrastructure for production reliability.",
  keywords: [
    "law firm intake system",
    "reduce clinic no shows",
    "real estate lead follow up",
    "ai data leak prevention",
    "ai data protection platform",
    "lead follow up system",
    "system audit",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Xavira Tech Labs — Scalable Software Systems for Real-World Production",
    description: "Secure backend systems, SaaS platforms, AI-driven automation, and cloud-native infrastructure built for production reliability.",
    type: "website",
    url: "https://vishnulabs.com",
    siteName: "Xavira Tech Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xavira Tech Labs — Scalable Software Systems for Real-World Production",
    description: "Secure backend systems, SaaS platforms, AI-driven automation, and cloud-native infrastructure built for production reliability.",
  },
}

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xavira Tech Labs",
    url: "https://vishnulabs.com",
    email: "hello@vishnulabs.com",
    logo: "https://vishnulabs.com/vishnulabs-logo-mark.svg",
    areaServed: "US",
    description:
      "Xavira Tech Labs builds reliable, scalable backend systems, SaaS platforms, automation systems, and cloud infrastructure for production environments.",
  }

  return (
    <html lang="en-US">
      <body className="font-sans antialiased">
        <LeadCaptureProvider>
          <GaPageTracker />
          <AppShell>
            <div className="app-shell-enter">{children}</div>
          </AppShell>
        </LeadCaptureProvider>

        <Script id="organization-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationLd)}
        </Script>

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}

        <Script id="click-event-tracker" strategy="afterInteractive">
          {`document.addEventListener('click', function(e){var t=e.target; if(!t) return; var el=t.closest('[data-track]'); if(!el) return; var eventName=el.getAttribute('data-track'); if(!eventName) return; if(window.gtag){window.gtag('event', eventName, {event_category:'funnel', event_label: window.location.pathname});}});`}
        </Script>

        {apolloAppId ? (
          <Script id="apollo-tracker" strategy="afterInteractive">
            {`(function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"${apolloAppId}"})},document.head.appendChild(o)})();`}
          </Script>
        ) : null}
      </body>
    </html>
  )
}
