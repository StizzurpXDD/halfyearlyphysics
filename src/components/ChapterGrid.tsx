"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChapterMeta } from "@/lib/types";
import { ChapterCard } from "@/components/ChapterCard";
import { Search, SlidersHorizontal, BookOpen, Layers } from "lucide-react";

interface ChapterGridProps {
  initialChapters: ChapterMeta[];
}

export function ChapterGrid({ initialChapters }: ChapterGridProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedUnit, setSelectedUnit] = useState<string>("All");

  // Warm up Next.js client router cache for all chapters on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      initialChapters.forEach((chapter) => {
        try {
          router.prefetch(`/chapters/${chapter.slug}/`);
        } catch {
          // ignore
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [initialChapters, router]);

  const units = useMemo(() => {
    const list = new Set<string>();
    initialChapters.forEach((c) => {
      if (c.unit) list.add(c.unit);
    });
    return ["All", ...Array.from(list)];
  }, [initialChapters]);

  const filteredChapters = useMemo(() => {
    return initialChapters.filter((chapter) => {
      const matchesSearch =
        chapter.title.toLowerCase().includes(query.toLowerCase()) ||
        chapter.description.toLowerCase().includes(query.toLowerCase()) ||
        chapter.topics?.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        String(chapter.chapterNumber).includes(query);

      const matchesUnit = selectedUnit === "All" || chapter.unit === selectedUnit;

      return matchesSearch && matchesUnit;
    });
  }, [initialChapters, query, selectedUnit]);

  return (
    <div className="w-full">
      {/* Search & Filter Controls */}
      <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/[0.08]">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, derivations, or concepts (e.g. projectile, work, vectors)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.06] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white px-1.5 py-0.5 rounded bg-zinc-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Unit Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {units.map((unit) => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedUnit === unit
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-transparent"
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Grid */}
      {filteredChapters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredChapters.map((chapter) => (
            <ChapterCard key={chapter.slug} chapter={chapter} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl border border-dashed border-white/10 bg-zinc-950/40 p-8">
          <BookOpen className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white">No chapters found</h4>
          <p className="text-sm text-zinc-400 mt-1 max-w-md mx-auto">
            {query
              ? `No chapters matched "${query}". Try searching for another topic or term.`
              : "Chapters are currently being added. Check back shortly!"}
          </p>
        </div>
      )}
    </div>
  );
}
