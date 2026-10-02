"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Kelas layout untuk pembungkus (mis. "lg:col-span-6", "h-full") */
  className?: string;
  /** Jeda sebelum animasi mulai, dalam ms (untuk efek berurutan) */
  delay?: number;
  /** true = animasi sekali saja, false = ulang tiap masuk layar */
  once?: boolean;
};

/**
 * Membungkus elemen agar muncul dengan fade-in + pop up + blur tipis
 * saat masuk ke layar. Gaya animasinya ada di globals.css (.reveal).
 * Animasi baru mulai setelah loading screen selesai (event "page-ready").
 */
export default function Reveal({ children, className = "", delay = 0, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const start = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer?.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      observer.observe(el);
    };

    if (document.documentElement.classList.contains("page-ready")) start();
    else window.addEventListener("page-ready", start, { once: true });

    return () => {
      window.removeEventListener("page-ready", start);
      observer?.disconnect();
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
