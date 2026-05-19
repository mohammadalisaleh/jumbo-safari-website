import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania Safari for Americans | Visa, Flights, Costs & What to Know",
  description:
    "Everything US travelers need for a Tanzania safari: eVisa ($100), best flight routes, yellow fever rules, tipping, packing, and why Americans are still under-represented here.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-safari-for-americans" },
  openGraph: {
    title: "Tanzania Safari for Americans 2026 | Complete Planning Guide",
    description:
      "Visa, flights, health requirements, costs, and logistics for US citizens planning a Tanzania safari.",
    url: "https://www.jumbosafaris.com/tanzania-safari-for-americans",
  },
}

const faqs = [
  {
    question: "Do Americans need a visa for Tanzania?",
    answer:
      "Yes. US citizens need a visa to enter Tanzania. The Tanzania eVisa costs $100 and is applied for online at eservices.immigration.go.tz. Processing takes 3–10 business days. Apply at least 3 weeks before travel. Do not apply through any third-party site, only the official government portal. Visa on arrival is no longer the recommended option.",
  },
  {
    question: "Which airport do you fly into for a Tanzania safari?",
    answer:
      "Kilimanjaro International Airport (JRO) is the closest airport to Arusha and the main safari starting point. Most Northern Circuit safaris depart from Arusha, which is 45 minutes from Kilimanjaro Airport. Dar es Salaam (DAR) is an alternative but adds a connection or a 7–8 hour overland drive. Fly into JRO.",
  },
  {
    question: "What are the best flight routes from the US to Tanzania?",
    answer:
      "There are no nonstop flights from the US to Tanzania. The main one-stop options: KLM via Amsterdam (from JFK, Atlanta, Houston, Chicago), Ethiopian Airlines via Addis Ababa (from JFK, Washington DC, Los Angeles), Qatar Airways via Doha (from multiple US cities), and Turkish Airlines via Istanbul. Total travel time from the US East Coast is 17–20 hours. West Coast adds 2–3 hours. Ethiopian Airlines typically has the best routing for price and flight time from East African perspective.",
  },
  {
    question: "Is yellow fever vaccination required for Americans going to Tanzania?",
    answer:
      "Not for direct arrival from the United States. Yellow fever vaccination is required only if you are arriving from a yellow fever-endemic country (most of central and western Africa, parts of South America). If you fly US to Europe/Middle East to Tanzania, no yellow fever certificate is needed. If you are combining Tanzania with Uganda, Kenya, Rwanda, or any country with yellow fever risk, get vaccinated. The Tanzania border can turn you back without a certificate if your routing requires it.",
  },
  {
    question: "Do I need malaria medication for Tanzania?",
    answer:
      "Yes. The Serengeti, Tarangire, and Zanzibar all have malaria risk. Your US doctor can prescribe atovaquone-proguanil (Malarone) or doxycycline. Malarone is the most commonly prescribed for safari: it starts 1–2 days before departure and ends 7 days after return. Doxycycline is cheaper but requires 4 weeks of use. Mefloquine is a third option but has reported neurological side effects that most travelers now avoid. Use insect repellent (30%+ DEET) regardless of which medication you take.",
  },
  {
    question: "What currency should Americans bring to Tanzania?",
    answer:
      "USD is the de facto hard currency in Tanzania's safari industry. All major safari costs (lodges, park fees, guide quotes) are priced in USD. Your guide handles park gate payments. For daily spending on drinks, personal shopping, and tips, bring a mix of USD bills in small denominations ($1, $5, $10, $20). Newer bills print from 2009 onwards. Many businesses refuse visibly damaged or old bills. Card payments are accepted at most lodges and some markets.",
  },
  {
    question: "How much does a Tanzania safari cost from the United States?",
    answer:
      "International flights typically run $900–$2,000 per person round-trip depending on routing and how early you book. The safari itself at mid-range private is $400–$700 per person per day including lodges, park fees, guide, and vehicle. An 8-day safari for two people from the US typically costs $8,000–$14,000 total when you add flights, visa, tips, and insurance. For a detailed cost breakdown with line items, visit our Tanzania Safari Cost 2026 page.",
  },
  {
    question: "Is Tanzania safe for American travelers?",
    answer:
      "Yes. Tanzania has a stable political environment and a mature tourism infrastructure. The US State Department rates Tanzania at Level 1 (Exercise Normal Precautions) as of 2026. The national parks are well managed and the safety record for safari travelers is strong. Arusha, like any city, requires normal urban awareness. Zanzibar is calm. Your guide and driver will know current local conditions and will advise accordingly.",
  },
  {
    question: "What should I pack for Tanzania?",
    answer:
      "Neutral colours only: khaki, olive, tan, grey. Not white (dust makes it unwearable within an hour). Not bright colours (unnecessary). Layers are more important than most people expect: mornings in the Serengeti run 8–14°C in the dry season, and by midday it is 28–34°C. Bring a fleece and light jacket for early drives, shorts for midday. Binoculars matter more than your camera on some days. Minimum 8x42. High-SPF sunscreen, a wide-brim hat, and dust bags for your camera gear. Pack light. Luggage rules on Serengeti charter flights are strict: 15kg (33 lbs) in a soft bag only.",
  },
  {
    question: "How should Americans book a Tanzania safari to avoid overpaying?",
    answer:
      "Book directly with an Arusha-based operator. US travel agents add 30–300% above the local price and are often selling itineraries they have never personally seen. An operator based in Arusha knows the roads, the guides, and the lodges firsthand. Ask for an itemised quote with every cost listed separately: park fees, vehicle, accommodation, guide. If a quote shows a single lump sum with no breakdown, ask for the breakdown before paying any deposit.",
  },
]

export default function TanzaniaSafariForAmericansPage() {
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
      { "@type": "ListItem", position: 2, name: "Tanzania Safari for Americans", item: "https://www.jumbosafaris.com/tanzania-safari-for-americans" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <span className="text-forest">Tanzania Safari for Americans</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">For US Travelers</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Tanzania Safari for Americans
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              Tanzania hit a record 2.66 million international arrivals in 2024. The US is consistently one of the top non-African source markets. Here is what American travelers need to know before booking.
            </p>
          </div>
        </section>

        {/* Fast facts */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">At a Glance</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              US traveler quick facts
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Visa", value: "$100", detail: "eVisa online, 3–10 business days processing" },
                { label: "Yellow fever", value: "Not required", detail: "For direct US arrival (no endemic country transit)" },
                { label: "Malaria medication", value: "Required", detail: "Malarone or doxycycline, prescription needed" },
                { label: "Kilimanjaro Airport (JRO)", value: "17–20 hrs", detail: "From US East Coast, one connection" },
              ].map((item) => (
                <div key={item.label} className="bg-forest/5 p-6">
                  <div className="text-eyebrow uppercase text-muted mb-2">{item.label}</div>
                  <div className="font-montserrat font-bold text-2xl text-forest mb-2">{item.value}</div>
                  <div className="text-sm text-ink/70">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa section */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Visas</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Getting into Tanzania
                </h2>
                <p className="text-body text-ink/80 mb-4">
                  $100 eVisa. Apply at eservices.immigration.go.tz. Apply only there. Third-party visa services charge $50–$200 extra for zero additional benefit, and some are scams.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  Processing takes 3–10 business days. Apply at least three weeks before travel. The visa is valid for a single entry and a 90-day stay, which is more than enough for any safari trip.
                </p>
                <p className="text-body text-ink/80">
                  If you are also visiting Kenya, apply for a Kenya eVisa separately (kenyaevisa.go.ke). There is no joint East Africa visa for US citizens comparable to what some other nationalities can get.
                </p>
              </div>

              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Flights</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Getting to Tanzania
                </h2>
                <p className="text-body text-ink/80 mb-4">
                  Fly into Kilimanjaro International Airport (JRO). Do not fly into Dar es Salaam (DAR) if your safari starts in Arusha. Dar adds an unnecessary connection or a 7–8 hour overland drive.
                </p>
                <div className="space-y-3 text-sm text-ink/80 mb-4">
                  {[
                    { airline: "Ethiopian Airlines via Addis Ababa", route: "JFK, DC, LA, Chicago → ADD → JRO" },
                    { airline: "KLM via Amsterdam", route: "JFK, Atlanta, Houston → AMS → JRO" },
                    { airline: "Qatar Airways via Doha", route: "Multiple US cities → DOH → JRO" },
                    { airline: "Turkish Airlines via Istanbul", route: "Multiple US cities → IST → JRO" },
                  ].map((item) => (
                    <div key={item.airline}>
                      <div className="font-montserrat font-semibold text-forest">{item.airline}</div>
                      <div className="text-muted">{item.route}</div>
                    </div>
                  ))}
                </div>
                <p className="text-body text-ink/80">
                  Book flights 3–5 months out for the best prices. December through February and June through October are peak seasons: expect to pay more or book further ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Health */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">Health</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Health requirements and recommendations
            </h2>
            <p className="text-body text-ink/80 mb-4">
              See a travel medicine doctor 6–8 weeks before departure. They will assess your specific routing and health history. The items below are standard, but your doctor may adjust based on your itinerary.
            </p>

            <div className="space-y-6 mt-8">
              {[
                {
                  title: "Malaria prophylaxis",
                  required: true,
                  body: "Required for all safari destinations in Tanzania. Malarone (atovaquone-proguanil) is the most common choice: start 1–2 days before arrival, continue 7 days after return. Doxycycline is cheaper but requires 4 weeks of use total. Get this from your doctor or a travel clinic, not a pharmacy without prescription.",
                },
                {
                  title: "Yellow fever vaccination",
                  required: false,
                  body: "Not required for direct US arrival. Required if your routing includes Uganda, Rwanda, Kenya, or any country on the WHO's yellow fever endemic list. If required, get vaccinated at least 10 days before entry. Keep the yellow card with your passport.",
                },
                {
                  title: "Routine vaccinations",
                  required: false,
                  body: "Ensure Hepatitis A, Typhoid, and standard vaccinations are current. Hepatitis B if not already immunized. Rabies vaccination is optional but worth discussing if you plan any bush walking or cave visits.",
                },
                {
                  title: "Travel insurance",
                  required: true,
                  body: "Tanzania is not a budget medical destination. Medical evacuation from the Serengeti to Nairobi or Arusha costs $10,000–$30,000. Buy travel insurance with medical evacuation coverage minimum $500,000. World Nomads and SafetyWing are commonly used options for US travelers. Jumbo Safaris includes Flying Doctors emergency coverage in all itineraries.",
                },
              ].map((item) => (
                <div key={item.title} className="border-b border-forest/10 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-montserrat font-semibold text-lg text-forest">{item.title}</h3>
                    {item.required && (
                      <span className="text-xs font-montserrat font-bold bg-orange text-cream px-2 py-0.5">REQUIRED</span>
                    )}
                  </div>
                  <p className="text-ink/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">Money</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Currency, cards, and tipping
            </h2>
            <p className="text-body text-ink/80 mb-4">
              Tanzania's currency is the Tanzanian shilling (TZS). The safari industry prices everything in USD. Your lodge bill, guide quote, and park fees are all in US dollars. You pay in USD. Cards are accepted at most lodges.
            </p>
            <p className="text-body text-ink/80 mb-4">
              Bring $300–$500 in USD cash for tips and small expenses. Small bills matter: $1, $5, $10, $20. Bring only bills printed after 2009. Older or damaged notes are widely refused.
            </p>
            <div className="bg-forest text-cream p-6 mt-6">
              <h3 className="font-montserrat font-bold text-lg mb-4">Tipping guide (per day)</h3>
              <div className="space-y-3 text-cream/90 text-sm">
                <div className="flex justify-between">
                  <span>Safari guide (your driver)</span>
                  <span className="font-montserrat font-semibold">$20–$25/day</span>
                </div>
                <div className="flex justify-between border-t border-cream/20 pt-3">
                  <span>Lodge/camp staff (per person)</span>
                  <span className="font-montserrat font-semibold">$5–$7/day</span>
                </div>
                <div className="flex justify-between border-t border-cream/20 pt-3">
                  <span>Porter or specialist guide</span>
                  <span className="font-montserrat font-semibold">$5–$10 per service</span>
                </div>
                <div className="flex justify-between border-t border-cream/20 pt-3 font-semibold text-cream">
                  <span>Total for 2 people, 8 days</span>
                  <span>~$400–$500</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Questions from American travelers
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
              Ready to book from the US?
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              We work with US travelers directly. No agents, no commission layers, no 10% credit card surcharges. Tell us your dates and group size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 font-montserrat font-bold hover:bg-orange/90 transition-colors"
              >
                Start Planning <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/255742789292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream text-cream px-8 py-4 font-montserrat font-bold hover:bg-cream/10 transition-colors"
              >
                WhatsApp from the US
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
