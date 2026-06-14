import { useState } from "react";
import { projects, type Project } from "../data/projects";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="page">
      <section className="section pageTop">
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
                      event.currentTarget.parentElement?.classList.add(
                        "imageMissing"
                      );
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
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Case Study
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
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

      {selectedProject && (
        <div className="modalOverlay" onClick={() => setSelectedProject(null)}>
          <div
            className="projectModal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modalClose"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <p className="sectionLabel">{selectedProject.category}</p>
            <h2>{selectedProject.title}</h2>

            <p className="modalDescription">{selectedProject.description}</p>

            {selectedProject.role && (
              <div className="modalBlock">
                <h3>My Role</h3>
                <p>{selectedProject.role}</p>
              </div>
            )}

            {selectedProject.features && (
              <div className="modalBlock">
                <h3>Main Features</h3>
                <ul>
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.challenges && (
              <div className="modalBlock">
                <h3>Challenges Solved</h3>
                <ul>
                  {selectedProject.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="techList modalTechList">
              {selectedProject.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="projectActions modalActions">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProjectsPage;