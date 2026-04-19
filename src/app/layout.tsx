import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://prohealthit.com"),
  title: {
    default: "ProHealthIt — Free Health Calculators & Evidence-Based Guides",
    template: "%s | ProHealthIt",
  },
  description:
    "34 free health calculators with 2,000-word evidence-based guides. Pregnancy, fitness, BMI, TDEE, mental health tools — cited from WHO, NIH, and peer-reviewed research.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prohealthit.com",
    siteName: "ProHealthIt",
    title: "ProHealthIt — Free Health Calculators & Evidence-Based Guides",
    description:
      "40 free health calculators with evidence-based guides. Pregnancy, fitness, BMI, TDEE, mental health tools cited from WHO, NIH, and peer-reviewed research.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProHealthIt — Free Health Calculators & Evidence-Based Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProHealthIt — Free Health Calculators & Evidence-Based Guides",
    description:
      "40 free health calculators with evidence-based guides. Cited from WHO, NIH, and peer-reviewed research.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ProHealthIt",
  url: "https://prohealthit.com",
  logo: "https://prohealthit.com/og-image.png",
  description:
    "Free, evidence-based health calculators and guides. Cited from WHO, NIH, and peer-reviewed research.",
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ProHealthIt",
  url: "https://prohealthit.com",
  description:
    "Free health calculators and evidence-based guides for pregnancy, fitness, body metrics, mental health, and medical conditions.",
  publisher: {
    "@type": "Organization",
    name: "ProHealthIt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1770XE6BLF" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1770XE6BLF');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
