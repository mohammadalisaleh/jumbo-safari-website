import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Women's Halal Safari Tanzania | Muslimah Safari | Jumbo Safaris",
  description:
    "Women-only halal safari Tanzania. Private vehicle, female guide arrangement, vetted accommodation with private outdoor space. No shared pools. No mixed common areas. From $3,800pp.",
  alternates: { canonical: "https://www.jumbosafaris.com/halal-safari-tanzania/womens-safari" },
  openGraph: {
    title: "Women's Halal Safari Tanzania | Muslimah Safari | Jumbo Safaris",
    description:
      "Women-only groups. Female guide arranged. Private, vetted accommodation. Halal food throughout. From $3,800pp.",
    url: "https://www.jumbosafaris.com/halal-safari-tanzania/womens-safari",
  },
}

const standards = [
  {
    title: "Women-only groups",
    body: "Every departure on this itinerary is booked by women, for women. No mixed-gender groups. No strangers in your vehicle.",
  },
  {
    title: "Female guide arrangement",
    body: "We arrange a female guide for all departures where possible. Tanzania has a small but growing community of professional female guides, and we work with them. Where a female guide is not available for your specific dates, we will discuss the options with you before confirming.",
  },
  {
    title: "Private vehicle",
    body: "Your Land Cruiser is never shared with another group. The vehicle is yours for the entire safari, which means stops when you want, pace that suits your group, and privacy throughout.",
  },
  {
    title: "Vetted accommodation",
    body: "Every camp and lodge on this itinerary has been checked for private outdoor space, separate bathing facilities, and modest dress norms among staff. We do not use properties where comfort would require constant calculation.",
  },
  {
    title: "Halal food throughout",
    body: "BAKWATA-certified halal food suppliers, meals prepared by your camp cook. No alcohol at your table or in your room. Prayer logistics built into the daily schedule.",
  },
  {
    title: "Full itinerary transparency",
    body: "Before you pay a deposit, you receive the full itinerary, accommodation details, guide biography, and our halal standard commitments in writing. Including the refund guarantee clause.",
  },
]

const itinerary = [
  {
    days: "Day 1",
    location: "Arrival — Arusha",
    detail: "Kilimanjaro Airport pickup. Transfer to Arusha guesthouse. Halal dinner, orientation meeting with your guide.",
  },
  {
    days: "Days 2–3",
    location: "Tarangire National Park",
    detail:
      "Drive south to Tarangire. Full day game drives with your private vehicle. Elephant herds in the hundreds. Lion, leopard, and cheetah all present. Halal camp meals.",
  },
  {
    days: "Days 4–6",
    location: "Serengeti National Park",
    detail:
      "Three full days in the Serengeti. Position determined by migration timing and your travel month. Dawn drives and golden hour drives. Midday rest at camp.",
  },
  {
    days: "Day 7",
    location: "Ngorongoro Crater",
    detail:
      "Full day on the Crater floor. Big Five in a single day is genuinely possible here. Return to crater rim lodge for final night.",
  },
  {
    days: "Day 8",
    location: "Departure",
    detail: "Transfer to Kilimanjaro Airport. Optional Zanzibar extension available.",
  },
]

const faqs = [
  {
    question: "Is Tanzania safe for women traveling solo or in women-only groups?",
    answer:
      "Tanzania is one of Africa's most stable safari destinations and has a long history of women traveling safely on safari. In the national parks, safety is not a concern. In Arusha and other towns, the same urban awareness applies as in any city. Your guide knows the areas. The bigger calculation for Muslim women is usually comfort and modesty logistics, which is what this product is built to address.",
  },
  {
    question: "Is a female guide always available?",
    answer:
      "We work with female guides in Tanzania's Northern Circuit and confirm guide assignment before you pay a deposit. If your specific travel dates do not have a female guide available, we tell you immediately and discuss options. We do not surprise you with a male guide on arrival.",
  },
  {
    question: "Can I travel without a mahram?",
    answer:
      "This is a personal religious question, not one we can answer for you. We can tell you that many of our Muslim female clients travel without a mahram for this specific safari product, and we structure the accommodation, guide, and vehicle accordingly. If your religious interpretation requires a mahram, a family member is welcome to join the group.",
  },
  {
    question: "When do group departures run?",
    answer:
      "We schedule women-only departures in June, July, August (peak season) and January (calving season). These are the best wildlife windows and the most popular booking periods. Private custom departures are available any time of year for groups of 4 or more.",
  },
  {
    question: "What is the minimum group size?",
    answer:
      "Private departures can be booked from 2 people. Group departure slots are available from 2 people and fill up to 6 per vehicle. The vehicle is never shared across different booking groups.",
  },
  {
    question: "Can this include a Zanzibar extension?",
    answer:
      "Yes. We pair the safari with Tasneem Islamic Luxury Suites in Jambiani, which has women-only pool hours and is fully alcohol-free. A 3-night or 5-night Zanzibar extension can be added to any departure.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are there women-only halal safaris in Tanzania?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We operate scheduled women-only halal departures and bespoke private women-only itineraries throughout the year. A women-only safari uses a female lead guide and female support staff, books accommodation with female housekeeping and dining service, and selects camps with screened or private pool access. Group sizes are kept small, typically 4 to 8 women. Itineraries cover the northern circuit and Zanzibar with optional add-ons for Pemba and a Stone Town women's heritage walk."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tanzania safe for solo Muslim women travellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tanzania consistently ranks among the safer African destinations for solo female travellers, and Muslim women in particular benefit from Tanzania's deeply Islamic cultural fabric, especially in Zanzibar. Solo Muslim women report feeling more comfortable in modest dress than in most Western destinations. On safari you are with your guide and driver throughout. We arrange airport meet-and-greet, female-only accommodation, female safari staff on request, and a 24-hour WhatsApp contact line for the duration of your trip."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request a female safari guide in Tanzania?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We maintain a dedicated roster of professionally licensed female safari guides across the northern circuit and Zanzibar. Tanzania has invested heavily in training women into the safari guiding profession through the Tanzania Women Guides Programme, and female guides now lead trips in Serengeti, Ngorongoro, Tarangire and Lake Manyara. Request a female guide at booking and we confirm the assignment in writing. For mixed-gender group departures a female assistant guide is included alongside the lead."
      }
    },
    {
      "@type": "Question",
      "name": "Can Muslim women swim privately on a Tanzania women-only safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We select lodges and Zanzibar resorts with women-only swimming hours, screened pool areas or private villa pools so swimming is comfortable. Several Serengeti lodges have private plunge pools attached to each tent or suite, removing the issue entirely. In Zanzibar, private pool villas are the standard recommendation for women-only groups, and we can arrange a curtained beach cabana with female lifeguards present so ocean swimming is also private."
      }
    },
    {
      "@type": "Question",
      "name": "What does a women-only Muslim safari typically include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Female lead guide and female assistant, female-only safari vehicle, accommodation with female housekeeping and dining service, halal catering at every meal, private prayer space in each lodge, female spa therapists and stylists, private swimming arrangements, modest dress code respected at all properties, and women-only excursion partners for boat trips and cultural visits. A typical 7-night itinerary covers Tarangire, Ngorongoro and central Serengeti followed by Stone Town and a beach segment."
      }
    },
    {
      "@type": "Question",
      "name": "Are women-only safari camps available in Tanzania?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are no permanent women-only safari camps in Tanzania, but several mobile camp operators run women-only departures where the whole camp, including staff, is female for the duration of your stay. For private groups of 6 or more we can arrange a full women-only camp setup in Serengeti or Tarangire with female chef, female camp manager and female game scouts. For smaller groups we use mixed-staff camps but request female-only service teams for your tent and dining."
      }
    },
    {
      "@type": "Question",
      "name": "What should Muslim women pack for a Tanzania safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lightweight breathable hijabs in neutral safari colours, loose long-sleeved tops and full-length trousers or skirts in earth tones, a wide-brimmed sun hat, closed walking shoes, a warm fleece for early morning drives, modest swimwear or a burkini if planning to swim, a small travel prayer mat and compass, and modest evening wear for dinner at lodges. Avoid bright white, black and blue clothing on safari as they attract tsetse flies in the bush."
      }
    }
  ]
}

export default function WomensSafari() {
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
            <span className="text-eyebrow uppercase text-orange tracking-widest">Women's Safari</span>
          </div>
          <h1 className="font-montserrat text-h1-mobile lg:text-h1-desktop font-bold mb-6 max-w-3xl">
            Women's Halal Safari Tanzania
          </h1>
          <p className="text-lead-mobile lg:text-lead-desktop text-cream/85 max-w-2xl mb-10">
            Women-only groups. Female guide arrangement. Private vehicle. Accommodation vetted for privacy. No shared pools or mixed common areas where comfort becomes a constant calculation. From $3,800 per person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Enquire About Dates
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

      {/* Standards */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">What We Guarantee</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            Every Standard in Writing Before You Pay
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s) => (
              <div key={s.title} className="border border-border-soft p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                  <h3 className="font-montserrat font-semibold text-h3-mobile text-ink">{s.title}</h3>
                </div>
                <p className="text-body-mobile text-muted leading-relaxed">{s.body}</p>
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
            Northern Circuit Halal Safari
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

      {/* Departures */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Group Departures</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-6">
            Scheduled Women-Only Departures
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-muted max-w-2xl mb-10">
            Group departures run in the best wildlife windows. Private custom departures are available year-round for groups of 2 or more.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "January 2026", type: "Calving Season", spots: "2 spots remaining", note: "Ndutu plains, wildebeest calving, predator action" },
              { month: "July 2026", type: "Peak Season", spots: "Enquire for availability", note: "Great Migration in northern Serengeti. Best big cat viewing." },
              { month: "August 2026", type: "Peak Season", spots: "Enquire for availability", note: "Mara River crossings, dry season wildlife concentration." },
            ].map((dep) => (
              <div key={dep.month} className="border border-border-soft p-6">
                <span className="text-eyebrow uppercase text-orange tracking-wider mb-2 block">{dep.type}</span>
                <h3 className="font-montserrat font-bold text-h3-mobile text-ink mb-1">{dep.month}</h3>
                <p className="text-caption text-muted uppercase tracking-wider mb-3">{dep.spots}</p>
                <p className="text-body-mobile text-muted">{dep.note}</p>
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
            Women's Halal Safari: Questions
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
            Ask Us About Next Departure Dates
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-xl mx-auto mb-10">
            Group spots fill early. Private departures can be arranged for any travel window. Contact us with your dates and we will confirm guide availability and accommodation within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Check Availability
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
