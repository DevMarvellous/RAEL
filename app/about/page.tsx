import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AboutContent } from '@/components/sections/AboutContent'
import { NaryChat } from '@/components/chatbot/NaryChat'

export const metadata = {
  title: 'About — RAEL | The team behind your real estate growth',
  description:
    'Meet the team behind RAEL, part of The Refinery. We build software, marketing, data, and branding for real estate businesses.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
      <NaryChat />
    </>
  )
}
