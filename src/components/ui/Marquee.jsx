export default function Marquee({ items, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-10 py-6">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap font-display text-2xl font-semibold sm:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
