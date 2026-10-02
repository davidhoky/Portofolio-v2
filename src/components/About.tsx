import Reveal from "./Reveal";
import { images } from "@/data/images";
import { site } from "@/data/site";

const marqueeHello =
  "Hello I'm David Christian Hello I'm David Christian Hello I'm David Christian Hello I'm David Christian ";
const marqueeRole =
  "AI Developer Web Developer AI Developer Web Developer AI Developer Web Developer ";
const marqueeClass =
  "font-display-xl text-[48px] sm:text-[62px] md:text-[76px] font-extrabold text-[#eef0f4] tracking-normal leading-none";

const labelClass = "font-label-micro text-label-micro uppercase tracking-wider text-secondary";
const valueClass = "font-body-base text-body-sm font-bold text-on-surface mt-0.5";

export default function About() {
  return (
    <section
      className="w-full bg-surface py-20 md:py-28 shadow-[inset_0_1px_0_rgba(107,114,128,0.06)] scroll-mt-28"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Label Header */}
        <Reveal>
          <div className="flex flex-col mb-12">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">DISCOVER</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">About Me</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Visual Portrait Card */}
          <Reveal className="lg:col-span-5">
            <div className="bg-surface-container-low rounded-3xl p-4 shadow-sm overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="High key minimalist portrait silhouette of developer against bright neutral studio lighting"
                  className="w-full h-full object-cover"
                  src={images.aboutPortrait}
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur-md rounded-lg shadow-sm">
                  <span className="font-code-mono text-code-mono font-bold tracking-widest text-primary">DEV.</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Description & Details */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={100}>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-headline-md text-title-base text-primary">Who Am I</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Saya adalah AI &amp; Full-Stack Developer dengan latar belakang pendidikan{" "}
                    <i>Computer Science (Intelligent Systems)</i>. Saya memiliki keahlian spesifik dalam mengintegrasikan{" "}
                    <i>Machine Learning</i>, <i>Computer Vision</i>, dan NLP ke dalam aplikasi dunia nyata. Di sisi
                    pengembangan perangkat lunak, saya terampil merancang antarmuka web dan sistem modern menggunakan
                    Python, React, Next.js, dan TypeScript. Bagi saya, pengembangan produk bukan sekadar menulis kode,
                    melainkan menjembatani algoritma cerdas dengan pengalaman pengguna (UI/UX) yang intuitif.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-headline-md text-title-base text-primary">My Approach</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Saya berkomitmen untuk membangun solusi teknis yang tidak hanya canggih di belakang layar, tetapi
                    juga mudah digunakan. Dari eksplorasi data hingga peluncuran aplikasi, saya mengutamakan arsitektur
                    yang terstruktur, integrasi desain visual yang baik, dan pengujian performa. Saya merangkul setiap
                    tantangan teknis dengan pola pikir kolaboratif dan kemauan keras untuk terus belajar.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Personal Details */}
            <Reveal delay={340}>
              <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 flex flex-col space-y-6">
                <h3 className="font-headline-md text-title-base text-primary">Personal Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                  <div className="flex flex-col">
                    <span className={labelClass}>NAME</span>
                    <span className={valueClass}>David Christian Golden Mahaviro</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={labelClass}>PLACE OF BIRTH</span>
                    <span className={valueClass}>Denpasar, Indonesia</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={labelClass}>PHONE</span>
                    <a className={`${valueClass} hover:text-secondary`} href={site.phoneHref}>
                      {site.phone}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className={labelClass}>GPA</span>
                    <span className={valueClass}>3.52</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={labelClass}>EMAIL</span>
                    <a className={`${valueClass} hover:text-secondary truncate`} href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className={labelClass}>EDUCATION</span>
                    <span className={valueClass}>BINUS University</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* MARQUEE TEKS BERJALAN */}
      <div className="w-full mt-24 overflow-hidden py-2 select-none bg-transparent flex flex-col gap-0 pointer-events-none">
        <div className="overflow-hidden w-full flex leading-none">
          <div className="animate-marquee-left flex items-center whitespace-nowrap gap-6 soft-blur-marquee">
            <span className={marqueeClass}>{marqueeHello}</span>
            <span className={marqueeClass}>{marqueeHello}</span>
          </div>
        </div>
        <div className="overflow-hidden w-full flex leading-none">
          <div className="animate-marquee-right flex items-center whitespace-nowrap gap-6 soft-blur-marquee">
            <span className={marqueeClass}>{marqueeRole}</span>
            <span className={marqueeClass}>{marqueeRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
