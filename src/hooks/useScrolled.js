import { useState, useEffect } from 'react';

/**
 * Tracks whether the page has scrolled past the header's collapse point.
 *
 * Hysteresis band (40–80px) instead of a single threshold: shrinking the
 * header changes page layout/scrollY, which can flip a single threshold
 * back and forth on its own and make the header shake in a feedback loop.
 */
export default function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => (prev ? window.scrollY > 40 : window.scrollY > 80));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}
