"use client";

import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label=" " title="Featured Projects" />

        <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center mt-6 mb-16">
          A selection of projects I've built. Each one presented unique
          challenges and opportunities to learn new technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
