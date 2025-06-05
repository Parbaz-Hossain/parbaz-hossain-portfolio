"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Importing the components
import Stairs from "./stairs";

const StairTransition = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key ={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Stairs />
                </div>
                 {/* This div is used to create a transition effect  */}
                <motion.div 
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ 
                        opacity: 0,
                        transition: { 
                            delay: 1,
                            duration: 0.4, 
                            ease: "easeInOut" 
                        }
                    }}                
                />  
            </div>
        </AnimatePresence>
    );
}

// This is a placeholder component for a stair transition effect.
export default StairTransition;