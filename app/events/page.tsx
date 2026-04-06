import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroBackground from "@/components/ui/hero-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
             <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6 badge-glow">
              <Calendar className="mr-2 h-4 w-4" />
              Community Calendar
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Events & <span className="text-gradient">Activities</span>
            </h1>
             <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto leading-relaxed">
                Discover our upcoming events, workshops, and gatherings. Join us to connect, learn, and grow together.
              </p>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-3xl font-bold tracking-tighter">Event Calendar</h2>
              <TabsList className="bg-background/50 border border-white/10 p-1">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
                <TabsTrigger value="all">All Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-8 animate-in fade-in-50 duration-500">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...upcomingEvents, ...pastEvents].map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Categories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Browse events by category to find exactly what interests you most.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventCategories.map((category, index) => (
              <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-orange-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
                  <Card className="relative overflow-hidden border-none h-full bg-card hover:bg-card/90 transition-colors">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <h3 className="absolute bottom-4 left-4 z-20 text-white font-bold text-xl">{category.name}</h3>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    </CardContent>
                    <CardFooter className="pb-6">
                      <Button variant="ghost" asChild className="w-full justify-between group-hover:text-primary px-0 hover:bg-transparent">
                        <Link href={`/events/category/${category.slug}`}>
                            View Events <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Event Proposal */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 -z-10"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 backdrop-blur-sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Contributor Spotlight
               </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Have an Event Idea?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We welcome event proposals from our members. If you have an idea for a workshop, social gathering, or
                any other event that aligns with our club's mission, we'd love to hear from you.
              </p>
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:from-primary/90 hover:to-orange-700 transition-all duration-300" asChild>
                <Link href="/contact">Submit Proposal</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Event planning"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="group overflow-hidden border-border/50 bg-background/60 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image 
            src={event.image || "/placeholder.svg"} 
            alt={event.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        {event.featured && (
          <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md text-primary-foreground px-3 py-1 text-xs font-bold rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
             <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{event.title}</CardTitle>
        </div>
        <CardDescription className="flex items-center text-sm font-medium text-primary">
            <Calendar className="mr-2 h-4 w-4" /> {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 pt-2 border-t border-border/50">
            <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="mr-2 h-3.5 w-3.5 text-primary/70" />
            {event.location}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-2 h-3.5 w-3.5 text-primary/70" />
            {event.time}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
            <Users className="mr-2 h-3.5 w-3.5 text-primary/70" />
            {event.attendees} attendees
            </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <Button asChild className="w-full rounded-lg bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <Link href={`/events/${event.id}`}>
             View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Conference",
    date: "June 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Convention Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Our flagship event featuring keynote speakers, workshops, and networking opportunities.",
    attendees: 250,
    featured: true,
  },
  {
    id: "2",
    title: "Summer Workshop Series",
    date: "July 10, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Club Headquarters",
    image: "/placeholder.svg?height=400&width=600",
    description: "A series of hands-on workshops focused on skill development and practical application.",
    attendees: 50,
    featured: false,
  },
  {
    id: "3",
    title: "Networking Mixer",
    date: "August 5, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Downtown Venue",
    image: "/placeholder.svg?height=400&width=600",
    description: "Connect with fellow members and industry professionals in a relaxed social setting.",
    attendees: 100,
    featured: false,
  },
  {
    id: "4",
    title: "Guest Speaker Series",
    date: "August 20, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual Event",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join us for an insightful talk from industry leaders followed by Q&A session.",
    attendees: 150,
    featured: true,
  },
  {
    id: "5",
    title: "Community Service Day",
    date: "September 12, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "City Park",
    image: "/placeholder.svg?height=400&width=600",
    description: "Give back to the community through various service projects and initiatives.",
    attendees: 75,
    featured: false,
  },
  {
    id: "6",
    title: "Fall Retreat",
    date: "October 7-9, 2025",
    time: "All Day",
    location: "Mountain Resort",
    image: "/placeholder.svg?height=400&width=600",
    description: "A weekend getaway focused on team building, reflection, and planning for the future.",
    attendees: 40,
    featured: true,
  },
]

const pastEvents = [
  {
    id: "7",
    title: "Spring Gala",
    date: "April 22, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hotel",
    image: "/placeholder.svg?height=400&width=600",
    description: "An elegant evening celebrating our achievements and honoring outstanding members.",
    attendees: 200,
    featured: false,
  },
  {
    id: "8",
    title: "Leadership Workshop",
    date: "March 15, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Club Headquarters",
    image: "/placeholder.svg?height=400&width=600",
    description: "Develop essential leadership skills through interactive exercises and expert guidance.",
    attendees: 35,
    featured: false,
  },
  {
    id: "9",
    title: "Winter Social",
    date: "January 28, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Downtown Lounge",
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Networking",
    slug: "networking",
    description: "Events designed to help members connect and build professional relationships.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Social Gatherings",
    slug: "social",
    description: "Fun, casual events that foster community and friendship among members.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Conferences",
    slug: "conferences",
    description: "Larger events featuring multiple speakers, sessions, and networking opportunities.",
    image: "/placeholder.svg?height=400&width=600",
  },
]
