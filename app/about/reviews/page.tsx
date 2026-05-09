import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Jumbo Safaris",
  description:
    "Jumbo Safaris launched in 2023. We are building our review base. Read what early clients say and understand our approach to accountability.",
  alternates: { canonical: "https://www.jumbosafaris.com/about/reviews" },
  openGraph: {
    title: "Reviews & Testimonials | Jumbo Safaris",
    description:
      "Jumbo Safaris launched in 2023. Read what early clients say and understand how we operate.",
    url: "https://www.jumbosafaris.com/about/reviews",
  },
}

export default function ReviewsPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Reviews
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Jumbo Safaris launched in 2023. We do not have hundreds of reviews. We are not going to behave as if we do.
          </p>
        </div>
      </section>

      {/* Honest position */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_340px] gap-12">
          <div>
            <div className="max-w-prose space-y-5 text-body-mobile md:text-body-desktop text-ink">
              <p>
                Most safari companies in Tanzania have been operating for 10, 20, 30 years. They have review bases built over decades. Jumbo Safaris is two years old. We have run trips, we have clients who came back satisfied, and we are building our public review profile. But pretending to have a review history we do not have is the kind of thing that puts the wrong guests on the wrong operator.
              </p>
              <p>
                What we can offer instead: direct communication. The person who answers your inquiry is the same person who briefs your guide, coordinates your lodge bookings, and follows up after you get home. If something goes wrong on a trip, that person hears about it directly. There is no layer of customer service between you and accountability.
              </p>
              <p>
                We are applying to list on SafariBookings and TripAdvisor as our trip volume grows. When we have a verified review base worth reading, it will be here. In the meantime, the most useful thing is probably a conversation: send your questions, describe what you want from the trip, and judge whether the answers you get back reflect someone who knows what they are talking about.
              </p>
            </div>
          </div>

          <aside className="lg:self-start">
            <div className="bg-forest text-cream p-6 mb-6">
              <h3 className="font-montserrat font-bold text-lg mb-4">Talk to Mohammadali</h3>
              <p className="text-cream/80 text-sm mb-4">
                Ask anything. Route questions, pricing, what to expect, which lodges are worth the price difference. Direct answers, no sales process.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-cream text-forest font-montserrat font-semibold px-6 py-3 text-center hover:bg-cream/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="bg-white border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-forest text-lg mb-3">About the company</h3>
              <ul className="space-y-2 text-sm text-ink">
                <li>Founded 2023, based in Arusha</li>
                <li>Private safaris only, no group tours</li>
                <li>Northern circuit and southern circuit</li>
                <li>Direct communication, founder-led</li>
              </ul>
              <Link
                href="/about"
                className="inline-block mt-4 text-forest font-semibold text-sm hover:text-orange transition-colors"
              >
                Read the full story →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* What accountability looks like */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              What accountability looks like here
            </h2>
            <div className="space-y-5 text-body-mobile md:text-body-desktop text-ink">
              <p>
                Large operators have customer service teams that process complaints. The guide who caused the problem rarely knows there was one. The person who sold you the trip does not know either.
              </p>
              <p>
                At Jumbo Safaris, Mohammadali is the point of contact from first inquiry to post-trip follow-up. If the guide was late, or the lodge got the room wrong, or the crater descent permit was not in order: that comes back to one person who booked and coordinated the trip and has a direct relationship with the guide and the lodge. The loop is short.
              </p>
              <p>
                This is not a claim that nothing will ever go wrong. Things go wrong on safari trips. Road conditions change, lodges have issues, animals are where they are. The claim is simpler: when something goes wrong, the person responsible for fixing it is reachable and has skin in the outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refer or leave a review */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              For past clients
            </h2>
            <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
              If you have travelled with Jumbo Safaris and want to leave a review, the most useful platforms are Google and TripAdvisor. Both allow verified reviews without a prior booking through the platform. Links will be added here as our profiles go live.
            </p>
            <p className="text-body-mobile md:text-body-desktop text-ink">
              If something went wrong on your trip and you have not yet raised it, contact us directly. Reviews are useful for future guests. Direct feedback is useful for fixing the thing.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-forest text-cream font-montserrat font-semibold px-8 py-4 hover:bg-forest-dark transition-colors inline-block"
              >
                Contact Mohammadali
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
