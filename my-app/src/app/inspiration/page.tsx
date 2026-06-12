"use client";

import styles from "./inspiration.module.css";

import { motion } from "framer-motion";

import Image from "next/image";

import Link from "next/link";



export default function Page() {

  const basePath = process.env.NODE_ENV === 'production' ? "/nextjs-cogs125/" : "";

  return (

    <main className={styles.page}>



      {/* Inspiration Header Movement */}



      <section className={styles.hero}>
      `<div style={{ display: "flex", alignItems: "flex-start", gap: "4rem" }}>
        {/* Left: text */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <motion.div
            style={{ flex: 1, textAlign: "left", fontSize: "24px" }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Inspiration</h1>
            <p>
              My name is Evan and I play Overwatch semi-professionally. I am involved both with
              UCSD and an individual team, and I believe the Overwatch Professional scene needs
              more eyes drawn to it. My portfolio is concentrated on redesigning the home screen
              to cater to a more casual audience to take interest in OW Esports, aligning with
              this aforementioned objective.
            </p>
          </motion.div>

          <motion.div
            style={{ flex: 1, textAlign: "left", fontSize: "24px" }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p> 
              Image: Myself competing at a tournament. I have been playing for three years, and both teams I play for currently have strong media prescences.
            </p>
          </motion.div>
        </div>
        {/* Right: two stacked images */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative", height: "800px", borderRadius: "16px", overflow: "hidden" }}
          >
            <Image src={`${basePath}/images/cachedImage.png`} alt="" fill style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </div>
    </section>

      {/* My influences, talking about 3 pieces of content I earlier wanted to include */}

      <section className={styles.section}>

        <h2>Media that has Influenced My Design Ambitions</h2>

        <div className={styles.influenceGrid}>

          <motion.div

            whileHover={{

              y: -10,

              scale: 1.02

            }}

            className={styles.influenceCard}

          >

            <Image
              src={`${basePath}/images/tweet.png`}
              alt="tweet"
              fill
              className={styles.image}
              style={{ objectFit: "contain" }}
            />

            <div className={styles.overlay}>

              <h3>Community Voice</h3>

              <p>Several influential community members have spoken out about the lack of presentation for OW Esports in any facet within the actual game client.</p>

            </div>

          </motion.div>

          <motion.div

            whileHover={{

              y: -10,

              scale: 1.02

            }}

            className={styles.influenceCard}

          >

            <Image
              src={`${basePath}/images/OWTV.png`}
              alt="OWTV"
              fill
              className={styles.image}
              style={{ objectFit: "contain" }}
            />

            <div className={styles.overlay}>

              <h3>Community Action</h3>

              <p>Third party websites have been developed to platform OW Esports content, a great starting point to integrate something inside the game.</p>

            </div>

          </motion.div>

          <motion.div

            whileHover={{

              y: -10,

              scale: 1.05

            }}

            className={styles.influenceCard}

          >

            <div style={{ position: "absolute", inset: "75px", borderRadius: "0px", overflow: "hidden" }}>
              <Image
                src={`${basePath}/images/IMG_9937.jpg`}
                alt="Medal"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.overlay}>

              <h3>Personal Competition</h3>

              <p>From my own experience in tournaments, it's incredibly thrilling to have people watch me compete, and I would hope it could be an experience more people obtain.</p>

            </div>

          </motion.div>

        </div>

      </section>

    </main>

  );
}