'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Quote, ImageIcon, Wrench } from 'lucide-react'
import { testimonials, type Testimonial } from '@/lib/testimonials'

const ease = [0.16, 1, 0.3, 1]

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, ease, delay: index * 0.1 }}
      className="grid items-stretch gap-6 overflow-hidden rounded-[22px] border border-border bg-white shadow-[var(--shadow-card)] lg:grid-cols-2 lg:gap-0"
    >
      {/* Screenshot / proof */}
      <div className="relative flex items-center justify-center bg-gray-white p-4 lg:p-6">
        {t.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.screenshot}
            alt={`Testimonial from ${t.name}`}
            className="max-h-[420px] w-full rounded-xl border border-border object-contain shadow-sm"
          />
        ) : (
          // Placeholder frame until a real screenshot is added.
          <div className="flex aspect-[4/5] w-full max-w-[320px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-white p-6 text-center">
            <ImageIcon className="mb-3 h-10 w-10 text-text-muted" />
            <p className="font-sans text-sm font-semibold text-text-mid">
              Testimonial screenshot
            </p>
            <p className="mt-1 font-sans text-xs text-text-muted">
              Add the real image to /public/testimonials/
            </p>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col p-7 lg:p-9">
        <Quote className="mb-4 h-8 w-8 shrink-0 fill-gold/20 text-gold-strong" />
        <p className="mb-6 flex-1 font-serif text-lg leading-relaxed text-text-dark lg:text-xl">
          &ldquo;{t.quote}&rdquo;
        </p>

        {t.built && (
          <div className="mb-6 rounded-xl bg-royal-blue/5 p-4">
            <p className="mb-1 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wide text-royal-blue">
              <Wrench className="h-3.5 w-3.5" /> What we built
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-text-mid">{t.built}</p>
          </div>
        )}

        <div className="flex items-center gap-4 border-t border-border pt-5">
          {t.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-blue font-sans text-sm font-bold text-white">
              {initials(t.name)}
            </div>
          )}
          <div>
            <p className="font-sans text-[15px] font-bold text-text-dark">{t.name}</p>
            <p className="font-sans text-sm text-text-mid">{t.role}</p>
            {t.industry && (
              <p className="mt-0.5 font-sans text-xs text-text-muted">{t.industry}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsList() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        {/* Header */}
        <div className="mb-14 max-w-2xl lg:mb-20">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-strong">
            Testimonials
          </p>
          <h1 className="mb-5 font-serif text-[clamp(34px,6vw,60px)] font-bold leading-[1.05] text-text-dark">
            Real work. Real words.
          </h1>
          <p className="font-sans text-lg leading-relaxed text-text-mid">
            We are focused on real estate, but the systems and automation we build work
            anywhere. Here is what the people we have built for have to say — in their own words.
          </p>
        </div>

        {/* List */}
        <div className="mx-auto max-w-4xl space-y-10 lg:space-y-14">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name + index} t={t} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-20 max-w-4xl rounded-[24px] bg-royal-blue px-7 py-12 text-center lg:mt-28 lg:px-16 lg:py-16">
          <h2 className="mb-4 font-serif text-[clamp(26px,4vw,40px)] font-bold leading-tight text-white">
            Want results like these?
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-sans text-lg font-light text-text-white-muted">
            Book a free call and we will show you exactly how we would help your business grow.
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
