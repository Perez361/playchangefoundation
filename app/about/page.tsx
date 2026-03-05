import type { Metadata } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - PlayChange Foundation',
  description: 'Learn about PlayChange Foundation - organized by students from the Sports Department in the University of Ghana that uses sport as a tool for social development.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[400px] relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/story.jpeg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
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
                PlayChange Foundation was born from the passion and dedication of students from the Sports Department at the University of Ghana. We recognized the transformative power of sports in addressing social challenges and promoting positive change in our communities.
              </p>
              <p className="text-gray-600">
                Our journey began with a simple belief: that sports can be a powerful tool for social development. Today, we work tirelessly to turn this belief into reality through various initiatives that impact lives across Ghana.
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
            <div className="bg-white rounded-lg p-8 shadow-lg mvv-card">
              <div className="text-blue-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faBullseye} className="icon" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To inspire development and change through sports and play. We strive to create opportunities that empower individuals and strengthen communities through the power of sports.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg mvv-card">
              <div className="text-blue-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A Ghana where everyone can achieve their full potential through sport and physical activity. We envision communities where sports serve as a catalyst for positive social change.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg mvv-card">
              <div className="text-blue-600 text-4xl mb-4">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Inclusiveness</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Respect</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Innovation</li>
                <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Collaboration</li>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Communities Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Sports Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
