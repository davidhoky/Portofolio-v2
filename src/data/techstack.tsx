import type { ReactNode } from "react";
import { images } from "./images";

export type Tech = { name: string; icon: ReactNode };

const hover = "group-hover:scale-110 transition-transform";

export const techStack: Tech[] = [
  {
    name: "React.js",
    icon: (
      <svg className={`w-5 h-5 text-sky-500 fill-none stroke-current stroke-[1.8] ${hover}`} viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" fill="currentColor" r="2.05" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className={`w-5 h-5 fill-current text-black ${hover}`} viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.836 17.653-5.318-7.79v7.79H10.5V6.347h2.018l5.318 7.79V6.347h2V17.653h-2z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className={`w-5 h-5 ${hover}`} viewBox="0 0 24 24">
        <rect fill="#3178C6" height="24" rx="4" width="24" />
        <path d="M4.5 10.5h6v1.8h-2v6.2h-2v-6.2h-2v-1.8zm7.5 5.8c.6.4 1.3.7 2.1.7.9 0 1.5-.4 1.5-1 0-.6-.5-.9-1.6-1.3-1.4-.5-2.3-1.2-2.3-2.4 0-1.5 1.2-2.5 3-2.5.9 0 1.7.2 2.3.6l-.6 1.6c-.5-.3-1.1-.5-1.7-.5-.7 0-1.2.3-1.2.9 0 .5.4.8 1.4 1.2 1.5.5 2.5 1.2 2.5 2.5 0 1.6-1.3 2.6-3.3 2.6-1 0-2-.3-2.7-.8l.6-1.7z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className={`w-5 h-5 fill-current text-teal-500 ${hover}`} viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className={`w-5 h-5 ${hover}`} viewBox="0 0 24 24">
        <path d="M11.91 2c-3.08 0-4.91.4-4.91 2.24v2.09h5v.67H4.37C2.5 7 2 8.84 2 11.23c0 2.47.88 4.23 2.76 4.23h1.65v-2.31c0-1.85 1.54-3.32 3.42-3.32h5.08c1.55 0 2.82-1.25 2.82-2.77V4.24C17.73 2.4 15 2 11.91 2zm-1.83 1.34a.79.79 0 1 1 0 1.58.79.79 0 0 1 0-1.58z" fill="#3776AB" />
        <path d="M12.09 22c3.08 0 4.91-.4 4.91-2.24v-2.09h-5v-.67h7.63c1.87 0 2.37-1.84 2.37-4.23 0-2.47-.88-4.23-2.76-4.23h-1.65v2.31c0 1.85-1.54 3.32-3.42 3.32H9.09c-1.55 0-2.82 1.25-2.82 2.77v2.83C6.27 21.6 9 22 12.09 22zm1.83-1.34a.79.79 0 1 1 0-1.58.79.79 0 0 1 0 1.58z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Laravel",
    icon: (
      <svg className={`w-5 h-5 fill-current text-red-500 ${hover}`} viewBox="0 0 24 24">
        <path d="M8.9 3.5 12 1.7l7.2 4.1v8.2L16 15.8V7.6L12 5.3 8.9 7.1v3.5L12 12.4l3.1-1.8v3.5L12 15.9 5.8 12.4V8.8l3.1-1.8V3.5zM4.8 14.2l3.1 1.8v3.5L12 21.3l-4.1 2.4L4.8 22v-7.8z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg className={`w-5 h-5 fill-current text-emerald-500 ${hover}`} viewBox="0 0 24 24">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.234L.43 14.225a.792.792 0 0 0 .618 1.282H12v8.958a.396.396 0 0 0 .716.234l10.854-14.063a.792.792 0 0 0-.618-1.282h-.59z" />
      </svg>
    ),
  },
  {
    name: "SQLite",
    icon: (
      <svg className={`w-5 h-5 fill-current text-sky-600 ${hover}`} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 8c0 .66-3.58 2-8 2s-8-1.34-8-2V8.93c1.78 1.15 4.7 1.87 8 1.87s6.22-.72 8-1.87V12zm0 6c0 .66-3.58 2-8 2s-8-1.34-8-2v-3.07c1.78 1.15 4.7 1.87 8 1.87s6.22-.72 8-1.87V18z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg className={`w-5 h-5 fill-current text-black ${hover}`} viewBox="0 0 24 24">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className={`w-5 h-5 fill-current text-orange-600 ${hover}`} viewBox="0 0 24 24">
        <path d="M23.546 10.93 13.067.452a1.498 1.498 0 0 0-2.122 0L8.831 2.565l2.679 2.679a1.777 1.777 0 0 1 2.247 2.257l2.576 2.576a1.78 1.78 0 1 1-1.07 1.07l-2.404-2.404v4.577a1.78 1.78 0 1 1-1.524 0V8.694a1.778 1.778 0 0 1-.958-2.336L7.747 3.652.454 10.945a1.5 1.5 0 0 0 0 2.121l10.48 10.48a1.5 1.5 0 0 0 2.122 0l10.49-10.49a1.503 1.503 0 0 0 0-2.126z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg className={`w-5 h-5 fill-current text-neutral-900 ${hover}`} viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className={`w-5 h-5 ${hover}`} viewBox="0 0 24 24">
        <path d="M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" fill="#1ABCFE" />
        <path d="M5 19a3.5 3.5 0 0 1 3.5-3.5H12v3.5A3.5 3.5 0 0 1 8.5 22.5 3.5 3.5 0 0 1 5 19z" fill="#0ACF83" />
        <path d="M12 1.5H8.5A3.5 3.5 0 0 0 5 5a3.5 3.5 0 0 0 3.5 3.5H12V1.5z" fill="#F24E1E" />
        <path d="M12 1.5h3.5A3.5 3.5 0 0 1 19 5a3.5 3.5 0 0 1-3.5 3.5H12V1.5z" fill="#FF7262" />
        <path d="M5 8.5A3.5 3.5 0 0 0 8.5 12H12V8.5H8.5A3.5 3.5 0 0 0 5 8.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg className={`w-5 h-5 fill-current text-orange-500 ${hover}`} viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203l.235-2.625H5.438l.703 7.875h10.312l-.375 4.125-4.078 1.125-4.125-1.125-.281-3h-2.61l.516 5.578 6.5 1.828 6.5-1.828.937-10.422H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg className={`w-5 h-5 fill-current text-blue-500 ${hover}`} viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.063 4.5H5.438l.234 2.625h12.656l-.281 3.141H8.531l.235 2.625h6.656l-.422 4.453-3 1-3.047-1-.188-2.078H6.141l.375 4.141 5.469 1.516 5.469-1.516 1.156-12.969z" />
      </svg>
    ),
  },
  {
    name: "Machine Learning",
    icon: (
      <svg className={`w-5 h-5 fill-none stroke-current stroke-2 text-purple-500 ${hover}`} viewBox="0 0 24 24">
        <circle cx="12" cy="4" fill="currentColor" r="2" />
        <circle cx="4" cy="12" fill="currentColor" r="2" />
        <circle cx="20" cy="12" fill="currentColor" r="2" />
        <circle cx="8" cy="20" fill="currentColor" r="2" />
        <circle cx="16" cy="20" fill="currentColor" r="2" />
        <circle cx="12" cy="12" fill="currentColor" r="2.5" />
        <path d="M12 6.5v3M5.8 11l4.2.8M18.2 11l-4.2.8M9.5 18.5l1.7-4.2M14.5 18.5l-1.7-4.2M5.5 13.5l2.8 5M18.5 13.5l-2.8 5" />
      </svg>
    ),
  },
  {
    name: "Computer Vision",
    icon: (
      <svg className={`w-5 h-5 fill-none stroke-current stroke-2 text-cyan-600 ${hover}`} viewBox="0 0 24 24">
        <path d="M3 7V4a1 1 0 0 1 1-1h3M17 3h3a1 1 0 0 1 1 1v3M21 17v3a1 1 0 0 1-1 1h-3M7 21H4a1 1 0 0 1-1-1v-3" />
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" fill="currentColor" r="3" />
      </svg>
    ),
  },
  {
    name: "NLP",
    icon: (
      <svg className={`w-5 h-5 fill-none stroke-current stroke-2 text-emerald-600 ${hover}`} viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M8 10h4M8 14h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "MediaPipe",
    icon: (
      <svg className={`w-5 h-5 fill-none stroke-current stroke-2 text-amber-500 ${hover}`} viewBox="0 0 24 24">
        <path d="M18 11V6a2 2 0 0 0-4 0v4M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-3a2 2 0 0 0-4 0v1" />
        <circle cx="12" cy="4" fill="currentColor" r="1" />
        <circle cx="16" cy="6" fill="currentColor" r="1" />
        <circle cx="8" cy="6" fill="currentColor" r="1" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    icon: (
      <svg className={`w-5 h-5 fill-none stroke-current stroke-2 text-secondary ${hover}`} viewBox="0 0 24 24">
        <rect height="6" rx="2" width="20" x="2" y="4" />
        <rect height="6" rx="2" width="20" x="2" y="14" />
        <circle cx="6" cy="7" fill="currentColor" r="1" />
        <circle cx="6" cy="17" fill="currentColor" r="1" />
        <path d="M17 7h1M14 17h4" />
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
      <svg className={`w-5 h-5 ${hover}`} viewBox="0 0 24 24">
        <path d="M22.36 10.978L13.022 1.64a1.444 1.444 0 0 0-2.044 0L1.64 10.978a1.444 1.444 0 0 0 0 2.044l9.338 9.338c.564.565 1.48.565 2.044 0l9.338-9.338a1.444 1.444 0 0 0 0-2.044z" fill="#00599C" />
        <path d="M11.854 6.883a5.117 5.117 0 1 0 0 10.234 5.143 5.143 0 0 0 4.148-2.127l-1.925-1.137a2.898 2.898 0 1 1 0-3.706l1.925-1.137a5.143 5.143 0 0 0-4.148-2.127zm4.316 3.659v1.077h-1.077v.766h1.077v1.077h.766v-1.077h1.077v-.766h-1.077v-1.077h-.766zm3.324 0v1.077h-1.077v.766h1.077v1.077h.766v-1.077h1.077v-.766h-1.077v-1.077h-.766z" fill="#ffffff" />
      </svg>
    ),
  },
];

const aiImg = (src: string, alt: string): ReactNode => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={alt} className={`w-5 h-5 object-contain ${hover}`} src={src} />
);

export const aiTools: Tech[] = [
  { name: "Gemini", icon: aiImg(images.gemini, "Gemini") },
  { name: "ChatGPT", icon: aiImg(images.chatgpt, "ChatGPT") },
  { name: "Claude", icon: aiImg(images.claude, "Claude") },
  {
    name: "Codex",
    icon: (
      <svg className={`w-5 h-5 fill-none stroke-current stroke-2 text-primary ${hover}`} viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" x2="10" y1="4" y2="20" />
      </svg>
    ),
  },
  { name: "Antigravity", icon: aiImg(images.antigravity, "Antigravity") },
  { name: "Stitch", icon: aiImg(images.stitch, "Stitch") },
  { name: "Kiro", icon: aiImg(images.kiro, "Kiro") },
];
