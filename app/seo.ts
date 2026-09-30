import type { Metadata } from 'next'
import { phoneE164 } from '@/lib/contact'

export const siteUrl = 'https://playchangefoundation.org'

export const siteName = 'PlayChange Foundation'

/**
 * The brand is one word, but people search it as two ("play change
 * foundation") and shorten it to PCF. Google treats these as separate strings,
 * so every variant is declared as an alternate name on the Organization entity
 * and carried in the keyword list — otherwise a search for "play change" has
 * nothing to match against.
 */
export const brandNames = [
  'PlayChange Foundation',
  'Play Change Foundation',
  'PlayChange',
  'Play Change',
  'PCF Ghana',
]

/**
 * The topics we want to be found for, in the words people actually type. Meta
 * keywords carry little weight with Google on their own; these earn their place
 * by keeping titles, descriptions, page copy and the Organization entity
 * pulling in the same direction.
 */
export const defaultKeywords = [
  ...brandNames,
  'sport for development',
  'sport for development Ghana',
  'sport for development and peace',
  'sports NGO Ghana',
  'sport and play Ghana',
  'youth sports Ghana',
  'physical activity Ghana',
  'health promotion through sport',
  'NCD prevention Ghana',
  'non-communicable diseases Ghana',
  'youth empowerment Ghana',
  'community development Ghana',
  'sports scholarships Ghana',
  'University of Ghana Legon',
]

/** Where we work, spelled out for the Organization entity and local queries. */
export const organizationAddress = {
  street: 'Department of Physical Education & Sport Studies, University of Ghana',
  locality: 'Legon, Accra',
  region: 'Greater Accra',
  country: 'GH',
}

export const organizationEmail = 'info@playchangefoundation.org'
export const organizationPhone = phoneE164

/**
 * Profiles that belong to the foundation. `sameAs` is how Google ties this site
 * to the same organization elsewhere, so a wrong URL here is worse than none —
 * keep this list to accounts we actually control.
 */
export const organizationProfiles = [
  'https://facebook.com/playchangefoundation',
  'https://twitter.com/playchange',
  'https://instagram.com/playchangefoundation',
]

// Next.js shallow-merges metadata, so a page that declares `openGraph` replaces
// the layout's block outright. Build each page's from this base so siteName,
// images and type survive.
const baseOpenGraph = {
  siteName,
  type: 'website' as const,
  locale: 'en_GH',
  images: [
    {
      url: `${siteUrl}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: 'PlayChange Foundation — sport for development in Ghana',
    },
  ],
}

export function pageSeo(
  path: string,
  title: string,
  description: string,
  keywords: string[] = []
): Metadata {
  return {
    title,
    description,
    // Page-specific terms first, then the site-wide set, deduplicated.
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...baseOpenGraph,
      url: path,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  }
}

/**
 * The foundation as a single entity, reused on every page. Naming the topics we
 * work on (`knowsAbout`) and the area we serve is what lets Google connect the
 * site to subject searches like sport for development or NCD prevention rather
 * than only to our name.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  alternateName: brandNames.filter((name) => name !== siteName),
  description:
    'PlayChange Foundation is a youth-led nonprofit in Ghana that uses sport, play and physical activity for social development — youth empowerment, health and NCD prevention, education, social inclusion, gender equity and peace building.',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/images/pcf-logo.png`,
    width: 1080,
    height: 1080,
  },
  image: `${siteUrl}/opengraph-image`,
  email: organizationEmail,
  telephone: organizationPhone,
  founder: {
    '@type': 'Person',
    name: 'Dadeboe Perez',
    jobTitle: 'Executive Director',
  },
  foundingLocation: {
    '@type': 'Place',
    name: 'University of Ghana, Legon',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: organizationAddress.street,
    addressLocality: organizationAddress.locality,
    addressRegion: organizationAddress.region,
    addressCountry: organizationAddress.country,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Ghana',
  },
  knowsAbout: [
    'Sport for development',
    'Sport for development and peace',
    'Physical activity and public health',
    'Non-communicable disease (NCD) prevention',
    'Youth empowerment through sport',
    'Community development in Ghana',
    'Health education and disease prevention',
    'Gender equity in sport',
    'Social inclusion through play',
    'Peace building through sport',
  ],
  sameAs: organizationProfiles,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: organizationPhone,
    email: organizationEmail,
    contactType: 'customer service',
    areaServed: 'GH',
    availableLanguage: ['English'],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  alternateName: brandNames.filter((name) => name !== siteName),
  inLanguage: 'en-GH',
  publisher: { '@id': `${siteUrl}/#organization` },
}

/**
 * A trail for an inner page, so results can show Home › Page instead of a bare
 * URL. Pass the pages between the home page and this one, in order.
 */
export function breadcrumbSchema(
  trail: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.path === '/' ? '' : item.path}`,
      })
    ),
  }
}
