import { Link } from "react-router-dom";
import Button from "./Button";
import { Sparkle } from "./Doodles";

export default function CtaBanner({
  title = "Ready to Plan Your Event?",
  subtitle = "Tell us your vision — we'll handle everything from concept to celebration.",
  ctaLabel = "Book a Consultation",
  ctaTo = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-700 to-plum-900 px-6 py-20 text-center text-cream">
      <Sparkle className="absolute left-10 top-10 h-10 w-10 text-gold-400/70" />
      <Sparkle className="absolute bottom-10 right-10 h-8 w-8 text-gold-400/50" />
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-cream/80">{subtitle}</p>
      <div className="mt-8 flex justify-center">
        <Button as={Link} to={ctaTo} variant="gold">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
