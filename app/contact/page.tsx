"use client"

import type React from "react"

import { FadeIn } from "@/components/animation/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/ui/hero-background"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Clock, Cog, Mail, MapPin, Phone, Send } from "lucide-react"
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "mesa.me@nitdgp.ac.in",
      link: "mailto:mesa.me@nitdgp.ac.in",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 76075 49708",
      link: "tel:+917607549708",
    },
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          NIT Durgapur, Mahatma Gandhi Avenue
          <br />
          Durgapur - 713209
          <br />
          West Bengal, India
        </>
      ),
      link: null,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: (
        <>
          Mon – Fri: 10:00 AM – 5:00 PM
          <br />
          Sat: by appointment
        </>
      ),
      link: null,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[52vh] flex items-center justify-center overflow-hidden py-20">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <FadeIn>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Signal Us
            </span>
          </FadeIn>
          <FadeIn delay={1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Contact <span className="text-gradient">MESA</span>
            </h1>
          </FadeIn>
          <FadeIn delay={2}>
            <p className="max-w-[680px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
              Questions, proposals, or just want to talk machines? Our inbox is always open.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="w-full py-16 md:py-24 lg:py-32 border-t border-border relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <FadeIn>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  Coordinates
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-3">
                  Get in touch
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mt-3">
                  We're here to answer any questions you may have about the association, our events, or membership.
                </p>
              </FadeIn>

              <div className="grid gap-5">
                {contactInfo.map((item, index) => (
                  <FadeIn key={item.title} delay={index + 1}>
                    <div className="rounded-2xl border border-border bg-card p-6 flex gap-5 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1.5">{item.title}</h3>
                        {item.link ? (
                          <Link
                            href={item.link}
                            className="text-muted-foreground text-sm leading-relaxed hover:text-primary transition-colors"
                          >
                            {item.content}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Coordinates Card */}
              <FadeIn delay={5}>
                <div className="rounded-2xl border border-border bg-card bg-blueprint-grid p-8 relative overflow-hidden">
                  {/* Corner ticks */}
                  <div className="absolute top-3 left-3 h-3 w-3 border-t border-l border-primary/40" />
                  <div className="absolute top-3 right-3 h-3 w-3 border-t border-r border-primary/40" />
                  <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/40" />
                  <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-primary/40" />

                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                      Location Spec
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between border-b border-border/60 pb-2">
                      <span className="text-muted-foreground">LAT</span>
                      <span className="text-foreground font-semibold">23.5470° N</span>
                    </div>
                    <div className="flex justify-between border-b border-border/60 pb-2">
                      <span className="text-muted-foreground">LONG</span>
                      <span className="text-foreground font-semibold">87.2930° E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SITE</span>
                      <span className="text-foreground font-semibold">NIT DURGAPUR CAMPUS</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={1}>
              <div className="rounded-2xl border border-border bg-card shadow-2xl p-6 md:p-8">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-muted/60 border border-border rounded-xl p-1 h-auto">
                    <TabsTrigger
                      value="contact"
                      className="rounded-lg font-mono text-xs uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:text-primary py-2.5"
                    >
                      Contact Us
                    </TabsTrigger>
                    <TabsTrigger
                      value="faq"
                      className="rounded-lg font-mono text-xs uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:text-primary py-2.5"
                    >
                      FAQs
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="contact" className="mt-8 space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold">Send a transmission</h3>
                      <p className="text-muted-foreground mt-1">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="YOUR NAME"
                            required
                            className="bg-background border-input rounded-xl focus-visible:ring-primary h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="YOU@EXAMPLE.COM"
                            required
                            className="bg-background border-input rounded-xl focus-visible:ring-primary h-12"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="WHAT IS THIS REGARDING?"
                          required
                          className="bg-background border-input rounded-xl focus-visible:ring-primary h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="YOUR MESSAGE"
                          rows={6}
                          required
                          className="bg-background border-input rounded-xl focus-visible:ring-primary resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Transmitting...</>
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
                      <h3 className="font-display text-2xl font-bold">Frequently Asked Questions</h3>
                      <p className="text-muted-foreground mt-1">
                        Find answers to common questions about the association and membership.
                      </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                          <AccordionTrigger className="text-left font-semibold py-4 hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-t border-border">
        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-8">
            <Cog className="h-12 w-12 text-primary mx-auto animate-spin-slow" strokeWidth={1.25} />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary badge-glow">
              Join the crew
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Become part of the <span className="text-gradient">assembly</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Become a member today and connect with like-minded individuals, access exclusive resources, and
              participate in our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full px-9 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                asChild
              >
                <Link href="#">Become a member</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-9 text-base font-semibold bg-card/60 backdrop-blur-sm"
                asChild
              >
                <Link href="/events">Explore events</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
        {/* Ambient glow */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] bg-primary/10 blur-[120px] rounded-full" />
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
      "We welcome volunteers for various roles and committees. Please contact us through the form on this page or reach out to us at mesa.me@nitdgp.ac.in.",
  },
  {
    question: "Do you offer sponsorship opportunities?",
    answer:
      "Yes, we offer various sponsorship packages for businesses and organizations interested in supporting our mission and connecting with our members. Please contact us at mesa.me@nitdgp.ac.in for details.",
  },
  {
    question: "How can I suggest an event or speaker?",
    answer:
      "We welcome suggestions from our members and the community. Please use the contact form on this page or email us at mesa.me@nitdgp.ac.in with your ideas.",
  },
]
