import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

// Facebook, X, LinkedIn and WhatsApp all crop to roughly this ratio. The old
// card was the square 512px logo, which those services letterbox or crop into
// an unreadable strip.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'PlayChange Foundation — sport for development in Ghana'

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), 'public/images/pcf-logo.png')
  )
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#02024a',
          color: '#ffffff',
          padding: '64px',
        }}
      >
        {/* The logo mark is navy on transparent, so it needs a light chip
            behind it to be visible on the navy card. */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            borderRadius: 100,
            background: '#ffffff',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={150} height={150} alt="" />
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          PlayChange Foundation
        </div>
        <div style={{ marginTop: 20, fontSize: 34, opacity: 0.85 }}>
          Sport for development in Ghana
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            opacity: 0.7,
          }}
        >
          Sport · Play · Physical activity · Health
        </div>
      </div>
    ),
    size
  )
}
