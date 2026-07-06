import { motion } from "framer-motion";

// Hand-drawn Crown SVG with wobbly outlines and semi-transparent fill
function HandDrawnCrown({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Crown translucent fill */}
      <path
        d="M 20,70 
           C 25,60 22,48 24,38 
           C 27,38 31,44 34,48 
           C 38,40 42,28 46,18 
           C 50,22 53,28 56,36 
           C 61,28 66,20 70,12 
           C 74,20 78,28 82,36 
           C 86,28 90,20 94,14 
           C 97,25 99,35 101,48 
           C 95,50 88,48 82,45
           C 70,55 50,65 20,70 Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="none"
      />
      {/* Primary outline */}
      <path
        d="M 20,70 
           C 18,58 19,45 22,35 
           C 25,35 28,40 31,45 
           C 36,36 40,25 44,15 
           C 48,20 51,28 54,35 
           C 59,26 63,16 67,8 
           C 71,16 75,26 79,35 
           C 83,26 87,16 91,10 
           C 95,22 97,35 99,48 
           C 90,50 82,48 76,44
           C 64,55 45,65 20,70 Z"
      />
      {/* Double wobbly baseline */}
      <path
        d="M 18,73 C 45,78 75,76 98,71"
        strokeWidth="1.8"
        className="opacity-80"
      />
      {/* Peak tip circles */}
      <circle cx="22" cy="35" r="3" fill="currentColor" />
      <circle cx="44" cy="15" r="3" fill="currentColor" />
      <circle cx="67" cy="8" r="3" fill="currentColor" />
      <circle cx="79" cy="35" r="3" fill="currentColor" />
      <circle cx="91" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

// Hand-drawn Looping Curly Arrow SVG
function HandDrawnLoopingArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Spiraling curly loop path */}
      <path
        d="M 20,30 
           C 40,15 65,15 60,35 
           C 55,50 35,50 45,30 
           C 55,10 90,15 85,45 
           C 80,65 55,65 65,45
           C 75,25 110,35 102,65
           C 98,80 88,90 92,100"
      />
      {/* Arrowhead */}
      <path
        d="M 82,92 L 92,100 L 102,90"
        strokeWidth="2.8"
      />
      {/* Sketchy secondary helper stroke */}
      <path
        d="M 22,28 C 38,16 61,17 58,33 C 54,46 38,46 47,32 C 54,14 86,17 82,43 C 78,59 58,59 67,47"
        strokeWidth="1.2"
        className="opacity-50"
      />
    </svg>
  );
}

// Sparkles / Star Cluster
function HandDrawnStars({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Main wobbly 4-point star */}
      <path
        d="M 50,12 
           C 52,32 62,42 82,45 
           C 62,48 52,58 50,78 
           C 48,58 38,48 18,45 
           C 38,42 48,32 50,12 Z"
      />
      {/* Secondary outline for sketchy effect */}
      <path
        d="M 50,18 C 51,34 59,42 75,45 C 59,48 51,56 50,72 C 49,56 41,48 25,45 C 41,42 49,34 50,18 Z"
        strokeWidth="1.2"
        className="opacity-65"
      />
      {/* Tiny companion star */}
      <path
        d="M 76,22 C 77,28 80,31 86,32 C 80,33 77,36 76,42 C 75,36 72,33 66,32 C 72,31 75,28 76,22 Z"
        strokeWidth="1.5"
      />
      {/* Tiny companion star 2 */}
      <path
        d="M 24,58 C 25,62 27,64 31,65 C 27,66 25,68 24,72 C 23,68 21,66 17,65 C 21,64 23,62 24,58 Z"
        strokeWidth="1.2"
        className="opacity-80"
      />
      {/* Accent dots */}
      <circle cx="82" cy="58" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="24" r="1" fill="currentColor" stroke="none" />
      <circle cx="48" cy="85" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Flower Blossom Doodle
function HandDrawnFlower({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Center wobbly circle */}
      <path d="M 37,40 C 37,38 39,36 41,36 C 43,36 45,38 45,40 C 45,42 43,44 41,44 C 39,44 37,42 37,40 Z" />
      {/* Petals */}
      <path d="M 41,36 C 41,25 31,25 35,36" />
      <path d="M 45,38 C 55,32 58,42 45,41" />
      <path d="M 43,44 C 49,54 39,56 41,44" />
      <path d="M 37,42 C 27,47 25,37 37,39" />
      <path d="M 38,37 C 32,29 42,26 40,36" />
      {/* Sketchy double strokes */}
      <path d="M 40,35 C 39,27 33,27 36,35" strokeWidth="1" className="opacity-60" />
      <path d="M 44,39 C 52,34 54,41 44,40" strokeWidth="1" className="opacity-60" />
    </svg>
  );
}

// Radial Burst Doodles
function HandDrawnBurst({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 50"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M 15,35 Q 20,20 23,10" />
      <path d="M 30,38 Q 30,22 30,8" />
      <path d="M 45,35 Q 40,20 37,10" />
    </svg>
  );
}

export default function CreativeBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-lavender-canvas select-none pointer-events-none">
      {/* Slow Rotating Fluid Blobs */}
      <motion.div
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[650px] w-[650px] rounded-full bg-lavender-blob/85 blur-[90px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] -right-40 h-[600px] w-[600px] rounded-full bg-white/45 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 45, -20, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-lavender-blob/90 blur-[85px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, -25, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[8%] -left-20 h-[450px] w-[450px] rounded-full bg-white/35 blur-[75px]"
      />

      {/* Hand-drawn Doodles matching reference layout */}

      {/* 1. Crown - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: -22 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute left-[7%] top-[13%] text-plum-400 fill-plum-200/50 w-28 h-28 md:w-36 md:h-36"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnCrown className="w-full h-full drop-shadow-sm" />
        </motion.div>
      </motion.div>

      {/* 2. Looping Curly Arrow - Right Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: -5 }}
        transition={{ duration: 0.9, delay: 0.1, type: "spring" }}
        className="absolute right-[10%] top-[23%] text-white w-36 h-32 md:w-48 md:h-40"
      >
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnLoopingArrow className="w-full h-full drop-shadow-sm" />
        </motion.div>
      </motion.div>

      {/* 3. Radial Bursts - Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-[47%] top-[7%] text-white/90 w-16 h-14 md:w-20 md:h-18"
      >
        <HandDrawnBurst className="w-full h-full" />
      </motion.div>

      {/* 4. Sparkles/Stars Cluster - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-[26%] top-[9%] text-white/95 w-16 h-16 md:w-20 md:h-20"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnStars className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* 5. Sparkles/Stars Cluster 2 - Near Crown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute left-[18%] top-[28%] text-white w-20 h-20 md:w-24 md:h-24"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnStars className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* 6. Sparkles/Stars Cluster 3 - Center Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-[34%] top-[44%] text-white w-14 h-14 md:w-16 md:h-16"
      >
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnStars className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* 7. Flower Doodle 1 - Left Edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-[15%] top-[58%] text-white w-12 h-12 md:w-14 md:h-14"
      >
        <motion.div
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnFlower className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* 8. Flower Doodle 2 - Right Edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="absolute right-[16%] top-[55%] text-white w-12 h-12 md:w-14 md:h-14"
      >
        <motion.div
          animate={{ rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <HandDrawnFlower className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* 9. Flower Doodle 3 - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute left-[22%] top-[70%] text-white w-10 h-10 md:w-12 md:h-12"
      >
        <HandDrawnFlower className="w-full h-full" />
      </motion.div>

      {/* 10. Flower Doodle 4 - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="absolute right-[24%] top-[72%] text-white w-10 h-10 md:w-12 md:h-12"
      >
        <HandDrawnFlower className="w-full h-full" />
      </motion.div>
    </div>
  );
}
