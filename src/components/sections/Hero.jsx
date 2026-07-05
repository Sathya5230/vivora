import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkle, Swirl } from "../ui/Doodles";
import Button from "../ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-plum-100/60 via-cream to-cream py-16 md:py-24">
      <div className="absolute -top-10 left-1/4 -z-10 h-96 w-96 rounded-full bg-plum-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative md:col-span-5"
        >
          <Sparkle className="absolute -left-6 -top-6 h-10 w-10 text-gold-400" />
          <Swirl className="absolute -bottom-8 -right-4 h-12 w-20 rotate-12 text-plum-400" />

          <img
            src={HERO_IMAGE}
            alt="Guests celebrating at a Vivora-planned event"
            className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-plum-900/20"
          />

          <div className="absolute -bottom-6 -left-6 flex h-24 w-24 -rotate-6 flex-col items-center justify-center rounded-full bg-plum-900 text-center text-cream shadow-xl">
            <span className="font-display text-lg font-black leading-none">Est.</span>
            <span className="font-display text-lg font-black leading-none text-gold-400">
              Vivora
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
          <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight text-plum-900 sm:text-6xl lg:text-7xl">
            Every occasion,
            <br />
            <span className="text-plum-500">perfectly</span> orchestrated
          </h1>
          <p className="mt-6 max-w-lg text-lg text-plum-700/80">
            From intimate ceremonies to citywide celebrations, Vivora plans, designs,
            and delivers every detail of your event — so you can just show up and
            celebrate.
          </p>

          <div className="mt-10 flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-plum-100 to-gold-100 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-extrabold text-plum-900">
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
