import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you book a tailor-made Tanzania safari with Jumbo Safaris: quotes, payment, cancellation, insurance, and liability.",
  alternates: { canonical: "https://www.jumbosafaris.com/terms" },
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-forest text-cream pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-4 tracking-widest text-sm font-semibold">Terms</p>
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-6 max-w-3xl leading-tight">
            Terms of Service
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            These terms apply when you book a tailor-made safari with Jumbo Safaris. They are written plainly on purpose. If anything here is unclear, ask before you pay. Last updated June 2026.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-content mx-auto px-6 max-w-3xl space-y-10">
          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Quotes and prices</h2>
            <p className="text-body text-ink/80 mb-4">
              Every safari we build is tailor-made, so the price you receive is for your specific itinerary, party size, and dates. Quotes are valid for 14 days. After that, lodge availability and rates can move and we may need to re-quote.
            </p>
            <p className="text-body text-ink/80">
              Prices are in US dollars. They cover what is listed in your proposal and nothing else. Government park fees are passed through at the published government rate. If a park authority changes its fees between your quote and your travel date, the difference is yours to cover, and we will always show you the exact figure.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Booking and payment</h2>
            <p className="text-body text-ink/80">
              A booking is confirmed when we receive your deposit of 30% of the total. The balance is due 60 days before your arrival date. For trips booked inside 60 days, the full amount is due at the time of booking. We will tell you exactly how to pay when you confirm.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Changes and cancellation</h2>
            <p className="text-body text-ink/80 mb-4">
              Plans change. Tell us as early as you can and we will do what we can to adjust your trip. Some lodges and camps hold their own cancellation terms, which we will flag at the time of booking and which can be stricter than ours, especially for migration-season camps.
            </p>
            <p className="text-body text-ink/80">
              If you cancel: more than 60 days before arrival, you lose the deposit. Between 30 and 60 days, 50% of the total is held. Inside 30 days, the full amount is held, because by then we have committed your money to lodges and park bookings that we cannot recover.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Travel insurance</h2>
            <p className="text-body text-ink/80">
              You must travel with insurance that covers medical care, emergency evacuation, and trip cancellation. This is not optional. Tanzania is remote country, and a serious problem in the bush means an air evacuation that you do not want to be paying for out of pocket. We will ask you to confirm you are covered before you travel.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Passports, visas, and health</h2>
            <p className="text-body text-ink/80">
              Making sure your passport, visa, and vaccinations are in order is your responsibility. We are glad to point you to the current requirements, and our visa guide is a starting point, but the final check is yours. If you are turned away at the border for missing documents, that is not a fault we can refund.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Our role and the limits of it</h2>
            <p className="text-body text-ink/80 mb-4">
              We plan and run your safari, and we book third-party suppliers on your behalf: lodges, camps, domestic flights, and park authorities. We choose them carefully and stand behind our choices. We are not, though, liable for a supplier's own failure, or for events outside anyone's control: weather, road conditions, flight delays, illness, political disruption, or animal behaviour.
            </p>
            <p className="text-body text-ink/80">
              A safari is a wild-country experience. Wildlife is wild, and no operator can promise a particular sighting or guarantee your safety against the inherent risks of being in the bush. Your guide's instructions exist to keep you safe, and following them is part of the agreement.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Governing law</h2>
            <p className="text-body text-ink/80">
              These terms are governed by the law of the United Republic of Tanzania.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Contact</h2>
            <p className="text-body text-ink/80">
              Questions go to{" "}
              <a href="mailto:hello@jumbosafaris.com" className="text-orange hover:underline">hello@jumbosafaris.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
