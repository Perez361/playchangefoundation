import type { Metadata } from 'next'
import { pageSeo, breadcrumbSchema, siteUrl } from '../seo'
import JsonLd from '@/components/JsonLd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { initiatives } from '@/lib/initiatives'

export const metadata: Metadata = pageSeo(
  '/initiatives',
  'Our Initiatives | Sport, Play, Health & NCD Prevention in Ghana',
  'Our programmes use sport, play and physical activity across Ghana: NCD and disease prevention, scholarships, life skills, social inclusion, gender equity and peace building.',
  [
    'NCD prevention through physical activity',
    'health programmes Ghana',
    'sports scholarships Ghana',
    'gender equity in sport Ghana',
    'peace building through sport',
  ]
)


export default function Initiatives() {
  const programmesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PlayChange Foundation programmes',
    description:
      'Sport for development programmes run by PlayChange Foundation in Ghana.',
    itemListElement: initiatives.map((initiative, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: initiative.title,
        description: initiative.summary,
        serviceType: 'Sport for development programme',
        url: `${siteUrl}/initiatives/${initiative.slug}`,
        areaServed: { '@type': 'Country', name: 'Ghana' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
    })),
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: 'Our Initiatives', path: '/initiatives' }]),
          programmesSchema,
        ]}
      />
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[400px] relative">
          <div className="absolute inset-0">
            <Image
              src="/images/initiatives.jpg"
              alt="Children and youth playing sport at a PlayChange Foundation initiative"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Initiatives</h1>
              <p className="text-xl">Sport, play and physical activity for development across Ghana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {initiatives.map((initiative, index) => (
            <div 
              key={initiative.slug} 
              id={initiative.slug}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-12 flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center card-hover`}
            >
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-64 md:h-full min-h-[300px] img-zoom">
                  <Image 
                    src={initiative.image} 
                    alt={initiative.imageAlt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8 w-full">
                <h2 className="text-3xl font-bold mb-4">
                  <Link
                    href={`/initiatives/${initiative.slug}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {initiative.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">{initiative.summary}</p>
                <ul className="space-y-3 text-gray-600">
                  {initiative.points.map((point, i) => (
                    <li key={i}><FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />{point}</li>
                  ))}
                </ul>
                <Link
                  href={`/initiatives/${initiative.slug}`}
                  className="mt-6 inline-block font-medium text-primary hover:underline"
                >
                  Read more about {initiative.title} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explainer: the page's plain-language answer to "what is this?", and
          the only place the field is defined in full. */}
      <section className="py-20 bg-white" aria-label="Sport for development in Ghana">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is sport for development?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Sport for development (sometimes called sport for development and peace) is the
              deliberate use of sport, play and physical activity to achieve goals beyond the
              game itself — better health, wider access to education, stronger communities and
              more peaceful, inclusive societies. The sport is the means; the development
              outcome is the point.
            </p>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Why it matters in Ghana</h3>
            <p>
              Ghana has a young population and a rising burden of non-communicable diseases.
              Physical inactivity is one of the risk factors behind conditions such as
              hypertension, type 2 diabetes and obesity, and it is also one of the most
              affordable to address: a football, an open space and a coach reach far more
              people than a clinic can. Sport is already part of daily life here, which makes
              it a practical entry point for health promotion, life skills and youth
              empowerment rather than an add-on.
            </p>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">How PlayChange works</h3>
            <p>
              PlayChange Foundation was founded by students of the Department of Physical
              Education and Sport Studies at the University of Ghana, Legon. We design sport
              and play sessions that carry something alongside them — a health talk, a life
              skills exercise, a mentoring conversation, a scholarship — so that turning up to
              play also means access to education, health knowledge and support. Our work is
              aligned to the United Nations Sustainable Development Goals, particularly good
              health and well-being, quality education, gender equality, reduced inequalities
              and sustainable communities.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us in Making a Difference</h2>
          <p className="text-white text-xl mb-8">Together, we can create positive change through sports</p>
          <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  )
}
