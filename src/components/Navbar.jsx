/**
 * Navbar — Section 3: Logo + Infinite Auto-Scroll Affiliation Strip
 *
 * ┌──────────────────┬──┬──────────────────────────────────────────────────┐
 * │   College Logo   │  │  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]  ← auto  │
 * └──────────────────┴──┴──────────────────────────────────────────────────┘
 *
 * The affiliation logos scroll continuously from right → left in an
 * infinite seamless loop. No arrows, no scrollbar, no card borders.
 * Hovering pauses the animation.
 *
 * On scroll (desktop only — `scrolled` prop from the sticky header wrapper),
 * the whole bar shrinks: row height, logo size, and the affiliation strip
 * all animate down together over 0.3s, matching GRIET's header behavior.
 */

import { useState, useEffect } from 'react';
import { affiliationLogos } from '../data/homeData';
import { withAlpha } from '../theme';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

export default function Navbar({ college, scrolled = false }) {
  const isDesktop = useIsDesktop();
  const shrink = isDesktop && scrolled;

  return (
    <>
      {/* ── Keyframes injected once ──────────────────────────────────────── */}
      <style>{`
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-autoscroll-track {
          display: flex;
          width: max-content;
          animation: logo-scroll 28s linear infinite;
        }
        .logo-autoscroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full bg-white"
        style={{
          borderBottom: `2px solid ${withAlpha(college.primaryColor, 0.12)}`,
          boxShadow: '0 1px 8px rgba(45,122,80,0.06)',
          padding: isDesktop ? (shrink ? '8px 0' : '12px 0') : '0',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Single row: college logo | divider | auto-scroll strip */}
        <div
          className="container-px flex items-center"
          style={{
            minHeight: isDesktop ? (shrink ? '60px' : '88px') : '56px',
            transition: 'min-height 0.3s ease',
          }}
        >

          {/* ── College logo ─────────────────────────────────────────────── */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={college.logo}
              alt={`${college.fullName} Logo`}
              className="max-w-[180px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[480px]"
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: isDesktop ? (shrink ? 50 : 80) : 40,
                objectFit: 'contain',
                display: 'block',
                transition: 'max-height 0.3s ease',
              }}
            />
          </div>

          {/* ── Vertical divider ─────────────────────────────────────────── */}
          <div
            style={{
              width: 1,
              alignSelf: 'stretch',
              background: withAlpha(college.primaryColor, 0.18),
              margin: isDesktop ? (shrink ? '8px 10px' : '14px 10px') : '8px 10px',
              flexShrink: 0,
              transition: 'margin 0.3s ease',
            }}
          />

          {/* ── Infinite auto-scroll logo strip ──────────────────────────── */}
          <div
            className="min-w-0 flex-1 overflow-hidden sm:flex-none sm:w-[460px] md:w-[620px]"
            style={{
              /* Constrain right edge to align with the topbar divider (before search icon).
                 Topbar reserves ~268px on the right (260px search box + 8px gap).
                 Below sm, flex-1 with a 0% basis lets this shrink to fit instead of
                 forcing a 560px basis that fights narrow viewports for space. */
              maxWidth: '50%',
              marginLeft: 'auto',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
            }}
          >
            {/* Duplicated set for seamless loop */}
            <div className="logo-autoscroll-track">
              {[...affiliationLogos, ...affiliationLogos].map((logo, idx) => (
                <div
                  key={idx}
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 32,
                    height: isDesktop ? (shrink ? 52 : 74) : 52,
                    transition: 'height 0.3s ease',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    title={logo.name}
                    loading="lazy"
                    style={{
                      maxWidth: 120,
                      maxHeight: isDesktop ? (shrink ? 46 : 70) : 46,
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      transition: 'max-height 0.3s ease',
                    }}
                    onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
