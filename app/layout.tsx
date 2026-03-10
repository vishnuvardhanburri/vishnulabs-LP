import type { Metadata, Viewport } from "next"
import Script from "next/script"

import "./globals.css"
import { FunnelTracker } from "@/components/funnel-tracker"
import { GlobalMobileConversionBar } from "@/components/global-mobile-conversion-bar"
import { LiveChatAssistant } from "@/components/live-chat-assistant"
import { ScrollReveal } from "@/components/scroll-reveal"

const gaId = process.env.NEXT_PUBLIC_GA_ID
const apolloAppId = process.env.NEXT_PUBLIC_APOLLO_APP_ID

export const metadata: Metadata = {
  metadataBase: new URL("https://vishnulabs.com"),
  title: "VishnuLabs | AI Automation Agency for Revenue Ops",
  description:
    "VishnuLabs builds premium AI voice, intake, scheduling, and follow-up automation systems for law firms, real estate, and service businesses.",
  keywords: [
    "AI automation agency",
    "AI voice receptionist",
    "legal intake automation",
    "real estate automation",
    "revenue operations automation",
    "AI vault for law firms",
    "private AI for clinics",
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
    title: "VishnuLabs | AI Automation Agency",
    description: "Production-grade AI automation for inbound calls, lead qualification, and consultation booking.",
    type: "website",
    url: "https://vishnulabs.com",
    siteName: "VishnuLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "VishnuLabs | AI Automation Agency",
    description: "AI voice, intake, scheduling, and private AI vault systems for US SMB teams.",
  },
}

export const viewport: Viewport = {
  themeColor: "#fff7ed",
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
    name: "VishnuLabs",
    url: "https://vishnulabs.com",
    email: "hello@vishnulabs.com",
    logo: "https://vishnulabs.com/vishnulabs-logo-mark.svg",
    areaServed: "US",
    description:
      "VishnuLabs builds AI voice, intake, scheduling, follow-up, and private internal AI vault systems for law firms, real estate teams, and service businesses.",
  }

  return (
    <html lang="en-US">
      <body className="font-sans antialiased">
        {children}
        <LiveChatAssistant />
        <GlobalMobileConversionBar />
        <FunnelTracker />
        <ScrollReveal />

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
