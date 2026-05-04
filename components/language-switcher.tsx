"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const locales = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "pl", flag: "🇵🇱", name: "Polski" },
  { code: "cs", flag: "🇨🇿", name: "Čeština" },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = useTranslations("languageSwitcher")

  const currentLocale = locales.find((l) => l.code === locale) || locales[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix from pathname
    let newPath = pathname
    const currentLocalePrefix = `/${locale}`
    
    if (pathname.startsWith(currentLocalePrefix + "/") || pathname === currentLocalePrefix) {
      newPath = pathname.slice(currentLocalePrefix.length) || "/"
    }
    
    // Add new locale prefix if not English (default)
    if (newLocale !== "en") {
      newPath = `/${newLocale}${newPath === "/" ? "" : newPath}`
    }
    
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xs hover:text-orange transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm">{currentLocale.flag}</span>
        <span>{currentLocale.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-border-soft shadow-lg z-50 min-w-[120px]">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-cream transition-colors ${
                l.code === locale ? "bg-cream font-semibold" : ""
              }`}
            >
              <span>{l.flag}</span>
              <span className="text-ink">{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
