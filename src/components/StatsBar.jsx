export default function StatsBar({ college }) {
  const items = college.statsBarItems

  return (
    <div
      className="w-full py-[36px]"
      style={{
        background: 'linear-gradient(to bottom, #EDD5A2 0%, #F3DAB2 45%, #EFD6A6 100%)',
        boxShadow: 'inset 0 5px 18px rgba(6,28,14,0.10), 0 1px 0 rgba(45,122,80,0.12)',
      }}
    >
      <div className="flex justify-center items-stretch flex-wrap">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center px-10 py-2"
            style={{
              borderRight: i < items.length - 1 ? '1px solid rgba(45,122,80,0.15)' : 'none',
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{
                  backgroundColor: college.greenAccent,
                  boxShadow: '0 0 0 2px rgba(199,34,53,0.18)',
                }}
              />
              <span
                className="font-display font-semibold text-type-body tracking-wide whitespace-nowrap"
                style={{ color: college.primaryColor }}
              >
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
