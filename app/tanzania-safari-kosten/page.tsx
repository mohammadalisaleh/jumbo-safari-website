import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageCircle, CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Tanzania Safari Kosten 2026 | Eerlijke Prijzen & Tarieven",
  description:
    "Wat kost een Tanzania safari in 2026? Exacte prijzen per persoon voor alle groepsgroottes en accommodatieniveaus. Comfort vanaf $2.355, Luxury vanaf $4.960. Rechtstreeks bij lokale operator Arusha.",
  alternates: {
    canonical: "https://www.jumbosafaris.com/tanzania-safari-kosten",
    languages: { nl: "https://www.jumbosafaris.com/tanzania-safari-kosten" },
  },
  openGraph: {
    title: "Tanzania Safari Kosten 2026 | Jumbo Safaris Arusha",
    description:
      "Exacte safari prijzen voor 2026. Comfort vanaf $2.355, Luxury vanaf $4.960 per persoon. Inclusief parktarieven, voertuig en gids.",
    url: "https://www.jumbosafaris.com/tanzania-safari-kosten",
  },
}

const faqItems = [
  {
    question: "Wat kost een Tanzania safari gemiddeld per persoon?",
    answer:
      "Een privé Tanzania safari met Jumbo Safaris kost tussen $2.355 en $9.975 per persoon, afhankelijk van de reisduur, het seizoen, het accommodatieniveau en de groepsgrootte. De meest geboekte reis (8 daagse klassieke safari, Comfort tier, met twee personen in het hoogsezoen) kost $4.115 per persoon. Met vier personen daalt dit naar $3.320 per persoon.",
  },
  {
    question: "Waarom zijn Tanzania safari prijzen zo wisselend?",
    answer:
      "Drie factoren bepalen de prijs: parktarieven (vast, $59-$71 per persoon per dag), voertuig en gids (vast per voertuig, daalt per persoon naarmate de groep groeit), en accommodatie (grootste variabele, $120 tot $800+ per persoon per nacht). Een grotere groep betaalt minder per persoon omdat het voertuig gedeeld wordt. In het groengroene seizoen (april-mei) zijn accommodaties 15-25% goedkoper.",
  },
  {
    question: "Wat is inbegrepen in de safari prijs?",
    answer:
      "Inbegrepen: alle parktarieven, voertuig en chauffeur-gids, alle accommodaties inclusief maaltijden, ochtend- en avondritten, vliegveldtransfers, en communicatie voor en na de reis. Niet inbegrepen: internationale vluchten, Tanzania visum ($50 per persoon, $100 voor Amerikanen), alcoholische dranken, en fooien voor gids en camp staff.",
  },
  {
    question: "Is het goedkoper om rechtstreeks bij een lokale operator te boeken?",
    answer:
      "Ja. Een Nederlandse touroperator voegt een marge van 20-35% toe bovenop de Tanzaniaanse inkoopprijs. Bij directe boeking bij Jumbo Safaris betaalt u de lokale prijs zonder tussenhandel. Voor een 8-daagse safari met twee personen scheelt dit doorgaans $600-$1.400 per persoon.",
  },
  {
    question: "Wanneer is een Tanzania safari het goedkoopst?",
    answer:
      "Het groene seizoen (april en mei) is het goedkoopst: accommodaties zijn 15-25% lager en de parken zijn vrijwel leeg. Het nadeel is dat enkele wegen modderig worden en sommige camps sluiten. November en december (korte regentijd) zijn ook aantrekkelijk geprijsd en gelden als een ondergewaardeerd raam voor serieuze wildlife-reizigers.",
  },
  {
    question: "Hoe beïnvloedt groepsgrootte de prijs?",
    answer:
      "Sterk. Het voertuig en de gids kosten een vast bedrag per dag, ongeacht hoeveel mensen erin zitten (maximum 6 passagiers). Met twee personen draagt elk persoon de helft van die kosten. Met vier personen draagt elk persoon een kwart. Twee personen die de 8-daagse classic boeken betalen $4.115 per persoon; zes personen betalen $3.055 per persoon. De parktarieven en accommodatie blijven per persoon gelijk.",
  },
  {
    question: "Zijn er verborgen kosten?",
    answer:
      "Nee. De prijs die wij opgeven is compleet: parktarieven, Ngorongoro kraterdalings toeslag ($295 per voertuig), voertuig, gids, alle overnachtingen en maaltijden, en transfers. Wij vermelden expliciet wat niet inbegrepen is: internationale vluchten, visum, fooi en dranken. Er is geen brandstoftoeslag, geen high-season supplement bovenop de vermelde prijs.",
  },
  {
    question: "Bieden jullie betalingsplannen aan?",
    answer:
      "Ja. Bij boeking vragen wij een aanbetaling van 30% om de accommodaties en voertuig te reserveren. Het resterende bedrag is verschuldigd 60 dagen voor vertrek. Voor boekingen binnen 60 dagen vragen wij de volledige betaling bij reservering.",
  },
]

export default function TanzaniaSafariKostenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jumbosafaris.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privé Safari Tanzania",
            item: "https://www.jumbosafaris.com/prive-safari-tanzania",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tanzania Safari Kosten",
            item: "https://www.jumbosafaris.com/tanzania-safari-kosten",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-forest text-cream pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-cream/50 mb-8 flex gap-2 items-center flex-wrap">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <Link href="/prive-safari-tanzania" className="hover:text-cream transition-colors">Privé Safari Tanzania</Link>
            <span>/</span>
            <span className="text-cream/80">Tanzania Safari Kosten</span>
          </nav>

          <p className="text-orange font-montserrat font-semibold text-sm tracking-widest uppercase mb-4">
            Prijsoverzicht 2026
          </p>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-cream mb-6 leading-tight">
            Wat kost een Tanzania safari?
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl leading-relaxed mb-8">
            Comfort tier vanaf $2.355 per persoon. Luxury tier vanaf $4.960 per persoon. Alle prijzen zijn opgebouwd vanuit werkelijke loge-tarieven, onze eigen voertuigen en actuele parktarieven, niet vanuit reisbureaumarges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white font-montserrat font-semibold px-6 py-3 hover:bg-orange/90 transition-colors"
            >
              Vraag een offerte aan <ArrowRight size={16} />
            </Link>
            <Link
              href="/prive-safari-tanzania"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream font-montserrat font-semibold px-6 py-3 hover:border-cream/60 transition-colors"
            >
              Privé safari Tanzania
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-orange">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-6 justify-center text-white font-montserrat font-semibold text-sm">
            <span>Privévoertuig inbegrepen</span>
            <span className="text-orange-200">·</span>
            <span>Alle parktarieven inbegrepen</span>
            <span className="text-orange-200">·</span>
            <span>Geen verborgen kosten</span>
            <span className="text-orange-200">·</span>
            <span>Rechtstreeks bij lokale operator</span>
          </div>
        </div>
      </section>

      {/* Main price table */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-3">
            Prijzen 8-daagse klassieke Tanzania safari
          </h2>
          <p className="text-ink/70 mb-8 max-w-2xl">
            Tarangire, centrale Serengeti en Ngorongoro Crater. De meest geboekte route. Prijs per persoon in US dollar, inclusief alle parktarieven, voertuig, gids en accommodatie.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-border-soft text-sm">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="text-left px-4 py-3 font-montserrat font-semibold">Accommodatieniveau</th>
                  <th className="text-right px-4 py-3 font-montserrat font-semibold">2 personen</th>
                  <th className="text-right px-4 py-3 font-montserrat font-semibold">4 personen</th>
                  <th className="text-right px-4 py-3 font-montserrat font-semibold">6 personen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border-soft">
                  <td className="px-4 py-4">
                    <p className="font-montserrat font-semibold text-forest">Comfort</p>
                    <p className="text-ink/60 text-xs mt-0.5">Tented camps, gedeelde faciliteiten, goede locaties</p>
                  </td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$4.115</td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$3.320</td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$3.055</td>
                </tr>
                <tr className="border-t border-border-soft bg-white">
                  <td className="px-4 py-4">
                    <p className="font-montserrat font-semibold text-forest">Premium</p>
                    <p className="text-ink/60 text-xs mt-0.5">Grotere tenten, ensuite badkamer, betere posities</p>
                  </td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$5.530</td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$4.735</td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$4.465</td>
                </tr>
                <tr className="border-t border-border-soft">
                  <td className="px-4 py-4">
                    <p className="font-montserrat font-semibold text-forest">Luxury</p>
                    <p className="text-ink/60 text-xs mt-0.5">Lemala Camps, privéterras, premium Serengeti posities</p>
                  </td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$6.020</td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$5.225</td>
                  <td className="text-right px-4 py-4 font-semibold text-ink">$4.960</td>
                </tr>
                <tr className="border-t-2 border-forest bg-forest/5">
                  <td className="px-4 py-4">
                    <p className="font-montserrat font-semibold text-forest">Comfort (groen seizoen)</p>
                    <p className="text-ink/60 text-xs mt-0.5">April–mei, lagere accommodatietarieven</p>
                  </td>
                  <td className="text-right px-4 py-4 font-semibold text-forest">$3.415</td>
                  <td className="text-right px-4 py-4 font-semibold text-forest">$2.620</td>
                  <td className="text-right px-4 py-4 font-semibold text-forest">$2.355</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink/50">
            Alle bedragen in US dollar per persoon. Parktarieven, voertuig, gids en alle maaltijden inbegrepen. Internationale vluchten en visum niet inbegrepen.
          </p>
        </div>
      </section>

      {/* Other itineraries pricing */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-10">
            Prijzen andere reizen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Calving */}
            <div className="border border-border-soft p-6">
              <p className="font-montserrat font-semibold text-xs text-orange uppercase tracking-widest mb-3">
                Kalfseizoen
              </p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">
                Ndutu & Ngorongoro
              </h3>
              <p className="text-ink/70 text-sm mb-5">
                7 dagen, januari–februari. Ndutu NCA, Ngorongoro Crater.
              </p>
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="text-ink/50 text-xs">
                    <th className="text-left pb-2">Niveau</th>
                    <th className="text-right pb-2">2 pers.</th>
                    <th className="text-right pb-2">4 pers.</th>
                    <th className="text-right pb-2">6 pers.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Comfort</td>
                    <td className="text-right py-2 font-semibold">$3.535</td>
                    <td className="text-right py-2 font-semibold">$2.835</td>
                    <td className="text-right py-2 font-semibold">$2.600</td>
                  </tr>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Premium</td>
                    <td className="text-right py-2 font-semibold">$4.310</td>
                    <td className="text-right py-2 font-semibold">$3.600</td>
                    <td className="text-right py-2 font-semibold">$3.365</td>
                  </tr>
                </tbody>
              </table>
              <Link
                href="/itineraries/calving-season-safari"
                className="text-orange font-montserrat font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Volledig programma <ArrowRight size={13} />
              </Link>
            </div>

            {/* Great Migration */}
            <div className="border border-border-soft p-6">
              <p className="font-montserrat font-semibold text-xs text-orange uppercase tracking-widest mb-3">
                Grote migratie
              </p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">
                Noordelijke Serengeti
              </h3>
              <p className="text-ink/70 text-sm mb-5">
                8 dagen, juli–oktober. Mara rivier oversteken.
              </p>
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="text-ink/50 text-xs">
                    <th className="text-left pb-2">Niveau</th>
                    <th className="text-right pb-2">2 pers.</th>
                    <th className="text-right pb-2">4 pers.</th>
                    <th className="text-right pb-2">6 pers.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Comfort</td>
                    <td className="text-right py-2 font-semibold">$6.210</td>
                    <td className="text-right py-2 font-semibold">$4.885</td>
                    <td className="text-right py-2 font-semibold">$4.445</td>
                  </tr>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Premium</td>
                    <td className="text-right py-2 font-semibold">$6.900</td>
                    <td className="text-right py-2 font-semibold">$5.570</td>
                    <td className="text-right py-2 font-semibold">$5.125</td>
                  </tr>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Luxury</td>
                    <td className="text-right py-2 font-semibold">$9.975</td>
                    <td className="text-right py-2 font-semibold">$8.645</td>
                    <td className="text-right py-2 font-semibold">$8.200</td>
                  </tr>
                </tbody>
              </table>
              <Link
                href="/itineraries/great-migration-safari"
                className="text-orange font-montserrat font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Volledig programma <ArrowRight size={13} />
              </Link>
            </div>

            {/* Honeymoon */}
            <div className="border border-border-soft p-6">
              <p className="font-montserrat font-semibold text-xs text-orange uppercase tracking-widest mb-3">
                Huwelijksreis
              </p>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">
                Tanzania & Zanzibar
              </h3>
              <p className="text-ink/70 text-sm mb-5">
                11 dagen. Safari + binnenlandse vlucht naar Zanzibar.
              </p>
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="text-ink/50 text-xs">
                    <th className="text-left pb-2">Niveau</th>
                    <th className="text-right pb-2">2 pers.</th>
                    <th className="text-right pb-2">4 pers.</th>
                    <th className="text-right pb-2">6 pers.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Premium</td>
                    <td className="text-right py-2 font-semibold">$6.610</td>
                    <td className="text-right py-2 font-semibold">$5.820</td>
                    <td className="text-right py-2 font-semibold">$5.555</td>
                  </tr>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70">Luxury</td>
                    <td className="text-right py-2 font-semibold">$8.395</td>
                    <td className="text-right py-2 font-semibold">$7.605</td>
                    <td className="text-right py-2 font-semibold">$7.345</td>
                  </tr>
                  <tr className="border-t border-border-soft">
                    <td className="py-2 text-ink/70 text-xs italic">Groen seizoen (Premium)</td>
                    <td className="text-right py-2 font-semibold text-forest text-xs">$5.245</td>
                    <td className="text-right py-2 font-semibold text-forest text-xs">$4.455</td>
                    <td className="text-right py-2 font-semibold text-forest text-xs">$4.195</td>
                  </tr>
                </tbody>
              </table>
              <Link
                href="/itineraries/honeymoon-tanzania-zanzibar"
                className="text-orange font-montserrat font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Volledig programma <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What drives the cost */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-4">
            Wat bepaalt de prijs van een Tanzania safari?
          </h2>
          <p className="text-ink/70 max-w-2xl mb-10">
            Drie kostencomponenten maken de prijs. Twee zijn goeddeels vast. Eén is variabel en bepaalt het grootste deel van het verschil tussen Comfort en Luxury.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border-soft bg-white p-6">
              <p className="font-montserrat font-bold text-2xl text-orange mb-1">1</p>
              <h3 className="font-montserrat font-bold text-lg text-forest mb-3">Parktarieven</h3>
              <p className="text-ink/70 text-sm mb-4">
                Vastgesteld door de Tanzaniaanse overheid. Gelden per persoon per dag. Niet onderhandelbaar.
              </p>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border-soft">
                    <td className="py-2 text-ink/70">Serengeti</td>
                    <td className="text-right py-2 font-semibold">$71,40/dag</td>
                  </tr>
                  <tr className="border-b border-border-soft">
                    <td className="py-2 text-ink/70">Tarangire</td>
                    <td className="text-right py-2 font-semibold">$59,40/dag</td>
                  </tr>
                  <tr className="border-b border-border-soft">
                    <td className="py-2 text-ink/70">Ngorongoro NCA</td>
                    <td className="text-right py-2 font-semibold">$71,40/dag</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-ink/70">Kraterdaling</td>
                    <td className="text-right py-2 font-semibold">$295/voertuig</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-ink/50 mt-3">Tarief 2024–2025, per persoon tenzij anders vermeld</p>
            </div>

            <div className="border border-border-soft bg-white p-6">
              <p className="font-montserrat font-bold text-2xl text-orange mb-1">2</p>
              <h3 className="font-montserrat font-bold text-lg text-forest mb-3">Voertuig &amp; gids</h3>
              <p className="text-ink/70 text-sm mb-4">
                Eén prijs per dag voor het voertuig en de gids, ongeacht het aantal passagiers (max. 6). Hoe meer personen, hoe lager de kosten per persoon.
              </p>
              <div className="bg-cream p-4 text-sm">
                <p className="font-semibold text-forest mb-2">Voorbeeld: voertuig+gids kosten $350-$500/dag</p>
                <div className="space-y-1 text-ink/70">
                  <div className="flex justify-between">
                    <span>2 personen</span>
                    <span className="font-semibold">$175–$250/pp/dag</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4 personen</span>
                    <span className="font-semibold">$88–$125/pp/dag</span>
                  </div>
                  <div className="flex justify-between">
                    <span>6 personen</span>
                    <span className="font-semibold">$58–$83/pp/dag</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border-soft bg-white p-6">
              <p className="font-montserrat font-bold text-2xl text-orange mb-1">3</p>
              <h3 className="font-montserrat font-bold text-lg text-forest mb-3">Accommodatie</h3>
              <p className="text-ink/70 text-sm mb-4">
                De grootste variabele. Positie in het park, tentgrootte en voorzieningenniveau bepalen de prijs.
              </p>
              <div className="space-y-3 text-sm">
                <div className="border-l-2 border-border-soft pl-4">
                  <p className="font-montserrat font-semibold text-forest">Comfort</p>
                  <p className="text-ink/60">$120–$200 per persoon per nacht</p>
                </div>
                <div className="border-l-2 border-border-soft pl-4">
                  <p className="font-montserrat font-semibold text-forest">Premium</p>
                  <p className="text-ink/60">$250–$450 per persoon per nacht</p>
                </div>
                <div className="border-l-2 border-orange pl-4">
                  <p className="font-montserrat font-semibold text-forest">Luxury</p>
                  <p className="text-ink/60">$500–$800+ per persoon per nacht</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included / excluded */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-10">
            Wat is inbegrepen?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-forest mb-5 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                Inbegrepen in de prijs
              </h3>
              <ul className="space-y-3 text-sm text-ink/80">
                {[
                  "Alle parktarieven voor de gehele reisduur",
                  "Ngorongoro kraterdalingstoeslag ($295/voertuig)",
                  "Privévoertuig (Toyota Land Cruiser) met brandstoffen",
                  "Professionele Engelstalige chauffeur-gids",
                  "Alle overnachtingen inclusief halfpension (ontbijt + diner)",
                  "Lunchpakketten voor rijdagen en game drives",
                  "Vliegveldtransfers (KIA naar Arusha en terug)",
                  "Binnenlandse vlucht Arusha–Zanzibar (huwelijksreis)",
                  "Reiscommunicatie voor en na de reis",
                  "Personalisatie op basis van reismaand en groepsgrootte",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-forest mb-5 flex items-center gap-2">
                <XCircle size={20} className="text-red-500" />
                Niet inbegrepen
              </h3>
              <ul className="space-y-3 text-sm text-ink/80">
                {[
                  "Internationale vluchten",
                  "Tanzania e-visum ($50 per persoon, $100 voor Amerikanen)",
                  "Alcoholische dranken en frisdranken buiten de maaltijden",
                  "Fooi voor gids (aanbevolen: $20–$30/dag) en camp staff",
                  "Persoonlijke souvenirs en inkopen",
                  "Reisverzekering (verplicht aanbevolen)",
                  "PCR-test of andere vereisten bij uw thuisland",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Direct vs Dutch operator comparison */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-3">
            Directe boeking vs. Nederlandse touroperator
          </h2>
          <p className="text-ink/70 mb-8 max-w-2xl">
            Beide opties zijn legitiem. Het verschil zit in wat u betaalt voor het tussenpersoon-comfort.
          </p>

          <div className="grid md:grid-cols-2 gap-0 border border-border-soft">
            <div className="p-8 bg-white">
              <p className="font-montserrat font-semibold text-xs text-orange uppercase tracking-widest mb-4">
                Nederlandse touroperator
              </p>
              <ul className="space-y-3 text-sm text-ink/80">
                <li className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                  Nederlandstalige klantenservice thuis
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                  SGR/ANVR-garantie, reisgarantiefonds
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                  20–35% tussenpersoonmarge bovenop de Tanzaniaanse prijs
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                  Vaste pakketten, minder flexibel in aanpassing
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                  Lokale operator onbekend tot vertrek
                </li>
              </ul>
            </div>
            <div className="p-8 bg-forest text-cream">
              <p className="font-montserrat font-semibold text-xs text-orange uppercase tracking-widest mb-4">
                Jumbo Safaris (directe boeking)
              </p>
              <ul className="space-y-3 text-sm text-cream/80">
                <li className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  Directe communicatie met de gids die u begeleidt
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  Geen tussenpersoonmarge, lokale inkoopprijs
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  Volledig maatwerk: reisdata, route, accommodatie, groepsgrootte
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                  Arusha-gebaseerd, dagelijkse kennis van parkcondities
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
                  Geen SGR-garantie (reisverzekering dekt dit doorgaans)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-orange/10 border border-orange/30 p-5 mt-6">
            <p className="text-sm text-ink/80">
              <strong className="text-forest">Concrete besparing:</strong> Een 8-daagse safari voor twee personen (Comfort tier, hoogsezoen) kost via Jumbo Safaris $4.115 per persoon. Dezelfde reis via een Nederlandse touroperator ligt doorgaans tussen $4.900 en $5.500 per persoon. Dat is $785–$1.385 per persoon verschil, of $1.570–$2.770 voor twee personen.
            </p>
          </div>
        </div>
      </section>

      {/* Season pricing */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-4">
            Prijzen per seizoen
          </h2>
          <p className="text-ink/70 mb-8 max-w-2xl">
            Tanzania heeft twee duidelijk verschillende seizoenen. De prijsverschillen worden bepaald door accommodatietarieven, niet door de kwaliteit van de wildwaarneming.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">Hoogsezoen (juni–oktober)</h3>
              <p className="text-sm text-ink/70 mb-4">
                Droog seizoen. Kort gras, dieren geconcentreerd bij waterplaatsen, maximale zichtbaarheid. Hoogste prijzen. Mara River oversteken in noordelijke Serengeti (juli–oktober).
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border-soft pb-2">
                  <span className="text-ink/70">8-daagse Classic (Comfort, 2 pers.)</span>
                  <span className="font-semibold">$4.115</span>
                </div>
                <div className="flex justify-between border-b border-border-soft pb-2">
                  <span className="text-ink/70">8-daagse Classic (Premium, 2 pers.)</span>
                  <span className="font-semibold">$5.530</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/70">Migratie safari (Comfort, 2 pers.)</span>
                  <span className="font-semibold">$6.210</span>
                </div>
              </div>
            </div>

            <div className="border border-border-soft p-6">
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">Groen seizoen (april–mei)</h3>
              <p className="text-sm text-ink/70 mb-4">
                Lange regentijd. Weelderig groen landschap, vrijwel geen toeristen. Accommodaties 15–25% lager. Enkele wegen kunnen moeilijk zijn; sommige Ndutu camps sluiten.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border-soft pb-2">
                  <span className="text-ink/70">8-daagse Classic (Comfort, 2 pers.)</span>
                  <span className="font-semibold text-forest">$3.415</span>
                </div>
                <div className="flex justify-between border-b border-border-soft pb-2">
                  <span className="text-ink/70">8-daagse Classic (Premium, 2 pers.)</span>
                  <span className="font-semibold text-forest">$4.430</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/70">Huwelijksreis (Premium, 2 pers.)</span>
                  <span className="font-semibold text-forest">$5.245</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-cream border border-border-soft">
            <p className="text-sm text-ink/80">
              <strong className="text-forest">Januari–maart en november–december</strong> zijn het meest ondergewaardeerde raam. Parken zijn rustig, prijzen liggen tussen groen en hoog seizoen, en het kalfseizoen (jan–feb) biedt de hoogste roofdierconcentratie van het jaar in Ndutu.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl text-forest mb-10">
            Veelgestelde vragen over Tanzania safari kosten
          </h2>
          <div className="space-y-0">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-border-soft py-6">
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">
                  {item.question}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-montserrat font-bold text-xl text-forest mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/prive-safari-tanzania", label: "Privé safari Tanzania" },
              { href: "/itineraries", label: "Alle reizen" },
              { href: "/tanzania-safari-cost-2026", label: "Tanzania Safari Cost 2026 (EN)" },
              { href: "/national-parks/serengeti", label: "Serengeti NP" },
              { href: "/safari-in-january", label: "Safari in januari" },
              { href: "/safari-in-july", label: "Safari in juli" },
              { href: "/ndutu-calving-season", label: "Kalfseizoen Ndutu" },
              { href: "/luxury-tanzania-safari", label: "Luxury Tanzania Safari" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="border border-border-soft p-4 hover:border-orange transition-colors group"
              >
                <p className="font-montserrat font-semibold text-sm text-forest group-hover:text-orange transition-colors">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-montserrat font-semibold text-sm text-orange uppercase tracking-widest mb-4">
            Vrijblijvende offerte
          </p>
          <h2 className="font-montserrat font-bold text-3xl text-cream mb-4">
            Exacte prijs voor uw specifieke reis
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            Stuur uw reisdata, groepsgrootte en accommodatievoorkeur. U ontvangt binnen 24 uur een gespecificeerde offerte met exacte parktarieven, voertuigkosten en accommodatieprijzen per nacht.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white font-montserrat font-semibold px-8 py-4 hover:bg-orange/90 transition-colors"
            >
              Stuur uw reisdetails <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/255769352698"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream font-montserrat font-semibold px-8 py-4 hover:border-cream/60 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
