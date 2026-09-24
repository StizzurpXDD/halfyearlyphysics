"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Activity, RotateCcw } from "lucide-react";
import { addGridAndAxes, setupHoverTracker } from "../d3-helpers";

export function InteractiveKinematicsLab() {
  const [initialV, setInitialV] = useState<number>(4.0);
  const [accel, setAccel] = useState<number>(2.0);
  const labSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!labSvgRef.current) return;
    const svgEl = labSvgRef.current;
    d3.select(svgEl).selectAll("*").remove();

    const width = 640;
    const height = 280;
    const margin = { top: 25, right: 30, bottom: 45, left: 55 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgEl)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "auto");

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const maxT = 6.0;
    const xScale = d3.scaleLinear().domain([0, maxT]).range([0, w]);
    const maxV = Math.max(25, initialV + accel * maxT + 5);
    const yScale = d3.scaleLinear().domain([Math.min(0, initialV + accel * maxT - 2), maxV]).range([h, 0]);

    addGridAndAxes(g, xScale, yScale, w, h, "Time t (seconds)", "Velocity v (m/s)");

    // Shaded area under the line
    const areaData = d3.range(0, maxT + 0.1, 0.2).map((t) => ({
      t,
      v: initialV + accel * t,
    }));

    const areaGen = d3
      .area<{ t: number; v: number }>()
      .x((d) => xScale(d.t))
      .y0(yScale(0))
      .y1((d) => yScale(Math.max(0, d.v)));

    g.append("path")
      .datum(areaData)
      .attr("fill", "rgba(56, 189, 248, 0.12)")
      .attr("d", areaGen);

    // Dynamic v(t) Line
    const lineGen = d3
      .line<{ t: number; v: number }>()
      .x((d) => xScale(d.t))
      .y((d) => yScale(d.v));

    g.append("path")
      .datum(areaData)
      .attr("fill", "none")
      .attr("stroke", "#38bdf8")
      .attr("stroke-width", 3.5)
      .attr("stroke-linecap", "round")
      .attr("d", lineGen);

    setupHoverTracker(g, w, h, xScale, yScale, (t) => {
      const v = initialV + accel * t;
      const disp = initialV * t + 0.5 * accel * t * t;
      return {
        xVal: t,
        yVal: v,
        label: `t = ${t.toFixed(1)}s: v = ${v.toFixed(1)}m/s | Displ. Δx = ${disp.toFixed(1)}m`,
      };
    });
  }, [initialV, accel]);

  const totalDisp = (initialV * 6 + 0.5 * accel * 36).toFixed(1);
  const finalVel = (initialV + accel * 6).toFixed(1);

  return (
    <div className="my-14 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_-15px_rgba(6,182,212,0.15)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive D3.js Kinematics Simulation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight !mt-0 !mb-0 !pt-0 !border-0">
            Real-Time Motion Graph Laboratory
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setInitialV(4.0);
              setAccel(2.0);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.08] transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 p-4 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Initial Velocity (u)</span>
            <span className="text-cyan-400 font-bold">{initialV.toFixed(1)} m/s</span>
          </div>
          <input
            type="range"
            min="0"
            max="15"
            step="0.5"
            value={initialV}
            onChange={(e) => setInitialV(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Acceleration (a)</span>
            <span className="text-purple-400 font-bold">{accel.toFixed(1)} m/s²</span>
          </div>
          <input
            type="range"
            min="-5"
            max="6"
            step="0.5"
            value={accel}
            onChange={(e) => setAccel(parseFloat(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* SVG Canvas for D3 */}
      <div className="relative rounded-2xl bg-[#09090b] border border-white/[0.08] p-3 overflow-hidden">
        <svg ref={labSvgRef} className="w-full h-auto" />
      </div>

      {/* Live Calculated Equations readout */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center font-mono">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">At t = 6.0s: Velocity</div>
          <div className="text-lg font-bold text-cyan-400 mt-0.5">v = {finalVel} m/s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Displacement (Area)</div>
          <div className="text-lg font-bold text-purple-400 mt-0.5">Δx = {totalDisp} m</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
          <div className="text-[11px] text-zinc-500 uppercase">Slope of v-t</div>
          <div className="text-lg font-bold text-emerald-400 mt-0.5">a = {accel.toFixed(1)} m/s²</div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 text-center mt-3">
        Hover anywhere on the curve above to view instantaneous velocity, coordinates, and accumulated displacement area.
      </p>
    </div>
  );
}
