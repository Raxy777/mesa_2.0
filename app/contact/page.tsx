"use client"

import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import HeroBackground from "@/components/ui/hero-background"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"
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
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-12 lg:py-24">
        <HeroBackground />
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6 badge-glow">
              <MessageSquare className="mr-2 h-4 w-4" />
              We'd Love to Hear From You
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mx-auto leading-relaxed">
               Have questions or want to get involved? We'd love to hear from you. Reach out using the form below or
               through our contact information.
            </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
         <div className="absolute top-0 right-0 p-12 opacity-20 blur-3xl -z-10">
            <div className="w-96 h-96 rounded-full bg-primary/20"></div>
        </div>
        
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  We're here to answer any questions you may have about our club, events, or membership.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                    { icon: Mail, title: "Email", content: "info@clubname.org", link: "mailto:info@clubname.org" },
                    { icon: Phone, title: "Phone", content: "(123) 456-7890", link: "tel:+11234567890" },
                    { icon: MapPin, title: "Address", content: <>123 Club Street<br />City, State 12345<br />United States</>, link: null },
                    { icon: Clock, title: "Office Hours", content: <>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</>, link: null }
                ].map((item, index) => (
                    <Card key={index} className="glass-card overflow-hidden hover:shadow-lg transition-shadow border-white/10 dark:border-white/5 bg-white/50 dark:bg-black/20">
                      <div className="flex items-start p-6">
                          <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/20 text-primary border border-white/20 shadow-sm">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div>
                             <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                             {item.link ? (
                                <Link href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                                    {item.content}
                                </Link>
                             ) : (
                                <p className="text-muted-foreground">{item.content}</p>
                             )}
                          </div>
                      </div>
                    </Card>
                ))}
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Map location"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="glass-card border-none shadow-2xl bg-white/60 dark:bg-black/40 backdrop-blur-xl">
                 <CardHeader className="bg-primary/5 p-6 md:p-8">
                     <Tabs defaultValue="contact" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-background/50 p-1 border border-white/10">
                          <TabsTrigger value="contact">Contact Us</TabsTrigger>
                          <TabsTrigger value="faq">FAQs</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="contact" className="mt-8 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold">Send us a Message</h3>
                                <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
                            </div>
                           
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="bg-background/50 border-input/50 focus:border-primary transition-colors py-6"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email address"
                                            required
                                            className="bg-background/50 border-input/50 focus:border-primary transition-colors py-6"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this regarding?"
                                        required
                                        className="bg-background/50 border-input/50 focus:border-primary transition-colors py-6"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message"
                                        rows={6}
                                        required
                                        className="bg-background/50 border-input/50 focus:border-primary transition-colors resize-none"
                                    />
                                </div>
                                <Button type="submit" className="w-full h-12 text-base rounded-xl bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-700 shadow-lg shadow-orange-500/20" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>Sending...</>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </TabsContent>

                        <TabsContent value="faq" className="mt-8">
                             <div className="mb-6">
                                <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
                                <p className="text-muted-foreground">Find answers to common questions about our club and membership.</p>
                            </div>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                                        <AccordionTrigger className="text-left text-base font-semibold py-4 hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>
                     </Tabs>
                 </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Become a member today and connect with like-minded individuals, access exclusive resources, and
                participate in our events.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:from-primary/90 hover:to-orange-700 transition-all duration-300" asChild>
                <Link href="#">Become a Member</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary" asChild>
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

