import Link from "next/link";
import { Atom, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-zinc-950/80 backdrop-blur-md">
      <div className="w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto px-2 sm:px-4 lg:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400">
              <Atom className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Class 11 Physics Notes</p>
              <p className="text-xs text-zinc-500">Derivations, Formulas & Core Conceptual Summaries</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <span>Preserving mathematical precision</span>
            <span>•</span>
            <span>Static & Blazing Fast</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Physics Students
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
