"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass =
    animation === "slide-left"
      ? "animate-slide-left"
      : animation === "slide-right"
      ? "animate-slide-right"
      : animation === "scale"
      ? "animate-scale"
      : "animate-on-scroll";

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div ref={ref} className={`${animClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
