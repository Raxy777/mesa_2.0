import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Events & Activities</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our upcoming events, workshops, and gatherings. Join us to connect, learn, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Event Calendar</h2>
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
                <TabsTrigger value="all">All Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...upcomingEvents, ...pastEvents].map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Event Categories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse events by category to find what interests you most.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/events/category/${category.slug}`}>View Events</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Event Proposal */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have an Event Idea?</h2>
              <p className="text-muted-foreground">
                We welcome event proposals from our members. If you have an idea for a workshop, social gathering, or
                any other event that aligns with our club's mission, we'd love to hear from you.
              </p>
              <Button asChild>
                <Link href="/contact">Submit Proposal</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Event planning"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        {event.featured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.date}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{event.description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {event.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          {event.time}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-1 h-4 w-4" />
          {event.attendees} attendees
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Conference",
    date: "June 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Main Convention Center",
    image: "/placeholder.svg?height=200&width=300",
    description: "Our flagship event featuring keynote speakers, workshops, and networking opportunities.",
    attendees: 250,
    featured: true,
  },
  {
    id: "2",
    title: "Summer Workshop Series",
    date: "July 10, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Club Headquarters",
    image: "/placeholder.svg?height=200&width=300",
    description: "A series of hands-on workshops focused on skill development and practical application.",
    attendees: 50,
    featured: false,
  },
  {
    id: "3",
    title: "Networking Mixer",
    date: "August 5, 2023",
    time: "6:00 PM - 9:00 PM",
    location: "Downtown Venue",
    image: "/placeholder.svg?height=200&width=300",
    description: "Connect with fellow members and industry professionals in a relaxed social setting.",
    attendees: 100,
    featured: false,
  },
  {
    id: "4",
    title: "Guest Speaker Series",
    date: "August 20, 2023",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual Event",
    image: "/placeholder.svg?height=200&width=300",
    description: "Join us for an insightful talk from industry leaders followed by Q&A session.",
    attendees: 150,
    featured: true,
  },
  {
    id: "5",
    title: "Community Service Day",
    date: "September 12, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "City Park",
    image: "/placeholder.svg?height=200&width=300",
    description: "Give back to the community through various service projects and initiatives.",
    attendees: 75,
    featured: false,
  },
  {
    id: "6",
    title: "Fall Retreat",
    date: "October 7-9, 2023",
    time: "All Day",
    location: "Mountain Resort",
    image: "/placeholder.svg?height=200&width=300",
    description: "A weekend getaway focused on team building, reflection, and planning for the future.",
    attendees: 40,
    featured: true,
  },
]

const pastEvents = [
  {
    id: "7",
    title: "Spring Gala",
    date: "April 22, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hotel",
    image: "/placeholder.svg?height=200&width=300",
    description: "An elegant evening celebrating our achievements and honoring outstanding members.",
    attendees: 200,
    featured: false,
  },
  {
    id: "8",
    title: "Leadership Workshop",
    date: "March 15, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Club Headquarters",
    image: "/placeholder.svg?height=200&width=300",
    description: "Develop essential leadership skills through interactive exercises and expert guidance.",
    attendees: 35,
    featured: false,
  },
  {
    id: "9",
    title: "Winter Social",
    date: "January 28, 2023",
    time: "6:00 PM - 9:00 PM",
    location: "Downtown Lounge",
    image: "/placeholder.svg?height=200&width=300",
    description: "A casual gathering to connect with fellow members and celebrate the new year.",
    attendees: 85,
    featured: false,
  },
]

const eventCategories = [
  {
    name: "Workshops",
    slug: "workshops",
    description: "Hands-on learning experiences focused on skill development and practical application.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Networking",
    slug: "networking",
    description: "Events designed to help members connect and build professional relationships.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Social Gatherings",
    slug: "social",
    description: "Fun, casual events that foster community and friendship among members.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Conferences",
    slug: "conferences",
    description: "Larger events featuring multiple speakers, sessions, and networking opportunities.",
    image: "/placeholder.svg?height=200&width=300",
  },
]
