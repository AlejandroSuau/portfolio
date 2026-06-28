import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "./Header.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo mono">
          AS<span className="logo-dot">_</span>
        </a>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-primary cv-btn"
            href="https://github.com/AlejandroSuau/portfolio/raw/main/CV_Alejandro_Suau_Ruiz.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf /> <span>CV</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
