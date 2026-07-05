import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categoryImages = {
  "wedding-events": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  "corporate-events": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
  "private-celebrations": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
  "entertainment-events": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80",
  "cultural-community-events": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
  "destination-luxury-events": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "religious-events": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80",
  "seasonal-holiday-events": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
};

export default function CategoryCard({ category, index }) {
  const Icon = category.icon;
  const bgImg = categoryImages[category.id] || "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80";

  return (
    <Link
      to="/services"
      className="group relative flex h-72 flex-col justify-between overflow-hidden rounded-[2rem] p-6 text-white shadow-xl shadow-purple-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(148,58,125,0.25)] border border-purple-100/10"
    >
      {/* Background Image with scale transition */}
      <img
        src={bgImg}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Rich overlay gradient for visual contrast and color grading */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-950/90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90" />

      {/* Floating accent background glow that follows group-hover */}
      <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(148,58,125,0.15)_0%,transparent_50%)] pointer-events-none" />

      {/* Relative elements on top */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-500">
          <Icon size={20} />
        </span>
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-cream/40 group-hover:text-cream/80 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-10 mt-auto">
        <p className="font-display text-2xl font-black tracking-tight text-white group-hover:text-gold-300 transition-colors duration-300">
          {category.name}
        </p>
        <p className="mt-2 text-sm text-cream/85 leading-relaxed font-sans line-clamp-2 transition-all duration-300 group-hover:text-white">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
