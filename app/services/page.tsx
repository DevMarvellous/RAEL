import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ServicesDetail } from '@/components/sections/ServicesDetail'
import { NaryChat } from '@/components/chatbot/NaryChat'

export const metadata = {
  title: 'Services — RAEL | Real Estate Software, Marketing, Data & Branding',
  description:
    'A full breakdown of what RAEL builds for real estate: listing websites and systems, WhatsApp automation, property marketing, data insights, and branding.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ServicesDetail />
      </main>
      <Footer />
      <NaryChat />
    </>
  )
}
