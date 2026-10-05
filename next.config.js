const { imageHosts } = require('./lib/image-hosts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The source photos are large (hero.jpg is 2160x1620, initiatives.jpg is
    // 6000x4000 and 3.2MB). With the optimizer off every visitor downloaded
    // the originals, which is the largest single drag on Core Web Vitals —
    // and on mobile data. Next now serves resized AVIF/WebP per device.
    // Note for deploys: this uses Vercel's image optimization quota.
    formats: ['image/avif', 'image/webp'],
    // Built from the shared list in lib/image-hosts.js, which the post-content
    // renderer also reads before sending an image through the optimizer.
    remotePatterns: imageHosts.map((hostname) => ({ protocol: 'https', hostname })),
  },
  // Legacy URLs from the old static site. Google still has these indexed and
  // they were returning 404, so send them to their App Router equivalents.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/initiatives.html', destination: '/initiatives', permanent: true },
      // Search Console reports 404s that are almost certainly more of these.
      // A redirect for a path the old site never had costs nothing, while a
      // missing one throws away whatever link equity that URL had.
      { source: '/news.html', destination: '/news', permanent: true },
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/home.html', destination: '/', permanent: true },
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
