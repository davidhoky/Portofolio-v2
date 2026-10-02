"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "@/data/images";

const FALLBACK_MS = 4000; // pengaman kalau animasi bar tidak sempat selesai
const FADE_MS = 600; // lama fade-out

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  // Dipanggil saat progress bar penuh: langsung masuk ke web
  const finish = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setLeaving(true);
    // Memberi tahu Reveal bahwa animasi scroll boleh mulai
    document.documentElement.classList.add("page-ready");
    window.dispatchEvent(new Event("page-ready"));
    setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, FADE_MS);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fallback = setTimeout(finish, FALLBACK_MS);
    return () => clearTimeout(fallback);
  }, [finish]);

  if (done) return null;

  return (
    <div
      aria-busy={!leaving}
      aria-live="polite"
      className={`preloader fixed inset-0 z-[100] bg-[#fafafa] font-loader antialiased text-neutral-800 transition-opacity ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <main className="relative min-h-screen w-full flex items-center justify-center p-6">
        {/* Glow latar */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-[580px] h-[580px] max-w-full rounded-full bg-gradient-to-tr from-slate-200/40 via-neutral-100/60 to-transparent blur-3xl animate-ambient-glow"></div>
          <div className="absolute w-[320px] h-[320px] rounded-full bg-white/80 blur-2xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
          {/* Logo (PNG transparan) */}
          <div className="mb-5 transition-transform duration-500 ease-out hover:scale-105 opacity-0 animate-logo-popup">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Monogram Logo"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
              src={images.loaderLogo}
            />
          </div>

          <p className="text-[11px] sm:text-xs font-semibold tracking-ultra-wide uppercase text-neutral-500 mb-6 pl-1 opacity-0 animate-text-reveal">
            PORTOFOLIO LOADING
          </p>

          {/* Progress bar: jalan sekali, begitu penuh langsung masuk web */}
          <div className="w-48 sm:w-52 h-[2.5px] bg-neutral-200/90 rounded-full overflow-hidden relative shadow-inner opacity-0 animate-bar-reveal">
            <div
              aria-label="Portfolio Loading Progress"
              aria-valuemax={100}
              aria-valuemin={0}
              className="h-full w-0 bg-neutral-900 rounded-full animate-progress will-change-transform"
              onAnimationEnd={(e) => {
                if (e.animationName === "progressFill") finish();
              }}
              role="progressbar"
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
