import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import { GitHubIcon, InstagramIcon, LinkedInIcon, VerifiedIcon } from "./icons";
import { images } from "@/data/images";
import { site } from "@/data/site";

const socialBtn =
  "w-10 h-10 rounded-xl bg-white border border-neutral-200/90 text-[#374151] hover:text-black hover:border-neutral-400 flex items-center justify-center transition-all shadow-sm";

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 pt-14 pb-20 md:pt-24 md:pb-28 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
          <Reveal>
            <div className="flex flex-col space-y-1">
              <h1 className="font-display-2xl text-[34px] min-[400px]:text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] tracking-tight font-extrabold text-[#111827] leading-[1.08] whitespace-nowrap">
                Hi, I&apos;m <span className="text-primary">David</span>
              </h1>
              <div className="h-10 md:h-12 flex items-center">
                <Typewriter words={["Web Developer", "AI Developer"]} />
                <span className="inline-block w-[3px] h-7 md:h-9 bg-primary ml-1.5 animate-pulse font-normal">|</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-body-base text-[15px] sm:text-[16px] text-[#6b7280] max-w-lg leading-relaxed">
              Halo!&nbsp;<i>I turn complex ideas into seamless products.</i> Saya suka bereksperimen dengan AI dan
              menulis kode untuk menghadirkan <i>digital experience</i> yang inovatif serta memberikan dampak nyata.
            </p>
          </Reveal>

          {/* CTA Action Buttons */}
          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="px-7 py-3 rounded-full bg-[#111827] text-white font-body-sm text-[14px] font-semibold tracking-wide hover:bg-black transition-all shadow-md flex items-center gap-2 group"
                href="#selected-works"
              >
                <span>Explore Work</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="px-7 py-3 rounded-full bg-white text-[#111827] border border-neutral-300 font-body-sm text-[14px] font-semibold tracking-wide hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm flex items-center gap-2"
                download="CV_DavidChristianGoldenMahaviro.pdf"
                href="/CV_DavidChristianGoldenMahaviro.pdf"
              >
                <span>Download CV</span>
                <span className="material-symbols-outlined text-[18px]">download</span>
              </a>
            </div>
          </Reveal>

          {/* Connect Socials */}
          <Reveal delay={360}>
            <div className="flex flex-col gap-2.5 pt-4">
              <span className="font-label-micro text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                CONNECT
              </span>
              <div className="flex items-center gap-3">
                <a aria-label="Instagram" className={socialBtn} href={site.instagram.url} rel="noreferrer" target="_blank">
                  <InstagramIcon />
                </a>
                <a aria-label="GitHub" className={socialBtn} href={site.github.url} rel="noreferrer" target="_blank">
                  <GitHubIcon />
                </a>
                <a aria-label="LinkedIn" className={socialBtn} href={site.linkedin.url} rel="noreferrer" target="_blank">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Visual Photo */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
          <Reveal delay={200} className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[450px] aspect-[4/4.2] flex items-center justify-center">
              <div className="w-full h-full rounded-[32px] overflow-hidden border-8 border-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.14)] bg-[#182352] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Glowing developer portrait on deep blue background"
                  className="w-full h-full object-cover scale-105"
                  src={images.heroPhoto}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1638]/70 via-transparent to-transparent"></div>
              </div>
              {/* Floating Profile Card */}
              <div className="absolute -left-3 sm:-left-8 bottom-6 sm:bottom-8 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_35px_-5px_rgba(0,0,0,0.15)] border border-neutral-100/90 flex items-center gap-3.5 transition-transform hover:-translate-y-1 z-10">
                <div className="relative">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-neutral-900 border-2 border-white shadow-sm flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="David Christian" className="w-full h-full object-cover" src={images.profileAvatar} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-status-online border-2 border-white"></span>
                </div>
                <div className="flex flex-col pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-md text-[14px] sm:text-[15px] font-bold text-[#111827] leading-tight">
                      David Christian
                    </span>
                    <VerifiedIcon />
                  </div>
                  <span className="font-body-sm text-[11px] sm:text-[12px] text-secondary font-medium">
                    @davidhoky_ • Fullstack &amp; AI Developer
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
