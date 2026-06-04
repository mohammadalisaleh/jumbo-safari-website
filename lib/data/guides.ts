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
          "The green season, split between short rains (October-December) and long rains (March-May), transforms Tanzania into a lush paradise. While many travelers avoid this period, it offers significant advantages for those willing to embrace the occasional afternoon shower.",
          "Lower prices are the green season's biggest draw, with discounts of 30-50% on lodges and reduced park fees. Crowds thin dramatically, and you may have entire game drives to yourself. The landscape is stunning, with emerald grasses, dramatic storm clouds, and excellent lighting for photography.",
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
          "The Northern Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) experiences two rainy seasons: short rains in October-December and long rains in March-May. Temperatures remain relatively consistent year-round, with highs around 25-30°C (77-86°F) and cooler conditions at higher elevations like Ngorongoro.",
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
          "There's no single 'best' month. It depends on your priorities. For the Great Migration river crossings, August-September is ideal. For calving season, February is peak. For value and solitude, November offers excellent wildlife with fewer crowds. July-October provides the most reliable dry conditions.",
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

  "tanzania-visa-requirements": {
    slug: "tanzania-visa-requirements",
    title: "Tanzania Visa Requirements for Safari Travellers",
    description:
      "What you actually need to enter Tanzania for a safari: the e-visa, the rule that catches US passport holders, yellow fever, passport validity, and the Zanzibar insurance most people miss.",
    leadParagraph:
      "Almost every visitor needs a visa to enter Tanzania, and the easiest way to get one is the e-visa, applied for online before you fly. A single-entry tourist visa costs $50. The process is straightforward, but a few details trip people up every year, and one of them is specific to US passport holders.",
    sections: [
      {
        id: "the-evisa",
        title: "The e-visa: apply before you fly",
        content: [
          "Tanzania runs an online visa system at the official government portal, eservices.immigration.go.tz. You apply, upload a passport photo and your passport bio page, pay by card, and receive an approval by email to print and carry. Apply at least two to three weeks before you travel. Approval is usually faster, but you do not want to be refreshing your inbox the night before a flight.",
          "Be careful to use only the official .go.tz government site. A number of lookalike sites charge a markup to file the same free-to-apply application for you. There is no need to pay a middleman.",
          "Visa on arrival is still available at Kilimanjaro Airport, Dar es Salaam, and Zanzibar for many nationalities, but it means joining a queue after a long flight, and approval is at the officer's discretion. The e-visa removes that uncertainty.",
        ],
      },
      {
        id: "us-passport-rule",
        title: "The rule that catches US passport holders",
        content: [
          "If you hold a United States passport, you cannot use the standard $50 single-entry visa. Tanzania requires US citizens to apply for the multiple-entry visa, which costs $100. This is not a sales upsell, it is the rule, and it is the single most common mistake we see from American travellers.",
          "The multiple-entry visa is useful anyway if your trip crosses a border and comes back, for example a safari followed by a few days in Kenya and a return to fly home from Tanzania.",
        ],
      },
      {
        id: "passport-and-yellow-fever",
        title: "Passport validity and yellow fever",
        content: [
          "Your passport must be valid for at least six months beyond your date of entry, with at least one blank page for the stamp. Renew early if you are close to that line, because immigration will turn away a passport that falls short.",
          "Yellow fever is the part people worry about needlessly. You only need a yellow fever vaccination certificate if you are arriving from, or have transited for more than twelve hours through, a country with yellow fever risk. Fly direct from Europe or North America and you do not need it. Route through Nairobi, Addis Ababa, or another at-risk country, and you do, so carry the certificate if your connection touches one.",
        ],
      },
      {
        id: "east-africa-and-zanzibar",
        title: "Two things people get wrong",
        content: [
          "The East Africa Tourist Visa does not cover Tanzania. It covers Kenya, Uganda, and Rwanda. If you are combining Tanzania with one of those, you still need a separate Tanzania visa. Plenty of travellers assume one visa covers the region. It does not.",
          "Zanzibar now requires every visitor to hold mandatory inbound travel insurance, bought through the island's official scheme before or on arrival. It is a low-cost policy, separate from your own travel insurance, and it is checked at the airport. If your safari ends with a few days on the coast, budget for it and sort it before you land.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much is a Tanzania tourist visa?",
        answer:
          "A single-entry tourist visa is $50 for most nationalities. US passport holders are required to take the multiple-entry visa, which is $100. Both are applied for online through the official government e-visa portal.",
      },
      {
        question: "Do I need a visa before I arrive, or can I get one at the airport?",
        answer:
          "Both exist. Visa on arrival is available at the main airports for many nationalities, but the e-visa applied for online beforehand is simpler and removes the risk of a long queue or a discretionary refusal after your flight. Apply two to three weeks ahead.",
      },
      {
        question: "Do I need a yellow fever certificate for Tanzania?",
        answer:
          "Only if you are arriving from or transiting for more than twelve hours through a country with yellow fever risk. Flying direct from Europe or North America, you do not. Connecting through somewhere like Nairobi or Addis Ababa, you do, so carry the certificate.",
      },
      {
        question: "Does the East Africa Tourist Visa include Tanzania?",
        answer:
          "No. The East Africa Tourist Visa covers Kenya, Uganda, and Rwanda only. Tanzania requires its own separate visa even if you are visiting the region on one trip.",
      },
      {
        question: "Is there anything extra for Zanzibar?",
        answer:
          "Yes. Zanzibar requires all visitors to hold mandatory inbound travel insurance purchased through its official scheme, checked on arrival. It is inexpensive and separate from your own travel insurance. Sort it before you land if your trip includes the coast.",
      },
    ],
  },

  "what-to-pack-safari": {
    slug: "what-to-pack-safari",
    title: "What to Pack for a Tanzania Safari",
    description:
      "A practical packing guide for a Tanzania safari from a guide who runs them: the colours that matter, why layers are not optional, the bag bush flights demand, and the one item that is actually illegal.",
    leadParagraph:
      "Pack less than you think, in the right colours, in a soft bag. That is most of it. A Tanzania safari does not call for a big wardrobe, and overpacking only fights you on small bush flights with tight luggage limits. Here is what actually earns its place in the bag.",
    sections: [
      {
        id: "colours",
        title: "Colours: it is not just style",
        content: [
          "Stick to neutral, muted tones: khaki, olive, brown, tan, soft green. There are real reasons behind this, not just convention. Bright white shows every speck of dust within an hour of the first game drive. Dark blue and black attract tsetse flies, which are drawn to those colours and bite hard, so leave them at home for daytime drives.",
          "One colour to avoid entirely: camouflage. Wearing military-pattern clothing is illegal for civilians in Tanzania, and it is reserved for the armed forces. Tourists do get stopped over it. Leave anything camo out of the bag completely.",
        ],
      },
      {
        id: "layers",
        title: "Layers, because the day swings hard",
        content: [
          "A safari day starts cold and ends hot. Early game drives in an open vehicle, especially up in the Ngorongoro highlands, can be genuinely cold, near freezing at the rim on some mornings. By midday on the plains you are in strong sun and real heat. One outfit will not cover both.",
          "Pack a warm fleece or light down layer for mornings, long-sleeved shirts and light trousers for the day, and something to strip down to as it warms. A wide-brimmed hat and a buff or scarf for dust round it out. Evenings at camp are cooler than you expect, so keep one warm layer back for dinner.",
        ],
      },
      {
        id: "the-bag",
        title: "The bag matters more than you think",
        content: [
          "If your trip includes a light aircraft transfer between parks, and many Northern Circuit and Serengeti trips do, you are held to a strict luggage limit, usually around 15 kg including hand luggage, in a soft duffel bag only. Hard suitcases do not fit in the small holds and will be refused.",
          "Use a soft, squashable duffel. Most camps offer same-day or next-day laundry, often included, which means you can pack for four or five days and have clothes washed rather than carrying two weeks of outfits. This is the single biggest space saver, and almost nobody believes it until they are there.",
        ],
      },
      {
        id: "the-rest",
        title: "The small things that count",
        content: [
          "Bring your own binoculars if you can, one pair per person rather than sharing, because the moment two people want the same pair is always the moment the leopard is in the tree. A good pair changes the whole experience.",
          "Sun protection that works: high-factor sunscreen, lip balm with SPF, sunglasses. Insect repellent with DEET for dawn and dusk. Any personal medication in its original packaging, plus a small kit for the basics, because the nearest pharmacy can be hours away. A power bank and the right plug adapter (Tanzania uses the UK-style three-pin socket). And a headtorch, which you will reach for at camp every single night.",
        ],
      },
    ],
    faqs: [
      {
        question: "What colours should I avoid on safari?",
        answer:
          "Avoid bright white, which shows dust immediately, and dark blue and black, which attract biting tsetse flies during the day. Never wear camouflage, which is illegal for civilians in Tanzania. Stick to neutral khaki, olive, brown, and tan.",
      },
      {
        question: "How cold does it get on a Tanzania safari?",
        answer:
          "Early-morning game drives in open vehicles can be near freezing, especially in the Ngorongoro highlands, before warming to strong heat by midday. Pack a warm fleece or light down layer for mornings even though most of the day is hot.",
      },
      {
        question: "What luggage can I bring on safari?",
        answer:
          "If your trip includes light aircraft transfers, you are usually limited to around 15 kg in a soft duffel bag, hand luggage included. Hard suitcases are refused on small bush flights. Most camps offer laundry, so you can pack for four or five days rather than the whole trip.",
      },
      {
        question: "Do I need my own binoculars?",
        answer:
          "Bring a pair per person if you can. Sharing one pair across a vehicle never works at the moment it matters. Good binoculars genuinely change how much you see and enjoy.",
      },
      {
        question: "What power plug does Tanzania use?",
        answer:
          "Tanzania uses the UK-style three-pin (Type G) socket at 230 volts. Bring the right adapter and a power bank, since charging in remote camps can be limited to certain hours.",
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
