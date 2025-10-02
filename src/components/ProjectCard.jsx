import React from "react";
import Carousel from "./Carousel.jsx";

export default function ProjectCard({ p }) {
  const isYouTube = p.video?.type === "youtube";
  const isMp4 = p.video?.type === "mp4";

  const ytId = (url) => {
    const m = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  };

  return (
    <article className="card">
      {/* IMAGE/S */}
      {p.images?.length ? (
        <div style={{ padding: "14px 14px 0 14px" }}>
          <Carousel images={p.images} title={p.title} />
        </div>
      ) : (
        <div className="thumb" role="img" aria-label={p.title}
             style={{ backgroundImage: `url(${p.cover})` }} />
      )}

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
              Watch video
            </a>
          )}
          {isMp4 && (
            <a className="btn" target="_blank" rel="noreferrer" href={p.video.url}>
              Watch video
            </a>
          )}
          <a className="btn secondary" target="_blank" rel="noreferrer" href={p.repoUrl}>
            Code (GitHub)
          </a>
        </div>
      </div>
    </article>
  );
}
