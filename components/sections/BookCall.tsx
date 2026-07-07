'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CalendarCheck, MessageCircle } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const perks = [
  'A quick look at your current setup',
  'Where you\'re losing leads — and how to fix it',
  'A clear, honest next step. No pressure.',
]

export function BookCall() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const handleScrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="book" ref={sectionRef} className="bg-royal-blue-soft py-[var(--section-py-mobile)] lg:py-[var(--section-py-desktop)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        <motion.div
          initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-[28px] bg-royal-blue px-7 py-12 text-center lg:px-16 lg:py-16"
        >
          {/* Glow accent */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70"
            style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-4 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-gold">
              <span>&#9670;</span> Free · No Obligation
            </p>
            <h2 className="mb-5 font-serif text-[clamp(30px,5vw,52px)] font-bold leading-[1.05] text-white">
              Book a free consultation call.
            </h2>
            <p className="mb-8 font-sans text-lg font-light leading-relaxed text-text-white-muted">
              A 20-minute chat about your properties, your goals, and how we&apos;d help you get more leads. No pitch — just a real conversation.
            </p>

            {/* Perks */}
            <ul className="mx-auto mb-10 flex max-w-md flex-col gap-3 text-left">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 font-sans text-[15px] text-text-white-muted">
                  <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {perk}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleScrollToContact}
                className="w-full rounded-full bg-gold px-8 py-3.5 font-sans text-base font-bold text-navy transition-all duration-250 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_0_24px_var(--gold-glow)] active:scale-[0.97] sm:w-auto"
              >
                <span className="mr-2">&rarr;</span>
                Book My Free Call
              </button>
              <a
                href="https://wa.me/2349030891731?text=Hi%20RAEL%2C%20I%27d%20like%20to%20book%20a%20free%20consultation%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 font-sans text-base font-semibold text-white backdrop-blur-sm transition-all duration-250 hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.97] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 text-whatsapp" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
