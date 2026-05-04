import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, ArrowRight } from "lucide-react"
import { getNationalPark, getAllNationalParks } from "@/lib/data/national-parks"
import { getItinerary } from "@/lib/data/itineraries"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const park = getNationalPark(slug)

  if (!park) {
    return {
      title: "Park Not Found",
    }
  }

  return {
    title: `${park.name} Safari`,
    description: park.description,
    alternates: { canonical: `https://jumbosafaris.com/national-parks/${slug}` },
    openGraph: {
      title: `${park.name} Safari | Jumbo Safaris`,
      description: park.description,
      url: `https://jumbosafaris.com/national-parks/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const parks = getAllNationalParks()
  return parks.map((park) => ({
    slug: park.slug,
  }))
}

export default async function NationalParkPage({ params }: PageProps) {
  const { slug } = await params
  const park = getNationalPark(slug)

  if (!park) {
    notFound()
  }

  const relatedItineraries = park.relatedItineraries
    .map((slug) => getItinerary(slug))
    .filter(Boolean)
    .slice(0, 3)

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: park.name,
    description: park.description,
    geo: {
      "@type": "GeoCoordinates",
      latitude: park.slug === "serengeti" ? -2.3333 : -3.1833,
      longitude: park.slug === "serengeti" ? 34.8333 : 35.5833,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Tanzania",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/national-parks" className="hover:text-forest transition-colors">
              National Parks
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-forest">{park.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-cream py-16 md:py-24">
          <div className="max-w-content mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
                  {park.name}
                </h1>
                <p className="text-lead-mobile md:text-lead-desktop text-cream/90 mb-6">
                  {park.tagline}
                </p>
                <Link
                  href="/contact"
                  className="bg-cream text-forest font-montserrat font-semibold px-7 py-4 hover:bg-cream/90 transition-colors inline-block"
                >
                  Plan a Safari Here
                </Link>
              </div>
              <div className="aspect-[4/3] bg-forest-dark flex items-center justify-center">
                <p className="text-cream/50">Park imagery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">
            {/* Left Column - Main Content */}
            <div>
              {/* About Section */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  About {park.name}
                </h2>
                <div className="space-y-4">
                  {park.about.map((paragraph, index) => (
                    <p key={index} className="text-body-mobile md:text-body-desktop text-ink">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Wildlife Section */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Wildlife in {park.name.replace(" National Park", "").replace(" Crater", "")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {park.wildlife.map((animal) => {
                    const animalEmojis: Record<string, string> = {
                      "Lion": "🦁",
                      "Elephant": "🐘",
                      "Leopard": "🐆",
                      "Cheetah": "🐆",
                      "Wildebeest": "🦬",
                      "Zebra": "🦓",
                      "Black Rhino": "🦏",
                      "Flamingo": "🦩",
                      "Hippo": "🦛",
                      "Hyena": "🐕",
                      "Buffalo": "🦬",
                      "Python": "🐍",
                      "Oryx": "🦌",
                      "Tree-climbing Lion": "🦁",
                      "Baboon": "🐒",
                      "Blue Monkey": "🐒",
                    }
                    const emoji = animalEmojis[animal.name] || "🦁"
                    return (
                      <div
                        key={animal.name}
                        className="bg-white border border-border-soft p-4"
                      >
                        <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mb-3">
                          <span className="text-2xl" role="img" aria-label={animal.name}>
                            {emoji}
                          </span>
                        </div>
                        <h3 className="font-montserrat font-semibold text-forest mb-1">
                          {animal.name}
                        </h3>
                        <p className="text-sm text-muted">{animal.description}</p>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Great Migration Section (if applicable) */}
              {park.migration && (
                <section className="mb-12">
                  <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                    The Great Migration
                  </h2>
                  <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
                    {park.migration.description}
                  </p>
                  <div className="bg-white border border-border-soft">
                    {park.migration.months.map((item, index) => (
                      <div
                        key={item.month}
                        className={`p-4 ${
                          index < park.migration!.months.length - 1
                            ? "border-b border-border-soft"
                            : ""
                        }`}
                      >
                        <h3 className="font-montserrat font-semibold text-forest">
                          {item.month}
                        </h3>
                        <p className="text-sm text-ink">{item.activity}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Best Time to Visit */}
              <section>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Best Time to Visit {park.name.replace(" National Park", "").replace(" Crater", "")}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-border-soft">
                    <thead>
                      <tr className="bg-forest text-cream">
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">
                          Months
                        </th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">
                          Weather
                        </th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">
                          Wildlife
                        </th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">
                          Crowds
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {park.bestTimeToVisit.map((row, index) => (
                        <tr
                          key={row.month}
                          className={index % 2 === 0 ? "bg-white" : "bg-cream"}
                        >
                          <td className="px-4 py-3 font-semibold text-forest">
                            {row.month}
                          </td>
                          <td className="px-4 py-3 text-ink">{row.weather}</td>
                          <td className="px-4 py-3 text-ink">{row.wildlife}</td>
                          <td className="px-4 py-3 text-ink">{row.crowds}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <aside className="lg:self-start lg:sticky lg:top-24">
              <div className="bg-white border border-border-soft p-6 mb-6">
                <h3 className="font-montserrat font-bold text-lg text-forest mb-4">
                  Quick Facts
                </h3>
                <dl className="space-y-3">
                  {Object.entries(park.quickFacts).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm text-muted uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </dt>
                      <dd className="font-semibold text-forest">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-forest text-cream p-6">
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Plan Your Safari
                </h3>
                <p className="text-sm text-cream/80 mb-4">
                  Ready to experience {park.name.replace(" National Park", "").replace(" Crater", "")}? Let us create your perfect itinerary.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-cream text-forest font-montserrat font-semibold px-6 py-3 text-center hover:bg-cream/90 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Itineraries */}
        {relatedItineraries.length > 0 && (
          <section className="bg-white border-t border-border-soft py-16 md:py-24">
            <div className="max-w-content mx-auto px-6">
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest text-center mb-12">
                Safari Itineraries Including {park.name.replace(" National Park", "").replace(" Crater", "")}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedItineraries.map((itinerary) => (
                  <article
                    key={itinerary!.slug}
                    className="border border-border-soft bg-cream"
                  >
                    <div className="aspect-[4/3] bg-forest flex items-center justify-center">
                      <p className="text-cream/50 text-sm">Safari imagery</p>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3">
                        {itinerary!.duration}
                      </span>
                      <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                        {itinerary!.title}
                      </h3>
                      <p className="text-caption text-muted mb-4">{itinerary!.price}</p>
                      <Link
                        href={`/itineraries/${itinerary!.slug}`}
                        className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                      >
                        View Itinerary
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  )
}
