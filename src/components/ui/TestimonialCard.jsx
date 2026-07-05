export default function TestimonialCard({ quote, name, eventType }) {
  return (
    <div className="flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 font-display text-2xl font-black leading-none text-gold-500">
        "
      </span>
      <p className="mt-5 text-plum-700/90">{quote}</p>
      <p className="mt-6 font-display font-bold text-plum-900">{name}</p>
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-plum-700/50">{eventType}</p>
    </div>
  );
}
