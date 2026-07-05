export function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2c1 6 3 11 8 13-5 2-7 7-8 13-1-6-3-11-8-13 5-2 7-7 8-13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Swirl({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20c0-9 7-16 16-16s14 6 12 14-10 10-16 6 0-14 8-14 10 6 8 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 80 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 10c6-8 12 8 18 0s12-8 18 0 12 8 18 0 12-8 18 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
