import Logo from "@/components/logo"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socials = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ]

  return (
    <footer className="relative z-10 w-full pt-20 bg-background border-t border-border overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Massive Background Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden">
        <h1 className="text-[120px] md:text-[180px] lg:text-[240px] font-display font-bold text-foreground/[0.02] dark:text-foreground/[0.03] leading-none tracking-tighter text-center translate-y-[30%]">
          MESA
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              <Logo size="large" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">Mechanical Engineering</span>
                <span className="text-muted-foreground text-sm">Students' Association</span>
              </div>
            </div>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              Innovating the future of mechanical engineering. Based at NIT Durgapur, we foster technical excellence, collaboration, and practical learning.
            </p>
            <div className="flex space-x-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <Link 
                    key={social.name} 
                    href={social.href} 
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/80 border-b border-border/50 pb-4 mb-6">Directory</h3>
            <ul role="list" className="space-y-4">
              {[
                { name: "Events & Workshops", href: "/events" },
                { name: "Core Committee", href: "/team" },
                { name: "Media Gallery", href: "/gallery" },
                { name: "News & Updates", href: "/announcements" },
                { name: "Contact Desk", href: "/contact" },
                { name: "Dev References", href: "/dev-refs" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:mr-2 flex items-center text-primary opacity-0 group-hover:opacity-100">-&gt;</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/80 border-b border-border/50 pb-4 mb-6">Contact Base</h3>
            <ul role="list" className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1">Campus</span>
                  <span className="text-sm text-muted-foreground leading-relaxed block">
                    NIT Durgapur,<br/>Mahatma Gandhi Avenue,<br/>Durgapur - 713209
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium block mb-0.5">Direct Line</span>
                  <span className="text-sm text-muted-foreground">+91 7607549708</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium block mb-0.5">Email</span>
                  <a href="mailto:mesa.me@nitdgp.ac.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">mesa.me@nitdgp.ac.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 bg-muted/30 backdrop-blur-md relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between lg:px-8 gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} MESA // NIT DURGAPUR
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <div className="w-[1px] h-3 bg-border mx-2 hidden md:block" />
            <Link href="#top" className="flex items-center gap-1 hover:text-foreground transition-colors group hidden md:flex">
              Back to Top <ArrowUpRight className="w-3 h-3 -translate-y-[1px] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
