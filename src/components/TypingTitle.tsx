"use client";

import { useEffect, useRef, useState } from "react";

const TEXTS = ["DevOps Engineer", "Full-Stack Developer", "Security Specialist"];

export default function TypingTitle() {
  const [text, setText] = useState("");
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const delRef = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const start = () => {
      const tick = () => {
        // ✅ always safe, use modulo and non-null assertion
        const currentText = TEXTS[idxRef.current % TEXTS.length]!;

        if (delRef.current) {
          setText(currentText.substring(0, charRef.current - 1));
          charRef.current--;
        } else {
          setText(currentText.substring(0, charRef.current + 1));
          charRef.current++;
        }

        let typeSpeed = 100;
        if (delRef.current) typeSpeed = typeSpeed / 2;

        if (!delRef.current && charRef.current === currentText.length) {
          typeSpeed = 2000; // pause at end
          delRef.current = true;
        } else if (delRef.current && charRef.current === 0) {
          delRef.current = false;
          idxRef.current = (idxRef.current + 1) % TEXTS.length;
        }
        timer = window.setTimeout(tick, typeSpeed);
      };
      timer = window.setTimeout(tick, 0);
    };

    let timer: number | null = null;
    const delay = reduce ? 0 : 2000;
    const t = window.setTimeout(() => start(), delay);

    return () => {
      if (t) clearTimeout(t);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return <h1 id="heroTitle">{text}</h1>;
}
