import { Metadata } from "next"
import Link from "next/link"
import { sevenDayItinerary, getAllItineraries } from "@/lib/data/itineraries"
import { ItineraryDetail } from "@/components/itinerary-detail"

export const metadata: Metadata = {
  title: "7-Day Tanzania Safari Itinerary | Day-by-Day from Arusha",
  description:
    "7-day Tanzania safari itinerary: Tarangire, Serengeti, Ngorongoro Crater. Day-by-day schedule, drive times, park fees, and tiered prices from $2,195 pp.",
  alternates: { canonical: "https://www.jumbosafaris.com/7-day-tanzania-safari-itinerary" },
  openGraph: {
    title: "7-Day Tanzania Safari Itinerary | Day-by-Day Guide 2026",
    description:
      "Complete day-by-day 7-day Tanzania safari: Tarangire, Serengeti, Ngorongoro Crater. Times, parks, park fees, and tiered prices.",
    url: "https://www.jumbosafaris.com/7-day-tanzania-safari-itinerary",
  },
}

function DriveTimesSection() {
  return (
    <section className="mb-12">
      <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
        Drive times and distances
      </h2>
      <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
        All driving is on tarmac between towns and on park tracks inside the reserves. The Tarangire to Serengeti leg on Day 3 is the longest drive of the trip and takes the better part of a day, which is why we include the Olduvai Gorge stop en route.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border-soft text-sm text-left">
          <thead>
            <tr className="bg-forest text-cream">
              <th className="py-3 px-4 font-montserrat font-semibold">Leg</th>
              <th className="py-3 px-4 font-montserrat font-semibold">Day</th>
              <th className="py-3 px-4 font-montserrat font-semibold">Distance</th>
              <th className="py-3 px-4 font-montserrat font-semibold">Drive time</th>
            </tr>
          </thead>
          <tbody>
            {[
              { leg: "Arusha to Tarangire Gate", day: "Day 1", distance: "120 km", time: "~2 hours" },
              { leg: "Tarangire to Serengeti (via Ngorongoro Highlands)", day: "Day 3", distance: "330 km", time: "5-6 hours with stops" },
              { leg: "Serengeti to Ngorongoro Crater rim", day: "Day 6", distance: "150 km", time: "~3 hours" },
              { leg: "Ngorongoro rim to Arusha", day: "Day 7", distance: "180 km", time: "~3 hours" },
              { leg: "Total (all driving)", day: "7 days", distance: "~1,100 km", time: "" },
            ].map((row) => (
              <tr key={row.leg} className="bg-white border-t border-border-soft">
                <td className="py-3 px-4 font-medium text-forest">{row.leg}</td>
                <td className="py-3 px-4 text-ink/70">{row.day}</td>
                <td className="py-3 px-4 text-ink/70">{row.distance}</td>
                <td className="py-3 px-4 text-ink/70">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ParkFeesSection() {
  return (
    <section className="mb-12">
      <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
        Park fees for this itinerary
      </h2>
      <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
        Park fees are set by the Tanzanian government and apply to every visitor regardless of operator. These are the 2026 non-resident adult rates for the exact parks and days in this route, staying inside the parks. No VAT applies to government park fees. All of these are already included in the tier prices above.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-border-soft text-sm text-left">
          <thead>
            <tr className="bg-forest text-cream">
              <th className="py-3 px-4 font-montserrat font-semibold">Fee</th>
              <th className="py-3 px-4 font-montserrat font-semibold">Days</th>
              <th className="py-3 px-4 font-montserrat font-semibold">Rate/person/day</th>
              <th className="py-3 px-4 font-montserrat font-semibold">Per adult total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { fee: "Tarangire Entry Fee", days: "2", rate: "$59.00", total: "$118.00" },
              { fee: "Tarangire Concession Fee", days: "2", rate: "$59.00", total: "$118.00" },
              { fee: "Serengeti Entry Fee (peak season)", days: "3", rate: "$82.60", total: "$247.80" },
              { fee: "NCA Entry Fee (Ngorongoro)", days: "2", rate: "$71.00", total: "$142.00" },
              { fee: "NCA Concession Fee (Ngorongoro)", days: "2", rate: "$59.00", total: "$118.00" },
              { fee: "Ngorongoro Crater Descent", days: "1 descent", rate: "$295/vehicle", total: "Shared by group" },
            ].map((row) => (
              <tr key={row.fee} className="bg-white border-t border-border-soft">
                <td className="py-3 px-4 font-medium text-forest">{row.fee}</td>
                <td className="py-3 px-4 text-ink/70">{row.days}</td>
                <td className="py-3 px-4 text-ink/70">{row.rate}</td>
                <td className="py-3 px-4 text-ink/70">{row.total}</td>
              </tr>
            ))}
            <tr className="bg-forest text-cream border-t border-border-soft">
              <td className="py-3 px-4 font-montserrat font-bold" colSpan={3}>
                Total park fees per adult (excluding crater vehicle fee)
              </td>
              <td className="py-3 px-4 font-montserrat font-bold">$743.80</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white border border-border-soft p-6">
        <p className="text-sm text-ink mb-2">
          <span className="font-montserrat font-semibold text-forest">Crater descent:</span> The $295 vehicle fee is paid once per descent and split across the vehicle. For two adults that is $147.50 each. For four adults, $73.75 each.
        </p>
        <p className="text-sm text-ink">
          <span className="font-montserrat font-semibold text-forest">Low season (Apr-May):</span> Serengeti entry drops to $70.80/day, reducing total park fees to around $702.20/adult.
        </p>
      </div>
      <p className="text-sm text-ink/60 mt-4">
        Every Jumbo Safaris quote shows park fees broken down by park, day count, and person type.{" "}
        <Link href="/tanzania-park-fees" className="text-forest hover:underline">
          How Tanzania park fees are calculated
        </Link>
      </p>
    </section>
  )
}

function SeasonalSection() {
  return (
    <section className="mb-12">
      <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
        How the itinerary changes by season
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            months: "Jan - Mar",
            character: "Calving season",
            notes: "Wildebeest calving at Ndutu. The 7-day route can be adjusted to add time in the southern Serengeti near Ndutu instead of central Seronera. Best cheetah viewing of the year.",
          },
          {
            months: "Apr - May",
            character: "Green season",
            notes: "Long rains. Prices drop 20-30%. Park roads can flood. Wildlife spreads out and is harder to find. The Serengeti is lush and beautiful. Fewer tourists.",
          },
          {
            months: "Jun - Oct",
            character: "Dry season",
            notes: "Peak season. Animals concentrate around water. Northern Serengeti (July-Oct) has the Mara River crossings. Best overall wildlife density. Lodge prices at peak.",
          },
          {
            months: "Nov - Dec",
            character: "Short rains / value",
            notes: "Short rains finish in November. Prices lower than peak season. Wildlife starts dispersing across the Serengeti as the plains green up. Good value months.",
          },
        ].map((season) => (
          <div key={season.months} className="bg-white border border-border-soft p-6">
            <div className="font-montserrat font-bold text-forest text-lg mb-1">{season.months}</div>
            <div className="text-sm text-orange font-montserrat font-semibold mb-3">{season.character}</div>
            <p className="text-sm text-ink">{season.notes}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function SevenDayItineraryPage() {
  const related = getAllItineraries()
    .filter((i) => ["8-day-classic-tanzania-safari", "5-day-northern-circuit", "11-day-tanzania-zanzibar"].includes(i.slug))

  return (
    <ItineraryDetail
      itinerary={sevenDayItinerary}
      canonicalPath="/7-day-tanzania-safari-itinerary"
      related={related}
      extraSections={
        <>
          <DriveTimesSection />
          <ParkFeesSection />
          <SeasonalSection />
        </>
      }
    />
  )
}
