"use client"

import Logo from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"
import Sidebar from "@/components/sidebar"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Announcements", href: "/announcements" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Sidebar for mobile */}
      <Sidebar navigation={navigation} />

      {/* Main header */}
      <motion.header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-5 border-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-8">
            {mounted && <Logo size="medium" />}
            
            {/* Top divider for aesthetic */}
            <div className="hidden lg:block h-6 w-[1px] bg-border/50" />

            <nav className="hidden lg:flex lg:gap-x-1 lg:items-center">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-full group",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <ModeToggle />
            <Link 
              href="/contact" 
              className="group flex items-center gap-1 bg-foreground text-background dark:bg-primary dark:text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground dark:hover:bg-foreground dark:hover:text-background transition-all duration-300 shadow-md hover:shadow-primary/25"
            >
              Join MESA
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Global progress bar or accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-50" />
      </motion.header>
    </>
  )
}
