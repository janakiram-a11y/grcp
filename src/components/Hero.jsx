import { useState, useEffect, useCallback, useRef } from 'react';

/* ── Slide images from grcp.ac.in ──────────────────────────────────────────
   Sourced from the reference website's carousel. URLs are encoded for spaces
   and special characters.                                                    */
const SLIDES = [
  { src: '/hero-campus.jpg',                                                                              alt: 'GRCP Campus' },
  { src: 'https://grcp.ac.in/media/68fa1229b9e66nba%20slides%20%281%29.jpg',                             alt: 'NBA Accreditation' },
  { src: 'https://grcp.ac.in/media/686e2750d6f5921%20annual%20day%20virasat%202025.png',                  alt: 'Annual Day 2025' },
  { src: 'https://grcp.ac.in/media/691b103571920B.pharm%20induction%20day%20one.jpg',                     alt: 'B.Pharm Induction' },
  { src: 'https://grcp.ac.in/media/693d231b435dfmpharm%20plantation%20%282%29.jpg',                       alt: 'M.Pharm Plantation' },
  { src: 'https://grcp.ac.in/media/68a98eacce5c9august%202025%20sliders.jpg',                             alt: 'GRCP Events 2025' },
  { src: 'https://grcp.ac.in/media/69d91d16a34d0women%20days%202026.png',                                 alt: "Women's Day 2026" },
];

const AUTOPLAY_MS  = 5000;   // slide interval
const FADE_MS      = 900;    // crossfade duration

/* ── Chevron icons ─────────────────────────────────────────────────────────── */
function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Hero({ college }) {
  const [active, setActive]     = useState(0);
  const [paused, setPaused]     = useState(false);
  const intervalRef             = useRef(null);

  /* ── Autoplay ──────────────────────────────────────────────────────────── */
  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(a => (a + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    if (!paused) startInterval();
    else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [paused, startInterval]);

  /* ── Manual navigation ─────────────────────────────────────────────────── */
  const goTo = useCallback((idx) => {
    setActive(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length);
    startInterval(); // reset timer on manual nav
  }, [startInterval]);

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <section
      className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ── Slide images — crossfade stack ──────────────────────────── */}
      {SLIDES.map((slide, idx) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover select-none"
          draggable={false}
          loading={idx === 0 ? 'eager' : 'lazy'}
          style={{
            objectPosition: 'center 40%',
            filter: 'saturate(0.88) brightness(0.82) contrast(1.04)',
            opacity: idx === active ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            zIndex: idx === active ? 1 : 0,
            willChange: 'opacity',
          }}
        />
      ))}

      {/* ── Cinematic overlays — only on slide 0 ──────────────────────
          Fade in/out with the same FADE_MS as the crossfade.           */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          opacity: active === 0 ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        {/* 1 · Primary depth sweep */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(8,26,16,0.97) 0%, rgba(14,44,28,0.94) 10%, rgba(20,62,40,0.87) 22%, rgba(28,84,54,0.74) 36%, rgba(36,105,66,0.50) 50%, rgba(43,116,74,0.24) 64%, rgba(45,122,80,0.08) 78%, transparent 92%)',
        }} />
        {/* 2 · Atmospheric bottom vignette */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(5,18,11,0.82) 0%, rgba(12,40,25,0.42) 18%, rgba(18,58,36,0.14) 38%, transparent 58%)',
        }} />
        {/* 3 · Warm beige radial bloom */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 72% 115% at 0% 54%, rgba(243,218,178,0.12) 0%, rgba(240,210,165,0.05) 36%, transparent 62%)',
        }} />
        {/* 4 · Top-edge cinematic shadow */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(5,18,11,0.42) 0%, rgba(8,26,16,0.14) 14%, transparent 30%)',
        }} />
      </div>

      {/* ── Hero content — only on slide 0 ──────────────────────────── */}
      <div
        className="absolute inset-0 w-full flex items-center section-pad pointer-events-none"
        style={{
          zIndex: 10,
          opacity: active === 0 ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
          pointerEvents: active === 0 ? 'auto' : 'none',
        }}
      >
        <div className="flex flex-col gap-[14px] sm:gap-[18px] max-w-[660px]">

          <h1
            className="font-display font-bold text-type-h3 sm:text-[38px] lg:text-type-h1"
            style={{
              color: 'var(--cream, #E6F4EC)',
              textShadow: '0 1px 4px rgba(0,0,0,0.42), 0 3px 16px rgba(0,0,0,0.32), 0 8px 36px rgba(0,0,0,0.18)',
              letterSpacing: '-0.01em',
            }}
          >
            {college.heroHeading}
          </h1>

          <p
            className="font-body font-normal text-type-body"
            style={{
              color: 'rgba(208,238,220,0.80)',
              textShadow: '0 1px 10px rgba(0,0,0,0.36)',
              maxWidth: '560px',
            }}
          >
            {college.heroSubtext}
          </p>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap mt-1">
            <a
              href={college.heroCTAHref}
              target={college.heroCTAHref.startsWith('http') ? '_blank' : undefined}
              rel={college.heroCTAHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn-red btn-lg"
              style={{ backgroundColor: 'var(--maroon, #C72235)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon-deep, #B01E2D)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon, #C72235)'; }}
            >
              {college.heroCTALabel}
            </a>
            <a
              href="/programmes"
              className="btn-ghost-white btn-lg"
              style={{ borderColor: 'var(--green, rgba(255,255,255,0.55))' }}
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows ───────────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
        style={{
          zIndex: 10,
          backgroundColor: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.28)',
          color: '#fff',
          backdropFilter: 'blur(6px)',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.26)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.14)')}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
        style={{
          zIndex: 10,
          backgroundColor: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.28)',
          color: '#fff',
          backdropFilter: 'blur(6px)',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.26)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.14)')}
      >
        <ChevronRight />
      </button>

      {/* ── Dot indicators ──────────────────────────────────────────────── */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-[7px]"
        style={{ zIndex: 10 }}
      >
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width:           idx === active ? 22 : 7,
              height:          7,
              backgroundColor: idx === active ? 'var(--gold, #F3DAB2)' : 'rgba(255,255,255,0.50)',
              border:          'none',
              padding:         0,
              cursor:          'pointer',
            }}
          />
        ))}
      </div>

      {/* ── Bottom shimmer — bridges hero → StatsBar ────────────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px]"
        style={{
          zIndex: 10,
          background: 'linear-gradient(to right, rgba(6,22,14,0.70) 0%, rgba(28,84,54,0.48) 20%, rgba(45,122,80,0.38) 38%, rgba(243,218,178,0.28) 55%, rgba(199,34,53,0.18) 75%, transparent 100%)',
        }}
      />
    </section>
  );
}
