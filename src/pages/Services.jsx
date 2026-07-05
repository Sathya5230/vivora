import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import AccordionCategory from "../components/ui/AccordionCategory";
import CtaBanner from "../components/ui/CtaBanner";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { Sparkle, Swirl } from "../components/ui/Doodles";
import { categories } from "../data/categories";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Services | Vivora";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-16 text-center">
        <Sparkle className="animate-float absolute right-10 top-8 h-8 w-8 text-gold-400/70" />
        <Swirl className="animate-float-slow absolute left-10 top-16 h-10 w-16 -rotate-12 text-plum-300/60" />
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Our Services"
            title="Every Celebration, Perfectly Planned"
            subtitle="Browse all 15 categories and 100+ event types Vivora manages end to end. Search to find exactly what you need."
          />

          <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-full border border-plum-200 bg-white px-5 py-3">
            <Search size={18} className="text-plum-700/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search event types, e.g. 'Mehendi'"
              className="w-full bg-transparent text-sm text-plum-900 outline-none placeholder:text-plum-700/40"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={Math.min(index * 0.04, 0.3)}>
              <AccordionCategory
                category={category}
                index={index}
                defaultOpen={index === 0}
                searchTerm={searchTerm}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Don't See Your Event Listed?"
        subtitle="If it can be celebrated, Vivora can plan it. Tell us what you have in mind."
      />
    </>
  );
}
