export default function ProcessStep({ number, title, description }) {
  return (
    <div className="flex flex-col gap-3 border-t-2 border-plum-900 pt-6">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
        {number}
      </span>
      <p className="font-display text-2xl font-bold text-plum-900">{title}</p>
      <p className="text-sm text-plum-700/70">{description}</p>
    </div>
  );
}
