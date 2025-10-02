import React from "react";

export default function ProjectCard({ p }) {
  const isYouTube = p.video?.type === "youtube";
  const isMp4 = p.video?.type === "mp4";

  // Si es YouTube, extrae el ID para embeber
  const ytId = (url) => {
    const m = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  };

  return (
    <article className="card">
      <div className="thumb" role="img" aria-label={p.title}
           style={{ backgroundImage: `url(${p.cover})` }} />
      <div className="content">
        <header className="header">
          <h3>{p.title}</h3>
          <span className="year">{p.year}</span>
        </header>

        <p className="short">{p.short}</p>

        <div className="tags">
          {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="actions">
          {isYouTube && ytId(p.video.url) && (
            <a className="btn" target="_blank" rel="noreferrer"
               href={`https://www.youtube.com/watch?v=${ytId(p.video.url)}`}>
              Ver video
            </a>
          )}
          {isMp4 && (
            <a className="btn" target="_blank" rel="noreferrer" href={p.video.url}>
              Ver video
            </a>
          )}
          <a className="btn secondary" target="_blank" rel="noreferrer" href={p.repoUrl}>
            Código (GitHub)
          </a>
        </div>
      </div>
    </article>
  );
}
