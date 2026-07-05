import { Award, Sparkles, MapPin, Users } from "lucide-react";
import StatCard from "../ui/StatCard";
import Reveal from "../ui/Reveal";

const stats = [
  { value: "500+", label: "Events Delivered", icon: Award },
  { value: "15+", label: "Event Categories", icon: Sparkles },
  { value: "50+", label: "Cities Served", icon: MapPin },
  { value: "10k+", label: "Happy Guests", icon: Users },
];

export default function StatsStrip() {
  return (
    <section className="bg-plum-900 px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.1}>
            <StatCard value={stat.value} label={stat.label} icon={stat.icon} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
