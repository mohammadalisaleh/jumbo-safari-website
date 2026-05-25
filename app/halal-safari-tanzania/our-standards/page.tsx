import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertCircle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Halal Safari Standards | What We Do and Don't Guarantee",
  description:
    "Exactly what halal means on a Jumbo Safaris trip. Food suppliers, prayer logistics, alcohol policy, certification status, and the refund guarantee. No marketing language. Specific and honest.",
  alternates: { canonical: "https://www.jumbosafaris.com/halal-safari-tanzania/our-standards" },
  openGraph: {
    title: "Our Halal Safari Standards | Jumbo Safaris",
    description:
      "BAKWATA-certified food, prayer logistics, honest alcohol policy, certification status, and a written refund guarantee. Everything specific.",
    url: "https://www.jumbosafaris.com/halal-safari-tanzania/our-standards",
  },
}

const canGuarantee = [
  {
    title: "Halal-certified meat at every meal",
    detail:
      "All meat on your safari comes from suppliers certified by BAKWATA (Baraza Kuu la Waislamu wa Tanzania), the national Muslim council and halal certification authority in Tanzania. In Arusha, we use Khan's Barbecue on Mosque Street as our primary halal restaurant, over 1,000 TripAdvisor reviews, operating for decades under the same Muslim family. Your camp cook uses the same certified suppliers on all bush meals.",
  },
  {
    title: "No pork, no alcohol at your table or in your room",
    detail:
      "Pork does not appear in any meal we arrange. Alcohol is removed from your room minibar before arrival. Your table settings do not include a wine list or alcohol service. This applies to every meal, every camp, and every hotel on your itinerary.",
  },
  {
    title: "Prayer times built into your daily schedule",
    detail:
      "Fajr timing is factored into when morning game drives start. Dhuhr and Asr prayer stops are planned into afternoon drives. Your guide carries a qibla compass. We provide daily prayer timetables for your specific GPS location for every day of the trip, produced before departure so you can plan.",
  },
  {
    title: "Private vehicle throughout",
    detail:
      "Your Land Cruiser is never shared with strangers. This means prayer stops when you need them, driving pace set by your family, and no compromises around modesty in a shared vehicle. Private vehicle is standard on every halal safari we operate, not an upgrade.",
  },
  {
    title: "Female guide for women's groups (where available)",
    detail:
      "For our women's safari product, we confirm female guide availability before you pay a deposit. If a female guide is not available for your specific dates, we tell you immediately and discuss options. We do not surprise you with a male guide on arrival.",
  },
  {
    title: "Refund guarantee in writing",
    detail:
      "If our halal standard is not met during your trip, we refund that portion of the trip. This clause is in your contract before you pay a deposit. It is not a customer service policy. It is a written contractual obligation. We are not aware of any other Tanzania safari operator offering this in writing.",
  },
]

const cannotGuarantee = [
  {
    title: "The entire lodge as alcohol-free",
    detail:
      "Tanzania's Northern Circuit lodges serve other guests who are not Muslim. The lodge bar exists and other guests use it. We select lodges where the bar is physically separate from dining and accommodation areas, and we remove alcohol from your specific room. Your meals, your vehicle, and your room are halal. The lodge as a whole is not.",
  },
  {
    title: "\"100% halal-certified\" as a property claim",
    detail:
      "We do not claim halal certification for properties or the overall safari operation that we do not hold. Our food suppliers hold BAKWATA certification. For the operation itself, no recognised certification body currently audits Tanzania safari operators for halal compliance. We will not use the phrase halal-certified to describe our business until that changes.",
  },
  {
    title: "\"Sharia-compliant\" as an overall description",
    detail:
      "We have not engaged a Sharia board to audit our operations. Using the term Sharia-compliant without a board review would be misleading. We operate to a clear halal food and logistics standard, which we describe specifically and honestly.",
  },
  {
    title: "Female-only staff at all lodges",
    detail:
      "Safari lodges in Tanzania employ mixed-gender staff. Housekeeping may include male staff. We request female housekeeping where lodges can accommodate this, but we cannot guarantee it as a contractual commitment at every property.",
  },
]

const certification = [
  {
    org: "BAKWATA",
    status: "Active — food suppliers certified",
    detail:
      "BAKWATA (Baraza Kuu la Waislamu wa Tanzania) is the national Muslim council and halal food certification authority in Tanzania. Our primary halal food suppliers in Arusha and the Northern Circuit hold BAKWATA certification. This applies to meat supply specifically.",
  },
  {
    org: "HalalBooking.com",
    status: "Listing in progress",
    detail:
      "HalalBooking.com is the largest international halal travel booking platform with over 1,396 Tanzania properties listed. We are establishing an operator profile. Listing does not constitute halal certification but increases visibility to Muslim travel agents worldwide.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is halal food sourced and verified on your safaris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every lodge and camp on our halal itineraries confirms in writing that all meat served to your party is halal-certified, sourced from approved suppliers in Arusha, Dar es Salaam or Zanzibar. Beef and goat come predominantly from National Halal Suppliers Tanzania and from Zanzibar's Mwanakwerekwe halal abattoir. Poultry is sourced from certified halal poultry farms. We receive a written halal commitment from each property at booking and re-confirm by phone 48 hours before your arrival at the property."
      }
    },
    {
      "@type": "Question",
      "name": "Are your lodges halal-certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tanzania does not yet operate a national halal-certification scheme for lodges. Instead, we audit each lodge against our own 11-point halal standard covering meat sourcing, separate utensils, kitchen practice, alcohol service, prayer facilities, and staff training. Lodges that pass our audit are added to our halal-confirmed roster. We re-audit each property every 12 months and publish the audit date on the lodge profile."
      }
    },
    {
      "@type": "Question",
      "name": "How do you accommodate prayer times during game drives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every safari vehicle on a halal itinerary carries a prayer mat, qibla compass and clean water for wudu. Game drive schedules are built around the day's prayer times so you can stop at Dhuhr and Asr at safe locations away from wildlife, typically picnic sites or ranger stations. Fajr is performed at camp before the morning drive and Maghrib and Isha back at the lodge. Guides print the prayer timetable for each lodge location and confirm it daily."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have a written halal commitment with each lodge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Before any property is added to our halal roster, the general manager signs a written halal undertaking covering meat sourcing, kitchen separation, utensil dedication for halal preparation, alcohol-handling protocols, staff training requirements and prayer facility provision. The undertaking is renewed annually. A redacted copy can be shared with guests on request. Any deviation from this undertaking is treated as a contract breach and triggers our guest refund guarantee."
      }
    },
    {
      "@type": "Question",
      "name": "What is your refund guarantee if halal standards are not met?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If any of our written halal standards are not delivered during your trip, we refund the proportional cost of that failure. This is a written contractual clause in every booking confirmation, not an informal promise. It covers food, prayer logistics, alcohol handling, accommodation privacy and female guide provision where booked. We are not aware of any other Tanzania safari operator offering this guarantee in writing before payment."
      }
    },
    {
      "@type": "Question",
      "name": "What halal certifications does Jumbo Safaris hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our food suppliers hold BAKWATA certification, issued by the national Muslim council in Tanzania. This covers meat sourcing specifically. No recognised certification body currently audits Tanzania safari operators for halal compliance as a whole operation. We do not claim a certification we do not hold. Instead, every element of our halal standard is committed to in writing in your contract before you pay a deposit, and backed by a refund guarantee if any standard is not met during your trip."
      }
    }
  ]
}

export default function OurHalalStandards() {
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
            <span className="text-eyebrow uppercase text-orange tracking-widest">Our Standards</span>
          </div>
          <h1 className="font-montserrat text-h1-mobile lg:text-h1-desktop font-bold mb-6 max-w-3xl">
            Our Halal Standards
          </h1>
          <p className="text-lead-mobile lg:text-lead-desktop text-cream/85 max-w-2xl mb-6">
            Specific, honest, and in writing before you pay. What we do, what we cannot guarantee, what certifications we hold, and the refund clause that sits in every contract.
          </p>
          <p className="text-body-mobile text-cream/70 max-w-2xl">
            Most safari operators use "halal" as a marketing label and define it vaguely. We define it precisely so you can make an informed decision about whether we are the right operator for your family.
          </p>
        </div>
      </section>

      {/* What we guarantee */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">What We Guarantee</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-4">
            In Your Contract. Before You Pay.
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-ink max-w-2xl mb-12">
            These are contractual commitments, not aspirational statements. If any of these are not met during your trip, the refund guarantee clause applies.
          </p>
          <div className="space-y-6">
            {canGuarantee.map((item, i) => (
              <div key={i} className="border border-border-soft p-6 grid lg:grid-cols-4 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                  <h3 className="font-montserrat font-semibold text-h3-mobile text-forest">{item.title}</h3>
                </div>
                <div className="lg:col-span-3 text-body-mobile lg:text-body-desktop text-ink leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cannot guarantee */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">What We Cannot Guarantee</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-4">
            Honest About the Limits
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-2xl mb-12">
            Other operators make claims about halal that a Tanzania safari cannot actually deliver. We do not. Here is what falls outside our guarantee and why.
          </p>
          <div className="space-y-6">
            {cannotGuarantee.map((item, i) => (
              <div key={i} className="border border-cream/20 p-6 grid lg:grid-cols-4 gap-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <h3 className="font-montserrat font-semibold text-h3-mobile text-orange">{item.title}</h3>
                </div>
                <div className="lg:col-span-3 text-body-mobile text-cream/80 leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification status */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <p className="text-eyebrow uppercase text-orange tracking-widest mb-3">Certification Status</p>
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-4">
            What We Hold
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-ink max-w-2xl mb-12">
            We publish the current status of every certification we hold or are working toward. We update this page when status changes.
          </p>
          <div className="space-y-4">
            {certification.map((cert) => (
              <div key={cert.org} className="border border-border-soft p-6 grid lg:grid-cols-4 gap-4">
                <div>
                  <h3 className="font-montserrat font-semibold text-ink mb-1">{cert.org}</h3>
                  <span
                    className={`text-eyebrow uppercase tracking-wider text-sm ${
                      cert.status.includes("Active") ? "text-forest" : "text-orange"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <div className="lg:col-span-3 text-body-mobile text-ink leading-relaxed">
                  {cert.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund guarantee */}
      <section className="py-20 px-6 bg-cream border-t border-border-soft">
        <div className="max-w-content mx-auto">
          <div className="border-2 border-forest p-10 max-w-3xl mx-auto text-center">
            <p className="text-eyebrow uppercase text-orange tracking-widest mb-4">The Refund Guarantee</p>
            <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold text-ink mb-6">
              If Our Halal Standard Is Not Met, We Refund That Portion. In Writing.
            </h2>
            <p className="text-body-mobile lg:text-body-desktop text-ink leading-relaxed mb-6">
              This clause is in every halal safari contract we issue, before you pay a deposit. Specifically: if any of the six guaranteed standards above are not delivered on your trip, we refund the proportional cost of that failure. Not a credit, not a voucher. A refund.
            </p>
            <p className="text-body-mobile text-ink leading-relaxed">
              We do not know of any other Tanzania safari operator offering this in writing. If you find one, tell us and we will find a way to do better.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-montserrat text-h2-mobile lg:text-h2-desktop font-bold mb-4">
            Questions About Our Standards?
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-cream/80 max-w-xl mx-auto mb-10">
            Ask us anything about our halal policy before booking. We respond within 24 hours, usually much faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange text-cream font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Ask a Question
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
