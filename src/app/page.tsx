import Link from "next/link";
import { getAllChapters } from "@/lib/chapters";
import { ChapterGrid } from "@/components/ChapterGrid";
import { 
  Atom, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ArrowDown, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Compass, 
  Printer 
} from "lucide-react";

export default function Home() {
  const chapters = getAllChapters();

  const totalFormulas = chapters.reduce((acc, c) => acc + (c.formulasCount || 0), 0);
  const totalDerivations = chapters.reduce((acc, c) => acc + (c.derivationsCount || 0), 0);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white">
      {/* Background Ambient Lighting (Apple Glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-purple-500/05 to-transparent blur-[120px]" />
        <div className="absolute top-[300px] right-[-100px] w-[500px] h-[500px] bg-blue-600/05 blur-[100px]" />
      </div>

      {/* Streamlined Hero Section */}
      <section className="relative pt-8 pb-4 sm:pt-12 sm:pb-6 px-4 sm:px-6 lg:px-8 w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto text-center">
        {/* Release / Intro Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-medium text-zinc-300">
            Class 11 Physics • Complete Derivations & Verified Formulas
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Elegance in Every Proof.{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Precision in Every Formula.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Step-by-step calculus proofs, clean LaTeX notation, and comprehensive revision sheets for CBSE, JEE & NEET.
        </p>

        {/* Compact Metrics Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400">
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <strong className="text-white">{chapters.length}</strong> Chapters Active
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <strong className="text-cyan-400">{totalDerivations > 0 ? `${totalDerivations}+` : "50+"}</strong> Derivations
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <strong className="text-purple-400">{totalFormulas > 0 ? `${totalFormulas}+` : "200+"}</strong> Formulas
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] hidden sm:inline-flex">
            <strong className="text-emerald-400">100%</strong> Static & Fast
          </span>
        </div>
      </section>

      {/* Chapters / Flashcards Section - Positioned Prominently Above the Fold */}
      <section id="explore" className="pt-4 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto scroll-mt-6">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/[0.06] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest mb-1">
              <Atom className="w-3.5 h-3.5" />
              <span>Chapter Flashcards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Select a Chapter
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400">
            Click <span className="text-white font-medium">"View Full Notes"</span> for step-by-step proofs & formula tables.
          </p>
        </div>

        {/* Dynamic Client-Searchable Grid */}
        <ChapterGrid initialChapters={chapters} />
      </section>

      {/* Feature Showcase (Apple Grid) */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto border-t border-white/[0.08]">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineered for Academic Mastery
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg mx-auto">
            Every formula and derivation has been styled to provide instantaneous clarity during high-stakes revisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              KaTeX LaTeX Precision
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Vector notations, line integrals, fractions, matrices, and greek symbols render with mathematical clarity without breaking midway.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Step-by-Step Derivations
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Generous breathing room and vertical space gaps around mathematical steps, limits, and final boxed conclusions.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <Printer className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Print & PDF Ready
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              One-click printer and PDF stylesheet for high-yield offline revisions and quick desk reference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
