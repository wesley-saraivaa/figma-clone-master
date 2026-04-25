import { Star } from "lucide-react";

export type Tour = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex items-center gap-0.5 rounded-full bg-card/90 px-2.5 py-1 backdrop-blur">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-sunset text-sunset"
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg text-ocean-deep">{tour.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {tour.description}
        </p>
      </div>
    </article>
  );
}
