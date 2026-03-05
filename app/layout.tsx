import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'

export const metadata: Metadata = {
  title: 'PlayChange Foundation - Empowering Communities Through Sports | Ghana',
  description: 'PlayChange Foundation uses sports as a tool for social development in Ghana. We empower communities through sports and play, creating positive change and opportunities for youth.',
  keywords: 'PlayChange Foundation, sports development, Ghana sports, youth empowerment, community development, sports NGO, sports for change, Ghana youth sports',
  authors: [{ name: 'PlayChange Foundation' }],
  icons: {
    icon: '/images/pcf-logo.png',
    apple: '/images/pcf-logo.png',
  },
  openGraph: {
    siteName: 'PlayChange Foundation',
    title: 'PlayChange Foundation - Empowering Through Sports',
    description: 'Transforming lives and communities in Ghana through the power of sports and play. Join us in making a difference.',
    type: 'website',
    url: 'https://playchangefoundation.org',
    images: [
      {
        url: 'https://playchangefoundation.org/images/pcf-logo.png',
        width: 512,
        height: 512,
        alt: 'PlayChange Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayChange Foundation - Sports for Change',
    description: 'Empowering Ghanaian communities through sports and youth development programs.',
    images: ['https://playchangefoundation.org/images/pcf-logo.png'],
  },
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
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://playchangefoundation.org" />
        <link rel="icon" href="/images/pcf-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/pcf-logo.png" />
      </head>
      <body className="bg-gray-50">
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
