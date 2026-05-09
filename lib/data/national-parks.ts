export interface NationalPark {
  slug: string
  name: string
  tagline: string
  description: string
  quickFacts: {
    area: string
    unescoStatus: string
    bestTime: string
    famousFor: string
    nearestAirport: string
  }
  about: string[]
  wildlife: {
    name: string
    description: string
  }[]
  migration?: {
    description: string
    months: {
      month: string
      activity: string
    }[]
  }
  bestTimeToVisit: {
    month: string
    weather: string
    wildlife: string
    crowds: string
  }[]
  heroImage?: { src: string; alt: string }
  relatedItineraries: string[]
  fees?: {
    item: string
    amount: string
    notes?: string
  }[]
  additionalSections?: {
    heading: string
    body: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export const nationalParks: Record<string, NationalPark> = {
  serengeti: {
    slug: "serengeti",
    name: "Serengeti National Park",
    tagline: "Home to the Great Migration and endless plains",
    description:
      "Tanzania's most iconic national park, home to the Great Migration and year-round big cat sightings.",
    quickFacts: {
      area: "14,763 km² (5,700 sq mi)",
      unescoStatus: "UNESCO World Heritage Site since 1981",
      bestTime: "June - October (dry season)",
      famousFor: "Great Migration, Big cats, Endless plains",
      nearestAirport: "Seronera Airstrip (in park), Kilimanjaro International (KIA)",
    },
    about: [
      "The Serengeti is one of the world's most celebrated wildlife sanctuaries, spanning nearly 15,000 square kilometers of savanna, woodland, and riverine forests in northern Tanzania. Its name comes from the Maasai word 'siringet,' meaning 'endless plains'—an apt description for this vast ecosystem where the horizon stretches unbroken in every direction.",
      "Established as a game reserve in 1921 and upgraded to a national park in 1951, the Serengeti has become synonymous with African safari. The park forms the core of the greater Serengeti ecosystem, which extends into Kenya's Maasai Mara and encompasses a total area of roughly 30,000 square kilometers.",
      "The Serengeti is perhaps best known for hosting the Great Migration—the annual movement of over 1.5 million wildebeest, 200,000 zebra, and 500,000 gazelle across the plains in search of fresh grass and water. This natural spectacle is often called the greatest wildlife show on Earth.",
      "Beyond the migration, the Serengeti supports Africa's largest lion population (over 3,000 individuals), along with significant numbers of leopards, cheetahs, elephants, buffalo, and over 500 bird species. The park's diverse habitats—from the short-grass plains of the south to the riverine woodlands of the north—ensure year-round wildlife viewing.",
      "The landscape is punctuated by rocky outcrops called kopjes, which provide shelter and vantage points for predators. These ancient granite formations, some over 500 million years old, are iconic features of the Serengeti scenery and prime spots for leopard and lion sightings.",
    ],
    wildlife: [
      { name: "Lion", description: "Africa's largest lion population with over 3,000 individuals" },
      {
        name: "Elephant",
        description: "Large herds especially in the western corridor and northern regions",
      },
      {
        name: "Leopard",
        description: "Often spotted in the Seronera Valley and around kopjes",
      },
      {
        name: "Cheetah",
        description: "The open plains are ideal for these speed hunters",
      },
      {
        name: "Wildebeest",
        description: "Over 1.5 million participate in the Great Migration",
      },
      {
        name: "Zebra",
        description: "200,000 zebra migrate alongside the wildebeest herds",
      },
    ],
    migration: {
      description:
        "The Great Migration is a continuous, year-round movement of over 1.5 million wildebeest, zebra, and gazelle through the Serengeti-Mara ecosystem. The herds follow the rains in search of fresh grazing, creating one of nature's most spectacular events.",
      months: [
        {
          month: "January - March",
          activity: "Calving season on the southern plains. Over 500,000 calves born.",
        },
        {
          month: "April - May",
          activity: "Herds begin moving north through the Western Corridor.",
        },
        {
          month: "June - July",
          activity:
            "The dramatic Grumeti River crossings. Crocodiles await the herds.",
        },
        {
          month: "August - October",
          activity:
            "Mara River crossings in the northern Serengeti. Peak action.",
        },
        {
          month: "November - December",
          activity: "Herds return south following the short rains.",
        },
      ],
    },
    bestTimeToVisit: [
      {
        month: "Jan-Mar",
        weather: "Warm, occasional rain",
        wildlife: "Calving season, predator action",
        crowds: "Moderate",
      },
      {
        month: "Apr-May",
        weather: "Heavy rains",
        wildlife: "Lush landscapes, quieter",
        crowds: "Low",
      },
      {
        month: "Jun-Jul",
        weather: "Dry, mild",
        wildlife: "Migration in Western Corridor",
        crowds: "High",
      },
      {
        month: "Aug-Oct",
        weather: "Dry, warm",
        wildlife: "Mara River crossings",
        crowds: "Peak",
      },
      {
        month: "Nov-Dec",
        weather: "Short rains",
        wildlife: "Migration returns south",
        crowds: "Moderate",
      },
    ],
    relatedItineraries: [
      "8-day-classic-tanzania-safari",
      "great-migration-safari",
      "honeymoon-tanzania-zanzibar",
    ],
  },
  "ngorongoro-crater": {
    slug: "ngorongoro-crater",
    name: "Ngorongoro Crater",
    tagline: "The world's largest intact volcanic caldera — 25,000 animals, nowhere to go",
    description:
      "The Ngorongoro Crater is a 260 km² enclosed ecosystem inside Tanzania's Ngorongoro Conservation Area, holding 25,000 large mammals year-round including black rhino, lion, elephant, and flamingo. A UNESCO World Heritage Site since 1979.",
    heroImage: {
      src: "/ngorongoro-crater-floor-zebra-gazelle-tanzania.jpg",
      alt: "Zebra and gazelle grazing on the Ngorongoro Crater floor with the green caldera walls rising behind them, Tanzania",
    },
    quickFacts: {
      area: "260 km² crater floor · 8,292 km² conservation area",
      unescoStatus: "UNESCO World Heritage Site (Natural 1979, Mixed 2010)",
      bestTime: "Year-round · best June-October",
      famousFor: "Black rhino recovery, densest lion population in Africa, enclosed ecosystem",
      nearestAirport: "Lake Manyara Airstrip or Kilimanjaro International (JRO)",
    },
    about: [
      "Most search results call it Ngorongoro National Park. That is wrong, and the distinction matters. The Ngorongoro Crater sits inside the Ngorongoro Conservation Area (NCA), a different category of protected land governed by the Ngorongoro Conservation Area Authority. National parks in Tanzania are sealed: no human settlement, no livestock. The NCA operates differently. Roughly 20,000 Maasai pastoralists live and graze cattle within its boundaries, a coexistence that has shaped this landscape for centuries. The rules are also different for visitors: vehicles descend into the crater on a timed permit rather than being confined to fixed tracks, and off-road positioning is permitted in parts of the NCA outside the crater.",
      "The crater formed between two and three million years ago when a large volcano, estimated to have stood as tall as Kilimanjaro, erupted and collapsed inward. What remains is a caldera: 610 metres deep, 19 kilometres across at the rim, with a floor covering 260 square kilometres. The rim sits at 2,286 metres above sea level. The floor is at roughly 1,800 metres. At 6:00am on the rim before descent, the temperature is typically 8°C with wind. By midday on the floor, it reaches 22-28°C. The layering works. Most visitors forget the fleece.",
      "The crater floor supports approximately 25,000 large mammals year-round, without seasonal migration. The caldera walls are steep enough that most animals do not leave, and the ecosystem provides what they need: fresh water from Munge Stream and Ngoitokitok Springs, open short-grass plains, swampland at Mandusi and Gorigor, and acacia forest in the southern Lerai sector. The lion density here is among the highest in Africa. The black rhino population, which collapsed from 108 individuals in the mid-1960s to 13 by 1993 under sustained poaching pressure, has recovered to an estimated 26-55 animals under the Ngorongoro Rhino Protection Programme. Two species are conspicuously absent: giraffe and impala. The crater walls are impassable for giraffe, and the floor lacks the open woodland and specific tree species both require.",
      "UNESCO inscribed the NCA as a Natural World Heritage Site in 1979. Mixed status, recognising both natural and cultural significance, was added in 2010. The cultural designation reflects what surrounds the crater as much as the crater itself. Laetoli, 45 kilometres south, holds 3.6 million-year-old hominid footprints preserved in volcanic ash, the oldest confirmed evidence of bipedal locomotion. Olduvai Gorge, 20 kilometres northwest, is where Mary Leakey found the skull of Paranthropus boisei in 1959. The NCA is not only a wildlife reserve. It is one of the most significant archaeological landscapes on the planet, and the crater sits at its centre.",
      "A day on the crater floor is structured differently from a Serengeti drive. You descend by permit on one of two named roads, Seneto on the west side or Lemala on the east, and the permit runs for six hours on the floor. The only place you can leave the vehicle is Ngoitokitok Springs, the designated picnic area, where a hippo pool sits directly adjacent. A 50-vehicle daily cap limits the floor population, but peak-season mornings still cluster near Mandusi Swamp where lion sightings concentrate. The far western floor near Gorigor Swamp, the best location for rhino, sees a fraction of the vehicle traffic.",
    ],
    wildlife: [
      {
        name: "Black Rhino",
        description: "Population recovered from 13 (1993) to ~26-55 today. Best spotted at Gorigor Swamp in the morning. Binoculars essential — sightings are almost always at 300-500m distance.",
      },
      {
        name: "Lion",
        description: "Among Africa's densest populations. Large prides hold territories across the open grasslands and Mandusi Swamp. The crater population is effectively isolated from the wider Serengeti ecosystem.",
      },
      {
        name: "Elephant",
        description: "Bull elephants only — the crater walls are too steep for family groups with calves. Bulls shelter in the Lerai Forest at midday, moving to open plains in early morning and late afternoon.",
      },
      {
        name: "Flamingo",
        description: "Thousands of lesser flamingos gather at the alkaline Lake Magadi on the western crater floor. Numbers vary with water levels; January-March is generally the most reliable window.",
      },
      {
        name: "Hippo",
        description: "Permanent pods in Munge Stream and the Hippo Pool near Mandusi Swamp. Ngoitokitok Springs, the only authorised vehicle stop, has a hippo pool directly alongside the picnic area.",
      },
      {
        name: "Spotted Hyena",
        description: "One of the crater's most underrated species. Clan sizes here reach 80+ individuals. Active hunters in their own right, not scavengers — responsible for more kills per day than lions on the crater floor.",
      },
    ],
    fees: [
      { item: "Non-resident adult (24-hour permit)", amount: "$70.80", notes: "Per person" },
      { item: "Child age 5-15", amount: "$23.60", notes: "Per person" },
      { item: "Crater service fee", amount: "$295", notes: "Per vehicle, per descent — paid separately" },
      { item: "Picnic/lunch fee", amount: "$23.60", notes: "Per person, charged if stopping at Ngoitokitok Springs" },
      { item: "Overnight concession (rim lodges)", amount: "$59", notes: "Per person per night" },
      { item: "VAT", amount: "18%", notes: "Applied to all fees" },
      { item: "Payment method", amount: "Card only", notes: "No cash accepted at any NCA gate" },
    ],
    bestTimeToVisit: [
      {
        month: "Jan-Mar",
        weather: "Warm, occasional rain, mist on rim",
        wildlife: "Excellent — green floor, fewer vehicles, crater wildlife unchanged year-round",
        crowds: "Moderate",
      },
      {
        month: "Apr-May",
        weather: "Long rains — descent roads can be muddy",
        wildlife: "Challenging access, some closures",
        crowds: "Low",
      },
      {
        month: "Jun-Oct",
        weather: "Dry, cool mornings (8°C at rim), warm on floor (25°C)",
        wildlife: "Excellent — short grass, clear sightlines",
        crowds: "High (peak)",
      },
      {
        month: "Nov-Dec",
        weather: "Short rains, dramatic skies",
        wildlife: "Good — landscape green, crater wildlife reliable",
        crowds: "Moderate",
      },
    ],
    additionalSections: [
      {
        heading: "Habitat by Habitat — What Lives Where",
        body: "The crater floor is not uniform. Six distinct habitats support different species at different times of day, and knowing which area to prioritise changes what you see.\n\nLerai Forest is the southern sector, a dense stand of yellow-fever acacia trees that shelters bull elephants at midday. The shade is the draw. Elephants enter from the crater walls in the morning and retreat here when the floor heats up. Baboons and vervet monkeys are permanent in the canopy. Leopard have been recorded in the forest, though sightings are rare.\n\nGorigor Swamp sits on the western floor and is the single best location for black rhino. Rangers track individual animals here most mornings. The open, flat terrain gives sightlines across 400-500 metres. Binoculars are not optional here.\n\nMandusi Swamp, adjacent to Gorigor, is lion territory. Resident prides hold their core range around the swamp edges, and the first two hours after descent are the highest-probability window for predator activity. This is also where vehicle concentration is highest in peak season.\n\nLake Magadi is the alkaline lake in the western crater, pink with lesser flamingos when water levels are right. In the dry season, water levels drop and the flamingos disperse. January through March is generally the most reliable window for the full pink-lake effect.\n\nNgoitokitok Springs in the southeast is the only place vehicles are permitted to stop and passengers to exit. A permanent hippo pool sits directly adjacent. Spend 20 minutes here, not five.\n\nMunge Stream runs through the northern floor and supports waterbirds year-round: crowned cranes, kori bustards, grey-crowned cranes, and egrets are reliable regardless of season.",
      },
      {
        heading: "The Black Rhino Recovery",
        body: "The Ngorongoro black rhino population is one of the most-watched numbers in African conservation, and one of the few genuine recovery stories the continent has produced.\n\nIn the mid-1960s, the crater held around 108 individuals. By 1993, sustained poaching had reduced that to 13. The collapse was rapid, well-documented, and nearly irreversible.\n\nSince then, recovery has been slow but real. By 2018, estimates put the population at around 55. Current NCAA figures for 2024 place it in the 26-55 range depending on counting methodology and whether satellite individuals roaming the NCA outside the crater are included. The Ngorongoro Rhino Protection Programme, run in partnership with the Frankfurt Zoological Society, has operated continuously since the 1990s. Rangers track individual animals by name and injury history.\n\nThe crater's enclosed nature is what made recovery possible at all. The single descent road, gated and ranger-staffed, made the kind of systematic commercial poaching that destroyed rhino populations across East Africa in the 1970s and 80s significantly harder to execute here. The population is still critically endangered. But Ngorongoro is one of the reasons the species still exists in East Africa at its current numbers.",
      },
      {
        heading: "A Day on the Crater Floor",
        body: "Every operator page says 'early morning descent.' Here is what that means in practice.\n\n6:00am — Loduare Gate opens. If you are staying on the rim, your guide picks you up before this for the drive to the descent road.\n\n6:30am — Seneto Descent Road opens. The drive down takes 20-30 minutes on a steep, single-track dirt road through montane forest. Morning mist on the crater walls is common in the wet season.\n\n7:00am to 12:00pm — Game drive on the floor. Lions are most active in the first two hours after descent. Predator activity drops significantly after 10am as animals seek shade.\n\n12:30pm — Picnic at Ngoitokitok Springs. This is the only authorised stop. Your guide carries a packed lunch from the rim lodge. The hippos in the adjacent pool are reliable and close, occasionally very close.\n\n1:00pm to 3:30pm — Second drive. Lerai Forest and Lake Magadi are the afternoon priorities. Elephant activity picks up again after 2pm as bulls emerge from the forest shade.\n\n3:30pm — Begin ascent via Lemala Road. The 6-hour floor permit means all vehicles must be ascending by late afternoon. Park gates close at 6:00pm.\n\nPeak-season mornings (July-October) see vehicle concentration near Mandusi Swamp where lion sightings are most predictable. The western floor near Gorigor and the far edges of Lake Magadi see a fraction of the traffic. Your guide will know where to go.",
      },
      {
        heading: "The Descent Roads",
        body: "Two roads go down into the crater, and which one you take changes what you see on arrival.\n\nSeneto Descent Road is on the western crater wall and is the standard morning descent route. It opens at 6:30am. The track passes through Maasai grazing land on the upper rim before entering the cloud forest zone and emerging onto the floor near the open grasslands and Mandusi Swamp — good for immediate lion and wildebeest sightings. Most vehicles use Seneto for the morning descent.\n\nLemala Ascent Road runs up the eastern wall and is the standard exit route. It passes near the Lerai Forest area before climbing to the rim, which means a late-afternoon exit through Lemala can include elephant sightings in the forest before the ascent. Some guides reverse the standard route and descend Lemala, exiting via Seneto — ask what your guide recommends for current wildlife patterns.\n\nA third option, the Lerai Ascent on the southern wall, is used occasionally and offers a different angle on the forest. The two-road system (in via Seneto, out via Lemala) is the default and keeps traffic flowing one-way.",
      },
      {
        heading: "Rim Viewpoints",
        body: "Four named viewpoints on the crater rim give different angles on the 260-square-kilometre floor below, and timing matters as much as location.\n\nHeroes' Point is on the eastern rim near the Lemala approach road and is the most photogenic at sunrise. The floor is in shadow and the crater walls catch the first light from the east. The window is 6:00am to 7:30am. After that, the light flattens.\n\nCrater Viewpoint is the main pull-off used by most tour vehicles. Wide, accessible, and crowded by 9:00am. Go at first light or skip it.\n\nSopa Viewpoint is on the southeastern rim near the Sopa Lodge access road, quieter than the main viewpoint and gives a better angle on Lerai Forest and Lake Magadi in the distance.\n\nLemala Lookout is accessible from the Lemala Lodge approach road, closest to the Lemala ascent track and positioned for afternoon light on the western floor.",
      },
      {
        heading: "What to Bring",
        body: "The rim sits at 2,286 metres above sea level, roughly 7,500 feet. Mornings at 6:00am before descent are cold — typically 8°C with wind. A fleece and a windproof outer layer are not optional, even in July. By midday on the crater floor, the temperature rises to 22-28°C. The standard layering system: fleece over a base layer for descent, strip to a T-shirt by 10am on the floor, jacket back on for the ascent in late afternoon.\n\nSunscreen at altitude is more important than most visitors anticipate. UV intensity increases roughly 10% per 1,000 metres of elevation. On the open rim and during game drives with the roof up, SPF 50 minimum.\n\nBinoculars are more useful at Ngorongoro than at any other park on the northern circuit. Black rhino sightings at Gorigor Swamp are almost always at 300-500 metres. 8x42 or 10x42 is the standard guide recommendation. Do not skip them.\n\nThe only place you leave the vehicle on the crater floor is Ngoitokitok Springs. Closed-toe shoes are required for the brief stop. Everything else is viewed from inside the Land Cruiser.",
      },
    ],
    faqs: [
      {
        question: "Is Ngorongoro a national park or conservation area?",
        answer:
          "It is a Conservation Area, not a National Park. The Ngorongoro Conservation Area (NCA) is governed by the Ngorongoro Conservation Area Authority (NCAA) under different rules from Tanzania's national parks. The key practical difference: roughly 20,000 Maasai pastoralists live and graze livestock within the NCA. National parks have no permanent residents. Many websites call it 'Ngorongoro National Park' — that is incorrect and matters for understanding the rules that apply to visitors.",
      },
      {
        question: "How much does it cost to visit Ngorongoro Crater?",
        answer:
          "The main fees are: non-resident adult entry at $70.80 per person per 24-hour permit, plus a crater service fee of $295 per vehicle per descent. There is also a picnic fee of $23.60 per person at Ngoitokitok Springs. VAT of 18% is applied to all fees, and payment is by card only — no cash accepted at any NCA gate. For a party of two in one vehicle, the crater-specific fees alone (service fee plus two entry permits) total around $436 before VAT.",
      },
      {
        question: "What time does Ngorongoro Crater open?",
        answer:
          "Loduare Gate (the main entry from Arusha) opens at 6:00am. The Seneto Descent Road into the crater opens at 6:30am. Park gates close at 6:00pm. A crater floor permit is valid for 6 hours from the time of descent, so all vehicles must begin their ascent by mid to late afternoon.",
      },
      {
        question: "How long can you stay in Ngorongoro Crater?",
        answer:
          "The crater floor permit is valid for 6 hours from the time of descent. All vehicles must exit before the 6:00pm gate closure. Most full-day crater visits run from a 6:30am descent to a 3:30-4:00pm ascent start, with a picnic lunch at Ngoitokitok Springs midday. The 50-vehicle daily cap on the floor means peak-season permits sometimes need to be booked in advance.",
      },
      {
        question: "Do you need a 4WD for Ngorongoro?",
        answer:
          "Yes. Seneto Descent Road and Lemala Ascent Road are steep, single-track dirt roads that require 4WD with good ground clearance. A standard saloon car cannot safely descend. Self-drive is permitted in the NCA but requires a 4WD vehicle. All Jumbo Safaris crater descents use a Toyota Land Cruiser with high clearance.",
      },
      {
        question: "How far is Ngorongoro from Arusha?",
        answer:
          "The drive from Arusha to Loduare Gate (the main NCA entry) is approximately 180 kilometres and takes 3-4 hours depending on road conditions and stops. The route passes through Mto wa Mbu at the base of the Rift Valley escarpment and climbs to Karatu, 14 kilometres before the gate. Karatu is the main staging town for crater safaris and holds a range of accommodation at prices significantly lower than the crater rim.",
      },
      {
        question: "Can you stay inside Ngorongoro Crater?",
        answer:
          "No. Overnight camping on the crater floor is not permitted. All lodges are on the rim: Ngorongoro Serena Safari Lodge, Ngorongoro Sopa Lodge, and several smaller properties including &Beyond Ngorongoro Crater Lodge, which has views directly into the caldera. Ngorongoro Farm House in Karatu is a good mid-range alternative 14 kilometres from the gate, at considerably lower prices.",
      },
      {
        question: "Can you see the Big Five in Ngorongoro Crater?",
        answer:
          "Yes, all five are present. Lion and elephant are reliable sightings on a full crater day. Buffalo roam the open plains in large herds. Leopard are present but uncommon — usually spotted on the crater walls or in Lerai Forest. Black rhino are present but sightings require binoculars and some luck; Gorigor Swamp is the best location, usually in the morning. Most visitors see four of the five on a full day. The rhino is the variable.",
      },
      {
        question: "Are there black rhinos in Ngorongoro Crater?",
        answer:
          "Yes. The crater holds one of Africa's most significant black rhino populations, currently estimated at 26-55 individuals. The population collapsed from around 108 in the mid-1960s to 13 by 1993 due to poaching, and has recovered under the Ngorongoro Rhino Protection Programme. Gorigor Swamp on the western floor is the most reliable sighting location, almost always in the morning. Sightings are at distance — binoculars are essential.",
      },
      {
        question: "How was the Ngorongoro Crater formed?",
        answer:
          "Between two and three million years ago, a large volcano collapsed inward after a massive eruption. The result is a caldera, not a meteor crater. The dimensions: 610 metres deep, 19 kilometres across at the rim, 260 square kilometres of floor area. The original volcano is estimated to have been roughly the height of Kilimanjaro before the collapse. The floor sits at 1,800 metres elevation; the rim at 2,286 metres.",
      },
      {
        question: "What does 'Ngorongoro' mean?",
        answer:
          "The name comes from the Maasai word for the sound of their cowbells — 'ngoro-ngoro.' The Maasai have lived around and within the crater landscape for centuries, and the Ngorongoro Conservation Area continues to recognise their presence through pastoral rights within the NCA. The name is pronounced as it appears: Ngoro-Ngoro.",
      },
      {
        question: "What is the best time of year to visit Ngorongoro?",
        answer:
          "The crater is worth visiting year-round — the wildlife does not migrate out. June through October is the dry season: short grass, clear sightlines, and animals concentrated around permanent water. January and February are excellent for the crater itself, with green landscape and fewer vehicles, and they coincide with calving season on the nearby Ndutu plains if you want to combine both. April and May are the only months to genuinely avoid: the long rains can make the Seneto and Lemala roads muddy and occasionally impassable.",
      },
      {
        question: "How many days do you need at Ngorongoro?",
        answer:
          "One full day on the crater floor is enough to see the core habitats and wildlife. Two nights on the rim gives you two separate morning descents, which is the right approach if black rhino is a priority — sightings are not guaranteed on any single day. Most northern circuit itineraries allocate one crater day. The 8-day classic Tanzania safari includes a full crater day as its final park before returning to Arusha.",
      },
      {
        question: "Is Ngorongoro better than the Serengeti?",
        answer:
          "They are different experiences. The Serengeti has scale — 14,763 square kilometres, the Great Migration, and the highest predator diversity in Africa. Ngorongoro has concentration — 25,000 animals inside 260 square kilometres, nothing migrating out. The Serengeti is the better park if you can only choose one. If you are doing the northern circuit properly, the crater is not optional. The two work best together, not as alternatives.",
      },
    ],
    relatedItineraries: [
      "8-day-classic-tanzania-safari",
      "calving-season-safari",
      "honeymoon-tanzania-zanzibar",
    ],
  },
  tarangire: {
    slug: "tarangire",
    name: "Tarangire National Park",
    tagline: "Ancient baobabs and massive elephant herds",
    description:
      "Tanzania's elephant capital, known for its ancient baobab trees and exceptional dry season game viewing.",
    quickFacts: {
      area: "2,850 km²",
      unescoStatus: "National Park since 1970",
      bestTime: "June - October (dry season)",
      famousFor: "Elephants, baobab trees, tree-climbing pythons",
      nearestAirport: "Kuro Airstrip, Kilimanjaro International",
    },
    about: [
      "Tarangire National Park is Tanzania's sixth-largest national park, named after the Tarangire River that flows through it year-round. During the dry season (June-October), this river becomes a lifeline for wildlife, drawing massive concentrations of animals from the surrounding ecosystem.",
      "The park is famous for two things: its elephant population and its landscape-defining baobab trees. Tarangire hosts the largest elephant concentration in Tanzania, with herds of 300 or more commonly seen during the dry months. The ancient baobabs, some over 1,000 years old, create a distinctive and photogenic landscape unlike anywhere else in East Africa.",
      "Beyond elephants, Tarangire offers excellent lion and leopard sightings, large herds of buffalo, and over 550 bird species—more than almost any other habitat in the world.",
    ],
    wildlife: [
      {
        name: "Elephant",
        description: "Tanzania's largest elephant herds, 300+ individuals",
      },
      { name: "Lion", description: "Healthy population, often seen hunting buffalo" },
      { name: "Leopard", description: "Frequently spotted in the woodland areas" },
      {
        name: "Python",
        description: "Famous tree-climbing pythons unique to Tarangire",
      },
      { name: "Buffalo", description: "Large herds gather along the river" },
      {
        name: "Oryx",
        description: "One of the few parks where fringe-eared oryx can be seen",
      },
    ],
    bestTimeToVisit: [
      {
        month: "Jan-Mar",
        weather: "Warm, rains",
        wildlife: "Dispersed, good birds",
        crowds: "Low",
      },
      {
        month: "Apr-May",
        weather: "Heavy rains",
        wildlife: "Difficult access",
        crowds: "Very low",
      },
      {
        month: "Jun-Oct",
        weather: "Dry, warm",
        wildlife: "Exceptional, concentrated",
        crowds: "Moderate-High",
      },
      {
        month: "Nov-Dec",
        weather: "Short rains",
        wildlife: "Good, landscape green",
        crowds: "Moderate",
      },
    ],
    relatedItineraries: [
      "8-day-classic-tanzania-safari",
      "honeymoon-tanzania-zanzibar",
    ],
  },
  "lake-manyara": {
    slug: "lake-manyara",
    name: "Lake Manyara National Park",
    tagline: "Tree-climbing lions and flamingo-lined shores",
    description:
      "A compact gem famous for tree-climbing lions, flamingos, and diverse ecosystems along the Great Rift Valley.",
    quickFacts: {
      area: "330 km² (70% is the lake)",
      unescoStatus: "National Park since 1960",
      bestTime: "Year-round, best June - October",
      famousFor: "Tree-climbing lions, flamingos, groundwater forest",
      nearestAirport: "Lake Manyara Airstrip, Kilimanjaro International",
    },
    about: [
      "Lake Manyara National Park may be one of Tanzania's smallest parks, but it packs incredible diversity into its compact size. The park stretches along the base of the dramatic Rift Valley escarpment, encompassing a groundwater forest, acacia woodlands, grasslands, and the alkaline lake itself.",
      "The park is famous for its tree-climbing lions—a behavioral quirk not seen as commonly elsewhere. Scientists believe the lions climb trees to escape tsetse flies and buffalo, or simply to catch a breeze. Watching a pride of lions draped over the branches of an acacia tree is a signature Lake Manyara experience.",
      "The lake itself attracts massive flocks of flamingos when water levels are right, creating a stunning pink shoreline. Over 400 bird species have been recorded here, making it a birdwatcher's paradise.",
    ],
    wildlife: [
      {
        name: "Tree-climbing Lion",
        description: "Famous for their unusual tree-climbing behavior",
      },
      {
        name: "Flamingo",
        description: "Thousands of lesser and greater flamingos when conditions are right",
      },
      {
        name: "Elephant",
        description: "Good populations in the groundwater forest",
      },
      { name: "Hippo", description: "Pools along the lake shore" },
      { name: "Baboon", description: "Large troops in the forest areas" },
      { name: "Blue Monkey", description: "Common in the groundwater forest" },
    ],
    bestTimeToVisit: [
      {
        month: "Jan-Mar",
        weather: "Warm, rains",
        wildlife: "Good, flamingos variable",
        crowds: "Low",
      },
      {
        month: "Apr-May",
        weather: "Heavy rains",
        wildlife: "Lush, some roads difficult",
        crowds: "Very low",
      },
      {
        month: "Jun-Oct",
        weather: "Dry, pleasant",
        wildlife: "Excellent, tree lions active",
        crowds: "Moderate",
      },
      {
        month: "Nov-Dec",
        weather: "Short rains",
        wildlife: "Good, landscape green",
        crowds: "Low-Moderate",
      },
    ],
    relatedItineraries: ["8-day-classic-tanzania-safari"],
  },
}

export function getNationalPark(slug: string): NationalPark | undefined {
  return nationalParks[slug]
}

export function getAllNationalParks(): NationalPark[] {
  return Object.values(nationalParks)
}
