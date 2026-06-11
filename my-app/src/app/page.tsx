"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [slide, setSlide] = useState(0);

  const images = [
    "/screenshots/Base.png",
    "/screenshots/Base_Modified.png",
    "/screenshots/Region_Example.png",
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 500,
    color: "white",
    padding: "12px 24px",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "10px",
  };

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Intro */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Evan Asti
        </h1>

        <p
          style={{
            fontSize: "24px",
            opacity: 0.8,
          }}
        >
          COGS 125 Portfolio
        </p>
      </section>

      {/* Slider */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left Button */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "20px",
            zIndex: 10,
            fontSize: "30px",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "20px",
            zIndex: 10,
            fontSize: "30px",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        >
          ›
        </button>

        <img
          src={images[slide]}
          alt={`Slide ${slide + 1}`}
          style={{
            maxWidth: "90%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      </section>

      {/* Navigation */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/inspiration" style={linkStyle}>
          Inspiration
        </Link>

        <Link href="/design-evolution" style={linkStyle}>
          Design Evolution
        </Link>

        <Link href="/reflections" style={linkStyle}>
          Reflections
        </Link>
      </section>
    </main>
  );
}