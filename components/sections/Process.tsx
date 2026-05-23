'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    duration: '1–2 weeks',
    description: 'We map your business, constraints, and the real problem before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design',
    duration: '1–2 weeks',
    description: 'We design everything — screens, flows, and experience — and you approve before we build.',
  },
  {
    number: '03',
    title: 'Build',
    duration: '4–10 weeks',
    description: 'We build in 2-week sprints. You see progress every two weeks. No black-box delivery.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    duration: 'ongoing',
    description: "We deploy, train your team, and support you after go-live. We don't disappear.",
  },
]

const ease = [0.16, 1, 0.3, 1]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })
  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector('path')
      if (path) {
        setPathLength(path.getTotalLength())
      }
    }
  }, [])

  return (
    <section id="process" ref={sectionRef} className="bg-gray-white py-[var(--section-py-mobile)] lg:py-[var(--section-py-desktop)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad-mobile)] lg:px-[var(--container-pad-desktop)]">
        <motion.div
          initial={{ opacity: 0, y: 48, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <SectionHeader
            number="04"
            label="Process"
            headline={<>From idea to<br />live product.</>}
            subtext="We keep it simple, transparent, and fast."
          />
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Mobile: Vertical Timeline */}
          <div className="relative lg:hidden">
            {/* Vertical dashed line */}
            <div className="absolute bottom-0 left-[19px] top-0 w-px border-l-2 border-dashed border-gold" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease, delay: index * 0.15 }}
                  className="relative flex gap-6 pl-12"
                >
                  {/* Number circle */}
                  <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="font-mono text-lg font-bold text-gold">{step.number}</span>
                  </div>

                  <div>
                    <h3 className="font-sans text-xl font-bold text-text-dark">{step.title}</h3>
                    <span className="mb-2 inline-block rounded-full bg-royal-blue/10 px-3 py-1 font-sans text-xs font-medium text-royal-blue">
                      {step.duration}
                    </span>
                    <p className="font-sans text-[15px] leading-relaxed text-text-mid">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="relative hidden lg:block">
            {/* SVG Connecting Line */}
            <svg
              ref={svgRef}
              className="absolute left-0 right-0 top-[20px] -z-0 h-2 w-full"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 60 4 L 1140 4"
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeDasharray="8 5"
                fill="none"
                initial={{ strokeDashoffset: pathLength }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </svg>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="font-mono text-lg font-bold text-gold">{step.number}</span>
                  </div>

                  <h3 className="mb-2 font-sans text-xl font-bold text-text-dark">{step.title}</h3>
                  <span className="mb-3 inline-block rounded-full bg-royal-blue/10 px-3 py-1 font-sans text-xs font-medium text-royal-blue">
                    {step.duration}
                  </span>
                  <p className="font-sans text-[15px] leading-relaxed text-text-mid">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
