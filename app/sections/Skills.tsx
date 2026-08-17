"use client";

import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const categories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "NestJS", "REST APIs"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "Mongoose"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading label="Skills & Technologies" title="My Tech Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
            >
              <h4 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-slate-300 hover:bg-[var(--color-primary)]/20 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
