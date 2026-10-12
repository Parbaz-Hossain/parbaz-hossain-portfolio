"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
 * Layout notes
 * ------------
 * The ring and the photo share one square box, so they scale together at every
 * breakpoint and the ring can never cut across the photo.
 *
 * - The ring SVG fills the box (viewBox 420, r = 200, stroke 4), so its inner
 *   edge sits at 198/420 ≈ 47.1% of the box width from the centre.
 * - The portrait (1534 × 1786 cut-out) is sized and offset so the smallest
 *   circle enclosing all of its visible pixels is centred in the box with a
 *   radius of ~44.1% of the box — a ~3% gap inside the ring's inner edge.
 *     height 81.4%, width 69.9%, left 10.3%, top 3.5%
 *   If the photo is replaced with one of a different shape, these four
 *   numbers are the only thing to re-tune.
 */
const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative aspect-square w-[min(320px,86vw)] sm:w-[380px] md:w-[420px] xl:w-[480px]"
      >
        {/* Animated dashed circle - surrounds the image */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          fill="transparent"
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="210"
            cy="210"
            r="200"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="24 10 0 0"
            fill="none"
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
              strokeDasharray: ["24 10 0 0", "15 120 25 25", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              strokeDasharray: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>

        {/* Image - sits fully inside the ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="absolute left-[10.3%] top-[3.5%] w-[69.9%] h-[81.4%] z-10"
        >
          <Image
            src="/assets/Parbaz-Hossain.png"
            priority
            quality={100}
            fill
            alt="Parbaz Hossain"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
