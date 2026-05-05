"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface HeroFormProps {
  locale: string
}

export default function HeroForm({ locale }: HeroFormProps) {
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = () => {
    const dateText = date ? new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "Flexible"
    const message = encodeURIComponent(
      `Hi Jumbo Safaris! I'd like to plan a Tanzania safari.\n\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nArrival Date: ${dateText}\nAdults: ${adults}\nChildren: ${children}\n\nPlease send me a free custom quote.`
    )
    window.open(`https://wa.me/255742789292?text=${message}`, "_blank")
  }

  const labelClass = "block font-montserrat font-semibold text-[11px] uppercase tracking-[0.08em] text-orange mb-1.5"
  const inputClass = "w-full bg-cream text-ink border border-cream/30 px-3.5 py-3 text-base font-inter placeholder:text-ink/40 focus:outline-none focus:border-orange transition-colors"

  return (
    <div className="w-full max-w-md bg-forest border border-cream/10 p-8">
      {/* Form header */}
      <div className="mb-6">
        <h2 className="font-montserrat font-bold text-[22px] text-cream leading-tight mb-1">
          Plan Your Safari
        </h2>
        <p className="text-cream/50 text-[13px] font-inter">
          Free quote · No commitment · Reply within 24h
        </p>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className={labelClass}>Full Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className={labelClass}>Email Address</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* WhatsApp */}
      <div className="mb-4">
        <label className={labelClass}>WhatsApp Number</label>
        <input
          type="tel"
          placeholder="+1 234 567 8900"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Arrival Date */}
      <div className="mb-4">
        <label className={labelClass}>Estimated Arrival Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className={`${inputClass} text-ink/70`}
        />
      </div>

      {/* Adults + Children counters */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Adults */}
        <div>
          <label className={labelClass}>Adults</label>
          <div className="flex items-center border border-cream/30 bg-cream">
            <button
              type="button"
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-10 h-11 flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors"
              aria-label="Decrease adults"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="flex-1 text-center font-montserrat font-bold text-forest text-lg">
              {adults}
            </span>
            <button
              type="button"
              onClick={() => setAdults(Math.min(20, adults + 1))}
              className="w-10 h-11 flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors"
              aria-label="Increase adults"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Children */}
        <div>
          <label className={labelClass}>Children</label>
          <div className="flex items-center border border-cream/30 bg-cream">
            <button
              type="button"
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="w-10 h-11 flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors"
              aria-label="Decrease children"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="flex-1 text-center font-montserrat font-bold text-forest text-lg">
              {children}
            </span>
            <button
              type="button"
              onClick={() => setChildren(Math.min(10, children + 1))}
              className="w-10 h-11 flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors"
              aria-label="Increase children"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-orange text-cream font-montserrat font-semibold text-[15px] py-4 hover:bg-orange/90 transition-colors"
      >
        GET MY FREE QUOTE →
      </button>

      {/* Microcopy */}
      <p className="text-center text-cream/40 text-[12px] font-inter mt-3">
        No strings attached. We'll design your trip at no cost.
      </p>
    </div>
  )
}
