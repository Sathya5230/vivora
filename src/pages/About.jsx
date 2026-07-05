import { useEffect } from "react";
import { Sparkles, ShieldCheck, Palette, HeartHandshake } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import ProcessSection from "../components/sections/ProcessSection";
import CtaBanner from "../components/ui/CtaBanner";
import Reveal from "../components/ui/Reveal";
import { Sparkle, Swirl } from "../components/ui/Doodles";

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
      <section className="relative overflow-hidden px-6 pb-24 pt-16">
        <Sparkle className="animate-float absolute left-10 top-6 h-8 w-8 text-gold-400/70" />
        <Swirl className="animate-float-slow absolute right-12 top-16 h-10 w-16 rotate-12 text-plum-300/60" />
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading
            eyebrow="About Vivora"
            title="Full-Spectrum Event Management, One Team"
            subtitle="Vivora was built on a simple idea: every occasion, from a first-birthday party to a multi-day destination wedding, deserves the same level of care, creativity, and precision. We plan, design, and deliver events across 15+ categories — so you never need a different vendor for a different kind of celebration."
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why Vivora" title="What Makes Us Different" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-plum-100 text-plum-700">
                    <value.icon size={20} />
                  </span>
                  <p className="mt-5 font-display text-lg font-bold text-plum-900">
                    {value.title}
                  </p>
                  <p className="mt-2 text-sm text-plum-700/70">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Team Behind Vivora" title="Who You'll Work With" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamCapabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-plum-100 bg-white p-6">
                  <p className="font-display text-lg font-bold text-plum-900">
                    {capability.title}
                  </p>
                  <p className="mt-2 text-sm text-plum-700/70">{capability.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
