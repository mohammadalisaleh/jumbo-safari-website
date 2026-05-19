import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Ramadan Safari Tanzania | Bush Iftar & Suhoor Game Drives | Jumbo Safaris",
  description:
    "Ramadan safari Tanzania: Suhoor at 5am, then wildlife drives at first light. Iftar in the Serengeti as the sun sets. The only Tanzania operator running a Ramadan-specific safari. From $3,200pp.",
  alternates: { canonical: "https://www.jumbosafaris.com/halal-safari-tanzania/ramadan" },
  openGraph: {
    title: "Ramadan Safari Tanzania | Jumbo Safaris",
    description:
      "Suhoor before dawn drives. Iftar in the Serengeti. The only Ramadan-specific safari in Tanzania. From $3,200pp.",
    url: "https://www.jumbosafaris.com/halal-safari-tanzania/ramadan",
  },
}

const schedule = [
  {
    time: "4:45am",
    label: "Suhoor",
    detail:
      "Hot meal prepared by your camp cook. Rice, beans, eggs, fruit. Eat before Fajr. Your guide is up too.",
  },
  {
    time: "5:15am",
    label: "Fajr Prayer",
    detail:
      "Prayer mat, qibla compass, and privacy. The Serengeti is completely quiet at this hour. The sky before sunrise is extraordinary.",
  },
  {
    time: "6:00am",
    label: "Dawn Game Drive",
    detail:
      "First light. This is when lions are finishing their night hunts, cheetahs are warming up on termite mounds, and leopards are moving before the heat comes. The best game viewing window of the day coincides perfectly with the Ramadan schedule.",
  },
  {
    time: "11:00am",
    label: "Return to Camp",
    detail:
      "Rest during midday heat. Sleep, read, sit in shade. The animals do the same. This is not wasted time.",
  },
  {
    time: "4:00pm",
    label: "Afternoon Drive",
    detail:
      "The temperature drops, animals start moving again. We position near a waterhole or the river to catch the golden hour.",
  },
  {
    time: "Sunset",
    label: "Iftar in the Bush",
    detail:
      "Your guide has the exact sunset time for your GPS coordinates. We stop at a scenic point. Your cook has prepared Iftar boxes: dates, water, soup, hot food. Maghrib prayer, then eat. This is unlike any Iftar you have had before.",
  },
  {
    time: "After Iftar",
    label: "Night Drive or Camp",
    detail:
      "Some camps permit night drives where you can see nocturnal animals: aardvark, genet, nightjars, hyena on the move. Or return to camp for Isha prayer and sleep.",
  },
]

const whyRamadan = [
  {
    title: "The wildlife timing is actually better",
    body: "Dawn and dusk are the two best wildlife windows. Ramadan forces you into both. Most non-Ramadan tourists sleep through sunrise and return from their afternoon drive before golden hour. You will not.",
  },
  {
    title: "The Serengeti is quieter",
    body: "Ramadan in 2025 and 2026 falls in late February to late March, which is calving season at Ndutu and the weeks before peak season crowds arrive. You have the parks largely to yourself.",
  },
  {
    title: "Zero competition for this experience",
    body: "Every other Tanzania safari operator either says Ramadan is a bad time to visit or ignores it entirely. We built a product specifically around it. You will not find this anywhere else.",
  },
  {
    title: "The Iftar moment is unlike anything else",
    body: "Watching the sun drop below the Serengeti horizon while breaking your fast in the bush, with wildebeest moving in the distance and the sky going orange and purple, is one of those travel experiences that does not translate into words. It only works if you go.",
  },
]

const faqs = [
  {
    question: "When does Ramadan fall in 2026?",
    answer:
      "Ramadan 2026 begins around February 17 and ends around March 18, subject to moon sighting. This overlaps with the end of calving season in Ndutu and the transition period before peak season. Excellent timing for wildlife: calves still present, migration starting to build, fewer tourists.",
  },
  {
    question: "Is it safe to fast while on safari?",
    answer:
      "Yes, with sensible planning. We schedule midday rest during the hottest hours, provide shade in vehicles, and carry extra water. The morning drive starts early before the heat. We do not push pace during fasting days. Many of our Muslim clients have completed Ramadan safaris without any physical difficulty.",
  },
  {
    question: "What is the Iftar in the field like?",
    answer:
      "Your cook prepares Iftar boxes: dates, water, a warm soup, and a hot main meal that travels in thermal containers. We position the vehicle at a scenic point before sunset. Your guide has the exact prayer time for your GPS coordinates. You break fast, pray Maghrib, then continue if you want or return to camp.",
  },
  {
    question: "Can I do this with a family?",
    answer:
      "Yes. Private vehicles mean the pace is entirely set by your group. If children or elderly family members need more rest than a solo traveler, we adjust. All halal food standards apply regardless of group size.",
  },
  {
    question: "Which camps are used and are they alcohol-free?",
    answer:
      "We select camps where the bar is physically separate from dining and accommodation areas, and we arrange for alcohol to be absent from your room and table. We cannot make the full camp alcohol-free since other guests are present. Your meals, your room, and your vehicle are entirely halal. This is the honest position.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you go on safari in Tanzania during Ramadan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and Ramadan is actually one of the best times of year for a Tanzania safari. Between 2026 and 2029 Ramadan falls in January and February, which is the calving season in the southern Serengeti when hundreds of thousands of wildebeest give birth and predator activity peaks. Game drive schedules are rebuilt around Suhoor, Iftar and prayer times, lodges prepare special pre-dawn and post-sunset meals, and the safari itself fits naturally into the rhythm of the fasting day."
      }
    },
    {
      "@type": "Question",
      "name": "Do Tanzania safari lodges serve Iftar and Suhoor during Ramadan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every lodge and tented camp we work with prepares Suhoor before Fajr and a full Iftar at Maghrib during Ramadan. Suhoor is typically delivered to your room or tent in a heated container so you can eat in private. Iftar starts with dates and water at the precise local Maghrib time, followed by a full hot meal. Mobile camps in the Serengeti adjust their kitchen rota for the month, and chefs are briefed on Ramadan menu preferences before arrival."
      }
    },
    {
      "@type": "Question",
      "name": "How do game drive schedules change during Ramadan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We rebuild the day around the fasting clock. Morning drives leave just after Fajr at around 6.30am rather than the standard 6.00am sunrise start, so you can pray and eat Suhoor properly first. The drive runs until late morning to capture peak wildlife activity, then you return to camp to rest through the hottest hours. An afternoon drive starts at around 4.30pm and times the return to camp for Maghrib, so Iftar is on the table the moment you arrive."
      }
    },
    {
      "@type": "Question",
      "name": "Is it practical to fast on a Tanzania safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and most guests find it easier than fasting at home. The Tanzanian Ramadan day in January and February is shorter than the European or North American equivalent, typically around 12 to 13 hours from Fajr to Maghrib. Game drive vehicles are open-sided so you stay cool, and the slower mid-day rest period fits the fasting rhythm. Islamic rulings on travel exemptions still apply, so guests who choose not to fast are accommodated discreetly without comment from staff."
      }
    },
    {
      "@type": "Question",
      "name": "What is Zanzibar like during Ramadan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zanzibar during Ramadan is one of the most atmospheric Muslim travel experiences in East Africa. Stone Town's Forodhani Gardens night market transforms into a nightly Iftar gathering with grilled seafood, mishkaki, Zanzibar pizza and fresh juices. Taraweeh prayers at the historic Malindi and Aga Khan mosques are open to visitors. Most restaurants close during daylight hours, so we recommend booking a resort with in-house Suhoor and Iftar service. The atmosphere is calmer and the beaches are noticeably less busy."
      }
    },
    {
      "@type": "Question",
      "name": "When is Ramadan in Tanzania over the next few years?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ramadan 2026 ran from approximately 17 February to 18 March. Ramadan 2027 runs from approximately 7 February to 8 March. Ramadan 2028 runs from approximately 27 January to 25 February. Ramadan 2029 runs from approximately 16 January to 14 February. All four windows fall during Tanzania's calving season in southern Serengeti and the early dry months, so safari conditions are excellent. Exact dates depend on the moon sighting and are confirmed by the Tanzania Mufti's office a few days before."
      }
    },
    {
      "@type": "Question",
      "name": "Is travel during Ramadan permissible if you cannot fast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Islamic jurisprudence allows fasting to be deferred when travelling on a journey that meets the recognised distance and hardship thresholds, with missed days made up after Ramadan. Many guests choose to continue fasting because the cooler safari morning and shorter East African day make it manageable. Others use the travel exemption and resume fasting at home. Our staff do not comment either way and provide meals, water and prayer support consistent with whichever decision you make."
      }
    },
    {
      "@type": "Question",
      "name": "Are there extra costs for Ramadan safari arrangements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Suhoor delivery, adjusted game drive timings, Iftar setup and prayer accommodation are all included at standard rates. January and February also fall outside Tanzania's peak August to October pricing band, so a Ramadan safari typically lands in the mid-season tariff. Park fees and Zanzibar resort rates are unchanged. The only Ramadan-specific cost some guests opt into is a private Iftar setup on a sandbank or in the bush, which is bookable as an extra and quoted on request."
      }
    }
  ]
}

export default function RamadanSafari() {
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
            <span className="text-eyebrow uppercase text-orange tracking-widest">Ramadan</span>
          </div>
          <h1 className="font-montserrat text-h1-mobile lg:text-h1-desktop font-bold mb-6 max-w-3xl">
            Ramadan Safari Tanzania
          </h1>
          <p className="text-lead-mobile lg:text-lead-desktop text-cream/85 max-w-2xl mb-8">
            Suhoor at 5am. Dawn drives at first light, when the big cats are still moving. Iftar in the Serengeti as the sun drops below the horizon. The only Tanzania operator running a safari built around Ramadan timing. From $3,200 per person.
          </p>
          <p className="text-body-mobile text-orange font-montserrat font-semibold mb-8">
            No other Tanzania safari company offers this. Zero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Book for Ramadan 2026
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

      {/* Daily Schedule */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">A Day on Ramadan Safari</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-4">
            The Schedule is the Product
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-muted max-w-2xl mb-12">
            The Ramadan timetable and the ideal safari timetable are almost identical. This is not a compromise. It is an advantage.
          </p>
          <div className="space-y-0">
            {schedule.map((item, i) => (
              <div key={i} className="grid grid-cols-4 lg:grid-cols-6 border border-border-soft border-b-0 last:border-b">
                <div className="col-span-1 bg-forest text-cream p-5 flex flex-col justify-center">
                  <span className="font-montserrat font-bold text-sm text-orange">{item.time}</span>
                  <span className="font-montserrat font-semibold text-sm mt-1">{item.label}</span>
                </div>
                <div className="col-span-3 lg:col-span-5 p-5 text-body-mobile text-muted leading-relaxed self-center">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ramadan */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">The Case for Ramadan Safari</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-12">
            Why Every Other Operator is Wrong About Ramadan
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyRamadan.map((item) => (
              <div key={item.title} className="border border-cream/20 p-6">
                <h3 className="font-montserrat font-semibold text-h3-mobile text-orange mb-3">{item.title}</h3>
                <p className="text-body-mobile text-cream/80 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ramadan 2026 dates + parks */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Ramadan 2026</p>
            <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-6">
              February 17 – March 18, 2026
            </h2>
            <div className="space-y-4 text-body-mobile lg:text-body-desktop text-muted leading-relaxed">
              <p>
                Ramadan 2026 is projected to begin around February 17 and end around March 18, subject to moon sighting. These dates overlap with the end of calving season and the transition before peak season.
              </p>
              <p>
                In February and March, the southern Serengeti and Ndutu plains still have hundreds of thousands of wildebeest calves. The migration starts its northward movement in April. You arrive at the end of one of Africa's most spectacular events, with fewer tourists than the June–October peak.
              </p>
              <p>
                Book early. Ramadan dates shift each year and camp availability during shoulder season sells out faster than most people expect.
              </p>
            </div>
          </div>
          <div>
            <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Recommended Parks</p>
            <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-6">
              Where to Go During Ramadan 2026
            </h2>
            <div className="space-y-4">
              {[
                { park: "Ndutu / Southern Serengeti", reason: "End of calving season. Still 200,000+ wildebeest calves. Lions heavily present." },
                { park: "Ngorongoro Crater", reason: "Year-round Big Five. Always worth a full day. No seasonal variation." },
                { park: "Tarangire", reason: "Elephant concentrations at their highest February–March as they return from wet-season dispersal." },
              ].map((item) => (
                <div key={item.park} className="border border-border-soft p-5">
                  <h3 className="font-montserrat font-semibold text-ink mb-1">{item.park}</h3>
                  <p className="text-body-mobile text-muted">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream border-t border-border-soft">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">FAQ</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-12">
            Ramadan Safari Questions
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
            Ramadan 2026 Spots Are Limited
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-xl mx-auto mb-10">
            We run a small number of Ramadan safari groups. Contact us now with your dates and group size. Full itinerary and itemised pricing within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Enquire Now
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
