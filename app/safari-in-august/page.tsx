import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { getMonthPage } from "@/lib/data/months"
import { getItinerary } from "@/lib/data/itineraries"

const page = getMonthPage("august")!

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "https://www.jumbosafaris.com/safari-in-august" },
  openGraph: {
    title: `${page.title} | Jumbo Safaris`,
    description: page.description,
    url: "https://www.jumbosafaris.com/safari-in-august",
  },
}

const ratingColors: Record<string, string> = {
  excellent: "bg-forest text-cream",
  good: "bg-orange text-cream",
  fair: "bg-ink/20 text-ink",
}

const ratingLabels: Record<string, string> = {
  excellent: "Excellent",
  good: "Good",
  fair: "Fair",
}

export default function SafariInAugustPage() {
  const relatedItineraries = page.relatedItineraries
    .map((slug) => getItinerary(slug))
    .filter(Boolean)
    .slice(0, 3)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: {
      "@type": "Organization",
      name: "Jumbo Safaris",
      url: "https://www.jumbosafaris.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Jumbo Safaris",
      url: "https://www.jumbosafaris.com",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Best Time to Visit", item: "https://www.jumbosafaris.com/guides/best-time-to-visit-tanzania" },
      { "@type": "ListItem", position: 3, name: page.title, item: "https://www.jumbosafaris.com/safari-in-august" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink/70">
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides/best-time-to-visit-tanzania" className="hover:text-forest transition-colors">
              Best Time to Visit
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-forest">{page.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-cream py-16 md:py-24">
          <div className="max-w-content mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-6">
                  {page.title}
                </h1>
                <p className="text-lead-mobile md:text-lead-desktop text-cream/90 mb-8">
                  {page.intro}
                </p>
                <Link
                  href="/contact"
                  className="bg-cream text-forest font-montserrat font-semibold px-7 py-4 hover:bg-cream/90 transition-colors inline-block"
                >
                  Plan an {page.month} Safari
                </Link>
              </div>
              <div className="aspect-[4/3] bg-forest-dark overflow-hidden">
                {page.heroImage ? (
                  <Image
                    src={page.heroImage.src}
                    alt={page.heroImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-cream/50">Safari imagery</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 [&>*]:min-w-0">
            {/* Left Column */}
            <div>
              {/* Wildlife Conditions by Park */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Wildlife Conditions in {page.month} by Park
                </h2>
                <div className="space-y-4">
                  {page.wildlifeConditions.map((item, index) => (
                    <div key={index} className="bg-white border border-border-soft p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-montserrat font-semibold text-forest text-lg">
                          {item.park}
                        </h3>
                        <span
                          className={`shrink-0 text-xs font-montserrat font-semibold px-3 py-1 ${ratingColors[item.rating]}`}
                        >
                          {ratingLabels[item.rating]}
                        </span>
                      </div>
                      <p className="text-ink text-body-mobile md:text-body-desktop">
                        {item.conditions}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Week-by-Week Progression */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Week-by-Week: {page.month} in the Field
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-border-soft">
                    <thead>
                      <tr className="bg-forest text-cream">
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">Week</th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">What&apos;s Happening</th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">Best Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.weeklyProgression.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-cream"}>
                          <td className="px-4 py-3 font-semibold text-forest whitespace-nowrap">
                            {row.week}
                          </td>
                          <td className="px-4 py-3 text-ink">{row.activity}</td>
                          <td className="px-4 py-3 text-ink text-sm">{row.bestLocation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Weather */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Weather in {page.month} by Location
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-border-soft">
                    <thead>
                      <tr className="bg-forest text-cream">
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">Location</th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">Temperature</th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">Rainfall</th>
                        <th className="px-4 py-3 text-left font-montserrat font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.weather.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-cream"}>
                          <td className="px-4 py-3 font-semibold text-forest">{row.location}</td>
                          <td className="px-4 py-3 text-ink">{row.tempRange}</td>
                          <td className="px-4 py-3 text-ink">{row.rainfall}</td>
                          <td className="px-4 py-3 text-sm text-ink/70">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Additional Sections */}
              {page.additionalSections.map((section, index) => (
                <section key={index} className="mb-12">
                  <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                    {section.heading}
                  </h2>
                  {section.body.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-body-mobile md:text-body-desktop text-ink mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              {/* Sample Itineraries */}
              {page.sampleItineraries.length > 0 && (
                <section className="mb-12">
                  <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                    {page.month} Itineraries
                  </h2>
                  <div className="space-y-4">
                    {page.sampleItineraries.map((itinerary, index) => (
                      <div key={index} className="bg-white border border-border-soft p-6">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-montserrat font-semibold text-forest text-lg">
                            {itinerary.title}
                          </h3>
                          <span className="shrink-0 font-montserrat font-bold text-orange">
                            {itinerary.price}
                          </span>
                        </div>
                        <p className="text-sm text-ink mb-1">{itinerary.duration}</p>
                        <p className="text-sm text-ink mb-3">{itinerary.parks}</p>
                        <p className="text-ink text-body-mobile md:text-body-desktop mb-4">
                          {itinerary.description}
                        </p>
                        {itinerary.slug ? (
                          <Link
                            href={`/itineraries/${itinerary.slug}`}
                            className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                          >
                            View Full Itinerary
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ) : (
                          <Link
                            href="/contact"
                            className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                          >
                            Get a Quote
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Common Questions: Tanzania Safari in {page.month}
                </h2>
                <div className="space-y-6">
                  {page.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border-soft pb-6 last:border-0">
                      <h3 className="font-montserrat font-semibold text-forest mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-ink text-body-mobile md:text-body-desktop">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:self-start lg:sticky lg:top-24">
              {/* Highlights */}
              <div className="bg-white border border-border-soft p-6 mb-6">
                <h3 className="font-montserrat font-bold text-lg text-forest mb-4">
                  {page.month} Highlights
                </h3>
                <ul className="space-y-3">
                  {page.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 shrink-0 bg-orange" />
                      <span className="text-sm text-ink">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="bg-forest text-cream p-6 mb-6">
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Plan an {page.month} Safari
                </h3>
                <p className="text-sm text-cream/80 mb-4">
                  {page.month} is the hardest month to book. Get your dates locked in with a free itinerary from Arusha.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-cream text-forest font-montserrat font-semibold px-6 py-3 text-center hover:bg-cream/90 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Related Itineraries */}
              {relatedItineraries.length > 0 && (
                <div className="bg-white border border-border-soft p-6">
                  <h3 className="font-montserrat font-bold text-lg text-forest mb-4">
                    {page.month} Itineraries
                  </h3>
                  <div className="space-y-4">
                    {relatedItineraries.map((itinerary) => (
                      <div key={itinerary!.slug} className="border-b border-border-soft pb-4 last:border-0">
                        <p className="font-montserrat font-semibold text-forest text-sm mb-1">
                          {itinerary!.title}
                        </p>
                        <p className="text-xs text-ink/70 mb-2">{itinerary!.duration} · {itinerary!.price}</p>
                        <Link
                          href={`/itineraries/${itinerary!.slug}`}
                          className="inline-flex items-center text-sm text-forest font-semibold hover:text-orange transition-colors group"
                        >
                          View
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
