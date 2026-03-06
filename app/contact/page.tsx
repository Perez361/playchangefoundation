import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - PlayChange Foundation',
  description: 'Get in touch with PlayChange Foundation. Contact us for partnerships, volunteering, or general inquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[300px] relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/contacthero.jpg')" }}>
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
