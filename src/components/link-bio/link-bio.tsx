import Image from "next/image";
import { site, type GalleryId } from "@/content/site";
import { GalleryArt } from "./gallery-art";
import { Header } from "./header";
import {
  ArrowIcon,
  InstagramIcon,
  TagIcon,
  WhatsAppIcon,
} from "./icons";
import { Atmosphere } from "./atmosphere";
import { Leaves } from "./leaves";
import { Petals } from "./petals";

function Portrait() {
  return (
    <div className="enter mx-auto mt-8 w-[15.5rem]" style={{ animationDelay: "70ms" }}>
      <div className="relative mx-auto aspect-[4/5] w-[13.25rem] overflow-hidden rounded-t-[999px] rounded-b-[1.4rem] border border-white/15 bg-[radial-gradient(circle_at_50%_28%,#3a3834,#171816_68%)] shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
        <div className="flex h-full flex-col items-center justify-end px-6 pb-8 text-center">
          <p className="font-display text-6xl leading-none font-medium italic text-[#f6f1e7]">
            {site.artist.slice(0, 1)}
          </p>
          <p className="mt-3 text-[0.68rem] tracking-[0.32em] text-[#d9d3c7] uppercase">
            {site.artist}
          </p>
        </div>
      </div>
    </div>
  );
}

function isIllustration(id: string): id is GalleryId {
  return id === "flores" || id === "borboleta" || id === "serpente";
}

function GalleryCard({
  id,
  label,
  image,
}: {
  id: string;
  label: string;
  image: string | null;
}) {
  const logo = id === "logo";

  return (
    <figure
      className={`enter-view overflow-hidden rounded-[1.35rem] border ${logo ? "border-[#f5f5f5] bg-[#f5f5f5]" : "border-white/12 bg-[#141513]"}`}
    >
      <div className={`relative aspect-[3/4] ${logo ? "bg-[#f5f5f5]" : ""}`}>
        {image ? (
          <Image
            src={image}
            alt={label}
            fill
            unoptimized={logo}
            className={logo ? "object-contain" : "object-cover"}
          />
        ) : isIllustration(id) ? (
          <GalleryArt id={id} />
        ) : null}
      </div>
    </figure>
  );
}

export function LinkBio() {
  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-[430px] px-5 pt-6 pb-24">
      <Petals />
      <Atmosphere />
      <Leaves />
      <div className="relative z-10">
        <Header />
        <Portrait />

        <div className="enter mt-7 text-center" style={{ animationDelay: "150ms" }}>
          <h1 className="font-display text-[3.15rem] leading-[0.9] font-medium tracking-tight text-[#f7f3ea] italic">
            {site.name}
          </h1>
          <p className="mt-3 text-[0.64rem] tracking-[0.18em] text-[#ddd6c8] uppercase">
            {site.artist}
            <span className="px-1.5 text-[#8d887e]">•</span>
            {site.role}
            <span className="px-1.5 text-[#8d887e]">•</span>
            {site.location}
          </p>
          <p className="mt-3 font-display text-[1.35rem] text-[#f3eee4] italic">
            <span aria-hidden="true" className="mr-2 text-xs not-italic">
              ✦
            </span>
            {site.tagline}
            <span aria-hidden="true" className="ml-2 text-xs not-italic">
              ✦
            </span>
          </p>
        </div>

        <div
          className="enter mt-6 grid grid-cols-2 gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={site.links.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-glow flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 text-[0.8rem] text-[#f6f1e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
          >
            <WhatsAppIcon className="size-4 shrink-0" />
            <span className="truncate">{site.links.whatsapp.label}</span>
          </a>
          <a
            href={site.links.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-glow flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 text-[0.8rem] text-[#f6f1e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
          >
            <InstagramIcon className="size-4 shrink-0" />
            <span className="truncate">{site.links.instagram.label}</span>
          </a>
        </div>

        <section
          aria-label="Prévia ilustrada do portfólio. As fotos reais entram depois."
          className="mt-4 grid grid-cols-2 gap-3"
        >
          {site.gallery.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </section>

        <section className="enter-view mt-4 flex items-center gap-3 rounded-[1.6rem] border border-white/12 bg-white/[0.03] px-5 py-4">
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-[1.35rem] text-[#f7f3ea] italic">
              {site.aboutTitle}
            </h2>
            <p className="mt-1 text-[0.82rem] leading-5 text-[#c9c3b6]">
              {site.about}
            </p>
          </div>
          <span className="grid size-8 shrink-0 place-items-center text-[#f6f1e7]">
            <ArrowIcon className="size-5" />
          </span>
        </section>

        {site.offer.visible ? (
          <p
            role="note"
            className="enter-view mt-4 flex items-start gap-3 rounded-[1.6rem] border border-white/12 bg-[#1a2420]/80 px-4 py-3"
          >
            <TagIcon className="mt-0.5 size-5 shrink-0 text-[#d7d1c4]" />
            <span>
              <span className="block text-[0.78rem] leading-tight text-[#f6f1e7]">
                {site.offer.title}
              </span>
              <span className="mt-0.5 block text-[0.68rem] leading-snug text-[#b7b1a4]">
                {site.offer.detail}
              </span>
            </span>
          </p>
        ) : null}

        <footer className="enter-view mt-8 flex flex-col items-center gap-3 text-[#f6f1e7]">
          <div className="flex items-center gap-5">
            <a
              href={site.links.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="ink-glow grid size-11 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
            >
              <InstagramIcon className="size-5" />
            </a>
            <span aria-hidden="true" className="text-[0.55rem] text-[#8d887e]">
              ✦
            </span>
            <a
              href={site.links.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="ink-glow grid size-11 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
          <p className="text-xs tracking-wide text-[#cfc8ba]">
            {site.locationShort}
          </p>
        </footer>
      </div>

      <a
        href={site.links.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="ink-glow ink-glow-solid enter fixed right-[max(1.25rem,calc(50%-195px))] bottom-5 z-30 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
        style={{ animationDelay: "360ms" }}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
