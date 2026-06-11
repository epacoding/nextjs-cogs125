"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  {/* Initialize the slide state */}
  const [slide, setSlide] = useState(0);

  const base = process.env.NODE_ENV === "production" ? "/nextjs-cogs125" : "";

  const images = [
  `${base}/screenshots/Base.png`,
  `${base}/screenshots/Base_Modified.png`,
  `${base}/screenshots/Region_Example.png`
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "80px",
            zIndex: 2,
            pointerEvents: "none",
            background: "linear-gradient(to bottom, white, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            textAlign: "center",
          }}
        ></div>
        <motion.div
          animate={{
            x: `-${slide * 100}vw`,
            y: "-60px"
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
        {/* Slide 1 */}
          <div
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
              src={`${base}/screenshots/Base.png`}
              alt="Slide 1"
              width={1152}
              height={864}
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Slide 2 */}
          <div
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
              src={`${base}/screenshots/Base_Modified.png`}
              alt="Slide 2"
              width={1152}
              height={864}
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Slide 3 */}
          <div
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
              src={`${base}/screenshots/Region_Example.png`}
              alt="Slide 3"
              width={1152}
              height={864}
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </section>
      {/* NAVIGATION (now page-based) */}
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
        <Link href={`${base}/inspiration/`} style={linkStyle}>
          Inspiration
        </Link>

        <Link href={`${base}/design-evolution/`} style={linkStyle}>
          Design Evolution
        </Link>

        <Link href={`${base}/reflections/`} style={linkStyle}>
          Reflections
        </Link>
      </nav>
    </main>
  );
}