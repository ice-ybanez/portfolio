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
    category: "Professional Experience",
    description:
      "Contributed to user and admin-facing features for a fitness platform, with a focus on React/TypeScript UI development, responsive layouts, workout and nutrition features, member tools, and ongoing frontend improvements.",
    tech: ["React", "TypeScript", "CSS Modules", "Docker", "API Integration", "Git"],
    status: "Professional Project",
    image: "/projects/greengym.png",
    role: "Full Stack Software Developer / Frontend Focus",
    features: [
      "Built and refined user and admin-facing interface features",
      "Worked on workout, nutrition, impact, goals, and member-management pages",
      "Improved responsive layouts for desktop and mobile",
      "Implemented UI feedback from supervisors while keeping pages consistent",
    ],
    challenges: [
      "Maintaining consistent behaviour across related user and admin pages",
      "Working with frontend fallback data while backend functionality was still evolving",
      "Integrating new requirements without disrupting the existing design system",
    ],
  },
  {
    title: "Workout Programme Recommendation System",
    category: "Final Year Project",
    description:
      "A rule and constraint based system that generates weekly workout programme drafts from a member's goals, availability, equipment, experience, and exercise preferences, while allowing a fitness professional to review and edit the result.",
    tech: ["React", "TypeScript", "Rule-Based Systems", "SQLite / JSON", "UX"],
    status: "In Development",
    image: "/projects/workout-recommender.png",
    role: "Designer & Developer",
    features: [
      "Generate programme drafts from structured member constraints",
      "Provide traceable reasons for exercise recommendations",
      "Allow a fitness professional to review, edit, and approve the generated programme",
      "Evaluate the approach using synthetic member profiles backed by credible exercise guidance",
    ],
    challenges: [
      "Turning fitness guidance into clear software rules and constraints",
      "Balancing automation with professional review",
      "Designing an evaluation method for recommendation suitability",
    ],
  },
  {
    title: "Distributed Spelling Bee Game",
    category: "Distributed Systems",
    description:
      "Built a distributed spelling game using Go, gRPC, and RabbitMQ, combining service-to-service communication with message-based processing.",
    tech: ["Go", "gRPC", "RabbitMQ", "Distributed Systems"],
    status: "University Project",
    image: "/projects/spelling-bee.png",
    github:
      "https://github.com/ice-ybanez/CV_Projects/tree/main/DSP%20-%20SpellingBeeGame/spellingbee",
  },
  {
    title: "Java MVC Store Application",
    category: "Object-Oriented Programming",
    description:
      "Built a JavaFX store management application using MVC architecture, customer and product management, serialization, JDBC connectivity, DAO patterns, and builder patterns.",
    tech: ["Java", "JavaFX", "MVC", "JDBC", "DAO", "Serialization"],
    status: "University Project",
    image: "/projects/java-store.png",
    github:
      "https://github.com/ice-ybanez/CV_Projects/tree/main/OOP%20-%20Store%20Management%20GUI",
  },
  {
    title: "NoSQL Database Architecture",
    category: "Data & Databases",
    description:
      "Completed a series of database projects covering relational design, denormalisation, MongoDB document modelling, replication, sharding, Neo4j graph queries, and polyglot persistence.",
    tech: ["MongoDB", "Neo4j", "SQL", "Replication", "Sharding"],
    status: "University Project",
    image: "/projects/nosql.png",
    github: "https://github.com/ice-ybanez/CV_Projects/tree/main/NLDSA",
  },
  {
    title: "Hungry Monkey",
    category: "C Programming",
    description:
      "Developed movement logic for a matrix-based game where a monkey collects falling treats, focusing on grid parsing, state handling, algorithms, and decision-making.",
    tech: ["C", "Algorithms", "Matrix Logic", "Game Logic"],
    status: "University Project",
    image: "/projects/hungry-monkey.png",
    github:
      "https://github.com/ice-ybanez/CV_Projects/tree/main/C%20Programming%20-%20HungryMonkey",
  },
];
