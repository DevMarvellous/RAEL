import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { TestimonialsList } from '@/components/sections/TestimonialsList'
import { NaryChat } from '@/components/chatbot/NaryChat'

export const metadata = {
  title: 'Testimonials — RAEL',
  description:
    'What clients say about working with RAEL — the systems, automation, and software we build and deliver.',
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <TestimonialsList />
      </main>
      <Footer />
      <NaryChat />
    </>
  )
}
