"use client"

import type React from "react"

import FloatingIcons from "@/components/animation/floating-icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or want to get involved? We'd love to hear from you. Reach out using the form below or
                through our contact information.
              </p>
            </div>
          </div>
        </div>
        <FloatingIcons />
      </section>

      {/* Contact Information and Form */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                  We're here to answer any questions you may have about our club, events, or membership.
                </p>
              </div>

              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Link href="mailto:info@clubname.org" className="hover:underline">
                        info@clubname.org
                      </Link>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <Link href="tel:+11234567890" className="hover:underline">
                        (123) 456-7890
                      </Link>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      123 Club Street
                      <br />
                      City, State 12345
                      <br />
                      United States
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Map location"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                  <TabsTrigger value="faq">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="contact" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this regarding?"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={5}
                            required
                          />
                        </div>
                        <Button type="submit" className="relative w-full bottom-0 flex justify-center items-center gap-2 border border-[#4361ee] rounded-xl text-[#FFF] bg-[#4361ee] px-8 py-4 z-10 overflow-hidden ease-in-out duration-700 group hover:text-[#000] hover:bg-gradient-to-r from-emerald-400 to-cyan-400 active:scale-95 active:duration-0 focus:bg-gradient-to-r from-emerald-400 to-cyan-400 focus:text-[#000] isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-emerald-400 to-cyan-400 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" /> Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="faq" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                      <CardDescription>Find answers to common questions about our club and membership.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Become a member today and connect with like-minded individuals, access exclusive resources, and
                participate in our events.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cursor-pointer group relative bg-gradient-to-r from-blue-600 to-violet-600 hover:bg-zinc-300 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow w-40 hover:shadow-lg" asChild>
                <Link href="#">Become a Member</Link>
              </Button>
              <Button className="relative py-2 px-3 text-black text-sm font-semibold nded-full overflow-hidden w-40 bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-violet-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0" variant="outline" asChild>
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "How do I become a member?",
    answer:
      "To become a member, you can fill out the membership application form on our website or visit our office during business hours. Membership fees vary depending on the type of membership you choose.",
  },
  {
    question: "What are the benefits of membership?",
    answer:
      "Members enjoy access to exclusive events, networking opportunities, professional development resources, mentorship programs, and a supportive community of like-minded individuals.",
  },
  {
    question: "How often do you host events?",
    answer:
      "We host events regularly, typically 2-3 times per month. These include workshops, networking mixers, guest speaker sessions, and social gatherings. Check our Events page for the latest schedule.",
  },
  {
    question: "Can I volunteer with the club?",
    answer:
      "We welcome volunteers for various roles and committees. Please contact us through the form on this page or email our volunteer coordinator at volunteer@clubname.org.",
  },
  {
    question: "Do you offer sponsorship opportunities?",
    answer:
      "Yes, we offer various sponsorship packages for businesses and organizations interested in supporting our mission and connecting with our members. Please contact our sponsorship team at sponsors@clubname.org for details.",
  },
  {
    question: "How can I suggest an event or speaker?",
    answer:
      "We welcome suggestions from our members and the community. Please use the contact form on this page or email events@clubname.org with your ideas.",
  },
]
