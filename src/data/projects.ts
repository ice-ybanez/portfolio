export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  status: string;
  image?: string;
  github?: string;
  demo?: string;

  role?: string;
  features?: string[];
  challenges?: string[];
};

export const projects: Project[] = [
  {
    title: "GreenGym Online",
    category: "Internship / Full-Stack Development",
    description:
      "Worked on user and admin-facing React/TypeScript features for a fitness platform, including profile pages, nutrition tracking, workout pages, body composition history, responsive layouts, and UI improvements.",
    tech: ["React", "TypeScript", "CSS Modules", "Docker", "API Integration"],
    status: "Placement Project",
    image: "/projects/greengym.png",
    role: "Frontend / Full-Stack Developer Intern",
    features: [
      "Improved user profile layouts and frontend-only editing flows",
      "Worked on nutrition and workout summary UI improvements",
      "Updated responsive layouts for desktop and mobile views",
      "Helped align dummy frontend data with summary cards and page sections",
    ],
    challenges: [
      "Keeping UI changes consistent across similar pages",
      "Working safely with dummy/demo data while preparing for backend integration",
      "Making supervisor feedback fit into the existing design system",
    ],
  },
  {
    title: "Java MVC Store Application",
    category: "University Project",
    description:
      "Built a JavaFX store management system using MVC architecture, customer and product management, serialization, JDBC database connectivity, DAO pattern, and builder pattern.",
    tech: ["Java", "JavaFX", "MVC", "JDBC", "Serialization", "DAO"],
    status: "Coursework",
    image: "/projects/java-store.png",
  },
  {
    title: "Hungry Monkey",
    category: "C Programming Project",
    description:
      "Developed movement logic for a matrix-based game where a monkey collects falling treats. Focused on state handling, grid parsing, strategic movement, and algorithmic decision-making.",
    tech: ["C", "Algorithms", "Matrix Logic", "Game Logic"],
    status: "Coursework",
    image: "/projects/hungry-monkey.png",
  },
  {
    title: "NoSQL Database Architecture Projects",
    category: "Database Systems",
    description:
      "Completed projects covering relational design, denormalisation, MongoDB document modelling, replication, sharding, Neo4j queries, and polyglot persistence.",
    tech: ["MongoDB", "Neo4j", "SQL", "Replication", "Sharding"],
    status: "University Module",
    image: "/projects/nosql.png",
  },
];