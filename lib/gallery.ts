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

  try {
    const res = await fetch(`${API_URL}/api/gallery${query}`, {
      next: { revalidate: GALLERY_REVALIDATE_SECONDS },
    })
    if (!res.ok) return EMPTY
    return (await res.json()) as GalleryResponse
  } catch {
    // The API sleeps on Render's free tier. A cold start that times out must
    // not take the page down with it.
    return EMPTY
  }
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
