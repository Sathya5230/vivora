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
        {/* Left Side: Overlapping Multi-Image Collage */}
        <div className="relative md:col-span-6 flex items-center justify-center min-h-[460px] py-8 z-10">
          
          {/* Interactive Floating Doodle Star */}
          <motion.div
            whileHover={{ scale: 1.25, rotate: -15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute left-6 -top-6 z-30 cursor-pointer text-gold-500/90"
          >
            <DoodleStar className="animate-float h-16 w-16" />
          </motion.div>

          {/* Interactive Floating Doodle Loop */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute bottom-2 right-12 z-30 cursor-pointer text-plum-400/95 rotate-12"
          >
            <DoodleLoop className="animate-float-slow h-20 w-20" />
          </motion.div>

          {/* Background Doodle Swirl linking them */}
          <DoodleSwirl className="absolute left-1/4 top-1/3 h-16 w-32 text-plum-200/50 -rotate-12 select-none pointer-events-none z-0" />

          {/* Collage 1: Underlapping Back Card (Gala / Dinner) */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="absolute left-2 top-8 w-44 overflow-hidden rounded-[2rem] border border-plum-100 shadow-xl z-0 hidden sm:block origin-bottom-left cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80"
              alt="Premium gala dinner setting by Vivora"
              className="aspect-[3/4] object-cover w-full transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Collage 2: Main Middle Card (Wedding Ceremony) */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-full max-w-[320px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white relative z-10 cursor-pointer"
          >
            <img
              src={HERO_IMAGE}
              alt="Wedding ceremony planned by Vivora"
              className="aspect-[3/4] object-cover w-full"
            />
          </motion.div>

          {/* Collage 3: Overlapping Front Card (Concert Stage) */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.08, rotate: 4 }}
            className="absolute right-4 bottom-2 w-48 overflow-hidden rounded-[2rem] border-2 border-white shadow-2xl z-20 hidden sm:block origin-top-right cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80"
              alt="Lively concert stage event by Vivora"
              className="aspect-[4/3] object-cover w-full transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Established Badge with rotation trigger */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="absolute bottom-0 left-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-plum-900 text-center text-cream shadow-xl cursor-pointer z-30"
          >
            <span className="font-display text-lg font-black leading-none">Est.</span>
            <span className="font-display text-lg font-black leading-none text-gold-400">
              Vivora
            </span>
          </motion.div>
        </div>

        {/* Right Side: Text & Content Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold-600 relative">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            Vivora Events
            <DoodleStar className="h-4 w-4 text-gold-500 animate-pulse" />
          </span>

          <h1 className="mt-5 font-display text-5xl font-black leading-[1.0] tracking-tight text-plum-900 sm:text-6xl lg:text-7xl">
            Every occasion,
            <br />
            <span className="text-plum-500 relative inline-block">
              perfectly
              <DoodleSwirl className="absolute -bottom-4 left-0 h-5 w-full text-gold-500/80 select-none pointer-events-none" />
            </span> orchestrated
          </h1>

          <p className="mt-8 max-w-lg text-lg text-plum-700/80 relative">
            From intimate ceremonies to citywide celebrations, Vivora plans, designs,
            and delivers every detail of your event — so you can just show up and
            celebrate.
            <DoodleLoop className="absolute -right-12 -bottom-6 hidden lg:block h-16 w-16 text-plum-300/60 rotate-45 select-none pointer-events-none" />
          </p>

          <div className="mt-10 flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-plum-100 to-gold-100 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between relative overflow-hidden group">
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

          {/* Trusted Partner Venues List to fill spacing and build credibility */}
          <div className="mt-12 border-t border-plum-900/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-plum-700/50">
              Preferred Partner Venues & Estates
            </p>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-display text-xs font-black uppercase text-plum-900/40 tracking-wider">
              <span className="hover:text-plum-900 transition-colors cursor-default">THE PLAZA</span>
              <span className="hover:text-plum-900 transition-colors cursor-default">RITZ-CARLTON</span>
              <span className="hover:text-plum-900 transition-colors cursor-default">GRAND PAVILION</span>
              <span className="hover:text-plum-900 transition-colors cursor-default">LEGACY ESTATES</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
