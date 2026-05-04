import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  destinations: [
    { label: "Serengeti", href: "/national-parks/serengeti" },
    { label: "Ngorongoro Crater", href: "/national-parks/ngorongoro-crater" },
    { label: "Tarangire", href: "/national-parks/tarangire" },
    { label: "Lake Manyara", href: "/national-parks/lake-manyara" },
    { label: "Ruaha", href: "/national-parks/ruaha" },
  ],
  itineraries: [
    { label: "8-Day Classic Safari", href: "/itineraries/8-day-classic-tanzania-safari" },
    { label: "Calving Season Safari", href: "/itineraries/calving-season-safari" },
    { label: "Honeymoon Safari", href: "/itineraries/honeymoon-tanzania-zanzibar" },
    { label: "Great Migration Safari", href: "/itineraries/great-migration-safari" },
    { label: "Family Safari", href: "/itineraries/family-safari" },
  ],
  planYourTrip: [
    { label: "Best Time to Visit", href: "/guides/best-time-to-visit-tanzania" },
    { label: "Safari Cost Guide", href: "/guides/tanzania-safari-cost" },
    { label: "What to Pack", href: "/guides/what-to-pack-safari" },
    { label: "Visa Requirements", href: "/guides/tanzania-visa-requirements" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Guides", href: "/about/guides" },
    { label: "Reviews", href: "/about/reviews" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

const trustBadges = [
  "TATO Licensed",
  "Private Guides Only",
  "Arusha Based",
  "Tailor-Made",
]

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-content mx-auto px-6 py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-horizontal.png"
                alt="Jumbo Safaris"
                width={120}
                height={80}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Private guided Tanzania safaris from Arusha. Experience. Reimagined.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-montserrat font-semibold text-sm uppercase tracking-wider mb-4">
              Destinations
            </h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Itineraries */}
          <div>
            <h3 className="font-montserrat font-semibold text-sm uppercase tracking-wider mb-4">
              Itineraries
            </h3>
            <ul className="space-y-2">
              {footerLinks.itineraries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div>
            <h3 className="font-montserrat font-semibold text-sm uppercase tracking-wider mb-4">
              Plan Your Trip
            </h3>
            <ul className="space-y-2">
              {footerLinks.planYourTrip.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-cream/20">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="text-caption text-cream/60 uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Social Icons & Tagline */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/jumbosafaris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/jumbosafaris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@jumbosafaris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="font-montserrat font-semibold text-lg">Experience. Reimagined.</p>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-cream/20 text-center text-sm text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} Jumbo Safaris. All rights reserved. |{" "}
            <a
              href="mailto:hello@jumbosafaris.com"
              className="hover:text-orange transition-colors"
            >
              hello@jumbosafaris.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
