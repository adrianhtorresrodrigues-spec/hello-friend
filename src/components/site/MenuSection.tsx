import { useState } from "react";
import { menu } from "@/config/site";
import { Reveal, SafeImg } from "./Reveal";

export function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const cat = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="cardapio" className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="eyebrow text-ketchup-deep">Cardápio visual</p>
          <h2 className="display-xl mt-3 text-ketchup text-[clamp(3rem,12vw,7rem)]">Escolha sua vontade</h2>
        </Reveal>

        <div role="tablist" aria-label="Categorias do cardápio" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {menu.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={`condensed shrink-0 rounded-full border-2 px-6 py-3 text-xl transition-colors ${
                active === c.id ? "border-ketchup bg-ketchup text-paper" : "border-ink text-ink hover:bg-ink hover:text-cream"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cat.items.map((it, i) => (
            <article key={it.name + i} className="group overflow-hidden rounded-[2rem] bg-paper shadow-[0_0_0_2px_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden bg-mustard">
                <SafeImg src={it.image} alt="Imagem ilustrativa do produto" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[0.7rem] text-mustard">Demonstrativo</span>
              </div>
              <div className="p-6">
                <h3 className="condensed text-2xl text-ink">{it.name}</h3>
                <p className="mt-1 text-muted-foreground">{it.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t-2 border-dashed pt-4">
                  <span className="condensed text-lg text-ketchup">{it.price || "Preço a configurar"}</span>
                  <a href="#contato" className="condensed rounded-full bg-mustard px-4 py-2 text-ink transition-colors hover:bg-ketchup hover:text-paper">
                    Detalhes
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
