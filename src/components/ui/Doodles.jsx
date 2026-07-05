export function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20,5 C21,14 26,19 36,20 C26,21 21,26 20,36 C19,26 14,21 4,20 C14,19 19,14 20,5 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Swirl({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M10,22 C12,12 22,9 28,15 C34,21 28,31 20,27 C12,23 15,12 25,15 C35,18 42,9 50,12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M10,35 C15,15 28,10 35,20 C42,30 35,45 25,40 C15,35 20,20 32,25 C45,30 52,15 62,20 C72,25 72,42 60,42 C50,42 48,30 58,25 C68,20 80,25 90,38"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export { Swirl as LoopDoodle };
