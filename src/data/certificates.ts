export type Certificate = {
  id: string;
  /** Gambar sertifikat. Taruh file di public/images/certificates/ */
  image: string;
  title: string;
  issuer: string;
  /** Teks tanggal yang tampil di kartu */
  date: string;
  /** Deskripsi singkat di kartu */
  description: string;
  tags: string[];
  /** Link ke file sertifikat (Google Drive / situs penerbit) */
  url: string;
};

export const certificates: Certificate[] = [
  {
    id: "azure-ai-fundamentals",
    image: "/images/certificates/microsoft-azure-ai.jpg",
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft x GreatNusa BINUS",
    date: "March 2026",
    description:
      "Completed 15 hours of the Microsoft Elevate AI Training Session (AI-900T00-A), covering the fundamentals of AI and Azure AI services.",
    tags: ["Microsoft Azure", "Artificial Intelligence"],
    url: "https://drive.google.com/file/d/1fRtPE8Qs8rfq3huWvanF0NY9ahM7Rxdq/view",
  },
  {
    id: "freshmen-leader",
    image: "/images/certificates/freshmen-leader.jpg",
    title: "Freshmen Leader FYP B29",
    issuer: "BINUS University",
    date: "February 2026",
    description:
      "Certificate of Appreciation for serving as Freshmen Leader in the First Year Program Binusian 2029, with a KPI score of 4.00 / 4.00.",
    tags: ["Leadership", "Teamwork"],
    url: "https://drive.google.com/file/d/1eNnNwTBGGgGH8LpcGZClJ1HXLGXDsN0J/view",
  },
  {
    id: "backend-development",
    image: "/images/certificates/backend-bncc.jpg",
    title: "LnT Back-End Development",
    issuer: "BNCC (Bina Nusantara Computer Club)",
    date: "2025",
    description:
      "Completed the Back-End Development class of 2024/2025 with an achievement of High Distinction.",
    tags: ["Back-End", "Web Development"],
    url: "https://drive.google.com/file/d/1nsl8QAZekuU4mxbS-RKsuuKiBL4Epszt/view",
  },
  {
    id: "frontend-html",
    image: "/images/certificates/frontend-html.jpg",
    title: "Front End Development - HTML",
    issuer: "Great Learning Academy",
    date: "September 2024",
    description: "Completed a free online course on the fundamentals of front-end development with HTML.",
    tags: ["HTML", "Front-End"],
    url: "https://www.mygreatlearning.com/certificate/RHHPGSGU",
  },
  {
    id: "nvidia-deep-learning",
    image: "/images/certificates/nvidia-deep-learning.jpg",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "January 2024",
    description: "Certificate of Competency for completing the NVIDIA Deep Learning Institute course on deep learning fundamentals.",
    tags: ["Deep Learning", "NVIDIA"],
    url: "https://drive.google.com/file/d/1d0aYzMZdgTMsUj8StVElzc777qgXZ4ou/view?usp=sharing",
  },
];
