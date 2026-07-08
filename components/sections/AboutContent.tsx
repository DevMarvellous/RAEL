'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Shield, MessageCircle, LifeBuoy } from 'lucide-react'
import { team, type TeamMember } from '@/lib/team'

const ease = [0.16, 1, 0.3, 1]

const values = [
  {
    icon: Shield,
    title: 'A fixed price, in writing',
    description: 'You agree the scope and the price before we start. No hourly surprises.',
  },
  {
    icon: MessageCircle,
    title: 'One person you can reach',
    description: 'A direct line to the person running your project — on WhatsApp, not a ticket queue.',
  },
  {
    icon: LifeBuoy,
    title: '30 days free support',
    description: 'For a month after launch, any fix is on us. We do not disappear after go-live.',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, ease, delay: index * 0.08 }}
      className="flex flex-col items-center rounded-[20px] border border-border bg-white p-7 text-center shadow-[var(--shadow-card)]"
    >
      {member.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.image}
          alt={member.name}
          className="mb-5 h-24 w-24 rounded-full object-cover"
        />
      ) : (
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-royal-blue font-serif text-2xl font-bold text-white">
          {initials(member.name)}
        </div>
      )}
      <h3 className="font-sans text-lg font-bold text-text-dark">{member.name}</h3>
      <p className="mb-3 font-sans text-sm font-semibold text-gold-strong">{member.role}</p>
      <p className="font-sans text-[15px] leading-relaxed text-text-mid">{member.bio}</p>
    </motion.div>
  )
}

export function AboutContent() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        {/* Header / story */}
        <div className="mb-16 max-w-2xl lg:mb-24">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-strong">
            About Us
          </p>
          <h1 className="mb-5 font-serif text-[clamp(34px,6vw,60px)] font-bold leading-[1.05] text-text-dark">
            The team behind RAEL.
          </h1>
          <p className="mb-4 font-sans text-lg leading-relaxed text-text-mid">
            RAEL is part of The Refinery. We came together around one simple idea: real
            estate businesses deserve technology, marketing, and branding built properly —
            by people who actually pick up the phone.
          </p>
          <p className="font-sans text-lg leading-relaxed text-text-mid">
            We chose to focus on property because it is where we can help most: faster leads,
            cleaner systems, and a brand that makes buyers trust you before you say a word.
          </p>
        </div>

        {/* Team grid — everyone equal */}
        <div className="mb-20 lg:mb-28">
          <h2 className="mb-10 font-serif text-2xl font-bold text-text-dark lg:text-3xl">
            The people you work with.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamCard key={member.name + index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 lg:mb-28">
          <h2 className="mb-10 font-serif text-2xl font-bold text-text-dark lg:text-3xl">
            What we stand for.
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-[20px] border border-border bg-gray-white p-7"
                >
                  <Icon className="mb-4 h-9 w-9 stroke-royal-blue stroke-[1.5]" />
                  <h3 className="mb-2 font-sans text-lg font-bold text-text-dark">{value.title}</h3>
                  <p className="font-sans text-[15px] leading-relaxed text-text-mid">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-[24px] bg-royal-blue px-7 py-12 text-center lg:px-16 lg:py-16">
          <h2 className="mb-4 font-serif text-[clamp(26px,4vw,40px)] font-bold leading-tight text-white">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-sans text-lg font-light text-text-white-muted">
            Book a free call and tell us what you are working on. No pressure — just a real
            conversation about how we can help.
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
