# Portofolio David Christian (Next.js + Tailwind CSS)

## Menjalankan
```bash
npm install
npm run dev     # buka http://localhost:3000
npm run build   # build produksi
```

## Struktur
```
src/
  app/
    layout.tsx        # <head>, font, metadata (judul tab & deskripsi)
    page.tsx          # susunan section
    globals.css       # base style, marquee, dan animasi scroll (.reveal)
  components/
    Reveal.tsx        # pembungkus animasi fade + pop up + blur saat scroll
    Navbar / Hero / About / Experience / TechStack / Projects / Contact / Footer
    ProjectModal.tsx  # modal "View Details"
    Typewriter.tsx    # teks ketikan di hero
    icons.tsx         # ikon sosial media
  data/
    images.ts         # SEMUA gambar (URL atau path /images/xxx.jpg)
    projects.ts       # kartu proyek + isi modal
    experience.ts     # riwayat pengalaman
    techstack.tsx     # badge tech stack & AI tools
    site.ts           # email, telepon, link sosial media
public/
  images/             # taruh gambar lokal di sini
tailwind.config.ts    # warna, font, ukuran teks custom dari desain asli
```

## Mengatur animasi scroll
Edit 4 variabel di `src/app/globals.css`:
```css
:root {
  --reveal-distance: 32px;   /* jarak naik dari bawah */
  --reveal-scale: 0.96;      /* ukuran awal (efek pop up) */
  --reveal-blur: 6px;        /* blur awal */
  --reveal-duration: 800ms;  /* lama animasi */
}
```
Membungkus elemen baru:
```tsx
<Reveal delay={150}>...</Reveal>   {/* delay opsional, dalam ms */}
```

## Memakai gambar lokal
1. Simpan file di `public/images/` (mis. `hero.jpg`).
2. Ubah nilainya di `src/data/images.ts`: `heroPhoto: "/images/hero.jpg"`.

## Fitur tambahan
- **Navbar**: menu menyala sesuai section yang sedang dilihat (scroll-spy), di hp berubah jadi hamburger. Daftar menu ada di `src/components/Navbar.tsx` (`navItems` dan `spySections`).
- **Loading screen**: `src/components/Preloader.tsx`. Lama minimal tampil diatur lewat `MIN_MS`. Animasi scroll baru mulai setelah loading selesai.
- **Link kontak & sosial media**: `src/data/site.ts`.
- **Isi View Details proyek**: `src/data/projects.ts` (hapus `liveUrl` kalau tidak ada demo).

## Section Certificate
- Data & link: `src/data/certificates.ts` (tambah/hapus objek di sana, kartu otomatis menyesuaikan).
- Gambar: simpan di `public/images/certificates/`.
- Tampilan: `src/components/Certificates.tsx` (muncul setelah Selected Works).

## Chatbot AI
- Tombol & jendela chat: `src/components/ChatWidget.tsx` (tombol `fixed` di pojok kanan bawah).
- API (key aman di server): `src/app/api/chat/route.ts`.
- Bahan pengetahuan bot: `src/data/chatbot-knowledge.ts` (proyek, pengalaman, sertifikat, kontak ikut otomatis dari file data; bagian CV ditulis manual di sana).
- Batas per IP: `src/lib/rateLimit.ts`.
- Setup: salin `.env.example` jadi `.env.local`, isi `ANTHROPIC_API_KEY`. Di Vercel isi di Settings > Environment Variables.
- Kalau kredit/kuota habis atau limit tercapai, bot menampilkan "sesi sudah berakhir" + tombol WhatsApp.
