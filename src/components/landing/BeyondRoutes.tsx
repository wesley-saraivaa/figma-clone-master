export function BeyondRoutes() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=80"
        alt="Pedra Furada de Jericoacoara ao entardecer"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/40 to-ocean-deep/60" />

      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-10">
        <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">
          JERICOACOARA ALÉM DOS ROTEIROS
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/95 sm:text-base">
          O Parque Nacional foi criado para proteger manguezais, dunas e
          lagoas. Suas dunas gigantes mudam de forma com o vento, e visitantes
          sobem à Duna do Pôr do Sol para ver o espetáculo. Durante a estação
          chuvosa, lagoas como a Lagoa Azul e a Lagoa do Paraíso se formam
          entre as dunas. A Pedra Furada, com seu arco natural, tornou-se o
          símbolo da vila. Com a Jerilifetur, você vivencia esses paisagens de
          maneira sustentável e consciente.
        </p>
      </div>
    </section>
  );
}
