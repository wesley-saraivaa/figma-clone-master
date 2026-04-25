import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sand-gradient py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-10">
        <h3 className="font-display text-4xl tracking-[0.2em] text-ocean-deep sm:text-5xl">
          UNIWERSOTECH
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Desenvolvimento, design e estratégia digital para marcas que querem
          deixar uma marca no litoral.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Sobre nós", "Serviços", "Contato"].map((l) => (
            <a
              key={l}
              href="#"
              className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground transition hover:bg-secondary"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full bg-ocean-deep text-primary-foreground transition hover:bg-ocean"
              aria-label="Rede social"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jerilifetur · Desenvolvido por Uniwersotech
        </p>
      </div>
    </footer>
  );
}
