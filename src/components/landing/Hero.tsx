import { ArrowUpRight } from "lucide-react";
import praiaImg from "@/assets/hero-praia.png";
import buggyImg from "@/assets/hero-buggy.png";
import placasImg from "@/assets/hero-placas.png";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Altura proporcional à largura: mantém a mesma composição em qualquer tela */}
      <div className="relative w-full min-h-[560px] h-[min(820px,calc(100vw*0.62))]">
        {/* Fundo: praia */}
        <img
          src={praiaImg}
          alt="Pedra furada de Jericoacoara"
          className="absolute inset-0 h-full w-full object-cover object-[50%_50%]"
          fetchPriority="high"
        />

        {/* Placas (esquerda, ancoradas no chão) — só md+ */}
        <img
          src={placasImg}
          alt="Placas coloridas com palavras inspiradoras"
          className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-auto w-[clamp(180px,22vw,360px)] select-none object-contain object-left-bottom md:block"
        />

        {/* Buggy (direita, na areia) — proporcional à largura */}
        <img
          src={buggyImg}
          alt="Casal em buggy vermelho na praia de Jericoacoara"
          className="pointer-events-none absolute bottom-[3%] right-[-2%] z-10 h-auto w-[60vw] max-w-none select-none object-contain sm:right-[1%] sm:w-[clamp(280px,38vw,640px)]"
        />

        {/* Card de conteúdo */}
        <div className="absolute inset-0 z-20 flex items-center px-4 pt-20 sm:px-6 md:pt-24">
          <div className="w-full max-w-sm rounded-3xl bg-card/35 p-5 shadow-card ring-1 ring-card/40 backdrop-blur-md mx-auto md:mx-0 md:max-w-md md:ml-[clamp(200px,24vw,380px)] md:p-6">
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
