import type { Metadata } from "next"
import { FadeIn } from "@/components/animation/fade-in"
import { ProfileCard } from "@/components/team/ProfileCard"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/ui/hero-background"
import SectionHeading from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cog, Instagram } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the core leadership, committee leads and faculty advisors keeping MESA's gears turning at NIT Durgapur — presidents, secretaries, R&D, technical, logistics and PR heads.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Meet the Team | MESA, NIT Durgapur",
    description:
      "The dedicated students and faculty advisors behind MESA — core leadership, committee leads and mentors.",
    url: "/team",
    type: "website",
  },
}

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
    name: "Solomon Raj",
    role: "President",
    initials: "SR",
    image: "/Team/2027/solomon.png",
    social: {
      linkedin: "https://www.linkedin.com/in/solomon-raj-484a69311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/i_solomon_raj?stkn=bTk5YmlhZTY1cWhz"
    },
  },
  {
    name: "Ramanath Rakshit ",
    role: "Vice President",
    initials: "RR",
    image: "/Team/2027/rakshit.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/ramanath-rakshit",
    },
  },
  {
    name: "Pranoy Sarkar",
    role: "General Secretary",
    initials: "PS",
    image: "/Team/2027/ps.png",
    social: {
      linkedin: "https://www.linkedin.com/in/pranoy-sarkar-350694375",
    },
  },
  {
    name: "Samparka Sadhukhan",
    role: "Treasurer",
    initials: "SS",
    image: "/Team/2027/ss.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/samparka-sadhukhan-75308927a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },

  {
    name: "Suhitha Chand ",
    role: "Convenor",
    initials: "SS",
    image: "/Team/2027/sc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/suhitha-chand-kancharla-5410a5357",
      instagram: "https://www.instagram.com/suhitha_kancharla?stkn=eDZ1Mm1sZ295dWF5&utm_source=qr"
    },
  },

  {
    name: "Kritanu Chattopadhyay",
    role: "RnD Head ",
    initials: "KC",
    image: "/Team/2027/kc.png",
    social: {
      linkedin: "www.linkedin.com/in/kritanuchattopadhyay",
    },
  },


{
    name: "Srijan Maddheshiya",
    role: "Technical and Media Head",
    initials: "SM",
    image: "/Team/2027/srijan.jpg",
    social: {
      
    },
  },

  {
    name: "Keerthana ",
    role: "Logistics and PR Head",
    initials: "",
    image: "/Team/2027/keerthana.png",
    social: {
      linkedin: "https://www.linkedin.com/in/keerthana-seelaboyina-773759303?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
]

const committeeLeads = [
  {
    name: "Akshay Reddy",
    role: "Senior Coordinator",
    initials: "AR",
    image: "/Team/2028/akshay.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/akshayreddyguvvala/",
    },
  },

   {
    name: "Nikhitha",
    role: "Senior Coordinator",
    initials: "GN",
    image: "/Team/2028/nik.jpeg",
    social: {
    },
  },

  {
    name: "Tirthankar Roy",
    role: "Senior Coordinator",
    initials: "TR",
    image: "/Team/2028/tr.jpg",
    social: {
    },
  },

  {
    name: "Sai Sreeja ",
    role: "Senior Coordinator",
    initials: "SS",
    image: "/Team/2028/sreeja.jpg",
    social: {
    },
  },

  {
    name: "Aporva",
    role: "Senior Coordinator",
    initials: "NA",
    image: "/Team/2028/apn.jpg",
    social: {
    },
  },

  {
    name: "Shibu Gorai",
    role: "Senior Coordinator",
    initials: "SG",
    image: "/Team/2028/sg.png",
    social: {
      instagram: "https://www.instagram.com/shibu_da_?igsh=MW03ajBycWZ1ZmoxZQ==",
    },
  },

  {
    name: "Prateek Pandey",
    role: "Senior Coordinator",
    initials: "PP",
    image: "",
    social: {
    },
  },

  {
    name: "Yash Tiwari",
    role: "Senior Coordinator",
    initials: "YT",
    image: "",
    social: {
    },
  },

  {
    name: "Aadil",
    role: "Senior Coordinator",
    initials: "AA",
    image: "",
    social: {
    },
  },

  

  

  

]

const advisors = [
  {
    name: "Dr. Deepak Kumar",
    role: "Faculty Advisor",
    initials: "DK",
    image: "/advisers/DK sir.jpeg",
    bio: "Assistant Professor, Department of Mechanical Engineering",
    social: {
      
    },
  },
  {
    name: "Dr. Jayabrata Dhar",
    role: "Faculty Advisor",
    initials: "JAD",
    image: "/advisers/JAD sir.jpeg",
    bio: "Linda is a Senior Mechanical Engineer at an automotive firm. She mentors students on career development.",
    social: {
      
    },
  },
]
