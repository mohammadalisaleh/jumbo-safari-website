import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tanzania Safari Guides",
  description:
    "The guides at Jumbo Safaris are Arusha-based professionals with years of experience in the northern circuit parks. English-speaking, licensed by the Tanzania Tourist Board.",
  alternates: { canonical: "https://www.jumbosafaris.com/about/guides" },
  openGraph: {
    title: "Tanzania Safari Guides | Jumbo Safaris",
    description:
      "Arusha-based guides, licensed by the Tanzania Tourist Board, with years of experience in the northern circuit parks.",
    url: "https://www.jumbosafaris.com/about/guides",
  },
}

const whatMakesAGuide = [
  {
    heading: "They grew up near the parks",
    body: "The best guides on the northern circuit are people who have spent years in these ecosystems, not people who completed a training course. Our guides are based in Arusha and have worked the Serengeti, Ngorongoro, and Tarangire long enough to know individual lion prides by sight and to read animal behaviour in ways that a checklist cannot teach.",
  },
  {
    heading: "Language, not just English",
    body: "All our guides are fluent English speakers. Several also speak French or German. More importantly, they speak Swahili natively, which matters when they radio other guides in the field to locate a kill or track a predator across zones. The radio network between guides is in Swahili. A guide who cannot operate in that network is at a disadvantage.",
  },
  {
    heading: "Licensed by the Tanzania Tourist Board",
    body: "Tanzania requires professional wildlife guides to hold a valid TTB licence. This is not a formality. The licensing process covers wildlife identification, first aid, vehicle recovery, and park regulations. We only work with licensed guides. You can ask to see the licence before departure.",
  },
  {
    heading: "They know when to say nothing",
    body: "A good guide does not fill silence. Some of the best moments on a safari happen in silence: a leopard moving through the grass 15 metres away, a cheetah scanning the horizon at sunrise. A guide who has been in the field long enough knows when to let the scene speak and when the explanation adds something.",
  },
]

export default function GuidesPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-montserrat font-bold text-h1-mobile md:text-h1-desktop mb-4">
            Our Guides
          </h1>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-2xl">
            Every Jumbo Safaris trip runs with a licensed, Arusha-based guide assigned specifically to your group. Your guide is the person who makes or breaks the safari.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="max-w-prose">
          <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
            The vehicle, the parks, the lodges: all of it is secondary to who is driving and watching with you. A guide who has spent ten years in the Serengeti knows where the leopard is likely to be at 7:00am in the dry season and can position the vehicle before the sighting happens. A guide who is filling a slot in a group-tour rotation is working from pattern recognition built across many different ecosystems and many different guests. The experience is completely different.
          </p>
          <p className="text-body-mobile md:text-body-desktop text-ink mb-6">
            Jumbo Safaris is a new company. We are honest about that. What we are not prepared to compromise on is guide quality, because a bad guide on a private safari is more damaging than a bad guide on a group tour. You have nowhere to hide from each other and no other voices to fill the gaps.
          </p>
          <p className="text-body-mobile md:text-body-desktop text-ink">
            Every guide we work with is licensed by the Tanzania Tourist Board, based in Arusha, and has a documented track record in the specific parks on your itinerary. We brief the guide on your group before departure: what you most want to see, whether you have children, whether photography is a priority, whether you want more explanation or more quiet. The brief changes how the guide operates for your specific trip.
          </p>
        </div>
      </section>

      {/* What makes a guide */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-12">
            What we look for
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whatMakesAGuide.map((item) => (
              <div key={item.heading} className="border border-border-soft bg-cream p-6">
                <h3 className="font-montserrat font-bold text-forest text-lg mb-3">{item.heading}</h3>
                <p className="text-body-mobile text-ink">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipping */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-prose">
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-6">
              Guide gratuity
            </h2>
            <div className="space-y-4 text-body-mobile md:text-body-desktop text-ink">
              <p>
                Tipping is not included in the package price and is handled separately, directly with the guide on the last day of safari. The Tanzania standard is $20-25 per day per guide. For a 7-day trip, that is $140-175, paid directly in cash (USD) to the guide at the end of the safari.
              </p>
              <p>
                Lodge staff gratuity is separate: $5-7 per night per person, placed in the envelope at the lodge reception. This is distributed to the kitchen and housekeeping staff.
              </p>
              <p>
                Tips are genuinely meaningful here. A guide's base salary from an operator covers the basics. Gratuity from clients is the component that reflects the quality of the experience. If the guide was excellent, say so and tip accordingly. If there were problems, tell us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Questions about guides or the trip?
          </h2>
          <p className="text-lead-mobile text-cream/90 max-w-prose mx-auto mb-8">
            Mohammadali responds directly. Usually within a few hours.
          </p>
          <Link
            href="/contact"
            className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
