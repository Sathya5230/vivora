export default function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center">
      <p className="font-display text-5xl font-extrabold tracking-tight text-gold-400 sm:text-6xl">
        {value}
      </p>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">{label}</p>
    </div>
  );
}
