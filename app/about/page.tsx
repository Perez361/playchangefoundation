'use client'

import type { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - PlayChange Foundation | Our Story, Mission & Team',
  description: 'Learn about PlayChange Foundation, a student-led sports NGO from University of Ghana. Discover our mission to empower communities through sports, our vision for Ghana, and meet our dedicated team transforming lives.',
}

const teamMembers = [
  {
    name: 'Dadeboe Perez',
    role: 'Executive Director',
    title: 'FOUNDER',
    image: '/images/perezz.jpg',
    description: "Leading our mission to transform communities through sports and dedicated to youth empowerment.",
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Hamza Kamal Deen Ibrahim',
    role: 'Executive Director',
    title: 'CO-FOUNDER',
    image: '/images/kamal.jpg',
    description: 'Empowering young people through sports-based education and mentorship programs.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Paulina Logah',
    role: 'Executive Director',
    title: 'CO-FOUNDER',
    image: '/images/emefa.jpg',
    description: 'Developing innovative sports programs that promote health and social development.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Alfred Nakai',
    role: 'Administrative Lead',
    title: 'TEAM',
    image: '/images/nakai.jpg',
    description: 'Building strong partnerships with communities and stakeholders across Ghana.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Esther Asare',
    role: 'Publicity and Communications Lead',
    title: 'TEAM',
    image: '/images/asare.jpg',
    description: 'Sharing our story and amplifying the voices of the communities we serve.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sukparu Adams Hardi',
    role: 'Human Resources Coordinator',
    title: 'TEAM',
    image: '/images/hardi.jpg',
    description: 'Managing resources efficiently to maximize our impact and sustainability.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Joshua Chabel',
    role: 'Project Manager',
    title: 'TEAM',
    image: '/images/joshua.jpg',
    description: 'Coordinating our initiatives and ensuring impactful community engagement programs.',
    social: { linkedin: '#', twitter: '#' }
  }
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[400px] relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About PlayChange Foundation</h1>
              <p className="text-xl">Transforming Lives Through Sports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                The PlayChange Foundation is a youth-led, nonprofit organization founded by students from the Department of Physical Education and Sport Studies, University of Ghana with the goal of using the influence of sports and play as a tool for social change, community development, and the empowerment of children and youth throughout Ghana.
              </p>
              <p className="text-gray-600 mb-4">
                Our main objective is to use sport and play strategically as a powerful tool for social change, community development, and the holistic empowerment of young people and children in Ghana.
              </p>
              <p className="text-gray-600 mb-4">
                The PlayChange Foundation was intentionally founded to address the most important public health challenges, including the increasing burden of NCDs and continued HIV/AIDS awareness and stigma reduction issues.
              </p>
              <p className="text-gray-600 mb-4">
                Most importantly, the motivation to create this foundation was reinforced by an inspiring force from Dr. Bella Bello Bitugu, a Senior Lecturer at the Department of Physical Education and Sports Studies, UG, who emphasized sport for development as a niche area with unfulfilled opportunities during the course Sport for Development and Peace he taught us in one of our semesters. His encouragement challenged and inspired us to set up and explore this new field, leading to the establishment of PlayChange Foundation. An initiative like this heightens consciousness toward the practicality and social impact of the academic programs offered at the University of Ghana.
              </p>
              <p className="text-gray-600">
                Along this journey, Dr. Austin Luguterah, who is a Senior Lecturer, Department of Physical Education and Sports Studies, and currently the Sports Director, University of Ghana Sports and Wellness Directorate, also became a pillar of guidance, offering mentorship and encouragement.
              </p>
            </div>
            <div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/story.jpeg" 
                  alt="Community sports" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-emerald-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To inspire development and change through sports and play. We strive to create opportunities that empower individuals and strengthen communities through the power of sports.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-emerald-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A Ghana where everyone can achieve their full potential through sport and physical activity. We envision communities where sports serve as a catalyst for positive social change.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-emerald-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li><FontAwesomeIcon icon={faCheck} className="text-emerald-600 mr-2" />Inclusiveness</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-emerald-600 mr-2" />Respect</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-emerald-600 mr-2" />Innovation</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-emerald-600 mr-2" />Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through our various initiatives and programs, we're making a real difference in communities across Ghana.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3+</div>
              <p className="text-gray-600">Communities Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
              <p className="text-gray-600">Sports Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100+</div>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals working together to inspire change through sports and play.
            </p>
          </div>
          
          {/* Founder - Centered at Top */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full">
              <div className="h-72 relative">
                <Image 
                  src={teamMembers[0].image} 
                  alt={teamMembers[0].name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {teamMembers[0].title}
                </div>
                <h3 className="text-2xl font-bold mb-2">{teamMembers[0].name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{teamMembers[0].role}</p>
                <p className="text-gray-600 text-sm mb-4">{teamMembers[0].description}</p>
                <div className="flex justify-center space-x-3">
                  <a href={teamMembers[0].social.linkedin} className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href={teamMembers[0].social.twitter} className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members - Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  {member.title !== 'TEAM' && (
                    <div className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {member.title}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

