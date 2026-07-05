import SectionHeading from "../ui/SectionHeading";
import TiltImage from "../ui/TiltImage";
import Reveal from "../ui/Reveal";
import { Swirl } from "../ui/Doodles";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    caption: "Weddings",
    ratio: "3 / 4",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Corporate Events",
    ratio: "1 / 1",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    caption: "Concerts",
    ratio: "4 / 5",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    caption: "Celebrations",
    ratio: "3 / 4",
  },
];

export default function GalleryTeaser() {
  return (
    <section className="relative overflow-hidden bg-plum-50 px-6 py-24">
      <Swirl className="animate-float-slower absolute bottom-8 right-8 hidden h-10 w-16 text-plum-400/50 sm:block" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Moments We've Made" title="A Glimpse Into Our Work" />
        <div className="mt-14 columns-2 gap-4 lg:columns-4">
          {photos.map((photo, index) => (
            <Reveal key={photo.caption} delay={index * 0.08} className="break-inside-avoid">
              <TiltImage src={photo.src} caption={photo.caption} ratio={photo.ratio} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
