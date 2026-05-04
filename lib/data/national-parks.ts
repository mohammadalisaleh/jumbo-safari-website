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
  relatedItineraries: string[]
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
    tagline: "The world's largest intact volcanic caldera",
    description:
      "A UNESCO World Heritage Site and one of Africa's most wildlife-rich areas, the Ngorongoro Crater is a natural wonder.",
    quickFacts: {
      area: "264 km² crater floor",
      unescoStatus: "UNESCO World Heritage Site since 1979",
      bestTime: "Year-round, best June - October",
      famousFor: "Black rhino, dense wildlife, crater views",
      nearestAirport: "Lake Manyara Airstrip, Kilimanjaro International",
    },
    about: [
      "The Ngorongoro Crater is the world's largest intact, inactive volcanic caldera, measuring approximately 19 kilometers across and 600 meters deep. This natural amphitheater, formed when a massive volcano collapsed 2-3 million years ago, now shelters one of Africa's most concentrated wildlife populations.",
      "Often described as 'Africa's Eden' or the 'Eighth Wonder of the World,' the crater floor encompasses grasslands, swamps, forests, and a soda lake that together support an estimated 25,000 large animals year-round. Unlike the Serengeti, animals here don't need to migrate—the crater provides everything they need.",
      "The Ngorongoro Conservation Area, which surrounds the crater, is unique in allowing the indigenous Maasai people to coexist with wildlife, maintaining their traditional pastoral lifestyle while protecting this precious ecosystem.",
    ],
    wildlife: [
      {
        name: "Black Rhino",
        description: "One of the best places in Africa to spot critically endangered black rhino",
      },
      { name: "Lion", description: "Large prides patrol the crater floor daily" },
      {
        name: "Elephant",
        description: "Large tusked bulls roam the crater's forests",
      },
      {
        name: "Flamingo",
        description: "Thousands gather at Lake Magadi in the crater",
      },
      {
        name: "Hippo",
        description: "Plentiful in the Hippo Pool and marshy areas",
      },
      { name: "Hyena", description: "High density of spotted hyenas on the crater floor" },
    ],
    bestTimeToVisit: [
      {
        month: "Jan-Mar",
        weather: "Warm, some rain",
        wildlife: "Good, calving nearby",
        crowds: "Moderate",
      },
      {
        month: "Apr-May",
        weather: "Heavy rains",
        wildlife: "Lush but muddy",
        crowds: "Low",
      },
      {
        month: "Jun-Oct",
        weather: "Dry, cool mornings",
        wildlife: "Excellent, animals concentrated",
        crowds: "High",
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
