'use client'

import { PageLoader } from '@/components/PageLoader'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { WhyRAEL } from '@/components/sections/WhyRAEL'
import { ValueStrip } from '@/components/sections/ValueStrip'
import { Process } from '@/components/sections/Process'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { NaryChat } from '@/components/chatbot/NaryChat'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
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
        <Contact />
      </main>
      <Footer />
      <NaryChat />
    </PageLoader>
  )
}
