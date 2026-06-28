import { featuredProjects } from "../data/projects.js";
import useReveal from "../hooks/useReveal.js";
import useCountUp from "../hooks/useCountUp.js";
import "./About.css";

const FACTS = [
  "Game dev focus since 2021",
  "Shipped features to millions of players",
];

export default function About() {
  const [ref, visible] = useReveal();
  const years = useCountUp(7, { start: visible });
  const projectCount = useCountUp(featuredProjects.length, { start: visible });

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <p className="section-label">01 · About</p>
          <h2 className="section-title">About me</h2>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number mono">{years}+</span>
              <span className="stat-label">years as a software engineer</span>
            </div>
            <div className="stat">
              <span className="stat-number mono">{projectCount}</span>
              <span className="stat-label">featured projects</span>
            </div>
          </div>

          <p className="about-text">
            I've been playing video games for over 25 years, and for the last several
            I've been building them. I'm a software engineer with roughly seven years of
            professional experience, focused on game development since 2021 — gameplay
            systems, engines, tools, and the backend work that holds them together. I've
            shipped features for a live game played by millions, built C++/SDL2 and
            C++/OpenGL engines from scratch, and kept legacy C++98 codebases alive and
            maintainable along the way.
          </p>
          <ul className="about-facts stagger">
            {FACTS.map((fact) => (
              <li key={fact} className="tag">{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
