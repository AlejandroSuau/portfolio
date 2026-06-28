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

          <div className="projects-grid stagger">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>

          {secondaryProjects.length > 0 && (
            <div className="secondary-projects">
              <h3 className="subtitle">Other projects</h3>
              <div className="secondary-grid stagger">
                {secondaryProjects.map((p) => {
                  const Tag = p.ctaUrl ? "a" : "div";
                  const linkProps = p.ctaUrl
                    ? { href: p.ctaUrl, target: "_blank", rel: "noreferrer" }
                    : {};
                  return (
                    <Tag key={p.id} className="secondary-card" {...linkProps}>
                      {p.cover && (
                        <div
                          className="secondary-thumb"
                          role="img"
                          aria-label={p.title}
                          style={{ backgroundImage: `url(${p.cover})` }}
                        />
                      )}
                      <div className="secondary-card-body">
                        <div className="secondary-card-head">
                          <h4>{p.title}</h4>
                          <span className="card-year mono">{p.year}</span>
                        </div>
                        <p className="secondary-short">{p.short}</p>
                        <div className="secondary-tags">
                          {p.tech.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
