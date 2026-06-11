import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, Users, Calendar, MapPin, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania Safari: Cost, Best Time & Tours",
  description:
    "Plan a Tanzania safari: real costs ($250-$1,500/day), month-by-month timing, park breakdowns, and private tours from a local Arusha operator.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-safari" },
  openGraph: {
    title: "Tanzania Safari: Cost, Best Time & Tours | Jumbo Safaris",
    description:
      "Real costs, seasonal timing, park breakdowns, and private tours from Arusha. No group vans, no commission agents.",
    url: "https://www.jumbosafaris.com/tanzania-safari",
  },
}

const featuredItineraries = [
  {
    title: "8-Day Classic Tanzania Safari",
    slug: "8-day-classic-tanzania-safari",
    duration: "8 Days",
    description:
      "Tarangire, central Serengeti, and a full day in Ngorongoro Crater. Month-by-month positioning in the Serengeti means you see the migration wherever it actually is.",
    price: "From $2,355 per person",
    heroImage: {
      src: "/tarangire-elephants-baobab-tanzania-safari.jpg",
      alt: "Elephant herd passing a giant baobab tree in Tarangire National Park, Tanzania",
    },
  },
  {
    title: "Calving Season Safari",
    slug: "calving-season-safari",
    duration: "7 Days",
    description:
      "January and February at Ndutu, where 500,000 calves are born in six weeks. Off-road driving permitted here because Ndutu sits in the Ngorongoro Conservation Area, not the Serengeti.",
    price: "From $2,600 per person",
    heroImage: {
      src: "/wildebeest-calf-ndutu-calving-season-tanzania.jpg",
      alt: "Newborn wildebeest calf standing on the Ndutu plains during calving season, Tanzania",
    },
  },
  {
    title: "Honeymoon Tanzania & Zanzibar",
    slug: "honeymoon-tanzania-zanzibar",
    duration: "11 Days",
    description:
      "Four nights on safari in the Northern Circuit, then a week on the Zanzibar coast. Private vehicle throughout, lodge upgrades where they matter.",
    price: "From $4,195 per person",
    heroImage: {
      src: "/zanzibar-honeymoon-sunset-couple-nungwi.jpg",
      alt: "Couple watching the sunset on Nungwi beach, Zanzibar, on a honeymoon safari extension",
    },
  },
]

const faqs = [
  {
    question: "How much does a Tanzania safari cost?",
    answer:
      "Budget safaris run $250–$400 per person per day. That covers a tented camp, a shared cook, and a guide, usually with 2–3 people in the vehicle to split costs. Mid-range is $400–$700/day: permanent lodges with en-suite tents, private vehicle for your group, and a guide who isn't splitting attention between six strangers. Luxury starts at $700 and can reach $1,500+/day for private conservancy access and exclusive camps. A comfortable private 8-day safari for two people typically lands at $6,000–$10,000 total, or $3,000–$5,000 per person.",
  },
  {
    question: "What hidden costs do people miss when budgeting for Tanzania?",
    answer:
      "Three that catch people: the Ngorongoro Crater vehicle fee ($295 per vehicle, paid on the day), the Serengeti hot air balloon ($599 per person if you add it), and tipping. Tipping is not included in any quoted price. Budget $25 per day for your guide and $10–$15 per day for lodge staff (to the communal tip box). On an 8-day safari that is $280+ per person that never appears in an itinerary quote. International booking agents also add 30–300% on top of the operator's base price. Book direct with an Arusha-based operator and that markup disappears.",
  },
  {
    question: "What is the best time of year for a Tanzania safari?",
    answer:
      "June through October is the dry season: grass is short, animals concentrate around water, and the Great Migration is crossing the Mara River in the north. This is peak season and prices reflect it. January and February are equally good if you want calving season at Ndutu, where the wildebeest give birth. March through May brings the long rains, fewer tourists, and 20–30% lower prices. The parks are green and photogenic, but some roads flood. November and December work well for value: the short rains finish in November and prices are lower than the dry season peak.",
  },
  {
    question: "How many days do I need for a Tanzania safari?",
    answer:
      "Six days is the minimum to see the Northern Circuit without feeling rushed. Eight days is the better answer: it gives you two nights in Tarangire, three in the Serengeti, and a full day in Ngorongoro Crater with time to breathe between drives. Ten to twelve days allows for an add-on, either a second Serengeti zone, a beach extension in Zanzibar, or a slower pace throughout. The biggest mistake people make is over-packing the itinerary. More parks does not mean better wildlife viewing.",
  },
  {
    question: "Is Tanzania safe for safari?",
    answer:
      "Yes. Tanzania has been one of Africa's most stable safari destinations for decades. The national parks are well managed, the roads are navigable by 4WD, and the tourism infrastructure is mature. Crime in the parks is not a real concern. The city of Arusha, like any city, requires normal urban awareness. Your guide and driver know the areas. Follow their direction and you will have no issues.",
  },
  {
    question: "What is the difference between the Serengeti and Ngorongoro Crater?",
    answer:
      "The Serengeti is 14,763 square kilometres of open plain and acacia woodland, and it is where the Great Migration happens. The wildebeest move in a rough clockwise loop all year, and positioning your visit correctly means seeing them wherever they are. Ngorongoro Crater is a collapsed volcanic caldera 260 square kilometres on the crater floor. It has its own permanently resident population: approximately 60 lions, 26-55 black rhino, and around 25,000 large animals in total that never leave. No giraffe in the crater though. The walls are too steep for them to descend. Most 7–8 day itineraries include both.",
  },
  {
    question: "Private safari or group tour: which is worth it?",
    answer:
      "Private is better. That is a position, not a hedge. On a group tour, you share a vehicle with 6–8 strangers, you follow a fixed schedule, and when a leopard sits still in a tree, someone decides when you leave. On a private safari, your guide stays until you want to go. You choose when to wake up, where to eat lunch, how long to spend at a sighting. Private safaris cost more upfront. They do not cost 2x as much as most people assume. The difference at mid-range is often $200–$400 per person on a full itinerary.",
  },
  {
    question: "What should I pack for a Tanzania safari?",
    answer:
      "Neutral colours: khaki, olive, tan, beige. Not white (shows dust), not bright colours (unnecessary in the bush, mildly spooks animals). Layers matter more than people expect. Mornings in the Serengeti and on the crater rim are cold, 5–12°C in dry season. By midday it is 28–35°C. A fleece and a light jacket for the early drive, shorts and a t-shirt by 10am. Binoculars are essential. Minimum 8x42. Your guide will spot things you cannot see without them. SPF 50, wide-brim hat, and a small dry bag to protect a camera lens from dust. The dust on the Serengeti is relentless.",
  },
  {
    question: "What does a typical day on safari look like?",
    answer:
      "Wake-up call at 5:45–6am. Tea and a light snack at camp, then in the vehicle by 6:30 for the morning drive. This is the golden window: predators are still active, light is soft, and the air is cool. By 10–11am most animals are resting in shade and game viewing slows down. Return to camp for a full breakfast, then a few hours to rest, read, or talk through what you saw. Afternoon drive leaves around 3:30pm and runs until after sunset. Back to camp for dinner. Most days you log 6–8 hours in the vehicle. Good camps build in flexibility so you stay longer if something is happening.",
  },
  {
    question: "Can I combine Tanzania safari with Zanzibar?",
    answer:
      "Yes, and it works well. The standard combination is 5–7 days on safari in the Northern Circuit followed by 4–7 nights on Zanzibar. Flights from Kilimanjaro to Zanzibar are around 1 hour direct; from Serengeti airstrips, plan for up to 3–4 hours with stops. Zanzibar's Stone Town is a UNESCO World Heritage Site; the northern and eastern coasts have the best beaches. Most people do safari first, beach second. The reverse is also possible but logistically messier.",
  },
]

const trustSignals = [
  { icon: UserCheck, text: "Private vehicle, private guide" },
  { icon: Users, text: "Direct with the founder" },
  { icon: Calendar, text: "Tailor-made itineraries" },
  { icon: MapPin, text: "Based in Arusha, not overseas" },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.jumbosafaris.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tanzania Safari",
      "item": "https://www.jumbosafaris.com/tanzania-safari"
    }
  ]
}

export default function TanzaniaSafariPage() {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Tanzania Safari
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 mb-4">
              The Serengeti. Ngorongoro Crater. Tarangire. Private game drives from an operator based in Arusha, not London or New York.
            </p>
            <p className="text-body-mobile md:text-body-desktop text-cream/80 mb-8">
              Everything you need to know is on this page: real costs, the best time to come, what each park is actually like, and how a private safari differs from being loaded into a van with strangers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/itineraries/8-day-classic-tanzania-safari"
                className="bg-cream text-forest font-montserrat font-semibold px-7 py-4 hover:bg-cream/90 transition-colors inline-block"
              >
                View Itineraries
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-cream font-montserrat font-semibold px-7 py-4 border-[1.5px] border-cream hover:bg-cream/10 transition-colors inline-block"
              >
                Plan Your Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-orange py-6">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3 text-cream">
                <signal.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-montserrat font-semibold text-sm">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16 [&>*]:min-w-0">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">THE DESTINATION</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
                Why Tanzania?
              </h2>
              <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
                <p>
                  38% of Tanzania is protected as national park or conservation area. No other country in Africa comes close. That is not a marketing figure. It is why the wildlife density here is what it is.
                </p>
                <p>
                  The Great Migration is the largest overland mammal movement on Earth: 1.5 million wildebeest and 500,000 zebra following the rains in a continuous loop through the Serengeti and into Kenya's Masai Mara. It never stops. There is no single "migration crossing" month. The wildebeest are always somewhere, and where they are depends on when you come.
                </p>
                <p>
                  Ngorongoro Crater has roughly 50 black rhino. There are only about 700 left in all of Tanzania. The Crater floor is 260 square kilometres, fully enclosed by caldera walls, and holds a permanently resident population of predators and prey that has been there for generations. You can see lion, leopard, cheetah, elephant, hippo, and rhino in a single day. Many people do.
                </p>
                <p>
                  Tarangire in dry season has the largest elephant concentration in East Africa. The Tarangire River is the only permanent water source for hundreds of kilometres, so every animal within range converges on it from July through October. Herds of 200 elephants moving past ancient baobabs. That is what Tarangire looks like in August.
                </p>
                <p>
                  The Northern Circuit, which covers Tarangire, Lake Manyara, the Ngorongoro Conservation Area, and the Serengeti, is all accessible from Arusha. First game drive is typically within a few hours of landing at Kilimanjaro International Airport.
                </p>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="lg:self-start lg:sticky lg:top-24">
              <div className="bg-white border border-border-soft p-8">
                <h3 className="font-montserrat font-bold text-forest mb-6">Tanzania at a Glance</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Land Protected", value: "38% national parks & reserves" },
                    { label: "Northern Circuit Hub", value: "Arusha (KIA airport)" },
                    { label: "Great Migration", value: "1.5M wildebeest, year-round" },
                    { label: "Ngorongoro Rhino", value: "~50 black rhino on crater floor" },
                    { label: "Calving Season", value: "January–February, Ndutu" },
                    { label: "Peak Dry Season", value: "June–October" },
                    { label: "Currency", value: "Tanzanian Shilling (USD accepted)" },
                    { label: "Visa", value: "e-Visa available online" },
                    { label: "Time Zone", value: "EAT (UTC+3), no DST" },
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

      {/* Cost Breakdown */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">WHAT IT COSTS</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
            Tanzania Safari Cost, Honestly
          </h2>

          <div className="max-w-prose space-y-6 text-body-mobile md:text-body-desktop text-ink mb-12">
            <p>
              Most safari quotes you receive will not tell you the full number. Here is the honest version.
            </p>
            <p>
              Prices are quoted per person per day, sharing a vehicle. The per-person cost drops as group size increases, because you are splitting the vehicle and guide cost across more people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                tier: "Budget",
                range: "$250–$400",
                unit: "per person / per day",
                description: "Public campsites or basic tented camps. Good guides exist at this level, but camp facilities are minimal and camp food is simple. Works for travellers prioritising time in the parks over where they sleep.",
                includes: ["Shared tented camp or public campsite", "Private vehicle (2–3 person groups save more)", "Park fees", "All meals in camp"],
              },
              {
                tier: "Mid-Range",
                range: "$400–$700",
                unit: "per person / per day",
                description: "Permanent lodges with en-suite tents or cottages, hot water, and real kitchens. This is where most couples and families land. The wildlife experience is identical to luxury. You pay more to sleep better.",
                includes: ["Permanent lodge or luxury tented camp", "Private vehicle and guide", "Park fees", "Full board (all meals)", "Basic bar service"],
              },
              {
                tier: "Luxury",
                range: "$700–$1,500+",
                unit: "per person / per day",
                description: "Private conservancies with exclusive access, small-footprint camps, bush dinners, and camps that limit guests to 12–20 at a time. Night drives and off-road driving are possible in some private conservancies outside the national parks.",
                includes: ["Exclusive or semi-private camp", "Private vehicle, guide, and tracker", "All park fees", "Full board + premium bar", "Activities beyond standard game drives"],
              },
            ].map(({ tier, range, unit, description, includes }) => (
              <div key={tier} className="border border-border-soft bg-cream p-6">
                <p className="text-eyebrow uppercase text-orange mb-2">{tier}</p>
                <p className="font-montserrat font-bold text-3xl text-forest mb-1">{range}</p>
                <p className="text-sm text-ink/70 mb-4">{unit}</p>
                <p className="text-ink text-sm mb-5">{description}</p>
                <ul className="space-y-2">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink">
                      <span className="text-orange mt-0.5 flex-shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-forest text-cream p-8">
            <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop mb-4">
              The Costs That Do Not Appear in Quotes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-body-mobile md:text-body-desktop text-cream/90">
              <div>
                <p className="font-semibold text-cream mb-2">Ngorongoro Crater vehicle fee: $295</p>
                <p>Charged per vehicle, per descent, on the day. Not included in most quoted prices. On an 8-day itinerary with two people, this is $147.50 per person that never appears on the original quote.</p>
              </div>
              <div>
                <p className="font-semibold text-cream mb-2">Hot air balloon: $599 per person</p>
                <p>The Serengeti sunrise balloon is genuinely spectacular and worth the price if it fits your budget. Optional add-on, always quoted separately.</p>
              </div>
              <div>
                <p className="font-semibold text-cream mb-2">Tipping: $25/day guide, $10–15/day lodge staff</p>
                <p>Tipping is not included in any price. Budget $280–$320 per person for a typical 8-day safari. Your guide works hard for it.</p>
              </div>
              <div>
                <p className="font-semibold text-cream mb-2">Agent markup: 30–300% above operator rate</p>
                <p>International booking platforms and agents add significant margin. Book direct with an Arusha operator and that margin goes toward a better lodge or a shorter trip.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">TIMING</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            When to Come
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-12">
            There is no bad time for a Tanzania safari. There are better answers depending on what you want to see. Here is what is actually happening in the parks, month by month.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                months: "January – February",
                label: "Calving Season",
                color: "bg-orange",
                content: "The wildebeest calving season at Ndutu, in the southern Serengeti ecosystem. Around 8,000 calves are born per day at peak. Predator activity is intense. This is also some of the best photography of the year: wide-open plains, newborn animals, and lion and cheetah hunting in daylight. Prices are slightly lower than peak dry season.",
              },
              {
                months: "March – May",
                label: "Long Rains",
                color: "bg-forest",
                content: "The parks empty out, prices drop 20–30%, and the landscape turns completely green. Wildlife is harder to spot in tall grass, some roads flood, and a handful of lodges close for maintenance. If you travel slowly and do not mind occasional rain, this is excellent value. April is typically the heaviest month.",
              },
              {
                months: "June – July",
                label: "Dry Season Begins",
                color: "bg-orange",
                content: "Grass dries out and animals concentrate around permanent water. The wildebeest are moving north through the central and western Serengeti. River crossings begin in the Grumeti River. Good game viewing across all parks; Tarangire builds toward its peak.",
              },
              {
                months: "August – October",
                label: "Peak Season",
                color: "bg-forest",
                content: "The Mara River crossings in the northern Serengeti. Thousands of wildebeest pile up on the bank, then plunge across in groups. Nile crocodiles wait below. This is the most photographed moment in African wildlife and there is a real reason for that. Tarangire elephant herds are at maximum size. Most expensive months; book 6–12 months out.",
              },
              {
                months: "November",
                label: "Short Rains",
                color: "bg-forest",
                content: "Short rains arrive, usually for 3–4 weeks. The migration starts moving south again. Prices fall from their peak. Good month for a value-focused trip with still-excellent wildlife viewing, particularly in Ngorongoro and Tarangire.",
              },
              {
                months: "December",
                label: "Green Season",
                color: "bg-orange",
                content: "Short rains usually end by early December, and the southern Serengeti starts filling with wildebeest moving toward Ndutu for calving. Prices are mid-range. Festive season dates (Dec 20–Jan 5) are popular and book early. Outside those dates, December is underrated.",
              },
            ].map(({ months, label, color, content }) => (
              <div key={months} className="border border-border-soft bg-white">
                <div className={`${color} text-cream px-5 py-3`}>
                  <p className="font-montserrat font-bold text-sm">{months}</p>
                  <p className="text-xs text-cream/80">{label}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-ink">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Parks */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">THE NORTHERN CIRCUIT</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            The Four Parks, Honestly
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-cream/80 max-w-prose mb-12">
            Most competitor sites describe these parks with the same three adjectives. Here is what each one is actually like, including the things that do not make it into brochures.
          </p>

          <div className="space-y-12">
            {/* Serengeti */}
            <div className="grid md:grid-cols-[280px_1fr] gap-8 border-b border-cream/20 pb-12">
              <div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-orange mb-2">Serengeti</h3>
                <p className="text-cream/70 text-sm mb-4">14,763 sq km</p>
                <Link href="/national-parks/serengeti" className="inline-flex items-center text-orange font-semibold text-sm hover:underline">
                  Full park guide <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="space-y-4 text-body-mobile md:text-body-desktop text-cream/90">
                <p>
                  The Serengeti is divided into zones, and which zone you drive determines what you see. The central Seronera valley has year-round resident leopard and lion, plus scavengers that follow the kills. The southern plains around Ndutu are calving habitat from December through March. The western corridor sees wildebeest river crossings at the Grumeti River in June and July. The northern Serengeti, near the Mara River, is where the famous Mara crossings happen in August through October.
                </p>
                <p>
                  A standard 8-day itinerary usually covers Seronera and either the south or the north, not both. If you want Mara crossings, say so explicitly when planning your trip. The positioning matters and a good operator will build it in.
                </p>
                <p>
                  Road conditions vary. Most Serengeti roads are passable year-round in a 4WD. The southern plains get muddy in March and April, and some tracks close. The northern Serengeti has the roughest roads of any zone, which is part of why fewer vehicles go there.
                </p>
              </div>
            </div>

            {/* Ngorongoro */}
            <div className="grid md:grid-cols-[280px_1fr] gap-8 border-b border-cream/20 pb-12">
              <div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-orange mb-2">Ngorongoro Crater</h3>
                <p className="text-cream/70 text-sm mb-4">260 sq km crater floor</p>
                <Link href="/national-parks/ngorongoro-crater" className="inline-flex items-center text-orange font-semibold text-sm hover:underline">
                  Full park guide <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="space-y-4 text-body-mobile md:text-body-desktop text-cream/90">
                <p>
                  Ngorongoro is a collapsed volcanic caldera. The rim sits at 2,300 metres and the floor is 600 metres below it. The drive down takes about 45 minutes on a switchback dirt road. Inside, it is completely self-contained: the walls prevent most animals from leaving, which is why the wildlife density is higher here per square kilometre than anywhere else in the circuit.
                </p>
                <p>
                  The black rhino are the reason serious wildlife viewers come. About 50 live on the crater floor. Tanzania has roughly 700 black rhino in total. Seeing one here, up close in open grassland, is a different experience from tracking them in dense bush. Lake Magadi in the crater centre draws flamingos in wet season. The Lerai Forest at the western edge is where elephants and buffalo shelter in the heat of the day.
                </p>
                <p>
                  No giraffe. They cannot physically descend the crater walls. That surprises people. The $295 vehicle fee per descent is charged on entry, not included in your quoted itinerary price. Worth budgeting separately.
                </p>
              </div>
            </div>

            {/* Tarangire */}
            <div className="grid md:grid-cols-[280px_1fr] gap-8 border-b border-cream/20 pb-12">
              <div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-orange mb-2">Tarangire</h3>
                <p className="text-cream/70 text-sm mb-4">2,850 sq km</p>
                <Link href="/national-parks/tarangire" className="inline-flex items-center text-orange font-semibold text-sm hover:underline">
                  Full park guide <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="space-y-4 text-body-mobile md:text-body-desktop text-cream/90">
                <p>
                  Tarangire is the most underrated park on the Northern Circuit. Most itineraries treat it as a single-day stop on the way to the Serengeti. That is a mistake. In dry season, particularly July through October, Tarangire has the highest elephant density in East Africa. The Tarangire River is the only permanent water source in the area, and every elephant within a hundred kilometres comes to drink.
                </p>
                <p>
                  The baobabs are old. Some of the trees in the central and southern sections are over 2,000 years old and wide enough that three people holding hands cannot circle the trunk. They do not look like anything else in the world. The Silale Swamp in the southern park is year-round water, which means predators concentrate there even in wet season when the river is less critical.
                </p>
                <p>
                  Two species that Tarangire has and most other parks do not: fringe-eared oryx and gerenuk. The gerenuk stands on its hind legs to reach acacia leaves. If you have not seen one, add a morning in Tarangire.
                </p>
              </div>
            </div>

            {/* Lake Manyara */}
            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-orange mb-2">Lake Manyara</h3>
                <p className="text-cream/70 text-sm mb-4">325 sq km total, lake dominates</p>
                <Link href="/national-parks/lake-manyara" className="inline-flex items-center text-orange font-semibold text-sm hover:underline">
                  Full park guide <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="space-y-4 text-body-mobile md:text-body-desktop text-cream/90">
                <p>
                  Lake Manyara is the smallest Northern Circuit park and most itineraries treat it as a half-day stop. It earns its inclusion because of the groundwater forest along the escarpment base: a dense, dark canopy that produces a completely different wildlife experience from the open plains of the Serengeti. Buffalo herds move through the forest floor in the morning.
                </p>
                <p>
                  The tree-climbing lions are real, though not guaranteed. A pride learned decades ago to rest in the fig and acacia trees along the forest edge, and the behaviour has passed down through generations. Your chances are better in the dry season when shade on the ground is scarce.
                </p>
                <p>
                  When water levels are right, the lake shore has flamingos. Several thousand at a time. The south of the lake gets little visitor traffic and is worth pushing toward if you have the time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">OUR SAFARIS</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Tanzania Safari Itineraries
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <article key={itinerary.slug} className="border border-border-soft bg-cream">
                <div className="aspect-[4/3] bg-forest overflow-hidden">
                  {itinerary.heroImage ? (
                    <Image
                      src={itinerary.heroImage.src}
                      alt={itinerary.heroImage.alt}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-cream/50 text-sm">Safari imagery</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3">
                    {itinerary.duration}
                  </span>
                  <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                    {itinerary.title}
                  </h3>
                  <p className="text-body-mobile text-ink mb-4">{itinerary.description}</p>
                  <p className="text-caption text-ink/70 mb-4">{itinerary.price}</p>
                  <Link
                    href={`/itineraries/${itinerary.slug}`}
                    className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                  >
                    View Itinerary
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/itineraries"
              className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
            >
              See all itineraries
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Day on Safari */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">WHAT TO EXPECT</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
                A Day on Safari
              </h2>
              <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
                <p>
                  Wake-up call at 5:45am. Tea or coffee at camp, biscuits if you want them. In the vehicle by 6:30.
                </p>
                <p>
                  The first two hours are the best two hours. Predators are still active, the light is orange and soft, and the air is cold enough that you will want that jacket. Lions finish their night hunts in early morning. Leopards are visible before the heat sends them into shade. Your guide has been awake since 5am, listening to radio calls from other vehicles and from the rangers.
                </p>
                <p>
                  By 10–11am the game slows down. Animals rest. You return to camp for a full breakfast, then a few hours to do nothing: read, sleep, talk through the morning's sightings. Most camps have good outdoor seating in the shade.
                </p>
                <p>
                  Afternoon drive leaves around 3:30pm and runs until after dark. Sundowner at a viewpoint if the evening permits. Back to camp for dinner, usually around 7:30–8pm.
                </p>
                <p>
                  On a private safari, this schedule bends entirely to you. Want to stay at a sighting? Stay. Want to skip the afternoon drive one day and sit by the fire? Done. The only constraint is park closing times, which most parks set at 6–7pm for vehicles.
                </p>
              </div>
            </div>

            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">PRACTICAL</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
                What to Pack
              </h2>
              <div className="space-y-5 text-body-mobile md:text-body-desktop text-ink">
                <div className="border-l-2 border-orange pl-4">
                  <p className="font-semibold text-forest mb-1">Clothing: neutral colours only</p>
                  <p>Khaki, olive, beige, tan. Not white (it shows dust from 400 kilometres away) and not bright colours. You are not trying to hide, but there is no reason to be the most visible thing on the plains.</p>
                </div>
                <div className="border-l-2 border-orange pl-4">
                  <p className="font-semibold text-forest mb-1">Layers for the morning cold</p>
                  <p>Dry season mornings in the Serengeti and on the Ngorongoro rim hit 5–12°C. A fleece and a light windproof jacket. By 10am it is 28–35°C and you will be in a t-shirt.</p>
                </div>
                <div className="border-l-2 border-orange pl-4">
                  <p className="font-semibold text-forest mb-1">Binoculars: 8x42 minimum</p>
                  <p>Your guide spots things at distance that are invisible to the naked eye. Without binoculars you are reading the description of what he is pointing at. 8x42 is the standard. 10x42 if you want more reach.</p>
                </div>
                <div className="border-l-2 border-orange pl-4">
                  <p className="font-semibold text-forest mb-1">Dust protection for electronics</p>
                  <p>The Serengeti in dry season generates fine red dust that gets into everything. A dry bag or a ziplock for your camera, phone, and any open lens bag. Dust is the enemy.</p>
                </div>
                <div className="border-l-2 border-orange pl-4">
                  <p className="font-semibold text-forest mb-1">Power bank</p>
                  <p>Lodge charging varies. Bush camps often have solar with limited capacity. A 20,000mAh power bank covers a phone and camera battery for three days without thinking about it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private vs Group */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-eyebrow uppercase text-orange mb-3">AN HONEST COMPARISON</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              Private Safari vs Group Tour
            </h2>
            <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
              <p>
                The question people ask is: "Is a private safari worth the extra cost?" The honest answer is yes, but the cost difference is smaller than most people assume.
              </p>
              <p>
                On a group tour, 6–8 strangers share one vehicle and one guide. The schedule is fixed before anyone leaves home. When a leopard climbs a tree and you want to stay, the decision is made by vote or by the operator's time sheet, not by you. At popular sightings, your vehicle sits among 12–15 others, all idling, all waiting.
              </p>
              <p>
                On a private safari, it is your vehicle. Your guide builds the day around what you want to see. Sightings last as long as you choose. If you spend three hours waiting for a leopard to descend from a tree, that is your choice. No one is checking their watch.
              </p>
              <p>
                The price difference at mid-range is typically $200–$400 per person over a full 8-day itinerary. Some people treat that as a significant premium. Others point out that they flew 10 hours to get here and this is the one thing they do not want to compromise on. Both positions are reasonable.
              </p>
              <p>
                What private does not fix: if you are travelling solo, the cost per person is higher because you are covering the vehicle alone. The way around that is to find one other person going at the same time and split the vehicle, which is something a good operator can help with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Operator */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">WHO YOU BOOK WITH</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-8">
                Why a Local Operator Matters
              </h2>
              <div className="space-y-6 text-body-mobile md:text-body-desktop text-cream/90">
                <p>
                  Most Tanzania safari bookings made outside Africa pass through at least one intermediary before reaching the company that actually runs your trip. A UK travel agent books through a Nairobi aggregator who contracts a Tanzanian operator. Each layer adds margin. By the time you see a quoted price, 30–300% has been added to the operator's base rate.
                </p>
                <p>
                  Local operators are not inherently better, but they remove the layers. The person who quotes your trip should be the same person who chooses your lodge, briefs your guide, and answers a WhatsApp message at 9pm the night before you depart.
                </p>
                <p>
                  When something goes wrong on safari (weather, road conditions, a lodge that has a problem), a local operator can fix it in hours. A booking platform in London cannot.
                </p>
                <p>
                  Jumbo Safaris is run from Arusha by Mohammadali Saleh, who grew up here. The guides are people he knows. The lodges are places he has stayed. When you send a message, he responds. Not a customer service team. Not a ticketing system.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "What to ask any operator",
                  items: [
                    "Where is your office physically located?",
                    "Who owns the company?",
                    "Will I deal with the same person from inquiry to departure?",
                    "How do you handle problems that arise on-trip?",
                    "Can I see the actual vehicle I will travel in?",
                  ],
                },
              ].map(({ title, items }) => (
                <div key={title} className="bg-forest-dark border border-cream/20 p-6">
                  <h3 className="font-montserrat font-semibold text-cream mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-cream/80 text-sm">
                        <span className="text-orange mt-0.5 flex-shrink-0">?</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">COMMON QUESTIONS</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Tanzania Safari FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border-soft pb-8 last:border-0">
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">
                  {faq.question}
                </h3>
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
            Ready to plan your trip?
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-prose mx-auto mb-8">
            Send dates, group size, and roughly what you want to see. Mohammadali responds directly, usually within a few hours.
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
