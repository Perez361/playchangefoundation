/**
 * Hosts whose images may go through Next's image optimizer.
 *
 * Shared on purpose: next.config.js turns this into `remotePatterns`, and
 * lib/news.ts checks it before rewriting an <img> in post content. If the two
 * ever disagreed, a rewritten image would point at an optimizer that refuses
 * the host and the picture would break on the live page only.
 *
 * CommonJS because next.config.js is loaded before any TypeScript is compiled.
 */
const imageHosts = [
  'images.unsplash.com',
  'images.pexels.com',
  'plus.unsplash.com',
  // News and gallery uploads live in Cloudflare R2. Covers both the default
  // r2.dev subdomain and the custom media hostname.
  '**.r2.dev',
  'media.playchangefoundation.org',
]

module.exports = { imageHosts }
