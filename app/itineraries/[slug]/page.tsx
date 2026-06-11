import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getItinerary, getAllItineraries } from "@/lib/data/itineraries"
import { ItineraryDetail } from "@/components/itinerary-detail"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const itinerary = getItinerary(slug)

  if (!itinerary) {
    return {
      title: "Itinerary Not Found",
    }
  }

  return {
    title: itinerary.metaTitle ?? itinerary.title,
    description: itinerary.metaDescription ?? itinerary.description,
    alternates: { canonical: `https://www.jumbosafaris.com/itineraries/${slug}` },
    openGraph: {
      title: itinerary.title,
      description: itinerary.metaDescription ?? itinerary.description,
      url: `https://www.jumbosafaris.com/itineraries/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const itineraries = getAllItineraries()
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }))
}

export default async function ItineraryPage({ params }: PageProps) {
  const { slug } = await params
  const itinerary = getItinerary(slug)

  if (!itinerary) {
    notFound()
  }

  const related = getAllItineraries().filter((i) => i.slug !== slug).slice(0, 3)

  return (
    <ItineraryDetail
      itinerary={itinerary}
      canonicalPath={`/itineraries/${slug}`}
      related={related}
    />
  )
}
