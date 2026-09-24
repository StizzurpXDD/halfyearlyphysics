"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChapterMeta } from "@/lib/types";
import { ArrowRight, BookOpen, Layers, Sparkles, Loader2 } from "lucide-react";

interface ChapterCardProps {
  chapter: ChapterMeta;
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const formattedNumber = String(chapter.chapterNumber).padStart(2, "0");
  const href = `/chapters/${chapter.slug}/`;

  const handlePreload = () => {
    try {
      router.prefetch(href);
    } catch {
      // safe fallback
    }
  };

  const handleClick = () => {
    setIsNavigating(true);
  };

  return (
    <Link
      href={href}
      prefetch={true}
      onMouseEnter={handlePreload}
      onTouchStart={handlePreload}
      onFocus={handlePreload}
      onClick={handleClick}
      className={`group relative rounded-2xl bg-zinc-900/50 backdrop-blur-xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer block text-left ${
        isNavigating
          ? "border-cyan-400 ring-2 ring-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.35)] scale-[0.99] opacity-90"
          : "border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_30px_-10px_rgba(6,182,212,0.25)] hover:-translate-y-1"
      }`}
    >
      {/* Subtle background ambient gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none group-hover:from-cyan-500/[0.04] transition-colors" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold tracking-wider bg-white/[0.05] text-cyan-400 border border-white/[0.08] group-hover:border-cyan-500/30 transition-colors">
              CH {formattedNumber}
            </span>
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              {chapter.unit}
            </span>
          </div>

          {chapter.difficulty && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-white/[0.06]">
              {chapter.difficulty}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
          {chapter.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {chapter.description}
        </p>

        {/* Topics Pills */}
        {chapter.topics && chapter.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {chapter.topics.slice(0, 4).map((topic, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-300 border border-white/[0.04]"
              >
                {topic}
              </span>
            ))}
            {chapter.topics.length > 4 && (
              <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md text-zinc-500">
                +{chapter.topics.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Formula Previews if any */}
        {chapter.keyFormulasPreview && chapter.keyFormulasPreview.length > 0 && (
          <div className="mt-4 p-2.5 rounded-lg bg-black/40 border border-white/[0.04] font-mono text-xs text-zinc-300 flex items-center gap-2 overflow-x-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate text-zinc-400">
              Key: <span className="text-cyan-300">{chapter.keyFormulasPreview[0]}</span>
            </span>
          </div>
        )}
      </div>

      {/* Footer / Stats & Button */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
          {(chapter.derivationsCount ?? 0) > 0 && (
            <span className="flex items-center gap-1" title="Derivations Count">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>{chapter.derivationsCount} Derivations</span>
            </span>
          )}
          {(chapter.formulasCount ?? 0) > 0 && (
            <span className="flex items-center gap-1" title="Formulas Count">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>{chapter.formulasCount} Formulas</span>
            </span>
          )}
        </div>

        {/* Apple-style "View Full Notes" visual indicator with instant loading feedback */}
        <span
          className={`relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 overflow-hidden flex-shrink-0 ${
            isNavigating
              ? "bg-cyan-500 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.6)]"
              : "text-white bg-white/[0.08] group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:border-cyan-500/40 border border-white/[0.12] group-active:scale-95"
          }`}
        >
          {isNavigating ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-950" />
              <span>Opening Notes...</span>
            </>
          ) : (
            <>
              <span>View Full Notes</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </span>
      </div>
    </Link>
  );
}
