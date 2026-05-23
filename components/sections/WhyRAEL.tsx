'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Shield, Infinity, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Full Ownership. No Handoff.',
    description: 'One team handles design, development, and deployment. You deal with one team — from day one to go-live. No confusion. No middlemen.',
    animateFrom: { x: -60, opacity: 0 },
  },
  {
    icon: Infinity,
    title: 'Built to Last, Not Just to Launch.',
    description: "We don't disappear after go-live. We support, iterate, and grow the product with you over time.",
    animateFrom: { y: 60, opacity: 0 },
  },
  {
    icon: MapPin,
    title: 'Built for Your Market.',
    description: 'We build for local payment rails, real network conditions, and the users your business actually serves. No square pegs. No round holes.',
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
            headline={<>Why businesses<br />choose RAEL.</>}
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
