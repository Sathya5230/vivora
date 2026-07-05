export default function TestimonialCard({ quote, name, eventType }) {
  return (
    <div className="flex flex-col gap-5 border-l-2 border-gold-400 pl-6">
      <span className="font-display text-6xl leading-none text-gold-400" aria-hidden="true">
        "
      </span>
      <p className="-mt-10 text-lg leading-relaxed text-plum-900">{quote}</p>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-plum-700/60">
        <span className="text-plum-900">{name}</span>
        <span className="h-px w-4 bg-plum-700/30" aria-hidden="true" />
        <span>{eventType}</span>
      </div>
    </div>
  );
}
