import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania Park Fees 2026: The Real Numbers",
  description:
    "Verified 2026 Tanzania park fees: NCA entry, Ngorongoro concession, Tarangire, crater descent. The calculation rules most operators miss.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-park-fees" },
  openGraph: {
    title: "Tanzania Park Fees 2026: The Real Numbers",
    description:
      "NCA charges two separate fees. Crater costs per descent, not per day. No VAT applies. Here is the correct method, verified by a Highway Tours ground operator.",
    url: "https://www.jumbosafaris.com/tanzania-park-fees",
  },
}

const faqs = [
  {
    question: "Do Tanzania national park fees include VAT?",
    answer:
      "No. Government tariffs set by TANAPA and the NCAA are charged straight, with no 18% VAT added on top. This catches operators out regularly. If a quote shows VAT on park fees, the calculation is wrong.",
  },
  {
    question: "Does Ngorongoro charge one fee or two?",
    answer:
      "Two. There is an NCAA Entry Fee ($71/adult/day) and a separate NCAA Concession Fee ($59/adult/day). Both apply every day you are inside the conservation area. Many quotes show only the entry fee. That leaves $59 per adult per day missing from the total.",
  },
  {
    question: "How is the Ngorongoro Crater descent fee calculated?",
    answer:
      "Per vehicle, per descent. One trip down costs $295, regardless of how many people are in the vehicle. If you stay three nights in the NCA and descend the crater once, the fee is $295 total, not $295 multiplied by three nights.",
  },
  {
    question: "How do you count days in the Ngorongoro Conservation Area?",
    answer:
      "Calendar days, not nights. Arrive on August 12, depart August 15. That is four days in the NCA: the 12th, 13th, 14th, and 15th. Three nights but four days of fees. Operators who count nights will undercharge.",
  },
  {
    question: "What are the 2026 park fees for non-resident adults?",
    answer:
      "NCA Entry: $71/person/day. NCA Concession: $59/person/day. Tarangire Entry: $59/person/day. Tarangire Concession: $59/person/day. Ngorongoro Crater Service Fee: $295/vehicle/descent. Children (non-resident) pay reduced rates: NCA Entry $23.60, NCA Concession $11.80, Tarangire Entry $18, Tarangire Concession $11.80.",
  },
  {
    question: "Can I pay park fees in cash?",
    answer:
      "No. TANAPA completed the move to electronic-only payments in 2025. Visa and Mastercard are accepted at main entry points. Your guide handles all gate payments through the operator's account, so this is only relevant if you are self-driving.",
  },
  {
    question: "Do children pay Tanzania park fees?",
    answer:
      "Yes, at a reduced rate. For the Northern Circuit parks, children between 5 and 15 pay roughly a third of the adult rate. Under 5 is free. The exact split varies by park. The Ngorongoro child rate is $23.60 entry plus $11.80 concession per day.",
  },
]

export default function TanzaniaParkFeesPage() {
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
      { "@type": "ListItem", position: 2, name: "Tanzania Park Fees 2026", item: "https://www.jumbosafaris.com/tanzania-park-fees" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="bg-forest text-cream pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-4 tracking-widest text-sm font-semibold">Tanzania Park Fees 2026</p>
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-6 max-w-3xl leading-tight">
            Four rules for calculating park fees correctly. Most operators miss at least one.
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            Verified rates for the Northern Circuit, directly reconciled against a Highway Tours ground operator breakdown. What follows is the exact method we use at Jumbo Safaris after getting it wrong on a real client quote.
          </p>
        </div>
      </section>

      {/* The mistake */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-content mx-auto px-6 max-w-3xl">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-sm font-semibold">How We Found This</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
            A $4.13 gap that revealed two wrong assumptions
          </h2>
          <p className="text-body text-ink/80 mb-5">
            On a quote for a family of four covering four nights in the Ngorongoro Conservation Area plus three days in Tarangire, our park fee total came out $4.13 lower than the figure from Nusaibah at Highway Tours. $4.13 sounds like rounding. It was not.
          </p>
          <p className="text-body text-ink/80 mb-5">
            Two separate errors cancelled each other out almost perfectly by coincidence. The first: we applied 18% VAT to government park fees. TANAPA and NCAA fees carry no VAT. The second: we charged the NCA entry fee but missed the NCA concession fee entirely, a separate $59 per adult per day that most quotes never show.
          </p>
          <p className="text-body text-ink/80 mb-5">
            If those two errors had not offset, the client quote would have been wrong by several hundred dollars. On a $47,000 itinerary that is not catastrophic. On a tighter quote it could wipe the margin.
          </p>
          <p className="text-body text-ink/80">
            We reconciled every line, traced both errors back to the source, and rewrote the calculation method. What follows is the correct version, tested against supplier figures.
          </p>
        </div>
      </section>

      {/* The four rules */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-sm font-semibold">The Method</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10 max-w-2xl">
            Four rules. All four have to be right.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Rule 1 */}
            <div className="border border-forest/10 p-8">
              <p className="text-orange font-montserrat font-bold text-sm uppercase tracking-widest mb-3">Rule 1</p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">No VAT on park fees</h3>
              <p className="text-ink/80 leading-relaxed">
                Government tariffs are charged straight. Adding 18% VAT is wrong. It inflates the total by a significant amount on longer itineraries and makes your quote uncompetitive if the client checks against another operator using correct figures.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="border border-forest/10 p-8">
              <p className="text-orange font-montserrat font-bold text-sm uppercase tracking-widest mb-3">Rule 2</p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">The NCA charges two separate fees</h3>
              <p className="text-ink/80 leading-relaxed">
                An NCAA Entry Fee ($71/adult/day) and a Concession Fee ($59/adult/day) are both charged for every day inside the conservation area. They are separate line items. Show the entry fee only and you have quoted $59 short per adult per day. On a family of four over four days, that is $944 missing.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="border border-forest/10 p-8">
              <p className="text-orange font-montserrat font-bold text-sm uppercase tracking-widest mb-3">Rule 3</p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">Count calendar days in the NCA, not nights</h3>
              <p className="text-ink/80 leading-relaxed">
                Arrive August 12. Depart August 15. That is four days (the 12th, 13th, 14th, 15th) and three nights. Fees apply to each day you are physically inside the conservation area. Charge for nights instead of days and you will underbill by a full day of entry and concession fees per person.
              </p>
            </div>

            {/* Rule 4 */}
            <div className="border border-forest/10 p-8">
              <p className="text-orange font-montserrat font-bold text-sm uppercase tracking-widest mb-3">Rule 4</p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">The crater fee is per vehicle, per descent</h3>
              <p className="text-ink/80 leading-relaxed">
                The Ngorongoro Crater Service Fee is $295 per vehicle per descent into the crater. Not per day. Not per person. If you stay four nights in the NCA and descend once, the fee is $295. If you descend twice on separate days, it is $590. Many quotes multiply the fee by the number of nights, which overstates the cost considerably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees table */}
      <section className="bg-forest text-cream py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-sm font-semibold">Verified Rates</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Northern Circuit park fees, 2026
          </h2>
          <p className="text-cream/80 mb-10 max-w-2xl">
            Non-resident rates. Verified against Highway Tours supplier breakdown, August 2026. No VAT applied.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream/20">
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold">Fee</th>
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold">Adult</th>
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold">Child (non-resident)</th>
                  <th className="text-left py-3 font-montserrat font-semibold">Unit</th>
                </tr>
              </thead>
              <tbody className="text-cream/80">
                <tr className="border-b border-cream/10">
                  <td className="py-3 pr-6 font-medium text-cream">NCA Entry Fee</td>
                  <td className="py-3 pr-6">$71.00</td>
                  <td className="py-3 pr-6">$23.60</td>
                  <td className="py-3 text-sm">per person, per calendar day in NCA</td>
                </tr>
                <tr className="border-b border-cream/10">
                  <td className="py-3 pr-6 font-medium text-cream">NCA Concession Fee</td>
                  <td className="py-3 pr-6">$59.00</td>
                  <td className="py-3 pr-6">$11.80</td>
                  <td className="py-3 text-sm">per person, per calendar day in NCA</td>
                </tr>
                <tr className="border-b border-cream/10">
                  <td className="py-3 pr-6 font-medium text-cream">Ngorongoro Crater Service Fee</td>
                  <td className="py-3 pr-6 font-medium text-cream">$295.00</td>
                  <td className="py-3 pr-6 text-cream/50">n/a</td>
                  <td className="py-3 text-sm">per vehicle, per descent into crater</td>
                </tr>
                <tr className="border-b border-cream/10">
                  <td className="py-3 pr-6 font-medium text-cream">Tarangire Entry Fee</td>
                  <td className="py-3 pr-6">$59.00</td>
                  <td className="py-3 pr-6">$18.00</td>
                  <td className="py-3 text-sm">per person, per calendar day</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-cream">Tarangire Concession Fee</td>
                  <td className="py-3 pr-6">$59.00</td>
                  <td className="py-3 pr-6">$11.80</td>
                  <td className="py-3 text-sm">per person, per calendar day</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-cream/50 mt-6">Rates verified August 2026 via Highway Tours, Arusha. No VAT applies to government tariffs. Rates are subject to annual revision by TANAPA and NCAA. Verify current rates with your operator at booking.</p>
        </div>
      </section>

      {/* Worked example */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-sm font-semibold">Worked Example</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4 max-w-2xl">
            2 adults, 2 children. 4 days NCA, 1 crater descent, 3 days Tarangire.
          </h2>
          <p className="text-ink/80 mb-10 max-w-2xl">
            This is the group type that generated the original calculation error. Here is the correct breakdown.
          </p>

          <div className="overflow-x-auto max-w-3xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-forest/15">
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Line item</th>
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Calculation</th>
                  <th className="text-right py-3 font-montserrat font-semibold text-forest">Amount</th>
                </tr>
              </thead>
              <tbody className="text-ink/80">
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">NCA Entry (2 adults × 4 days)</td>
                  <td className="py-3 pr-6">$71 × 2 × 4</td>
                  <td className="py-3 text-right font-medium">$568.00</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">NCA Entry (2 children × 4 days)</td>
                  <td className="py-3 pr-6">$23.60 × 2 × 4</td>
                  <td className="py-3 text-right font-medium">$188.80</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">NCA Concession (2 adults × 4 days)</td>
                  <td className="py-3 pr-6">$59 × 2 × 4</td>
                  <td className="py-3 text-right font-medium">$472.00</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">NCA Concession (2 children × 4 days)</td>
                  <td className="py-3 pr-6">$11.80 × 2 × 4</td>
                  <td className="py-3 text-right font-medium">$94.40</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">Crater Service Fee (1 vehicle, 1 descent)</td>
                  <td className="py-3 pr-6">$295 × 1</td>
                  <td className="py-3 text-right font-medium">$295.00</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">Tarangire Entry (2 adults × 3 days)</td>
                  <td className="py-3 pr-6">$59 × 2 × 3</td>
                  <td className="py-3 text-right font-medium">$354.00</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">Tarangire Entry (2 children × 3 days)</td>
                  <td className="py-3 pr-6">$18 × 2 × 3</td>
                  <td className="py-3 text-right font-medium">$108.00</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">Tarangire Concession (2 adults × 3 days)</td>
                  <td className="py-3 pr-6">$59 × 2 × 3</td>
                  <td className="py-3 text-right font-medium">$354.00</td>
                </tr>
                <tr className="border-b border-forest/8">
                  <td className="py-3 pr-6">Tarangire Concession (2 children × 3 days)</td>
                  <td className="py-3 pr-6">$11.80 × 2 × 3</td>
                  <td className="py-3 text-right font-medium">$70.80</td>
                </tr>
                <tr className="border-t-2 border-forest">
                  <td className="py-4 pr-6 font-montserrat font-bold text-forest">Total park fees</td>
                  <td className="py-4 pr-6 text-forest/60">No VAT applied</td>
                  <td className="py-4 text-right font-montserrat font-bold text-forest text-lg">$2,505.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 max-w-3xl bg-forest/5 p-6 border-l-4 border-orange">
            <p className="text-ink/80 text-sm leading-relaxed">
              The original calculation on this itinerary came out at $3,248.40 (operator figure) versus our $3,244.27, a $4.13 gap. That gap obscured two errors: VAT applied incorrectly added roughly $470, and missing the NCA Concession Fee removed roughly $474. They almost perfectly cancelled. The correct total, verified against the supplier breakdown, was $3,248.40. The worked example above uses a simplified group size to illustrate the method, not the exact Sanya itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* What this means for clients */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 max-w-3xl">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-sm font-semibold">For Clients</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
            What to check in any Tanzania safari quote
          </h2>
          <p className="text-body text-ink/80 mb-5">
            Ask your operator to show park fees as a separate line, broken down by park and day count. A quote that shows a single "park fees: $X" figure with no breakdown is not one you can verify.
          </p>
          <p className="text-body text-ink/80 mb-5">
            For Ngorongoro specifically, confirm whether the concession fee is included. The entry fee alone is $71/adult/day. The correct combined rate is $130/adult/day. If the quoted NCA fee per person is less than $130/day, the concession fee is missing.
          </p>
          <p className="text-body text-ink/80">
            The crater descent fee should appear once per planned descent, not once per night in the NCA. Two nights at the crater rim with one descent into the crater is $295, not $590.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-sm font-semibold">FAQ</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
            Park fee questions, answered directly
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
            Get a quote with every fee itemised
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Every Jumbo Safaris quote shows park fees broken down by park, day count, and person type. No single-line totals. No VAT errors.
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
    </>
  )
}
