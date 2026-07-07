'use client'

import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Monitor, Megaphone, BarChart3, Palette, Zap, Check } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Software & Systems',
    description: 'A website that shows all your listings, a place to track every lead from first message to sold, and a dashboard you can update yourself — no developer needed each time.',
    outcome: 'One place to run your whole property business.',
    icon: Monitor,
  },
  {
    number: '02',
    title: 'Automation',
    description: 'A WhatsApp bot that replies to a new lead in seconds — even at 2am — books the viewing, and follows up with anyone who goes quiet, so no lead slips through.',
    outcome: 'Every lead answered, day or night.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Digital Marketing',
    description: 'Facebook and Instagram ads aimed at people actually looking to buy or rent near you, plus posts and landing pages built to turn clicks into real enquiries.',
    outcome: 'More of the right people seeing your listings.',
    icon: Megaphone,
  },
  {
    number: '04',
    title: 'Data & Insights',
    description: 'Simple reports that show which listings get attention and which are ignored, what similar properties sell for, and how your sales are doing month to month.',
    outcome: 'Price right and know what is working.',
    icon: BarChart3,
  },
  {
    number: '05',
    title: 'Branding & Identity',
    description: 'A logo, brand colours, and a clean, consistent look across your website, ads, and documents — so buyers take your business seriously from the first glance.',
    outcome: 'Look trusted before you say a word.',
    icon: Palette,
  },
]

const ease = [0.16, 1, 0.3, 1]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 400, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 400, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    const maxTilt = 8
    rotateX.set((mouseY / (rect.height / 2)) * -maxTilt)
    rotateY.set((mouseX / (rect.width / 2)) * maxTilt)
    x.set(mouseX * 0.05)
    y.set(mouseY * 0.05)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    x.set(0)
    y.set(0)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, x, y, transformStyle: 'preserve-3d' }}
      className="group relative cursor-default rounded-[var(--radius-card)] border border-border bg-white p-7 transition-all duration-400 hover:-translate-y-2 hover:border-royal-blue hover:shadow-[var(--shadow-hover)]"
    >
      {/* Gold border trace on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[var(--radius-card)] border-2 border-transparent bg-gradient-to-r from-gold via-gold to-gold bg-clip-border" style={{ clipPath: 'inset(0 0 0 0 round var(--radius-card))' }} />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <Icon className="mb-4 h-10 w-10 stroke-royal-blue stroke-[1.5]" />
        <h3 className="mb-3 font-sans text-xl font-bold text-text-dark">{service.title}</h3>
        <p className="mb-5 font-sans text-[15px] leading-relaxed text-text-mid">
          {service.description}
        </p>
        <div className="mt-auto flex items-start gap-2 border-t border-border pt-4">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" />
          <p className="font-sans text-[14px] font-semibold text-text-dark">{service.outcome}</p>
        </div>
      </div>
      </motion.div>

  )
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section id="services" ref={sectionRef} className="bg-gray-white py-[var(--section-py-mobile)] lg:py-[var(--section-py-desktop)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        <motion.div
          initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <SectionHeader
            number="01"
            label="Services"
            headline={<>Five ways we help<br />real estate grow.</>}
            subtext="Software, automation, marketing, data, and brand — one team, working together."
          />
        </motion.div>

        {/* Service Cards Grid */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-6">
          {services.map((service, index) => (
            <div key={service.number} className="lg:col-span-2 lg:[&:nth-last-child(-n+2)]:col-span-3">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
