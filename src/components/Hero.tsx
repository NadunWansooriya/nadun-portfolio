"use client";

import TypingTitle from "./TypingTitle";
import RippleButton from "./RippleButton";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Console message: identical string & emoji
    // eslint-disable-next-line no-console
    console.log("🚀 Nadun Wansooriya Portfolio - Enhanced Version Loaded Successfully!");
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* TypingTitle will mutate content exactly as in source */}
        <TypingTitle />
        <p className="subtitle">DevOps Engineer | Software Engineer |Security Specialist</p>
        <p className="description">
          Passionate BICT graduate specialized in Networking Technology with expertise in DevOps,
          Cybersecurity, and Full-Stack Development. Building scalable, secure solutions with
          cutting-edge technologies like AWS, Docker, Kubernetes, and modern web frameworks.
        </p>
        <div className="cta-buttons">
          <RippleButton variant="primary" href="#projects">🚀 Explore My Work</RippleButton>
          <RippleButton variant="outline" href="#contact">📬 Let's Connect</RippleButton>
        </div>
      </div>
    </section>
  );
}
