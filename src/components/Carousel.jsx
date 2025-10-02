import React, { useEffect, useRef, useState } from "react";

export default function Carousel({ images = [], title = "" }) {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef(null);

  const total = images.length;
  const go = (i) => setIdx((prev) => (i + total) % total);
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
    touchStartX.current = null;
  };

  if (total === 0) return null;

  return (
    <div className="carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="carousel-viewport" aria-live="polite">
        <img
          className="carousel-img"
          src={images[idx]}
          alt={`${title} – image ${idx + 1} of ${total}`}
          loading="lazy"
        />
        {total > 1 && (
          <>
            <button aria-label="Previous image" className="nav-btn nav-left" onClick={prev}>‹</button>
            <button aria-label="Next image" className="nav-btn nav-right" onClick={next}>›</button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? "active" : ""}`}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
