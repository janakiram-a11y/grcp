import recruiterLogos from '../data/recruiterLogos';

function RecruiterLogoGrid() {
  return (
    <div
      className="w-full rounded-2xl bg-white p-6 flex flex-col gap-4"
      style={{ border: '1px solid rgba(229,231,235,0.7)', boxShadow: '0 1px 8px rgba(45,122,80,0.07), 0 1px 3px rgba(0,0,0,0.05)' }}
    >
      <p className="font-display font-bold text-type-cap uppercase tracking-[0.12em] text-[#222222] opacity-70">
        Our Recruiting Partners
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {recruiterLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center bg-white rounded-lg border"
            style={{ height: 64, borderColor: 'rgba(45,122,80,0.14)' }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              loading="lazy"
              style={{ maxWidth: 96, maxHeight: 44, width: 'auto', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CareerOutcomes({ college }) {
  return (
    <section className="w-full section-pad" style={{ backgroundColor: 'var(--cream, #F0F7F3)' }}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
          <div className="lg:flex-1">
            <h2 className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 mb-4" style={{ color: 'var(--maroon, #C72235)' }}>
              {college.careerHeading}
            </h2>
            <p className="font-body font-normal text-type-body text-[#4B5563] max-w-[512px]">
              {college.careerDesc}
            </p>
          </div>

          <div className="flex lg:w-[420px] lg:flex-shrink-0">
            <div className="flex-1 pl-6 border-l-2 flex flex-col gap-1" style={{ borderColor: 'var(--maroon, #2D7A50)' }}>
              <span className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 text-[#222222]">{college.careerHighestPackage}</span>
              <span className="font-display font-bold text-type-label uppercase tracking-[0.12em] text-[#4B5563]">
                HIGHEST PACKAGE
              </span>
            </div>
            <div className="flex-1 pl-6 border-l-2 flex flex-col gap-1" style={{ borderColor: 'var(--maroon, #C72235)' }}>
              <span className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 text-[#222222]">{college.careerOffersCount}</span>
              <span className="font-display font-bold text-type-label uppercase tracking-[0.12em] text-[#4B5563]">
                OFFERS MADE
              </span>
            </div>
          </div>
        </div>

        <RecruiterLogoGrid />
      </div>
    </section>
  )
}
