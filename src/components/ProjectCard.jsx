import React, { useState } from "react";
import Carousel from "./Carousel.jsx";
import Lightbox from "./Lightbox.jsx";

export default function ProjectCard({ p }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const isYouTube = p.video?.type === "youtube";
  const isMp4 = p.video?.type === "mp4";

  const openLightboxAt = (i) => {
    setLightboxIndex(i || 0);
    setLightboxOpen(true);
  };

  const ytId = (url) => {
    const m = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  };

  return (
    <article className="card">
      {/* IMAGE/S */}
      {p.images?.length ? (
        <div style={{ padding: "14px 14px 0 14px" }}>
          <Carousel images={p.images} title={p.title} onImageClick={openLightboxAt} />
        </div>
      ) : (
        <div
          className="thumb"
          role="img"
          aria-label={p.title}
          style={{ backgroundImage: `url(${p.cover})`, cursor: "zoom-in" }}
          onClick={() => openLightboxAt(0)}
        />
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

        <div className="actions actions-center">
          <a className="btn secondary" target="_blank" rel="noreferrer" href={p.repoUrl}>
            Code (GitHub)
          </a>
        </div>

        {lightboxOpen && (
        <Lightbox
          images={p.images?.length ? p.images : [p.cover]}
          startIndex={lightboxIndex}
          title={p.title}
          onClose={() => setLightboxOpen(false)}
        />
        )}
      </div>
    </article>
  );
}
