"use client";

import { motion } from "framer-motion";

interface OrbProps {
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
  size?: number;
}

export default function GradientOrb({
  className = "",
  color = "bg-[var(--color-primary)]",
  delay = 0,
  duration = 20,
  size = 400,
}: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] opacity-20 pointer-events-none ${color} ${className}`}
      style={{ width: size, height: size }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -80, 40, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
