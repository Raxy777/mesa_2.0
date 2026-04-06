"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import HeroBackground from "@/components/ui/hero-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, ImageIcon, Upload, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    id: string
    src: string
    alt: string
    category: string
    description: string
  }>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 12

  // Calculate current images for pagination
  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage)

  // Calculate total pages
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)

  // Handle image click to open lightbox
  const openLightbox = (image: typeof selectedImage) => {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6 badge-glow">
              <ImageIcon className="mr-2 h-4 w-4" />
              Captured Moments
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Photo <span className="text-gradient">Gallery</span>
            </h1>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto leading-relaxed">
              Browse photos from our events, activities, and community gatherings. Reliving our best moments.
            </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent"></div>
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-3xl font-bold tracking-tighter">Browse Photos</h2>
              <TabsList className="bg-background/50 border border-white/10 p-1">
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
              </TabsList>
            </div>

            <div className="bg-background/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
                <TabsContent value="all" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {currentImages.map((image) => (
                    <div
                        key={image.id}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                        onClick={() => openLightbox(image)}
                    >
                        <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="font-semibold text-lg truncate">{image.alt}</p>
                            <p className="text-xs text-zinc-300 uppercase tracking-wider">{image.category}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                    <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-md p-2 rounded-full border border-border">
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
                            variant={currentPage === page ? "default" : "ghost"}
                            size="icon"
                            onClick={() => setCurrentPage(page)}
                            className="rounded-full w-8 h-8 p-0"
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
                    </div>
                )}
                </TabsContent>

                <TabsContent value="events" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages
                    .filter((image) => image.category === "events")
                    .map((image) => (
                        <div
                        key={image.id}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                        onClick={() => openLightbox(image)}
                        >
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="font-semibold text-lg truncate">{image.alt}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </TabsContent>

                <TabsContent value="members" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages
                    .filter((image) => image.category === "members")
                    .map((image) => (
                         <div
                        key={image.id}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                        onClick={() => openLightbox(image)}
                        >
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="font-semibold text-lg truncate">{image.alt}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </TabsContent>

                <TabsContent value="activities" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages
                    .filter((image) => image.category === "activities")
                    .map((image) => (
                        <div
                        key={image.id}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                        onClick={() => openLightbox(image)}
                        >
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="font-semibold text-lg truncate">{image.alt}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Upload Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
               <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 backdrop-blur-sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Contribute
               </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Share Your Photos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have photos from our events or activities? We'd love to feature them in our gallery! Submit your photos
                and help us document our club's journey and memories.
              </p>
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:from-primary/90 hover:to-orange-700 transition-all duration-300">
                Submit Photos
              </Button>
            </div>
            <div className="lg:w-1/2 relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Photo collage"
                width={1280}
                height={720}
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full p-0 bg-black/95 backdrop-blur-xl border-none text-white overflow-hidden">
          <div className="relative h-[80vh] flex flex-col">
            <DialogHeader className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex justify-between items-start">
                  <div>
                    <DialogTitle className="text-white text-xl font-bold">{selectedImage?.alt}</DialogTitle>
                     <DialogDescription className="text-zinc-300 mt-1">{selectedImage?.description}</DialogDescription>
                  </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
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
                className="h-16 w-16 rounded-full bg-black/20 text-white hover:bg-black/60 hover:scale-110 ml-4 transition-all duration-200"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-10 w-10" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center z-20">
              <Button
                variant="ghost"
                size="icon"
                className="h-16 w-16 rounded-full bg-black/20 text-white hover:bg-black/60 hover:scale-110 mr-4 transition-all duration-200"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-10 w-10" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <div className="flex justify-center">
                    <span className="text-sm text-zinc-400">
                        {selectedImage && galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
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
const galleryImages = [
  {
    id: "1",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Annual Conference 2025",
    category: "events",
    description: "Highlights from our annual conference featuring keynote speakers and networking sessions.",
  },
  {
    id: "2",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Summer Workshop",
    category: "events",
    description: "Members participating in our summer workshop series focused on professional development.",
  },
  {
    id: "3",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Leadership Team Meeting",
    category: "members",
    description: "Our leadership team discussing strategic initiatives for the upcoming year.",
  },
  {
    id: "4",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Community Service Day",
    category: "activities",
    description: "Club members volunteering at the local community garden during our service day.",
  },
  {
    id: "5",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Networking Mixer",
    category: "events",
    description: "Members connecting and building relationships at our monthly networking mixer.",
  },
  {
    id: "6",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Guest Speaker Series",
    category: "events",
    description: "Industry expert sharing insights during our guest speaker series.",
  },
  {
    id: "7",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Committee Meeting",
    category: "members",
    description: "Events committee planning upcoming activities for the club.",
  },
  {
    id: "8",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Workshop Presentation",
    category: "activities",
    description: "Members presenting their projects during our hands-on workshop.",
  },
  {
    id: "9",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Fall Retreat",
    category: "events",
    description: "Team building activities during our annual fall retreat in the mountains.",
  },
  {
    id: "10",
    src: "/placeholder.svg?height=600&width=600",
    alt: "New Member Orientation",
    category: "members",
    description: "Welcoming new members to the club during our orientation session.",
  },
  {
    id: "11",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Panel Discussion",
    category: "activities",
    description: "Expert panel discussing industry trends and future opportunities.",
  },
  {
    id: "12",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Holiday Celebration",
    category: "events",
    description: "Members celebrating at our annual holiday gathering.",
  },
  {
    id: "13",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Mentorship Program",
    category: "activities",
    description: "Mentors and mentees connecting during our mentorship program kickoff.",
  },
  {
    id: "14",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Board Meeting",
    category: "members",
    description: "Board members discussing club governance and future direction.",
  },
  {
    id: "15",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Professional Development Workshop",
    category: "activities",
    description: "Members enhancing their skills during our professional development workshop.",
  },
  {
    id: "16",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Spring Gala",
    category: "events",
    description: "Annual spring gala celebrating our achievements and honoring outstanding members.",
  },
  {
    id: "17",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Volunteer Recognition",
    category: "members",
    description: "Recognizing our dedicated volunteers for their contributions to the club.",
  },
  {
    id: "18",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Field Trip",
    category: "activities",
    description: "Members visiting industry facilities during our educational field trip.",
  },
  {
    id: "19",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Award Ceremony",
    category: "events",
    description: "Celebrating excellence at our annual award ceremony.",
  },
  {
    id: "20",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Team Building Exercise",
    category: "activities",
    description: "Members participating in team building exercises during our leadership retreat.",
  },
  {
    id: "21",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Committee Leads",
    category: "members",
    description: "Our dedicated committee leads planning the upcoming quarter's activities.",
  },
  {
    id: "22",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Summer Social",
    category: "events",
    description: "Members enjoying our casual summer social gathering.",
  },
  {
    id: "23",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Fundraising Event",
    category: "activities",
    description: "Our successful fundraising event supporting club initiatives and community projects.",
  },
  {
    id: "24",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Volunteer Day",
    category: "activities",
    description: "Members giving back to the community during our volunteer day.",
  },
]
