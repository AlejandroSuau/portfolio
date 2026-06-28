import { FaFilePdf } from "react-icons/fa";
import useReveal from "../hooks/useReveal.js";
import "./Hero.css";

const CODE_SNIPPET = `class Engineer {
public:
    std::string name      = "Alejandro Suau";
    Role        role      = Role::GameDev;
    int         years_swe = 7;

    void ship() { /* ... */ }
};`;

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div ref={ref} className={`hero-copy reveal ${visible ? "is-visible" : ""}`}>
          <p className="section-label">Software Engineer — Game Development</p>
          <h1 className="hero-title">Alejandro Suau Ruiz</h1>
          <p className="hero-text">
            I've been playing video games for over 25 years — and creating them is both my
            passion and my profession. I build gameplay systems, engines and backend tools
            that turn ambitious ideas into real, playable experiences.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a
              className="btn btn-secondary"
              href="https://github.com/AlejandroSuau/portfolio/raw/main/CV_Alejandro_Suau_Ruiz.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FaFilePdf /> Download CV
            </a>
          </div>
        </div>

        <div className="hero-code mono" aria-hidden="true">
          <div className="hero-code-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="hero-code-filename">engineer.hpp</span>
          </div>
          <pre className="hero-code-body">{CODE_SNIPPET}</pre>
        </div>
      </div>
    </section>
  );
}
