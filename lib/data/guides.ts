export interface GuideSection {
  id: string
  title: string
  content: string[]
}

export interface Guide {
  slug: string
  title: string
  description: string
  leadParagraph: string
  sections: GuideSection[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const guides: Record<string, Guide> = {
  "best-time-to-visit-tanzania": {
    slug: "best-time-to-visit-tanzania",
    title: "Best Time to Visit Tanzania for a Safari",
    description:
      "Month-by-month guide to the best time for a Tanzania safari. Great Migration timing, calving season, green season pros and cons.",
    leadParagraph:
      "The best time to visit Tanzania for a safari is during the dry season from June to October, when wildlife concentrates around water sources and vegetation is sparse, making animals easier to spot. However, Tanzania offers excellent safari experiences year-round, with each season bringing unique advantages.",
    sections: [
      {
        id: "dry-season",
        title: "Dry Season: June to October",
        content: [
          "The dry season is Tanzania's peak safari period, and for good reason. As water sources shrink, wildlife congregates around rivers, waterholes, and lakes, creating incredible concentrations of animals. The lack of rain means minimal vegetation, so animals are easier to spot against the golden savanna backdrop.",
          "June and July mark the beginning of the dry season. Temperatures are mild and pleasant, with cool mornings and warm afternoons. This is when the Great Migration reaches the Grumeti River in the Western Serengeti, offering dramatic river crossing opportunities.",
          "August through October is prime time for safari enthusiasts. The Mara River crossings in the northern Serengeti draw photographers and wildlife lovers from around the world. Days are warm and dry, and game viewing is at its absolute best. This is also the busiest and most expensive time to visit.",
        ],
      },
      {
        id: "green-season",
        title: "Green Season: November to May",
        content: [
          "The green season, split between short rains (November-December) and long rains (March-May), transforms Tanzania into a lush paradise. While many travelers avoid this period, it offers significant advantages for those willing to embrace the occasional afternoon shower.",
          "Lower prices are the green season's biggest draw—expect discounts of 30-50% on lodges and reduced park fees. Crowds thin dramatically, and you may have entire game drives to yourself. The landscape is stunning, with emerald grasses, dramatic storm clouds, and excellent lighting for photography.",
          "Wildlife viewing remains good, though animals are more dispersed across the landscape. Migratory birds arrive from Europe and North Africa, making this the best time for birdwatching. Baby animals born during this period provide adorable photographic subjects.",
        ],
      },
      {
        id: "calving-season",
        title: "Calving Season: January to March",
        content: [
          "The calving season is one of Tanzania's best-kept secrets. Between late January and March, over 500,000 wildebeest calves are born on the short-grass plains of Ndutu and the southern Serengeti. This happens during the short dry spell between the rains, creating ideal conditions for newborns.",
          "Watching thousands of calves take their first steps—many within minutes of birth—is an unforgettable experience. The high concentration of vulnerable young attracts predators, making this one of the best times to witness lions, cheetahs, and hyenas in action.",
          "The southern Serengeti and Ndutu area, straddling the boundary between Serengeti National Park and the Ngorongoro Conservation Area, is the epicenter of calving activity. Specialized camps in this region offer front-row seats to nature's greatest nursery.",
        ],
      },
      {
        id: "migration-timing",
        title: "Great Migration Month by Month",
        content: [
          "December-March: The herds graze the southern Serengeti plains. Calving peaks in February. This is an excellent time to witness predator-prey interactions.",
          "April-May: As the long rains begin, the herds start their journey northward through the Serengeti's Western Corridor. River crossings at the Grumeti begin.",
          "June-July: The migration reaches the Western Corridor and Grumeti area. Crocodile-filled river crossings provide dramatic action.",
          "August-October: The peak of migration drama occurs at the Mara River in the northern Serengeti. This is the most famous—and most photographed—part of the migration.",
          "November: Following the short rains, the herds begin their return journey southward, completing the eternal cycle.",
        ],
      },
      {
        id: "weather-overview",
        title: "Tanzania Weather by Region",
        content: [
          "The Northern Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) experiences two rainy seasons: short rains in November-December and long rains in March-May. Temperatures remain relatively consistent year-round, with highs around 25-30°C (77-86°F) and cooler conditions at higher elevations like Ngorongoro.",
          "The Southern Circuit (Ruaha, Selous/Nyerere) has a more pronounced dry season running from June through November. These parks see fewer visitors but offer exceptional game viewing, particularly in Ruaha where large predator densities rival the Serengeti.",
          "Zanzibar and the coast follow a similar pattern to the mainland, with the driest months being June through October. Beach conditions are best during these months, making them ideal for combining safari with beach time.",
        ],
      },
      {
        id: "practical-tips",
        title: "Practical Planning Tips",
        content: [
          "Book early for peak season (July-October). The best lodges and camps fill up 6-12 months in advance, especially for the Mara River crossing period in August-September.",
          "Consider the shoulder months (June and November) for a balance of good wildlife viewing, pleasant weather, and lower prices than peak season.",
          "Don't dismiss the green season entirely. With proper expectations and a good guide, safaris between November and May can be exceptional—and significantly more affordable.",
          "Layer your clothing regardless of season. Mornings can be surprisingly cold, especially in open-top safari vehicles, while midday gets warm.",
          "If your heart is set on witnessing river crossings, August and September offer the highest probability, but timing is never guaranteed in nature.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the absolute best month to visit Tanzania?",
        answer:
          "There's no single 'best' month—it depends on your priorities. For the Great Migration river crossings, August-September is ideal. For calving season, February is peak. For value and solitude, November offers excellent wildlife with fewer crowds. July-October provides the most reliable dry conditions.",
      },
      {
        question: "Can I see the Great Migration year-round?",
        answer:
          "Yes! The Great Migration is a continuous, year-round phenomenon. The herds are always somewhere in the Serengeti-Mara ecosystem. The key is knowing where they'll be during your visit. A good safari operator will position you in the right area based on typical migration patterns.",
      },
      {
        question: "Is it worth visiting during the rainy season?",
        answer:
          "Absolutely, with the right expectations. Rain typically falls in short afternoon showers, not all-day downpours. You'll enjoy lower prices, fewer tourists, lush landscapes, excellent birdwatching, and still see plenty of wildlife. April-May sees the heaviest rain and some lodge closures.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "For peak season (July-October), book 6-12 months ahead. Popular lodges and migration camps sell out early. For green season, 3-6 months is usually sufficient. Last-minute deals are occasionally available during low season but aren't guaranteed.",
      },
      {
        question: "What should I pack for different seasons?",
        answer:
          "Regardless of season, pack layers: warm fleece for cold mornings, light shirts for midday heat. Neutral colors (khaki, green, beige) are best for game drives. For green season, add a light rain jacket and waterproof bag for camera gear. Dry season requires good sunscreen and lip balm.",
      },
    ],
  },
}

export function getGuide(slug: string): Guide | undefined {
  return guides[slug]
}

export function getAllGuides(): Guide[] {
  return Object.values(guides)
}
