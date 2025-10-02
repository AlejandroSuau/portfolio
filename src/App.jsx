import React, { useMemo, useState } from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import { projects as allProjects } from "./data/projects.js";
import "./index.css";

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
        <h1>C++ Game Dev · Portfolio</h1>
        <nav>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tu-perfil/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:tu@email.com">Email</a>
        </nav>
      </header>

      <section className="controls">
        <input
          className="input"
          placeholder="Buscar por título o tecnología…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select className="input" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="newest">Más nuevo</option>
          <option value="oldest">Más antiguo</option>
        </select>
      </section>

      <section className="grid">
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
        {projects.length === 0 && <p>No hay proyectos con ese filtro.</p>}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Tu Nombre — C++ Game Developer
      </footer>
    </div>
  );
}
