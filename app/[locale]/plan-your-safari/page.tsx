import { Metadata } from "next"
import PlanForm from "./PlanForm"

export const metadata: Metadata = {
  title: "Plan Your Tanzania Safari",
  description: "Tell us your dates, budget, and dream trip. Arusha-based, we send a personalised Tanzania safari proposal within 24 hours. No cost, no commitment.",
  alternates: { canonical: "https://www.jumbosafaris.com/plan-your-safari" },
}

interface Props {
  searchParams: Promise<{ adults?: string; children?: string; date?: string }>
}

export default async function PlanYourSafariPage({ searchParams }: Props) {
  const params = await searchParams
  const adults = Math.max(1, parseInt(params.adults ?? "2", 10))
  const children = Math.max(0, parseInt(params.children ?? "0", 10))
  const date = params.date ?? ""

  return (
    <main className="bg-cream min-h-screen">
      <PlanForm
        initialAdults={adults}
        initialChildren={children}
        initialDate={date}
      />
    </main>
  )
}
