import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withAlpha } from '../theme';

function ChevronRight() {
  return (
    <svg className="w-3 h-3 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function FlyoutSubMenu({ items, college, visible }) {
  return (
    <div
      className={`absolute left-full top-0 ml-0.5 z-50 min-w-[240px] transition-all duration-150 ease-out ${visible ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-1 invisible pointer-events-none'}`}
    >
      <div
        className="bg-white shadow-xl py-2"
        style={{
          borderTop: `3px solid ${college.greenAccent}`,
          border: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
          borderTopColor: college.greenAccent,
        }}
      >
        {items.map((sub) => sub.external ? (
          <a
            key={sub.href}
            href={sub.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-type-ui font-display font-medium transition-colors whitespace-nowrap"
            style={{
              color: college.primaryColor,
              borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = college.greenAccent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
          >
            {sub.label} ↗
          </a>
        ) : (
          <Link
            key={sub.href}
            to={sub.href}
            className="flex items-center px-4 py-2 text-type-ui font-display font-medium transition-colors whitespace-nowrap"
            style={{
              color: college.primaryColor,
              borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.08)}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = college.greenAccent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function DropdownItem({ item, college }) {
  const [subOpen, setSubOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSubOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setSubOpen(false), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  if (item.subItems) {
    return (
      <div
        ref={ref}
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <Link
          to={item.href}
          className="flex items-center gap-1 px-4 py-2 text-type-ui font-display font-medium transition-colors whitespace-nowrap"
          style={{
            color: college.primaryColor,
            borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = college.greenAccent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
        >
          {item.label}
          <ChevronRight />
        </Link>
        <FlyoutSubMenu items={item.subItems} college={college} visible={subOpen} />
      </div>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 text-type-ui font-display font-medium transition-colors whitespace-nowrap"
        style={{
          color: college.primaryColor,
          borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = college.greenAccent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
      >
        {item.label} ↗
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className="block px-4 py-2 text-type-ui font-display font-medium transition-colors whitespace-nowrap"
      style={{
        color: college.primaryColor,
        borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = college.greenAccent)}
      onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
    >
      {item.label}
    </Link>
  );
}

function NavItem({ name, href, active, dropdown, college }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isActive = active || (href && location.pathname === href) ||
    (dropdown && dropdown.some((d) => location.pathname.startsWith(d.href?.split('/').slice(0, 2).join('/') || '')));

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const activeStyle = { color: '#F3DAB2' };
  const inactiveStyle = { color: '#ffffff' };

  if (!dropdown) {
    return (
      <Link
        to={href || '/'}
        className="font-display font-semibold text-type-body transition-colors"
        style={isActive ? activeStyle : inactiveStyle}
        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#F3DAB2'; }}
        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#ffffff'; }}
      >
        {name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <div className="flex items-center">
          <Link
            to={href}
            className="font-display font-semibold text-type-body transition-colors py-2"
            style={open || isActive ? activeStyle : inactiveStyle}
            onMouseEnter={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#F3DAB2'; }}
            onMouseLeave={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#ffffff'; }}
          >
            {name}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center pl-1 py-2 transition-colors"
            style={open || isActive ? activeStyle : inactiveStyle}
            onMouseEnter={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#F3DAB2'; }}
            onMouseLeave={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#ffffff'; }}
          >
            <svg
              className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 font-display font-semibold text-type-body transition-colors py-2"
          style={open || isActive ? activeStyle : inactiveStyle}
          onMouseEnter={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#F3DAB2'; }}
          onMouseLeave={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#ffffff'; }}
        >
          {name}
          <svg
            className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      <div
        className={`absolute top-full left-0 pt-2 z-50 min-w-[240px] transition-all duration-200 ease-out ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible pointer-events-none'}`}
      >
        <div
          className="bg-white shadow-xl py-2"
          style={{
            borderTop: `3px solid ${college.greenAccent}`,
            borderLeft: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
            borderRight: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
            borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
          }}
        >
          {dropdown.map((item) => (
            <DropdownItem key={item.label} item={item} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavStrip({ college }) {
  return (
    <div
      className="w-full py-3 sticky top-0 z-40"
      style={{
        backgroundColor: college.primaryColor,
        borderBottom: `1px solid ${withAlpha('#000000', 0.1)}`,
      }}
    >
      <div className="flex justify-center items-center gap-[30px] overflow-visible flex-wrap px-4">
        {college.navLinks.map((link) => (
          <NavItem key={link.name} {...link} college={college} />
        ))}
      </div>
    </div>
  );
}
