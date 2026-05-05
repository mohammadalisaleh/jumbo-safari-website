"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface HeroFormProps {
  locale: string
  accessKey: string
}

export default function HeroForm({ locale, accessKey }: HeroFormProps) {
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [date, setDate] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!name || !email) {
      setError("Please enter your name and email.")
      return
    }
    setError("")
    setLoading(true)

    const dateText = date
      ? new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Flexible"

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Safari Inquiry — ${name}`,
          name,
          email,
          message: `WhatsApp: ${whatsapp || "Not provided"}\nArrival Date: ${dateText}\nAdults: ${adults}\nChildren: ${children}`,
          from_name: "Jumbo Safaris Website",
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please WhatsApp us directly.")
      }
    } catch {
      setError("Something went wrong. Please WhatsApp us directly.")
    } finally {
      setLoading(false)
    }
  }

  const label =
    "block font-montserrat font-semibold text-[11px] uppercase tracking-[0.08em] text-orange mb-1"
  const input =
    "w-full bg-cream text-ink border border-cream/20 px-3 py-2.5 text-[15px] font-inter placeholder:text-ink/40 focus:outline-none focus:border-orange transition-colors"

  if (submitted) {
    return (
      <div className="w-full max-w-md bg-forest border border-cream/10 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
        <CheckCircle className="w-10 h-10 text-orange mb-3" />
        <h2 className="font-montserrat font-bold text-xl text-cream mb-2">
          We'll be in touch!
        </h2>
        <p className="text-cream/60 text-sm font-inter mb-5">
          Expect a reply within 24 hours. For faster response, message us on WhatsApp.
        </p>
        <a
          href="https://wa.me/255742789292"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-cream font-montserrat font-semibold text-sm px-6 py-3 hover:bg-orange/90 transition-colors"
        >
          Open WhatsApp →
        </a>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-forest border border-cream/10 p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="font-montserrat font-bold text-xl text-cream leading-tight mb-0.5">
          Plan Your Safari
        </h2>
        <p className="text-cream/45 text-[12px] font-inter">
          Free quote · No commitment · Reply within 24h
        </p>
      </div>

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className={label}>Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label className={label}>Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={input}
          />
        </div>
      </div>

      {/* Row 2: WhatsApp + Date */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className={label}>WhatsApp</label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label className={label}>Arrival Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={`${input} text-ink/60`}
          />
        </div>
      </div>

      {/* Row 3: Adults + Children counters */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className={label}>Adults</label>
          <div className="flex items-center border border-cream/20 bg-cream h-10">
            <button
              type="button"
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-9 h-full flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors text-lg"
              aria-label="Decrease adults"
            >
              −
            </button>
            <span className="flex-1 text-center font-montserrat font-bold text-forest text-base">
              {adults}
            </span>
            <button
              type="button"
              onClick={() => setAdults(Math.min(20, adults + 1))}
              className="w-9 h-full flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors text-lg"
              aria-label="Increase adults"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label className={label}>Children</label>
          <div className="flex items-center border border-cream/20 bg-cream h-10">
            <button
              type="button"
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="w-9 h-full flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors text-lg"
              aria-label="Decrease children"
            >
              −
            </button>
            <span className="flex-1 text-center font-montserrat font-bold text-forest text-base">
              {children}
            </span>
            <button
              type="button"
              onClick={() => setChildren(Math.min(10, children + 1))}
              className="w-9 h-full flex items-center justify-center text-forest hover:bg-orange hover:text-cream transition-colors text-lg"
              aria-label="Increase children"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-orange text-[12px] font-inter mb-3">{error}</p>
      )}

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-orange text-cream font-montserrat font-semibold text-sm py-3.5 hover:bg-orange/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "GET MY FREE QUOTE →"}
      </button>

      <p className="text-center text-cream/30 text-[11px] font-inter mt-2">
        No strings attached. We design your trip at no cost.
      </p>
    </div>
  )
}
