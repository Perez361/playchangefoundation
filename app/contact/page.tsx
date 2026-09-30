import type { Metadata } from 'next'
import { pageSeo, breadcrumbSchema } from '../seo'
import JsonLd from '@/components/JsonLd'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

export const metadata: Metadata = pageSeo(
  '/contact',
  'Contact PlayChange Foundation | Legon, Accra, Ghana',
  'Get in touch with PlayChange Foundation (Play Change) in Legon, Accra. Contact us about partnerships, funding, volunteering or bringing our sport and health programmes to your community.',
  ['contact PlayChange Foundation', 'sports NGO Accra contact', 'partner with an NGO in Ghana'],
)

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Contact', path: '/contact' }])} />
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[300px] relative">
          <div className="absolute inset-0">
            <Image
              src="/images/contacthero.jpg"
              alt="PlayChange Foundation volunteers at a community event in Accra"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl">Get in touch with the PlayChange team</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  )
}
