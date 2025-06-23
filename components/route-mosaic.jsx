"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const COLS = 10;   // number of columns
const ROWS = 6;    // number of rows
const DURATION = 1.1; // total slide time (s)

/**
 * Builds an array of tile coordinates: [{id, x, y}]
 */
const tiles = Array.from({ length: COLS * ROWS }, (_, i) => ({
  id: i,
  // grid positions (used for stagger)
  x: i % COLS,
  y: Math.floor(i / COLS),
}));

export default function RouteMosaic({ children }) {
  const pathname = usePathname();

  // Stagger helper – later columns start sooner for a wave effect
  const customDelay = ({ x, y }) => (x + y * 0.5) * 0.04;

  return (
    <>
      {/* Actual page */}
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>{children}</motion.div>

        {/* The mosaic overlay */}
        <motion.div
          key={`${pathname}-overlay`}
          className="fixed inset-0 z-40 pointer-events-none grid"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
          /* stay mounted only during the transition */
          initial="enter"
          animate="exit"
          variants={{ visible: {} }} // needed for AnimatePresence
        >
          {tiles.map((tile) => (
            <motion.div
              key={tile.id}
              custom={tile}
              className="bg-accent origin-top" /* Tailwind color */
              variants={{
                enter: {
                  scaleY: 0,
                  transition: {
                    delay: customDelay(tile),
                    duration: DURATION / 2,
                    ease: [0.45, 0, 0.55, 1],
                  },
                },
                exit: {
                  scaleY: 0,
                  transition: {
                    delay: customDelay(tile) + DURATION / 2,
                    duration: DURATION / 2,
                    ease: [0.45, 0, 0.55, 1],
                  },
                },
              }}
              /* grows down then shrinks up */
              style={{ transformOrigin: "top" }}
              initial={false}
              animate={{ scaleY: 1 }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
