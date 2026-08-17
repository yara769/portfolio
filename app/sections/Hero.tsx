"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import GradientOrb from "../components/GradientOrb";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <GradientOrb
        color="bg-[var(--color-primary)]"
        size={500}
        className="top-20 -left-20"
        delay={0}
      />
      <GradientOrb
        color="bg-[var(--color-secondary)]"
        size={400}
        className="bottom-20 -right-20"
        delay={2}
        duration={25}
      />
      <GradientOrb
        color="bg-[var(--color-accent)]"
        size={300}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        delay={4}
        duration={15}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-[var(--color-primary)] text-sm tracking-widest uppercase mb-6">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Hi, I'm <span className="text-gradient">Yara</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            I build scalable web applications with modern technologies.
            Passionate about clean code, user experience, and solving real-world
            problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-[var(--color-primary)]/40 transition-shadow flex items-center gap-2"
            >
              View My Work <ArrowDown size={18} />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { num: "2", label: "Years Experience" },
            { num: "3+", label: "Major Projects" },
            { num: "10+", label: "Technologies" },
            { num: "100%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.num}
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
