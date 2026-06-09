import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Trust Jumbo Safaris | Transparency, Verification & Founder Story",
  description:
    "How to verify Jumbo Safaris before you book: founder background, contact details, what questions to ask any Tanzania safari operator, and our price transparency policy.",
  alternates: { canonical: "https://www.jumbosafaris.com/about/trust" },
  openGraph: {
    title: "Why Trust Jumbo Safaris | Verification & Transparency",
    description:
      "Founder background, contact details, and how to verify any Tanzania safari operator before booking.",
    url: "https://www.jumbosafaris.com/about/trust",
  },
}

export default function TrustPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Jumbo Safaris",
    url: "https://www.jumbosafaris.com",
    logo: "https://www.jumbosafaris.com/logo-horizontal.png",
    telephone: "+255742789292",
    email: "hello@jumbosafaris.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arusha",
      addressCountry: "TZ",
    },
    founder: {
      "@type": "Person",
      name: "Mohammadali Saleh",
      jobTitle: "Founder and Head Guide",
      birthPlace: "Arusha, Tanzania",
    },
    sameAs: [
      "https://www.facebook.com/jumbosafaris",
      "https://www.instagram.com/jumbo.safaris",
      "https://www.youtube.com/@jumbosafaris",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.jumbosafaris.com/about" },
      { "@type": "ListItem", position: 3, name: "Trust & Verification", item: "https://www.jumbosafaris.com/about/trust" },
    ],
  }

  const verificationQuestions = [
    {
      question: "Is the operator based in Tanzania?",
      answer:
        "Many operators who appear Tanzanian are registered in the UK, US, or EU and source local ground operators at a markup. Ask for a Tanzanian business registration number. If they cannot provide one, they are an agent, not an operator.",
    },
    {
      question: "Who is your guide?",
      answer:
        "Ask for the guide's name and background before booking. A reputable operator can tell you exactly who will be with you, their experience, and what languages they speak. Vague answers mean pooled guides.",
    },
    {
      question: "Can I see an itemised quote?",
      answer:
        "Every legitimate operator can break down a quote into: accommodation per night, park fees per day, vehicle, guide fee, and any surcharges. If they only give you a single total, ask for the breakdown.",
    },
    {
      question: "What vehicle will we use?",
      answer:
        "The standard safari vehicle in northern Tanzania is a 4x4 Toyota Land Cruiser with a pop-up roof. Minivans and converted Land Rovers are used by some budget operators. Ask specifically.",
    },
    {
      question: "What happens if the trip is cancelled?",
      answer:
        "Read the cancellation policy before paying any deposit. Industry standard is: 50% refund if cancelled 30+ days out, 25% refund 15–29 days out, non-refundable inside 14 days. Any operator without a written cancellation policy is a red flag.",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink/70">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-forest transition-colors">About</Link>
            <span>/</span>
            <span className="text-forest">Trust & Verification</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Transparency</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              How to verify us before you book
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              The Tanzania safari industry has a trust problem. Too many operators are overseas agents selling trips they have never personally run. Here is how to check anyone, including us.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start [&>*]:min-w-0">
              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">The Founder</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  Mohammadali Saleh
                </h2>
                <p className="text-body text-ink/80 mb-4">
                  Born and raised in Arusha. Left Tanzania at 18 to study Economics in Canada. Worked in software for several years in Vancouver before returning home in 2023.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  The idea behind Jumbo Safaris is straightforward: most safari operators in Tanzania are either large agencies with pooled guides and group vehicles, or overseas booking platforms marking up local operators by 50–300%. A single guide-operator who owns every relationship in the chain, quotes transparently, and runs private trips only is a different model.
                </p>
                <p className="text-body text-ink/80 mb-4">
                  Jumbo Safaris is that model. One founder, Arusha-based, private safaris only. You talk to me when you book. You talk to me when something changes. I am on the ground in northern Tanzania.
                </p>
                <p className="text-body text-ink/80">
                  That is the pitch. Here is how to verify it.
                </p>
              </div>

              <div className="bg-forest/5 p-8">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-forest/20 mb-4 overflow-hidden">
                    <Image
                      src="/mohammadali-saleh-jumbo-safaris-founder.jpg"
                      alt="Mohammadali Saleh, founder of Jumbo Safaris, Arusha Tanzania"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-montserrat font-bold text-forest">Mohammadali Saleh</div>
                  <div className="text-sm text-ink/70">Founder, Jumbo Safaris</div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-montserrat font-semibold text-forest">Location</div>
                      <div className="text-ink/70">Arusha, Tanzania</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-montserrat font-semibold text-forest">Phone / WhatsApp</div>
                      <div className="text-ink/70">+255 742 789 292</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-montserrat font-semibold text-forest">Email</div>
                      <div className="text-ink/70">hello@jumbosafaris.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-forest/10">
                  <div className="text-sm text-ink mb-2">Respond time</div>
                  <div className="text-sm text-ink/80">WhatsApp: typically same day (EAT, UTC+3). Email: within 24 hours.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our policies */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Our Commitments</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              What we do and do not do
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-montserrat font-bold text-lg text-forest mb-6">We do</h3>
                <ul className="space-y-4">
                  {[
                    "Provide an itemised quote with every cost listed separately",
                    "Tell you exactly which vehicle you will travel in",
                    "Name the guide before you confirm",
                    "Respond to every pre-trip question personally",
                    "Include Flying Doctors emergency cover on all itineraries",
                    "Adjust the itinerary if conditions change (migration location, road status)",
                    "Give a written cancellation policy before taking any deposit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink/80">
                      <span className="text-forest font-bold mt-0.5 flex-shrink-0">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-bold text-lg text-forest mb-6">We do not</h3>
                <ul className="space-y-4">
                  {[
                    "Run group tours with strangers sharing your vehicle",
                    "Use pooled guides booked through a third-party logistics system",
                    "Add booking fees, credit card surcharges, or hidden admin costs",
                    "Sell package tours with fixed lodge choices you cannot adjust",
                    "Inflate park fees above the published TANAPA/NCAA rates",
                    "Guarantee wildlife sightings (nobody can do that honestly)",
                    "Pad itineraries with unnecessary driving days to add nights",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink/80">
                      <span className="text-orange font-bold mt-0.5 flex-shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to verify any operator */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Due Diligence</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
              Questions to ask any Tanzania safari operator
            </h2>
            <p className="text-body text-ink/80 mb-10 max-w-2xl">
              These apply to us too. A good operator answers all of them without hesitation.
            </p>

            <div className="max-w-3xl space-y-8">
              {verificationQuestions.map((item) => (
                <div key={item.question} className="border-b border-forest/10 pb-8">
                  <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">{item.question}</h3>
                  <p className="text-ink/80 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A note on reviews */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">The Model</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              You deal with the operator, not a middleman.
            </h2>
            <p className="text-body text-ink/80 mb-4">
              Jumbo Safaris is run from Arusha by the person who plans your trip. Your questions reach me directly before you travel. When something shifts on the ground, the migration moves, a road washes out, a lodge changes, I am the one who adjusts it, in real time, in northern Tanzania.
            </p>
            <p className="text-body text-ink/80 mb-4">
              That is the entire point of how this is built. Many of the operators you will compare us to are booking platforms or overseas agencies routing your safari through local suppliers they have never personally worked alongside. We are the local operator. No markup chain, no head office abroad, no pooled database of subcontractors running your days in the park.
            </p>
            <p className="text-body text-ink/80">
              And everything here is verifiable. Use the questions above on us. Ask for the registration number, the named guide, the itemised quote. We would always rather you check than take our word for it.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 text-center">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
              Ask us anything before you book
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Send a message on WhatsApp or email. No sales script. If your question reveals we are not the right operator for you, we will say so.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/255742789292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 font-montserrat font-bold hover:bg-orange/90 transition-colors"
              >
                WhatsApp Mohammadali <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-cream text-cream px-8 py-4 font-montserrat font-bold hover:bg-cream/10 transition-colors"
              >
                Send an Email
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
