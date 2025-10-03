"use client";

import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  // Sticky behavior + scrolled class
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 100) navRef.current.classList.add("scrolled");
      else navRef.current.classList.remove("scrolled");

      // Active link highlighting
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) current = section.id;
      });

      document.querySelectorAll<HTMLAnchorElement>(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href && href === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu toggle
  useEffect(() => {
    const toggle = toggleRef.current;
    const links = linksRef.current;
    if (!toggle || !links) return;

    const onClick = () => {
      links.classList.toggle("active");
      toggle.classList.toggle("active");
    };
    toggle.addEventListener("click", onClick);
    return () => toggle.removeEventListener("click", onClick);
  }, []);

  // Smooth anchor scroll + close menu on navigation
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const handler = (e: MouseEvent) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      linksRef.current?.classList.remove("active");
    };
    anchors.forEach((a) => a.addEventListener("click", handler));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  // Keyboard section navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const ids = ["home", "skills", "experience", "projects", "contact"];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom >= 100;
      });
      if (!current) return;

      let idx = ids.indexOf(current);

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        idx = Math.min(idx + 1, ids.length - 1);
        if (ids[idx]) {
          document.getElementById(ids[idx])?.scrollIntoView({ behavior: "smooth" });
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        idx = Math.max(idx - 1, 0);
        if (ids[idx]) {
          document.getElementById(ids[idx])?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav id="navbar" ref={navRef} aria-label="Primary">
      <div className="nav-container">
        <div className="logo">Nadun Wansooriya</div>
        <div
          className="menu-toggle"
          id="menuToggle"
          ref={toggleRef}
          aria-label="Toggle navigation"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-links" id="navLinks" ref={linksRef}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
