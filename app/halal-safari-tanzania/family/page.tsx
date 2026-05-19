import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Family Halal Safari Tanzania | UAE, Saudi, Malaysia Families | Jumbo Safaris",
  description:
    "Family halal safari Tanzania for multi-generational Muslim families. Private vehicle, halal food verified at every meal, flexible pace. From $2,200pp. Ideal for families from UAE, Saudi Arabia, and Malaysia.",
  alternates: { canonical: "https://www.jumbosafaris.com/halal-safari-tanzania/family" },
  openGraph: {
    title: "Family Halal Safari Tanzania | Jumbo Safaris",
    description:
      "Private vehicle for your family only. Halal food at every stop. Flexible pace for grandparents and children. From $2,200pp.",
    url: "https://www.jumbosafaris.com/halal-safari-tanzania/family",
  },
}

const whyUs = [
  {
    title: "Your vehicle is never shared",
    body: "A private Land Cruiser for your family only. No strangers sitting next to your children. No compromised pace because another group wants to leave early. The vehicle belongs to your family from pickup to drop-off.",
  },
  {
    title: "Halal food at every stop",
    body: "BAKWATA-certified halal suppliers for all meat. Your camp cook prepares meals your family can eat without asking questions. Familiar spices, rice-based meals where requested, no pork, no alcohol at your table. In Arusha, we use Khan's Barbecue, over 1,000 TripAdvisor reviews, run by the same Muslim family for decades.",
  },
  {
    title: "Pace set by your family",
    body: "If grandparents need midday rest, we rest. If children want to stop and watch elephants for 30 minutes, we stop. We do not run to a fixed timetable. The schedule exists to serve your family, not the other way around.",
  },
  {
    title: "Prayer stops built in",
    body: "Fajr, Dhuhr, Asr, Maghrib. Your guide carries a qibla compass and has prayer times for your exact GPS location. Prayer is not an interruption to the day. It is built into the day.",
  },
  {
    title: "Price scales with group size",
    body: "A private vehicle costs the same whether it carries 2 or 6 people. Families traveling together pay significantly less per person than couples or solo travelers. The more of you there are, the better the value.",
  },
  {
    title: "Everything in writing",
    body: "Every halal standard commitment is in your contract before you pay a deposit. Including the refund guarantee clause: if our halal standard is not met, we refund that portion of the trip.",
  },
]

const itinerary = [
  {
    days: "Day 1",
    location: "Arrival",
    detail: "Kilimanjaro International Airport pickup. Private transfer to Arusha hotel. Halal dinner. Your guide meets the family and answers every question.",
  },
  {
    days: "Days 2–3",
    location: "Tarangire National Park",
    detail:
      "Drive 2 hours south of Arusha. The largest elephant population in northern Tanzania, best seen here from July to October when herds gather at the Tarangire River. Children's favourite park: baobab trees that look like they were drawn by children, elephants at close range, giraffe grazing at eye level from the roof hatch.",
  },
  {
    days: "Days 4–6",
    location: "Serengeti National Park",
    detail:
      "Three days in the Serengeti, positioned based on your travel month. Lion, leopard, cheetah, elephant, and buffalo. Dawn drives when cats are most active, midday rest, afternoon golden hour drive. Halal meals at camp throughout.",
  },
  {
    days: "Day 7",
    location: "Ngorongoro Crater",
    detail:
      "Descend into the Crater. The floor is a 260 sq km enclosed ecosystem with one of the densest concentrations of wildlife on earth. Black rhino, lion, elephant, hippo, flamingo. A full day here. Optional extra night on the crater rim.",
  },
  {
    days: "Day 8",
    location: "Departure",
    detail: "Return to Kilimanjaro Airport. Zanzibar extension available: 3 or 5 nights at a halal-verified resort.",
  },
]

const markets = [
  {
    country: "UAE & Gulf States",
    detail:
      "FlyDubai flies daily from Dubai to Zanzibar. Emirates connects via Dubai. Kilimanjaro is reachable in under 8 hours with one stop. Tanzanian halal food standards will feel familiar. Direct booking with a local Arusha operator saves 40–60% over UAE-based travel agents quoting the same trip.",
  },
  {
    country: "Saudi Arabia",
    detail:
      "SAUDIA operates Jeddah to Dar es Salaam 4 times per week. Stone Town's Omani-Swahili heritage, the Arab Quarter, the Friday Mosque, the spice markets. Zanzibar has 1,000 years of Arab history. The cultural connection is real, not marketed.",
  },
  {
    country: "Malaysia",
    detail:
      "Malaysia Airlines connects Kuala Lumpur to Dar es Salaam via Nairobi. Tanzania has 63,000 Malaysian arrivals in 2024, up from 21,000 in 2019. Almost no Malaysia-facing safari content exists from any Tanzania operator. We produce itineraries and pricing in Malaysian Ringgit on request.",
  },
]

const faqs = [
  {
    question: "How many people fit in a safari vehicle?",
    answer:
      "A standard Land Cruiser with pop-up roof hatch seats 6 passengers comfortably. For families of 7 or more we arrange two vehicles, which also means children can be in a separate vehicle if preferred. We never put your family in a shared vehicle with strangers.",
  },
  {
    question: "What age is appropriate for safari?",
    answer:
      "Most national parks in Tanzania allow children from age 5. Ngorongoro Crater has no minimum age. For very young children, the main practical consideration is the length of game drives: 3–4 hours is typical. We adjust drive length based on what your family can comfortably manage. Children consistently report safari as one of the most memorable experiences of their lives.",
  },
  {
    question: "Is the food familiar enough for children?",
    answer:
      "Camp cooks are experienced with international families and can prepare rice, pasta, grilled chicken, eggs, and fresh fruit alongside local dishes. We tell your camp cook in advance about dietary requirements. If your children eat only specific foods, tell us and we will make sure those are available.",
  },
  {
    question: "Can elderly family members do this?",
    answer:
      "Yes, with some practical planning. Game drives involve rough roads in a 4WD vehicle. If mobility is a concern, we choose camps with easier access and plan shorter drives with more stops. The Ngorongoro Crater rim lodges, for example, have spectacular views without requiring strenuous movement. We assess this with you before booking.",
  },
  {
    question: "What is the cost per person for a family of 6?",
    answer:
      "A 7-day family halal safari for 6 people in one private vehicle typically costs $2,200–$2,800 per person at mid-range camps, or $3,500–$4,500pp at upper-range lodges. The vehicle cost is fixed regardless of how many people fill it, so larger families pay less per person than couples or solo travelers. We send a full itemised quote within 48 hours.",
  },
]

export default function FamilyHalalSafari() {
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
            <span className="text-eyebrow uppercase text-orange tracking-widest">Family</span>
          </div>
          <h1 className="font-montserrat text-h1-mobile lg:text-h1-desktop font-bold mb-6 max-w-3xl">
            Family Halal Safari Tanzania
          </h1>
          <p className="text-lead-mobile lg:text-lead-desktop text-cream/85 max-w-2xl mb-10">
            Private vehicle for your family only. Halal food verified at every meal. A pace that works for grandparents and children alike. Built for multi-generational Muslim families from the UAE, Saudi Arabia, and Malaysia. From $2,200 per person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Plan Your Family Safari
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

      {/* Why us */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Why Jumbo Safaris</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            What Every Muslim Family Needs. Confirmed Before You Book.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="border border-border-soft p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                  <h3 className="font-montserrat font-semibold text-h3-mobile text-ink">{item.title}</h3>
                </div>
                <p className="text-body-mobile text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">8-Day Itinerary</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-12">
            Northern Circuit Family Halal Safari
          </h2>
          <div className="space-y-0">
            {itinerary.map((day, i) => (
              <div key={i} className="grid lg:grid-cols-4 gap-0 border border-cream/20 border-b-0 last:border-b">
                <div className="bg-cream/10 p-6 flex flex-col justify-center">
                  <span className="text-eyebrow uppercase text-orange tracking-wider mb-1">{day.days}</span>
                  <span className="font-montserrat font-semibold">{day.location}</span>
                </div>
                <div className="lg:col-span-3 p-6 text-body-mobile text-cream/80 leading-relaxed">
                  {day.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Where Our Families Come From</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            Built for UAE, Saudi, and Malaysian Families
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {markets.map((market) => (
              <div key={market.country} className="border border-border-soft p-6">
                <h3 className="font-montserrat font-semibold text-h3-mobile text-ink mb-3">{market.country}</h3>
                <p className="text-body-mobile text-muted leading-relaxed">{market.detail}</p>
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
            Family Halal Safari: Questions
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
            Tell Us Your Family Size and Dates
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-xl mx-auto mb-10">
            We will build a custom itinerary for your family and send a full itemised price quote within 48 hours. No pressure, no sales calls. Just specifics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Get a Quote
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
