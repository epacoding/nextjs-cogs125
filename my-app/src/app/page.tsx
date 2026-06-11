"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
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
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
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

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
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

        <motion.div
          animate={{
            x: `-${slide * 100}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={1152}
                height={864}
                style={{ objectFit: "contain" }}
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* NAVIGATION */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderTop: "1px solid #ddd",
          backgroundColor: "black",
          zIndex: 1000,
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
      </nav>
    </main>
  );
}