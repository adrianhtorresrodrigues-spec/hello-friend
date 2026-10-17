import { Instagram, MapPin, MessageCircle, Clock } from "lucide-react";
import { site } from "@/config/site";
import { Wave } from "./Sections";

function Field({ icon: Icon, label, value, href }: { icon: typeof MapPin; label: string; value: string; href?: string }) {
  const content = value || `[${label} a configurar]`;
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 size-5 shrink-0 text-mustard" />
      {value && href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-mustard">{content}</a>
      ) : (
        <span className={value ? "" : "text-cream/50"}>{content}</span>
      )}
    </li>
  );
}

export function Footer() {
  const c = site.contact;
  return (
    <footer id="contato" className="text-ink">
      <Wave className="text-ink" />
      <div className="bg-ink px-5 pb-10 pt-12 text-cream sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <p className="display-xl text-5xl text-ketchup">Burger</p>
            <p className="condensed tracking-[0.35em] text-cream">Studio</p>
            <p className="mt-4 max-w-xs text-cream/60">Conceito visual demonstrativo de site para hamburgueria.</p>
          </div>
          <nav aria-label="Rodapé">
            <p className="eyebrow mb-4 text-mustard">Navegação</p>
            <ul className="space-y-2">
              {site.nav.map((n) => (
                <li key={n.href}><a href={n.href} className="condensed text-xl hover:text-mustard">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-4 text-mustard">Contato</p>
            <ul className="space-y-3">
              <Field icon={MapPin} label="Endereço" value={c.address} />
              <Field icon={MessageCircle} label="WhatsApp" value={c.whatsapp} href={c.whatsapp ? `https://wa.me/${c.whatsapp}` : undefined} />
              <Field icon={Instagram} label="Instagram" value={c.instagram} href={c.instagram} />
              <Field icon={Clock} label="Horários" value={c.hours} />
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-2 border-t border-cream/15 pt-6 text-sm text-cream/50">
          <span>© {site.brand.name} — protótipo demonstrativo. Marca e conteúdos ilustrativos.</span>
          <span>Imagens ilustrativas.</span>
        </div>
      </div>
    </footer>
  );
}
