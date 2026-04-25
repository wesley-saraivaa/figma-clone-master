import { Menu } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Tours", href: "#tours" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wide text-primary-foreground drop-shadow-sm sm:text-2xl">
            Jeri<span className="text-sunset">lifetur</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/95 transition hover:text-sunset"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-primary-foreground/95 px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary shadow-soft transition hover:bg-primary-foreground sm:flex"
          >
            Login
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/90 text-primary shadow-soft md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
