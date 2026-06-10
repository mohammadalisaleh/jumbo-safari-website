import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Private Tanzania Safari Tours",
  description:
    "Private guided Tanzania safari tours from Arusha. One vehicle, one guide, your group only. Serengeti, Ngorongoro, Tarangire, Lake Manyara.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-safari/private-tours" },
  openGraph: {
    title: "Private Tanzania Safari Tours | Jumbo Safaris",
    description:
      "Private guided Tanzania safari tours. Your group only, your vehicle, your guide. Northern circuit from Arusha.",
    url: "https://www.jumbosafaris.com/tanzania-safari/private-tours",
  },
}

const whatPrivateMeans = [
  {
    heading: "One vehicle",
    body: "You are not sharing with strangers. The Land Cruiser holds your group only. You set the pace, you decide how long to stay at a sighting, you turn around if the guide radios in something better.",
  },
  {
    heading: "One guide",
    body: "Your guide is assigned to your trip from departure to return. He knows what you want to see by the second morning. He knows when to stay quiet and when to explain. He does not repeat the same script for each group he rotates through.",
  },
  {
    heading: "Your schedule",
    body: "Morning departure is whenever you want to leave. Lunch is wherever you are in the park. The afternoon drive ends when you say so, not at 6:00pm because the group tour van has a dinner seating. On a private safari, the park closes at 6:00pm. That is the only hard constraint.",
  },
  {
    heading: "Direct communication",
    body: "You are booking with the person who built your itinerary. Not an agent in a different country, not a call centre rep with a booking reference. One line of contact. If something changes in the field, you hear about it directly.",
  },
]

const routes = [
  {
    title: "5-Day Northern Circuit",
    slug: "5-day-northern-circuit",
    parks: "Tarangire · Serengeti · Ngorongoro",
    price: "From $1,605 pp",
    description: "The shortest version that covers all three core parks. Works for tight timelines. Tarangire for the elephants, Serengeti for predators, full day on the crater floor.",
  },
  {
    title: "8-Day Classic Tanzania Safari",
    slug: "8-day-classic-tanzania-safari",
    parks: "Tarangire · Serengeti · Ngorongoro",
    price: "From $2,355 pp",
    description: "Three nights in the Serengeti, two in Tarangire, two at Ngorongoro. The route that gives each park enough time to matter.",
  },
  {
    title: "11-Day Tanzania & Zanzibar",
    slug: "11-day-tanzania-zanzibar",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    price: "From $2,990 pp",
    description: "Six nights on the northern circuit, then a flight to Zanzibar for four nights on the Indian Ocean coast.",
  },
  {
    title: "Great Migration Safari",
    slug: "great-migration-safari",
    parks: "Serengeti · Ngorongoro · Lake Manyara",
    price: "From $4,445 pp",
    description: "Ten days following the migration. Northern Serengeti and the Mara River crossings in July through October.",
  },
  {
    title: "Calving Season Safari",
    slug: "calving-season-safari",
    parks: "Ndutu · Ngorongoro",
    price: "From $2,600 pp",
    description: "January through March at Ndutu, the calving grounds. Off-road driving permitted. Best predator concentration in East Africa.",
  },
  {
    title: "Honeymoon Tanzania & Zanzibar",
    slug: "honeymoon-tanzania-zanzibar",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    price: "From $4,195 pp",
    description: "Eleven days, private throughout. Safari with couples-specific lodge setups, private crater picnic, sunset dhow on Zanzibar.",
  },
  {
    title: "Family Safari",
    slug: "family-safari",
    parks: "Tarangire · Serengeti · Ngorongoro",
    price: "From $2,355 pp",
    description: "The standard 8-day northern circuit, paced and structured for children. Minimum age 5.",
  },
]

export default function PrivateToursPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a private Tanzania safari mean?",
        acceptedAnswer: { "@type": "Answer", text: "A private safari means your group is the only one in the vehicle for the entire trip. You have one guide assigned from departure to return, you set your own schedule within park hours, and you book directly with the operator who built your itinerary. Jumbo Safaris runs no group departures." },
      },
      {
        "@type": "Question",
        name: "How much does a private Tanzania safari cost?",
        acceptedAnswer: { "@type": "Answer", text: "Private Tanzania safaris start from $2,765 per person for a 5-day northern circuit based on two adults sharing in the Comfort tier, dropping to around $1,605 per person for a group of six in green season. An 8-day classic safari is from $4,115 per person for two sharing. Prices use real lodge rates and current park fees, which are included throughout. Larger groups pay less per person because the private vehicle and guide are shared. Solo travellers pay a single supplement of approximately 30 to 40 percent on top of the per-person rate." },
      },
      {
        "@type": "Question",
        name: "What vehicle is used on a private Tanzania safari?",
        acceptedAnswer: { "@type": "Answer", text: "All Jumbo Safaris private tours use a 4x4 Toyota Land Cruiser with a pop-up roof, individual seating, and charging points for cameras and phones. The vehicle holds a maximum of six passengers. Park fees, water, and packed lunches for full-day drives are included." },
      },
      {
        "@type": "Question",
        name: "Are park fees included in private safari packages?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. All Jumbo Safaris package prices include Tanzania national park entry fees, the Ngorongoro Conservation Area fees, and the Ngorongoro Crater vehicle descent fee. These are quoted upfront with no hidden additions." },
      },
      {
        "@type": "Question",
        name: "Which parks does a private Tanzania northern circuit safari cover?",
        acceptedAnswer: { "@type": "Answer", text: "The standard northern circuit covers Tarangire National Park, the Serengeti National Park, and the Ngorongoro Conservation Area including the crater floor. Lake Manyara is added on longer itineraries. All departures are from Arusha." },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Tanzania Safari", item: "https://www.jumbosafaris.com/tanzania-safari" },
      { "@type": "ListItem", position: 3, name: "Private Tours", item: "https://www.jumbosafaris.com/tanzania-safari/private-tours" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Private Tanzania Safari Tours
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Every Jumbo Safaris departure is private. Your group, your vehicle, your guide. No shared tours.
          </p>
        </div>
      </section>

      {/* What private means */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-eyebrow uppercase text-orange mb-3">WHAT PRIVATE ACTUALLY MEANS</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest max-w-2xl">
            Every safari company says private. Here is what it means in practice.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whatPrivateMeans.map((item) => (
            <div key={item.heading} className="border border-border-soft bg-white p-6">
              <h3 className="font-montserrat font-bold text-forest text-lg mb-3">{item.heading}</h3>
              <p className="text-body-mobile text-ink">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <p className="text-eyebrow uppercase text-orange mb-3">THE VEHICLE</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Toyota Land Cruiser. Pop-up roof. High clearance.
            </h2>
            <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
              <p>
                The Toyota Land Cruiser 4x4 is the standard vehicle for East African safari for one reason: it works in every condition the northern circuit produces. Crater descent roads, Serengeti clay after rain, soft sand near the lake shore. Ground clearance matters. Pop-up roof matters because you stand to photograph, not sit with a window half-open.
              </p>
              <p>
                Every Jumbo Safaris vehicle has a pop-up roof, individual seating, and charging points for cameras and phones. The vehicle holds a maximum of six passengers, but most private trips run with two to four. At four passengers, the back row is for gear.
              </p>
              <p>
                The vehicle carries water and soft drinks on game drives. Picnic lunches are packed from the lodge for full-day drives. Nothing about the logistics requires you to plan ahead on the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <p className="text-eyebrow uppercase text-orange mb-3">PRICING</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Per person, based on two sharing.
            </h2>
            <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
              <p>
                All prices listed are per person, based on two adults sharing accommodation and a vehicle. The per-person cost decreases with more people. Solo travellers pay a single supplement (typically 30-40% on top of the per-person rate) because the vehicle, guide, and fixed park fees are the same regardless of group size.
              </p>
              <p>
                Park fees alone in Tanzania are substantial. For the northern circuit, expect $50-80 per person per day in entry fees plus the $295 Ngorongoro crater vehicle fee per descent. These are included in all Jumbo Safaris package prices and quoted upfront.
              </p>
              <p>
                The starting prices on each itinerary are based on mid-range lodges in shoulder season. Upgrade to tented camps or luxury properties, or travel in peak season (July-October), and the total increases. Contact us with your specific dates and preferred lodge tier for an accurate quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-12">
            Private Safari Routes
          </h2>
          <div className="space-y-4">
            {routes.map((route) => (
              <div key={route.slug} className="border border-border-soft bg-cream p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-montserrat font-bold text-forest text-lg">{route.title}</h3>
                    <span className="text-sm font-semibold text-orange">{route.price}</span>
                  </div>
                  <p className="text-sm text-ink/70 mb-2">{route.parks}</p>
                  <p className="text-body-mobile text-ink">{route.description}</p>
                </div>
                <Link
                  href={`/itineraries/${route.slug}`}
                  className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group whitespace-nowrap"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Ready to plan your safari?
          </h2>
          <p className="text-lead-mobile text-cream/90 max-w-prose mx-auto mb-8">
            Send your dates and what you want to see. We will build the route and quote directly.
          </p>
          <Link
            href="/contact"
            className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
