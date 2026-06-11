"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BASE_PATH = "/cogs125-nextjs";

export default function Page() {
  const [slide, setSlide] = useState(0);

  const images = [
    `${BASE_PATH}/images/Base.png`,
    `${BASE_PATH}/images/Base_Modified.png`,
    `${BASE_PATH}/images/Region_Example.png`,
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 500,
    color: "white",
  };

  return (
    <main style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Intro */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 700 }}>
          Evan Asti
        </h1>
        <p style={{ fontSize: "24px", fontWeight: 400 }}>
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

        {/* IMAGE */}
        <img
          src={images[slide]}
          alt={`Slide ${slide + 1}`}
          style={{
            maxWidth: "90%",
            maxHeight: "80vh",
            objectFit: "contain",
            transition: "opacity 0.3s ease",
          }}
        />
      </section>

      <Link href="/inspiration" style={linkStyle}>
        Inspiration
      </Link>

      <Link href="/design-evolution" style={linkStyle}>
        Design Evolution
      </Link>

      <Link href="/reflections" style={linkStyle}>
        Reflections
      </Link>
    </main>
  );
}