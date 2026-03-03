import type { Metadata, Viewport } from "next"
import Script from "next/script"

import "./globals.css"

const gaId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: "VishnuLabs | AI Automation Agency for Revenue Ops",
  description:
    "VishnuLabs builds premium AI voice, intake, scheduling, and follow-up automation systems for law firms, real estate, and service businesses.",
  keywords: [
    "AI automation agency",
    "AI voice receptionist",
    "legal intake automation",
    "real estate automation",
    "revenue operations automation",
  ],
  openGraph: {
    title: "VishnuLabs | AI Automation Agency",
    description:
      "Production-grade AI automation for inbound calls, lead qualification, and consultation booking.",
    type: "website",
    url: "https://vishnulabs.com",
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

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}

        <Script id="click-event-tracker" strategy="afterInteractive">
          {`document.addEventListener('click', function(e){var t=e.target; if(!t) return; var el=t.closest('[data-track]'); if(!el) return; var eventName=el.getAttribute('data-track'); if(!eventName) return; if(window.gtag){window.gtag('event', eventName, {event_category:'conversion', event_label: window.location.pathname});}});`}
        </Script>

        <Script id="apollo-tracker" strategy="afterInteractive">
          {`(function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69a1402c0f6e4e000d6aec3c"})},document.head.appendChild(o)})();`}
        </Script>
      </body>
    </html>
  )
}
