const BookIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
    <path d="M3 5h22v18H3z" stroke="var(--gold, #F3DAB2)" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 5v18M3 12h11" stroke="var(--gold, #F3DAB2)" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const MortarIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
    <path d="M14 4L3 10l11 5 11-5-11-6z" stroke="var(--gold, #F3DAB2)" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 13v4c2 2 7 3 7 3s5-1 7-3v-4" stroke="var(--gold, #F3DAB2)" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M6 4l4 4-4 4" stroke="var(--green, white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const programIcons = [BookIcon, MortarIcon]

export default function AcademicPrograms({ college }) {
  return (
    <section className="w-full section-pad" style={{ background: 'var(--cream, linear-gradient(135deg, #1E5C3A 0%, #2D7A50 60%, #1A4D33 100%))' }}>
      <div className="max-w-[1200px] mx-auto flex items-center gap-0">
        <div className="flex flex-col gap-6 w-[600px]">
          <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2" style={{ color: 'var(--maroon, #ffffff)' }}>
            {college.academicProgramsHeading}
          </h2>
          <p className="font-body font-normal text-type-body-lg" style={{ color: 'var(--ink-soft, rgba(205,240,220,0.82))' }}>
            {college.academicProgramsDesc}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="/programmes"
              className="btn-red btn-red-lg"
              style={{ backgroundColor: 'var(--maroon, #C72235)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon-deep, #B01E2D)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon, #C72235)'; }}
            >
              View all programs
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-end gap-6">
          {college.academicPrograms.map(({ count, title, desc }, i) => {
            const Icon = programIcons[i % programIcons.length]
            return (
              <div
                key={title}
                className="w-[288px] h-[320px] rounded-3xl p-6 flex flex-col justify-center gap-3 transition-all duration-200"
                style={{
                  backgroundColor: 'var(--white, rgba(255,255,255,0.10))',
                  border: '1px solid var(--cream-dim, rgba(255,255,255,0.20))',
                }}
              >
                <div>
                  <span className="font-display font-bold text-type-h3 block" style={{ color: 'var(--gold, #F3DAB2)' }}>{count}</span>
                  <span className="font-display font-bold text-type-h5 block" style={{ color: 'var(--ink, #ffffff)' }}>{title}</span>
                </div>
                <p className="font-body font-normal text-type-body" style={{ color: 'var(--ink-soft, rgba(205,240,220,0.80))' }}>{desc}</p>
                <div className="flex items-center justify-end gap-1">
                  <span className="font-display font-semibold text-type-ui" style={{ color: 'var(--green, #ffffff)' }}>Learn More</span>
                  <ChevronRight />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
