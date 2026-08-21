const AwardIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M10 2l2.5 5.5 6 .5-4.5 4 1.5 6L10 15l-5.5 3 1.5-6L1.5 8l6-.5L10 2z" />
  </svg>
)
const MortarIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3L2 7l8 4 8-4-8-4z" strokeLinejoin="round" />
    <path d="M6 9v3.5c0 1.5 4 2.5 4 2.5s4-1 4-2.5V9" strokeLinecap="round" />
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M3 17a7 7 0 0114 0" strokeLinecap="round" />
  </svg>
)

const icons = [AwardIcon, MortarIcon, UsersIcon]

export default function HighlightCards({ college }) {
  return (
    <section className="w-full section-pad" style={{ backgroundColor: '#FAF4EE' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {college.highlightCards.map(({ title, desc }, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={title}
              className="bg-white rounded-2xl px-8 py-10 flex flex-col gap-5 premium-card"
              style={{
                boxShadow: '0 2px 8px rgba(45,122,80,0.10), 0 1px 3px rgba(0,0,0,0.05)',
                borderTop: '3px solid #2D7A50',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: college.greenAccent, color: '#F3DAB2' }}
              >
                <Icon />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display font-semibold text-type-h6" style={{ color: college.primaryColor }}>
                  {title}
                </h3>
                <p className="font-body font-normal text-type-body" style={{ color: '#606060' }}>
                  {desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
