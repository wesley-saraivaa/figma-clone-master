import { ArrowUpRight } from "lucide-react";
import praiaImg from "@/assets/hero-praia.png";
import buggyImg from "@/assets/hero-buggy.png";
import placasImg from "@/assets/hero-placas.png";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Altura proporcional à largura, mais alta como no print */}
      <div className="relative w-full min-h-[620px] h-[min(900px,calc(100vw*0.62))]">
        {/* Fundo: praia */}
        <img
          src={praiaImg}
          alt="Pedra furada de Jericoacoara"
          className="absolute inset-0 h-full w-full object-cover object-[50%_50%]"
          fetchPriority="high"
        />

        {/* Placas (esquerda) — só aparecem parcialmente na borda, como no print */}
        <img
          src={placasImg}
          alt="Placas coloridas com palavras inspiradoras"
          className="pointer-events-none absolute bottom-0 left-[-6%] z-10 hidden h-auto w-[clamp(160px,18vw,280px)] select-none object-contain object-left-bottom md:block"
        />

        {/* Buggy (direita, na areia) — grande e dominante como no print */}
        <img
          src={buggyImg}
          alt="Casal em buggy vermelho na praia de Jericoacoara"
          className="pointer-events-none absolute -bottom-[1%] right-[-2%] z-10 h-auto w-[70vw] max-w-none select-none object-contain sm:right-0 sm:w-[clamp(380px,52vw,820px)]"
        />

        {/* Card de conteúdo — maior, mais à esquerda */}
        <div className="absolute inset-0 z-20 flex items-center px-4 pt-20 sm:px-8 md:pt-24 lg:px-16">
          <div className="w-full max-w-md rounded-3xl bg-primary/30 p-6 shadow-card ring-1 ring-card/30 backdrop-blur-md mx-auto md:mx-0 md:max-w-lg md:ml-[clamp(60px,8vw,140px)] md:p-8">
            <h1 className="font-display text-4xl leading-[1.05] text-primary-foreground drop-shadow-md sm:text-5xl lg:text-6xl">
              Descubra
              <span className="block">JERICOACOARA</span>
              <span className="block">com quem é</span>
              <span className="block">da casa.</span>
            </h1>
            <p className="mt-5 text-sm font-medium leading-relaxed text-primary-foreground drop-shadow sm:text-base">
              Jerilifetur é uma empresa 100% nativa, formada por guias locais
              apaixonados por Jeri. Sabemos que você planeja a viagem durante
              meses ou anos e, por isso, fazemos cada segundo valer a pena.
              Nosso compromisso é com pontualidade, responsabilidade,
              assistência e segurança.
            </p>
          </div>
        </div>

        {/* Botões fora do card, ancorados embaixo à esquerda como no print */}
        <div className="absolute bottom-[6%] left-0 z-20 flex flex-wrap items-center gap-3 px-4 sm:px-8 md:left-[clamp(60px,8vw,140px)] md:px-0 lg:left-[clamp(60px,8vw,140px)]">
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
    </section>
  );
}
