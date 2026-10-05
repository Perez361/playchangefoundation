import { MetadataRoute } from 'next'
import { listPosts } from '@/lib/news'
import { initiatives } from '@/lib/initiatives'

const baseUrl = 'https://playchangefoundation.org'

// Rebuild the sitemap on the same cadence as the news pages, so a post shows
// up here without a redeploy.
export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${baseUrl}/images/hero.jpg`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/about.jpg`],
    },
    {
      url: `${baseUrl}/initiatives`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/initiatives.jpg`],
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [`${baseUrl}/images/initiatives.jpg`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [`${baseUrl}/images/contacthero.jpg`],
    },
  ]

  // One entry per programme page. These are static and always present, unlike
  // the posts below, which depend on the API answering.
  const initiativeRoutes: MetadataRoute.Sitemap = initiatives.map((initiative) => ({
    url: `${baseUrl}/initiatives/${initiative.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${baseUrl}${initiative.image}`],
  }))

  // Ask for more than a page of posts; the listing default would silently cap
  // the sitemap at nine entries.
  const { posts } = await listPosts(1, 50)

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
    ...(post.coverImageUrl ? { images: [post.coverImageUrl] } : {}),
  }))

  return [...staticRoutes, ...initiativeRoutes, ...postRoutes]
}
