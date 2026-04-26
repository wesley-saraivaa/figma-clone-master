import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-jeri.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Casal em buggy vermelho na praia de Jericoacoara"
          className="h-[640px] w-full object-cover object-right sm:h-[720px] lg:h-[820px]"
          fetchPriority="high"
        />

        {/* Soft gradient for legibility on the left */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-transparent"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center px-4 pt-24 sm:px-8 lg:px-16">
          <div className="w-full max-w-xl rounded-3xl bg-card/35 p-6 shadow-card ring-1 ring-card/40 backdrop-blur-md sm:p-8">
            <h1 className="font-display text-4xl leading-[1.05] text-primary-foreground drop-shadow-md sm:text-5xl lg:text-6xl">
              Descubra
              <span className="block">JERICOACOARA</span>
              <span className="block">com quem é</span>
              <span className="block">da casa.</span>
            </h1>
            <p className="mt-5 text-sm font-medium leading-relaxed text-primary-foreground/95 drop-shadow sm:text-base">
              Jerilifetur é uma empresa 100% nativa, formada por guias locais
              apaixonados por Jeri. Sabemos que você planeja a viagem durante
              meses ou anos e, por isso, fazemos cada segundo valer a pena.
              Nosso compromisso é com pontualidade, responsabilidade,
              assistência e segurança.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-card py-1.5 pl-5 pr-1.5 text-sm font-bold uppercase tracking-wide text-foreground shadow-card transition hover:-translate-y-0.5"
              >
                Agendar passeio
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ocean text-primary-foreground transition group-hover:bg-ocean-deep">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-card/30 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-primary-foreground ring-1 ring-card/50 backdrop-blur transition hover:bg-card/45"
              >
                Marcar Kite Trip
                <span className="grid h-8 w-8 place-items-center rounded-full bg-card/40 text-primary-foreground ring-1 ring-card/60">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
