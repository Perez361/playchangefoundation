import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { pageSeo } from '../seo'
import { listPosts, formatDate } from '@/lib/news'

// Next requires a literal here; keep it in step with NEWS_REVALIDATE_SECONDS.
export const revalidate = 300

export const metadata: Metadata = pageSeo(
  '/news',
  'News & Updates - PlayChange Foundation',
  'Latest news from PlayChange Foundation: tournaments, scholarships, health outreach and community stories from across Ghana.',
)

export default async function NewsPage() {
  const { posts } = await listPosts()

  return (
    <>
      {/* Hero */}
      <div className="relative pt-16">
        <div className="h-[300px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">News &amp; Updates</h1>
              <p className="text-xl">Stories from our work across Ghana</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-primary mb-3">Nothing here yet</h2>
              <p className="text-gray-600 mb-6">
                We&apos;re working on our first update. Check back soon.
              </p>
              <Link
                href="/initiatives"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300"
              >
                Explore our initiatives
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={`/news/${post.slug}`} className="block relative h-48 bg-gray-100">
                    {post.coverImageUrl ? (
                      <Image
                        src={post.coverImageUrl}
                        alt={post.coverImageAlt ?? ''}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-primary/10" />
                    )}
                  </Link>

                  <div className="p-6 flex flex-col flex-1">
                    <time
                      dateTime={post.publishedAt ?? undefined}
                      className="text-xs uppercase tracking-wide text-gray-400"
                    >
                      {formatDate(post.publishedAt)}
                    </time>

                    <h2 className="mt-2 text-xl font-bold text-primary">
                      <Link href={`/news/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-gray-600 flex-1">{post.excerpt}</p>

                    <Link
                      href={`/news/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                    >
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
