import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Jumbo Safaris collects, uses, and protects the information you share when you enquire about a Tanzania safari.",
  alternates: { canonical: "https://www.jumbosafaris.com/privacy" },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-forest text-cream pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-4 tracking-widest text-sm font-semibold">Privacy</p>
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-6 max-w-3xl leading-tight">
            Privacy Policy
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
            Jumbo Safaris is a private guided tour operator based in Arusha, Tanzania. This is a plain explanation of what we collect when you contact us, why, and what we do with it. Last updated June 2026.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-content mx-auto px-6 max-w-3xl space-y-10">
          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">What we collect</h2>
            <p className="text-body text-ink/80 mb-4">
              When you fill in our enquiry form or message us on WhatsApp or email, you give us your name, contact details, travel dates, party size, and whatever you tell us about the trip you want. That is the information we use to build your safari. We do not ask for anything we do not need.
            </p>
            <p className="text-body text-ink/80">
              We also collect anonymous usage data through Google Analytics: which pages you view, roughly where in the world you are, and how you reached the site. This is aggregated and is not tied to your name. If you arrived through one of our adverts, the advertising platform (for example Meta) may record that visit through a cookie.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">How we use it</h2>
            <p className="text-body text-ink/80">
              To reply to you, prepare a quote, and plan and run your trip. That is the whole purpose. If you book, we share the parts a supplier needs (your name, dates, and dietary or medical notes) with the lodges, camps, and park authorities involved in your specific itinerary. We do this only to deliver the safari you booked.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">What we never do</h2>
            <p className="text-body text-ink/80">
              We do not sell your information. We do not pass it to anyone outside the chain of suppliers needed for your trip. We do not send marketing emails you did not ask for.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Cookies and analytics</h2>
            <p className="text-body text-ink/80">
              The site uses Google Analytics to understand which content is useful, and advertising cookies when a campaign is running. You can block cookies in your browser settings without losing access to any part of the site. The enquiry form works the same either way.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">How long we keep it</h2>
            <p className="text-body text-ink/80">
              Enquiries that do not turn into a booking are kept for up to two years, in case you come back to us. Booking records are kept for as long as we are legally required to hold them for tax and accounting. You can ask us to delete your information at any time.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Your rights</h2>
            <p className="text-body text-ink/80">
              You can ask to see what we hold, correct it, or have it deleted. Email{" "}
              <a href="mailto:hello@jumbosafaris.com" className="text-orange hover:underline">hello@jumbosafaris.com</a>{" "}
              and we will handle it within a reasonable time. The site is hosted on Cloudflare, and data may be processed on servers outside Tanzania as part of normal web hosting.
            </p>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">Contact</h2>
            <p className="text-body text-ink/80">
              Questions about this policy go to{" "}
              <a href="mailto:hello@jumbosafaris.com" className="text-orange hover:underline">hello@jumbosafaris.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
