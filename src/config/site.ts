/**
 * Central configuration — edit here to adapt the site to a real burger shop.
 * Empty strings ("") mean "not provided yet": the UI shows a clear placeholder
 * or hides the link instead of inventing data.
 */
import burgerHero from "@/assets/burger-hero.png";
import lettuce from "@/assets/lettuce.png";
import tomato from "@/assets/tomato.png";
import cheese from "@/assets/cheese.png";
import story from "@/assets/story.jpg";
import fries from "@/assets/gallery-fries.jpg";
import cheeseClose from "@/assets/gallery-cheese.jpg";
import table from "@/assets/gallery-table.jpg";

export const site = {
  brand: {
    name: "BURGER STUDIO",
    short: "B·S",
    isDemo: true,
  },
  contact: {
    address: "",   // [ENDEREÇO A DEFINIR]
    whatsapp: "",  // [WHATSAPP A CONFIGURAR] e.g. "5511999999999"
    instagram: "", // [INSTAGRAM A CONFIGURAR] e.g. "https://instagram.com/..."
    email: "",
    hours: "",     // [HORÁRIOS A DEFINIR]
    orderUrl: "",  // [LINK DE PEDIDOS A CONFIGURAR]
    menuUrl: "",   // [LINK DO CARDÁPIO A CONFIGURAR]
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Cardápio", href: "#cardapio" },
    { label: "Nossa essência", href: "#essencia" },
    { label: "Ingredientes", href: "#ingredientes" },
    { label: "Contato", href: "#contato" },
  ],
  images: { burgerHero, lettuce, tomato, cheese, story, fries, cheeseClose, table },
};

export type MenuItem = {
  name: string;
  description: string;
  price: string; // empty = "Preço a configurar"
  image: string;
};

export const menu: { id: string; label: string; items: MenuItem[] }[] = [
  {
    id: "burgers",
    label: "Hambúrgueres",
    items: [
      { name: "Produto demonstrativo 01", description: "Descrição editável do produto.", price: "", image: burgerHero },
      { name: "Produto demonstrativo 02", description: "Descrição editável do produto.", price: "", image: story },
      { name: "Produto demonstrativo 03", description: "Descrição editável do produto.", price: "", image: table },
    ],
  },
  {
    id: "sides",
    label: "Acompanhamentos",
    items: [
      { name: "Produto demonstrativo 04", description: "Descrição editável do produto.", price: "", image: fries },
      { name: "Produto demonstrativo 05", description: "Descrição editável do produto.", price: "", image: cheeseClose },
    ],
  },
  {
    id: "drinks",
    label: "Bebidas",
    items: [{ name: "Produto demonstrativo 06", description: "Descrição editável do produto.", price: "", image: table }],
  },
  {
    id: "combos",
    label: "Combos",
    items: [
      { name: "Produto demonstrativo 07", description: "Descrição editável do produto.", price: "", image: table },
      { name: "Produto demonstrativo 08", description: "Descrição editável do produto.", price: "", image: story },
    ],
  },
];
