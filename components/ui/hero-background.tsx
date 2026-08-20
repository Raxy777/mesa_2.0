"use client"

import { motion } from "framer-motion"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blueprint Grids */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
      <div className="absolute inset-0 bg-blueprint-grid-major opacity-25" />

      {/* Radial Fade to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.85)_100%)]" />

      {/* Abstract Mechanical Gears Ornament */}
      <div className="absolute top-[10%] right-[5%] opacity-[0.03] dark:opacity-[0.06] hidden lg:flex items-start gap-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="mt-12"
        >
          
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="mt-24 -ml-24"
        >
          
        </motion.div>
      </div>

      {/* Corner Crosshairs - Blueprint aesthetic */}
      <div className="absolute top-8 left-8 text-foreground/40 dark:text-foreground/30 font-mono text-xs flex flex-col gap-1">
        <span>+ NIT DURGAPUR</span>
        <span>+ 23.5470° N, 87.2930° E</span>
      </div>
      <div className="absolute bottom-8 right-8 text-foreground/40 dark:text-foreground/30 font-mono text-xs flex flex-col gap-1 text-right">
        <span>EST. 1960 +</span>
        <span>DEPT. OF MECHANICAL ENGG +</span>
      </div>

    </div>
  )
}
