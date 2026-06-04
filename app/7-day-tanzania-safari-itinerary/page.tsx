import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "7-Day Tanzania Safari Itinerary | Day-by-Day from Arusha",
  description:
    "A complete 7-day Tanzania safari itinerary: Tarangire, Serengeti, and Ngorongoro Crater. Day-by-day schedule with departure times, what to expect, and private vs group options.",
  alternates: { canonical: "https://www.jumbosafaris.com/7-day-tanzania-safari-itinerary" },
  openGraph: {
    title: "7-Day Tanzania Safari Itinerary | Day-by-Day Guide 2026",
    description:
      "Complete day-by-day 7-day Tanzania safari: Tarangire, Serengeti, Ngorongoro Crater. Times, parks, and what you actually see.",
    url: "https://www.jumbosafaris.com/7-day-tanzania-safari-itinerary",
  },
}

const days = [
  {
    day: 1,
    title: "Arusha to Tarangire National Park",
    time: "Depart 07:30 from Arusha",
    highlights: "First elephants, baobab forests, Tarangire River",
    body: "Your guide picks you up from your Arusha hotel at 7:30am. The drive southeast takes about two hours, passing through Maasai village country before the land thickens into acacia woodland and the first baobabs appear. You enter Tarangire through the main gate and head for the river.\n\nThe Tarangire River is the only permanent water in the dry season. Everything comes to it. In the morning you might find 60 elephants at the water before the park gate is even behind you. Game drive through the afternoon, checking in at your camp before sunset.",
    accommodation: "Tarangire Safari Lodge or similar",
    meals: "Lunch, Dinner",
    parkSlug: "tarangire",
    parkName: "Tarangire National Park",
  },
  {
    day: 2,
    title: "Full Day in Tarangire",
    time: "In vehicle by 06:30",
    highlights: "Elephant herds of 100+, fringe-eared oryx, gerenuk, tree-climbing pythons",
    body: "An early start while the air is cold and the animals are moving. The Silale Swamp in the south draws buffalo, wildebeest, and hippos that most tourists never reach because guides hustle toward the easier north.\n\nTarangire has species you will not see in the Serengeti or Ngorongoro: fringe-eared oryx with their long straight horns, gerenuk browsing upright on their hind legs, greater kudu in the dense bush. Bird list tops 550 species. The park is 2,850 square kilometres and the roads are uncrowded compared to the Serengeti. A full day here is earned, not padded.",
    accommodation: "Tarangire Safari Lodge or similar",
    meals: "Breakfast, Lunch, Dinner",
    parkSlug: "tarangire",
    parkName: "Tarangire National Park",
  },
  {
    day: 3,
    title: "Tarangire to Central Serengeti",
    time: "Depart 07:00 from camp",
    highlights: "Ngorongoro Highlands scenic drive, Olduvai Gorge stop, Serengeti arrival",
    body: "Leave Tarangire after breakfast and drive west through the Ngorongoro Highlands. The road climbs through farmland and Maasai settlements. Stop at Olduvai Gorge on the way: in 1959, Mary Leakey uncovered a hominid skull here dating to 1.8 million years ago. The site guide does a 20-minute talk at the excavation. Worth the stop.\n\nContinue to Naabi Hill Gate and begin your first game drive in the Serengeti. The change in landscape is immediate: open short-grass plains extending to the horizon in every direction. Check into your camp near the Seronera area. Late afternoon drive to settle in to the rhythm of this very different ecosystem.",
    accommodation: "Central Serengeti tented camp or lodge",
    meals: "Breakfast, Lunch, Dinner",
    parkSlug: "serengeti",
    parkName: "Serengeti National Park",
  },
  {
    day: 4,
    title: "Full Day in the Central Serengeti",
    time: "In vehicle by 06:30",
    highlights: "Seronera River, lion prides, leopard, hippo pools",
    body: "The Seronera Valley is the most reliable year-round wildlife area in the Serengeti. The Seronera River and its tributaries create a permanent waterway through the central plains, and the fig trees along the banks are where leopard rest during the day. Your guide knows the trees.\n\nLion prides in the Seronera area have been studied for decades and are extraordinarily tolerant of vehicles. It is common to find a pride of 12 or more lions within 10 metres of the road, sleeping off a morning kill. Cheetah are frequently spotted on the open plains east of Seronera. Hippo pools on the river hold 30 to 50 animals. The afternoon light here turns the kopjes orange.",
    accommodation: "Central Serengeti tented camp or lodge",
    meals: "Breakfast, Lunch, Dinner",
    parkSlug: "serengeti",
    parkName: "Serengeti National Park",
  },
  {
    day: 5,
    title: "Serengeti: Early Drive and Afternoon Game Drive",
    time: "In vehicle by 06:00",
    highlights: "Predator activity at dawn, afternoon light on the plains",
    body: "The best hour in the Serengeti is the first one. Sunrise over the plains turns everything gold, and the predators are still active. Leave camp at 6:00am and drive the Seronera area while the cheetah and lion are still on the move.\n\nMid-morning return to camp for a full breakfast, then rest through the hottest hours. Back in the vehicle by 3:30pm for the afternoon drive. Late light on the Serengeti is genuinely different: the colours shift, the animals come back out, and the activity around water holes picks up. Stay out until the park gate closing time and drive back to camp after dark.",
    accommodation: "Central Serengeti tented camp or lodge",
    meals: "Breakfast, Lunch, Dinner",
    parkSlug: "serengeti",
    parkName: "Serengeti National Park",
  },
  {
    day: 6,
    title: "Serengeti to Ngorongoro Crater",
    time: "Depart 07:00, crater floor by 10:00",
    highlights: "Full day in the crater, Big Five, 26-55 black rhino, ~60 lions",
    body: "Drive east through the Serengeti, exiting at Naabi Hill and climbing back into the Ngorongoro Conservation Area. Reach the crater rim by mid-morning and descend into the caldera.\n\nThe Ngorongoro Crater is 260 square kilometres on the floor, enclosed by walls that drop 610 metres. Animals that live here rarely leave. The density is extraordinary: approximately 60 lions, 26-55 black rhino, and around 25,000 large animals in total. Your guide pays the $295 vehicle fee at the descent gate and you spend the full day on the crater floor.\n\nThere are no giraffe in the crater. The walls are too steep. Everything else that lives in east Africa is here in numbers that seem improbable until you see it yourself.\n\nAscend at closing time and overnight at a lodge on the crater rim.",
    accommodation: "Ngorongoro Crater Lodge or similar (rim)",
    meals: "Breakfast, Lunch, Dinner",
    parkSlug: "ngorongoro-crater",
    parkName: "Ngorongoro Crater",
  },
  {
    day: 7,
    title: "Ngorongoro Highlands to Arusha",
    time: "Optional morning activity, depart by 11:00",
    highlights: "Maasai village visit optional, return to Arusha by mid-afternoon",
    body: "A lighter final morning. Optional early walk or visit to a Maasai village near the crater rim. If your flight is afternoon or evening, there is time for this and still a comfortable return.\n\nLeave the crater area by 11:00am for the three-hour drive back to Arusha. You arrive in the early afternoon. Most international flights depart Kilimanjaro Airport (JRO) in the early morning, so most travelers overnight in Arusha and depart the following day.",
    accommodation: "Your Arusha hotel (pre/post safari night not included by default)",
    meals: "Breakfast",
  },
]

const faqs = [
  {
    question: "Is 7 days enough for a Tanzania safari?",
    answer:
      "Seven days is enough to do the Northern Circuit properly: Tarangire, central Serengeti, and Ngorongoro Crater. You get two nights in Tarangire, three in the Serengeti, one on the crater rim, and a travel day at each end. It is not leisurely but it is not rushed either. Eight days is better if you can manage it.",
  },
  {
    question: "What is the best route for a 7-day Tanzania safari?",
    answer:
      "Arusha to Tarangire (2 nights), then Serengeti (3 nights), then Ngorongoro Crater (1 night), then back to Arusha. Total driving is roughly 1,100km. Some operators reverse the route but driving Tarangire first makes logistical sense: it is closest to Arusha and you warm up on a good park before the longer Serengeti drive.",
  },
  {
    question: "What is the best time of year for a 7-day Tanzania safari?",
    answer:
      "June through October is peak dry season: animals concentrate around water, grass is short so sightings are easier, and the northern Serengeti has the Mara River crossings from July through October. January through March is calving season in the southern Serengeti near Ndutu, with the best cheetah viewing of the year. April and May have the lowest prices (30% off most lodges) but long rains make some roads difficult. Any month works on the 7-day Northern Circuit. The itinerary adjusts to wherever the migration is when you travel.",
  },
  {
    question: "How much does a 7-day Tanzania safari cost?",
    answer:
      "A private mid-range 7-day safari for two people runs $5,600 to $7,000 total (guide, vehicle, lodges, park fees, meals). Per person that is $2,800 to $3,500. Budget options start around $4,000 total for two. Luxury camps push to $12,000 or more for two. Park fees alone for this route are roughly $744 per adult in peak season, which most operators bury in a single line. Ask for the breakdown by park.",
  },
  {
    question: "What animals will I see on a 7-day Tanzania safari?",
    answer:
      "On this Northern Circuit route: elephant (Tarangire has the highest elephant density in Tanzania), lion, leopard, cheetah, buffalo, hippo, crocodile, and black rhino in the Ngorongoro Crater. Tarangire adds species absent elsewhere: fringe-eared oryx, greater kudu, and gerenuk. The Serengeti has the Big Five plus the best cheetah sightings in Africa. Ngorongoro Crater has roughly 50 black rhino, which is one of the largest concentrations anywhere. Wildebeest migration timing determines whether you see river crossings in the north or calving in the south.",
  },
  {
    question: "Can I see the Great Migration on a 7-day safari?",
    answer:
      "Yes, if you time it correctly. The migration is in the Serengeti year-round: in the south near Ndutu from December through March, moving north from April onward, reaching the northern Serengeti Mara River crossings from July through October. The standard 7-day itinerary focuses on central Serengeti (Seronera), which has good year-round wildlife. To see the river crossings, the itinerary shifts to the northern Serengeti on Days 3 through 5. We position the route based on where the herds are when you travel.",
  },
  {
    question: "Do I need a visa for Tanzania?",
    answer:
      "Most nationalities need a Tanzania eVisa, which costs $100 and is applied for online before travel at immigration.go.tz. US, UK, EU, Canadian, and Australian passport holders all qualify. The eVisa is issued within a few days. East African Community members (Kenya, Uganda, Rwanda) can enter visa-free. Apply at least two weeks before travel to allow for processing time.",
  },
  {
    question: "How fit do I need to be for a 7-day safari?",
    answer:
      "No particular fitness is required. A safari is almost entirely vehicle-based. You sit in a 4x4 Land Cruiser for game drives. The longest drive on this itinerary is Day 3 from Tarangire to the Serengeti, about 5 to 6 hours including stops. Anyone who can sit comfortably for several hours can do this trip. If you have mobility limitations that affect getting in and out of a high-clearance vehicle, mention it when booking so we can plan accordingly.",
  },
  {
    question: "Can I do this itinerary as a solo traveler?",
    answer:
      "Yes. Solo travelers pay a single supplement because the vehicle cost stays the same regardless of group size. On a private safari the supplement is typically $200 to $400 over the full trip at mid-range. Some travelers prefer to join a small group tour to share costs. The tradeoff is that you lose schedule flexibility: the group decides collectively when to leave a sighting, when to take breaks, and what to prioritize. If you are traveling alone and want full control over the itinerary, private is still the better choice.",
  },
  {
    question: "Private or group tour for 7 days?",
    answer:
      "Private. A 7-day safari is long enough that a shared group vehicle becomes genuinely unpleasant: six people debating when to leave a sighting, different wake-up preferences, one person with a cold in the vehicle for a week. The private premium at mid-range is $300 to $600 per person over the full trip. For a trip this length, it is worth it.",
  },
  {
    question: "Can I extend this to include Zanzibar?",
    answer:
      "Yes, and it is a natural extension. Most travelers add 3 to 5 nights in Zanzibar after the safari. The standard routing is: 7-day safari ending in Arusha, then fly from Kilimanjaro Airport (JRO) to Zanzibar (ZNZ), roughly a 2-hour journey with a stop in Dar es Salaam. Zanzibar adds beach time, Stone Town, and a complete change of scenery after a week in the bush. Our 11-day Tanzania and Zanzibar itinerary builds this in.",
  },
]

export default function SevenDayItineraryPage() {
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "7-Day Tanzania Safari Itinerary",
    description:
      "A 7-day private Tanzania safari covering Tarangire National Park, the central Serengeti, and Ngorongoro Crater. Departing from Arusha.",
    touristType: "Wildlife Safari",
    itinerary: {
      "@type": "ItemList",
      itemListElement: days.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day}: ${day.title}`,
      })),
    },
    offers: {
      "@type": "Offer",
      price: "2800",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Per person, private, mid-range. Minimum 2 people.",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Jumbo Safaris",
      url: "https://www.jumbosafaris.com",
      telephone: "+255742789292",
      email: "hello@jumbosafaris.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arusha",
        addressCountry: "TZ",
      },
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "7-Day Tanzania Safari Itinerary", item: "https://www.jumbosafaris.com/7-day-tanzania-safari-itinerary" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-cream">
        {/* Breadcrumb */}
        <div className="max-w-content mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink/70">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/itineraries" className="hover:text-forest transition-colors">Itineraries</Link>
            <span>/</span>
            <span className="text-forest">7-Day Tanzania Safari</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Complete Day-by-Day Guide</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              7-Day Tanzania Safari Itinerary
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
              Tarangire, Serengeti, Ngorongoro Crater. Seven days from Arusha and back. Here is the exact day-by-day breakdown with departure times, what you see, and where you sleep.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 text-sm text-cream/80">
              <div><span className="font-montserrat font-semibold text-cream">Duration:</span> 7 days / 6 nights</div>
              <div><span className="font-montserrat font-semibold text-cream">Parks:</span> Tarangire, Serengeti, Ngorongoro</div>
              <div><span className="font-montserrat font-semibold text-cream">From:</span> $2,800/person (private, 2+ people)</div>
              <div><span className="font-montserrat font-semibold text-cream">Departs:</span> Arusha, Tanzania</div>
            </div>
          </div>
        </section>

        {/* Day by day */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">The Itinerary</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              Day-by-day schedule
            </h2>

            <div className="space-y-12">
              {days.map((day) => (
                <div key={day.day} className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-8">
                  {/* Day number */}
                  <div className="flex-shrink-0">
                    <div className="bg-forest text-cream font-montserrat font-bold text-4xl w-16 h-16 flex items-center justify-center">
                      {day.day}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="border-b border-forest/10 pb-12">
                    <div className="text-sm text-orange font-montserrat font-semibold mb-1">{day.time}</div>
                    <h3 className="font-montserrat font-bold text-xl text-forest mb-2">{day.title}</h3>
                    <div className="text-sm text-ink mb-4">Highlights: {day.highlights}</div>
                    {day.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-body text-ink/80 mb-4">{para}</p>
                    ))}
                    {day.parkSlug && (
                      <Link
                        href={`/national-parks/${day.parkSlug}`}
                        className="inline-flex items-center gap-1 text-sm text-forest font-montserrat font-semibold hover:underline mb-4"
                      >
                        Full guide to {day.parkName} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                    <div className="flex flex-wrap gap-6 text-sm mt-4 pt-4 border-t border-forest/10">
                      <div>
                        <span className="font-montserrat font-semibold text-forest">Sleep: </span>
                        <span className="text-ink/70">{day.accommodation}</span>
                      </div>
                      <div>
                        <span className="font-montserrat font-semibold text-forest">Meals: </span>
                        <span className="text-ink/70">{day.meals}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drive times */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Logistics</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
              Drive times and distances
            </h2>
            <p className="text-ink/80 mb-8 max-w-2xl">
              All driving is on tarmac between towns and on park tracks inside the reserves. The Tarangire to Serengeti leg on Day 3 is the longest drive of the trip and takes the better part of a day, which is why we include the Olduvai Gorge stop en route.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest text-cream">
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Leg</th>
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Day</th>
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Distance</th>
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Drive time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/10">
                  {[
                    { leg: "Arusha to Tarangire Gate", day: "Day 1", distance: "120 km", time: "~2 hours" },
                    { leg: "Tarangire to Serengeti (via Ngorongoro Highlands)", day: "Day 3", distance: "330 km", time: "5–6 hours with stops" },
                    { leg: "Serengeti to Ngorongoro Crater rim", day: "Day 6", distance: "150 km", time: "~3 hours" },
                    { leg: "Ngorongoro rim to Arusha", day: "Day 7", distance: "180 km", time: "~3 hours" },
                    { leg: "Total (all driving)", day: "7 days", distance: "~1,100 km", time: "" },
                  ].map((row) => (
                    <tr key={row.leg} className="bg-white even:bg-forest/5">
                      <td className="py-3 px-4 font-medium text-forest">{row.leg}</td>
                      <td className="py-3 px-4 text-ink/70">{row.day}</td>
                      <td className="py-3 px-4 text-ink/70">{row.distance}</td>
                      <td className="py-3 px-4 text-ink/70">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Park fees */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">Costs</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
              Park fees for this itinerary
            </h2>
            <p className="text-ink/80 mb-8 max-w-2xl">
              Park fees are set by the Tanzanian government and apply to every visitor regardless of operator. These are the 2026 non-resident adult rates for the exact parks and days in this route. No VAT applies to government park fees.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest text-cream">
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Fee</th>
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Days</th>
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Rate/person/day</th>
                    <th className="text-left py-3 px-4 font-montserrat font-semibold">Per adult total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/10">
                  {[
                    { fee: "Tarangire Entry Fee", days: "2", rate: "$59.00", total: "$118.00" },
                    { fee: "Tarangire Concession Fee", days: "2", rate: "$59.00", total: "$118.00" },
                    { fee: "Serengeti Entry Fee (peak season)", days: "3", rate: "$82.60", total: "$247.80" },
                    { fee: "NCA Entry Fee (Ngorongoro)", days: "2", rate: "$71.00", total: "$142.00" },
                    { fee: "NCA Concession Fee (Ngorongoro)", days: "2", rate: "$59.00", total: "$118.00" },
                    { fee: "Ngorongoro Crater Descent", days: "1 descent", rate: "$295/vehicle", total: "Shared by group" },
                  ].map((row) => (
                    <tr key={row.fee} className="bg-white even:bg-forest/5">
                      <td className="py-3 px-4 font-medium text-forest">{row.fee}</td>
                      <td className="py-3 px-4 text-ink/70">{row.days}</td>
                      <td className="py-3 px-4 text-ink/70">{row.rate}</td>
                      <td className="py-3 px-4 text-ink/70">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-forest text-cream">
                    <td className="py-3 px-4 font-montserrat font-bold" colSpan={3}>Total park fees per adult (excluding crater vehicle fee)</td>
                    <td className="py-3 px-4 font-montserrat font-bold">$743.80</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-forest/5 p-6 max-w-2xl">
              <p className="text-sm text-ink/80 mb-2">
                <span className="font-montserrat font-semibold text-forest">Crater descent:</span> The $295 vehicle fee is paid once per descent and split across the vehicle. For two adults that is $147.50 each. For four adults, $73.75 each.
              </p>
              <p className="text-sm text-ink/80">
                <span className="font-montserrat font-semibold text-forest">Low season (Apr–May):</span> Serengeti entry drops to $70.80/day, reducing total park fees to around $702.20/adult.
              </p>
            </div>
            <p className="text-sm text-ink/60 mt-4">
              Every Jumbo Safaris quote shows park fees broken down by park, day count, and person type.{" "}
              <Link href="/tanzania-park-fees" className="text-forest hover:underline">
                How Tanzania park fees are calculated
              </Link>
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-eyebrow uppercase text-orange mb-3">Included</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  What is in the price
                </h2>
                <ul className="space-y-3 text-ink/80">
                  {[
                    "Private 4x4 Toyota Land Cruiser with pop-up roof",
                    "Dedicated guide for your group only",
                    "All park entrance and conservation fees",
                    "All meals inside the parks (full-board)",
                    "Arusha hotel pickup and drop-off",
                    "6 nights accommodation (lodges or tented camps)",
                    "Drinking water throughout the drive",
                    "Flying Doctors emergency evacuation cover",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-forest font-bold mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-eyebrow uppercase text-forest/60 font-semibold mb-3">Not Included</p>
                <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
                  What you pay separately
                </h2>
                <ul className="space-y-3 text-ink/80">
                  {[
                    "International flights to Kilimanjaro Airport (JRO)",
                    "Tanzania eVisa ($100 for most nationalities)",
                    "Travel insurance (required)",
                    "Guide tips: $20–$25/day (standard)",
                    "Lodge staff tips: $5–$7/person/day",
                    "Personal drinks, laundry, souvenirs",
                    "Hot air balloon ride: $599/person (optional add-on)",
                    "Arusha accommodation before/after safari",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-orange font-bold mt-0.5">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal notes */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">When to Go</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              How the itinerary changes by season
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  months: "Jan – Mar",
                  character: "Calving season",
                  notes: "Wildebeest calving at Ndutu. The 7-day route can be adjusted to add time in the southern Serengeti near Ndutu instead of central Seronera. Best cheetah viewing of the year.",
                },
                {
                  months: "Apr – May",
                  character: "Green season",
                  notes: "Long rains. Prices drop 20–30%. Park roads can flood. Wildlife spreads out and is harder to find. The Serengeti is lush and beautiful. Fewer tourists.",
                },
                {
                  months: "Jun – Oct",
                  character: "Dry season",
                  notes: "Peak season. Animals concentrate around water. Northern Serengeti (July–Oct) has the Mara River crossings. Best overall wildlife density. Lodge prices at peak.",
                },
                {
                  months: "Nov – Dec",
                  character: "Short rains / value",
                  notes: "Short rains finish in November. Prices lower than peak season. Wildlife starts dispersing across the Serengeti as the plains green up. Good value months.",
                },
              ].map((season) => (
                <div key={season.months} className="bg-forest/5 p-6">
                  <div className="font-montserrat font-bold text-forest text-lg mb-1">{season.months}</div>
                  <div className="text-sm text-orange font-montserrat font-semibold mb-3">{season.character}</div>
                  <p className="text-sm text-ink/80">{season.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-forest/5 py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
              7-day safari questions
            </h2>
            <div className="max-w-3xl space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-forest/10 pb-8">
                  <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">{faq.question}</h3>
                  <p className="text-ink/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related itineraries */}
        <section className="py-16 md:py-20">
          <div className="max-w-content mx-auto px-6">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              Want more time? View 8 and 11-day options
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "8-Day Classic Tanzania Safari", slug: "8-day-classic-tanzania-safari", desc: "Two full nights in Tarangire, three in the Serengeti, a full crater day." },
                { title: "11-Day Tanzania & Zanzibar", slug: "11-day-tanzania-zanzibar", desc: "Full safari plus a week on the Zanzibar coast." },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/itineraries/${item.slug}`}
                  className="flex items-start gap-4 p-6 border border-forest/20 hover:border-forest hover:bg-forest/5 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="font-montserrat font-semibold text-forest mb-1 group-hover:text-forest">{item.title}</div>
                    <div className="text-sm text-ink/70">{item.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-forest flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest text-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-6 text-center">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
              Book this itinerary private
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Send your dates and group size. We send an itemised quote within 24 hours with accommodation options at your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 font-montserrat font-bold hover:bg-orange/90 transition-colors"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/255742789292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream text-cream px-8 py-4 font-montserrat font-bold hover:bg-cream/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
