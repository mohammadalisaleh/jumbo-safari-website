"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Itinerary } from "@/lib/data/itineraries"

export interface GridItem {
  itinerary: Itinerary
  href: string
  tags: string[]
  badge: string
}

interface Props {
  items: GridItem[]
}

const FILTERS = [
  { key: "all", label: "All Itineraries" },
  { key: "short", label: "5–7 Days" },
  { key: "classic", label: "8 Days" },
  { key: "extended", label: "10–11 Days" },
  { key: "seasonal", label: "Seasonal" },
  { key: "honeymoon", label: "Honeymoon" },
  { key: "family", label: "Family" },
]

export function ItinerariesGrid({ items }: Props) {
  const [activeFilter, setActiveFilter] = useState("all")
  const scrollRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    const thumb = thumbRef.current
    if (!el || !thumb) return
    const update = () => {
      const ratio = el.clientWidth / el.scrollWidth
      const left = el.scrollLeft / el.scrollWidth
      thumb.style.left = `${left * 100}%`
      thumb.style.width = `${ratio * 100}%`
    }
    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const filtered =
    activeFilter === "all" ? items : items.filter((item) => item.tags.includes(activeFilter))

  return (
    <>
      {/* Filter bar */}
      <div className="mb-10 -mx-1">
        <div ref={scrollRef} className="flex gap-2 overflow-x-auto pb-1 px-1 scrollbar-hide">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex-shrink-0 px-4 py-2 font-montserrat font-semibold text-sm transition-colors ${
                activeFilter === filter.key
                  ? "bg-forest text-cream"
                  : "bg-white border border-border-soft text-forest hover:bg-forest/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Custom scroll track — always visible on mobile */}
        <div className="relative h-1 bg-border-soft mt-2 mx-1 lg:hidden">
          <div
            ref={thumbRef}
            className="absolute top-0 h-1 bg-forest"
            style={{ left: "0%", width: "100%" }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(({ itinerary, href, badge }) => {
          const fromPrice = itinerary.pricing?.fromPrice
          const hasGreenSeason = !!itinerary.pricing?.greenLabel

          return (
            <Link
              key={itinerary.slug}
              href={href}
              className="group border border-border-soft bg-white flex flex-col hover:border-forest transition-colors"
            >
              <div className="aspect-[4/3] bg-forest overflow-hidden">
                {itinerary.heroImage ? (
                  <Image
                    src={itinerary.heroImage.src}
                    alt={itinerary.heroImage.alt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-forest">
                    <span className="text-cream/40 text-sm font-inter">{itinerary.title}</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1">
                    {itinerary.duration}
                  </span>
                  <span className="inline-block border border-forest text-forest text-xs font-montserrat font-semibold px-3 py-1">
                    {badge}
                  </span>
                </div>
                <h2 className="font-montserrat font-bold text-[22px] text-forest mb-2 leading-snug group-hover:text-orange transition-colors">
                  {itinerary.title}
                </h2>
                {fromPrice ? (
                  <div className="mb-3 flex items-baseline gap-1">
                    <span className="font-montserrat font-bold text-xl text-orange">
                      From ${fromPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-ink/60">pp</span>
                    {hasGreenSeason && (
                      <span className="text-xs text-ink/40 ml-1">green season</span>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-ink/70 mb-3">{itinerary.price}</p>
                )}
                <p className="text-sm text-ink/60 mb-4">{itinerary.parks}</p>
                <p className="text-sm text-ink mb-5 line-clamp-3 flex-1">{itinerary.description}</p>
                <span className="inline-flex items-center text-forest font-semibold group-hover:text-orange transition-colors">
                  View Itinerary
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink/60 py-16">No itineraries match this filter.</p>
      )}
    </>
  )
}
