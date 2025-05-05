"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "small" | "medium" | "large"
}

export default function Logo({ className = "", size = "medium" }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Size mapping for different logo sizes
  const sizeMap = {
    small: { width: 32, height: 32, textClass: "text-lg" },
    medium: { width: 40, height: 40, textClass: "text-xl" },
    large: { width: 48, height: 48, textClass: "text-2xl" },
  }

  const { width, height, textClass } = sizeMap[size]

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        {/* Light mode logo */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}>
          <Image
            src="/logo/mesa-black.png"
            alt="Club Logo - Light Mode"
            width={width}
            height={height}
            className="rounded-md"
            priority
          />
        </div>

        {/* Dark mode logo */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}>
          <Image
            src="/logo/mesa-white.png"
            alt="Club Logo - Dark Mode"
            width={width}
            height={height}
            className="rounded-md"
            priority
          />
        </div>
      </div>
      <span className={`font-bold ${textClass}`}></span>
    </Link>
  )
}
