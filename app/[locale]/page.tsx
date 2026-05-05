import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import {
  Shield,
  Users,
  Star,
  Calendar,
  MapPin,
  ArrowRight,
  UserCheck,
  Map,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react"
import HeroForm from "@/components/HeroForm"
import StickyWhatsApp from "@/components/StickyWhatsApp"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata.home" })

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "https://jumbosafaris.com" : `https://jumbosafaris.com/${locale}`,
      languages: {
        en: "https://jumbosafaris.com",
        pl: "https://jumbosafaris.com/pl",
        cs: "https://jumbosafaris.com/cs",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "en" ? "https://jumbosafaris.com" : `https://jumbosafaris.com/${locale}`,
      siteName: "Jumbo Safaris",
      type: "website",
    },
  }
}

const featuredItineraries = [
  {
    titleKey: "classicSafari",
    slug: "8-day-classic-tanzania-safari",
    duration: "8 Days",
    descriptionEn: "Experience the best of the Northern Circuit with game drives in Tarangire, Serengeti, and Ngorongoro Crater.",
    descriptionPl: "Poznaj najlepsze miejsca Północnego Szlaku z safari w Tarangire, Serengeti i Kraterze Ngorongoro.",
    descriptionCs: "Zažijte to nejlepší ze Severního okruhu s game drive v Tarangire, Serengeti a Ngorongorovém kráteru.",
    price: "$3,200",
  },
  {
    titleKey: "calvingSeason",
    slug: "calving-season-safari",
    duration: "7 Days",
    descriptionEn: "Witness the miracle of birth on the Serengeti plains during the annual wildebeest calving season.",
    descriptionPl: "Bądź świadkiem cudu narodzin na równinach Serengeti podczas corocznego sezonu cielenia się gnu.",
    descriptionCs: "Buďte svědkem zázraku narození na pláních Serengeti během každoročního období telení pakoňů.",
    price: "$2,800",
  },
  {
    titleKey: "honeymoon",
    slug: "honeymoon-tanzania-zanzibar",
    duration: "11 Days",
    descriptionEn: "Romance meets adventure with safari game drives followed by pristine beaches in Zanzibar.",
    descriptionPl: "Romans spotyka się z przygodą — safari, a potem dziewicze plaże Zanzibaru.",
    descriptionCs: "Romantika se setkává s dobrodružstvím — safari a poté nedotčené pláže Zanzibaru.",
    price: "$5,500",
  },
]

const nationalParks = [
  {
    nameKey: "serengeti",
    slug: "serengeti",
    descriptionEn: "Home to the Great Migration and endless plains",
    descriptionPl: "Dom Wielkiej Migracji i bezkresnych równin",
    descriptionCs: "Domov Velké Migrace a nekonečných plání",
  },
  {
    nameKey: "ngorongoro",
    slug: "ngorongoro-crater",
    descriptionEn: "The world's largest intact volcanic caldera",
    descriptionPl: "Największa nienaruszona kaldera wulkaniczna na świecie",
    descriptionCs: "Největší neporušená sopečná kaldera na světě",
  },
  {
    nameKey: "tarangire",
    slug: "tarangire",
    descriptionEn: "Ancient baobabs and massive elephant herds",
    descriptionPl: "Pradawne baobaby i ogromne stada słoni",
    descriptionCs: "Prastaré baobaby a obrovská stáda slonů",
  },
  {
    nameKey: "lakeManyara",
    slug: "lake-manyara",
    descriptionEn: "Tree-climbing lions and flamingo-lined shores",
    descriptionPl: "Lwy wspinające się na drzewa i brzegi pełne flamingów",
    descriptionCs: "Lvi lezoucí po stromech a břehy lemované plameňáky",
  },
]

const months = [
  { name: "Jan", noteEn: "Dry, Great Migration in south", notePl: "Sucho, Wielka Migracja na południu", noteCs: "Sucho, Velká Migrace na jihu", type: "shoulder" },
  { name: "Feb", noteEn: "Calving season peaks", notePl: "Szczyt sezonu cielenia", noteCs: "Vrchol období telení", type: "shoulder" },
  { name: "Mar", noteEn: "Long rains begin", notePl: "Początek długich deszczów", noteCs: "Začátek dlouhých dešťů", type: "green" },
  { name: "Apr", noteEn: "Green season, lower rates", notePl: "Zielony sezon, niższe ceny", noteCs: "Zelená sezóna, nižší ceny", type: "green" },
  { name: "May", noteEn: "Green season, lower rates", notePl: "Zielony sezon, niższe ceny", noteCs: "Zelená sezóna, nižší ceny", type: "green" },
  { name: "Jun", noteEn: "Dry season starts", notePl: "Początek suchego sezonu", noteCs: "Začátek suché sezóny", type: "peak" },
  { name: "Jul", noteEn: "Peak wildlife viewing", notePl: "Szczyt obserwacji dzikiej przyrody", noteCs: "Vrchol pozorování divoké přírody", type: "peak" },
  { name: "Aug", noteEn: "Migration river crossings", notePl: "Przeprawy rzeczne migracji", noteCs: "Přechody řek během migrace", type: "peak" },
  { name: "Sep", noteEn: "Excellent game viewing", notePl: "Doskonałe obserwacje zwierząt", noteCs: "Vynikající pozorování zvěře", type: "peak" },
  { name: "Oct", noteEn: "Migration moves south", notePl: "Migracja kieruje się na południe", noteCs: "Migrace směřuje na jih", type: "peak" },
  { name: "Nov", noteEn: "Short rains, quieter", notePl: "Krótkie deszcze, spokojniej", noteCs: "Krátké deště, klidněji", type: "shoulder" },
  { name: "Dec", noteEn: "Migration returns south", notePl: "Migracja wraca na południe", noteCs: "Migrace se vrací na jih", type: "shoulder" },
]

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? ""

  const tNav = await getTranslations("nav")
  const tHero = await getTranslations("hero")
  const tTrust = await getTranslations("trust")
  const tSections = await getTranslations("sections")
  const tButtons = await getTranslations("buttons")
  const tWhyJumbo = await getTranslations("whyJumbo")
  const tCta = await getTranslations("cta")

  const trustSignals = [
    { icon: Shield, text: tTrust("tatoLicensed") },
    { icon: Users, text: tTrust("privateGuides") },
    { icon: Star, text: tTrust("fiveStarRated") },
    { icon: Calendar, text: tTrust("tailorMade") },
    { icon: MapPin, text: tTrust("arushaBased") },
  ]

  const whyJumbo = [
    {
      icon: UserCheck,
      title: tWhyJumbo("privateGuides.title"),
      description: tWhyJumbo("privateGuides.description"),
    },
    {
      icon: Map,
      title: tWhyJumbo("tailorMade.title"),
      description: tWhyJumbo("tailorMade.description"),
    },
    {
      icon: MapPin,
      title: tWhyJumbo("bornInArusha.title"),
      description: tWhyJumbo("bornInArusha.description"),
    },
  ]

  const getDescription = (item: { descriptionEn: string; descriptionPl: string; descriptionCs: string }) => {
    if (locale === "pl") return item.descriptionPl
    if (locale === "cs") return item.descriptionCs
    return item.descriptionEn
  }

  const getMonthNote = (month: { noteEn: string; notePl: string; noteCs: string }) => {
    if (locale === "pl") return month.notePl
    if (locale === "cs") return month.noteCs
    return month.noteEn
  }

  const localePath = (path: string) =>
    locale === "en" ? `/${path}` : `/${locale}/${path}`

  return (
    <>
      {/* ── TOP TRUST BAR ── */}
      <div className="bg-forest border-b border-cream/10">
        <div className="max-w-content mx-auto px-6 py-2">
          <div className="flex items-center justify-center sm:justify-between gap-8 sm:gap-2">

            {/* Left — WhatsApp */}
            <a
              href="https://wa.me/255742789292"
              className="flex items-center gap-1.5 hover:text-orange transition-colors group flex-shrink-0"
            >
              <Phone className="w-3 h-3 text-orange" />
              <span className="font-montserrat font-semibold text-[11px] uppercase tracking-[0.08em] text-cream group-hover:text-orange transition-colors">
                Chat on WhatsApp
              </span>
            </a>

            {/* Centre — Rating badges — hidden on mobile, shown sm and up */}
            <div className="hidden sm:flex items-center gap-3 sm:gap-6">
              {/* Google badge — update the number once your Google Business reviews are live */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-5 h-5 rounded-full bg-white flex-shrink-0 flex items-center justify-center font-bold text-[11px]"
                  style={{ color: "#4285F4" }}
                >
                  G
                </div>
                <div className="flex text-[11px] text-yellow-400 leading-none">★★★★★</div>
                <span className="font-montserrat font-semibold text-[11px] text-cream">5.0</span>
                <span className="text-cream/35 text-[10px] hidden sm:inline">Google</span>
              </div>

              <span className="text-cream/20 text-xs hidden sm:inline">|</span>

              {/* TripAdvisor badge — update once you have reviews */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#34E0A1" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-label="TripAdvisor">
                    <circle cx="6.5" cy="13" r="4" />
                    <circle cx="17.5" cy="13" r="4" />
                    <path d="M3 9h4.5M16.5 9H21M12 5v3" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="flex text-[11px] text-yellow-400 leading-none">★★★★★</div>
                <span className="font-montserrat font-semibold text-[11px] text-cream">5.0</span>
                <span className="text-cream/35 text-[10px] hidden sm:inline">TripAdvisor</span>
              </div>
            </div>

            {/* Right — Email */}
            <a
              href="mailto:hello@jumbosafaris.com"
              className="flex items-center gap-1.5 hover:text-orange transition-colors group flex-shrink-0"
            >
              <Mail className="w-3 h-3 text-orange" />
              <span className="font-montserrat font-semibold text-[11px] uppercase tracking-[0.08em] text-cream group-hover:text-orange transition-colors hidden md:inline">
                hello@jumbosafaris.com
              </span>
              <span className="font-montserrat font-semibold text-[11px] uppercase tracking-[0.08em] text-cream group-hover:text-orange transition-colors md:hidden">
                Email
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative flex items-start lg:items-center lg:min-h-[calc(100vh-80px)]">
        {/* Background image */}
        <Image
          src="/serengeti-plains-golden-hour-tanzania-safari-hero.jpg"
          alt="Serengeti plains at golden hour, Tanzania — private guided safari with Jumbo Safaris"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light overlay — lets the Serengeti photo breathe, darker on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/38 to-black/15" />

        <div className="relative z-10 w-full max-w-content mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start lg:items-center">

            {/* ── LEFT: Hero copy ── */}
            <div className="text-cream">
              <p className="font-montserrat font-semibold text-[11px] uppercase tracking-[0.1em] text-orange mb-4">
                Private Guided Safaris · Arusha, Tanzania
              </p>

              <h1 className="font-montserrat font-extrabold text-[clamp(2.4rem,5vw,3.5rem)] leading-[1.05] text-balance mb-5">
                {tHero("headline")}
              </h1>

              <p className="text-[1.1rem] text-cream/85 mb-6 max-w-[480px] leading-relaxed">
                {tHero("subheadline")}
              </p>

              <ul className="space-y-2 mb-0">
                {[
                  "One vehicle. One guide. Just your group.",
                  "Free custom itinerary — reply within 24 hours.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-cream/80 text-[15px] font-inter">
                    <span className="text-orange font-bold mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT: Form card — desktop only inside hero ── */}
            <div className="hidden lg:flex lg:justify-end">
              <HeroForm locale={locale} accessKey={accessKey} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE FORM — shown below hero on mobile only ── */}
      <div className="lg:hidden bg-forest">
        <div className="max-w-content mx-auto px-4 py-6">
          <HeroForm locale={locale} accessKey={accessKey} />
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <section className="bg-cream border-y border-border-soft py-5">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustSignals.map((signal) => (
              <div key={signal.text} className="flex items-center gap-2">
                <signal.icon className="w-4 h-4 text-forest" />
                <span className="font-montserrat font-semibold text-caption text-forest">
                  {signal.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ITINERARIES ── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">{tSections("ourSafaris")}</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              {tSections("popularPackages")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <article key={itinerary.slug} className="border border-border-soft bg-cream">
                <div className="aspect-[4/3] bg-forest flex items-center justify-center">
                  <p className="text-cream/50 text-sm">Safari imagery</p>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-orange text-cream text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3">
                    {itinerary.duration}
                  </span>
                  <h3 className="font-montserrat font-bold text-[22px] text-forest mb-2">
                    {tNav(itinerary.titleKey)}
                  </h3>
                  <p className="text-body-mobile text-ink mb-4 line-clamp-2">
                    {getDescription(itinerary)}
                  </p>
                  <p className="text-caption text-muted mb-4">From {itinerary.price} pp</p>
                  <Link
                    href={localePath(`itineraries/${itinerary.slug}`)}
                    className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors group"
                  >
                    {tButtons("viewItinerary")}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONAL PARKS ── */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">{tSections("explore")}</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop">
              {tSections("greatestParks")}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {nationalParks.map((park) => (
              <Link
                key={park.slug}
                href={localePath(`national-parks/${park.slug}`)}
                className="group block"
              >
                <div className="aspect-[4/3] bg-forest-dark mb-4 flex items-center justify-center">
                  <p className="text-cream/30 text-xs">Park imagery</p>
                </div>
                <h3 className="font-montserrat font-bold text-h3-mobile md:text-h3-desktop text-cream mb-1 group-hover:text-orange transition-colors">
                  {tNav(park.nameKey)}
                </h3>
                <p className="text-sm text-cream/80 mb-2">{getDescription(park)}</p>
                <span className="inline-flex items-center text-orange font-semibold text-sm group-hover:underline">
                  {tButtons("explore")}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JUMBO ── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">{tSections("whyTravelWithUs")}</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              {tSections("jumboDifference")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyJumbo.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cream border border-border-soft mb-6">
                  <item.icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-montserrat font-semibold text-h3-mobile md:text-h3-desktop text-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-body-mobile md:text-body-desktop text-ink max-w-prose mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST TIME STRIP ── */}
      <section className="bg-cream border-t border-border-soft py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase text-orange mb-3">{tSections("planYourTrip")}</p>
            <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop text-forest">
              {tSections("bestTime")}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {months.map((month) => (
              <div
                key={month.name}
                className={`px-4 py-3 text-center ${
                  month.type === "peak"
                    ? "bg-orange text-cream"
                    : month.type === "green"
                      ? "bg-forest text-cream"
                      : "bg-border-soft text-ink"
                }`}
              >
                <p className="font-montserrat font-semibold text-sm">{month.name}</p>
                <p className="text-xs mt-1 opacity-80 whitespace-nowrap">{getMonthNote(month)}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={localePath("guides/best-time-to-visit-tanzania")}
              className="inline-flex items-center text-forest font-semibold hover:text-orange transition-colors"
            >
              Full best time to visit guide
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INQUIRY CTA ── */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-h2-mobile md:text-h2-desktop mb-4">
            {tCta("readyToplan")}
          </h2>
          <p className="text-lead-mobile md:text-lead-desktop text-cream/90 max-w-prose mx-auto mb-8">
            {tCta("tellUsAbout")}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href={localePath("plan-your-safari")}
              className="bg-cream text-forest font-montserrat font-semibold px-8 py-4 hover:bg-cream/90 transition-colors inline-block"
            >
              {tButtons("startPlanning")}
            </Link>
            <a
              href="https://wa.me/255742789292"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-orange transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{tCta("whatsappUs")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Spacer so sticky bar doesn't obscure last section on mobile */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <StickyWhatsApp />
    </>
  )
}
