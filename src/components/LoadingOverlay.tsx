"use client";

import { useEffect, useRef } from "react";

export default function LoadingOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Matches original: 1.5s delay then 0.5s fade/hide
    const t1 = setTimeout(() => {
      el.style.opacity = "0";
      const t2 = setTimeout(() => {
        el.style.display = "none";
      }, 500);
      return () => clearTimeout(t2);
    }, 1500);

    return () => clearTimeout(t1);
  }, []);

  return (
    <div className="loading" id="loading" aria-live="polite" aria-busy="true" ref={ref}>
      <div className="loading-spinner" role="status" aria-label="Loading" />
    </div>
  );
}
