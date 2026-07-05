import StatCard from "../ui/StatCard";

const stats = [
  { value: "500+", label: "Events Delivered" },
  { value: "15+", label: "Event Categories" },
  { value: "50+", label: "Cities Served" },
  { value: "10k+", label: "Happy Guests" },
];

export default function StatsStrip() {
  return (
    <section className="bg-plum-900 px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
