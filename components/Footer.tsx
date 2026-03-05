import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">PlayChange Foundation</h3>
            <p className="text-gray-400 mb-4">Inspiring development and change through sports and play.</p>
            <div className="space-y-2 text-gray-400">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Department of Physical Education & Sport Studies
              </p>
              <p className="ml-5">University of Ghana, Legon, Accra</p>
              <p className="ml-5">Ghana</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-gray-400 hover:text-white transition-colors duration-300">Our Initiatives</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400 mb-4">
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                info@playchangefoundation.org
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +233 (0) 54 777 1914
              </p>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-300" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-300" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-300" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} PlayChange Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

