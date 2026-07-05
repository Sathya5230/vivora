export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-plum-700/80 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
