import { Metadata } from "next"
import Link from "next/link"
import { getAllItineraries, sevenDayItinerary } from "@/lib/data/itineraries"
import { ItinerariesGrid, GridItem } from "@/components/itineraries-grid"

export const metadata: Metadata = {
  title: "Tanzania Safari Itineraries | Private Tours from Arusha",
  description:
    "Private Tanzania safari itineraries from 5 to 11 days. Northern circuit, calving season, honeymoon, family, and Great Migration. All private, from Arusha.",
  alternates: { canonical: "https://www.jumbosafaris.com/itineraries" },
  openGraph: {
    title: "Tanzania Safari Itineraries | Jumbo Safaris",
    description:
      "Private Tanzania safari itineraries from 5 to 11 days. Northern circuit, calving season, honeymoon, family, and Great Migration routes.",
    url: "https://www.jumbosafaris.com/itineraries",
  },
}

const itineraryMeta: Record<string, { badge: string; tags: string[] }> = {
  "8-day-classic-tanzania-safari": { badge: "Most Popular", tags: ["classic"] },
  "7-day": { badge: "Most Searched", tags: ["short", "classic"] },
  "5-day-northern-circuit": { badge: "Short Trip", tags: ["short"] },
  "great-migration-safari": { badge: "Bucket List", tags: ["seasonal", "extended"] },
  "calving-season-safari": { badge: "Seasonal", tags: ["seasonal", "short"] },
  "family-safari": { badge: "Family", tags: ["family", "classic"] },
  "honeymoon-tanzania-zanzibar": { badge: "Honeymoon", tags: ["honeymoon", "extended"] },
  "11-day-tanzania-zanzibar": { badge: "Safari + Beach", tags: ["extended"] },
}

export default function ItinerariesPage() {
  const regularItineraries = getAllItineraries()

  // Build ordered list: 8-day first, then 7-day, then remaining sorted by fromPrice ascending
  const sevenDayItem: GridItem = {
    itinerary: sevenDayItinerary,
    href: "/7-day-tanzania-safari-itinerary",
    badge: "Most Searched",
    tags: ["short", "classic"],
  }

  const ordered = [
    "5-day-northern-circuit",
    "8-day-classic-tanzania-safari",
    "calving-season-safari",
    "great-migration-safari",
    "family-safari",
    "11-day-tanzania-zanzibar",
    "honeymoon-tanzania-zanzibar",
  ]

  const regularItems: GridItem[] = ordered
    .map((slug) => {
      const itin = regularItineraries.find((i) => i.slug === slug)
      if (!itin) return null
      const meta = itineraryMeta[slug] ?? { badge: "Safari", tags: [] }
      return { itinerary: itin, href: `/itineraries/${slug}`, ...meta }
    })
    .filter((x): x is GridItem => x !== null)

  // Order: 5-day, 7-day, 8-day, then the rest
  const items: GridItem[] = [
    regularItems[0], // 5-day
    sevenDayItem,    // 7-day
    regularItems[1], // 8-day
    ...regularItems.slice(2),
  ]

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-cream">
        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-24">
          <div className="max-w-content mx-auto px-6">
            <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
              Tanzania Safari Itineraries
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              Eight routes, all private. From a 5-day first safari to an 11-day circuit with Zanzibar. Every itinerary runs with your group only, your vehicle, your guide.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="max-w-content mx-auto px-6 py-10 border-b border-border-soft">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-montserrat font-bold text-forest text-lg mb-1">All Private</p>
              <p className="text-ink text-sm">Your group only. No shared departures.</p>
            </div>
            <div>
              <p className="font-montserrat font-bold text-forest text-lg mb-1">Fully Customisable</p>
              <p className="text-ink text-sm">These are starting points. Most trips get adjusted before departure.</p>
            </div>
            <div>
              <p className="font-montserrat font-bold text-forest text-lg mb-1">Based in Arusha</p>
              <p className="text-ink text-sm">Direct contact with the guide who runs your safari.</p>
            </div>
          </div>
        </section>

        {/* Itinerary Grid with Filters */}
        <section className="max-w-content mx-auto px-6 py-16 md:py-24">
          <ItinerariesGrid items={items} />
        </section>

        {/* Help choosing */}
        <section className="bg-white border-t border-border-soft py-16 md:py-24">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Not sure where to start</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  The right itinerary depends on three things.
                </h2>
                <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
                  <p>
                    <strong className="text-forest">How many days you have.</strong> Five days covers the core parks, tightly. Eight days gives you real time in each. Ten or more lets you add a beach leg or the northern Serengeti.
                  </p>
                  <p>
                    <strong className="text-forest">When you are travelling.</strong> January and February put you at Ndutu for calving season, the best predator viewing in Africa. June through October is the dry season: short grass, concentrated wildlife, reliable game drives. November and December are underrated, green and quiet.
                  </p>
                  <p>
                    <strong className="text-forest">What you most want to see.</strong> Great Migration crossings (August-October, northern Serengeti). Elephant herds (dry season, Tarangire). Black rhino (year-round, Ngorongoro). These are not the same trip.
                  </p>
                </div>
              </div>
              <div className="bg-forest text-cream p-8">
                <h3 className="font-montserrat font-bold text-xl mb-4">Tell us what matters</h3>
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
