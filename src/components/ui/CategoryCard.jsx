import { Link } from "react-router-dom";

export default function CategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <Link
      to="/services"
      className="group flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-plum-100 text-plum-700 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-plum-700 group-hover:text-cream">
          <Icon size={20} />
        </span>
        <span className="font-mono text-xs tracking-[0.2em] text-plum-700/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-8">
        <p className="font-display text-xl font-bold text-plum-900">{category.name}</p>
        <p className="mt-2 text-sm text-plum-700/70">{category.description}</p>
      </div>
    </Link>
  );
}
