import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Family Halal Safari Tanzania | UAE, Saudi, Malaysia Families",
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
    body: "BAKWATA-certified halal suppliers for all meat. Your camp cook sources from these for every bush meal. Familiar spices, rice-based meals where requested, no pork, no alcohol at your table. On arrival nights in Arusha, we use Khan's Barbecue on Mosque Street: over 1,000 TripAdvisor reviews, run by the same Muslim family for decades.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a Tanzania safari suitable for Muslim families with children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tanzania is one of the most family-friendly safari destinations in Africa, and Muslim families benefit from the country's halal infrastructure throughout the journey. Family-friendly itineraries use lodges with interconnecting family rooms, child-friendly menus with halal protein, gentler game drives that include short walking activities, and shorter daily distances. Children over 6 manage the standard northern circuit comfortably. For families with younger children we recommend Tarangire and Lake Manyara plus Zanzibar rather than the longer Serengeti routing."
      }
    },
    {
      "@type": "Question",
      "name": "Can lodges provide halal meals for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every lodge provides a halal children's menu with options like grilled chicken, beef koftas, pasta with halal mince, pilau rice, samosas, fresh fruit and yoghurt. Special dietary needs including nut allergies, gluten sensitivity, picky eaters and infant formula or weaning food are accommodated when notified in advance. Mobile camps carry a dedicated children's kitchen kit. Bottled water and pasteurised juice are stocked. Parents can also request packed halal picnic boxes for long game drive days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum age for a Tanzania safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most safari lodges accept children from 6 years old in private game drive vehicles, and a number accept younger children from 4 with a private vehicle and guide booked. The Ngorongoro Crater has its own minimum age of 6 for descent. Walking safaris and night drives typically require children to be 12 or older. For families travelling with infants and toddlers we recommend a Zanzibar-led itinerary with a short Tarangire day-trip rather than the full Serengeti circuit."
      }
    },
    {
      "@type": "Question",
      "name": "Are family rooms available at halal-friendly safari lodges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most safari lodges and tented camps offer family suites that sleep 2 adults and 2 children in interconnected tents or 1 bedroom with a separate children's loft. A growing number of Serengeti and Ngorongoro camps offer dedicated family tents with 2 bedrooms, a shared bathroom and a private veranda. In Zanzibar, family villas with 2 to 4 bedrooms and a private pool are widely available. We confirm family room configuration in writing at booking."
      }
    },
    {
      "@type": "Question",
      "name": "Is Zanzibar good for Muslim family beach holidays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zanzibar is one of the strongest Muslim family beach destinations in the world. The island is approximately 95 percent Muslim, halal food is the default, alcohol-free resorts and private family villas are widely available, and the beaches in the northeast and east are shallow and child-safe at low tide. Family activities include the Jozani Forest red colobus monkey walk, a half-day spice farm tour, dhow sailing, Stone Town's old fort and a snorkelling trip to Mnemba Atoll."
      }
    },
    {
      "@type": "Question",
      "name": "What safari activities are suitable for Muslim children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Morning and short afternoon game drives, a visit to a Maasai or Hadzabe village with cultural translator, supervised camp walks with a junior ranger programme that several lodges run, a stop at the Cultural Heritage Centre in Arusha, lunch picnics in safe enclosed picnic sites, optional night drives for children 12 and over in private concessions, and Zanzibar boat trips. We avoid long single-day road transfers and instead use the daily light aircraft hop where possible."
      }
    },
    {
      "@type": "Question",
      "name": "What vaccinations do children need for a Tanzania safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yellow fever vaccination is required for entry if arriving from a country with yellow fever risk, including transit through certain hubs. Routine childhood vaccinations plus typhoid, hepatitis A and tetanus boosters are typically recommended. Malaria prophylaxis is advised for both safari areas and Zanzibar; paediatric dosing is straightforward and your GP or travel clinic will advise based on the child's weight. Always confirm current requirements with the NHS Fit for Travel or CDC websites before departure."
      }
    }
  ]
}

export default function FamilyHalalSafari() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                <p className="text-body-mobile text-ink leading-relaxed">{item.body}</p>
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
                <p className="text-body-mobile text-ink leading-relaxed">{market.detail}</p>
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
                <p className="text-body-mobile lg:text-body-desktop text-ink leading-relaxed">{faq.answer}</p>
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
