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
    subtitle: "Full Stack Software Developer · Frontend Focus",
    description:
      "Continuing development work after completing my internship, with a focus on React/TypeScript UI improvements, responsive page updates, feature refinement, and implementation of product feedback.",
    tags: ["React", "TypeScript", "CSS Modules", "Frontend", "UI/UX", "Git"],
  },
  {
    year: "Feb - May 2026",
    title: "GreenGym Online",
    subtitle: "Full Stack Software Developer Intern",
    description:
      "Worked on user and admin-facing features for a fitness platform, including member profiles, nutrition tracking, workout pages, impact pages, body composition history, and Docker-based development workflows.",
    tags: ["React", "TypeScript", "Docker", "API Integration", "Git"],
  },
  {
    year: "2023 - 2027",
    title: "Munster Technological University",
    subtitle: "BSc (Hons) Software Development",
    description:
      "Studying software development through practical modules covering web development, Java applications, databases, mobile development, algorithms, distributed systems, data analytics, machine learning, and a two-semester final year project.",
    tags: ["Java", "Python", "Kotlin", "Go", "SQL", "MongoDB", "React"],
  },
  {
    year: "2021 - 2022",
    title: "Cork College of FET",
    subtitle: "Computer Systems & Networks",
    description:
      "Completed further education studies before progressing into Software Development, building a foundation in computing, systems, networking, and technical problem solving.",
    tags: ["Computing", "Systems", "Networking", "Technical Support"],
  },
];
