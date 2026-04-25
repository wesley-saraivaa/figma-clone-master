import { TourCard, type Tour } from "./TourCard";

const eastTours: Tour[] = [
  {
    name: "Lagoa do Paraíso",
    description: "Águas cristalinas, redes na água e o pôr do sol mais famoso do Ceará.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=900&q=80",
    alt: "Lagoa do Paraíso com redes na água",
  },
  {
    name: "Lagoa Azul",
    description: "Refúgio tranquilo de águas mornas, ideal para famílias e tardes preguiçosas.",
    image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80",
    alt: "Lagoa azul cercada por dunas",
  },
  {
    name: "Árvore da Preguiça",
    description: "Símbolo do litoral cearense, perfeita para fotos e contemplar o vento.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Árvore tombada pelo vento à beira-mar",
  },
  {
    name: "Pedra Furada",
    description: "Cartão-postal de Jeri, esculpido pelo mar — visite na maré baixa.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    alt: "Formação rochosa Pedra Furada ao entardecer",
  },
];

const westTours: Tour[] = [
  {
    name: "Mangue Seco",
    description: "Travessia de balsa, dunas brancas e a calmaria do delta cearense.",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80",
    alt: "Dunas brancas do Mangue Seco",
  },
  {
    name: "Lagoa de Tatajuba",
    description: "Vila de pescadores, lagoa enorme e o famoso tobogã das dunas.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    alt: "Lagoa de Tatajuba com tobogã de duna",
  },
  {
    name: "Dunas Móveis",
    description: "Aventura sobre areias que mudam de lugar com o vento — passeio de buggy completo.",
    image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=900&q=80",
    alt: "Buggy atravessando dunas móveis",
  },
  {
    name: "Vila e Ilhas Místicas",
    description: "Roteiro cultural pelas comunidades nativas e ilhotas de areia.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Vila de pescadores ao pôr do sol",
  },
];

function ToursBlock({ title, subtitle, tours }: { title: string; subtitle: string; tours: Tour[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="text-center">
        <h2 className="font-display text-3xl text-ocean-deep sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tours.map((t) => (
          <TourCard key={t.name} tour={t} />
        ))}
      </div>
    </div>
  );
}

export function ToursSection() {
  return (
    <section id="tours" className="bg-sand-gradient py-16 sm:py-20">
      <ToursBlock
        title="TOURS LADO LESTE"
        subtitle="No lado leste do Parque Nacional você encontra as lagoas mais cristalinas. Roteiros típicos incluem:"
        tours={eastTours}
      />
      <div className="mt-20">
        <ToursBlock
          title="TOURS LADO OESTE"
          subtitle="Para quem busca aventura, o lado oeste traz contraste com natureza e cultura local."
          tours={westTours}
        />
      </div>
    </section>
  );
}
