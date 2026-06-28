import { jobs, education, courses } from "../data/experience.js";
import useReveal from "../hooks/useReveal.js";
import "./Experience.css";

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <p className="section-label">03 · Experience</p>
          <h2 className="section-title">Experience</h2>

          <div className="exp-timeline">
            {jobs.map((job) => (
              <article key={job.id} className="exp-item">
                <div className="exp-head">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <p className="exp-dates mono">{job.start} – {job.end}</p>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="exp-extra">
            <div className="exp-education">
              <h3 className="subtitle">Education</h3>
              <ul className="edu-list">
                {education.map((edu) => (
                  <li key={edu.id} className="edu-item">
                    <div className="exp-head">
                      <p className="edu-title">{edu.title}</p>
                      <p className="exp-dates mono">{edu.start} – {edu.end}</p>
                    </div>
                    <p className="edu-school">{edu.school}</p>
                    {edu.notes && (
                      <ul className="edu-notes">
                        {edu.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-courses">
              <h3 className="subtitle">Courses &amp; certifications</h3>
              <ul className="courses-list">
                {courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
