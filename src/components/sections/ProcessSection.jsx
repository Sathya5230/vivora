import ProcessStep from "../ui/ProcessStep";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { Squiggle } from "../ui/Doodles";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your story, your guests, and your vision in a detailed consultation.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team designs the concept, theme, vendors, and timeline around you.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Every logistic, vendor, and detail is coordinated and confirmed.",
  },
  {
    number: "04",
    title: "Celebrate",
    description: "On the day, our team manages everything so you can be fully present.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-plum-50 px-6 py-24">
      <Squiggle className="animate-float-slow absolute right-10 top-10 hidden h-6 w-20 text-gold-400/50 sm:block" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How Vivora Works" title="From First Call to Final Toast" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <ProcessStep {...step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
