"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import {
  CloseIcon,
  InstagramIcon,
  MenuIcon,
  WhatsAppIcon,
} from "./icons";

const menuLinks = [
  {
    ...site.links.instagram,
    icon: InstagramIcon,
  },
  {
    ...site.links.whatsapp,
    icon: WhatsAppIcon,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="relative z-20 flex items-start justify-between">
      <div>
        <p className="font-display text-[1.7rem] leading-none font-medium italic tracking-wide text-[#f6f1e7]">
          {site.name}
        </p>
      </div>

      <button
        type="button"
        className="ink-glow grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-[#f6f1e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
        aria-expanded={open}
        aria-controls="menu-bio"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <CloseIcon className="size-5" />
        ) : (
          <MenuIcon className="size-5" />
        )}
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-16" id="menu-bio">
          <nav
            aria-label="Atalhos"
            className="rounded-[28px] border border-white/12 bg-[#141513]/95 p-3 shadow-2xl backdrop-blur"
          >
            <ul className="flex flex-col gap-1">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-[#f6f1e7] transition hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f1e7]"
                    onClick={() => setOpen(false)}
                  >
                    <link.icon className="size-5 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
