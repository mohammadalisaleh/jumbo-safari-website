"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"

interface PlanFormProps {
  initialAdults: number
  initialChildren: number
  initialDate: string
}

const BUDGETS = [
  "Under $2,000 per person",
  "$2,000 – $4,000 per person",
  "$4,000 – $7,000 per person",
  "$7,000 – $12,000 per person",
  "$12,000+ per person",
]

const TRIP_TYPES = [
  "Safari",
  "Beach holiday (Zanzibar)",
  "See the Great Migration",
  "Honeymoon",
  "Climb Kilimanjaro",
]

const TRAVEL_WITH = [
  "Solo",
  "Couple",
  "Honeymoon",
  "Family with kids",
  "Group of friends",
  "Other",
]

export default function PlanForm({ initialAdults, initialChildren, initialDate }: PlanFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  // Section 1: Trip info
  const [tripTypes, setTripTypes] = useState<string[]>([])
  const [days, setDays] = useState("")
  const [travelWith, setTravelWith] = useState("")
  const [date, setDate] = useState(initialDate)
  const [budget, setBudget] = useState("")

  // Section 2: Travellers
  const [adults, setAdults] = useState(initialAdults)
  const [children, setChildren] = useState(initialChildren)

  // Section 3: Extra
  const [notes, setNotes] = useState("")

  // Section 4: Contact
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [country, setCountry] = useState("")

  const toggleTripType = (type: string) => {
    setTripTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handleSubmit = async () => {
    if (!firstName || !email || !travelWith || !budget || !date) {
      setError("Please fill in all required fields.")
      return
    }
    setError("")
    setSubmitting(true)

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          whatsapp,
          country,
          tripTypes: tripTypes.join(", "),
          days,
          travelWith,
          date,
          budget,
          adults,
          children,
          notes,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        setError("Something went wrong. Please try WhatsApp instead.")
      }
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-forest mx-auto mb-6" />
          <h2 className="font-montserrat font-bold text-h2-mobile text-forest mb-4">
            We&apos;ve received your request!
          </h2>
          <p className="text-ink mb-6">
            {firstName}, your safari proposal is on its way. Expect a personalised
            reply from our Arusha team within 24 hours.
          </p>
          <a
            href="https://wa.me/255742789292"
            className="inline-flex items-center gap-2 bg-forest text-cream font-montserrat font-semibold px-6 py-3 hover:bg-forest/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const inputClass =
    "w-full border border-border-soft p-3 bg-transparent text-ink font-inter text-sm focus:outline-none focus:border-forest transition-colors"
  const labelClass =
    "block font-montserrat font-semibold text-xs uppercase tracking-widest text-forest mb-2"
  const sectionClass = "mb-10 pb-10 border-b border-border-soft"

  return (
    <div className="max-w-content mx-auto px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Form — 2/3 width */}
        <div className="lg:col-span-2">
          <p className="text-eyebrow uppercase text-orange mb-3 tracking-widest text-xs font-montserrat font-semibold">
            No cost · No commitment
          </p>
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h2-desktop text-forest mb-2">
            Plan Your Tanzania Safari
          </h1>
          <p className="text-ink mb-10">
            Tell us what you&apos;re dreaming of. We&apos;ll send a personalised proposal within 24 hours.
          </p>

          {/* Section 1: Trip Information */}
          <div className={sectionClass}>
            <h2 className="font-montserrat font-bold text-xl text-forest mb-6">
              1. Travel Information
            </h2>

            {/* What do you want to do */}
            <div className="mb-6">
              <label className={labelClass}>What do you want to do?</label>
              <div className="flex flex-wrap gap-3">
                {TRIP_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleTripType(type)}
                    className={`px-4 py-2 border text-sm font-inter transition-colors ${
                      tripTypes.includes(type)
                        ? "bg-forest text-cream border-forest"
                        : "border-border-soft text-ink hover:border-forest"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* How many days */}
            <div className="mb-6">
              <label className={labelClass}>How many days? *</label>
              <select
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className={inputClass}
              >
                <option value="">Select number of days</option>
                {[4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21].map((d) => (
                  <option key={d} value={d}>
                    {d} days
                  </option>
                ))}
                <option value="21+">21+ days</option>
              </select>
            </div>

            {/* Who are you travelling with */}
            <div className="mb-6">
              <label className={labelClass}>Who are you travelling with? *</label>
              <div className="flex flex-wrap gap-3">
                {TRAVEL_WITH.map((type) => (
                  <button
                    key={type}
                    onClick={() => setTravelWith(type)}
                    className={`px-4 py-2 border text-sm font-inter transition-colors ${
                      travelWith === type
                        ? "bg-forest text-cream border-forest"
                        : "border-border-soft text-ink hover:border-forest"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* When do you want to travel */}
            <div className="mb-6">
              <label className={labelClass}>When do you want to travel? *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className={inputClass}
              />
              <p className="text-xs text-muted mt-1">You can always change this later.</p>
            </div>

            {/* Budget */}
            <div>
              <label className={labelClass}>Budget per person (excluding flights) *</label>
              <div className="flex flex-col gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`px-4 py-3 border text-sm font-inter text-left transition-colors ${
                      budget === b
                        ? "bg-forest text-cream border-forest"
                        : "border-border-soft text-ink hover:border-forest"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Travellers */}
          <div className={sectionClass}>
            <h2 className="font-montserrat font-bold text-xl text-forest mb-6">
              2. Travellers
            </h2>
            <p className="text-sm text-muted mb-6">
              Travelling solo? Costs are higher as you carry the vehicle and room alone — we&apos;ll be transparent about this in the proposal.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Number of adults *</label>
                <div className="flex items-center border border-border-soft">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="px-5 py-4 text-forest hover:text-orange transition-colors text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-montserrat font-bold text-forest text-xl">
                    {adults}
                  </span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="px-5 py-4 text-forest hover:text-orange transition-colors text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className={labelClass}>Number of children (under 18)</label>
                <div className="flex items-center border border-border-soft">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="px-5 py-4 text-forest hover:text-orange transition-colors text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-montserrat font-bold text-forest text-xl">
                    {children}
                  </span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="px-5 py-4 text-forest hover:text-orange transition-colors text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Notes */}
          <div className={sectionClass}>
            <h2 className="font-montserrat font-bold text-xl text-forest mb-6">
              3. Anything else?
            </h2>
            <label className={labelClass}>Preferences, special occasions, or questions</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="e.g. We're celebrating our 10th anniversary. We'd love a private bush dinner if possible. We've never been on safari before."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Section 4: Contact Details */}
          <div className="mb-10">
            <h2 className="font-montserrat font-bold text-xl text-forest mb-6">
              4. Your contact details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>First name *</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Smith"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass}>Email address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>

            <div className="mb-4">
              <label className={labelClass}>WhatsApp number</label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+1 555 000 0000"
                className={inputClass}
              />
            </div>

            <div className="mb-6">
              <label className={labelClass}>Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="United States"
                className={inputClass}
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-forest text-cream font-montserrat font-semibold py-4 hover:bg-forest/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send My Safari Request"}
              {!submitting && <ArrowRight className="w-5 h-5" />}
            </button>

            <p className="text-xs text-muted mt-4 text-center">
              By submitting, you agree we may contact you about your safari enquiry. No spam, ever.
            </p>
          </div>
        </div>

        {/* Sidebar — 1/3 width */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            {/* What happens next */}
            <div className="bg-forest text-cream p-6">
              <h3 className="font-montserrat font-bold text-base mb-4">What happens next?</h3>
              <ol className="space-y-4">
                {[
                  "You submit this form — takes 2 minutes.",
                  "Our Arusha team reviews your request within 24 hours.",
                  "We send a personalised itinerary and quote.",
                  "We refine it together until it&apos;s exactly right.",
                  "You book with confidence.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="font-montserrat font-bold text-orange flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-cream/90" dangerouslySetInnerHTML={{ __html: step }} />
                  </li>
                ))}
              </ol>
            </div>

            {/* Trust signals */}
            <div className="border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-base text-forest mb-4">
                Why Jumbo Safaris?
              </h3>
              <ul className="space-y-3">
                {[
                  "100% private, tailor-made safaris",
                  "Arusha-based team — we know Tanzania",
                  "Private guides, private vehicles only",
                  "Response within 24 hours",
                  "No booking fees, ever",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink">
                    <span className="text-orange font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/255742789292"
              className="flex items-center gap-3 border border-border-soft p-4 hover:border-forest transition-colors group"
            >
              <MessageCircle className="w-6 h-6 text-forest flex-shrink-0" />
              <div>
                <p className="font-montserrat font-semibold text-sm text-forest group-hover:text-orange transition-colors">
                  Prefer to chat?
                </p>
                <p className="text-xs text-muted">WhatsApp us directly</p>
              </div>
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
