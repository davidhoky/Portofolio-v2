import { images } from "./images";

export type Project = {
  id: string;
  image: string;
  /** Teks yang tampil di kartu (grid Selected Works) */
  card: {
    title: string;
    description: string;
    tags: string[];
    /** Pill kecil di pojok kanan atas gambar. Isi teks, atau hapus field ini. */
    badge?: string;
  };
  /** Isi yang tampil di modal "View Details" */
  detail: {
    title: string;
    date: string;
    techs: string[];
    features: string[];
    /** Kosongkan jika tidak ada demo, tombol Live Demo otomatis hilang */
    liveUrl?: string;
    /** Kosongkan untuk menampilkan tombol Source Code terkunci */
    sourceUrl?: string;
  };
};

export const projects: Project[] = [
  {
    id: "nusatrip",
    image: images.projectOne,
    card: {
      title: "NusaTrip",
      description:
        "Developed a web-based itinerary planning app for Indonesian destinations using Agile Scrum. Built core user pages, automated budget estimation, and integrated seamless REST APIs for a public community feed.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      badge: "",
    },
    detail: {
      title: "NusaTrip",
      date: "2026-03-15",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      features: [
        "Web-based itinerary planning application for destinations across Indonesia.",
        "Developed collaboratively using Agile Scrum methodology across 7 sprints.",
        "Built core user pages including Home, My Plans, Community, Profile, and Auth.",
        "Implemented automatic budget estimation and public community feed with save and duplicate features.",
      ],
      liveUrl: "https://nusatrip-fe.vercel.app/",
      sourceUrl: "https://github.com/NusaTrip-Application",
    },
  },
  {
    id: "campuscalm",
    image: images.projectTwo,
    card: {
      title: "CampusCalm",
      description:
        "Built an ensemble machine learning pipeline to predict student stress levels based on self-reported survey data. Performed exploratory data analysis (EDA), applied SMOTE for class balancing, and benchmarked multiple classification models.",
      tags: ["Python", "Machine Learning", "Data Analysis", "Ensemble Learning"],
    },
    detail: {
      title: "CampusCalm",
      date: "2026-01-20",
      techs: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "Streamlit"],
      features: [
        "Smart prediction system for student mental health and stress levels based on survey data.",
        "Performed comprehensive exploratory data analysis (EDA) to handle outliers and data noise.",
        "Applied SMOTE and feature scaling to overcome class imbalance issues.",
        "Built and benchmarked multiple classifiers, combining the top models into an Ensemble Majority Voting pipeline.",
      ],
      liveUrl: "https://campuscalm.streamlit.app/",
      sourceUrl: "https://github.com/davidhoky/CampusCalm-Machine-Learning-Project",
    },
  },
  {
    id: "hangul-air-writing",
    image: images.projectThree,
    card: {
      title: "Hangul Air-Writing Recognition",
      description:
        "Engineered an Air Canvas module powered by MediaPipe for real-time hand-tracking and gesture controls. Designed robust frame-confirmation logic and an interactive UI allowing users to compose full sentences through gestures alone.",
      tags: ["Computer Vision", "MediaPipe", "Python", "UI/UX"],
    },
    detail: {
      title: "Hangul Air-Writing Recognition",
      date: "2026-02-10",
      techs: ["Python", "Computer Vision", "MediaPipe", "OpenCV", "UI/UX"],
      features: [
        "Real-time hand-gesture tracking and air canvas module for hands-free character writing.",
        "Designed robust gesture controls for drawing, classifying, erasing, and merging words.",
        "Implemented frame-confirmation logic to prevent false triggers and line jitter.",
        "Built a full on-screen UI with a color palette, toolbar, and multi-word composition buffer.",
      ],
      sourceUrl: "https://github.com/davidhoky/Air-Writing-Hangul-Computer-Vision-Project",
    },
  },
];
