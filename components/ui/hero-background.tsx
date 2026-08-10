"use client"

import { motion } from "framer-motion"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90" />
      
      {/* Blueprint Grids */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60" />
      <div className="absolute inset-0 bg-blueprint-grid-major opacity-40" />

      {/* Radial Fade to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.8)_100%)]" />

      {/* Floating Animated Orbs - representing molten metal / heat treatment */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/15 blur-[140px]"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[30%] -right-[10%] w-[45%] h-[45%] rounded-full bg-orange-600/10 blur-[140px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />

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
      <div className="absolute top-8 left-8 text-foreground/20 dark:text-foreground/10 font-mono text-xs flex flex-col gap-1">
        <span>+ NIT DURGAPUR</span>
        <span>+ 23.5470° N, 87.2930° E</span>
      </div>
      <div className="absolute bottom-8 right-8 text-foreground/20 dark:text-foreground/10 font-mono text-xs flex flex-col gap-1 text-right">
        <span>EST. 1960 +</span>
        <span>DEPT. OF MECHANICAL ENGG +</span>
      </div>

      {/* Fade out bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
