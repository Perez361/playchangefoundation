import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import { fetchJson } from './api-fetch'
import { imageHosts } from './image-hosts'

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '')

/** How long a fetched page stays cached before Next revalidates it. */
export const NEWS_REVALIDATE_SECONDS = 300

export interface NewsPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  coverImageUrl: string | null
  coverImageAlt: string | null
  tags: string[]
  publishedAt: string | null
  author: { name: string }
}

export interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
}

async function getJson<T>(path: string, attempts?: number): Promise<T | null> {
  // Without a configured API the news section should render its empty state
  // rather than fail the whole build.
  if (!API_URL) return null

  return fetchJson<T>(`${API_URL}${path}`, {
    revalidate: NEWS_REVALIDATE_SECONDS,
    attempts,
  })
}

export async function listPosts(page = 1, perPage = 9) {
  const data = await getJson<{ posts: NewsPost[]; pagination: Pagination }>(
    `/api/posts?page=${page}&perPage=${perPage}`,
  )
  return data ?? { posts: [], pagination: { page, perPage, total: 0, totalPages: 1 } }
}

export async function getPost(slug: string) {
  // Someone is waiting on this one, so do not sit through three cold starts.
  const data = await getJson<{ post: NewsPost }>(
    `/api/posts/${encodeURIComponent(slug)}`,
    2,
  )
  return data?.post ?? null
}

/**
 * Posts are written by signed-in staff, but a compromised account should not
 * become stored XSS on the public site, so the rendered HTML is sanitised.
 */
/**
 * Widths served to the article column, which is max-w-3xl less padding: 736px
 * CSS pixels, so the larger entries cover 2x and 3x screens.
 */
const CONTENT_IMAGE_WIDTHS = [640, 828, 1080, 1200, 1920]

/** The column's rendered width, for the browser to pick a candidate against. */
const CONTENT_IMAGE_SIZES = '(max-width: 768px) 100vw, 736px'

/** `**.r2.dev` and friends, as something testable against a hostname. */
function hostAllowed(hostname: string): boolean {
  return imageHosts.some((pattern: string) => {
    if (pattern.startsWith('**.')) {
      const suffix = pattern.slice(2)
      return hostname === pattern.slice(3) || hostname.endsWith(suffix)
    }
    return hostname === pattern
  })
}

/**
 * True for an image Next's optimizer will accept: a site-relative path, or a
 * remote host declared in lib/image-hosts.js. Anything else is left alone —
 * the optimizer answers 400 for a host it was not configured with, so
 * rewriting blindly would replace a working image with a broken one.
 */
function canOptimize(src: string): boolean {
  if (src.startsWith('/') && !src.startsWith('//')) return true
  try {
    const url = new URL(src)
    return url.protocol === 'https:' && hostAllowed(url.hostname)
  } catch {
    return false
  }
}

function optimized(src: string, width: number): string {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`
}

export function renderMarkdown(markdown: string): string {
  const html = marked.parse(markdown, { async: false, gfm: true })

  return sanitizeHtml(html, {
    allowedTags: [
      'h2', 'h3', 'h4', 'p', 'a', 'ul', 'ol', 'li', 'blockquote',
      'strong', 'em', 'code', 'pre', 'hr', 'br', 'img', 'figure', 'figcaption',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
    ],
    allowedAttributes: {
      a: ['href', 'title'],
      // srcset and sizes are added by the transform below; sanitize-html
      // filters attributes after transforming, so they have to be allowed
      // here or they are stripped straight back off.
      img: ['src', 'alt', 'title', 'loading', 'decoding', 'srcset', 'sizes'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      // Outbound links open in a new tab; noopener stops the new page reaching
      // back through window.opener.
      a: (tagName, attribs) => ({
        tagName,
        attribs: attribs.href?.startsWith('http')
          ? { ...attribs, target: '_blank', rel: 'noopener noreferrer' }
          : attribs,
      }),
      // Images written into a post are full-size uploads straight from R2, so
      // a post with a few photos could outweigh the rest of the page several
      // times over. Route them through the same optimizer the rest of the site
      // uses, so each device downloads an AVIF or WebP at its own width.
      img: (tagName, attribs) => {
        const src = attribs.src ?? ''
        const base = { ...attribs, loading: 'lazy', decoding: 'async' }

        if (!canOptimize(src)) return { tagName, attribs: base }

        return {
          tagName,
          attribs: {
            ...base,
            src: optimized(src, 1200),
            srcset: CONTENT_IMAGE_WIDTHS.map((w) => `${optimized(src, w)} ${w}w`).join(', '),
            sizes: CONTENT_IMAGE_SIZES,
          },
        }
      },
    },
  })
}

export function formatDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
