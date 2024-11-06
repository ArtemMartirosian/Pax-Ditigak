import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/types/types";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "900"] });

interface Props extends PropsWithClassName {}

export const Logo = ({ className }: Props) => {
  return <p className={cn(className, poppins.className)}>Digitalize</p>;
};
