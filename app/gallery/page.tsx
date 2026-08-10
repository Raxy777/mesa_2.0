"use client"

import { FadeIn } from "@/components/animation/fade-in"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import HeroBackground from "@/components/ui/hero-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type GalleryImage = {
  id: string
  src: string
  alt: string
  category: string
  description: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 12

  // Calculate current images for pagination
  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage)

  // Calculate total pages
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)

  // Handle image click to open lightbox
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  // Handle navigation in lightbox
  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(galleryImages[newIndex])
  }

  const renderGrid = (images: GalleryImage[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-square overflow-hidden rounded-xl border border-border cursor-pointer group transition-colors duration-300 hover:border-primary/40"
          onClick={() => openLightbox(image)}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">{image.category}</p>
              <p className="font-display font-semibold text-lg truncate">{image.alt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[52vh] flex items-center justify-center overflow-hidden py-20">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">THE ARCHIVE</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Photo <span className="text-gradient">gallery</span>
          </h1>
          <p className="max-w-[680px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
            Moments from the workshop floor, symposiums, and everything we&apos;ve machined together.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-12 gap-6">
                <h2 className="font-display text-3xl font-bold tracking-tight">Browse the archive</h2>
                <TabsList className="bg-card border border-border rounded-full p-1 h-auto">
                  <TabsTrigger value="all" className="rounded-full">All Photos</TabsTrigger>
                  <TabsTrigger value="events" className="rounded-full">Events</TabsTrigger>
                  <TabsTrigger value="members" className="rounded-full">Members</TabsTrigger>
                  <TabsTrigger value="activities" className="rounded-full">Activities</TabsTrigger>
                </TabsList>
              </div>
            </FadeIn>

            <TabsContent value="all" className="space-y-8 mt-0">
              <FadeIn delay={1}>
                {renderGrid(currentImages)}
              </FadeIn>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col items-center gap-3 mt-12">
                  <div className="flex items-center gap-2 bg-card p-2 rounded-full border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant="ghost"
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                        className={`rounded-full w-8 h-8 p-0 font-mono text-xs ${
                          currentPage === page ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Page {String(currentPage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                  </span>
                </div>
              )}
            </TabsContent>

            <TabsContent value="events" className="space-y-8 mt-0">
              <FadeIn delay={1}>
                {renderGrid(galleryImages.filter((image) => image.category === "events"))}
              </FadeIn>
            </TabsContent>

            <TabsContent value="members" className="space-y-8 mt-0">
              <FadeIn delay={1}>
                {renderGrid(galleryImages.filter((image) => image.category === "members"))}
              </FadeIn>
            </TabsContent>

            <TabsContent value="activities" className="space-y-8 mt-0">
              <FadeIn delay={1}>
                {renderGrid(galleryImages.filter((image) => image.category === "activities"))}
              </FadeIn>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Share Your Photos Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <FadeIn className="lg:w-1/2 space-y-6">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">CONTRIBUTE</span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Share Your Photos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have photos from our events or activities? We&apos;d love to feature them in our gallery! Submit your
                photos and help us document our club&apos;s journey and memories.
              </p>
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Photos
              </Button>
            </FadeIn>
            <FadeIn delay={1} className="lg:w-1/2 relative">
              <div className="absolute inset-0 -rotate-2 border-2 border-primary/30 rounded-2xl" />
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/carousel/pic4.jpeg"
                  alt="Photo collage"
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-white/10 text-white overflow-hidden">
          <div className="relative h-[80vh] flex flex-col">
            <DialogHeader className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <DialogTitle className="font-display text-white text-xl font-bold">{selectedImage?.alt}</DialogTitle>
                  <DialogDescription className="text-zinc-300 mt-1">{selectedImage?.description}</DialogDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white rounded-full border border-white/10 hover:bg-white/10 shrink-0"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
            </DialogHeader>

            <div className="flex-grow relative w-full h-full flex items-center justify-center p-8 bg-black/50">
              {selectedImage && (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center z-20">
              <Button
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full bg-black/20 border border-white/10 text-white hover:bg-white/10 ml-4 transition-colors"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center z-20">
              <Button
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full bg-black/20 border border-white/10 text-white hover:bg-white/10 mr-4 transition-colors"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
              <div className="flex justify-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                  IMG {selectedImage && String(galleryImages.findIndex((img) => img.id === selectedImage.id) + 1).padStart(3, "0")} / {String(galleryImages.length).padStart(3, "0")}
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Sample gallery images data
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/carousel/pic1.jpeg",
    alt: "Annual Conference 2025",
    category: "events",
    description: "Highlights from our annual conference featuring keynote speakers and networking sessions.",
  },
  {
    id: "2",
    src: "/carousel/pic2.jpeg",
    alt: "Summer Workshop",
    category: "events",
    description: "Members participating in our summer workshop series focused on professional development.",
  },
  {
    id: "3",
    src: "/carousel/pic3.jpeg",
    alt: "Leadership Team Meeting",
    category: "members",
    description: "Our leadership team discussing strategic initiatives for the upcoming year.",
  },
  {
    id: "4",
    src: "/carousel/pic4.jpeg",
    alt: "Community Service Day",
    category: "activities",
    description: "Club members volunteering at the local community garden during our service day.",
  },
  {
    id: "5",
    src: "/placeholder.svg",
    alt: "Networking Mixer",
    category: "events",
    description: "Members connecting and building relationships at our monthly networking mixer.",
  },
  {
    id: "6",
    src: "/placeholder.svg",
    alt: "Guest Speaker Series",
    category: "events",
    description: "Industry expert sharing insights during our guest speaker series.",
  },
  {
    id: "7",
    src: "/placeholder.svg",
    alt: "Committee Meeting",
    category: "members",
    description: "Events committee planning upcoming activities for the club.",
  },
  {
    id: "8",
    src: "/placeholder.svg",
    alt: "Workshop Presentation",
    category: "activities",
    description: "Members presenting their projects during our hands-on workshop.",
  },
  {
    id: "9",
    src: "/placeholder.svg",
    alt: "Fall Retreat",
    category: "events",
    description: "Team building activities during our annual fall retreat in the mountains.",
  },
  {
    id: "10",
    src: "/placeholder.svg",
    alt: "New Member Orientation",
    category: "members",
    description: "Welcoming new members to the club during our orientation session.",
  },
  {
    id: "11",
    src: "/placeholder.svg",
    alt: "Panel Discussion",
    category: "activities",
    description: "Expert panel discussing industry trends and future opportunities.",
  },
  {
    id: "12",
    src: "/placeholder.svg",
    alt: "Holiday Celebration",
    category: "events",
    description: "Members celebrating at our annual holiday gathering.",
  },
  {
    id: "13",
    src: "/placeholder.svg",
    alt: "Mentorship Program",
    category: "activities",
    description: "Mentors and mentees connecting during our mentorship program kickoff.",
  },
  {
    id: "14",
    src: "/placeholder.svg",
    alt: "Board Meeting",
    category: "members",
    description: "Board members discussing club governance and future direction.",
  },
  {
    id: "15",
    src: "/placeholder.svg",
    alt: "Professional Development Workshop",
    category: "activities",
    description: "Members enhancing their skills during our professional development workshop.",
  },
  {
    id: "16",
    src: "/placeholder.svg",
    alt: "Spring Gala",
    category: "events",
    description: "Annual spring gala celebrating our achievements and honoring outstanding members.",
  },
  {
    id: "17",
    src: "/placeholder.svg",
    alt: "Volunteer Recognition",
    category: "members",
    description: "Recognizing our dedicated volunteers for their contributions to the club.",
  },
  {
    id: "18",
    src: "/placeholder.svg",
    alt: "Field Trip",
    category: "activities",
    description: "Members visiting industry facilities during our educational field trip.",
  },
  {
    id: "19",
    src: "/placeholder.svg",
    alt: "Award Ceremony",
    category: "events",
    description: "Celebrating excellence at our annual award ceremony.",
  },
  {
    id: "20",
    src: "/placeholder.svg",
    alt: "Team Building Exercise",
    category: "activities",
    description: "Members participating in team building exercises during our leadership retreat.",
  },
  {
    id: "21",
    src: "/placeholder.svg",
    alt: "Committee Leads",
    category: "members",
    description: "Our dedicated committee leads planning the upcoming quarter's activities.",
  },
  {
    id: "22",
    src: "/placeholder.svg",
    alt: "Summer Social",
    category: "events",
    description: "Members enjoying our casual summer social gathering.",
  },
  {
    id: "23",
    src: "/placeholder.svg",
    alt: "Fundraising Event",
    category: "activities",
    description: "Our successful fundraising event supporting club initiatives and community projects.",
  },
  {
    id: "24",
    src: "/placeholder.svg",
    alt: "Volunteer Day",
    category: "activities",
    description: "Members giving back to the community during our volunteer day.",
  },
]
