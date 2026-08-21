import { useThemeVersion } from '../ThemeVersionContext';

export default function ThemeVersionToggle() {
  const { version, setVersion } = useThemeVersion();

  return (
    <div
      className="fixed top-3 right-3 z-[9999] flex items-center gap-1 rounded-full p-1 shadow-lg border"
      style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderColor: 'rgba(0,0,0,0.08)',
        backdropFilter: 'blur(6px)',
      }}
      role="group"
      aria-label="Website color version"
    >
      {['v1', 'v2'].map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => setVersion(v)}
          aria-pressed={version === v}
          className="font-display text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1.5 transition-colors duration-150"
          style={{
            backgroundColor: version === v ? 'var(--maroon, #C72235)' : 'transparent',
            color: version === v ? '#ffffff' : '#444444',
          }}
        >
          {v === 'v1' ? 'Version 1' : 'Version 2'}
        </button>
      ))}
    </div>
  );
}
