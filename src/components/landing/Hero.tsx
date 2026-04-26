import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-jeri.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-10 sm:pb-14"
    >
      {/* Full-bleed background image — cobre topo, curva embaixo */}
      <div className="overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3rem]">
        <img
          src={heroImg}
          alt="Casal em buggy vermelho na praia de Jericoacoara"
          className="h-[640px] w-full object-cover sm:h-[720px] xl:h-[860px]"
          fetchPriority="high"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center px-4 pt-24 sm:px-8 lg:px-16 xl:px-24">
          <div className="w-full max-w-[34rem] rounded-[2rem] bg-white/20 p-6 shadow-glow ring-1 ring-white/50 backdrop-blur-xl sm:p-10">
            <h1 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.25rem]">
              <span className="block text-white/95">Descubra</span>
              <span className="block py-1 sm:py-2 font-display text-[3.75rem] font-normal leading-none tracking-widest text-white drop-shadow-md sm:text-[5rem] lg:text-[5.5rem]">
                JERICOACOARA
              </span>
              <span className="block text-white/95">com quem é</span>
              <span className="block text-white/95">da casa.</span>
            </h1>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-white drop-shadow sm:text-base">
              Jerilifetur é uma empresa 100% nativa, formada por guias locais
              apaixonados por Jeri. Sabemos que você planeja a viagem durante
              meses ou anos e, por isso, fazemos cada segundo valer a pena.
              Nosso compromisso é com pontualidade, responsabilidade,
              assistência e segurança.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-bold uppercase tracking-wide text-foreground shadow-lg transition hover:-translate-y-0.5"
              >
                Agendar passeio
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ocean text-white shadow-sm transition group-hover:bg-ocean-deep">
                  <ArrowUpRight className="h-4 w-4 stroke-[3]" />
                </span>
              </button>
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white ring-1 ring-white/60 backdrop-blur-md transition hover:bg-white/20 shadow-md"
              >
                Marcar Kite Trip
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/50">
                  <ArrowUpRight className="h-4 w-4 stroke-[3]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
