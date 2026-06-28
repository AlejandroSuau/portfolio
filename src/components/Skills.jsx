import { skillGroups } from "../data/skills.js";
import useReveal from "../hooks/useReveal.js";
import "./Skills.css";

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <p className="section-label">02 · Skills</p>
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.id} className="skills-card">
                <h3 className="skills-card-title">{group.label}</h3>
                <ul className="skills-tags">
                  {group.items.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
