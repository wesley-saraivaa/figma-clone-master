const rides = [
  { label: "BUGGY", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80" },
  { label: "QUADRI", img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=400&q=80" },
  { label: "TRANSFER", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=400&q=80" },
];

export function RideTypes() {
  return (
    <section className="bg-sand-gradient pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-base italic text-muted-foreground">
          <span className="font-semibold text-foreground">Oferecemos passeios privativos</span>{" "}
          ou compartilhados em:
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {rides.map((r) => (
            <button
              key={r.label}
              type="button"
              className="group flex items-center gap-3 rounded-full bg-ocean-deep py-2 pl-2 pr-6 text-primary-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <span className="grid h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary-foreground/30">
                <img src={r.img} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="font-display text-lg tracking-wider">{r.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
