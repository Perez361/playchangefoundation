import type { Metadata } from 'next'
import Link from 'next/link'
import { pageSeo } from '../seo'
import { getGallery, groupByAlbum } from '@/lib/gallery'
import GalleryGrid from '@/components/GalleryGrid'

// Next requires a literal here; keep it in step with GALLERY_REVALIDATE_SECONDS.
export const revalidate = 300

export const metadata: Metadata = pageSeo(
  '/gallery',
  'Gallery - PlayChange Foundation',
  'Photographs from PlayChange Foundation tournaments, health outreach and community programmes across Ghana.',
)

export default async function GalleryPage() {
  const { items } = await getGallery()
  const groups = groupByAlbum(items)

  return (
    <>
      {/* Hero */}
      <div className="relative pt-16">
        <div className="h-[300px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/initiatives.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
              <p className="text-xl">Moments from our work across Ghana</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-primary mb-3">No photos yet</h2>
              <p className="text-gray-600 mb-6">
                We&apos;re putting this together. Check back soon.
              </p>
              <Link
                href="/initiatives"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300"
              >
                Explore our initiatives
              </Link>
            </div>
          ) : (
            <GalleryGrid groups={groups} />
          )}
        </div>
      </section>
    </>
  )
}
