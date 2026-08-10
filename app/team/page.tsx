import { FadeIn } from "@/components/animation/fade-in"
import { ProfileCard } from "@/components/team/ProfileCard"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/ui/hero-background"
import SectionHeading from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cog } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[52vh] flex items-center justify-center overflow-hidden py-20">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">THE CREW</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Meet the <span className="text-gradient">team</span>
          </h1>
          <p className="max-w-[680px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
            The dedicated individuals working behind the scenes to keep MESA&apos;s gears turning.
          </p>
        </div>
      </section>

      {/* Team Listings Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  STRUCTURE
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">The org chart</h2>
              </div>
              <TabsList className="bg-card border border-border rounded-full p-1">
                <TabsTrigger value="leadership" className="rounded-full">Core Leadership</TabsTrigger>
                <TabsTrigger value="committees" className="rounded-full">Committee Leads</TabsTrigger>
                <TabsTrigger value="advisors" className="rounded-full">Advisors</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="leadership" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {leadershipTeam.map((member, index) => (
                  <FadeIn key={index} delay={index} className="flex justify-center">
                    <ProfileCard name={member.name} designation={member.role} image={member.image} socials={member.social} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="committees" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {committeeLeads.map((member, index) => (
                  <FadeIn key={index} delay={index} className="flex justify-center">
                    <ProfileCard name={member.name} designation={member.role} image={member.image} socials={member.social} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisors" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {advisors.map((member, index) => (
                  <FadeIn key={index} delay={index} className="flex justify-center">
                    <ProfileCard name={member.name} designation={member.role} image={member.image} socials={member.social} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Blueprint caption */}
          <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            UNIT: MESA-CORE {"//"} REV 2025
          </p>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden border-t border-border">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium badge-glow">
              <Cog className="mr-2 h-4 w-4 text-primary animate-spin-slow" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">Open Assembly</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Join the <span className="text-gradient">leadership</span> crew
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about mechanical engineering and building things that matter? We&apos;re always looking for
              dedicated individuals to join our committees and help lead the association.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-border hover:bg-card transition-all duration-300" asChild>
                <Link href="/dev-refs">View opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



const leadershipTeam = [
  {
    name: "Alex Morgan",
    role: "President",
    initials: "AM",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Alex is a senior majoring in Mechanical Engineering with a passion for CAD design and community building.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "alex@example.com",
    },
  },
  {
    name: "Sarah Chen",
    role: "Vice President",
    initials: "SC",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah is a junior specializing in thermal systems. She oversees club operations and coordinates major events.",
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@example.com",
    },
  },
  {
    name: "David Kim",
    role: "Treasurer",
    initials: "DK",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David manages the club's finances and budget. He is studying Mechanical Engineering with an interest in project management.",
    social: {
      linkedin: "#",
      email: "david@example.com",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Secretary",
    initials: "ER",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily handles internal communications and record-keeping. She loves precision and well-organized engineering.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "emily@example.com",
    },
  },
]

const committeeLeads = [
  {
    name: "Michael Chang",
    role: "Events Lead",
    initials: "MC",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael loves planning engaging workshops and technical events that bring engineers together.",
    social: {
      linkedin: "#",
      email: "michael@example.com",
    },
  },
  {
    name: "Jessica Patel",
    role: "Outreach Lead",
    initials: "JP",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Jessica focuses on connecting the association with industry partners and other student organizations.",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jessica@example.com",
    },
  },
  {
    name: "Ryan O'Connor",
    role: "Tech Lead",
    initials: "RO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ryan maintains the club's digital infrastructure and enjoys teaching others about engineering software.",
    social: {
      github: "#",
      linkedin: "#",
      email: "ryan@example.com",
    },
  },
  {
    name: "Olivia Johnson",
    role: "Design Lead",
    initials: "OJ",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Olivia ensures all club assets look great. She specializes in industrial design and visual communication.",
    social: {
      instagram: "#",
      linkedin: "#",
      email: "olivia@example.com",
    },
  },
]

const advisors = [
  {
    name: "Dr. Robert Smith",
    role: "Faculty Advisor",
    initials: "RS",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Smith is a Professor of Mechanical Engineering who provides guidance and support to the association.",
    social: {
      linkedin: "#",
      email: "robert@example.com",
    },
  },
  {
    name: "Linda Wong",
    role: "Industry Mentor",
    initials: "LW",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Linda is a Senior Mechanical Engineer at an automotive firm. She mentors students on career development.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "linda@example.com",
    },
  },
]
