import Carousel from "@/components/carousel"
import { FadeIn } from "@/components/animation/fade-in"
import Marquee, { MarqueeItem } from "@/components/ui/marquee"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/ui/hero-background"
import SectionHeading from "@/components/ui/section-heading"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  Cog,
  DraftingCompass,
  GraduationCap,
  MapPin,
  Quote,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const carouselImages = [
  { src: "/carousel/pic1.jpeg", alt: "Club members at an annual conference" },
  { src: "/carousel/pic2.jpeg", alt: "Workshop session with club members" },
  { src: "/carousel/pic3.jpeg", alt: "Community service project" },
  { src: "/carousel/pic4.jpeg", alt: "Club social gathering" },
]

const pillars = [
  {
    icon: DraftingCompass,
    index: "01",
    title: "Design & Simulation",
    description:
      "Master CAD, FEA and CFD workflows through hands-on sessions on industry-standard tools like SolidWorks and ANSYS.",
    link: "/events",
    linkText: "See Workshops",
  },
  {
    icon: Wrench,
    index: "02",
    title: "Fabrication & Build",
    description:
      "Get your hands dirty in the workshop — machining, welding, additive manufacturing, and full project builds.",
    link: "/gallery",
    linkText: "View Builds",
  },
  {
    icon: GraduationCap,
    index: "03",
    title: "Career & Research",
    description:
      "Alumni talks, internship guidance, research paper support and PSU/industry preparation to launch your career.",
    link: "/team",
    linkText: "Meet Mentors",
  },
]

const stats = [
  { value: "1960", label: "Department Established" },
  { value: "500+", label: "Active Members" },
  { value: "50+", label: "Annual Events" },
  { value: "25+", label: "Industry Partners" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      {/* ==================== HERO ==================== */}
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 py-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    NIT Durgapur — Dept. of Mechanical Engg.
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
                  Where steel
                  <br />
                  meets <span className="text-gradient">ideas.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <p className="max-w-[560px] text-muted-foreground text-lg md:text-xl mx-auto lg:mx-0 leading-relaxed">
                  MESA is the engine of mechanical engineering culture at NIT
                  Durgapur — building, testing and breaking limits together
                  since day one.
                </p>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Button
                    size="lg"
                    className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    asChild
                  >
                    <Link href="/events">
                      Explore Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 text-base font-semibold bg-card/60 backdrop-blur-sm hover:bg-accent transition-all duration-300"
                    asChild
                  >
                    <Link href="/team">Meet the Team</Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={4}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 pt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Cog className="h-4 w-4 text-primary animate-spin-slow" />
                    Student-run since 1960
                  </span>
                  <span className="hidden sm:block h-4 w-px bg-border" />
                  <span className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Institute-recognized body
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right: Visual */}
            <FadeIn delay={2} className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[520px]">
                {/* Corner brackets — precision frame */}
                <div className="absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-primary z-20" />
                <div className="absolute -top-3 -right-3 h-8 w-8 border-t-2 border-r-2 border-primary z-20" />
                <div className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-primary z-20" />
                <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-primary z-20" />

                <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/20">
                  <Carousel images={carouselImages} autoPlayInterval={4500} />
                </div>

                {/* Floating spec badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 rounded-xl border border-border bg-card/90 backdrop-blur-xl px-5 py-4 shadow-2xl animate-float">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Members onboard
                  </div>
                  <div className="font-display text-3xl font-bold text-foreground mt-1">
                    500<span className="text-primary">+</span>
                  </div>
                </div>

                {/* Ambient glow */}
                <div className="absolute -z-10 inset-0 scale-110 bg-primary/15 blur-[80px] rounded-full" />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/60 to-transparent" />
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section className="border-y border-border bg-card/50 backdrop-blur-sm py-5">
        <Marquee repeat={4}>
          {[
            "Thermodynamics",
            "Fluid Mechanics",
            "CAD / CAM",
            "Robotics",
            "Manufacturing",
            "Finite Element Analysis",
            "Automotive Design",
            "Material Science",
          ].map((item) => (
            <MarqueeItem key={item} className="font-display text-xl font-semibold text-muted-foreground/80">
              {item}
            </MarqueeItem>
          ))}
        </Marquee>
      </section>

      {/* ==================== PILLARS ==================== */}
      <section className="w-full py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Engineered for growth"
            subtitle="Three verticals designed to take you from classroom theory to shop-floor confidence."
          />

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.index} delay={i}>
                <div className="group relative h-full">
                  <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5">
                    {/* Ghost number */}
                    <span className="absolute -top-4 right-4 font-display text-[100px] font-bold leading-none text-foreground/[0.04] dark:text-foreground/[0.05] select-none transition-all duration-500 group-hover:text-primary/10">
                      {pillar.index}
                    </span>

                    <div className="relative h-13 w-13 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:glow-amber p-3.5">
                      <pillar.icon className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                    </div>

                    <h3 className="font-display text-xl font-bold mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {pillar.description}
                    </p>

                    <Link
                      href={pillar.link}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                    >
                      {pillar.linkText}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                    </Link>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-orange-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT + STATS ==================== */}
      <section className="w-full py-24 relative overflow-hidden border-y border-border bg-card/30">
        <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] sm:aspect-square relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/carousel/pic2.jpeg"
                    alt="About MESA"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-4">
                      <Quote className="h-5 w-5 text-primary mb-2" />
                      <p className="text-white font-medium italic text-sm leading-relaxed">
                        "Empowering the next generation of engineers, one build
                        at a time."
                      </p>
                    </div>
                  </div>
                </div>
                {/* Offset frame accent */}
                <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-primary/30" />
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="space-y-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  Who we are
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                  Built by students.
                  <br />
                  Driven by <span className="text-gradient">machines.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Mechanical Engineering Students' Association bridges the
                  gap between academia and industry. We run workshops,
                  competitions, industrial visits and research circles — so you
                  graduate with more than a degree.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-border bg-border mt-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-card p-6 transition-colors hover:bg-accent/50"
                    >
                      <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-2">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== EVENTS ==================== */}
      <section className="w-full py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl mx-auto mb-4">
            <SectionHeading
              align="left"
              eyebrow="Mark your calendar"
              title="Upcoming events"
              subtitle="Workshops, competitions and meetups — there's always something on the bench."
              className="mb-0"
            />
            <FadeIn delay={2}>
              <Button
                variant="outline"
                className="rounded-full shrink-0 font-semibold"
                asChild
              >
                <Link href="/events">
                  View all
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 pt-8">
            {upcomingEvents.map((event, i) => (
              <FadeIn key={event.id} delay={i}>
                <Link
                  href={`/events`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 rounded-md border border-primary/30 bg-background/90 backdrop-blur-sm px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {event.dateLabel}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="w-full py-24 border-y border-border bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeading
            eyebrow="From the floor"
            title="Voices of the workshop"
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i}>
                <figure className="relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <Quote className="absolute top-7 right-7 h-9 w-9 text-primary/15" />
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{t.content}"
                  </blockquote>
                  <figcaption className="mt-7 pt-6 border-t border-border/60 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center font-display font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm tracking-wide">{t.name}</div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
                        {t.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="w-full py-28 lg:py-36 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-8">
            <Cog className="h-12 w-12 text-primary mx-auto animate-spin-slow" strokeWidth={1.25} />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Ready to build
              <br />
              something <span className="text-gradient">real?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Whether you're into engines, robots or clean-sheet design — there's
              a workbench here with your name on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full px-9 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-9 text-base font-semibold bg-card/60 backdrop-blur-sm"
                asChild
              >
                <Link href="/announcements">Latest announcements</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
        {/* Ambient glows */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] bg-primary/10 blur-[120px] rounded-full" />
      </section>
    </div>
  )
}

const testimonials = [
  {
    name: "Samparka",
    role: "Batch of 2027",
    content:
      "Being part of MESA has been transformative. The connections I've made and the hands-on skills I've developed in the workshop are invaluable.",
  },
  {
    name: "Kritanu",
    role: "Batch of 2026",
    content:
      "I've led initiatives that make a real difference on campus. The supportive environment and collaborative spirit make this club truly special.",
  },
  {
    name: "Pranoy",
    role: "Batch of 2027",
    content:
      "Even as a first-year, I felt welcomed immediately. Events are well-organized and seniors genuinely want to see you grow.",
  },
  {
    name: "Parnab",
    role: "Batch of 2025",
    content:
      "The alumni network and technical resources fast-tracked my internship hunt. I'm grateful for the friendships I've formed here.",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Technical Symposium",
    dateLabel: "Jun 15—17",
    date: "June 15–17, 2025",
    location: "Main Auditorium",
    image: "/carousel/pic1.jpeg",
    description:
      "Our flagship event featuring keynote speakers, paper presentations and a national-level design competition.",
  },
  {
    id: "2",
    title: "CAD & FEA Bootcamp",
    dateLabel: "Jul 10",
    date: "July 10, 2025",
    location: "Mech Block, Lab 3",
    image: "/carousel/pic3.jpeg",
    description:
      "Hands-on series covering SolidWorks modelling and ANSYS simulation workflows, from basics to certification level.",
  },
  {
    id: "3",
    title: "Industry Connect Mixer",
    dateLabel: "Aug 05",
    date: "August 5, 2025",
    location: "Guest House Lawns",
    image: "/carousel/pic4.jpeg",
    description:
      "An evening with alumni from Tata Steel, L&T and ISRO — network, ask questions, and plan your next move.",
  },
]
