import { ArrowRight, MessageCircle } from "lucide-react";

export function ReadyCTA() {
  return (
    <section id="contato" className="bg-ocean-gradient relative overflow-hidden py-20">
      <div className="bg-diamond absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="font-display text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            PRONTO PARA
            <span className="block">EMBARCAR?</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/90">
            Entre em contato para montar seu roteiro sob medida.{" "}
            <span className="font-semibold">A Jerilifetur</span> oferece pacotes
            diários e combinados, além de transfers e suporte completo.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider text-ocean-deep shadow-card transition hover:-translate-y-0.5"
            >
              Agendar passeio
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" />
              Mensagem Kite Trip
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-card shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
              alt="Aplicativo Jerilifetur com roteiros de passeios"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/95 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Próximo passeio
              </p>
              <p className="font-display text-base text-ocean-deep">Lagoa do Paraíso</p>
              <p className="mt-1 text-xs text-muted-foreground">Sábado · 08h00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
