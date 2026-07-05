export default function ProcessStep({ number, title, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <span className="font-display text-3xl font-semibold text-gold-500">{number}</span>
      <p className="mt-3 font-display text-lg font-semibold text-plum-900">{title}</p>
      <p className="mt-2 text-sm text-plum-700/70">{description}</p>
    </div>
  );
}
