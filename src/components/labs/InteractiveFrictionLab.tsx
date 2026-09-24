"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Sliders, Sparkles, Activity, RotateCcw } from "lucide-react";
import { addGridAndAxes, setupHoverTracker } from "../d3-helpers";

export function InteractiveFrictionLab() {
  const [appliedF, setAppliedF] = useState<number>(35);
  const [mass, setMass] = useState<number>(5.0);
  const [muS, setMuS] = useState<number>(0.5);
  const [muK, setMuK] = useState<number>(0.35);
  const labSvgRef = useRef<SVGSVGElement>(null);

  const gConst = 9.8;
  const normalForce = mass * gConst;
  const fsMax = muS * normalForce;
  const fk = muK * normalForce;

  let currentFriction = 0;
  let acceleration = 0;
  let stateLabel = "";
  let stateColor = "";

  if (appliedF < fsMax - 0.5) {
    currentFriction = appliedF;
    acceleration = 0;
    stateLabel = "Static Equilibrium (At Rest)";
    stateColor = "text-cyan-400";
  } else if (Math.abs(appliedF - fsMax) <= 0.5) {
    currentFriction = fsMax;
    acceleration = 0;
    stateLabel = "Impending Motion (Limiting Friction Peak)";
    stateColor = "text-amber-400";
  } else {
    currentFriction = fk;
    acceleration = (appliedF - fk) / mass;
    stateLabel = `Kinetic Sliding (Accelerating at ${acceleration.toFixed(2)} m/s²)`;
    stateColor = "text-emerald-400";
  }

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

    // Static zone gradient
    const staticGrad = defs
      .append("linearGradient")
      .attr("id", "static-zone-grad")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "0")
      .attr("y2", "1");
    staticGrad.append("stop").attr("offset", "0%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.25);
    staticGrad.append("stop").attr("offset", "100%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.02);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const maxF = 120;
    const maxY = Math.max(70, Math.ceil(fsMax * 1.35));

    const xScale = d3.scaleLinear().domain([0, maxF]).range([0, w]);
    const yScale = d3.scaleLinear().domain([0, maxY]).range([h, 0]);

    addGridAndAxes(g, xScale, yScale, w, h, "Applied Force F (Newtons)", "Friction Force f (Newtons)");

    // 1. Static Region Background Shading
    g.append("polygon")
      .attr(
        "points",
        `
        ${xScale(0)},${yScale(0)}
        ${xScale(fsMax)},${yScale(fsMax)}
        ${xScale(fsMax)},${yScale(0)}
      `
      )
      .attr("fill", "url(#static-zone-grad)");

    // 2. Static 45° Line (f = F)
    g.append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(fsMax))
      .attr("y2", yScale(fsMax))
      .attr("stroke", "#38bdf8")
      .attr("stroke-width", 3.5);

    // 3. Drop from peak limiting friction to kinetic friction
    g.append("line")
      .attr("x1", xScale(fsMax))
      .attr("y1", yScale(fsMax))
      .attr("x2", xScale(fsMax))
      .attr("y2", yScale(fk))
      .attr("stroke", "#f43f5e")
      .attr("stroke-width", 2.5)
      .attr("stroke-dasharray", "4 3");

    // 4. Kinetic Friction Plateau Line
    g.append("line")
      .attr("x1", xScale(fsMax))
      .attr("y1", yScale(fk))
      .attr("x2", xScale(maxF))
      .attr("y2", yScale(fk))
      .attr("stroke", "#34d399")
      .attr("stroke-width", 3.5);

    // Peak Limiting Friction Marker
    g.append("circle")
      .attr("cx", xScale(fsMax))
      .attr("cy", yScale(fsMax))
      .attr("r", 5)
      .attr("fill", "#fbbf24");

    g.append("text")
      .attr("x", xScale(fsMax))
      .attr("y", yScale(fsMax) - 8)
      .attr("fill", "#fbbf24")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text(`f_s(max) = ${fsMax.toFixed(1)}N`);

    // Kinetic Level Line Marker
    g.append("text")
      .attr("x", xScale(maxF) - 5)
      .attr("y", yScale(fk) - 8)
      .attr("fill", "#34d399")
      .attr("font-size", "10px")
      .attr("font-weight", "600")
      .attr("text-anchor", "end")
      .text(`f_k = ${fk.toFixed(1)}N (const)`);

    // DYNAMIC MARKER: Current state reflecting user slider
    const curX = xScale(appliedF);
    const curY = yScale(currentFriction);

    // Pulsating halo
    g.append("circle")
      .attr("cx", curX)
      .attr("cy", curY)
      .attr("r", 9)
      .attr("fill", appliedF >= fsMax ? "rgba(52, 211, 153, 0.3)" : "rgba(56, 189, 248, 0.3)");

    g.append("circle")
      .attr("cx", curX)
      .attr("cy", curY)
      .attr("r", 5)
      .attr("fill", appliedF >= fsMax ? "#34d399" : "#38bdf8")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2);

    // Hover tracker
    setupHoverTracker(g, w, h, xScale, yScale, (F) => {
      let fVal = 0;
      let reg = "";
      if (F <= fsMax) {
        fVal = F;
        reg = "Static (f = F)";
      } else {
        fVal = fk;
        const aVal = (F - fk) / mass;
        reg = `Kinetic (a = ${aVal.toFixed(1)} m/s²)`;
      }
      return {
        xVal: F,
        yVal: fVal,
        label: `F_app = ${F.toFixed(1)}N, f = ${fVal.toFixed(1)}N [${reg}]`,
      };
    });
  }, [appliedF, mass, muS, muK, fsMax, fk, currentFriction]);

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
            Newtonian Friction & Limiting Equilibrium Simulator
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </h3>
        </div>

        <button
          onClick={() => {
            setAppliedF(35);
            setMass(5.0);
            setMuS(0.5);
            setMuK(0.35);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all self-start sm:self-auto"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* State Status Pill */}
      <div className="mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
        <span className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Current Motion State:</span>
        <span className={`text-sm font-bold font-mono ${stateColor}`}>{stateLabel}</span>
      </div>

      {/* Interactive Controls (4 Sliders) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 p-4 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Applied Force (F)</span>
            <span className="text-cyan-400 font-bold">{appliedF} N</span>
          </div>
          <input
            type="range"
            min="0"
            max="110"
            step="1"
            value={appliedF}
            onChange={(e) => setAppliedF(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Block Mass (m)</span>
            <span className="text-purple-400 font-bold">{mass.toFixed(1)} kg</span>
          </div>
          <input
            type="range"
            min="2"
            max="15"
            step="0.5"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Static Coeff (μ_s)</span>
            <span className="text-amber-400 font-bold">{muS.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="0.8"
            step="0.05"
            value={muS}
            onChange={(e) => setMuS(parseFloat(e.target.value))}
            className="w-full accent-amber-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Kinetic Coeff (μ_k)</span>
            <span className="text-emerald-400 font-bold">{muK.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max={Math.min(0.6, muS - 0.05)}
            step="0.05"
            value={muK}
            onChange={(e) => setMuK(parseFloat(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* SVG Canvas for D3 */}
      <div className="relative rounded-2xl bg-[#09090b] border border-white/[0.08] p-3 overflow-hidden">
        <svg ref={labSvgRef} className="w-full h-auto" />
      </div>

      {/* Physics Readout Cards */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Limiting Friction Peak</div>
          <div className="text-lg font-bold text-amber-400 mt-0.5">{fsMax.toFixed(1)} N</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Kinetic Friction Level</div>
          <div className="text-lg font-bold text-emerald-400 mt-0.5">{fk.toFixed(1)} N</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Active Friction (f)</div>
          <div className="text-lg font-bold text-cyan-400 mt-0.5">{currentFriction.toFixed(1)} N</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Net Acceleration (a)</div>
          <div className="text-lg font-bold text-white mt-0.5">{acceleration.toFixed(2)} m/s²</div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 text-center mt-3">
        Move the Applied Force slider to watch the pulsating dot travel along the 45° static line, overcome peak limiting friction, and drop onto the kinetic sliding plateau.
      </p>
    </div>
  );
}
