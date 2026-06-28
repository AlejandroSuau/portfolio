import { featuredProjects, secondaryProjects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Projects.css";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <p className="section-label">04 · Projects</p>
          <h2 className="section-title">Featured projects</h2>

          <div className="projects-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>

          {secondaryProjects.length > 0 && (
            <div className="secondary-projects">
              <h3 className="subtitle">Other projects</h3>
              <ul className="secondary-list">
                {secondaryProjects.map((p) => (
                  <li key={p.id} className="secondary-item">
                    <div className="secondary-item-head">
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-title"
                      >
                        {p.title}
                      </a>
                      <span className="card-year mono">{p.year}</span>
                    </div>
                    <p className="secondary-short">{p.short}</p>
                    <div className="secondary-tags">
                      {p.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
