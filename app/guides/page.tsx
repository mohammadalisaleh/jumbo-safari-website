import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllGuides } from "@/lib/data/guides"

export const metadata: Metadata = {
  title: "Tanzania Safari Planning Guides & Tips",
  description: "Practical Tanzania safari guides from an Arusha-based operator: when to go, what to pack, and the visa rules that catch travellers out.",
  alternates: { canonical: "https://www.jumbosafaris.com/guides" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.jumbosafaris.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.jumbosafaris.com/guides"
    }
  ]
}

export default function GuidesIndexPage() {
  const guides = getAllGuides()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-forest text-cream pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-4 tracking-widest text-sm font-semibold">Guides</p>
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-6 max-w-3xl leading-tight">
            Tanzania safari guides, written from Arusha
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            The practical detail that decides a trip: when to come, what to bring, and the paperwork that turns people back at the border. No filler, just what we tell our own clients.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group border border-forest/10 bg-white p-8 flex flex-col hover:border-orange transition-colors"
              >
                <h2 className="font-montserrat font-bold text-xl text-forest mb-3 leading-snug">
                  {guide.title}
                </h2>
                <p className="text-ink/80 leading-relaxed mb-6 flex-1">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-2 text-orange font-montserrat font-semibold text-sm uppercase tracking-widest">
                  Read guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
