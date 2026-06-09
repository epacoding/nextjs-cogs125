"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Page() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-300%"]
  );

  return (
    <main>
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center">
        <div>
          <h1 className="text-6xl font-bold">
            Evan Asti
          </h1>

          <p className="mt-4 text-xl">
            COGS 125 Advanced Interaction Design Portfolio
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section
        ref={targetRef}
        className="relative h-[400vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full"
          >
            <div className="relative w-screen h-screen flex-shrink-0">
              <Image
                src="/images/Base.png"
                alt="Base"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-screen h-screen flex-shrink-0">
              <Image
                src="/images/Base_Modified.png"
                alt="Base_Modified"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-screen h-screen flex-shrink-0">
              <Image
                src="/images/Region_Example.png"
                alt="Region_Example"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          Seeing if it runs
        </h2>
      </section>
    </main>
  );
}