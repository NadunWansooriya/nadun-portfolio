"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = ref.current;
    if (!container) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const particleCount = 50;
    const colors = [
      "var(--primary)",
      "var(--secondary)",
      "var(--accent)",
      "var(--purple)",
      "var(--pink)",
      "var(--cyan)"
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      // ✅ ensure color always a string
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)] ?? "var(--primary)";
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return <div className="particles" id="particles" aria-hidden="true" ref={ref} />;
}
