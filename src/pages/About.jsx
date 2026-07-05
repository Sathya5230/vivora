import { useEffect } from "react";
import { Sparkles, ShieldCheck, Palette, HeartHandshake } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import ProcessSection from "../components/sections/ProcessSection";
import CtaBanner from "../components/ui/CtaBanner";

const values = [
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Every event is designed around your story, not a template.",
  },
  {
    icon: ShieldCheck,
    title: "Precision",
    description: "Timelines, vendors, and logistics tracked down to the minute.",
  },
  {
    icon: Palette,
    title: "Personalization",
    description: "From color palette to playlist, every detail reflects you.",
  },
  {
    icon: HeartHandshake,
    title: "Reliability",
    description: "On the day, our team handles everything so you don't have to.",
  },
];

const teamCapabilities = [
  {
    title: "Lead Planners",
    description: "Own your event end to end, from first call to final toast.",
  },
  {
    title: "Design Team",
    description: "Craft the look, feel, and theme of every celebration.",
  },
  {
    title: "Vendor Network",
    description: "Vetted caterers, venues, photographers, and performers.",
  },
  {
    title: "Day-of Coordinators",
    description: "On-site management so you can be fully present.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About | Vivora";
  }, []);

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 text-center">
        <SectionHeading
          eyebrow="About Vivora"
          title="Full-Spectrum Event Management, One Team"
          subtitle="Vivora was built on a simple idea: every occasion, from a first-birthday party to a multi-day destination wedding, deserves the same level of care, creativity, and precision. We plan, design, and deliver events across 15+ categories — so you never need a different vendor for a different kind of celebration."
        />
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why Vivora" title="What Makes Us Different" />
          <div className="mt-14 grid gap-px overflow-hidden border border-plum-900/15 bg-plum-900/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={value.title} className="flex flex-col justify-between bg-cream p-6">
                <span className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-plum-700/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <value.icon size={20} className="text-plum-700" />
                </span>
                <div className="mt-10">
                  <p className="font-display text-xl font-bold text-plum-900">{value.title}</p>
                  <p className="mt-2 text-sm text-plum-700/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="bg-plum-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Team Behind Vivora" title="Who You'll Work With" />
          <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {teamCapabilities.map((capability) => (
              <div key={capability.title} className="border-l-2 border-gold-400 pl-6">
                <p className="font-display text-xl font-bold text-plum-900">
                  {capability.title}
                </p>
                <p className="mt-2 text-sm text-plum-700/70">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
