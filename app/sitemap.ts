import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jumbosafaris.com"
  const locales = ["pl", "cs"]

  const englishPages = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/tanzania-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/tanzania-safari/private-tours`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/tanzania-safari/family`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/plan-your-safari`, priority: 0.6, changeFrequency: "monthly" as const },
    // National Parks index + individual parks
    { url: `${baseUrl}/national-parks`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/serengeti`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/ngorongoro-crater`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/tarangire`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/lake-manyara`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/ndutu`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/ruaha`, priority: 0.7, changeFrequency: "weekly" as const },
    // Itineraries index + individual itineraries
    { url: `${baseUrl}/itineraries`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/8-day-classic-tanzania-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/calving-season-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/honeymoon-tanzania-zanzibar`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/great-migration-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/5-day-northern-circuit`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/11-day-tanzania-zanzibar`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/family-safari`, priority: 0.8, changeFrequency: "weekly" as const },
    // Guides
    { url: `${baseUrl}/guides`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guides/best-time-to-visit-tanzania`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guides/tanzania-visa-requirements`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guides/what-to-pack-safari`, priority: 0.6, changeFrequency: "monthly" as const },
    // Monthly safari guides
    { url: `${baseUrl}/safari-in-january`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-february`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-march`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-april`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-may`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-june`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-july`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-august`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-september`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-october`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-november`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/safari-in-december`, priority: 0.8, changeFrequency: "monthly" as const },
    // Citation-bait / GEO pages
    { url: `${baseUrl}/tanzania-safari-cost-2026`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/7-day-tanzania-safari-itinerary`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/tanzania-safari-for-americans`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/prive-safari-tanzania`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/tanzania-safari-kosten`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/luxury-tanzania-safari`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about/trust`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/serengeti-vs-ngorongoro-vs-tarangire`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/ndutu-calving-season`, priority: 0.9, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/tanzania-park-fees`, priority: 0.9, changeFrequency: "monthly" as const },
    // Halal safari cluster
    { url: `${baseUrl}/halal-safari-tanzania`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/halal-safari-tanzania/our-standards`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/halal-safari-tanzania/honeymoon`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/halal-safari-tanzania/family`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/halal-safari-tanzania/womens-safari`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/halal-safari-tanzania/ramadan`, priority: 0.8, changeFrequency: "monthly" as const },
  ]

  // Add Polish and Czech homepage versions
  const localeHomepages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    priority: 0.9,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }))

  return [
    ...englishPages.map((page) => ({ ...page, lastModified: new Date() })),
    ...localeHomepages,
  ]
}
