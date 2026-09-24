"use client";

import { useState } from "react";
import { Printer, Share2, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ChapterActionsProps {
  title: string;
}

export function ChapterActions({ title }: ChapterActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/80 hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">All Chapters</span>
      </Link>

      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/80 hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
        title="Copy Link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">Copied</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Share</span>
          </>
        )}
      </button>

      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/80 hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
        title="Print or Save as PDF"
      >
        <Printer className="w-3.5 h-3.5 text-zinc-400" />
        <span className="hidden sm:inline">Print / PDF</span>
      </button>
    </div>
  );
}
