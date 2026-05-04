"use client"

import { useState } from "react"

const parksOptions = [
  "Serengeti",
  "Ngorongoro Crater",
  "Tarangire",
  "Lake Manyara",
  "Ruaha",
  "Other",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    travelDates: "",
    guests: "",
    budget: "",
    parks: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleParkChange = (park: string) => {
    setFormData((prev) => ({
      ...prev,
      parks: prev.parks.includes(park)
        ? prev.parks.filter((p) => p !== park)
        : [...prev.parks, park],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-border-soft p-8 text-center">
        <h3 className="font-montserrat font-bold text-2xl text-forest mb-4">
          Thank You!
        </h3>
        <p className="text-ink mb-4">
          We&apos;ve received your safari enquiry and will respond within 24 hours with
          a personalized itinerary recommendation.
        </p>
        <p className="text-muted text-sm">
          Can&apos;t wait? WhatsApp us directly at{" "}
          <a href="https://wa.me/255742789292" className="text-orange hover:underline">
            +255 742 789 292
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-ink mb-2">
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-ink mb-2">
            Preferred Travel Dates
          </label>
          <input
            type="text"
            id="travelDates"
            placeholder="e.g., June 15-25, 2026"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.travelDates}
            onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-ink mb-2">
            Number of Guests
          </label>
          <select
            id="guests"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          >
            <option value="">Select...</option>
            <option value="1-2">1-2 guests</option>
            <option value="3-4">3-4 guests</option>
            <option value="5-6">5-6 guests</option>
            <option value="7+">7+ guests</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-ink mb-2">
            Budget Per Person
          </label>
          <select
            id="budget"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="">Select...</option>
            <option value="under-3000">Under $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-8000">$5,000 - $8,000</option>
            <option value="8000+">$8,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-2">
          Which Parks Interest You?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {parksOptions.map((park) => (
            <label
              key={park}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.parks.includes(park)}
                onChange={() => handleParkChange(park)}
                className="w-4 h-4 text-forest border-border-soft focus:ring-forest"
              />
              <span className="text-ink">{park}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message / Special Requests
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your dream safari - interests, special occasions, accessibility needs, anything that will help us create your perfect trip..."
          className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-forest text-cream font-montserrat font-semibold px-7 py-4 hover:bg-forest-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  )
}
