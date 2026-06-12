"use client";

import styles from "./reflections.module.css";

import { motion } from "framer-motion";

import Image from "next/image";

import Link from "next/link";



export default function Page() {

  const basePath = process.env.NODE_ENV === 'production' ? "/nextjs-cogs125/reflections" : "";

  return (

    <main className={styles.page}>

        {/* Reflections Header Movement */}
      <section className={styles.hero}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "4rem" }}>
            {/* Left: text */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <motion.div
                style={{ flex: 1, textAlign: "left", fontSize: "24px" }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Reflections</h1>
                <p>
                Combining two things I love in web-design and Overwatch, this project can be summarized in three words: cumbersome and enlightening. I truly don't think
                I've ever done a project or assignment that has me learn as much as this one. I feel like, while my grasp of next.js was super loose at the beginning, continual refactoring
                of my code has left me understanding web-design framework much better and the actual thought process behind what I want to put on a page and how to maximize my pixels has greatly improved-more on that later.
                I loved how I was able to incoperate my own personal learnings from other classes too, such as the user feedback I learned from COGS 187A, and ways to set up those surveys from COGS 14A. At first,
                it was trial and erroring for hours on how to factor a sliding image galley, but as time went on, I was able to write the flow map featured in the user analysis almost entirely by myself.
                </p>
            </motion.div>

            <motion.div
                style={{ flex: 1, textAlign: "left", fontSize: "24px" }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p> 
                On the other hand, there were the long, long nights I stayed up trying to comprehend deploying my project. GitHub Pages is still incredibly tedious to cooperate with and I'm not sure if I can say I know how to deploy a project with confidence yet. 
                Oddly enough, my short learnings in CSE135, Online Database System Analytics, a class I dropped out of because I felt I was unprepared for it, were incredibly beneficial in my troubleshooting toward GitHub pages with chunking errors through visiting the
                dev tools in chrome. There are some things in this project I want to come back to. The homepage is very amateurish, as it's the first thing I made and I made a large majority of it without looking to refactor it as something more glamorous than I understood.
                It stands as an example of where I started in this project; in a sense, this project is a reflection of my growth in web design, and that's evident when you compare it to the Inspiration, Design Evolution, and Reflections page. However, I do want to come back to it and make it more visually appealing,
                as the homepage is the first thing a user sees and if I were to use this as a project I show to interviewers, it needs to be more up to par. For a reflection of this course, I hope it shows that my first learnings of sections, motion.p, and navigation has taken leaps and bounds.
                </p>
            </motion.div>
            </div>
            {/* Right: two stacked images */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0"}}>
            

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: "relative", height: "800px", borderRadius: "16px", overflow: "hidden" }}
            >
                <Image src={`${basePath}/images/user_analysis_code.png`} alt="" fill style={{ objectFit: "contain", marginTop: "50px" }} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: "relative", height: "800px", borderRadius: "16px", overflow: "hidden" }}
            >
                <Image src={`${basePath}/images/chunking_errors.png`} alt="" fill style={{ objectFit: "contain"}} />
            </motion.div>
            </div>
        </div>
    </section>
    <section className={styles.lookingBack}>
        <h2>Looking Back</h2>
        {[
            { label: "The thing I learned the most about was:", text: " styling with CSS. Having a *.modules.css file opened my eyes to making styling easier. " },
            { label: "The thing I struggled with the most was:", text: " GitHub Pages. It is remarkable how much sleep I have lost over GitHub Pages." },
            { label: "The thing I want to master next is:", text: " clearly understanding the difference in HTML formats, and where to use what." },
        ].map((item, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={styles.lookingBackItem}
            >
            <p className={styles.lookingBackLabel}>{item.label}</p>
            <p className={styles.lookingBackText}>{item.text}</p>
            </motion.div>
        ))}
        </section>
    </main>

   );
}