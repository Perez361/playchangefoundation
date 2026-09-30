import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'
import JsonLd from '@/components/JsonLd'
import {
  defaultKeywords,
  organizationSchema,
  siteName,
  siteUrl,
  websiteSchema,
} from './seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: 'PlayChange Foundation | Sport for Development in Ghana',
  description: 'PlayChange Foundation (Play Change) is a youth-led sports NGO in Ghana using sport, play and physical activity for health, NCD prevention, education and youth empowerment.',
  keywords: defaultKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  publisher: siteName,
  category: 'Nonprofit organization',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
    shortcut: '/images/favicon.ico',
  },
  openGraph: {
    siteName,
    title: 'PlayChange Foundation | Sport for Development in Ghana',
    description: 'A youth-led Ghanaian nonprofit using sport, play and physical activity to build healthier, more inclusive communities.',
    type: 'website',
    locale: 'en_GH',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayChange Foundation | Sport for Development in Ghana',
    description: 'A youth-led Ghanaian nonprofit using sport, play and physical activity to build healthier, more inclusive communities.',
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the token Search Console gives
  // you, and the meta tag appears on every page. Without a verified property
  // there is no way to submit the sitemap or see which queries the site ranks
  // for, so this is the first thing to fill in.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  // Matches the navy `primary` in tailwind.config.js; it was still the old
  // green, so mobile browsers tinted their chrome off-brand.
  themeColor: '#02024a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GH">
      <body className="bg-gray-50">
        {/* Declared once for the whole site: who we are, what we work on and
            where. Every page inherits it, which is what brand searches and
            subject searches both resolve against. */}
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <LoadingSpinner />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
