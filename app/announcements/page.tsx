
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroBackground from "@/components/ui/hero-background"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Bell, Calendar, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6 badge-glow">
              <Bell className="mr-2 h-4 w-4" />
              Latest Updates
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Announcements <span className="text-gradient">& News</span>
            </h1>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and updates from our club.
              We're constantly moving forward.
            </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-6 md:py-12 relative z-10 -mt-10">
        <div className="container px-4 md:px-6">
          <div className="glass-card rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search announcements..." className="w-full pl-10 bg-background/50 border-white/10" />
              </div>
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="bg-background/50 p-1 border border-white/10">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="news">News</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10" />

        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <Card className="flex flex-col h-full border-border/50 bg-background/60 backdrop-blur-xl hover:bg-background/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <span className="absolute top-4 right-4 z-20 inline-flex items-center rounded-full bg-primary/90 text-primary-foreground px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md">
                        {announcement.category}
                    </span>
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                       <span className="inline-flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {announcement.date}
                      </span>
                      <span className="inline-flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {announcement.author}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {announcement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{announcement.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild className="w-full justify-between group-hover:text-primary px-0 hover:bg-transparent">
                      <Link href={`/announcements/${announcement.id}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 py-16">
            <Button variant="outline" size="icon" disabled className="rounded-full">
              <span className="sr-only">Previous page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button variant="outline" size="sm" className="font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm" className="font-medium rounded-full">
              2
            </Button>
            <Button variant="outline" size="sm" className="font-medium rounded-full">
              3
            </Button>
            <span className="text-muted-foreground">...</span>
            <Button variant="outline" size="icon" className="rounded-full">
              <span className="sr-only">Next page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}

const announcements = [
  {
    id: "1",
    title: "Annual Conference Registration Now Open",
    date: "May 15, 2025",
    author: "Sarah Johnson",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Registration for our annual conference is now open. Early bird pricing available until June 1st. Don't miss this opportunity to connect with industry leaders and fellow members.",
  },
  {
    id: "2",
    title: "New Partnership Announcement",
    date: "May 10, 2025",
    author: "Michael Chen",
    category: "News",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "We're excited to announce our new partnership with Industry Leaders Inc. This collaboration will bring new opportunities and resources to our members.",
  },
  {
    id: "3",
    title: "Member Spotlight: Jessica Rodriguez",
    date: "May 5, 2025",
    author: "Emily Wilson",
    category: "Updates",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "This month, we're spotlighting Jessica Rodriguez, who has made significant contributions to our community outreach initiatives.",
  },
  {
    id: "4",
    title: "Summer Workshop Series Announced",
    date: "April 28, 2025",
    author: "David Kim",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "We're pleased to announce our summer workshop series, featuring expert speakers and hands-on learning opportunities.",
  },
  {
    id: "5",
    title: "Club Receives Community Service Award",
    date: "April 20, 2025",
    author: "Sarah Johnson",
    category: "News",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Our club has been recognized with the prestigious Community Service Award for our ongoing commitment to local initiatives.",
  },
  {
    id: "6",
    title: "Website Redesign Launch",
    date: "April 15, 2025",
    author: "Daniel Wilson",
    category: "Updates",
    image: "/placeholder.svg?height=400&width=600", // Added image for consistency layout
    excerpt:
      "We're excited to announce the launch of our redesigned website, featuring improved navigation and new resources for members.",
  },
  {
    id: "7",
    title: "Membership Renewal Period Begins",
    date: "April 10, 2025",
    author: "James Taylor",
    category: "Updates",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "The annual membership renewal period has begun. Current members can renew their membership at a discounted rate until May 15th.",
  },
  {
    id: "8",
    title: "Call for Volunteers: Community Service Day",
    date: "April 5, 2025",
    author: "Olivia Brown",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "We're seeking volunteers for our upcoming Community Service Day on May 20th. Join us in making a difference in our community.",
  },
  {
    id: "9",
    title: "New Member Orientation Schedule",
    date: "April 1, 2025",
    author: "Grace Liu",
    category: "Updates",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "New member orientation sessions have been scheduled for the coming month. All new members are encouraged to attend.",
  },
]

