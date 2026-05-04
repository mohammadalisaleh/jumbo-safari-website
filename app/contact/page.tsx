import { Metadata } from "next"
import { MessageCircle, Mail, MapPin, Clock, Shield, Users, Star } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Plan Your Tanzania Safari",
  description:
    "Contact Jumbo Safaris to plan your Tanzania safari. WhatsApp, email, or fill in our enquiry form. Based in Arusha, Tanzania.",
  alternates: { canonical: "https://jumbosafaris.com/contact" },
  openGraph: {
    title: "Plan Your Tanzania Safari | Jumbo Safaris",
    description: "Contact Jumbo Safaris to plan your Tanzania safari.",
    url: "https://jumbosafaris.com/contact",
  },
}

const trustSignals = [
  { icon: Shield, text: "TATO Licensed" },
  { icon: Users, text: "Private Guides" },
  { icon: Star, text: "5-Star Rated" },
]

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
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
                <div className="flex items-center gap-2 text-muted text-sm mb-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </div>
                <p className="font-semibold text-forest mb-3">+255 742 789 292</p>
                <a
                  href="https://wa.me/255742789292"
                  className="inline-block w-full bg-forest text-cream font-montserrat font-semibold px-6 py-3 text-center hover:bg-forest-dark transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="mb-6 pb-6 border-b border-border-soft">
                <div className="flex items-center gap-2 text-muted text-sm mb-2">
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
                <div className="flex items-center gap-2 text-muted text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <p className="font-semibold text-forest">Arusha, Tanzania</p>
                <p className="text-sm text-muted">Gateway to the Northern Circuit</p>
              </div>

              {/* Response Time */}
              <div>
                <div className="flex items-center gap-2 text-muted text-sm mb-2">
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
    </div>
  )
}
