import { Metadata } from "next"
import Link from "next/link"
import { UserCheck, Map, MapPin, Shield, Star, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Jumbo Safaris | Arusha-Based Tanzania Safari Operator",
  description:
    "Jumbo Safaris is a private guided Tanzania safari company based in Arusha. Meet our team, learn our story, and discover why travellers choose us.",
  alternates: { canonical: "https://jumbosafaris.com/about" },
  openGraph: {
    title: "About Jumbo Safaris | Arusha-Based Tanzania Safari Operator",
    description:
      "Jumbo Safaris is a private guided Tanzania safari company based in Arusha. Meet our team, learn our story, and discover why travellers choose us.",
    url: "https://jumbosafaris.com/about",
  },
}

const guides = [
  {
    name: "Emmanuel K.",
    years: 14,
    speciality: "Serengeti & Great Migration",
    quote: "Every game drive is different. That is what keeps me here.",
  },
  {
    name: "Farida M.",
    years: 9,
    speciality: "Ngorongoro & Birdwatching",
    quote: "The crater never gets old. Even after thousands of visits.",
  },
  {
    name: "Joseph T.",
    years: 11,
    speciality: "Tarangire & Southern Circuit",
    quote: "Tarangire is underrated. My guests always leave surprised.",
  },
]

const whyJumbo = [
  {
    icon: UserCheck,
    title: "Private Guides Only",
    description:
      "No group tours, no crowded vehicles. Your dedicated guide knows every trail, every waterhole, every secret spot in the bush.",
  },
  {
    icon: Map,
    title: "Tailor-Made Itineraries",
    description:
      "Cookie-cutter safaris are not for everyone. We design each trip around your interests, pace, and dreams.",
  },
  {
    icon: MapPin,
    title: "Born in Arusha",
    description:
      "We live where your safari begins. Local knowledge, local connections, local expertise you simply cannot replicate.",
  },
]

const trustBoxes = [
  { icon: Shield, label: "TATO Member" },
  { icon: Star, label: "5-Star TripAdvisor" },
  { icon: Users, label: "Private Guides Certified" },
  { icon: Award, label: "Arusha-Based Since 2020" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
            About Jumbo Safaris
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-prose mx-auto">
            Born in Arusha. Built for the wild.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">OUR STORY</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
            A New Kind of Tanzania Safari Company
          </h2>

          <div className="max-w-prose space-y-6 text-body-mobile md:text-body-desktop text-ink">
            <p>
              Jumbo Safaris was founded in Arusha by people who grew up in the shadow of the
              Serengeti. We are not a booking platform or a foreign-owned operation — we are a
              local company staffed by guides, planners, and hosts who have spent their careers
              in Tanzania&apos;s national parks.
            </p>
            <p>
              The name Jumbo is a nod to the elephant — patient, intelligent, and deeply
              connected to the land. We bring those same qualities to every safari we build:
              deliberate planning, expert knowledge, and an unhurried approach that lets the
              wilderness reveal itself on its own terms.
            </p>
            <p>
              Every itinerary we create is private. No shared vehicles, no group schedules, no
              compromises. Your guide, your pace, your Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Our Guides Section */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">THE TEAM</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Meet Your Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.name} className="text-center">
                {/* Placeholder portrait */}
                <div className="aspect-[3/4] bg-forest mb-6 flex items-center justify-center">
                  <p className="text-cream/50 text-sm">Guide portrait</p>
                </div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-forest mb-1">
                  {guide.name}
                </h3>
                <p className="text-sm text-muted mb-2">{guide.years} years experience</p>
                <p className="text-sm font-semibold text-forest mb-4">
                  Specialist: {guide.speciality}
                </p>
                <p className="text-ink italic">&ldquo;{guide.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">WHY TRAVEL WITH US</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              The Jumbo Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyJumbo.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cream border border-border-soft mb-6">
                  <item.icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-montserrat font-semibold text-h3-mobile md:text-h3-desktop text-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">ACCREDITATIONS</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop">
              Trusted and Licensed
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBoxes.map((box) => (
              <div
                key={box.label}
                className="bg-forest-dark p-6 text-center"
              >
                <box.icon className="w-10 h-10 text-orange mx-auto mb-4" />
                <p className="font-montserrat font-semibold text-cream">{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Ready to meet your guide?
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-ink max-w-prose mx-auto mb-8">
            Start planning your safari with our team today.
          </p>
          <Link
            href="/contact"
            className="bg-forest text-cream font-montserrat font-semibold px-8 py-4 hover:bg-forest-dark transition-colors inline-block"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </>
  )
}
