import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SiteBackdrop from "@/components/ui/site-backdrop"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/providers/loading-provider"
import { siteConfig } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MESA | Mechanical Engineering Students' Association, NIT Durgapur",
    template: "%s | MESA, NIT Durgapur",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${siteConfig.name} — ${siteConfig.fullName}, NIT Durgapur`,
    title: "MESA | Mechanical Engineering Students' Association, NIT Durgapur",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MESA — Mechanical Engineering Students' Association, NIT Durgapur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MESA | Mechanical Engineering Students' Association, NIT Durgapur",
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/logo/mesa-white.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logo/mesa-black.png", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: "/logo/mesa-black.png",
    apple: "/logo/mesa-black.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add real codes via env when available, e.g. NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
}

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: `${siteConfig.name} — ${siteConfig.fullName}`,
        alternateName: "MESA NIT Durgapur",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo/mesa-black.png`,
        description: siteConfig.description,
        email: siteConfig.social.email,
        telephone: siteConfig.social.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.street}, NIT Durgapur`,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        location: {
          "@type": "Place",
          geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.fullName}, NIT Durgapur`,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-foreground">
        <OrganizationJsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingProvider>
            {/* Global liquid-ether backdrop, visible through the whole site */}
            <SiteBackdrop />
            <div className="flex min-h-screen flex-col relative">
              <Header />
              <main className="flex-1 relative">{children}</main>
              <Footer />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
