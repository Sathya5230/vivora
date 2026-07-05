import Marquee from "../ui/Marquee";
import { categories } from "../../data/categories";

const marqueeItems = categories.map((category) => `${category.emoji} ${category.name}`);

const imagePreviews = [
  { name: "Weddings", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150&q=80" },
  { name: "Concerts", img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=150&q=80" },
  { name: "Corporate Meetings", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=150&q=80" },
  { name: "Anniversaries", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=150&q=80" },
  { name: "Galas", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=150&q=80" },
  { name: "Tastings", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=150&q=80" },
  { name: "Tournaments", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=150&q=80" },
];

export default function CategoryMarquee() {
  return (
    <section className="relative overflow-hidden bg-plum-900 text-gold-400 py-4 flex flex-col gap-2">
      {/* Track 1: Text categories scrolling Left */}
      <Marquee items={marqueeItems} />

      {/* Track 2: Floating mini circular event preview cards scrolling Right */}
      <div className="overflow-hidden border-t border-plum-800/50 pt-2">
        <div className="flex w-max animate-marquee-reverse items-center py-2">
          {[...imagePreviews, ...imagePreviews].map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex items-center mx-6 bg-plum-800/40 rounded-full pl-2 pr-4 py-1.5 border border-plum-700/30 hover:scale-105 hover:bg-plum-800/80 transition-all duration-300">
              <img
                src={item.img}
                alt={item.name}
                className="h-8 w-8 rounded-full object-cover mr-3 ring-2 ring-gold-400/30"
              />
              <span className="font-mono text-xs uppercase tracking-wider text-cream font-semibold whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
