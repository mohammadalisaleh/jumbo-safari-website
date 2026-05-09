import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllNationalParks } from "@/lib/data/national-parks"

export const metadata: Metadata = {
  title: "Tanzania National Parks | Safari Park Guide",
  description:
    "Guide to Tanzania's national parks and conservation areas on the northern and southern circuits. Serengeti, Ngorongoro, Tarangire, Lake Manyara, Ndutu, and Ruaha — what each park offers and when to go.",
  alternates: { canonical: "https://www.jumbosafaris.com/national-parks" },
  openGraph: {
    title: "Tanzania National Parks | Jumbo Safaris",
    description:
      "Guide to Tanzania's national parks on the northern and southern circuits. What each park offers and when to go.",
    url: "https://www.jumbosafaris.com/national-parks",
  },
}

const parkHighlights: Record<string, string> = {
  serengeti: "Great Migration, lion, leopard, cheetah. Tanzania's flagship park.",
  "ngorongoro-crater": "25,000 animals inside a volcanic caldera. Black rhino, lion, year-round.",
  tarangire: "Largest elephant herds in Tanzania. Ancient baobabs. Excellent dry-season game viewing.",
  "lake-manyara": "Tree-climbing lions, flamingos, and diverse habitats along the Rift Valley.",
  ndutu: "Wildebeest calving season. Off-road driving permitted. Best predator viewing in Africa (Jan-Mar).",
  ruaha: "Tanzania's largest park. African wild dog, elephant, lion. Virtually no crowds.",
}

export default function NationalParksPage() {
  const parks = getAllNationalParks()

  const northernCircuit = parks.filter((p) =>
    ["serengeti", "ngorongoro-crater", "tarangire", "lake-manyara", "ndutu"].includes(p.slug)
  )
  const southernCircuit = parks.filter((p) => ["ruaha"].includes(p.slug))

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Tanzania National Parks
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Tanzania has 22 national parks and one of the most significant conservation areas in Africa. Six of them are worth building a trip around.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="max-w-prose">
          <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
            Most Tanzania safaris run the northern circuit: Tarangire, the Serengeti, and Ngorongoro Crater, three parks within a day's drive of Arusha. For the majority of visitors, this is the right choice. The infrastructure is good, the wildlife is exceptional, and the circuit can be covered in 5 to 10 days. Ndutu, technically inside the Ngorongoro Conservation Area rather than a national park, sits at the circuit's western edge and becomes the most important destination in East Africa for six weeks each year during wildebeest calving season.
          </p>
          <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
            The southern circuit, anchored by Ruaha, requires a flight from Arusha or Dar es Salaam. The tradeoff is a park seven times the size of the Serengeti with almost no vehicle traffic. African wild dog, the continent's most endangered large predator, is reliably tracked here. Ruaha works best as a standalone trip or combined with Zanzibar.
          </p>
          <p className="text-body-mobile md:text-body-desktop text-ink">
            Each park below has its own page with entry fees, seasonal breakdown, and what you actually see on a game drive. The cards here are the starting point.
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
            {northernCircuit.map((park) => (
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
                  <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                    {park.name}
                  </h3>
                  <p className="text-sm text-muted mb-3">{park.quickFacts.bestTime}</p>
                  <p className="text-body-mobile text-ink mb-5">
                    {parkHighlights[park.slug] ?? park.tagline}
                  </p>
                  <Link
                    href={`/national-parks/${park.slug}`}
                    className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                  >
                    Explore {park.name.replace(" National Park", "").replace(" Crater", "")}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
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
            {southernCircuit.map((park) => (
              <article key={park.slug} className="border border-border-soft bg-white">
                <div className="aspect-[4/3] bg-forest-dark overflow-hidden flex items-center justify-center">
                  <span className="text-cream/40 text-sm font-inter">{park.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                    {park.name}
                  </h3>
                  <p className="text-sm text-muted mb-3">{park.quickFacts.bestTime}</p>
                  <p className="text-body-mobile text-ink mb-5">
                    {parkHighlights[park.slug] ?? park.tagline}
                  </p>
                  <Link
                    href={`/national-parks/${park.slug}`}
                    className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                  >
                    Explore {park.name.replace(" National Park", "")}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
            Park Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-border-soft text-sm">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Park</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Area</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Best Time</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Famous For</th>
                  <th className="px-4 py-3 text-left font-montserrat font-semibold">Access</th>
                </tr>
              </thead>
              <tbody>
                {parks.map((park, index) => (
                  <tr key={park.slug} className={index % 2 === 0 ? "bg-white" : "bg-cream"}>
                    <td className="px-4 py-3 font-semibold text-forest">
                      <Link href={`/national-parks/${park.slug}`} className="hover:text-orange transition-colors">
                        {park.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-ink">{park.quickFacts.area.split("(")[0].trim()}</td>
                    <td className="px-4 py-3 text-ink">{park.quickFacts.bestTime.split("·")[0].trim()}</td>
                    <td className="px-4 py-3 text-ink">{park.quickFacts.famousFor.split(",").slice(0, 2).join(", ")}</td>
                    <td className="px-4 py-3 text-ink">{park.slug === "ruaha" ? "Fly-in" : "Road from Arusha"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
  )
}
