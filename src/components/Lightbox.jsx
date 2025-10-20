import React, { useEffect, useRef, useState } from "react";

export default function Lightbox({ images = [], startIndex = 0, title = "", onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const touchStartX = useRef(null);
  const total = images.length;

  const go = (i) => setIdx(((i % total) + total) % total);
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  // Cerrar con ESC y navegar con flechas
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, onClose]);

  // Swipe táctil
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
    touchStartX.current = null;
  };

  if (!total) return null;

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <div
        className="lb-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="dialog"
        aria-label={`${title} – image ${idx + 1} of ${total}`}
        aria-modal="true"
      >
        <button className="lb-close" onClick={onClose} aria-label="Close lightbox">✕</button>

        <div className="lb-stage">
          <button className="lb-nav lb-left" onClick={prev} aria-label="Previous image">‹</button>

          <img
            key={idx}
            className="lb-img"
            src={images[idx]}
            alt={`${title} – image ${idx + 1} of ${total}`}
          />

          <button className="lb-nav lb-right" onClick={next} aria-label="Next image">›</button>
        </div>

        <div className="lb-footer">
          <div className="lb-caption">
            {title} <span className="lb-count">({idx + 1}/{total})</span>
          </div>
          <div className="lb-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`lb-dot ${i === idx ? "active" : ""}`}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
