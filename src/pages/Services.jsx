import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import AccordionCategory from "../components/ui/AccordionCategory";
import CtaBanner from "../components/ui/CtaBanner";
import SectionHeading from "../components/ui/SectionHeading";
import { categories } from "../data/categories";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Services | Vivora";
  }, []);

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-16 text-center">
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
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <AccordionCategory
              key={category.id}
              category={category}
              index={index}
              defaultOpen={index === 0}
              searchTerm={searchTerm}
            />
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
