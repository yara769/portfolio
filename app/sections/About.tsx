"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
  },
  {
    icon: Database,
    title: "Backend",
    desc: "Node.js, Express, NestJS, REST APIs, GraphQL",
  },
  {
    icon: Globe,
    title: "Database",
    desc: "MongoDB, PostgreSQL, Redis, Prisma, Mongoose",
  },
  {
    icon: Terminal,
    title: "DevOps",
    desc: "Git, Docker, AWS, Linux, CI/CD",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-secondary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/avatar.png"
                  alt="Yara"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                  👩‍💻
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-10 -left-10 w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[var(--color-primary)] text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning complex problems into{" "}
              <span className="text-gradient">smart solutions</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in building
              scalable web applications. From designing responsive interfaces to
              architecting robust backend systems, I enjoy every part of the
              development process.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source, or building side projects that solve
              real problems.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 glass rounded-lg text-sm font-medium text-slate-300">
                🚀 Available for freelance
              </span>
              <span className="px-4 py-2 glass rounded-lg text-sm font-medium text-slate-300">
                🌍 Open to remote work
              </span>
              <span className="px-4 py-2 glass rounded-lg text-sm font-medium text-slate-300">
                👩‍💻 Open to onside work
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
