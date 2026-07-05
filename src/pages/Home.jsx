import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
    </>
  );
}
