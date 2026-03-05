import type { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Initiatives - PlayChange Foundation',
  description: 'Discover PlayChange Foundation initiatives: scholarships, health awareness, education, social inclusion, gender equity, and peace building through sports.',
}

const initiatives = [
  {
    id: 'scholarships',
    title: 'Scholarships for Needy Students',
    description: 'We provide scholarships to underprivileged students, ensuring they have access to quality education. Our scholarship program aims to:',
    points: [
      'Support academic excellence',
      'Provide educational resources',
      'Mentor students for success',
      'Create opportunities for growth'
    ],
    image: '/images/hero.jpg',
    imageAlt: 'Students studying with scholarships',
    reverse: false
  },
  {
    id: 'health',
    title: 'Health and Disease Prevention',
    description: 'Through physical activity and sports, we promote health awareness and disease prevention in communities:',
    points: [
      'Reduce NCDs through regular exercise',
      'Combat HIV/AIDS through awareness',
      'Promote healthy lifestyle choices',
      'Organize health education workshops'
    ],
    image: '/images/hero.jpg',
    imageAlt: 'People exercising for health',
    reverse: true
  },
  {
    id: 'education',
    title: 'Education and Life Skills',
    description: 'We focus on developing both academic and essential life skills through sports:',
    points: [
      'Leadership development programs',
      'Team-building activities',
      'Communication skills training',
      'Problem-solving workshops'
    ],
    image: '/images/hero.jpg',
    imageAlt: 'Coaching and life skills training',
    reverse: false
  },
  {
    id: 'social-inclusion',
    title: 'Social Inclusion',
    description: 'We work to reduce discrimination and promote inclusivity through sports:',
    points: [
      'Inclusive sports programs',
      'Community integration events',
      'Cultural exchange programs',
      'Anti-discrimination campaigns'
    ],
    image: '/images/initiatives.jpg',
    imageAlt: 'Diverse community playing together',
    reverse: true
  },
  {
    id: 'gender-equity',
    title: 'Gender Equity and Empowerment',
    description: 'We promote gender equality and empower women and girls through sports:',
    points: [
      "Women's sports programs",
      'Leadership opportunities',
      'Mentorship programs',
      'Skills development workshops'
    ],
    image: '/images/initiatives.jpg',
    imageAlt: 'Women and girls in sports',
    reverse: false
  },
  {
    id: 'peace-building',
    title: 'Conflict Prevention and Peace Building',
    description: 'We use sports as a tool for conflict resolution and peace building:',
    points: [
      'Peace through sports programs',
      'Conflict resolution training',
      'Community dialogue sessions',
      'Youth leadership development'
    ],
    image: '/images/hero.jpg',
    imageAlt: 'Teamwork and peace building',
    reverse: true
  }
]

export default function Initiatives() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[400px] relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/initiatives.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Initiatives</h1>
              <p className="text-xl">Making a difference through sports and education</p>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden mb-12 ${initiative.reverse ? 'md:flex-row-reverse' : 'md:flex'}`}
            >
              <div className="md:w-1/2">
                <div className="relative w-full h-64 md:h-full min-h-[300px]">
                  <Image 
                    src={initiative.image} 
                    alt={initiative.imageAlt} 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">{initiative.title}</h2>
                <p className="text-gray-600 mb-6">{initiative.description}</p>
                <ul className="space-y-3 text-gray-600">
                  {initiative.points.map((point, i) => (
                    <li key={i}><FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us in Making a Difference</h2>
          <p className="text-white text-xl mb-8">Together, we can create positive change through sports</p>
          <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  )
}
