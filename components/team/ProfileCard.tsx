"use client"

import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

interface ProfileCardProps {
  name?: string
  designation?: string
  image?: string
  enableAnimations?: boolean
  className?: string
  socials?: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

export function ProfileCard({
  name = "Sophie Bennett",
  designation = "Product Designer",
  image = "/placeholder-user.jpg",
  enableAnimations = true,
  className,
  socials = {
    github: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
}: ProfileCardProps) {
  const [hovered, setHovered] = useState(false)
  const shouldReducedMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReducedMotion

  const containerVariants: any = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: shouldAnimate
      ? {
          scale: 1.02,
          y: -4,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 0.6,
          },
        }
      : {},
  }

  const imageVariants: any = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  }

  const contentVariants: any = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  }

  const letterVariants: any = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        mass: 0.8,
      },
    },
  }

  const socialLinks = [
    { key: "github", Icon: Github, href: socials?.github },
    { key: "linkedin", Icon: Linkedin, href: socials?.linkedin },
    { key: "twitter", Icon: Twitter, href: socials?.twitter },
    { key: "instagram", Icon: Instagram, href: socials?.instagram },
  ]

  return (
    <motion.div
      data-slot="profile-hover-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        "relative w-80 h-96 rounded-3xl border border-border/20 overflow-hidden shadow-xl shadow-black/5 cursor-pointer group",
        "dark:shadow-black/20",
        "transition-all duration-300",
        hovered &&
          "ring-2 ring-primary/50 shadow-[0_0_30px_-5px_hsl(var(--primary)_/_0.3)] border-primary/50",
        className
      )}
    >
      {/* Full Cover Image (sharp, no blur) */}
      <motion.img
        src={image || "/placeholder-user.jpg"}
        alt={`${name} — ${designation}, MESA NIT Durgapur`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Slight overall dim so bright photos don't glare */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Dark gradient at the bottom for text visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 p-6 space-y-4"
      >
        {/* Name */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <motion.h2
            className="text-2xl font-bold text-white drop-shadow-md"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.02,
                },
              },
            } as any}
          >
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Designation */}
        <motion.p
          variants={itemVariants}
          className="text-primary/80 font-medium text-sm"
        >
          {designation}
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-start gap-3 pt-2 w-full"
        >
          {socialLinks.map(
            ({ key, Icon, href }) =>
              href && (
                <motion.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}