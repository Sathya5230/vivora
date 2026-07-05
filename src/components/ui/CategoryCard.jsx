import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <Link
      to="/services"
      className="group rounded-2xl border border-plum-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-100 text-plum-700 transition-colors group-hover:bg-plum-700 group-hover:text-cream">
        <Icon size={22} />
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-plum-900">
        {category.emoji} {category.name}
      </p>
      <p className="mt-2 text-sm text-plum-700/70">{category.description}</p>
    </Link>
  );
}
