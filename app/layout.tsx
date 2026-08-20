import type React from "react"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SiteBackdrop from "@/components/ui/site-backdrop"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/providers/loading-provider"

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

export const metadata = {
  title: "MESA | Mechanical Engineering Students' Association",
  description: "Official website for Mechanical Engineering Students' Association, NIT Durgapur",
  icons: {
    icon: "/logo/mesa-white.png",
    shortcut: "/logo/mesa-black.png",
    apple: "/logo/mesa-black.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-foreground">
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
