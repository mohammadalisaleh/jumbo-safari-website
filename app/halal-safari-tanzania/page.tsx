import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Halal Safari Tanzania 2025/2026 | Muslim-Friendly Safaris | Jumbo Safaris",
  description:
    "Halal safari Tanzania: certified halal food, prayer stop logistics, alcohol-free rooms, and private vehicles. No guesswork, no compromises. Based in Arusha.",
  alternates: { canonical: "https://www.jumbosafaris.com/halal-safari-tanzania" },
  openGraph: {
    title: "Halal Safari Tanzania 2025/2026 | Muslim-Friendly Safaris | Jumbo Safaris",
    description:
      "Certified halal food, prayer logistics, alcohol removed from your room. Tanzania safari built for Muslim travelers, run by a local Arusha operator.",
    url: "https://www.jumbosafaris.com/halal-safari-tanzania",
  },
}

const tours = [
  {
    title: "7-Day Muslim-Friendly Tanzania & Zanzibar",
    duration: "7 Days",
    price: "From $2,800 per person",
    description:
      "Four nights in the Northern Circuit parks with a private vehicle, then three nights on Zanzibar's coast at an alcohol-free hotel. Halal meals throughout. The most practical introduction to Tanzania for a Muslim traveler.",
    href: "/halal-safari-tanzania",
    highlights: ["Serengeti, Ngorongoro, Tarangire", "Alcohol-free Zanzibar accommodation", "Halal food chain verified"],
  },
  {
    title: "Halal Honeymoon Safari",
    duration: "11 Days",
    price: "From $5,400 per person",
    description:
      "Private safari through the Northern Circuit, then a private villa on Zanzibar's south coast at Tasneem Islamic Luxury Suites, one of the very few fully alcohol-free resorts in East Africa. Designed for couples, not groups.",
    href: "/halal-safari-tanzania/honeymoon",
    highlights: ["Fully alcohol-free resort", "Private vehicle throughout", "Mahram-friendly accommodation"],
  },
  {
    title: "Ramadan Bush Safari",
    duration: "7 Days",
    price: "From $3,200 per person",
    description:
      "Suhoor at 5am, then game drives at first light when big cats are most active. Iftar in the bush as the sun drops behind the Serengeti. No other Tanzania operator runs this. Zero competition, and the timing is genuinely better for wildlife.",
    href: "/halal-safari-tanzania/ramadan",
    highlights: ["Suhoor before dawn drives", "Iftar boxes prepared in-field", "No alcohol anywhere in camp"],
  },
  {
    title: "Women's Safari (Muslimah)",
    duration: "8 Days",
    price: "From $3,800 per person",
    description:
      "Women-only groups, private vehicle, female guide arrangement, and accommodation vetted for privacy. No shared pools, no mixed common areas where comfort becomes a calculation. Departures run seasonally.",
    href: "/halal-safari-tanzania/womens-safari",
    highlights: ["Women-only groups", "Female guide arranged", "Private, vetted accommodation"],
  },
  {
    title: "Family Halal Safari",
    duration: "7–10 Days",
    price: "From $2,200 per person",
    description:
      "Built for multi-generational families traveling from the UAE, Saudi Arabia, and Malaysia. Halal food verified at every meal, private vehicle for your family only, and a pace that works for grandparents and children alike.",
    href: "/halal-safari-tanzania/family",
    highlights: ["Private vehicle (never shared)", "Halal food at every stop", "Flexible pacing for families"],
  },
]

const standards = [
  {
    title: "Halal Food",
    body: "All meat served on your safari comes from BAKWATA-certified halal suppliers. In Arusha we use Khan's Barbecue on Mosque Street, which has over 1,000 TripAdvisor reviews and has been operating for decades. In the bush, your cook prepares meals with the same certified ingredients. We do not serve pork or alcohol at your table.",
  },
  {
    title: "Prayer Logistics",
    body: "Fajr timing is built into your daily schedule, not an afterthought. Morning game drives begin after Fajr and Sunnah prayers. Mid-drive prayer stops are planned around sunrise and sunset timing for Dhuhr, Asr, and Maghrib. Your guide carries a qibla compass. We share daily prayer timetables for your specific location before departure.",
  },
  {
    title: "Alcohol Policy (Honest)",
    body: "We remove alcohol from your room minibar and will select lodges that keep the bar separate from dining areas. We cannot claim the entire lodge is alcohol-free because Tanzania's Northern Circuit lodges serve other guests. What we can guarantee: alcohol does not appear at your table, in your room, or at meals we arrange. This is the honest position, and it is more useful than operators who say 'alcohol-free' and mean only your accommodation.",
  },
  {
    title: "Privacy and Modesty",
    body: "Private vehicles mean your family is never in a shared van with strangers. Room allocation accounts for mahram requirements. For our women's safari, we vet accommodation for private outdoor spaces and separate bathing facilities. If a property does not meet these requirements, we do not use it.",
  },
  {
    title: "Our Guarantee",
    body: "If our halal standard is not met during your trip, we will refund that portion of the trip in writing, in your contract, before you depart. This clause exists in every booking we take. We do not know any other Tanzania safari operator offering this in writing.",
  },
]

const faqs = [
  {
    question: "What makes a Tanzania safari halal?",
    answer:
      "The food chain, the prayer logistics, and the alcohol handling. Halal food on safari means your guide and cook are sourcing from BAKWATA-certified suppliers, not buying meat from the nearest market and assuming it is fine. Prayer logistics means your itinerary has Fajr built in before morning game drives and stopping for Dhuhr and Asr during drives is expected, not a special request. Alcohol handling means no alcohol at your table or in your room, stated explicitly in writing. These three things together make a safari genuinely halal rather than just marketed as Muslim-friendly.",
  },
  {
    question: "Is Tanzania a good destination for Muslim travelers?",
    answer:
      "Yes, for practical reasons. Mainland Tanzania is 35 to 40 percent Muslim. Zanzibar is 95 percent Muslim and the cultural default is halal. Halal food is not a special accommodation in Tanzania, it is the norm in most markets, restaurants, and homes. The challenge is the safari lodge sector, which was built for Western travelers and does not default to halal. This is the gap we close: the wildlife is spectacular and accessible, and we manage the logistics that the lodge industry has not built for.",
  },
  {
    question: "Can I do Ramadan on safari in Tanzania?",
    answer:
      "Yes, and the timing is genuinely better for wildlife viewing than most people expect. Suhoor at 5am means you are up before first light, which is exactly when game drives should start anyway. Big cats are most active in the hours around sunrise. Iftar at sunset in the Serengeti, with the light going golden and the savanna quiet, is unlike anything you can replicate elsewhere. We are the only Tanzania operator that has built a product specifically around Ramadan timing rather than treating it as a logistics problem.",
  },
  {
    question: "Which Zanzibar hotels are alcohol-free?",
    answer:
      "Tasneem Islamic Luxury Suites in Jambiani is the most rigorous: fully alcohol-free, women-only pool hours, and managed by a Muslim family. Dhow Palace Hotel and Mizingani Seafront Hotel in Stone Town are both alcohol-free. For couples who want a private pool, Baraza Resort and Zanzi Resort both offer halal food on request and private villa accommodation where alcohol is not present in your specific space. We will match you to the right property based on your budget and what matters most to your family.",
  },
  {
    question: "Does Jumbo Safaris have halal certification?",
    answer:
      "We are in the process of applying for CrescentRating accreditation, the global standard for halal travel services. No Tanzania safari operator currently holds this certification, which is why we are pursuing it. In the meantime, we operate to the same standard: BAKWATA-certified food suppliers, written prayer logistics, written alcohol policy, and a refund guarantee clause in every contract. We will not claim certification we do not hold. We will tell you exactly what we do and put it in writing.",
  },
  {
    question: "What languages can you operate in?",
    answer:
      "English and Swahili. For Arabic-speaking clients from the UAE, Saudi Arabia, and Gulf states, we work with a local Arabic-speaking guide and produce itineraries in Arabic on request. We are building Arabic-language content on this website and will add Malay for our Malaysian clients in 2026.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Halal Safari Tanzania",
  description:
    "Muslim-friendly Tanzania safari with certified halal food, prayer logistics, alcohol-free rooms, and private vehicles. Run by a local Arusha operator.",
  url: "https://www.jumbosafaris.com/halal-safari-tanzania",
  provider: {
    "@type": "TravelAgency",
    name: "Jumbo Safaris",
    url: "https://www.jumbosafaris.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arusha",
      addressCountry: "TZ",
    },
  },
  touristType: "Muslim travelers, Halal travelers, Muslim families",
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Tarangire National Park" },
      { "@type": "ListItem", position: 2, name: "Serengeti National Park" },
      { "@type": "ListItem", position: 3, name: "Ngorongoro Crater" },
      { "@type": "ListItem", position: 4, name: "Zanzibar" },
    ],
  },
}

export default function HalalSafariTanzania() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-forest text-cream py-20 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-4">Halal Safari Tanzania</p>
          <h1 className="font-montserrat text-h1-mobile lg:text-h1-desktop font-bold mb-6 max-w-3xl">
            Tanzania Safari Built for Muslim Travelers
          </h1>
          <p className="text-lead-mobile lg:text-lead-desktop text-cream/85 max-w-2xl mb-10">
            Certified halal food, prayer logistics built into your day, alcohol removed from your room, and a private vehicle your family never shares. No guesswork. Everything in writing before you pay a deposit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Plan Your Halal Safari
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

      {/* Trust bar */}
      <section className="border-b border-border-soft bg-cream py-5 px-6">
        <div className="max-w-content mx-auto flex flex-wrap gap-6 text-caption text-muted uppercase tracking-wider">
          <span>BAKWATA-certified halal food suppliers</span>
          <span className="text-border-soft">|</span>
          <span>Prayer logistics written into every itinerary</span>
          <span className="text-border-soft">|</span>
          <span>Alcohol removed from your room</span>
          <span className="text-border-soft">|</span>
          <span>Refund guarantee in every contract</span>
          <span className="text-border-soft">|</span>
          <span>CrescentRating accreditation in progress</span>
        </div>
      </section>

      {/* Our 5 Tours */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Our Halal Safaris</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-4">
            Five Products. Each Built for a Different Need.
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-muted max-w-2xl mb-12">
            Not every Muslim traveler wants the same thing. A honeymooning couple from Dubai has different priorities than a family of eight from Kuala Lumpur. We built separate products rather than one generic "halal option."
          </p>

          <div className="space-y-6">
            {tours.map((tour) => (
              <Link
                key={tour.href}
                href={tour.href}
                className="block border border-border-soft hover:border-forest transition-colors p-8 group"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-eyebrow uppercase text-orange tracking-wider">{tour.duration}</span>
                      <span className="text-border-soft">|</span>
                      <span className="text-eyebrow uppercase text-muted tracking-wider">{tour.price}</span>
                    </div>
                    <h3 className="font-montserrat text-h3-mobile lg:text-h3-desktop font-semibold text-ink mb-3 group-hover:text-forest transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-body-mobile lg:text-body-desktop text-muted leading-relaxed">
                      {tour.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 justify-center">
                    {tour.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
                        <span className="text-body-mobile text-ink">{h}</span>
                      </div>
                    ))}
                    <div className="mt-4 flex items-center gap-2 text-forest font-montserrat font-semibold text-sm group-hover:gap-3 transition-all">
                      View itinerary <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Halal Standards */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">What Halal Means Here</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-4">
            Specific. Honest. In Writing.
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-2xl mb-12">
            Most operators use "halal" as a marketing label. We use it as an operational standard. Here is exactly what we do and, where relevant, what we cannot guarantee.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s) => (
              <div key={s.title} className="border border-cream/20 p-6">
                <h3 className="font-montserrat font-semibold text-h3-mobile mb-3 text-orange">{s.title}</h3>
                <p className="text-body-mobile text-cream/80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-cream/20 pt-10">
            <Link
              href="/halal-safari-tanzania/our-standards"
              className="inline-flex items-center gap-2 text-cream font-montserrat font-semibold hover:text-orange transition-colors"
            >
              Read our full halal standards <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Tanzania for Muslim travelers */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Why Tanzania</p>
            <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-6">
              35% Muslim Country. Halal is the Cultural Default.
            </h2>
            <div className="space-y-4 text-body-mobile lg:text-body-desktop text-muted leading-relaxed">
              <p>
                Mainland Tanzania is 35 to 40 percent Muslim. In most markets, roadside restaurants, and family homes, halal food is not a special accommodation. It is the default. This matters because it means your guide, your cook, and most local suppliers understand halal without needing a briefing.
              </p>
              <p>
                Zanzibar is 95 percent Muslim, with an Omani-Swahili Islamic heritage stretching back over a thousand years. Stone Town's Friday mosque, the dhow harbour, the spice markets. This is a Muslim destination that happens to have one of the world's great beach coastlines.
              </p>
              <p>
                The challenge is the safari lodge sector, which was built for Western travelers and does not default to halal. This is the gap we close. The wildlife and landscape are extraordinary. We handle the logistics the lodge industry hasn't built for.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { stat: "35–40%", label: "of mainland Tanzania's population is Muslim" },
              { stat: "95%", label: "of Zanzibar's population is Muslim" },
              { stat: "1,000+", label: "years of Omani-Swahili Islamic heritage on the coast" },
              { stat: "$0", label: "other Tanzania safari operators with CrescentRating accreditation" },
            ].map((item) => (
              <div key={item.stat} className="border border-border-soft p-6 flex items-start gap-6">
                <span className="font-montserrat font-bold text-h2-mobile text-forest flex-shrink-0">{item.stat}</span>
                <span className="text-body-mobile lg:text-body-desktop text-muted leading-snug self-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream border-t border-border-soft">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Common Questions</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            Halal Safari Tanzania: FAQ
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
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-4">Ready to Plan</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-4">
            Tell Us What You Need. We'll Build It.
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-xl mx-auto mb-10">
            Every halal safari we run is private and custom. Tell us your travel dates, group size, and what matters most, and we will send a full itinerary with itemised pricing within 48 hours.
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
