import Reveal from "./Reveal";
import { aiTools, techStack, type Tech } from "@/data/techstack";

function Badge({ name, icon }: Tech) {
  return (
    <div className="bg-surface hover:bg-neutral-50 px-4 py-3 rounded-2xl border border-neutral-200/80 hover:border-neutral-300 flex items-center gap-2.5 transition-all shadow-sm group">
      {icon}
      <span className="font-body-sm text-[14px] font-semibold text-on-surface">{name}</span>
    </div>
  );
}

// Jeda bertahap per badge, dibatasi supaya tidak kelamaan
const stagger = (i: number) => (i % 6) * 60;

export default function TechStack() {
  return (
    <section id="skills" className="w-full bg-surface py-20 md:py-28 shadow-[inset_0_1px_0_rgba(107,114,128,0.06)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">
              SKILLS &amp; TOOLS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">My Tech Stack</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {techStack.map((t, i) => (
            <Reveal key={t.name} delay={stagger(i)}>
              <Badge {...t} />
            </Reveal>
          ))}
        </div>

        {/* AI TOOLS */}
        <div className="mt-20 pt-16 border-t border-neutral-200/70">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">AI TOOLS</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {aiTools.map((t, i) => (
              <Reveal key={t.name} delay={stagger(i)}>
                <Badge {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
