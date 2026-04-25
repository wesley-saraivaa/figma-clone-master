type Reason = {
  title: string;
  text: string;
  image: string;
  alt: string;
  span?: string;
};

const reasons: Reason[] = [
  {
    title: "EQUIPE NATIVA",
    text: "Somos da região e conhecemos cada trilha, praia e história por trás de cada lugar de Jericoacoara, de maneira honesta e explicativa.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80",
    alt: "Guia local com prancha de kitesurf",
  },
  {
    title: "ATENDIMENTO COMPLETO",
    text: "Assistência contínua para passeios, kite trips e downwinds: nossa equipe acompanha dentro e fora d'água.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    alt: "Caminhonete 4x4 com pranchas no rack",
  },
  {
    title: "PASSEIOS EXCLUSIVOS",
    text: "Veículos reservados, guias credenciados e equipe disponível a qualquer hora. Roteiros adaptados ao seu perfil — famílias, casais, amigos ou aventureiros.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
    alt: "Grupo de amigos em passeio de buggy na praia",
    span: "md:col-span-2",
  },
];

export function WhyUs() {
  return (
    <section id="sobre" className="bg-sand-gradient py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-display text-3xl text-ocean-deep sm:text-4xl lg:text-5xl">
          POR QUE JERILIFETUR?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <article
              key={r.title}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${r.span ?? ""}`}
            >
              <img
                src={r.image}
                alt={r.alt}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/85 via-ocean-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-primary-foreground sm:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/90">
                  {r.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
