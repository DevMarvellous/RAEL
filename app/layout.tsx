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
  description: 'Custom software solutions for businesses. We build websites, mobile apps, business intelligence dashboards, automation bots, and management systems.',
  keywords: 'software agency, custom software, web development, mobile app, business intelligence, automation, Nigeria, Africa',
  openGraph: {
    title: 'RAEL — The Refinery African Entrepreneurship Lab',
    description: 'Custom software for businesses that need something better.',
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
    description: 'Custom software for businesses that need something better.',
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
    <html lang="en" className={`${playfairDisplay.variable} ${outfit.variable} ${spaceMono.variable} bg-white`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
