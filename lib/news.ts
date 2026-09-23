import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

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

async function getJson<T>(path: string): Promise<T | null> {
  // Without a configured API the news section should render its empty state
  // rather than fail the whole build.
  if (!API_URL) return null

  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: NEWS_REVALIDATE_SECONDS },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    // The API sleeps on Render's free tier. A cold start that times out must
    // not take the public site down with it.
    return null
  }
}

export async function listPosts(page = 1, perPage = 9) {
  const data = await getJson<{ posts: NewsPost[]; pagination: Pagination }>(
    `/api/posts?page=${page}&perPage=${perPage}`,
  )
  return data ?? { posts: [], pagination: { page, perPage, total: 0, totalPages: 1 } }
}

export async function getPost(slug: string) {
  const data = await getJson<{ post: NewsPost }>(`/api/posts/${encodeURIComponent(slug)}`)
  return data?.post ?? null
}

/**
 * Posts are written by signed-in staff, but a compromised account should not
 * become stored XSS on the public site, so the rendered HTML is sanitised.
 */
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
      img: ['src', 'alt', 'title', 'loading'],
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
      img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: 'lazy' } }),
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
