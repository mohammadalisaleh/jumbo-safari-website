import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { getGuide, getAllGuides } from "@/lib/data/guides"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) {
    return {
      title: "Guide Not Found",
    }
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `https://jumbosafaris.com/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://jumbosafaris.com/guides/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) {
    notFound()
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides" className="hover:text-forest transition-colors">
              Guides
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-forest">{guide.title}</span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="max-w-content mx-auto px-6 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Left Column - Main Content */}
            <div className="max-w-prose">
              {/* Header */}
              <header className="mb-8">
                <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop text-forest mb-6">
                  {guide.title}
                </h1>
                <p className="text-lead-mobile md:text-lead-desktop text-ink">
                  {guide.leadParagraph}
                </p>
              </header>

              {/* Table of Contents */}
              <nav className="bg-white border border-border-soft p-6 mb-12">
                <h2 className="font-montserrat font-semibold text-forest mb-4">
                  In This Guide
                </h2>
                <ul className="space-y-2">
                  {guide.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-forest hover:text-orange transition-colors"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#faqs"
                      className="text-forest hover:text-orange transition-colors"
                    >
                      Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Sections */}
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                  <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-body-mobile md:text-body-desktop text-ink"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Mid-page CTA */}
              <div className="bg-forest text-cream p-8 mb-12">
                <h3 className="font-montserrat font-bold text-xl mb-2">
                  Planning a Tanzania safari?
                </h3>
                <p className="text-cream/80 mb-4">
                  Get a free custom itinerary designed around the best time for your interests.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-cream text-forest font-montserrat font-semibold px-6 py-3 hover:bg-cream/90 transition-colors"
                >
                  Start Planning
                </Link>
              </div>

              {/* FAQ Section */}
              <section id="faqs" className="scroll-mt-24">
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {guide.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-border-soft pb-6 last:border-0"
                    >
                      <h3 className="font-montserrat font-semibold text-forest mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-ink">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <aside className="lg:self-start lg:sticky lg:top-24">
              <div className="bg-white border border-border-soft p-6 mb-6">
                <h3 className="font-montserrat font-bold text-lg text-forest mb-4">
                  Related Guides
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/guides/tanzania-safari-cost"
                      className="text-forest hover:text-orange transition-colors"
                    >
                      Tanzania Safari Cost Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides/what-to-pack-safari"
                      className="text-forest hover:text-orange transition-colors"
                    >
                      What to Pack for Safari
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides/tanzania-visa-requirements"
                      className="text-forest hover:text-orange transition-colors"
                    >
                      Tanzania Visa Requirements
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-forest text-cream p-6">
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Need Expert Advice?
                </h3>
                <p className="text-sm text-cream/80 mb-4">
                  Our Arusha-based team knows Tanzania inside out. Ask us anything.
                </p>
                <a
                  href="https://wa.me/255742789292"
                  className="block w-full bg-cream text-forest font-montserrat font-semibold px-6 py-3 text-center hover:bg-cream/90 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
