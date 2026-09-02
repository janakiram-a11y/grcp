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
        // ── Typography Scale (matches GRIET site) ──────────────────────────
        // Naming: type-{role}         → desktop size (lg:)
        //         type-{role}-tab     → tablet size  (md:)
        //         type-{role}-mob     → mobile size  (base)
        //
        // Headings  → font-display (DM Sans), weight 600–700
        // Body      → font-body    (Hind),    weight 400
        // UI/Labels → font-display (DM Sans), weight 500–700
        // ───────────────────────────────────────────────────────────────────

        // Heading scale — desktop
        'type-h1':      ['3.5rem',   { lineHeight: '4rem'     }], // 56 / 64
        'type-h2':      ['2.5rem',   { lineHeight: '3rem'     }], // 40 / 48
        'type-h3':      ['2rem',     { lineHeight: '2.6rem'   }], // 32 / 41.6
        'type-h4':      ['1.5rem',   { lineHeight: '1.95rem'  }], // 24 / 31.2
        'type-h5':      ['1.25rem',  { lineHeight: '1.75rem'  }], // 20 / 28
        'type-h6':      ['1.125rem', { lineHeight: '1.575rem' }], // 18 / 25.2

        // Heading scale — tablet (md:)
        'type-h1-tab':  ['3rem',     { lineHeight: '3.6rem'   }], // 48 / 57.6
        'type-h2-tab':  ['2.125rem', { lineHeight: '2.55rem'  }], // 34 / 40.8
        'type-h3-tab':  ['1.75rem',  { lineHeight: '2.275rem' }], // 28 / 36.4
        'type-h4-tab':  ['1.375rem', { lineHeight: '1.785rem' }], // 22 / 28.6

        // Heading scale — mobile (base)
        'type-h1-mob':  ['2.25rem',  { lineHeight: '2.7rem'   }], // 36 / 43.2
        'type-h2-mob':  ['1.75rem',  { lineHeight: '2.1rem'   }], // 28 / 33.6
        'type-h3-mob':  ['1.5rem',   { lineHeight: '1.95rem'  }], // 24 / 31.2
        'type-h4-mob':  ['1.25rem',  { lineHeight: '1.625rem' }], // 20 / 26

        // Body scale
        'type-body-lg': ['1.25rem',  { lineHeight: '2.125rem' }], // 20 / 34
        'type-body':    ['1.125rem', { lineHeight: '1.9125rem'}], // 18 / 30.6
        'type-body-sm': ['1rem',     { lineHeight: '1.6rem'   }], // 16 / 25.6
        'type-body-xs': ['0.875rem', { lineHeight: '1.375rem' }], // 14 / 22

        // UI / Chrome scale (DM Sans)
        'type-card-title':   ['1.375rem', { lineHeight: '1.8rem'   }], // 22 / 28.8 — card titles
        'type-nav':          ['1.125rem',{ lineHeight: '1.75rem'  }], // 18 / 28 — nav links
        'type-nav-dropdown': ['1rem',     { lineHeight: '1.5rem'   }], // 16 / 24 — nav dropdown items
        'type-btn':          ['1rem',     { lineHeight: '1.5rem'   }], // 16 / 24 — buttons
        'type-footer-link':  ['0.9375rem',{ lineHeight: '1.375rem' }], // 15 / 22 — footer links
        'type-sub':          ['1.25rem',  { lineHeight: '1.75rem'  }], // 20 / 28 — subheading
        'type-ui':           ['0.875rem', { lineHeight: '1.375rem' }], // 14 / 22 — UI default
        'type-ui-sm':        ['0.8125rem',{ lineHeight: '1.25rem'  }], // 13 / 20 — small UI
        'type-cap':          ['0.75rem',  { lineHeight: '1.125rem' }], // 12 / 18 — caption
        'type-label':        ['0.6875rem',{ lineHeight: '1rem'     }], // 11 / 16 — badge/tag
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
