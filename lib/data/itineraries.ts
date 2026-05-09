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
  additionalSections?: {
    heading: string
    body: string
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
    title: "Calving Season Safari — Ndutu & Ngorongoro",
    duration: "7 Days",
    parks: "Ndutu · Ngorongoro · Southern Serengeti",
    price: "From $2,800 pp",
    season: "January - March",
    description:
      "7-day Tanzania calving season safari based at Ndutu. Roughly 8,000 wildebeest calves born per day at peak, off-road driving permitted, every predator in the ecosystem converging on one area. January through March.",
    heroImage: {
      src: "/wildebeest-calf-ndutu-calving-season-tanzania.jpg",
      alt: "Newborn wildebeest calf running alongside its mother through Lake Ndutu during calving season, Tanzania",
    },
    leadParagraph:
      "Most people chase the Mara River crossings in August. Serious wildlife travellers come in February. Calving season at Ndutu puts roughly 8,000 wildebeest calves on the ground per day at peak, draws every lion, cheetah, hyena, and jackal in the ecosystem onto open short-grass plains with ankle-height visibility, and costs significantly less than peak-season Serengeti rates. It is, by most measures, the best predator viewing in Africa. And almost nobody knows about it.",
    overview:
      "Ndutu sits in the northwestern corner of the Ngorongoro Conservation Area (NCA), not inside Serengeti National Park, and that jurisdictional detail is the most important practical fact about this safari. Because the NCA governs this land, off-road driving is permitted. Your guide can leave the track to hold a position on a cheetah hunt, frame a lion kill from the right angle, or stay with a birth for as long as it takes. Cross the boundary east into Serengeti NP through Naabi Hill Gate and every vehicle returns to the designated track regardless of what is happening 30 metres away. This is why Ndutu is the preferred location for photographers and serious wildlife travellers during calving, not just the southern Serengeti generically. The timing is driven by rainfall, not calendar. The November-December short rains green the volcanic short-grass plains around Lake Ndutu and Lake Masek with phosphorus- and calcium-rich grass, exactly what lactating cows and developing calves need. The herds arrive by late December and births begin. Peak is the first two weeks of February. By March births taper and the herds begin moving northwest. The scale is hard to process: 500,000 calves over six weeks, all delivered onto flat open plains with no cover, watched by the highest predator concentration in the ecosystem.",
    quickFacts: {
      duration: "7 Days / 6 Nights",
      parksVisited: "Ndutu (NCA), Southern Serengeti, Ngorongoro Crater",
      accommodation: "Tented lodge or mobile camp at Ndutu",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "Mid-January through late February (peak)",
    },
    days: [
      {
        day: 1,
        title: "Arusha to Karatu",
        activities:
          "Depart Arusha by 7:00am. The drive to Karatu takes about three hours, passing through Mto wa Mbu at the base of the Rift Valley escarpment and climbing into the Ngorongoro highlands. Karatu sits at 1,450 metres in farming country just 14 km from Loduare Gate, the main NCA entry from the Arusha side. Afternoon at the lodge. This overnight is a staging stop, not a game-drive day.",
        accommodation: "Ngorongoro Farm House or similar (Karatu)",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Karatu to Ndutu via Ngorongoro Crater",
        activities:
          "Early breakfast then enter the NCA through Loduare Gate. Descend into the Ngorongoro Crater for a half-day game drive on the floor: 120 lions, 50 black rhino, 15,000 wildebeest. Ascend the western wall by early afternoon and continue southwest along the NCA tracks toward Ndutu, arriving by late afternoon. Total driving inside the NCA today is about 90 km. Afternoon game drive on the calving plains before dark.",
        accommodation: "Ndutu Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Full Day Ndutu — Lake Ndutu Plains",
        activities:
          "Depart at first light, around 6:00am. The short-grass plains around Lake Ndutu are ankle-height in January and February, which means unobstructed sightlines across flat terrain to the horizon. The herds are dense and moving slowly. Calves are born continuously through the morning. A newborn wildebeest stands within 3-5 minutes of birth, walks within 15, and runs with the herd within hours. What follows each birth is immediate: lions move in from the kopjes, spotted hyenas trail the herd edges, black-backed jackals work the newborns directly. Cheetahs are especially active here during calving because open short grass suits their sprint hunting. Kill success for cheetahs runs about 50% during calving, compared to 30% at other times. Full day in the field, picnic lunch in the vehicle.",
        accommodation: "Ndutu Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full Day Ndutu — Lake Masek and the Kopjes",
        activities:
          "Lake Masek sits about 6 km from Lake Ndutu and is a separate zone most operators ignore. The acacia woodland fringing its eastern shore is leopard territory. The open plains between the two lakes are where the herds spread at maximum density during peak calving. Twin Kopjes and Gol Kopjes are granite outcrops rising from the plains, big-cat strongholds where lions den and cubs are often visible. Big Marsh, a permanent shallow reed marsh, draws buffalo and hippo regardless of season. The off-road rule applies across all of this. Your guide can position the vehicle wherever the action is. Full day in the field.",
        accommodation: "Ndutu Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Ndutu — Southern Plains",
        activities:
          "Third full day. By this point you understand the terrain and the rhythm. Morning drives from 6:00am target lions returning from night hunts. The predator hierarchy plays out continuously: lions displace hyenas, hyenas challenge lions in large clans, cheetahs eat fast before being displaced. A Ndutu hyena clan has been documented at over 80 members. The southern NCA plains connect seamlessly with the Serengeti NP boundary to the east. If conditions warrant, your guide can drive to Naabi Hill Gate and spend part of the day on the Serengeti side, returning to Ndutu for the night.",
        accommodation: "Ndutu Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Ndutu to Ngorongoro Crater Rim",
        activities:
          "Final morning game drive on the Ndutu plains before departing northeast. The drive back through the NCA to the crater rim takes about two hours. Check in to a rim lodge with views straight down into the caldera. Afternoon at leisure. The crater looks different in the green season: the floor is lush, the rim forest thick, and the light softer than the dry-season months.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro to Arusha",
        activities:
          "Breakfast on the crater rim then drive back to Arusha, about three hours via Karatu and Mto wa Mbu. Drop-off at your Arusha hotel or Kilimanjaro International Airport.",
        accommodation: "End of safari",
        meals: "Breakfast",
      },
    ],
    included: [
      "All NCA conservation fees ($71-83 per person per day) and Ngorongoro crater vehicle fee",
      "Private 4x4 Toyota Land Cruiser with high clearance and pop-up roof",
      "Professional English-speaking guide, Arusha-based",
      "6 nights accommodation as specified",
      "All meals full-board",
      "Bottled water and soft drinks on game drives",
      "Airport and hotel transfers in Arusha",
      "AMREF Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International flights",
      "Tanzania e-visa ($50 for most nationalities)",
      "Travel insurance",
      "Guide gratuity (suggested $25 per day)",
      "Lodge staff gratuity (suggested $5-7 per day)",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    faqs: [
      {
        question: "When exactly is calving season and when should I book?",
        answer:
          "The meaningful window is mid-January through late February. Peak is the first two weeks of February. The timing shifts by up to two weeks in either direction depending on the previous year's short rains, which govern when the herds arrive and when births begin. December is a genuine shoulder option: births have started, crowds are minimal, and lodge rates are lower. March still has calving but the pace slows as herds begin moving northwest. For peak intensity, target the first three weeks of February.",
      },
      {
        question: "Why is Ndutu better than the Serengeti for calving?",
        answer:
          "Ndutu sits inside the Ngorongoro Conservation Area (NCA), not Serengeti National Park. The NCA permits off-road driving. Your guide can leave the track to hold a position on a birth, follow a predator hunt, or get the right angle on a kill. Cross east into Serengeti NP through Naabi Hill Gate and all vehicles stay on designated tracks. During calving, when the action is happening in real time across open plains, off-road access is the difference between watching from 200 metres and being in the middle of it.",
      },
      {
        question: "Is calving season better than the Mara River crossings?",
        answer:
          "For predator viewing, yes. The Mara crossings (July-October) are more theatrical but less reliable: herds mass on the bank for days before committing, and crossings can fail to happen at all on any given day. Calving is the most predictable phase of the entire migration. The herds are drawn to a specific area by grass chemistry that barely varies year to year. 8,000 calves per day at peak means continuous predator activity across open short-grass plains with full visibility. Most serious wildlife photographers argue February Ndutu beats August Mara for predator encounters. At lower prices.",
      },
      {
        question: "What are the road conditions in January and February?",
        answer:
          "January and February tracks are generally firm. Calving sits in the dry interlude between the November-December short rains and the April-May long rains. Afternoon showers produce soft patches near Lake Ndutu and Big Marsh on the volcanic black-cotton clay soil, but drainage between events is reasonable. A Land Cruiser 4x4 with high clearance handles conditions without issue. March is the transition month: long-rain moisture begins and low-lying areas can become difficult. Mobile camps close in early April for exactly this reason.",
      },
      {
        question: "What is the photography like compared to the dry season?",
        answer:
          "Different, not worse. Grass is ankle-height through calving season, which gives unobstructed sightlines across flat terrain. Morning light from 6:00-7:30am is warm and low-angle with mist over the lake. Afternoon from 4:30pm backlights herd dust and storm cells building south of the plains. The green season gives sky drama the dry-season months do not have. The off-road rule is the biggest photography advantage: no fixed track means you position for the light, not the road.",
      },
      {
        question: "Can I fly to Ndutu instead of driving?",
        answer:
          "Yes. Air Excel operates a daily flight from Arusha (08:00) to Ndutu Airstrip (arriving 09:25), roughly one hour and five minutes, around $345 one-way. The airstrip operates primarily during calving season when demand justifies it. Flying adds cost but removes the six-to-seven-hour drive from Arusha and puts you on the plains by mid-morning on Day 1. Ask us about fly-in packages.",
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
      "11-day Tanzania honeymoon safari combining private game drives in Tarangire, Serengeti, and Ngorongoro with 4 nights on Zanzibar's Indian Ocean coast. From $5,500 per person.",
    leadParagraph:
      "Seven days in the bush, four days at the coast. No two environments could be more different, and that contrast is exactly the point. You get Tanzania's full range: elephants in the Tarangire dust, lions on Serengeti kopjes, black rhino on the Ngorongoro crater floor, then white coral sand and an Indian Ocean the colour of a swimming pool. Private vehicle, private guide, just the two of you. From $5,500 per person for the full eleven days.",
    overview:
      "The route runs north to south through Tanzania's northern circuit before turning east to the coast. Arusha is your starting point. Day two takes you into Tarangire, where elephant density during the dry season is the highest of any park on the northern circuit, and the baobab trees are old enough that some predate the Roman Empire. Two nights there, then the six-hour drive west to the Serengeti through the Ngorongoro highlands, stopping at Olduvai Gorge on the way. Two nights in central Serengeti, tracking big cats across the Seronera Valley. Then east to the Ngorongoro Crater rim for two nights, with a full day on the crater floor: roughly 120 lions, 50 black rhino, and 15,000 wildebeest inside a 260-square-kilometre caldera they rarely leave. Day eight: drive to Arusha, then a Coastal Aviation flight to Zanzibar (about one hour forty-five minutes, included). Three nights at a beach property. The north coast has consistent swimming conditions year-round. The east coast (Paje, Bwejuu) is better for October through March when the Indian Ocean lies flat and snorkeling is clearest. We book whichever suits your travel dates.\n\nAt each safari property, we arrange a honeymoon setup: champagne on arrival, private sundowner location, rose petals at turndown. At Ngorongoro, a private picnic lunch on the crater floor. On Zanzibar, a sunset dhow cruise from Stone Town harbour. None of this costs extra. What does: the hot air balloon over the Serengeti ($590 per person) and spa treatments in Zanzibar. The balloon, in particular, is worth it.",
    quickFacts: {
      duration: "11 Days / 10 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro, Zanzibar",
      accommodation: "Luxury lodges and beach resort",
      groupSize: "Private (2 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "June-October or January-March (see FAQ)",
    },
    days: [
      {
        day: 1,
        title: "Arrival in Arusha",
        activities:
          "Pickup from Kilimanjaro International Airport or your connecting flight. The drive to central Arusha takes about 45 minutes on a clear day. Check in, rest, early dinner. We run through the route, confirm tomorrow's pickup time, and answer any last questions. The first game drive is in the morning.",
        accommodation: "Arusha Coffee Lodge or similar",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Arusha to Tarangire",
        activities:
          "Pickup at 7:00am. The drive to Tarangire's main gate is about two hours, heading southeast through Maasai country before the acacia scrub thickens and the first baobabs appear. Tarangire holds the highest elephant density of any park on the northern circuit during the dry season, with herds of 150 or more common along the river. Enter through the main gate and head south toward the Silale area. Three to four hours of game driving before sunset check-in. Champagne on arrival at the lodge.",
        accommodation: "Tarangire Treetops Lodge or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 3,
        title: "Full Day Tarangire",
        activities:
          "Full day inside the park. Early start before 7:00am while the air is cool. The Silale Swamp in the south draws species you will not find elsewhere on this route: fringe-eared oryx, the gerenuk (a long-necked antelope that browses standing upright on its hind legs), and tree-climbing pythons in the riverside fig trees. The park covers nearly 3,000 square kilometres. One full day covers the core areas properly. Private sundowners in the park in the late afternoon.",
        accommodation: "Tarangire Treetops Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Tarangire to Central Serengeti via Olduvai Gorge",
        activities:
          "Depart after breakfast. The drive to the Serengeti takes about six hours with stops. You climb through the Ngorongoro highlands, pass through the Conservation Area, and stop at Olduvai Gorge before Naabi Hill Gate. Olduvai is where Mary Leakey found the skull of Paranthropus boisei in 1959, a hominid who walked these plains 1.8 million years ago. The resident guide at the gorge does a 20-minute talk at the excavation site. Worth every minute. Arrive at Seronera by late afternoon for a first drive on the plains.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Serengeti",
        activities:
          "The Seronera Valley is the most consistent area for big cats year-round. Leopards rest in the sausage trees above the river. Lions claim the kopjes, granite outcrops roughly 600 million years old, visible for kilometres across the plains. Cheetahs work the open short-grass south of the valley. Optional: hot air balloon departure at 5:30am, one hour over the plains, champagne bush breakfast on landing. $590 per person, booked in advance. For honeymoon couples, it is the single best add-on on this route. Nothing else comes close.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Final morning game drive in the Serengeti, then depart through Naabi Hill Gate. The drive to the crater rim takes about three and a half hours, climbing the outer caldera slopes through montane forest thick with olive trees and giant heather. Arrive at the rim in time for lunch. The crater floor is 600 metres below. On a clear afternoon, you can see the wildebeest herds from the lodge terrace. The crater descent starts at 6:00am tomorrow.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro Crater — Full Day on the Floor",
        activities:
          "The descent begins at 6:00am before the tourist vehicles. The track drops 600 metres over 30 minutes of steep switchbacks through cloud forest. On the crater floor: approximately 120 lions, 50 black rhino, 15,000 wildebeest, 9,000 zebra, 400 hyenas. The black rhino population here is the densest in Africa. Lake Magadi on the western floor draws flamingos and hippos. Private picnic lunch arranged on the crater floor today. All vehicles must ascend by 6:00pm. You have the full day.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Ngorongoro to Arusha, then Fly to Zanzibar",
        activities:
          "Breakfast on the rim, then drive to Arusha (about three hours). Coastal Aviation flight from Arusha to Zanzibar departs midday, arriving approximately one hour forty-five minutes later. Transfer directly to your beach property. The afternoon is yours. This is the day the trip changes gear completely. The Indian Ocean is warm, the schedule disappears, and the next three days have no agenda.",
        accommodation: "Beach resort, north or east coast Zanzibar",
        meals: "Breakfast, Dinner",
      },
      {
        day: 9,
        title: "Zanzibar — Stone Town and Sunset Dhow",
        activities:
          "Morning on the beach. Optional Stone Town in the afternoon, a 20-minute drive from most properties. Stone Town is a UNESCO World Heritage site, a compact Arab trading city with carved wooden doors, winding alleyways, and a spice market that has been operating for 200 years. Freddie Mercury was born here in 1946. Sunset dhow cruise from the harbour: 90 minutes on the water, local food and drinks included. This is the honeymoon dinner.",
        accommodation: "Beach resort, north or east coast Zanzibar",
        meals: "Breakfast, Dinner",
      },
      {
        day: 10,
        title: "Zanzibar — Last Full Day",
        activities:
          "No fixed agenda. Snorkeling at Mnemba Atoll is a half-day boat trip: turtles, reef fish, and dolphins if the timing is right ($80-100 per person). A spice tour is a three-hour walk through a working plantation ($30 per person, bookable through the resort). Spa treatments can be arranged at your property. Or just the beach. Last evening in Tanzania.",
        accommodation: "Beach resort, north or east coast Zanzibar",
        meals: "Breakfast, Dinner",
      },
      {
        day: 11,
        title: "Departure",
        activities:
          "Breakfast, checkout, transfer to Zanzibar International Airport. Most international connections route through Nairobi, Doha, Dubai, or Addis Ababa. Check with your airline on connection times before booking your international flights.",
        accommodation: "End of trip",
        meals: "Breakfast",
      },
    ],
    included: [
      "All Tarangire, Serengeti, and Ngorongoro park and conservation fees",
      "Ngorongoro crater vehicle descent fee ($295 per vehicle)",
      "Private 4x4 Toyota Land Cruiser with pop-up roof for the safari leg",
      "Professional English-speaking guide, Arusha-based",
      "7 nights safari accommodation (2 Tarangire, 2 Serengeti, 2 Ngorongoro) + 3 nights Zanzibar beach property",
      "Full-board on safari (all meals Days 1-8), half-board in Zanzibar (breakfast and dinner)",
      "Bottled water and soft drinks on game drives",
      "All road transfers on the safari circuit",
      "Coastal Aviation flight Arusha to Zanzibar (one-way per person)",
      "Sunset dhow cruise on Zanzibar (Day 9)",
      "Honeymoon setup at each property: champagne on arrival, private sundowners, private crater-floor picnic (Ngorongoro), rose petals at turndown",
      "AMREF Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International flights to and from Tanzania",
      "Tanzania e-visa ($50 for most nationalities)",
      "Travel insurance (required)",
      "Guide gratuity (suggested $25 per day for 7 safari days)",
      "Lodge staff gratuity (suggested $5-7 per day via tip box)",
      "Hot air balloon safari ($590 per person, optional, booked in advance)",
      "Spa treatments in Zanzibar",
      "Snorkeling excursions and optional activities in Zanzibar",
      "Alcoholic beverages beyond welcome champagne",
    ],
    faqs: [
      {
        question: "When is the best time for this trip?",
        answer:
          "June through October is the cleanest window. Tanzania's dry season means short grass, animals concentrated around water, and easy spotting. Zanzibar's north coast swims well year-round regardless of season. January through March is the second-best option: calving season on the southern Serengeti plains, and Zanzibar's Indian Ocean is at its calmest and clearest. April and May are the months to avoid. The long rains make some safari roads genuinely difficult and many Zanzibar east-coast properties close for the season.",
      },
      {
        question: "What makes this different from a regular Tanzania safari?",
        answer:
          "Everything runs privately. One vehicle, one guide, just the two of you. No shared departures, no waiting for other guests. You decide how long to stay at a sighting, when to return for lunch, and when the afternoon drive ends. Lodge selection for couples is also different: we prioritise rooms with a direct view, properties with plunge pools or open-air tubs, and intimate dining rather than communal tables. At each property, we pre-arrange champagne on arrival, a private sundowner location, and rose petals at turndown. These are confirmed in advance, not requested at check-in.",
      },
      {
        question: "How many days should we spend on safari vs. Zanzibar?",
        answer:
          "Seven days on safari and four days at the coast is the standard, and it works. Tarangire, the Serengeti, and Ngorongoro are different enough ecosystems that seven days without repetition is realistic. Three full days in Zanzibar is enough to rest but not quite enough to feel the place. If the beach matters, extend to five or six nights. The most common extension is two additional Zanzibar nights. If wildlife is the priority, one or two extra nights in the Serengeti makes more difference than a longer beach leg.",
      },
      {
        question: "Is the hot air balloon worth adding?",
        answer:
          "For a honeymoon, yes. The balloon operates out of the central Serengeti on Day 5. Departure is at 5:30am, the flight is about one hour over the plains, followed by a champagne bush breakfast on landing. Cost is $590 per person, paid directly to the balloon operator, booked in advance. It is the one add-on that genuinely changes what you see and how you remember the trip. I recommend it to every couple on this route.",
      },
      {
        question: "How do we get from the safari circuit to Zanzibar?",
        answer:
          "Coastal Aviation operates a daily flight from Arusha to Zanzibar. It departs around midday and arrives roughly one hour and forty-five minutes later. The fare is approximately $250-300 per person one-way and is included in this package. There is no connection through Dar es Salaam. It is a direct route. We handle all booking and airport transfers on both ends.",
      },
      {
        question: "Which part of Zanzibar is right for a honeymoon?",
        answer:
          "It depends on when you travel. The north coast (Nungwi, Kendwa) has consistent swimming conditions all year. The water does not drop shallow at low tide the way the east coast lagoons do. The east coast (Paje, Bwejuu, Jambiani) is quieter and more atmospheric, genuinely better for November through March when the Indian Ocean lies flat and clear. June through October, southeast trade winds turn the east coast into a kitesurf beach. We book the right coast based on your dates.",
      },
      {
        question: "Are international flights included?",
        answer:
          "No. International flights are excluded from the package price. The $5,500 per person starting price covers everything from your arrival at Kilimanjaro International Airport (JRO) through to your departure from Zanzibar (ZNZ), including the domestic Coastal Aviation flight between the two. The most common international connections are via Doha (Qatar Airways), Amsterdam (KLM), Dubai (Emirates), or Istanbul (Turkish Airlines). Most nationalities also need a Tanzania eVisa before arrival, currently $50 per person ($100 for US citizens).",
      },
      {
        question: "Do we need a visa for Tanzania and Zanzibar?",
        answer:
          "Tanzania requires an eVisa for most nationalities, applied online at evisa.go.tz. The fee is $50 for most passports; US citizens pay $100. Apply at least two weeks before departure and print the approval. Zanzibar is part of Tanzania — your mainland visa covers the island, though you fill in a short second immigration form on the domestic flight. Yellow fever vaccination is required if you are arriving from a country on Tanzania's risk list. If you have recently changed your surname after getting married, book all flights in the passport-name version to avoid mismatched document problems at check-in.",
      },
      {
        question: "What are the best honeymoon lodges for each park?",
        answer:
          "In Tarangire, Tarangire Treetops puts your room inside a 1,000-year-old baobab with a private plunge pool. In the Serengeti, the Four Seasons Safari Lodge has the most consistent infrastructure for couples (pool overlooking a waterhole, room-service game drives). For a tented camp experience, Asilia's Olakira or Nomad's Lamai Serengeti are better positioned for big cat sightings. At Ngorongoro, &Beyond Crater Lodge is the most iconic — butler service, 600m above the floor. In Zanzibar, Baraza Resort on the south coast and Kilindi on the northwest are the strongest at the top end. We build the right lodge combination for your budget.",
      },
      {
        question: "Do we need malaria medication?",
        answer:
          "Yes. Zanzibar is a malaria zone, as are all of Tanzania's national parks. Consult a travel medicine doctor before you leave home. Antimalarial prophylaxis is standard advice for this trip regardless of nationality. The risk varies by season and location — lower in dry months, higher near the coast. Start your medication before you arrive in Tanzania. This applies to both legs of the trip.",
      },
      {
        question: "Are tips included or extra?",
        answer:
          "Tips are excluded and handled separately. The standard in Tanzania is $20-25 per day for your driver-guide, paid directly on the last day of safari, and $5-7 per night for lodge staff via the envelope at reception. For this itinerary with one guide and seven safari nights, the total tipping budget is typically $150-175 for the guide and $35-50 for lodge staff — roughly $200-250 for a couple across the full safari leg. On Zanzibar, tipping is less formalised but the same courtesy applies.",
      },
      {
        question: "What should we pack?",
        answer:
          "For the safari: neutral colours — khaki, olive, tan, grey. Bright colours disturb animals and attract insects. Mornings on the Serengeti are cold at 6:00am (bring a fleece); afternoons reach 28-32°C. A wide-brim hat, polarised sunglasses, SPF 50 sunscreen, and binoculars (8x42 or 10x42 recommended). For Zanzibar: light summer clothes. In Stone Town, covered shoulders and knees are respectful away from the beach. Reef-safe sunscreen for snorkelling at Mnemba Atoll. Tanzania uses Type G plugs (UK standard) — bring a universal adapter. Take antimalarial medication as prescribed. Smart-casual evening wear for lodge dinners; no need for formal clothes.",
      },
      {
        question: "Can we extend the beach stay or adjust the itinerary?",
        answer:
          "Both. Most couples who extend add two or three nights in Zanzibar, making the beach leg a full week. On the safari side, accommodation upgrades are available at all three parks, including intimate tented camps that suit honeymoon travel better than large lodge properties. If you want fewer driving days or a different park combination, contact us with your dates and we will work out what fits.",
      },
    ],
    additionalSections: [
      {
        heading: "What Makes a Honeymoon Safari Different",
        body: "A private vehicle means the schedule is yours. No shared departures, no waiting for strangers to finish photographing. You tell the guide when to stop, how long to stay, and when to head back. Lodge selection for couples is different from lodge selection for groups. The things that matter: room orientation (east-facing for morning light, west-facing for sunset), whether the property has plunge pools or open-air tubs, how private the dining is, and whether the lodge arranges setups without being asked. We book accordingly.\n\nAt each property on this route, we pre-arrange a honeymoon setup: champagne on arrival, a private sundowner location rather than the communal deck, rose petals at turndown. At Ngorongoro, a private picnic lunch on the crater floor. On Zanzibar, a sunset dhow cruise. If you want a private photographer for the balloon flight, the crater descent, or the Stone Town afternoon, we can arrange that at additional cost. Several couples have done this. The results are worth it.",
      },
      {
        heading: "Which Zanzibar Coast Is Right for You",
        body: "Most itineraries say 'Zanzibar' without explaining that the island has five distinct coastlines with very different characters.\n\nThe northwest coast (Nungwi and Kendwa) is the most reliable for swimming. Deep water right off the beach means no tidal flats at low tide, and conditions are consistent whether you travel in July or January. Nungwi is livelier, with beach restaurants and a working fishing village at one end. Kendwa is quieter, with the same water conditions. Both face west for sunsets.\n\nThe northeast coast (Matemwe) is remote and adjacent to Mnemba Atoll, the best snorkelling on the island. The reef creates a shallow lagoon at low tide, however, so swimming conditions change significantly by the hour. Best for October through March.\n\nThe east coast (Paje, Jambiani, Bwejuu) is beautiful in the right months. October through March the Indian Ocean is calm and snorkelling is clearest. June through October, southeast trade winds turn Paje into a kitesurf beach. Most honeymoon couples prefer the northwest for June to October travel.\n\nWe book the right coast based on your dates. We do not default to one location regardless of timing.",
      },
      {
        heading: "Visas and Entry",
        body: "Tanzania requires an eVisa for most nationalities, applied online at evisa.go.tz before departure. The fee is $50 for most passports; US citizens pay $100. Apply at least two weeks before you travel and print the approval letter to carry alongside your passport.\n\nYellow fever vaccination is required if you are arriving from a country on Tanzania's risk list, which includes most of sub-Saharan Africa and parts of South America. If you are transiting through Nairobi or Addis Ababa, confirm whether your specific layover duration triggers the requirement.\n\nZanzibar is part of Tanzania, so your mainland visa covers the island. You will fill in a short second immigration form on the Coastal Aviation flight. It takes about three minutes.\n\nOne practical note for newlyweds: if you have recently changed your surname and your passport still shows your maiden name, book all flights and accommodation in the maiden-name version. Mismatched passport and ticket names cause problems at check-in. If your passport is already in your married name, make sure your flight tickets match it exactly before you travel.",
      },
      {
        heading: "Getting Here — Flight Routing",
        body: "There is no direct flight to Tanzania from North America, the UK, or most of Europe. Every routing involves one connection.\n\nFrom the US East Coast: Qatar Airways (JFK or IAD via Doha) and KLM (JFK via Amsterdam) both serve Kilimanjaro International Airport with one stop. Turkish Airlines via Istanbul is frequently the cheapest option but adds flying time. Total travel time from New York is typically 18-22 hours.\n\nFrom the UK: KLM via Amsterdam and Qatar via Doha are the most reliable. Emirates via Dubai is a popular premium option. British Airways connects via Nairobi with a domestic leg to Kilimanjaro.\n\nFrom Australia: Singapore Airlines via Singapore and Emirates via Dubai both work. Expect 20-24 hours total.\n\nKilimanjaro International Airport (JRO) is the correct arrival airport for this itinerary. Do not fly into Dar es Salaam (DAR) — it adds a full day of domestic travel to reach Arusha.\n\nFor the return, you depart from Zanzibar International (ZNZ). Most international connections route through Nairobi (NBO), Doha (DOH), or Dubai (DXB). Allow at least three hours for a connection in Nairobi, where the domestic-to-international transfer can be slow.",
      },
      {
        heading: "Wildlife by Month — When to Travel",
        body: "January and February: Calving season. The wildebeest herds are on the short-grass plains south of the Serengeti near Lake Ndutu, where roughly 8,000 calves are born per day at peak in early February. Every predator in the ecosystem converges on one area. Some wildlife photographers consider February Ndutu better for predator viewing than August Mara.\n\nMarch: Calving winds down, herds begin moving northwest. Long rains approaching. A genuine shoulder option if you travel before mid-March.\n\nApril and May: Long rains. Lush landscapes, very few tourists, lower rates. Some roads become difficult and several Ndutu camps close. Not recommended.\n\nJune and July: Dry season begins. Animals concentrate around shrinking water sources. Western Corridor Serengeti, Grumeti River crossings from late June. Short grass, easy spotting.\n\nAugust through October: Peak season. Northern Serengeti, Mara River crossings at Kogatende. Highest prices and most dramatic crossings if you position correctly. Ngorongoro Crater is excellent year-round regardless of season.\n\nNovember and December: Short rains, typically four to six weeks. Parks turn dramatically green, crowds thin, and rates drop. A genuine undervalued window that most operators overlook.",
      },
      {
        heading: "What to Pack",
        body: "For the safari leg: neutral-coloured clothing in khaki, olive, tan, or grey. Bright colours disturb animals and attract insects. Mornings on the Serengeti are cold at 6:00am — bring a fleece or light jacket. Afternoons reach 28-32°C. A wide-brim hat, polarised sunglasses, and SPF 50 sunscreen for open game drives. Binoculars make a real difference; 8x42 or 10x42 is the standard guide recommendation.\n\nFor Zanzibar: lightweight summer clothes. In Stone Town, modest dress is respectful away from the beach — covered shoulders and knees when walking through the market or along the seafront. Reef-safe sunscreen if you plan to snorkel at Mnemba Atoll, which has a coral protection policy. A waterproof bag for boat excursions.\n\nPractical items: Tanzania uses Type G plugs (same as the UK). Bring a universal adapter if you are from North America, Europe, or Australia. A portable power bank is useful on long game-drive days. Take your antimalarial medication as prescribed and carry a small first-aid kit with antihistamine and rehydration sachets. Smart-casual evening wear for lodge dinners — no formal clothes required.",
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
