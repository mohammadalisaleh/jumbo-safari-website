import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, X, ArrowRight, ChevronRight } from "lucide-react"
import { getItinerary, getAllItineraries } from "@/lib/data/itineraries"
import { InquiryForm } from "@/components/inquiry-form"
import { ItineraryAccordion } from "@/components/itinerary-accordion"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const itinerary = getItinerary(slug)

  if (!itinerary) {
    return {
      title: "Itinerary Not Found",
    }
  }

  return {
    title: itinerary.title,
    description: itinerary.description,
    alternates: { canonical: `https://jumbosafaris.com/itineraries/${slug}` },
    openGraph: {
      title: itinerary.title,
      description: itinerary.description,
      url: `https://jumbosafaris.com/itineraries/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const itineraries = getAllItineraries()
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }))
}

export default async function ItineraryPage({ params }: PageProps) {
  const { slug } = await params
  const itinerary = getItinerary(slug)

  if (!itinerary) {
    notFound()
  }

  const allItineraries = getAllItineraries().filter((i) => i.slug !== slug).slice(0, 3)

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: itinerary.title,
    description: itinerary.description,
    touristType: "Wildlife Safari",
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.days.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Day ${day.day} — ${day.title}`,
      })),
    },
    offers: {
      "@type": "Offer",
      price: itinerary.price.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Jumbo Safaris",
      url: "https://jumbosafaris.com",
      telephone: "+255742789292",
      email: "hello@jumbosafaris.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arusha",
        addressCountry: "TZ",
      },
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itinerary.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/itineraries" className="hover:text-forest transition-colors">
              Itineraries
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-forest">{itinerary.title}</span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="max-w-content mx-auto px-6 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Left Column - Main Content */}
            <div>
              {/* Header */}
              <header className="mb-8">
                <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop text-forest mb-4">
                  {itinerary.title}
                </h1>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
                    {itinerary.duration}
                  </span>
                  <span className="bg-forest text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
                    {itinerary.parks}
                  </span>
                  <span className="bg-border-soft text-ink text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
                    {itinerary.price}
                  </span>
                  <span className="bg-border-soft text-ink text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
                    {itinerary.season}
                  </span>
                </div>

                {/* Hero Image Placeholder */}
                <div className="aspect-[16/9] bg-forest flex items-center justify-center mb-6">
                  <p className="text-cream/50">Safari imagery</p>
                </div>

                {/* Lead Paragraph */}
                <p className="text-lead-mobile md:text-lead-desktop text-ink">
                  {itinerary.leadParagraph}
                </p>
              </header>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                  Safari Overview
                </h2>
                <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
                  {itinerary.overview}
                </p>

                {/* Quick Facts Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white border border-border-soft p-6">
                  {Object.entries(itinerary.quickFacts).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm text-muted uppercase tracking-wide mb-1">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </dt>
                      <dd className="font-semibold text-forest">{value}</dd>
                    </div>
                  ))}
                </div>
              </section>

              {/* Day-by-Day Itinerary */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                  Your Itinerary
                </h2>
                <ItineraryAccordion days={itinerary.days} />
              </section>

              {/* Included / Excluded */}
              <section className="mb-12">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                  What&apos;s Included
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-montserrat font-semibold text-forest mb-3">Included</h3>
                    <ul className="space-y-2">
                      {itinerary.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-ink">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-forest mb-3">Not Included</h3>
                    <ul className="space-y-2">
                      {itinerary.excluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-ink">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                  Common Questions
                </h2>
                <div className="space-y-6">
                  {itinerary.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border-soft pb-6 last:border-0">
                      <h3 className="font-montserrat font-semibold text-forest mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-ink">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <aside className="lg:self-start lg:sticky lg:top-24">
              <InquiryForm itineraryTitle={itinerary.title} />
            </aside>
          </div>
        </div>

        {/* Related Itineraries */}
        <section className="bg-white border-t border-border-soft py-16 md:py-24">
          <div className="max-w-content mx-auto px-6">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest text-center mb-12">
              You May Also Like
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {allItineraries.map((item) => (
                <article key={item.slug} className="border border-border-soft bg-cream">
                  <div className="aspect-[4/3] bg-forest flex items-center justify-center">
                    <p className="text-cream/50 text-sm">Safari imagery</p>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3">
                      {item.duration}
                    </span>
                    <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-caption text-muted mb-4">{item.price}</p>
                    <Link
                      href={`/itineraries/${item.slug}`}
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
      </article>
    </>
  )
}
