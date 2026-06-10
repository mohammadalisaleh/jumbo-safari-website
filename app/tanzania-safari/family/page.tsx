import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Family Safari Tanzania | Safari with Kids",
  description:
    "Private family safaris in Tanzania from Arusha. Tarangire, Serengeti, and Ngorongoro Crater on the northern circuit, paced and structured for children. Minimum age 5.",
  alternates: { canonical: "https://www.jumbosafaris.com/tanzania-safari/family" },
  openGraph: {
    title: "Family Safari Tanzania | Jumbo Safaris",
    description:
      "Private family safaris in Tanzania. Northern circuit paced for children. Minimum age 5. Private vehicle and guide.",
    url: "https://www.jumbosafaris.com/tanzania-safari/family",
  },
}

export default function FamilySafariPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the minimum age for a Tanzania family safari?",
        acceptedAnswer: { "@type": "Answer", text: "The minimum age for a Jumbo Safaris family safari is 5 years old. Children under 12 are required to use a booster seat in the vehicle, which we supply. Contact us before booking if you are travelling with an infant or toddler under 5 to discuss what is practical." },
      },
      {
        "@type": "Question",
        name: "What is the best time of year for a family safari in Tanzania?",
        acceptedAnswer: { "@type": "Answer", text: "July and August align with the northern hemisphere summer school holidays and the dry season, making them the most popular months for family safaris. December and January also work well for wildlife and fall within school holiday windows. The calving season at Ndutu (January to March) is spectacular but better suited to children over 8 due to longer days and more remote lodges." },
      },
      {
        "@type": "Question",
        name: "What vehicle is used for family safaris in Tanzania?",
        acceptedAnswer: { "@type": "Answer", text: "All family safaris use a private 4x4 Toyota Land Cruiser with a pop-up roof. Your family is the only group in the vehicle. The Land Cruiser carries a maximum of six passengers, with most family trips running two to four. Children sit in individual seats and stand through the pop-up roof at sightings." },
      },
      {
        "@type": "Question",
        name: "How much does a family safari in Tanzania cost?",
        acceptedAnswer: { "@type": "Answer", text: "Family safaris start from $4,115 per person based on two adults sharing in the Comfort tier, dropping to around $2,355 per person for a group of six in green season. Children aged 5 to 15 sharing with parents are charged roughly half the adult rate, and many lodges put under-5s free, so a real family of four costs less per head than the adult rate. The recommended 8-day northern circuit covers Tarangire, Serengeti, and Ngorongoro Crater. An accurate quote depends on group size, ages, travel dates, and preferred lodge tier." },
      },
      {
        "@type": "Question",
        name: "Is Tanzania safe for children on safari?",
        acceptedAnswer: { "@type": "Answer", text: "Tanzania's northern circuit is well-suited to families. All game drives are done by vehicle with no bush walks or fitness requirements. The main precautions are malaria prophylaxis (required for all ages, consult a travel medicine doctor), sun protection, and hydration on long drive days. Altitude on the northern circuit ranges from 1,500 to 2,300 metres, which children tolerate well." },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
      { "@type": "ListItem", position: 2, name: "Tanzania Safari", item: "https://www.jumbosafaris.com/tanzania-safari" },
      { "@type": "ListItem", position: 3, name: "Family Safari", item: "https://www.jumbosafaris.com/tanzania-safari/family" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Family Safari Tanzania
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            The northern circuit, run privately for families. Same parks, same wildlife. Adjusted pace and guide approach for children.
          </p>
        </div>
      </section>

      {/* Why it works for families */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_340px] gap-12 [&>*]:min-w-0">
          <div>
            <p className="text-eyebrow uppercase text-orange mb-3">WHY TANZANIA WORKS FOR FAMILIES</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              No embellishment required.
            </h2>
            <div className="space-y-5 text-body-mobile md:text-body-desktop text-ink">
              <p>
                The Serengeti is one of the few places where you can point at something and tell a child what is happening, and the real version is more interesting than anything a book could offer. A lion kill 30 metres from the vehicle. A wildebeest giving birth while hyenas wait. A cheetah accelerating from zero to 110 km/h on open ground. None of this needs narration.
              </p>
              <p>
                Tanzania's northern circuit is also well-suited to families logistically. Game drives are entirely by vehicle. There are no bush walks, no minimum fitness requirements, no long hikes to a viewpoint. Children sit in a pop-up-roofed Land Cruiser and watch through the open roof. The driving distances between parks are long (Tarangire to Serengeti is about six hours), but the route through the Ngorongoro highlands is scenic enough that the drive is not dead time.
              </p>
              <p>
                What changes for a family safari is pace. Standard adult itineraries run the full game-drive hours. Family itineraries adjust the morning and afternoon drives to account for younger attention spans, build in midday breaks at the lodge, and match lunch timing to children's meal patterns rather than safari convention. The guide is briefed specifically for a family group, which means explaining context before a sighting rather than after.
              </p>
              <p>
                The other change is lodge selection. Most northern circuit lodges are family-appropriate, but not all rooms are set up for two adults and two children. We specify family rooms or adjoining configurations at booking, confirm children's menu availability, and check that early dinner service (typically 6:30pm) is on offer. These are small things that matter a lot by Day 4.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:self-start">
            <div className="bg-white border border-border-soft p-6 mb-6">
              <h3 className="font-montserrat font-bold text-lg text-forest mb-4">Family Safari Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-forest/60 font-semibold uppercase tracking-widest text-xs">Minimum age</dt>
                  <dd className="font-semibold text-forest">5 years old</dd>
                </div>
                <div>
                  <dt className="text-forest/60 font-semibold uppercase tracking-widest text-xs">Vehicle</dt>
                  <dd className="font-semibold text-forest">Private 4x4 Land Cruiser (your family only)</dd>
                </div>
                <div>
                  <dt className="text-forest/60 font-semibold uppercase tracking-widest text-xs">Duration</dt>
                  <dd className="font-semibold text-forest">8 days recommended (5-day also available)</dd>
                </div>
                <div>
                  <dt className="text-forest/60 font-semibold uppercase tracking-widest text-xs">Best season</dt>
                  <dd className="font-semibold text-forest">July-August, December-January (school holidays)</dd>
                </div>
                <div>
                  <dt className="text-forest/60 font-semibold uppercase tracking-widest text-xs">Starting price</dt>
                  <dd className="font-semibold text-forest">From $2,355 per person</dd>
                </div>
              </dl>
            </div>
            <div className="bg-forest text-cream p-6">
              <h3 className="font-montserrat font-bold text-lg mb-2">Plan Your Family Trip</h3>
              <p className="text-sm text-cream/80 mb-4">
                Tell us the ages of your children and your travel dates. We will adjust the route accordingly.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-cream text-forest font-montserrat font-semibold px-6 py-3 text-center hover:bg-cream/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* What children respond to */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-12">
            What to expect in each park
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-forest text-lg mb-3">Tarangire</h3>
              <p className="text-ink text-body-mobile">
                Elephant herds of 150 or more in the dry season, close enough that the vehicle sometimes stops to let them pass. The ancient baobab trees are big enough to register even for children who have no frame of reference for age. Tree-climbing pythons in the riverside fig trees are reliably found and consistently popular.
              </p>
            </div>
            <div className="border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-forest text-lg mb-3">Serengeti</h3>
              <p className="text-ink text-body-mobile">
                Scale is the first thing. The horizon goes flat in every direction and the sky is enormous. Lions on the kopjes (granite outcrops that rise from the plains) tend to hold children's attention longer than almost any other sighting. Cheetah hunts happen at speeds children find genuinely shocking. The Serengeti is the park most families remember as the moment the trip became real.
              </p>
            </div>
            <div className="border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-forest text-lg mb-3">Ngorongoro Crater</h3>
              <p className="text-ink text-body-mobile">
                The crater's density (25,000 animals inside 260 km²) means something is always happening within sight. The picnic stop at Ngoitokitok Springs has a hippo pool directly alongside where the vehicles park, close enough to be educational without being managed. Most families rate the crater day as the highlight of the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
              Practical notes for families
            </h2>
            <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
              <div>
                <h3 className="font-montserrat font-semibold text-forest mb-2">Health and vaccinations</h3>
                <p>
                  Malaria prophylaxis is required for all ages. Consult a travel medicine doctor before departure. Children tolerate the heat and altitude of the northern circuit (1,500-2,300m) well. The main risks are sun exposure and dehydration on long game-drive days. Hats, sunscreen SPF 50, and water in the vehicle at all times. We carry extra water.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-forest mb-2">Child seats</h3>
                <p>
                  Children under 12 are required to use a booster seat in the vehicle. Confirm your child's age and weight at booking. We supply the correct seat. If you are travelling with an infant or toddler under 5, contact us before booking to discuss what is practical.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-forest mb-2">Best time of year</h3>
                <p>
                  July and August (northern hemisphere summer) align with school holidays and the dry season simultaneously, which makes them the most popular months for family safaris. December and January work equally well for wildlife and also fall within school holiday windows. The calving season (January-February at Ndutu) is one of the most spectacular wildlife events for children, but the Ndutu lodges are more remote and the days are longer. Better for children over 8.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-forest mb-2">Adding Zanzibar</h3>
                <p>
                  A beach extension in Zanzibar after the safari is a natural transition for families. Zanzibar's north coast has calm, shallow water suitable for children year-round. Stone Town is walkable and interesting for older children. Most families add 4-5 nights. The Coastal Aviation flight from Arusha takes about 1 hour 45 minutes and is suitable for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary link */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
                Ready to see the full itinerary?
              </h2>
              <p className="text-cream/90 text-lead-mobile">
                Day-by-day breakdown, included and excluded, pricing, and answers to the most common family safari questions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/itineraries/family-safari"
                className="inline-flex items-center justify-center bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors group"
              >
                View Family Safari Itinerary
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-cream text-cream font-montserrat font-semibold px-8 py-4 hover:bg-cream/10 transition-colors"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
