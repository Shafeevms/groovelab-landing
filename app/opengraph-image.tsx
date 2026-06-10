import { ImageResponse } from 'next/og';

export const alt = 'GrooveLab — Your students actually practice between lessons';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Pure text OG (no external assets, no <img>, no fs/readFile).
  // Screenshot integration attempts (data-uri jpg then png 640x360 via sharp) both resulted in blank right side
  // (confirmed by build-time log of bytes>0 + pixel analysis of generated .body: right region stdev~2 == uniform bg).
  // Satori rules followed in attempts: native <img>, explicit w/h, flex parents with sizes — still no rasterization of image.
  // Rolled back to text-only (as 6A) for guaranteed working decent OG for soft-launch.
  // Screenshot in OG not integrated; requires post-launch refinement if needed.
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '56px 72px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          textAlign: 'center',
        }}
      >
        {/* Logo with lime accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              color: '#a3e635',
            }}
          >
            Groove
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              color: '#f5f5f5',
            }}
          >
            Lab
          </div>
        </div>

        {/* Main headline - teacher-first */}
        <div
          style={{
            fontSize: '46px',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-2.4px',
            color: '#f5f5f5',
            marginBottom: '20px',
            maxWidth: '980px',
          }}
        >
          Your students actually practice between lessons
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: 1.35,
            color: '#a1a1aa',
            marginBottom: '32px',
            maxWidth: '720px',
          }}
        >
          Drum practice &amp; teaching tool — Start free
        </div>

        {/* Subtle lime accent line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#a3e635',
            borderRadius: '3px',
            marginBottom: '36px',
          }}
        />

        {/* Domain / tag */}
        <div
          style={{
            fontSize: '18px',
            color: '#71717a',
            letterSpacing: '0.5px',
          }}
        >
          groovelab.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
