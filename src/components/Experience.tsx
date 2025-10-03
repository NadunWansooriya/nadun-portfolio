"use client";
import { useEffect } from "react";
import { OBSERVER_OPTIONS } from "@/lib/observer";

export default function Experience() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const entries = Array.from(document.querySelectorAll<HTMLElement>("section, .timeline-item"));
    const observer = new IntersectionObserver((obs) => {
      obs.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          if (el.classList.contains("timeline-item")) {
            el.style.animation = "slideInLeft 0.8s ease forwards";
          }
        }
      });
    }, OBSERVER_OPTIONS);

    entries.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <h2 className="section-title">🚀 Professional Journey</h2>
      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Cybersecurity & Software Engineering Intern</h3>
            <div className="company">E-W Information Systems Limited (Toppan Forms)</div>
            <div className="duration">July 2024 - December 2024 (6 months)</div>
            <p>
              🏦 Developed and updated cheque printing programs for major banks using C# and .NET
              Framework. Integrated Microsoft SQL databases, implemented barcode scanning systems,
              optimized database performance, and enhanced security measures including firewall
              updates and IT operations support.
            </p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ ["--progress-width" as any]: "95%" }} />
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Freelance Creative Professional</h3>
            <div className="company">Fiverr (Level 1 Seller)</div>
            <div className="duration">January 2019 - November 2024 (6 years)</div>
            <p>
              🎬 Created engaging whiteboard animations, 2D animations, and explainer videos for 50+
              clients. Managed social media campaigns, developed graphics and content strategies, and
              maintained consistent brand identities across multiple platforms.
            </p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ ["--progress-width" as any]: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
