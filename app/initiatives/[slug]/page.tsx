import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { pageSeo, breadcrumbSchema, siteUrl } from '../../seo'
import JsonLd from '@/components/JsonLd'
import { initiatives, getInitiative } from '@/lib/initiatives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
  params: Promise<{ slug: string }>
}

// The set is fixed and known at build time, so every programme page is static.
export function generateStaticParams() {
  return initiatives.map((initiative) => ({ slug: initiative.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const initiative = getInitiative(slug)

  if (!initiative) return { title: 'Programme not found - PlayChange Foundation' }

  return pageSeo(
    `/initiatives/${initiative.slug}`,
    `${initiative.metaTitle} | PlayChange Foundation`,
    initiative.metaDescription,
    initiative.keywords,
  )
}

export default async function InitiativePage({ params }: Props) {
  const { slug } = await params
  const initiative = getInitiative(slug)

  if (!initiative) notFound()

  const others = initiatives.filter((i) => i.slug !== initiative.slug)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Our Initiatives', path: '/initiatives' },
            { name: initiative.title, path: `/initiatives/${initiative.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: initiative.title,
            description: initiative.metaDescription,
            serviceType: 'Sport for development programme',
            url: `${siteUrl}/initiatives/${initiative.slug}`,
            areaServed: { '@type': 'Country', name: 'Ghana' },
            provider: { '@id': `${siteUrl}/#organization` },
          },
        ]}
      />

      {/* Hero */}
      <div className="relative pt-16">
        <div className="h-[320px] relative">
          <div className="absolute inset-0">
            <Image
              src={initiative.image}
              alt={initiative.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl px-4 text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold">{initiative.title}</h1>
              <p className="mt-4 text-lg opacity-90">{initiative.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/initiatives" className="hover:text-primary">
              Our Initiatives
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-gray-400">{initiative.title}</span>
          </nav>

          <p className="text-lg text-gray-700 leading-relaxed">{initiative.intro}</p>

          {initiative.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-12 rounded-xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-primary mb-4">What this programme does</h2>
            <ul className="space-y-3 text-gray-700">
              {initiative.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mt-1 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-white transition duration-300 hover:opacity-90"
            >
              Work with us on this
            </Link>
            <Link
              href="/initiatives"
              className="rounded-full border-2 border-primary px-6 py-3 text-primary transition duration-300 hover:bg-primary hover:text-white"
            >
              All initiatives
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links: every programme page reaches every other one, so a
          crawler arriving on any of them can find the rest. */}
      <section className="py-16 bg-gray-50" aria-label="Our other initiatives">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8">Our other initiatives</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/initiatives/${other.slug}`}
                  className="block h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="font-semibold text-primary">{other.title}</span>
                  <span className="mt-2 block text-sm text-gray-600">{other.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
