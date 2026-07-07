'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Building2, HardHat, UserRound, KeyRound, TrendingUp, Boxes } from 'lucide-react'

const industries = [
  { name: 'Agencies & Brokerages', icon: Building2 },
  { name: 'Property Developers', icon: HardHat },
  { name: 'Realtors & Agents', icon: UserRound },
  { name: 'Property Managers', icon: KeyRound },
  { name: 'Investors & Landlords', icon: TrendingUp },
  { name: 'PropTech & Adjacent', icon: Boxes },
]

const ease = [0.16, 1, 0.3, 1]

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section id="industries" ref={sectionRef} className="bg-white py-[var(--section-py-mobile)] lg:py-[var(--section-py-desktop)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        <motion.div
          initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <SectionHeader
            number="02"
            label="Who We Work With"
            headline={<>Built for everyone<br />in real estate.</>}
            subtext="Focused on property — open to the businesses that move alongside it."
          />
        </motion.div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="relative mb-10 overflow-hidden rounded-[20px] border border-border shadow-[var(--shadow-card)]"
        >
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
            alt="Premium real estate property exterior"
            className="h-[220px] w-full object-cover lg:h-[300px]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-royal-blue/70 via-royal-blue/20 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 lg:p-12">
            <p className="max-w-md font-serif text-2xl font-bold leading-tight text-white lg:text-3xl">
              Whatever you sell, wherever you sell it — we help it move.
            </p>
          </div>
        </motion.div>

        {/* Industry Tiles Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.8, ease, delay: index * 0.1 }}
                className="group relative cursor-default overflow-hidden rounded-[14px] border border-border bg-gray-white p-7 text-center transition-all duration-350"
              >
                {/* Flood fill effect on hover */}
                <div className="absolute inset-x-0 bottom-0 h-0 bg-royal-blue transition-all duration-350 group-hover:h-full" style={{ borderRadius: 'inherit' }} />
                
                <div className="relative z-10">
                  <Icon className="mx-auto mb-3 h-9 w-9 stroke-royal-blue stroke-[1.5] transition-colors duration-350 group-hover:stroke-white" />
                  <p className="font-sans text-[15px] font-semibold text-text-dark transition-colors duration-350 group-hover:text-white">
                    {industry.name}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
