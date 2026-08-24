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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {college.highlightCards.map(({ title, desc }, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={title}
              className="bg-white border border-black/[0.05] rounded-xl p-6 md:p-7 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: '0px 20px 40px -10px rgba(0,0,0,0.05)' }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(45,122,80,0.07)', color: college.primaryColor }}
              >
                <Icon />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display font-semibold text-type-card-title" style={{ color: college.primaryColor }}>
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
