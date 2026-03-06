import type { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye, faHeart, faShieldAlt, faUserCheck, faChalkboardTeacher, faFileContract, faExclamationTriangle, faClipboardCheck, faUsers, faGavel, faHandshake, faGraduationCap, faVenusMars, faBalanceScale, faCity } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'PlayChange Foundation - Empowering Communities Through Sports | Ghana',
  description: 'PlayChange Foundation uses sports as a tool for social development in Ghana. We empower communities through sports and play, creating positive change and opportunities for youth.',
}

const sdgs = [
  {
    icon: 'heartbeat',
    color: '#4C9F38',
    title: 'SDG 3: Good Health',
    subtitle: 'Good Health and Well-being',
    description: 'Promoting physical activity and healthy lifestyles through sports programs that improve community health and well-being.'
  },
  {
    icon: 'graduation-cap',
    color: '#C5192D',
    title: 'SDG 4: Quality Education',
    subtitle: 'Quality Education',
    description: 'Using sports as an educational tool to teach life skills, teamwork, and leadership to youth across Ghana.'
  },
  {
    icon: 'venus-mars',
    color: '#FF3A21',
    title: 'SDG 5: Gender Equality',
    subtitle: 'Gender Equality',
    description: 'Creating inclusive sports programs that empower girls and women, promoting equal opportunities for all.'
  },
  {
    icon: 'balance-scale',
    color: '#DD1367',
    title: 'SDG 10: Reduced Inequalities',
    subtitle: 'Reduced Inequalities',
    description: 'Ensuring sports access for all communities regardless of socioeconomic status, creating equal opportunities.'
  },
  {
    icon: 'city',
    color: '#FD9D24',
    title: 'SDG 11: Sustainable Communities',
    subtitle: 'Sustainable Cities and Communities',
    description: 'Building resilient communities through sports infrastructure and programs that foster social cohesion.'
  },
  {
    icon: 'handshake',
    color: '#19486A',
    title: 'SDG 17: Partnerships',
    subtitle: 'Partnerships for the Goals',
    description: 'Collaborating with local and international partners to amplify our impact and achieve sustainable development.'
  }
]

const safeguarding = [
  {
    icon: faShieldAlt,
    title: 'Child Protection',
    description: 'Comprehensive policies and procedures to protect children from harm, abuse, and exploitation in all our programs.'
  },
  {
    icon: faUserCheck,
    title: 'Safe Recruitment',
    description: 'Rigorous background checks and vetting processes for all staff, volunteers, and partners working with our communities.'
  },
  {
    icon: faChalkboardTeacher,
    title: 'Training & Awareness',
    description: 'Regular safeguarding training for all team members to recognize, respond to, and report concerns appropriately.'
  },
  {
    icon: faFileContract,
    title: 'Code of Conduct',
    description: 'Clear behavioral standards and ethical guidelines that all participants, staff, and partners must adhere to.'
  },
  {
    icon: faExclamationTriangle,
    title: 'Reporting Mechanisms',
    description: 'Accessible and confidential channels for reporting safeguarding concerns, with prompt investigation and action.'
  },
  {
    icon: faClipboardCheck,
    title: 'Risk Assessment',
    description: 'Continuous evaluation of potential risks in our programs and implementation of preventive measures.'
  },
  {
    icon: faUsers,
    title: 'Inclusive Environment',
    description: 'Creating respectful spaces where diversity is celebrated and everyone feels safe, valued, and protected.'
  },
  {
    icon: faGavel,
    title: 'Accountability',
    description: 'Regular monitoring, evaluation, and transparent reporting on our safeguarding practices and outcomes.'
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">PlayChange Foundation</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90">Inspiring development and change through sports and play</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="#learn-more" className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition duration-300 ease-in-out btn-animate shine w-full sm:w-auto">
                Learn More
              </a>
              <a href="/contact" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-primary transition duration-300 ease-in-out w-full sm:w-auto">
                Get Involved
              </a>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section id="learn-more" className="py-20 bg-gradient-to-br from-primary/10 to-blue-50" aria-label="About Us Section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              PlayChange Foundation is organized by students from the Department of Physical Education and Sport Studies in the University of Ghana that uses sport as a tool for social development. We believe that sport has the power to transform lives and communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-5xl mb-4">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">To inspire development and change through sports and play.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-5xl mb-4">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">A Ghana where everyone can achieve their full potential through sport and physical activity.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-5xl mb-4">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Values</h3>
              <p className="text-gray-600">Inclusiveness, respect, innovation, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs in Focus Section */}
      <section className="py-20 bg-white" aria-label="Sustainable Development Goals">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">SDGs in Focus</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Our work aligns with the United Nations Sustainable Development Goals, contributing to a better and more sustainable future for all through sports and community development.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgs.map((sdg, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border-l-4 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftColor: sdg.color }}>
                <div className="text-5xl mb-4" style={{ color: sdg.color }}>
                  {sdg.title.includes('3') && <FontAwesomeIcon icon={faHeart} />}
                  {sdg.title.includes('4') && <FontAwesomeIcon icon={faGraduationCap} />}
                  {sdg.title.includes('5') && <FontAwesomeIcon icon={faVenusMars} />}
                  {sdg.title.includes('10') && <FontAwesomeIcon icon={faBalanceScale} />}
                  {sdg.title.includes('11') && <FontAwesomeIcon icon={faCity} />}
                  {sdg.title.includes('17') && <FontAwesomeIcon icon={faHandshake} />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{sdg.title}</h3>
                <p className="text-sm text-gray-600 mb-2 font-semibold">{sdg.subtitle}</p>
                <p className="text-gray-600 text-sm">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-blue-50" aria-label="Safeguarding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Align Safeguarding to Our Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">At PlayChange Foundation, safeguarding is at the heart of everything we do. We are committed to creating safe, inclusive, and protective environments for all participants, especially children and vulnerable individuals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeguarding.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-primary/10 rounded-xl p-8 max-w-4xl mx-auto shadow-sm border border-primary/20">
              <p className="text-gray-700 font-semibold mb-2">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary mr-2" />
                Our Commitment
              </p>
              <p className="text-gray-600">
                We believe that safeguarding is everyone's responsibility. By embedding these principles into our organizational culture, we ensure that sports remain a positive force for development while protecting the dignity, rights, and well-being of all participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary text-white py-20" aria-label="Impact Statistics">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="max-w-2xl mx-auto mb-16 text-lg opacity-90">Through our various initiatives and programs, we're making a real difference in communities across Ghana.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">100+</div>
              <p className="text-xl opacity-90">Youth Participants</p>
              <div className="mt-4 w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">3+</div>
              <p className="text-xl opacity-90">Communities Reached</p>
              <div className="mt-4 w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">5+</div>
              <p className="text-xl opacity-90">Sports Programs</p>
              <div className="mt-4 w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white" aria-label="Our Partners">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We collaborate with amazing organizations that share our vision of empowering communities through sports and play.</p>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="partner-logo-container p-4">
              <div className="partner-logo bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24 w-48">
                <span className="text-gray-600 font-semibold">ScholAfrik</span>
              </div>
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
              "telephone": "+233-54-777-1914",
              "contactType": "customer service",
              "email": "info@playchangefoundation.org"
            }
          })
        }}
      />
    </>
  )
}

