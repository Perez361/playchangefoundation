import type { Metadata } from 'next'

export const siteUrl = 'https://playchangefoundation.org'

// Next.js shallow-merges metadata, so a page that declares `openGraph` replaces
// the layout's block outright. Build each page's from this base so siteName,
// images and type survive.
const baseOpenGraph = {
  siteName: 'PlayChange Foundation',
  type: 'website' as const,
  images: [
    {
      url: `${siteUrl}/images/pcf-logo.png`,
      width: 512,
      height: 512,
      alt: 'PlayChange Foundation',
    },
  ],
}

export function pageSeo(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...baseOpenGraph,
      url: path,
      title,
      description,
    },
  }
}
