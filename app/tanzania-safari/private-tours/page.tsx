import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getItinerary } from "@/lib/data/itineraries"

export const metadata: Metadata = {
  title: "Private Tanzania Safari from Arusha",
  description:
    "Private Tanzania safari tours from Arusha: one vehicle, one named guide, your dates. Real private-vs-group pricing math and what private actually changes.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-safari/private-tours" },
  openGraph: {
    title: "Private Tanzania Safari from Arusha | Jumbo Safaris",
    description:
      "Private guided Tanzania safari tours. Your group only, your vehicle, your guide. Northern circuit from Arusha.",
    url: "https://www.jumbosafaris.com/tanzania-safari/private-tours",
  },
}

const whatPrivateMeans = [
  {
    heading: "One vehicle",
    body: "You are not sharing with strangers. The Land Cruiser holds your group only. You set the pace, you decide how long to stay at a sighting, you turn around if the guide radios in something better.",
  },
  {
    heading: "One guide",
    body: "Your guide is named before you arrive and assigned to your trip from departure to return. He knows what you want to see by the second morning. He knows when to stay quiet and when to explain. He does not repeat the same script for each group he rotates through.",
  },
  {
    heading: "Your schedule",
    body: "Morning departure is whenever you want to leave. Lunch is wherever you are in the park. The afternoon drive ends when you say so, not at 6:00pm because the group tour van has a dinner seating. On a private safari, the park closes at 6:00pm. That is the only hard constraint.",
  },
  {
    heading: "Direct communication",
    body: "You are booking with the person who built your itinerary. Not an agent in a different country, not a call centre rep with a booking reference. One line of contact. If something changes in the field, you hear about it directly.",
  },
]

const routeCards = [
  {
    slug: "5-day-northern-circuit",
    parks: "Tarangire · Serengeti · Ngorongoro",
    description: "The shortest version that covers all three core parks. Works for tight timelines. Tarangire for the elephants, Serengeti for predators, full day on the crater floor.",
  },
  {
    slug: "8-day-classic-tanzania-safari",
    parks: "Tarangire · Serengeti · Ngorongoro",
    description: "Three nights in the Serengeti, two in Tarangire, two at Ngorongoro. The route that gives each park enough time to matter.",
  },
  {
    slug: "11-day-tanzania-zanzibar",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    description: "Six nights on the northern circuit, then a flight to Zanzibar for four nights on the Indian Ocean coast.",
  },
  {
    slug: "great-migration-safari",
    parks: "Serengeti · Ngorongoro · Lake Manyara",
    description: "Ten days following the migration. Northern Serengeti and the Mara River crossings in July through October.",
  },
  {
    slug: "calving-season-safari",
    parks: "Ndutu · Ngorongoro",
    description: "January through March at Ndutu, the calving grounds. Off-road driving permitted. Best predator concentration in East Africa.",
  },
  {
    slug: "honeymoon-tanzania-zanzibar",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    description: "Eleven days, private throughout. Safari with couples-specific lodge setups, private crater picnic, sunset dhow on Zanzibar.",
  },
  {
    slug: "family-safari",
    parks: "Tarangire · Serengeti · Ngorongoro",
    description: "The standard 8-day northern circuit, paced and structured for children. Minimum age 5.",
  },
]

const gateDistances = [
  { gate: "Tarangire (Main Gate)", distance: "118–140 km", time: "2–3 hours", road: "Tarmac, last 7 km gravel" },
  { gate: "Lake Manyara (Mto wa Mbu)", distance: "125 km", time: "1.5–2 hours", road: "Fully paved" },
  { gate: "Ngorongoro (Lodoare Gate)", distance: "155–160 km", time: "3–4 hours", road: "Tarmac since 2024" },
  { gate: "Serengeti (Naabi Hill)", distance: "300–335 km", time: "6–8 hours", road: "Gravel after Ngorongoro" },
]

const faqs = [
  {
    question: "Is a private safari really worth the extra money over a group tour?",
    answer:
      "For most travellers, yes, and the gap is smaller than people assume. A group vehicle averages 10 to 20 minutes at a predator sighting before the group decides to move; a private vehicle stays as long as you want. Over a week, that is 8 to 12 extra hours actually watching wildlife instead of negotiating with strangers. The premium for a couple at mid-range works out to a fraction of the total trip cost, and for groups of three or more, private often costs the same or less per person than buying group seats.",
  },
  {
    question: "How much more does a private safari cost than a group safari?",
    answer:
      "The private vehicle, guide, and fuel are a fixed cost that divides across your party, so the answer depends on group size. For a couple, our 8-day Classic at Comfort tier is $4,115 per person, against roughly $2,200 to $2,900 for a comparable mid-range group seat. At six guests the same private safari drops to $2,355 per person, which is below the bottom of the group mid-range band. The crossover is around three to four travellers: from there, private is cheaper per person than a group tour at the same comfort level.",
  },
  {
    question: "I am a solo traveller. Is private worth the single supplement?",
    answer:
      "Honest answer: it depends on your budget. Solo travellers on a private safari carry the whole vehicle cost, which is why solo supplements run 30 to 40 percent. If budget is the deciding factor, a group departure removes that supplement and is the sensible choice. If pace control matters more than the supplement, or you photograph, private is worth it even alone. We will tell you which one fits when you write to us, even if the answer is a group tour somewhere else.",
  },
  {
    question: "How many people share a group safari vehicle, and will I get a window seat?",
    answer:
      "Group departures in Tanzania typically carry six to seven guests per vehicle. Most operators rotate seats between rows, and the middle seats in a full vehicle have partially blocked views. Some group operators state in their terms that seating disputes are decided by the guide. On a private safari this entire problem does not exist: every seat is a window seat because the vehicle is yours.",
  },
  {
    question: "Can I choose my own start date, or are departures fixed?",
    answer:
      "Private safaris start on any date you name. Group departures run on fixed calendars, and most group-joining safaris only operate December to February and June to October. Several also require a minimum number of guests to run at all, which means a confirmed booking can still be rescheduled if the seats do not fill. A private booking cannot be cancelled by someone else's no-show.",
  },
  {
    question: "What can a private guide change mid-drive that a group tour cannot?",
    answer:
      "Almost everything except park hours. Stay two hours at a leopard in a fig tree while group vehicles cycle through in ten minutes. Skip the lunch stop because the light is good. Turn the vehicle around because something better came over the radio. Leave at 5:45am to be first through the gate, or sleep in because it is your honeymoon. Redesign the rest of the week around the calving herds your guide found on day two. Group itineraries are published in advance and several operators state plainly that they cannot be customised.",
  },
  {
    question: "Is a private safari better for families with young children?",
    answer:
      "It is the only version we would recommend with children under 10. Group drives run on fixed timings, and a child who needs a toilet stop, a snack, or a nap has to negotiate with six strangers. In a private vehicle the day flexes around your family: shorter drives, earlier returns, longer stops at the animals your child actually cares about. Our family itinerary includes booster seats and a guide briefed for mixed-age groups. Minimum age 5.",
  },
  {
    question: "Is a private safari better for photographers?",
    answer:
      "Significantly. You position the vehicle for light, not for six people's average view. You stay through the behaviour instead of leaving when the group votes. The vehicle carries bean bags and charging points, and at four guests or fewer there is a full row free for gear. At Ndutu during calving season, off-road driving is permitted with the right permits, which means positioning that group tours simply cannot do.",
  },
  {
    question: "Will my guide be the same person every day?",
    answer:
      "Yes. Your guide is assigned at booking, named before you arrive, and stays with you from pickup to drop-off. This is structural, not a promise: we run no overlapping group departures, so there is no pool to rotate guides through. By day two your guide knows you want birds, or big cats, or quiet, and the trip bends in that direction.",
  },
  {
    question: "How do I know a Tanzania safari operator is legitimate?",
    answer:
      "Check three things. First, guiding in Tanzania is licensed under the Tourism Act of 2008: every working guide must hold a licence from the Director of Tourism, renewed annually, and carry a photo ID in the field. Ask whether your guide holds one. Second, ask who actually employs the guide and owns the vehicle; if the company selling you the trip cannot answer, you are buying through a reseller. Third, be suspicious of quotes far below market: park fees are government-fixed and identical for everyone, so a very cheap quote is cutting vehicles, guides, or lodges. Our licence details and verification links are published on our trust page.",
  },
  {
    question: "Should I book with a local Arusha operator or an overseas agency?",
    answer:
      "Overseas agencies and booking platforms subcontract the actual safari to operators in Arusha or Moshi, then add their margin on top. Documented platform commissions run 15 to 25 percent, and overseas agency stacks commonly add 20 to 40 percent for the identical trip. One Arusha operator documents its $4,200 direct trip appearing on platforms at $5,200 to $5,400. Booking with the operator who employs the guide and owns the vehicle removes that layer. It also gives you one line of contact instead of three.",
  },
  {
    question: "What exactly is included in the price?",
    answer:
      "All park entry fees, the Ngorongoro Conservation Area fees, and the $295 crater vehicle descent fee. Full-board accommodation, all game drives, the private 4x4 with your guide, Arusha pickup and drop-off, drinking water in the vehicle, and Flying Doctors emergency evacuation cover. Not included: international flights, visa, travel insurance, tips ($25 per day for the guide is standard), and optional extras like the Serengeti balloon at $599 per person. Every quote we send is itemised so you can see each line.",
  },
]

export default function PrivateToursPage() {
  const routes = routeCards.map((card) => {
    const itinerary = getItinerary(card.slug)
    return {
      ...card,
      title: itinerary?.title ?? card.slug,
      price: itinerary?.price ?? "",
    }
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Tanzania Safari", item: "https://www.jumbosafaris.com/tanzania-safari" },
      { "@type": "ListItem", position: 3, name: "Private Tours", item: "https://www.jumbosafaris.com/tanzania-safari/private-tours" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Private Tanzania Safari Tours from Arusha
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Every Jumbo Safaris departure is private. Your group, your vehicle, your named guide, your dates. No group departures, ever.
          </p>
        </div>
      </section>

      {/* What private means */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-eyebrow uppercase text-orange mb-3">WHAT PRIVATE ACTUALLY MEANS</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest max-w-2xl">
            Every safari company says private. Here is what it means in practice.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whatPrivateMeans.map((item) => (
            <div key={item.heading} className="border border-border-soft bg-white p-6">
              <h3 className="font-montserrat font-bold text-forest text-lg mb-3">{item.heading}</h3>
              <p className="text-body-mobile text-ink">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Private vs group: the math */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">PRIVATE VS GROUP</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6 max-w-2xl">
            The honest math, because the premium is smaller than you think
          </h2>
          <div className="max-w-prose space-y-4 text-body-mobile md:text-body-desktop text-ink mb-10">
            <p>
              A group safari sells you a seat. The price barely moves whether five or seven strangers share the vehicle, because you are paying per person for a slice of a shared trip. A private safari prices differently: the vehicle, the guide, and the fuel are one fixed cost that divides across your party. Park fees and lodging stay per-person. That one structural difference decides everything about which option is cheaper for you.
            </p>
            <p>
              For a couple, private carries a real premium. Our 8-day Classic at Comfort tier is $4,115 per person for two sharing, against roughly $2,200 to $2,900 for a comparable mid-range group seat over the same duration. You are paying for the whole vehicle with two people in it. Whether that is worth it depends on what you came for (more on that below).
            </p>
            <p>
              At three travellers the gap nearly closes. At four or more, it inverts: the same 8-day private safari drops to $2,355 per person with six guests, which is less than most mid-range group seats. If you are travelling as a family or a group of friends, joining a group departure means paying more per person for less control. Never do it.
            </p>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm max-w-3xl">
              <thead>
                <tr className="border-b border-forest/20">
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Party size</th>
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Private 8-day Classic (Comfort), pp</th>
                  <th className="text-left py-3 font-montserrat font-semibold text-forest">Mid-range group seat, ~8 days</th>
                </tr>
              </thead>
              <tbody className="text-ink/80">
                <tr className="border-b border-forest/10">
                  <td className="py-3 pr-6">2 people</td>
                  <td className="py-3 pr-6">$4,115</td>
                  <td className="py-3" rowSpan={3}>$2,200–$2,900 per person, regardless of your party size</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="py-3 pr-6">4 people</td>
                  <td className="py-3 pr-6">$2,800–$3,100</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">6 people</td>
                  <td className="py-3 pr-6">$2,355</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-ink/70 mt-3 max-w-3xl">Group-seat range built from published 2026 mid-range group departures (Suricata Safaris and comparable operators, $300–$400 per person per day). Private figures are our own published Comfort-tier rates. Full breakdown on the <Link href="/tanzania-safari-cost-2026" className="text-forest underline hover:text-orange">cost page</Link>.</p>
          </div>

          <div className="max-w-prose space-y-4 text-body-mobile md:text-body-desktop text-ink">
            <h3 className="font-montserrat font-bold text-xl text-forest">What the group seat actually buys</h3>
            <p>
              The constraints are documented in the operators&apos; own terms, not our opinion of them. Group itineraries are fixed and several major operators state they cannot be customised. Departures run on set calendars, mostly December to February and June to October, and some require a minimum of seven guests to run at all. Seats rotate between rows, and the middle seats in a full vehicle have obstructed views. If your advertised lodge is full, the terms allow a substitute.
            </p>
            <p>
              The cost that matters most never appears on a price list: time at sightings. A full vehicle averages 10 to 20 minutes at a predator before someone is bored and the group moves. A private vehicle stays an hour, two hours, however long the behaviour deserves. Over a week, that compounds into 8 to 12 additional hours of actual wildlife viewing. It is the difference between watching a hunt unfold and photographing the aftermath through someone&apos;s shoulder.
            </p>
          </div>
        </div>
      </section>

      {/* What your guide can change mid-drive */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">YOUR GUIDE, YOUR CALL</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6 max-w-2xl">
            What changes mid-drive when the vehicle is yours
          </h2>
          <div className="max-w-prose space-y-4 text-body-mobile md:text-body-desktop text-ink">
            <p>
              First through the gate. Your guide has the vehicle running before breakfast ends, and you are inside the park while the group vans are still loading. The first hour of light is when the cats move, and most group departures spend it in a parking lot.
            </p>
            <p>
              Stay through the kill. A cheetah takes down a gazelle thirty metres from the track. Group vehicles arrive, idle for fifteen minutes, leave on schedule. You stay until the scene finishes, because nobody else in your vehicle is checking a watch.
            </p>
            <p>
              Redesign the week. Your guide hears on the radio that the herds moved south overnight. On a private trip the next three days can bend around that. A published group itinerary cannot.
            </p>
            <p>
              And the small ones that matter more than they sound: cut an afternoon short because you are tired. Take the toilet stop when your child needs it, not when the schedule allows it. Stop on a ridge and watch elephants cross in silence for twenty minutes. Pray Dhuhr at a safe stop without negotiating with five strangers. None of this requires anyone&apos;s permission, because there is nobody else in the vehicle to ask.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <p className="text-eyebrow uppercase text-orange mb-3">THE VEHICLE</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Toyota Land Cruiser. Pop-up roof. Every seat a window seat.
            </h2>
            <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
              <p>
                The Toyota Land Cruiser 4x4 is the standard vehicle for East African safari for one reason: it works in every condition the northern circuit produces. Crater descent roads, Serengeti clay after rain, soft sand near the lake shore. Ground clearance matters. The full-length pop-up roof matters because you stand to photograph, not sit with a window half-open.
              </p>
              <p>
                Every Jumbo Safaris vehicle has a pop-up roof, individual seating with a window for every guest, bean bags for camera support, and charging points for cameras and phones. The vehicle holds a maximum of six passengers, but most private trips run with two to four. At four passengers, the back row is for gear. Compare that to a full group vehicle, where six or seven guests rotate seats and the middle positions have partially blocked views.
              </p>
              <p>
                The vehicle carries water and soft drinks on game drives. Picnic lunches are packed from the lodge for full-day drives. Nothing about the logistics requires you to plan ahead on the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Arusha */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">FROM ARUSHA</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6 max-w-2xl">
            Why every northern circuit safari starts here
          </h2>
          <div className="max-w-prose space-y-4 text-body-mobile md:text-body-desktop text-ink mb-10">
            <p>
              Arusha is not a marketing choice. It is geography. The city sits at the foot of Mount Meru, and every northern circuit park radiates west from it along a single corridor. Kilimanjaro International Airport (JRO) is 46 kilometres away, 45 to 60 minutes by road. You land, we collect you, you sleep in Arusha, and the safari starts the next morning. This is also where the operators, the licensed guides, and the vehicles actually live, which is why overseas agencies selling Tanzania safaris subcontract the real work to companies based here.
            </p>
            <p>
              I grew up in this city. The drive times below are not copied from a brochure; they are roads I have been driven down since before I could drive.
            </p>
          </div>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm max-w-3xl">
              <thead>
                <tr className="border-b border-forest/20">
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Park gate</th>
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">From Arusha</th>
                  <th className="text-left py-3 pr-6 font-montserrat font-semibold text-forest">Drive time</th>
                  <th className="text-left py-3 font-montserrat font-semibold text-forest">Road</th>
                </tr>
              </thead>
              <tbody className="text-ink/80">
                {gateDistances.map((row) => (
                  <tr key={row.gate} className="border-b border-forest/10">
                    <td className="py-3 pr-6 font-medium">{row.gate}</td>
                    <td className="py-3 pr-6">{row.distance}</td>
                    <td className="py-3 pr-6">{row.time}</td>
                    <td className="py-3">{row.road}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-prose space-y-4 text-body-mobile md:text-body-desktop text-ink">
            <p>
              A realistic day one: depart Arusha at 6:30am with a packed lunch, reach the Tarangire gate by 9:00, spend the morning on the river circuit in elephant country, picnic inside the park, work the Silale Swamp in the afternoon, and exit before the 6:00pm closure. Tarangire is the right first park: it is the closest big park to Arusha and the dry-season elephant viewing is the equal of anything further west. The Serengeti, six to eight hours out, is for day three onward, or a 50-minute charter flight if you would rather skip the drive.
            </p>
          </div>
        </div>
      </section>

      {/* Operator verification */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">VERIFY ANY OPERATOR, INCLUDING US</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-6 max-w-2xl">
            How safari guiding is actually licensed in Tanzania
          </h2>
          <div className="max-w-prose space-y-4 text-body-mobile md:text-body-desktop text-cream/90">
            <p>
              Guiding here is regulated by law, not by marketing copy. Under Tanzania&apos;s Tourism Act of 2008, nobody may work as a tour guide without a licence from the Director of Tourism. Licences expire every 31 December and must be renewed annually, and working guides carry a photo ID card in the field. Serious guides train for it: the College of African Wildlife Management at Mweka runs the certificate programme that covers animal behaviour, ecology, guiding law, and field driving.
            </p>
            <p>
              So when a quote looks too cheap, ask the questions that expose the gap. Is the guide licensed, and can I see the ID? Who employs him, you or a subcontractor? Who owns the vehicle? An unlicensed driver presented as a guide reveals himself the first time you ask why the wildebeest cross where they cross.
            </p>
            <p>
              We publish our licence details, registration, and external profile links on the <Link href="/about/trust" className="text-orange underline hover:text-cream">trust page</Link>, and your guide&apos;s name comes with your booking confirmation, not as a surprise at pickup.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <p className="text-eyebrow uppercase text-orange mb-3">PRICING</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Per person, and what the from-price means
            </h2>
            <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
              <p>
                The from-prices below are per person at the lowest tier and largest group size, because that is the genuine minimum. Two people sharing pay more per person than six, since the vehicle and guide divide across fewer travellers. Solo travellers pay a single supplement of roughly 30 to 40 percent for the same reason. Every itinerary page shows the full tier table by party size, and every quote we send is itemised line by line.
              </p>
              <p>
                Park fees alone are substantial: $50 to $80 per person per day in entry fees plus the $295 Ngorongoro crater vehicle fee per descent. These are government-set, identical for every operator, and included in all our prices. The full fee schedule and a worked daily cost breakdown are on the <Link href="/tanzania-safari-cost-2026" className="text-forest underline hover:text-orange">Tanzania safari cost page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-12">
            Private Safari Routes
          </h2>
          <div className="space-y-4">
            {routes.map((route) => (
              <div key={route.slug} className="border border-border-soft bg-cream p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-montserrat font-bold text-forest text-lg">{route.title}</h3>
                    <span className="text-sm font-semibold text-orange">{route.price}</span>
                  </div>
                  <p className="text-sm text-ink/70 mb-2">{route.parks}</p>
                  <p className="text-body-mobile text-ink">{route.description}</p>
                </div>
                <Link
                  href={`/itineraries/${route.slug}`}
                  className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group whitespace-nowrap"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">FAQ</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-10">
            Private safari questions, answered directly
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

      {/* CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Ready to plan your safari?
          </h2>
          <p className="text-lead-mobile text-cream/90 max-w-prose mx-auto mb-8">
            Send your dates and what you want to see. We will build the route and quote directly.
          </p>
          <Link
            href="/contact"
            className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
