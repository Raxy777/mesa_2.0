import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/providers/loading-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MESA | Mechanical Engineering Students' Association",
  description: "Official website for Mechanical Engineering Students's Association",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
