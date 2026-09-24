"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Sliders, Sparkles, Activity, RotateCcw } from "lucide-react";
import { addGridAndAxes, setupHoverTracker } from "../d3-helpers";

export function InteractiveOrbitalGravityLab() {
  const [massM, setMassM] = useState<number>(1.0);
  const [orbitR, setOrbitR] = useState<number>(2.5);
  const labSvgRef = useRef<SVGSVGElement>(null);

  const g0 = 9.8 * massM;
  const currentG = orbitR <= 1.0 ? g0 * orbitR : g0 / (orbitR * orbitR);
  // Earth surface orbital velocity ~ 7.91 km/s
  const orbVelocity = 7.91 * Math.sqrt(massM / orbitR);
  const escVelocity = orbVelocity * Math.SQRT2;
  // Earth LEO period ~ 1.41 hours
  const periodHours = 1.41 * Math.sqrt((orbitR * orbitR * orbitR) / massM);

  useEffect(() => {
    if (!labSvgRef.current) return;
    const svgEl = labSvgRef.current;
    d3.select(svgEl).selectAll("*").remove();

    const width = 640;
    const height = 280;
    const margin = { top: 25, right: 35, bottom: 45, left: 55 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgEl)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "auto");

    const defs = svg.append("defs");

    // Earth interior gradient
    const intGrad = defs
      .append("linearGradient")
      .attr("id", "earth-int-grad")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "1")
      .attr("y2", "0");
    intGrad.append("stop").attr("offset", "0%").attr("stop-color", "#34d399").attr("stop-opacity", 0.05);
    intGrad.append("stop").attr("offset", "100%").attr("stop-color", "#34d399").attr("stop-opacity", 0.3);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const maxR = 7.5;
    const maxY = Math.max(45, Math.ceil(g0 * 1.25));

    const xScale = d3.scaleLinear().domain([0, maxR]).range([0, w]);
    const yScale = d3.scaleLinear().domain([0, maxY]).range([h, 0]);

    addGridAndAxes(g, xScale, yScale, w, h, "Radial Distance r (Planet Radii R)", "Gravitational Acceleration g (m/s²)");

    // 1. Interior Region Polygon (r <= 1.0)
    g.append("polygon")
      .attr(
        "points",
        `
        ${xScale(0)},${yScale(0)}
        ${xScale(1.0)},${yScale(g0)}
        ${xScale(1.0)},${yScale(0)}
      `
      )
      .attr("fill", "url(#earth-int-grad)");

    // 2. Linear Gravity Line Inside Earth (r <= 1.0)
    g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(1.0))
      .attr("y2", yScale(g0))
      .attr("stroke", "#34d399")
      .attr("stroke-width", 3.5);

    g.append("text")
      .attr("x", xScale(0.5))
      .attr("y", yScale(g0 / 2) - 10)
      .attr("fill", "#34d399")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text("g ∝ r (Inside)");

    // 3. Hyperbolic Inverse-Square Decay Outside (r >= 1.0)
    const outData = d3.range(1.0, maxR + 0.1, 0.05).map((r) => ({
      r,
      gVal: g0 / (r * r),
    }));

    const outLine = d3
      .line<{ r: number; gVal: number }>()
      .x((d) => xScale(d.r))
      .y((d) => yScale(d.gVal))
      .curve(d3.curveMonotoneX);

    g.append("path")
      .datum(outData)
      .attr("fill", "none")
      .attr("stroke", "#38bdf8")
      .attr("stroke-width", 3.5)
      .attr("d", outLine);

    g.append("text")
      .attr("x", xScale(3.5))
      .attr("y", yScale(g0 / (3.5 * 3.5)) - 12)
      .attr("fill", "#38bdf8")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text("g ∝ 1/r² (Outside)");

    // Surface Peak at r = R (1.0)
    g.append("line")
      .attr("x1", xScale(1.0))
      .attr("y1", yScale(g0))
      .attr("x2", xScale(1.0))
      .attr("y2", yScale(0))
      .attr("stroke", "#fbbf24")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "3 3");

    g.append("circle")
      .attr("cx", xScale(1.0))
      .attr("cy", yScale(g0))
      .attr("r", 5)
      .attr("fill", "#fbbf24");

    g.append("text")
      .attr("x", xScale(1.0))
      .attr("y", yScale(g0) - 8)
      .attr("fill", "#fbbf24")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text(`Surface g₀ = ${g0.toFixed(1)} m/s²`);

    // DYNAMIC SATELLITE MARKER (at orbitR)
    const satX = xScale(orbitR);
    const satY = yScale(currentG);

    // Orbit radius vertical guideline
    g.append("line")
      .attr("x1", satX)
      .attr("y1", satY)
      .attr("x2", satX)
      .attr("y2", yScale(0))
      .attr("stroke", "#c084fc")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "2 2");

    // Pulsating satellite halo
    g.append("circle")
      .attr("cx", satX)
      .attr("cy", satY)
      .attr("r", 9)
      .attr("fill", "rgba(192, 132, 252, 0.3)");

    g.append("circle")
      .attr("cx", satX)
      .attr("cy", satY)
      .attr("r", 5)
      .attr("fill", "#c084fc")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2);

    g.append("text")
      .attr("x", satX)
      .attr("y", satY - 12)
      .attr("fill", "#c084fc")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text(`Satellite (r = ${orbitR.toFixed(1)}R)`);

    // Hover tracker
    setupHoverTracker(g, w, h, xScale, yScale, (r) => {
      const curR = Math.max(0.1, Math.min(maxR, r));
      const gVal = curR <= 1.0 ? g0 * curR : g0 / (curR * curR);
      const vo = 7.91 * Math.sqrt(massM / Math.max(1.0, curR));
      return {
        xVal: curR,
        yVal: gVal,
        label: `r = ${curR.toFixed(2)}R, g = ${gVal.toFixed(2)}m/s², v_o = ${vo.toFixed(2)}km/s`,
      };
    });
  }, [massM, orbitR, g0, currentG]);

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
            Planetary Gravity & Orbital Velocity Simulator
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </h3>
        </div>

        <button
          onClick={() => {
            setMassM(1.0);
            setOrbitR(2.5);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all self-start sm:self-auto"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 p-4 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Central Planet Mass (M / M_Earth)</span>
            <span className="text-cyan-400 font-bold">{massM.toFixed(1)} M_E</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="4.0"
            step="0.1"
            value={massM}
            onChange={(e) => setMassM(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Satellite Orbital Radius (r / R_Earth)</span>
            <span className="text-purple-400 font-bold">{orbitR.toFixed(1)} R_E</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="7.0"
            step="0.1"
            value={orbitR}
            onChange={(e) => setOrbitR(parseFloat(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* SVG Canvas for D3 */}
      <div className="relative rounded-2xl bg-[#09090b] border border-white/[0.08] p-3 overflow-hidden">
        <svg ref={labSvgRef} className="w-full h-auto" />
      </div>

      {/* Live Calculated Celestial Physics Metrics */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Local Gravity g(r)</div>
          <div className="text-lg font-bold text-cyan-400 mt-0.5">{currentG.toFixed(2)} m/s²</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Orbital Speed (v_o)</div>
          <div className="text-lg font-bold text-emerald-400 mt-0.5">{orbVelocity.toFixed(2)} km/s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Escape Velocity (v_e)</div>
          <div className="text-lg font-bold text-amber-400 mt-0.5">{escVelocity.toFixed(2)} km/s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Orbital Period (T)</div>
          <div className="text-lg font-bold text-purple-400 mt-0.5">{periodHours.toFixed(2)} hrs</div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 text-center mt-3">
        Adjust orbital radius and planet mass to watch the satellite dot travel along the inverse-square hyperbolic decay curve.
      </p>
    </div>
  );
}
