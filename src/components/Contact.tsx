import Reveal from "./Reveal";
import { GitHubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons";
import { images } from "@/data/images";
import { site } from "@/data/site";

const cardBase =
  "group bg-white border p-4 sm:p-4.5 rounded-2xl shadow-sm transition-all duration-200 flex items-center justify-between";

export default function Contact() {
  return (
    <section
      className="w-full bg-surface py-20 md:py-28 shadow-[inset_0_1px_0_rgba(107,114,128,0.06)] scroll-mt-28"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex flex-col mb-12">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">GET IN TOUCH</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Contact Me</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left card */}
          <Reveal className="lg:col-span-6">
            <div className="h-full bg-surface-container-low rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-neutral-200/70 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
              <div className="flex flex-col space-y-6 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-status-online animate-pulse"></span>
                    <span className="font-code-mono text-[12px] font-bold text-on-surface">Available for Opportunities</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-neutral-200/80 p-1.5 flex items-center justify-center shadow-xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="David Logo" className="w-full h-full object-contain" src={images.contactLogo} />
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <h3 className="font-headline-md text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111827] tracking-tight leading-[1.2]">
                    Let&apos;s Connect &amp; Build Together
                  </h3>
                  <p className="font-body-base text-[14px] sm:text-[15px] text-[#6b7280] leading-relaxed">
                    Saya selalu terbuka untuk peluang kolaborasi baru, magang, atau posisi penuh waktu di bidang AI dan
                    Web Development. Mari diskusikan bagaimana kita bisa menciptakan solusi digital yang berdampak
                    bersama!
                  </p>
                </div>
              </div>
              <div className="pt-8 mt-6 border-t border-neutral-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
                <div className="flex flex-wrap items-center gap-2"></div>
                <span className="font-body-sm text-[12px] font-semibold text-secondary flex items-center gap-1">
                  Reach out on the right <span className="text-primary font-bold">→</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: Interactive Contact Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-3.5 justify-center">
            {/* GitHub */}
            <Reveal delay={80}>
              <a
                className={`${cardBase} border-neutral-200/90 hover:bg-neutral-50 hover:border-neutral-800`}
                href={site.github.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-headline-md text-[15px] font-bold text-primary leading-tight">GitHub</span>
                    <span className="font-body-sm text-[13px] text-secondary">{site.github.label}</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-primary group-hover:translate-x-1.5 transition-all text-[20px]">
                  arrow_forward
                </span>
              </a>
            </Reveal>

            {/* Email */}
            <Reveal delay={160}>
              <a
                className={`${cardBase} border-neutral-200/90 hover:bg-neutral-50 hover:border-neutral-800`}
                href={`mailto:${site.email}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">mail</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-headline-md text-[15px] font-bold text-primary leading-tight">Email</span>
                    <span className="font-body-sm text-[13px] text-secondary truncate max-w-[200px] sm:max-w-none">
                      {site.email}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-primary group-hover:translate-x-1.5 transition-all text-[20px]">
                  arrow_forward
                </span>
              </a>
            </Reveal>

            {/* WhatsApp */}
            <Reveal delay={240}>
              <a
                className={`${cardBase} border-neutral-200/90 hover:bg-[#f4fbf7] hover:border-emerald-500 active:bg-[#ebf8f0] active:border-emerald-500 focus-visible:border-emerald-500`}
                href={site.whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 group-hover:bg-white group-active:bg-white flex items-center justify-center text-neutral-900 group-hover:text-emerald-600 group-active:text-emerald-600 transition-colors">
                    <WhatsAppIcon />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-headline-md text-[15px] font-bold text-primary group-hover:text-emerald-950 group-active:text-emerald-950 leading-tight">
                      WhatsApp
                    </span>
                    <span className="font-body-sm text-[13px] text-secondary group-hover:text-emerald-700 group-active:text-emerald-700">
                      {site.phone}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-emerald-600 group-active:text-emerald-600 group-hover:translate-x-1.5 transition-all text-[20px]">
                  arrow_forward
                </span>
              </a>
            </Reveal>

            {/* LinkedIn */}
            <Reveal delay={320}>
              <a
                className={`${cardBase} border-neutral-200/90 hover:bg-blue-50/40 hover:border-blue-500`}
                href={site.linkedin.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 group-hover:bg-white flex items-center justify-center text-neutral-900 group-hover:text-blue-600 transition-colors">
                    <LinkedInIcon className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-headline-md text-[15px] font-bold text-primary group-hover:text-blue-950 leading-tight">
                      LinkedIn
                    </span>
                    <span className="font-body-sm text-[13px] text-secondary group-hover:text-blue-700">
                      {site.linkedin.label}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-blue-600 group-hover:translate-x-1.5 transition-all text-[20px]">
                  arrow_forward
                </span>
              </a>
            </Reveal>

            {/* Instagram */}
            <Reveal delay={400}>
              <a
                className={`${cardBase} border-neutral-200/90 hover:bg-rose-50/40 hover:border-rose-400`}
                href={site.instagram.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 group-hover:bg-white flex items-center justify-center text-neutral-900 group-hover:text-rose-500 transition-colors">
                    <InstagramIcon className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-headline-md text-[15px] font-bold text-primary group-hover:text-rose-950 leading-tight">
                      Instagram
                    </span>
                    <span className="font-body-sm text-[13px] text-secondary group-hover:text-rose-600">
                      {site.instagram.label}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-rose-500 group-hover:translate-x-1.5 transition-all text-[20px]">
                  arrow_forward
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
