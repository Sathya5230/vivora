import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { DoodleStar, DoodleLoop, DoodleSwirl } from "../ui/GeneratedDoodles";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-plum-100/60 via-cream to-cream py-16 md:py-24">
      {/* Dynamic background shapes */}
      <motion.div
        animate={{ x: [0, 40, -25, 0], y: [0, -30, 30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-1/4 -z-10 h-96 w-96 rounded-full bg-plum-200/40 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 40, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:items-center">
        {/* Left Side: Main image with dynamic decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative md:col-span-5"
        >
          {/* Interactive Floating Doodle Star */}
          <motion.div
            whileHover={{ scale: 1.25, rotate: -15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute -left-12 -top-12 z-20 cursor-pointer text-gold-500/90"
          >
            <DoodleStar className="animate-float h-16 w-16" />
          </motion.div>

          {/* Interactive Floating Doodle Loop */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute -bottom-12 -right-8 z-20 cursor-pointer text-plum-400/95 rotate-12"
          >
            <DoodleLoop className="animate-float-slow h-20 w-20" />
          </motion.div>

          {/* Main Visual Image Container */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-plum-900/20"
          >
            <img
              src={HERO_IMAGE}
              alt="Guests celebrating at a Vivora-planned event"
              className="aspect-[4/3] w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          {/* Established badge with rotate hover */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="absolute -bottom-6 -left-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-plum-900 text-center text-cream shadow-xl cursor-pointer"
          >
            <span className="font-display text-lg font-black leading-none">Est.</span>
            <span className="font-display text-lg font-black leading-none text-gold-400">
              Vivora
            </span>
          </motion.div>
        </motion.div>

        {/* Right Side: Text & CTA details */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-7"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold-600 relative">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            Vivora Events
            {/* Sparkle badge near label */}
            <DoodleStar className="h-4 w-4 text-gold-500 animate-pulse" />
          </span>

          <h1 className="mt-5 font-display text-5xl font-black leading-[1.0] tracking-tight text-plum-900 sm:text-6xl lg:text-7xl">
            Every occasion,
            <br />
            <span className="text-plum-500 relative inline-block">
              perfectly
              {/* Hand-drawn swirl underline element */}
              <DoodleSwirl className="absolute -bottom-4 left-0 h-5 w-full text-gold-500/80 select-none pointer-events-none" />
            </span> orchestrated
          </h1>

          <p className="mt-8 max-w-lg text-lg text-plum-700/80 relative">
            From intimate ceremonies to citywide celebrations, Vivora plans, designs,
            and delivers every detail of your event — so you can just show up and
            celebrate.
            {/* Decorative layout pointer curl */}
            <DoodleLoop className="absolute -right-12 -bottom-6 hidden lg:block h-16 w-16 text-plum-300/60 rotate-45 select-none pointer-events-none" />
          </p>

          <div className="mt-10 flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-plum-100 to-gold-100 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between relative overflow-hidden group">
            {/* Inner background star glow */}
            <DoodleStar className="absolute -right-4 -top-4 h-12 w-12 text-gold-400/20 select-none pointer-events-none transition-transform duration-500 group-hover:scale-125" />
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
