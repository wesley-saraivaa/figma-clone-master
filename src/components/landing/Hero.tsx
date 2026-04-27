import { ArrowUpRight } from "lucide-react";
import praiaImg from "@/assets/hero-praia.png";
import buggyImg from "@/assets/hero-buggy.png";
import placasImg from "@/assets/hero-placas.png";

export function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="relative w-full min-h-[640px] h-[min(900px,calc(100vw*0.64))] overflow-hidden rounded-b-[2.5rem]">
        {/* Fundo: praia — focado na parte alta para revelar mais areia embaixo */}
        <img
          src={praiaImg}
          alt="Pedra furada de Jericoacoara"
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
          fetchPriority="high"
        />

        {/* Placas (esquerda) — só espiando na borda */}
        <img
          src={placasImg}
          alt="Placas coloridas com palavras inspiradoras"
          className="pointer-events-none absolute bottom-0 left-[-7%] z-10 hidden h-auto w-[clamp(150px,16vw,260px)] select-none object-contain object-left-bottom md:block"
        />

        {/* Buggy (direita, na areia) — grande como no print */}
        <img
          src={buggyImg}
          alt="Casal em buggy vermelho na praia de Jericoacoara"
          className="pointer-events-none absolute bottom-0 right-[-4%] z-10 h-auto w-[90vw] max-w-none select-none object-contain sm:right-[-2%] sm:w-[clamp(520px,68vw,1080px)]"
        />

        {/* Card + botões agrupados no canto superior esquerdo */}
        <div className="absolute left-0 top-0 z-20 flex w-full max-w-md flex-col gap-4 px-4 pt-20 sm:max-w-[460px] sm:px-6 sm:pt-24 md:pl-[clamp(40px,6vw,110px)]">
          <div className="rounded-3xl bg-primary/30 p-6 shadow-card ring-1 ring-card/30 backdrop-blur-md sm:p-7">
            <h1 className="font-display text-4xl leading-[1.05] text-primary-foreground drop-shadow-md sm:text-5xl lg:text-[3.25rem]">
              Descubra
              <span className="block">JERICOACOARA</span>
              <span className="block">com quem é</span>
              <span className="block">da casa.</span>
            </h1>
            <p className="mt-5 text-sm font-medium leading-relaxed text-primary-foreground drop-shadow sm:text-[15px]">
              Jerilifetur é uma empresa 100% nativa, formada por guias locais
              apaixonados por Jeri. Sabemos que você planeja a viagem durante
              meses ou anos e, por isso, fazemos cada segundo valer a pena.
              Nosso compromisso é com pontualidade, responsabilidade,
              assistência e segurança.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-card py-2 pl-6 pr-2 text-xs font-bold uppercase tracking-wide text-foreground shadow-card transition hover:-translate-y-0.5"
            >
              Agendar passeio
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ocean text-primary-foreground transition group-hover:bg-ocean-deep">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-card/40 py-2 pl-6 pr-2 text-xs font-semibold text-primary-foreground ring-1 ring-card/50 backdrop-blur transition hover:bg-card/55"
            >
              Marcar Kite Trip
              <span className="grid h-8 w-8 place-items-center rounded-full bg-card/50 text-primary-foreground ring-1 ring-card/60">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
