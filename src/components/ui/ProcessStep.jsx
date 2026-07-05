export default function ProcessStep({ number, title, description }) {
  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-black text-plum-900">
        {number}
      </span>
      <p className="mt-5 font-display text-lg font-bold text-plum-900">{title}</p>
      <p className="mt-2 text-sm text-plum-700/70">{description}</p>
    </div>
  );
}
