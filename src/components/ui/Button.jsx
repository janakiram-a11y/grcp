/**
 * Button — unified button component
 *
 * Variants:
 *   primary    → red solid       (default)
 *   ghost      → red outline     (secondary action on light bg)
 *   ghost-white→ white outline   (secondary on dark/green bg)
 *   green      → brand green     (positive/brand action)
 *   download   → compact red     (file download rows)
 *   icon       → circular icon   (social, search, close)
 *
 * Sizes: sm | md (default) | lg
 *
 * Usage:
 *   <Button>Apply Now</Button>
 *   <Button variant="ghost">Learn More</Button>
 *   <Button variant="ghost-white" size="lg">Explore Programs</Button>
 *   <Button variant="green" as="a" href="/admissions">Register</Button>
 *   <Button variant="download" as="a" href="/file.pdf">Download</Button>
 *   <Button variant="icon" aria-label="Search"><SearchIcon /></Button>
 */

import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const variantClass = {
  primary:      'btn-red',
  ghost:        'btn-ghost',
  'ghost-white':'btn-ghost-white',
  green:        'btn-brand',
  download:     'btn-download',
  icon:         'btn-icon',
};

const sizeClass = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

const Button = forwardRef(function Button(
  {
    as,
    to,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  },
  ref
) {
  const cls = [
    variantClass[variant] ?? 'btn-red',
    sizeClass[size] ?? '',
    className,
  ].filter(Boolean).join(' ');

  /* React Router Link */
  if (to) {
    return <Link ref={ref} to={to} className={cls} {...rest}>{children}</Link>;
  }

  /* Plain anchor */
  if (href || as === 'a') {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  /* Default: button element */
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
});

export default Button;
