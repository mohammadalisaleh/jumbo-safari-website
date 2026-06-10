"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Day {
  day: number
  title: string
  activities: string
  accommodation: string
  meals: string
}

interface ItineraryAccordionProps {
  days: Day[]
}

export function ItineraryAccordion({ days }: ItineraryAccordionProps) {
  const [openDay, setOpenDay] = useState<number | null>(1)

  return (
    <div className="border border-border-soft divide-y divide-border-soft">
      {days.map((day) => (
        <div key={day.day}>
          <button
            className="w-full flex items-center justify-between p-4 text-left hover:bg-border-soft/30 transition-colors"
            onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
            aria-expanded={openDay === day.day}
          >
            <span className="font-montserrat font-semibold text-forest">
              Day {day.day}: {day.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-forest transition-transform ${
                openDay === day.day ? "rotate-180" : ""
              }`}
            />
          </button>

          {openDay === day.day && (
            <div className="px-4 pt-4 pb-6 bg-white">
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-sm text-ink uppercase tracking-wide mb-2">
                    Activities
                  </h4>
                  <p className="text-ink">{day.activities}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-ink uppercase tracking-wide mb-2">
                      Accommodation
                    </h4>
                    <p className="text-ink text-sm">{day.accommodation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-ink uppercase tracking-wide mb-2">
                      Meals
                    </h4>
                    <p className="text-ink text-sm">{day.meals}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
