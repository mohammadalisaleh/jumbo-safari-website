"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

interface InquiryFormProps {
  itineraryTitle?: string
}

export function InquiryForm({ itineraryTitle }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    travelDates: "",
    guests: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
      <div className="bg-cream border border-border-soft p-6">
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-xl text-forest mb-2">
            Thank You!
          </h3>
          <p className="text-ink mb-4">
            We&apos;ve received your inquiry and will respond within 24 hours.
          </p>
          <a
            href="https://wa.me/255742789292"
            className="inline-flex items-center gap-2 text-forest hover:text-orange transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Or WhatsApp us now</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cream border border-border-soft p-6">
      <h3 className="font-montserrat font-bold text-xl text-forest mb-4">
        {itineraryTitle ? "Plan This Safari" : "Start Planning"}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">
            Full Name
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
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
            Email
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

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-ink mb-1">
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            placeholder="+1 234 567 8900"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-ink mb-1">
            Travel Dates
          </label>
          <input
            type="text"
            id="travelDates"
            placeholder="e.g., June 2026"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.travelDates}
            onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-ink mb-1">
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
          <label htmlFor="budget" className="block text-sm font-medium text-ink mb-1">
            Budget Range
          </label>
          <select
            id="budget"
            className="w-full px-4 py-3 border border-border-soft bg-white text-ink focus:outline-none focus:ring-2 focus:ring-forest"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="">Select...</option>
            <option value="under-3000">Under $3,000 per person</option>
            <option value="3000-5000">$3,000 - $5,000 per person</option>
            <option value="5000-8000">$5,000 - $8,000 per person</option>
            <option value="8000+">$8,000+ per person</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-forest text-cream font-montserrat font-semibold px-7 py-4 hover:bg-forest-dark transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <a
          href="https://wa.me/255742789292"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Or WhatsApp us: +255 742 789 292</span>
        </a>
      </div>
    </div>
  )
}
