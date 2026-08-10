"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  amount = 0.3,
}: {
  children: ReactNode
  delay?: number
  className?: string
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  )
}
