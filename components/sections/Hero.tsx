'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

export function Hero() {
  const handleScrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-royal-blue">
      {/* Floating Orbs */}
      <div
        className="pointer-events-none absolute -right-[100px] -top-[100px] h-[500px] w-[500px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          animation: 'float1 12s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[80px] -left-[60px] h-[350px] w-[350px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)',
          animation: 'float2 15s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute right-[15%] top-[40%] h-[200px] w-[200px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          animation: 'float3 10s ease-in-out infinite',
        }}
      />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-white to-transparent" />

      {/* Content */}
      <div className="relative flex min-h-svh flex-col items-center justify-center px-[var(--container-pad-mobile)] py-32 text-center lg:px-[var(--container-pad-desktop)]">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-gold"
        >
          <span>&#9670;</span> Software Agency &middot; Est. 2026
        </motion.p>

        {/* Headline */}
        <div className="mb-6 font-serif text-[clamp(40px,8vw,80px)] font-bold leading-[1.05] text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            We Build Software
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
          >
            Businesses
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
          >
            <span className="font-serif italic text-gold">Actually</span> Need.
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.8 }}
          className="mb-10 max-w-sm font-sans text-lg font-light leading-relaxed text-text-white-muted lg:max-w-lg"
        >
          Custom apps, dashboards, and automation systems — designed and built for the businesses that need something better than off-the-shelf.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.0 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={handleScrollToServices}
            className="rounded-full bg-white px-6 py-3 font-sans text-base font-semibold text-royal-blue transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] active:scale-[0.97] sm:px-8 sm:py-3.5"
          >
            <span className="mr-2">&rarr;</span>
            See What We Build
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.3 }}
          className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center text-text-white-muted"
        >
          <ChevronDown
            className="h-5 w-5"
            style={{ animation: 'bounce-gentle 2s ease-in-out infinite' }}
          />
          <span className="mt-1 font-sans text-xs uppercase tracking-[0.12em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
