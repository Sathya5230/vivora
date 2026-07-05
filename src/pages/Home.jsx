import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import CategoryMarquee from "../components/sections/CategoryMarquee";
import StatsStrip from "../components/sections/StatsStrip";
import ServicesBentoGrid from "../components/sections/ServicesBentoGrid";
import ProcessSection from "../components/sections/ProcessSection";
import VibeConfigurator from "../components/sections/VibeConfigurator";
import Testimonials from "../components/sections/Testimonials";
import GalleryTeaser from "../components/sections/GalleryTeaser";
import CtaBanner from "../components/ui/CtaBanner";

export default function Home() {
  useEffect(() => {
    document.title = "Vivora | Full-Service Event Management";
  }, []);

  return (
    <>
      <Hero />
      <CategoryMarquee />
      <StatsStrip />
      <ServicesBentoGrid />
      <ProcessSection />
      <VibeConfigurator />
      <Testimonials />
      <GalleryTeaser />
      <CtaBanner />
    </>
  );
}
