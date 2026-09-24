import Link from "next/link";
import { Atom, BookOpen, Sparkles, Compass } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/70 border-b border-white/[0.08] transition-all">
      <div className="w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto px-2 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex items-center space-x-3 transition-transform active:scale-95"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] group-hover:border-cyan-400/60 transition-colors">
            <Atom className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
              PHYSICS <span className="text-xs px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono border border-cyan-500/20">XI</span>
            </span>
            <span className="text-[11px] text-zinc-400 tracking-wide">Derivations & Formulas</span>
          </div>
        </Link>

        <nav className="flex items-center space-x-1 sm:space-x-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <BookOpen className="w-4 h-4 text-zinc-400" />
            <span>Chapters</span>
          </Link>

          <a
            href="#explore"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <Compass className="w-4 h-4 text-zinc-400" />
            <span>Curriculum</span>
          </a>

          <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />

          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-white/5">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>CBSE & JEE / NEET</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
