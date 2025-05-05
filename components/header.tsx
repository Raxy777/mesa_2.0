"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import Logo from "@/components/logo"
import Sidebar from "@/components/sidebar"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Announcements", href: "/announcements" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering theme-dependent elements after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Sidebar for mobile */}
      <Sidebar navigation={navigation} />

      {/* Main header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">{mounted && <Logo size="medium" />}</div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  pathname === item.href ? "text-primary font-bold" : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex lg:flex-1 lg:justify-end">
            <ModeToggle />
          </div>
          </div>

          
        </div>
      </header>
    </>
  )
}
