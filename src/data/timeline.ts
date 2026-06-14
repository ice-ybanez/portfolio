export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export const timelineItems: TimelineItem[] = [
  {
    year: "2026 - Present",
    title: "GreenGym Online",
    subtitle: "Full Stack Software Developer / Frontend Retainer",
    description:
      "Continuing frontend-focused development work after completing my internship, with tasks involving React/TypeScript UI improvements, responsive page updates, feature polishing, and supervisor feedback implementation.",
    tags: ["React", "TypeScript", "CSS Modules", "Frontend", "UI/UX"],
  },
  {
    year: "2026",
    title: "GreenGym Online",
    subtitle: "Full Stack Software Developer Intern",
    description:
      "Worked on user and admin-facing frontend features for a fitness platform, including user profile layouts, nutrition tracking pages, workout summaries, impact pages, body composition sections, and Docker-based development workflows.",
    tags: ["React", "TypeScript", "Docker", "API Integration", "Git"],
  },
  {
    year: "2023 - Present",
    title: "Munster Technological University",
    subtitle: "BSc Software Development",
    description:
      "Studying software development through practical modules covering web development, Java applications, databases, mobile app development, algorithms, distributed systems, data analytics, and software project work.",
    tags: ["Java", "SQL", "MongoDB", "Firebase", "C", "Go", "Python"],
  },
  {
    year: "2021 - 2022",
    title: "Cork College of FET",
    subtitle: "Computer Systems & Networks",
    description:
      "Completed further education studies before progressing into Software Development, building a foundation in computing, systems, and technical problem solving.",
    tags: ["Computing", "Systems", "Networking", "Technical Support"],
  },
];