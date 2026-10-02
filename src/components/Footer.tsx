import { site } from "@/data/site";

const linkClass =
  "font-label-caps text-[12px] font-bold uppercase tracking-wider text-[#6b7280] hover:text-black transition-colors";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col text-left">
          <span className="font-body-sm text-[14px] font-medium text-[#6b7280]">
            © 2026 Davidchrist. All rights reserved.
          </span>
          <span className="font-body-sm text-[12px] text-[#9ca3af] mt-1">Built with Next.js &amp; Tailwind CSS</span>
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <a className={linkClass} href={site.github.url} rel="noreferrer" target="_blank">
            GITHUB
          </a>
          <a className={linkClass} href={site.linkedin.url} rel="noreferrer" target="_blank">
            LINKEDIN
          </a>
          <a className={linkClass} href={site.instagram.url} rel="noreferrer" target="_blank">
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
}
