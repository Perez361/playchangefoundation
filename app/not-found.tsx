import type { Metadata } from 'next'
import Link from 'next/link'

// A 404 answers with a 404 status, so it is never indexed; the robots line is
// belt and braces for anything that only reads the markup.
export const metadata: Metadata = {
  title: 'Page not found - PlayChange Foundation',
  robots: { index: false, follow: true },
}

/**
 * Sends a visitor somewhere useful rather than to a dead end.
 *
 * The old static site's .html URLs are redirected in next.config.js, but
 * anything missed from it — or a mistyped link, or an article that was
 * removed — lands here, and some of those arrive from search results.
 */
const destinations = [
  { href: '/news', label: 'Latest news', description: 'Tournaments, scholarships and community stories.' },
  { href: '/initiatives', label: 'Our initiatives', description: 'Sport, play and physical activity programmes across Ghana.' },
  { href: '/gallery', label: 'Gallery', description: 'Photographs from our events and outreach.' },
  { href: '/contact', label: 'Contact us', description: 'Partnerships, volunteering and general enquiries.' },
]

export default function NotFound() {
  return (
    <section className="pt-16" aria-label="Page not found">
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary/60">
          404
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The link may be out of date, or the page may have moved. Here is
          where most people are headed.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="block h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-semibold text-primary">{destination.label}</span>
                <span className="mt-1 block text-sm text-gray-600">
                  {destination.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-primary px-6 py-3 text-white transition duration-300 hover:opacity-90"
        >
          Back to the home page
        </Link>
      </div>
    </section>
  )
}
