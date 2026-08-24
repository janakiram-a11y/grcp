/**
 * AntiRaggingModal — pixel-perfect replica of grcp.ac.in popup.
 *
 * Typography based on Bootstrap 4.4.1 used on the reference site, with body
 * text bumped to the site-wide 18px body size:
 *  h4  → 1.5rem   / weight 500 / line-height 1.2
 *  h5  → 1.25rem  / weight 500 / line-height 1.2
 *  p   → 1.125rem / weight 400 / line-height 1.5 / margin-bottom 1rem
 *  Font family: Bootstrap system-font stack
 *
 * Display logic (controlled by GrcpPage):
 *  • Shown on every fresh page load / browser hard-refresh of the Home page.
 *  • NOT shown on client-side SPA navigation.
 *  • NOT rendered on any page other than Home.
 *
 * Closes on: × button, backdrop click, or Escape key.
 */

import { useEffect, useCallback } from 'react';

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

export default function AntiRaggingModal({ onClose }) {

  /* ── Keyboard + scroll-lock ─────────────────────────────────────────────── */
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [handleKeyDown]);

  /* ── Link hover helpers ─────────────────────────────────────────────────── */
  const hoverOn  = (e) => (e.currentTarget.style.textDecoration = 'underline');
  const hoverOff = (e) => (e.currentTarget.style.textDecoration = 'none');

  /* ── Link style tokens (Bootstrap 4 defaults) ───────────────────────────── */
  const blueLink = {
    color: '#007bff',
    textDecoration: 'none',
    fontFamily: FONT,
    fontSize: '1.125rem',
  };
  const tealLink = {
    color: '#17a2b8',
    textDecoration: 'none',
    fontFamily: FONT,
    fontSize: '1.125rem',
  };

  /* ── Shared paragraph style ─────────────────────────────────────────────── */
  const p = {
    fontFamily: FONT,
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: '1.5',
    color: '#212529',
    margin: '0 0 1.15rem',
  };

  return (
    /* ── Backdrop ────────────────────────────────────────────────────────── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="anti-ragging-title"
    >
      {/* ── Modal card — square aspect ratio, scrolls internally if content overflows ── */}
      <div
        className="relative bg-white w-full flex flex-col"
        style={{
          maxWidth: '600px',
          aspectRatio: '1 / 1',
          maxHeight: '92vh',
          overflowY: 'auto',
          border: '2px solid #dc3545',
          borderRadius: '.5rem',
          boxShadow: '0 3px 9px rgba(0,0,0,0.5)',
          fontFamily: FONT,
          color: '#212529',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close button — Bootstrap style ────────────────────────────── */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            lineHeight: '1',
            color: '#000',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            opacity: 0.5,
            zIndex: 10,
            fontFamily: FONT,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
        >
          ×
        </button>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div className="p-6 sm:p-8 md:p-10">

          {/* h4 — Bootstrap 4: 1.5rem, weight 500 */}
          <h4
            id="anti-ragging-title"
            style={{
              fontFamily: FONT,
              fontSize: '1.5rem',
              fontWeight: 500,
              lineHeight: '1.2',
              color: '#212529',
              margin: '0 0 1rem',
              paddingRight: '2rem',
            }}
          >
            National Ragging Prevention Programme
          </h4>

          {/* Helpline */}
          <p style={p}>National Anti-Ragging Helpline</p>

          {/* Toll-free — both lines in one <p> with <br>, number is <strong> */}
          <p style={p}>
            24X7 Toll Free<br />
            <strong>1800-180-5522</strong>
          </p>

          {/* h5 — Bootstrap 4: 1.25rem, weight 500 */}
          <h5
            style={{
              fontFamily: FONT,
              fontSize: '1.25rem',
              fontWeight: 500,
              lineHeight: '1.2',
              color: '#212529',
              margin: '0.5rem 0 0.75rem',
            }}
          >
            UGC Monitoring Agency
          </h5>

          {/* C4Y — name on first line, links on second line via <br> */}
          <p style={p}>
            Centre for Youth (C4Y)<br />
            <a
              href="mailto:antiragging@c4yindia.org"
              style={blueLink}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              antiragging@c4yindia.org
            </a>
            {' | '}
            <a
              href="https://www.c4yindia.org"
              target="_blank"
              rel="noopener noreferrer"
              style={blueLink}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              www.c4yindia.org
            </a>
          </p>

          {/* Nodal officers — bold paragraph */}
          <p style={{ ...p, fontWeight: 700, marginTop: '0.5rem' }}>
            Contact Details of the Nodal Officers of Anti-Ragging Committee and Squad
          </p>

          {/* ARC / ARS links */}
          <p style={p}>
            <a
              href="https://grcp.ac.in/Anti_Ragging_Committee.php"
              target="_blank"
              rel="noopener noreferrer"
              style={tealLink}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              Anti-Ragging Committee (ARC)
            </a>
            {' | '}
            <a
              href="https://grcp.ac.in/Anti_Ragging_Squad.php"
              target="_blank"
              rel="noopener noreferrer"
              style={tealLink}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              Anti-Ragging Squad (ARS)
            </a>
          </p>

          {/* Warning — bold red */}
          <p style={{ ...p, fontWeight: 700, color: '#dc3545' }}>
            Ragging is a criminal offence and the culprits will attract punitive action as mentioned in the UGC Regulations
          </p>

          {/* UGC PDF link — updated to match reference site URL */}
          <a
            href="https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={blueLink}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            UGC Regulations PDF
          </a>

        </div>
      </div>
    </div>
  );
}
