import HeroBackground from "@/components/ui/hero-background"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/components/animation/fade-in"
import { ArrowRight, Calendar, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[52vh] flex items-center justify-center overflow-hidden py-20">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <FadeIn delay={0}>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              The Newsroom
            </span>
          </FadeIn>
          <FadeIn delay={1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Announcements <span className="text-gradient">&amp; news</span>
            </h1>
          </FadeIn>
          <FadeIn delay={2}>
            <p className="max-w-[680px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
              Bulletins from the shop floor — events, results, and everything in between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search and Filter Toolbar */}
      <section className="w-full relative z-10 -mt-10">
        <div className="container px-4 md:px-6">
          <FadeIn delay={1}>
            <div className="glass-card rounded-2xl border border-border p-4 md:p-5 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="w-full md:w-1/3 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search announcements..."
                    className="w-full pl-10 rounded-xl bg-background/60 border-border focus-visible:ring-primary/40"
                  />
                </div>
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList className="bg-background/60 p-1 border border-border rounded-xl w-full md:w-auto">
                    <TabsTrigger value="all" className="rounded-lg font-mono text-xs uppercase tracking-wider flex-1 md:flex-none">All</TabsTrigger>
                    <TabsTrigger value="news" className="rounded-lg font-mono text-xs uppercase tracking-wider flex-1 md:flex-none">News</TabsTrigger>
                    <TabsTrigger value="events" className="rounded-lg font-mono text-xs uppercase tracking-wider flex-1 md:flex-none">Events</TabsTrigger>
                    <TabsTrigger value="updates" className="rounded-lg font-mono text-xs uppercase tracking-wider flex-1 md:flex-none">Updates</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Announcements List */}
      <section className="w-full py-12 md:py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement, index) => (
              <FadeIn key={announcement.id} delay={index % 3} className="h-full">
                <article className="group relative flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                  {/* Ghost index number */}
                  <span className="pointer-events-none select-none absolute -top-3 right-3 z-20 font-display text-7xl font-bold text-foreground/5 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                    <span className="absolute top-4 left-4 z-20 inline-flex items-center rounded-full bg-background/80 backdrop-blur-md border border-border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <Calendar className="mr-1.5 h-3 w-3 text-primary" />
                      {announcement.date}
                    </span>
                    <span className="absolute top-4 right-4 z-20 inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider">
                      {announcement.category}
                    </span>
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      <User className="h-3 w-3 text-primary" />
                      {announcement.author}
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {announcement.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                      {announcement.excerpt}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <Link
                        href={`/announcements/${announcement.id}`}
                        className="inline-flex items-center font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        Read bulletin
                        <ArrowRight className="h-3.5 w-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          <FadeIn delay={0}>
            <div className="flex items-center justify-center gap-2 py-16">
              <button
                disabled
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:pointer-events-none"
              >
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
              </button>
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-mono text-xs font-semibold transition-colors">
                1
              </button>
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground font-mono text-xs font-semibold transition-colors hover:border-primary/40 hover:text-primary">
                2
              </button>
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground font-mono text-xs font-semibold transition-colors hover:border-primary/40 hover:text-primary">
                3
              </button>
              <span className="font-mono text-xs text-muted-foreground px-1">…</span>
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
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
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing Strip */}
      <section className="w-full border-t border-border">
        <div className="container px-4 md:px-6 py-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-border" />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground text-center">
            End of transmission // Stay tuned
          </p>
          <span className="h-px w-12 bg-border" />
        </div>
      </section>
    </div>
  )
}

const announcements = [
  {
    id: "1",
    title: "MESA Annual Technical Symposium — Registration Open",
    date: "May 15, 2025",
    author: "Prof. S. Banerjee",
    category: "Events",
    image: "/carousel/pic1.jpeg",
    excerpt:
      "Registrations are now open for our flagship technical symposium featuring keynote talks, paper presentations, and a design challenge. Early-bird slots close June 1st — secure your place among NIT Durgapur's finest mechanical minds.",
  },
  {
    id: "2",
    title: "MESA Signs MoU with Leading Automotive OEM",
    date: "May 10, 2025",
    author: "Rahul Sharma",
    category: "News",
    image: "/carousel/pic2.jpeg",
    excerpt:
      "We're thrilled to announce a new industry partnership bringing internship pipelines, sponsored labs, and guest lectures straight to the Mechanical Engineering department.",
  },
  {
    id: "3",
    title: "Member Spotlight: Ananya Gupta, SAE BAJA Lead",
    date: "May 5, 2025",
    author: "Priya Verma",
    category: "Updates",
    image: "/carousel/pic3.jpeg",
    excerpt:
      "This month we spotlight Ananya Gupta, whose leadership on the SAE BAJA drivetrain team drove the buggy to a top-10 national finish.",
  },
  {
    id: "4",
    title: "Summer CAD & CFD Workshop Series Announced",
    date: "April 28, 2025",
    author: "Arjun Mehta",
    category: "Events",
    image: "/carousel/pic4.jpeg",
    excerpt:
      "Hands-on sessions covering SolidWorks, ANSYS Fluent, and mesh best practices. Open to all years — bring your laptop and your curiosity.",
  },
  {
    id: "5",
    title: "MESA Wins Best Student Chapter Award",
    date: "April 20, 2025",
    author: "Prof. S. Banerjee",
    category: "News",
    image: "/carousel/pic1.jpeg",
    excerpt:
      "Our association has been recognized as the Best Student Chapter in the eastern region for outstanding technical activity and community outreach.",
  },
  {
    id: "6",
    title: "New MESA Website Goes Live",
    date: "April 15, 2025",
    author: "Dev Team",
    category: "Updates",
    image: "/carousel/pic2.jpeg",
    excerpt:
      "The redesigned MESA portal is live — faster, cleaner, and built around a precision-engineering aesthetic. Explore events, teams, and resources in one place.",
  },
  {
    id: "7",
    title: "Membership Renewal Period Begins",
    date: "April 10, 2025",
    author: "Sneha Kulkarni",
    category: "Updates",
    image: "/carousel/pic3.jpeg",
    excerpt:
      "Annual renewals are open. Current members can renew at a discounted rate until May 15th and keep access to workshops, competitions, and the members' lounge.",
  },
  {
    id: "8",
    title: "Call for Volunteers: Campus Outreach Day",
    date: "April 5, 2025",
    author: "Vikram Rao",
    category: "Events",
    image: "/carousel/pic4.jpeg",
    excerpt:
      "We're seeking volunteers for our school outreach program on May 20th. Help us demo engines, robots, and bridges to inspire the next generation of engineers.",
  },
  {
    id: "9",
    title: "Freshers' Orientation Schedule Released",
    date: "April 1, 2025",
    author: "Ishita Das",
    category: "Updates",
    image: "/carousel/pic1.jpeg",
    excerpt:
      "Orientation sessions for new members are scheduled across the coming month — lab tours, team intros, and a crash course on everything MESA does.",
  },
]
