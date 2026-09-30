/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The source photos are large (hero.jpg is 2160x1620, initiatives.jpg is
    // 6000x4000 and 3.2MB). With the optimizer off every visitor downloaded
    // the originals, which is the largest single drag on Core Web Vitals —
    // and on mobile data. Next now serves resized AVIF/WebP per device.
    // Note for deploys: this uses Vercel's image optimization quota.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      // News cover images live in Cloudflare R2. Covers both the default
      // r2.dev subdomain and a custom media hostname.
      {
        protocol: 'https',
        hostname: '**.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'media.playchangefoundation.org',
      },
    ],
  },
  // Legacy URLs from the old static site. Google still has these indexed and
  // they were returning 404, so send them to their App Router equivalents.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/initiatives.html', destination: '/initiatives', permanent: true },
      // Serve every page from one hostname. Canonicals, the sitemap and the
      // Search Console property all use the apex domain, so www redirects to
      // it. The host condition keeps this off the apex itself, so it can't
      // redirect into a loop.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.playchangefoundation.org' }],
        destination: 'https://playchangefoundation.org/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
