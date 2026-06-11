import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Serengeti vs Ngorongoro vs Tarangire",
  description:
    "Honest comparison of Tanzania's three main safari parks. Size, wildlife, cost, best months, and who each park suits best. From a guide based in Arusha.",
  alternates: { canonical: "https://www.jumbosafaris.com/serengeti-vs-ngorongoro-vs-tarangire" },
  openGraph: {
    title: "Serengeti vs Ngorongoro vs Tarangire: Park Comparison 2026",
    description:
      "Which Tanzania park is right for your safari? Honest breakdown of all three.",
    url: "https://www.jumbosafaris.com/serengeti-vs-ngorongoro-vs-tarangire",
  },
}

const faqs = [
  {
    question: "Is the Serengeti or Ngorongoro better?",
    answer:
      "Different things entirely. The Serengeti is 14,763 square kilometres of open plains with the world's largest mammal migration moving through it all year. Ngorongoro is a collapsed volcano 260 square kilometres on the floor, with permanently resident animals that rarely leave. Most 8-day Northern Circuit itineraries include both. Choosing one over the other only makes sense on very short trips.",
  },
  {
    question: "Can I see the Big Five in all three parks?",
    answer:
      "Ngorongoro Crater is the most reliable for all five: lion, elephant, buffalo, leopard, and black rhino. The crater has one of the highest lion densities in Africa and around 50 black rhino, which is rare. The Serengeti has all five but rhino sightings are less common. Tarangire does not have rhino but has exceptional elephant concentrations and is the best park for dry-season variety.",
  },
  {
    question: "Which park is best for elephants?",
    answer:
      "Tarangire, and it is not close. In the dry season (June–October) the Tarangire River acts as the only water source for the surrounding ecosystem. Herds of 200+ elephants are common on a single morning drive. The park also has a very high density of massive old bulls. No other park on the Northern Circuit comes close for elephants.",
  },
  {
    question: "Which park is best for the Great Migration?",
    answer:
      "The Serengeti. The migration is a year-round loop through the Serengeti and into Kenya's Masai Mara. The Mara River crossings happen in the northern Serengeti from July through October. Calving season is in the southern Serengeti and Ndutu area from January through March. Ngorongoro and Tarangire are not part of the migration route.",
  },
  {
    question: "Which park is cheapest to visit?",
    answer:
      "Tarangire has the lowest park fees ($65/person/day vs $80 for Serengeti and Ngorongoro). It is also closest to Arusha, reducing driving time and fuel costs. Ngorongoro is the most expensive: $80/person/day plus a $295 vehicle fee every time you descend into the crater. On a 2-person itinerary, one crater descent adds $455 to the total.",
  },
  {
    question: "Do I need to visit all three parks?",
    answer:
      "On an 8-day safari, yes, all three make sense. On a 5-day trip, you need to choose. Tarangire plus Serengeti works well for first-timers who prioritise wildlife volume. Serengeti plus Ngorongoro works if the Big Five and the crater experience matter most. Tarangire alone is a mistake on any trip longer than 3 days.",
  },
]

export default function ParkComparisonPage() {
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
      { "@type": "ListItem", position: 2, name: "Serengeti vs Ngorongoro vs Tarangire", item: "https://www.jumbosafaris.com/serengeti-vs-ngorongoro-vs-tarangire" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink/70">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/national-parks" className="hover:text-forest transition-colors">National Parks</Link>
            <span>/</span>
            <span className="text-forest">Park Comparison</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Park Comparison</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Serengeti vs Ngorongoro vs Tarangire
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              Three very different parks. The question of which to visit is really a question of what you want to see and how long you have.
            </p>
          </div>
        </section>

        {/* Three-park image strip */}
        <section className="bg-cream py-10 md:py-12">
          <div className="max-w-content mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Serengeti",
                  src: "/serengeti-plains-golden-hour-tanzania-safari-hero.jpg",
                  alt: "Open Serengeti plains at golden hour, Tanzania",
                },
                {
                  name: "Ngorongoro Crater",
                  src: "/ngorongoro-crater-floor-zebra-gazelle-tanzania.jpg",
                  alt: "Zebra and gazelle on the floor of Ngorongoro Crater, Tanzania",
                },
                {
                  name: "Tarangire",
                  src: "/tarangire-elephants-baobab-tanzania-safari.jpg",
                  alt: "Elephant herd passing a giant baobab tree in Tarangire National Park, Tanzania",
                },
              ].map((park) => (
                <figure key={park.name}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={park.src}
                      alt={park.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="font-montserrat font-semibold text-forest mt-3">
                    {park.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Quick facts comparison */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">At a Glance</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Side-by-side comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-forest text-cream">
                    <th className="text-left p-4 font-montserrat font-semibold w-36"></th>
                    <th className="text-left p-4 font-montserrat font-semibold">Serengeti</th>
                    <th className="text-left p-4 font-montserrat font-semibold">Ngorongoro Crater</th>
                    <th className="text-left p-4 font-montserrat font-semibold">Tarangire</th>
                  </tr>
                </thead>
                <tbody className="text-ink/80">
                  <tr className="border-b border-forest/10 bg-cream">
                    <td className="p-4 font-montserrat font-semibold text-forest">Size</td>
                    <td className="p-4">14,763 km²</td>
                    <td className="p-4">260 km² (crater floor)</td>
                    <td className="p-4">2,850 km²</td>
                  </tr>
                  <tr className="border-b border-forest/10 bg-forest/5">
                    <td className="p-4 font-montserrat font-semibold text-forest">Entry fee</td>
                    <td className="p-4">$80/person/day</td>
                    <td className="p-4">$80/person/day + $295/vehicle</td>
                    <td className="p-4">$65/person/day</td>
                  </tr>
                  <tr className="border-b border-forest/10 bg-cream">
                    <td className="p-4 font-montserrat font-semibold text-forest">Drive from Arusha</td>
                    <td className="p-4">~5 hours</td>
                    <td className="p-4">~3.5 hours</td>
                    <td className="p-4">~2 hours</td>
                  </tr>
                  <tr className="border-b border-forest/10 bg-forest/5">
                    <td className="p-4 font-montserrat font-semibold text-forest">Best months</td>
                    <td className="p-4">Year-round (varies by zone)</td>
                    <td className="p-4">June–Sept, Jan–Mar</td>
                    <td className="p-4">June–Oct (dry season)</td>
                  </tr>
                  <tr className="border-b border-forest/10 bg-cream">
                    <td className="p-4 font-montserrat font-semibold text-forest">Big Five</td>
                    <td className="p-4">Yes (rhino rare)</td>
                    <td className="p-4">Yes, all five regularly</td>
                    <td className="p-4">No rhino</td>
                  </tr>
                  <tr className="border-b border-forest/10 bg-forest/5">
                    <td className="p-4 font-montserrat font-semibold text-forest">Migration</td>
                    <td className="p-4">Yes, year-round movement</td>
                    <td className="p-4">No</td>
                    <td className="p-4">No</td>
                  </tr>
                  <tr className="border-b border-forest/10 bg-cream">
                    <td className="p-4 font-montserrat font-semibold text-forest">Best for elephants</td>
                    <td className="p-4">Good</td>
                    <td className="p-4">Present, not the focus</td>
                    <td className="p-4">Best in Africa (dry season)</td>
                  </tr>
                  <tr className="bg-forest/5">
                    <td className="p-4 font-montserrat font-semibold text-forest">Overnight allowed</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Rim only</td>
                    <td className="p-4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pick X if */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Decision Guide</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Which park for you
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream p-8">
                <h3 className="font-montserrat font-bold text-xl text-forest mb-4">Pick Serengeti if...</h3>
                <ul className="space-y-3 text-ink/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    The migration is the reason you are coming to Tanzania
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You want multiple nights in a single park (the Serengeti rewards time)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    Predators are your priority: lion, cheetah, leopard, hyena, wild dog
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You want the classic wide-open-plains safari landscape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You are doing 8+ days and want the full Northern Circuit
                  </li>
                </ul>
              </div>

              <div className="bg-cream p-8">
                <h3 className="font-montserrat font-bold text-xl text-forest mb-4">Pick Ngorongoro if...</h3>
                <ul className="space-y-3 text-ink/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You need a near-certain Big Five sighting on a short trip
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    Black rhino specifically matters to you (nowhere else compares)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    The landscape itself is the draw (the crater walls are extraordinary)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You want high animal density in a compact, navigable space
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You are combining with Tarangire or Serengeti, not instead of them
                  </li>
                </ul>
              </div>

              <div className="bg-cream p-8">
                <h3 className="font-montserrat font-bold text-xl text-forest mb-4">Pick Tarangire if...</h3>
                <ul className="space-y-3 text-ink/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    Elephants are your main interest (nothing in Africa competes in dry season)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You want fewer tourist vehicles (Tarangire is far less crowded than Serengeti)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    The baobab landscape appeals, the ancient trees are thousands of years old
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You are visiting June through October (the dry season payoff here is significant)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest font-bold mt-0.5">+</span>
                    You are close to Arusha and want an efficient first-or-last park
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Serengeti detail */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Deep Dive</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  The Serengeti
                </h2>
                <p className="text-body text-ink/80 mb-4">
                  14,763 square kilometres. To put that in perspective, it is slightly larger than Connecticut. You can drive for three hours inside the park and still be in the Serengeti.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  The migration is real and it is extraordinary, but the Serengeti is not just the migration. In any month, the predator density here is among the highest on the continent. Cheetah on the southern plains, leopard in the kopjes and along the Seronera River, wild dog packs in the Loliondo area. Lions everywhere.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  The zone you visit should match when you travel. July–October: northern Serengeti, Mara River, the crossings. January–March: southern Serengeti, Ndutu, calving. November–December and April–June: central Serengeti works year-round for predators.
                </p>
                <p className="text-body text-ink/80">
                  Three nights minimum. Two is not enough.
                </p>
              </div>

              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Deep Dive</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Ngorongoro Crater
                </h2>
                <p className="text-body text-ink/80 mb-4">
                  The crater is 19 kilometres across. You descend 600 metres from the rim and spend the day on the floor before driving back up. You cannot stay overnight in the crater itself.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  The animal numbers are staggering for the space: roughly 120 lions, 50 black rhino, 15,000 wildebeest, 9,000 zebra. Because the walls trap them, densities are far higher than any open park. A single morning drive in the crater will typically produce lions, elephant, buffalo, hippo, flamingo, and a reasonable chance at rhino.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  There are no giraffe. The walls are too steep for them to descend, so in a few million years of living next to this place, they never figured it out or never tried.
                </p>
                <p className="text-body text-ink/80">
                  One full day is enough. Two is indulgent but not wrong.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-eyebrow uppercase text-orange mb-3">Deep Dive</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                Tarangire
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-body text-ink/80">
                  Most people underestimate Tarangire. It is the first park on the standard Northern Circuit route, two hours from Arusha, and some guides treat it as a warm-up act for the Serengeti. That is a mistake. In the dry season the Tarangire River is the only permanent water source for hundreds of kilometres and every animal in the ecosystem comes to it. The elephant herds here are the largest anywhere in Tanzania, sometimes 200 in a single group. Old bulls with tusks that touch the ground. Cows with calves so young they can barely walk.
                </p>
                <p className="text-body text-ink/80">
                  Beyond the elephants: fringe-eared oryx, gerenuk (a long-necked antelope that browses standing upright on its hind legs), greater kudu, and python in the fig trees along the river. Bird list runs past 550 species. The baobabs are 3,000 years old in some cases. The park is also far less crowded than the Serengeti. On a full-day drive in October, you might see six other vehicles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Park comparison questions
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

        {/* Related links */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              Explore each park
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Serengeti National Park", slug: "serengeti" },
                { name: "Ngorongoro Crater", slug: "ngorongoro-crater" },
                { name: "Tarangire National Park", slug: "tarangire" },
              ].map((park) => (
                <Link
                  key={park.slug}
                  href={`/national-parks/${park.slug}`}
                  className="flex items-center justify-between p-5 border border-forest/20 hover:border-forest hover:bg-forest/5 transition-colors group"
                >
                  <span className="font-montserrat font-semibold text-forest">{park.name}</span>
                  <ArrowRight className="w-4 h-4 text-forest group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
