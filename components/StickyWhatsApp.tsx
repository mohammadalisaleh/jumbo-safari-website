"use client"

import { MessageCircle } from "lucide-react"

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/255742789292"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-2 bg-forest text-cream font-montserrat font-semibold text-sm border-t border-cream/10 hover:bg-forest/95 transition-colors"
      style={{
        paddingTop: "1rem",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <MessageCircle className="w-5 h-5 text-orange" />
      <span>Chat with us on WhatsApp</span>
    </a>
  )
}
