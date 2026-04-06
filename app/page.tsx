import Carousel from "@/components/carousel"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroBackground from "@/components/ui/hero-background"
import SectionHeading from "@/components/ui/section-heading"
import { ArrowRight, Calendar, ChevronRight, Newspaper, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Welcome to MESA
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Innovate. <span className="text-gradient">Create.</span> <br />
                  Inspire.
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl mx-auto lg:mx-0 leading-relaxed">
                  Join a community of passionate engineers and creators. We maintain a culture of excellence,
                  collaboration, and continuous growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300" asChild>
                  <Link href="/events">
                    Explore Events <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base backdrop-blur-sm bg-background/50 border-input hover:bg-accent hover:text-accent-foreground transition-all duration-300" asChild>
                  <Link href="/team">Meet The Team</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto lg:mx-0 w-full max-w-[600px] perspective-1000">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border bg-card/50 backdrop-blur-sm p-2">
                <Carousel images={carouselImages} />
              </div>
              {/* Decorative elements behind carousel */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gradient-to-br from-primary/30 to-orange-600/30 blur-3xl rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="w-full py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-muted/50 -z-20" />
        <div className="absolute top-0 right-0 p-12 opacity-30 blur-3xl -z-10">
            <div className="w-64 h-64 rounded-full bg-primary/20"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-30 blur-3xl -z-10">
            <div className="w-64 h-64 rounded-full bg-orange-500/20"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="What We Offer" 
            subtitle="Discover the various activities and opportunities available through our club."
            className="mb-16"
          />
          
          <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Events & Workshops",
                description: "Regular events designed to educate, inspire, and connect our members.",
                link: "/events",
                linkText: "View Events",
                gradient: "from-orange-500/10 to-red-500/10",
                iconColor: "text-orange-600 dark:text-orange-400"
              },
              {
                icon: Users,
                title: "Community",
                description: "Connect with peers, mentors, and industry professionals who share your passion.",
                link: "/team",
                linkText: "Meet Our Team",
                gradient: "from-amber-500/10 to-yellow-500/10",
                iconColor: "text-amber-600 dark:text-amber-400"
              },
              {
                icon: Newspaper,
                title: "Resources",
                description: "Access to valuable resources, news, and learning materials.",
                link: "/announcements",
                linkText: "Read Announcements",
                gradient: "from-red-500/10 to-rose-500/10",
                iconColor: "text-red-600 dark:text-red-400"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <Card className="h-full flex flex-col border-border/50 bg-background/60 backdrop-blur-xl hover:bg-background/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} blur-2xl rounded-bl-full -z-10 opacity-60 transition-transform group-hover:scale-110`} />
                  
                  <CardHeader className="pt-8">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-background to-muted shadow-sm border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                  </CardContent>
                  <CardFooter className="pb-8">
                    <Link 
                      href={feature.link} 
                      className={`text-sm font-bold flex items-center transition-colors ${feature.iconColor} group-hover:underline decoration-2 underline-offset-4`}
                    >
                      {feature.linkText} 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skewed-bg -skew-y-3 transform origin-top-left scale-110 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image 
                  src="/carousel/pic1.jpeg" // Using existing image as placeholder
                  alt="About MESA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="text-white font-medium italic">"Empowering the next generation of engineers."</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10 opacity-50 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-2xl -z-10 opacity-50 blur-2xl"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Club</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a vision to bridge the gap between academic learning and industry application, 
                MESA has been a cornerstone for student development.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We organize regular events, workshops, and social gatherings to foster
                connections and provide opportunities for personal and professional development.
                Our community is built on the pillars of innovation, inclusivity, and excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4">
                {[
                  "Industry Workshops", "Networking Events", 
                  "Project Showcases", "Mentorship Programs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="rounded-full">
                <Link href="/team">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Join us at our next events and connect with the community."
          />
          
          <div className="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={event.image || "/placeholder.svg"} 
                    alt={event.title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    Upcoming
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                     <Calendar className="h-3 w-3" /> {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground line-clamp-2 text-sm">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="w-full justify-between hover:bg-primary/5 hover:text-primary">
                    <Link href={`/events/${event.id}`}>
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <Link href="/events">
                View All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20">
        <div className="container px-4 md:px-6">
          <SectionHeading 
            title="What Our Members Say" 
          />
          
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl border border-border bg-gradient-to-br from-card to-muted p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
