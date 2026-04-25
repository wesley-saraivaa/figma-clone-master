import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-sand-gradient pt-24 pb-16 sm:pt-28 sm:pb-24"
    >
      {/* diamond side strips */}
      <div
        aria-hidden
        className="bg-diamond pointer-events-none absolute inset-y-0 left-0 hidden w-24 opacity-70 lg:block"
      />
      <div
        aria-hidden
        className="bg-diamond pointer-events-none absolute inset-y-0 right-0 hidden w-24 opacity-70 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        {/* copy */}
        <div className="relative z-10 lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-deep">
            Aventura em Jericoacoara
          </div>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Descubra
            <span className="block text-ocean-deep">Jericoacoara</span>
            <span className="block">com quem é da casa.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Jerilifetur é uma empresa 100% local, fundada por guias apaixonados
            por Jeri. Oferecemos passeios privativos e compartilhados em buggy,
            quadri e transfer — sempre com segurança, conforto e a vivência de
            quem nasceu por aqui.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean-deep px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:translate-y-[-1px] hover:shadow-card"
            >
              Agendar passeio
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-ocean-deep/30 bg-card px-6 py-3 text-sm font-bold uppercase tracking-wider text-ocean-deep transition hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" />
              Mensagem
            </button>
          </div>
        </div>

        {/* hero image */}
        <div className="relative lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?auto=format&fit=crop&w=1600&q=80"
              alt="Buggy vermelho na praia de Jericoacoara ao pôr do sol"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ocean-deep/30 via-transparent to-transparent" />
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-card px-5 py-3 shadow-card sm:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Avaliação
            </p>
            <p className="font-display text-xl text-ocean-deep">4.9 ★</p>
          </div>
        </div>
      </div>
    </section>
  );
}
