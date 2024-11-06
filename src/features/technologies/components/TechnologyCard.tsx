"use client";

import { TechnologyDataProps } from "@/types/definitions";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  item: TechnologyDataProps;
  index: number;
}

export const TechnologyCard = ({ item, index }: Props) => {
  return (
    <motion.div
      className=" w-16 mx-1 aspect-square flex items-center justify-center shadow-md border rounded-md bg-white p-2.5"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.1, type: "spring" },
      }}
    >
      <Image
        src={item.image}
        alt={item.technologyName}
        width={32}
        height={32}
      />
    </motion.div>
  );
};
