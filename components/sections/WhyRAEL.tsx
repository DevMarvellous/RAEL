'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Shield, Infinity, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'A fixed price, in writing, before we start.',
    description: 'After your free call you get a written scope and a fixed quote. No hourly surprises, no "that\'ll cost extra" halfway through. The number we agree on is the number you pay.',
    animateFrom: { x: -60, opacity: 0 },
  },
  {
    icon: Infinity,
    title: 'One person you can always reach.',
    description: 'You get a direct line to the person running your project — WhatsApp, not a ticket queue. Ask for an update any day and you get a straight answer, not a status page.',
    animateFrom: { y: 60, opacity: 0 },
  },
  {
    icon: MapPin,
    title: '30 days of free support after launch.',
    description: 'For a full month after go-live, any bug or fix is on us — no invoice. We built for how property actually moves here: WhatsApp leads, local payments, and buyers who browse on their phones.',
    animateFrom: { x: 60, opacity: 0 },
  },
]

const ease = [0.16, 1, 0.3, 1]

export function WhyRAEL() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="bg-royal-blue-soft py-[var(--section-py-mobile)] lg:py-[var(--section-py-desktop)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        <motion.div
          initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <SectionHeader
            number="03"
            label="Why Us"
            headline={<>Why real estate<br />chooses RAEL.</>}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={reason.animateFrom}
                animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease }}
                className="rounded-[20px] border border-border bg-white p-9 shadow-[var(--shadow-card)]"
              >
                <Icon className="mb-5 h-10 w-10 stroke-royal-blue stroke-[1.5]" />
                <h3 className="mb-3 font-sans text-xl font-bold text-text-dark">
                  {reason.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-text-mid">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
