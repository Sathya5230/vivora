import { Star } from "lucide-react";

export default function TestimonialCard({ quote, name, eventType }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex gap-1 text-gold-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-4 text-plum-700/90">&ldquo;{quote}&rdquo;</p>
      <p className="mt-6 font-display font-semibold text-plum-900">{name}</p>
      <p className="text-sm text-plum-700/60">{eventType}</p>
    </div>
  );
}
