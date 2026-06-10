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
    heroImage: {
      src: "/lion-pride-serengeti-tanzania-july-safari.jpg",
      alt: "Pride of lions resting on a fallen tree trunk in the green Serengeti bush, Tanzania, a typical July safari encounter",
    },
    intro:
      "July is the beginning of the best three months for safari in Tanzania. The long rains ended in May. The grass is short. Animals concentrate around shrinking water sources and are easy to spot. In the northern Serengeti, the wildebeest herds are pushing toward the Mara River for the first crossings of the season. In Ngorongoro, the crater floor is cold at dawn and clear all day. In Tarangire, elephants are gathering in numbers that peak in August and September but are already exceptional. This is the month most experienced safari travellers choose. It is also the month that needs the most advance planning.",
    highlights: [
      "First Mara River crossings of the season, northern Serengeti, Kogatende",
      "Peak predator visibility on short dry-season grass across all parks",
      "Tarangire elephant herds building toward the annual river peak",
      "Ngorongoro Crater cold and clear. Best rhino sightings of the year.",
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
          "Excellent year-round, and particularly clear in July. Short dry-season grass gives unobstructed sightlines across the full 260 km² floor. Black rhino sightings at Gorigor Swamp are most frequent in July when the floor is dry. Rim mornings are cold (5-9°C). Bring a fleece.",
        rating: "excellent",
      },
      {
        park: "Tarangire National Park",
        conditions:
          "Elephant herds building along the Tarangire River, 300-600 individuals visible from a single position in peak months. The baobab landscape is at its most photogenic with dry golden light. Far fewer vehicles than the Serengeti, and game viewing that rivals it.",
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
          "The calving season herds left in March and have moved north. Resident wildlife remains but the grasslands are quieter. Not the right choice for a July safari. Better in January through March.",
        rating: "fair",
      },
    ],
    weeklyProgression: [
      {
        week: "July 1-7",
        activity:
          "Wildebeest herds massing on Mara River banks at Kogatende. First crossings likely in the opening days. Western Corridor still has residual herds moving north. Predator activity high across the north.",
        bestLocation: "Northern Serengeti, Kogatende crossing points",
      },
      {
        week: "July 8-14",
        activity:
          "Crossings accelerating. Herd density at the Mara River increases as animals continue pushing north from the central Serengeti. Multiple crossing attempts per day at main sites. Lion and crocodile predation at peak.",
        bestLocation: "Northern Serengeti, Sand River and main Mara crossings",
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
        bestLocation: "Northern Serengeti, both Mara crossing points",
      },
    ],
    weather: [
      {
        location: "Ngorongoro Crater Rim (2,286m)",
        tempRange: "5-9°C morning / 20°C midday",
        rainfall: "~10mm",
        notes: "Cold at dawn. Fleece, hat, and windproof layer essential before descent.",
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
        notes: "Warm and dry throughout. Golden light for photography.",
      },
      {
        location: "Arusha",
        tempRange: "12°C morning / 26°C afternoon",
        rainfall: "~20mm",
        notes: "Pleasant highland climate, cooler than the parks",
      },
    ],
    additionalSections: [
      {
        heading: "The Mara River Crossings: What to Actually Expect",
        body: "The Mara River crossings are the most-photographed wildlife event in Africa, and they come with a crowd. The two main crossing points near Kogatende can hold 20-30 vehicles during active events. When a herd commits, every guide in the north hears about it and drives there. This is the reality of July peak season.\n\nThe experience still delivers, but expectations matter. A crossing takes 15 minutes to two hours. Most end without drama. Herds approach, mill at the bank, turn back. When they do commit, wildebeest plunge in 10,000 at a time, crocodiles move in, and the chaos is exactly what every documentary shows. The problem is the foreground: other vehicles.\n\nThe mitigation is guide quality and lodge position. A guide who knows the north Serengeti moves to secondary crossing points downstream where fewer vehicles go, tracks herd movements the evening before, and arrives before the buses from distant lodges. Lamai camp, positioned north of the Mara River, puts you on the north bank before most vehicles arrive from the south.\n\nFor travellers who want July's wildlife density without the river crowds: Tarangire is the answer. Elephant herds of 300-600 individuals along the Tarangire River. The baobab landscape at its most photogenic. A fraction of the vehicles. Not the migration, but outstanding game viewing by any other standard.",
      },
      {
        heading: "How Far in Advance to Book",
        body: "July is the most-booked month for Tanzania safaris among English-speaking travellers. Available inventory at top properties disappears faster than most people expect.\n\nNorthern Serengeti fly-camps (Asilia Sayari, Nomad Lamai, Olakira Migration Camp, Serengeti Safari Camp): 9-12 months minimum for peak weeks. These properties run 8-16 tents. July allocations fill completely by October of the prior year for the best-positioned camps.\n\nCentral Serengeti lodges (Four Seasons Safari Lodge, Serengeti Serena, Lemala Nanyukie): 6-8 months is realistic. Larger properties with more inventory, but July occupancy runs 90-100%.\n\nNgorongoro rim lodges (Ngorongoro Serena, Sopa, andBeyond Crater Lodge): 6 months for most dates. The crater is exceptional in July and sometimes overlooked by travellers fixated on the Mara crossings, which means better availability than the northern Serengeti at a different price point.\n\nTarangire (Tarangire Treetops, Swala Camp, Oliver's Camp): 4-6 months is sufficient for most July dates. The best-value great wildlife month on the northern circuit, and the most forgiving on lead time.\n\nIf you are booking within three months of July travel, contact us immediately. We will work around available inventory rather than building from scratch, and the options narrow quickly.",
      },
      {
        heading: "Why a Private Safari Is Worth It in July",
        body: "In July at the Mara River, a shared-vehicle group safari and a private safari are at the same crossing point, watching the same wildebeest. The difference is everything that happens before and after the crossing.\n\nIn a group safari, your driver coordinates with 10 other vehicles carrying clients from different lodges with different schedules. In a private safari, your guide's only job is positioning your vehicle for the best angle and staying as long as you want.\n\nAt peak crossing points, the difference in vehicle positioning between the best guide and an average guide is 30 metres. That is the difference between a clear sightline and a Land Cruiser in your frame for the crossing that took three days to happen.\n\nJuly is also the month where cold mornings, long game drives, and flexible timing matter most. A private vehicle departs when you want. It stays at a lion kill until you are done. It takes you back to the lodge at midday if you want to rest and returns to the field at 4pm. No group safari does any of those things.\n\nThe premium for private in July is real. So is the difference in what you come home with.",
      },
    ],
    sampleItineraries: [
      {
        title: "Great Migration Safari",
        duration: "10 Days / 9 Nights",
        parks: "Northern Serengeti · Serengeti · Ngorongoro",
        price: "From $4,150 pp",
        description:
          "Three nights at Kogatende in the northern Serengeti, positioned for the Mara River crossings that start in July, then central Serengeti and a full day on the Ngorongoro crater floor on the return. The trip built around the migration.",
        slug: "great-migration-safari",
      },
      {
        title: "8-Day Classic Tanzania Safari",
        duration: "8 Days / 7 Nights",
        parks: "Tarangire · Serengeti · Ngorongoro",
        price: "From $1,945 pp",
        description:
          "For travellers booking late or on a tighter timeline. Two nights Tarangire, three nights central Serengeti, two nights Ngorongoro. July is peak dry season, so resident game is concentrated and easy to find even without chasing the crossings.",
        slug: "8-day-classic-tanzania-safari",
      },
    ],
    faqs: [
      {
        question: "Is July a good time for a Tanzania safari?",
        answer:
          "July is one of the three best months for safari in Tanzania, alongside August and October. The dry season is established, grass is short, animals concentrate around water sources, and wildlife visibility is as high as it gets all year. The wildebeest migration is at the Mara River in the northern Serengeti. Tarangire elephant herds are building toward their annual peak. Ngorongoro is clear and cold. The trade-off is cost and availability. July is peak season and lodges fill months in advance.",
      },
      {
        question: "Where is the wildebeest migration in July?",
        answer:
          "In July, the bulk of the wildebeest herds have moved north through the Western Corridor and are arriving at the Mara River near Kogatende in the northern Serengeti. The first river crossings of the season typically begin in early July, with frequency and intensity building through late July and peaking in August. By mid-July, the northern Serengeti around Kogatende and the Lamai Wedge has the highest concentration of animals.",
      },
      {
        question: "How cold is Tanzania in July?",
        answer:
          "It depends where you are. On the Ngorongoro Crater rim at 2,286m, dawn temperatures before the morning game drive are 5-9°C, cold enough to need a fleece, hat, and windproof jacket. In the central Serengeti, mornings are around 13°C, warming to 26-28°C in the afternoon. Tarangire is similar. The cold is concentrated in the early morning; afternoons are warm everywhere. Pack layers regardless of where you are going.",
      },
      {
        question: "What should I pack for a Tanzania safari in July?",
        answer:
          "A fleece or light down jacket is essential, particularly for Ngorongoro and any early game drive. Neutral-coloured clothing (khaki, olive, tan, grey) for game drives. Bright colours disturb animals. A windproof outer layer for open-roof vehicles in the cold morning air. Sunscreen SPF 50+ for afternoon drives. Binoculars (8x42 or 10x42 recommended). Closed-toe shoes for the Ngorongoro crater floor stop. Tanzania uses Type G plugs (UK standard). Bring a universal adapter.",
      },
      {
        question: "Is July peak season in Tanzania?",
        answer:
          "Yes. July through October is peak season, with July and August the most booked months. Lodge rates are at their annual high, availability is tightest, and the northern Serengeti has the highest vehicle concentration of the year. Expect to pay 20-40% more for lodges in July compared to shoulder months (January-March, November-December). The wildlife conditions justify the premium for most travellers.",
      },
      {
        question: "Which parks are best for a safari in July?",
        answer:
          "Northern Serengeti (Kogatende) for the wildebeest migration and Mara River crossings. Ngorongoro Crater year-round, particularly clear in July with concentrated wildlife and good rhino sightings. Tarangire for elephant herds building toward peak and baobab landscapes. Excellent wildlife, far fewer vehicles than the Serengeti. Central Serengeti (Seronera) for reliable resident predators. Ndutu and the southern Serengeti are the weakest choice in July. The migrating herds have moved north.",
      },
      {
        question: "How far in advance should I book a July Tanzania safari?",
        answer:
          "For northern Serengeti fly-camps near the Mara River, 9-12 months minimum. These properties have 8-16 tents and July allocations fill completely by October the prior year. For mid-range lodges in the central Serengeti and Ngorongoro, 6-8 months is realistic. Tarangire is more forgiving. 4-6 months is generally sufficient. If you are within three months of your July travel dates, contact us immediately: options narrow quickly at this stage.",
      },
      {
        question: "Is it crowded at the Mara River in July?",
        answer:
          "Yes, at the main crossing points. The two primary sites near Kogatende can have 20-30 vehicles waiting during active crossing events. This is the reality of peak season at the most famous wildlife spectacle in Africa. The mitigation is guide quality: an experienced north Serengeti guide positions at secondary crossings downstream, tracks herd movements from the evening before, and arrives before the vehicles from distant lodges. Lodge choice matters too. Lamai camp north of the river gives a different approach than the main southern routes.",
      },
      {
        question: "What is the weather like in Tanzania in July?",
        answer:
          "July is reliably dry across all northern safari parks. Rainfall is minimal, 5-20mm for the month depending on location. Days are warm (24-30°C in the afternoon) and mornings are cold at altitude. Ngorongoro Crater rim sees 5-9°C at dawn. The central Serengeti is warmer at around 13°C in the morning, 27°C by midday. No rain to plan around. The main weather consideration in July is the cold mornings, not the wet.",
      },
      {
        question: "Can I see the Big Five in Tanzania in July?",
        answer:
          "Yes. In Ngorongoro Crater: lion, elephant, and buffalo are reliable; leopard possible in the Lerai Forest; black rhino present and most frequently spotted at Gorigor Swamp in July when the floor is driest. In the Serengeti: lion, leopard, cheetah consistent in the Seronera Valley; elephant and buffalo in the north and western areas. Tarangire has lion, leopard, elephant, and buffalo reliably. No rhino. For the best Big Five concentration on a single day, Ngorongoro Crater in July is the strongest option on the northern circuit.",
      },
    ],
    relatedItineraries: [
      "8-day-classic-tanzania-safari",
      "calving-season-safari",
      "honeymoon-tanzania-zanzibar",
    ],
  },
  august: {
    slug: "august",
    month: "August",
    title: "Tanzania Safari in August",
    description:
      "August is the peak month for the Mara River crossings, the peak month for Tarangire elephant herds, and the most expensive month to safari in Tanzania. Complete guide to August conditions, booking timelines, and what to actually expect on the ground.",
    heroImage: {
      src: "/wildebeest-calf-ndutu-calving-season-tanzania.jpg",
      alt: "Wildebeest crossing the Mara River in the northern Serengeti during the Great Migration, Tanzania",
    },
    intro:
      "August is the best month to safari in Tanzania. That is a position, and I will defend it. The Mara River crossings are at maximum frequency. The Tarangire elephant herds hit their annual peak, up to 500 individuals concentrated at the river. The Serengeti short-grass plains make every predator sighting effortless. Ngorongoro Crater is cold and clear. Everything is working at once. The price for this is the highest lodge rates of the year, the most vehicles at crossing points, and the least forgiving booking window on the continent. If you want August, you plan in October for it.",
    highlights: [
      "Mara River crossings at peak frequency, multiple crossings per day at main sites",
      "Tarangire elephant herds at annual maximum: 500–600+ animals at the river",
      "Best predator visibility of the year across all northern circuit parks",
      "Ngorongoro Crater: dry floor, maximum rhino sightings, cold clear mornings",
      "Longest confirmed dry window: no rain from June through October",
    ],
    wildlifeConditions: [
      {
        park: "Northern Serengeti (Kogatende/Lamai)",
        conditions:
          "Peak of the Great Migration. The Mara River crossing frequency in August exceeds any other month. Herd density on both banks is at its annual maximum. Multiple crossings per day at main sites, with lion, hyena, and crocodile all working the river. Lamai Wedge holds enormous concentrations of wildebeest between crossing attempts. The best single location for wildlife drama anywhere in Africa, in August.",
        rating: "excellent",
      },
      {
        park: "Tarangire National Park",
        conditions:
          "August is Tarangire's peak month. The Tarangire River is the only water in the ecosystem and draws elephants from across the region. Concentrations of up to 500 individuals at the river are documented in August and September. Old bulls with tusks measuring over a metre. The park holds more than 3,000 elephants total; in August they come to the river in groups that exceed any other time of year. The baobab landscape in dry-season gold. No other month compares for elephants.",
        rating: "excellent",
      },
      {
        park: "Ngorongoro Crater",
        conditions:
          "Excellent year-round and particularly strong in August. The crater floor is fully dry, concentrating animals at the Gorigor Swamp and Lerai Forest. Black rhino sightings at Gorigor are most frequent in the July–September window. Lion prides are active and visible on the open floor from early morning. The rim at 2,286m is cold at dawn (4–8°C). Descend wearing a fleece.",
        rating: "excellent",
      },
      {
        park: "Central Serengeti (Seronera)",
        conditions:
          "Resident predators are consistent year-round at Seronera. August is not where the migration is, but the big cats in the kopjes and along the Seronera River are reliable and accessible. Good fall-back if northern Serengeti lodges are full. Far fewer vehicles than the north in August.",
        rating: "good",
      },
      {
        park: "Ndutu / Southern Serengeti",
        conditions:
          "The calving season herds left in March. Resident wildlife remains but this is the quietest zone in August. Not the right choice. Return in January.",
        rating: "fair",
      },
    ],
    weeklyProgression: [
      {
        week: "August 1–7",
        activity:
          "Continuation of the July crossing momentum. Herd density at the Mara River banks is at its highest point of the year. Multiple crossing attempts per day at Kogatende main site. Some herds push into Kenya and return, others stay on the Tanzania side before committing. Predator ambush at river banks is constant.",
        bestLocation: "Northern Serengeti, Kogatende and Sand River crossings",
      },
      {
        week: "August 8–14",
        activity:
          "The middle two weeks of August are historically the highest-intensity crossing period. Herd sizes are maximum. Animals are funnelling toward the river from the central Serengeti in waves. The Lamai Wedge holds 50,000+ wildebeest between crossings. Cheetah and leopard sightings peak on the Lamai Wedge where the prey concentration is highest.",
        bestLocation: "Northern Serengeti (Lamai Wedge and Kogatende)",
      },
      {
        week: "August 15–21",
        activity:
          "Crossings continue with sustained intensity. Some herds are now north of the Mara River in Kenya's Masai Mara. They cross back and forth repeatedly. Vehicles at main crossing points are at their highest concentration of the year. Guides who know secondary crossings 3–5km downstream have a significant positioning advantage.",
        bestLocation: "Northern Serengeti, secondary crossings north of main site",
      },
      {
        week: "August 22–31",
        activity:
          "Crossings continue through the end of August. The very end of the month sees some herds beginning a slow drift southward, but August finishes strong. September maintains similar patterns. No hard cutoff in the migration.",
        bestLocation: "Northern Serengeti (still), Tarangire for elephants in parallel",
      },
    ],
    weather: [
      {
        location: "Ngorongoro Crater Rim (2,286m)",
        tempRange: "Near-freezing to 2°C morning / 18°C midday",
        rainfall: "~5mm",
        notes: "August is the coldest month on the rim. Frost is common at dawn. Snow has been recorded. A proper down or fleece jacket, hat, and windproof layer are not optional.",
      },
      {
        location: "Central Serengeti (Seronera)",
        tempRange: "14°C morning / 25°C afternoon",
        rainfall: "~5mm",
        notes: "Warm afternoons, cold mornings. Virtually no rain. Dust increases as the dry season extends.",
      },
      {
        location: "Northern Serengeti (Kogatende)",
        tempRange: "14°C morning / 26°C afternoon",
        rainfall: "~5mm",
        notes: "Slightly warmer than central Serengeti. Afternoon wind off the Mara escarpment makes open-roof driving cold in the early hours.",
      },
      {
        location: "Tarangire",
        tempRange: "14°C morning / 24°C afternoon",
        rainfall: "~5mm",
        notes: "Warm and completely dry. Dust on game drive tracks is significant in August. Bring a dust bag for camera gear.",
      },
      {
        location: "Arusha",
        tempRange: "11°C morning / 25°C afternoon",
        rainfall: "~15mm",
        notes: "Pleasant highland city climate. Cooler than the parks.",
      },
    ],
    additionalSections: [
      {
        heading: "The Mara River in August: Honest Expectations",
        body: "The Mara River crossings in August are everything the documentaries show, and they come with a context that matters.\n\nThe northern Serengeti sees up to 600 vehicles per day across its 4,000 square kilometres during August peak. At the active crossing points, congestion is severe enough that TANAPA deployed dedicated patrol vehicles in 2024 specifically to manage Kogatende. The crossing points are numbered 1 to 10. Numbers 4, 7, and 10 are the most visited. When a herd commits to the river, every guide within radio range drives to the nearest numbered site.\n\nNone of this is a reason not to go. It is a reason to choose your guide and your camp carefully. A guide who knows the northern Serengeti tracks the herd's position from the evening before, identifies which bank section the animals are testing, and arrives at one of the lesser-visited crossing points before the vehicle concentration assembles. Less volume in the river, fewer vehicles in frame.\n\nCamp position matters more in August than in any other month. Lamai and the north-bank fly-camps have a structural advantage: they approach crossing points from the north side, which means fewer vehicles between camp and the action, and shorter drive times. South-bank lodges drive an extra 30–45 minutes and typically arrive after the north-bank camps.\n\nFor travellers who want August wildlife without the Mara crowds: Tarangire. The elephant herds peak in August, vehicle density is a fraction of the north, and the photography conditions (dry-season gold light, baobab backdrop) are superior for most subjects.",
      },
      {
        heading: "August Booking Reality",
        body: "August is the hardest month to book in Tanzania. Not difficult, hard.\n\nNorthern Serengeti fly-camps (Asilia Sayari, Nomad Lamai, Olakira Migration Camp, Serengeti Safari Camp, Lemala Kuria Hills): 10–12 months minimum. The best-positioned north-bank camps have 8–12 tents. August allocations fill by September or October the prior year for the top weeks. This is not marketing urgency, it is inventory mathematics.\n\nMid-range northern Serengeti lodges (Serengeti Bushtops, Serengeti Sopa, Serengeti Serena): 7–9 months for August. Larger properties with more rooms, but August occupancy runs 95–100% at all of them.\n\nNgorongoro rim (Ngorongoro Serena, andBeyond Crater Lodge, The Highlands, Rhino Lodge): 6–8 months. Often overlooked by travellers fixated on the migration. August at the crater is outstanding and has better availability than the north.\n\nTarangire (Tarangire Treetops, Swala Camp, Oliver's Camp, Sanctuary Swala): 5–7 months. The best value month in Tanzania for serious wildlife. Availability is more forgiving than the north because fewer travellers prioritise it.\n\nIf you are reading this within 3 months of an August departure, contact us now. We can work with remaining inventory across the northern circuit, but options at this stage require flexibility.",
      },
      {
        heading: "August vs July: Which Is Better",
        body: "The honest answer is August by a margin for the migration, and equal for everything else.\n\nJuly has the first crossings of the season, which carry a particular energy. The wildebeest are crossing for the first time after months on the southern plains. August has higher crossing frequency because the herds are more established at the river and have memorised the approach routes. More crossings per day in August than July is the consistent pattern.\n\nFor elephants in Tarangire, August is also the stronger month. The herds continue building from their July numbers and peak in late August through September.\n\nFor cost and availability, July is slightly more forgiving than August. A lodge that was full for August peak week may still have one or two nights available in the first week of July.\n\nIf you can only do one month, August. If you can do both, do not.",
      },
    ],
    sampleItineraries: [
      {
        title: "Great Migration Safari",
        duration: "10 Days / 9 Nights",
        parks: "Northern Serengeti · Serengeti · Ngorongoro",
        price: "From $4,150 pp",
        description:
          "August is peak Mara crossing season. Three nights at Kogatende in the northern Serengeti positioned for the river crossings, then central Serengeti and a full day on the Ngorongoro crater floor on the return.",
        slug: "great-migration-safari",
      },
      {
        title: "8-Day Classic Tanzania Safari",
        duration: "8 Days / 7 Nights",
        parks: "Tarangire · Serengeti · Ngorongoro",
        price: "From $1,945 pp",
        description:
          "For travellers who cannot get northern Serengeti availability in August, or who want the migration-free version. Two nights Tarangire for peak elephant herds, three nights central Serengeti, two nights Ngorongoro. Exceptional dry-season game without chasing the crossings.",
        slug: "8-day-classic-tanzania-safari",
      },
    ],
    faqs: [
      {
        question: "Is August the best month for a Tanzania safari?",
        answer:
          "For the Mara River crossings and the Great Migration, yes. August has the highest crossing frequency and herd density of any month at the Mara River. Tarangire elephant herds also peak in August. The tradeoff is the highest lodge rates and least booking availability of the year. If you can plan 10–12 months ahead, August delivers the most consistent high-intensity wildlife viewing of any month on the northern circuit.",
      },
      {
        question: "Where is the wildebeest migration in August?",
        answer:
          "In August, the main wildebeest herds are at the Mara River in the northern Serengeti, crossing back and forth between Tanzania and Kenya's Masai Mara. The Kogatende area and Lamai Wedge hold the highest concentrations. The western Serengeti still has some herds. The southern Serengeti and Ndutu are quiet in August. If your goal is the migration, the northern Serengeti is the only option in August.",
      },
      {
        question: "How far in advance should I book an August safari?",
        answer:
          "10–12 months for the best northern Serengeti fly-camps. 7–9 months for mid-range northern Serengeti lodges. 5–7 months for Tarangire and Ngorongoro. If you are less than 3 months out from an August departure, contact us immediately. Remaining inventory at this stage is limited and requires flexibility on camp choice.",
      },
      {
        question: "How much does an August safari cost compared to other months?",
        answer:
          "August is the most expensive month. Lodge rates are at their annual peak, typically 20–40% above shoulder season (January–March, November–December). A private 8-day mid-range August safari for two people runs $8,400–$12,000 total, compared to $6,400–$9,600 in a shoulder month. The crossing frequency and wildlife conditions justify the premium for most travellers who specifically want the migration.",
      },
      {
        question: "What should I pack for an August Tanzania safari?",
        answer:
          "A proper fleece or light down jacket is non-negotiable, especially for Ngorongoro and any early morning drive. The crater rim at 4–8°C before a descent is cold. Neutral colours for game drives: khaki, olive, tan, grey. A windproof layer for open-roof vehicles. Dust bags for camera equipment, August is the dustiest month on the Serengeti tracks. Binoculars 8x42 minimum. Sunscreen SPF 50+ for afternoon drives. Bring more memory cards than you think you need.",
      },
      {
        question: "Is August crowded at the Mara River?",
          answer:
          "Yes, significantly. The northern Serengeti sees up to 600 vehicles per day in August across its 4,000 km². At active crossing points the congestion is severe enough that TANAPA deployed dedicated patrol vehicles to manage it in 2024. The mitigation is guide quality and camp position: a guide who knows lesser-visited crossing points and a camp on the north bank of the Mara arrive before the main vehicle concentration assembles. Tarangire in August has outstanding elephant herds and a fraction of the vehicle numbers.",
      },
      {
        question: "Which parks are best for a Tanzania safari in August?",
        answer:
          "Northern Serengeti for the Mara River crossings. Tarangire for elephant herds at annual peak. Ngorongoro Crater for Big Five concentration and black rhino. Central Serengeti for resident predators if northern availability is gone. The southern Serengeti and Ndutu are not the right choice in August.",
      },
    ],
    relatedItineraries: [
      "8-day-classic-tanzania-safari",
      "great-migration-safari",
      "calving-season-safari",
    ],
  },
}

export function getMonthPage(slug: string): MonthPage | undefined {
  return monthPages[slug]
}

export function getAllMonthPages(): MonthPage[] {
  return Object.values(monthPages)
}
