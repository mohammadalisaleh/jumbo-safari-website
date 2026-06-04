import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllNationalParks } from "@/lib/data/national-parks"

export const metadata: Metadata = {
  title: "Tanzania National Parks | Safari Park Guide & Comparison",
  description:
    "Tanzania has 21 TANAPA national parks plus the Ngorongoro Conservation Area. This guide covers the six parks worth building a trip around — what each one offers, when to go, entry fees, and which park suits your priorities.",
  alternates: { canonical: "https://www.jumbosafaris.com/national-parks" },
  openGraph: {
    title: "Tanzania National Parks | Jumbo Safaris",
    description:
      "The six Tanzania parks worth building a trip around. Entry fees, best months, wildlife, and how to combine them.",
    url: "https://www.jumbosafaris.com/national-parks",
  },
}

const parkHighlights: Record<string, { best: string; when: string; blurb: string }> = {
  serengeti: {
    best: "Best for: Great Migration, lion, open plains",
    when: "Year-round · Peak June–October",
    blurb:
      "Tanzania's flagship park. 14,763 km², roughly 3,000 lions, and the only place on earth where you can watch 1.37 million wildebeest in motion. The migration crosses the Mara River at the north from July to October. Calving season at the south runs January to March.",
  },
  "ngorongoro-crater": {
    best: "Best for: Big Five in one day, black rhino",
    when: "Year-round · June–October for clearest skies",
    blurb:
      "A collapsed volcanic caldera 19 km across, holding roughly 25,000 large animals on its floor. One of the few places in Tanzania where black rhino sightings are realistic. UNESCO Mixed World Heritage Site, inscribed 1979.",
  },
  tarangire: {
    best: "Best for: Elephant, dry-season density, baobabs",
    when: "June–October (dry season)",
    blurb:
      "In the dry season, the Tarangire River becomes the only water source for miles. Elephant, buffalo, zebra, and wildebeest funnel in from across the region. Bird count sits at 588 species. The baobabs are ancient and large enough to change how the park looks.",
  },
  "lake-manyara": {
    best: "Best for: Short itineraries, bird variety, ghost forest",
    when: "June–March · Year-round possible",
    blurb:
      "A compact park that earns a half day or full day on most northern circuit routes. The alkaline lake draws flamingo in variable numbers. Since around 2020 the fever tree woodlands have flooded, creating a ghost forest of white skeletal trees — genuinely unlike anything else on the circuit.",
  },
  ndutu: {
    best: "Best for: Calving season, predator action, off-road driving",
    when: "January–March",
    blurb:
      "Technically inside the Ngorongoro Conservation Area, not a TANAPA national park. The distinction matters because off-road driving is permitted here, which is not the case in most parks. The wildebeest calving peak runs roughly six weeks from late January through early March. Predator concentration during this window is exceptional.",
  },
  ruaha: {
    best: "Best for: African wild dog, solitude, big game without crowds",
    when: "June–October",
    blurb:
      "Tanzania's second-largest national park at 20,226 km² — about 1.4 times the size of the Serengeti. Getting here requires a flight from Arusha or Dar es Salaam. In return you get one of Africa's strongest wild dog populations, large elephant herds, and game drives where you rarely see another vehicle.",
  },
}

const fees = [
  { park: "Serengeti", authority: "TANAPA", fee: "$70 peak / $60 low", note: "Peak: 16 May–14 Mar" },
  { park: "Tarangire", authority: "TANAPA", fee: "$50 peak / $45 low", note: "Same peak/low calendar" },
  { park: "Lake Manyara", authority: "TANAPA", fee: "$50 peak / $45 low", note: "Same peak/low calendar" },
  { park: "Ruaha", authority: "TANAPA", fee: "$30 year-round", note: "No seasonal split" },
  { park: "Ngorongoro (NCA)", authority: "NCAA", fee: "$70.80", note: "Plus $295/vehicle crater descent fee" },
  { park: "Ndutu (NCA)", authority: "NCAA", fee: "NCA rate applies", note: "Sub-region of NCA" },
]

const faqs = [
  {
    q: "How many national parks does Tanzania have?",
    a: "Tanzania has 21 national parks administered by TANAPA (Tanzania National Parks Authority). The Ngorongoro Conservation Area is separate — it is administered by the NCAA (Ngorongoro Conservation Area Authority) and is not classified as a national park. Ndutu is a sub-region within the NCA, not a distinct park. Most travel sites say 22 by bundling NCA in, but the correct TANAPA count is 21.",
  },
  {
    q: "What is the best national park in Tanzania?",
    a: "The Serengeti is the most iconic and the most versatile — it delivers year-round and covers more wildlife spectacle than any other single park. But 'best' depends on your priorities. If you want Big Five in a single day, Ngorongoro Crater is more reliable. If you want elephants and dry-season density, Tarangire is hard to beat. If you want no other vehicles, Ruaha.",
  },
  {
    q: "What is the most visited national park in Tanzania?",
    a: "The Serengeti. It sits at the centre of every standard northern circuit and is the anchor park for the Great Migration, which draws the highest visitor numbers of any Tanzania wildlife event.",
  },
  {
    q: "Which is better — Tarangire or Ngorongoro?",
    a: "They serve different purposes. Tarangire is a full park experience — you drive, you track, you look for animals across open land. Ngorongoro Crater is compact and dense — 25,000 animals on a caldera floor, reliably visible without much searching. Most itineraries include both. If you must pick one: Tarangire for immersion, Ngorongoro for first-time guests who want guaranteed sightings.",
  },
  {
    q: "What are the Big Five in Tanzania?",
    a: "Lion, leopard, elephant, Cape buffalo, and black rhino. Tanzania has all five. Black rhino is the hardest — the best place to find them is Ngorongoro Crater, which holds an estimated 26-55 individuals. Serengeti has rhino at Moru Kopjes but sightings require a special permit and ranger escort.",
  },
  {
    q: "What is the best month to do a safari in Tanzania?",
    a: "June to October covers the dry season across the northern circuit. Wildlife concentrates around water, vegetation thins, and game drives are consistently productive. July to October is also when the Great Migration is in the Serengeti's north. January to March is calving season at Ndutu — the best time for predator action. April and May are the long rains — roads can be difficult but prices drop significantly.",
  },
  {
    q: "How many days is enough for a Tanzania safari?",
    a: "Five days is the minimum for a meaningful northern circuit (Tarangire, Serengeti, Ngorongoro). Seven to eight days is the comfortable version that allows more time in each park and doesn't feel rushed. Ten days adds Zanzibar without compromising the safari. Anything under four nights on safari is unlikely to produce the experience most people are imagining.",
  },
  {
    q: "Is Kenya or Tanzania better for safari?",
    a: "Tanzania has more land in the Serengeti ecosystem than Kenya has in Masai Mara — roughly 14,763 km² versus 1,510 km². Vehicle density in the Mara during peak season is significantly higher. Tanzania also has Tarangire, Ngorongoro, Ruaha, and Ndutu, which Kenya has no equivalent for. Kenya's advantage is infrastructure and flight connections. For the wildlife, Tanzania wins.",
  },
]

export default function NationalParksPage() {
  const parks = getAllNationalParks()

  const northernCircuit = parks.filter((p) =>
    ["serengeti", "ngorongoro-crater", "tarangire", "lake-manyara", "ndutu"].includes(p.slug)
  )
  const southernCircuit = parks.filter((p) => ["ruaha"].includes(p.slug))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Tanzania National Parks", item: "https://www.jumbosafaris.com/national-parks" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Tanzania National Parks
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Tanzania has 21 TANAPA national parks. Six of them are worth building a trip around. Here is how they compare.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="max-w-prose">
          <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
            Most Tanzania safaris run the northern circuit: Tarangire, Serengeti, and Ngorongoro, three parks within a day&apos;s drive of Arusha. For most visitors, this is the right choice. The infrastructure is solid, the wildlife is exceptional, and the full circuit fits into five to ten days. Ndutu sits at the circuit&apos;s western edge inside the Ngorongoro Conservation Area (administered separately from TANAPA) and becomes the most important calving ground in East Africa for roughly six weeks each January and February.
          </p>
          <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
            The southern circuit, anchored by Ruaha, requires a flight from Arusha or Dar es Salaam. Ruaha is Tanzania&apos;s second-largest national park at 20,226 km² — about 1.4 times the size of the Serengeti. The tradeoff for the flight is a park with one of Africa&apos;s strongest African wild dog populations and game drives where you&apos;ll rarely see another vehicle.
          </p>
          <p className="text-body-mobile md:text-body-desktop text-ink">
            Each park below has its own page with entry fees, seasonal breakdown, and what you actually see on a game drive. The cards are the starting point. Use the comparison table and FAQ below to narrow down what suits your itinerary.
          </p>
        </div>
      </section>

      {/* Northern Circuit */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="mb-12">
            <p className="text-eyebrow uppercase text-orange mb-2">Northern Circuit</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Arusha is the base. These parks are within reach by road.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {northernCircuit.map((park) => {
              const h = parkHighlights[park.slug]
              return (
                <article key={park.slug} className="border border-border-soft bg-cream">
                  <div className="aspect-[4/3] bg-forest overflow-hidden">
                    {park.heroImage ? (
                      <Image
                        src={park.heroImage.src}
                        alt={park.heroImage.alt}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-forest-dark">
                        <span className="text-cream/40 text-sm font-inter">{park.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-[22px] text-forest mb-1">
                      {park.name}
                    </h3>
                    {h && (
                      <>
                        <p className="text-xs font-semibold text-orange uppercase tracking-wide mb-1">{h.best}</p>
                        <p className="text-sm text-ink/70 mb-3">{h.when}</p>
                        <p className="text-body-mobile text-ink mb-5">{h.blurb}</p>
                      </>
                    )}
                    <Link
                      href={`/national-parks/${park.slug}`}
                      className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                    >
                      Explore {park.name.replace(" National Park", "").replace(" Crater", "")}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-12 border border-border-soft bg-cream p-6 max-w-2xl">
            <p className="font-montserrat font-semibold text-forest mb-2">Not sure which northern circuit combination is right?</p>
            <p className="text-body-mobile text-ink mb-4">
              The 5-day northern circuit covers Tarangire, Serengeti, and Ngorongoro. The 8-day version adds time in each park and removes the rush. Tell us your dates and we will build the right route.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/itineraries/5-day-northern-circuit" className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group text-sm">
                5-Day Northern Circuit <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/itineraries/great-migration-safari" className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group text-sm">
                Great Migration Safari <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Southern Circuit */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="mb-12">
            <p className="text-eyebrow uppercase text-orange mb-2">Southern Circuit</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Fly in. Almost no one else does.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {southernCircuit.map((park) => {
              const h = parkHighlights[park.slug]
              return (
                <article key={park.slug} className="border border-border-soft bg-white">
                  <div className="aspect-[4/3] bg-forest-dark overflow-hidden flex items-center justify-center">
                    <span className="text-cream/40 text-sm font-inter">{park.name}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-[22px] text-forest mb-1">
                      {park.name}
                    </h3>
                    {h && (
                      <>
                        <p className="text-xs font-semibold text-orange uppercase tracking-wide mb-1">{h.best}</p>
                        <p className="text-sm text-ink/70 mb-3">{h.when}</p>
                        <p className="text-body-mobile text-ink mb-5">{h.blurb}</p>
                      </>
                    )}
                    <Link
                      href={`/national-parks/${park.slug}`}
                      className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                    >
                      Explore {park.name.replace(" National Park", "")}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-3">
            Park Comparison
          </h2>
          <p className="text-body-mobile text-ink mb-8 max-w-prose">
            All fees are non-resident adult, per day. No VAT applies to government park fees. Source: TANAPA/NCAA tariff. See <Link href="/tanzania-park-fees" className="underline hover:text-forest">full park fee breakdown</Link> for current verified rates.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-border-soft text-sm">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Park</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Area</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Best Time</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Entry Fee</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Access</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-forest"><Link href="/national-parks/serengeti" className="hover:text-orange transition-colors">Serengeti</Link></td>
                  <td className="px-4 py-3 text-ink">14,763 km²</td>
                  <td className="px-4 py-3 text-ink">Year-round · Jun–Oct peak</td>
                  <td className="px-4 py-3 text-ink">$70 peak / $60 low</td>
                  <td className="px-4 py-3 text-ink">Road from Arusha · Fly-in available</td>
                </tr>
                <tr className="bg-cream">
                  <td className="px-4 py-3 font-semibold text-forest"><Link href="/national-parks/ngorongoro-crater" className="hover:text-orange transition-colors">Ngorongoro (NCA)</Link></td>
                  <td className="px-4 py-3 text-ink">8,292 km² (NCA)</td>
                  <td className="px-4 py-3 text-ink">Year-round · Jun–Oct clearest</td>
                  <td className="px-4 py-3 text-ink">$70.80 + $295/vehicle crater descent</td>
                  <td className="px-4 py-3 text-ink">Road from Arusha (~3 hrs)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-forest"><Link href="/national-parks/tarangire" className="hover:text-orange transition-colors">Tarangire</Link></td>
                  <td className="px-4 py-3 text-ink">2,850 km²</td>
                  <td className="px-4 py-3 text-ink">Jun–Oct (dry season)</td>
                  <td className="px-4 py-3 text-ink">$50 peak / $45 low</td>
                  <td className="px-4 py-3 text-ink">Road from Arusha (~2 hrs)</td>
                </tr>
                <tr className="bg-cream">
                  <td className="px-4 py-3 font-semibold text-forest"><Link href="/national-parks/lake-manyara" className="hover:text-orange transition-colors">Lake Manyara</Link></td>
                  <td className="px-4 py-3 text-ink">648 km²</td>
                  <td className="px-4 py-3 text-ink">Jun–Mar</td>
                  <td className="px-4 py-3 text-ink">$50 peak / $45 low</td>
                  <td className="px-4 py-3 text-ink">Road from Arusha (~2 hrs)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-forest"><Link href="/national-parks/ndutu" className="hover:text-orange transition-colors">Ndutu (NCA)</Link></td>
                  <td className="px-4 py-3 text-ink">Part of NCA</td>
                  <td className="px-4 py-3 text-ink">Jan–Mar (calving)</td>
                  <td className="px-4 py-3 text-ink">NCA rate applies</td>
                  <td className="px-4 py-3 text-ink">Road via Ngorongoro gate</td>
                </tr>
                <tr className="bg-cream">
                  <td className="px-4 py-3 font-semibold text-forest"><Link href="/national-parks/ruaha" className="hover:text-orange transition-colors">Ruaha</Link></td>
                  <td className="px-4 py-3 text-ink">20,226 km²</td>
                  <td className="px-4 py-3 text-ink">Jun–Oct</td>
                  <td className="px-4 py-3 text-ink">$30 year-round</td>
                  <td className="px-4 py-3 text-ink">Fly-in from Arusha or DSM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
            Common questions
          </h2>
          <div className="max-w-prose space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-montserrat font-bold text-[18px] text-forest mb-2">{faq.q}</h3>
                <p className="text-body-mobile text-ink">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Not sure which parks to include?
          </h2>
          <p className="text-lead-mobile text-cream/90 max-w-prose mx-auto mb-8">
            Tell us your dates, your budget, and what matters most. We will build the right route.
          </p>
          <Link
            href="/contact"
            className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
          >
            Plan Your Safari
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
