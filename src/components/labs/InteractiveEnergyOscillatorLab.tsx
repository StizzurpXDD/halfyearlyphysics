"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Sliders, Sparkles, Activity, RotateCcw } from "lucide-react";
import { addGridAndAxes, setupHoverTracker } from "../d3-helpers";

export function InteractiveEnergyOscillatorLab() {
  const [kSpring, setKSpring] = useState<number>(80);
  const [amplitude, setAmplitude] = useState<number>(1.5);
  const [mass, setMass] = useState<number>(2.0);
  const labSvgRef = useRef<SVGSVGElement>(null);

  const totalEnergy = 0.5 * kSpring * amplitude * amplitude;
  const omega = Math.sqrt(kSpring / mass);
  const maxVel = amplitude * omega;
  const period = (2 * Math.PI) / omega;
  const xEquipartition = amplitude / Math.SQRT2;

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

    // Potential Well Area Gradient
    const potGrad = defs
      .append("linearGradient")
      .attr("id", "pot-well-grad")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "0")
      .attr("y2", "1");
    potGrad.append("stop").attr("offset", "0%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.35);
    potGrad.append("stop").attr("offset", "100%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.02);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const maxDisp = 3.0;
    const maxE = Math.max(120, Math.ceil(totalEnergy * 1.3));

    const xScale = d3.scaleLinear().domain([-maxDisp, maxDisp]).range([0, w]);
    const yScale = d3.scaleLinear().domain([0, maxE]).range([h, 0]);

    addGridAndAxes(g, xScale, yScale, w, h, "Displacement x (meters)", "Energy E (Joules)");

    // 1. Total Energy Line (Amber Dashed)
    g.append("line")
      .attr("x1", xScale(-amplitude))
      .attr("y1", yScale(totalEnergy))
      .attr("x2", xScale(amplitude))
      .attr("y2", yScale(totalEnergy))
      .attr("stroke", "#fbbf24")
      .attr("stroke-width", 2.5)
      .attr("stroke-dasharray", "5 3");

    g.append("text")
      .attr("x", xScale(amplitude) + 6)
      .attr("y", yScale(totalEnergy) + 4)
      .attr("fill", "#fbbf24")
      .attr("font-size", "11px")
      .attr("font-weight", "bold")
      .text(`E = ${totalEnergy.toFixed(1)}J`);

    // 2. Parabolic Potential Energy Curve U(x) = 1/2 k x^2
    const numPoints = 60;
    const curveData: { x: number; u: number; k: number }[] = [];
    for (let i = 0; i <= numPoints; i++) {
      const curX = -amplitude + (2 * amplitude * i) / numPoints;
      const uVal = 0.5 * kSpring * curX * curX;
      const kVal = Math.max(0, totalEnergy - uVal);
      curveData.push({ x: curX, u: uVal, k: kVal });
    }

    // Shaded Area under U(x)
    const areaGen = d3
      .area<{ x: number; u: number }>()
      .x((d) => xScale(d.x))
      .y0(yScale(0))
      .y1((d) => yScale(d.u));

    g.append("path")
      .datum(curveData)
      .attr("fill", "url(#pot-well-grad)")
      .attr("d", areaGen);

    // Parabolic U(x) line
    const uLine = d3
      .line<{ x: number; u: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.u));

    g.append("path")
      .datum(curveData)
      .attr("fill", "none")
      .attr("stroke", "#38bdf8")
      .attr("stroke-width", 3.5)
      .attr("d", uLine);

    // Inverted Parabola Kinetic Energy Curve K(x) = E - 1/2 k x^2
    const kLine = d3
      .line<{ x: number; k: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.k));

    g.append("path")
      .datum(curveData)
      .attr("fill", "none")
      .attr("stroke", "#c084fc")
      .attr("stroke-width", 2.5)
      .attr("stroke-dasharray", "4 3")
      .attr("d", kLine);

    // Turning Points Markers at x = -A and +A
    [-amplitude, amplitude].forEach((turnX) => {
      g.append("line")
        .attr("x1", xScale(turnX))
        .attr("y1", yScale(totalEnergy))
        .attr("x2", xScale(turnX))
        .attr("y2", yScale(0))
        .attr("stroke", "#71717a")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "3 3");

      g.append("circle")
        .attr("cx", xScale(turnX))
        .attr("cy", yScale(totalEnergy))
        .attr("r", 5)
        .attr("fill", "#fbbf24");
    });

    g.append("text")
      .attr("x", xScale(-amplitude))
      .attr("y", yScale(0) + 18)
      .attr("fill", "#a1a1aa")
      .attr("font-size", "10px")
      .attr("text-anchor", "middle")
      .text("-A");

    g.append("text")
      .attr("x", xScale(amplitude))
      .attr("y", yScale(0) + 18)
      .attr("fill", "#a1a1aa")
      .attr("font-size", "10px")
      .attr("text-anchor", "middle")
      .text("+A");

    // Center equilibrium point
    g.append("text")
      .attr("x", xScale(0))
      .attr("y", yScale(totalEnergy) - 10)
      .attr("fill", "#c084fc")
      .attr("font-size", "10px")
      .attr("font-weight", "600")
      .attr("text-anchor", "middle")
      .text(`K_max = E (${maxVel.toFixed(1)} m/s)`);

    // Equipartition point (U = K = E/2)
    g.append("circle")
      .attr("cx", xScale(xEquipartition))
      .attr("cy", yScale(totalEnergy / 2))
      .attr("r", 4)
      .attr("fill", "#f43f5e");

    g.append("circle")
      .attr("cx", xScale(-xEquipartition))
      .attr("cy", yScale(totalEnergy / 2))
      .attr("r", 4)
      .attr("fill", "#f43f5e");

    // Hover tracker
    setupHoverTracker(g, w, h, xScale, yScale, (x) => {
      const curX = Math.max(-amplitude, Math.min(amplitude, x));
      const uVal = 0.5 * kSpring * curX * curX;
      const kVal = Math.max(0, totalEnergy - uVal);
      return {
        xVal: curX,
        yVal: uVal,
        label: `x=${curX.toFixed(2)}m: U=${uVal.toFixed(1)}J, K=${kVal.toFixed(1)}J [U+K=${totalEnergy.toFixed(1)}J]`,
      };
    });
  }, [kSpring, amplitude, mass, totalEnergy, maxVel, xEquipartition]);

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
            Harmonic Potential Well & Energy Conservation Lab
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </h3>
        </div>

        <button
          onClick={() => {
            setKSpring(80);
            setAmplitude(1.5);
            setMass(2.0);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all self-start sm:self-auto"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6 p-4 rounded-2xl bg-zinc-900/60 border border-white/[0.06]">
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Spring Constant (k)</span>
            <span className="text-cyan-400 font-bold">{kSpring} N/m</span>
          </div>
          <input
            type="range"
            min="20"
            max="250"
            step="5"
            value={kSpring}
            onChange={(e) => setKSpring(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Oscillation Amplitude (A)</span>
            <span className="text-purple-400 font-bold">{amplitude.toFixed(1)} m</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="2.5"
            step="0.1"
            value={amplitude}
            onChange={(e) => setAmplitude(parseFloat(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5 font-mono">
            <span>Attached Mass (m)</span>
            <span className="text-emerald-400 font-bold">{mass.toFixed(1)} kg</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="5.0"
            step="0.2"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* SVG Canvas for D3 */}
      <div className="relative rounded-2xl bg-[#09090b] border border-white/[0.08] p-3 overflow-hidden">
        <svg ref={labSvgRef} className="w-full h-auto" />
      </div>

      {/* Live Calculated Metrics */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Total Energy (E)</div>
          <div className="text-lg font-bold text-amber-400 mt-0.5">{totalEnergy.toFixed(1)} J</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Max Velocity (v_max)</div>
          <div className="text-lg font-bold text-cyan-400 mt-0.5">{maxVel.toFixed(2)} m/s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Time Period (T)</div>
          <div className="text-lg font-bold text-purple-400 mt-0.5">{period.toFixed(2)} s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[11px] text-zinc-500 uppercase">Equipartition Point</div>
          <div className="text-lg font-bold text-emerald-400 mt-0.5">±{xEquipartition.toFixed(2)} m</div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 text-center mt-3">
        Hover anywhere in the potential well to inspect displacement $x$ and verify exact energy conservation $U(x) + K(x) = E$ at any point.
      </p>
    </div>
  );
}
