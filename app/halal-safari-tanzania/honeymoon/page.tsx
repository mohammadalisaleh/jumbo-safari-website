import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Halal Honeymoon Safari Tanzania & Zanzibar | Jumbo Safaris",
  description:
    "Halal honeymoon safari Tanzania: private Northern Circuit safari followed by a stay at Tasneem Islamic Luxury Suites, Zanzibar's only fully alcohol-free luxury resort. From $5,400pp.",
  alternates: { canonical: "https://www.jumbosafaris.com/halal-safari-tanzania/honeymoon" },
  openGraph: {
    title: "Halal Honeymoon Safari Tanzania & Zanzibar | Jumbo Safaris",
    description:
      "Private safari, alcohol-free Zanzibar resort, mahram-friendly accommodation. Halal honeymoon built for Muslim couples. From $5,400pp.",
    url: "https://www.jumbosafaris.com/halal-safari-tanzania/honeymoon",
  },
}

const itinerary = [
  {
    days: "Days 1–2",
    location: "Tarangire National Park",
    detail:
      "Land in Kilimanjaro, drive 2 hours to Tarangire. Afternoon game drive among the largest elephant population in northern Tanzania. Halal dinner at camp. Dawn game drive on day 2 before the heat builds.",
  },
  {
    days: "Days 3–5",
    location: "Serengeti National Park",
    detail:
      "Three full days in the Serengeti, positioned in the central or southern zones depending on your travel month. Dawn and dusk drives. Halal meals prepared by your camp cook. Prayer times respected throughout.",
  },
  {
    days: "Day 6",
    location: "Ngorongoro Crater",
    detail:
      "Full day descending into the Crater floor, 600 metres below the rim. Lion, elephant, buffalo, flamingo, and black rhino all live here year-round. One of the few places on earth where seeing all of the Big Five in a single day is genuinely likely.",
  },
  {
    days: "Days 7–11",
    location: "Zanzibar — Tasneem Islamic Luxury Suites",
    detail:
      "Five nights at Tasneem in Jambiani on Zanzibar's south-east coast. Fully alcohol-free. Women-only pool hours. Halal meals as standard, not on request. Private beach access, dhow sunset cruises, Stone Town day trip. The only fully alcohol-free luxury resort in East Africa.",
  },
]

const included = [
  "Private 4WD safari vehicle throughout Northern Circuit",
  "Professional English-speaking guide, Arusha-based",
  "Halal meals from BAKWATA-certified suppliers at every stop",
  "Prayer logistics: Fajr timing, mid-drive stops, qibla compass",
  "Alcohol removed from room minibar at all camps",
  "All national park entrance and conservation fees",
  "Internal Tanzania flight (Arusha to Zanzibar)",
  "5 nights at Tasneem Islamic Luxury Suites, Jambiani",
  "All transfers",
  "Refund guarantee if halal standard not met (in writing)",
]

const zanzibarOptions = [
  {
    name: "Tasneem Islamic Luxury Suites",
    location: "Jambiani (south-east coast)",
    tier: "Fully alcohol-free",
    notes:
      "Muslim-managed. Women-only pool hours. Halal food as standard. The most rigorous halal-verified option in Zanzibar.",
    recommended: true,
  },
  {
    name: "Dhow Palace Hotel",
    location: "Stone Town",
    tier: "Alcohol-free",
    notes:
      "Historic building in the UNESCO-listed old town. Walking distance to Friday Mosque, spice market, and Arabic Quarter.",
    recommended: false,
  },
  {
    name: "Mizingani Seafront Hotel",
    location: "Stone Town",
    tier: "Alcohol-free",
    notes:
      "Seafront views, halal food, Stone Town location. Good for couples who want culture over beach.",
    recommended: false,
  },
  {
    name: "Baraza Resort & Spa",
    location: "Bwejuu (south-east coast)",
    tier: "Halal food on request, private pool villa",
    notes:
      "Not alcohol-free as a whole property. Private pool villas mean no exposure to other guests. Halal meals arranged on request. Best for couples who want ultra-luxury.",
    recommended: false,
  },
]

const faqs = [
  {
    question: "Is Tasneem truly alcohol-free?",
    answer:
      "Yes. Tasneem Islamic Luxury Suites is Muslim-managed and fully alcohol-free across the property, not just in rooms. No bar, no alcohol at any meal, women-only pool hours. It is the most rigorous halal accommodation we have found in East Africa.",
  },
  {
    question: "Can we visit during Ramadan?",
    answer:
      "Yes. Ramadan timing works particularly well for the safari portion: Suhoor at 5am, then early morning game drives from first light. The Serengeti in the early morning hours is extraordinary. Zanzibar during Ramadan has a specific atmosphere in Stone Town that many Muslim travelers find deeply moving. We have a dedicated Ramadan safari product as well.",
  },
  {
    question: "Is the safari vehicle private for just the two of us?",
    answer:
      "Yes, always. We do not put couples in shared vehicles with strangers. Your Land Cruiser is yours for the entire safari. This is standard for all our halal safaris, not an upgrade.",
  },
  {
    question: "What is the price and what does it cover?",
    answer:
      "From $5,400 per person based on two people sharing. This includes all accommodation, all halal meals during the safari, park fees, guide and vehicle, the Arusha-Zanzibar internal flight, and five nights at Tasneem. International flights from your home country are not included. We provide a full itemised quote before any payment.",
  },
  {
    question: "How do we book?",
    answer:
      "Contact us via WhatsApp or the enquiry form. We send a full itinerary within 48 hours. Deposit is 30% of trip cost. We send all halal standard commitments in writing before you pay a cent.",
  },
]

export default function HalalHoneymoon() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream py-20 px-6">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/halal-safari-tanzania" className="text-eyebrow uppercase text-cream/60 tracking-widest hover:text-orange transition-colors">
              Halal Safaris
            </Link>
            <span className="text-cream/40">/</span>
            <span className="text-eyebrow uppercase text-orange tracking-widest">Honeymoon</span>
          </div>
          <h1 className="font-montserrat text-h1-mobile lg:text-h1-desktop font-bold mb-6 max-w-3xl">
            Halal Honeymoon Safari Tanzania & Zanzibar
          </h1>
          <p className="text-lead-mobile lg:text-lead-desktop text-cream/85 max-w-2xl mb-10">
            11 days. Private safari through the Northern Circuit. Five nights at Tasneem Islamic Luxury Suites in Zanzibar, the only fully alcohol-free luxury resort in East Africa. From $5,400 per person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Plan This Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/255742789292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream font-montserrat font-semibold px-8 py-4 hover:border-cream transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">11-Day Itinerary</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            Day by Day
          </h2>
          <div className="space-y-0">
            {itinerary.map((day, i) => (
              <div key={i} className="grid lg:grid-cols-4 gap-0 border border-border-soft border-b-0 last:border-b">
                <div className="bg-forest text-cream p-6 flex flex-col justify-center">
                  <span className="text-eyebrow uppercase text-orange tracking-wider mb-1">{day.days}</span>
                  <span className="font-montserrat font-semibold text-lg">{day.location}</span>
                </div>
                <div className="lg:col-span-3 p-6 text-body-mobile lg:text-body-desktop text-muted leading-relaxed">
                  {day.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">What's Included</p>
            <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-8">
              Everything Listed. Nothing Hidden.
            </h2>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-body-mobile text-cream/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Not Included</p>
            <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-8">
              What You Pay Separately
            </h2>
            <div className="space-y-4 text-body-mobile text-cream/80 leading-relaxed">
              <p>International flights to Kilimanjaro International Airport (JRO) and home from Zanzibar (ZNZ).</p>
              <p>Travel insurance. We strongly recommend coverage that includes emergency evacuation.</p>
              <p>Visa on arrival: $50 USD per person, paid at Kilimanjaro Airport. Bring cash.</p>
              <p>Tips for your guide ($25/day recommended) and lodge staff ($5–7/day).</p>
              <p>Any optional activities not listed: hot air balloon over the Serengeti ($590pp), snorkelling excursions in Zanzibar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zanzibar hotel options */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Zanzibar Accommodation</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-4">
            Halal-Verified Hotels. We've Done the Vetting.
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-muted max-w-2xl mb-12">
            Not every hotel that calls itself halal-friendly has removed alcohol from the property. We only list hotels where we have verified the policy in detail.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {zanzibarOptions.map((hotel) => (
              <div
                key={hotel.name}
                className={`border p-6 ${hotel.recommended ? "border-forest" : "border-border-soft"}`}
              >
                {hotel.recommended && (
                  <span className="text-eyebrow uppercase text-orange tracking-wider mb-2 block">Our Recommendation</span>
                )}
                <h3 className="font-montserrat font-semibold text-h3-mobile text-ink mb-1">{hotel.name}</h3>
                <p className="text-caption text-muted uppercase tracking-wider mb-3">{hotel.location} — {hotel.tier}</p>
                <p className="text-body-mobile text-muted leading-relaxed">{hotel.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream border-t border-border-soft">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">FAQ</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            Halal Honeymoon Safari: Questions
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-border-soft pt-6">
                <h3 className="font-montserrat font-semibold text-h3-mobile text-ink mb-3">{faq.question}</h3>
                <p className="text-body-mobile lg:text-body-desktop text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-4">
            Tell Us Your Dates. We'll Handle the Rest.
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-xl mx-auto mb-10">
            Every honeymoon safari is private and custom-built. Contact us with your travel window and we will send a full itinerary with itemised pricing within 48 hours. No pressure, no sales calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Start Planning
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/255742789292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream font-montserrat font-semibold px-8 py-4 hover:border-cream transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: +255 742 789 292
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
