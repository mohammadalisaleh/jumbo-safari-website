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
  {
    question: "How much does a 7-day Tanzania safari cost per day?",
    answer:
      "For a couple on a private mid-range safari, plan on $500–$600 per person per day all-in. That daily figure breaks down roughly as: $130–$190 in park and concession fees, $100–$175 for the lodge with all meals, $125–$150 as your share of the vehicle, guide, and fuel, and the remainder in operator overhead and margin. Days inside the Ngorongoro Conservation Area cost the most because of the dual fee plus the $295 crater vehicle fee.",
  },
  {
    question: "Does a bigger group make a Tanzania safari cheaper per person?",
    answer:
      "Significantly. The vehicle, guide, and fuel cost the same whether two people or six are sitting in the Landcruiser, so that block divides across the group. Our own published rates show it: a 7–8 day private safari at Comfort tier is $4,115 per person for a couple, and $2,195 per person for a group of six. Same parks, same lodges, same guide. The per-person saving from filling the vehicle is larger than the saving from dropping a full accommodation tier.",
  },
  {
    question: "What is the cheapest time of year for a Tanzania safari?",
    answer:
      "April and May, during the long rains. Lodge rates drop 20–40% below peak, and some properties drop further: rates we hold show green-season pricing at roughly half of peak at some Serengeti camps. The trade-off is afternoon rain, longer grass, and some camps closing entirely for the season. November and early December (short rains) are the value sweet spot: shoulder rates, full lodge availability, and far fewer vehicles at every sighting. Park fees stay the same all year, so the savings come entirely from accommodation.",
  },
  {
    question: "Why does the same Tanzania itinerary cost $4,000 from one company and $9,000 from another?",
    answer:
      "Usually you are looking at the same lodges and the same parks sold through different layers. A local operator builds the trip at contract lodge rates. An overseas agency buys that trip from a local operator and resells it with their own margin on top, commonly 30% and sometimes far more. We hold the lodge contracts ourselves, and across our rate sheets the gap between contract rates and public rack rates runs from about 13% at budget properties to as much as 90% at luxury tented camps. Every reseller in the chain is pricing off that headroom. Booking with the operator who actually holds the contracts removes the layer entirely.",
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

        {/* Where the money goes */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">The Daily Breakdown</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Where each dollar goes on a $550 day
            </h2>
            <div className="max-w-3xl space-y-4 text-body text-ink/80 mb-10">
              <p>
                Take a couple on a private mid-range safari paying around $550 per person per day. Most of that money is spoken for before anyone makes a profit.
              </p>
              <p>
                Park fees come first. A day inside the Ngorongoro Conservation Area costs $130 per adult in entry and concession fees alone, before the $295 crater vehicle fee is split between you. A Serengeti day runs $71 to $83 in entry fees, plus a nightly concession fee if you sleep inside the park. Fees are government-set, identical for every operator, and non-negotiable. Nobody gets a discount on these. Anyone quoting suspiciously low is cutting something else.
              </p>
              <p>
                The lodge takes the next slice. At contract rates, a mid-tier property with all meals costs $100 to $175 per person per night for a couple sharing. Then the vehicle: a safari-built Landcruiser with a guide and fuel costs $250 to $300 a day to run, which is $125 to $150 each for two people. What remains after fees, lodge, and vehicle covers operations and margin. On a fair quote, that last slice is 10 to 15 percent.
              </p>
            </div>

            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm max-w-3xl">
                <thead>
                  <tr className="border-b border-forest/20">
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Cost block</th>
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Per person / day (couple)</th>
                    <th className="text-left py-3 font-montserrat font-semibold text-forest">Who sets the price</th>
                  </tr>
                </thead>
                <tbody className="text-ink/80">
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6">Park &amp; concession fees</td>
                    <td className="py-3 pr-6">$130–$190</td>
                    <td className="py-3">Government (fixed)</td>
                  </tr>
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6">Lodge, full board</td>
                    <td className="py-3 pr-6">$100–$175</td>
                    <td className="py-3">Lodge contract rate</td>
                  </tr>
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6">Vehicle, guide, fuel</td>
                    <td className="py-3 pr-6">$125–$150</td>
                    <td className="py-3">Operator</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6">Operations &amp; margin</td>
                    <td className="py-3 pr-6">$55–$85</td>
                    <td className="py-3">Operator</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-montserrat font-bold text-xl text-forest mb-4">Group size changes the math more than tier does</h3>
            <div className="max-w-3xl space-y-4 text-body text-ink/80 mb-8">
              <p>
                The vehicle block is fixed. Six people pay the same $250 to $300 a day for the Landcruiser that two people pay, so the per-person share drops from $150 to roughly $50. Our own rate card shows what that does to a full trip: the same 7 to 8 day Comfort-tier private safari is $4,115 per person as a couple and $2,195 per person as a group of six. Same lodges. Same parks. Same guide.
              </p>
              <p>
                If you can travel as four or six, do it. Filling the vehicle saves more per person than dropping from mid-range lodges to budget camps, and you give up nothing.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm max-w-2xl">
                <thead>
                  <tr className="border-b border-forest/20">
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Group size</th>
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">7–8 day Comfort tier, per person</th>
                  </tr>
                </thead>
                <tbody className="text-ink/80">
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6">2 people</td>
                    <td className="py-3 pr-6">$4,115</td>
                  </tr>
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6">4 people</td>
                    <td className="py-3 pr-6">$2,800–$3,100</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6">6 people</td>
                    <td className="py-3 pr-6">$2,195</td>
                  </tr>
                </tbody>
              </table>
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
                    "Guide tip: $25/day (standard)",
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

        {/* Park-by-park daily cost */}
        <section className="border-t border-forest/10 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Park by Park</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              What a day actually costs in each park
            </h2>
            <div className="max-w-3xl space-y-4 text-body text-ink/80 mb-10">
              <p>
                Itineraries are not priced per park, but parks are not equally expensive, and knowing which days carry the cost explains a lot about how quotes are built.
              </p>
              <p>
                Ngorongoro is the expensive one. The conservation area charges entry and concession separately ($130 per adult per calendar day combined), and the crater descent adds $295 per vehicle. For a couple, a crater day costs around $408 in fees before a single night's accommodation. It is worth it. The crater is the densest big-game viewing in Africa and the only place in Tanzania where seeing the Big Five in one morning is a realistic outcome. But it is why operators structure routes to enter the NCA in the afternoon and descend the next morning: done carelessly, the calendar-day fee rule bills you twice.
              </p>
              <p>
                Serengeti days cost $71 to $83 per adult in entry fees plus a nightly concession fee when you sleep inside, and the park's size adds an indirect cost: getting there. By road it is around five hours from Arusha beyond Ngorongoro; flying in saves a day but costs $200 to $400 per person each way. Tarangire and Lake Manyara are the affordable days. Both sit about two hours from Arusha, charge $59 entry, and Tarangire in dry season (June to October) delivers elephant viewing that matches anything in the Serengeti.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm max-w-3xl">
                <thead>
                  <tr className="border-b border-forest/20">
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Park</th>
                    <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Fees, couple/day</th>
                    <th className="text-left py-3 font-montserrat font-semibold text-forest">Cost character</th>
                  </tr>
                </thead>
                <tbody className="text-ink/80">
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6 font-medium">Ngorongoro (with descent)</td>
                    <td className="py-3 pr-6">~$408 + lodge</td>
                    <td className="py-3">Most expensive day; highest density viewing</td>
                  </tr>
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6 font-medium">Serengeti (staying inside)</td>
                    <td className="py-3 pr-6">~$260–$300 + lodge</td>
                    <td className="py-3">Fees plus concession; add transit time or flight</td>
                  </tr>
                  <tr className="border-b border-forest/10">
                    <td className="py-3 pr-6 font-medium">Tarangire (staying inside)</td>
                    <td className="py-3 pr-6">~$236 + lodge</td>
                    <td className="py-3">Underrated value June–October</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 font-medium">Lake Manyara (day trip)</td>
                    <td className="py-3 pr-6">~$118</td>
                    <td className="py-3">Cheapest park day on the circuit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="max-w-3xl mt-10 space-y-4 text-body text-ink/80">
              <h3 className="font-montserrat font-bold text-xl text-forest">Adding Zanzibar</h3>
              <p>
                The beach extension is priced separately from the safari and varies more than any safari line item. Budget $1,200 to $2,800 per person for 4 to 5 nights depending on the property: a Stone Town boutique hotel with breakfast sits near the bottom of that range, a beachfront half-board resort in Kiwengwa or Nungwi in the middle, and all-inclusive five-star properties at the top. The flight from Arusha to Zanzibar adds about $80 to $120 per person. If the beach matters to you, put the savings from a shoulder-season safari into the Zanzibar property. You will feel the upgrade more at the beach than in the bush.
              </p>
            </div>
          </div>
        </section>

        {/* Season timing */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">When You Travel</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              The calendar moves the price. Park fees do not.
            </h2>
            <div className="max-w-3xl space-y-4 text-body text-ink/80 mb-10">
              <p>
                Park fees are flat all year. Every dollar of seasonal saving comes from the lodges, and lodges switch their rates on specific dates, not vague seasons. The pattern across the rate contracts we hold: peak pricing runs June through October and again from roughly December 19 to January 4. Shoulder rates start in November. The long rains, April and May, are the genuine low season.
              </p>
              <p>
                How big is the swing? Peak to green season is commonly a 20 to 40 percent drop on the lodge line, and at some luxury tented camps the gap is wider. One Serengeti camp we contract drops from $415 per person to $270 between high and low season. A more typical mid-range example: $350 a night in high season, $312 from November 1. Lodge by lodge, the dates and the discounts differ, which is why two quotes for "November" can disagree. One operator priced week one, the other priced week four.
              </p>
              <p>
                The value pick is November to early December. Shoulder rates, everything open, short afternoon rains that rarely cost you game-drive time, and a fraction of the July vehicle traffic. April is the deepest discount but some camps close entirely. If your dates can move even two weeks around a rate-switch date (November 1, December 19, June 1), tell your operator. It can be worth several hundred dollars.
              </p>
            </div>
          </div>
        </section>

        {/* The agency layer */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">The Same Trip, Three Prices</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Why identical itineraries vary by thousands
            </h2>
            <div className="space-y-4 text-body text-ink/80">
              <p>
                Safari pricing has layers, and most travellers only ever see the top one. At the bottom is the contract rate: the price a licensed local operator actually pays a lodge. Above that sits the rack rate, the lodge's public price. Across our own rate sheets the gap between those two runs from about 13 percent at budget properties to 90 percent at luxury tented camps. That headroom is the safari industry's margin pool, and everyone in the chain prices off it.
              </p>
              <p>
                A local operator quotes you from the contract rate up. An overseas agency buys the same trip from a local operator (sometimes from us) and adds their margin on top of ours. By the time a trip has passed through a foreign agency, a "luxury travel designer," or a comparison platform taking commission, the identical itinerary with the identical lodges can cost $2,000 to $5,000 more per booking. None of that extra money buys a better vehicle, a better guide, or a better room.
              </p>
              <p>
                The check takes thirty seconds: ask where the company is registered and who employs the guide who will actually drive you. If the answer is an office in London or Denver, there is a local operator underneath them doing the work. You can book that operator directly.
              </p>
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
