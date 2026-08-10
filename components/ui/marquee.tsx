"use client"

import { cn } from "@/lib/utils"
import { Cog } from "lucide-react"
import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  className?: string
  repeat?: number
  separator?: boolean
}

export default function Marquee({ children, className, repeat = 6 }: MarqueeProps) {
  const items = Array.from({ length: repeat })

  return (
    <div className={cn("relative flex overflow-hidden select-none", className)}>
      <div className="flex animate-marquee shrink-0 items-center">
        {items.map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {children}
          </div>
        ))}
      </div>
      <div className="flex animate-marquee shrink-0 items-center" aria-hidden="true">
        {items.map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MarqueeItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("flex items-center gap-6 px-6", className)}>
      {children}
      <Cog className="h-5 w-5 text-primary/40 animate-spin-slow shrink-0" strokeWidth={1.5} />
    </span>
  )
}
