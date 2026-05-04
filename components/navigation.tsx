"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  {
    label: "Tanzania Safari",
    href: "/tanzania-safari",
    featured: {
      title: "Private Tanzania Safaris",
      description: "Discover the magic of Tanzania with expert local guides",
      href: "/tanzania-safari",
    },
    links: [
      { label: "Private Safari Tours", href: "/tanzania-safari/private-tours" },
      { label: "Group Safari Tours", href: "/tanzania-safari/group-tours" },
      { label: "Safari with Kids", href: "/tanzania-safari/family" },
      { label: "National Parks Overview", href: "/national-parks" },
      { label: "Best Time to Visit", href: "/guides/best-time-to-visit-tanzania" },
    ],
  },
  {
    label: "National Parks",
    href: "/national-parks",
    featured: {
      title: "Serengeti National Park",
      description: "Home to the Great Migration and Africa's big cats",
      href: "/national-parks/serengeti",
    },
    links: [
      { label: "Serengeti", href: "/national-parks/serengeti" },
      { label: "Ngorongoro Crater", href: "/national-parks/ngorongoro-crater" },
      { label: "Tarangire", href: "/national-parks/tarangire" },
      { label: "Lake Manyara", href: "/national-parks/lake-manyara" },
      { label: "Ndutu", href: "/national-parks/ndutu" },
      { label: "Ruaha", href: "/national-parks/ruaha" },
    ],
  },
  {
    label: "Itineraries",
    href: "/itineraries",
    featured: {
      title: "8-Day Classic Tanzania Safari",
      description: "Our most popular itinerary covering the Northern Circuit",
      href: "/itineraries/8-day-classic-tanzania-safari",
    },
    links: [
      { label: "5-Day Northern Circuit", href: "/itineraries/5-day-northern-circuit" },
      { label: "8-Day Classic", href: "/itineraries/8-day-classic-tanzania-safari" },
      { label: "11-Day Tanzania & Zanzibar", href: "/itineraries/11-day-tanzania-zanzibar" },
      { label: "Honeymoon Safari", href: "/itineraries/honeymoon-tanzania-zanzibar" },
      { label: "Great Migration Safari", href: "/itineraries/great-migration-safari" },
      { label: "Calving Season Safari", href: "/itineraries/calving-season-safari" },
      { label: "Family Safari", href: "/itineraries/family-safari" },
    ],
  },
  {
    label: "About",
    href: "/about",
    featured: {
      title: "Our Story",
      description: "Born in Arusha, dedicated to authentic safari experiences",
      href: "/about",
    },
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Guides", href: "/about/guides" },
      { label: "Reviews & Testimonials", href: "/about/reviews" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`bg-cream sticky top-0 z-50 transition-all ${
          isScrolled ? "border-b border-border-soft" : ""
        }`}
      >
        <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-horizontal.png"
              alt="Jumbo Safaris"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 font-montserrat font-semibold text-forest hover:text-orange transition-colors py-2">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu Dropdown */}
                {openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-cream border border-border-soft shadow-lg min-w-[480px] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Featured Card */}
                        <Link
                          href={item.featured.href}
                          className="block p-4 bg-forest text-cream hover:bg-forest-dark transition-colors"
                        >
                          <div className="text-eyebrow uppercase text-orange mb-2">Featured</div>
                          <h3 className="font-montserrat font-bold text-lg mb-1">
                            {item.featured.title}
                          </h3>
                          <p className="text-sm text-cream/80">{item.featured.description}</p>
                        </Link>

                        {/* Links */}
                        <div className="flex flex-col gap-2">
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="font-inter text-ink hover:text-orange transition-colors py-1"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-forest text-cream font-montserrat font-semibold px-7 py-4 hover:bg-forest-dark transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-forest"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-forest z-40 overflow-y-auto lg:hidden">
          <div className="px-6 py-4">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo-roundel.png"
                alt="Jumbo Safaris"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-cream"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-cream/20">
                  <button
                    className="w-full flex items-center justify-between py-4 text-cream font-montserrat font-semibold text-lg"
                    onClick={() =>
                      setOpenMobileSection(openMobileSection === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openMobileSection === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileSection === item.label && (
                    <div className="pb-4 space-y-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block py-2 text-cream/80 hover:text-orange transition-colors pl-4"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="block w-full bg-cream text-forest font-montserrat font-semibold px-7 py-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
