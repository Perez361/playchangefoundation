import { fetchJson } from './api-fetch'
const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? '').replace(/\/$/, '')

export const GALLERY_REVALIDATE_SECONDS = 300

export interface GalleryItem {
  id: string
  url: string
  alt: string | null
  caption: string | null
  album: string | null
  width: number | null
  height: number | null
  createdAt: string
}

export interface GalleryResponse {
  items: GalleryItem[]
  albums: string[]
  total: number
}

const EMPTY: GalleryResponse = { items: [], albums: [], total: 0 }

export async function getGallery(album?: string): Promise<GalleryResponse> {
  if (!API_URL) return EMPTY

  const query = album ? `?album=${encodeURIComponent(album)}` : ''

  const data = await fetchJson<GalleryResponse>(`${API_URL}/api/gallery${query}`, {
    revalidate: GALLERY_REVALIDATE_SECONDS,
  })

  // Still degrades to an empty gallery rather than an error, but only after
  // the retries in fetchJson have given the sleeping API time to wake.
  return data ?? EMPTY
}

/** Groups items by album, preserving the order the API returned them in. */
export function groupByAlbum(items: GalleryItem[]) {
  const groups = new Map<string, GalleryItem[]>()

  for (const item of items) {
    const key = item.album ?? 'Other'
    const existing = groups.get(key)
    if (existing) existing.push(item)
    else groups.set(key, [item])
  }

  return [...groups.entries()].map(([album, items]) => ({ album, items }))
}
