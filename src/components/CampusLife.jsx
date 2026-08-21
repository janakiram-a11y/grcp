import { Link } from 'react-router-dom';

const gradients = [
  'linear-gradient(135deg,#1E5C3A 0%,#2D7A50 100%)',
  'linear-gradient(135deg,#2D4A8A 0%,#3B6CB7 100%)',
  'linear-gradient(135deg,#7B2D2D 0%,#C72235 100%)',
  'linear-gradient(135deg,#4A3728 0%,#8B5E3C 100%)',
  'linear-gradient(135deg,#1A4D5C 0%,#2D7A8A 100%)',
  'linear-gradient(135deg,#3D2D6B 0%,#6B4DB7 100%)',
  'linear-gradient(135deg,#1E4D2D 0%,#2D7A50 100%)',
  'linear-gradient(135deg,#4A1428 0%,#8B2D4A 100%)',
]

/*
  Bento grid — 4 columns, 3 rows, 7 cards:

  ┌─────────────────┬──────────┬──────────┐
  │                 │  Card 2  │          │  row 1 h:240
  │    Card 1       ├──────────┤  Card 3  │
  │   (2col×2row)   │  Card 4  │ (1col×2) │  row 2 h:200
  ├──────────┬──────┴──────────┴──┬───────┤
  │  Card 5  │      Card 6        │Card 7 │  row 3 h:220
  └──────────┴────────────────────┴───────┘
*/

const layout = [
  { col: '1 / 3', row: '1 / 3', titleSize: 'text-type-h3-mob', descSize: 'text-type-ui', pad: 'p-7' },     // 0 – large
  { col: '3 / 4', row: '1 / 2', titleSize: 'text-type-body', descSize: 'text-type-cap', pad: 'p-4' },     // 1
  { col: '4 / 5', row: '1 / 3', titleSize: 'text-type-body', descSize: 'text-type-cap', pad: 'p-4' },     // 2 – tall (fills Scholastic gap)
  { col: '3 / 4', row: '2 / 3', titleSize: 'text-type-body', descSize: 'text-type-cap', pad: 'p-4' },     // 3
  { col: '1 / 2', row: '3 / 4', titleSize: 'text-type-body', descSize: 'text-type-cap', pad: 'p-4' },     // 4
  { col: '2 / 4', row: '3 / 4', titleSize: 'text-type-body-lg', descSize: 'text-type-ui-sm', pad: 'p-5' }, // 5 – medium
  { col: '4 / 5', row: '3 / 4', titleSize: 'text-type-body', descSize: 'text-type-cap', pad: 'p-4' },     // 6
]

export default function CampusLife({ college }) {
  const cards = college.campusLifeCards.slice(0, 7)

  return (
    <section className="w-full bg-white section-pad">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-type-h2-mob lg:text-type-h2" style={{ color: 'var(--maroon, #C72235)' }}>
              {college.campusLifeHeading}
            </h2>
          </div>
          <Link
            to="/gallery/cultural-events"
            className="btn-red shrink-0"
            style={{ backgroundColor: 'var(--maroon, #C72235)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon-deep, #B01E2D)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon, #C72235)'; }}
          >
            Explore Gallery
          </Link>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '240px 200px 220px',
            gap: '14px',
          }}
        >
          {cards.map((card, i) => {
            const { col, row, titleSize, descSize, pad } = layout[i]
            return (
              <Link
                key={card.title}
                to={`/gallery/${card.slug}`}
                className="relative rounded-2xl overflow-hidden block"
                style={{
                  gridColumn: col,
                  gridRow: row,
                  background: gradients[i % gradients.length],
                  textDecoration: 'none',
                }}
              >
                {card.video ? (
                  <video
                    src={card.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity hover:from-black/70" />
                <div className={`absolute bottom-0 left-0 right-0 ${pad}`}>
                  <h4 className={`font-display font-bold text-white leading-tight mb-1 ${titleSize}`}>
                    {card.title}
                  </h4>
                  <p className={`font-body font-normal text-white/80 ${descSize}`}>
                    {card.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
