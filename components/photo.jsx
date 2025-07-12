"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
            className="relative flex items-center justify-center"
        >
            {/* Animated dashed circle - behind image */}
            <motion.svg
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] xl:w-[420px] xl:h-[420px] -z-10"
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
                        strokeDasharray: ["24 10 0 0", "15 120 25 25", "16 25 92 72", "4 250 22 22"]
                    }}
                    transition={{
                        rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        strokeDasharray: {
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }}
                />
            </motion.svg>

            {/* Image */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
                className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] xl:w-[400px] xl:h-[400px] z-10">
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