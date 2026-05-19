import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Ndutu Calving Season 2026/2027 | Dates, What to See & How to Plan",
  description:
    "Ndutu calving season runs January through mid-March. Exact 2026 and 2027 dates, what happens on the plains, and how to plan a calving season safari from Arusha.",
  alternates: { canonical: "https://www.jumbosafaris.com/ndutu-calving-season" },
  openGraph: {
    title: "Ndutu Calving Season 2026 & 2027 | Exact Dates & Planning Guide",
    description:
      "500,000 wildebeest calves born in six weeks. Here is when it happens, what you see, and how to be there.",
    url: "https://www.jumbosafaris.com/ndutu-calving-season",
  },
}

const faqs = [
  {
    question: "When exactly is the Ndutu calving season in 2026?",
    answer:
      "The peak of calving at Ndutu in 2026 runs from approximately January 20 through February 28. The wildebeest herds begin arriving in Ndutu from late December and linger into mid-March as the short-grass plains green up after the rains. The single densest period is late January through early February when 8,000 calves per day are born at peak. If you can only go once, target the window January 25 through February 20.",
  },
  {
    question: "When is the Ndutu calving season in 2027?",
    answer:
      "The 2027 calving season at Ndutu will follow the same pattern: arrival from late December 2026, peak births from approximately January 20 through February 25, 2027, with herds thinning by mid-March. Exact dates shift slightly each year based on rainfall. Booking 6–9 months in advance is standard for this window as lodges fill early.",
  },
  {
    question: "What do you actually see during calving season?",
    answer:
      "The first thing you see is the scale. The short-grass Ndutu plains turn dark with wildebeest for as far as you can see. Calves are born and walking within minutes. Cheetah, lion, hyena, and jackal are all in the area and hunting constantly. The predator-to-prey ratio during calving is the highest of any period in the Serengeti ecosystem. A single morning drive will typically produce multiple hunting sequences, lion kills, or cheetah chases. It is not calm.",
  },
  {
    question: "Is calving season the best time to visit Tanzania?",
    answer:
      "For wildlife intensity, yes. The dry season (July–October) at the Mara River crossings is more dramatic as a single event. Calving is sustained over six weeks with constant predator action. Both are exceptional. Which is better depends on whether you prefer watching animals being born and hunted on open plains or watching 2,000 animals throw themselves into a crocodile-filled river at once.",
  },
  {
    question: "Why is off-road driving allowed at Ndutu but not the Serengeti?",
    answer:
      "Ndutu is not a national park. It sits inside the Ngorongoro Conservation Area (NCAA), which has different regulations from TANAPA-managed parks. Off-road driving is permitted in the NCAA with a licensed guide, which means your vehicle can follow animals off the track, get closer to kills, and position for better light. This is a significant advantage. In the Serengeti, you must stay on designated tracks.",
  },
  {
    question: "Where do you stay for Ndutu calving season?",
    answer:
      "The main lodges near the Ndutu area are Ndutu Safari Lodge (the original, owned by a Tanzanian family, basic rooms but excellent location), Serengeti Ndutu Safari Lodge (mid-range, stronger facilities, same ownership as Lake Burunge), and several seasonal mobile camps that set up specifically for calving season. Lodges on the western Serengeti can also work if Ndutu itself is full. Book 6 months out minimum for January–February.",
  },
  {
    question: "How many days do you need for calving season?",
    answer:
      "Five to seven days in the Ndutu area. The area is large enough and the wildlife varied enough that you will not repeat yourself. Three days minimum to justify the drive from Arusha. Some people combine Ndutu calving with Tarangire before or after, which makes sense logistically and adds variety.",
  },
]

export default function NdutuCalvingSeasonPage() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Ndutu Wildebeest Calving Season 2026",
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    location: {
      "@type": "Place",
      name: "Ndutu, Ngorongoro Conservation Area",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.0,
        longitude: 34.9333,
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "TZ",
      },
    },
    description:
      "The annual wildebeest calving season in the Ndutu area of the Ngorongoro Conservation Area, Tanzania. Approximately 500,000 calves are born over six weeks from late January through February.",
    organizer: {
      "@type": "Organization",
      name: "Natural Event",
    },
  }

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
      { "@type": "ListItem", position: 2, name: "Ndutu Calving Season", item: "https://www.jumbosafaris.com/ndutu-calving-season" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/national-parks/ndutu" className="hover:text-forest transition-colors">Ndutu</Link>
            <span>/</span>
            <span className="text-forest">Calving Season</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Ndutu, Tanzania</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Ndutu Calving Season 2026 / 2027
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              500,000 wildebeest calves born in six weeks. Cheetah, lion, and hyena hunting every morning. This is the other Great Migration event, and most people have never heard of it.
            </p>
          </div>
        </section>

        {/* Dates */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Exact Dates</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              2026 and 2027 calving season windows
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-forest text-cream p-8">
                <div className="text-eyebrow uppercase text-orange mb-3">2026</div>
                <div className="font-montserrat font-bold text-2xl mb-4">January 20 – March 15</div>
                <div className="space-y-4 text-cream/80">
                  <div>
                    <div className="font-montserrat font-semibold text-cream mb-1">Herds arrive</div>
                    <div className="text-sm">Late December 2025 through early January 2026</div>
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-cream mb-1">Peak calving</div>
                    <div className="text-sm">January 25 – February 20, 2026 (best window)</div>
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-cream mb-1">Herds thinning</div>
                    <div className="text-sm">March, moving north and east</div>
                  </div>
                </div>
              </div>

              <div className="bg-forest/10 p-8">
                <div className="text-eyebrow uppercase text-orange mb-3">2027</div>
                <div className="font-montserrat font-bold text-2xl text-forest mb-4">January 20 – March 15</div>
                <div className="space-y-4 text-ink/80">
                  <div>
                    <div className="font-montserrat font-semibold text-ink mb-1">Herds arrive</div>
                    <div className="text-sm">Late December 2026 through early January 2027</div>
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-ink mb-1">Peak calving</div>
                    <div className="text-sm">January 25 – February 20, 2027 (best window)</div>
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-ink mb-1">Herds thinning</div>
                    <div className="text-sm">March, moving north and east toward Serengeti</div>
                  </div>
                </div>
                <p className="text-xs text-muted mt-6">Book 6 months in advance for the 2027 peak window. Lodges fill.</p>
              </div>
            </div>

            <p className="text-body text-ink/80 max-w-3xl">
              These windows are consistent year to year because they follow rainfall patterns on the short-grass plains. The southern Serengeti and Ndutu green up after the short rains (November–December), which draws the wildebeest south to calve. They have done this for tens of thousands of years. Expect the dates above to hold within about two weeks either direction.
            </p>
          </div>
        </section>

        {/* What you see */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">On the Ground</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              What actually happens at calving
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-body text-ink/80 mb-4">
                  8,000 calves born per day at peak. Each one stands and runs within seven minutes of birth. The predators know this and position accordingly. A cheetah on the Ndutu plains in late January will make multiple hunting attempts in a single morning.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  Lion prides operate in the area year-round, but the calving season brings them out of the woodlands and onto the plains in numbers. You will find them close to large wildebeest concentrations, often sleeping off a kill at 9am with the evidence still visible.
                </p>
                <p className="text-body text-ink/80">
                  Hyena clans work the edges of the herds throughout the day. Jackals follow the cheetah. Vultures circle every kill within minutes. The plains in late January look and sound different from any other time of year.
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-4">Wildlife active during calving</h3>
                <div className="space-y-3">
                  {[
                    { animal: "Wildebeest", detail: "500,000+ individuals, 8,000 calves/day at peak" },
                    { animal: "Cheetah", detail: "Highest concentration in Tanzania, excellent hunting conditions" },
                    { animal: "Lion", detail: "Prides concentrated on the plains, multiple prides active" },
                    { animal: "Spotted hyena", detail: "Clan hunting, following birth sites" },
                    { animal: "Zebra", detail: "500,000+ move with the wildebeest" },
                    { animal: "Golden jackal", detail: "Following cheetah kills and lion scraps" },
                    { animal: "Serval", detail: "Common in the long grass at the plains edge" },
                    { animal: "Secretary bird", detail: "Active on the open plains" },
                  ].map((item) => (
                    <div key={item.animal} className="flex gap-3 text-sm">
                      <span className="font-montserrat font-semibold text-forest min-w-28">{item.animal}</span>
                      <span className="text-ink/70">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Off-road driving */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">Key Advantage</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Off-road driving is allowed here
            </h2>
            <p className="text-body text-ink/80 mb-4">
              Ndutu sits inside the Ngorongoro Conservation Area, not inside the Serengeti. TANAPA rules (no off-track driving) do not apply here. NCAA rules allow licensed guides to leave the tracks.
            </p>
            <p className="text-body text-ink/80 mb-4">
              In practice, this means your guide can follow an animal rather than watch it disappear behind a bush from a fixed track. For cheetah in particular, this makes an enormous difference. A cheetah hunt on the open Ndutu plains, with your vehicle positioned for the light, is one of the few genuinely unrepeatable experiences in east African wildlife viewing.
            </p>
            <p className="text-body text-ink/80">
              The same rule applies to the Serengeti Ndutu area (the section of the Serengeti bordering the NCAA). Your guide will know where the boundaries sit.
            </p>
          </div>
        </section>

        {/* How to plan */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Planning</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              How to plan a calving season safari
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Choose your window",
                  body: "January 25 – February 20 is the peak. January 15 – March 10 gives more flexibility and still covers calving. Avoid arriving before January 15 (herds may not have arrived) or after March 10 (herds start dispersing).",
                },
                {
                  step: "02",
                  title: "Book lodges early",
                  body: "Ndutu Safari Lodge and Serengeti Ndutu Safari Lodge are the closest options. Both fill by September for January/February dates. Mobile camps sell out even earlier. 6–9 months lead time is standard.",
                },
                {
                  step: "03",
                  title: "Allow 5–7 days",
                  body: "Three days minimum in the Ndutu area. Five to seven is better. Many people add Tarangire before or after, which makes logistical sense and adds variety without doubling back.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-cream p-6">
                  <div className="font-montserrat font-bold text-orange text-sm mb-2">{item.step}</div>
                  <h3 className="font-montserrat font-bold text-lg text-forest mb-3">{item.title}</h3>
                  <p className="text-sm text-ink/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Calving season questions
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
              Plan your calving season safari
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              We run the Ndutu calving season every January and February. Private vehicle, private guide, off-road access. Tell us your dates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/itineraries/calving-season-safari"
                className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 font-montserrat font-bold hover:bg-orange/90 transition-colors"
              >
                View Calving Season Itinerary <ArrowRight className="w-4 h-4" />
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
