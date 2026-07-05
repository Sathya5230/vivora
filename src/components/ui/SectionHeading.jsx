export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold-600">
          <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-black tracking-tight text-plum-900 sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-xl text-base text-plum-700/80 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
