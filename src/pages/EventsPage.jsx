import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

const events2026 = [
  { date: '06 Apr 2026', title: 'Skill Development Program', desc: '"Team Work"', link: 'https://photos.app.goo.gl/2Akwuya6fgNQHTzk7' },
  { date: '09 Mar 2026', title: "International Women's Day 2026", desc: '"Women\'s Health: Awareness, prevention and empowerment with emphasis on cosmetic gynaecology"', link: 'https://photos.app.goo.gl/VowoHM5Jo5UB3qw26' },
  { date: '06 Mar 2026', title: 'National Pharmacy Education Day', desc: '"Pharma planet: The Green Innovation Pitch"', link: 'https://photos.app.goo.gl/5cvQAQGFpcnKrEcHA' },
  { date: '05–06 Feb 2026', title: 'National Seminar — "Empowering Pharmaceutical Innovation Through QbD"', desc: '"Challenges, Solutions and Hands-on-Training in Preformulation and Analytical Method Advancement"', link: 'https://photos.app.goo.gl/pehVW2abhWRw3sJz7' },
];

const events2025 = [
  { date: '11 Dec 2025', title: 'Skill Development Program', desc: '"Presentation Skills"', link: 'https://photos.app.goo.gl/BLciJ6PfgkunWJjA8' },
  { date: '27 Nov 2025', title: 'Plantation — M.Pharmacy Orientation Program', desc: '"M.pharmacy Orientation Program"', link: 'https://photos.app.goo.gl/qhne98KrLXRFgGHd8' },
  { date: '15–17 Nov 2025', title: 'National Library Week Celebrations', desc: '"Book brain challenge competition & Book exhibition"', link: 'https://photos.app.goo.gl/6wwuwiRrvXg28A8g9' },
  { date: '15 Nov 2025', title: 'Karthika Vanabojanalu', desc: '', link: 'https://photos.app.goo.gl/iFkDGx5JKuXfVieT6' },
  { date: '31 Oct – 12 Nov 2025', title: 'B.Pharmacy Student Induction Program', desc: '"2025-2029 Batch"', link: 'https://photos.app.goo.gl/99nsb1ikBhgnrFPe9' },
  { date: '28 Oct 2025', title: 'Motivation Session', desc: '"From Ideas to Income: Mastering the Entrepreneurial Journey"', link: 'https://photos.app.goo.gl/qFcxiSbz5DD5WxZPA' },
  { date: '14 Oct 2025', title: 'Women Development Cell', desc: '"Self Defence Training Program on Eve of International Girls Day 2025"', link: 'https://photos.app.goo.gl/jTKf2fUMrqkQQWjH7' },
  { date: '27 Sep 2025', title: 'Sadhula Bathukamma', desc: '"celebrations"', link: 'https://photos.app.goo.gl/dVvaArsynXxU1neW6' },
  { date: '25 Sep 2025', title: 'World Pharmacist Day', desc: '"Sustainable Pharmacy: Greener Health for Tomorrow"', link: 'https://photos.app.goo.gl/JMA7Zs9BVPBxJhUm8' },
  { date: '17–23 Sep 2025', title: 'National Pharmacovigilance Week', desc: '"Your safety just a click away — Report to PvPI"', link: 'https://photos.app.goo.gl/DyB5nxvDwaTdVBSQ8' },
  { date: '20 Sep 2025', title: 'Pharma Expo Pro 7 & Pack — Industrial Visit', desc: '"Industrial Visit"', link: 'https://photos.app.goo.gl/vhfHGkoq4TSWHNpb6' },
  { date: '01–02 Sep 2025', title: 'Hands on Training', desc: '"Basic Techniques in Laboratory Animal Handling and Experiments"', link: 'https://photos.app.goo.gl/agmcCYQnYccdfgYG6' },
  { date: '12 Aug 2025', title: 'Plantation Drive', desc: '"To plant a tree is to believe in tomorrow"', link: 'https://photos.app.goo.gl/j7tgv3tNiQqegYU76' },
  { date: '06–07 Aug 2025', title: 'TASK-Skill Development Program', desc: '"Aptitude and Reasoning (A&R)"', link: 'https://photos.app.goo.gl/fYtk2Ensyn2Myksz6' },
  { date: '14 Jul 2025', title: 'Career Guidance Awareness', desc: '"Roadmap to success"', link: 'https://photos.app.goo.gl/21e3LS5M6LomdNU96' },
  { date: '30–31 Jul 2025', title: 'Industrial Visit — AKSHAYA PATRA', desc: '"AKSHAYA PATRA"', link: 'https://photos.app.goo.gl/pGBhV2brRDwpEYpo6' },
  { date: '30 Jul 2025', title: 'LV Prasad Eye Institute Incubation Centre', desc: '"Students Visit"', link: 'https://photos.app.goo.gl/xNgbPRnNJikRGk8L7' },
  { date: '19 Jul 2025', title: 'Elocution Competition', desc: '"Equal Rights, Equal Opportunity"', link: 'https://photos.app.goo.gl/EebV1QFRU2st1VVT6' },
  { date: '18 Jul 2025', title: 'GRCP Alumni Lecture Series 2025', desc: '"Inside The Industry: How To Stand Out In Pharma"', link: 'https://photos.app.goo.gl/5EAq7NMJXdXyqDBS7' },
  { date: '19–21 Jun 2025', title: '21st Annual Day 2025 — VIRASAT 2025', desc: '"VIRASAT 2025"', link: 'https://photos.app.goo.gl/PzfugNKF4rvu2jVo9' },
  { date: '15–16 Apr 2025', title: 'Herbopreneur 2025', desc: '"Herbal Research & Innovation, Herbal Cuisine & Beverages, Sustainable Herbal Packaging"', link: 'https://photos.app.goo.gl/v42VEuECUVC5U6WKA' },
  { date: '02 Apr 2025', title: 'Career Awareness Program', desc: '"Pharmacy Career Blueprint: Cracking GPAT & Unlocking Top Institutes"', link: 'https://photos.app.goo.gl/CW5uuXLqxWC7BWmF7' },
  { date: '26–30 Mar 2025', title: 'PRADHAN MANTRI KAUSHAL VIKAS YOJANA (PMKVY 4.0)', desc: '"Upskilling and Certification Program"', link: 'https://photos.app.goo.gl/nJX7zVHMZy3ExMSy6' },
  { date: '02–04 Apr 2025', title: 'TASK-Skill Development Program', desc: '"21st Century Transferable Skills"', link: 'https://photos.app.goo.gl/hz2yUqp1NGY4WsCs5' },
];

function CalendarIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhotosIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EventCard({ event }) {
  return (
    <div
      className="flex flex-col gap-3 p-5 rounded-xl border bg-white hover:shadow-sm transition-shadow"
      style={{ borderColor: `${primary}18`, borderLeft: `4px solid ${accent}` }}
    >
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full self-start font-display font-semibold text-type-label text-white"
        style={{ backgroundColor: primary }}
      >
        <CalendarIcon />
        {event.date}
      </div>
      <h3 className="font-display font-bold text-type-body" style={{ color: accent }}>
        {event.title}
      </h3>
      {event.desc && (
        <p className="font-body text-type-ui-sm italic text-[#6B7280]">{event.desc}</p>
      )}
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start font-display font-semibold text-type-cap text-white px-4 py-1.5 rounded-lg transition-opacity hover:opacity-85"
        style={{ backgroundColor: accent }}
      >
        <PhotosIcon />
        View Photos
      </a>
    </div>
  );
}

export default function EventsPage() {
  const [activeYear, setActiveYear] = useState('2026');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const currentEvents = activeYear === '2026' ? events2026 : events2025;

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Events"
        subtitle="Academic, cultural, and professional events at Gokaraju Rangaraju College of Pharmacy"
        breadcrumb={['Events']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          <div className="mb-6">
            <h2 className="font-display font-bold text-type-h2-mob mb-2" style={{ color: accent }}>
              College Events
            </h2>
            <div className="w-14 h-[3px] rounded-full mb-6" style={{ backgroundColor: accent }} />
          </div>

          {/* Year tabs */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {[
              { year: '2026', count: events2026.length },
              { year: '2025', count: events2025.length },
            ].map(({ year, count }) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className="inline-flex items-center gap-2 font-display font-semibold text-type-ui px-5 py-2 rounded-lg border transition-colors"
                style={
                  activeYear === year
                    ? { backgroundColor: primary, color: '#fff', borderColor: primary }
                    : { backgroundColor: '#fff', color: primary, borderColor: `${primary}40` }
                }
              >
                {year}
                <span
                  className="font-display font-bold text-type-label px-2 py-0.5 rounded-full"
                  style={
                    activeYear === year
                      ? { backgroundColor: 'rgba(255,255,255,0.25)', color: '#fff' }
                      : { backgroundColor: `${primary}18`, color: primary }
                  }
                >
                  {count}
                </span>
              </button>
            ))}
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentEvents.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>

        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
