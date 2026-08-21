import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent  = college.greenAccent;

/* ── Image data organised by section ──────────────────────────────────────── */
const SECTIONS = [
  {
    id: 'campus',
    title: 'Campus & Building',
    description: 'The GRCP campus is housed in a well-planned facility that provides a conducive academic environment for students and faculty.',
    images: [
      { file: '1.jpeg',  caption: 'College Main Entrance' },
      { file: '2.jpeg',  caption: 'College Foyer' },
      { file: '11.jpg',  caption: 'Corridor & Auditorium Block' },
    ],
  },
  {
    id: 'classrooms',
    title: 'Classrooms & Lecture Halls',
    description: 'Spacious, well-ventilated lecture halls equipped with modern audio-visual aids and projector systems to support effective teaching and learning.',
    images: [
      { file: '21.jpg',  caption: 'Smart Classroom with Projector' },
      { file: '20.jpg',  caption: 'Student Locker Area — Near Lecture Hall-2' },
    ],
  },
  {
    id: 'laboratories',
    title: 'Academic Laboratories',
    description: 'State-of-the-art laboratories equipped for B.Pharmacy and M.Pharmacy practical sessions, research experiments, and quality control studies.',
    images: [
      { file: '10.jpg',  caption: 'Pharmaceutical Analysis Laboratory' },
      { file: '14.jpg',  caption: 'Pharmaceutics Laboratory' },
      { file: '08.jpg',  caption: 'Pharmacology & Anatomy Laboratory' },
      { file: '28.jpg',  caption: 'Pharmaceutical Chemistry Laboratory' },
      { file: '09.jpg',  caption: 'Pharmacognosy Specimen Collection' },
      { file: '30.jpg',  caption: 'Molecular Models — Chemistry Lab' },
      { file: '27.jpg',  caption: 'Molecular Model Kit' },
    ],
  },
  {
    id: 'instruments',
    title: 'Analytical Instruments & Equipment',
    description: 'GRCP is equipped with a comprehensive range of pharmaceutical instruments enabling hands-on training and advanced research across all disciplines.',
    images: [
      { file: '04.jpg',  caption: 'Dissolution Apparatus (Electrolab)' },
      { file: '05.jpg',  caption: 'SOTAX SDT Dissolution Tester' },
      { file: '06.jpg',  caption: 'Disintegration Tester & Calorimeter' },
      { file: '07.jpg',  caption: 'Sterility Testing Unit' },
      { file: '12.jpg',  caption: 'Humidity Chamber' },
      { file: '13.jpg',  caption: 'Orbital Shaking Incubator' },
      { file: '15.jpg',  caption: 'Homogenizer' },
      { file: '16.jpg',  caption: 'Particle Size Analyzer' },
      { file: '17.jpg',  caption: 'Optical Microscope (Magnus)' },
      { file: '18.jpg',  caption: 'Ultra Sonicator' },
      { file: '19.jpg',  caption: 'IR Press & Dissolution Apparatus' },
      { file: '24.jpg',  caption: 'Fluidized Bed Dryer' },
      { file: '25.jpg',  caption: 'Tablet Punching Machine (Single Station)' },
      { file: '26.jpg',  caption: 'Microcentrifuge & Calorimeter' },
      { file: '33.jpg',  caption: 'Rota-Rod Apparatus' },
      { file: '34.jpg',  caption: 'UV-Spectrophotometer' },
      { file: '35.jpg',  caption: 'Rotary Evaporator (Heidolph)' },
      { file: '36.jpg',  caption: 'FT-IR Spectrophotometer (Shimadzu IRaffinity-1)' },
      { file: '37.jpg',  caption: 'HPLC System Gradient (Shimadzu)' },
      { file: '38.jpg',  caption: 'Analytical Equipment' },
    ],
  },
  {
    id: 'sports',
    title: 'Sports & Fitness Facilities',
    description: 'GRCP promotes holistic student development through well-equipped gymnasium and indoor sports facilities for physical fitness and recreational activities.',
    images: [
      { file: '29.jpg',  caption: 'Gymnasium — Cardio Zone' },
      { file: '31.jpg',  caption: 'Gymnasium — Strength Training Zone' },
      { file: '32.jpg',  caption: 'Indoor Sports Hall — Table Tennis' },
    ],
  },
];

/* ── Lightbox ──────────────────────────────────────────────────────────────── */
function Lightbox({ image, caption, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white text-3xl font-light leading-none opacity-70 hover:opacity-100 transition-opacity z-10"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100 transition-opacity z-10 select-none"
        style={{ background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
      >
        ‹
      </button>

      {/* Image */}
      <div className="flex flex-col items-center px-16 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt={caption}
          className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        {caption && (
          <p className="mt-3 text-white text-sm text-center opacity-80 font-display">{caption}</p>
        )}
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100 transition-opacity z-10 select-none"
        style={{ background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
      >
        ›
      </button>
    </div>
  );
}

/* ── Gallery grid ──────────────────────────────────────────────────────────── */
function GalleryGrid({ images, onOpen }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.map(({ file, caption }, idx) => (
        <button
          key={file}
          onClick={() => onOpen(images, idx)}
          className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{ aspectRatio: '4/3', focusRingColor: accent }}
        >
          <img
            src={`/infrastructure/${file}`}
            alt={caption}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Caption overlay */}
          <div
            className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)',
            }}
          >
            <p className="w-full px-3 pb-3 text-white font-display font-medium text-xs leading-tight text-left">
              {caption}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

/* ── Section header — matches site design system ───────────────────────────── */
function SectionHeader({ title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-bold text-type-h2-mob pb-3"
        style={{
          color: accent,
          borderBottom: `3px solid ${accent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────────────────────── */
export default function InfrastructurePage() {
  const location = useLocation();
  const [lightbox, setLightbox] = useState(null); // { images, index }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const openLightbox  = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevImage     = () => setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }));
  const nextImage     = () => setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Infrastructure"
        subtitle="World-class facilities supporting academic excellence, research, and student well-being"
        breadcrumb={['Infrastructure']}
        bgImage={college.heroBgImage}
      />

      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto space-y-16">

          {/* Section nav pills */}
          <nav className="flex flex-wrap gap-2">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-4 py-1.5 rounded-full font-display font-semibold text-type-ui-sm border transition-colors hover:text-white"
                style={{
                  borderColor: accent,
                  color: accent,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accent; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = accent; }}
              >
                {sec.title}
              </a>
            ))}
          </nav>

          {/* Sections */}
          {SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id}>
              <SectionHeader title={sec.title} />
              {sec.description && (
                <p className="font-body text-type-body text-[#474747] mb-6 max-w-[820px]">
                  {sec.description}
                </p>
              )}
              <GalleryGrid images={sec.images} onOpen={openLightbox} />
            </section>
          ))}

        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          image={`/infrastructure/${lightbox.images[lightbox.index].file}`}
          caption={lightbox.images[lightbox.index].caption}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
