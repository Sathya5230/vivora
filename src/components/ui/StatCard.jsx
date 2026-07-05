export default function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-plum-800 px-6 py-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-plum-900">
        <Icon size={24} strokeWidth={2.5} />
      </span>
      <div>
        <p className="font-display text-4xl font-black tracking-tight text-gold-400 sm:text-5xl">
          {value}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cream/60">{label}</p>
      </div>
    </div>
  );
}
