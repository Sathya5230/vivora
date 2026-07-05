export function DoodleStar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Primary hand-drawn outline */}
      <path d="M 50,8 C 53,32 68,47 92,50 C 68,53 53,68 50,92 C 47,68 32,53 8,50 C 32,47 47,32 50,8 Z" />
      {/* Sketchy second inner contour for hand-drawn feel */}
      <path
        d="M 50,16 C 52,36 64,48 84,50 C 64,52 52,64 50,84 C 48,64 36,52 16,50 C 36,48 48,36 50,16 Z"
        strokeWidth="1.5"
        className="opacity-70"
      />
    </svg>
  );
}

export function DoodleSwirl({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Hand-drawn spiral scroll track */}
      <path d="M 10,40 C 18,25 28,20 34,28 C 38,34 32,44 26,42 C 20,39 22,28 30,23 C 38,18 48,20 54,28 C 58,34 52,44 46,42 C 40,39 42,28 50,23 C 58,18 68,20 74,28 C 78,34 72,44 66,42 C 60,39 62,28 70,23 C 80,18 90,25 98,35 C 104,42 112,40 115,35" />
      {/* Dual sketchy stroke */}
      <path 
        d="M 12,38 C 19,26 27,22 32,29 C 35,33 31,41 27,40 C 23,38 24,30 30,26 C 36,22 45,23 50,29" 
        strokeWidth="1.2"
        className="opacity-60" 
      />
    </svg>
  );
}

export function DoodleLoop({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Vertical sketchy loop path */}
      <path d="M 10,50 C 20,25 30,20 38,30 C 44,40 34,55 26,50 C 18,45 24,30 34,25 C 44,20 54,23 60,33 C 64,43 54,58 46,53 C 38,48 44,33 54,28 C 64,23 74,26 80,36 C 84,46 74,61 66,56 C 58,51 64,36 74,31 C 84,26 92,32 95,40" />
      <path 
        d="M 12,48 C 21,27 29,22 36,31 C 41,38 33,51 27,48 C 21,44 26,32 34,28 C 42,24 50,26 55,34" 
        strokeWidth="1.2"
        className="opacity-60" 
      />
    </svg>
  );
}
