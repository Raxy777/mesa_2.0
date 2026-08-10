import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animation/fade-in"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: "center" | "left"
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = align === "center"
    ? "items-center text-center"
    : "items-start text-left"

  return (
    <FadeIn className={cn("flex flex-col justify-center space-y-4 mb-12", alignClasses, className)}>
      {eyebrow && (
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn("h-px w-16 bg-gradient-to-r from-primary to-transparent mt-2", align === "center" && "mx-auto bg-gradient-to-r from-transparent via-primary to-transparent")} />
    </FadeIn>
  )
}
