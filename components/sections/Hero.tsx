'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
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
      {isMounted && (
        <>
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
        </>
      )}

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-white to-transparent" />

      {/* Content */}
      <div className="relative mx-auto grid min-h-svh max-w-[var(--container-max)] grid-cols-1 items-center gap-12 px-[var(--container-pad-mobile)] py-32 lg:grid-cols-2 lg:gap-16 lg:px-[var(--container-pad-desktop)]">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          {/* Top Label */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mb-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-gold lg:justify-start"
          >
            <span>&#9670;</span> Real Estate Growth &middot; From Software To Sales
          </motion.p>

          {/* Headline */}
          <div className="mb-6 font-serif text-[clamp(40px,7vw,72px)] font-bold leading-[1.05] text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
            >
              Everything Real
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
            >
              Estate Needs
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
            >
              To <span className="font-serif italic text-gold">Grow</span>.
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.8 }}
            className="mx-auto mb-10 max-w-lg font-sans text-lg font-light leading-relaxed text-text-white-muted lg:mx-0"
          >
            Software, marketing, data, and branding — under one roof, built for real estate teams that want to grow online and sell faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.0 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start justify-center"
          >
            <button
              onClick={handleScrollToContact}
              className="rounded-full bg-gold px-6 py-3 font-sans text-base font-bold text-navy transition-all duration-250 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_0_24px_var(--gold-glow)] active:scale-[0.97] sm:px-8 sm:py-3.5"
            >
              <span className="mr-2">&rarr;</span>
              Get More Leads
            </button>
            <button
              onClick={handleScrollToServices}
              className="rounded-full border border-white/25 bg-white/5 px-6 py-3 font-sans text-base font-semibold text-white backdrop-blur-sm transition-all duration-250 hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.97] sm:px-8 sm:py-3.5"
            >
              See What We Do
            </button>
          </motion.div>
        </div>

        {/* Right: Framed Property Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            className="relative overflow-hidden rounded-[24px] border border-gold/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            style={{ animation: 'float2 9s ease-in-out infinite' }}
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
              alt="Modern luxury real estate property"
              className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-blue/50 via-transparent to-transparent" />
          </div>

          {/* Floating leads badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.1 }}
            className="absolute -bottom-5 -left-3 rounded-2xl border border-gold/30 bg-white/95 px-4 py-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:-bottom-6 sm:-left-6 sm:px-6 sm:py-4"
          >
            <p className="font-serif text-2xl font-bold text-royal-blue sm:text-3xl">More Leads</p>
            <p className="font-sans text-xs text-text-mid sm:text-sm">Listings that sell faster</p>
          </motion.div>
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
