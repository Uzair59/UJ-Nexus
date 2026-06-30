import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#050816',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Monogram Representation using Satori-compatible elements */}
        <div
          style={{
            display: 'flex',
            width: '14px',
            height: '14px',
            borderLeft: '2.5px solid #4F46E5',
            borderRight: '2.5px solid #06B6D4',
            borderBottom: '2.5px solid #7C3AED',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-2.5px',
              bottom: '-5px',
              width: '8px',
              height: '5px',
              borderBottom: '2.5px solid #06B6D4',
              borderLeft: '2.5px solid #06B6D4',
              borderBottomLeftRadius: '4px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
