import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";
import ProcessSection from "../components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
      <ProcessSection />
    </>
  );
}
