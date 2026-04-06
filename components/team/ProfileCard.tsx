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
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  }
}

export function ProfileCard({
  name = "Sophie Bennett",
  designation = "Product Designer",
  image = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&h=800&fit=crop&auto=format&q=80",
  enableAnimations = true,
  className,
  socials = {
    github: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
}: ProfileCardProps) {
  const [hovered, setHovered] = useState(false)
  const shouldReducedMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReducedMotion

  const containerVariants: any = {
    rest: { 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate ? { 
      scale: 1.02, 
      y: -4,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 28,
        mass: 0.6,
      }
    } : {},
  }

  const imageVariants: any = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  }

  const contentVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
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
      filter: "blur(2px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
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

  return (
    <motion.div
      data-slot="profile-hover-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="rest"
      whileHover="hover"
      variants={containerVariants as any}
      className={cn(
        "relative w-80 h-96 rounded-3xl border border-border/20 text-card-foreground overflow-hidden shadow-xl shadow-black/5 cursor-pointer group backdrop-blur-sm",
        "dark:shadow-black/20",
        "transition-all duration-300",
        hovered && "ring-2 ring-primary/50 shadow-[0_0_30px_-5px_hsl(var(--primary)_/_0.3)] border-primary/50",
        className
      )}
    >
      {/* Full Cover Image */}
      <motion.img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Smooth Blur Overlay - Multiple layers for seamless fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 via-background/20 via-background/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background/90 via-background/60 via-background/30 via-background/15 via-background/8 to-transparent backdrop-blur-[1px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/85 via-background/40 to-transparent backdrop-blur-sm" />

      {/* Content */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 p-6 space-y-4"
      >
        {/* Name and Verification */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <motion.h2 
            className="text-2xl font-bold text-foreground"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.02,
                }
              }
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
          {socials?.github && (
            <motion.a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors border border-border/20 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {socials?.linkedin && (
            <motion.a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors border border-border/20 shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
          {socials?.twitter && (
            <motion.a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors border border-border/20 shadow-sm"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          )}
          {socials?.instagram && (
            <motion.a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors border border-border/20 shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}