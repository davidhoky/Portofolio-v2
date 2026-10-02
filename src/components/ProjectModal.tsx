"use client";

import { useEffect } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: Props) {
  const { detail } = project;
  const sourceLocked = !detail.sourceUrl;

  // Kunci scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Tutup dengan tombol Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
    >
      <div
        className={`bg-white rounded-3xl w-full max-w-[540px] shadow-2xl border border-neutral-100 p-5 sm:p-8 flex flex-col relative transform transition-all duration-300 max-h-[90vh] overflow-y-auto ${
          open ? "scale-100" : "scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-neutral-100">
          <h3 className="font-headline-md text-[20px] sm:text-[24px] font-bold text-primary tracking-tight">
            {detail.title}
          </h3>
          <button
            aria-label="Close modal"
            className="w-9 h-9 shrink-0 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Two-column Metadata: Created & Technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-neutral-100">
          <div>
            <span className="block font-label-micro uppercase tracking-wider text-[11px] text-neutral-400 font-bold mb-2">
              CREATED
            </span>
            <div className="inline-block px-3 py-1 bg-neutral-100 rounded-md font-code-mono text-[11px] font-semibold text-neutral-800">
              {detail.date}
            </div>
          </div>
          <div>
            <span className="block font-label-micro uppercase tracking-wider text-[11px] text-neutral-400 font-bold mb-2">
              TECHNOLOGIES
            </span>
            <div className="flex flex-wrap gap-1.5">
              {detail.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-neutral-100 rounded-md font-code-mono text-[10px] font-bold text-neutral-800 uppercase tracking-tight"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-5">
          <span className="block font-label-micro uppercase tracking-widest text-[11px] text-neutral-400 font-bold mb-3.5">
            KEY FEATURES
          </span>
          <div className="flex flex-col space-y-2">
            {detail.features.map((feat) => (
              <div
                key={feat}
                className="bg-neutral-50 border border-neutral-100 rounded-xl p-3.5 flex items-start gap-3"
              >
                <span className="text-primary font-bold text-[14px] leading-snug">→</span>
                <span className="font-code-mono text-[11px] font-bold text-neutral-900 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-neutral-100">
          {detail.liveUrl && (
            <a
              className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#111827] hover:bg-black text-white font-label-caps text-label-micro tracking-widest font-bold text-center uppercase transition-all shadow-sm flex items-center justify-center gap-2"
              href={detail.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span>LIVE DEMO</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          )}
          {sourceLocked ? (
            <a
              className="w-full sm:flex-1 py-3 px-5 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-400 font-label-caps text-label-micro tracking-widest font-bold text-center uppercase cursor-not-allowed flex items-center justify-center gap-2"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>SOURCE CODE</span>
            </a>
          ) : (
            <a
              className="w-full sm:flex-1 py-3 px-5 rounded-full border border-neutral-200 hover:border-neutral-800 bg-white text-neutral-800 font-label-caps text-label-micro tracking-widest font-bold text-center uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              href={detail.sourceUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>SOURCE CODE</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
