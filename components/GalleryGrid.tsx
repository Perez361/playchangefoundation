'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/gallery'

interface Props {
  groups: { album: string; items: GalleryItem[] }[]
}

export default function GalleryGrid({ groups }: Props) {
  // A flat list so the lightbox can move across album boundaries.
  const flat = groups.flatMap((g) => g.items)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? null : (i + delta + flat.length) % flat.length)),
    [flat.length],
  )

  useEffect(() => {
    if (openIndex === null) return

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }

    window.addEventListener('keydown', onKey)
    // Stop the page scrolling behind the lightbox.
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [openIndex, close, step])

  const open = openIndex === null ? null : flat[openIndex]

  return (
    <>
      {groups.map((group) => (
        <section key={group.album} className="mb-14 last:mb-0">
          {groups.length > 1 && (
            <h2 className="mb-6 text-2xl font-bold text-primary">{group.album}</h2>
          )}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {group.items.map((item) => {
              const index = flat.indexOf(item)
              return (
                <button
                  key={item.id}
                  onClick={() => setOpenIndex(index)}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={item.caption ?? item.alt ?? 'Open image'}
                >
                  <Image
                    src={item.url}
                    alt={item.alt ?? ''}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.caption && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.caption}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </section>
      ))}

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={open.caption ?? 'Image'}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 text-3xl leading-none text-white/70 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>

          {flat.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                className="absolute left-2 text-4xl text-white/60 hover:text-white md:left-6"
                aria-label="Previous image"
              >
                &lsaquo;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                className="absolute right-2 text-4xl text-white/60 hover:text-white md:right-6"
                aria-label="Next image"
              >
                &rsaquo;
              </button>
            </>
          )}

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto h-[70vh] w-full">
              <Image
                src={open.url}
                alt={open.alt ?? ''}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {(open.caption || open.album) && (
              <figcaption className="mt-4 text-center text-sm text-white/80">
                {open.caption}
                {open.caption && open.album ? ' — ' : ''}
                {open.album}
              </figcaption>
            )}
            {flat.length > 1 && (
              <p className="mt-2 text-center text-xs text-white/40">
                {(openIndex ?? 0) + 1} of {flat.length}
              </p>
            )}
          </figure>
        </div>
      )}
    </>
  )
}
