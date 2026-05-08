export interface Itinerary {
  slug: string
  title: string
  duration: string
  parks: string
  price: string
  season: string
  description: string
  heroImage?: { src: string; alt: string }
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
      "8-day private Tanzania safari covering Tarangire, the Serengeti, and Ngorongoro Crater. Three nights in the Serengeti, private 4x4, full-board lodges. From $3,200 per person.",
    heroImage: {
      src: "/tarangire-elephants-baobab-tanzania-safari.jpg",
      alt: "Elephant herd passing a giant baobab tree in Tarangire National Park, Tanzania",
    },
    leadParagraph:
      "Eight days is the right number for the Northern Circuit. Long enough for three nights in the Serengeti (which is what separates a real safari from a rushed loop) and a full day on the crater floor. Tarangire for the elephants and the baobabs. Serengeti for scale and predators. Ngorongoro Crater because nothing else puts you inside a collapsed volcano alongside 120 lions and 50 black rhino. Private vehicle, private guide, full-board lodges. This is the one.",
    overview:
      "The route covers three parks: Tarangire, central Serengeti, and Ngorongoro Crater. Total driving from Arusha and back is roughly 1,200 km. The parks are different enough that eight days never feels repetitive. Tarangire is dense bush, ancient baobabs, and the Silale Swamp drawing elephants from across the region. In the dry season (June through October), herds of 200 or more are common along the Tarangire River. The Serengeti is the opposite: open short-grass plains, 600-million-year-old kopjes rising from the ground, and the best predator density in Africa. Ngorongoro is a world apart. The caldera walls drop 600 metres and the animals inside rarely leave, which is why the lion and black rhino densities here are higher than anywhere else on the continent. Which part of the Serengeti you see depends on when you travel. January through March, the herds are on the southern plains near Ndutu for calving season, roughly 8,000 wildebeest calves born per day at peak. June through July, the Western Corridor and the Grumeti River crossings. August through October, the northern Serengeti and the Mara River. November through December, the herds drift south again. Your guide tracks current conditions and positions you accordingly.",
    quickFacts: {
      duration: "8 Days / 7 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro",
      accommodation: "Mid-range lodges and tented camps",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "Year-round (see FAQ for seasonal detail)",
    },
    days: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        activities:
          "Pickup from your Arusha hotel at 7:30am. The drive to Tarangire takes about two hours, heading southeast through Maasai village country before the scrub thickens into acacia woodland and the first baobabs appear. Enter through the main gate and head for the Tarangire River. In the dry season, every elephant in the ecosystem converges here. Some mornings you count 150 in a single hour. Afternoon game drive along the river before sunset check-in.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Full Day Tarangire",
        activities:
          "Full day inside the park. Start before 7am while the air is cool. The Silale Swamp in the south draws buffalo, wildebeest, and hippos, and it is one of the areas most visitors never reach. Tarangire also holds species that do not appear in the other parks on this route: the fringe-eared oryx with its long straight horns, the gerenuk (a long-necked antelope that browses standing on its hind legs), and tree-climbing pythons coiled in the fig trees along the river. The park covers nearly 3,000 square kilometres. One full day is enough to see it properly.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Tarangire to Central Serengeti via Olduvai Gorge",
        activities:
          "Early breakfast, then depart for the Serengeti. The drive takes about six hours with stops. You pass through Karatu town, climb into the Ngorongoro highlands, and descend into the Conservation Area on the way west. Stop at Olduvai Gorge before Naabi Hill Gate: in 1959, Mary Leakey found the skull of Paranthropus boisei here, a hominid who lived on these plains 1.8 million years ago. The resident guide at the gorge does a 20-minute talk at the excavation site. Worth every minute. Arrive Seronera area by late afternoon for a first game drive on the plains.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full Day Serengeti",
        activities:
          "Full day in the park. The Seronera Valley runs through the centre of the Serengeti and is the most consistent area for big cats year-round. Leopards rest in the sausage trees above the river. Lions claim the kopjes, granite outcrops roughly 600 million years old, visible for kilometres in every direction. Cheetahs work the open plains south of the valley where the grass is short. The Serengeti holds approximately 4,000 lions, 1,000 leopards, and 225 cheetahs. You will not see all of them. You will see enough.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Serengeti",
        activities:
          "Three nights in the Serengeti is what makes this itinerary work. One day is an introduction. Two days gets you familiar. On the third you stop watching the clock and start watching properly. Your guide picks areas based on reports from other guides in the field. Optional: hot air balloon departure at 5:30am, one hour over the plains, champagne bush breakfast on landing. $590 per person, booked in advance.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Final morning game drive in the Serengeti before departing through Naabi Hill Gate. The drive to the crater rim takes about three and a half hours, climbing the outer caldera slopes through montane forest thick with olive trees and giant heather. Arrive at the rim in time for lunch. The crater floor is 600 metres below you. On a clear afternoon, you can see the dark shapes of the wildebeest herds from the lodge terrace. Early dinner and sleep.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro Crater — Full Day on the Floor",
        activities:
          "The descent starts at 6:00am before the tourist buses arrive. The track drops 600 metres over about 30 minutes of steep switchbacks through forest. On the crater floor: approximately 120 lions with well-defined territories, 15,000 wildebeest, 9,000 zebra, 400 hyenas, and around 50 black rhino, the densest population in Africa. Lake Magadi on the western floor draws flamingos and hippos. The Lerai Forest in the south is where elephants shelter at midday. One thing the crater does not have: giraffes. Their legs and necks make the steep walls impossible to navigate, so none have entered and the population inside is completely isolated. All vehicles must ascend by 6:00pm. You have the full day.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Ngorongoro to Arusha",
        activities:
          "Final breakfast on the rim. Drive back to Arusha takes about three hours. Drop-off at your hotel or Kilimanjaro International Airport (JRO). If your international flight departs the same day, the earliest viable departure is 21:00. Domestic connections from Kilimanjaro can work from 19:40.",
        accommodation: "End of safari",
        meals: "Breakfast",
      },
    ],
    included: [
      "All park entrance fees and Ngorongoro crater vehicle fee ($295 per vehicle)",
      "Private 4x4 Toyota Land Cruiser with pop-up roof",
      "Professional English-speaking guide, Arusha-based",
      "7 nights accommodation as specified",
      "All meals full-board (lunch on Day 1 through breakfast on Day 8)",
      "Bottled water and soft drinks on game drives",
      "Airport and hotel transfers in Arusha",
      "AMREF Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International flights",
      "Tanzania e-visa ($50 for most nationalities)",
      "Travel insurance",
      "Guide gratuity (suggested $25 per day)",
      "Lodge staff gratuity (suggested $5-7 per day via lodge tip box)",
      "Hot air balloon safari ($590 per person, booked in advance)",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
    ],
    faqs: [
      {
        question: "Which part of the Serengeti will we visit?",
        answer:
          "It depends on when you travel and your guide will position you accordingly. January through March: southern plains near Ndutu for wildebeest calving season. April through May: Seronera and the central valley, reliable for resident predators year-round. June through July: Western Corridor, Grumeti River crossings. August through October: northern Serengeti, Mara River crossings at Kogatende. November through December: herds drifting south again, central Serengeti. The 8-day classic uses Seronera as its base, with your guide tracking the best action for your specific dates.",
      },
      {
        question: "What is the best time of year?",
        answer:
          "There is no bad time, but the experience changes significantly by season. June through October is the dry season: short grass, animals concentrated around water, easiest spotting. January through March is calving season on the southern Serengeti plains, one of the most dramatic wildlife events in Africa. November and December bring the short rains, lush green landscapes, and nearly empty parks at lower rates. April and May are the long rains: some roads become challenging but prices drop and you will have the Serengeti largely to yourself.",
      },
      {
        question: "What is the Ngorongoro crater vehicle fee?",
        answer:
          "Ngorongoro charges a separate $295 fee per vehicle per crater descent, on top of the standard conservation area entrance fees. This covers one full day on the crater floor. All vehicles must leave by 6:00pm. The fee is included in your Jumbo Safaris package price.",
      },
      {
        question: "How much should I tip?",
        answer:
          "The standard in Tanzania is $25 per day for your driver-guide and $5-7 per day for lodge staff, placed in the tip box at reception. For a 7-night safari with one guide, that is roughly $175 for the guide and $40-50 for lodge staff across the trip. Tipping is genuinely appreciated and forms a meaningful part of guide income.",
      },
      {
        question: "Is this suitable for children?",
        answer:
          "Yes, with a minimum age of 5. Children under 12 need a booster seat in the vehicle. Let us know at booking. The crater descent is steep but entirely by vehicle. None of the parks on this route require walking. Most lodges can arrange early dinner service for younger children.",
      },
      {
        question: "Can I add Lake Manyara or extend the trip?",
        answer:
          "Lake Manyara can be added as an overnight on Day 2 or 3, extending the itinerary to 9 days. It is worth adding specifically for tree-climbing lions, which are a Manyara speciality rare elsewhere. Additional nights in the Serengeti are always worthwhile. Contact us and we will adjust the route.",
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
