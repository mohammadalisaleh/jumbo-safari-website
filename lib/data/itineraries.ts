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
    title: "Great Migration Safari — Northern Serengeti",
    duration: "10 Days",
    parks: "Northern Serengeti · Serengeti · Ngorongoro",
    price: "From $4,200 pp",
    season: "June - October",
    description:
      "10-day Tanzania Great Migration safari. Three nights in the northern Serengeti at Kogatende, positioned for Mara River crossings. Central Serengeti and Ngorongoro Crater included on the return. Private vehicle and guide throughout. From $4,200 per person.",
    leadParagraph:
      "The Mara River crossing is the thing most people picture when they think of Africa. What the photographs do not convey is the waiting. Herds of hundreds of thousands mass on the south bank, press to the edge, pull back. A single wildebeest commits and the whole thing breaks. The river is forty metres wide and full of crocodiles. The crossing takes about four minutes. Then silence, and the herd rebuilds on the far bank. This 10-day route puts you at Kogatende with three nights at the crossing points. Three nights is the minimum for meaningful odds. August and September are the peak months. The crossing cannot be promised on any specific day. That is not a qualification. It is what makes it worth coming.",
    overview:
      "Tanzania's national aerial census in 2023 (TAWIRI, co-conducted with Frankfurt Zoological Society and the University of Glasgow) counted 1,366,109 wildebeest in the Greater Serengeti. A 2025 Oxford satellite study suggested the number may be lower, around 800,000; the gap is unresolved and under active scientific review. The commonly cited figure of 1.5 million conflates wildebeest with zebra and Thomson's gazelle. Two million has no primary source. Whatever the exact count, when the bulk of the herd reaches the northern Serengeti from late July onward, the scale is unlike anything else in Africa.\n\nThe migration runs on rainfall, not calendar. Year-to-year variance in arrival timing can be four to six weeks. In June, herds are in the Western Corridor crossing the Grumeti. The vanguard typically reaches Kogatende from mid-July. August and September are the peak months for Mara crossings. By late October the short rains approach, herds begin moving south, and the window closes. A booking past October 20th carries real risk of missing the crossings entirely.\n\nThe Mara River at Kogatende has ten to twelve TANAPA-designated crossing points. Crossings 4 and 5 are the most dramatic, with steep banks and deep pools. Crossing 2 is the most photogenic. Crossings 9 through 12 have the fewest vehicles. On a three-to-four night August stay, the probability of seeing at least one major crossing is roughly 80 percent. Four to five nights push the odds meaningfully higher. This itinerary gives you three full days at the river, then drives south through the central Serengeti to Ngorongoro Crater on the return.",
    quickFacts: {
      duration: "10 Days / 9 Nights",
      parksVisited: "Northern Serengeti (Kogatende/Lamai Wedge), Central Serengeti, Ngorongoro",
      accommodation: "Tented camps (northern Serengeti), mid-range lodge (Seronera), rim lodge (Ngorongoro)",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "August-September (peak); July-October (full season)",
    },
    days: [
      {
        day: 1,
        title: "Arrive Arusha",
        activities:
          "Transfer from Kilimanjaro International Airport to your Arusha hotel, about 45 minutes on a clear day. Dinner and a full briefing: crossing point geography, TANAPA rules at the Mara, what to realistically expect. The drive to the Serengeti begins in the morning.",
        accommodation: "Arusha Coffee Lodge or similar",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Arusha to Central Serengeti via Olduvai Gorge",
        activities:
          "Pickup at 7:00am. The drive to the Serengeti takes about six hours with stops. You climb through the Ngorongoro highlands, pass through the Conservation Area, and stop at Olduvai Gorge before Naabi Hill Gate. In 1959, Mary Leakey found the skull of Paranthropus boisei here, a hominid who walked these plains 1.8 million years ago. The site guide does a 20-minute talk at the excavation. Worth every minute. Arrive in the Seronera area in late afternoon for a first game drive on the central plains.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Lunch, Dinner",
      },
      {
        day: 3,
        title: "Full Day Central Serengeti — Seronera Valley",
        activities:
          "Full day in the Seronera Valley, the most consistent big-cat zone in the Serengeti year-round. Leopards rest in the sausage trees above the river. Lions claim the kopjes, granite outcrops 600 million years old. Cheetahs work the short-grass plains to the south. Depending on your travel dates and the current herd position, fringes of the migration may be passing through Seronera en route north. The resident predators are here regardless. Full day in the park, picnic lunch.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Central Serengeti to Northern Serengeti — Kogatende",
        activities:
          "The drive from Seronera to Kogatende is 160 to 170 km on murram and dirt track. Five to six hours in dry conditions. This is not dead time: you are crossing the full length of the Serengeti through Lobo Hills and kopje country, with wildlife throughout. Arrive at your northern camp in the afternoon. First look at the Mara River before dark. Depending on herd position, you may see animals massing on the south bank. First briefing from your guide on which crossing points are showing activity.",
        accommodation: "Sayari Camp (Asilia Africa) or Lemala Kuria Hills or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Northern Serengeti — Mara River Crossings",
        activities:
          "Out by 6:00am. Your guide positions the vehicle at the crossing point showing the most activity, based on overnight herd movement and morning field contacts. TANAPA's revised guidelines require vehicles to hold position at designated points, at least 25 metres from the bank, stationary during crossing events. No disembarking. Each numbered crossing point has a designated maximum vehicle count.\n\nHerds mass, press to the water's edge, turn back. There is no lead animal and no predictable trigger. Behavioral research identifies it as a collective decision: a small committed group at the water's edge tips the calculation for the herd behind them, or it does not. A crossing can be over in four minutes. The same point may see a second wave within the hour, or nothing for two days. Between events, the northern Serengeti has strong resident game regardless of migration timing: lion, leopard, cheetah, elephant, buffalo.",
        accommodation: "Sayari Camp (Asilia Africa) or Lemala Kuria Hills or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Northern Serengeti — Second Full Day at the Mara",
        activities:
          "Second full day at the crossing points. Your guide repositions based on overnight herd movement. Crossings 4 and 5 are the most dramatic, with high banks and deep croc pools. Crossing 2 is the most photogenic. Crossings 9 through 12 are the least crowded. Morning light from the Kogatende (south) bank is best before 9:00am, with herds approaching front-lit from the east. Afternoon light favors the Lamai Wedge north of the river, with warm sidelight on animals emerging from the water. Your guide chooses the crossing point based on light and herd position. Picnic lunch at the river.",
        accommodation: "Sayari Camp (Asilia Africa) or Lemala Kuria Hills or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Northern Serengeti — Third Full Day at the Mara",
        activities:
          "Third full day. Three nights at Kogatende is the minimum for meaningful crossing odds; this is the day the probability calculation is firmly in your favour. By now your guide knows the rhythm: which bank the herd is favouring, which crossing points are showing massing behaviour, where the main croc pods are concentrated. Crocodile density in the Tanzanian Mara stretch is high. No formal site-specific count has been published for the Kogatende reach, but they are visible from the bank at any active crossing point during the season.",
        accommodation: "Sayari Camp (Asilia Africa) or Lemala Kuria Hills or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Final Morning at the Mara, then Drive South",
        activities:
          "Final morning at the crossing points from 6:00am. Depart mid-morning and drive south through the park. The route back to Seronera takes five to six hours on the same murram track through the full length of the Serengeti. The Lobo area in the northeast passes through kopje country with consistent lion sightings. Game drives throughout the drive south. Arrive at the central Serengeti lodge late afternoon.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 9,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Morning game drive in the Seronera Valley, then depart through Naabi Hill Gate. The drive to the Ngorongoro rim takes about three and a half hours, climbing through montane forest thick with olive trees and giant heather. Arrive for lunch. The crater floor is 600 metres below. On a clear afternoon you can see the animal herds from the lodge terrace. Early dinner. The descent begins at 6:00am.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 10,
        title: "Ngorongoro Crater then Depart",
        activities:
          "Descent at 6:00am before the tourist vehicles arrive. The track drops 600 metres through cloud forest over 30 minutes of switchbacks. On the crater floor: approximately 120 lions, 50 black rhino at the densest population in East Africa, 15,000 wildebeest, 400 hyenas, 9,000 zebra, all inside 260 square kilometres of enclosed caldera they rarely leave. Picnic lunch at Ngoitokitok Springs. Ascend mid-afternoon, drive to Arusha (three hours). Drop-off at your hotel or Kilimanjaro International Airport. Earliest viable international departure is 21:00.",
        accommodation: "End of safari",
        meals: "Breakfast, Lunch",
      },
    ],
    included: [
      "All Serengeti National Park conservation fees",
      "Ngorongoro Conservation Area fees and crater vehicle descent fee ($295 per vehicle)",
      "Private 4x4 Toyota Land Cruiser with pop-up roof",
      "Professional English-speaking guide, Arusha-based",
      "9 nights accommodation as specified",
      "All meals (dinner Day 1 through lunch Day 10)",
      "Bottled water and soft drinks on game drives",
      "All road transfers throughout the circuit",
      "AMREF Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International flights",
      "Tanzania e-visa ($50 for most nationalities)",
      "Travel insurance",
      "Guide gratuity (suggested $25 per day)",
      "Lodge staff gratuity (suggested $5-7 per day via lodge tip box)",
      "Hot air balloon safari (optional, $590 per person, available in central Serengeti on Day 3)",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    faqs: [
      {
        question: "What is the best time to see the Great Migration in the Serengeti?",
        answer:
          "August and September are the peak months for Mara River crossings in the northern Serengeti. The herds are most concentrated at Kogatende, crossing events are most frequent, and predator activity is highest. July is viable but less reliable: the vanguard typically reaches Kogatende from mid-July, but timing shifts by four to six weeks depending on rainfall. First-half July visitors are better positioned starting in the Western Corridor and moving north. October is the tail end. Crossings still occur in early October, but after the 20th the odds drop sharply and short rains can trigger sudden southward movement. June targets the Grumeti River crossings in the Western Corridor, which are smaller in scale but far less crowded.",
      },
      {
        question: "Can you guarantee seeing a river crossing?",
        answer:
          "No. Nobody can. Wildebeest mass on the Mara bank for multiple consecutive days and turn back without crossing. On a three-night August stay at Kogatende, experienced operators put the probability of seeing at least one major crossing at roughly 80 percent. Three nights gives you six sessions at the crossing points. Four to five nights push the odds meaningfully higher. The northern Serengeti also has exceptional resident game year-round regardless of crossings: lion, leopard, cheetah, elephant, buffalo. Every drive has a point regardless of what the herd does.",
      },
      {
        question: "Why do wildebeest hesitate before crossing?",
        answer:
          "There is no lead animal. Wildebeest have no permanent dominance hierarchy, so the crossing decision is collective. Behavioral research (Torney, Hopcraft et al., 2018) shows that a small committed group at the water's edge has to reach a threshold that tips the calculation for the herd behind them. If that group loses nerve, the herd turns back. A false start. What holds them: crocodiles in the pool below, a strong current, a steep drop into the water. What tips them: a committed initiating group, social pressure from animals behind. Herds have massed on the bank for multiple days before committing. It cannot be predicted to the hour.",
      },
      {
        question: "How many days do I need for a Great Migration safari?",
        answer:
          "Three nights in the northern Serengeti is the minimum for meaningful crossing odds. Two nights is not enough. Four or five nights is materially better. This itinerary gives you three full days at the river. If the crossings are the primary objective and you want to maximize odds, we can build a fly-in version with four or five nights based at Kogatende, removing the long overland legs. Contact us and we will adjust.",
      },
      {
        question: "Is the Great Migration only in Tanzania, or does it happen in Kenya too?",
        answer:
          "It is a continuous circuit between Tanzania and Kenya. The wildebeest spend most of the year in Tanzania: calving on the southern Serengeti plains (January to March), moving northwest through the Serengeti (April to June), then massing at the Mara River (July to October). From August into September, a significant portion of the herd crosses into Kenya's Masai Mara and returns. You can see major crossings from both sides. The Tanzania side at Kogatende tends to have fewer vehicles and stricter TANAPA enforcement than the Kenyan side. The Tanzania circuit also pairs the crossings with Ngorongoro Crater, which Kenya cannot match.",
      },
      {
        question: "Is the Tanzania side better than Kenya for the crossing experience?",
        answer:
          "Different, with practical advantages on the Tanzania side. TANAPA enforces vehicle caps per crossing point and requires vehicles to hold position and stay 25 metres from the bank. The Masai Mara crossings historically had higher vehicle volumes with less enforcement, though Kenya has improved regulation in recent years. Tanzania gives you a controlled crossing experience. Kenya gives you more total crossing events because the herds oscillate. Many serious wildlife photographers prefer the Tanzania side for the terrain at Crossings 4 and 5 and the discipline at the crossing points.",
      },
      {
        question: "Where should I be based — Kogatende or the Lamai Wedge?",
        answer:
          "Both access the same crossing points. The difference is bank and light. Kogatende (south bank): Sayari Camp (Asilia Africa), Lemala Kuria Hills, Serengeti Bushtops. Morning light is best from this side, with herds approaching the water front-lit before 9:00am. Lamai Wedge (north bank): Lamai Serengeti (Nomad Tanzania), Singita Mara River Tented Camp. Afternoon light is best from the north, with warm sidelight on animals emerging from the river. We book based on availability and your dates.",
      },
      {
        question: "Is August or September better for the migration?",
        answer:
          "August for volume. September for the overall experience. In August the full herd is concentrated at Kogatende, crossing events are most frequent, and the drama is at its peak. Vehicle numbers at the famous crossing points are also at their highest. In September the crossing frequency is comparable, vehicles thin noticeably, the sun angle is lower, and conditions for photography are arguably better. Several operators with decades on this route describe September as the strongest month for the experience-to-crowd ratio. Prices are similar or slightly lower than August.",
      },
      {
        question: "How much should I tip?",
        answer:
          "The standard in Tanzania is $25 per day for your driver-guide, paid directly on the last day. Lodge staff: $5-7 per night via the envelope at reception. For this 10-day itinerary with one guide and nine nights, the total tipping budget is roughly $225 for the guide and $50-65 for lodge staff. Tips form a genuine part of guide income in Tanzania.",
      },
    ],
    additionalSections: [
      {
        heading: "Migration Calendar: Month by Month",
        body: "The migration runs on rainfall, not calendar. Year-to-year variance in arrival timing can be four to six weeks. The 2024 season saw the first Mara crossing on June 29th, unusually early. Treat the windows below as central tendencies.\n\nJune. The bulk of the herd is in the Western Corridor, approaching or crossing the Grumeti River. Grumeti crossings typically run from late May through early July. The Grumeti is narrower than the Mara (10 to 50 metres), crossing groups are smaller, and vehicle counts are much lower. The crocodile pods here are famously large: wildlife surveys from the 1990s recorded roughly three times the crocodile density of comparable Mara stretches. Worth seeing on its own terms, but it is not the Mara.\n\nJuly. Transition. The vanguard reaches Kogatende mid-month in a typical year. Visitors arriving in the first half of July are better positioned starting in the Western Corridor and moving north rather than committing to Kogatende from day one. The first crossings of the season tend to be intense per-event (hungry crocodiles, smaller initial crowds) but timing is uncertain.\n\nAugust. Peak. Herds concentrated in the Kogatende and Lamai Wedge areas. The most active crossing points are 4 and 5 (most dramatic), 2 (most photogenic), 7 and 10 (most consistent). Crossings cluster: multiple events in one morning, then days of massing without a crossing. Vehicle counts at the famous points are at their highest.\n\nSeptember. Comparable to August for crossings, materially fewer vehicles. Herd density at Kogatende slowly declines as a growing fraction has crossed into Kenya or begun the southward turn. Major crossings still occur throughout the month. The best month for the experience-to-crowd ratio. Photography conditions improve: lower sun angle, drier air.\n\nOctober. Tail end with real risk. Crossings still occur in early to mid October. Nomad Tanzania recorded a Mara crossing on October 16th, 2024. After October 20th, the odds drop sharply in a typical year and short rains can trigger sudden southward movement. An October booking past the 20th is a genuine gamble.",
      },
      {
        heading: "What Happens at a Mara River Crossing",
        body: "Wildebeest have no permanent dominance hierarchy. Any individual can initiate a crossing, which is why crossings cannot be predicted to the hour.\n\nBehavioral research (Torney, Hopcraft et al., 2018, Philosophical Transactions of the Royal Society B) documents the mechanism: a small committed minority at the water's edge, sometimes fewer than a dozen animals, can tip the collective calculation of a herd of thousands. Once one wildebeest enters the water, the surrounding mass follows. The flip from hesitation to full commitment can happen in under a minute. Herds have also been documented massing on the bank for multiple days before turning back. This is a false start, not a malfunction.\n\nThe Mara at Kogatende has ten to twelve designated crossing points. Crossings 4 and 5 are the most dramatic; Crossing 2 is the most photogenic; Crossings 9 through 12 have the fewest vehicles. Guides track herd positions through field contacts each morning.\n\nTANAPA's June 2024 crossing guidelines require vehicles to hold position at designated points, maintain 25 metres from the bank, stay stationary during crossing events, and never allow disembarking. In August 2025, TANAPA issued one-year professional bans to six guides from major operators, including Asilia and Nomad, for allowing guests to leave the vehicle at a crossing. The rules are actively enforced. Foot presence at the bank causes false starts and disrupts the crossing decision. Jumbo Safaris follows the rules. Every drive.",
      },
      {
        heading: "Northern Serengeti Camps and How to Get There",
        body: "The camps within 30 minutes of the Mara crossing points divide by bank.\n\nSouth bank (Kogatende side): Sayari Camp (Asilia Africa), Olakira Migration Camp (Asilia Africa, mobile June to October), Serengeti Bushtops, Lemala Kuria Hills. Morning light is best from this side: approaching herds are front-lit before 9:00am.\n\nNorth bank (Lamai Wedge): Lamai Serengeti (Nomad Tanzania), Singita Mara River Tented Camp. Afternoon light is best here, with warm sidelight on animals emerging from the water.\n\nAll of these camps are seasonal, typically June through October, and August dates book out months in advance.\n\nGetting there: two options. Driving from Arusha to the central Serengeti takes six to seven hours on paved road. Then Seronera to Kogatende is another 160 to 170 km on murram and dirt track, five to six hours in dry conditions. Night driving inside the park is not allowed. The drive through the Lobo Hills is a game drive throughout. Flying is the faster option: Coastal Aviation operates scheduled flights from Arusha to Kogatende Airstrip (GTZ), roughly 1.5 hours with intermediate stops. Flying removes two long transit days and adds one to two crossing sessions on a 10-day itinerary. Ask about fly-in pricing when you enquire.\n\nPractical note: dawn at Kogatende in July through October runs 8 to 15 degrees Celsius. Bring a fleece for early departures.",
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
    heroImage: {
      src: "/zanzibar-beach-resort-honeymoon-tanzania.jpg",
      alt: "Thatched beach bungalows on white coral sand with turquoise Indian Ocean water in Zanzibar, Tanzania",
    },
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
  "5-day-northern-circuit": {
    slug: "5-day-northern-circuit",
    title: "5-Day Northern Circuit Safari",
    duration: "5 Days",
    parks: "Tarangire · Serengeti · Ngorongoro · Lake Manyara",
    price: "From $1,900 pp",
    season: "Year-round",
    description:
      "5-day private Tanzania safari covering Tarangire, the central Serengeti, Ngorongoro Crater, and Lake Manyara. Four nights, private 4x4, full-board lodges. The shortest route that covers the northern circuit properly. From $1,900 per person.",
    leadParagraph:
      "Five days is tight for the northern circuit. It works if you accept one thing: you are here to see the parks, not to become familiar with them. One afternoon in Tarangire for the baobabs and the elephants. One full day in the Serengeti for scale and predators. One full day on the Ngorongoro Crater floor because nothing else in Africa replicates what happens inside that caldera. Lake Manyara on the way home, for the Ghost Forest alone. What you lose is the slow morning, the second chance at something you missed, the third Serengeti day when you stop watching the clock entirely. If that tradeoff fits your schedule, this is the route.",
    overview:
      "The 5-day northern circuit covers four parks in four nights. Tarangire gets one afternoon. The Serengeti gets one full day. Ngorongoro gets a full crater descent. Lake Manyara gets a half-day on the return to Arusha. None of these are wasted. Day 2 is the honest one: the drive from Tarangire to the Serengeti via Olduvai Gorge takes five to seven hours. You arrive in the Seronera area in late afternoon and fit in a short drive before dark. That is how the itinerary works — most of Day 2 is transit. The upside is that every subsequent day is purely game viewing. Seven days is a more satisfying trip. Eight days is the version we recommend. But for people whose schedule is fixed, this route covers the essential Tanzania without shortcuts.",
    quickFacts: {
      duration: "5 Days / 4 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro, Lake Manyara",
      accommodation: "Mid-range lodges and tented camps",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "Year-round (dry season June-October is easiest for spotting)",
    },
    days: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        activities:
          "Pickup from Arusha at 7:00am. The drive to Tarangire's main gate takes about two hours, heading southeast through Maasai village country before the acacia scrub thickens and the first baobabs appear. Some of these trees predate the Roman Empire. Enter through the main gate and head directly for the Tarangire River, where elephant concentrations in the dry season are the highest of any park on the northern circuit — herds of 150 or more are common along the riverbanks. Three hours of game driving before sunset check-in. One afternoon is not enough for Tarangire. It is enough to show you what is here.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Tarangire to Central Serengeti via Olduvai Gorge",
        activities:
          "Early breakfast, then the long drive. Tarangire to the Serengeti via Olduvai Gorge takes five to seven hours depending on stops and road conditions. You climb through the Ngorongoro highlands, pass through the Conservation Area, and stop at Olduvai Gorge before Naabi Hill Gate. In 1959, Mary Leakey found the skull of Paranthropus boisei here, a hominid who walked these plains 1.8 million years ago. The resident guide does a 20-minute talk at the excavation site. Arrive in the Seronera area in late afternoon for a first game drive on the plains. This is primarily a transit day. The driving is the cost of a 5-day itinerary.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Full Day Serengeti",
        activities:
          "Full day in the park. The Seronera Valley runs through the centre of the Serengeti and is the most consistent area for big cats year-round, regardless of where the migration herds are. Leopards rest in the sausage trees above the river. Lions claim the kopjes, granite outcrops 600 million years old, visible for kilometres across the open plains. Cheetahs work the short-grass south of the valley where visibility is longest. Out of everything on this route, this is the day with the most room to breathe. Optional: hot air balloon departure at 5:30am, one hour over the plains, champagne bush breakfast on landing. $590 per person, booked in advance. The balloon works on this day — not Day 4, when transit to Ngorongoro makes a 5:30am departure impractical.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Short morning game drive before departing through Naabi Hill Gate. The drive to the crater rim takes about three and a half hours, climbing the outer caldera slopes through montane forest thick with olive trees and giant heather. Arrive at the rim in time for lunch. The crater floor is 600 metres below. On a clear afternoon you can see the dark shapes of animal herds from the lodge terrace. Early dinner and sleep. The descent begins at 6:00am.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Ngorongoro Crater, then Lake Manyara en route to Arusha",
        activities:
          "Descent onto the crater floor at 6:00am. The Ngorongoro Crater holds approximately 25,000 large mammals inside 260 square kilometres of enclosed caldera that the animals rarely leave: roughly 120 lions, 50 black rhino at Gorigor Swamp, 15,000 wildebeest. Picnic lunch at Ngoitokitok Springs. Begin ascent by 1:00pm to allow time for Lake Manyara. The route back to Arusha passes directly through Mto wa Mbu at the base of the rift valley escarpment, right at Lake Manyara's entrance gate. Stop for two hours in the park. The reason is the Ghost Forest: an acacia woodland permanently flooded since lake levels rose around 2020, skeleton trees standing in alkaline water with fish eagles nesting at eye level and flamingos wading beneath them. Nothing else on this route looks like it. Arrive Arusha early evening.",
        accommodation: "End of safari",
        meals: "Breakfast, Lunch",
      },
    ],
    included: [
      "All park entrance fees (Tarangire, Serengeti, Ngorongoro, Lake Manyara) and Ngorongoro crater vehicle fee ($295 per vehicle)",
      "Private 4x4 Toyota Land Cruiser with pop-up roof",
      "Professional English-speaking guide, Arusha-based",
      "4 nights accommodation as specified",
      "All meals full-board (lunch on Day 1 through lunch on Day 5)",
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
      "Hot air balloon safari (optional, $590 per person — see Day 3)",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
    ],
    faqs: [
      {
        question: "Is 5 days enough for a Tanzania safari?",
        answer:
          "Five days is a minimum, not an ideal. You will see all four parks and come away with a genuine safari experience. What you will not have is the unhurried feeling of a longer trip: the third Serengeti morning when you stop counting and start watching, the afternoon in Tarangire with no agenda. Seven to eight days is what most experienced safari travellers consider a satisfying trip. If five days is what your schedule allows, this route covers the northern circuit honestly. It does not pretend otherwise.",
      },
      {
        question: "Will I see the Big Five on a 5-day safari?",
        answer:
          "You have a real chance at four of the five. Lion: very likely in both the Serengeti and Ngorongoro Crater. Elephant: near-certain in Tarangire. Buffalo: common across all three parks. Leopard: possible in the Serengeti, particularly in the Seronera Valley sausage trees, but not guaranteed on a single full day. Rhino: the best chance in East Africa is Ngorongoro Crater, where approximately 50 black rhino live in 260 square kilometres. Your guide will check morning positions. The honest answer is that five days gives you good odds but not certainty on all five. Eight days gives you more attempts.",
      },
      {
        question: "What does 5 days miss compared to a longer safari?",
        answer:
          "Tarangire: the Silale Swamp in the south, which draws hippos, buffalo, and species (gerenuk, fringe-eared oryx) that most visitors to the park never reach. One afternoon is not enough to get there. The Serengeti: the third day, which is when the routine of game viewing settles and you start noticing things you missed. The central and western Serengeti zones beyond Seronera. Lake Manyara: we add a two-hour Ghost Forest stop on Day 5, which is better than nothing. A full Lake Manyara day (tree-climbing lions, alkaline lake, forest edge) is a different experience. If any of these are high priorities, the 8-day itinerary is the right choice.",
      },
      {
        question: "How much does a 5-day Tanzania safari cost?",
        answer:
          "The Jumbo Safaris 5-day northern circuit starts from $1,900 per person for two people sharing. The price includes all park fees (including the $295 Ngorongoro crater vehicle descent fee), private 4x4, guide, four nights accommodation, and all meals. It excludes the Tanzania eVisa ($50 for most nationalities), international flights, travel insurance, and guide gratuity (suggested $25 per day). The budget equivalent from shared group operators runs $800-1,200 per person for 5 days but puts you in a shared vehicle with strangers on a fixed departure date.",
      },
      {
        question: "Should I add Zanzibar to a 5-day safari?",
        answer:
          "It depends on what you want. The safari-to-beach combination is one of the strongest itineraries Tanzania offers, and Zanzibar adds a genuinely different second act. The logistics work: a Coastal Aviation flight connects Arusha to Zanzibar in about two hours, departing most mornings. Adding four nights on the island turns this into a 9-day trip from $2,800 per person. If your time in Tanzania is already five days total, prioritise the safari. If you have nine or ten days available, the combination is the better choice.",
      },
      {
        question: "What is the Ngorongoro crater vehicle fee?",
        answer:
          "Ngorongoro charges a separate $295 per-vehicle descent fee, on top of the standard NCA conservation fees per person per day. This covers one full day on the crater floor. All vehicles must exit by 6:00pm. The fee is included in your Jumbo Safaris package price.",
      },
      {
        question: "When is the best time to do the 5-day northern circuit?",
        answer:
          "The route works year-round. June through October (dry season) gives the best conditions for spotting: short grass, animals concentrated around water sources, firm tracks. January and February bring calving season to the southern Serengeti plains, which is the most dramatic predator activity in the ecosystem — but benefiting from that on this route requires positioning in Ndutu rather than the central Serengeti, which means a different itinerary. November and December have the short rains: dramatically green landscapes, very few other tourists, lower lodge rates. April and May are the long rains; some roads become difficult.",
      },
      {
        question: "Can this route be extended?",
        answer:
          "Yes. The most straightforward extension adds two nights in the Serengeti, turning this into a 7-day route with three full Serengeti days. A single extra night in Tarangire is worthwhile if elephants are the priority. The 8-day classic adds both. Contact us with your dates and we will adjust and requote.",
      },
    ],
  },
  "11-day-tanzania-zanzibar": {
    slug: "11-day-tanzania-zanzibar",
    title: "11-Day Tanzania & Zanzibar",
    duration: "11 Days",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    price: "From $3,800 pp",
    season: "Year-round",
    description:
      "11-day Tanzania safari and Zanzibar beach trip. Six nights on the northern circuit covering Tarangire, Serengeti, and Ngorongoro, then a Coastal Aviation flight to Zanzibar for four nights on the Indian Ocean coast. From $3,800 per person.",
    leadParagraph:
      "Six nights on safari, four nights at the coast. The northern circuit first, then a flight east to Zanzibar. The combination works because the two halves are genuinely different: bush versus beach, cold mornings and elephant dust versus warm water and coral sand. Most people who do one want the other. This route gives you both without feeling rushed in either.",
    overview:
      "The safari leg covers Tarangire (one night), the central Serengeti (two nights), and two nights at Ngorongoro: one evening on the rim watching the sun set over the caldera, then a full day on the crater floor before driving to Arusha and flying to Zanzibar on Day 8. Four nights on the island, with the coast matched to your travel dates. The safari is tighter than the 8-day classic but every park is properly included: an afternoon in Tarangire for the baobabs and elephants, two Serengeti days for big cats and scale, a full crater day with 120 lions and 50 black rhino on the floor. Zanzibar adds Stone Town, four days at the Indian Ocean, and the transition that most Tanzania trips skip entirely.",
    quickFacts: {
      duration: "11 Days / 10 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro, Zanzibar",
      accommodation: "Mid-range lodges and beach property",
      groupSize: "Private (2-6 guests)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "Year-round (see FAQ for seasonal notes)",
    },
    days: [
      {
        day: 1,
        title: "Arrive Arusha",
        activities:
          "Transfer from Kilimanjaro International Airport to your Arusha hotel, about 45 minutes on a clear day. Rest, early dinner, briefing on the route. First game drive is in the morning.",
        accommodation: "Onsea House or similar (Arusha)",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Arusha to Tarangire",
        activities:
          "Pickup at 7:00am. Two-hour drive southeast to Tarangire's main gate. The Tarangire River is the dry-season anchor for wildlife across the region. Enter and head directly for it. Elephant herds of 150 or more are common along the riverbanks in the dry months. The baobabs here are a different scale from anything in the Serengeti, some of them over a thousand years old. Afternoon game drive before sunset check-in.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 3,
        title: "Tarangire to Central Serengeti via Olduvai Gorge",
        activities:
          "Early breakfast, then the six-hour drive to the Serengeti. You climb through the Ngorongoro highlands, pass through the Conservation Area, and stop at Olduvai Gorge before Naabi Hill Gate. In 1959, Mary Leakey found the skull of Paranthropus boisei here, a hominid who walked these plains 1.8 million years ago. The resident guide does a 20-minute talk at the excavation site. Arrive in the Seronera area in late afternoon for a first game drive on the central plains.",
        accommodation: "Kati Kati Tented Camp or similar (Seronera area)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full Day Serengeti",
        activities:
          "Full day in the Seronera Valley, the most consistent big-cat zone in the Serengeti year-round. Leopards in the sausage trees above the river. Lions on the kopjes, granite outcrops 600 million years old. Cheetahs on the short-grass plains to the south. The prey density in the valley is what keeps predators here regardless of where the migration herds are.",
        accommodation: "Kati Kati Tented Camp or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Serengeti",
        activities:
          "Second full day. Your guide tracks current sightings from the field network and positions accordingly. Optional: hot air balloon departure at 5:30am, one hour over the plains, champagne bush breakfast on landing. $590 per person, booked in advance. The afternoon is best spent in a different area from the morning. Your guide will suggest where based on what is active.",
        accommodation: "Kati Kati Tented Camp or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Morning game drive in the Serengeti, then depart through Naabi Hill Gate. Three-and-a-half-hour drive to the crater rim, climbing through montane forest thick with olive trees and giant heather. Arrive in time for lunch. The crater floor is 600 metres below you. On a clear afternoon you can see the animal herds from the lodge terrace. Early dinner. The descent begins at 6:00am.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro Crater — Full Day on the Floor",
        activities:
          "Descent at 6:00am before the tourist vehicles arrive. The track drops 600 metres through cloud forest over 30 minutes of switchbacks. On the crater floor: approximately 120 lions, 50 black rhino at the densest population in East Africa, 15,000 wildebeest, 400 spotted hyenas, 9,000 zebra, all inside 260 square kilometres of enclosed caldera the animals rarely leave. Lake Magadi draws flamingos and hippos on the western floor. Picnic lunch at Ngoitokitok Springs, where the hippo pool is close enough to require no binoculars. All vehicles ascend by 6:00pm. Tonight is the last night in Tanzania's bush.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Ngorongoro to Arusha, then Fly to Zanzibar",
        activities:
          "Leave the rim by 8:00am. The drive to Arusha takes about three hours, arriving by 11:00am. Coastal Aviation scheduled service from Arusha Airport (ARK) departs at 12:45, arriving Zanzibar at approximately 14:20 (1 hour 35 minutes flight time, with potential intermediate stops at Serengeti or Manyara airstrips). Important: this is not a nonstop flight; Coastal's own schedule notes the aircraft waits for connections. Plan to be at ARK by 11:45am. Transfer to your beach property on arrival. The afternoon is yours.",
        accommodation: "Beach property, north or east coast Zanzibar",
        meals: "Breakfast",
      },
      {
        day: 9,
        title: "Zanzibar — Stone Town",
        activities:
          "Morning on the beach. Afternoon in Stone Town, a UNESCO World Heritage Site (listed 2000) about 20 minutes from most north coast properties. The old town is a compact Arab trading city: two styles of carved wooden doors (Omani rectangular, Indian round-topped), narrow alleyways, and the history of the East African spice trade. The last open slave market closed here in 1873 under the Frere Treaty. Christ Church Cathedral was built directly on the site, opened on Christmas Day 1879. The East Africa Slave Trade Exhibit and underground slave cells are both accessible on site. The Freddie Mercury family home is on Shangani Road, open daily 10am to 6pm. Mercury (born Farrokh Bulsara on 5 September 1946) grew up in this building. Spice tours depart from Kizimbani village, about 25 minutes from Stone Town, not from the city itself. Forodhani Gardens night market operates daily from about 6pm: Zanzibar pizza, urojo soup, grilled lobster and octopus, sugar cane juice, coconut water. This is dinner.",
        accommodation: "Beach property, north or east coast Zanzibar",
        meals: "Breakfast",
      },
      {
        day: 10,
        title: "Zanzibar — Reef Snorkelling and Last Full Day",
        activities:
          "The main excursion option today is the Mnemba Atoll reef. The atoll is roughly 3 km offshore from the northeast coast (Matemwe), about 10 to 20 minutes by boat. Important distinction: the island itself is private (&Beyond holds the lease) with a 200-metre exclusion zone. Non-guests access the surrounding reef, not the island. The reef holds approximately 600 fish species, green sea turtles (Chelonia mydas, nesting February through September), and spinner and Indo-Pacific bottlenose dolphins typically encountered on the channel crossing. Entry fees apply: $10 adult for general reef access, $25 adult for the inner Marine Special Area (both enforced since 2023-24). Day trip through a local operator typically costs $60 to $85 per person. Best visibility is June through October and December through February. Alternatively: a spice tour at Kizimbani plantation (three hours, approximately $30 per person), or the beach. Last evening in Tanzania.",
        accommodation: "Beach property, north or east coast Zanzibar",
        meals: "Breakfast, Dinner",
      },
      {
        day: 11,
        title: "Departure from Zanzibar",
        activities:
          "Breakfast, checkout, transfer to Zanzibar International Airport (ZNZ). Most international connections go via Nairobi, Doha, Dubai, or Addis Ababa. Allow at least three hours for a Nairobi connection; the domestic-to-international transfer is slow. Note: Zanzibar requires a mandatory ZIC insurance payment of $44 on arrival (enforced since October 2024). This is collected at the port or airport and is separate from your Tanzania eVisa.",
        accommodation: "End of trip",
        meals: "Breakfast",
      },
    ],
    included: [
      "All Tarangire, Serengeti, and Ngorongoro park and conservation fees",
      "Ngorongoro crater vehicle descent fee ($295 per vehicle)",
      "Private 4x4 Toyota Land Cruiser with pop-up roof for the safari leg",
      "Professional English-speaking guide, Arusha-based",
      "7 nights safari accommodation (1 Arusha, 1 Tarangire, 2 Serengeti, 2 Ngorongoro) + 4 nights Zanzibar",
      "Full-board on safari (Days 1-7), breakfast on Day 8, breakfast and dinner in Zanzibar (Days 9-11)",
      "Bottled water and soft drinks on game drives",
      "All road transfers on the safari circuit",
      "Coastal Aviation scheduled service Arusha to Zanzibar (one-way per person)",
      "AMREF Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International flights",
      "Tanzania eVisa (US citizens: $100; most other nationalities: $50 — apply at visa.immigration.go.tz)",
      "Zanzibar mandatory ZIC insurance ($44 per person, collected on arrival)",
      "Travel insurance (required)",
      "Guide gratuity (suggested $25 per day for 6 safari days)",
      "Lodge staff gratuity (suggested $5-7 per day)",
      "Hot air balloon safari ($590 per person, optional — see Day 5)",
      "Mnemba reef entry fees ($10-$25 per person)",
      "Zanzibar snorkelling excursions and optional activities",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    faqs: [
      {
        question: "How many days do you need for Tanzania and Zanzibar?",
        answer:
          "Eleven days covers the combination well: six safari days across three parks plus four nights at the coast. You do not feel rushed in either half. If your priority is the Serengeti specifically, the 8-day classic safari plus a four-night Zanzibar extension gives you more time in the bush. Fourteen days total is the version where nothing feels tight. Anything under nine days means choosing between a proper safari and a proper beach stay.",
      },
      {
        question: "Which coast of Zanzibar will we stay on?",
        answer:
          "We book the coast that matches your travel dates. The north coast (Nungwi, Kendwa) has no offshore reef barrier, so deep water reaches the beach regardless of tide. Swimming is viable year-round, and the northeast monsoon from November through March does not create rough conditions on this coast. The east coast (Paje, Jambiani) is a different situation. The spring tidal range at Jambiani reaches 4.3 metres, and the sea recedes 200 to 500 metres at low tide for roughly six to eight hours per day. Swimming is viable in about two-hour windows either side of high tide. June through October, southeast trade winds turn the east coast into a world-class kitesurf destination and a poor beach for casual swimming. We put June-to-October travellers on the north coast by default unless kitesurfing is the point.",
      },
      {
        question: "Is the safari leg rushed at six nights?",
        answer:
          "Compared to the 8-day classic, Tarangire is one afternoon rather than two days, and the Serengeti is two full days rather than three. Every park is covered properly: you see elephants in Tarangire, big cats in the Seronera Valley, and a full crater day at Ngorongoro with 120 lions and 50 black rhino in 260 square kilometres. What you lose is the third Serengeti morning when the routine settles and you stop counting. If the Serengeti is the priority, the 8-day classic is the better route. If the combination of safari and beach matters equally, this itinerary is the right balance.",
      },
      {
        question: "How do we get from the safari to Zanzibar?",
        answer:
          "Coastal Aviation runs a scheduled service from Arusha Airport (ARK) departing at 12:45 and arriving Zanzibar at approximately 14:20. The flight time is about 1 hour 35 minutes, though the aircraft typically makes intermediate stops at Serengeti or Manyara airstrips on the circuit. This is a scheduled service, not a nonstop flight. On this itinerary, you leave the Ngorongoro rim at 8:00am, arrive in Arusha by 11:00am, and are at the airport well before the 12:45 departure. A second departure at 10:30am operates July through September only.",
      },
      {
        question: "Do we need a separate visa for Zanzibar?",
        answer:
          "No. Zanzibar is part of Tanzania. Your Tanzania eVisa covers the island. Apply at visa.immigration.go.tz before departure (not evisa.go.tz, which is no longer the correct address). Processing is officially 10 working days but in practice ranges from 3 days to 3 weeks. Apply at least two weeks before travel. Visa-on-arrival was suspended on 30 January 2025 — eVisa is now the required method for all nationalities. Fees: $50 for most nationalities (UK, EU, Australia, Canada). US citizens pay $100 for a mandatory Multiple Entry visa. Irish passport holders also pay $100.",
      },
      {
        question: "What is the Zanzibar mandatory insurance?",
        answer:
          "Since October 2024, all foreign visitors entering Zanzibar must pay $44 for ZIC (Zanzibar Insurance Certificate) insurance on arrival. It provides 92 days of medical, repatriation, and evacuation coverage. The fee is collected at Zanzibar airport or the ferry terminal and is fully enforced. Most safari operator websites do not mention this. It is not included in our package price.",
      },
      {
        question: "Is Zanzibar worth adding after a Tanzania safari?",
        answer:
          "Yes. The contrast is the point. Safari mornings start at 6:00am, cold, in a Land Cruiser. Zanzibar mornings start when you wake up, warm, with the Indian Ocean 30 metres from your room. They are different enough that one genuinely resets you from the other. The flight connection from Arusha is straightforward. One Tanzania eVisa covers both. The coast adds a genuinely different second act to the trip rather than just extending the safari.",
      },
      {
        question: "How does this compare to the honeymoon safari?",
        answer:
          "The honeymoon safari has one more safari night (seven versus six) and includes couples-specific additions: champagne on arrival at each lodge, private sundowners, a crater-floor picnic at Ngorongoro, and a sunset dhow cruise in Zanzibar. It is priced from $5,500 per person versus $3,800 for this route. The 11-day Tanzania and Zanzibar itinerary is the same core circuit without the honeymoon-specific setup. Both routes are entirely private.",
      },
    ],
    additionalSections: [
      {
        heading: "Zanzibar Coasts: Which One and When",
        body: "Most itineraries say 'Zanzibar' without explaining that the island's coasts behave differently depending on when you travel.\n\nThe north coast (Nungwi, Kendwa) works year-round. There is no offshore reef to create a tidal flat, so deep water reaches the beach at all tides. The northeast monsoon (Kaskazi, November through March) produces livelier conditions in open water but does not make the north coast rough for swimming. This is the default coast for June through October travel.\n\nThe east coast (Paje, Jambiani, Bwejuu) requires more thought. The tidal range reaches 4.3 metres at Jambiani, and the sea recedes 200 to 500 metres at low tide for six to eight hours per day. Swimming is possible in roughly two-hour windows either side of high tide. Most east coast hotels publish tide charts for this reason. June through October, the southeast trade winds (Kusi) hit the east coast directly and the beach becomes a world-class kitesurf destination. If kitesurfing is not the plan, the east coast in those months is the wrong choice.\n\nBest east coast window: October through March, when the Indian Ocean is calm and snorkelling visibility at Mnemba is clearest. Avoid April (385mm of rain, 18 rain days, about 6 hours of sun per day). December is wetter than most operator websites suggest, around 185mm, but manageable.\n\nWe book the right coast based on your travel dates. We do not default to one location.",
      },
      {
        heading: "Mnemba Atoll: What the Reef Access Actually Means",
        body: "&Beyond holds the long-term lease on Mnemba Island under the Government of Zanzibar. The island has 12 bandas and a 200-metre marine exclusion zone around the shoreline. Non-guests cannot land on the island or enter that zone.\n\nThe surrounding reef is different. The Mnemba Atoll reef is publicly accessible under the Mnemba Island Marine Conservation Area (MIMCA) designation. A more restricted inner zone (Mnemba Island Marine Special Area, proclaimed December 2023) operates with a maximum of 8 boats per day, no anchoring, and defined access hours.\n\nEntry fees as of mid-2025: $10 adult for general reef access, $25 adult for the inner Marine Special Area. Fees are collected by MIMCA on the water and are often bundled into day-trip pricing.\n\nThe reef holds approximately 600 fish species including Napoleon wrasse, regal angelfish, and blue-spotted rays. Green sea turtles (Chelonia mydas) nest at Mnemba from February through September. Spinner dolphins and Indo-Pacific bottlenose dolphins are regularly encountered on the channel crossing from Matemwe, roughly 3 km and 10 to 20 minutes by boat. Humpback whales pass through July through September. Best visibility is June through October and December through February, up to 20 to 30 metres in optimal conditions.\n\nDay trips from the northeast coast run $60 to $85 per person through local operators. The trip is worth booking through your resort rather than independently to avoid overloaded boats.",
      },
      {
        heading: "Visas and Entry — Updated for 2025",
        body: "Tanzania eVisa is the required entry method for all nationalities. Visa-on-arrival was suspended on 30 January 2025; multiple foreign ministries (France, Canada, UK) have updated their advisories accordingly. Apply online at visa.immigration.go.tz — not evisa.go.tz, which is no longer the correct address.\n\nFees: most nationalities (UK, EU, Australia, Canada) pay $50 for a single-entry visa valid 90 days. US citizens pay $100 for a mandatory Multiple Entry visa valid 12 months — they cannot choose the $50 single-entry option. Irish passport holders also pay $100. Apply at least two weeks before departure. Official processing time is 10 working days; in practice this ranges from 3 days to 3 weeks.\n\nYour Tanzania eVisa covers both mainland Tanzania and Zanzibar. You fill in a short second immigration form on the Coastal Aviation flight to Zanzibar. It takes about three minutes.\n\nZanzibar mandatory insurance: since October 2024, all foreign visitors arriving in Zanzibar must pay $44 for the ZIC (Zanzibar Insurance Certificate) on arrival. This covers 92 days of medical care, repatriation, and emergency evacuation. It is collected at Zanzibar airport or the ferry terminal and is fully enforced. As of June 2025 over $20 million had been collected. It is not optional and it is not included in your safari package price.\n\nYellow fever vaccination: not required if you are travelling directly from the US, UK, EU, Canada, or Australia. It is required if you have spent 12 or more hours in transit through Nairobi, or if you leave the transit zone at any point during a layover, even briefly. Under 12 hours airside-only at Nairobi: not required. Confirm your specific itinerary with a travel medicine clinic before departure.",
      },
    ],
  },
  "family-safari": {
    slug: "family-safari",
    title: "Family Safari Tanzania",
    duration: "8 Days",
    parks: "Tarangire · Serengeti · Ngorongoro",
    price: "From $2,800 pp",
    season: "Year-round",
    description:
      "8-day private family safari in Tanzania. Tarangire, Serengeti, and Ngorongoro Crater on the northern circuit, paced for children aged 5 and up. Private vehicle, booster seats provided, guide briefed for mixed-age groups. From $2,800 per person.",
    leadParagraph:
      "The Serengeti is one of the few places where a child looks out the window and the explanation requires no embellishment. The real thing is right there. No zoo framing, no distance. This is the standard 8-day northern circuit, run privately, with the pacing adjusted for children and the guide briefed specifically for mixed-age groups. Same parks, same wildlife. Different approach to what you stop for and how long you stay.",
    overview:
      "The northern circuit works well for families because it is entirely vehicle-based. Children stay in the Land Cruiser for game drives. There are no bush walks, no early-morning hikes, and no activities that require a minimum adult fitness level. What changes on a family safari is pace and structure: shorter morning drives (6:30am to 11:30am rather than 6:00am to 12:30pm), afternoon pool and rest for younger children, guides who explain what they are seeing in terms children can use, and lodge selection that accounts for meal times and early bedtimes. Family rooms or interconnecting rooms are specified at booking. Early dinner service (6:00-6:30pm) is confirmed in advance at each property.\n\nThe parks are the same regardless of who is travelling. Tarangire for elephants and baobabs. Serengeti for scale, predators, and the kind of open space that children have no reference point for. Ngorongoro Crater for the highest wildlife density in Africa inside a single enclosed area. Children respond to all of this differently from adults, but the consistent report from families who have done this trip is that children are more absorbed, not less.",
    quickFacts: {
      duration: "8 Days / 7 Nights",
      parksVisited: "Tarangire, Serengeti, Ngorongoro",
      accommodation: "Family-friendly mid-range lodges",
      groupSize: "Private (your family only)",
      departsFrom: "Arusha, Tanzania",
      bestSeason: "July-August and December-January (school holidays); year-round otherwise",
    },
    days: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        activities:
          "Pickup from your Arusha hotel at 7:30am. The drive to Tarangire takes about two hours. Watch for the first baobabs as the road enters the park's outer zone — some of them are over a thousand years old. At Tarangire's main gate, enter and head directly for the river. In the dry season, elephant concentrations here are the highest of any park on the northern circuit, with herds of 150 or more common along the Tarangire River. Three hours of game driving before sunset check-in. Most family lodges can arrange dinner at 6:30pm for early bedtimes.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Full Day Tarangire",
        activities:
          "Full day in the park. Morning drive from 6:30am. The Silale Swamp in the south draws buffalo, wildebeest, and hippos. Tarangire also has species absent from the other parks on this route: the fringe-eared oryx, the gerenuk (a long-necked antelope that browses standing upright on its hind legs), and tree-climbing pythons coiled in the riverside fig trees. Children consistently spot the pythons before adults do. Give each child a pair of binoculars: at this age, a distant smudge becomes a giraffe, which changes the entire game drive. Picnic lunch in the park. Afternoon drive before returning for early dinner.",
        accommodation: "Tarangire Safari Lodge or similar",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Tarangire to Central Serengeti via Olduvai Gorge",
        activities:
          "Early breakfast, then the six-hour drive to the Serengeti. Stop at Olduvai Gorge: in 1959, Mary Leakey found the skull of Paranthropus boisei here, a hominid who walked these same plains 1.8 million years ago. The resident site guide does a 20-minute talk at the excavation. For children 8 and up, this is genuinely interesting, not just parental obligation. For younger children, it is a good leg-stretch. Arrive in the Seronera area in late afternoon for a first game drive on the central plains.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full Day Serengeti",
        activities:
          "Full day in the Seronera Valley, the most consistent big-cat zone in the Serengeti year-round. Lions on the kopjes, granite outcrops 600 million years old. Leopards in the sausage trees above the river. Cheetahs on the short-grass plains. Your guide briefs the whole family before each drive: what to look for, how to identify tracks and behaviour. Game viewing holds children's attention when they have a job to do — looking for the right ear shape, counting cubs, spotting which animal moved first. Return to the lodge for lunch, pool time, and rest before the afternoon drive. Afternoon drives are shortened to 4:00pm-6:00pm for younger children.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Full Day Serengeti",
        activities:
          "Three nights in the Serengeti is what makes the pace work for families. By Day 5 the children know the vehicle, the sounds, and the routine. Game viewing is more attentive and less restless. Optional: hot air balloon departure at 5:30am. Minimum age 7. Maximum weight 120 kg per passenger. $599 per person, booked in advance through Serengeti Balloon Safaris. About one hour over the plains, followed by a champagne bush breakfast on landing. For children old enough to manage the early start, it is the most memorable hour of the trip.",
        accommodation: "Serengeti Serena Safari Lodge or similar tented camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "Serengeti to Ngorongoro Crater Rim",
        activities:
          "Final Serengeti morning drive, then depart through Naabi Hill Gate. Three-and-a-half-hour drive to the crater rim through montane forest. Arrive for lunch. The crater floor is 600 metres below the rim lodge terrace. On a clear afternoon, you can see the animal herds from the table at lunch. Early dinner (most children at this point in the trip are asleep before 8pm). The crater descent begins at 6:00am.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Ngorongoro Crater — Full Day on the Floor",
        activities:
          "Descent at 6:00am before the tourist buses arrive. The track drops 600 metres through cloud forest over 30 minutes of switchbacks. On the crater floor in 260 square kilometres: approximately 120 lions, 50 black rhino at the densest population in East Africa, 15,000 wildebeest, 400 spotted hyenas, 9,000 zebra. The crater walls keep the animals inside. Picnic lunch at Ngoitokitok Springs, where the hippo pool is close enough to require no binoculars and deep enough to fascinate every age. All vehicles must ascend by 6:00pm. The crater is the day on this trip that families almost uniformly describe as the one they were not prepared for.",
        accommodation: "Ngorongoro Serena Safari Lodge or similar rim lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Ngorongoro to Arusha",
        activities:
          "Final breakfast on the rim. Three-hour drive back to Arusha via Karatu and Mto wa Mbu. Drop-off at your Arusha hotel or Kilimanjaro International Airport. If your international flight departs the same day, the earliest viable departure is 21:00.",
        accommodation: "End of safari",
        meals: "Breakfast",
      },
    ],
    included: [
      "All park entrance fees (adult and child rates) and Ngorongoro crater vehicle fee ($295 per vehicle)",
      "Private 4x4 Toyota Land Cruiser with pop-up roof",
      "Professional English-speaking guide, experienced with family groups",
      "7 nights accommodation in family rooms or interconnecting configuration",
      "All meals full-board (lunch on Day 1 through breakfast on Day 8)",
      "Bottled water and soft drinks on game drives",
      "Airport and hotel transfers in Arusha",
      "Booster seats as standard for children under 12 or under 135cm (confirm ages and weights at booking)",
      "AMREF Flying Doctors emergency evacuation insurance",
    ],
    excluded: [
      "International flights",
      "Tanzania eVisa ($50 per person for most nationalities, required for all ages including children)",
      "Travel insurance (required for all family members)",
      "Guide gratuity (suggested $25 per day)",
      "Lodge staff gratuity (suggested $5-7 per day via lodge tip box)",
      "Hot air balloon safari ($599 per person, minimum age 7, maximum weight 120kg)",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
    ],
    faqs: [
      {
        question: "What is the minimum age for this safari?",
        answer:
          "We set the minimum at 5 years old. TANAPA (the national parks authority) does not set a statutory minimum age for the parks. Five is the practical floor based on drive lengths and what a child can meaningfully engage with. Children under 5 are free for park entry under the official TANAPA fee structure; ages 5 to 15 pay a reduced child rate. We provide booster seats as standard for children under 12 or under 135cm. Confirm your children's ages and weights at booking so we have the right seats. None of the parks on this route require walking.",
      },
      {
        question: "What is the best age to take children on a Tanzania safari?",
        answer:
          "Eight to twelve is consistently described by Tanzania family specialists as the strongest age for the safari experience. Old enough to absorb what they are seeing, young enough to find it completely new. Children in this range engage actively with Big Five spotting, predator-prey behaviour, and the scale of the Serengeti in a way that 5-6 year olds reach toward and teenagers often take for granted. That said, 5-7 year olds who are comfortable in a vehicle and do not mind early starts have good trips here. The adjustments (shorter drives, more lodge time, binoculars for each child) make a real difference at the younger end.",
      },
      {
        question: "Do children need malaria tablets for Tanzania?",
        answer:
          "Yes. Malaria is present year-round in all three parks on this route. Consult a travel medicine doctor before departure. The most commonly recommended antimalarial for children aged 5 to 14 is atovaquone-proguanil (Malarone), available in pediatric tablet strength dosed by weight. It has no minimum age, only a minimum weight of 5 kg. Doxycycline is contraindicated for children under 8 due to tooth and bone development concerns. Chloroquine is not appropriate for Tanzania due to confirmed resistance. The Ngorongoro rim sits at approximately 2,300 metres, above the CDC's 1,800-metre threshold where malaria risk drops substantially. The crater floor and all Serengeti and Tarangire areas are standard risk. Zanzibar, if added, carries at least equivalent risk to the mainland. See a travel medicine clinic at least 4 weeks before departure.",
      },
      {
        question: "Are the lodges suitable for children?",
        answer:
          "The lodges on this route accept children from age 5 with no restrictions. We specify family rooms or interconnecting rooms at booking, not standard doubles. Early dinner service at 6:00-6:30pm is confirmed with each property in advance. Children's menus are available at all properties. Interconnecting rooms and family suites are limited inventory and book out earliest. Send us your children's ages when you enquire and we will confirm the specific configuration before confirming your dates.",
      },
      {
        question: "How long are the daily game drives?",
        answer:
          "We adjust the drive structure for families. Standard adult safaris run 6:00am to 12:30pm and 3:30pm to 6:30pm. For younger children, we typically run 6:30am to 11:30am and 4:00pm to 6:00pm, with the midday break at the lodge for lunch, pool time, and rest. Afternoon drives are often shortened or dropped entirely for children under 7 in favour of the lodge pool. On the crater day, the full day on the floor is necessary, but we pace stops and the picnic at Ngoitokitok accordingly.",
      },
      {
        question: "What will children enjoy most?",
        answer:
          "Ages 5-8: elephant proximity in Tarangire (a herd walking 10 metres from the vehicle is a different experience from a zoo), pythons in the fig trees, and the Ngorongoro hippo pool at the picnic stop. Binoculars are the single most important item: children without them see brown smudges; children with them become active spotters who find things before the adults. Ages 9-12: the Ngorongoro Crater as a whole, predator-prey sequences, Big Five checklist completion, and understanding what they are watching. Ages 13 and up: the scale of the Serengeti, predator behaviour, photography as a serious activity, and growing interest in conservation.",
      },
      {
        question: "Is Tanzania safe for children?",
        answer:
          "Tanzania is one of the more straightforward countries in sub-Saharan Africa for family travel. The northern circuit parks are well-managed with good roads on the main routes. Lodges on this circuit are experienced with family groups. The main health considerations are malaria prophylaxis (required for all ages), sun protection (UV Index 9-11 in the dry season at altitude, reapply SPF 50+ every two hours on open game drives), and ensuring children drink only bottled or lodge-filtered water. Rabies pre-exposure vaccination is worth discussing with your travel medicine doctor for children, who are less likely to report an animal bite or scratch in remote areas where post-exposure treatment is not immediately available.",
      },
      {
        question: "Do children pay full park entrance fees?",
        answer:
          "No. The official TANAPA 2023/24 tariff sets a child rate for ages 5 to 15 that is significantly lower than the adult rate. Children under 5 are free. At Tarangire, the child day fee is approximately $15 (versus $50 adult at peak). At the Serengeti, approximately $20 (versus $70 peak). At Ngorongoro, the NCAA child rate is approximately $23.60 (versus $70.80 adult). All TANAPA fees are VAT-exclusive; 18% is added on top. Park fees change; we confirm current rates at the time of booking. The $295 crater vehicle descent fee is charged per vehicle regardless of passenger ages.",
      },
      {
        question: "Can we extend with Zanzibar?",
        answer:
          "Yes, and it works well for families. The beach transition after safari is a natural wind-down. The north coast of Zanzibar (Nungwi, Kendwa) has deep water directly off the beach, consistent swimming year-round, and no tidal flats. Add four to five nights via a Coastal Aviation scheduled service from Arusha. Contact us and we will build the extension into the quote.",
      },
    ],
    additionalSections: [
      {
        heading: "What Changes on a Family Safari",
        body: "The vehicle, the parks, and the wildlife are identical to any other private safari. What changes is everything around those things.\n\nDrive timing. Family drives start at 6:30am rather than 6:00am, end at 11:30am rather than 12:30pm, and run 4:00pm to 6:00pm in the afternoon rather than 3:30pm to 6:30pm. For children under 7, afternoon drives are often dropped entirely in favour of lodge pool time and rest. This is a deliberate structure, not a compromise. Children who are well-rested and fed see more and remember more.\n\nGuide briefing. We brief the guide on the ages and interests of each child before departure. The guide's job changes from narrating wildlife to giving children a role: counting cubs, watching which direction the herd is moving, calling out what they spot first. Animal-spotting checklists and \"freshest tracks\" competitions make the drive active rather than passive.\n\nBinoculars. The single most consistently cited difference between a successful family safari and an average one. A distant animal through adult eyes is still recognisable. Through 5-year-old eyes without binoculars, it is a brown smudge. Bring a pair for each child (8x25 or 10x25 for small hands) and brief them on how to use them before the first drive.\n\nPop-up roof. Children can and do use the pop-up roof on game drives, with adult supervision. Your guide will ask everyone to sit down during close approaches with lion, elephant, or buffalo. Compliance is immediate. The open-air position at the pop-up is one of the experiences children remember most.",
      },
      {
        heading: "Lodge Age Policies — What to Know Before Booking",
        body: "Not every camp on the northern circuit accepts young children. Some of the most famous names in Tanzania's safari circuit impose minimum ages of 8, 10, or 12 — often because of unfenced perimeters, adult-focused ambiance, or walking-safari contexts that require a minimum age for safety. This is not arbitrary and it is not usually explained on the booking page.\n\nFor this family itinerary, we select properties that accept children from age 5 with no restrictions and have family rooms or interconnecting configurations: Tarangire Safari Lodge, Serengeti Serena Safari Lodge, and Ngorongoro Serena Safari Lodge are confirmed family-appropriate choices at mid-range pricing. At the step-up end, the Four Seasons Safari Lodge Serengeti accepts children from age 2 and runs the Kijana Klub programme (daily 10am-6pm, ages 2-17, complimentary) with Maasai warrior morning sessions, fire-starting, beadwork, and a Cheetah Watch programme for teenagers involving real camera-trap research.\n\nFamily and interconnecting rooms are limited inventory at every property. They book out before standard rooms. Send us your children's ages when you first enquire — not after you have confirmed dates.",
      },
      {
        heading: "Health, Vaccinations, and Sun",
        body: "Malaria. Atovaquone-proguanil (Malarone) is the standard first-line antimalarial for children aged 5-14 travelling to Tanzania. It comes in pediatric tablet strength dosed by weight and has no minimum age beyond a 5 kg weight threshold. Doxycycline is contraindicated for children under 8 (tooth and bone development). Chloroquine is not appropriate for Tanzania due to confirmed P. falciparum resistance. See a travel medicine clinic at least four weeks before departure for prescriptions and weight-based dosing.\n\nVaccinations. Confirm the following are current before departure: MMR (measles is active in Tanzania), polio/DTP (Tanzania has enhanced precautions as of April 2025), Hepatitis A, typhoid. Rabies pre-exposure vaccination is strongly recommended for children. In a remote area, a bite or scratch may not be reported by a young child, and post-exposure treatment is not available outside large towns. Pre-exposure simplifies management anywhere on the circuit.\n\nYellow fever is not required for direct travel from the UK, US, EU, or Australia. It is required if you have spent 12 or more hours transiting through Nairobi, or if you left the transit zone at any point.\n\nSun. Northern Tanzania sits at 3 degrees south of the equator. The UV Index in the dry season (June-October) runs 9-11, Very High to Extreme. At Ngorongoro's altitude of 2,300 metres, clear skies amplify intensity further. On open game drives there is no overhead protection. SPF 50+ broad-spectrum sunscreen, reapply every two hours. Wide-brim hats and UV-protective long sleeves are not optional.\n\nWater. Bottled or lodge-filtered water is standard at reputable mid-range northern circuit lodges including for tooth brushing. Confirm with each property at booking.",
      },
      {
        heading: "When to Go as a Family",
        body: "The northern circuit works year-round, but school holiday alignment matters.\n\nUK families. The UK summer holidays (England state schools: from approximately 21-23 July, return 1 September) align almost perfectly with Tanzania's dry season peak and the northern Serengeti migration window. This is the most booked period. Lead time for good family room inventory in July-August is 9-12 months.\n\nAustralian families. Australian winter school holidays (VIC and QLD: 27 June - 12 July 2026; NSW: 6-17 July 2026) overlap with the start of the northern Serengeti crossing season. VIC and QLD breaks begin a full week before NSW, which matters for camp availability. Australian families who book the first two weeks of July are in the crossing window and benefit from slightly lower vehicle density than August.\n\nUS families. Summer break (ending late May in southern states, mid-June in the northeast, resuming mid-August to early September) provides a long window. The entire June-October dry season is available to US families with school-age children. December-January winter break aligns with green-season pricing and calving season in the southern Serengeti, which is a genuinely strong alternative for families who want predator action without peak-season crowds.\n\nBooking lead time for family configurations: 9-12 months for dry-season dates. Family rooms and interconnecting configurations book out first. Contact us as early as possible for July-August and December-January travel.",
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
