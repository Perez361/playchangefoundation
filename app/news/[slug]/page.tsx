import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { siteUrl } from '../../seo'
import { getPost, renderMarkdown, formatDate } from '@/lib/news'

// Next requires a literal here; keep it in step with NEWS_REVALIDATE_SECONDS.
export const revalidate = 300

// Posts appear after the build, so render unknown slugs on demand and cache
// them from then on.
export const dynamicParams = true

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post not found - PlayChange Foundation' }
  }

  const url = `/news/${post.slug}`

  return {
    title: `${post.title} - PlayChange Foundation`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'PlayChange Foundation',
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt ?? undefined,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImageUrl ?? `${siteUrl}/images/pcf-logo.png`,
          alt: post.coverImageAlt ?? post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImageUrl ?? `${siteUrl}/images/pcf-logo.png`],
    },
  }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const html = renderMarkdown(post.content ?? '')

  // Tells Google this is an article rather than a generic page, which is what
  // makes it eligible for the richer news treatment in results.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author.name },
    publisher: {
      '@type': 'Organization',
      name: 'PlayChange Foundation',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/pcf-logo.png` },
    },
    mainEntityOfPage: `${siteUrl}/news/${post.slug}`,
    ...(post.coverImageUrl ? { image: [post.coverImageUrl] } : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-16">
        {post.coverImageUrl && (
          <div className="relative h-[320px] md:h-[420px]">
            <Image
              src={post.coverImageUrl}
              alt={post.coverImageAlt ?? ''}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/news" className="hover:text-primary">
              News
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-gray-400">{post.title}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-8">
            <time dateTime={post.publishedAt ?? undefined}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.author.name}</span>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              <span aria-hidden="true">&larr;</span> Back to all news
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
