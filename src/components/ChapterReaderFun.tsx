"use client";

import { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  ListFilter,
  Trophy,
  Sparkles,
  ChevronRight,
  X,
  Flame,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw
} from "lucide-react";

interface ChapterReaderFunProps {
  slug: string;
  chapterTitle: string;
}

interface TocItem {
  id: string;
  text: string;
  isDerivation: boolean;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const CHAPTER_QUIZZES: Record<string, QuizQuestion[]> = {
  "motion-in-a-straight-line": [
    {
      question: "What does the area under a Velocity-Time (v-t) graph represent?",
      options: ["Instantaneous Acceleration", "Total Displacement", "Total Distance always", "Rate of change of Jerk"],
      correctIndex: 1,
      explanation: "Since v = dx/dt, displacement is the definite integral Δx = ∫ v(t) dt, which equals the area under the v-t curve."
    },
    {
      question: "For a body thrown vertically upward, what is its acceleration at the highest point?",
      options: ["0 m/s²", "9.8 m/s² downward", "9.8 m/s² upward", "Infinitely large"],
      correctIndex: 1,
      explanation: "Although instantaneous velocity is momentarily zero at the apex, gravity continues to pull downward with constant acceleration g = 9.8 m/s²."
    },
    {
      question: "What does the slope of a Position-Time (x-t) curve indicate?",
      options: ["Instantaneous Velocity", "Constant Acceleration", "Kinetic Energy", "Force acting on body"],
      correctIndex: 0,
      explanation: "The slope dx/dt of a position-time graph is the definition of instantaneous velocity."
    }
  ],
  "motion-in-a-plane": [
    {
      question: "At what projection angle θ is the horizontal range of a projectile maximized on flat ground?",
      options: ["30°", "45°", "60°", "90°"],
      correctIndex: 1,
      explanation: "Horizontal range is R = (u² sin 2θ)/g. The term sin 2θ achieves its maximum value of 1 when 2θ = 90°, so θ = 45°."
    },
    {
      question: "In uniform circular motion at constant speed v and radius r, what is the direction of acceleration?",
      options: ["Along the tangent vector", "Radially inward toward the center", "Radially outward", "Opposite to instantaneous velocity"],
      correctIndex: 1,
      explanation: "Centripetal acceleration a_c = v²/r points strictly toward the center of the circular orbit, perpendicular to tangential velocity."
    },
    {
      question: "At the highest point (apex) of an oblique projectile's trajectory, the velocity is:",
      options: ["Zero", "u cos θ (purely horizontal)", "u sin θ (purely vertical)", "Equal to launch speed u"],
      correctIndex: 1,
      explanation: "Vertical velocity v_y becomes zero at apex, but horizontal velocity v_x = u cos θ remains unchanged since a_x = 0."
    }
  ],
  "laws-of-motion": [
    {
      question: "The maximum static friction (limiting friction f_s(max)) between two contact surfaces is proportional to:",
      options: ["Contact surface area", "Normal reaction force N", "Relative sliding velocity", "Square of gravitational acceleration"],
      correctIndex: 1,
      explanation: "By Coulomb's law of friction, f_s(max) = μ_s N, completely independent of the macroscopic area of contact."
    },
    {
      question: "In an isolated two-body collision with no external forces, which physical quantity is ALWAYS conserved?",
      options: ["Kinetic Energy only", "Total Linear Momentum", "Mechanical Potential Energy", "Relative Speed"],
      correctIndex: 1,
      explanation: "By Newton's Third Law (Action = -Reaction), internal forces cancel out, so total linear momentum Σp is universally conserved in all collisions."
    },
    {
      question: "When a passenger stands on a weighing scale in a lift accelerating upwards with acceleration a, the apparent weight is:",
      options: ["m(g - a)", "m(g + a)", "mg", "Zero"],
      correctIndex: 1,
      explanation: "By applying Newton's second law: N - mg = ma => N = m(g + a), so the apparent weight increases."
    }
  ],
  "work-energy-and-power": [
    {
      question: "The work done by a conservative force field along any arbitrary closed loop is:",
      options: ["Always Positive", "Always Zero (∮ F · dr = 0)", "Equal to total mechanical energy", "Dependent on the path taken"],
      correctIndex: 1,
      explanation: "A force is conservative if and only if the line integral around every closed path vanishes identically: ∮ F · dr = 0."
    },
    {
      question: "At a point of STABLE mechanical equilibrium, what condition must the potential energy U(x) satisfy?",
      options: ["dU/dx = 0 and d²U/dx² > 0 (Local Minimum)", "dU/dx = 0 and d²U/dx² < 0 (Local Maximum)", "U(x) = 0", "d²U/dx² = 0"],
      correctIndex: 0,
      explanation: "At a potential minimum (d²U/dx² > 0), any slight displacement generates a restoring force pointing back toward equilibrium."
    },
    {
      question: "According to the Work-Energy Theorem, net work done by all acting forces on a body equals:",
      options: ["Change in Potential Energy", "Change in Kinetic Energy (ΔK)", "Change in Total Power", "Total Impulse"],
      correctIndex: 1,
      explanation: "W_net = ∫ F_net dx = ΔK = ½mv² - ½mu², valid for both constant and variable forces."
    }
  ],
  "gravitation": [
    {
      question: "What is the value of acceleration due to gravity at the exact center of Earth?",
      options: ["Infinite", "9.8 m/s²", "0 m/s²", "4.9 m/s²"],
      correctIndex: 2,
      explanation: "At Earth's center (r = 0 or depth d = R), g_d = g(1 - d/R) = g(1 - 1) = 0 m/s² due to spherical mass symmetry."
    },
    {
      question: "Where is the reference zero for gravitational potential V(r) standardly defined?",
      options: ["At Earth's center", "At sea level on Earth's equator", "At infinite separation (r → ∞)", "At the geostationary orbit radius"],
      correctIndex: 2,
      explanation: "By universal convention, gravitational potential V(r) = -GM/r approaches 0 as r -> ∞, making potential negative at all finite distances."
    },
    {
      question: "According to Kepler's Third Law (Law of Periods), the square of the orbital period T² is proportional to:",
      options: ["Radius squared (r²)", "Semi-major axis cubed (r³)", "Inverse radius (1/r)", "Mass squared (m²)"],
      correctIndex: 1,
      explanation: "T² = (4π² / GM_s) r³, which proves that T² ∝ r³ for all celestial bodies orbiting a central mass."
    }
  ]
};

export function ChapterReaderFun({ slug, chapterTitle }: ChapterReaderFunProps) {
  // Reading Progress State
  const [readingProgress, setReadingProgress] = useState(0);

  // Self-Test / Practice Mode (Step Blurring)
  const [practiceMode, setPracticeMode] = useState(false);

  // Table of Contents Drawer State
  const [tocOpen, setTocOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  // Toast State
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Quiz State
  const quizQuestions = CHAPTER_QUIZZES[slug] || CHAPTER_QUIZZES["motion-in-a-straight-line"];
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Track scroll for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build Table of Contents and attach copy buttons to Katex blocks
  useEffect(() => {
    // Scan markdown body for headings
    const headings = document.querySelectorAll<HTMLElement>(".markdown-body h2, .markdown-body h3");
    const items: TocItem[] = [];

    headings.forEach((h, index) => {
      const text = h.textContent?.trim() || `Section ${index + 1}`;
      if (!h.id) {
        h.id = `section-${index}-${encodeURIComponent(text.slice(0, 20).toLowerCase().replace(/\s+/g, "-"))}`;
      }
      const isDeriv = text.toLowerCase().includes("derivation");
      items.push({
        id: h.id,
        text,
        isDerivation: isDeriv,
      });
    });

    setTocItems(items);

    // Setup Click-to-Copy on KaTeX blocks
    const katexBlocks = document.querySelectorAll<HTMLElement>(".katex-display");
    katexBlocks.forEach((block) => {
      if (block.querySelector(".copy-formula-btn")) return;

      block.style.position = "relative";
      const btn = document.createElement("button");
      btn.className = "copy-formula-btn";
      btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> <span>LaTeX</span>`;
      btn.title = "Copy Formula LaTeX";
      btn.onclick = (e) => {
        e.stopPropagation();
        const annotation = block.querySelector("annotation[encoding='application/x-tex']");
        const mathText = annotation?.textContent || block.innerText || "";
        navigator.clipboard.writeText(mathText).then(() => {
          btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> <span style="color:#34d399">Copied!</span>`;
          showToast("Formula LaTeX copied to clipboard!");
          setTimeout(() => {
            btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> <span>LaTeX</span>`;
          }, 2000);
        });
      };
      block.appendChild(btn);
    });
  }, [slug]);

  // Handle Practice Mode (Blur derivation steps)
  useEffect(() => {
    const article = document.querySelector(".markdown-body");
    if (!article) return;

    if (practiceMode) {
      article.classList.add("practice-mode-active");
    } else {
      article.classList.remove("practice-mode-active");
    }
  }, [practiceMode]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[qIdx] = optIdx;
    setUserAnswers(newAnswers);
  };

  const handleResetQuiz = () => {
    setUserAnswers([null, null, null]);
    setQuizSubmitted(false);
  };

  const correctScore = userAnswers.reduce<number>((acc, ans, idx) => {
    return ans === quizQuestions[idx].correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <>
      {/* 1. TOP READING PROGRESS BAR (FIXED) */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 transition-all duration-150 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* 2. FLOATING STUDY COMPANION BAR (BOTTOM-RIGHT) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Practice Mode Toggle Button */}
        <button
          onClick={() => {
            const nextState = !practiceMode;
            setPracticeMode(nextState);
            showToast(
              nextState
                ? "🧠 Self-Test Mode Activated! Mathematical steps blurred. Click or hover to reveal!"
                : "Practice Mode turned off."
            );
          }}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs font-semibold backdrop-blur-xl border transition-all shadow-xl ${
            practiceMode
              ? "bg-purple-600/30 text-purple-300 border-purple-500/50 shadow-purple-500/20 ring-2 ring-purple-500/40"
              : "bg-zinc-900/90 text-zinc-300 border-white/10 hover:border-cyan-500/40 hover:text-white"
          }`}
          title="Toggle Self-Test Practice Mode (blurs intermediate mathematical steps)"
        >
          {practiceMode ? <Eye className="w-4 h-4 text-purple-400 animate-pulse" /> : <EyeOff className="w-4 h-4 text-zinc-400" />}
          <span>{practiceMode ? "Practice Mode ON" : "Self-Test Blur"}</span>
        </button>

        {/* Quick Jump Table of Contents Button */}
        <button
          onClick={() => setTocOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 backdrop-blur-xl text-xs font-semibold transition-all shadow-lg hover:shadow-cyan-500/20"
        >
          <ListFilter className="w-4 h-4 text-cyan-400" />
          <span>Jump to Derivation</span>
        </button>
      </div>

      {/* 3. TOAST NOTIFICATION */}
      {toastMsg && (
        <div className="fixed bottom-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 4. TABLE OF CONTENTS SLIDE-OVER DRAWER */}
      {tocOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-md h-full bg-[#0d0d12] border-l border-white/10 p-6 flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <ListFilter className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Quick Navigation</h3>
                  <p className="text-xs text-zinc-400 truncate max-w-[240px]">{chapterTitle}</p>
                </div>
              </div>
              <button
                onClick={() => setTocOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of Headings */}
            <div className="flex-1 overflow-y-auto py-4 space-y-1.5 pr-1 custom-scrollbar">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setTocOpen(false);
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 group ${
                    item.isDerivation
                      ? "bg-zinc-900/60 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-zinc-200 hover:text-cyan-300 font-medium"
                      : "hover:bg-white/5 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span
                    className={`mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.isDerivation ? "bg-cyan-400" : "bg-purple-400"
                    }`}
                  />
                  <span className="flex-1 line-clamp-2 leading-relaxed">{item.text}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 flex-shrink-0 mt-0.5" />
                </button>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-white/10 text-center">
              <p className="text-[11px] text-zinc-500">
                Click any section above to jump smoothly without endless scrolling.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. INTERACTIVE CONCEPT CHECK MINI QUIZ WIDGET (MOUNTED IN CHAPTER NOTES) */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Quiz Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Concept Mastery Challenge
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 font-mono">
                    3 Questions
                  </span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Quickly test your derivation and formula retention before moving to the next chapter.
                </p>
              </div>
            </div>

            {quizSubmitted && (
              <div className="flex items-center gap-3">
                <div
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                    correctScore === 3
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      : correctScore >= 2
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                      : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Score: {correctScore} / 3</span>
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
                  title="Try Again"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Quiz Questions */}
          <div className="space-y-6">
            {quizQuestions.map((q, qIdx) => {
              const selectedOpt = userAnswers[qIdx];
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div
                  key={qIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/5 transition-all"
                >
                  <div className="flex items-start gap-2.5 mb-3.5">
                    <span className="w-6 h-6 rounded-lg bg-white/10 text-white font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <p className="text-sm font-semibold text-zinc-100 leading-snug">{q.question}</p>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      let btnStyle = "bg-zinc-800/40 border-white/5 text-zinc-300 hover:bg-zinc-800/80 hover:border-white/15";

                      if (quizSubmitted) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-semibold ring-1 ring-emerald-500/40";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-rose-500/20 border-rose-500/50 text-rose-200 ring-1 ring-rose-500/40";
                        } else {
                          btnStyle = "bg-zinc-900/40 border-white/5 text-zinc-500 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-cyan-500/20 border-cyan-500/60 text-cyan-200 font-medium ring-1 ring-cyan-500/40";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          )}
                          {quizSubmitted && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {quizSubmitted && (
                    <div className="mt-3.5 pt-3 border-t border-white/5 flex items-start gap-2 text-xs text-zinc-400 bg-white/[0.02] p-2.5 rounded-lg">
                      <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        <strong className="text-zinc-200">Explanation: </strong>
                        {q.explanation}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Action Submit */}
          {!quizSubmitted && (
            <div className="mt-6 flex justify-end">
              <button
                disabled={userAnswers.includes(null)}
                onClick={() => setQuizSubmitted(true)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  userAnswers.includes(null)
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 active:scale-95"
                }`}
              >
                <span>Check Answers</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
