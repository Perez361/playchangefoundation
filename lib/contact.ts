/**
 * The foundation's phone number, in the three forms the site needs.
 *
 * It lives here because it was previously written out in four places and had
 * already drifted: the donate modal displayed one number and its own
 * instructions told people to send money to a different one. Change it here
 * and every page follows.
 */

/** As shown to a reader. */
export const phoneDisplay = '+233 (0) 24 521 9773'

/** International form, for tel: links and structured data. */
export const phoneE164 = '+233245219773'

/** Local form, as typed into an MTN Mobile Money transfer. */
export const phoneLocal = '0245219773'

/**
 * The foundation's social accounts, in one place.
 *
 * This list is the site's single source of truth: the footer and contact page
 * render it, and app/seo.ts feeds it to the Organization entity's `sameAs`,
 * which is how Google ties those profiles to this site. Only add an account
 * the foundation actually controls — a wrong URL here claims someone else's
 * profile as ours and is worse for search than listing nothing.
 */
export interface SocialProfile {
  name: 'Instagram' | 'TikTok'
  url: string
}

export const socialProfiles: SocialProfile[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/playchangefoundation/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@playchangefoundation' },
]
