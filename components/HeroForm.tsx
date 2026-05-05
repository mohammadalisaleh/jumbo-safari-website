"use client"

import { useState } from "react"
import { CheckCircle, Plus, Minus } from "lucide-react"
import Image from "next/image"

interface HeroFormProps {
  locale: string
  accessKey: string
}

export default function HeroForm({ locale, accessKey }: HeroFormProps) {
  const [adults, setAdults]     = useState(2)
  const [children, setChildren] = useState(0)
  const [name, setName]         = useState("")
  const [email, setEmail]       = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [date, setDate]         = useState("")
  const [loading, setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState("")

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Please enter your name.")
      return
    }
    if (!email.trim() && !whatsapp.trim()) {
      setError("Please provide at least an email or WhatsApp number so we can reach you.")
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
      : "Flexible / not yet decided"

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Safari Enquiry — ${name} | ${adults} adult${adults !== 1 ? "s" : ""}${children > 0 ? ` + ${children} child${children !== 1 ? "ren" : ""}` : ""} | ${dateText}`,
          from_name: "Jumbo Safaris Website",
          email: email || "hello@jumbosafaris.com",
          replyto: email || undefined,
          message: [
            `Name:      ${name}`,
            `Email:     ${email || "Not provided"}`,
            `WhatsApp:  ${whatsapp || "Not provided"}`,
            `Arrival:   ${dateText}`,
            `Adults:    ${adults}`,
            `Children:  ${children}`,
          ].join("\n"),
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

  /* ── Submitted state ── */
  if (submitted) {
    return (
      <div className="w-full bg-forest p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
        <CheckCircle className="w-10 h-10 text-orange mb-4" />
        <h2 className="font-montserrat font-bold text-xl text-cream mb-2">
          We&apos;ll be in touch!
        </h2>
        <p className="text-cream/60 text-sm font-inter mb-6 max-w-xs leading-relaxed">
          Expect a reply within 24 hours with a personalised itinerary proposal.
        </p>
        <a
          href="https://wa.me/255742789292"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-cream font-montserrat font-semibold text-sm px-6 py-3 hover:bg-orange/90 transition-colors"
        >
          WhatsApp us now →
        </a>
      </div>
    )
  }

  const lbl = "block font-montserrat font-semibold text-[10px] uppercase tracking-[0.1em] text-orange mb-1.5"
  const inp = "w-full bg-white/10 text-cream border border-cream/20 px-3 py-2.5 text-[14px] placeholder:text-cream/35 focus:outline-none focus:border-orange transition-colors"

  return (
    <div className="w-full bg-forest p-5 md:p-6">

      {/* ── Expert header ── */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-cream/10">
        {/* 
          Upload your headshot to the GitHub repo at:
          public/guide-photo.jpg
          Any decent portrait works — square crop recommended.
        */}
        <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-orange/60">
          <Image
            src="/guide-photo.jpg"
            alt="Mohammadali — Your Safari Expert at Jumbo Safaris"
            fill
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="font-montserrat font-bold text-cream text-[14px] leading-snug">
            Plan Your Dream Safari
          </p>
          <p className="text-cream/45 text-[11px] font-inter">
            Free quote · No commitment · Reply within 24h
          </p>
        </div>
      </div>

      {/* ── 1. Arrival date ── */}
      <div className="mb-3">
        <label className={lbl}>Estimated Arrival Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inp + " [color-scheme:dark]"}
        />
      </div>

      {/* ── 2. Adults + Children ── */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {(
          [
            { label: "Adults",   value: adults,   set: setAdults,   min: 1 },
            { label: "Children", value: children, set: setChildren, min: 0 },
          ] as const
        ).map(({ label, value, set, min }) => (
          <div key={label}>
            <span className={lbl}>{label}</span>
            <div className="flex items-center bg-white/10 border border-cream/20 px-2 py-2.5">
              <button
                type="button"
                onClick={() => set(Math.max(min, value - 1))}
                aria-label={`Decrease ${label}`}
                className="w-7 h-7 flex items-center justify-center text-cream hover:text-orange transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="flex-1 text-center text-cream font-semibold text-[15px]">
                {value}
              </span>
              <button
                type="button"
                onClick={() => set(value + 1)}
                aria-label={`Increase ${label}`}
                className="w-7 h-7 flex items-center justify-center text-cream hover:text-orange transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── 3. Name ── */}
      <div className="mb-3">
        <label className={lbl}>Your Name</label>
        <input
          type="text"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inp}
        />
      </div>

      {/* ── 4. Email ── */}
      <div className="mb-3">
        <label className={lbl}>Email</label>
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inp}
        />
      </div>

      {/* ── 5. WhatsApp (either/or) ── */}
      <div className="mb-4">
        <label className={lbl}>
          WhatsApp
          <span className="ml-1 normal-case tracking-normal font-inter font-normal text-cream/40 text-[10px]">
            — or use email above
          </span>
        </label>
        <input
          type="tel"
          placeholder="+1 234 567 8900"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inp}
        />
      </div>

      {/* ── Error ── */}
      {error && (
        <p className="text-orange text-[12px] mb-3 font-inter leading-snug">{error}</p>
      )}

      {/* ── CTA ── */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-orange text-cream font-montserrat font-bold text-[13px] uppercase tracking-[0.08em] py-3.5 hover:bg-orange/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get My Free Itinerary"}
      </button>

      <p className="text-center text-cream/30 text-[10px] mt-2.5 font-inter">
        No payment. No obligation. Just a plan.
      </p>
    </div>
  )
}
