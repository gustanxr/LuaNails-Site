"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "./logo.svg";

function HeaderLogo() {
  return (
    <a href="#inicio" aria-label="LuaNail, início" className="shrink-0">
      <Image src={logo} alt="" priority className="h-9 w-28 object-contain max-[360px]:w-24 sm:h-11 sm:w-40" />
    </a>
  );
}

const links = [
  { label: "sobre", href: "#sobre" },
  { label: "serviços", href: "#servicos" },
  { label: "trabalhos", href: "#trabalhos" },
];

export default function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape") setMenuOpen(false);
      }}
      className="sticky top-3 z-50 mx-auto mt-3 mb-4 w-[calc(100%-1.5rem)] max-w-7xl rounded-full border border-white/70 bg-cream/60 px-3 py-1.5 shadow-[0_8px_24px_rgba(16,42,67,0.14)] backdrop-blur-2xl sm:px-5"
    >
      <div className="flex items-center justify-between gap-2">
        <HeaderLogo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[.13em] md:flex">
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-berry" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1 rounded-full border-2 border-ink bg-lime px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-wide shadow-[3px_3px_0_#102A43] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:gap-2 sm:px-4 sm:text-xs"
          >
            bora conversar <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink transition hover:bg-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry md:hidden"
          >
            <span aria-hidden="true" className="flex h-4 w-5 flex-col justify-center gap-1">
              <span className={`h-0.5 w-full rounded-full bg-ink transition duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full rounded-full bg-ink transition duration-300 ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`h-0.5 w-full rounded-full bg-ink transition duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navegação móvel"
        hidden={!menuOpen}
        className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-3xl border border-white/70 bg-cream/95 p-3 shadow-[0_8px_24px_rgba(16,42,67,0.14)] backdrop-blur-xl md:hidden"
      >
        {links.map((link) => (
          <a
            key={link.href}
            className="block rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-[.13em] transition hover:bg-lime hover:text-ink"
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
