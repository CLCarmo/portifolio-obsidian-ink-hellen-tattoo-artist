const posts = [
  { id: "flores" as const, label: "Flores", image: null as string | null },
  { id: "borboleta" as const, label: "Borboleta", image: null as string | null },
  { id: "serpente" as const, label: "Serpente", image: null as string | null },
];

export type GalleryId = (typeof posts)[number]["id"];

export const site = {
  name: "Obsidian Ink",
  artist: "Hellen",
  role: "Tattoo artist",
  location: "Domicílio em Belém",
  locationShort: "Atendimento em domicílio",
  tagline: "Arte na pele, histórias para sempre.",
  aboutTitle: "Sobre a Obsidian Ink",
  about:
    "Tatuagens autorais, com traços delicados e muita personalidade. Aqui, cada detalhe é pensado com carinho.",
  offer: {
    visible: true as boolean,
    title: "Valores especiais de portfólio",
    detail: "A partir de R$ 60,00 (custo de material)",
  },
  links: {
    instagram: {
      label: "Falar no Instagram",
      href: "https://ig.me/m/elli_crisx",
    },
    whatsapp: {
      label: "Falar no WhatsApp",
      href: `https://wa.me/559185026381?text=${encodeURIComponent("Olá, Hellen! Quero solicitar um orçamento.")}`,
    },
  },
  gallery: [
    ...posts,
    {
      id: "logo" as const,
      label: "Logo da Obsidian Ink",
      image: "/brand/obsidian-ink-v3.png",
    },
  ],
} as const;
