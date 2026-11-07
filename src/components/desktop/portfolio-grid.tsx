"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryArt } from "@/components/link-bio/gallery-art";
import type { GalleryId } from "@/content/site";

type Category = "all" | "botanica" | "fineline" | "fauna";

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "botanica", label: "Botânica e florais" },
  { id: "fineline", label: "Fineline delicado" },
  { id: "fauna", label: "Fauna e serpentes" },
];

const works: {
  title: string;
  detail: string;
  category: Exclude<Category, "all">;
  art?: GalleryId;
  image?: string;
}[] = [
  {
    title: "Orquídea selvagem",
    detail: "Traço fino • botânica floral",
    category: "botanica",
    art: "flores",
  },
  {
    title: "Morpho celestial",
    detail: "Micro-pontilhismo e linha única",
    category: "fineline",
    art: "borboleta",
  },
  {
    title: "Serpente do sanctum",
    detail: "Autoral • anatomia e folhagens",
    category: "fauna",
    art: "serpente",
  },
  {
    title: "Obsidian Ink",
    detail: "Marca do ateliê",
    category: "fauna",
    image: "/brand/obsidian-ink-v3.png",
  },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Category>("all");
  const visible = works.filter((work) => filter === "all" || work.category === filter);

  return (
    <section id="portfolio" className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-10">
      <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-[#b7ccbc] uppercase">
            Galeria de tatuagens
          </p>
          <h2 className="font-display mt-2 text-4xl text-[#fffbff]">Trabalhos em destaque</h2>
          <p className="mt-2 max-w-xl text-sm text-[#cbc6bc]">
            Uma seleção de tatuagens realizadas. As imagens são
            importadas diretamente do Instagram, trazendo registros reais dos
            trabalhos publicados no perfil.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-4 py-2 text-[13px] ${
                filter === item.id
                  ? "bg-[#e5dfd5] text-[#33302a]"
                  : "bg-[#282a29] text-[#e2e3e0]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((work) => (
          <figure
            key={work.title}
            className="group relative overflow-hidden rounded-2xl bg-[#1a1c1b]"
          >
            <div className="relative aspect-[3/4]">
              {work.image ? (
                <Image src={work.image} alt={work.title} fill className="object-contain bg-[#f5f5f5]" />
              ) : work.art ? (
                <GalleryArt id={work.art} />
              ) : null}
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d0f0e] to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <span className="font-display block text-lg text-[#fffbff]">{work.title}</span>
              <span className="text-xs text-[#b7ccbc]">{work.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
