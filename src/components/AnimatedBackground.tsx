"use client";

import { raf } from "@/lib/scroll";
import { useEffect } from "react";

export default function AnimatedBackground() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) return; // disable parallax on reduced motion

    const shapes = Array.from(document.querySelectorAll<HTMLElement>(".floating-shape"));

    const onScroll = raf(() => {
      const scrolled = window.pageYOffset;
      shapes.forEach((shape, index) => {
        const speed = 0.3 + index * 0.15;
        const rotation = scrolled * (0.1 + index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
      });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pure DOM/CSS for the shapes, exactly as in source
  return (
    <div className="bg-animation" aria-hidden="true">
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />
      <div className="floating-shape shape-4" />
      <div className="floating-shape shape-5" />
    </div>
  );
}
