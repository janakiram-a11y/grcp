import { Link } from 'react-router-dom';

export default function PageHero({ college, title, subtitle, breadcrumb = [], bgImage }) {
  const hasBgImage = !!bgImage;

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '260px' }}>

      {/* ── Background image ───────────────────────────────────── */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.85) brightness(0.88)' }}
        />
      )}

      {/* ── Overlay layers ─────────────────────────────────────── */}

      {/* 1 · Cinematic deep-green gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: hasBgImage
            ? 'linear-gradient(108deg, rgba(5,28,16,0.97) 0%, rgba(8,40,22,0.86) 30%, rgba(10,52,28,0.62) 52%, rgba(7,36,18,0.30) 72%, rgba(3,20,10,0.10) 100%)'
            : 'linear-gradient(135deg, #1A4D33 0%, #2D7A50 55%, #1A4D33 100%)',
        }}
      />

      {/* 2 · Bottom depth vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(3,18,10,0.72) 0%, rgba(3,18,10,0.15) 35%, transparent 60%)',
        }}
      />

      {/* 3 · Faint warm radial bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 90% at 4% 52%, rgba(243,218,178,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
          opacity: 0.018,
        }}
      />

      {/* Bottom shimmer line */}
      <div
        className="absolute bottom-0 inset-x-0 h-[1.5px]"
        style={{
          background:
            'linear-gradient(to right, rgba(45,122,80,0.58) 0%, rgba(243,218,178,0.30) 35%, rgba(199,34,53,0.22) 70%, transparent 100%)',
        }}
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-6 py-10 md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[80px] flex flex-col gap-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 flex-wrap">
          <Link
            to="/"
            className="font-display text-type-ui-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.52)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.52)')}
          >
            Home
          </Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-3 h-3" style={{ opacity: 0.38 }} viewBox="0 0 12 12" fill="none">
                <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="font-display text-type-ui-sm"
                style={{
                  color: i === breadcrumb.length - 1 ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.52)',
                  fontWeight: i === breadcrumb.length - 1 ? 600 : 400,
                }}
              >
                {crumb}
              </span>
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1
          className="font-display font-bold text-type-h1-mob lg:text-type-h1 max-w-[700px]"
          style={{
            color: '#EEF7F1',
            textShadow: '0 2px 24px rgba(0,0,0,0.40)',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="font-body font-normal text-type-body max-w-[580px]"
            style={{
              color: 'rgba(220,240,228,0.78)',
              textShadow: '0 1px 10px rgba(0,0,0,0.25)',
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Accent line — warm beige */}
        <div
          className="w-16 h-1 rounded-full mt-1"
          style={{ backgroundColor: 'rgba(243,218,178,0.65)' }}
        />
      </div>
    </section>
  );
}
