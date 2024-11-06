"use client";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className={cn(
        " lg:text-9xl md:text-8xl sm:text-7xl text-[56px] font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-violet-700"
      )}
    >
      <Logo />
    </motion.h1>
  );
};
