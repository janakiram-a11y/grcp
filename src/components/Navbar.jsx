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
 */

import { affiliationLogos } from '../data/homeData';
import { withAlpha } from '../theme';

export default function Navbar({ college }) {
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
        }}
      >
        {/* Single row: college logo | divider | auto-scroll strip */}
        <div
          className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-[60px] flex items-center"
          style={{ minHeight: 100 }}
        >

          {/* ── College logo ─────────────────────────────────────────────── */}
          <div className="flex items-center flex-shrink-0 py-2">
            <img
              src={college.logo}
              alt={`${college.fullName} Logo`}
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: 150,
                maxWidth: 480,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* ── Vertical divider ─────────────────────────────────────────── */}
          <div
            style={{
              width: 1,
              alignSelf: 'stretch',
              background: withAlpha(college.primaryColor, 0.18),
              margin: '14px 10px',
              flexShrink: 0,
            }}
          />

          {/* ── Infinite auto-scroll logo strip ──────────────────────────── */}
          <div
            className="min-w-0 overflow-hidden py-3"
            style={{
              /* Constrain right edge to align with the topbar divider (before search icon).
                 Topbar reserves ~268px on the right (260px search box + 8px gap). */
              width: 560,
              maxWidth: '50%',
              marginLeft: '16px',
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
                    height: 58,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    title={logo.name}
                    loading="lazy"
                    style={{
                      maxWidth: 90,
                      maxHeight: 56,
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
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
