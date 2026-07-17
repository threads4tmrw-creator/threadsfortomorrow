"use client";

import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

type FloatingProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  rotate?: number;
  yDistance?: number;
};

export function Floating({
  children,
  className = "",
  duration = 7,
  delay = 0,
  rotate = 0,
  yDistance = 14,
}: FloatingProps) {
  const style = { "--rot": `${rotate}deg` } as CSSProperties;
  return (
    <motion.div
      style={style}
      className={`pointer-events-none select-none ${className}`}
      initial={{ rotate }}
      animate={{ y: [0, -yDistance, 0], rotate: [rotate, rotate + 3, rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
