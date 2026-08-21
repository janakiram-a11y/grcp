export default function CampusIntro({ college }) {
  const videoSrc = college.campusVideoSrc;

  return (
    <section className="w-full bg-white section-pad">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2 text-center" style={{ color: 'var(--maroon, #C72235)' }}>
            {college.campusIntroHeading}
          </h2>
          <p className="font-body font-normal text-type-body text-[#666666] text-center max-w-[680px]">
            {college.campusIntroDesc}
          </p>
        </div>

        {/* ── Video container ──────────────────────────────────────────── */}
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            boxShadow: '0px 24px 48px -12px rgba(74,13,38,0.15)',
            background: 'var(--home-video-fallback-bg, #000)',
          }}
        >
          {videoSrc ? (
            <iframe
              src={videoSrc}
              title="GRCP Campus Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          ) : (
            <img
              src={college.campusIntroImage}
              alt="GRCP Campus"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

      </div>
    </section>
  );
}
