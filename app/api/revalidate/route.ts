import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'

// Never prerender or cache this: it exists to mutate the cache.
export const dynamic = 'force-dynamic'

const SECRET = process.env.REVALIDATE_SECRET ?? ''

/** Constant-time compare, so a wrong secret cannot be found byte by byte. */
function secretMatches(provided: string): boolean {
  if (!SECRET || !provided) return false
  const a = Buffer.from(provided)
  const b = Buffer.from(SECRET)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

// Only paths this site actually owns. An open revalidate endpoint would let
// anyone with the secret churn arbitrary routes.
const ALLOWED = new Set(['/news', '/gallery', '/sitemap.xml', '/'])

function isAllowed(path: string): boolean {
  return ALLOWED.has(path) || /^\/news\/[a-z0-9-]+$/.test(path)
}

export async function POST(request: Request) {
  if (!SECRET) {
    // Missing configuration is a server problem, not a caller problem.
    return NextResponse.json({ error: 'Revalidation is not configured' }, { status: 503 })
  }

  const provided = request.headers.get('x-revalidate-secret') ?? ''
  if (!secretMatches(provided)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let paths: unknown
  try {
    ;({ paths } = (await request.json()) as { paths?: unknown })
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!Array.isArray(paths) || paths.length === 0 || paths.length > 20) {
    return NextResponse.json({ error: 'paths must be an array of 1-20 strings' }, { status: 422 })
  }

  const revalidated: string[] = []
  const rejected: string[] = []

  for (const path of paths) {
    if (typeof path !== 'string' || !isAllowed(path)) {
      rejected.push(String(path))
      continue
    }
    revalidatePath(path)
    revalidated.push(path)
  }

  return NextResponse.json({ revalidated, rejected, at: new Date().toISOString() })
}
