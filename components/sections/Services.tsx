'use client'

import { useState, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Monitor, BarChart3, Zap, LayoutGrid, Package, Layers } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Website & App Development',
    description: 'Custom web and mobile applications built from scratch for your exact business logic and your users.',
    icon: Monitor,
  },
  {
    number: '02',
    title: 'Business Intelligence Dashboards',
    description: 'Real-time analytics dashboards that turn your business data into decisions you can act on immediately.',
    icon: BarChart3,
  },
  {
    number: '03',
    title: 'Business Automation Bots',
    description: 'WhatsApp bots and automated workflows that handle routine tasks so your team focuses on what matters.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Management Systems',
    description: 'School, clinic, property — fully custom management systems built around how you actually run things.',
    icon: LayoutGrid,
  },
  {
    number: '05',
    title: 'Inventory Management Systems',
    description: 'Track stock, sales, and suppliers across every location in real time. No more guessing.',
    icon: Package,
  },
  {
    number: '06',
    title: 'Custom Enterprise Software',
    description: 'When your business is too unique for off-the-shelf, we build exactly what it needs.',
    icon: Layers,
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

      <div className="relative z-10">
        <Icon className="mb-4 h-10 w-10 stroke-royal-blue stroke-[1.5]" />
        <p className="mb-2 font-mono text-[11px] text-gold">{service.number}</p>
        <h3 className="mb-3 font-sans text-xl font-bold text-text-dark">{service.title}</h3>
        <p className="mb-4 font-sans text-[15px] leading-relaxed text-text-mid">
          {service.description}
        </p>
        <span className="font-sans text-sm font-semibold text-royal-blue">
          Learn more &rarr;
        </span>
      </div>
    </motion.div>
  )
}

export function Services() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const visibleServices = showAll ? services : services.slice(0, 3)

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
            headline={<>We build the tools<br />your business needs.</>}
            subtext="No generic software. No retrofitted templates."
          />
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.number} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show All Button - Mobile Only */}
        <div className="mt-8 text-center lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-sans text-sm font-semibold text-royal-blue underline underline-offset-4"
          >
            {showAll ? 'Show less' : 'Show all services'}
          </button>
        </div>
      </div>
    </section>
  )
}
