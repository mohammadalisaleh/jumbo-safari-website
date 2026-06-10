import { Pricing, TierPrice, SeasonPrices } from "@/lib/data/itineraries"

function formatUsd(value: number): string {
  return "$" + value.toLocaleString("en-US")
}

interface SeasonRow {
  tier: TierPrice["tier"]
  summary: string
  lodges: string
  prices: SeasonPrices
}

function SeasonBlock({ label, rows }: { label: string; rows: SeasonRow[] }) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="font-montserrat font-bold text-forest mb-3">{label}</h3>

      {/* Desktop / tablet: full matrix */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse border border-border-soft text-left">
          <thead>
            <tr className="bg-forest text-cream">
              <th className="font-montserrat font-semibold text-sm px-4 py-3 align-bottom">Tier</th>
              <th className="font-montserrat font-semibold text-sm px-4 py-3 text-right align-bottom">
                2 guests<span className="block text-cream/70 font-normal text-xs">per person</span>
              </th>
              <th className="font-montserrat font-semibold text-sm px-4 py-3 text-right align-bottom">
                4 guests<span className="block text-cream/70 font-normal text-xs">per person</span>
              </th>
              <th className="font-montserrat font-semibold text-sm px-4 py-3 text-right align-bottom">
                6 guests<span className="block text-cream/70 font-normal text-xs">per person</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.tier} className="bg-white border-t border-border-soft align-top">
                <td className="px-4 py-4">
                  <div className="font-montserrat font-bold text-forest">{row.tier}</div>
                  <p className="text-sm text-ink/80 mt-1">{row.summary}</p>
                  <p className="text-xs text-forest/60 mt-2 uppercase tracking-wide">{row.lodges}</p>
                </td>
                <td className="px-4 py-4 text-right font-montserrat font-bold text-forest whitespace-nowrap">
                  {formatUsd(row.prices.p2)}
                </td>
                <td className="px-4 py-4 text-right font-montserrat font-bold text-forest whitespace-nowrap">
                  {formatUsd(row.prices.p4)}
                </td>
                <td className="px-4 py-4 text-right font-montserrat font-bold text-forest whitespace-nowrap">
                  {formatUsd(row.prices.p6)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="sm:hidden space-y-4">
        {rows.map((row) => (
          <div key={row.tier} className="border border-border-soft bg-white">
            <div className="bg-forest text-cream px-4 py-3 font-montserrat font-bold">{row.tier}</div>
            <div className="px-4 py-4">
              <p className="text-sm text-ink/80">{row.summary}</p>
              <p className="text-xs text-forest/60 mt-2 uppercase tracking-wide">{row.lodges}</p>
              <dl className="mt-4 space-y-1">
                <div className="flex justify-between border-t border-border-soft pt-2">
                  <dt className="text-ink/80">2 guests (pp)</dt>
                  <dd className="font-montserrat font-bold text-forest">{formatUsd(row.prices.p2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/80">4 guests (pp)</dt>
                  <dd className="font-montserrat font-bold text-forest">{formatUsd(row.prices.p4)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/80">6 guests (pp)</dt>
                  <dd className="font-montserrat font-bold text-forest">{formatUsd(row.prices.p6)}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PricingMatrix({ pricing }: { pricing: Pricing }) {
  const greenRows: SeasonRow[] = pricing.tiers
    .filter((t) => t.green)
    .map((t) => ({ tier: t.tier, summary: t.summary, lodges: t.lodges, prices: t.green! }))

  const peakRows: SeasonRow[] = pricing.tiers.map((t) => ({
    tier: t.tier,
    summary: t.summary,
    lodges: t.lodges,
    prices: t.peak,
  }))

  return (
    <div>
      {pricing.greenLabel && greenRows.length > 0 && (
        <SeasonBlock label={pricing.greenLabel} rows={greenRows} />
      )}
      <SeasonBlock label={pricing.peakLabel} rows={peakRows} />
      <p className="text-sm text-ink/70 mt-4">{pricing.basis}</p>
    </div>
  )
}
