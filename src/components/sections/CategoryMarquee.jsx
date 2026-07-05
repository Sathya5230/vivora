import Marquee from "../ui/Marquee";
import { categories } from "../../data/categories";

const marqueeItems = categories.map((category) => `${category.emoji} ${category.name}`);

export default function CategoryMarquee() {
  return (
    <section className="bg-plum-900 text-gold-400">
      <Marquee items={marqueeItems} />
    </section>
  );
}
