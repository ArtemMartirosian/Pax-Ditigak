"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export const DashboardActiveLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        " w-full h-full flex items-center p-2 rounded-md font-semibold transition-all",
        isActive ? "bg-violet-500" : "hover:bg-violet-500/10"
      )}
    >
      {children}
    </Link>
  );
};
