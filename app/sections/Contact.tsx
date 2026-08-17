"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin,  MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/yara769" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yara-al-saleh-939a703b9?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <SectionHeading label="Get In Touch" title="Let's Connect" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-400 text-lg mt-6 mb-12 max-w-xl mx-auto"
        >
          Have a project in mind ? I'm always open to
          discussing new opportunities and creative ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <a
            href="mailto:yarasalsaleh@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 glass rounded-full hover:bg-white/10 transition-all"
          >
            <Mail size={20} className="text-[var(--color-primary)]" />
            <span className="font-medium">yarasalsaleh@gmail.com</span>
          </a>

          <div className="flex items-center gap-2 text-slate-500">
            <MapPin size={18} />
            <span>Remote / Worldwide</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 transition-all group"
            >
              <social.icon
                size={22}
                className="text-slate-400 group-hover:text-[var(--color-primary)] transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
