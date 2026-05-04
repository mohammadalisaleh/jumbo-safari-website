export interface Itinerary {
  slug: string
  title: string
  duration: string
  parks: string
  price: string
  season: string
  description: string
  leadParagraph: string
  overview: string
  quickFacts: {
    duration: string
    parksVisited: string
    accommodation: string
    groupSize: string
    departsFrom: string
    bestSeason: string
  }
  days: {
    day: number
    title: string
    activities: string
    accommodation: string
    meals: string
  }[]
  included: string[]
  excluded: string[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const itineraries: Record<string, Itinerary> = {
  "8-day-classic-tanzania-safari": {
    slug: "8-day-classic-tanzania-safari",
    title: "8-Day Classic Tanzania Safari",
    duration: "8 Days",
    parks: "Tarangire · Serengeti · Ngorongoro",
    price: "From $3,200 pp",
    season: "Year-round",
    description:
      "An 8-day private guided Tanzania safari covering Tarangire, Serengeti, and Ngorongoro. Small groups, private 4x4, from $3,200 per person.",
    leadParagraph:
      "This is the quintessential Tanzania safari experience. Over eight unforgettable days, you'll traverse the legendary Northern Circuit—from the elephant-rich woodlands of Tarangire to the endless plains of the Serengeti and the wildlife-packed floor of Ngorongoro Crater. With a private guide, custom 4x4 vehicle, and hand-picked lodges, this is safari done right.",
    overview:
      "The 8-Day Classic Tanzania Safari takes you through three of East Africa's most iconic wildlife destinations. Beginning in Arusha, you'll journey through diverse ecosystems—from the baobab-studded landscapes of Tarangire to the vast Serengeti plains where the Great Migration unfolds. Your adventure culminates with a descent into the Ngorongoro Crater, often called 'Africa's Eden' for its incredible concentration of wildlife.",
    quickFacts: {
      duration: "8 Days / 7 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro",
      accommodation: "Mid-range lodges and tented camps",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "Year-round, peak June-October",
    },
    days: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        activities:
          "Morning pickup from your Arusha hotel. Drive to Tarangire National Park (approximately 2.5 hours). Afternoon game drive exploring the Tarangire River area, famous for its large elephant herds and ancient baobab trees. Look for lions, leopards, and diverse birdlife.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Full Day Tarangire",
        activities:
          "Full day game drives exploring the Tarangire River ecosystem. Focus on the massive elephant herds that congregate here — Tarangire hosts one of Africa's highest elephant densities. Look for tree-climbing lions, leopards in the acacia trees, and hundreds of bird species. Evening at lodge.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Tarangire to Central Serengeti",
        activities:
          "Early morning final game drive in Tarangire before departing for the Serengeti. Drive through Karatu and descend into the Ngorongoro Conservation Area. Picnic lunch en route. Arrive at central Serengeti (Seronera area) by afternoon for first game drive on the endless plains.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full Day Serengeti — Seronera Valley",
        activities:
          "Full day exploring the Seronera Valley, the wildlife heart of the Serengeti. This area is famous for year-round big cat activity — leopards in the sausage trees, lions on kopjes, cheetahs on the open plains. Optional early morning balloon safari available at additional cost ($600 per person).",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Serengeti — Following the Wildlife",
        activities:
          "Second full day in the Serengeti with flexibility to follow wildlife movements. Depending on season, your guide will position you for Migration herds, river crossings, or concentrated predator activity. Morning and afternoon game drives with a midday break at the lodge.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Morning game drive before departing the Serengeti. Drive east to the Ngorongoro Conservation Area. Check in to a crater rim lodge with panoramic views into the caldera. Afternoon at leisure — sunset over the crater is extraordinary.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Full Day Ngorongoro Crater Floor",
        activities:
          "Early morning descent into the crater floor (7am). Spend a full day exploring the world's largest intact volcanic caldera — home to approximately 25,000 large animals including the Big Five. The crater's closed ecosystem means exceptional predator density. Afternoon ascent and return to rim lodge.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Ngorongoro to Arusha — Departure",
        activities:
          "Leisurely breakfast at the crater rim with final views into the caldera. Drive back to Arusha (approximately 3 hours). Drop-off at Arusha hotel or Kilimanjaro International Airport (JRO). Safari ends.",
        accommodation: "End of safari",
        meals: "Breakfast",
      },
    ],
    included: [
      "All park entrance fees and crater service fees",
      "Private 4x4 safari vehicle with pop-up roof",
      "Professional English-speaking safari guide",
      "7 nights accommodation as specified",
      "All meals as indicated (FB basis)",
      "Bottled water during game drives",
      "Airport/hotel transfers in Arusha",
      "Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International and domestic flights",
      "Tanzania visa fees",
      "Travel insurance",
      "Tips and gratuities for guide and lodge staff",
      "Hot air balloon safari ($600 pp)",
      "Alcoholic beverages",
      "Personal items and souvenirs",
      "Optional activities not mentioned",
    ],
    faqs: [
      {
        question: "What is the best time to do this safari?",
        answer:
          "This safari operates year-round. The dry season (June-October) offers the best wildlife viewing as animals gather around water sources. The green season (November-May) brings lush landscapes, newborn animals, and fewer crowds at lower rates.",
      },
      {
        question: "Is this safari suitable for children?",
        answer:
          "Yes, this safari is family-friendly. We recommend it for children aged 6 and above. Younger children can be accommodated with private vehicle arrangements. Many lodges offer family rooms and child-friendly activities.",
      },
      {
        question: "What type of accommodation is included?",
        answer:
          "We use mid-range lodges and tented camps that offer comfortable rooms with en-suite bathrooms, excellent food, and stunning locations. Upgrades to luxury lodges are available upon request.",
      },
      {
        question: "How physically demanding is this safari?",
        answer:
          "Safari game drives are not physically demanding—you'll be seated in a comfortable vehicle. However, days can be long (6-8 hours) with early morning starts. Walking is minimal, mainly at lodges and rest stops.",
      },
      {
        question: "Can I extend this safari or add Zanzibar?",
        answer:
          "Absolutely! We offer flexible extensions including extra days in the Serengeti, visits to Lake Manyara, and beach stays in Zanzibar. Our 11-Day Tanzania & Zanzibar package is a popular combination.",
      },
    ],
  },
  "calving-season-safari": {
    slug: "calving-season-safari",
    title: "Calving Season Safari",
    duration: "7 Days",
    parks: "Ndutu · Serengeti · Ngorongoro",
    price: "From $2,800 pp",
    season: "January - March",
    description:
      "Witness the miracle of birth during the Great Migration calving season in Tanzania's southern Serengeti and Ndutu plains.",
    leadParagraph:
      "Every year between January and March, over half a million wildebeest calves are born on the short-grass plains of Ndutu and the southern Serengeti. This calving season safari puts you in the heart of the action—watching newborns take their first steps, witnessing dramatic predator encounters, and experiencing one of nature's greatest spectacles.",
    overview:
      "The Calving Season Safari is perfectly timed to coincide with the Great Migration's birthing season. Based in the Ndutu area and southern Serengeti plains, you'll witness thousands of wildebeest and zebra giving birth daily. This abundance of vulnerable young attracts predators, making for incredible wildlife viewing and photography opportunities.",
    quickFacts: {
      duration: "7 Days / 6 Nights",
      parksVisited: "Ndutu, Southern Serengeti, Ngorongoro",
      accommodation: "Tented camps in prime calving areas",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "January - March only",
    },
    days: [
      {
        day: 1,
        title: "Arusha to Ngorongoro Conservation Area",
        activities: "Morning pickup and drive to the Ngorongoro highlands. Afternoon at leisure or optional crater rim walk.",
        accommodation: "Ngorongoro Farm House or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Ngorongoro to Ndutu",
        activities: "Drive to Ndutu, arriving in the heart of calving country. Afternoon game drive on the plains.",
        accommodation: "Ndutu Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Full Day Ndutu Calving Plains",
        activities: "Full day exploring the calving areas. Witness newborn wildebeest and zebra with predators on the hunt.",
        accommodation: "Ndutu Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Ndutu to Southern Serengeti",
        activities: "Game drive into the southern Serengeti plains following the herds.",
        accommodation: "Serengeti Under Canvas or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Southern Serengeti",
        activities: "Full day of game drives in the southern Serengeti. Big cat sightings are exceptional during calving.",
        accommodation: "Serengeti Under Canvas or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater",
        activities: "Drive to Ngorongoro. Afternoon descent into the crater for game driving.",
        accommodation: "Ngorongoro Serena Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro to Arusha",
        activities: "Morning departure to Arusha. Arrive by midday for onward travel.",
        accommodation: "End of safari",
        meals: "Breakfast",
      },
    ],
    included: [
      "All park and conservation fees",
      "Private 4x4 safari vehicle",
      "Professional safari guide",
      "6 nights accommodation",
      "All meals as indicated",
      "Bottled water",
      "Airport transfers",
    ],
    excluded: [
      "Flights",
      "Visa fees",
      "Travel insurance",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    faqs: [
      {
        question: "When exactly is calving season?",
        answer: "Calving typically peaks in late January through February, though it can extend from late December through March depending on rainfall patterns.",
      },
      {
        question: "Will I definitely see calving?",
        answer: "During peak season (late January-February), yes—thousands of calves are born daily. We position you in the best areas based on current herd locations.",
      },
      {
        question: "Is this safari good for photography?",
        answer: "Excellent! The calving season offers dramatic wildlife action and golden savanna light. We recommend bringing a telephoto lens.",
      },
      {
        question: "What predators might we see?",
        answer: "Lions, cheetahs, leopards, hyenas, and jackals all follow the herds during calving. Predator action is frequent and dramatic.",
      },
      {
        question: "Can this trip be customized?",
        answer: "Absolutely. We can extend your time in the calving areas, add the northern Serengeti, or include a Zanzibar extension.",
      },
    ],
  },
  "great-migration-safari": {
    slug: "great-migration-safari",
    title: "Great Migration Safari",
    duration: "10 Days",
    parks: "Serengeti · Ngorongoro · Lake Manyara",
    price: "From $4,200 pp",
    season: "June - October",
    description:
      "Follow the greatest wildlife spectacle on Earth across the Serengeti plains.",
    leadParagraph:
      "Follow the greatest wildlife spectacle on Earth across the Serengeti plains. This 10-day safari positions you at the heart of the Great Migration, whether witnessing dramatic river crossings in the north or tracking massive herds across the endless savanna.",
    overview:
      "The Great Migration Safari is timed to coincide with the peak migration months when over 1.5 million wildebeest, 200,000 zebra, and thousands of gazelle move through the Serengeti ecosystem. Your expert guide will position you for the best wildlife action, from dramatic river crossings to predator hunts.",
    quickFacts: {
      duration: "10 Days / 9 Nights",
      parksVisited: "Serengeti, Ngorongoro, Lake Manyara",
      accommodation: "Mid-range to luxury tented camps",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "June - October",
    },
    days: [
      {
        day: 1,
        title: "Arrival in Arusha",
        activities: "Welcome to Tanzania! Meet your guide and transfer to your hotel in Arusha. Evening briefing about the safari ahead.",
        accommodation: "Arusha Coffee Lodge or similar",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Arusha to Lake Manyara",
        activities: "Morning drive to Lake Manyara National Park. Afternoon game drive searching for tree-climbing lions and flamingos along the lake shore.",
        accommodation: "Lake Manyara Serena Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Lake Manyara to Central Serengeti",
        activities: "Drive through the Ngorongoro highlands and descend into the Serengeti. Afternoon game drive in Seronera area.",
        accommodation: "Serengeti Serena Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Central Serengeti to Northern Serengeti",
        activities: "Full day game drive as we track the migration herds north toward the Mara River. Watch for predators following the herds.",
        accommodation: "Mara Under Canvas or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Northern Serengeti — River Crossings",
        activities: "Full day at the Mara River. Position for dramatic river crossings as wildebeest brave crocodile-infested waters.",
        accommodation: "Mara Under Canvas or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Northern Serengeti — River Crossings",
        activities: "Another day tracking the herds. River crossings can happen multiple times a day during peak season.",
        accommodation: "Mara Under Canvas or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Northern to Central Serengeti",
        activities: "Morning game drive then drive south through the Serengeti, stopping for wildlife encounters along the way.",
        accommodation: "Serengeti Serena Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Serengeti to Ngorongoro",
        activities: "Morning game drive then drive to the Ngorongoro Crater rim. Afternoon at leisure with stunning crater views.",
        accommodation: "Ngorongoro Serena Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 9,
        title: "Ngorongoro Crater",
        activities: "Full day exploring the crater floor. Excellent chance to see all of the Big Five in a single day.",
        accommodation: "Ngorongoro Serena Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 10,
        title: "Ngorongoro to Arusha — Departure",
        activities: "Morning departure to Arusha. Transfer to airport or hotel.",
        accommodation: "End of safari",
        meals: "Breakfast",
      },
    ],
    included: [
      "All park and conservation fees",
      "Private 4x4 safari vehicle",
      "Professional safari guide",
      "9 nights accommodation",
      "All meals as indicated",
      "Bottled water",
      "Airport transfers",
      "Flying Doctors emergency evacuation",
    ],
    excluded: [
      "Flights",
      "Visa fees",
      "Travel insurance",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Optional activities",
      "Personal expenses",
    ],
    faqs: [
      {
        question: "When is the best time for migration river crossings?",
        answer: "The Mara River crossings typically occur between July and October, with August and September being peak months for dramatic crossings.",
      },
      {
        question: "Will we definitely see river crossings?",
        answer: "While we position you at prime crossing points, wildlife is unpredictable. However, during peak season, crossings are highly likely over multiple days.",
      },
      {
        question: "How many people will be on this safari?",
        answer: "This is a private safari with just your group in a dedicated vehicle with your personal guide.",
      },
      {
        question: "Is this suitable for first-time safari goers?",
        answer: "Absolutely! The Great Migration is a bucket-list experience perfect for first-timers and repeat visitors alike.",
      },
    ],
  },
  "honeymoon-tanzania-zanzibar": {
    slug: "honeymoon-tanzania-zanzibar",
    title: "Honeymoon Tanzania & Zanzibar",
    duration: "11 Days",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    price: "From $5,500 pp",
    season: "Year-round",
    description:
      "The perfect honeymoon combining Tanzania's greatest wildlife destinations with romantic beach time on Zanzibar's pristine shores.",
    leadParagraph:
      "Begin your married life with the ultimate African adventure. This honeymoon safari weaves together the magic of Tanzania's wildlife-rich national parks with the romance of Zanzibar's powder-white beaches. From sunset game drives in the Serengeti to candlelit dinners on the Indian Ocean—this is honeymoon perfection.",
    overview:
      "The Honeymoon Tanzania & Zanzibar itinerary is designed for romance. Spend your first week on private safari through Tarangire, the Serengeti, and Ngorongoro Crater, staying in intimate lodges with special touches for newlyweds. Then fly to Zanzibar for four days of beach bliss at a luxury resort.",
    quickFacts: {
      duration: "11 Days / 10 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro, Zanzibar",
      accommodation: "Luxury lodges and beach resort",
      groupSize: "Private (2 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "Year-round",
    },
    days: [
      {
        day: 1,
        title: "Arrival in Arusha",
        activities: "Welcome to Tanzania! Transfer to your boutique hotel. Evening briefing and welcome dinner.",
        accommodation: "Arusha Coffee Lodge",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Arusha to Tarangire",
        activities: "Morning drive to Tarangire. Afternoon game drive with sundowners.",
        accommodation: "Tarangire Treetops Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Tarangire to Serengeti",
        activities: "Scenic drive to the Serengeti. Game driving en route. Arrive for sunset.",
        accommodation: "Four Seasons Safari Lodge Serengeti",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full Day Serengeti",
        activities: "Private game drives. Optional bush breakfast or sundowner experience.",
        accommodation: "Four Seasons Safari Lodge Serengeti",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Serengeti",
        activities: "Continue exploring. Optional hot air balloon safari at dawn.",
        accommodation: "Four Seasons Safari Lodge Serengeti",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro",
        activities: "Drive to Ngorongoro Crater rim. Afternoon at leisure with crater views.",
        accommodation: "andBeyond Ngorongoro Crater Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro Crater",
        activities: "Full day crater game drive. Private picnic lunch arranged.",
        accommodation: "andBeyond Ngorongoro Crater Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Fly to Zanzibar",
        activities: "Morning flight to Zanzibar. Transfer to your beach resort. Afternoon at leisure.",
        accommodation: "Baraza Resort & Spa",
        meals: "Breakfast, Dinner",
      },
      {
        day: 9,
        title: "Zanzibar Beach Day",
        activities: "Relax on the beach. Optional spa treatments, snorkeling, or Stone Town tour.",
        accommodation: "Baraza Resort & Spa",
        meals: "Breakfast, Dinner",
      },
      {
        day: 10,
        title: "Zanzibar Beach Day",
        activities: "Another day of beach bliss. Optional sunset dhow cruise.",
        accommodation: "Baraza Resort & Spa",
        meals: "Breakfast, Dinner",
      },
      {
        day: 11,
        title: "Departure",
        activities: "Transfer to Zanzibar airport for your departure flight.",
        accommodation: "End of trip",
        meals: "Breakfast",
      },
    ],
    included: [
      "All park fees and permits",
      "Private 4x4 safari vehicle and guide",
      "10 nights luxury accommodation",
      "All meals as specified",
      "Domestic flight Arusha-Zanzibar",
      "All transfers",
      "Honeymoon amenities and surprises",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips and gratuities",
      "Spa treatments",
      "Optional activities",
      "Alcoholic beverages (except where included)",
    ],
    faqs: [
      {
        question: "Can this itinerary be customized?",
        answer: "Absolutely! We can adjust the safari/beach balance, upgrade accommodations, or add special experiences like private dinners or spa packages.",
      },
      {
        question: "What honeymoon extras are included?",
        answer: "We include romantic room setups, a bottle of champagne, honeymoon cake, and special touches at each property. Additional surprises can be arranged.",
      },
      {
        question: "Is this trip suitable all year?",
        answer: "Yes, though we recommend avoiding April-May heavy rains. The dry season (June-October) offers excellent wildlife viewing with reliable weather.",
      },
      {
        question: "What about malaria on Zanzibar?",
        answer: "Zanzibar is in a malaria zone. We recommend consulting your doctor about prophylaxis before travel.",
      },
      {
        question: "Can we extend our Zanzibar stay?",
        answer: "Of course! Many couples extend to a full week on Zanzibar. We can arrange additional nights at your resort or a different property.",
      },
    ],
  },
}

export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries[slug]
}

export function getAllItineraries(): Itinerary[] {
  return Object.values(itineraries)
}
