"use client";

import { useCallback, useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [open, setOpen] = useState(false);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  const openProject = (id: string) => {
    setActiveId(id);
    setOpen(true);
  };
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <section
        className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-28 scroll-mt-28"
        id="selected-works"
      >
        <Reveal>
          <div className="flex flex-col mb-12">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">PORTFOLIO</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Selected Works</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} className="h-full" delay={(i % 3) * 120}>
              <div className="group bg-surface rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 border border-neutral-100 h-full">
                <div
                  className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container-high mb-5 cursor-pointer"
                  onClick={() => openProject(p.id)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={p.card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={p.image}
                  />
                  {p.card.badge !== undefined && (
                    <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                      {p.card.badge}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-surface-container-low rounded-md font-code-mono text-[10px] text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="font-headline-md text-title-base text-primary mb-2 cursor-pointer hover:text-black"
                  onClick={() => openProject(p.id)}
                >
                  {p.card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1 leading-relaxed">
                  {p.card.description}
                </p>
                <div className="pt-6 flex items-center justify-between">
                  <button
                    className="group/btn inline-flex items-center gap-2 font-label-caps text-label-micro uppercase tracking-widest text-primary font-bold cursor-pointer"
                    onClick={() => openProject(p.id)}
                    type="button"
                  >
                    <span>VIEW DETAILS</span>
                    <span className="w-6 h-[2px] bg-primary group-hover/btn:w-10 transition-all"></span>
                  </button>
                  <button
                    aria-label="Open details"
                    className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                    onClick={() => openProject(p.id)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View More Projects Button */}
        <Reveal>
          <div className="flex justify-center mt-12">
            <a
              className="px-8 py-3.5 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-caps text-label-caps tracking-widest transition-all shadow-sm flex items-center gap-2 border border-neutral-200/50"
              href={site.github.url}
              rel="noreferrer"
              target="_blank"
            >
              <span>VIEW MORE PROJECT</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </Reveal>
      </section>

      <ProjectModal project={active} open={open} onClose={close} />
    </>
  );
}
