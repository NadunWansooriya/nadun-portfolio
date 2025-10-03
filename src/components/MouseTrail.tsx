"use client";

import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    type Point = { x: number; y: number; life: number };
    let mouseTrail: Point[] = [];

    const onMove = (e: MouseEvent) => {
      mouseTrail.push({ x: e.clientX, y: e.clientY, life: 20 });
      if (mouseTrail.length > 15) mouseTrail.shift();

      // Remove old elements
      document.querySelectorAll(".mouse-trail").forEach((el) => el.remove());

      mouseTrail.forEach((point, index) => {
        const trail = document.createElement("div");
        trail.className = "mouse-trail";
        Object.assign(trail.style, {
          position: "fixed",
          left: `${point.x}px`,
          top: `${point.y}px`,
          width: "6px",
          height: "6px",
          background: `rgba(255, 107, 53, ${0.8 - index * 0.05})`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: "9999",
          transition: "all 0.1s ease"
        } as CSSStyleDeclaration);
        document.body.appendChild(trail);
      });
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll(".mouse-trail").forEach((el) => el.remove());
    };
  }, []);

  return null;
}
