import { TeamSection } from "@/components/team/TeamSection"
import HeroBackground from "@/components/ui/hero-background"
import { FadeIn } from "@/components/animation/fade-in"
import { Cog } from "lucide-react"

const developer = [
  {
    id: 1,
    name: "Ramanath Rakshit",
    title: "Lead Full-Stack Developer",
    image: "https://res.cloudinary.com/dyahhqfzj/image/upload/v1751108922/dev_uxh3kx.png",
    description: "Crafting seamless digital experiences with cutting-edge technology. Passionate about building scalable and intuitive learning platforms.",
    expertise: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "DevOps"],
    github: "https://github.com/raxy777",
    linkedin: "https://linkedin.com/in/ramanath-rakshit",
  },
]

export default function DevRefsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[52vh] flex items-center justify-center overflow-hidden py-20">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
            UNDER THE HOOD
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Dev <span className="text-gradient">references</span>
          </h1>
          <p className="max-w-[680px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
            Resources, documentation, and the people who machine this platform.
          </p>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="container px-4 md:px-6 pb-20">
        <FadeIn delay={1}>
          <span className="block text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            SYSTEM ARCHITECTS // BUILD TEAM
          </span>
          <TeamSection
            title="Lead Developer"
            subtitle="The architect behind this platform."
            members={developer}
            variant="developer"
          />
        </FadeIn>
      </section>

      {/* Closing blueprint strip */}
      <FadeIn delay={2}>
        <div className="container px-4 md:px-6 pb-16 flex items-center justify-center gap-3 text-muted-foreground">
          <Cog className="h-4 w-4 animate-spin-slow text-primary" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em]">
            COMPILED ON CAMPUS — NEXT.JS 15 / TAILWIND / FRAMER MOTION
          </span>
        </div>
      </FadeIn>
    </div>
  )
}
