'use client'

import { useState, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { phoneDisplay, phoneE164, socialProfiles } from '@/lib/contact'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

/** Brand marks for the accounts listed in lib/contact.ts. */
const SOCIAL_ICONS = {
  Instagram: faInstagram,
  TikTok: faTiktok,
} as const

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '')

type Status =
  | { state: 'idle' }
  | { state: 'sent' }
  | { state: 'error'; message: string }

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Honeypot: hidden from people, irresistible to bots. The API answers 204
    // and drops anything that arrives with this filled in.
    website: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus({ state: 'idle' })

    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all fields.' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ state: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (!API_URL) {
      setStatus({
        state: 'error',
        message: 'The form is unavailable right now. Please email info@playchangefoundation.org.'
      })
      return
    }

    setIsSubmitting(true)

    try {
      let res: Response
      try {
        res = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      } catch {
        // fetch only rejects when the request never completed — offline, DNS,
        // a blocked CORS preflight. Its own message ("Failed to fetch") means
        // nothing to a visitor, so it must not be shown.
        throw new Error('We could not reach the server.')
      }

      if (!res.ok) {
        // The API returns a human-readable `error` for every failure it
        // controls; fall back only when something else went wrong.
        const body = await res.json().catch(() => null)
        throw new Error(
          typeof body?.error === 'string'
            ? body.error
            : 'Something went wrong sending your message.'
        )
      }

      setStatus({ state: 'sent' })
      setFormData({ name: '', email: '', subject: '', message: '', website: '' })
    } catch (err) {
      setStatus({
        state: 'error',
        message:
          err instanceof Error
            ? err.message
            : 'Something went wrong sending your message.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Contact Section */}
      <section className="py-20 contact-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6 contact-info">
              <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">
                      Department of Physical Education & Sport Studies<br />
                      University of Ghana<br />
                      Legon, Accra<br />
                      Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl mt-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a href="mailto:info@playchangefoundation.org" className="text-primary hover:underline">info@playchangefoundation.org</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl mt-1">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <a href={`tel:${phoneE164}`} className="text-primary hover:underline">{phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl mt-1">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 social-media">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialProfiles.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
                      aria-label={`${profile.name} (opens in a new tab)`}
                    >
                      <FontAwesomeIcon icon={SOCIAL_ICONS[profile.name]} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                {/* Honeypot. Hidden from people and from screen readers, and
                    left out of the tab order, so only a bot fills it. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <div aria-live="polite">
                  {status.state === 'sent' && (
                    <p className="rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-3">
                      Thank you for your message. We will get back to you soon.
                    </p>
                  )}
                  {status.state === 'error' && (
                    <p className="rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3">
                      {status.message}{' '}
                      <a href="mailto:info@playchangefoundation.org" className="underline">
                        Email us instead
                      </a>
                      .
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

