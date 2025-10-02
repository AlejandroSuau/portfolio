import React, { useMemo, useState } from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import { projects as allProjects } from "./data/projects.js";
import "./index.css";

import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function App() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("newest");

  const projects = useMemo(() => {
    let list = allProjects.filter(p =>
      (p.title + " " + p.short + " " + p.tech.join(" ")).toLowerCase().includes(q.toLowerCase())
    );
    list.sort((a, b) => sort === "newest" ? b.year - a.year : a.year - b.year);
    return list;
  }, [q, sort]);

  return (
    <div className="container">
      <header className="topbar">
        <h1>Alejandro Suau · C++ Game Dev</h1>
        <nav className="social">
          <a className="social-btn yt" href="https://www.youtube.com/@The.TrueBoolean" target="_blank" rel="noreferrer" title="YouTube">
            <SiYoutube className="icon" /><span className="label">YouTube</span>
          </a>
          <a className="social-btn gh" href="https://github.com/AlejandroSuau" target="_blank" rel="noreferrer" title="GitHub">
            <SiGithub className="icon" /><span className="label">GitHub</span>
          </a>
          <a className="social-btn li" href="https://www.linkedin.com/in/alejandro-suau-ruiz/" target="_blank" rel="noreferrer" title="LinkedIn">
            <SiLinkedin className="icon" /><span className="label">LinkedIn</span>
          </a>
          <a className="social-btn mail" href="mailto:alejandro.suau@gmail.com" title="Email">
            <MdEmail className="icon" /><span className="label">Email</span>
          </a>
        </nav>
      </header>


      <section className="controls">
        <input
          className="input"
          placeholder="Search for title / technology…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select className="input" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </section>

      <section className="grid">
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
        {projects.length === 0 && <p>No projects with that filter.</p>}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Alejandro Suau — C++ Game Developer
      </footer>
    </div>
  );
}
