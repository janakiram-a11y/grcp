/* Why Choose GRCP — 8-card grid */

const icons = {
  Accreditation: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 3l2.5 5.5 6 .5-4.5 4 1.5 5.5L14 16l-5.5 2.5 1.5-5.5L5.5 9l6-.5L14 3z"
        stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  PCI: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 4l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V8l8-4z"
        stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 14l2.5 2.5 5-5" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Research: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <circle cx="12" cy="12" r="7" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
      <path d="M17.5 17.5L24 24" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12h6M12 9v6" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Green: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 22V12M14 12C14 8 10 5 6 6c0 4 3 8 8 8M14 12c0-4 4-7 8-6-1 4-4 7-8 8" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22h8" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Infrastructure: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <rect x="3" y="8" width="22" height="17" rx="1" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
      <path d="M8 25V14M20 25V14M14 25V14" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 14h22" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
      <path d="M10 3h8l2 5H8l2-5z" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  Ethics: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 4a7 7 0 015 11.5L18 19h-8l-1-3.5A7 7 0 0114 4z" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
      <path d="M11 19h6M11.5 23h5" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Student: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <path d="M14 4l10 5-10 5-10-5 10-5z" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 11.5v5.5c2 2 8 2 12 0v-5.5" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 9v6" stroke="var(--green, #2D7A50)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Legacy: () => (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
      <rect x="3" y="10" width="22" height="14" rx="2" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
      <path d="M9 10V7a2 2 0 012-2h6a2 2 0 012 2v3" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
      <path d="M3 17h22" stroke="var(--green, #2D7A50)" strokeWidth="1.8" />
    </svg>
  ),
}

const iconKeys = ['Accreditation', 'PCI', 'Research', 'Green', 'Infrastructure', 'Ethics', 'Student', 'Legacy']

export default function AccreditationSection({ college }) {
  return (
    <section className="w-full bg-[#F6F1F2] section-pad">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2 text-center max-w-[720px]" style={{ color: 'var(--maroon, #C72235)' }}>
            {college.whyChooseHeading}
          </h2>
        </div>

        {/* 4-col × 2-row grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {college.whyChooseCards.map((card, i) => {
            const Icon = icons[iconKeys[i % iconKeys.length]]
            return (
              <div
                key={card.title}
                className="bg-white border border-black/[0.05] rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px -6px rgba(0,0,0,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--green-soft, rgba(45,122,80,0.08))' }}
                >
                  <Icon />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-type-body text-[#1A1A2E]">
                    {card.title}
                  </h3>
                  <p className="font-body font-normal text-type-body text-[#666]">
                    {card.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
