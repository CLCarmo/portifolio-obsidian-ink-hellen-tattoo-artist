import type { JSX } from "react";
import type { GalleryId } from "@/content/site";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Flores() {
  return (
    <svg viewBox="0 0 160 200" className="h-full w-full text-[#e7e1d4]">
      <path {...stroke} d="M80 176V92" />
      <path {...stroke} d="M80 130c-18 6-28 2-34-10" />
      <path {...stroke} d="M80 148c16 4 26-2 32-14" />
      <circle {...stroke} cx="80" cy="78" r="10" />
      <circle {...stroke} cx="68" cy="70" r="9" />
      <circle {...stroke} cx="92" cy="70" r="9" />
      <circle {...stroke} cx="64" cy="84" r="8" />
      <circle {...stroke} cx="96" cy="84" r="8" />
      <circle {...stroke} cx="80" cy="64" r="8" />
      <path {...stroke} d="M48 58c8 10 14 12 22 8" />
      <path {...stroke} d="M112 56c-8 10-16 12-24 6" />
    </svg>
  );
}

function Borboleta() {
  return (
    <svg viewBox="0 0 160 200" className="h-full w-full text-[#e7e1d4]">
      <path {...stroke} d="M80 46v108" />
      <path {...stroke} d="M80 78c-28-24-48-18-52 6 18 8 36 6 52 8" />
      <path {...stroke} d="M80 78c28-24 48-18 52 6-18 8-36 6-52 8" />
      <path {...stroke} d="M80 108c-24 8-40 28-36 46 16-8 28-10 36-6" />
      <path {...stroke} d="M80 108c24 8 40 28 36 46-16-8-28-10-36-6" />
      <path {...stroke} d="M80 28v18M74 34h12" />
      <circle cx="80" cy="24" r="1.4" fill="currentColor" />
      <circle cx="80" cy="168" r="1.2" fill="currentColor" />
    </svg>
  );
}

function Serpente() {
  return (
    <svg viewBox="0 0 160 200" className="h-full w-full text-[#e7e1d4]">
      <path
        {...stroke}
        d="M108 42c-10 8-8 20 2 26 14 8 10 24-6 30-18 6-22 22-8 32 16 12 8 28-10 34-20 6-18 24 2 30"
      />
      <path {...stroke} d="M96 48c8-2 14 2 16 8" />
      <path {...stroke} d="M78 150c-16 2-24 12-18 22" />
      <circle cx="112" cy="40" r="1.5" fill="currentColor" />
    </svg>
  );
}

const arts: Record<GalleryId, () => JSX.Element> = {
  flores: Flores,
  borboleta: Borboleta,
  serpente: Serpente,
};

export function GalleryArt({ id }: { id: GalleryId }) {
  const Art = arts[id];
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#2a2926,#141513_72%)] p-4">
      <Art />
    </div>
  );
}
