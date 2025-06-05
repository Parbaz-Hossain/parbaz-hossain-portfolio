"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathname = usePathname();
    return ( 
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ 
                        opacity: 0,
                        display: "none",
                        transition: {delay: 1, duration: 0.4, ease: "easeInOut" } 
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 bg-events-none"
                />
                {children}
            </div>        
        </AnimatePresence>
    );
}

// This is a simple page transition component for a Next.js application.
export default PageTransition;