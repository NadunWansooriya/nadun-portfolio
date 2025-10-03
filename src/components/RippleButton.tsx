"use client";

import { forwardRef } from "react";

type Props = React.ComponentProps<"a"> & { variant: "primary" | "outline" };

const RippleButton = forwardRef<HTMLAnchorElement, Props>(function RippleButton(
  { variant, className = "", children, ...rest },
  ref
) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    Object.assign(ripple.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}px`,
      top: `${y}px`,
      position: "absolute",
      background: "rgba(255,255,255,0.3)",
      borderRadius: "50%",
      transform: "scale(0)",
      animation: "ripple 0.6s linear",
      pointerEvents: "none"
    } as CSSStyleDeclaration);
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <a
      ref={ref}
      onClick={onClick}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
});

export default RippleButton;
