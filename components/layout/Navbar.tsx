'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    const handleSectionObserver = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''))
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
      )

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) observer.observe(element)
      })

      return () => observer.disconnect()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    const cleanup = handleSectionObserver()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cleanup?.()
    }
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsDrawerOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-[20px] shadow-[0_1px_0_var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--container-pad-mobile)] py-4 lg:px-[var(--container-pad-desktop)]">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image
              src="/brand-logo.svg"
              alt="RAEL Symbol"
              width={40}
              height={40}
              className={`h-8 w-8 transition-all duration-300 lg:h-9 lg:w-9 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
            <span className={`font-serif text-2xl font-black tracking-tight transition-colors duration-300 lg:text-3xl ${
              isScrolled ? 'text-royal-blue' : 'text-white'
            }`}>
              RAEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`group relative font-sans text-[15px] font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-text-dark' : 'text-white'
                } ${activeSection === link.href.replace('#', '') ? (isScrolled ? 'text-royal-blue' : 'text-white') : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : ''
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`hidden rounded-full px-6 py-2.5 font-sans text-[15px] font-semibold transition-all duration-250 lg:flex ${
              isScrolled
                ? 'bg-royal-blue text-white hover:bg-royal-blue-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]'
                : 'bg-white text-royal-blue hover:bg-gray-white'
            }`}
          >
            <span className="mr-2">&rarr;</span>
            {"Let's Talk"}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`relative z-10 p-2 lg:hidden ${isScrolled ? 'text-text-dark' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-sm flex-col bg-navy"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute right-4 top-4 p-2 text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Links */}
              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="font-sans text-2xl font-semibold text-white transition-colors hover:text-gold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="block w-full rounded-full bg-royal-blue py-4 text-center font-sans text-lg font-semibold text-white transition-colors hover:bg-royal-blue-dark"
                >
                  {"Let's Talk"}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
