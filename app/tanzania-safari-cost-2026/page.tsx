import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania Safari Cost 2026: Real Prices",
  description:
    "2026 Tanzania safari costs: $250-$1,500/person/day by tier. Park fees, lodge costs, tipping, and what drives the price up or down.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-safari-cost-2026" },
  openGraph: {
    title: "Tanzania Safari Cost 2026 | Real Prices & Park Fees",
    description:
      "Real 2026 Tanzania safari costs: what you pay, where it goes, and what agents hide from you.",
    url: "https://www.jumbosafaris.com/tanzania-safari-cost-2026",
  },
}

const faqs = [
  {
    question: "How much does a Tanzania safari cost in 2026?",
    answer:
      "Budget safaris run $250–$400 per person per day. Mid-range is $400–$700/day. Luxury is $700–$1,500+/day. A private 8-day safari for two people at mid-range lands between $6,400 and $9,600 total. That covers the vehicle, guide, lodges, park fees, and all meals inside the parks.",
  },
  {
    question: "What are Tanzania national park fees in 2026?",
    answer:
      "Ngorongoro Conservation Area charges two separate fees: entry ($71/adult/day) and concession ($59/adult/day), totalling $130/adult/day. Tarangire is $59 entry plus $59 concession per adult per day. The Ngorongoro Crater descent costs $295 per vehicle per descent, not per day. No VAT applies to park fees. Cash is not accepted at any gate; card only. Your guide handles all payments.",
  },
  {
    question: "What is not included in a Tanzania safari quote?",
    answer:
      "Most quotes exclude tips, international flights, travel insurance, Zanzibar accommodation, personal spending, and add-ons like balloon rides ($599/person in Serengeti). Tipping is expected and not optional: budget $25 per day for your guide and $5–$7 per day per person for lodge staff. On an 8-day safari that is $200+ per person that never appears in any quote.",
  },
  {
    question: "Why do Tanzania safari prices vary so much for the same dates?",
    answer:
      "Three reasons. First, accommodation tier matters enormously: a basic tented camp costs $150–$200/person/night; a private luxury lodge is $700–$1,200/night. Second, international booking agents add 30–300% on top of what Arusha operators charge. Third, private vehicles cost more than shared group vans, but not as much as most people assume. The private premium at mid-range is usually $200–$400 per person on a full itinerary.",
  },
  {
    question: "Are safari prices cheaper if I book directly with a Tanzanian operator?",
    answer:
      "Yes, consistently. An overseas agent selling the same 8-day itinerary charges $2,000–$5,000 more than an Arusha-based operator quoting the same lodges and parks. The agent fee is not always disclosed. Check the operator's country of registration before you book.",
  },
  {
    question: "What drives the price up in Tanzania?",
    answer:
      "Ngorongoro Crater adds cost fast: $80/person/day entry plus $295 per vehicle. The Serengeti is big and expensive to reach from Arusha (roughly a 5-hour drive or a $200–$400 charter flight per person). Zanzibar add-ons are separately priced. Hot air balloons, night drives, and walking safaris all carry surcharges. Peak season (July–October) raises lodge rates by 20–40% above green season.",
  },
  {
    question: "Can I do Tanzania safari on a budget?",
    answer:
      "Yes, but with tradeoffs. Budget safaris at $250–$350/day use tented camps with shared facilities, older vehicles, and guides who split time between multiple groups. Parks, meals, and the main sights are the same. The difference is in the vehicle quality, accommodation comfort, and guide attention. For a first safari, mid-range is a better investment than cutting to the bottom of the budget.",
  },
  {
    question: "What is the 2026 change to Tanzania park fee payments?",
    answer:
      "Cash is no longer accepted at any Tanzania national park gate. TANAPA completed a move to electronic-only payments, with Visa and Mastercard accepted at main entry points. Connectivity at remote gates can be unreliable, which is why your guide handles all payments in advance or through the operator's account. If you are self-driving, this is worth knowing: do not arrive at a gate with only cash.",
  },
]

export default function TanzaniaSafariCostPage() {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Tanzania Safari Cost 2026", item: "https://www.jumbosafaris.com/tanzania-safari-cost-2026" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink/70">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <span className="text-forest">Tanzania Safari Cost 2026</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Pricing Guide</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Tanzania Safari Cost 2026
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              A private 8-day safari for two people runs $6,400–$9,600 total at mid-range. Here is where the money goes, what agents hide, and how park fees actually work.
            </p>
          </div>
        </section>

        {/* Price Tiers */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Price Tiers</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
              What you pay per person per day
            </h2>
            <p className="text-body text-ink/80 mb-10 max-w-2xl">
              These are all-in daily rates: guide, vehicle, lodges, meals inside the parks, and park fees. International flights, tips, and personal spending are separate.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Budget */}
              <div className="border border-forest/20 p-6">
                <div className="text-eyebrow uppercase text-forest/60 font-semibold mb-2">Budget</div>
                <div className="font-montserrat font-bold text-3xl text-forest mb-1">$250–$400</div>
                <div className="text-sm text-ink/70 mb-4">per person / per day</div>
                <ul className="text-sm text-ink/80 space-y-2">
                  <li>Basic tented camps, shared facilities</li>
                  <li>Older 4WD vehicles (usually Landcruiser)</li>
                  <li>Group departures or small shared groups</li>
                  <li>All main parks accessible</li>
                  <li>Guide splitting time between groups</li>
                </ul>
              </div>

              {/* Mid-range */}
              <div className="border-2 border-forest p-6 relative">
                <div className="absolute -top-3 left-6 bg-orange text-cream text-xs font-montserrat font-bold px-3 py-1">
                  MOST POPULAR
                </div>
                <div className="text-eyebrow uppercase text-forest/60 font-semibold mb-2">Mid-Range</div>
                <div className="font-montserrat font-bold text-3xl text-forest mb-1">$400–$700</div>
                <div className="text-sm text-ink/70 mb-4">per person / per day</div>
                <ul className="text-sm text-ink/80 space-y-2">
                  <li>Permanent lodges with en-suite tents</li>
                  <li>Private vehicle for your group only</li>
                  <li>Dedicated guide, full attention</li>
                  <li>Full-board (all meals)</li>
                  <li>Flexible schedule, extended sightings</li>
                </ul>
              </div>

              {/* Luxury */}
              <div className="border border-forest/20 p-6">
                <div className="text-eyebrow uppercase text-forest/60 font-semibold mb-2">Luxury</div>
                <div className="font-montserrat font-bold text-3xl text-forest mb-1">$700–$1,500+</div>
                <div className="text-sm text-ink/70 mb-4">per person / per day</div>
                <ul className="text-sm text-ink/80 space-y-2">
                  <li>Private conservancy access</li>
                  <li>Exclusive camps (under 20 guests total)</li>
                  <li>Night drives and walking safaris</li>
                  <li>Premium sundowner setups</li>
                  <li>Private chef, custom menus</li>
                </ul>
              </div>
            </div>

            {/* Sample totals */}
            <div className="bg-forest/5 p-8">
              <h3 className="font-montserrat font-bold text-xl text-forest mb-6">Sample total costs (2 people, private safari)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Itinerary</th>
                      <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Duration</th>
                      <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Mid-Range Total</th>
                      <th className="text-left py-3 font-montserrat font-semibold text-forest">Per Person</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-3 pr-6">5-Day Northern Circuit</td>
                      <td className="py-3 pr-6">5 days</td>
                      <td className="py-3 pr-6">$4,400–$6,000</td>
                      <td className="py-3">$2,200–$3,000</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 pr-6">8-Day Classic Safari</td>
                      <td className="py-3 pr-6">8 days</td>
                      <td className="py-3 pr-6">$6,400–$9,600</td>
                      <td className="py-3">$3,200–$4,800</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 pr-6">11-Day Safari + Zanzibar</td>
                      <td className="py-3 pr-6">11 days</td>
                      <td className="py-3 pr-6">$9,000–$14,000</td>
                      <td className="py-3">$4,500–$7,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6">Calving Season (Ndutu)</td>
                      <td className="py-3 pr-6">7 days</td>
                      <td className="py-3 pr-6">$5,600–$8,400</td>
                      <td className="py-3">$2,800–$4,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-ink/70 mt-4">All figures USD. Excludes international flights, tips, travel insurance, and personal spending.</p>
            </div>
          </div>
        </section>

        {/* Park Fees */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">2026 Park Fees</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
              Tanzania national park entry fees
            </h2>
            <p className="text-cream/80 mb-10 max-w-2xl">
              These are TANAPA rates for non-resident adults. Your guide pays these at the gate. They are built into any Jumbo Safaris quote.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cream/20">
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold">Park</th>
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold">Adult/day</th>
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold">Child (5–15)/day</th>
                    <th className="text-left py-3 font-montserrat font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-cream/80">
                  <tr className="border-b border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream">Serengeti</td>
                    <td className="py-3 pr-6">$71–$83</td>
                    <td className="py-3 pr-6">$24</td>
                    <td className="py-3 text-sm">Low/peak season rate</td>
                  </tr>
                  <tr className="border-b border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream">NCA Entry Fee</td>
                    <td className="py-3 pr-6">$71.00</td>
                    <td className="py-3 pr-6">$23.60</td>
                    <td className="py-3 text-sm">Per person, per calendar day in NCA</td>
                  </tr>
                  <tr className="border-b border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream">NCA Concession Fee</td>
                    <td className="py-3 pr-6">$59.00</td>
                    <td className="py-3 pr-6">$11.80</td>
                    <td className="py-3 text-sm">Per person, per calendar day in NCA (separate fee)</td>
                  </tr>
                  <tr className="border-b border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream">Crater Service Fee</td>
                    <td className="py-3 pr-6 text-cream" colSpan={2}>$295/vehicle</td>
                    <td className="py-3 text-sm">Per descent into crater, not per day</td>
                  </tr>
                  <tr className="border-b border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream">Tarangire Entry</td>
                    <td className="py-3 pr-6">$59.00</td>
                    <td className="py-3 pr-6">$18.00</td>
                    <td className="py-3 text-sm">Per person, per calendar day</td>
                  </tr>
                  <tr className="border-b border-cream/10">
                    <td className="py-3 pr-6 font-medium text-cream">Tarangire Concession</td>
                    <td className="py-3 pr-6">$59.00</td>
                    <td className="py-3 pr-6">$11.80</td>
                    <td className="py-3 text-sm">Per person, per calendar day (separate fee)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 font-medium text-cream">Lake Manyara</td>
                    <td className="py-3 pr-6">$59.00</td>
                    <td className="py-3 pr-6">$23.60</td>
                    <td className="py-3 text-sm">Entry only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-cream/50 mt-4">No VAT applies to government park fees. Cash is not accepted at any park gate; card (Visa/Mastercard) only. Your guide handles all payments. Rates verified August 2026 via Highway Tours; subject to annual revision.</p>
          </div>
        </section>

        {/* What's included vs extra */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Included</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  What a Jumbo Safaris quote covers
                </h2>
                <ul className="space-y-3 text-ink/80">
                  {[
                    "Private 4x4 Toyota Landcruiser with pop-up roof",
                    "Dedicated guide for your group only",
                    "All park entrance fees",
                    "Full-board accommodation (all meals in parks)",
                    "Arusha hotel pickup and drop-off",
                    "All game drives",
                    "Drinking water in the vehicle",
                    "Flying doctors emergency evacuation coverage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-forest font-bold mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-eyebrow uppercase text-forest/60 font-semibold mb-3">Not Included</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  What you pay separately
                </h2>
                <ul className="space-y-3 text-ink/80">
                  {[
                    "International flights to Kilimanjaro or Dar es Salaam",
                    "Travel insurance (required)",
                    "Guide tip: $20–$25/day (standard)",
                    "Lodge staff tip: $5–$7/person/day",
                    "Hot air balloon (Serengeti): $599/person",
                    "Personal drinks and laundry",
                    "Arusha accommodation (before/after safari)",
                    "Tanzania visa: $50 for most nationalities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-orange font-bold mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The tipping problem */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">The Detail Everyone Skips</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Tipping adds more than people expect
            </h2>
            <p className="text-body text-ink/80 mb-4">
              $25/day for your guide. $5–$7/day per person for lodge staff. On an 8-day safari for two people, that is roughly $400–$500 in tips that no quote will ever show you.
            </p>
            <p className="text-body text-ink/80 mb-4">
              Tipping is not optional in Tanzania's safari industry. Guides and lodge staff earn base salaries that assume gratuities. The system is a bit broken but that is the reality on the ground.
            </p>
            <p className="text-body text-ink/80">
              Budget this in from day one. Take cash in small USD bills ($1, $5, $20). Most camp bars and shops also prefer cash.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Cost questions, answered directly
            </h2>
            <div className="max-w-3xl space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-forest/10 pb-8">
                  <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">{faq.question}</h3>
                  <p className="text-ink/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 text-center">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
              Get an itemised quote
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Tell us your dates, group size, and what you want to see. We send a line-by-line breakdown with every cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 font-montserrat font-bold hover:bg-orange/90 transition-colors"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/255742789292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream text-cream px-8 py-4 font-montserrat font-bold hover:bg-cream/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
