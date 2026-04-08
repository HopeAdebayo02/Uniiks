"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  relation: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 6000,
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval, isPaused]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-[var(--color-border)] shadow-sm min-h-[240px] flex flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[var(--color-accent)]/30 mb-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
        </svg>

        <div key={active} className="testimonial-active">
          <p className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed italic mb-6">
            &ldquo;{testimonials[active].quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {testimonials[active].name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)]">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-[var(--color-text-light)]">
                {testimonials[active].relation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white border border-[var(--color-border)] hover:bg-[var(--color-bg-alt)] transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-text-light)]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === active
                  ? "bg-[var(--color-secondary)] w-8"
                  : "bg-[var(--color-border)] hover:bg-[var(--color-text-light)]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white border border-[var(--color-border)] hover:bg-[var(--color-bg-alt)] transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-text-light)]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
