import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, User } from "lucide-react"

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Announcements & News</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest news, announcements, and updates from our club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <Input type="search" placeholder="Search announcements..." className="w-full" />
              </div>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="w-full py-6 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement, index) => (
              <Card key={index} className="flex flex-col h-full">
                {announcement.image && (
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      {announcement.category}
                    </span>
                    <span className="inline-flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {announcement.date}
                    </span>
                  </div>
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    By {announcement.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{announcement.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/announcements/${announcement.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 py-8">
            <Button variant="outline" size="icon" disabled>
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
            <Button variant="outline" size="sm" className="font-medium">
              1
            </Button>
            <Button variant="outline" size="sm" className="font-medium">
              2
            </Button>
            <Button variant="outline" size="sm" className="font-medium">
              3
            </Button>
            <Button variant="outline" size="sm" className="font-medium">
              4
            </Button>
            <Button variant="outline" size="sm" className="font-medium">
              5
            </Button>
            <Button variant="outline" size="icon">
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

      {/* Subscribe Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Never Miss an Update</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter to receive the latest announcements directly in your inbox.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
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
    date: "May 15, 2023",
    author: "Sarah Johnson",
    category: "Events",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Registration for our annual conference is now open. Early bird pricing available until June 1st. Don't miss this opportunity to connect with industry leaders and fellow members.",
  },
  {
    id: "2",
    title: "New Partnership Announcement",
    date: "May 10, 2023",
    author: "Michael Chen",
    category: "News",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "We're excited to announce our new partnership with Industry Leaders Inc. This collaboration will bring new opportunities and resources to our members.",
  },
  {
    id: "3",
    title: "Member Spotlight: Jessica Rodriguez",
    date: "May 5, 2023",
    author: "Emily Wilson",
    category: "Updates",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "This month, we're spotlighting Jessica Rodriguez, who has made significant contributions to our community outreach initiatives.",
  },
  {
    id: "4",
    title: "Summer Workshop Series Announced",
    date: "April 28, 2023",
    author: "David Kim",
    category: "Events",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "We're pleased to announce our summer workshop series, featuring expert speakers and hands-on learning opportunities.",
  },
  {
    id: "5",
    title: "Club Receives Community Service Award",
    date: "April 20, 2023",
    author: "Sarah Johnson",
    category: "News",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Our club has been recognized with the prestigious Community Service Award for our ongoing commitment to local initiatives.",
  },
  {
    id: "6",
    title: "Website Redesign Launch",
    date: "April 15, 2023",
    author: "Daniel Wilson",
    category: "Updates",
    image: null,
    excerpt:
      "We're excited to announce the launch of our redesigned website, featuring improved navigation and new resources for members.",
  },
  {
    id: "7",
    title: "Membership Renewal Period Begins",
    date: "April 10, 2023",
    author: "James Taylor",
    category: "Updates",
    image: null,
    excerpt:
      "The annual membership renewal period has begun. Current members can renew their membership at a discounted rate until May 15th.",
  },
  {
    id: "8",
    title: "Call for Volunteers: Community Service Day",
    date: "April 5, 2023",
    author: "Olivia Brown",
    category: "Events",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "We're seeking volunteers for our upcoming Community Service Day on May 20th. Join us in making a difference in our community.",
  },
  {
    id: "9",
    title: "New Member Orientation Schedule",
    date: "April 1, 2023",
    author: "Grace Liu",
    category: "Updates",
    image: null,
    excerpt:
      "New member orientation sessions have been scheduled for the coming month. All new members are encouraged to attend.",
  },
]
