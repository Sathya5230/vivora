export default function Marquee({ items, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee items-center py-6">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="mr-3 whitespace-nowrap font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
              {item}
            </span>
            <span className="mr-3 font-mono text-lg text-gold-400/40" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
