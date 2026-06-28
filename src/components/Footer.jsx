import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import useReveal from "../hooks/useReveal.js";
import "./Footer.css";

const LINKS = [
  { href: "mailto:alejandro.suau@gmail.com", label: "Email", icon: MdEmail, cls: "mail" },
  { href: "https://www.linkedin.com/in/alejandro-suau-ruiz/", label: "LinkedIn", icon: SiLinkedin, cls: "li" },
  { href: "https://github.com/AlejandroSuau", label: "GitHub", icon: SiGithub, cls: "gh" },
  { href: "https://www.youtube.com/@The.TrueBoolean", label: "YouTube", icon: SiYoutube, cls: "yt" },
];

export default function Footer() {
  const [ref, visible] = useReveal();

  return (
    <footer id="contact" className="section footer">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <p className="section-label">05 · Contact</p>
          <h2 className="section-title">Let's talk</h2>
          <p className="footer-text">
            Open to new opportunities in game development. Reach out directly or find me on:
          </p>

          <div className="social">
            {LINKS.map((link) => {
              const Icon = link.icon;
              const isMail = link.href.startsWith("mailto:");
              const { href, label, cls } = link;
              return (
                <a
                  key={label}
                  className={`social-btn ${cls}`}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noreferrer"}
                  title={label}
                >
                  <Icon className="icon" /> <span>{label}</span>
                </a>
              );
            })}
            <a
              className="social-btn cv"
              href="https://github.com/AlejandroSuau/portfolio/raw/main/CV_Alejandro_Suau_Ruiz.pdf"
              target="_blank"
              rel="noreferrer"
              title="Download CV"
            >
              <FaFilePdf className="icon" /> <span>CV</span>
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">© {new Date().getFullYear()} Alejandro Suau Ruiz</p>
    </footer>
  );
}
