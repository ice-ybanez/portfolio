import { Link } from "react-router-dom";
import { skillGroups } from "../data/skillGroups";

function AboutPage() {
  return (
    <main className="page">
      <section className="hero pageHero">
        <div className="heroIntro">
          <div className="portraitCard">
            <div className="portraitGlow" />

            <img
              src="/profile.jpg"
              alt="Ice Ybanez portrait"
              className="profilePortrait"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement?.classList.add(
                  "portraitMissing"
                );
              }}
            />

            <span className="portraitFallback">Ice</span>
          </div>

          <div className="heroCopy">
            <p className="eyebrow">Software Development Student</p>

            <h1>Ice Ybanez</h1>

            <p className="heroRole">Frontend & Full-Stack Developer</p>

            <p className="heroText">
              I build clean, practical software using React, TypeScript, Java,
              databases, and modern development tools.
            </p>

            <div className="heroActions">
              <Link className="primaryButton" to="/projects">
                View Projects
              </Link>

              <Link className="secondaryButton" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section twoColumn">
        <div>
          <p className="sectionLabel">About</p>
          <h2>Am a student, always will be a student.</h2>
        </div>

        <div className="card">
          <p>
            I'm currently studying Software Development at MTU. 
            I enjoy creating software that I (and potentially others) can use, especially projects involving frontend development,
            full-stack systems, databases and clean user interfaces.
          </p>

          <p>
            Through my placement at GreenGym and college projects, I've worked
            with React, TypeScript, Java, SQL, MongoDB, Docker and Git. I like
            building features step by step, improving UI/UX and making systems
            easier to use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Skills</p>
            <h2>Skills & technologies</h2>
          </div>

          <p className="sectionHint">
            Grouped by the areas I’ve worked with through placement and
            university projects.
          </p>
        </div>

        <div className="skillGroupsGrid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skillGroupCard">
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skillsGrid compactSkills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skillPill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;