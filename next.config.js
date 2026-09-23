/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
