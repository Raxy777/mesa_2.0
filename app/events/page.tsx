import { FadeIn } from "@/components/animation/fade-in"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/ui/hero-background"
import SectionHeading from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ==================== HERO ==================== */}
      <section className="relative w-full min-h-[52vh] flex items-center justify-center overflow-hidden py-20">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
            THE CALENDAR
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Events &amp; <span className="text-gradient">activities</span>
          </h1>
          <p className="max-w-[680px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
            Technical symposiums, CAD bootcamps, industrial visits and robotics competitions —
            every rig on the MESA calendar, engineered for you.
          </p>
        </div>
      </section>

      {/* ==================== EVENT CALENDAR ==================== */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <FadeIn className="space-y-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  WHAT'S ON
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Event calendar
                </h2>
              </FadeIn>
              <FadeIn delay={1}>
                <TabsList className="bg-card border border-border rounded-full p-1">
                  <TabsTrigger value="upcoming" className="rounded-full">Upcoming</TabsTrigger>
                  <TabsTrigger value="past" className="rounded-full">Past Events</TabsTrigger>
                  <TabsTrigger value="all" className="rounded-full">All Events</TabsTrigger>
                </TabsList>
              </FadeIn>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event, index) => (
                  <FadeIn key={event.id} delay={index % 3}>
                    <EventCard event={event} image={carouselImage(index)} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <FadeIn key={event.id} delay={index % 3}>
                    <EventCard event={event} image={carouselImage(index)} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...upcomingEvents, ...pastEvents].map((event, index) => (
                  <FadeIn key={event.id} delay={index % 3}>
                    <EventCard event={event} image={carouselImage(index)} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <FadeIn delay={2} className="mt-10 flex justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                // schedule subject to change
              </span>
            </FadeIn>
          </Tabs>
        </div>
      </section>

      {/* ==================== EVENT CATEGORIES ==================== */}
      <section className="w-full py-16 md:py-28 relative border-y border-border bg-card/30 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeading
            eyebrow="BROWSE BY DISCIPLINE"
            title="Explore categories"
            subtitle="From hands-on machining to design sprints — find the rig that fits your interests."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventCategories.map((category, index) => (
              <FadeIn key={category.slug} delay={index}>
                <Link
                  href={`/events/category/${category.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 space-y-2">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {String(index + 1).padStart(2, "0")} / Series
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary pt-1">
                        View events
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUBMIT EVENT PROPOSAL ==================== */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-[520px]">
                {/* Corner brackets — precision frame */}
                <div className="absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-primary z-20" />
                <div className="absolute -top-3 -right-3 h-8 w-8 border-t-2 border-r-2 border-primary z-20" />
                <div className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-primary z-20" />
                <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-primary z-20" />

                {/* Offset blueprint frame */}
                <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-primary/30" />

                <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/20">
                  <div className="relative aspect-video">
                    <Image
                      src="/carousel/pic2.jpeg"
                      alt="Members of MESA planning an event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Ambient glow */}
                <div className="absolute -z-10 inset-0 scale-110 bg-primary/15 blur-[80px] rounded-full" />
              </div>
            </FadeIn>

            <FadeIn delay={1} className="order-1 lg:order-2 space-y-6">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                CONTRIBUTOR SPOTLIGHT
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Have an event <span className="text-gradient">idea?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We welcome proposals from our members — whether it's a CAD bootcamp, a guest
                lecture, an industrial visit or a hands-on fabrication challenge, the events team
                will help you blueprint it into reality.
              </p>
              <ul className="space-y-3 font-mono text-xs text-muted-foreground uppercase tracking-[0.15em]">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Mentorship from the faculty advisory team
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Budget &amp; venue support from MESA
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link href="/contact">
                    Submit Proposal <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <Link href="/gallery">View Past Events</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ==================== HELPERS & DATA ==================== */

function carouselImage(index: number) {
  return `/carousel/pic${(index % 4) + 1}.jpeg`
}

function EventCard({ event, image }: { event: EventItem; image: string }) {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Date chip */}
        <div className="absolute top-4 left-4 rounded-md border border-primary/30 bg-background/90 backdrop-blur-sm px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
          {event.date}
        </div>
        {event.featured && (
          <div className="absolute top-4 right-4 badge-glow rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="flex flex-col gap-4 p-6 pt-5 flex-1">
        <h3 className="font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground pt-4 border-t border-border">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {event.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            {event.attendees}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            EVT-{String(event.id).padStart(3, "0")}
          </span>
          <Link
            href={`/events/${event.id}`}
            className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            View Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

interface EventItem {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  attendees: number
  featured: boolean
}

const upcomingEvents: EventItem[] = [
  {
    id: "1",
    title: "MESA Technical Symposium '25",
    date: "June 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium, NIT DGP",
    description: "Flagship symposium with keynote talks, paper presentations and industry networking.",
    attendees: 250,
    featured: true,
  },
  {
    id: "2",
    title: "SolidWorks CAD Bootcamp",
    date: "July 10, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "CAD Lab, ME Dept",
    description: "Hands-on bootcamp covering part modeling to fabrication-ready drawings in SolidWorks.",
    attendees: 50,
    featured: false,
  },
  {
    id: "3",
    title: "Industrial Visit: Durgapur Steel Plant",
    date: "August 5, 2025",
    time: "6:00 AM - 9:00 PM",
    location: "DSP, Durgapur",
    description: "Guided plant tour of blast furnaces and rolling mills for a real-world process study.",
    attendees: 100,
    featured: false,
  },
  {
    id: "4",
    title: "Guest Lecture: EV Drivetrain Design",
    date: "August 20, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual (Google Meet)",
    description: "Tata Motors engineers break down modern EV drivetrain architecture, followed by live Q&A.",
    attendees: 150,
    featured: true,
  },
  {
    id: "5",
    title: "Robo-War Qualifiers",
    date: "September 12, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Student Activity Centre",
    description: "Combat robots clash in the arena — campus qualifiers for the inter-college nationals.",
    attendees: 75,
    featured: false,
  },
  {
    id: "6",
    title: "Thermal Systems Design Sprint",
    date: "October 7-9, 2025",
    time: "All Day",
    location: "Thermal Lab, ME Dept",
    description: "48-hour team sprint to design, simulate and present a working heat-exchanger prototype.",
    attendees: 40,
    featured: true,
  },
]

const pastEvents: EventItem[] = [
  {
    id: "7",
    title: "AutoCAD Certification Drive",
    date: "April 22, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "CAD Lab, ME Dept",
    description: "Weekend drill series and mock exams preparing members for AutoCAD certification.",
    attendees: 200,
    featured: false,
  },
  {
    id: "8",
    title: "FEA Workshop with ANSYS",
    date: "March 15, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Simulation Lab",
    description: "Finite element analysis from meshing fundamentals to structural load case studies.",
    attendees: 35,
    featured: false,
  },
  {
    id: "9",
    title: "Alumni Meet & Outreach",
    date: "January 28, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Alumni Centre",
    description: "Casual evening connecting members with alumni across core engineering and product firms.",
    attendees: 85,
    featured: false,
  },
]

const eventCategories = [
  {
    name: "Symposiums",
    slug: "symposiums",
    description: "Paper presentations, expert keynotes and technical conclaves.",
    image: "/carousel/pic1.jpeg",
  },
  {
    name: "Workshops",
    slug: "workshops",
    description: "Hands-on CAD, FEA and fabrication sessions in the labs.",
    image: "/carousel/pic2.jpeg",
  },
  {
    name: "Industrial Visits",
    slug: "industrial-visits",
    description: "Plant tours and field exposure across Durgapur's core industries.",
    image: "/carousel/pic3.jpeg",
  },
  {
    name: "Competitions",
    slug: "competitions",
    description: "Robo-wars, design sprints and inter-college contest prep.",
    image: "/carousel/pic4.jpeg",
  },
]
