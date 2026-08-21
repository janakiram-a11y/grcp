const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M2 3a1 1 0 011-1h2a1 1 0 011 .836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 15v2a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      stroke="var(--green, #2D7A50)" strokeWidth="1.5" />
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 2l7 3v5c0 4-3.5 7-7 8-3.5-1-7-4-7-8V5l7-3z"
      stroke="var(--green, #2D7A50)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke="var(--green, #2D7A50)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const CapIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 3l8 4-8 4-8-4 8-4z" stroke="var(--green, #2D7A50)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 9v3.5C7.333 13.833 8.667 14.5 10 14.5S12.667 13.833 14 12.5V9"
      stroke="var(--green, #2D7A50)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const BuildingIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="3" y="3" width="14" height="15" rx="1" stroke="var(--green, #2D7A50)" strokeWidth="1.5" />
    <path d="M8 7h1M8 11h1M11 7h1M11 11h1M8 15h4" stroke="var(--green, #2D7A50)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const featureIcons = [PhoneIcon, ShieldIcon, CapIcon, BuildingIcon]

export default function WhyChooseUs({ college }) {
  return (
    <section className="w-full bg-white section-pad">
      <div className="max-w-[1200px] mx-auto flex gap-[30px] items-start">
        <div className="flex-1 flex flex-col gap-3 pr-8">
          <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2 text-[#222222]">
            {college.aboutHeading}
          </h2>
          <p className="font-body font-normal text-type-body text-[#666666]">
            {college.aboutP1}
          </p>
          <p className="font-body font-normal text-type-body text-[#666666]">
            {college.aboutP2}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 mt-3">
            {college.aboutFeatures.map(({ title, sub }, i) => {
              const Icon = featureIcons[i % featureIcons.length]
              return (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--green-soft, rgba(45,122,80,0.08))' }}>
                    <Icon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-bold text-type-ui text-[#222222]">{title}</span>
                    <span className="font-display font-normal text-type-cap text-[#666666]">{sub}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex-1 flex justify-end relative" style={{ minHeight: '480px' }}>
          <div className="relative w-[585px]">
            <img
              src={college.aboutImage}
              alt={`${college.shortName} Campus`}
              className="w-full h-auto"
            />
            <div
              className="absolute -left-6 -bottom-5 w-[256px] bg-white border-l-4 rounded-3xl px-6 py-5"
              style={{
                boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
                borderLeftColor: 'var(--maroon, #2D7A50)',
              }}
            >
              <span className="font-display font-bold text-type-h1 block" style={{ color: 'var(--maroon, #2D7A50)' }}>{college.aboutYears}</span>
              <span className="font-display font-medium text-type-ui text-[#666666]">
                {college.aboutYearsLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
