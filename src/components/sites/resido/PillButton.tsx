"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary";

export function PillButton({
  children,
  href,
  variant = "primary",
  className,
  type,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-heading text-[15px] font-medium tracking-tight";

  const variants: Record<Variant, string> = {
    primary: "bg-black text-white",
    secondary: "bg-white text-black",
    tertiary: "bg-white/20 text-white",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type ?? "button"}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
