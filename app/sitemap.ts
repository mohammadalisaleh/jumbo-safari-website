import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jumbosafaris.com"
  const locales = ["pl", "cs"]

  const englishPages = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/tanzania-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    // National Parks
    { url: `${baseUrl}/national-parks/serengeti`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/ngorongoro-crater`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/tarangire`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/national-parks/lake-manyara`, priority: 0.7, changeFrequency: "weekly" as const },
    // Itineraries
    { url: `${baseUrl}/itineraries/8-day-classic-tanzania-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/calving-season-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/honeymoon-tanzania-zanzibar`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/itineraries/great-migration-safari`, priority: 0.9, changeFrequency: "weekly" as const },
    // Guides
    { url: `${baseUrl}/guides/best-time-to-visit-tanzania`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guides/tanzania-safari-cost`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guides/what-to-pack-safari`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guides/tanzania-visa-requirements`, priority: 0.6, changeFrequency: "monthly" as const },
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
