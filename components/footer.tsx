import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-1/3">
        <div className="flex items-center space-x-4">
          <Logo size="large" />
         <h2 className="text-sm font-bold">Mechanical Engineering <br/>Students' Association, NIT Durgapur</h2>
        </div>
          <p className="text-sm text-muted-foreground">
            Our club is dedicated to bringing together like-minded individuals to share knowledge, experiences, and
            create meaningful connections.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:w-1/2 lg:w-2/3">
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-sm text-muted-foreground hover:text-primary">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact Information</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Nit Durgapur, Mahatma Gandhi Avenue, <br/>Durgapur - 713209, West Bengal, India.</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+91 7607549708</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">mesa.me@nitdgp.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
          <div className="text-center text-xs text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MESA. All rights reserved.
          </div>
          <div className="mt-4 flex justify-center space-x-6 text-xs text-muted-foreground md:mt-0">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
