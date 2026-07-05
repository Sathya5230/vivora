export default function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-plum-800 px-6 py-8 text-center">
      <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-cream/70">{label}</p>
    </div>
  );
}
