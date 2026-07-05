import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltImage({ src, caption, ratio }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 700, aspectRatio: ratio }}
      className="group relative mb-4 overflow-hidden rounded-[1.75rem] break-inside-avoid shadow-sm"
    >
      <img
        src={src}
        alt={caption}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum-900/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-cream">{caption}</span>
      </div>
    </motion.div>
  );
}
