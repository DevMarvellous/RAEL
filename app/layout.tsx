import type { Metadata } from 'next'
import { Playfair_Display, Outfit, Space_Mono } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'RAEL — The Refinery African Entrepreneurship Lab',
  description: 'The growth partner for real estate. RAEL builds software, runs digital marketing, delivers data insights, and creates branding for agencies, developers, and property teams.',
  keywords: 'real estate marketing, real estate software, property websites, listing platform, real estate branding, property data analytics, real estate agency, Nigeria, Africa',
  openGraph: {
    title: 'RAEL — The Refinery African Entrepreneurship Lab',
    description: 'Software, marketing, data & branding — built for real estate.',
    url: 'https://rael.refinery.sbs',
    siteName: 'RAEL',
    locale: 'en_NG',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'RAEL — The Refinery African Entrepreneurship Lab'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAEL — The Refinery African Entrepreneurship Lab',
    description: 'Software, marketing, data & branding — built for real estate.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/brand-logo.svg',
    apple: '/brand-logo.svg',
  },
  metadataBase: new URL('https://rael.refinery.sbs'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${outfit.variable} ${spaceMono.variable} bg-white overflow-x-hidden`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
