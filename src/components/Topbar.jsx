/**
 * Topbar — Utility bar with live search dropdown.
 *
 * Left  : TG PGECET counselling code
 * Center: GRCP E-Bulletin | Downloads | Contact Us
 * Right : Search — expands inline; shows live dropdown as user types
 */

import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import searchIndex from '../data/searchIndex';

/* ── Icons ─────────────────────────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ── Search logic ───────────────────────────────────────────────────────── */
function getResults(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return searchIndex
    .filter(({ title, desc }) =>
      title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)
    )
    .slice(0, 7); // max 7 results
}

/* ── Category badge colors ──────────────────────────────────────────────── */
const catColor = {
  Page:          { bg: 'rgba(45,122,80,0.10)',   text: '#2D7A50' },
  Programme:     { bg: 'rgba(45,122,80,0.10)',   text: '#2D7A50' },
  Admissions:    { bg: 'rgba(199,34,53,0.10)',   text: '#C72235' },
  Academics:     { bg: 'rgba(45,100,180,0.10)',  text: '#2D5CB8' },
  Examination:   { bg: 'rgba(160,100,0,0.10)',   text: '#9A6000' },
  Research:      { bg: 'rgba(45,122,80,0.10)',   text: '#2D7A50' },
  Accreditation: { bg: 'rgba(74,20,40,0.10)',    text: '#4A1428' },
  Affiliation:   { bg: 'rgba(74,20,40,0.10)',    text: '#4A1428' },
  Facilities:    { bg: 'rgba(45,100,180,0.10)',  text: '#2D5CB8' },
  default:       { bg: 'rgba(100,100,100,0.10)', text: '#555'    },
};

/* ══════════════════════════════════════════════════════════════════════════ */
export default function Topbar({ college }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery]           = useState('');
  const [activeIdx, setActiveIdx]   = useState(-1);
  const inputRef                    = useRef(null);
  const containerRef                = useRef(null);
  const navigate                    = useNavigate();

  const results = getResults(query);

  /* Auto-focus */
  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  /* Close on Escape / click outside */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { closeSearch(); return; }
      if (e.key === 'ArrowDown') { setActiveIdx(i => Math.min(i + 1, results.length - 1)); e.preventDefault(); }
      if (e.key === 'ArrowUp')   { setActiveIdx(i => Math.max(i - 1, -1));                 e.preventDefault(); }
      if (e.key === 'Enter' && activeIdx >= 0) {
        goTo(results[activeIdx].route);
      }
    };
    const onClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) closeSearch();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [searchOpen, results, activeIdx]);

  /* Reset active index when query changes */
  useEffect(() => { setActiveIdx(-1); }, [query]);

  const closeSearch = () => { setSearchOpen(false); setQuery(''); setActiveIdx(-1); };

  const goTo = (route) => {
    navigate(route);
    closeSearch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeIdx >= 0 && results[activeIdx]) { goTo(results[activeIdx].route); return; }
    if (results.length === 1) { goTo(results[0].route); return; }
    if (query.trim()) {
      /* fallback: navigate to closest page match or home */
      const exact = searchIndex.find(r => r.title.toLowerCase() === query.toLowerCase());
      goTo(exact ? exact.route : '/');
      closeSearch();
    }
  };

  const utilityLinks = [
    { label: 'E-Bulletin', href: '/e-bulletin' },
    { label: 'Downloads',       href: '/downloads'   },
    { label: 'Contact Us',      href: '/contact'     },
  ];

  const linkBase = {
    fontFamily: 'inherit',
    fontSize: '16px',
    fontWeight: 500,
    color: college.accentColor,
    textDecoration: 'none',
    transition: 'color 0.15s',
    whiteSpace: 'nowrap',
  };

  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#ffffff', borderBottom: '1px solid rgba(45,122,80,0.15)' }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-[60px] py-[8px] flex items-center gap-4 lg:gap-6">

        {/* Left: counselling code */}
        <div className="shrink-0 flex items-center">
          <span
            className="font-display text-type-ui-sm font-semibold hidden sm:inline"
            style={{
              color: '#C72235',
              background: 'rgba(199,34,53,0.10)',
              border: '1px solid rgba(199,34,53,0.30)',
              borderRadius: '4px',
              padding: '2px 10px',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            TG PGECET counselling code:&nbsp;
            <span style={{ fontWeight: 700, letterSpacing: '0.04em' }}>GRCP1</span>
          </span>
        </div>

        {/* Center: quick links */}
        <nav className="flex-1 hidden sm:flex items-center justify-center gap-4 lg:gap-6">
          {utilityLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              style={linkBase}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A81C2E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = college.accentColor)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <span
          className="hidden sm:inline-block w-px h-4 shrink-0"
          style={{ backgroundColor: 'rgba(199,34,53,0.30)' }}
        />

        {/* Right: Search with live dropdown */}
        <div
          ref={containerRef}
          className="shrink-0 flex items-center justify-end"
          style={{ width: 260, position: 'relative' }}
        >
          <form
            onSubmit={handleSubmit}
            role="search"
            className="flex items-center gap-1.5 w-full justify-end"
          >
            {/* Input */}
            <div
              style={{
                overflow: 'hidden',
                width: searchOpen ? '100%' : 0,
                maxWidth: 200,
                transition: 'width 0.25s ease',
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GRCP…"
                aria-label="Search"
                tabIndex={searchOpen ? 0 : -1}
                autoComplete="off"
                className="font-display text-type-ui-sm outline-none bg-white border rounded px-3 py-1 w-full placeholder:text-gray-400"
                style={{
                  borderColor: 'rgba(199,34,53,0.40)',
                  color: '#222',
                  borderRadius: '4px',
                  display: 'block',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = college.accentColor)}
                onBlur={(e)  => (e.currentTarget.style.borderColor = 'rgba(199,34,53,0.40)')}
              />
            </div>

            {/* Search icon */}
            <button
              type={searchOpen ? 'submit' : 'button'}
              aria-label={searchOpen ? 'Run search' : 'Open search'}
              onClick={!searchOpen ? () => setSearchOpen(true) : undefined}
              className="flex items-center justify-center w-8 h-8 rounded transition-colors shrink-0"
              style={{ color: college.accentColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A81C2E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = college.accentColor)}
            >
              <SearchIcon />
            </button>

            {/* Close icon */}
            <button
              type="button"
              aria-label="Close search"
              onClick={closeSearch}
              className="flex items-center justify-center w-7 h-7 rounded transition-colors shrink-0"
              style={{
                color: 'rgba(199,34,53,0.55)',
                opacity: searchOpen ? 1 : 0,
                pointerEvents: searchOpen ? 'auto' : 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A81C2E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(199,34,53,0.55)')}
            >
              <CloseIcon />
            </button>
          </form>

          {/* ── Live results dropdown ─────────────────────────────────── */}
          {searchOpen && results.length > 0 && (
            <div
              className="absolute top-full right-0 mt-2 bg-white rounded-xl overflow-hidden"
              style={{
                width: 320,
                boxShadow: '0 8px 32px -4px rgba(0,0,0,0.14), 0 2px 8px -2px rgba(0,0,0,0.08)',
                border: '1px solid rgba(45,122,80,0.12)',
                zIndex: 999,
              }}
            >
              {/* Header */}
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', backgroundColor: '#FAFAFA' }}
              >
                <span className="font-display text-type-label font-bold uppercase tracking-[0.10em]" style={{ color: '#999' }}>
                  Results
                </span>
                <span className="font-display text-type-label" style={{ color: '#bbb' }}>
                  {results.length} found
                </span>
              </div>

              {/* Result rows */}
              <ul>
                {results.map((item, i) => {
                  const { bg, text } = catColor[item.category] || catColor.default;
                  const isActive = i === activeIdx;
                  return (
                    <li key={item.route + item.title}>
                      <button
                        type="button"
                        onClick={() => goTo(item.route)}
                        onMouseEnter={() => setActiveIdx(i)}
                        className="w-full text-left px-4 py-3 flex items-center gap-3 transition-colors"
                        style={{
                          backgroundColor: isActive ? 'rgba(45,122,80,0.06)' : 'transparent',
                          borderBottom: i < results.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                        }}
                      >
                        {/* Category badge */}
                        <span
                          className="font-display font-bold text-type-label px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: bg, color: text, letterSpacing: '0.04em' }}
                        >
                          {item.category}
                        </span>
                        {/* Title */}
                        <span className="font-display font-medium text-type-ui-sm flex-1 text-[#1A1A2E] truncate">
                          {item.title}
                        </span>
                        {/* Arrow */}
                        <span style={{ color: '#ccc' }}><ArrowIcon /></span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Footer hint */}
              <div
                className="px-4 py-2 flex items-center gap-3"
                style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid rgba(0,0,0,0.06)' }}
              >
                <span className="font-display text-type-label" style={{ color: '#aaa' }}>
                  ↑↓ navigate &nbsp;·&nbsp; Enter to go &nbsp;·&nbsp; Esc to close
                </span>
              </div>
            </div>
          )}

          {/* No results */}
          {searchOpen && query.trim().length > 1 && results.length === 0 && (
            <div
              className="absolute top-full right-0 mt-2 bg-white rounded-xl px-5 py-4"
              style={{
                width: 280,
                boxShadow: '0 8px 32px -4px rgba(0,0,0,0.12)',
                border: '1px solid rgba(45,122,80,0.12)',
                zIndex: 999,
              }}
            >
              <p className="font-display text-type-ui-sm text-[#888]">
                No results for <strong style={{ color: '#222' }}>"{query}"</strong>
              </p>
              <p className="font-display text-type-cap text-[#aaa] mt-1">
                Try searching for a page, programme, or topic.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
