import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkle, Swirl } from "../ui/Doodles";
import Button from "../ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-6 pb-24 pt-16 md:grid-cols-2 md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <Sparkle className="absolute -left-6 -top-6 h-10 w-10 text-gold-400" />
        <Swirl className="absolute -bottom-8 right-4 h-12 w-20 text-plum-400" />
        <img
          src={HERO_IMAGE}
          alt="Guests celebrating at a Vivora-planned event"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
          Vivora Events
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-plum-900 sm:text-5xl lg:text-6xl">
          Every Occasion, <span className="text-plum-500">Perfectly</span> Orchestrated
        </h1>
        <p className="mt-6 max-w-lg text-lg text-plum-700/80">
          From intimate ceremonies to citywide celebrations, Vivora plans, designs,
          and delivers every detail of your event — so you can just show up and
          celebrate.
        </p>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-gradient-to-br from-plum-100 to-gold-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-plum-900">
              15+ Event Categories, One Team
            </p>
            <p className="mt-1 text-sm text-plum-700/70">
              Weddings · Corporate · Celebrations · Culture · and more
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary">
            Book a Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
