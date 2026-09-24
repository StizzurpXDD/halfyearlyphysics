export default function ChapterLoading() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 animate-in fade-in duration-150">
      {/* Top Floating Context Header Skeleton */}
      <div className="sticky top-16 z-40 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-white/[0.08] px-4 py-3">
        <div className="w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-14 rounded bg-white/[0.08] animate-pulse" />
            <div className="h-5 w-44 rounded bg-white/[0.08] animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-24 rounded-lg bg-white/[0.06] animate-pulse" />
            <div className="h-8 w-24 rounded-lg bg-white/[0.06] animate-pulse" />
          </div>
        </div>
      </div>

      <div className="w-[96%] max-w-[1920px] 2xl:max-w-[2160px] mx-auto px-2 sm:px-4 lg:px-6 py-8 sm:py-12">
        {/* Chapter Header Skeleton */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-white/[0.08] p-6 sm:p-10 mb-12 overflow-hidden">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-6 w-28 rounded-full bg-cyan-500/20 border border-cyan-500/30 animate-pulse" />
            <div className="h-6 w-24 rounded-full bg-white/[0.06] animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-zinc-800 animate-pulse" />
          </div>

          <div className="h-10 sm:h-14 w-2/3 max-w-xl rounded-xl bg-white/[0.1] mb-4 animate-pulse" />
          <div className="h-5 w-full max-w-3xl rounded bg-white/[0.05] mb-2 animate-pulse" />
          <div className="h-5 w-4/5 max-w-2xl rounded bg-white/[0.05] mb-6 animate-pulse" />

          {/* Quick Metrics Skeleton */}
          <div className="pt-6 border-t border-white/[0.06] flex items-center gap-6">
            <div className="h-6 w-28 rounded bg-white/[0.06] animate-pulse" />
            <div className="h-6 w-32 rounded bg-white/[0.06] animate-pulse" />
            <div className="h-6 w-24 rounded bg-white/[0.06] animate-pulse" />
          </div>
        </div>

        {/* Content Skeleton Card */}
        <div className="p-6 sm:p-10 lg:p-12 xl:p-14 rounded-3xl bg-zinc-900/30 border border-white/[0.08] backdrop-blur-sm space-y-8">
          {/* Section 1 */}
          <div className="space-y-4">
            <div className="h-8 w-64 rounded-lg bg-white/[0.08] animate-pulse" />
            <div className="h-4 w-full rounded bg-white/[0.04] animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-white/[0.04] animate-pulse" />
          </div>

          {/* Derivation Step Mock */}
          <div className="p-6 rounded-2xl bg-zinc-950/50 border border-white/[0.05] space-y-4">
            <div className="h-6 w-80 rounded bg-cyan-500/10 border border-cyan-500/20 animate-pulse" />
            <div className="h-12 w-full rounded-xl bg-white/[0.03] animate-pulse" />
            <div className="h-12 w-3/4 rounded-xl bg-white/[0.03] animate-pulse" />
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-4">
            <div className="h-8 w-72 rounded-lg bg-white/[0.08] animate-pulse" />
            <div className="h-32 w-full rounded-2xl bg-zinc-950/60 border border-white/[0.04] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
