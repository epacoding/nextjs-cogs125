"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

/**
 * Replace these entries with your actual images.
 * `src` should point to files in /public, e.g. "/images/project1.jpg"
 * `alt` is the accessible description.
 * `label` appears as a caption inside the placeholder when no image is present.
 */
const SLIDES = [
  { src: "/images/Base.png", alt: "Project one", label: "01" },
  { src: "/images/Base_Modified.png", alt: "Project two", label: "02" },
  { src: "/images/Region_Example.png", alt: "Project three", label: "03" }
];

const INTERVAL_MS = 5000;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setVisible(false);
      setTimeout(() => {
        setCurrent((index + SLIDES.length) % SLIDES.length);
        setVisible(true);
      }, 450); // matches slideExitActive transition
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 5 s; reset on manual navigation
  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  const slide = SLIDES[current];

  return (
    <main className={styles.page}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <h1 className={styles.name}>Evan Asti</h1>
        <p className={styles.subtitle}>COGS 125 Portfolio</p>
      </header>

      {/* ── Gallery ── */}
      <section className={styles.gallerySection} aria-label="Image gallery">
        <button
          className={styles.navBtn}
          onClick={prev}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.galleryTrack}>
          <div
            className={styles.slide}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-12px)",
              transition: "opacity 0.55s ease, transform 0.55s ease",
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className={styles.slideImage}
                priority={current === 0}
              />
            ) : (
              <div className={styles.slidePlaceholder}>
                <span>{slide.label}</span>
                {slide.alt}
              </div>
            )}
          </div>

          {/* Dot indicators */}
          <div className={styles.dots} aria-hidden="true">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        </div>

        <button
          className={styles.navBtn}
          onClick={next}
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <Link href="/inspiration" className={styles.footerLink}>
          Inspiration
        </Link>
        <Link href="/design-evolution" className={styles.footerLink}>
          Design Evolution
        </Link>
        <Link href="/reflections" className={styles.footerLink}>
          Reflections
        </Link>
      </footer>
    </main>
  );
}
