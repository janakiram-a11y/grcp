export default function ResearchSection({ college }) {
  return (
    <section className="w-full section-pad" style={{ background: 'var(--cream, linear-gradient(135deg, #1E5C3A 0%, #2D7A50 60%, #1A4D33 100%))' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2 text-center" style={{ color: 'var(--maroon, #ffffff)' }}>
            {college.researchHeading}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {college.researchStats.map(({ count, label, desc }) => (
            <div
              key={label}
              className="rounded-xl px-8 py-[31px] flex flex-col items-center text-center gap-3 transition-all duration-200"
              style={{
                backgroundColor: 'var(--white, rgba(255,255,255,0.15))',
                border: '1px solid var(--cream-dim, rgba(255,255,255,0.25))',
              }}
            >
              <span className="font-display font-bold text-type-h2-mob tracking-[-0.02em]" style={{ color: 'var(--gold, #F3DAB2)' }}>{count}</span>
              <span className="font-display font-semibold text-type-body-lg" style={{ color: 'var(--ink, #ffffff)' }}>{label}</span>
              <span className="font-body font-normal text-type-body" style={{ color: 'var(--ink-soft, rgba(205,240,220,0.80))' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
