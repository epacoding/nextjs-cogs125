"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  const hyperlink = process.env.NODE_ENV === 'production' ? "/nextjs-cogs125" : "";

  const [slide, setSlide] = useState(0);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % 4);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const linkStyle = {
    textDecoration: "none",
    fontSize: "40px",
    fontWeight: 500,
    color: "white",
  };

  return (
    <main className={styles.page}>

      {/* ================= INTRO ================= */}
      <section
        style={{
          minHeight: "0vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: 400 }}>
          Evan Asti
        </h1>
        <p style={{ fontSize: "24px", fontWeight: 400 }}>
          COGS 125 Portfolio
        </p>
      </section>

      {/* ================= SLIDER ================= */}
      <section
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* gradient fade */}
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

        {/* title */}
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease-in",
            zIndex: 10,
            textAlign: "center",
          }}
        >
        {/* prev / next buttons */}
        <button
          onClick={() => setSlide((prev) => (prev - 1 + 4) % 4)}
          style={{ position: "absolute", left: "100px", top: "50%", transform: "translateY(50%)", zIndex: 10, background: "none", border: "1px solid white", color: "white", fontSize: "24px", padding: "10px 16px", cursor: "pointer" }}
        >
          ‹
        </button>
        <button
          onClick={() => setSlide((prev) => (prev + 1 + 4) % 4)}
          style={{ position: "absolute", right: "100px", top: "50%", transform: "translateY(50%)", zIndex: 10, background: "none", border: "1px solid white", color: "white", fontSize: "24px", padding: "10px 16px", cursor: "pointer" }}
        >
          ›
        </button>
          <h2 style={{ fontSize: "40px", fontWeight: 600, margin: 0, marginTop: "-20px" }}>
            My Design Progression
          </h2>
        </div>

        {/* slider track */}
        <motion.div
          initial={false}
          animate={{ x: `-${slide * 100}vw` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src={`${hyperlink}/images/Base.png`}
              alt="Slide 1"
              width={1000}
              height={700}
              loading="eager"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Slide 2 */}
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src={`${hyperlink}/images/Base_Modified.png`}
              alt="Slide 2"
              width={1000}
              height={700}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Slide 3 */}
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src={`${hyperlink}/images/Region_Example.png`}
              alt="Slide 3"
              width={1000}
              height={700}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Slide 4 */}
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src={`${hyperlink}/images/NA_Final_Design.png`}
              alt="Slide 4"
              width={1000}
              height={700}
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER NAV ================= */}
      <footer
        style={{
          width: "100vw",
          height: "80px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid #ddd",
          marginTop: "-100px"
        }}
      >
        <a href={`${hyperlink}/inspiration`} style={linkStyle}>
          Inspiration
        </a>

        <a href={`${hyperlink}/design-evolution`} style={linkStyle}>
          Design Evolution
        </a>

        <a href={`${hyperlink}/reflections`} style={linkStyle}>
          Reflections
        </a>
      </footer>
    </main>
  );
}