import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllChapters, getChapterBySlug, getAdjacentChapters } from "@/lib/chapters";
import { ChapterActions } from "@/components/ChapterActions";
import { 
  BookOpen, 
  Layers, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  BookmarkCheck
} from "lucide-react";
import { D3GraphHandler } from "@/components/D3GraphHandler";
import { ChapterReaderFun } from "@/components/ChapterReaderFun";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = await getChapterBySlug(slug);

  if (!chapter) {
    return {
      title: "Chapter Not Found | Physics XI",
    };
  }

  return {
    title: `${chapter.title} | Class 11 Physics Notes`,
    description: chapter.description,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = await getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const { prev, next } = getAdjacentChapters(slug);
  const formattedNumber = String(chapter.chapterNumber).padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200">
      {/* Top Floating Context Header */}
      <div className="sticky top-16 z-40 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-white/[0.08] px-4 py-3">
        <div className="w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/[0.06] text-cyan-400 border border-white/[0.08]">
              CH {formattedNumber}
            </span>
            <span className="text-xs sm:text-sm font-medium text-white truncate">
              {chapter.title}
            </span>
          </div>

          <ChapterActions title={chapter.title} />
        </div>
      </div>

      <div className="w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto px-2 sm:px-4 lg:px-6 py-8 sm:py-12">
        {/* Chapter Header / Banner */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-white/[0.08] p-6 sm:p-10 mb-12 overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                CHAPTER {formattedNumber}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                {chapter.unit}
              </span>
              {chapter.difficulty && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                  {chapter.difficulty}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              {chapter.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-5xl leading-relaxed">
              {chapter.description}
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs sm:text-sm text-zinc-400 font-mono">
              {(chapter.formulasCount ?? 0) > 0 && (
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>{chapter.formulasCount} Formulas</span>
                </div>
              )}
              {(chapter.derivationsCount ?? 0) > 0 && (
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>{chapter.derivationsCount} Derivations</span>
                </div>
              )}
              {chapter.estimatedReadTime && (
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>{chapter.estimatedReadTime} read</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Rendered Markdown Content */}
        <article className="markdown-body p-6 sm:p-10 lg:p-12 xl:p-14 rounded-3xl bg-zinc-900/30 border border-white/[0.08] backdrop-blur-sm">
          <div dangerouslySetInnerHTML={{ __html: chapter.contentHtml }} />
          <D3GraphHandler slug={slug} />
          <ChapterReaderFun slug={slug} chapterTitle={chapter.title} />
        </article>

        {/* Adjacent Chapters Navigation */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/chapters/${prev.slug}/`}
              className="group p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col items-start"
            >
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2 group-hover:text-cyan-400">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Previous Chapter</span>
              </div>
              <span className="text-base font-semibold text-white group-hover:text-cyan-300">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/chapters/${next.slug}/`}
              className="group p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col items-end text-right"
            >
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2 group-hover:text-cyan-400">
                <span>Next Chapter</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="text-base font-semibold text-white group-hover:text-cyan-300">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
