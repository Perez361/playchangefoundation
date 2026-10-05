/**
 * Fetches JSON from the content API, patiently.
 *
 * The API runs on Render's free tier, which sleeps after inactivity and takes
 * the better part of a minute to wake. A single attempt that gives up on the
 * cold start is not a harmless degradation here, because of where these calls
 * are made from:
 *
 *   - app/sitemap.ts lists every post. A failure there produces a sitemap with
 *     no news URLs at all, so Google never discovers an article.
 *   - /news and /gallery are statically generated. A failure at build time
 *     bakes an empty "nothing here yet" page and serves it to crawlers, which
 *     reads as thin content and does not get indexed.
 *
 * In both cases the page still renders and nobody sees an error, so the damage
 * is invisible until you look at Search Console months later. Retrying costs a
 * little build time and removes the whole failure mode.
 */

/** Long enough for a Render cold start, short enough not to hang a build. */
const ATTEMPT_TIMEOUT_MS = 15_000
const ATTEMPTS = 3
const BACKOFF_MS = [0, 2_000, 5_000]

export interface FetchJsonOptions {
  /** Seconds Next caches the response for. */
  revalidate: number
  /** Fewer attempts for a request a visitor is waiting on. */
  attempts?: number
}

export async function fetchJson<T>(
  url: string,
  { revalidate, attempts = ATTEMPTS }: FetchJsonOptions,
): Promise<T | null> {
  for (let attempt = 0; attempt < attempts; attempt++) {
    if (BACKOFF_MS[attempt]) {
      await new Promise((resolve) => setTimeout(resolve, BACKOFF_MS[attempt]))
    }

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), ATTEMPT_TIMEOUT_MS)

    try {
      const res = await fetch(url, {
        next: { revalidate },
        signal: controller.signal,
      })

      // A 4xx is an answer: the resource is genuinely missing or wrong, and
      // asking again will not change it. Only a server error or a dead
      // connection is worth another go.
      if (res.ok) return (await res.json()) as T
      if (res.status < 500) return null
    } catch {
      // Timed out or the connection failed — most likely the cold start.
    } finally {
      clearTimeout(timer)
    }
  }

  console.warn(`[api] gave up after ${attempts} attempts: ${url}`)
  return null
}
