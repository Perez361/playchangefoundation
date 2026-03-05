'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 relative">
            <Link href="/" className="logo-container pl-4" aria-label="PlayChange Foundation Home">
              <div className="relative h-10 w-10">
                <Image 
                  src="/images/pcf-logo.png" 
                  alt="PlayChange Foundation Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="logo-text ml-2 text-emerald-600 font-semibold">PlayChange Foundation</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              id="mobileMenuBtn"
              className="md:hidden text-gray-600 hover:text-emerald-600 focus:outline-none" 
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4" role="menubar">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive(link.href)
                      ? 'text-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                  role="menuitem"
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition duration-300 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faHeart} />
                Donate Now
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div 
            id="mobileMenu" 
            className={`md:hidden pb-4 ${isMenuOpen ? '' : 'hidden'}`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-4 rounded hover:bg-gray-100 ${
                    isActive(link.href)
                      ? 'text-emerald-600'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                onClick={() => setIsDonationModalOpen(true)}
                className="donate-btn w-full mt-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition duration-300 flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faHeart} />
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Donation Modal */}
      {isDonationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setIsDonationModalOpen(false)}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsDonationModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
            
            <h2 className="text-2xl font-bold mb-2 text-emerald-800">Support Our Mission</h2>
            <p className="text-sm mb-4 text-gray-600">Your donation helps us empower communities through sports</p>
            
            <div className="bg-amber-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-yellow-400 rounded-full p-2">
                  <span className="text-black font-bold text-xl">MTN</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center mb-2">MTN Mobile Money</h3>
              <p className="text-center text-gray-600 mb-2">Account Name: <strong>PlayChange Foundation</strong></p>
              <div className="text-center">
                <span className="inline-block bg-white px-4 py-2 rounded border border-amber-300 font-mono text-lg">
                  0245219773
                </span>
              </div>
            </div>

            <div className="text-sm text-amber-900">
              <h4 className="font-bold mb-2">How to Donate:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Dial <strong>*170#</strong> on your MTN line</li>
                <li>Select <strong>Send Money</strong></li>
                <li>Enter the number: <strong>0547771914</strong></li>
                <li>Enter your donation amount</li>
                <li>Confirm the transaction</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

