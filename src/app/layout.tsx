import type { Metadata } from "next";
import Preloader from "@/components/Preloader";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Christian | Web & AI Developer",
  description:
    "Portofolio David Christian, AI & Full-Stack Developer. Machine Learning, Computer Vision, NLP, dan Web Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Geist:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Kalau JavaScript mati: sembunyikan loading screen dan tampilkan semua konten */}
        <noscript>
          <style>{`.preloader{display:none!important}.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-background font-body-base text-body-base text-on-surface antialiased overflow-x-hidden">
        <Preloader />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
