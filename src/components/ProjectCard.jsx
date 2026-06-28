import { useState } from "react";
import Carousel from "./Carousel.jsx";
import Lightbox from "./Lightbox.jsx";

export default function ProjectCard({ p }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightboxAt = (i) => {
    setLightboxIndex(i || 0);
    setLightboxOpen(true);
  };

  return (
    <article className="card">
      {p.images?.length ? (
        <div className="card-media">
          <Carousel images={p.images} title={p.title} onImageClick={openLightboxAt} />
        </div>
      ) : (
        <div
          className="thumb"
          role="img"
          aria-label={p.title}
          style={{ backgroundImage: `url(${p.cover})` }}
          onClick={() => openLightboxAt(0)}
        />
      )}

      <div className="card-content">
        <header className="card-head">
          <h3>{p.title}</h3>
          <span className="card-year mono">{p.year}</span>
        </header>

        <p className="card-short">{p.short}</p>

        <div className="card-tags">
          {p.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="card-actions">
          <a className="btn btn-secondary" target="_blank" rel="noreferrer" href={p.repoUrl}>
            Code (GitHub)
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={p.images?.length ? p.images : [p.cover]}
          startIndex={lightboxIndex}
          title={p.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </article>
  );
}
