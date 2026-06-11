"use client";

import styles from "./inspiration.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.page}>

      {/* Inspiration Header Movement */}

      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, x: -500, y: -50 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.8 }}
        >
          Inspiration
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          This project was inspired by a collection of visual references,
          interaction patterns, and design philosophies that helped shape
          the final experience.
        </motion.p>
      </section>

      {/* FEATURED INFLUENCES */}

      <section className={styles.section}>
        <h2>Featured Influences</h2>

        <div className={styles.influenceGrid}>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className={styles.influenceCard}
          >
            <Image
              src="/images/inspo1.jpg"
              alt=""
              fill
              className={styles.image}
            />

            <div className={styles.overlay}>
              <h3>Influence One</h3>
              <p>Short description.</p>
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
              src="/images/inspo2.jpg"
              alt=""
              fill
              className={styles.image}
            />

            <div className={styles.overlay}>
              <h3>Influence Two</h3>
              <p>Short description.</p>
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
              src="/images/inspo3.jpg"
              alt=""
              fill
              className={styles.image}
            />

            <div className={styles.overlay}>
              <h3>Influence Three</h3>
              <p>Short description.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* VISUAL INSPIRATION */}

      <section className={styles.section}>
        <h2>Visual Inspiration</h2>

        <div className={styles.cardGrid}>

          <div className={styles.infoCard}>
            <h3>Color Palette</h3>
            <p>Explain your palette here.</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Typography</h3>
            <p>Explain your font choices.</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Layout Ideas</h3>
            <p>Describe layout references.</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Interactions</h3>
            <p>Describe hover and animation ideas.</p>
          </div>

        </div>
      </section>

      {/* RESEARCH */}

      <section className={styles.section}>
        <h2>Research & Discovery</h2>

        <div className={styles.timeline}>

          <div className={styles.timelineItem}>
            <h3>Problem</h3>
            <p>What problem were you solving?</p>
          </div>

          <div className={styles.timelineItem}>
            <h3>Audience</h3>
            <p>Who was the audience?</p>
          </div>

          <div className={styles.timelineItem}>
            <h3>Constraints</h3>
            <p>What limitations existed?</p>
          </div>

        </div>
      </section>

      {/* TAKEAWAYS */}

      <section className={styles.section}>
        <h2>Key Takeaways</h2>

        <div className={styles.takeaways}>

          <motion.div
            whileHover={{ y: -8 }}
            className={styles.takeawayCard}
          >
            <span>01</span>
            <p>Your first takeaway.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className={styles.takeawayCard}
          >
            <span>02</span>
            <p>Your second takeaway.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className={styles.takeawayCard}
          >
            <span>03</span>
            <p>Your third takeaway.</p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}