type Card = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

const cards: Card[] = [
  {
    title: "KITE TRIPS & DOWNWIND",
    text: "Entre julho e janeiro, os ventos constantes fazem de Jericoacoara um dos melhores lugares do mundo para o kitesurf. Organizamos kite trips e downwinds com acompanhamento de profissionais, com 4×4 de apoio e assistência dentro e fora d'água.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    alt: "Kitesurfer cruzando o mar de Jericoacoara",
  },
  {
    title: "TRANSFER E LOGÍSTICA",
    text: "Realizamos transfers em veículos 4×4 entre Fortaleza, o Aeroporto Regional de Jericoacoara (JJD) e a vila. Nossa equipe está disponível 24 horas para garantir conforto e segurança do início ao fim da sua viagem.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Caminhonete 4x4 na areia ao entardecer",
  },
];

export function KiteTransferBand() {
  return (
    <section className="bg-ocean-gradient relative overflow-hidden py-20">
      <div className="bg-diamond absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-10">
        {cards.map((c) => (
          <article
            key={c.title}
            className="grid grid-cols-1 overflow-hidden rounded-3xl bg-card/95 shadow-card backdrop-blur md:grid-cols-2"
          >
            <div className="relative h-56 md:h-auto">
              <img src={c.image} alt={c.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <h3 className="font-display text-2xl text-ocean-deep sm:text-3xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {c.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
