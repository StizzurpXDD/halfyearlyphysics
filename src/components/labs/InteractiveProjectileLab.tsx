"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Sliders, Sparkles, Activity, Play, RotateCcw } from "lucide-react";
import { addGridAndAxes, setupHoverTracker } from "../d3-helpers";

export function InteractiveProjectileLab() {
  const [velocity, setVelocity] = useState<number>(30);
  const [angle, setAngle] = useState<number>(45);
  const [showComplementary, setShowComplementary] = useState<boolean>(true);
  const labSvgRef = useRef<SVGSVGElement>(null);

  const gConst = 9.8;
  const rad = (angle * Math.PI) / 180;
  const ux = velocity * Math.cos(rad);
  const uy = velocity * Math.sin(rad);
  const timeOfFlight = (2 * uy) / gConst;
  const maxHeight = (uy * uy) / (2 * gConst);
  const range = (velocity * velocity * Math.sin(2 * rad)) / gConst;

  // Complementary angle (90 - theta)
  const compAngle = 90 - angle;
  const compRad = (compAngle * Math.PI) / 180;
  const compUy = velocity * Math.sin(compRad);
  const compMaxHeight = (compUy * compUy) / (2 * gConst);
  const compTimeOfFlight = (2 * compUy) / gConst;

  useEffect(() => {
    if (!labSvgRef.current) return;
    const svgEl = labSvgRef.current;
    d3.select(svgEl).selectAll("*").remove();

    const width = 640;
    const height = 300;
    const margin = { top: 25, right: 35, bottom: 45, left: 55 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgEl)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "auto");

    // Defs for gradients & filters
    const defs = svg.append("defs");

    // Primary Area Gradient
    const areaGrad = defs
      .append("linearGradient")
      .attr("id", "proj-area-grad")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "0")
      .attr("y2", "1");
    areaGrad.append("stop").attr("offset", "0%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.35);
    areaGrad.append("stop").attr("offset", "100%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.02);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    // Scale setup
    const maxX = Math.max(100, Math.ceil(range * 1.15));
    const maxY = Math.max(35, Math.ceil(Math.max(maxHeight, compMaxHeight) * 1.25));

    const xScale = d3.scaleLinear().domain([0, maxX]).range([0, w]);
    const yScale = d3.scaleLinear().domain([0, maxY]).range([h, 0]);

    addGridAndAxes(g, xScale, yScale, w, h, "Horizontal Distance x (meters)", "Vertical Height y (meters)");

    // 1. Shaded area for primary trajectory
    const numPoints = 80;
    const trajData: { x: number; y: number; t: number }[] = [];
    for (let i = 0; i <= numPoints; i++) {
      const curX = (range / numPoints) * i;
      const t = curX / ux;
      const curY = Math.max(0, uy * t - 0.5 * gConst * t * t);
      trajData.push({ x: curX, y: curY, t });
    }

    const areaGen = d3
      .area<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y0(yScale(0))
      .y1((d) => yScale(d.y));

    g.append("path")
      .datum(trajData)
      .attr("fill", "url(#proj-area-grad)")
      .attr("d", areaGen);

    // 2. Primary trajectory line (Cyan)
    const lineGen = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    g.append("path")
      .datum(trajData)
      .attr("fill", "none")
      .attr("stroke", "#38bdf8")
      .attr("stroke-width", 3.5)
      .attr("stroke-linecap", "round")
      .attr("d", lineGen);

    // Apex Marker (H_max)
    const apexX = range / 2;
    g.append("line")
      .attr("x1", xScale(apexX))
      .attr("y1", yScale(maxHeight))
      .attr("x2", xScale(apexX))
      .attr("y2", yScale(0))
      .attr("stroke", "#38bdf8")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "3 3");

    g.append("circle")
      .attr("cx", xScale(apexX))
      .attr("cy", yScale(maxHeight))
      .attr("r", 5)
      .attr("fill", "#38bdf8");

    g.append("text")
      .attr("x", xScale(apexX))
      .attr("y", yScale(maxHeight) - 8)
      .attr("fill", "#38bdf8")
      .attr("font-size", "10px")
      .attr("font-weight", "600")
      .attr("text-anchor", "middle")
      .text(`Apex: ${maxHeight.toFixed(1)}m`);

    // 3. Optional Complementary Trajectory Line (Purple: 90 - theta)
    if (showComplementary && angle !== 45) {
      const compUx = velocity * Math.cos(compRad);
      const compTrajData: { x: number; y: number }[] = [];
      for (let i = 0; i <= numPoints; i++) {
        const curX = (range / numPoints) * i;
        const t = curX / compUx;
        const curY = Math.max(0, compUy * t - 0.5 * gConst * t * t);
        compTrajData.push({ x: curX, y: curY });
      }

      g.append("path")
        .datum(compTrajData)
        .attr("fill", "none")
        .attr("stroke", "#c084fc")
        .attr("stroke-width", 2.5)
        .attr("stroke-dasharray", "5 4")
        .attr("d", lineGen);

      // Complementary Apex
      g.append("circle")
        .attr("cx", xScale(apexX))
        .attr("cy", yScale(compMaxHeight))
        .attr("r", 4.5)
        .attr("fill", "#c084fc");

      g.append("text")
        .attr("x", xScale(apexX))
        .attr("y", yScale(compMaxHeight) - 8)
        .attr("fill", "#c084fc")
        .attr("font-size", "10px")
        .attr("font-weight", "600")
        .attr("text-anchor", "middle")
        .text(`(90°-θ) Apex: ${compMaxHeight.toFixed(1)}m`);
    }

    // Landing marker (Range R)
    g.append("circle")
      .attr("cx", xScale(range))
      .attr("cy", yScale(0))
      .attr("r", 6)
      .attr("fill", "#34d399");

    g.append("text")
      .attr("x", xScale(range))
      .attr("y", yScale(0) - 10)
      .attr("fill", "#34d399")
      .attr("font-size", "11px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text(`R = ${range.toFixed(1)}m`);

    // Hover crosshair tracking
    setupHoverTracker(g, w, h, xScale, yScale, (xVal) => {
      const curX = Math.max(0, Math.min(range, xVal));
      const t = curX / ux;
      const curY = Math.max(0, uy * t - 0.5 * gConst * t * t);
      const vy = uy - gConst * t;
      const instVel = Math.sqrt(ux * ux + vy * vy);
      return {
        xVal: curX,
        yVal: curY,
        label: `x=${curX.toFixed(1)}m, y=${curY.toFixed(1)}m, t=${t.toFixed(2)}s, v=${instVel.toFixed(1)}m/s`,
      };
    });
  }, [velocity, angle, showComplementary, range, maxHeight, compMaxHeight, compRad, compUy, rad, ux, uy]);

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive D3 Simulation Laboratory</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Oblique Projectile Trajectory Simulator
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowComplementary(!showComplementary)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              showComplementary
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                : "bg-white/[0.05] text-zinc-400 border border-white/[0.08] hover:text-white"
            }`}
          >
            {showComplementary ? "Hide Complementary (90°-θ)" : "Show Complementary (90°-θ)"}
          </button>
          <button
            onClick={() => {
              setVelocity(30);
              setAngle(45);
              setShowComplementary(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
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
            <span>Launch Speed (u)</span>
            <span className="text-cyan-400 font-bold">{velocity} m/s</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            step="1"
            value={velocity}
            onChange={(e) => setVelocity(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Projection Angle (θ)</span>
            <span className="text-purple-400 font-bold">{angle}°</span>
          </div>
          <input
            type="range"
            min="15"
            max="75"
            step="1"
            value={angle}
            onChange={(e) => setAngle(parseFloat(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* SVG Canvas for D3 */}
      <div className="relative rounded-2xl bg-[#09090b] border border-white/[0.08] p-3 overflow-hidden">
        <svg ref={labSvgRef} className="w-full h-auto" />
      </div>

      {/* Live Calculated Physics Metrics */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Max Height (H_max)</div>
          <div className="text-lg font-bold text-cyan-400 mt-0.5">{maxHeight.toFixed(1)} m</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Horizontal Range (R)</div>
          <div className="text-lg font-bold text-emerald-400 mt-0.5">{range.toFixed(1)} m</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Flight Time (T)</div>
          <div className="text-lg font-bold text-purple-400 mt-0.5">{timeOfFlight.toFixed(2)} s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Velocity Components</div>
          <div className="text-xs font-bold text-amber-400 mt-1">
            u_x={ux.toFixed(1)} | u_y={uy.toFixed(1)}
          </div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 text-center mt-3">
        Hover anywhere on the trajectory curve to track instantaneous coordinates, elapsed time, and tangent velocity.
      </p>
    </div>
  );
}
