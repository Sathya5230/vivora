import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkle, Swirl } from "../ui/Doodles";
import { Calendar, MapPin } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80";

const partners = [
  // Logo 1
  <svg className="h-5 w-auto text-slate-700" viewBox="0 0 120 30" fill="currentColor" key="p1">
    <rect x="0" y="5" width="20" height="20" rx="4" />
    <circle cx="10" cy="15" r="5" fill="white" />
    <text x="28" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="13" letterSpacing="-0.5">logoipsum</text>
  </svg>,
  // Logo 2
  <svg className="h-5 w-auto text-slate-700" viewBox="0 0 120 30" fill="currentColor" key="p2">
    <rect x="0" y="5" width="4" height="20" rx="1" />
    <rect x="6" y="9" width="4" height="16" rx="1" />
    <rect x="12" y="13" width="4" height="12" rx="1" />
    <rect x="18" y="17" width="4" height="8" rx="1" />
    <text x="28" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="12" letterSpacing="0.5">LOGOIPSUM</text>
  </svg>,
  // Logo 3
  <svg className="h-5 w-auto text-slate-700" viewBox="0 0 120 30" fill="currentColor" key="p3">
    <path d="M10 5l4 4-4 4-4-4 4-4zM10 13l4 4-4 4-4-4 4-4z" />
    <text x="28" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="12" letterSpacing="0.5">LOGOIPSUM</text>
  </svg>,
  // Logo 4
  <svg className="h-5 w-auto text-slate-700" viewBox="0 0 120 30" fill="currentColor" key="p4">
    <circle cx="10" cy="15" r="10" />
    <circle cx="10" cy="15" r="6" fill="white" />
    <rect x="10" y="5" width="10" height="10" fill="white" />
    <text x="28" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="13" letterSpacing="-0.5">logoipsum</text>
  </svg>,
  // Logo 5
  <svg className="h-5 w-auto text-slate-700" viewBox="0 0 120 30" fill="currentColor" key="p5">
    <path d="M5 15a5 5 0 0110 0v5H5v-5zM10 5a5 5 0 015 5v5h-5V5z" />
    <text x="28" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="12" letterSpacing="0.5">LOGOIPSUM</text>
  </svg>,
  // Logo 6
  <svg className="h-5 w-auto text-slate-700" viewBox="0 0 120 30" fill="currentColor" key="p6">
    <rect x="0" y="5" width="20" height="20" rx="10" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M10 5v20" stroke="currentColor" strokeWidth="3" />
    <text x="28" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="12" letterSpacing="0.5">LOGOIPSUM</text>
  </svg>
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-white py-16 md:py-24">
      {/* Background radial soft ambient glow */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute bottom-12 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          {/* Hero Left: Image with custom doodles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative md:col-span-5"
          >
            {/* Doodles positioning matching reference image */}
            <Sparkle className="absolute -left-6 -top-6 h-10 w-10 text-purple-400 animate-pulse" />
            <Sparkle className="absolute -bottom-6 -right-6 h-10 w-10 text-purple-400 animate-pulse" />
            <Swirl className="absolute -bottom-8 -left-6 h-12 w-20 text-indigo-400 rotate-90" />
            <Swirl className="absolute -top-8 -right-6 h-12 w-20 text-indigo-400 -rotate-90" />
            
            <img
              src={HERO_IMAGE}
              alt="TechXperience 2025 event hall"
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl ring-4 ring-purple-100/50"
            />
          </motion.div>

          {/* Hero Right: Content & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
              TechXperience 2025
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-[3.5rem] tracking-tight">
              Fuel <span className="text-purple-600">Innovation</span>,<br />Spark Connection
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600/90 leading-relaxed">
              Discover breakthrough ideas, connect with experts, and unlock the future of technology.
            </p>

            {/* Ticket Banner Box */}
            <div className="mt-10 flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-purple-100/80 to-purple-50/40 p-6 shadow-sm border border-purple-100/30 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                  Unleashing the Power of Change
                </p>
                <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-slate-600 sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-purple-500" />
                    April 24, 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-purple-500" />
                    Ballroom Extra Hotel
                  </span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg whitespace-nowrap"
              >
                GET A TICKET
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Partners Section: Trusted by 15.000+ Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 border-t border-slate-100 pt-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-wider text-purple-600 uppercase">
            Trusted by <span className="text-slate-900 font-extrabold">15.000+</span> Organizations
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-2xl bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
