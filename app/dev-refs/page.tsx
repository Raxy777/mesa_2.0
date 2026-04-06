import { TeamSection } from "@/components/team/TeamSection"
import HeroBackground from "@/components/ui/hero-background"
import { Terminal } from "lucide-react"

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
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
             <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6 badge-glow">
              <Terminal className="mr-2 h-4 w-4" />
              Developer Zone
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Dev <span className="text-gradient">References</span>
            </h1>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto leading-relaxed">
              Resources, documentation, and tools for our development team and contributors.
            </p>
        </div>
      </section>

      {/* Developer Profile Section */}
      <div className="container px-4 md:px-6">
        <TeamSection 
          title="Lead Developer" 
          subtitle="The architect behind this platform." 
          members={developer} 
          variant="developer" 
        />
      </div>
    </div>
  )
}
