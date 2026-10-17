import { Star, Flame, Sparkles, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Reveal, SafeImg } from "./Reveal";

const img = site.images;

/* Wavy divider in a given color token */
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 1440 60" preserveAspectRatio="none" className={`block h-8 w-full sm:h-12 ${flip ? "rotate-180" : ""} ${className}`}>
      <path fill="currentColor" d="M0 30 Q 60 0 120 30 T 240 30 T 360 30 T 480 30 T 600 30 T 720 30 T 840 30 T 960 30 T 1080 30 T 1200 30 T 1320 30 T 1440 30 V60 H0Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-24 sm:pt-28">
      {/* sunburst */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[55%] size-[150vw] max-w-[1100px] max-h-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[repeating-conic-gradient(var(--mustard)_0deg_8deg,transparent_8deg_16deg)] opacity-40 animate-spin-slow lg:top-1/2 lg:left-[70%]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-20">
        <div className="relative z-10 animate-hero-in">
          <p className="eyebrow mb-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-mustard">
            <Flame className="size-4" /> Burger culture
          </p>
          <h1 className="display-xl text-ketchup text-[clamp(3.4rem,15vw,8.5rem)]">
            Feito <span className="text-ink">para</span> dar vontade.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground sm:text-xl">
            Uma experiência visual que coloca o hambúrguer no centro de tudo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cardapio" className="condensed inline-flex items-center gap-2 rounded-full bg-ketchup px-7 py-4 text-xl text-paper shadow-pop transition-transform hover:-translate-y-1 active:translate-y-0.5">
              Explorar cardápio <ArrowRight className="size-5" />
            </a>
            <a href="#essencia" className="condensed inline-flex items-center rounded-full border-2 border-ink px-7 py-4 text-xl text-ink transition-colors hover:bg-ink hover:text-cream">
              Conhecer o conceito
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px] animate-hero-in [animation-delay:150ms]">
          <img src={img.lettuce} alt="" aria-hidden width={816} height={816} className="absolute -left-6 top-4 w-28 animate-float [--r:-25deg] sm:w-36" />
          <img src={img.tomato} alt="" aria-hidden width={816} height={816} className="absolute -right-2 top-0 w-20 animate-float [--r:15deg] [animation-delay:1s] sm:w-28" />
          <img src={img.cheese} alt="" aria-hidden width={816} height={816} className="absolute -bottom-2 -right-4 w-28 animate-float [--r:10deg] [animation-delay:2s] sm:w-36" />
          <img
            src={img.burgerHero}
            alt="Hambúrguer artesanal com queijo derretido, alface e tomate"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="relative z-10 w-full drop-shadow-[0_40px_40px_oklch(0.2_0.01_50/0.35)]"
          />
          <div className="absolute bottom-6 left-0 z-20 grid size-24 -rotate-12 place-items-center rounded-full bg-ketchup text-center text-paper sm:size-28">
            <span className="condensed text-sm leading-tight">Street<br /><span className="text-2xl">Food</span><br />Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const words = ["Burger culture", "Sabor em destaque", "Feito para impressionar", "Street food design"];
  const row = [...words, ...words];
  return (
    <div className="relative -rotate-2 bg-ketchup py-4 sm:py-5" aria-label={words.join(" · ")}>
      <div className="flex w-max animate-marquee" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={i} className="display-xl flex items-center gap-6 px-6 text-3xl text-cream sm:text-5xl">
                {w} <Star className="size-6 fill-mustard text-mustard" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StoryBand() {
  return (
    <section id="essencia" className="relative mt-16 text-mustard">
      <Wave />
      <div className="bg-mustard px-5 pb-20 pt-10 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-ketchup-deep">Nossa essência</p>
          <h2 className="display-xl mx-auto mt-3 max-w-5xl text-paper text-[clamp(3rem,13vw,9rem)] [text-shadow:0_5px_0_var(--orange)]">
            A story in every bite.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-ink">
            Cada mordida conta algo. Esta seção está pronta para receber a história real da sua marca.
          </p>
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-[2.5rem] border-4 border-ink shadow-soft rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
            <SafeImg src={img.story} alt="Mão segurando um smash burger duplo com queijo derretido" width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
          </div>
        </Reveal>
      </div>
      <Wave flip className="text-mustard" />
    </section>
  );
}

export function Ingredients() {
  const layers = ["Pão", "Alface", "Tomate", "Queijo", "Carne"];
  return (
    <section id="ingredientes" className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 sm:py-32">
      <img src={img.lettuce} alt="" aria-hidden loading="lazy" width={816} height={816} className="absolute -left-10 top-10 w-36 rotate-[-30deg] animate-float [--r:-30deg] sm:w-56" />
      <img src={img.tomato} alt="" aria-hidden loading="lazy" width={816} height={816} className="absolute -right-8 top-16 w-28 animate-float [--r:20deg] [animation-delay:1.5s] sm:w-44" />
      <img src={img.cheese} alt="" aria-hidden loading="lazy" width={816} height={816} className="absolute -bottom-6 left-[8%] w-32 animate-float [--r:-12deg] [animation-delay:.7s] sm:w-48" />
      <img src={img.tomato} alt="" aria-hidden loading="lazy" width={816} height={816} className="absolute bottom-10 -right-6 w-24 animate-float [--r:-8deg] [animation-delay:2.2s] sm:w-32" />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="condensed text-2xl text-orange sm:text-3xl">Pure quality</p>
        <h2 className="display-xl mt-3 text-ketchup text-[clamp(2.8rem,11vw,7rem)]">
          Cada camada tem seu destaque.
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {layers.map((l, i) => (
            <li key={l} className={`condensed rounded-full px-5 py-2 text-xl ${i % 2 ? "bg-mustard text-ink" : "bg-ink text-cream"}`}>
              {l}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function BurgerShowcase() {
  return (
    <section className="relative overflow-hidden bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display-xl text-center text-ketchup text-[clamp(4rem,22vw,15rem)]">The burger</h2>
        </Reveal>
        <div className="relative -mt-[8vw] lg:-mt-24">
          <Reveal delay={100}>
            <img src={img.burgerHero} alt="Hambúrguer em destaque, vista frontal" loading="lazy" width={1024} height={1024} className="relative z-10 mx-auto w-[85%] max-w-[620px] drop-shadow-[0_40px_40px_oklch(0.2_0.01_50/0.35)]" />
          </Reveal>
          {[
            { t: "Suculento", c: "left-0 top-[15%] -rotate-6" },
            { t: "Camadas", c: "right-0 top-[35%] rotate-6" },
            { t: "Sabor marcante", c: "left-[4%] bottom-[8%] rotate-3" },
          ].map((w) => (
            <span key={w.t} className={`condensed absolute z-20 rounded-full bg-mustard px-4 py-2 text-lg text-ink shadow-pop sm:px-6 sm:text-3xl ${w.c}`}>
              {w.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const items = [
    { src: img.table, alt: "Dois cheeseburgers duplos com batatas e refrigerante", c: "col-span-2 row-span-2", w: 1152, h: 896 },
    { src: img.fries, alt: "Batatas fritas em cone vermelho", c: "row-span-2", w: 896, h: 1152 },
    { src: img.cheeseClose, alt: "Close de queijo derretido sobre a carne", c: "", w: 1152, h: 896 },
    { src: img.story, alt: "Smash burger em fundo laranja", c: "", w: 1280, h: 896 },
  ];
  return (
    <section id="galeria" className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="display-xl text-cream text-[clamp(2.8rem,10vw,6rem)]">
            Galeria <span className="text-mustard">gastronômica</span>
          </h2>
          <p className="max-w-xs text-cream/70">Texturas, cores e detalhes que despertam o apetite.</p>
        </Reveal>
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80} className={`group overflow-hidden rounded-3xl bg-muted ${it.c}`}>
              <SafeImg src={it.src} alt={it.alt} width={it.w} height={it.h} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Identity() {
  const traits = ["Ousado", "Urbano", "Generoso", "Autêntico"];
  return (
    <section className="relative overflow-hidden bg-ketchup px-5 py-24 text-cream sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-mustard">Personalidade</p>
          <h2 className="display-xl mt-3 text-[clamp(3rem,12vw,7rem)]">
            Sua marca, <span className="text-mustard">sem filtro.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-cream/85">
            Um espaço para traduzir a voz real do cliente: tom, valores e atitude — tudo editável.
          </p>
        </Reveal>
        <Reveal delay={120} className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-cream/40 animate-spin-slow" />
          <div className="grid size-[70%] place-items-center rounded-full bg-mustard text-ink shadow-soft">
            <Sparkles className="size-16 text-ketchup" />
          </div>
          {traits.map((t, i) => {
            const pos = ["top-2 left-1/2 -translate-x-1/2", "right-0 top-1/2 -translate-y-1/2", "bottom-2 left-1/2 -translate-x-1/2", "left-0 top-1/2 -translate-y-1/2"][i];
            return (
              <span key={t} className={`condensed absolute rounded-full bg-cream px-4 py-2 text-xl text-ketchup ${pos}`}>
                {t}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative bg-cream px-5 py-24 text-center sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="display-xl text-ketchup text-[clamp(2.8rem,11vw,7.5rem)]">
          Vamos dar vida à sua próxima fome?
        </h2>
        <a href={site.contact.menuUrl || "#cardapio"} className="condensed mt-10 inline-flex items-center gap-2 rounded-full bg-ketchup px-9 py-5 text-2xl text-paper shadow-pop transition-transform hover:-translate-y-1">
          Ver cardápio <ArrowRight className="size-6" />
        </a>
      </Reveal>
    </section>
  );
}
