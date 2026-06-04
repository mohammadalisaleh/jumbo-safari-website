import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllItineraries } from "@/lib/data/itineraries"

export const metadata: Metadata = {
  title: "Tanzania Safari Itineraries | Private Tours",
  description:
    "Private Tanzania safari itineraries from 5 to 11 days. Northern circuit, calving season, honeymoon, family, and Great Migration routes. All private, all from Arusha.",
  alternates: { canonical: "https://www.jumbosafaris.com/itineraries" },
  openGraph: {
    title: "Tanzania Safari Itineraries | Jumbo Safaris",
    description:
      "Private Tanzania safari itineraries from 5 to 11 days. Northern circuit, calving season, honeymoon, family, and Great Migration routes.",
    url: "https://www.jumbosafaris.com/itineraries",
  },
}

const itineraryCategories: Record<string, string> = {
  "5-day-northern-circuit": "Short Trip",
  "8-day-classic-tanzania-safari": "Most Popular",
  "11-day-tanzania-zanzibar": "Safari + Beach",
  "honeymoon-tanzania-zanzibar": "Honeymoon",
  "calving-season-safari": "Seasonal",
  "great-migration-safari": "Seasonal",
  "family-safari": "Family",
}

export default function ItinerariesPage() {
  const itineraries = getAllItineraries()

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Itineraries", item: "https://www.jumbosafaris.com/itineraries" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Tanzania Safari Itineraries
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Seven routes, all private. From a 5-day first safari to an 11-day circuit with Zanzibar. Every itinerary runs with your group only, your vehicle, your guide.
          </p>
        </div>
      </section>

      {/* Note on private */}
      <section className="max-w-content mx-auto px-6 py-12 border-b border-border-soft">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-montserrat font-bold text-forest text-lg mb-1">All Private</p>
            <p className="text-ink text-sm">Your group only. No shared departures.</p>
          </div>
          <div>
            <p className="font-montserrat font-bold text-forest text-lg mb-1">Fully Customisable</p>
            <p className="text-ink text-sm">These routes are starting points. Most trips get adjusted before departure.</p>
          </div>
          <div>
            <p className="font-montserrat font-bold text-forest text-lg mb-1">Based in Arusha</p>
            <p className="text-ink text-sm">Direct contact with the guide who runs your safari.</p>
          </div>
        </div>
      </section>

      {/* Itinerary Grid */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        {/* 7-day featured callout */}
        <div className="mb-10 bg-forest/5 border border-forest/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="text-eyebrow uppercase text-orange font-montserrat font-semibold text-xs mb-1">Most searched itinerary</p>
            <h2 className="font-montserrat font-bold text-xl text-forest">7-Day Tanzania Safari — Tarangire, Serengeti, Ngorongoro</h2>
            <p className="text-sm text-ink/70 mt-1">The standard Northern Circuit. Day-by-day schedule with exact drive times, park fees, and what you see each day.</p>
          </div>
          <Link
            href="/7-day-tanzania-safari-itinerary"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-forest text-cream font-montserrat font-semibold px-6 py-3 hover:bg-forest/90 transition-colors"
          >
            View itinerary <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary) => {
            const category = itineraryCategories[itinerary.slug]
            return (
              <article key={itinerary.slug} className="border border-border-soft bg-white">
                <div className="aspect-[4/3] bg-forest overflow-hidden">
                  {itinerary.heroImage ? (
                    <Image
                      src={itinerary.heroImage.src}
                      alt={itinerary.heroImage.alt}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-forest-dark">
                      <span className="text-cream/40 text-sm font-inter">{itinerary.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1">
                      {itinerary.duration}
                    </span>
                    {category && (
                      <span className="inline-block border border-forest text-forest text-xs font-montserrat font-semibold px-3 py-1">
                        {category}
                      </span>
                    )}
                  </div>
                  <h2 className="font-montserrat font-bold text-[22px] text-forest mb-1">
                    {itinerary.title}
                  </h2>
                  <p className="text-sm text-ink/70 mb-3">
                    {itinerary.parks} · {itinerary.price}
                  </p>
                  <p className="text-body-mobile text-ink mb-5 line-clamp-3">
                    {itinerary.description}
                  </p>
                  <Link
                    href={`/itineraries/${itinerary.slug}`}
                    className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                  >
                    View Itinerary
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Help choosing */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">NOT SURE WHERE TO START</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                The right itinerary depends on three things.
              </h2>
              <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
                <p>
                  <strong className="text-forest">How many days you have.</strong> Five days covers the core parks, tightly. Eight days gives you real time in each. Ten or more days lets you add the southern circuit or a beach leg.
                </p>
                <p>
                  <strong className="text-forest">When you are travelling.</strong> January and February put you at Ndutu for calving season, the best predator viewing in Africa. June through October is the dry season across all parks: short grass, concentrated wildlife, reliable game drives. November and December are underrated, green and quiet.
                </p>
                <p>
                  <strong className="text-forest">What you most want to see.</strong> Great Migration crossings (August-October, northern Serengeti). Elephant herds (dry season, Tarangire). Black rhino (year-round, Ngorongoro). Wild dog (dry season, Ruaha). These are not the same trip.
                </p>
              </div>
            </div>
            <div className="bg-forest text-cream p-8">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Tell us what matters
              </h3>
              <p className="text-cream/80 mb-6">
                Send your dates, rough budget, and what you most want to see. We will reply with a route that fits, not the standard template.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-cream text-forest font-montserrat font-semibold px-6 py-4 text-center hover:bg-cream/90 transition-colors"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
