"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Photo Gallery</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse photos from our events, activities, and community gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Browse Photos</h2>
              <TabsList>
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white w-full">
                        <p className="font-medium truncate">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="events" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages
                  .filter((image) => image.category === "events")
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 text-white w-full">
                          <p className="font-medium truncate">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="members" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages
                  .filter((image) => image.category === "members")
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 text-white w-full">
                          <p className="font-medium truncate">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages
                  .filter((image) => image.category === "activities")
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 text-white w-full">
                          <p className="font-medium truncate">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upload Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Share Your Photos</h2>
              <p className="text-muted-foreground">
                Have photos from our events or activities? We'd love to feature them in our gallery! Submit your photos
                and help us document our club's journey and memories.
              </p>
              <Button>Submit Photos</Button>
            </div>
            <div className="lg:w-1/2 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Photo collage"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-sm">
          <div className="relative">
            <DialogHeader className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-white">{selectedImage?.alt}</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <DialogDescription className="text-white/80">{selectedImage?.description}</DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[16/9] md:aspect-auto md:h-[80vh] w-full overflow-hidden">
              {selectedImage && (
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/20 text-white hover:bg-black/40 ml-2"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/20 text-white hover:bg-black/40 mr-2"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>
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
    alt: "Annual Conference 2023",
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
