import SectionHeading from "../ui/SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    caption: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Corporate Events",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    caption: "Concerts",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    caption: "Celebrations",
  },
];

export default function GalleryTeaser() {
  return (
    <section className="bg-plum-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Moments We've Made" title="A Glimpse Into Our Work" />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.caption} className="group relative overflow-hidden rounded-2xl">
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum-900/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="font-display text-lg font-semibold text-cream">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
