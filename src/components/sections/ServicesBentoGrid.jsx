import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CategoryCard from "../ui/CategoryCard";
import SectionHeading from "../ui/SectionHeading";
import { categories, featuredCategoryIds } from "../../data/categories";

const featured = categories.filter((category) => featuredCategoryIds.includes(category.id));
const remainingCount = categories.length - featured.length;

export default function ServicesBentoGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="What We Plan"
        title="Every Kind of Celebration"
        subtitle="From the most traditional rituals to the boldest brand activations — explore a few of the 15+ categories Vivora manages end to end."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}

        <Link
          to="/services"
          className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-plum-900 p-6 text-center text-cream transition hover:bg-plum-800"
        >
          <span className="font-display text-lg font-semibold">
            +{remainingCount} More Categories
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-gold-400">
            View All Services <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
