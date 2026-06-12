import { Metadata } from "next"
import { MessageCircle, Mail, MapPin, Clock, Shield, Users } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact a Tanzania Safari Expert in Arusha",
  description:
    "Contact Jumbo Safaris to plan your Tanzania safari. WhatsApp, email, or fill in our enquiry form. Based in Arusha, Tanzania.",
  alternates: { canonical: "https://www.jumbosafaris.com/contact" },
  openGraph: {
    title: "Contact Jumbo Safaris | Talk to an Arusha-Based Safari Specialist",
    description: "WhatsApp, email, or fill in our enquiry form. Based in Arusha, direct line to the guide who plans your safari.",
    url: "https://www.jumbosafaris.com/contact",
  },
}

const trustSignals = [
  { icon: Shield, text: "TATO Licensed" },
  { icon: Users, text: "Private Guides" },
  { icon: MapPin, text: "Arusha-Based Team" },
]

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 [&>*]:min-w-0">
          {/* Left Column - Form */}
          <div>
            <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop text-forest mb-4">
              Plan Your Tanzania Safari
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-ink mb-8">
              Tell us about your dream safari. We respond within 24 hours with a personalized
              itinerary recommendation.
            </p>

            <ContactForm />
          </div>

          {/* Right Column - Contact Info */}
          <aside>
            <div className="bg-white border border-border-soft p-8 mb-6">
              <h2 className="font-montserrat font-bold text-h3-desktop text-forest mb-6">
                Get in Touch
              </h2>

              {/* WhatsApp */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-ink text-sm mb-3">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/15197213872"
                    className="flex items-center justify-between gap-2 w-full bg-forest text-cream font-montserrat font-semibold px-5 py-3 hover:bg-forest-dark transition-colors"
                  >
                    <span>+1 519 721 3872</span>
                    <span className="text-cream/70 text-xs font-normal">International</span>
                  </a>
                  <a
                    href="https://wa.me/255742789292"
                    className="flex items-center justify-between gap-2 w-full border border-forest text-forest font-montserrat font-semibold px-5 py-3 hover:bg-forest/5 transition-colors"
                  >
                    <span>+255 742 789 292</span>
                    <span className="text-ink/50 text-xs font-normal">Tanzania</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6 pb-6 border-b border-border-soft">
                <div className="flex items-center gap-2 text-ink text-sm mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </div>
                <a
                  href="mailto:hello@jumbosafaris.com"
                  className="font-semibold text-forest hover:text-orange transition-colors"
                >
                  hello@jumbosafaris.com
                </a>
              </div>

              {/* Location */}
              <div className="mb-6 pb-6 border-b border-border-soft">
                <div className="flex items-center gap-2 text-ink text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <p className="font-semibold text-forest">Arusha, Tanzania</p>
                <p className="text-sm text-ink/60">Gateway to the Northern Circuit</p>
              </div>

              {/* Response Time */}
              <div>
                <div className="flex items-center gap-2 text-ink text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Response Time</span>
                </div>
                <p className="text-ink">
                  We respond to all enquiries within <strong>24 hours</strong>
                </p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-forest text-cream p-6">
              <h3 className="font-montserrat font-semibold text-lg mb-4">
                Why Book With Us
              </h3>
              <ul className="space-y-3">
                {trustSignals.map((signal) => (
                  <li key={signal.text} className="flex items-center gap-3">
                    <signal.icon className="w-5 h-5 text-orange" />
                    <span>{signal.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* How it works */}
      <div className="border-t border-border-soft">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            How the Planning Process Works
          </h2>
          <p className="text-ink mb-12 max-w-2xl">
            Planning a Tanzania safari involves a lot of moving parts. We keep it straightforward.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-montserrat font-bold text-4xl text-orange mb-4">01</div>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">Tell us what you have in mind</h3>
              <p className="text-ink">
                Share your dates, group size, interests, and budget range. No fixed budget yet? That is fine.
                We will show you what different price points actually look like on the ground.
              </p>
            </div>
            <div>
              <div className="font-montserrat font-bold text-4xl text-orange mb-4">02</div>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">Receive a custom itinerary within 24 hours</h3>
              <p className="text-ink">
                A day-by-day plan with accommodation options, park sequence, driving times, and a transparent cost
                breakdown. No package tours. No shared groups. Everything built around your dates.
              </p>
            </div>
            <div>
              <div className="font-montserrat font-bold text-4xl text-orange mb-4">03</div>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-3">Refine until it is right</h3>
              <p className="text-ink">
                Swap lodges, add a night in Tarangire, drop the Ngorongoro crater descent. We adjust until
                the itinerary fits exactly. No commitment until you are ready.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white border-t border-border-soft">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="font-montserrat font-semibold text-forest mb-2">How far in advance should I book?</h3>
              <p className="text-ink">
                For peak season (June to October and January to February), three to six months ahead is ideal.
                For the shoulder months, six to eight weeks usually works. Last-minute enquiries are welcome
                but camp availability can be limited.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-forest mb-2">What is included in a typical safari?</h3>
              <p className="text-ink">
                All game drives, accommodation, park fees, a private guide, and a 4x4 vehicle. Flights,
                travel insurance, and personal spending are excluded. We itemise everything so you know
                exactly what you are paying for.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-forest mb-2">Can you add Zanzibar to the safari?</h3>
              <p className="text-ink">
                Yes. A beach extension to Zanzibar is easy to arrange after the mainland safari. We handle
                transfers, flights, and accommodation on the island as part of the same itinerary.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-forest mb-2">Are your safaris suitable for children?</h3>
              <p className="text-ink">
                Private safaris work well for families. You set the pace, the guide adjusts the day to
                your children's energy levels, and there is no pressure to follow a group schedule.
                Most parks allow children of all ages on game drives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
