"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { images } from "@/data/images";

type NavItem = { id: string; label: string; href: string };

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#selected-works" },
  { id: "contact", label: "Contacts", href: "#contact" },
];

/** Urutan section di halaman -> menu navbar yang harus menyala */
const spySections = [
  { el: "about", nav: "about" },
  { el: "experience", nav: "experience" },
  { el: "skills", nav: "experience" },
  { el: "selected-works", nav: "projects" },
  { el: "certificates", nav: "projects" },
  { el: "contact", nav: "contact" },
];

/** Section dianggap "sedang dilihat" kalau bagian atasnya sudah lewat garis ini (px dari atas layar) */
const TOP_OFFSET = 160;

function getActiveId(): string {
  let current = "home";
  for (const s of spySections) {
    const el = document.getElementById(s.el);
    if (el && el.getBoundingClientRect().top <= TOP_OFFSET) current = s.nav;
  }
  // Sudah mentok di dasar halaman -> menu terakhir
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = "contact";
  }
  return current;
}

function NavLabel({ label, active }: { label: string; active: boolean }) {
  // Salinan tebal yang tak terlihat menjaga lebar link supaya menu tidak bergeser saat berubah tebal
  return (
    <span className={`inline-grid text-center ${active ? "font-bold" : "font-medium"}`}>
      <span aria-hidden className="col-start-1 row-start-1 invisible font-bold">
        {label}
      </span>
      <span className="col-start-1 row-start-1">{label}</span>
    </span>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef<{ id: string; until: number } | null>(null);

  // Scroll-spy: menu menyala sesuai section yang sedang dilihat
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const current = getActiveId();
      const lock = lockRef.current;
      if (lock) {
        if (Date.now() > lock.until || current === lock.id) lockRef.current = null;
        else return; // tunggu smooth-scroll hasil klik sampai tujuan
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Tutup menu hp: klik di luar, tombol Esc, atau layar dibesarkan
  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const handleNav = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setMenuOpen(false);
    lockRef.current = { id: item.id, until: Date.now() + 1500 };
    setActive(item.id);
    if (item.id === "home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-12">
      <div ref={wrapRef} className="relative w-full max-w-4xl">
        {/* Pill navbar */}
        <div className="h-14 md:h-16 w-full rounded-full bg-surface/95 backdrop-blur-md border border-neutral-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] pl-5 pr-3 md:px-7 flex items-center justify-between transition-all">
          {/* Logo + nama (selalu tampil di semua ukuran layar) */}
          <a className="flex items-center gap-4 group min-w-0" href="#home" onClick={(e) => handleNav(e, navItems[0])}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Logo"
              className="h-6 md:h-7 w-auto object-contain transition-transform group-hover:scale-105"
              src={images.logo}
            />
            <span className="font-headline-md text-[18px] md:text-[20px] tracking-tight text-primary font-bold truncate">
              Davidchrist.
            </span>
          </a>

          {/* Menu tablet & laptop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-body-sm text-[14px] lg:text-[15px] transition-colors ${
                    isActive ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                  href={item.href}
                  onClick={(e) => handleNav(e, item)}
                >
                  <NavLabel label={item.label} active={isActive} />
                </a>
              );
            })}
          </nav>

          {/* Tombol hamburger (hp) */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-10 h-10 shrink-0 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-primary transition-all duration-300 ${
                  menuOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-primary transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-primary transition-all duration-300 ${
                  menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Panel menu hp */}
        <div
          aria-hidden={!menuOpen}
          className={`md:hidden absolute left-0 right-0 top-full mt-3 origin-top rounded-3xl bg-surface/95 backdrop-blur-md border border-neutral-200/80 shadow-[0_12px_35px_-5px_rgba(0,0,0,0.12)] p-2.5 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }`}
          id="mobile-menu"
        >
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-body-sm text-[15px] px-4 py-3 rounded-2xl transition-colors ${
                    isActive
                      ? "font-bold text-primary bg-neutral-100"
                      : "font-medium text-secondary hover:bg-neutral-50 hover:text-primary"
                  }`}
                  href={item.href}
                  onClick={(e) => handleNav(e, item)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
