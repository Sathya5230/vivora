import { Link } from "react-router-dom";
import Button from "./Button";

export default function CtaBanner({
  title = "Ready to Plan Your Event?",
  subtitle = "Tell us your vision — we'll handle everything from concept to celebration.",
  ctaLabel = "Book a Consultation",
  ctaTo = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-700 to-plum-900 px-6 py-20 text-center text-cream">
      <img
        src="/doodle_star.png"
        alt=""
        className="animate-float absolute left-10 top-10 h-14 w-14 select-none pointer-events-none opacity-50"
        aria-hidden="true"
      />
      <img
        src="/doodle_loop.png"
        alt=""
        className="animate-float-slow absolute bottom-10 right-10 h-16 w-16 select-none pointer-events-none rotate-45 opacity-50"
        aria-hidden="true"
      />
      <span className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
        <span className="h-px w-6 bg-gold-400/70" aria-hidden="true" />
        Get in Touch
        <span className="h-px w-6 bg-gold-400/70" aria-hidden="true" />
      </span>
      <h2 className="mt-5 font-display text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-cream/80">{subtitle}</p>
      <div className="mt-8 flex justify-center">
        <Button as={Link} to={ctaTo} variant="gold">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
