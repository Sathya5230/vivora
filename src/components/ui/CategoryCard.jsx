import { Link } from "react-router-dom";

export default function CategoryCard({ category, index, wide = false }) {
  const Icon = category.icon;

  return (
    <Link
      to="/services"
      className={`group relative flex flex-col justify-between bg-cream p-6 transition-colors duration-300 hover:bg-plum-900 ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-plum-700/40 group-hover:text-gold-400">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon
          size={20}
          className="text-plum-700 transition-colors group-hover:text-gold-400"
        />
      </div>
      <div className="mt-10">
        <p className="font-display text-xl font-bold text-plum-900 transition-colors group-hover:text-cream">
          {category.name}
        </p>
        <p className="mt-2 text-sm text-plum-700/70 transition-colors group-hover:text-cream/70">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
