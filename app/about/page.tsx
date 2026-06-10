import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Jumbo Safaris | Arusha-Based Tanzania Safari Operator",
  description:
    "Jumbo Safaris is run by Mohammadali Saleh, born and raised in Arusha. Private guided Tanzania safaris built on local knowledge, not a brochure.",
  alternates: { canonical: "https://www.jumbosafaris.com/about" },
  openGraph: {
    title: "About Jumbo Safaris | Arusha-Based Tanzania Safari Operator",
    description:
      "Jumbo Safaris is run by Mohammadali Saleh, born and raised in Arusha. Private guided Tanzania safaris built on local knowledge, not a brochure.",
    url: "https://www.jumbosafaris.com/about",
  },
}

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammadali Saleh",
    jobTitle: "Founder and Lead Guide",
    worksFor: { "@type": "TravelAgency", name: "Jumbo Safaris", url: "https://www.jumbosafaris.com" },
    address: { "@type": "PostalAddress", addressLocality: "Arusha", addressCountry: "TZ" },
    url: "https://www.jumbosafaris.com/about",
    sameAs: ["https://www.linkedin.com/company/jumbo-safaris", "https://www.instagram.com/jumbo.safaris"],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.jumbosafaris.com/about" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
            Built in Arusha.<br />Not in a head office.
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Jumbo Safaris is a private guided safari company based in Arusha, Tanzania. One founder, local guides, and no group tours.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start [&>*]:min-w-0">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">THE FOUNDER</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
                Mohammadali Saleh
              </h2>
              <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
                <p>
                  I grew up in Arusha. Eighteen years here before I left for university in Canada, where I studied Economics and spent several years working in software. Good work, wrong country.
                </p>
                <p>
                  I came back in 2023. My parents are here. This city is home. And I had been watching the Tanzania safari industry from a distance long enough to know that most of the operators people book through are either foreign-owned, running group tours, or treating guests as transactions to be processed.
                </p>
                <p>
                  The idea behind Jumbo Safaris is simple: private guided safaris, built by someone who actually knows this place. Not because I read about it, but because I grew up in the shadow of Kilimanjaro and drove past the Arusha National Park gates on the way to school.
                </p>
                <p>
                  What I can offer is something the big operators cannot: the person who designs your itinerary is the same person you message at 9pm with a question, the same person who briefs your guide the morning you depart, and the same person who follows up when you get home. No handoffs, no call centres, no account managers. When you book with Jumbo Safaris, you are working directly with someone who has a personal reason to get every detail right.
                </p>
                <p>
                  The name Jumbo is a nod to the elephant. Patient, unhurried, deeply connected to the land. That is the approach.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/mohammadali-saleh-jumbo-safaris-founder.jpg"
                alt="Mohammadali Saleh, founder of Jumbo Safaris, in the Serengeti"
                width={500}
                height={625}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Private */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">HOW WE OPERATE</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Private. Always.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream border border-border-soft mb-6">
                <UserCheck className="w-8 h-8 text-orange" />
              </div>
              <h3 className="font-montserrat font-semibold text-h3-mobile md:text-h3-desktop text-forest mb-3">
                Your vehicle, your guide
              </h3>
              <p className="text-body-mobile md:text-body-desktop text-ink">
                Every safari is private. You share the vehicle with no one except your own group. Your guide sets the pace based on what you want to see, not a schedule built for twelve strangers.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream border border-border-soft mb-6">
                <MapPin className="w-8 h-8 text-orange" />
              </div>
              <h3 className="font-montserrat font-semibold text-h3-mobile md:text-h3-desktop text-forest mb-3">
                Arusha is home base
              </h3>
              <p className="text-body-mobile md:text-body-desktop text-ink">
                We operate from Arusha, which is where the Northern Circuit starts. No middlemen, no agents in another country coordinating things they have never seen. Direct contact, from first message to final drop-off.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream border border-border-soft mb-6">
                <Users className="w-8 h-8 text-orange" />
              </div>
              <h3 className="font-montserrat font-semibold text-h3-mobile md:text-h3-desktop text-forest mb-3">
                Built around your trip
              </h3>
              <p className="text-body-mobile md:text-body-desktop text-ink">
                Standard itineraries exist as a starting point. Most trips end up adjusted: an extra night in the Serengeti, a different lodge tier, dates shifted to catch calving season. Tell us what matters and we build from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The difference: direct founder-run model */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-eyebrow uppercase text-orange mb-3">THE DIFFERENCE</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-8">
              The person you talk to is the person who runs your trip.
            </h2>
            <div className="space-y-6 text-body-mobile md:text-body-desktop text-cream/90">
              <p>
                Jumbo Safaris is built around a single principle. The founder who grew up in Arusha is the same person who designs your itinerary, answers your questions, and coordinates every detail on the ground. There is no call centre between you and your safari.
              </p>
              <p>
                Our guides have years behind the wheel in the Northern Circuit parks, and we run private trips only, so the day belongs to you. Linger at a river crossing, or skip the crowded midday tracks. The schedule bends to your group.
              </p>
              <p>
                That direct line is something larger operators cannot offer, and it is the whole reason this company exists. You get a safari built by someone with a real reason to get every detail right, and you can reach that person whenever you need to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Have a question before you commit?
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-ink max-w-prose mx-auto mb-8">
            Send a message. Mohammadali responds directly, usually within a few hours.
          </p>
          <Link
            href="/contact"
            className="bg-forest text-cream font-montserrat font-semibold px-8 py-4 hover:bg-forest-dark transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
