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
      "The Serengeti is one of the world's most celebrated wildlife sanctuaries, spanning nearly 15,000 square kilometers of savanna, woodland, and riverine forests in northern Tanzania. Its name comes from the Maasai word 'siringet,' meaning 'endless plains,' an apt description for a landscape where the horizon stretches unbroken in every direction.",
      "Established as a game reserve in 1921 and upgraded to a national park in 1951, the Serengeti has become synonymous with African safari. The park forms the core of the greater Serengeti ecosystem, which extends into Kenya's Maasai Mara and encompasses a total area of roughly 30,000 square kilometers.",
      "The Serengeti is perhaps best known for hosting the Great Migration, the annual movement of over 1.5 million wildebeest, 200,000 zebra, and 500,000 gazelle across the plains in search of fresh grass and water. This natural spectacle is often called the greatest wildlife show on Earth.",
      "Beyond the migration, the Serengeti supports Africa's largest lion population (over 3,000 individuals), along with significant numbers of leopards, cheetahs, elephants, buffalo, and over 500 bird species. The park's diverse habitats (from the short-grass plains of the south to the riverine woodlands of the north) ensure year-round wildlife viewing.",
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
    tagline: "The world's largest intact volcanic caldera. 25,000 animals, nowhere to go.",
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
        description: "Population recovered from 13 (1993) to an estimated 26-55 today. Best spotted at Gorigor Swamp in the morning. Binoculars essential: sightings are almost always at 300-500m distance.",
      },
      {
        name: "Lion",
        description: "Among Africa's densest populations. Large prides hold territories across the open grasslands and Mandusi Swamp. The crater population is effectively isolated from the wider Serengeti ecosystem.",
      },
      {
        name: "Elephant",
        description: "Bull elephants only. The crater walls are too steep for family groups with calves. Bulls shelter in the Lerai Forest at midday, moving to open plains in early morning and late afternoon.",
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
        description: "One of the crater's most underrated species. Clan sizes here reach 80+ individuals. Active hunters in their own right, not scavengers. Responsible for more kills per day than lions on the crater floor.",
      },
    ],
    fees: [
      { item: "Non-resident adult (24-hour permit)", amount: "$70.80", notes: "Per person" },
      { item: "Child age 5-15", amount: "$23.60", notes: "Per person" },
      { item: "Crater service fee", amount: "$295", notes: "Per vehicle, per descent. Paid separately from entry permits." },
      { item: "Picnic/lunch fee", amount: "$23.60", notes: "Per person, charged if stopping at Ngoitokitok Springs" },
      { item: "Overnight concession (rim lodges)", amount: "$59", notes: "Per person per night" },
      { item: "VAT", amount: "18%", notes: "Applied to all fees" },
      { item: "Payment method", amount: "Card only", notes: "No cash accepted at any NCA gate" },
    ],
    bestTimeToVisit: [
      {
        month: "Jan-Mar",
        weather: "Warm, occasional rain, mist on rim",
        wildlife: "Excellent. Green floor, fewer vehicles, crater wildlife unchanged year-round.",
        crowds: "Moderate",
      },
      {
        month: "Apr-May",
        weather: "Long rains. Descent roads can be muddy.",
        wildlife: "Challenging access, some closures",
        crowds: "Low",
      },
      {
        month: "Jun-Oct",
        weather: "Dry, cool mornings (8°C at rim), warm on floor (25°C)",
        wildlife: "Excellent. Short grass, clear sightlines.",
        crowds: "High (peak)",
      },
      {
        month: "Nov-Dec",
        weather: "Short rains, dramatic skies",
        wildlife: "Good. Landscape green, crater wildlife reliable.",
        crowds: "Moderate",
      },
    ],
    additionalSections: [
      {
        heading: "Habitat by Habitat: What Lives Where",
        body: "The crater floor is not uniform. Six distinct habitats support different species at different times of day, and knowing which area to prioritise changes what you see.\n\nLerai Forest is the southern sector, a dense stand of yellow-fever acacia trees that shelters bull elephants at midday. The shade is the draw. Elephants enter from the crater walls in the morning and retreat here when the floor heats up. Baboons and vervet monkeys are permanent in the canopy. Leopard have been recorded in the forest, though sightings are rare.\n\nGorigor Swamp sits on the western floor and is the single best location for black rhino. Rangers track individual animals here most mornings. The open, flat terrain gives sightlines across 400-500 metres. Binoculars are not optional here.\n\nMandusi Swamp, adjacent to Gorigor, is lion territory. Resident prides hold their core range around the swamp edges, and the first two hours after descent are the highest-probability window for predator activity. This is also where vehicle concentration is highest in peak season.\n\nLake Magadi is the alkaline lake in the western crater, pink with lesser flamingos when water levels are right. In the dry season, water levels drop and the flamingos disperse. January through March is generally the most reliable window for the full pink-lake effect.\n\nNgoitokitok Springs in the southeast is the only place vehicles are permitted to stop and passengers to exit. A permanent hippo pool sits directly adjacent. Spend 20 minutes here, not five.\n\nMunge Stream runs through the northern floor and supports waterbirds year-round: crowned cranes, kori bustards, grey-crowned cranes, and egrets are reliable regardless of season.",
      },
      {
        heading: "The Black Rhino Recovery",
        body: "The Ngorongoro black rhino population is one of the most-watched numbers in African conservation, and one of the few genuine recovery stories the continent has produced.\n\nIn the mid-1960s, the crater held around 108 individuals. By 1993, sustained poaching had reduced that to 13. The collapse was rapid, well-documented, and nearly irreversible.\n\nSince then, recovery has been slow but real. By 2018, estimates put the population at around 55. Current NCAA figures for 2024 place it in the 26-55 range depending on counting methodology and whether satellite individuals roaming the NCA outside the crater are included. The Ngorongoro Rhino Protection Programme, run in partnership with the Frankfurt Zoological Society, has operated continuously since the 1990s. Rangers track individual animals by name and injury history.\n\nThe crater's enclosed nature is what made recovery possible at all. The single descent road, gated and ranger-staffed, made the kind of systematic commercial poaching that destroyed rhino populations across East Africa in the 1970s and 80s significantly harder to execute here. The population is still critically endangered. But Ngorongoro is one of the reasons the species still exists in East Africa at its current numbers.",
      },
      {
        heading: "A Day on the Crater Floor",
        body: "Every operator page says 'early morning descent.' Here is what that means in practice.\n\n6:00am: Loduare Gate opens. If you are staying on the rim, your guide picks you up before this for the drive to the descent road.\n\n6:30am: Seneto Descent Road opens. The drive down takes 20-30 minutes on a steep, single-track dirt road through montane forest. Morning mist on the crater walls is common in the wet season.\n\n7:00am to 12:00pm: Game drive on the floor. Lions are most active in the first two hours after descent. Predator activity drops significantly after 10am as animals seek shade.\n\n12:30pm: Picnic at Ngoitokitok Springs. This is the only authorised stop. Your guide carries a packed lunch from the rim lodge. The hippos in the adjacent pool are reliable and close, occasionally very close.\n\n1:00pm to 3:30pm: Second drive. Lerai Forest and Lake Magadi are the afternoon priorities. Elephant activity picks up again after 2pm as bulls emerge from the forest shade.\n\n3:30pm: Begin ascent via Lemala Road. The 6-hour floor permit means all vehicles must be ascending by late afternoon. Park gates close at 6:00pm.\n\nPeak-season mornings (July-October) see vehicle concentration near Mandusi Swamp where lion sightings are most predictable. The western floor near Gorigor and the far edges of Lake Magadi see a fraction of the traffic. Your guide will know where to go.",
      },
      {
        heading: "The Descent Roads",
        body: "Two roads go down into the crater, and which one you take changes what you see on arrival.\n\nSeneto Descent Road is on the western crater wall and is the standard morning descent route. It opens at 6:30am. The track passes through Maasai grazing land on the upper rim before entering the cloud forest zone and emerging onto the floor near the open grasslands and Mandusi Swamp, good for immediate lion and wildebeest sightings. Most vehicles use Seneto for the morning descent.\n\nLemala Ascent Road runs up the eastern wall and is the standard exit route. It passes near the Lerai Forest area before climbing to the rim, which means a late-afternoon exit through Lemala can include elephant sightings in the forest before the ascent. Some guides reverse the standard route and descend Lemala, exiting via Seneto. Ask what your guide recommends for current wildlife patterns.\n\nA third option, the Lerai Ascent on the southern wall, is used occasionally and offers a different angle on the forest. The two-road system (in via Seneto, out via Lemala) is the default and keeps traffic flowing one-way.",
      },
      {
        heading: "Rim Viewpoints",
        body: "Four named viewpoints on the crater rim give different angles on the 260-square-kilometre floor below, and timing matters as much as location.\n\nHeroes' Point is on the eastern rim near the Lemala approach road and is the most photogenic at sunrise. The floor is in shadow and the crater walls catch the first light from the east. The window is 6:00am to 7:30am. After that, the light flattens.\n\nCrater Viewpoint is the main pull-off used by most tour vehicles. Wide, accessible, and crowded by 9:00am. Go at first light or skip it.\n\nSopa Viewpoint is on the southeastern rim near the Sopa Lodge access road, quieter than the main viewpoint and gives a better angle on Lerai Forest and Lake Magadi in the distance.\n\nLemala Lookout is accessible from the Lemala Lodge approach road, closest to the Lemala ascent track and positioned for afternoon light on the western floor.",
      },
      {
        heading: "What to Bring",
        body: "The rim sits at 2,286 metres above sea level, roughly 7,500 feet. Mornings at 6:00am before descent are cold, typically 8°C with wind. A fleece and a windproof outer layer are not optional, even in July. By midday on the crater floor, the temperature rises to 22-28°C. The standard layering system: fleece over a base layer for descent, strip to a T-shirt by 10am on the floor, jacket back on for the ascent in late afternoon.\n\nSunscreen at altitude is more important than most visitors anticipate. UV intensity increases roughly 10% per 1,000 metres of elevation. On the open rim and during game drives with the roof up, SPF 50 minimum.\n\nBinoculars are more useful at Ngorongoro than at any other park on the northern circuit. Black rhino sightings at Gorigor Swamp are almost always at 300-500 metres. 8x42 or 10x42 is the standard guide recommendation. Do not skip them.\n\nThe only place you leave the vehicle on the crater floor is Ngoitokitok Springs. Closed-toe shoes are required for the brief stop. Everything else is viewed from inside the Land Cruiser.",
      },
    ],
    faqs: [
      {
        question: "Is Ngorongoro a national park or conservation area?",
        answer:
          "It is a Conservation Area, not a National Park. The Ngorongoro Conservation Area (NCA) is governed by the Ngorongoro Conservation Area Authority (NCAA) under different rules from Tanzania's national parks. The key practical difference: roughly 20,000 Maasai pastoralists live and graze livestock within the NCA. National parks have no permanent residents. Many websites call it 'Ngorongoro National Park.' That is incorrect and matters for understanding the rules that apply to visitors.",
      },
      {
        question: "How much does it cost to visit Ngorongoro Crater?",
        answer:
          "The main fees are: non-resident adult entry at $70.80 per person per 24-hour permit, plus a crater service fee of $295 per vehicle per descent. There is also a picnic fee of $23.60 per person at Ngoitokitok Springs. VAT of 18% is applied to all fees, and payment is by card only. No cash accepted at any NCA gate. For a party of two in one vehicle, the crater-specific fees alone (service fee plus two entry permits) total around $436 before VAT.",
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
          "Yes, all five are present. Lion and elephant are reliable sightings on a full crater day. Buffalo roam the open plains in large herds. Leopard are present but uncommon, usually spotted on the crater walls or in Lerai Forest. Black rhino are present but sightings require binoculars and some luck; Gorigor Swamp is the best location, usually in the morning. Most visitors see four of the five on a full day. The rhino is the variable.",
      },
      {
        question: "Are there black rhinos in Ngorongoro Crater?",
        answer:
          "Yes. The crater holds one of Africa's most significant black rhino populations, currently estimated at 26-55 individuals. The population collapsed from around 108 in the mid-1960s to 13 by 1993 due to poaching, and has recovered under the Ngorongoro Rhino Protection Programme. Gorigor Swamp on the western floor is the most reliable sighting location, almost always in the morning. Sightings are at distance. Binoculars are essential.",
      },
      {
        question: "How was the Ngorongoro Crater formed?",
        answer:
          "Between two and three million years ago, a large volcano collapsed inward after a massive eruption. The result is a caldera, not a meteor crater. The dimensions: 610 metres deep, 19 kilometres across at the rim, 260 square kilometres of floor area. The original volcano is estimated to have been roughly the height of Kilimanjaro before the collapse. The floor sits at 1,800 metres elevation; the rim at 2,286 metres.",
      },
      {
        question: "What does 'Ngorongoro' mean?",
        answer:
          "The name comes from the Maasai word for the sound of their cowbells ('ngoro-ngoro'). The Maasai have lived around and within the crater landscape for centuries, and the Ngorongoro Conservation Area continues to recognise their presence through pastoral rights within the NCA. The name is pronounced as it appears: Ngoro-Ngoro.",
      },
      {
        question: "What is the best time of year to visit Ngorongoro?",
        answer:
          "The crater is worth visiting year-round. The wildlife does not migrate out. June through October is the dry season: short grass, clear sightlines, and animals concentrated around permanent water. January and February are excellent for the crater itself, with green landscape and fewer vehicles, and they coincide with calving season on the nearby Ndutu plains if you want to combine both. April and May are the only months to genuinely avoid: the long rains can make the Seneto and Lemala roads muddy and occasionally impassable.",
      },
      {
        question: "How many days do you need at Ngorongoro?",
        answer:
          "One full day on the crater floor is enough to see the core habitats and wildlife. Two nights on the rim gives you two separate morning descents, which is the right approach if black rhino is a priority. Sightings are not guaranteed on any single day. Most northern circuit itineraries allocate one crater day. The 8-day classic Tanzania safari includes a full crater day as its final park before returning to Arusha.",
      },
      {
        question: "Is Ngorongoro better than the Serengeti?",
        answer:
          "They are different experiences. The Serengeti has scale: 14,763 square kilometres, the Great Migration, and the highest predator diversity in Africa. Ngorongoro has concentration: 25,000 animals inside 260 square kilometres, nothing migrating out. The Serengeti is the better park if you can only choose one. If you are doing the northern circuit properly, the crater is not optional. The two work best together, not as alternatives.",
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
      "Beyond elephants, Tarangire offers excellent lion and leopard sightings, large herds of buffalo, and over 550 bird species, more than almost any other habitat in the world.",
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
      "The park is famous for its tree-climbing lions, a behavioral quirk not seen as commonly elsewhere. Scientists believe the lions climb trees to escape tsetse flies and buffalo, or simply to catch a breeze. Watching a pride of lions draped over the branches of an acacia tree is a signature Lake Manyara experience.",
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
  ndutu: {
    slug: "ndutu",
    name: "Ndutu",
    tagline: "400,000 wildebeest calves in six weeks. Every predator in the ecosystem watching.",
    description:
      "Ndutu sits inside the Ngorongoro Conservation Area on the southern Serengeti border. From January through March it holds the world's largest wildebeest calving event. Off-road driving is legally permitted here and not in Serengeti National Park next door. That single distinction is why wildlife photographers choose Ndutu over the Mara River crossings for predator viewing.",
    quickFacts: {
      area: "Part of the Ngorongoro Conservation Area (NCA) · bordering Serengeti National Park",
      unescoStatus: "Ngorongoro Conservation Area — UNESCO World Heritage Site",
      bestTime: "Late January through late February (calving peak) · April-November for resident predators without migration crowds",
      famousFor: "Wildebeest calving season, off-road driving, cheetah density, Long Gully lions, Lake Masek Pride",
      nearestAirport: "Ndutu Airstrip · Coastal Aviation, Auric Air, Air Excel from Arusha (approx. $270-440 one-way)",
    },
    about: [
      "Ndutu is not a national park. Geographically it sits at the southern edge of the Serengeti ecosystem; administratively it falls inside the Ngorongoro Conservation Area (NCA), governed by the Ngorongoro Conservation Area Authority. The boundary with Serengeti National Park runs through the broader Ndutu region. It is unfenced. Wildlife crosses freely. The wildebeest do not know which side they are on. Your guide does, because it determines what the vehicle can legally do.",
      "In Serengeti National Park, off-road driving is forbidden for non-research vehicles. No exceptions. In Ndutu specifically, the NCAA has designated the area as an authorised off-road zone. This is a carve-out, not a general NCA rule: the rest of the conservation area, including the Ngorongoro Crater floor, prohibits off-road driving just as strictly as the national park does. When a cheetah accelerates toward a newborn calf through ankle-height grass at Ndutu, your guide can leave the track, position for the light, and stay with the hunt. Cross the boundary east into Serengeti National Park and the vehicle returns to the road, regardless of what is happening 30 metres away.",
      "The calving itself is driven by soil chemistry. The November-December short rains deposit phosphorus and calcium into the volcanic short-grass plains around Lake Ndutu and Lake Masek. These are the exact nutrients lactating cows and developing calves need. Herds arrive by late December, first births begin in mid-January, and peak intensity runs through the first two to three weeks of February. The Greater Serengeti Conservation Society puts the total at more than 400,000 calves born in a few weeks, with the daily rate at peak reaching around 8,000 (a conventional figure, widely cited and plausible given the total, though not from a single peer-reviewed source). Calves stand within 3-5 minutes of birth, walk within 15, and run with the herd within hours. Predators do not wait.",
      "The predator response to calving is the most important fact about Ndutu. Every lion pride in range pulls toward the calving grounds. Spotted hyena clans here reach 80-plus members. Cheetahs work the open short-grass plains where their sprint-hunting success rate runs near 50 percent during calving, compared to around 30 percent at other times. Black-backed jackals work directly on newborns, often a dozen around a single birth. The full cast operates simultaneously and in plain view. Kills happen before breakfast, through the morning, before sundowners. This is not the Mara River, where you wait for one event. At Ndutu in February, the event is continuous.",
      "There is a second Ndutu that most visitors never see. From April through mid-December, the migration herds have moved north and the mobile camps have packed up. Ndutu Safari Lodge stays open year-round, and what remains is a resident predator community with no migration traffic: named cheetah coalitions with established territories around the Big Marsh and the Causeway, the Masek Pride whose lions climb acacia trees around Lake Masek (a behaviour normally associated with Lake Manyara), the Twin Hill lion pride whose cubs the guides track across seasons. Wildlife photographers who have visited in February come back off-season specifically for this. Fewer vehicles, familiar animals, different quality of encounter.",
    ],
    wildlife: [
      {
        name: "Wildebeest",
        description: "1.5 million in the Serengeti-Mara ecosystem. More than 400,000 calves born in the Ndutu area over roughly six weeks, January through March.",
      },
      {
        name: "Cheetah",
        description: "Some of Africa's most photographable cheetah hunting on open short-grass plains with off-road vehicle positioning. Named resident coalitions hold territories around the Big Marsh year-round. Hunt success near 50% during calving.",
      },
      {
        name: "Lion",
        description: "Multiple prides converge on the calving grounds January-March. The Lake Masek Pride is documented tree-climbing in the acacia woodland around Lake Masek. Long Gully is the best location for coalition males at first light.",
      },
      {
        name: "Spotted Hyena",
        description: "Clans of 80+ members. Active hunters, not scavengers. Responsible for a large share of kills on the calving plains alongside the lion prides.",
      },
      {
        name: "Leopard",
        description: "Resident in the acacia woodland fringing Lake Masek. Less visible than in the Serengeti valley but present year-round.",
      },
      {
        name: "Bat-Eared Fox",
        description: "Abundant on the short-grass plains year-round, often overlooked. Resident alongside serval, civet, and caracal — the smaller predator portfolio that photographers return for in the off-season.",
      },
    ],
    bestTimeToVisit: [
      {
        month: "Dec 1-19",
        weather: "Short rains ending. Plains greening. Herds arriving.",
        wildlife: "Early births beginning. Predator density building. Lemala Ndutu rates at $330/night — lowest of the season.",
        crowds: "Low",
      },
      {
        month: "Dec 20 – Jan",
        weather: "Warm, dry interlude between rains. Ankle-height grass.",
        wildlife: "Calving underway, predator density rising. First serious action on the plains.",
        crowds: "Moderate. Late January is the insider's window: near-peak wildlife, fewer vehicles than February.",
      },
      {
        month: "Feb",
        weather: "Warm and generally dry. Best short-grass conditions.",
        wildlife: "Peak calving. Around 8,000 calves born per day at maximum. All major predators active simultaneously. The month most operators recommend.",
        crowds: "High by Ndutu standards (still far below Mara August). Mid-February is the busiest window. Book 6-9 months out.",
      },
      {
        month: "Mar",
        weather: "Long rains approaching. Tracks soften by late March.",
        wildlife: "Calving winding down. Herds beginning to move northwest. Early March still good; late March variable.",
        crowds: "Low-Moderate. Good availability.",
      },
      {
        month: "Apr-Nov",
        weather: "Long rains (Apr-May) then dry season. Mobile camps gone.",
        wildlife: "Ndutu Safari Lodge stays open year-round. Resident predators (named cheetah coalitions, Masek Pride, Twin Hill lions) without migration crowds. Off-season photographers rate this period highly.",
        crowds: "Very low",
      },
    ],
    relatedItineraries: ["calving-season-safari", "8-day-classic-tanzania-safari"],
    additionalSections: [
      {
        heading: "Named Locations Worth Knowing",
        body: "Ndutu's guides work specific terrain features that repeat visitors and photographers return to deliberately. Knowing these before you arrive changes what you ask for.\n\nLong Gully is a seasonal stream whose water surface produces reflection shots that have appeared in wildlife photography awards. Coalition males are regularly photographed crossing it at first light. The light hits the water before it hits the plain. Wildlife photographers name Long Gully more than any other single Ndutu location.\n\nHidden Valley is a water feature where local guides predict large herds come to drink late-morning. The setup: nervous antelope approaching water while predators are visible nearby. One visiting photographer described it as 'animals writing their own story on a blank page.' Less known than the main plains; less vehicle traffic.\n\nThe Big Marsh and the Causeway hold territories for Ndutu's resident cheetah coalitions year-round, not just during calving season. April through mid-December this is where you find cheetahs when the migration has gone north.\n\nLake Masek acacia woodland is afternoon leopard territory and the home range of the Masek Pride — the lion pride documented climbing trees seasonally, a behaviour associated with Lake Manyara elsewhere. Afternoons at Lake Masek for tree-climbing lions are a real, if underplanned, Ndutu experience.\n\nNdutu Safari Lodge's own grounds are documented wildlife habitat. The lodge has camera-trapped its property for over 25 years. Lions, leopards, and cheetahs walk past the dining room. This is not a selling point embellishment; it is in the lodge's own records.",
      },
      {
        heading: "Ndutu vs Mara River Crossings",
        body: "This is the question most repeat visitors eventually ask, and most operators answer badly: 'both are amazing, go to whichever fits your dates.' That is not useful for someone making a real decision.\n\nThe Mara River crossings (July-October, northern Serengeti and Masai Mara) are the single most dramatic wildlife event in Africa. Wildebeest plunging into crocodile-infested water from steep banks, thousands at a time, under pressure from Nile crocodiles coming from below. Cinematic. Irreplaceable. The 2023 and 2024 peak crossing images that circulated globally all came from the Mara. If the crossing photograph is the goal, nothing at Ndutu competes with it.\n\nFor predator viewing specifically, Ndutu is better. Here is why. The Mara crossing is one event: animals enter the water, crocodiles attack, survivors climb out. Between crossings you wait, sometimes for hours, sometimes for a day with no crossing at all. Predator-prey interaction at the river is intense but short. Between events, the Mara is standard game viewing.\n\nAt Ndutu in February, the predator action is unrelenting across the full game-drive day. Kills before breakfast. Lions mid-morning. Cheetah hunts on open ground in usable light. Hyena clan activity through the afternoon. The herds are not moving; the predators do not need to range far. Add off-road positioning and you have not just more action but better angles, better framing, closer approach.\n\nEvery major wildlife photography operation that works both locations rates Ndutu above the Mara for predator photography. The Mara is better for spectacle. Ndutu is better for the photographs that result from watching a predator work. They are not competing for the same experience.",
      },
      {
        heading: "The Park Fee Calculation — What Operators Don't Tell You",
        body: "Where your camp sits relative to the NCA-SNP boundary determines your daily park fee bill, and the difference is significant.\n\nNCA conservation fee: USD 71 per person per day. Serengeti National Park entry fee: USD 83 per person per day. If your game drives cross from one jurisdiction into the other (which happens routinely near Ndutu, since the boundary is unfenced and the best calving terrain straddles it), you pay both: USD 154 per person per day.\n\nMost operators absorb or include this in their package pricing without explanation. Some do not. Before booking, ask: which side of the NCA-SNP boundary is the camp on, and are daily game drives likely to cross into the other jurisdiction? If your operator cannot answer this specifically, they have not been to the camp.",
      },
    ],
    faqs: [
      {
        question: "Is Ndutu in the Serengeti?",
        answer:
          "Geographically yes, ecologically yes. Administratively, no. Ndutu sits inside the Ngorongoro Conservation Area (NCA), governed by the NCAA, not Tanzania National Parks. It borders Serengeti National Park along an unfenced boundary. The distinction matters for two reasons: fees (NCA charges USD 71/day vs Serengeti's USD 83/day, and you may pay both if game drives cross) and driving rules (Ndutu is a designated off-road zone within the NCA; Serengeti National Park prohibits off-road driving with no exceptions for non-research vehicles).",
      },
      {
        question: "When exactly is calving season and when is peak?",
        answer:
          "The meaningful window is late January through late February, with peak calving in the first two to three weeks of February. The Greater Serengeti Conservation Society documents more than 400,000 calves born in roughly six weeks each year, with daily rates at peak around 8,000. The exact start shifts by up to two weeks depending on the previous year's short rains. December is a genuine entry point with lower rates and fewer vehicles; early March is a quieter exit window with the herds still present. Late January is the insider's choice: near-peak wildlife, significantly fewer vehicles than peak February.",
      },
      {
        question: "Is Ndutu better than the Mara River for predator viewing?",
        answer:
          "For predator viewing specifically, yes. The Mara River crossings (July-October) are the most dramatic single wildlife event in Africa and produce the defining migration photographs. But predator action at the river is intense and short. Between crossings you wait. At Ndutu in February, the predator activity is continuous through the full game-drive day: kills before breakfast, cheetah hunts on open ground in good light, hyena clan dynamics through the afternoon. Add off-road positioning, which Ndutu permits and the Mara National Reserve largely does not, and you get better angles on every encounter. Wildlife photographers who work both locations consistently rate Ndutu above the Mara for predator photography. They are different chapters of the same migration story.",
      },
      {
        question: "What are the best camps at Ndutu?",
        answer:
          "Ndutu Safari Lodge is the original property, open year-round, with 34 stone-and-thatch cottages on Lake Ndutu. The lodge has been the base for professional wildlife photographers and filmmakers for decades. Mid-range pricing. Lemala Ndutu operates December 1 through March 31, nine luxury tents on a permanent marsh, with rates ranging from USD 330 per person per night in early December to USD 1,178 from December 20 through March. Asilia Olakira and Kimondo Migration Camp both operate mobile tented camps at Ndutu December-March, relocating to the northern Serengeti for July-October. February books out 6-9 months in advance at all properties.",
      },
      {
        question: "How do you get to Ndutu?",
        answer:
          "By air from Arusha: Coastal Aviation, Auric Air, and Air Excel all serve Ndutu Airstrip during calving season. Flight time is approximately 1.5 hours (often via one or two intermediate airstrips). Pricing runs roughly USD 270-440 per person one-way depending on carrier. Coastal Aviation is the most frequently used; Auric Air is generally the lowest-priced option. By road from Arusha: approximately six to seven hours via Karatu and the Ngorongoro Conservation Area. Long but the route through the NCA highlands is scenic. Flying saves a full day each way.",
      },
      {
        question: "Are there tsetse flies at Ndutu?",
        answer:
          "Ndutu is comparatively low for tsetse. The short-grass open plains habitat that defines the calving area is not prime tsetse territory (they favour denser bush and woodland). The western Serengeti corridor and parts of Tarangire are more tsetse-affected. Light-coloured clothing and standard insect repellent are adequate precautions at Ndutu. The main health consideration is malaria prophylaxis, which applies throughout Tanzania.",
      },
      {
        question: "Can you visit Ndutu outside calving season?",
        answer:
          "Yes, and some photographers prefer it. Ndutu Safari Lodge is open year-round. From April through mid-December, the mobile camps have gone but the resident predators remain: named cheetah coalitions with established territories around the Big Marsh, the Lake Masek Pride (a lion pride known for seasonal tree-climbing), the Twin Hill lion pride. No migration traffic means fewer vehicles at every sighting. The off-season is a different experience from calving season but not a lesser one.",
      },
      {
        question: "Can you combine Ndutu with the Ngorongoro Crater?",
        answer:
          "Yes, and it is the most natural combination from a routing perspective. Ndutu sits inside the NCA, roughly two hours by road from the crater rim. Our Calving Season Safari runs several days at Ndutu followed by a half-day crater descent before returning to Arusha. The crater holds its resident wildlife year-round regardless of the migration's position, so the combination works in any calving-season month.",
      },
    ],
  },
  ruaha: {
    slug: "ruaha",
    name: "Ruaha National Park",
    tagline: "For the safari traveller who has done the migration and now wants the silence.",
    description:
      "Ruaha is Tanzania's largest national park at 20,226 km², home to roughly 10% of Africa's lions, one of only three African landscapes with 500+ wild dogs, and an elephant population recovering toward 15,000. Around 20,000 visitors per year. The Serengeti sees 350,000.",
    quickFacts: {
      area: "20,226 km² (Tanzania's largest national park, expanded 2008)",
      unescoStatus: "National Park since 1964",
      bestTime: "June - October (dry season) · walking safaris year-round",
      famousFor: "African wild dog, lion prides up to 25, elephant, greater kudu, sable antelope, endemic Ruaha red-billed hornbill",
      nearestAirport: "Msembe Airstrip (in-park) · Coastal Aviation and Auric Air from Dar es Salaam and Zanzibar",
    },
    about: [
      "Ruaha sits in the south-central highlands of Tanzania, well off the northern circuit that most visitors follow. Getting here requires a flight. Coastal Aviation's daily Dar es Salaam to Msembe service takes about 2.5 hours; from Arusha it's closer to two hours with a stop. The nearest town is Iringa, 112 kilometres from the park boundary. That distance is not incidental. It is the mechanism by which Ruaha stays empty. Around 20,000 visitors per year in a park 40 percent larger than the Serengeti, which sees 350,000.",
      "The Great Ruaha River and its sand tributaries (the Mwagusi and Mdonya) are the ecological spine of the park. In the dry season (June through October), as smaller water sources fail across the park's 20,226 square kilometres, every animal contracts toward the river. Elephants dig in the dry sand for subsurface water, a signature Ruaha image that repeat visitors describe more than any other. A legacy of heavy poaching between 2009 and 2014, when the population crashed from around 30,000 to roughly 8,272, means many of the surviving females are tuskless. The Ruaha-Rungwa ecosystem now holds around 15,000 elephants in recovery, according to the Southern Tanzania Elephant Program's 2021 survey. Buffalo herds here exceed 500 regularly. Prides of 15 to 25 lions, among the largest documented in Africa, hold territories along the riverine strip.",
      "Ruaha is one of three remaining African landscapes with more than 500 adult wild dogs, alongside KAZA (Botswana, Zimbabwe) and the Selous-Niassa corridor to the east. The Ruaha Carnivore Project, founded in 2009 by Dr. Amy Dickman and now operating within Lion Landscapes, tracks 37 documented packs across the broader Ruaha-Rungwa-Katavi landscape. Wild dog sightings are not guaranteed, but the June-July denning season near Mwagusi is the most predictable window. Pack hunt success rates run around 80 percent, compared to the lion's 25-30. Watching a pack hunt on open ground is among the most efficient and fastest predator events in Africa. Most guests who see it rate it above any river crossing they have witnessed.",
      "The landscape is where Ruaha diverges most sharply from northern Tanzania. The park sits at the convergence of East African and Southern African biomes, which means it holds species that simply do not exist in the Serengeti or Ngorongoro. Greater and lesser kudu appear together. Sable antelope and roan antelope are resident. The Ruaha red-billed hornbill is endemic to this park. The bird list exceeds 570 species, including migrants from Europe and Asia in the green season. Guides here regularly check the scarred hollows of baobab trunks for leopards taking refuge from the afternoon heat, a Ruaha-specific behaviour that would puzzle a guide who has worked only in the north.",
      "Walking safaris are freely permitted throughout the park. Operators including Jongomero and Kichaka Expeditions run multi-day fly-camping routes into the remote eastern sections where no vehicle tracks exist. This is something the Serengeti cannot offer. In the core areas, the experience is still vehicle-based, but the absence of track restrictions and the low vehicle density means the drive itself feels qualitatively different. You do not queue. You do not share a sighting with eight other Land Cruisers. The animal does not ignore you because it has been desensitised to vehicles. In Ruaha, some animals still react to your presence, which is actually the more honest wildlife encounter.",
    ],
    wildlife: [
      {
        name: "African Wild Dog",
        description: "One of three African landscapes with 500+ adult wild dogs (WCS Tanzania). 37 packs documented in the Ruaha-Rungwa ecosystem. June-July denning near Mwagusi is the most predictable sighting window. Hunt success around 80%.",
      },
      {
        name: "Lion",
        description: "Around 10% of Africa's total lion population. Prides of 15-25 individuals — among the largest documented anywhere. Territories run along the Great Ruaha River and the Mwagusi sand river.",
      },
      {
        name: "Elephant",
        description: "Ruaha-Rungwa ecosystem holds roughly 15,000, recovering from a poaching crash that hit 8,272 in 2014. Many tuskless females as a legacy. Herds of several hundred concentrate on the river in the dry season. Elephants digging for subsurface water in dry sand riverbeds is the signature Ruaha image.",
      },
      {
        name: "Greater Kudu",
        description: "Absent from northern Tanzania. Males carry spiralling horns reaching over a metre in length. Present year-round in the mixed woodland and miombo forest zones.",
      },
      {
        name: "Sable Antelope",
        description: "Scimitar-horned, jet-black males. Absent from the northern circuit. Reliable in the park's open grassland areas during the dry season.",
      },
      {
        name: "Ruaha Red-Billed Hornbill",
        description: "Endemic to Ruaha National Park — found nowhere else. One of over 570 bird species recorded here, including European and Asian migrants in the green season.",
      },
    ],
    bestTimeToVisit: [
      {
        month: "Jun-Aug",
        weather: "Dry, warm days, cold nights (10°C at times). Single rainy season means drier than northern circuit equivalents.",
        wildlife: "Excellent. Wildlife concentrating on rivers. Wild dog denning — most predictable sighting window of the year.",
        crowds: "Low",
      },
      {
        month: "Sep-Oct",
        weather: "Dry, hot (30-35°C midday). Elephants digging for water in sand riverbeds.",
        wildlife: "Peak dry-season concentration. Elephant herds at maximum. Buffalo herds 500+. Predator action highest.",
        crowds: "Low-Moderate",
      },
      {
        month: "Nov-Dec",
        weather: "Rains begin around mid-December. Lush and green. Birding peaks with European and Asian migrants arriving.",
        wildlife: "Wildlife disperses as water sources return. Wild dog pups emerging with packs. Photography conditions excellent.",
        crowds: "Very low",
      },
      {
        month: "Jan-Feb",
        weather: "Green season. Hot and humid. Rains intensify through February.",
        wildlife: "Dispersed but present. Breeding season for many species. Exceptional birding.",
        crowds: "Very low. Discounted rates at most camps.",
      },
      {
        month: "Mar-May",
        weather: "Ruaha has one long rainy season (unlike the north's two). March-April is the wettest, with ~250mm in April. Coastal Aviation suspends Ruaha flights mid-March to end of May.",
        wildlife: "Most camps closed. Ruaha River Lodge remains open year-round and offers significant discounts. Expert Africa notes April-May as a sometimes-surprising hidden gem for those who self-drive from Iringa: clear skies after morning rain, lush landscapes, virtually zero other visitors.",
        crowds: "Closed season for most operators. Ruaha River Lodge open.",
      },
    ],
    relatedItineraries: ["8-day-classic-tanzania-safari"],
    additionalSections: [
      {
        heading: "Walking Safaris",
        body: "Walking safaris in Ruaha operate under a different set of rules from the northern circuit. The park permits multi-day foot safaris, including remote fly-camping in the eastern sections where no vehicle tracks exist. Operators like Kichaka Expeditions (three tents, specialist guide Andrew 'Moli' Molinaro) and Jongomero have built their reputations specifically on foot-based wildlife encounters.\n\nOn a walking safari, the guides work at a different scale. They read tracks in sand riverbeds, identify kills from vulture behaviour half a kilometre away, and use the wind and terrain to approach animals on foot. The elephant's reaction to a walking party is not the same as its reaction to a Land Cruiser. Some guides argue the walking encounter is the more honest wildlife experience.\n\nWalking safaris are not suitable for families with young children and require reasonable physical fitness. Half-day walks from a vehicle-based camp are available at most properties, including Mwagusi and Jongomero. Full multi-day routes require advance booking and are best discussed directly when planning the trip.",
      },
      {
        heading: "Camps — Current Status",
        body: "Camp selection in Ruaha matters more than in the northern circuit because the park is vast and properties are far apart. Your camp's location determines which section of the park you access most easily.\n\nJongomero Camp is eight luxury tents in the remote south, on a private concession. Now operated by the LABA Hotel Group after renovation. Rates run around $997 per person per night in 2026/27. Operates June 1 through March 1. The southern position gives access to terrain with a Southern African ecological character: greater kudu, sable, and different predator dynamics from the northern riverine areas.\n\nMwagusi Safari Camp, on the Mwagusi sand river, is the camp safari specialists consistently name first. Owner-run by Chris Fox. The wild dog packs that den near Mwagusi in June-July are the reason. Widely called the best location in the park.\n\nKokoko Camp (Asilia) replaced Kwihala, which has permanently closed. Many pages still list Kwihala — do not be confused. Kokoko occupies a similar position with updated facilities.\n\nJabali Ridge (Asilia) opened in 2017 with eight suites on a kopje, infinity pool, and a spa. Positioned for those who want luxury infrastructure alongside remote wildlife.\n\nRuaha River Lodge (Foxes Safari Camps) is the oldest property in the park and the only one that operates year-round. Stone-and-thatch bandas on the Great Ruaha River. The most economical option, and the only choice if you are travelling in the April-May window.\n\nKigelia Ruaha (Nomad Tanzania), Mdonya Old River Camp, Ikuka Safari Camp, and Kichaka Expeditions complete the serious options.",
      },
    ],
    faqs: [
      {
        question: "What makes Ruaha National Park unique?",
        answer:
          "Three things set Ruaha apart from every other Tanzania park. First, it sits at the convergence of East African and Southern African ecosystems, which means it holds species absent from the northern circuit entirely: greater kudu, lesser kudu, sable antelope, roan antelope, and the endemic Ruaha red-billed hornbill found nowhere else on Earth. Second, it is one of only three African landscapes with more than 500 adult wild dogs (with KAZA and Selous-Niassa), and the packs here are actively tracked. Third, walking safaris are freely permitted, including multi-day routes into remote areas with no vehicle tracks. The Serengeti prohibits walking in the core zone entirely.",
      },
      {
        question: "Is Ruaha worth visiting? How does it compare to the Serengeti?",
        answer:
          "They are not comparable in a straightforward way. The Serengeti has the Great Migration, 350,000 annual visitors, extensive infrastructure, and the largest wildlife spectacle in Africa. Ruaha has 20,000 annual visitors, a park 40% larger, no hot-air balloons, and long drives without seeing another vehicle. The wildlife encounters at Ruaha feel different from the northern circuit because the animals are less habituated to vehicles. Many repeat safari visitors say Ruaha is the park that made their previous trips feel crowded. If this is your first Tanzania safari and you want the migration, start with the northern circuit. If you have done the northern circuit and want something else, Ruaha is the right next step.",
      },
      {
        question: "Are there cheetahs in Ruaha?",
        answer:
          "Yes, cheetahs are present in Ruaha but sightings are less consistent than in the Serengeti or Ndutu. The open grassland areas offer sprint-hunting conditions, but the mixed woodland that covers much of the park is not ideal cheetah habitat. Sightings are possible, particularly in the open plains near the Mwagusi area, but cheetah is not a reliable Ruaha headline species. Wild dog, lion, and elephant are the reliable targets.",
      },
      {
        question: "How do you get to Ruaha National Park?",
        answer:
          "The standard route is a flight to Msembe Airstrip inside the park. Coastal Aviation operates a daily service from Dar es Salaam (approximately 2.5 hours, from around $430 one-way). Auric Air flies the Serengeti-Ruaha route three times a week (Monday, Thursday, Saturday), useful for combining northern and southern circuits on one trip. Coastal Aviation suspends Ruaha flights mid-March to end of May due to the long rains. Self-drive from Iringa (112 km, about three hours on rough dirt roads) is possible with a 4WD, and Ruaha River Lodge is the only camp that caters specifically to self-drive guests.",
      },
      {
        question: "How many days do I need in Ruaha?",
        answer:
          "Three full days is the minimum for a meaningful visit. Five is better. Ruaha rewards longer stays in fewer camps more than the multi-camp model that suits Luangwa or a quick Serengeti circuit. Wild dog in particular requires time: packs are not visible every day, and a guide working the radio network over multiple days improves your odds significantly. The best Ruaha trips tend to base at one or two camps, explore the same areas repeatedly, and leave knowing specific animals. Three-day visits tend to leave guests wishing they had stayed longer.",
      },
      {
        question: "Are wild dogs guaranteed in Ruaha?",
        answer:
          "No. Wild dog sightings are never guaranteed anywhere in Africa, and experienced visitors report wildly different outcomes: some see packs on day one, others complete seven-day trips without a sighting. What Ruaha offers is the highest probability in East Africa. The June-July denning season, when packs return daily to a fixed den site, is the most predictable window. Guides track pack locations via the radio network with researchers from the Ruaha Carnivore Project. Minimum three full days strongly improves the odds.",
      },
      {
        question: "Can you combine Ruaha with the northern circuit?",
        answer:
          "Yes. Auric Air's three-times-weekly Serengeti to Ruaha flight is the direct connection, making a northern-then-southern circuit possible without routing through Dar es Salaam. Allow at least 12 days total to do both circuits justice. A Ruaha and Zanzibar combination is also popular: fly Dar es Salaam to Ruaha for 4-5 nights, then Ruaha to Zanzibar via Dar or direct with Coastal Aviation. Contact us with your dates and we will build the routing.",
      },
      {
        question: "What is the best lodge in Ruaha?",
        answer:
          "Safari specialists consistently name Mwagusi Safari Camp first for overall experience and location. Jongomero is the top luxury option, with eight tents in a private concession in the remote south at around $997 per person per night. Jabali Ridge (Asilia) has the best infrastructure for guests who want hotel-standard amenities in the bush. Ruaha River Lodge (Foxes) is the most economical and the only property open year-round. Kichaka Expeditions is the right choice if walking safaris are the priority. Note: Kwihala Camp has permanently closed and has been replaced by Kokoko Camp (Asilia) — many websites still list Kwihala incorrectly.",
      },
    ],
  },
}

export function getNationalPark(slug: string): NationalPark | undefined {
  return nationalParks[slug]
}

export function getAllNationalParks(): NationalPark[] {
  return Object.values(nationalParks)
}
