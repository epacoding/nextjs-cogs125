"use client";

import styles from "./design-evolution.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Page() {

  const basePath = process.env.NODE_ENV === 'production' ? "/nextjs-cogs125" : "";

  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stickyRef, offset: ["start start", "end end"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0vh", "-200vh"]);

  const cards = [
    {
      title: "Color Scheme",
      body: "In the main division of competition, Overwatch Championship Series (OWCS), the color pallete is orange and white. The features included reflect this scheme, and I kept the Overwatch home screen blue as background color for the 'Today's Schedule' section. Meshing casual audience's expectation of Overwatch home screen blue with the brand of OWCS as something new and exciting is the best way to get them to explore the content of the page.",
    },
    {
      title: "Typography",
      body: "The white text compliments OWCS other main color, white, and I choose to use emboldened text next to icons to start to familairize casual audience with the teams participating. This aims for recognition and memorability, not recall. The typography inside the standings is used to delinate that the bottom two teams are eliminated with the blurred line between 4th and 5th place.",
    },
    {
      title: "Layout",
      body: "The UI is laid over the OWCS brand. I choose to have the regions on the left as something that could be easily navigated and switched between, the standings for that region in the center of the screen-important part of competition, since it is the team's 'success'-, and the matches to be played for the day on the right so a casual fan can easily find the match to watch for the day.",
    },
    {
      title: "Interactions",
      body: "Many features were included to guide toward the main interaction, actually watching a live match. EMEA is red with a small icon to mimic a camera, indicating a live match is occurring in that region. Additionally, a small identation is present on the region icons, letting the user know the current region they're observing, in case they are lost. In a full development, hovering the match cards would the team's players, and clicking on the match card would take the user to the live stream of the match.",
    },
  ];

  const flow = [
    {
      problem: "Layout of regions and matches was awkward. It left a viewer confused on where to look.",
      resolution: "Restructure the layout to have regions across the top, standings on left, with a more concise box, and scaled down logo on background image.",
    },
    {
      problem: "Some typography felt overwhelming and unnecessary for a casual fan.",
      resolution: "Typography linking to site for watching a match can be represented by icons of Twitch and Youtube logo. Also, remove the week, since casual fans likely won't care for it.",
    },
    {
      problem: "The schedule of matches is beneficial, but is short-sighted and doesn't encourage exploration of the scene beyond today's matches.",
      resolution: "Add an interaction to where a viewer can see the full schedule of matches beyond matches shown for most recent day. For our sake, it's an image of the full season.",
    },
  ];

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Design Evolution
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I focused on three pillars: visual color scheming, layout restructuring, and content clarity.
          Each iteration brought the Overwatch home screen closer to something a casual fan would
          want to explore — not just a tool for existing players.
        </motion.p>
      </section>

      {/* ── CHECKPOINT IMAGE 1 ── */}
      <section className={styles.checkpoint}>
        <p className={styles.checkpointLabel}>Checkpoint — Initial Wireframe</p>
        <div className={styles.checkpointImage}>
          <Image src={`${basePath}/images/Base.png`} alt="Checkpoint 1" fill style={{ objectFit: "contain" }} />
        </div>
      </section>

      {/* ── VISUAL DESIGN CARDS ── */}
      <section className={styles.section}>
        <h2>Visual Design</h2>
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <div className={styles.infoCard} key={card.title}>
              <h3>{card.title}</h3>
              <div className={styles.cardReveal}>
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHECKPOINT IMAGE 2 ── */}
      <section className={styles.checkpoint}>
        <p className={styles.checkpointLabel}>Checkpoint — Color & Type Pass</p>
        <div style={{ display: "flex", gap: "1.5rem", width: "100%" }}>
          <div className={styles.checkpointImage} style={{ flex: 1 }}>
            <Image src={`${basePath}/images/Base_Modified.png`} alt="Checkpoint 2a" fill style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.flowArrow} style={{ marginTop: "240px" }}>
            →
          </div>
          <div className={styles.checkpointImage} style={{ flex: 1 }}>
            <Image src={`${basePath}/images/Region_Example.png`} alt="Checkpoint 2b" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>

      {/* ── PROBLEM INTO RESOLUTION FLOW ── */}
      <section className={styles.section}>
        <h2>Feedback & Redesign</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#a1a1aa", lineHeight: 1.8, marginTop:"-40px"}}
        >
          After sharing the initial UI with 10 overwatch peers, 5 casual, 5 interested in Esports, these were the main problems I identified.
        </motion.p>
        <div className={styles.flowMap}>
          {flow.map((item, i) => (
            <motion.div
              key={i}
              className={styles.flowRow}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ marginTop: i === 0 ? "20px" : "0px" }}
            >
              <div className={styles.flowBox + " " + styles.flowProblem}>
                <span className={styles.flowLabel}>Problem</span>
                <p>{item.problem}</p>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowBox + " " + styles.flowResolution}>
                <span className={styles.flowLabel}>Resolution</span>
                <p>{item.resolution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CHECKPOINT IMAGE 3 ── */}
      <section ref={stickyRef} style={{ position: "relative", height: "300vh" }}>
  
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex" }}>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5%" }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", marginBottom: "3rem" }}>Key Takeaways</h2>
            {[
              { num: "01", text: "Icons at the bottom of the matches provide a clear hyperlink to watch the match without overwhelming typography." },
              { num: "02", text: "Smaller OWCS logo and restructured layout reduces visual clutter and allows user to chunk content without hesitations and confusion." },
              { num: "03", text: "Full schedule of matches, reachable by the oragne arrow link, is indicative of a larger match schedule for players who want to become more invested." },
            ].map((t) => (
              <motion.div key={t.num} whileHover={{ y: -8 }} className={styles.takeawayCard} style={{ marginBottom: "1.5rem" }}>
                <span>{t.num}</span>
                <p>{t.text}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <motion.div style={{ y: imageY, position: "absolute", top: 0, width: "100%" }}>
              {[`${basePath}/images/NA_Final_Design.png`, `${basePath}/images/EU_Final_Design.png`, `${basePath}/images/Match_Schedule.png`].map((src, i) => (
                <div key={i} style={{ position: "relative", height: "100vh", width: "100%" }}>
                  <Image src={src} alt={`Final design ${i + 1}`} fill style={{ objectFit: "contain" }} />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
}