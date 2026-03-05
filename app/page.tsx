import type { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'PlayChange Foundation - Empowering Communities Through Sports | Ghana',
  description: 'PlayChange Foundation uses sports as a tool for social development in Ghana. We empower communities through sports and play, creating positive change and opportunities for youth.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
          <div className="hero-overlay absolute inset-0"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">PlayChange Foundation</h1>
            <p className="text-xl md:text-2xl mb-8">Inspire development and change through sports and play</p>
            <a href="#learn-more" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section id="learn-more" className="py-20" aria-label="About Us Section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              PlayChange Foundation is organized by students from the Sports Department in the University of Ghana that uses sport as a tool for social development. We believe that sport has the power to transform lives and communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center mvv-card">
              <div className="text-blue-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faBullseye} className="icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">To inspire development and change through sports and play.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center mvv-card">
              <div className="text-blue-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">A Ghana where everyone can achieve their full potential through sport and physical activity.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center mvv-card">
              <div className="text-blue-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">Inclusiveness, respect, innovation, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-600 text-white py-20" aria-label="Impact Statistics">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="max-w-2xl mx-auto mb-12">Through our various initiatives and programs, we're making a real difference in communities across Ghana.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>Youth Participants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p>Communities Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Sports Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "PlayChange Foundation",
            "description": "PlayChange Foundation uses sports as a tool for social development in Ghana, empowering communities through sports and play.",
            "url": "https://playchangefoundation.org",
            "logo": "https://playchangefoundation.org/images/pcf-logo.png",
            "sameAs": [
              "https://facebook.com/playchangefoundation",
              "https://twitter.com/playchange",
              "https://instagram.com/playchangefoundation"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Ghana"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+233-123-456-789",
              "contactType": "customer service",
              "email": "info@playchange.org"
            }
          })
        }}
      />
    </>
  )
}
