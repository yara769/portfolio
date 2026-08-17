"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X, Play } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:glow"
    >
      {/* 🎬 الصورة أو الفيديو */}
      <div className="h-48 relative overflow-hidden bg-black">
        {showVideo && project.video ? (
          <>
            <video
              controls
              autoPlay
              muted /* ← مهم جداً! بدونها Autoplay ما بيشتغل */
              playsInline /* ← مهم للموبايل */
              className="w-full h-full object-cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
            {/* زر إغلاق */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 p-1.5 bg-black/80 text-white rounded-full hover:bg-black z-20"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${project.gradient} relative`}
          >
            {/* 🖼️ الصورة */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null}

            <div className="absolute inset-0 bg-black/20" />

            {/* ▶️ زر Play — بيظهر بس إذا فيه فيديو */}
            {project.video ? (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm"
              >
                <div className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                  <Play size={28} className="text-white fill-white" />
                </div>
              </button>
            ) : null}

            {/* روابط GitHub + Demo */}
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
        </a>
            </div>
          </div>
        )}
      </div>

      {/* الباقي نفسه */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
