"use client";

import { useState } from "react";
import { DownloadIcon } from "@/components/link-bio/icons";

const slides = [
  {
    tab: "Cuidados pré tatuagem",
    badge: "Preparação",
    title: "Cuidados pré tatuagem",
    text: "Prepare a pele para uma tatuagem impecável e uma cicatrização tranquila.",
    items: [
      "Hidrate bem a pele nos dias que antecedem a tatuagem.",
      "Evite álcool, medicamentos anticoagulantes e exposição solar.",
      "Mantenha-se bem alimentado e hidratado.",
    ],
  },
  {
    tab: "Cuidados pós tatuagem",
    badge: "Aftercare",
    title: "Cuidados pós tatuagem",
    text: "Retenção do pigmento e cicatrização uniforme, sem cascas espessas.",
    items: [
      "Mantenha a película de segunda pele nos primeiros dias, conforme a orientação.",
      "Lave com sabonete neutro e seque sem esfregar.",
      "Evite sol, mar, sauna e piscina por no mínimo 20 dias.",
    ],
  },
  {
    tab: "Quem pode tatuar",
    badge: "Saúde",
    title: "Quem pode tatuar?",
    text: "A avaliação de saúde deixa a experiência mais tranquila e segura.",
    items: [
      "Maiores de 18 anos, com documento original e foto.",
      "Gestantes e lactantes aguardam o fim desse período.",
      "Doenças crônicas ou de pele pedem autorização médica.",
    ],
  },
  {
    tab: "Perguntas frequentes",
    badge: "FAQ",
    title: "Perguntas frequentes",
    text: "Tempo de sessão, dor e cicatrização entram na conversa antes da data.",
    items: [
      "O desenho final é enviado antes da sessão para aprovação.",
      "A reserva pede um sinal, abatido no valor da sessão.",
      "O atendimento é em domicílio, em Belém, com hora marcada.",
    ],
  },
];

function GuideLink({ className }: { className?: string }) {
  return (
    <a
      href="/guias/guia-cuidados-tatuagem.pdf"
      download="guia-cuidados-tatuagem.pdf"
      className={`min-h-11 items-center justify-center gap-2 rounded-full border border-[#e5dfd5]/20 px-4 py-3 text-sm text-[#e5dfd5] transition hover:bg-white/5 ${className ?? ""}`}
    >
      <DownloadIcon className="size-4" />
      Baixar guia completo
    </a>
  );
}

export function CarePanel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section id="cuidados" className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="rounded-2xl border border-[#242424] bg-[#080808]/90 p-5 sm:p-7 lg:contents">
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:justify-between lg:rounded-2xl lg:border lg:border-[#242424] lg:bg-[#080808]/90 lg:p-7">
            <div>
              <h2 className="font-display text-[1.75rem] text-[#f5f2eb]">Cuidados</h2>
              <p className="mt-1 text-sm text-[#cbc6bc]">Pré e pós tatuagem</p>

              <div
                role="tablist"
                aria-label="Temas de cuidados"
                className="mt-6 flex flex-wrap gap-2 lg:hidden"
              >
                {slides.map((item, itemIndex) => {
                  const active = itemIndex === index;
                  return (
                    <button
                      key={item.badge}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setIndex(itemIndex)}
                      className={`shrink-0 rounded-full border px-3 py-2 text-xs tracking-[0.16em] uppercase transition ${
                        active
                          ? "border-[#b7ccbc]/70 bg-[#2a382e] text-[#fffbff]"
                          : "border-white/15 text-[#cbc6bc]"
                      }`}
                    >
                      {item.badge}
                    </button>
                  );
                })}
              </div>

              <div className="my-6 hidden h-px bg-white/10 lg:block" />
              <div className="hidden flex-col gap-2 lg:flex" role="tablist" aria-label="Temas de cuidados">
                {slides.map((item, itemIndex) => {
                  const active = itemIndex === index;
                  return (
                    <button
                      key={item.tab}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setIndex(itemIndex)}
                      className={`flex min-h-11 items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition ${
                        active
                          ? "border-[#445b4c] bg-[#2a382e] text-[#fffbff]"
                          : "border-transparent text-[#cbc6bc] hover:bg-white/5"
                      }`}
                    >
                      <span>{item.tab}</span>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] tracking-[0.16em] uppercase ${
                          active
                            ? "border-[#b7ccbc]/50 bg-[#1c241f] text-[#b7ccbc]"
                            : "border-white/10 text-[#9c978e]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <GuideLink className="mt-8 hidden lg:inline-flex" />
          </div>

          <div
            aria-live="polite"
            role="tabpanel"
            className="mt-6 lg:col-span-8 lg:mt-0 lg:flex lg:min-h-[420px] lg:flex-col lg:justify-center lg:rounded-2xl lg:border lg:border-[#242424] lg:bg-[#080808] lg:p-12"
          >
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                aria-label="Slide anterior"
                className="grid size-11 place-items-center rounded-full border border-white/15"
                onClick={() => setIndex((value) => (value + slides.length - 1) % slides.length)}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Próximo slide"
                className="grid size-11 place-items-center rounded-full border border-white/15"
                onClick={() => setIndex((value) => (value + 1) % slides.length)}
              >
                ›
              </button>
            </div>
            <p className="w-fit rounded-full border border-[#b7ccbc]/30 bg-[#1c241f] px-3 py-1 text-xs tracking-[0.18em] text-[#b7ccbc] uppercase">
              {slide.badge}
            </p>
            <h3 className="font-display mt-4 text-3xl text-[#f5f2eb] sm:text-4xl">{slide.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#cbc6bc]">{slide.text}</p>
            <ul className="mt-6 space-y-3">
              {slide.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#ded9cf]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#b7ccbc]/40 bg-[#2a382e] text-[#b7ccbc]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GuideLink className="mt-8 inline-flex lg:hidden" />
        </div>
      </div>
    </section>
  );
}
