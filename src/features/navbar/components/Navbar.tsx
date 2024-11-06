"use client";

import { Logo } from "@/components/Logo";
import { Languages } from "@/features/translation/components/Languages";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { DisplayNavbarLinks } from "./DisplayNavbarLinks";
import { NavSidebar } from "./NavSidebar";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(lastScrollY === 0 || lastScrollY > latest || latest <= 256);
    setLastScrollY(latest);
  });

  return (
    <motion.header
      className="w-full max-w-[1440px] px-2.5 left-1/2 -translate-x-1/2 h-16 fixed -top-20 z-40"
      initial={{ top: -80 }}
      animate={{
        top: isVisible ? 8 : -80,
      }}
    >
      <motion.nav
        className={cn(
          "w-full h-full flex items-center justify-between px-5 shadow-md border rounded-2xl bg-background/50 backdrop-blur-lg navbar-transition",
          {
            "border-transparent bg-transparent backdrop-blur-none shadow-none":
              lastScrollY === 0,
          }
        )}
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, type: "spring" },
        }}
      >
        <Link href="/" className="text-2xl font-black uppercase">
          <Logo />
        </Link>
        <div className=" w-fit hidden md:flex items-center gap-6">
          <DisplayNavbarLinks orientation="horizontal" />
          <Languages />
        </div>
        <div className=" md:hidden flex items-center gap-4">
          <Languages />
          <NavSidebar />
        </div>
      </motion.nav>
    </motion.header>
  );
};
