import { ProfileCard } from "@/components/team/ProfileCard"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/ui/hero-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Users } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
             <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6 badge-glow">
              <Users className="mr-2 h-4 w-4" />
              Our Community
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto leading-relaxed">
              The dedicated individuals working behind the scenes to make our club great.
            </p>
        </div>
      </section>

      {/* Team Listings Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/5 to-transparent -z-10"></div>

        <div className="container px-4 md:px-6">
          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-3xl font-bold tracking-tighter">Team Members</h2>
              <TabsList className="bg-background/50 border border-white/10 p-1">
                <TabsTrigger value="leadership">Core Leadership</TabsTrigger>
                <TabsTrigger value="committees">Committee Leads</TabsTrigger>
                <TabsTrigger value="advisors">Advisors</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="leadership" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {leadershipTeam.map((member, index) => (
                  <ProfileCard key={index} name={member.name} designation={member.role} image={member.image} socials={member.social} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="committees" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {committeeLeads.map((member, index) => (
                  <ProfileCard key={index} name={member.name} designation={member.role} image={member.image} socials={member.social} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisors" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {advisors.map((member, index) => (
                  <ProfileCard key={index} name={member.name} designation={member.role} image={member.image} socials={member.social} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 backdrop-blur-sm">
                  <Briefcase className="mr-2 h-4 w-4" />
                  We are hiring
             </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Leadership Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Are you passionate about our mission? We are always looking for dedicated individuals to join our
              committees and help lead the club. Check out our open positions or start a conversation with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:from-primary/90 hover:to-orange-700 transition-all duration-300" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 transition-all duration-300" asChild>
                <Link href="/dev-refs">View Opportunities</Link>
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
    bio: "Alex is a senior majoring in Computer Science with a passion for web development and community building.",
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
    bio: "Sarah is a junior specializing in AI/ML. She oversees club operations and coordinates major events.",
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
    bio: "David manages the club's finances and budget. He is studying Finance and Data Science.",
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
    bio: "Emily handles internal communications and record-keeping. She loves organized code and organized clubs.",
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
    bio: "Michael loves planning engaging workshops and social events that bring people together.",
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
    bio: "Jessica focuses on connecting the club with industry partners and other student organizations.",
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
    bio: "Ryan maintains the club's website and infrastructure. He enjoys teaching others about DevOps.",
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
    bio: "Olivia ensures all club assets look great. She is majoring in Graphic Design and CS.",
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
    bio: "Dr. Smith is a Professor of Computer Science who provides guidance and support to the club.",
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
    bio: "Linda is a Senior Software Engineer at Tech Corp. She mentors students on career development.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "linda@example.com",
    },
  },
]
