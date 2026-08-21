import { useState } from 'react';

function LOIModal({ college, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="relative bg-white rounded-xl shadow-2xl max-w-[620px] w-[90%] p-10" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl font-light transition-colors"
          style={{ color: college.primaryColor }}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-2 mb-6">
          <img src={college.smallLogo} alt={college.shortName} className="h-10 w-10 object-contain" />
          <span
            className="text-white font-display font-bold text-type-label px-2 py-0.5 rounded"
            style={{ backgroundColor: college.accentColor }}
          >
            NEW
          </span>
        </div>
        <p className="font-body text-type-body text-[#222222] mb-5">
          We are pleased to inform you that the{' '}
          <strong style={{ color: college.primaryColor }}>Ministry of Education</strong>, upon the
          recommendation of the University Grants Commission (UGC), has issued a{' '}
          <strong style={{ color: college.primaryColor }}>Letter of Intent (LoI)</strong> to{' '}
          <strong style={{ color: college.primaryColor }}>{college.shortName}</strong>.
        </p>
        <p className="font-body text-type-body text-[#222222]">
          This signifies that {college.shortName} has been invited to fulfil the necessary requirements
          toward being granted{' '}
          <strong style={{ color: college.primaryColor }}>Deemed-to-be University</strong> status.
        </p>
        <div className="mt-8">
          <button onClick={onClose} className="btn-red">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function TickerContent({ announcements, college, onLOIClick }) {
  return (
    <div className="flex items-center gap-8 text-type-ui-sm font-display font-medium shrink-0">
      {announcements.map((ann, idx) => (
        <span key={idx} className="flex items-center gap-8">
          {idx > 0 && (
            <span className="select-none" style={{ color: 'rgba(199,34,53,0.35)' }}>|</span>
          )}
          {ann.isLOI ? (
            <button
              onClick={onLOIClick}
              className="flex items-center gap-2 transition-opacity group hover:opacity-80"
              style={{ color: '#222222' }}
            >
              <span className="group-hover:underline underline-offset-2">{ann.text}</span>
              {ann.badge && (
                <span
                  className="text-white font-bold text-type-label px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: college.accentColor }}
                >
                  {ann.badge}
                </span>
              )}
            </button>
          ) : (
            <a
              href={ann.href || '#'}
              target={ann.href && ann.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity group hover:opacity-80"
              style={{ color: '#222222' }}
            >
              <span className="group-hover:underline underline-offset-2">{ann.text}</span>
              {ann.badge && (
                <span
                  className="text-white font-bold text-type-label px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: college.accentColor }}
                >
                  {ann.badge}
                </span>
              )}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar({ college }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full py-2"
        style={{ background: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.10)' }}
      >
        <div className="max-w-[1320px] mx-auto px-[60px] flex items-center gap-4">
          {/* Announcements pill */}
          <div
            className="flex items-center gap-2 shrink-0 px-4 py-1.5"
            style={{
              backgroundColor: '#4A1428',
              borderRadius: '6px',
            }}
          >
            {/* Megaphone icon */}
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: '#ffffff' }}
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2v-4.336l8 1.6A1 1 0 0018 12V3z" />
            </svg>
            <span
              className="font-display font-bold text-type-label uppercase tracking-[0.12em]"
              style={{ color: '#ffffff' }}
            >
              Announcements
            </span>
          </div>

          <span className="text-sm select-none shrink-0" style={{ color: 'rgba(199,34,53,0.35)' }}>
            |
          </span>

          <div className="overflow-hidden flex-1">
            <div className="ticker-track">
              <TickerContent
                announcements={college.announcements}
                college={college}
                onLOIClick={() => setModalOpen(true)}
              />
              <div style={{ width: '50vw' }} className="shrink-0" />
              <TickerContent
                announcements={college.announcements}
                college={college}
                onLOIClick={() => setModalOpen(true)}
              />
              <div style={{ width: '50vw' }} className="shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <LOIModal college={college} onClose={() => setModalOpen(false)} />}
    </>
  );
}
