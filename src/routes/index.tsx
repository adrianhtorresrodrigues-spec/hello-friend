import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, Marquee, StoryBand, Ingredients, BurgerShowcase, Gallery, Identity, FinalCta } from "@/components/site/Sections";
import { MenuSection } from "@/components/site/MenuSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burger Studio — Feito para dar vontade" },
      { name: "description", content: "Conceito de site premium para hamburguerias: fotografia apetitosa, tipografia marcante e cardápio visual." },
      { property: "og:title", content: "Burger Studio — Feito para dar vontade" },
      { property: "og:description", content: "Conceito de site premium para hamburguerias com estética editorial de street food." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <StoryBand />
        <Ingredients />
        <BurgerShowcase />
        <MenuSection />
        <Gallery />
        <Identity />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
