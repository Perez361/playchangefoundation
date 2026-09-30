import { MetadataRoute } from 'next'

// Replaces public/images/site.webmanifest, which had an empty name and pointed
// at icon paths that did not exist (/android-chrome-*.png rather than
// /images/...), and was never linked from the document either way.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PlayChange Foundation',
    short_name: 'PlayChange',
    description:
      'Sport for development in Ghana — sport, play and physical activity for health, education and youth empowerment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#02024a',
    icons: [
      {
        src: '/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
