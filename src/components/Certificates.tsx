import Reveal from "./Reveal";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 pb-20 md:pb-28 pt-4 md:pt-8 scroll-mt-28"
      id="certificates"
    >
      <Reveal>
        <div className="flex flex-col mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">ACHIEVEMENTS</span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Certificates</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((c, i) => (
          <Reveal key={c.id} className="h-full" delay={(i % 3) * 120}>
            <div className="group bg-surface rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 border border-neutral-100 h-full">
              <a
                aria-label={`Open ${c.title} certificate`}
                className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low mb-5 border border-neutral-100"
                href={c.url}
                rel="noreferrer"
                target="_blank"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`${c.title} certificate`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  src={c.image}
                />
                <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm font-code-mono text-[10px] text-secondary">
                  {c.date}
                </div>
              </a>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-surface-container-low rounded-md font-code-mono text-[10px] text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline-md text-title-base text-primary mb-1">{c.title}</h3>
              <span className="font-label-micro text-label-micro uppercase tracking-wider text-secondary mb-3">
                {c.issuer}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1 leading-relaxed">{c.description}</p>
              <div className="pt-6 flex items-center justify-between">
                <a
                  className="group/btn inline-flex items-center gap-2 font-label-caps text-label-micro uppercase tracking-widest text-primary font-bold"
                  href={c.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>VIEW CERTIFICATE</span>
                  <span className="w-6 h-[2px] bg-primary group-hover/btn:w-10 transition-all"></span>
                </a>
                <a
                  aria-label="Open certificate"
                  className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors"
                  href={c.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
