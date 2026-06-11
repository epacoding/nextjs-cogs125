"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const images = [
    "/screenshots/Base.png",
    "/screenshots/Base_Modified.png",
    "/screenshots/Region_Example.png",
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* INTRO */}
      <section
        style={{
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: 0 }}>Evan Asti</h1>
        <p style={{ fontSize: "24px", margin: 0 }}>
          COGS 125 Portfolio
        </p>
      </section>

      {/* SLIDER */}
      <section
        style={{
          height: "80vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* LEFT */}
        <button
          onClick={prevSlide}
          style={arrowStyle("left")}
        >
          ‹
        </button>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          style={arrowStyle("right")}
        >
          ›
        </button>

        {/* IMAGE (STATIC SAFE) */}
        <div style={{ textAlign: "center" }}>
          <Image
            src={images[slide]}
            alt={`Slide ${slide + 1}`}
            width={1000}
            height={700}
            style={{
              maxWidth: "90vw",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </section>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "70px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "black",
        }}
      >
        <Link href="/inspiration">Inspiration</Link>
        <Link href="/design-evolution">Design Evolution</Link>
        <Link href="/reflections">Reflections</Link>
      </nav>
    </main>
  );
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: "20px",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
  };
}