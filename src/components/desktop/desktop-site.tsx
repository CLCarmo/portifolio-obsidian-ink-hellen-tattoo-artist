import Image from "next/image";
import { site } from "@/content/site";
import { Petals } from "@/components/link-bio/petals";
import { WhatsAppIcon } from "@/components/link-bio/icons";
import { CarePanel } from "./care-panel";
import { PortfolioGrid } from "./portfolio-grid";
import { QuoteForm } from "./quote-form";
import { SiteHeader } from "./site-header";

const ticker = [
  "Tatuagens Fine Line e delicadas",
  "Estilo Old School",
  "Rigor com a biossegurança",
  "Materiais de marcas reconhecidas e confiáveis",
  "Atendimento exclusivo em domicílio",
];

const safety = [
  {
    title: "Tintas de qualidade",
    text: "Seleção de pigmentos de marcas confiáveis, com atenção à procedência e à qualidade dos materiais utilizados.",
  },
  {
    title: "Ambiente protegido",
    text: "Superfícies e equipamentos protegidos com barreiras descartáveis, substituídas a cada atendimento.",
  },
  {
    title: "Cuidados pós-tatuagem",
    text: "Orientações sobre cicatrização, higienização e cuidados com a tatuagem, incluindo o uso de segunda pele quando indicado.",
  },
];

export function DesktopSite() {
  return (
    <div className="relative min-h-dvh bg-[#121413] text-[#e2e3e0]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-[#e5dfd5] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#33302a]"
      >
        Pular para o conteúdo
      </a>
      <Petals />
      <SiteHeader />
      <main id="conteudo" className="relative z-10 pt-20">
        <section id="inicio" className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-5 py-16 lg:flex-row lg:px-10 lg:py-28">
          <div className="w-full lg:w-7/12">
            <h1 className="font-display text-4xl leading-tight text-[#fffbff] sm:text-5xl lg:text-6xl">
              Arte na pele,{" "}
              <span className="italic text-[#cbc6bc]">histórias para sempre.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 font-light text-[#cbc6bc]">
              Traços finos e delicados com a Hellen. Atendimento em domicílio, em
              Belém, com hora marcada, para uma experiência acolhedora e personalizada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#orcamento"
                className="rounded-full bg-[#e5dfd5] px-6 py-3.5 text-sm font-semibold text-[#33302a]"
              >
                Solicitar orçamento exclusivo
              </a>
              <a
                href="#portfolio"
                className="rounded-full bg-[#282a29] px-6 py-3.5 text-sm text-[#e2e3e0]"
              >
                Explorar portfólio
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-6 lg:grid-cols-3">
              <div>
                <p className="font-display text-2xl leading-snug text-[#fffbff]">
                  Preço Especial para
                </p>
                <p className="text-xs tracking-[0.18em] text-[#cbc6bc] uppercase">
                  Portifolio
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-[#fffbff]">Hellen</p>
                <p className="text-xs tracking-[0.18em] text-[#cbc6bc] uppercase">
                  Artista
                </p>
              </div>
              <div>
                <p className="font-display text-2xl leading-snug text-[#fffbff]">
                  Atendimento em Domicílio
                </p>
                <p className="text-xs tracking-[0.18em] text-[#cbc6bc] uppercase">
                  Em Belém
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md lg:w-5/12">
            <div className="overflow-hidden rounded-t-[14rem] rounded-b-3xl border border-[#e5dfd5]/15 bg-[#1a1c1b] shadow-2xl">
              <div className="relative aspect-[3/4.2]">
                <Image
                  src="/brand/obsidian-ink-v3.png"
                  alt="Logo da Obsidian Ink"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain bg-[#f5f5f5] p-8"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-[#282a29]/90 px-4 py-3 backdrop-blur">
                <div>
                  <p className="text-sm text-[#fffbff]">Hellen • Obsidian Ink</p>
                  <p className="text-xs text-[#b7ccbc]">Fineline e Old School</p>
                </div>
                <span className="rounded-full bg-[#0d0f0e] px-2.5 py-1 text-xs text-[#e5dfd5]">
                  Belém
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden bg-[#0d0f0e] py-4">
          <div className="ticker-track flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-10 pr-10 text-xs tracking-[0.2em] text-[#cbc6bc] uppercase"
                aria-hidden={copy === 1}
              >
                {ticker.map((item) => (
                  <span key={item} className="shrink-0">
                    ✦ {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <CarePanel />
        <PortfolioGrid />

        <section id="biosseguranca" className="bg-[#1a1c1b] px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs tracking-[0.22em] text-[#b7ccbc] uppercase">
                Segurança em cada detalhe
              </p>
              <h2 className="font-display mt-2 text-3xl text-[#fffbff] sm:text-4xl">
                Biossegurança e cuidado em cada sessão
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#cbc6bc]">
                Cada tatuagem é realizada com atenção à higiene, à segurança e ao
                bem-estar. Do preparo do ambiente aos cuidados após a sessão, cada
                etapa segue práticas de biossegurança para proporcionar uma
                experiência segura e tranquila.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {safety.map((item) => (
                <article key={item.title} className="rounded-2xl bg-[#1e201f] p-6">
                  <h3 className="font-display text-2xl text-[#fffbff]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#cbc6bc]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="orcamento" className="bg-[#0d0f0e] px-5 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
            <div className="rounded-3xl bg-[#1e201f] p-8 lg:col-span-7 lg:p-12">
              <p className="text-xs tracking-[0.22em] text-[#b7ccbc] uppercase">
                Reserva e criação
              </p>
              <h2 className="font-display mt-2 text-3xl text-[#fffbff] sm:text-4xl">
                Solicite seu orçamento exclusivo
              </h2>
              <p className="mt-3 mb-8 text-sm text-[#cbc6bc]">
                Os detalhes seguem para o WhatsApp da Hellen.
              </p>
              <QuoteForm />
            </div>
            <aside className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-3xl bg-[#1e201f] p-8">
                <h3 className="font-display text-3xl text-[#fffbff]">Atendimento em domicílio</h3>
                <p className="mt-4 text-sm leading-6 text-[#cbc6bc]">
                  Ainda não há estúdio fixo. As sessões acontecem em residência, em Belém,
                  e o endereço é combinado no agendamento.
                </p>
                <a
                  href={site.links.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center rounded-full bg-[#3b4d42] py-3 text-sm text-[#d3e8d8]"
                >
                  Conversar no WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <a
                  href={site.links.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center rounded-full border border-[#e5dfd5]/15 py-3 text-sm"
                >
                  Falar no Instagram • @obsidiantattooink
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-[#0d0f0e] px-5 pt-14 pb-24 lg:px-10 lg:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl text-[#fffbff]">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm text-[#cbc6bc]">
              Tatuagem em Belém. Arte na pele, histórias para sempre.
            </p>
          </div>
          <p className="text-sm text-[#cbc6bc]">© 2026 Obsidian Ink. Belém, PA.</p>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[#e5dfd5]/10 pt-8">
          <a
            href="https://www.optosite.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex w-fit items-center gap-2.5 text-xs tracking-[0.14em] text-[#cbc6bc] uppercase hover:text-[#fffbff]"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#f4f1ea]">
              <Image
                src="/brand/opto-azul.png"
                alt=""
                width={28}
                height={28}
                className="size-7 rounded-md"
              />
            </span>
            Opto Site
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      </footer>

      <a
        href={site.links.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp (abre em nova aba)"
        className="fixed right-6 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
