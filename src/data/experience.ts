export type Experience = {
  period: string;
  active: boolean; // true = titik hijau (masih berjalan)
  role: string;
  org: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    period: "December 2025 - Present",
    active: true,
    role: "Creative Manager",
    org: "GDGOC BINUS@Malang",
    description:
      "Managed the visual branding process and creative direction for community tech events, overseeing the design of various social media feeds and interactive stories. Conceptualized and managed the production of exclusive community merchandise, ensuring cohesive brand aesthetics across physical and digital assets.",
    tags: ["Creative Direction", "Visual Branding", "Event Management", "Design"],
  },
  {
    period: "October 2025 - Present",
    active: true,
    role: "Public Relation Staff",
    org: "BNCC BINUS@Malang",
    description:
      "Handled public relations and communication channels, significantly boosting community reach and event participation. Designed promotional graphics and produced engaging videos that actively drove online audience engagement and brand awareness.",
    tags: ["Public Relations", "Social Media Management", "Graphic Design", "Video Production"],
  },
  {
    period: "June 2026",
    active: false,
    role: "Usher and Ticketing Volunteer",
    org: "Lantern Festival Borobudur (MBMI)",
    description:
      "Coordinated the entry and ticketing process during a major cultural festival. Assisted visitors directly on-site to maintain order, manage the flow of attendees, and ensure a smooth and great festival experience.",
    tags: ["Event Operations", "Customer Service", "Crowd Management", "Ticketing"],
  },
  {
    period: "August 2025 - September 2025",
    active: false,
    role: "Freshmen Leader (FL)",
    org: "BINUS@Malang (B29)",
    description:
      "Guided and mentored incoming freshmen during their university transition, fostering a supportive and engaging environment. Facilitated orientation activities and built strong peer communication to ensure smooth onboarding for new students.",
    tags: ["Mentoring", "Leadership", "Event Facilitation", "Communication"],
  },
  {
    period: "February 2025 - May 2025",
    active: false,
    role: "Video Creator",
    org: "BINUS@Malang",
    description:
      "Handled the production, shooting, and editing process for engaging video projects to support campus branding. Translated creative briefs into compelling visual narratives, successfully helping the content reach a broader audience.",
    tags: ["Video Editing", "Content Creation", "Videography", "Campus Branding"],
  },
];
