export interface MonthPage {
  slug: string
  month: string
  title: string
  description: string
  heroImage?: { src: string; alt: string }
  intro: string
  highlights: string[]
  wildlifeConditions: {
    park: string
    conditions: string
    rating: "excellent" | "good" | "fair"
  }[]
  weeklyProgression: {
    week: string
    activity: string
    bestLocation: string
  }[]
  weather: {
    location: string
    tempRange: string
    rainfall: string
    notes: string
  }[]
  additionalSections: {
    heading: string
    body: string
  }[]
  sampleItineraries: {
    title: string
    duration: string
    parks: string
    price: string
    description: string
    slug?: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedItineraries: string[]
}

export const monthPages: Record<string, MonthPage> = {
  july: {
    slug: "july",
    month: "July",
    title: "Tanzania Safari in July",
    description:
      "July is Tanzania's peak safari month: dry season, short grass, high wildlife density, and the Mara River crossings underway in the northern Serengeti. Complete guide to July conditions by park, booking lead times, and prices from an Arusha-based operator.",
    intro:
      "July is the beginning of the best three months for safari in Tanzania. The long rains ended in May. The grass is short. Animals concentrate around shrinking water sources and are easy to spot. In the northern Serengeti, the wildebeest herds are pushing toward the Mara River for the first crossings of the season. In Ngorongoro, the crater floor is cold at dawn and clear all day. In Tarangire, elephants are gathering in numbers that peak in August and September but are already exceptional. This is the month most experienced safari travellers choose. It is also the month that needs the most advance planning.",
    highlights: [
      "First Mara River crossings of the season — northern Serengeti, Kogatende",
      "Peak predator visibility on short dry-season grass across all parks",
      "Tarangire elephant herds building toward the annual river peak",
      "Ngorongoro Crater cold and clear — best rhino sightings of the year",
      "Longest dry window of the year: no rain June through October",
    ],
    wildlifeConditions: [
      {
        park: "Northern Serengeti (Kogatende/Lamai)",
        conditions:
          "Wildebeest herds arriving at the Mara River. First crossings typically begin July 1-10. Lion and hyena activity at crossing points is intense. Cheetah and leopard active on the Lamai Wedge. The single best location in Africa for predator-prey drama in July.",
        rating: "excellent",
      },
      {
        park: "Ngorongoro Crater",
        conditions:
          "Excellent year-round, and particularly clear in July. Short dry-season grass gives unobstructed sightlines across the full 260 km² floor. Black rhino sightings at Gorigor Swamp are most frequent in July when the floor is dry. Rim mornings are cold (5-9°C) — bring a fleece.",
        rating: "excellent",
      },
      {
        park: "Tarangire National Park",
        conditions:
          "Elephant herds building along the Tarangire River — 300-600 individuals visible from a single position in peak months. The baobab landscape is at its most photogenic with dry golden light. Far fewer vehicles than the Serengeti, and game viewing that rivals it.",
        rating: "excellent",
      },
      {
        park: "Central Serengeti (Seronera)",
        conditions:
          "Resident predators are reliable year-round: lion in the kopjes, leopard in the sausage trees along the Seronera River, cheetah on the open short-grass plains. The migrating herds have moved north, so wildebeest density is lower, but big cat sightings are consistent.",
        rating: "good",
      },
      {
        park: "Ndutu / Southern Serengeti",
        conditions:
          "The calving season herds left in March and have moved north. Resident wildlife remains but the grasslands are quieter. Not the right choice for a July safari — better used January through March.",
        rating: "fair",
      },
    ],
    weeklyProgression: [
      {
        week: "July 1-7",
        activity:
          "Wildebeest herds massing on Mara River banks at Kogatende. First crossings likely in the opening days. Western Corridor still has residual herds moving north. Predator activity high across the north.",
        bestLocation: "Northern Serengeti — Kogatende crossing points",
      },
      {
        week: "July 8-14",
        activity:
          "Crossings accelerating. Herd density at the Mara River increases as animals continue pushing north from the central Serengeti. Multiple crossing attempts per day at main sites. Lion and crocodile predation at peak.",
        bestLocation: "Northern Serengeti — Sand River and main Mara crossings",
      },
      {
        week: "July 15-21",
        activity:
          "Peak northern Serengeti. Herds crossing in both directions as animals test the river repeatedly. Vehicle concentration at main crossing points is highest this week. Guides who know the north will find secondary crossings downstream.",
        bestLocation: "Northern Serengeti (Kogatende) and Lamai Wedge",
      },
      {
        week: "July 22-31",
        activity:
          "Sustained crossings through late July. Some of the most dramatic single-day events occur in the final week of July as herd sizes at the river bank grow. August will continue and intensify this pattern.",
        bestLocation: "Northern Serengeti — both Mara crossing points",
      },
    ],
    weather: [
      {
        location: "Ngorongoro Crater Rim (2,286m)",
        tempRange: "5-9°C morning / 20°C midday",
        rainfall: "~10mm",
        notes: "Cold at dawn — fleece, hat, and windproof layer essential before descent",
      },
      {
        location: "Central Serengeti (Seronera)",
        tempRange: "13°C morning / 28°C afternoon",
        rainfall: "~5mm",
        notes: "Warm days, cool nights, virtually no rain",
      },
      {
        location: "Northern Serengeti (Kogatende)",
        tempRange: "15°C morning / 30°C afternoon",
        rainfall: "~5mm",
        notes: "Warmest part of the northern circuit, some afternoon wind",
      },
      {
        location: "Tarangire",
        tempRange: "14°C morning / 29°C afternoon",
        rainfall: "~5mm",
        notes: "Warm and dry throughout — golden light for photography",
      },
      {
        location: "Arusha",
        tempRange: "12°C morning / 26°C afternoon",
        rainfall: "~20mm",
        notes: "Pleasant highland climate — cooler than the parks",
      },
    ],
    additionalSections: [
      {
        heading: "The Mara River Crossings — What to Actually Expect",
        body: "The Mara River crossings are the most-photographed wildlife event in Africa, and they come with a crowd. The two main crossing points near Kogatende can hold 20-30 vehicles during active events. When a herd commits, every guide in the north hears about it and drives there. This is the reality of July peak season.\n\nThe experience still delivers, but expectations matter. A crossing takes 15 minutes to two hours. Most end without drama — herds approach, mill at the bank, turn back. When they do commit, wildebeest plunge in 10,000 at a time, crocodiles move in, and the chaos is exactly what every documentary shows. The problem is the foreground: other vehicles.\n\nThe mitigation is guide quality and lodge position. A guide who knows the north Serengeti moves to secondary crossing points downstream where fewer vehicles go, tracks herd movements the evening before, and arrives before the buses from distant lodges. Lamai camp, positioned north of the Mara River, puts you on the north bank before most vehicles arrive from the south.\n\nFor travellers who want July's wildlife density without the river crowds: Tarangire is the answer. Elephant herds of 300-600 individuals along the Tarangire River. The baobab landscape at its most photogenic. A fraction of the vehicles. Not the migration, but outstanding game viewing by any other standard.",
      },
      {
        heading: "How Far in Advance to Book",
        body: "July is the most-booked month for Tanzania safaris among English-speaking travellers. Available inventory at top properties disappears faster than most people expect.\n\nNorthern Serengeti fly-camps (Asilia Sayari, Nomad Lamai, Olakira Migration Camp, Serengeti Safari Camp): 9-12 months minimum for peak weeks. These properties run 8-16 tents. July allocations fill completely by October of the prior year for the best-positioned camps.\n\nCentral Serengeti lodges (Four Seasons Safari Lodge, Serengeti Serena, Lemala Nanyukie): 6-8 months is realistic. Larger properties with more inventory, but July occupancy runs 90-100%.\n\nNgorongoro rim lodges (Ngorongoro Serena, Sopa, andBeyond Crater Lodge): 6 months for most dates. The crater is exceptional in July and sometimes overlooked by travellers fixated on the Mara crossings — which means better availability than the northern Serengeti at a different price point.\n\nTarangire (Tarangire Treetops, Swala Camp, Oliver's Camp): 4-6 months is sufficient for most July dates. The best-value great wildlife month on the northern circuit, and the most forgiving on lead time.\n\nIf you are booking within three months of July travel, contact us immediately. We will work around available inventory rather than building from scratch, and the options narrow quickly.",
      },
      {
        heading: "Why a Private Safari Is Worth It in July",
        body: "In July at the Mara River, a shared-vehicle group safari and a private safari are at the same crossing point, watching the same wildebeest. The difference is everything that happens before and after the crossing.\n\nIn a group safari, your driver coordinates with 10 other vehicles carrying clients from different lodges with different schedules. In a private safari, your guide's only job is positioning your vehicle for the best angle and staying as long as you want.\n\nAt peak crossing points, the difference in vehicle positioning between the best guide and an average guide is 30 metres. That is the difference between a clear sightline and a Land Cruiser in your frame for the crossing that took three days to happen.\n\nJuly is also the month where cold mornings, long game drives, and flexible timing matter most. A private vehicle departs when you want. It stays at a lion kill until you are done. It takes you back to the lodge at midday if you want to rest and returns to the field at 4pm. No group safari does any of those things.\n\nThe premium for private in July is real. So is the difference in what you come home with.",
      },
    ],
    sampleItineraries: [
      {
        title: "8-Day Northern Circuit — July Migration Focus",
        duration: "8 Days / 7 Nights",
        parks: "Tarangire · Central Serengeti · Northern Serengeti · Ngorongoro",
        price: "From $3,800 pp",
        description:
          "Two nights Tarangire for elephants, two nights central Serengeti for resident predators, two nights northern Serengeti at Kogatende for Mara River crossings, one night Ngorongoro rim. The full July northern circuit, in the right order.",
        slug: "8-day-classic-tanzania-safari",
      },
      {
        title: "5-Day Ngorongoro & Tarangire",
        duration: "5 Days / 4 Nights",
        parks: "Tarangire · Ngorongoro Crater",
        price: "From $2,100 pp",
        description:
          "Two nights Tarangire, two nights Ngorongoro rim. For travellers booking late or on a tighter timeline. Both parks are exceptional in July and have better availability than the northern Serengeti fly-camps. No migration crossings, but elephant herds and crater wildlife more than compensate.",
      },
    ],
    faqs: [
      {
        question: "Is July a good time for a Tanzania safari?",
        answer:
          "July is one of the three best months for safari in Tanzania, alongside August and October. The dry season is established, grass is short, animals concentrate around water sources, and wildlife visibility is as high as it gets all year. The wildebeest migration is at the Mara River in the northern Serengeti. Tarangire elephant herds are building toward their annual peak. Ngorongoro is clear and cold. The trade-off is cost and availability — July is peak season and lodges fill months in advance.",
      },
      {
        question: "Where is the wildebeest migration in July?",
        answer:
          "In July, the bulk of the wildebeest herds have moved north through the Western Corridor and are arriving at the Mara River near Kogatende in the northern Serengeti. The first river crossings of the season typically begin in early July, with frequency and intensity building through late July and peaking in August. By mid-July, the northern Serengeti around Kogatende and the Lamai Wedge has the highest concentration of animals.",
      },
      {
        question: "How cold is Tanzania in July?",
        answer:
          "It depends where you are. On the Ngorongoro Crater rim at 2,286m, dawn temperatures before the morning game drive are 5-9°C — cold enough to need a fleece, hat, and windproof jacket. In the central Serengeti, mornings are around 13°C, warming to 26-28°C in the afternoon. Tarangire is similar. The cold is concentrated in the early morning; afternoons are warm everywhere. Pack layers regardless of where you are going.",
      },
      {
        question: "What should I pack for a Tanzania safari in July?",
        answer:
          "A fleece or light down jacket is essential, particularly for Ngorongoro and any early game drive. Neutral-coloured clothing (khaki, olive, tan, grey) for game drives — bright colours disturb animals. A windproof outer layer for open-roof vehicles in the cold morning air. Sunscreen SPF 50+ for afternoon drives. Binoculars (8x42 or 10x42 recommended). Closed-toe shoes for the Ngorongoro crater floor stop. Tanzania uses Type G plugs (UK standard) — bring a universal adapter.",
      },
      {
        question: "Is July peak season in Tanzania?",
        answer:
          "Yes. July through October is peak season, with July and August the most booked months. Lodge rates are at their annual high, availability is tightest, and the northern Serengeti has the highest vehicle concentration of the year. Expect to pay 20-40% more for lodges in July compared to shoulder months (January-March, November-December). The wildlife conditions justify the premium for most travellers.",
      },
      {
        question: "Which parks are best for a safari in July?",
        answer:
          "Northern Serengeti (Kogatende) for the wildebeest migration and Mara River crossings. Ngorongoro Crater year-round, particularly clear in July with concentrated wildlife and good rhino sightings. Tarangire for elephant herds building toward peak and baobab landscapes — excellent wildlife, far fewer vehicles than the Serengeti. Central Serengeti (Seronera) for reliable resident predators. Ndutu and the southern Serengeti are the weakest choice in July — the migrating herds have moved north.",
      },
      {
        question: "How far in advance should I book a July Tanzania safari?",
        answer:
          "For northern Serengeti fly-camps near the Mara River, 9-12 months minimum. These properties have 8-16 tents and July allocations fill completely by October the prior year. For mid-range lodges in the central Serengeti and Ngorongoro, 6-8 months is realistic. Tarangire is more forgiving — 4-6 months is generally sufficient. If you are within three months of your July travel dates, contact us immediately: options narrow quickly at this stage.",
      },
      {
        question: "Is it crowded at the Mara River in July?",
        answer:
          "Yes, at the main crossing points. The two primary sites near Kogatende can have 20-30 vehicles waiting during active crossing events. This is the reality of peak season at the most famous wildlife spectacle in Africa. The mitigation is guide quality: an experienced north Serengeti guide positions at secondary crossings downstream, tracks herd movements from the evening before, and arrives before the vehicles from distant lodges. Lodge choice matters too — Lamai camp north of the river gives a different approach than the main southern routes.",
      },
      {
        question: "What is the weather like in Tanzania in July?",
        answer:
          "July is reliably dry across all northern safari parks. Rainfall is minimal — 5-20mm for the month depending on location. Days are warm (24-30°C in the afternoon) and mornings are cold at altitude. Ngorongoro Crater rim sees 5-9°C at dawn. The central Serengeti is warmer at around 13°C in the morning, 27°C by midday. No rain to plan around. The main weather consideration in July is the cold mornings, not the wet.",
      },
      {
        question: "Can I see the Big Five in Tanzania in July?",
        answer:
          "Yes. In Ngorongoro Crater: lion, elephant, and buffalo are reliable; leopard possible in the Lerai Forest; black rhino present and most frequently spotted at Gorigor Swamp in July when the floor is driest. In the Serengeti: lion, leopard, cheetah consistent in the Seronera Valley; elephant and buffalo in the north and western areas. Tarangire has lion, leopard, elephant, and buffalo reliably — no rhino. For the best Big Five concentration on a single day, Ngorongoro Crater in July is the strongest option on the northern circuit.",
      },
    ],
    relatedItineraries: [
      "8-day-classic-tanzania-safari",
      "calving-season-safari",
      "honeymoon-tanzania-zanzibar",
    ],
  },
}

export function getMonthPage(slug: string): MonthPage | undefined {
  return monthPages[slug]
}

export function getAllMonthPages(): MonthPage[] {
  return Object.values(monthPages)
}
