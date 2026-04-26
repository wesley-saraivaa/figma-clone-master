import { ArrowUpRight } from "lucide-react";
import praiaImg from "@/assets/hero-praia.png";
import buggyImg from "@/assets/hero-buggy.png";
import placasImg from "@/assets/hero-placas.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
    >
      <div className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[820px]">
        {/* Background beach image (full bleed) */}
        <img
          src={praiaImg}
          alt="Pedra furada de Jericoacoara"
          className="absolute inset-0 h-full w-full object-cover object-[50%_50%]"
          fetchPriority="high"
        />

        {/* Left side: colorful signs */}
        <img
          src={placasImg}
          alt="Placas coloridas com palavras inspiradoras"
          className="pointer-events-none absolute left-0 top-1/2 z-10 hidden h-[95%] -translate-y-1/2 select-none object-contain object-left sm:block"
        />

        {/* Right side: couple on buggy — sits on the sand */}
        <img
          src={buggyImg}
          alt="Casal em buggy vermelho na praia de Jericoacoara"
          className="pointer-events-none absolute bottom-0 right-0 z-10 h-[70%] max-w-[55%] select-none object-contain object-bottom sm:h-[78%] lg:h-[82%]"
        />

        {/* Content overlay — smaller card, centered (not over the signs) */}
        <div className="relative z-20 flex min-h-[640px] items-center px-4 pt-24 sm:min-h-[720px] sm:px-8 lg:min-h-[820px] lg:px-16">
          <div className="ml-0 w-full max-w-md rounded-3xl bg-card/35 p-5 shadow-card ring-1 ring-card/40 backdrop-blur-md sm:ml-[18%] sm:p-6 lg:ml-[20%]">
            <h1 className="font-display text-3xl leading-[1.05] text-primary-foreground drop-shadow-md sm:text-4xl lg:text-5xl">
              Descubra
              <span className="block">JERICOACOARA</span>
              <span className="block">com quem é</span>
              <span className="block">da casa.</span>
            </h1>
            <p className="mt-4 text-xs font-medium leading-relaxed text-primary-foreground/95 drop-shadow sm:text-sm">
              Jerilifetur é uma empresa 100% nativa, formada por guias locais
              apaixonados por Jeri. Sabemos que você planeja a viagem durante
              meses ou anos e, por isso, fazemos cada segundo valer a pena.
              Nosso compromisso é com pontualidade, responsabilidade,
              assistência e segurança.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-card py-1.5 pl-5 pr-1.5 text-xs font-bold uppercase tracking-wide text-foreground shadow-card transition hover:-translate-y-0.5"
              >
                Agendar passeio
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ocean text-primary-foreground transition group-hover:bg-ocean-deep">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-card/30 py-1.5 pl-5 pr-1.5 text-xs font-semibold text-primary-foreground ring-1 ring-card/50 backdrop-blur transition hover:bg-card/45"
              >
                Marcar Kite Trip
                <span className="grid h-7 w-7 place-items-center rounded-full bg-card/40 text-primary-foreground ring-1 ring-card/60">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
