import Reveal from "./Reveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-28 scroll-mt-28"
      id="experience"
    >
      <Reveal>
        <div className="flex flex-col mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">CAREER PATH</span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Work Experience</h2>
        </div>
      </Reveal>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Reveal key={`${exp.role}-${exp.period}`}>
            <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center justify-between border border-neutral-100">
              <div className="md:w-48 shrink-0 flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${exp.active ? "bg-status-online" : "bg-secondary"}`}></span>
                <span className="font-code-mono text-code-mono font-bold text-secondary">{exp.period}</span>
              </div>
              <div className="flex-1 flex flex-col space-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">{exp.role}</h3>
                  <span className="font-label-micro text-label-micro uppercase tracking-wider text-secondary px-2.5 py-0.5 bg-surface-container-high rounded-full">
                    {exp.org}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-low rounded-lg font-code-mono text-[11px] text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
