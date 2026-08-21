import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import { galleryCategories } from '../data/galleryData';

const pc = college.primaryColor;
const ac = college.greenAccent;

/* ── Lightbox ────────────────────────────────────────────────────────────── */
function Lightbox({ items, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  const item = items[idx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-5 text-white/80 hover:text-white text-4xl font-light leading-none z-10"
        onClick={onClose}
        aria-label="Close"
      >×</button>

      {/* Counter */}
      <span className="absolute top-5 left-1/2 -translate-x-1/2 font-display text-white/60 text-sm">
        {idx + 1} / {items.length}
      </span>

      {/* Prev */}
      <button
        className="absolute left-3 md:left-6 text-white/70 hover:text-white z-10 p-2"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Media */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            className="max-w-full max-h-[85vh] rounded-xl"
            style={{ outline: 'none' }}
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt=""
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
          />
        )}
      </div>

      {/* Next */}
      <button
        className="absolute right-3 md:right-6 text-white/70 hover:text-white z-10 p-2"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

/* ── Media Thumb ─────────────────────────────────────────────────────────── */
function MediaThumb({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (item.type === 'video') {
    return (
      <button
        className="relative w-full overflow-hidden rounded-xl group cursor-pointer focus:outline-none"
        style={{ aspectRatio: '4/3', background: '#111' }}
        onClick={() => onClick(index)}
        aria-label="Play video"
      >
        <video
          src={item.src}
          className="w-full h-full object-cover"
          muted
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={pc}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
        <span
          className="absolute top-2 left-2 font-display font-semibold text-white text-xs px-2 py-0.5 rounded-full"
          style={{ backgroundColor: ac }}
        >VIDEO</span>
      </button>
    );
  }

  return (
    <button
      className="relative w-full overflow-hidden rounded-xl group cursor-pointer focus:outline-none"
      style={{ aspectRatio: '4/3', backgroundColor: `${pc}12` }}
      onClick={() => onClick(index)}
      aria-label="View image"
    >
      {!error && (
        <img
          src={item.src}
          alt=""
          loading="lazy"
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={`${pc}60`} strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
    </button>
  );
}

/* ── Category sidebar / chips ────────────────────────────────────────────── */
function CategoryNav({ current }) {
  const entries = Object.entries(galleryCategories);
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {entries.map(([slug, cat]) => (
        <Link
          key={slug}
          to={`/gallery/${slug}`}
          className="font-display font-semibold text-type-ui px-4 py-2 rounded-full transition-colors"
          style={slug === current
            ? { backgroundColor: pc, color: '#fff' }
            : { backgroundColor: `${pc}10`, color: pc }
          }
        >
          {cat.title}
        </Link>
      ))}
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────────────────── */
export default function GalleryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const cat = galleryCategories[category];

  useEffect(() => {
    if (!cat) navigate('/gallery/cultural-events', { replace: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category, cat, navigate]);

  if (!cat) return null;

  const images = cat.media.filter(m => m.type === 'image');
  const videos = cat.media.filter(m => m.type === 'video');

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title={cat.title}
        subtitle={cat.desc}
        breadcrumb={['Gallery', cat.title]}
        bgImage={college.heroBgImage}
      />

      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          {/* Category navigation */}
          <CategoryNav current={category} />

          {/* Stats */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display font-semibold text-type-body" style={{ color: pc }}>
              {cat.media.length} items
            </span>
            {videos.length > 0 && (
              <span className="font-display font-semibold text-type-ui px-3 py-1 rounded-full" style={{ backgroundColor: `${ac}15`, color: ac }}>
                {videos.length} video{videos.length > 1 ? 's' : ''}
              </span>
            )}
            <span className="font-display text-type-ui text-[#9CA3AF]">
              {images.length} photo{images.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cat.media.map((item, i) => (
              <MediaThumb
                key={item.src}
                item={item}
                index={i}
                onClick={setLightboxIdx}
              />
            ))}
          </div>

        </div>
      </main>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          items={cat.media}
          startIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
