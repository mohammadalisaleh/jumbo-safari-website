"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Minus, Plus, ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroFormProps {
  locale: string
}

export default function HeroForm({ locale }: HeroFormProps) {
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [date, setDate] = useState("")
  const router = useRouter()

  const localePath = (path: string) =>
    locale === "en" ? `/${path}` : `/${locale}/${path}`

  const handleSubmit = () => {
    const params = new URLSearchParams({
      adults: adults.toString(),
      children: children.toString(),
      ...(date && { date }),
    })
    router.push(`${localePath("plan-your-safari")}?${params.toString()}`)
  }

  return (
    <div className="bg-cream w-full max-w-sm p-8">
      {/* Photo + intro */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-forest">
          <Image
            src="/team-photo.jpg"
            alt="Jumbo Safaris team"
            fill
            className="object-cover"
            onError={() => {}}
          />
        </div>
        <div>
          <p className="font-montserrat font-bold text-forest text-sm leading-snug">
            Let&apos;s plan your dream trip together!
          </p>
          <p className="text-xs text-muted mt-0.5">No cost. No commitment.</p>
        </div>
      </div>

      {/* Adults */}
      <div className="mb-4">
        <label className="font-montserrat font-semibold text-xs uppercase tracking-widest text-forest mb-2 block">
          Adults
        </label>
        <div className="flex items-center border border-border-soft">
          <button
            onClick={() => setAdults(Math.max(1, adults - 1))}
            className="px-4 py-3 text-forest hover:text-orange transition-colors"
            aria-label="Decrease adults"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="flex-1 text-center font-montserrat font-bold text-forest text-lg">
            {adults}
          </span>
          <button
            onClick={() => setAdults(adults + 1)}
            className="px-4 py-3 text-forest hover:text-orange transition-colors"
            aria-label="Increase adults"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="mb-4">
        <label className="font-montserrat font-semibold text-xs uppercase tracking-widest text-forest mb-2 block">
          Children
        </label>
        <div className="flex items-center border border-border-soft">
          <button
            onClick={() => setChildren(Math.max(0, children - 1))}
            className="px-4 py-3 text-forest hover:text-orange transition-colors"
            aria-label="Decrease children"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="flex-1 text-center font-montserrat font-bold text-forest text-lg">
            {children}
          </span>
          <button
            onClick={() => setChildren(children + 1)}
            className="px-4 py-3 text-forest hover:text-orange transition-colors"
            aria-label="Increase children"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="font-montserrat font-semibold text-xs uppercase tracking-widest text-forest mb-2 block">
          Estimated Arrival Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="w-full border border-border-soft p-3 bg-transparent text-forest font-inter text-sm focus:outline-none focus:border-forest"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-forest text-cream font-montserrat font-semibold py-4 hover:bg-forest/90 transition-colors flex items-center justify-center gap-2"
      >
        Plan My Safari
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* USPs */}
      <ul className="mt-5 space-y-2">
        {[
          "100% tailor-made itineraries",
          "Private guides, private vehicles",
          "Response within 24 hours",
        ].map((usp) => (
          <li key={usp} className="flex items-center gap-2 text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
            {usp}
          </li>
        ))}
      </ul>
    </div>
  )
}
