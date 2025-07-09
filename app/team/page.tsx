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

            {/* Faculty Advisers Tab */}
            <TabsContent value="faculty" className="space-y-8">
              <div className="flex flex-wrap gap-8 justify-center">
                {facultyAdvisers.map((member, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Leadership Team Tab */}
            <TabsContent value="leadership" className="space-y-8">
              <div className="flex flex-wrap gap-8 justify-center">
                {leadershipTeam.map((member, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Committee Leads Tab */}
            <TabsContent value="committee" className="space-y-8">
              <div className="flex flex-wrap gap-8 justify-center">
                {committeeLeads.map((member, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Volunteers Tab */}
            <TabsContent value="volunteers" className="space-y-8">
              <div className="flex flex-wrap gap-8 justify-center">
                {volunteers.map((member, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <TeamMemberCard member={member} />
                  </div>
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

function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <div className="relative aspect-square overflow-hidden rounded-md">
          <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
        </div>
      </div>
      <CardHeader className="text-center pt-0">
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center gap-2 pb-4 mt-auto">
        {member.email && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={`mailto:${member.email}`}>
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        )}
        {member.linkedin && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        )}
        {member.twitter && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={member.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
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
