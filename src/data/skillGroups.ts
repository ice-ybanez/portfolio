export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive interfaces with a focus on usability, consistency, and maintainable component-based code.",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "CSS Modules", "Vite"],
  },
  {
    title: "Programming",
    description:
      "Working across object-oriented, procedural, mobile, scripting, and distributed programming projects.",
    skills: ["Java", "Python", "Kotlin", "Go", "C", "JavaFX"],
  },
  {
    title: "Data & Databases",
    description:
      "Designing, querying, and modelling data across relational, document, graph, and mobile-backed systems.",
    skills: ["SQL", "MongoDB", "Neo4j", "Firebase", "JDBC", "Database Design"],
  },
  {
    title: "Development Tools",
    description:
      "Using modern development tooling for source control, local environments, APIs, containers, and collaboration.",
    skills: ["Git", "GitHub", "Docker", "API Integration", "VS Code", "IntelliJ", "PyCharm"],
  },
  {
    title: "Mobile Development",
    description:
      "Creating Android interfaces and application features through university mobile-development projects.",
    skills: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio"],
  },
  {
    title: "Working Style",
    description:
      "Skills developed through professional development work, team projects, presentations, and iterative feedback.",
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
