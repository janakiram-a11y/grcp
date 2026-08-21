/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // ── Semantic aliases (USE THESE going forward) ──────────────────────
        // font-display → DM Sans  (headings, labels, UI chrome)
        // font-body    → Hind     (body copy, descriptions, paragraphs)
        display: ['"DM Sans"', 'Tahoma', 'sans-serif'],
        body:    ['Hind',      'Tahoma', 'sans-serif'],

        // ── Legacy aliases (swapped names kept for backward compat) ─────────
        // DO NOT use in new code. Migrate to font-display / font-body above.
        hind:      ['"DM Sans"', 'Tahoma', 'sans-serif'], // misnamed — actually DM Sans
        'dm-sans': ['Hind',      'Tahoma', 'sans-serif'], // misnamed — actually Hind
        tahoma:    ['Tahoma', 'sans-serif'],
      },
      fontSize: {
        // ── Typography Scale ────────────────────────────────────────────────
        // Naming: type-{role}         → desktop size
        //         type-{role}-mob     → mobile size (use as base, override at lg:)
        //
        // Headings  → font-display (DM Sans), weight 600
        // Body      → font-body    (Hind),    weight 400
        // UI/Labels → font-display (DM Sans), weight 500–700
        // ───────────────────────────────────────────────────────────────────

        // Heading scale
        'type-h1':      ['3rem',     { lineHeight: '3.5rem'   }], // 48 / 56
        'type-h2':      ['2.5rem',   { lineHeight: '3rem'     }], // 40 / 48
        'type-h3':      ['2rem',     { lineHeight: '2.5rem'   }], // 32 / 40
        'type-h4':      ['1.5rem',   { lineHeight: '2rem'     }], // 24 / 32
        'type-h5':      ['1.25rem',  { lineHeight: '1.75rem'  }], // 20 / 28
        'type-h6':      ['1.125rem', { lineHeight: '1.625rem' }], // 18 / 26

        // Mobile heading sizes (base; override at lg: with desktop token)
        'type-h1-mob':  ['2rem',     { lineHeight: '2.5rem'   }], // 32 / 40
        'type-h2-mob':  ['1.75rem',  { lineHeight: '2.25rem'  }], // 28 / 36
        'type-h3-mob':  ['1.5rem',   { lineHeight: '2rem'     }], // 24 / 32

        // Body scale
        'type-body-lg': ['1.125rem', { lineHeight: '1.75rem'  }], // 18 / 28
        'type-body':    ['1rem',     { lineHeight: '1.625rem' }], // 16 / 26
        'type-body-sm': ['0.875rem', { lineHeight: '1.375rem' }], // 14 / 22
        'type-body-xs': ['0.8125rem',{ lineHeight: '1.25rem'  }], // 13 / 20

        // UI / Chrome scale (DM Sans)
        'type-sub':     ['1.25rem',  { lineHeight: '1.75rem'  }], // 20 / 28 — subheading
        'type-ui':      ['0.875rem', { lineHeight: '1.375rem' }], // 14 / 22 — UI default
        'type-ui-sm':   ['0.8125rem',{ lineHeight: '1.25rem'  }], // 13 / 20 — small UI
        'type-cap':     ['0.75rem',  { lineHeight: '1.125rem' }], // 12 / 18 — caption
        'type-label':   ['0.6875rem',{ lineHeight: '1rem'     }], // 11 / 16 — badge/tag
      },
      colors: {
        brand: {
          primary:   '#2D7A50',
          highlight: '#C72235',
          green:     '#C72235',
          amaranth:  '#C72235',
          dark:      '#222222',
          neutral:   '#BFBFBF',
          soft:      '#F3DAB2',
        },
      },
    },
  },
  plugins: [],
};
