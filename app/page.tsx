import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Users, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import NewsletterSignup from "@/components/newsletter-signup"
import Carousel from "@/components/carousel"

export default function HomePage() {
  // Carousel images
  const carouselImages = [
    {
      src: "/carousel/pic1.jpeg",
      alt: "Club members at an annual conference",
    },
    {
      src: "/carousel/pic2.jpeg",
      alt: "Workshop session with club members",
    },
    {
      src: "/carousel/pic3.jpeg",
      alt: "Community service project",
    },
    {
      src: "/carousel/pic4.jpeg",
      alt: "Club social gathering",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to MESA</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We bring together passionate individuals to create, learn, and grow together. Join us on our mission to
                make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/events">Upcoming Events</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 w-full">
              <Carousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Club</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in [Will be added], our club has been bringing together like-minded individuals who share a passion for
                growth, learning, and community. We organize regular events, workshops, and social gatherings to foster
                connections and provide opportunities for personal and professional development.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/team" className="inline-flex items-center">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the various activities and opportunities available through our club.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Calendar className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Events & Workshops</CardTitle>
                <CardDescription>Regular events designed to educate, inspire, and connect our members.</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p>From workshops to social gatherings, our events cater to diverse interests and goals.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/events">View Events</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
                <CardDescription>A supportive network of like-minded individuals.</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p>Connect with peers, mentors, and industry professionals who share your passion.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Newspaper className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Resources</CardTitle>
                <CardDescription>Access to valuable resources and learning materials.</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p>Stay updated with the latest news, announcements, and educational content.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/announcements">Read Announcements</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Members Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our community about their experiences with our club.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us at our next events and connect with the community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} • {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/events" className="inline-flex items-center">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter to receive the latest updates, event announcements, and club news.
              </p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const testimonials = [
  {
    name: "Samparka",
    role: "New Member",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Being part of this club has been transformative for my personal and professional growth. The connections I've made and the skills I've developed are invaluable.",
  },
  {
    name: "Kritanu",
    role: "New Member",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I've had the opportunity to lead initiatives that make a real difference. The supportive environment and collaborative spirit make this club truly special.",
  },
  {
    name: "Pranoy",
    role: "New Member",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Even as a new member, I felt welcomed immediately. The events are well-organized and the community is incredibly inclusive and supportive.",
  },
  {
    name: "Parnab",
    role: "New Member",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The networking opportunities and professional development resources have significantly advanced my career. I'm grateful for the friendships I've formed.",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Conference",
    date: "June 15-17, 2025",
    location: "Main Convention Center",
    image: "/placeholder.svg?height=200&width=300",
    description: "Our flagship event featuring keynote speakers, workshops, and networking opportunities.",
  },
  {
    id: "2",
    title: "Summer Workshop Series",
    date: "July 10, 2025",
    location: "Club Headquarters",
    image: "/placeholder.svg?height=200&width=300",
    description: "A series of hands-on workshops focused on skill development and practical application.",
  },
  {
    id: "3",
    title: "Networking Mixer",
    date: "August 5, 2025",
    location: "Downtown Venue",
    image: "/placeholder.svg?height=200&width=300",
    description: "Connect with fellow members and industry professionals in a relaxed social setting.",
  },
]
