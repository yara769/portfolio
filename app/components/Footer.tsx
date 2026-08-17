export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Yara. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
