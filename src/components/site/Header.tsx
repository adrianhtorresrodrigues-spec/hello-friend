import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" aria-label={`${site.brand.name} — início`} className={`display-xl text-ketchup leading-none ${className}`}>
      <span className="block text-[1.65rem] sm:text-3xl">Burger</span>
      <span className="block condensed text-[0.85rem] tracking-[0.35em] text-ink">Studio</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_var(--border)]" : ""}`}>
      <div ref={panelRef} className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Logo />
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="condensed rounded-full px-4 py-2 text-lg text-ink transition-colors hover:bg-ketchup hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#cardapio" className="condensed hidden rounded-full bg-ketchup px-5 py-2.5 text-lg text-paper transition-transform hover:-translate-y-0.5 sm:inline-block">
            Ver cardápio
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="condensed inline-flex h-12 items-center gap-2 rounded-full bg-ketchup px-5 text-lg text-paper lg:hidden"
          >
            {open ? "Fechar" : "Menu"} {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`absolute inset-x-4 top-[calc(100%+0.25rem)] origin-top rounded-3xl bg-ketchup p-7 shadow-soft transition-all duration-300 lg:hidden ${
            open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
          }`}
        >
          <ul className="space-y-1">
            {site.nav.map((n, i) => (
              <li key={n.href} style={{ transitionDelay: `${i * 40}ms` }}>
                <a href={n.href} onClick={() => setOpen(false)} className="display-xl block py-1.5 text-4xl text-cream transition-colors hover:text-mustard">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-cream/30 pt-4 eyebrow text-cream/80">Conceito demonstrativo</div>
        </div>
      </div>
    </header>
  );
}
