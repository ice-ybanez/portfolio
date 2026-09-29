import { useEffect, useState } from "react";

import { flushSync } from "react-dom";

import "./index.css";

type Theme = "light" | "dark";

type ProjectGroup = "experience" | "development" | "projects";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
  status: string;
  group: ProjectGroup;
};

type Experience = {
  period: string;
  title: string;
  place: string;
  description: string;
  tags: string[];
};

// Adjustable animation timings.
// Increase these numbers for slower effects and decrease them for faster effects.
const THEME_FADE_DURATION_MS = 700;
const SCROLL_DURATION_MS = 950;
const NAME_TYPING_SPEED_MS = 105;
const FULL_NAME = "Ice Ybañez";

const projects: Project[] = [
  {
    title: "GreenGym Online",
    category: "Professional Experience",
    description:
      "Contributed to user and admin-facing features for a fitness platform, focusing on React and TypeScript UI development, responsive layouts, workout and nutrition features, member tools, and ongoing frontend improvements.",
    tech: ["React", "TypeScript", "CSS Modules", "Docker", "API Integration", "Git"],
    status: "Professional Project",
    group: "experience",
    liveUrl: "https://greengym.online/",
    liveLabel: "Visit GreenGym",
  },
  {
    title: "Workout Programme Recommendation System",
    category: "Final Year Project",
    description:
      "A rule and constraint based system that generates weekly workout programme drafts from a member's goals, availability, equipment, experience and exercise preferences, while allowing a fitness professional to review and edit the result.",
    tech: ["React", "TypeScript", "Rule-Based Systems", "SQLite / JSON", "UX"],
    status: "In Development",
    group: "development",
  },
  {
    title: "Distributed Spelling Bee Game",
    category: "Distributed Systems",
    description:
      "A distributed spelling game built with Go, gRPC and RabbitMQ, combining service-to-service communication with message-based processing.",
    tech: ["Go", "gRPC", "RabbitMQ", "Distributed Systems"],
    github:
      "https://github.com/ice-ybanez/CV_Projects/tree/main/DSP%20-%20SpellingBeeGame/spellingbee",
    status: "University Project",
    group: "projects",
  },
  {
    title: "Java MVC Store Application",
    category: "Object-Oriented Programming",
    description:
      "A JavaFX store management application using MVC architecture, customer and product management, serialization, JDBC connectivity, DAO patterns and builder patterns.",
    tech: ["Java", "JavaFX", "MVC", "JDBC", "DAO"],
    github:
      "https://github.com/ice-ybanez/CV_Projects/tree/main/OOP%20-%20Store%20Management%20GUI",
    status: "University Project",
    group: "projects",
  },
  {
    title: "NoSQL Database Architecture",
    category: "Data & Databases",
    description:
      "A series of projects covering relational design, denormalisation, MongoDB document modelling, replication, sharding, Neo4j graph queries and polyglot persistence.",
    tech: ["MongoDB", "Neo4j", "SQL", "Replication", "Sharding"],
    github: "https://github.com/ice-ybanez/CV_Projects/tree/main/NLDSA",
    status: "University Project",
    group: "projects",
  },
  {
    title: "Hungry Monkey",
    category: "C Programming",
    description:
      "A matrix-based game focused on grid parsing, state handling, movement algorithms and decision-making logic.",
    tech: ["C", "Algorithms", "Matrix Logic", "Game Logic"],
    github:
      "https://github.com/ice-ybanez/CV_Projects/tree/main/C%20Programming%20-%20HungryMonkey",
    status: "University Project",
    group: "projects",
  },
];

const professionalProjects = projects.filter(
  (project) => project.group === "experience"
);

const developmentProjects = projects.filter(
  (project) => project.group === "development"
);

const universityProjects = projects.filter(
  (project) => project.group === "projects"
);

const experience: Experience[] = [
  {
    period: "2026 - Present",
    title: "Full Stack Software Developer",
    place: "GreenGym Online · Frontend Focus",
    description:
      "Continuing development work after my internship, focusing on React and TypeScript UI improvements, responsive page updates, feature refinement and implementation of product feedback.",
    tags: ["React", "TypeScript", "CSS Modules", "Frontend", "Git"],
  },
  {
    period: "Feb - May 2026",
    title: "Full Stack Software Developer Intern",
    place: "GreenGym Online",
    description:
      "Worked on user and admin-facing features for a fitness platform, including member profiles, nutrition tracking, workout pages, impact pages, body composition history and Docker-based development workflows.",
    tags: ["React", "TypeScript", "Docker", "API Integration", "Git"],
  },
  {
    period: "2023 - 2027",
    title: "BSc (Hons) Software Development",
    place: "Munster Technological University",
    description:
      "Studying software development through practical modules covering web development, Java applications, databases, mobile development, algorithms, distributed systems, data analytics, machine learning and a two-semester final year project.",
    tags: ["Java", "Python", "Kotlin", "Go", "SQL", "MongoDB", "React"],
  },
];

const interests = [
  "Software Development",
  "UI / UX",
  "Fitness Technology",
  "Photography",
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Java",
  "Python",
  "Kotlin",
  "Go",
  "C",
  "SQL",
  "MongoDB",
  "Neo4j",
  "Git",
  "GitHub",
  "Docker",
];

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [typedName, setTypedName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let characterIndex = 0;

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedName(FULL_NAME.slice(0, characterIndex));

      if (characterIndex >= FULL_NAME.length) {
        window.clearInterval(typingTimer);
      }
    }, NAME_TYPING_SPEED_MS);

    return () => window.clearInterval(typingTimer);
  }, []);

  useEffect(() => {
    const cursorTimer = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 480);

    return () => window.clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty(
      "--theme-fade-duration",
      `${THEME_FADE_DURATION_MS}ms`
    );
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    const applyNewTheme = () => {
      document.documentElement.classList.add("theme-transitioning");

      flushSync(() => {
        document.documentElement.dataset.theme = nextTheme;
        setTheme(nextTheme);
      });

      window.localStorage.setItem("portfolio-theme", nextTheme);
    };

    const transitionDocument = document as Document & {
      startViewTransition?: (
        callback: () => void
      ) => {
        finished: Promise<void>;
      };
    };

    // Fallback for browsers without View Transitions.
    if (!transitionDocument.startViewTransition) {
      applyNewTheme();

      requestAnimationFrame(() => {
        document.documentElement.classList.remove("theme-transitioning");
      });

      return;
    }

    const transition =
      transitionDocument.startViewTransition(applyNewTheme);

    transition.finished.finally(() => {
      document.documentElement.classList.remove("theme-transitioning");
    });
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    const topbar = document.querySelector(".topbar") as HTMLElement | null;
    const topbarHeight = topbar?.offsetHeight ?? 0;

    const startY = window.scrollY;
    const targetY =
      target.getBoundingClientRect().top +
      window.scrollY -
      topbarHeight -
      14;

    const distance = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  const asset = (path: string) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

  return (
    <div className="siteShell">
      <header className="topbar">
        <div className="topbarInner">
          <button
            className="themeToggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z" />
              </svg>
            )}
          </button>

          <button
            className="brand"
            onClick={() => scrollToSection("about")}
            aria-label="Go to About section"
          >
            Ice<span>.dev</span>
          </button>

          <div className="brandLine" />

          <nav className="mainNav" aria-label="Portfolio navigation">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="section heroSection">
          <div className="sectionInner heroLayout">
            <div className="portraitPanel">
              <div className="portraitGlow" />

              <img
                src={asset("profile.jpg")}
                alt="Ice Ybañez"
                className="profilePortrait"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement?.classList.add(
                    "portraitMissing"
                  );
                }}
              />

              <div className="portraitFallback">IY</div>
            </div>

            <div className="heroIdentity">
              <p className="eyebrow">Hello, I&apos;m</p>
              <h1 className="typingName" aria-label={FULL_NAME}>
                <span className="typingText" aria-hidden="true">
                  {typedName}
                </span>
                <span
                  className={`typingCursor ${
                    cursorVisible ? "cursorVisible" : "cursorHidden"
                  }`}
                  aria-hidden="true"
                >
                  |
                </span>
              </h1>

              <p className="heroRole">
                Full-Stack Developer
                <span>•</span>
                Software Development Student
              </p>

              <div className="heroActions">
                <button
                  className="primaryButton"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </button>

                <a
                  className="secondaryButton"
                  href={asset("Ice-Ybanez-CV.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV
                </a>
              </div>
            </div>

            <div className="heroSide">
              <article className="infoCard compactCard aboutCard">
                <p className="cardLabel">About me</p>
                <p>
                  Final-year Software Development student at MTU with hands-on
                  React and TypeScript experience. I enjoy building clean,
                  practical software across frontend, full-stack, mobile and
                  data-focused projects.
                </p>
              </article>
            </div>
          </div>

          <div className="sectionInner skillsBlock">
            <div className="sectionHeading compactHeading">
              <div>
                <p className="sectionLabel">Toolkit</p>
                <h2>Skills & technologies</h2>
              </div>
            </div>

            <div className="toolkitGroups">
              <div className="toolkitGroup">
                <p className="toolkitGroupLabel">Skills</p>

                <div className="pillGrid skillPills">
                  {skills.map((skill) => (
                    <span className="pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="toolkitGroup">
                <p className="toolkitGroupLabel">Interests</p>

                <div className="pillGrid interestPills">
                  {interests.map((interest) => (
                    <span className="pill" key={interest}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section alternateSection">
          <div className="sectionInner">
            <div className="sectionHeading projectsHeading">
              <div>
                <p className="sectionLabel">Projects</p>
                <h2>Things I&apos;ve built</h2>
              </div>
            </div>

            <div className="projectGroup">
              <div className="projectGroupHeading">
                <span className="projectGroupNumber">01</span>
                <h3>Professional Experience</h3>
              </div>

              <div className="projectsGrid">
                {professionalProjects.map((project) => (
                  <article className="projectCard featuredProjectCard" key={project.title}>
                    <div className="projectTop">
                      <p className="projectCategory">{project.category}</p>
                      <span className="statusBadge">{project.status}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="projectDescription">{project.description}</p>

                    <div className="pillGrid projectTech">
                      {project.tech.map((tech) => (
                        <span className="pill smallPill" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="projectLinks">
                      {project.liveUrl && (
                        <a
                          className="textLink"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.liveLabel ?? "View Live"}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          className="textLink"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View on GitHub <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="projectGroup">
              <div className="projectGroupHeading">
                <span className="projectGroupNumber">02</span>
                <h3>In Development</h3>
              </div>

              <div className="projectsGrid">
                {developmentProjects.map((project) => (
                  <article className="projectCard" key={project.title}>
                    <div className="projectTop">
                      <p className="projectCategory">{project.category}</p>
                      <span className="statusBadge">{project.status}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="projectDescription">{project.description}</p>

                    <div className="pillGrid projectTech">
                      {project.tech.map((tech) => (
                        <span className="pill smallPill" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="projectGroup">
              <div className="projectGroupHeading">
                <span className="projectGroupNumber">03</span>
                <h3>University Projects</h3>
              </div>

              <div className="projectsGrid">
                {universityProjects.map((project) => (
                  <article className="projectCard" key={project.title}>
                    <div className="projectTop">
                      <p className="projectCategory">{project.category}</p>
                      <span className="statusBadge">{project.status}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="projectDescription">{project.description}</p>

                    <div className="pillGrid projectTech">
                      {project.tech.map((tech) => (
                        <span className="pill smallPill" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        className="textLink"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="sectionInner">
            <div className="sectionHeading">
              <div>
                <p className="sectionLabel">Experience</p>
                <h2>Work & education</h2>
              </div>

              <p>
                Professional development experience alongside my Software
                Development degree.
              </p>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article
                  className="timelineItem"
                  key={`${item.period}-${item.title}`}
                >
                  <div className="timelineMarker" />

                  <div className="timelinePeriod">{item.period}</div>

                  <div className="timelineContent experienceCard">
                    <h3>{item.title}</h3>
                    <p className="timelinePlace">{item.place}</p>
                    <p>{item.description}</p>

                    <div className="pillGrid">
                      {item.tags.map((tag) => (
                        <span className="pill smallPill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div className="sectionInner contactCard">
            <p className="sectionLabel">Contact</p>
            <h2>Let&apos;s build something useful.</h2>

            <p>
              I&apos;m interested in graduate and junior software development
              opportunities, particularly frontend and full-stack roles.
            </p>

            <div className="contactActions">
              <a
                className="primaryButton"
                href="https://github.com/ice-ybanez"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>

              <a
                className="secondaryButton"
                href={asset("Ice-Ybanez-CV.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="sectionInner footerInner">
          <button
            className="footerBrand"
            onClick={() => scrollToSection("about")}
          >
            Ice<span>.dev</span>
          </button>

          <p>Built with React, TypeScript & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
