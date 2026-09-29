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
            <p className="eyebrow">Software Developer · Ireland</p>

            <h1>Ice Ybañez</h1>

            <p className="heroRole">Frontend & Full-Stack Developer</p>

            <p className="heroText">
              Final-year Software Development student at MTU with hands-on
              experience building React and TypeScript features for a fitness
              platform. I enjoy creating clean interfaces, practical full-stack
              applications, and software that solves real problems.
            </p>

            <div className="heroActions">
              <Link className="primaryButton" to="/projects">
                View Projects
              </Link>

              <a
                className="secondaryButton"
                href="/Ice-Ybanez-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>

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
          <h2>Building practical software across web, mobile, and data.</h2>
        </div>

        <div className="card">
          <p>
            I&apos;m currently completing a BSc in Software Development at
            Munster Technological University, with expected completion in May
            2027.
          </p>

          <p>
            During my placement with GreenGym, I worked on user and admin-facing
            features for a React and TypeScript fitness platform. After the
            placement, I continued contributing on a frontend-focused retainer.
          </p>

          <p>
            My university work has also covered Java, Kotlin, Python, Go,
            relational and NoSQL databases, distributed systems, mobile
            development, and software architecture. I like taking a feature
            from an initial idea through implementation, testing, refinement,
            and presentation.
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
            Technologies I&apos;ve used through professional work, university
            projects, and personal development.
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
