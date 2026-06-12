import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, MapPin, Users, Calendar, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Tanzania Safari: Private Camps, Real Costs & Itineraries",
  description:
    "Luxury Tanzania safari from $700/day: private vehicle, small-footprint camps, and exclusive access. Real costs, real lodge names, and itineraries built around what you actually want to see.",
  alternates: { canonical: "https://www.jumbosafaris.com/luxury-tanzania-safari" },
  openGraph: {
    title: "Luxury Tanzania Safari | Jumbo Safaris Arusha",
    description:
      "Private vehicle, premium camps, and tailor-made itineraries from an Arusha-based operator. Luxury starts at $700/day — here is what that actually means.",
    url: "https://www.jumbosafaris.com/luxury-tanzania-safari",
  },
}

const luxuryItineraries = [
  {
    title: "8-Day Classic Tanzania Safari",
    slug: "8-day-classic-tanzania-safari",
    duration: "8 Days",
    parks: "Tarangire · Serengeti · Ngorongoro",
    luxuryFrom: "$6,020 pp",
    lodges: "Lemala Camps, Ngorongoro rim lodge",
    description:
      "Tarangire for the elephants and baobabs, the central Serengeti for the resident predators, and a full day on the Ngorongoro Crater floor. At the Luxury tier: Lemala's small-footprint camps in prime park positions, and a crater-rim lodge with views straight down to the caldera floor.",
  },
  {
    title: "Great Migration Safari: Northern Serengeti",
    slug: "great-migration-safari",
    duration: "10 Days",
    parks: "Serengeti · Ngorongoro",
    luxuryFrom: "$9,975 pp",
    lodges: "Lemala / Elewana migration camps, Arusha Coffee Lodge",
    description:
      "Three nights at Kogatende, metres from the Mara River crossing points, at Lemala or Elewana migration camps. Both are small-footprint properties with 12 to 20 guests maximum. Camp positioning matters more than any other variable on a migration trip: the crossing can happen at dawn.",
  },
  {
    title: "Honeymoon Tanzania & Zanzibar",
    slug: "honeymoon-tanzania-zanzibar",
    duration: "11 Days",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    luxuryFrom: "$8,395 pp",
    lodges: "Lemala Camps, Safira Blu villas (Nungwi)",
    description:
      "Four nights on safari in the Northern Circuit at Lemala's private camps, then a week in a private-pool villa at Safira Blu on Zanzibar's north coast. Private vehicle throughout. Bush dinners and in-room champagne at the safari camps; in-villa breakfast and sundowner service at the beach.",
  },
]

const faqs = [
  {
    question: "What does luxury mean on a Tanzania safari?",
    answer:
      "In Tanzania, luxury has a specific meaning that is different from the word as used in hotels. A luxury safari camp is defined by three things: camp size (typically 8 to 20 guests maximum), location (often in exclusive zones or private concessions with fewer vehicles), and what is included (full board, laundry, bush dinners, dedicated camp staff). The best luxury camps are small by design — a 12-tent camp in the heart of the Serengeti with its own water source and solar power, not a 120-room lodge near the park gate. The wildlife experience is identical to a mid-range safari. You pay more to sleep better and have fewer people around you.",
  },
  {
    question: "How much does a luxury Tanzania safari cost per day?",
    answer:
      "Luxury accommodation in Tanzania runs $500 to $1,200+ per person per night, full board. The total cost per person per day — including the private vehicle, guide, park fees, and accommodation — is typically $700 to $1,500. Park fees alone are $71.40 per person per day in the Serengeti and Ngorongoro Conservation Area. A private vehicle and guide costs roughly $350 to $500 per day for your group regardless of size. An 8-day luxury safari for two people costs $9,000 to $15,000 in total depending on lodge choice and season.",
  },
  {
    question: "What is the difference between a luxury camp and a luxury lodge?",
    answer:
      "A luxury camp uses permanent or semi-permanent canvas tents with en-suite bathrooms, wooden floors, and real furniture. The best ones have outdoor showers, bathtubs, and private decks. They feel like rooms, not camping. A luxury lodge uses brick or stone construction and is typically larger. In Tanzania, the best wildlife positions are held by camps, not lodges, because camps were established earlier and sit deeper inside the parks. Lemala's Serengeti camp, for example, sits in the Seronera valley with resident leopard visible from the camp boundary. A lodge near the park gate has less of that.",
  },
  {
    question: "Can you do night drives and off-road driving on a luxury Tanzania safari?",
    answer:
      "Not in the national parks. Tanzania's national parks prohibit night drives and require vehicles to stay on designated tracks. This applies to every operator regardless of how much you pay. However, some luxury itineraries include private conservancy time, where both are permitted. The Ndutu area (inside the Ngorongoro Conservation Area, not the Serengeti) allows off-road driving, which is why the calving season experience there is different. If night drives or off-road access are priorities, ask specifically about which parts of the itinerary allow them.",
  },
  {
    question: "What is included in a luxury safari that is not included at mid-range?",
    answer:
      "At mid-range: private vehicle, guide, park fees, full board, and a comfortable permanent lodge. At luxury: all of the above, plus typically laundry service, bush dinners (meals served outdoors in the park or around a fire), better bar service (premium wines and spirits), in-camp activities like guided walks near camp, a higher staff-to-guest ratio, and dedicated camp butlers at some properties. Some camps include a complimentary sundowner on the plains during the afternoon drive. The wildlife experience is the same. The surrounding experience is more considered.",
  },
  {
    question: "Is a luxury Tanzania safari worth the extra cost?",
    answer:
      "That depends on what you value. At mid-range ($400 to $700 per day), you have a private vehicle, a good guide, an en-suite permanent lodge, and three meals a day. The game viewing is identical to luxury. At luxury ($700 to $1,500+), you add a smaller camp, better food, a nicer bed, and more personal service. For most people, the incremental gain between a solid mid-range lodge and a luxury camp is real but not transformative. For honeymooners, milestone travellers, or people who travel infrequently and want the full experience, the upgrade is worth it. The wildlife does not know the difference.",
  },
  {
    question: "When is the best time for a luxury Tanzania safari?",
    answer:
      "June through October is peak season and the most expensive. Game viewing is excellent across all parks: short grass, dry riverbeds, and animals concentrated at water sources. The Mara River crossings in the northern Serengeti happen during August, September, and October. January and February offer the calving season at Ndutu with lower prices and spectacular predator activity. December is underrated: short rains finish early in the month, prices are mid-range, and the southern Serengeti starts filling with wildebeest. Luxury camps generally have the same seasonal pricing as everyone else, with peak rates from June through October.",
  },
  {
    question: "What are the best luxury camps in Tanzania?",
    answer:
      "The camps Jumbo Safaris uses at the Luxury tier: Lemala Camps (Serengeti and Ngorongoro), Elewana migration camps (northern Serengeti, Kogatende), and Safira Blu private-pool villas (Zanzibar, Nungwi). Other well-regarded operators include Singita Grumeti, Four Seasons Serengeti, andBeyond Ngorongoro Crater Lodge, and Nomad Tanzania's Lamai Serengeti. Each has different strengths by location and season. The honest answer is that camp position matters more than brand: a lesser-known camp deep in the Seronera valley will produce better game viewing than a famous camp near the park entrance.",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
    { "@type": "ListItem", position: 2, name: "Tanzania Safari", item: "https://www.jumbosafaris.com/tanzania-safari" },
    { "@type": "ListItem", position: 3, name: "Luxury Tanzania Safari", item: "https://www.jumbosafaris.com/luxury-tanzania-safari" },
  ],
}

export default function LuxuryTanzaniaSafariPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">LUXURY TANZANIA SAFARI</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Luxury Tanzania Safari
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 mb-4">
              Private vehicle. Small-footprint camps with 8 to 20 guests. Positions inside the parks, not near the gates. From $700 per person per day.
            </p>
            <p className="text-body-mobile md:text-body-desktop text-cream/80 mb-8">
              Here is what luxury actually means on a Tanzania safari, what it costs, which camps are worth the price, and how the experience differs from mid-range. No vague promises about "unforgettable" experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-cream text-forest font-montserrat font-semibold px-7 py-4 hover:bg-cream/90 transition-colors inline-block"
              >
                Plan Your Safari
              </Link>
              <Link
                href="/itineraries"
                className="bg-transparent text-cream font-montserrat font-semibold px-7 py-4 border-[1.5px] border-cream hover:bg-cream/10 transition-colors inline-block"
              >
                View All Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-orange py-6">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: UserCheck, text: "Private vehicle, private guide" },
              { icon: Users, text: "Your group only" },
              { icon: Calendar, text: "Tailor-made itineraries" },
              { icon: MapPin, text: "Based in Arusha" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3 text-cream">
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-montserrat font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What luxury means */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16 [&>*]:min-w-0">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">WHAT IT ACTUALLY MEANS</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
                Luxury on safari is different from luxury anywhere else
              </h2>
              <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
                <p>
                  In a hotel, luxury is measured by room size, thread count, and the number of restaurants. On a Tanzania safari, the variables that determine quality are different: camp size, camp position, and who else is there.
                </p>
                <p>
                  The best luxury camps in the Serengeti hold 12 to 20 guests at any one time. They sit on private concessions or in prime park positions that were allocated decades ago and cannot be replicated. A 120-room lodge near the park gate can have perfect reviews and a Michelin-starred chef. The experience of waking up with the Serengeti thirty metres from your tent is not something it can offer.
                </p>
                <p>
                  Camp position matters more than any other variable at the luxury tier. Lemala's Serengeti Nanyukie camp sits at the edge of the Seronera valley, where the resident leopard population is the most reliably sighted on the circuit. Elewana's Lamai Serengeti and the Nomad Lamai camp sit minutes from the Mara River crossing points in the northern Serengeti — a logistics advantage when the crossing can happen at 6am.
                </p>
                <p>
                  What luxury does not change: the park fee structure, the prohibition on night drives inside national parks, or the wildlife itself. The Ngorongoro Crater has the same 50 black rhino for a guest in a budget camp and a guest at the crater-rim lodge. The difference is the size of the tent, the quality of dinner, and how many people you share the morning with.
                </p>
                <p>
                  For Jumbo Safaris, the baseline is already private: one vehicle for your group throughout. What the Luxury tier adds on top of that baseline is the accommodation layer — smaller camps, better positions, and the services that come with them.
                </p>
              </div>
            </div>

            <div className="lg:self-start lg:sticky lg:top-24">
              <div className="bg-white border border-border-soft p-8">
                <h3 className="font-montserrat font-bold text-forest mb-6">Luxury Safari at a Glance</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Daily rate (accommodation + vehicle + guide)", value: "$700–$1,500+ pp" },
                    { label: "Camp size", value: "8–20 guests typical" },
                    { label: "Vehicle", value: "Private Toyota Land Cruiser 4WD" },
                    { label: "Accommodation", value: "Permanent tented camps or lodges" },
                    { label: "Meals", value: "Full board (all meals included)" },
                    { label: "Extras included", value: "Laundry, premium bar, bush dinners" },
                    { label: "Night drives", value: "Not in national parks" },
                    { label: "Off-road driving", value: "Ndutu (NCA) and private concessions only" },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-b border-border-soft pb-4 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-1">{label}</dt>
                      <dd className="font-semibold text-forest">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What luxury costs */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">THE NUMBERS</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            What a luxury Tanzania safari costs
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-12">
            Every quoted price is built from the same components. Here they are, separated out.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Park Fees",
                amount: "$480–$640",
                basis: "per person, 8-day itinerary",
                note: "Government fees, fixed regardless of operator. Serengeti: $71.40/pp/day. Ngorongoro Conservation Area: $71.40/pp/day. Ngorongoro crater descent: $295/vehicle.",
              },
              {
                label: "Vehicle and Guide",
                amount: "$350–$500",
                basis: "per day for your group",
                note: "Private Toyota Land Cruiser 4WD with pop-up roof, professional guide. Cost is per vehicle, not per person — the fewer people sharing, the higher the per-person cost.",
              },
              {
                label: "Luxury Accommodation",
                amount: "$500–$1,200+",
                basis: "per person per night, full board",
                note: "The variable that determines the overall price bracket. Small-footprint camps in prime positions at the top end. All meals included.",
              },
            ].map(({ label, amount, basis, note }) => (
              <div key={label} className="bg-cream border border-border-soft p-6">
                <p className="text-eyebrow uppercase text-orange mb-2">{label}</p>
                <p className="font-montserrat font-bold text-3xl text-forest mb-1">{amount}</p>
                <p className="text-sm text-ink/70 mb-4">{basis}</p>
                <p className="text-sm text-ink">{note}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest text-cream p-8 max-w-3xl">
            <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop mb-4">
              Total cost for an 8-day luxury safari, two people
            </h3>
            <div className="space-y-4 text-body-mobile md:text-body-desktop text-cream/90">
              <p>
                An 8-day luxury safari for two people sharing a vehicle costs $9,000 to $14,000 total, or $4,500 to $7,000 per person. The wide range reflects lodge choice. Lemala Serengeti at $600/pp/night produces a different total than a private-concession camp at $1,100/pp/night.
              </p>
              <p>
                Budget $200 to $300 per person additionally for tipping ($25/day guide, $10–15/day lodge staff) and $595/pp if you add the Serengeti hot air balloon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury itineraries */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">LUXURY ITINERARIES</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Three luxury safari itineraries
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-12">
            Each itinerary is available at three accommodation tiers. The prices below are the Luxury tier for two people sharing. All use a private vehicle and private guide throughout.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {luxuryItineraries.map((it) => (
              <article key={it.slug} className="border border-border-soft bg-white flex flex-col">
                <div className="bg-forest text-cream px-6 py-4">
                  <p className="font-montserrat font-bold text-sm text-orange mb-1">{it.duration} · {it.parks}</p>
                  <h3 className="font-montserrat font-bold text-[19px]">{it.title}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-1">Luxury camps</p>
                    <p className="text-sm text-ink">{it.lodges}</p>
                  </div>
                  <p className="text-body-mobile text-ink mb-6 flex-1">{it.description}</p>
                  <div className="border-t border-border-soft pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-ink/60 mb-0.5">Luxury tier from</p>
                      <p className="font-montserrat font-bold text-forest">{it.luxuryFrom}</p>
                    </div>
                    <Link
                      href={`/itineraries/${it.slug}`}
                      className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group text-sm"
                    >
                      Full itinerary
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Camp position section */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">WHAT MAKES A CAMP WORTH IT</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Camp position, camp size, and what those two variables actually determine
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-cream/80 max-w-prose mb-12">
            Most luxury safari marketing focuses on the bed and the food. The variables that determine the quality of the wildlife experience are different.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: "Position inside the park, not at the gate",
                body: "Tanzania's best-positioned camps were established when park access rules were more flexible. Many now sit on private concessions or in zones that cannot be built on today. Lemala's camps in the Serengeti central corridor sit close enough to the Seronera river system that game viewing begins before you get into the vehicle. Elewana and Nomad's Lamai-area camps in the north are minutes from the Mara River — the difference between a 5-minute drive to the crossing points and a 45-minute drive matters when crossings happen without warning.",
              },
              {
                heading: "Camp size: 8 to 20 guests",
                body: "The Serengeti can hold 120 vehicles at a single sighting during peak season. A small camp generates fewer vehicles per day and routes more strategically. Large lodges send multiple vehicles to the same coordinates. A 12-tent camp in a prime position has a structural advantage on vehicle distribution. The staff-to-guest ratio is also higher at smaller camps — the difference between a dedicated camp butler and shared lodge staff is felt at 5:45am when your coffee arrives before you ask for it.",
              },
              {
                heading: "What a private concession adds",
                body: "Private concessions exist outside the national parks, usually adjacent to them on community or private land. The rules are different: night drives are permitted, off-road driving is permitted, walking is often permitted. Guests at concession camps can leave the main track and follow a lion on foot with an armed ranger. This is not available inside the Serengeti or Ngorongoro, regardless of how much you pay. The Ndutu area within the Ngorongoro Conservation Area also permits off-road driving, which is why calving season at Ndutu is a different experience from Serengeti game drives.",
              },
              {
                heading: "Full board means more than three meals",
                body: "At the luxury tier, full board includes bush dinners set up on the plains after the afternoon drive. Some camps lay a table in a dry riverbed with oil lamps; others use a viewpoint above the valley. The food quality at the top camps is genuinely good by any standard, not just by safari standards. Premium bar service includes wines and spirits at a level above the standard lodge beer and house wine. These are not the reasons to book a luxury safari, but they are part of what the price covers.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="border-l-2 border-orange pl-6">
                <h3 className="font-montserrat font-semibold text-cream mb-3">{heading}</h3>
                <p className="text-cream/80 text-body-mobile">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest comparison */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-eyebrow uppercase text-orange mb-3">AN HONEST COMPARISON</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              Luxury vs mid-range: where the money goes
            </h2>
            <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
              <p>
                At mid-range ($400 to $700 per day), you have a private vehicle, an experienced guide, a permanent lodge with en-suite facilities, and three meals a day. The game viewing on a well-positioned mid-range itinerary is identical to the luxury version. The Serengeti has the same lions, the same migration, and the same crater at both price points.
              </p>
              <p>
                What the extra money buys at luxury: a smaller camp with fewer total guests, a better-positioned tent, a higher staff-to-guest ratio, laundry service, premium bar, and the bush dinner setup. For most travellers, the gap between a solid mid-range lodge and a luxury camp is real but not the primary determinant of the safari experience.
              </p>
              <p>
                For the Great Migration in particular, camp position at the luxury tier is a genuine advantage. Lemala and Elewana's northern Serengeti camps sit close enough to the Mara River that your guide hears the radio calls before most vehicles have left the main Serengeti lodges. Timing at the crossing points is everything: a 10-minute advantage when 400 wildebeest are building at the bank is significant.
              </p>
              <p>
                For a first safari, or a safari where the primary goal is wildlife volume rather than camp exclusivity, mid-range is the better value proposition. For a return trip, a milestone trip, or a migration safari where the positioning detail matters: the luxury tier earns its price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal guide */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">WHEN TO COME</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Best time for a luxury Tanzania safari
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-10">
            Luxury camps follow the same seasonal pricing as the rest of the market. Peak rates run June through October. Here is what each window offers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                period: "January – February",
                label: "Calving Season",
                highlight: true,
                text: "The Ndutu area at luxury tier. Off-road driving permitted here because Ndutu sits in the Ngorongoro Conservation Area. Ang'ata and Lemala both run camps here during calving season. Prices are below peak. The predator activity — cheetah, lion, and wild dog hunting in open light — is the most intense of the year.",
              },
              {
                period: "June – July",
                label: "Dry Season Opens",
                highlight: false,
                text: "Wildebeest moving north through the central and western Serengeti. Tarangire elephant herds building. First month of the peak season price bracket at luxury camps. Mara crossings not yet, but game viewing across all parks is at its annual high.",
              },
              {
                period: "August – October",
                label: "Peak Season",
                highlight: false,
                text: "The northern Serengeti Mara River crossings. The only time to book a luxury migration camp at Kogatende. Highest prices of the year; book 6 to 12 months out. Lemala, Elewana, and Nomad camps fill first. Ngorongoro and Tarangire also at peak during these months.",
              },
              {
                period: "November",
                label: "Value Window",
                highlight: true,
                text: "Short rains arrive. Migration moves south. Prices drop from peak. Luxury camps that stay open through November often offer their best value of the year. Game viewing remains strong; Ngorongoro in November with fresh green grass and full water sources is particularly good.",
              },
              {
                period: "December",
                label: "Overlooked",
                highlight: false,
                text: "Short rains finish early December. Southern Serengeti filling with wildebeest heading to Ndutu. Mid-range prices at luxury properties outside the festive window. Dec 20 to Jan 5 is fully booked and expensive; Dec 1 to 19 is underrated.",
              },
              {
                period: "March – May",
                label: "Low Season",
                highlight: false,
                text: "Long rains. Some luxury camps close in April and May. Those that remain open drop prices significantly. Not the right choice for most luxury travellers — the experience is green and atmospheric, but some roads flood and wildlife is harder to spot.",
              },
            ].map(({ period, label, highlight, text }) => (
              <div key={period} className="border border-border-soft bg-cream">
                <div className={`${highlight ? "bg-orange" : "bg-forest"} text-cream px-5 py-3`}>
                  <p className="font-montserrat font-bold text-sm">{period}</p>
                  <p className="text-xs text-cream/80">{label}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-ink">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-cream border-t border-border-soft py-12">
        <div className="max-w-content mx-auto px-6">
          <p className="font-montserrat font-semibold text-forest mb-5">Related guides</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Tanzania safari cost breakdown", href: "/tanzania-safari-cost-2026" },
              { label: "Great Migration safari", href: "/itineraries/great-migration-safari" },
              { label: "Honeymoon Tanzania & Zanzibar", href: "/itineraries/honeymoon-tanzania-zanzibar" },
              { label: "Private safari vs group tour", href: "/tanzania-safari/private-tours" },
              { label: "Best time to visit Tanzania", href: "/tanzania-safari" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 border border-border-soft bg-white px-4 py-2 text-sm font-semibold text-forest hover:border-orange hover:text-orange transition-colors group"
              >
                {label}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">COMMON QUESTIONS</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Luxury Tanzania safari FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border-soft pb-8 last:border-0">
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">{faq.question}</h3>
                <p className="text-ink">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Ready to plan your luxury safari?
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-prose mx-auto mb-8">
            Send your dates, group size, and what matters most to you. Mohammadali responds directly with a camp shortlist and a no-obligation quote.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
            >
              Start Planning
            </Link>
            <a
              href="https://wa.me/255742789292"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-orange transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Or WhatsApp: +255 742 789 292</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
