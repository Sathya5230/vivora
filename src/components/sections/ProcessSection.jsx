import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your story, your guests, and your vision in a detailed consultation.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    tasks: ["Initial Vibe Assessment", "Budget Range Mapping", "Feasibility & Site Research"],
    quote: "The secret of successful events is starting with a clear vision and deep understanding."
  },
  {
    number: "02",
    title: "Design",
    description: "Our team designs the concept, theme, vendors, and timeline around you.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80",
    tasks: ["Custom Moodboards & Themes", "Floor Plan & Layout Drafting", "Vendor Curation & Proposals"],
    quote: "We don't just plan spaces; we orchestrate emotional landmarks through colors and decor."
  },
  {
    number: "03",
    title: "Deliver",
    description: "Every logistic, vendor, and detail is coordinated and confirmed.",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80",
    tasks: ["Vendor Contracts & Coordination", "Hour-by-Hour Master Schedule", "Production Logistics Prep"],
    quote: "Precision timing and airtight operations run in the background so you see only magic."
  },
  {
    number: "04",
    title: "Celebrate",
    description: "On the day, our team manages everything so you can be fully present.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    tasks: ["On-Site Setup Coordination", "Timeline & VIP Flow Supervision", "Post-Event Wrap & Breakdown"],
    quote: "Your only responsibility is to raise a glass and create memories that last forever."
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-transparent px-6 py-24 md:py-32">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          eyebrow="How Vivora Works" 
          title="From First Call to Final Toast" 
          subtitle="An interactive look behind our signature 4-stage event choreography system."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-center">
          
          {/* Left Pane: Steps Interactive Switcher */}
          <div className="md:col-span-6 flex flex-col gap-6 relative">
            {/* Timeline Line element */}
            <div className="absolute left-[2.25rem] top-8 bottom-8 w-0.5 bg-plum-100/60 hidden md:block" />

            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex items-start gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "bg-white shadow-xl shadow-purple-900/5 border border-purple-100/50 translate-x-2" 
                      : "hover:bg-white/40 hover:translate-x-1"
                  }`}
                >
                  {/* Step Badge */}
                  <div className="relative flex-shrink-0 z-10">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-black transition-all duration-300 ${
                      isActive 
                        ? "bg-purple-600 text-white scale-110 shadow-lg shadow-purple-600/20" 
                        : "bg-purple-100 text-purple-600 group-hover:bg-purple-200"
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Step Description */}
                  <div className="flex-grow pt-0.5">
                    <h3 className={`font-display text-lg font-bold transition-colors ${
                      isActive ? "text-purple-600" : "text-slate-800"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600/90 leading-relaxed max-w-md">
                      {step.description}
                    </p>

                    {/* Expandable tasks list on active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-purple-50 flex flex-col gap-2"
                        >
                          {step.tasks.map((task) => (
                            <span key={task} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                                <Check size={10} strokeWidth={3} />
                              </span>
                              {task}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Pane: Visual Showcase */}
          <div className="md:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-purple-900/5 border border-purple-100/30"
              >
                {/* Visual Image container with glow */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-purple-100/50">
                  <img
                    src={steps[activeStep].img}
                    alt={steps[activeStep].title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold tracking-wider text-white uppercase">
                    Stage {steps[activeStep].number}
                  </span>
                </div>

                {/* Quote details */}
                <div className="mt-6 border-l-2 border-purple-400 pl-4 italic text-sm text-slate-600/90 leading-relaxed font-sans">
                  "{steps[activeStep].quote}"
                </div>

                {/* Mini bottom progress meter */}
                <div className="mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>Progress Stage</span>
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                          i === activeStep ? "bg-purple-600 w-10" : "bg-purple-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
