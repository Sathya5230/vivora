import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, Palette, Compass, ArrowRight, ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const vibes = [
  { id: "elegant", name: "Elegant & Classic", icon: Palette, emoji: "💍", desc: "A timeless, refined aesthetic with soft lighting, florals, and sophisticated styling." },
  { id: "tech", name: "Modern & Tech-Forward", icon: Compass, emoji: "🏢", desc: "Futuristic glow, neon accents, holographic features, and crisp digital integrations." },
  { id: "festival", name: "Festivals & High-Energy", icon: Sparkles, emoji: "🎵", desc: "Vibrant laser lines, high-impact sound setups, custom stages, and absolute energy." },
  { id: "cozy", name: "Intimate & Acoustic", icon: Users, emoji: "🏡", desc: "Fairy-light ceilings, warm wood tones, rustic detailing, and a deeply personal vibe." }
];

const sizes = [
  { id: "small", name: "Intimate (< 50 guests)", desc: "Focused on details, deep conversations, and cozy guest interaction." },
  { id: "medium", name: "Grand (50 - 200 guests)", desc: "Balanced scale, beautiful flow, and professional hosting." },
  { id: "large", name: "Mega (200+ guests)", desc: "Massive coordinates, high production values, and unforgettable scale." }
];

// Mapping combinations to rich visualization images and checklists
const configMatrix = {
  "elegant-small": {
    img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80",
    name: "Petite Luxe Gathering",
    checklist: ["Hand-written bespoke menu cards", "Intimate single-source candle lighting", "Classical string duo coordination"],
    quote: "A perfect choice for close family circles. Elegant details shine brightest when scaled down."
  },
  "elegant-medium": {
    img: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=600&q=80",
    name: "Classic Sophistication Gala",
    checklist: ["Master floral designer coordination", "Staggered 3-course fine dining timeline", "Curated wine & champagne pairing"],
    quote: "The gold standard of events. Clean geometry and classic styling coordinate seamlessly."
  },
  "elegant-large": {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    name: "Grand Ballroom Symphony",
    checklist: ["Large-scale drape styling mapping", "Custom stage design & master timeline", "VIP host & security logistics coordination"],
    quote: "A breathtaking display of scale. We orchestrate large venues to maintain intimacy despite massive numbers."
  },
  "tech-small": {
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    name: "Innovators Boardroom",
    checklist: ["Interactive smart screen setups", "Ambient purple laser light accents", "Acoustic layout optimization"],
    quote: "Perfect for networking and modern panels. Clean lines, fast tech, and crisp execution."
  },
  "tech-medium": {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    name: "Digital Nexus Launch",
    checklist: ["LED screen mainstage mapping", "Dynamic spatial sound systems", "Holographic visual coordination"],
    quote: "Unleash technology to spark connection. An interactive, lively ecosystem built around your audience."
  },
  "tech-large": {
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    name: "Mega Summit Mainstage",
    checklist: ["Multi-venue livestream syncing", "Heavy power & backup infrastructure", "Interactive custom attendee app integration"],
    quote: "Maximum production values. We manage massive bandwidth and complex tech plans flawlessly."
  },
  "festival-small": {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    name: "Cozy Acoustic Session",
    checklist: ["Single dynamic laser line design", "Cozy high-top standing layouts", "Bespoke signature street-food bar"],
    quote: "Deeply energetic yet close. A private DJ set or unplugged acoustic performance setup."
  },
  "festival-medium": {
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    name: "Vibrant Arena Showcase",
    checklist: ["Laser show custom choreography", "Curated foodtruck park integration", "Multiple-source audio syncing"],
    quote: "A lively sensory event. We design visual and audio elements to guide your crowd seamlessly."
  },
  "festival-large": {
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    name: "Epic Stage Festival",
    checklist: ["Heavy structural stage certification", "Crowd safety & entry flow plans", "Immersive fireworks/SFX integration"],
    quote: "The ultimate celebration. Complex logistics, heavy rigging, and massive sound setups orchestrated start to finish."
  },
  "cozy-small": {
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
    name: "Backyard Fairy Haven",
    checklist: ["Bespoke wooden table setup", "Warm overhead fairy lights layout", "Local acoustic singer tracking"],
    quote: "Our absolute favorite. Deeply personal, warm, and highly curated to tell your direct story."
  },
  "cozy-medium": {
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    name: "Rustic Loft Gathering",
    checklist: ["Custom warm lighting layout", "Cocktail bar & lounge configurations", "Foliage & dry grass styling"],
    quote: "Warm, cozy, and highly social. A loft or barn styled to feel like a massive comfortable living room."
  },
  "cozy-large": {
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80",
    name: "Grand Hearth Celebration",
    checklist: ["Large-scale custom lighting grids", "Multi-lounge spatial planning", "Bespoke catering & food station tracks"],
    quote: "A massive cozy celebration. We maintain a warm, friendly ambiance even in the largest spaces."
  }
};

const previewImages = {
  elegant: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80",
  tech: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80",
  festival: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
  cozy: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80"
};

const sizePreviewImages = {
  small: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80",
  medium: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80",
  large: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80"
};

export default function VibeConfigurator() {
  const [step, setStep] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState(vibes[0].id);
  const [selectedSize, setSelectedSize] = useState(sizes[1].id);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleReset = () => {
    setSelectedVibe(vibes[0].id);
    setSelectedSize(sizes[1].id);
    setStep(1);
  };

  const key = `${selectedVibe}-${selectedSize}`;
  const config = configMatrix[key];

  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/70 via-slate-950 to-black text-cream py-24 md:py-32">
      {/* Background glowing lines and blobs */}
      <div className="absolute top-0 right-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Floating Custom Hand-Drawn Doodle Assets */}
        <img
          src="/doodle_star.png"
          alt=""
          className="animate-float absolute -left-10 -top-12 h-16 w-16 select-none pointer-events-none opacity-40"
          aria-hidden="true"
        />
        <img
          src="/doodle_loop.png"
          alt=""
          className="animate-float-slow absolute -right-10 -bottom-10 h-20 w-20 select-none pointer-events-none rotate-45 opacity-40"
          aria-hidden="true"
        />
        <img
          src="/doodle_swirl.png"
          alt=""
          className="animate-float absolute right-10 -top-8 h-16 w-16 select-none pointer-events-none opacity-30"
          aria-hidden="true"
        />

        {/* Header content */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
            Interactive Configurator
          </span>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl uppercase">
            Design Your <span className="text-gradient">Event Vibe</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-cream/70 leading-relaxed">
            Select your aesthetic preferences and event size to instantly visualize your bespoke planning guidelines.
          </p>
        </div>

        {/* Outer step container with premium frosted glassmorphism styling */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/[0.08] relative overflow-hidden">
          
          {/* Top Progress Track */}
          <div className="flex items-center justify-between mb-12 text-xs font-mono uppercase tracking-wider border-b border-white/5 pb-6">
            <span className={step >= 1 ? "text-purple-400 font-extrabold tracking-widest" : "text-cream/30"}>01. Choose Vibe</span>
            <span className={`h-px flex-grow mx-4 transition-colors ${step >= 2 ? 'bg-purple-500/40' : 'bg-white/5'}`} />
            <span className={step >= 2 ? "text-purple-400 font-extrabold tracking-widest" : "text-cream/30"}>02. Set Scale</span>
            <span className={`h-px flex-grow mx-4 transition-colors ${step === 3 ? 'bg-purple-500/40' : 'bg-white/5'}`} />
            <span className={step === 3 ? "text-purple-400 font-extrabold tracking-widest" : "text-cream/30"}>03. Visualizer</span>
          </div>

          <AnimatePresence mode="wait">
            
            {/* STEP 1: CHOOSE AESTHETIC VIBE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-10 md:grid-cols-2 items-center"
              >
                <div className="flex flex-col justify-center gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-black text-white sm:text-3xl leading-tight">
                      What is the energy of your event?
                    </h3>
                    <p className="mt-3 text-sm text-cream/70 leading-relaxed">
                      Select a style layout. Our design system scales custom elements to represent these core vibe profiles.
                    </p>
                  </div>
                  
                  {/* Current Selection details upgraded with a beautiful LIVE BACKGROUND PHOTO preview */}
                  <div className="relative overflow-hidden rounded-[2rem] h-64 w-full shadow-2xl border border-white/10 flex flex-col justify-end p-6 group max-w-sm hidden md:flex">
                    <img
                      src={previewImages[selectedVibe]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-3xl mb-1.5 block">
                        {vibes.find(v => v.id === selectedVibe)?.emoji}
                      </span>
                      <h4 className="font-display text-lg font-bold text-white tracking-tight">
                        {vibes.find(v => v.id === selectedVibe)?.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-cream/70 leading-normal font-sans line-clamp-2">
                        {vibes.find(v => v.id === selectedVibe)?.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {vibes.map((v) => {
                    const isSel = v.id === selectedVibe;
                    return (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVibe(v.id)}
                        className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-start gap-4 ${
                          isSel 
                            ? "bg-purple-600/15 border-purple-500/80 shadow-[0_0_30px_rgba(148,58,125,0.15)] scale-[1.02] text-white" 
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                        }`}
                      >
                        <span className="text-2xl mt-0.5">{v.emoji}</span>
                        <div>
                          <h4 className={`font-display font-bold text-base transition-colors ${isSel ? "text-purple-300" : "text-white"}`}>{v.name}</h4>
                          <p className="mt-1 text-xs text-cream/70 leading-relaxed">{v.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: CHOOSE SIZE SCALE */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-10 md:grid-cols-2 items-center"
              >
                <div className="flex flex-col justify-center gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-black text-white sm:text-3xl leading-tight">
                      What is the scale of the gathering?
                    </h3>
                    <p className="mt-3 text-sm text-cream/70 leading-relaxed">
                      Guest numbers change lighting, structural power, security configurations, and layout styles.
                    </p>
                  </div>

                  {/* Size Preview Image Cover */}
                  <div className="relative overflow-hidden rounded-[2rem] h-64 w-full shadow-2xl border border-white/10 flex flex-col justify-end p-6 group max-w-sm hidden md:flex">
                    <img
                      src={sizePreviewImages[selectedSize]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-3xl mb-1.5 block">👥</span>
                      <h4 className="font-display text-lg font-bold text-white tracking-tight">
                        {sizes.find(s => s.id === selectedSize)?.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-cream/70 leading-normal font-sans line-clamp-2">
                        {sizes.find(s => s.id === selectedSize)?.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 justify-center">
                  {sizes.map((s) => {
                    const isSel = s.id === selectedSize;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                          isSel 
                            ? "bg-purple-600/15 border-purple-500/80 shadow-[0_0_30px_rgba(148,58,125,0.15)] scale-[1.02] text-white" 
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                        }`}
                      >
                        <h4 className={`font-display font-bold text-lg transition-colors ${isSel ? "text-purple-300" : "text-white"}`}>{s.name}</h4>
                        <p className="mt-2 text-xs text-cream/70 leading-relaxed">{s.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: RESULTS SHOWCASE VISUALIZER */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid gap-10 md:grid-cols-12 items-center"
              >
                {/* Visualizer Image Pane */}
                <div className="md:col-span-5 relative group overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
                  <img
                    src={config.img}
                    alt={config.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 z-10 text-left">
                    <span className="text-xs font-mono tracking-widest text-gold-400 font-bold uppercase block">Recommended Vibe</span>
                    <span className="font-display text-lg font-black text-white">{config.name}</span>
                  </div>
                </div>

                {/* Vibe Checklist Details */}
                <div className="md:col-span-7 flex flex-col gap-6 text-left">
                  <div>
                    <span className="font-mono text-xs tracking-wider text-purple-400 font-bold uppercase">Simulation Complete</span>
                    <h3 className="font-display text-3xl font-black text-white mt-1">
                      Your Curated Setup Plan
                    </h3>
                    <p className="mt-3 text-sm text-cream/75 leading-relaxed font-sans border-l-2 border-purple-500 pl-4 italic">
                      "{config.quote}"
                    </p>
                  </div>

                  {/* Checklist wrapper */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-mono uppercase text-cream/40 tracking-wider">Critical Coordination Milestones</span>
                    {config.checklist.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/[0.03] p-3.5 rounded-xl border border-white/5 hover:bg-white/[0.06] transition-colors">
                        <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-white/95 leading-none">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action links */}
                  <div className="flex flex-wrap gap-4 mt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20 scale-100 hover:scale-[1.02]"
                    >
                      Inquire About This Vibe
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm font-semibold text-cream hover:bg-white/10 transition-colors"
                    >
                      <RefreshCw size={14} className="mr-2 animate-spin-hover" />
                      Configure Another Event
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Bottom Actions for Step Control */}
          {step < 3 && (
            <div className="flex items-center justify-between mt-12 border-t border-white/5 pt-6">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`inline-flex items-center font-mono text-xs uppercase tracking-wider gap-2 px-4 py-2.5 rounded-xl transition-all ${
                  step === 1 
                    ? "text-cream/20 cursor-not-allowed" 
                    : "text-cream/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <ArrowLeft size={14} />
                Back
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center font-mono text-xs uppercase tracking-widest gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-600/15 hover:shadow-purple-600/25 transition-all scale-100 hover:scale-[1.03]"
              >
                Next
                <ArrowRight size={14} />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
