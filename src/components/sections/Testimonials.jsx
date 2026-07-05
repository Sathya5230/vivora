import TestimonialCard from "../ui/TestimonialCard";
import SectionHeading from "../ui/SectionHeading";

// Placeholder testimonials — replace with real client quotes before launch.
const testimonials = [
  {
    quote:
      "Vivora handled every detail of our wedding weekend. We didn't worry about a single thing.",
    name: "Priya S.",
    eventType: "Destination Wedding",
  },
  {
    quote: "Our product launch felt like a Broadway show. The team executed flawlessly.",
    name: "Daniel K.",
    eventType: "Corporate Product Launch",
  },
  {
    quote:
      "From the Mehendi to the reception, every function felt personal and stress-free.",
    name: "Ananya R.",
    eventType: "Traditional Wedding Functions",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Client Love" title="What Our Clients Say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
