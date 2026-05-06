import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jumbosafaris.com"),
  title: {
    default: "Jumbo Safaris | Private Tanzania Safari Operator",
    template: "%s | Jumbo Safaris",
  },
  description:
    "Private guided Tanzania safaris from Arusha. Serengeti, Ngorongoro, Tarangire. Tailor-made itineraries, expert local guides.",
  openGraph: {
    siteName: "Jumbo Safaris",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo-roundel.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Jumbo Safaris",
    url: "https://www.jumbosafaris.com",
    logo: "https://www.jumbosafaris.com/logo-horizontal.png",
    telephone: "+255742789292",
    email: "hello@jumbosafaris.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arusha",
      addressCountry: "TZ",
    },
    priceRange: "$$$",
    sameAs: [
      "https://www.facebook.com/jumbosafaris",
      "https://www.instagram.com/jumbosafaris",
      "https://www.youtube.com/@jumbosafaris",
    ],
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} bg-cream`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-inter antialiased bg-cream text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
