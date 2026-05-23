'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349030891731?text=Hi%20RAEL%2C%20I%27d%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_20px_rgba(37,211,102,0.40)] transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full border-2 border-whatsapp/40"
        style={{ animation: 'pulse-ring 3s ease-out infinite' }}
      />

      {/* Tooltip (desktop only) */}
      <div className="absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-2 font-sans text-[13px] text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
        Chat with us
        <div className="absolute right-4 top-full border-4 border-transparent border-t-navy" />
      </div>
    </a>
  )
}
