import type { MouseEvent } from "react";
import "./index.css";
import { projects } from "./data/projects";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Java",
  "JavaFX",
  "SQL",
  "MongoDB",
  "Firebase",
  "Docker",
  "Git",
  "Python",
  "C",
  "Go",
  "CSS",
];

const scrollToSection = (targetId: string) => {
  const target = document.getElementById(targetId);

  if (!target) return;

  const startPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - 24;
  const distance = targetPosition - startPosition;
  const duration = 900;
  const startTime = performance.now();

  const easeInOutCubic = (time: number) =>
    time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;

  const animation = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const handleNavClick = (
  event: MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  event.preventDefault();
  scrollToSection(targetId);
  window.history.pushState(null, "", `#${targetId}`);
};

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">Ice.dev</div>

        <div className="navLinks">
          <a href="#about" onClick={(event) => handleNavClick(event, "about")}>
            About
          </a>
          <a href="#projects" onClick={(event) => handleNavClick(event, "projects")}>
            Projects
          </a>
          <a
            href="#experience"
            onClick={(event) => handleNavClick(event, "experience")}
          >
            Experience
          </a>
          <a href="#contact" onClick={(event) => handleNavClick(event, "contact")}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroIntro">
          <div className="portraitCard">
            <div className="portraitGlow" />
            <img
              src="/profile.jpg"
              alt="Ice Ybanez portrait"
              className="profilePortrait"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement?.classList.add("portraitMissing");
              }}
            />
            <span className="portraitFallback">Ice</span>
          </div>

          <div className="heroCopy">
            <p className="eyebrow">Software Development Student</p>

            <h1>Ice Ybanez</h1>

            <p className="heroRole">
              Frontend & Full-Stack Developer
            </p>

            <p className="heroText">
              I build clean, practical software using React, TypeScript, Java,
              databases, and modern development tools.
            </p>

            <div className="heroActions">
              <a
                className="primaryButton"
                href="#projects"
                onClick={(event) => handleNavClick(event, "projects")}
              >
                View Projects
              </a>
              <a
                className="secondaryButton"
                href="#contact"
                onClick={(event) => handleNavClick(event, "contact")}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section twoColumn">
        <div>
          <p className="sectionLabel">About</p>
          <h2>Always will be a student.</h2>
        </div>

        <div className="card">
          <p>
            I’m currently studying Software Development at Munster Technological
            University. I enjoy creating practical software that solves real
            problems, especially projects involving frontend development,
            full-stack systems, databases, and clean user interfaces.
          </p>

          <p>
            Through my GreenGym placement and university projects, I’ve worked
            with React, TypeScript, Java, SQL, MongoDB, Docker, and Git. I like
            building features step by step, improving UI/UX, and making systems
            easier to use.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="sectionLabel">Skills</p>
        <h2>Technologies I work with</h2>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <span key={skill} className="skillPill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Projects</p>
            <h2>Featured work</h2>
          </div>

          <p className="sectionHint">
            A selection of internship and university projects.
          </p>
        </div>

        <div className="projectsGrid">
          {projects.map((project) => (
            <article key={project.title} className="projectCard">
              <div className="projectImageWrap">
                {project.image ? (
                  <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="projectImage"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement?.classList.add("imageMissing");
                  }}
                />
                ) : (
                  <div className="projectImagePlaceholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="projectContent">
                <div className="projectTop">
                  <p className="projectCategory">{project.category}</p>
                  <span>{project.status}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="techList">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="projectActions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section twoColumn">
        <div>
          <p className="sectionLabel">Experience</p>
          <h2>Current placement experience</h2>
        </div>

        <div className="card experienceCard">
          <div>
            <h3>GreenGym Online</h3>
            <p className="muted">Full Stack Software Developer Intern</p>
          </div>

          <p>
            Worked on frontend and full-stack tasks for a fitness platform,
            focusing on React/TypeScript UI development, responsive layouts,
            profile management, nutrition tracking, workout page improvements,
            and Docker-based testing/development workflows.
          </p>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <p className="sectionLabel">Contact</p>
        <h2>Let’s connect</h2>

        <p>
          I’m open to software development opportunities, placement experience,
          graduate roles, and project collaborations.
        </p>

        <div className="contactLinks">
          <a href="mailto:935ybanez@gmail.com">Email Me</a>
          <a href="https://github.com/ice-ybanez" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ice-ybanez" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="/Ice-Ybanez-CV.pdf" target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;