"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  centered = true,
}: SectionHeadingProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center" : ""}
    >
      <p className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase mb-4">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold">
        {rest} <span className="text-gradient">{lastWord}</span>
      </h2>
    </motion.div>
  );
}
