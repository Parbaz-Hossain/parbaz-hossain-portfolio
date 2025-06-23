"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RouteCurtain({ children }) {
  const pathname = usePathname();

const SLIDE_TIME = 1.2;          // ⏱  slide speed (seconds)
const FADE_DELAY = SLIDE_TIME;   // start fade after panels finish
const FADE_TIME  = 0.4;          // length of the fade

  const panel = {
    initial: (custom) => ({
      x: custom === "left" ? "-100%" : "100%",
      skewX: custom === "left" ? -10 : 10,
    }),
    enter:  {
      x: 0,
      skewX: 0,
      transition: { duration: SLIDE_TIME, ease: [0.83, 0, 0.17, 1] },
    },
    exit: (custom) => ({
      x: custom === "left" ? "100%" : "-100%",
      skewX: custom === "left" ? 10 : -10,
      transition: { duration: SLIDE_TIME, ease: [0.83, 0, 0.17, 1] },
    }),
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {/* one presence wrapper per page key */}
        <motion.div key={pathname}>{children}</motion.div>

        {/* overlay only during transition */}
        <motion.div
          key={`${pathname}-overlay`}
          className="fixed inset-0 pointer-events-none z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: FADE_DELAY, duration: FADE_TIME} }}
          exit={{ opacity: 1 }}
        >
          {/* left & right panels */}
          {["left", "right"].map((side) => (
            <motion.div
              key={side}
              custom={side}
              variants={panel}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`
                absolute top-0 h-full w-1/2
                ${side === "left" ? "left-0" : "right-0"}
                bg-[var(--accent)]        /* pull from Tailwind or CSS var */
              `}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
