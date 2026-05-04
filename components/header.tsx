import Link from "next/link"
import { MessageCircle, Mail, Star } from "lucide-react"
import { Navigation } from "./navigation"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-forest text-cream">
        <div className="max-w-content mx-auto px-6 h-10 flex items-center justify-between text-caption">
          <a
            href="https://wa.me/255742789292"
            className="flex items-center gap-2 hover:text-orange transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>
          <div className="flex items-center gap-1">
            <span className="hidden md:inline">Rated 5 Stars on TripAdvisor</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-orange text-orange" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@jumbosafaris.com"
              className="hidden sm:flex items-center gap-2 hover:text-orange transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">hello@jumbosafaris.com</span>
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <Navigation />
    </header>
  )
}
