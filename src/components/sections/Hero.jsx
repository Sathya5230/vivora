import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkle, Swirl } from "../ui/Doodles";
import Button from "../ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,11,28,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative md:col-span-5"
        >
          <Sparkle className="absolute -left-5 -top-5 h-9 w-9 text-gold-400" />
          <Swirl className="absolute -bottom-7 -right-4 h-11 w-20 rotate-12 text-plum-400" />

          <img
            src={HERO_IMAGE}
            alt="Guests celebrating at a Vivora-planned event"
            className="aspect-[4/3] w-full border-2 border-plum-900 object-cover"
          />

          <div className="absolute -bottom-6 left-6 flex -rotate-3 items-center gap-2 border-2 border-dashed border-plum-900 bg-cream px-4 py-2 shadow-[4px_4px_0_0_rgba(30,11,28,1)]">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-plum-900">
              No. 001 · Est. Vivora
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-7"
        >
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold-600">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            Vivora Events
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-plum-900 sm:text-6xl lg:text-7xl">
            Every occasion,
            <br />
            <span className="text-plum-500">perfectly</span> orchestrated
          </h1>
          <p className="mt-6 max-w-lg text-lg text-plum-700/80">
            From intimate ceremonies to citywide celebrations, Vivora plans, designs,
            and delivers every detail of your event — so you can just show up and
            celebrate.
          </p>

          <div className="mt-10 flex flex-col gap-6 border-t-2 border-plum-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-bold text-plum-900">
                15+ Event Categories, One Team
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-plum-700/60">
                Weddings · Corporate · Celebrations · Culture · and more
              </p>
            </div>
            <Button as={Link} to="/contact" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
