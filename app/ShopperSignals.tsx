"use client";

import { useEffect, useState } from "react";

const highlights = [
  {
    title: "Made for real plans.",
    copy: "Matching sets for birthdays, Christmas pictures and group outings.",
  },
  {
    title: "Easy to ask. Easy to choose.",
    copy: "Open any look, then continue on WhatsApp for sizes and availability.",
  },
  {
    title: "One archive. Many moods.",
    copy: "Graphic tees, jerseys, shorts, hoodies and varsity layers in one place.",
  },
];

export function ShopperHighlights() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % highlights.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="shopper-highlights"
      aria-labelledby="shopper-highlights-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="shopper-highlights-inner shell">
        <p className="eyebrow" id="shopper-highlights-title">The Maymart experience</p>
        <div className="shopper-highlight" key={active} aria-live={paused ? "polite" : "off"}>
          <h2>{highlights[active].title}</h2>
          <p>{highlights[active].copy}</p>
        </div>
        <div className="shopper-highlight-controls">
          <div className="shopper-highlight-dots" aria-label="Choose a highlight">
            {highlights.map((highlight, index) => (
              <button
                className={index === active ? "is-active" : ""}
                type="button"
                key={highlight.title}
                onClick={() => setActive(index)}
                aria-label={`Show ${highlight.title}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
          <button className="shopper-highlight-pause" type="button" onClick={() => setPaused((value) => !value)}>
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </section>
  );
}

export function LagosPopularityNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: number;

    const showNotice = () => {
      setVisible(true);
      hideTimer = window.setTimeout(() => setVisible(false), 4600);
    };

    const firstTimer = window.setTimeout(showNotice, 5200);
    const interval = window.setInterval(showNotice, 16000);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <aside className={`lagos-popularity${visible ? " is-visible" : ""}`} aria-live="polite" aria-hidden={!visible}>
      <span className="lagos-popularity-mark" aria-hidden="true">M</span>
      <span>
        <strong>Popular with shoppers in Lagos</strong>
        <small>Explore the latest Maymart looks.</small>
      </span>
    </aside>
  );
}
