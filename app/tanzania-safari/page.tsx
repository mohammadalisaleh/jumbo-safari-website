import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageCircle, Shield, Users, Star, Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania Safari | Private Guided Safari Tours",
  description:
    "Plan your Tanzania safari with Jumbo Safaris. Private guided tours to the Serengeti, Ngorongoro Crater, and Tarangire from Arusha. Tailor-made itineraries for every budget.",
  alternates: { canonical: "https://jumbosafaris.com/tanzania-safari" },
  openGraph: {
    title: "Tanzania Safari | Private Guided Safari Tours | Jumbo Safaris",
    description:
      "Plan your Tanzania safari with Jumbo Safaris. Private guided tours to the Serengeti, Ngorongoro Crater, and Tarangire from Arusha.",
    url: "https://jumbosafaris.com/tanzania-safari",
  },
}

const featuredItineraries = [
  {
    title: "8-Day Classic Tanzania Safari",
    slug: "8-day-classic-tanzania-safari",
    duration: "8 Days",
    description:
      "Experience the best of the Northern Circuit with game drives in Tarangire, Serengeti, and Ngorongoro Crater.",
    price: "From $3,200 per person",
  },
  {
    title: "Calving Season Safari",
    slug: "calving-season-safari",
    duration: "7 Days",
    description:
      "Witness the miracle of birth on the Serengeti plains during the annual wildebeest calving season.",
    price: "From $2,800 per person",
  },
  {
    title: "Honeymoon Tanzania & Zanzibar",
    slug: "honeymoon-tanzania-zanzibar",
    duration: "11 Days",
    description:
      "Romance meets adventure with safari game drives followed by pristine beaches in Zanzibar.",
    price: "From $5,500 per person",
  },
]

const nationalParks = [
  {
    name: "Serengeti",
    slug: "serengeti",
    description: "Home to the Great Migration and endless plains",
  },
  {
    name: "Ngorongoro Crater",
    slug: "ngorongoro-crater",
    description: "The world's largest intact volcanic caldera",
  },
  {
    name: "Tarangire",
    slug: "tarangire",
    description: "Ancient baobabs and massive elephant herds",
  },
  {
    name: "Lake Manyara",
    slug: "lake-manyara",
    description: "Tree-climbing lions and flamingo-lined shores",
  },
]

const faqs = [
  {
    question: "How much does a Tanzania safari cost?",
    answer:
      "Tanzania safari costs range from $300 to $1,000+ per person per day depending on accommodation level, season, and itinerary length. A mid-range 8-day private safari typically costs between $3,000 and $5,000 per person. Luxury options start from $8,000 per person.",
  },
  {
    question: "How many days do I need for a Tanzania safari?",
    answer:
      "A minimum of 6 days is recommended to see the Northern Circuit properly. 8 days is the sweet spot — enough time for Tarangire, Serengeti, and Ngorongoro without feeling rushed. 10-12 days allows for a more relaxed pace or addition of Zanzibar.",
  },
  {
    question: "Is Tanzania safe for safari?",
    answer:
      "Tanzania is one of Africa's safest safari destinations. The national parks are well-managed, roads are navigable, and the tourism infrastructure is mature. Jumbo Safaris handles all logistics, accommodation, and transport so you travel with complete peace of mind.",
  },
  {
    question: "What is the best Tanzania safari for first-timers?",
    answer:
      "The 8-Day Classic Tanzania Safari is our most recommended itinerary for first-time visitors. It covers the three most iconic destinations — Tarangire, Serengeti, and Ngorongoro Crater — at a comfortable pace with a private guide.",
  },
  {
    question: "Do I need vaccinations for Tanzania?",
    answer:
      "Yellow fever vaccination is required if arriving from a yellow fever endemic country. Hepatitis A, typhoid, and malaria prophylaxis are strongly recommended. Consult your doctor or travel clinic at least 6-8 weeks before departure.",
  },
]

const trustSignals = [
  { icon: Shield, text: "TATO Licensed Operator" },
  { icon: Users, text: "Private Guides Only" },
  { icon: Star, text: "5-Star TripAdvisor Rated" },
  { icon: Calendar, text: "Tailor-Made Itineraries" },
  { icon: MapPin, text: "Arusha-Based Team" },
]

export default function TanzaniaSafariPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Tanzania Safari
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 mb-8">
              The world&apos;s greatest wildlife destination. Experienced privately, designed around
              you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/itineraries/8-day-classic-tanzania-safari"
                className="bg-cream text-forest font-montserrat font-semibold px-7 py-4 hover:bg-cream/90 transition-colors inline-block"
              >
                View Itineraries
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-cream font-montserrat font-semibold px-7 py-4 border-[1.5px] border-cream hover:bg-cream/10 transition-colors inline-block"
              >
                Plan Your Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">ABOUT TANZANIA SAFARI</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
            Why Tanzania for Your Safari?
          </h2>

          <div className="max-w-prose space-y-6 text-body-mobile md:text-body-desktop text-ink">
            <p>
              Tanzania stands as Africa&apos;s premier safari destination, home to the legendary
              Serengeti, the awe-inspiring Ngorongoro Crater, and the elephant-rich Tarangire
              National Park. With 38% of its land protected as national parks and conservation
              areas, Tanzania offers unparalleled wildlife viewing in some of the most pristine
              wilderness remaining on Earth.
            </p>
            <p>
              Why choose a private safari over a group tour? The difference is transformative.
              With your own dedicated guide and vehicle, you set the pace. Want to spend an
              extra hour watching a leopard in a sausage tree? Done. Prefer early starts and
              long bush lunches? Arranged. Private safaris mean flexibility, personalised
              attention, and an experience tailored entirely to your interests.
            </p>
            <p>
              Why book with a local Arusha-based operator like Jumbo Safaris? Because local
              knowledge matters. Our guides grew up in the shadow of the Serengeti. They know
              the bush by instinct, the best lodges by reputation, and the hidden corners of
              each park that group tours never reach. When you book with us, you&apos;re
              supporting a Tanzanian business and getting the real safari experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">OUR SAFARIS</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Popular Tanzania Safari Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <article key={itinerary.slug} className="border border-border-soft bg-cream">
                <div className="aspect-[4/3] bg-forest flex items-center justify-center">
                  <p className="text-cream/50 text-sm">Safari imagery</p>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3">
                    {itinerary.duration}
                  </span>
                  <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                    {itinerary.title}
                  </h3>
                  <p className="text-body-mobile text-ink mb-4 line-clamp-2">
                    {itinerary.description}
                  </p>
                  <p className="text-caption text-muted mb-4">{itinerary.price}</p>
                  <Link
                    href={`/itineraries/${itinerary.slug}`}
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

      {/* National Parks Strip */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">EXPLORE</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop">
              Tanzania&apos;s Greatest National Parks
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {nationalParks.map((park) => (
              <Link
                key={park.slug}
                href={`/national-parks/${park.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] bg-forest-dark mb-4 flex items-center justify-center">
                  <p className="text-cream/30 text-xs">Park imagery</p>
                </div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-cream mb-1 group-hover:text-orange transition-colors">
                  {park.name}
                </h3>
                <p className="text-sm text-cream/80 mb-2">{park.description}</p>
                <span className="inline-flex items-center text-orange font-semibold text-sm group-hover:underline">
                  Explore
                  <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Tanzania Safari Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border-soft pb-6 last:border-0">
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-2">
                  {faq.question}
                </h3>
                <p className="text-ink">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Ready to Plan Your Tanzania Safari?
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-prose mx-auto mb-8">
            Tell us your dates, budget, and dream experience. We&apos;ll build your itinerary
            within 24 hours.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
            >
              Start Planning
            </Link>
            <a
              href="https://wa.me/255742789292"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-orange transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Or WhatsApp us directly: +255 742 789 292</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
