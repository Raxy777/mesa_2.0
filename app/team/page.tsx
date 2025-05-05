import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get to know the dedicated individuals who make our club possible. Our team is committed to creating
                valuable experiences and fostering a supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="faculty" className="w-full">
            <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Our Team</h2>
              <TabsList>
                <TabsTrigger value="faculty">Faculty Advisers</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="committee">Committee Leads</TabsTrigger>
                <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
              </TabsList>
            </div>

            {/* Faculty Advisers Tab - 2 per row */}
            <TabsContent value="faculty" className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2">
                {facultyAdvisers.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">About Our Faculty Advisers</h3>
                <p className="text-muted-foreground">
                  Our faculty advisers provide guidance, mentorship, and institutional support to help our club thrive.
                  They bring years of experience and expertise to ensure our activities align with educational goals and
                  professional standards. Faculty advisers serve as a bridge between the club and the institution,
                  helping us navigate resources, policies, and opportunities.
                </p>
              </div>
            </TabsContent>

            {/* Leadership Team Tab - 4 per row */}
            <TabsContent value="leadership" className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {leadershipTeam.map((member, index) => (
                  <TeamMemberCard key={index} member={member} compact />
                ))}
              </div>
            </TabsContent>

            {/* Committee Leads Tab - 4 per row */}
            <TabsContent value="committee" className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {committeeLeads.map((member, index) => (
                  <TeamMemberCard key={index} member={member} compact />
                ))}
              </div>
            </TabsContent>

            {/* Volunteers Tab - 4 per row */}
            <TabsContent value="volunteers" className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {volunteers.map((member, index) => (
                  <TeamMemberCard key={index} member={member} compact />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Structure</h2>
              <p className="text-muted-foreground">
                Our club is organized into several committees, each focused on specific aspects of our mission. This
                structure allows us to efficiently plan and execute events, manage resources, and provide the best
                possible experience for our members.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Committees:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Events & Programming</li>
                  <li>Membership & Outreach</li>
                  <li>Communications & Marketing</li>
                  <li>Finance & Sponsorship</li>
                  <li>Professional Development</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Team structure diagram"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in becoming part of our team? We're always looking for passionate individuals to help us grow
                and improve.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TeamMemberCard({ member, compact = false }: { member: any; compact?: boolean }) {
  // Adjust image size based on compact mode
  const imageSize = compact ? "aspect-[4/3]" : "aspect-square"

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className={`relative ${imageSize} overflow-hidden`}>
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <CardHeader className={compact ? "p-3" : "p-4"}>
        <CardTitle className={compact ? "text-lg" : "text-xl"}>{member.name}</CardTitle>
        <CardDescription className={compact ? "text-xs" : "text-sm"}>{member.role}</CardDescription>
      </CardHeader>
      <CardContent className={`${compact ? "p-3 pt-0 text-xs" : "p-4 pt-0 text-sm"} flex-grow`}>
        <p className="text-muted-foreground line-clamp-3">{member.bio}</p>
      </CardContent>
      <CardFooter className={`flex justify-start gap-1 ${compact ? "p-3 pt-0" : "p-4 pt-0"}`}>
        {member.email && (
          <Button variant="ghost" size="icon" asChild className={compact ? "h-8 w-8" : ""}>
            <Link href={`mailto:${member.email}`}>
              <Mail className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        )}
        {member.linkedin && (
          <Button variant="ghost" size="icon" asChild className={compact ? "h-8 w-8" : ""}>
            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        )}
        {member.twitter && (
          <Button variant="ghost" size="icon" asChild className={compact ? "h-8 w-8" : ""}>
            <Link href={member.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// Faculty Advisers Data
const facultyAdvisers = [
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for faculty adviser.",
    email: "demo@university.edu",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for faculty adviser.",
    email: "demo@university.edu",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
]

const leadershipTeam = [
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for leadership team member.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for leadership team member.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for leadership team member.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for leadership team member.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
]

const committeeLeads = [
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for committee lead.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for committee lead.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for committee lead.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for committee lead.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for committee lead.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
]

const volunteers = [
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for volunteer.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for volunteer.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for volunteer.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for volunteer.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for volunteer.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Demo Name",
    role: "Demo Post",
    image: "/placeholder.svg",
    bio: "Demo bio for volunteer.",
    email: "demo@clubname.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
]
