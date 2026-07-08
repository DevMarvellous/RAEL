'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Zap, Megaphone, BarChart3, Palette, Check } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const services = [
  {
    id: 'software',
    title: 'Software & Systems',
    icon: Monitor,
    tagline: 'One place to run your whole property business.',
    intro:
      'The tech that runs your business day to day — built around how you actually work, not a template you have to bend yourself into.',
    build: [
      'A website that shows all your listings with photos, prices, and a "book a viewing" button',
      'A system to track every lead from first message to sold — so nothing gets forgotten',
      'A dashboard where you add, edit, or remove listings yourself — no developer needed each time',
      'Client and agent logins, document storage, and payment tracking where you need them',
    ],
    help: 'You stop juggling spreadsheets, WhatsApp chats, and notebooks. Everything lives in one place your whole team can see — so nothing slips and you look far more organised to clients.',
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: Zap,
    tagline: 'Every lead answered, day or night.',
    intro:
      'Tech that does the repetitive work for you — replying, following up, and reminding — so no lead goes cold while you sleep.',
    build: [
      'A WhatsApp bot that replies to a new lead in seconds and books the viewing',
      'Automatic follow-ups for leads who went quiet, so none slip away',
      'Reminders to clients about viewings, payments, and documents',
      'Alerts to your team the moment a hot lead comes in',
    ],
    help: 'Most deals are lost simply because nobody replied fast enough. Automation makes sure every enquiry gets an instant, professional response — even at 2am — so you win the leads your competitors miss.',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    tagline: 'More of the right people seeing your listings.',
    intro:
      'Getting your properties in front of people who are actually looking to buy or rent near you — and turning their clicks into real enquiries.',
    build: [
      'Facebook and Instagram ads targeted at buyers and renters in your area',
      'Social media posts that show off your properties well',
      'Landing pages built to turn clicks into enquiries, not just visits',
      'Simple tracking so you see which ads bring real leads',
    ],
    help: 'A great listing nobody sees is a wasted listing. We put your properties in front of the right people and measure what works — so your marketing money brings back real enquiries, not just likes.',
  },
  {
    id: 'data',
    title: 'Data & Insights',
    icon: BarChart3,
    tagline: 'Price right and know what is working.',
    intro:
      'Turning your numbers into clear, simple answers — so you make decisions based on facts, not guesswork.',
    build: [
      'Reports showing which listings get attention and which are ignored',
      'What similar properties are selling or renting for, so you price right',
      'A month-by-month view of how your sales are doing',
      'Clear dashboards anyone on your team can read at a glance',
    ],
    help: 'When you can see what is actually happening, you price smarter, drop what is not working, and double down on what is. No more guessing — just clear numbers pointing you to your next move.',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    icon: Palette,
    tagline: 'Look trusted before you say a word.',
    intro:
      'Making your business look as serious and premium as the properties you sell — from the first glance.',
    build: [
      'A logo and brand colours that fit your business',
      'A consistent look across your website, ads, and documents',
      'Templates for listings, offers, and social posts',
      'A simple brand guide so everything stays consistent as you grow',
    ],
    help: 'In property, trust is everything, and people judge fast. A clean, consistent brand makes buyers take you seriously before you have said a word — and lets you charge what you are worth.',
  },
]

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const Icon = service.icon
  const reversed = index % 2 === 1

  return (
    <div ref={ref} id={service.id} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, ease }}
        className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16"
      >
        {/* Text */}
        <div className={reversed ? 'lg:order-2' : ''}>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-blue/10">
            <Icon className="h-7 w-7 stroke-royal-blue stroke-[1.5]" />
          </div>
          <h2 className="mb-2 font-serif text-3xl font-bold text-text-dark lg:text-4xl">
            {service.title}
          </h2>
          <p className="mb-5 font-sans text-lg font-semibold text-gold-strong">{service.tagline}</p>
          <p className="mb-6 font-sans text-[16px] leading-relaxed text-text-mid">{service.intro}</p>
          <p className="font-sans text-[16px] leading-relaxed text-text-mid">
            <span className="font-semibold text-text-dark">How it helps: </span>
            {service.help}
          </p>
        </div>

        {/* What we build card */}
        <div className={`rounded-[20px] border border-border bg-gray-white p-7 lg:p-8 ${reversed ? 'lg:order-1' : ''}`}>
          <p className="mb-5 font-sans text-sm font-bold uppercase tracking-wide text-text-dark">
            What we can build
          </p>
          <ul className="space-y-4">
            {service.build.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-strong" />
                <span className="font-sans text-[15px] leading-relaxed text-text-mid">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export function ServicesDetail() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        {/* Page header */}
        <div className="mb-16 max-w-2xl lg:mb-24">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-strong">
            Our Services
          </p>
          <h1 className="mb-5 font-serif text-[clamp(34px,6vw,60px)] font-bold leading-[1.05] text-text-dark">
            Five ways we help real estate grow.
          </h1>
          <p className="font-sans text-lg leading-relaxed text-text-mid">
            Software, automation, marketing, data, and branding — handled by one team that
            works together. Here is exactly what each one means and how it helps you sell faster.
          </p>
        </div>

        {/* Service blocks */}
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-[24px] bg-royal-blue px-7 py-12 text-center lg:mt-28 lg:px-16 lg:py-16">
          <h2 className="mb-4 font-serif text-[clamp(26px,4vw,40px)] font-bold leading-tight text-white">
            Not sure which one you need?
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-sans text-lg font-light text-text-white-muted">
            That is exactly what the free call is for. We look at your setup and tell you
            honestly where to start — no pressure to buy.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-gold px-8 py-3.5 font-sans text-base font-bold text-navy transition-all duration-250 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_0_24px_var(--gold-glow)] active:scale-[0.97]"
          >
            <span className="mr-2">&rarr;</span>
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  )
}
