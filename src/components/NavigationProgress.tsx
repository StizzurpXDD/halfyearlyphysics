"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";

/**
 * Top animated glowing progress bar that fires on any page transition.
 * Provides immediate feedback that the application is navigating.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname changes, finish the progress bar
  useEffect(() => {
    setNavigating(false);
    setProgress(100);
    const timer = setTimeout(() => setProgress(0), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Intercept click on any internal <a> / <Link> element to show the bar immediately
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      // Only handle internal transitions that change the pathname
      if (href.startsWith("/") && href !== pathname && !href.startsWith("#") && !target.hasAttribute("download") && target.getAttribute("target") !== "_blank") {
        setNavigating(true);
        setProgress(25);

        const t1 = setTimeout(() => setProgress(65), 100);
        const t2 = setTimeout(() => setProgress(85), 300);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => document.removeEventListener("click", handleDocumentClick, { capture: true });
  }, [pathname]);

  if (!navigating && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 pointer-events-none overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transitionProperty: "width, opacity",
        }}
      />
    </div>
  );
}
