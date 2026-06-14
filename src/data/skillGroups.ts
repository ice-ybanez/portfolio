export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, clean user interfaces with a focus on usability and visual consistency.",
    skills: ["React", "TypeScript", "JavaScript", "CSS Modules", "HTML", "CSS"],
  },
  {
    title: "Full-Stack & Tools",
    description:
      "Working with frontend features, development workflows, APIs, version control, and deployment tools.",
    skills: ["Docker", "Git", "GitHub", "API Integration", "VS Code", "Vite"],
  },
  {
    title: "Data & Databases",
    description:
      "Designing, querying, and modelling data across relational and NoSQL systems.",
    skills: ["SQL", "MongoDB", "Neo4j", "Firebase", "Database Design"],
  },
  {
    title: "Mobile App Development",
    description:
      "Creating mobile app interfaces and Firebase-backed features through university projects.",
    skills: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio"],
  },
  {
    title: "Programming & Problem Solving",
    description:
      "Building software using object-oriented, procedural, and algorithmic approaches.",
    skills: ["Java", "JavaFX", "C", "Python", "Go", "Algorithms"],
  },
  {
    title: "Soft Skills",
    description:
      "Skills developed through placement work, team projects, presentations, and supervisor feedback.",
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Attention to Detail",
    ],
  },
];