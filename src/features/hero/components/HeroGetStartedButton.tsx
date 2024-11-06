"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroGetStartedButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", y: 50, opacity: 0, scale: 1 }}
      animate={{ "--x": "-100%", y: 0, opacity: 1 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ opacity: 0.9 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
        y: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
        opacity: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={cn(
        " font-black px-6 py-3 h-fit text-white rounded-full lg:text-lg relative radial-gradient"
      )}
    >
      <span className=" w-full h-full inline-block relative linear-mask">
        Get started now!
      </span>
      <span className="block absolute inset-0 rounded-full p-px linear-overlay" />
    </motion.button>
  );
};
