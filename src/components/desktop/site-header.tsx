"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";
import { site } from "@/content/site";

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section || id === "inicio") {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
    return;
  }

  const headerHeight = 80;
  const rect = section.getBoundingClientRect();
  const sectionTop = window.scrollY + rect.top;
  const room = window.innerHeight - headerHeight;

  const top =
    rect.height <= room
      ? sectionTop - headerHeight - (room - rect.height) / 2
      : sectionTop - headerHeight - Math.min(48, room * 0.12);

  window.scrollTo({ top: Math.max(0, top), behavior: scrollBehavior() });
}

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#cuidados", label: "Cuidados" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#biosseguranca", label: "Biossegurança" },
  { href: "#orcamento", label: "Contato" },
];

function sectionAtCenter() {
  const marker = window.innerHeight * 0.42;
  const ids = links.map((link) => link.href.slice(1));
  let current = ids[0];

  for (const id of ids) {
    const section = document.getElementById(id);
    if (!section) continue;
    const rect = section.getBoundingClientRect();
    if (rect.top <= marker && rect.bottom > marker) return id;
    if (rect.top <= marker) current = id;
  }

  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  return atBottom ? ids[ids.length - 1] : current;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    let frame = 0;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(sectionAtCenter()));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function goTo(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const id = href.slice(1);
    if (!document.getElementById(id)) return;
    event.preventDefault();
    setActive(id);
    setOpen(false);
    scrollToSection(id);
    history.replaceState(null, "", href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e5dfd5]/10 bg-[#121413]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" onClick={(event) => goTo(event, "#inicio")}>
          <Image
            src="/brand/obsidian-ink-v3.png"
            alt="Logo da Obsidian Ink"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full bg-[#f5f5f5] object-cover"
          />
          <span className="min-w-0">
            <span className="font-display block truncate text-[1.35rem] leading-none text-[#fffbff]">
              {site.name}
            </span>
            <span className="mt-1 block truncate text-xs tracking-[0.14em] text-[#b7ccbc] uppercase sm:tracking-[0.22em]">
              Belém PA
            </span>
          </span>
        </a>

        <nav aria-label="Seções" className="hidden items-center gap-5 xl:flex">
          {links.map((link) => {
            const selected = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={selected ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-[13px] transition ${
                  selected
                    ? "bg-[#3b4d42] text-[#fffbff]"
                    : "text-[#cbc6bc] hover:text-[#fffbff]"
                }`}
                onClick={(event) => goTo(event, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#orcamento"
            onClick={(event) => goTo(event, "#orcamento")}
            className="hidden rounded-full bg-[#e5dfd5] px-5 py-2 text-[13px] font-medium text-[#33302a] transition hover:bg-white sm:inline-flex"
          >
            Agendar
          </a>
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[#e5dfd5]/20 text-[#e5dfd5] xl:hidden"
            aria-expanded={open}
            aria-controls="menu-site"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-site" aria-label="Seções" className="border-t border-[#e5dfd5]/10 bg-[#121413] px-5 pt-4 pb-24 xl:hidden">
          {links.map((link) => {
            const selected = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={selected ? "page" : undefined}
                className={`block rounded-full px-4 py-3 text-sm ${
                  selected ? "bg-[#3b4d42] text-[#fffbff]" : "text-[#e2e3e0]"
                }`}
                onClick={(event) => goTo(event, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
