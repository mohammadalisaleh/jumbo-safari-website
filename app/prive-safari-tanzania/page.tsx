import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageCircle, MapPin, Users, Calendar, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privé Safari Tanzania op Maat | Jumbo Safaris Arusha",
  description:
    "Privé safari Tanzania rechtstreeks geboekt bij een lokale operator in Arusha. Één voertuig, één gids, uw groep alleen. Eerlijke prijzen zonder Nederlandse tussenpersoon.",
  alternates: {
    canonical: "https://www.jumbosafaris.com/prive-safari-tanzania",
    languages: { nl: "https://www.jumbosafaris.com/prive-safari-tanzania" },
  },
  openGraph: {
    title: "Privé Safari Tanzania op Maat | Jumbo Safaris Arusha",
    description:
      "Privé safari Tanzania rechtstreeks bij een lokale operator in Arusha. Geen Nederlandse marge, één voertuig voor uw groep.",
    url: "https://www.jumbosafaris.com/prive-safari-tanzania",
  },
}

const itineraries = [
  {
    title: "8-daagse klassieke Tanzania safari",
    slug: "8-day-classic-tanzania-safari",
    duration: "8 dagen",
    parks: "Tarangire · Serengeti · Ngorongoro",
    price: "Vanaf $2.355 p.p.",
    description:
      "Tarangire voor de olifanten, de centrale Serengeti voor de roofdieren, en een volledige dag op de kraterbodem van Ngorongoro. De positionering in de Serengeti wordt afgestemd op de maand van uw bezoek, zodat u de migratie ziet waar die zich dan bevindt.",
  },
  {
    title: "Kalfseizoen safari: Ndutu & Ngorongoro",
    slug: "calving-season-safari",
    duration: "7 dagen",
    parks: "Ndutu · Ngorongoro",
    price: "Vanaf $2.600 p.p.",
    description:
      "Januari en februari in Ndutu, waar 500.000 kalveren in zes weken worden geboren. Rijden buiten de paden is hier toegestaan, want Ndutu valt binnen het Ngorongoro Conservation Area, niet de Serengeti. De roofdieractiviteit is het hoogst van het jaar.",
  },
  {
    title: "Huwelijksreis Tanzania & Zanzibar",
    slug: "honeymoon-tanzania-zanzibar",
    duration: "11 dagen",
    parks: "Tarangire · Serengeti · Ngorongoro · Zanzibar",
    price: "Vanaf $5.245 p.p.",
    description:
      "Vier nachten op safari in het Noordelijk Circuit, daarna een week aan de kust van Zanzibar. Privévoertuig gedurende de gehele reis. Lodgeupgrades waar ze het meeste uitmaken.",
  },
]

const faqs = [
  {
    question: "Wat kost een privé safari in Tanzania per dag?",
    answer:
      "Budget safaris kosten $250 tot $400 per persoon per dag. Dat dekt een tented camp, een gids en parkkosten voor een groep van 2 tot 3 personen die het voertuig delen. Middenklasse is $400 tot $700 per dag: permanente lodges met eigen badkamer, privévoertuig en privégids. Luxe begint bij $700 en kan oplopen tot $1.500 of meer per dag voor exclusieve private concessions. Een comfortabele privé 8-daagse safari voor twee personen kost doorgaans $6.000 tot $10.000 in totaal.",
  },
  {
    question: "Wat zijn de vaste kosten die altijd in een safari zitten?",
    answer:
      "Parkkosten zijn niet onderhandelbaar en staan vast. Serengeti: $71,40 per persoon per dag voor volwassenen. Tarangire: $59,40 per persoon per dag. Ngorongoro Conservation Area: $71,40 per persoon per dag. Ngorongoro kraterdalingsbijdrage: $295 per voertuig per afdaling. Dit zijn overheidskosten die elke operator betaalt, of het nu een Nederlandse aanbieder is of een lokale operator in Arusha. Het voertuig (Toyota Land Cruiser 4WD met pop-up dak) en de gids kosten los hiervan. Accommodatie is het meest variabele deel.",
  },
  {
    question: "Is het veilig om rechtstreeks bij een Tanzaniaanse operator te boeken?",
    answer:
      "Ja, mits u let op een aantal punten. Boek bij een operator die lid is van TATO (Tanzania Association of Tour Operators), de officiële brancheorganisatie in Tanzania. Betaal nooit 100% vooruit; de norm is 30 tot 40% aanbetaling en de rest 30 dagen voor vertrek. Betalen met creditcard geeft u een terugboekingsoptie. Jumbo Safaris werkt op basis van deze standaard betalingsstructuur. U heeft ook directe WhatsApp-toegang tot de eigenaar tot en met uw vertrekdag.",
  },
  {
    question: "Wat is het verschil tussen een privé safari en een groepsreis?",
    answer:
      "Op een groepsreis deelt u een voertuig met 6 tot 8 vreemden. Het programma ligt vast voor u van huis vertrekt. Als er een luipaard in een boom zit en u wilt blijven, vertrekt het voertuig toch als de meerderheid wil doorrijden. Bij een privé safari is het uw voertuig. De gids stemt de dag op u af. U bepaalt hoe lang u bij een waarneming blijft. Op drukke plekken als de Serengeti in de droge periode staat uw voertuig tussen 12 en 15 andere voertuigen bij een sighting. Op minder bezochte locaties staat u soms alleen. Het prijsverschil bij middenklasse is typisch $200 tot $400 per persoon over een volledig 8-daags programma.",
  },
  {
    question: "Wanneer is het beste moment voor een Tanzania safari?",
    answer:
      "Juni tot oktober is het droge seizoen: gras is kort, dieren concentreren zich bij waterbronnen en de Grote Trek is bezig in het noorden van de Serengeti. Dit is het hoogseizoen en de prijzen zijn dienovereenkomstig. Januari en februari zijn uitstekend voor het kalfseizoen in Ndutu, met 8.000 kalfjes per dag op het hoogtepunt. Maart tot mei brengt de lange regens, minder toeristen en 20 tot 30% lagere prijzen. November en december zijn goed voor iemand die waarde zoekt: de korte regens eindigen in november en de wildebeesten trekken dan naar het zuiden richting Ndutu.",
  },
  {
    question: "Zijn er verborgen kosten die mijn aanbieder niet noemt?",
    answer:
      "Drie kosten die standaard niet in offertes staan. Kraterdalingsbijdrage Ngorongoro: $295 per voertuig. Op een 8-daagse safari voor twee personen is dat $147,50 per persoon bovenop de offerte. Luchtballon boven de Serengeti: $599 per persoon, optioneel. Fooi: reken $25 per dag voor uw gids en $10 tot $15 per dag voor het lodgepersoneel. Op een 8-daagse safari is dat minimaal $200 per persoon die niet in de prijs staat. Nederlandse tussenpersonen rekenen bovendien 30 tot 300% marge bovenop het tarief van de lokale operator. Rechtstreeks boeken bij Jumbo Safaris elimineert die marge.",
  },
  {
    question: "Hoeveel uur per dag zit je in het voertuig?",
    answer:
      "Op een actieve gamedrivedag logt u 6 tot 8 uur in het voertuig. De ochtendrit vertrek om 6:30 en duurt tot 10 of 11 uur. Daarna terugkeer naar het kamp voor ontbijt en rust. De middagrit start om 15:30 en loopt tot na zonsondergang. Op een privé safari kunt u dit bijstellen: een dag halfgas als u wilt, of een extra vroeg vertrek als er iets bijzonders wordt verwacht.",
  },
  {
    question: "Kan ik Tanzania safari combineren met Zanzibar?",
    answer:
      "Ja. De standaardcombinatie is 5 tot 7 dagen safari in het Noordelijk Circuit gevolgd door 4 tot 7 nachten op Zanzibar. Vluchten van Kilimanjaro naar Zanzibar duren ongeveer een uur direct. Vanuit Serengeti-airstrips rekent u op 3 tot 4 uur met tussenstops. Het noorden en oosten van Zanzibar hebben de beste stranden. De meeste reizigers kiezen voor safari eerst, strand daarna.",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.jumbosafaris.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privé Safari Tanzania",
      item: "https://www.jumbosafaris.com/prive-safari-tanzania",
    },
  ],
}

export default function PriveSafariTanzaniaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase text-orange mb-3">PRIVÉ SAFARI TANZANIA</p>
            <h1 className="font-montserrat font-extrabold text-hero-mobile md:text-hero-desktop text-balance mb-6">
              Privé safari Tanzania op maat, rechtstreeks vanuit Arusha
            </h1>
            <p className="text-lead-mobile md:text-lead-desktop text-cream/90 mb-4">
              Één voertuig. Één gids. Uw groep alleen. Geboekt rechtstreeks bij Jumbo Safaris, een lokale operator gevestigd in Arusha, Tanzania.
            </p>
            <p className="text-body-mobile md:text-body-desktop text-cream/80 mb-8">
              Geen Nederlands reisbureau ertussen, geen marge bovenop de lokale prijs. U communiceert via WhatsApp direct met Mohammadali Saleh, die uw reis samenstelt en uw gids kent persoonlijk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/itineraries/8-day-classic-tanzania-safari"
                className="bg-cream text-forest font-montserrat font-semibold px-7 py-4 hover:bg-cream/90 transition-colors inline-block"
              >
                Bekijk reisprogramma's
              </Link>
              <a
                href="https://wa.me/255742789292"
                className="bg-transparent text-cream font-montserrat font-semibold px-7 py-4 border-[1.5px] border-cream hover:bg-cream/10 transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-orange py-6">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: UserCheck, text: "Privévoertuig, privégids" },
              { icon: Users, text: "Rechtstreeks met de eigenaar" },
              { icon: Calendar, text: "Volledig op maat" },
              { icon: MapPin, text: "Gevestigd in Arusha" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3 text-cream">
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-montserrat font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why direct from Arusha */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 [&>*]:min-w-0">
            <div>
              <p className="text-eyebrow uppercase text-orange mb-3">WAAROM RECHTSTREEKS</p>
              <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-8">
                Directe boeking bij een Arusha-operator: wat u wint
              </h2>
              <div className="space-y-6 text-body-mobile md:text-body-desktop text-ink">
                <p>
                  De meeste Tanzania safari-boekingen die vanuit Nederland worden gemaakt, passeren minstens één tussenpersoon voordat ze de operator bereiken die uw reis werkelijk uitvoert. Een Nederlands reisbureau boekt via een Nairobi-aggregator, die opdracht geeft aan een Tanzaniaanse operator. Elke laag voegt marge toe. Tegen de tijd dat u een offerte ziet, is er 30 tot 300% bovenop het basistarief van de uitvoerende operator bijgekomen.
                </p>
                <p>
                  Jumbo Safaris is de uitvoerende operator. Geen tussenlagen. Mohammadali Saleh, eigenaar en oprichter, woont in Arusha, kent de gidsen persoonlijk en heeft de lodges zelf bezocht. Als u een offerte aanvraagt, spreekt u met hem, niet met een verkoopteam.
                </p>
                <p>
                  Als er iets verandert op de dag van vertrek, een lodge heeft een probleem of een weg is afgesloten, kan een lokale operator dat binnen uren oplossen. Een reisbureau in Amsterdam kan dat niet.
                </p>
                <p>
                  Wat directe boeking u kost: u heeft geen SGR/ANVR-garantie van een Nederlandse brancheorganisatie. Wat dat in de praktijk betekent: boek bij een TATO-lid (Tanzania Association of Tour Operators), betaal 30 tot 40% aanbetaling en de rest 30 dagen voor vertrek, en betaal met creditcard voor een terugboekingsoptie. Dat is de bescherming die werkt, ook zonder de Nederlandse keurmerken.
                </p>
              </div>
            </div>

            {/* Quick facts sidebar */}
            <div className="lg:self-start lg:sticky lg:top-24">
              <div className="bg-white border border-border-soft p-8">
                <h3 className="font-montserrat font-bold text-forest mb-6">Jumbo Safaris in het kort</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Gevestigd", value: "Arusha, Tanzania" },
                    { label: "Type", value: "Privé safari operator" },
                    { label: "Contact", value: "Rechtstreeks met de eigenaar" },
                    { label: "Voertuig", value: "Toyota Land Cruiser 4WD" },
                    { label: "Groepsgrootte", value: "Uw groep alleen" },
                    { label: "Taal", value: "Nederlands, Engels" },
                    { label: "Responstijd", value: "Doorgaans binnen 24 uur" },
                    { label: "Betaling", value: "30–40% aanbetaling, rest 30d voor vertrek" },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-b border-border-soft pb-4 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold text-forest/60 uppercase tracking-widest mb-1">{label}</dt>
                      <dd className="font-semibold text-forest">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">REISPROGRAMMA'S</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Privé safari Tanzania: drie vertrekpunten
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-12">
            Dit zijn vaste programma's als uitgangspunt. Elk programma wordt aangepast aan uw reisperiode, groepsgrootte en voorkeur voor lodges. Alle prijzen zijn per persoon, gebaseerd op twee reizigers die het voertuig delen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {itineraries.map((it) => (
              <article key={it.slug} className="border border-border-soft bg-cream flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block bg-forest text-cream text-xs font-montserrat font-semibold px-3 py-1">
                      {it.duration}
                    </span>
                    <span className="text-xs text-ink/60">{it.parks}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-[20px] text-forest mb-2">{it.title}</h3>
                  <p className="text-body-mobile text-ink mb-4 flex-1">{it.description}</p>
                  <p className="font-montserrat font-semibold text-orange mb-4">{it.price}</p>
                  <Link
                    href={`/itineraries/${it.slug}`}
                    className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group text-sm"
                  >
                    Bekijk programma
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-border-soft pt-8">
            <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose">
              Op zoek naar een ander aantal dagen? We verzorgen ook{" "}
              <Link href="/itineraries" className="text-forest font-semibold hover:text-orange transition-colors underline underline-offset-2">
                7, 10 en 12 daagse programma's
              </Link>
              . Stuur uw reisdata en groepsgrootte via WhatsApp en u ontvangt een offerte op maat.
            </p>
          </div>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">WAT EEN SAFARI KOST</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Tanzania safari kosten: het vaste en het variabele deel
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-12">
            De meeste offertes geven u een totaalprijs zonder uit te leggen wat erin zit. Hier zijn de twee delen die in elke Tanzania safari zitten, of u nu bij Jumbo Safaris boekt of bij een ander.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-border-soft p-8">
              <p className="text-eyebrow uppercase text-forest/60 mb-3">VASTE KOSTEN</p>
              <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-forest mb-6">
                Overheidskosten — niet onderhandelbaar
              </h3>
              <ul className="space-y-4">
                {[
                  { item: "Serengeti NP entree", cost: "$71,40 p.p. per dag" },
                  { item: "Tarangire NP entree", cost: "$59,40 p.p. per dag" },
                  { item: "Ngorongoro Conservation Area", cost: "$71,40 p.p. per dag" },
                  { item: "Ngorongoro kraterafdaling", cost: "$295 per voertuig" },
                  { item: "Voertuigvergunning (per park)", cost: "$40–$60 per park" },
                  { item: "Tourism levy (Tanzania)", cost: "$1,50 p.p. per nacht" },
                ].map(({ item, cost }) => (
                  <li key={item} className="flex justify-between items-start gap-4 pb-4 border-b border-border-soft last:border-0 last:pb-0">
                    <span className="text-sm text-ink">{item}</span>
                    <span className="text-sm font-semibold text-forest whitespace-nowrap">{cost}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink/60 mt-6">
                Deze bedragen zijn overheidskosten die elke operator betaalt, ook Nederlandse aanbieders. Ze zijn inbegrepen in elke Jumbo Safaris offerte.
              </p>
            </div>

            <div className="bg-white border border-border-soft p-8">
              <p className="text-eyebrow uppercase text-forest/60 mb-3">VARIABELE KOSTEN</p>
              <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-forest mb-6">
                Voertuig, gids en accommodatie
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-forest mb-2">Voertuig en gids</p>
                  <p className="text-sm text-ink">Toyota Land Cruiser 4WD met pop-up dak, privégids. Prijs per dag voor uw groep, ongeacht het aantal personen tot 6. Hoe meer personen, hoe lager de prijs per persoon.</p>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-2">Accommodatie (de grootste variabele)</p>
                  <ul className="space-y-2 text-sm text-ink">
                    <li className="flex gap-2"><span className="text-orange flex-shrink-0">+</span> Budget: $60–$120 p.p. per nacht (basistented camp)</li>
                    <li className="flex gap-2"><span className="text-orange flex-shrink-0">+</span> Middenklasse: $200–$450 p.p. per nacht (vaste lodge, eigen badkamer)</li>
                    <li className="flex gap-2"><span className="text-orange flex-shrink-0">+</span> Luxe: $500–$1.200+ p.p. per nacht (exclusieve camps)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-forest mb-2">Kosten die NIET in offertes staan</p>
                  <ul className="space-y-2 text-sm text-ink">
                    <li className="flex gap-2"><span className="text-orange flex-shrink-0">!</span> Fooi gids: $25 per dag (richtlijn)</li>
                    <li className="flex gap-2"><span className="text-orange flex-shrink-0">!</span> Fooi lodgepersoneel: $10–$15 p.p. per dag</li>
                    <li className="flex gap-2"><span className="text-orange flex-shrink-0">!</span> Luchtballon Serengeti: $599 p.p. (optioneel)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct vs Dutch operator */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">EERLIJK VERGELEKEN</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Nederlandse reisorganisatie vs. directe boeking bij een lokale operator
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-cream/80 max-w-prose mb-12">
            Dit is de vraag die Nederlandse safari-zoekers veel stellen maar zelden eerlijk beantwoord krijgen, omdat de partijen die het antwoord kennen er belang bij hebben het niet te geven.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-forest-dark border border-cream/20 p-8">
              <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-orange mb-6">
                Nederlandse reisorganisatie
              </h3>
              <ul className="space-y-4">
                {[
                  { pro: true, text: "SGR/ANVR/Calamiteitenfonds: financieel vangnet als de operator failliet gaat" },
                  { pro: true, text: "Nederlandstalige klantenservice in uw tijdzone" },
                  { pro: true, text: "Vertrouwde betaalmethoden (iDEAL, Nederlandse bankrekening)" },
                  { pro: false, text: "30 tot 300% marge bovenop het lokale operatortarief" },
                  { pro: false, text: "Uw reis wordt uitgevoerd door een Tanzaniaanse subcontractor die u niet kent" },
                  { pro: false, text: "Bij problemen ter plaatse: overleggen via de Nederlandse tussenpersoon, niet direct met de gids" },
                  { pro: false, text: "Minder flexibiliteit voor last-minute aanpassingen" },
                ].map(({ pro, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream/80 text-sm">
                    <span className={`flex-shrink-0 mt-0.5 font-bold ${pro ? "text-orange" : "text-cream/40"}`}>{pro ? "+" : "−"}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-forest-dark border border-orange/40 p-8">
              <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-orange mb-6">
                Directe boeking bij Jumbo Safaris Arusha
              </h3>
              <ul className="space-y-4">
                {[
                  { pro: true, text: "Geen marge: u betaalt de werkelijke operatorprijs" },
                  { pro: true, text: "Rechtstreeks contact met de eigenaar via WhatsApp, ook op de avond voor vertrek" },
                  { pro: true, text: "De persoon die uw reis samenstelt, kent uw gids persoonlijk" },
                  { pro: true, text: "Problemen ter plaatse worden binnen uren opgelost, niet via een callcenter" },
                  { pro: true, text: "Maatwerk op detailniveau, niet op basis van een cataloguspakket" },
                  { pro: false, text: "Geen SGR/ANVR-garantie. Vervangen door: TATO-lidmaatschap, gedeelde betalingen per creditcard, reisverzekering" },
                  { pro: false, text: "Betalingsverkeer in USD naar een buitenlandse rekening (dit voelt ongewoon voor Nederlanders)" },
                ].map(({ pro, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream/80 text-sm">
                    <span className={`flex-shrink-0 mt-0.5 font-bold ${pro ? "text-orange" : "text-cream/40"}`}>{pro ? "+" : "−"}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-orange/10 border border-orange/30 p-6 max-w-3xl">
            <p className="text-cream/90 text-sm">
              <span className="font-semibold text-cream">Conclusie:</span> Voor reizigers die waarde hechten aan een persoonlijke relatie met de operator, prijstransparantie en directe controle over hun reis is rechtstreeks boeken de betere keuze. Voor reizigers die het Nederlandse garantiestelsel als onmisbaar beschouwen, is een ANVR-operator de juiste keuze. Beide posities zijn redelijk.
            </p>
          </div>
        </div>
      </section>

      {/* Best time section */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="text-eyebrow uppercase text-orange mb-3">REISTIJD</p>
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest mb-4">
            Wanneer op safari Tanzania?
          </h2>
          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mb-10">
            Er is geen slecht moment voor een Tanzania safari. Er zijn wel betere antwoorden afhankelijk van wat u wilt zien.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { period: "Januari – februari", label: "Kalfseizoen", highlight: true, text: "Ndutu, zuidelijke Serengeti. Circa 8.000 wildebeestkalveren per dag op het hoogtepunt. Roofdieren zijn het actiefst van het jaar. Licht en fotografie zijn uitstekend op de open vlaktes." },
              { period: "Maart – mei", label: "Lange regens", highlight: false, text: "Parks zijn leeg, prijzen 20–30% lager, landschap is groen. Dieren zijn moeilijker te spotten in hoog gras. Sommige wegen en lodges sluiten in april. Goede waarde voor flexibele reizigers." },
              { period: "Juni – juli", label: "Droog seizoen begint", highlight: true, text: "Gras droogt uit, dieren concentreren zich bij water. Wildebeesten trekken noordwaarts door de centrale en westelijke Serengeti. Tarangire bouwt op naar zijn hoogtepunt." },
              { period: "Augustus – oktober", label: "Hoogseizoen", highlight: false, text: "Mara-rivierovergangen in het noorden van de Serengeti. Duizenden wildebeesten springen in het water terwijl nijlkrokodillen wachten. Tarangire-olifantskuddes zijn het grootst. Boek 6 tot 12 maanden vooruit." },
              { period: "November", label: "Korte regens", highlight: false, text: "Korte regens, doorgaans 3 tot 4 weken. Migratie begint naar het zuiden terug te trekken. Prijzen dalen. Goede maand voor waardegerichte reizen met nog altijd uitstekende wildlife-waarnemingen." },
              { period: "December", label: "Groen seizoen", highlight: true, text: "Korte regens eindigen gewoonlijk begin december. Zuidelijke Serengeti vult zich met wildebeesten die richting Ndutu trekken. Prijzen zijn middenklasse. Feestdagen (20 dec – 5 jan) zijn populair en vol; buiten die data is december ondergewaardeerd." },
            ].map(({ period, label, highlight, text }) => (
              <div key={period} className="border border-border-soft bg-white">
                <div className={`${highlight ? "bg-orange" : "bg-forest"} text-cream px-5 py-3`}>
                  <p className="font-montserrat font-bold text-sm">{period}</p>
                  <p className="text-xs text-cream/80">{label}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-ink">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose">
            Meer detail per maand:{" "}
            {[
              ["januari", "safari-in-january"], ["februari", "safari-in-february"],
              ["maart", "safari-in-march"], ["april", "safari-in-april"],
              ["mei", "safari-in-may"], ["juni", "safari-in-june"],
              ["juli", "safari-in-july"], ["augustus", "safari-in-august"],
              ["september", "safari-in-september"], ["oktober", "safari-in-october"],
              ["november", "safari-in-november"], ["december", "safari-in-december"],
            ].map(([month, slug], i, arr) => (
              <span key={slug}>
                <Link href={`/${slug}`} className="text-forest font-semibold hover:text-orange transition-colors underline underline-offset-2">
                  {month}
                </Link>
                {i < arr.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">VEELGESTELDE VRAGEN</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              Privé safari Tanzania: uw vragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border-soft pb-8 last:border-0">
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-3">{faq.question}</h3>
                <p className="text-ink">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            Klaar om uw reis samen te stellen?
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-prose mx-auto mb-8">
            Stuur uw reisdata, groepsgrootte en wat u wilt zien. Mohammadali reageert rechtstreeks, doorgaans binnen een paar uur.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
            >
              Stel uw reis samen
            </Link>
            <a
              href="https://wa.me/255742789292"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-orange transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Of WhatsApp: +255 742 789 292</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
