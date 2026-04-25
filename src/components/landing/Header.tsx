import { Calendar, ArrowUpRight, Menu } from "lucide-react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "Passeios", href: "#tours" },
  { label: "Rotas", href: "#rotas" },
  { label: "Kitetrip", href: "#kitetrip" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-4 z-30 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-full bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 flex-col leading-none">
          <span className="font-display text-lg tracking-wide text-ocean sm:text-xl">
            JERILIFETUR
          </span>
          <span className="text-[10px] italic text-muted-foreground">
            Expedições & <span className="text-ocean">passeios</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="mx-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm transition hover:text-ocean ${
                l.active ? "font-bold text-foreground" : "font-medium text-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            aria-label="Calendário"
            className="hidden h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:bg-secondary sm:grid"
          >
            <Calendar className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full bg-card py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ocean shadow-soft ring-1 ring-border transition hover:bg-secondary"
          >
            <span className="hidden sm:inline">Agendar passeio</span>
            <span className="sm:hidden">Agendar</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ocean text-primary-foreground transition group-hover:bg-ocean-deep">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
          <button
            type="button"
            aria-label="Abrir menu"
            className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
