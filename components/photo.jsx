"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        >
            {/* Image */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
                className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[400px] mix-blend-lighten">
                <Image
                    src="/assets/Parbaz-Hossain.png"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain"
                />
            </motion.div>

            {/* circle */}
            <motion.svg
                className="absolute top-0 left-0 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[400px] xl:h-[400px] -z-10"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                >
                <motion.circle
                    cx="240"
                    cy="240"
                    r="230"
                    stroke="#00ff99"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 25 250 22"],
                    rotate: [120, 360],
                    }}
                    transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    }}
                />
            </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;