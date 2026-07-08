'use client'

import { useEffect } from 'react'
import { PageLoader } from '@/components/PageLoader'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { WhyRAEL } from '@/components/sections/WhyRAEL'
import { ValueStrip } from '@/components/sections/ValueStrip'
import { Process } from '@/components/sections/Process'
import { BookCall } from '@/components/sections/BookCall'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { NaryChat } from '@/components/chatbot/NaryChat'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  // When arriving via /#section (e.g. from another page), scroll there once mounted.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash) return
    const id = window.location.hash.replace('#', '')
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <PageLoader>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <WhyRAEL />
        <ValueStrip />
        <Process />
        <BookCall />
        <Contact />
      </main>
      <Footer />
      <NaryChat />
    </PageLoader>
  )
}
