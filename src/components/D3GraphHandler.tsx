"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { InteractiveKinematicsLab } from "./labs/InteractiveKinematicsLab";
import { InteractiveProjectileLab } from "./labs/InteractiveProjectileLab";
import { InteractiveFrictionLab } from "./labs/InteractiveFrictionLab";
import { InteractiveEnergyOscillatorLab } from "./labs/InteractiveEnergyOscillatorLab";
import { InteractiveOrbitalGravityLab } from "./labs/InteractiveOrbitalGravityLab";

interface D3GraphHandlerProps {
  slug: string;
}

export function D3GraphHandler({ slug }: D3GraphHandlerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find all .d3-chart-card elements inside the article
    const chartCards = document.querySelectorAll<HTMLElement>(".d3-chart-card");
    if (!chartCards.length) return;

    chartCards.forEach((card) => {
      const chartType = card.dataset.chart;
      if (!chartType) return;

      // Clean all existing SVG content inside
      card.querySelectorAll("svg").forEach((s) => s.remove());

      // Render the specific D3 chart
      renderD3Chart(card, chartType);
    });
  }, [slug]);

  return (
    <div ref={containerRef} className="mt-12">
      {/* Interactive D3 Physics Laboratories for each chapter */}
      {slug === "motion-in-a-straight-line" && <InteractiveKinematicsLab />}
      {slug === "motion-in-a-plane" && <InteractiveProjectileLab />}
      {slug === "laws-of-motion" && <InteractiveFrictionLab />}
      {slug === "work-energy-and-power" && <InteractiveEnergyOscillatorLab />}
      {slug === "gravitation" && <InteractiveOrbitalGravityLab />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Real D3.js Charts Rendering Engine
// ---------------------------------------------------------------------------
function renderD3Chart(container: HTMLElement, chartType: string) {
  let width = 460;
  let height = 240;
  let margin = { top: 25, right: 30, bottom: 42, left: 52 };

  if (
    chartType === "plane-parallelogram-law" ||
    chartType === "wep-constant-force-work" ||
    chartType === "wep-potential-equilibrium" ||
    chartType === "plane-horizontal-projectile" ||
    chartType === "plane-projectile-trajectory" ||
    chartType === "plane-complementary-angles"
  ) {
    width = 540;
    height = 270;
    margin = { top: 25, right: 35, bottom: 42, left: 50 };
  } else if (
    chartType === "plane-vector-resolution" ||
    chartType === "wep-power-time" ||
    chartType === "wep-variable-work" ||
    chartType === "nlm-impulse" ||
    chartType === "nlm-friction-curve" ||
    chartType === "grv-potential"
  ) {
    width = 480;
    height = 250;
    margin = { top: 25, right: 30, bottom: 42, left: 52 };
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Create SVG with D3
  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", "100%")
    .attr("height", "auto")
    .style("max-width", `${width}px`)
    .style("display", "block")
    .style("margin", "0 auto")
    .style("overflow", "visible");

  // Defs for gradients & filters & markers
  const defs = svg.append("defs");

  // Universal Arrow Markers
  const markerColors = [
    { id: "arrow-cyan", color: "#38bdf8" },
    { id: "arrow-purple", color: "#c084fc" },
    { id: "arrow-emerald", color: "#34d399" },
    { id: "arrow-amber", color: "#fbbf24" },
    { id: "arrow-rose", color: "#f43f5e" },
    { id: "arrow-white", color: "#ffffff" },
    { id: "arrow-zinc", color: "#71717a" },
  ];

  markerColors.forEach(({ id, color }) => {
    defs
      .append("marker")
      .attr("id", `${id}-${chartType}`)
      .attr("markerWidth", 8)
      .attr("markerHeight", 6)
      .attr("refX", 7)
      .attr("refY", 3)
      .attr("orient", "auto")
      .append("polygon")
      .attr("points", "0 0, 8 3, 0 6")
      .attr("fill", color);
  });

  // Glow filter
  const filter = defs.append("filter").attr("id", `glow-${chartType}`).attr("x", "-20%").attr("y", "-20%").attr("width", "140%").attr("height", "140%");
  filter.append("feGaussianBlur").attr("stdDeviation", "2.5").attr("result", "blur");
  filter.append("feComposite").attr("in", "SourceGraphic").attr("in2", "blur").attr("operator", "over");

  // Area gradient
  const areaGrad = defs
    .append("linearGradient")
    .attr("id", `area-grad-${chartType}`)
    .attr("x1", "0")
    .attr("y1", "0")
    .attr("x2", "0")
    .attr("y2", "1");
  areaGrad.append("stop").attr("offset", "0%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.35);
  areaGrad.append("stop").attr("offset", "100%").attr("stop-color", "#38bdf8").attr("stop-opacity", 0.02);

  const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  // Render based on chart type
  switch (chartType) {
    case "xt-stationary":
      drawXTStationary(g, innerWidth, innerHeight);
      break;
    case "xt-uniform":
      drawXTUniform(g, innerWidth, innerHeight);
      break;
    case "xt-accelerated":
      drawXTAccelerated(g, innerWidth, innerHeight);
      break;
    case "xt-retarded":
      drawXTRetarded(g, innerWidth, innerHeight);
      break;
    case "vt-accelerated":
      drawVTAccelerated(g, innerWidth, innerHeight, areaGrad.attr("id"));
      break;
    case "vt-gravity":
      drawVTGravity(g, innerWidth, innerHeight);
      break;
    case "vt-freefall":
      drawVTFreeFall(g, innerWidth, innerHeight);
      break;
    case "at-constant":
      drawATConstant(g, innerWidth, innerHeight);
      break;
    case "at-gravity":
      drawATGravity(g, innerWidth, innerHeight);
      break;
    case "plane-parallelogram-law":
      drawPlaneParallelogram(g, innerWidth, innerHeight, chartType);
      break;
    case "plane-vector-resolution":
      drawPlaneVectorResolution(g, innerWidth, innerHeight, chartType);
      break;
    case "plane-projectile-trajectory":
      drawPlaneProjectile(g, innerWidth, innerHeight);
      break;
    case "plane-complementary-angles":
      drawPlaneComplementary(g, innerWidth, innerHeight);
      break;
    case "plane-horizontal-projectile":
      drawPlaneHorizontalProjectile(g, innerWidth, innerHeight, chartType);
      break;
    case "plane-circular-motion":
      drawPlaneCircularMotion(g, innerWidth, innerHeight, chartType);
      break;
    case "nlm-impulse":
      drawNLMImpulse(g, innerWidth, innerHeight);
      break;
    case "nlm-friction-curve":
      drawNLMFrictionCurve(g, innerWidth, innerHeight);
      break;
    case "wep-constant-force-work":
      drawWEPConstantForce(g, innerWidth, innerHeight, chartType);
      break;
    case "wep-hooke":
      drawWEPHooke(g, innerWidth, innerHeight);
      break;
    case "wep-potential":
      drawWEPPotential(g, innerWidth, innerHeight);
      break;
    case "wep-falling-energy":
      drawWEPFallingEnergy(g, innerWidth, innerHeight);
      break;
    case "wep-variable-work":
      drawWEPVariableWork(g, innerWidth, innerHeight);
      break;
    case "wep-power-time":
      drawWEPPowerTime(g, innerWidth, innerHeight);
      break;
    case "wep-potential-equilibrium":
      drawWEPPotentialEquilibrium(g, innerWidth, innerHeight, chartType);
      break;
    case "grv-kepler":
      drawGRVKepler(g, innerWidth, innerHeight);
      break;
    case "grv-gravity-variation":
      drawGRVGravityVariation(g, innerWidth, innerHeight);
      break;
    case "grv-potential":
      drawGRVPotential(g, innerWidth, innerHeight);
      break;
    default:
      break;
  }
}

// ---------------------------------------------------------------------------
// Chart 1: x-t Stationary Object
// ---------------------------------------------------------------------------
function drawXTStationary(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 10]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Position x (m)");

  const y0 = 6;
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(y0))
    .attr("x2", xScale(10))
    .attr("y2", yScale(y0))
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("circle").attr("cx", xScale(0)).attr("cy", yScale(y0)).attr("r", 5).attr("fill", "#38bdf8");

  g.append("text")
    .attr("x", xScale(5))
    .attr("y", yScale(y0) - 10)
    .attr("text-anchor", "middle")
    .attr("fill", "#38bdf8")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("x = x₀ (const) ⟹ Slope = v = 0");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => ({
    xVal: t,
    yVal: y0,
    label: `t = ${t.toFixed(1)}s, x = ${y0.toFixed(1)}m (Rest, v = 0 m/s)`,
  }));
}

// ---------------------------------------------------------------------------
// Chart 2: x-t Uniform Motion
// ---------------------------------------------------------------------------
function drawXTUniform(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 8]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 20]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Position x (m)");

  const v = 2.2;
  const x0 = 2;
  const lineGen = d3
    .line<number>()
    .x((t) => xScale(t))
    .y((t) => yScale(x0 + v * t));

  const times = d3.range(0, 8.1, 0.5);

  g.append("path")
    .datum(times)
    .attr("fill", "none")
    .attr("stroke", "#34d399")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round")
    .attr("d", lineGen);

  g.append("circle").attr("cx", xScale(0)).attr("cy", yScale(x0)).attr("r", 5).attr("fill", "#34d399");

  g.append("text")
    .attr("x", xScale(4))
    .attr("y", yScale(x0 + v * 4) - 14)
    .attr("text-anchor", "middle")
    .attr("fill", "#34d399")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text(`Slope = const = v = ${v} m/s`);

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const x = x0 + v * t;
    return {
      xVal: t,
      yVal: x,
      label: `t = ${t.toFixed(1)}s, x = ${x.toFixed(1)}m (v = ${v} m/s, a = 0)`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 3: x-t Uniform Acceleration
// ---------------------------------------------------------------------------
function drawXTAccelerated(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 25]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Position x (m)");

  const a = 1.3;
  const times = d3.range(0, 6.05, 0.1);
  const lineGen = d3
    .line<number>()
    .x((t) => xScale(t))
    .y((t) => yScale(0.5 * a * t * t))
    .curve(d3.curveMonotoneX);

  g.append("path")
    .datum(times)
    .attr("fill", "none")
    .attr("stroke", "#a855f7")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round")
    .attr("d", lineGen);

  g.append("text")
    .attr("x", xScale(3.2))
    .attr("y", yScale(0.5 * a * 3.2 * 3.2) - 16)
    .attr("fill", "#c084fc")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("x ∝ t² (Slope v increases)");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const x = 0.5 * a * t * t;
    const instV = a * t;
    return {
      xVal: t,
      yVal: x,
      label: `t = ${t.toFixed(1)}s, x = ${x.toFixed(1)}m (Instantaneous v = ${instV.toFixed(1)} m/s)`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 4: x-t Uniform Retardation
// ---------------------------------------------------------------------------
function drawXTRetarded(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 22]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Position x (m)");

  const u = 7.0;
  const a = 1.15;
  const times = d3.range(0, 6.05, 0.1);
  const lineGen = d3
    .line<number>()
    .x((t) => xScale(t))
    .y((t) => yScale(Math.max(0, u * t - 0.5 * a * t * t)))
    .curve(d3.curveMonotoneX);

  g.append("path")
    .datum(times)
    .attr("fill", "none")
    .attr("stroke", "#fb7185")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round")
    .attr("d", lineGen);

  g.append("text")
    .attr("x", xScale(3.5))
    .attr("y", yScale(18) - 5)
    .attr("fill", "#fb7185")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("Slope decreases (a < 0)");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const x = Math.max(0, u * t - 0.5 * a * t * t);
    const instV = Math.max(0, u - a * t);
    return {
      xVal: t,
      yVal: x,
      label: `t = ${t.toFixed(1)}s, x = ${x.toFixed(1)}m (v slows to ${instV.toFixed(1)} m/s)`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 5: v-t Uniform Acceleration (with shaded displacement area)
// ---------------------------------------------------------------------------
function drawVTAccelerated(
  g: d3.Selection<SVGGElement, unknown, null, undefined>,
  w: number,
  h: number,
  areaGradId: string
) {
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 16]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Velocity v (m/s)");

  const u = 3.0;
  const a = 2.0;
  const tEnd = 5.0;

  // Area under curve
  const areaData = [
    { t: 0, v: u },
    { t: tEnd, v: u + a * tEnd },
  ];

  const areaGen = d3
    .area<{ t: number; v: number }>()
    .x((d) => xScale(d.t))
    .y0(yScale(0))
    .y1((d) => yScale(d.v));

  g.append("path").datum(areaData).attr("fill", `url(#${areaGradId})`).attr("d", areaGen);

  // Dash line at tEnd
  g.append("line")
    .attr("x1", xScale(tEnd))
    .attr("y1", yScale(u + a * tEnd))
    .attr("x2", xScale(tEnd))
    .attr("y2", yScale(0))
    .attr("stroke", "#71717a")
    .attr("stroke-dasharray", "4 4");

  // Line
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(u))
    .attr("x2", xScale(5.5))
    .attr("y2", yScale(u + a * 5.5))
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("text")
    .attr("x", xScale(2.5))
    .attr("y", yScale(4.5))
    .attr("text-anchor", "middle")
    .attr("fill", "#7dd3fc")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("Area = Displacement Δx");

  g.append("text")
    .attr("x", xScale(2.5))
    .attr("y", yScale(11))
    .attr("text-anchor", "middle")
    .attr("fill", "#38bdf8")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("Slope = a = const");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const v = u + a * t;
    const disp = u * t + 0.5 * a * t * t;
    return {
      xVal: t,
      yVal: v,
      label: `t = ${t.toFixed(1)}s, v = ${v.toFixed(1)} m/s, Displacement = ${disp.toFixed(1)} m`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 6: v-t Motion Under Gravity (Vertical Launch)
// ---------------------------------------------------------------------------
function drawVTGravity(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 5]).range([0, w]);
  const yScale = d3.scaleLinear().domain([-25, 25]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Velocity v (m/s)");

  // Zero velocity axis line
  g.append("line")
    .attr("x1", 0)
    .attr("y1", yScale(0))
    .attr("x2", w)
    .attr("y2", yScale(0))
    .attr("stroke", "rgba(255,255,255,0.2)")
    .attr("stroke-dasharray", "3 3");

  const u = 19.6;
  const gr = 9.8;
  const tApex = 2.0;

  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(u))
    .attr("x2", xScale(4.0))
    .attr("y2", yScale(-u))
    .attr("stroke", "#f59e0b")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  // Apex circle
  g.append("circle").attr("cx", xScale(tApex)).attr("cy", yScale(0)).attr("r", 5).attr("fill", "#f59e0b");

  g.append("text")
    .attr("x", xScale(tApex) + 8)
    .attr("y", yScale(0) - 8)
    .attr("fill", "#fcd34d")
    .attr("font-size", "10px")
    .attr("font-family", "monospace")
    .text("Apex (v = 0)");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const v = u - gr * t;
    const phase = v > 0 ? "Ascent" : v === 0 ? "Apex" : "Descent";
    return {
      xVal: t,
      yVal: v,
      label: `t = ${t.toFixed(1)}s, v = ${v.toFixed(1)} m/s (${phase})`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 7: v-t Free Fall from Rest
// ---------------------------------------------------------------------------
function drawVTFreeFall(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 5]).range([0, w]);
  const yScale = d3.scaleLinear().domain([-50, 0]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Velocity v (m/s)");

  const gr = 9.8;
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(4.5))
    .attr("y2", yScale(-gr * 4.5))
    .attr("stroke", "#ec4899")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("text")
    .attr("x", xScale(2.5))
    .attr("y", yScale(-15))
    .attr("fill", "#f472b6")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("v = -gt (Slope = -g)");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const v = -gr * t;
    return {
      xVal: t,
      yVal: v,
      label: `t = ${t.toFixed(1)}s, v = ${v.toFixed(1)} m/s (Speed = ${Math.abs(v).toFixed(1)} m/s)`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 8: a-t Constant Acceleration
// ---------------------------------------------------------------------------
function drawATConstant(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 8]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Acceleration a (m/s²)");

  const a0 = 4.0;
  const tEnd = 4.5;

  // Shaded area
  g.append("rect")
    .attr("x", xScale(0))
    .attr("y", yScale(a0))
    .attr("width", xScale(tEnd) - xScale(0))
    .attr("height", yScale(0) - yScale(a0))
    .attr("fill", "rgba(56, 189, 248, 0.15)");

  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(a0))
    .attr("x2", xScale(5.5))
    .attr("y2", yScale(a0))
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("text")
    .attr("x", xScale(2.2))
    .attr("y", yScale(2.0))
    .attr("text-anchor", "middle")
    .attr("fill", "#7dd3fc")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("Area = Δv = a₀ · t");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const deltaV = a0 * t;
    return {
      xVal: t,
      yVal: a0,
      label: `t = ${t.toFixed(1)}s, a = ${a0.toFixed(1)} m/s², Δv = ${deltaV.toFixed(1)} m/s`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 9: a-t Free Fall Acceleration
// ---------------------------------------------------------------------------
function drawATGravity(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, w]);
  const yScale = d3.scaleLinear().domain([-15, 0]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Acceleration a (m/s²)");

  const g0 = -9.8;
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(g0))
    .attr("x2", xScale(5.5))
    .attr("y2", yScale(g0))
    .attr("stroke", "#ef4444")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("text")
    .attr("x", xScale(3))
    .attr("y", yScale(g0) - 8)
    .attr("text-anchor", "middle")
    .attr("fill", "#f87171")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("a = -g = -9.8 m/s² (Constant)");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => ({
    xVal: t,
    yVal: g0,
    label: `t = ${t.toFixed(1)}s, a = -9.8 m/s² (Downwards)`,
  }));
}

// ---------------------------------------------------------------------------
// Chart 10: WEP - Hooke's Law (F vs x)
// ---------------------------------------------------------------------------
function drawWEPHooke(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([-0.5, 0.5]).range([0, w]);
  const yScale = d3.scaleLinear().domain([-30, 30]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Displacement x (m)", "Spring Force F (N)");

  const k = 50;
  // F = -k x
  g.append("line")
    .attr("x1", xScale(-0.45))
    .attr("y1", yScale(k * 0.45))
    .attr("x2", xScale(0.45))
    .attr("y2", yScale(-k * 0.45))
    .attr("stroke", "#06b6d4")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("text")
    .attr("x", xScale(0.2))
    .attr("y", yScale(15))
    .attr("fill", "#67e8f9")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("F = -kx (Restoring)");

  setupHoverTracker(g, w, h, xScale, yScale, (x) => {
    const f = -k * x;
    const u = 0.5 * k * x * x;
    return {
      xVal: x,
      yVal: f,
      label: `x = ${x.toFixed(2)}m, F = ${f.toFixed(1)}N, Stored U = ${u.toFixed(2)}J`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 11: WEP - Potential Energy Curve U(x)
// ---------------------------------------------------------------------------
function drawWEPPotential(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([-0.5, 0.5]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 10]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Displacement x (m)", "Potential Energy U (J)");

  const k = 60;
  const xs = d3.range(-0.45, 0.46, 0.02);
  const lineGen = d3
    .line<number>()
    .x((x) => xScale(x))
    .y((x) => yScale(0.5 * k * x * x))
    .curve(d3.curveMonotoneX);

  g.append("path")
    .datum(xs)
    .attr("fill", "none")
    .attr("stroke", "#a855f7")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round")
    .attr("d", lineGen);

  g.append("circle").attr("cx", xScale(0)).attr("cy", yScale(0)).attr("r", 5).attr("fill", "#34d399");

  g.append("text")
    .attr("x", xScale(0))
    .attr("y", yScale(0) - 10)
    .attr("text-anchor", "middle")
    .attr("fill", "#34d399")
    .attr("font-size", "10px")
    .attr("font-family", "monospace")
    .text("Stable Equilibrium (x = 0)");

  setupHoverTracker(g, w, h, xScale, yScale, (x) => {
    const u = 0.5 * k * x * x;
    return {
      xVal: x,
      yVal: u,
      label: `x = ${x.toFixed(2)}m, U = ${u.toFixed(2)}J`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 12: WEP - Falling Energy vs Height
// ---------------------------------------------------------------------------
function drawWEPFallingEnergy(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 20]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Height h (m)", "Energy (J)");

  const E_total = 80;

  // Total Energy E (horizontal line)
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(E_total))
    .attr("x2", xScale(20))
    .attr("y2", yScale(E_total))
    .attr("stroke", "#e4e4e7")
    .attr("stroke-width", 2.5)
    .attr("stroke-dasharray", "4 4");

  // Potential Energy U(h) = mgh (linear up)
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(20))
    .attr("y2", yScale(E_total))
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3);

  // Kinetic Energy K(h) = E - mgh (linear down)
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(E_total))
    .attr("x2", xScale(20))
    .attr("y2", yScale(0))
    .attr("stroke", "#ec4899")
    .attr("stroke-width", 3);

  // Crossing point
  g.append("circle").attr("cx", xScale(10)).attr("cy", yScale(E_total / 2)).attr("r", 4.5).attr("fill", "#ffffff");

  g.append("text").attr("x", xScale(12)).attr("y", yScale(E_total) - 8).attr("fill", "#e4e4e7").attr("font-size", "10px").attr("font-family", "monospace").text("E_total = const");
  g.append("text").attr("x", xScale(14)).attr("y", yScale(62)).attr("fill", "#38bdf8").attr("font-size", "10px").attr("font-family", "monospace").text("U(h) = mgh");
  g.append("text").attr("x", xScale(14)).attr("y", yScale(22)).attr("fill", "#ec4899").attr("font-size", "10px").attr("font-family", "monospace").text("K(h)");

  setupHoverTracker(g, w, h, xScale, yScale, (heightVal) => {
    const u = (E_total * heightVal) / 20;
    const k = E_total - u;
    return {
      xVal: heightVal,
      yVal: u,
      label: `h = ${heightVal.toFixed(1)}m | U = ${u.toFixed(1)}J | K = ${k.toFixed(1)}J | E = ${E_total}J`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 13: Kepler's Third Law (T² vs r³)
// ---------------------------------------------------------------------------
function drawGRVKepler(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 10]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Semi-major Axis r³ (×10²⁴ km³)", "Orbital Period T² (×10¹⁴ s²)");

  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(9.5))
    .attr("y2", yScale(9.5))
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round");

  g.append("text")
    .attr("x", xScale(5))
    .attr("y", yScale(6))
    .attr("fill", "#38bdf8")
    .attr("font-size", "11px")
    .attr("font-family", "monospace")
    .text("T² ∝ r³ (Slope = 4π²/GM)");

  setupHoverTracker(g, w, h, xScale, yScale, (r3) => ({
    xVal: r3,
    yVal: r3,
    label: `r³ = ${r3.toFixed(1)}, T² = ${r3.toFixed(1)} (Exact Linear Relation)`,
  }));
}

// ---------------------------------------------------------------------------
// Chart 14: Gravitation - Variation of g with Distance
// ---------------------------------------------------------------------------
function drawGRVGravityVariation(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 4]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 12]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Distance r / R", "Gravity g (m/s²)");

  const R = 1.0;
  const g0 = 9.8;

  // Inside Earth r <= R: g = g0 * (r / R)
  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(R))
    .attr("y2", yScale(g0))
    .attr("stroke", "#34d399")
    .attr("stroke-width", 3);

  // Outside Earth r >= R: g = g0 / (r / R)^2
  const rOut = d3.range(R, 3.9, 0.05);
  const lineOut = d3
    .line<number>()
    .x((r) => xScale(r))
    .y((r) => yScale(g0 / (r * r)))
    .curve(d3.curveMonotoneX);

  g.append("path")
    .datum(rOut)
    .attr("fill", "none")
    .attr("stroke", "#a855f7")
    .attr("stroke-width", 3)
    .attr("stroke-linecap", "round")
    .attr("d", lineOut);

  // Surface marker
  g.append("circle").attr("cx", xScale(R)).attr("cy", yScale(g0)).attr("r", 5).attr("fill", "#ffffff");

  g.append("text").attr("x", xScale(0.5)).attr("y", yScale(7.5)).attr("fill", "#34d399").attr("font-size", "10px").attr("font-family", "monospace").text("Inside: g ∝ r");
  g.append("text").attr("x", xScale(2.2)).attr("y", yScale(4.5)).attr("fill", "#c084fc").attr("font-size", "10px").attr("font-family", "monospace").text("Outside: g ∝ 1/r²");

  setupHoverTracker(g, w, h, xScale, yScale, (r) => {
    const gVal = r <= 1.0 ? g0 * r : g0 / (r * r);
    const region = r < 1.0 ? "Inside Earth" : r === 1.0 ? "Earth Surface" : "Above Earth";
    return {
      xVal: r,
      yVal: gVal,
      label: `r = ${r.toFixed(2)}R | g = ${gVal.toFixed(2)} m/s² (${region})`,
    };
  });
}

// ---------------------------------------------------------------------------
// Helper: Clean Axis & Gridlines
// ---------------------------------------------------------------------------
function addGridAndAxes(
  g: d3.Selection<SVGGElement, unknown, null, undefined>,
  xScale: d3.ScaleLinear<number, number>,
  yScale: d3.ScaleLinear<number, number>,
  w: number,
  h: number,
  xLabel: string,
  yLabel: string
) {
  // Gridlines
  g.append("g")
    .attr("class", "grid")
    .attr("stroke", "rgba(255, 255, 255, 0.05)")
    .call(
      d3
        .axisLeft(yScale)
        .ticks(5)
        .tickSize(-w)
        .tickFormat(() => "")
    )
    .select(".domain")
    .remove();

  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${h})`)
    .attr("stroke", "rgba(255, 255, 255, 0.05)")
    .call(
      d3
        .axisBottom(xScale)
        .ticks(5)
        .tickSize(-h)
        .tickFormat(() => "")
    )
    .select(".domain")
    .remove();

  // Bottom Axis
  const xAxis = d3.axisBottom(xScale).ticks(5);
  g.append("g")
    .attr("transform", `translate(0,${h})`)
    .call(xAxis)
    .attr("color", "#71717a")
    .selectAll("text")
    .attr("fill", "#a1a1aa")
    .attr("font-size", "10px");

  // Left Axis
  const yAxis = d3.axisLeft(yScale).ticks(5);
  g.append("g")
    .call(yAxis)
    .attr("color", "#71717a")
    .selectAll("text")
    .attr("fill", "#a1a1aa")
    .attr("font-size", "10px");

  // Axis Labels
  g.append("text")
    .attr("x", w / 2)
    .attr("y", h + 34)
    .attr("text-anchor", "middle")
    .attr("fill", "#d4d4d8")
    .attr("font-size", "11px")
    .attr("font-family", "-apple-system, BlinkMacSystemFont, sans-serif")
    .text(xLabel);

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -h / 2)
    .attr("y", -38)
    .attr("text-anchor", "middle")
    .attr("fill", "#d4d4d8")
    .attr("font-size", "11px")
    .attr("font-family", "-apple-system, BlinkMacSystemFont, sans-serif")
    .text(yLabel);
}

// ---------------------------------------------------------------------------
// Helper: Interactive Crosshairs & Live Tooltip Badge
// ---------------------------------------------------------------------------
function setupHoverTracker(
  g: d3.Selection<SVGGElement, unknown, null, undefined>,
  w: number,
  h: number,
  xScale: d3.ScaleLinear<number, number>,
  yScale: d3.ScaleLinear<number, number>,
  calcHoverData: (x: number) => { xVal: number; yVal: number; label: string }
) {
  // Crosshairs
  const crosshairGroup = g.append("g").style("display", "none");

  const vLine = crosshairGroup
    .append("line")
    .attr("stroke", "rgba(56, 189, 248, 0.4)")
    .attr("stroke-dasharray", "3 3");

  const hLine = crosshairGroup
    .append("line")
    .attr("stroke", "rgba(56, 189, 248, 0.4)")
    .attr("stroke-dasharray", "3 3");

  const targetDot = crosshairGroup
    .append("circle")
    .attr("r", 5)
    .attr("fill", "#38bdf8")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2);

  // Badge Container
  const badge = crosshairGroup.append("g");
  const badgeRect = badge
    .append("rect")
    .attr("rx", 5)
    .attr("fill", "rgba(15, 23, 42, 0.95)")
    .attr("stroke", "rgba(56, 189, 248, 0.5)")
    .attr("stroke-width", 1);

  const badgeText = badge
    .append("text")
    .attr("font-size", "10px")
    .attr("font-family", "monospace")
    .attr("fill", "#38bdf8")
    .attr("alignment-baseline", "middle");

  // Transparent overlay rect for mouse tracking
  g.append("rect")
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mouseenter", () => crosshairGroup.style("display", null))
    .on("mouseleave", () => crosshairGroup.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx] = d3.pointer(event);
      const xDomain = xScale.invert(Math.max(0, Math.min(w, mx)));
      const data = calcHoverData(xDomain);

      const cx = xScale(data.xVal);
      const cy = yScale(data.yVal);

      vLine.attr("x1", cx).attr("y1", 0).attr("x2", cx).attr("y2", h);
      hLine.attr("x1", 0).attr("y1", cy).attr("x2", w).attr("y2", cy);
      targetDot.attr("cx", cx).attr("cy", cy);

      badgeText.text(data.label);
      const textWidth = badgeText.node()?.getComputedTextLength() || 140;

      let badgeX = cx - textWidth / 2 - 8;
      if (badgeX < 0) badgeX = 5;
      if (badgeX + textWidth + 16 > w) badgeX = w - textWidth - 16;

      let badgeY = cy - 28;
      if (badgeY < 0) badgeY = cy + 12;

      badgeRect
        .attr("x", badgeX)
        .attr("y", badgeY)
        .attr("width", textWidth + 16)
        .attr("height", 22);

      badgeText.attr("x", badgeX + 8).attr("y", badgeY + 12);
    });
}

// ---------------------------------------------------------------------------
// Chart 15: Plane - Oblique Projectile Trajectory (D3)
// ---------------------------------------------------------------------------
function drawPlaneProjectile(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const u = 25;
  const theta = 45 * (Math.PI / 180);
  const gAcc = 9.8;
  const ux = u * Math.cos(theta);
  const uy = u * Math.sin(theta);
  const R = (u * u * Math.sin(2 * theta)) / gAcc;
  const H = (uy * uy) / (2 * gAcc);

  const xScale = d3.scaleLinear().domain([0, 70]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 20]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Horizontal Distance x (m)", "Height y (m)");

  const data = d3.range(0, R + 0.5, 1).map((x) => {
    const t = x / ux;
    const y = Math.max(0, uy * t - 0.5 * gAcc * t * t);
    return { x, y, t };
  });

  const areaGen = d3
    .area<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y0(yScale(0))
    .y1((d) => yScale(d.y));

  g.append("path")
    .datum(data)
    .attr("fill", "rgba(56, 189, 248, 0.12)")
    .attr("d", areaGen);

  const lineGen = d3
    .line<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3.5)
    .attr("stroke-linecap", "round")
    .attr("d", lineGen);

  // Apex (H_max) marker
  g.append("circle").attr("cx", xScale(R / 2)).attr("cy", yScale(H)).attr("r", 5).attr("fill", "#fbbf24");
  g.append("text")
    .attr("x", xScale(R / 2))
    .attr("y", yScale(H) - 8)
    .attr("fill", "#fbbf24")
    .attr("font-size", "10px")
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .text(`Apex H_max ≈ ${H.toFixed(1)}m`);

  // Landing range marker
  g.append("circle").attr("cx", xScale(R)).attr("cy", yScale(0)).attr("r", 5).attr("fill", "#34d399");
  g.append("text")
    .attr("x", xScale(R))
    .attr("y", yScale(0) - 8)
    .attr("fill", "#34d399")
    .attr("font-size", "10px")
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .text(`R ≈ ${R.toFixed(1)}m`);

  setupHoverTracker(g, w, h, xScale, yScale, (x) => {
    const curX = Math.max(0, Math.min(R, x));
    const t = curX / ux;
    const curY = Math.max(0, uy * t - 0.5 * gAcc * t * t);
    const vy = uy - gAcc * t;
    const v = Math.sqrt(ux * ux + vy * vy);
    return {
      xVal: curX,
      yVal: curY,
      label: `x=${curX.toFixed(1)}m, y=${curY.toFixed(1)}m, t=${t.toFixed(2)}s, v=${v.toFixed(1)}m/s`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 16: Plane - Complementary Launch Angles
// ---------------------------------------------------------------------------
function drawPlaneComplementary(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const u = 25;
  const gAcc = 9.8;
  const th1 = 30 * (Math.PI / 180);
  const th2 = 60 * (Math.PI / 180);
  const R = (u * u * Math.sin(2 * th1)) / gAcc;
  const H1 = (u * Math.sin(th1) * (u * Math.sin(th1))) / (2 * gAcc);
  const H2 = (u * Math.sin(th2) * (u * Math.sin(th2))) / (2 * gAcc);

  const xScale = d3.scaleLinear().domain([0, 65]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 28]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Horizontal Range x (m)", "Height y (m)");

  const ux1 = u * Math.cos(th1);
  const uy1 = u * Math.sin(th1);
  const data1 = d3.range(0, R + 0.5, 1).map((x) => {
    const t = x / ux1;
    return { x, y: Math.max(0, uy1 * t - 0.5 * gAcc * t * t) };
  });

  const ux2 = u * Math.cos(th2);
  const uy2 = u * Math.sin(th2);
  const data2 = d3.range(0, R + 0.5, 1).map((x) => {
    const t = x / ux2;
    return { x, y: Math.max(0, uy2 * t - 0.5 * gAcc * t * t) };
  });

  const lineGen = d3
    .line<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  g.append("path").datum(data1).attr("fill", "none").attr("stroke", "#38bdf8").attr("stroke-width", 3).attr("d", lineGen);
  g.append("path").datum(data2).attr("fill", "none").attr("stroke", "#c084fc").attr("stroke-width", 3).attr("stroke-dasharray", "4 3").attr("d", lineGen);

  g.append("circle").attr("cx", xScale(R)).attr("cy", yScale(0)).attr("r", 6).attr("fill", "#34d399");
  g.append("text")
    .attr("x", xScale(R))
    .attr("y", yScale(0) - 10)
    .attr("fill", "#34d399")
    .attr("font-size", "10px")
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .text(`Same Range R ≈ ${R.toFixed(1)}m`);

  g.append("text").attr("x", xScale(R / 2)).attr("y", yScale(H1) + 14).attr("fill", "#38bdf8").attr("font-size", "10px").attr("text-anchor", "middle").text("θ₁ = 30° (Lower H)");
  g.append("text").attr("x", xScale(R / 2)).attr("y", yScale(H2) - 8).attr("fill", "#c084fc").attr("font-size", "10px").attr("text-anchor", "middle").text("θ₂ = 60° (Higher H)");

  setupHoverTracker(g, w, h, xScale, yScale, (x) => {
    const curX = Math.max(0, Math.min(R, x));
    const t1 = curX / ux1;
    const y1 = Math.max(0, uy1 * t1 - 0.5 * gAcc * t1 * t1);
    return {
      xVal: curX,
      yVal: y1,
      label: `x=${curX.toFixed(1)}m | y(30°)=${y1.toFixed(1)}m [Equal Range at landing]`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 17: Plane - Uniform Circular Motion
// ---------------------------------------------------------------------------
function drawPlaneCircularMotion(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number, chartType: string) {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.36;

  // Background crosshair guides
  g.append("line").attr("x1", cx - r * 1.3).attr("y1", cy).attr("x2", cx + r * 1.3).attr("y2", cy).attr("stroke", "rgba(255,255,255,0.08)").attr("stroke-width", 1);
  g.append("line").attr("x1", cx).attr("y1", cy - r * 1.3).attr("x2", cx).attr("y2", cy + r * 1.3).attr("stroke", "rgba(255,255,255,0.08)").attr("stroke-width", 1);

  // Circular orbit path
  g.append("circle").attr("cx", cx).attr("cy", cy).attr("r", r).attr("fill", "none").attr("stroke", "rgba(56, 189, 248, 0.35)").attr("stroke-width", 2).attr("stroke-dasharray", "4 4");

  // Center pivot O
  g.append("circle").attr("cx", cx).attr("cy", cy).attr("r", 4.5).attr("fill", "#ffffff");
  g.append("text").attr("x", cx - 14).attr("y", cy + 15).attr("fill", "#ffffff").attr("font-size", "12px").attr("font-weight", "bold").text("O");

  // Dynamic vector elements container
  const dynGroup = g.append("g");
  const rLine = dynGroup.append("line").attr("stroke", "#38bdf8").attr("stroke-width", 2.5);
  const rLabel = dynGroup.append("text").attr("fill", "#38bdf8").attr("font-size", "11px").attr("font-weight", "bold").text("r");
  const acLine = dynGroup.append("line").attr("stroke", "#f43f5e").attr("stroke-width", 3).attr("marker-end", `url(#arrow-rose-${chartType})`);
  const acLabel = dynGroup.append("text").attr("fill", "#f43f5e").attr("font-size", "11px").attr("font-weight", "bold").text("a_c = v²/r");
  const vLine = dynGroup.append("line").attr("stroke", "#34d399").attr("stroke-width", 3).attr("marker-end", `url(#arrow-emerald-${chartType})`);
  const vLabel = dynGroup.append("text").attr("fill", "#34d399").attr("font-size", "11px").attr("font-weight", "bold").text("v (tangent)");
  const pDot = dynGroup.append("circle").attr("r", 6).attr("fill", "#38bdf8").attr("stroke", "#ffffff").attr("stroke-width", 2);

  function updateAngle(angle: number) {
    const px = cx + r * Math.cos(angle);
    const py = cy - r * Math.sin(angle);

    rLine.attr("x1", cx).attr("y1", cy).attr("x2", px).attr("y2", py);
    rLabel.attr("x", cx + (px - cx) / 2 + 8).attr("y", cy + (py - cy) / 2);

    const acLen = 50;
    const acX = px - acLen * Math.cos(angle);
    const acY = py + acLen * Math.sin(angle);
    acLine.attr("x1", px).attr("y1", py).attr("x2", acX).attr("y2", acY);
    acLabel.attr("x", acX - 10).attr("y", acY + (py > cy ? 14 : -6));

    const vLen = 55;
    const vx = px - vLen * Math.sin(angle);
    const vy = py - vLen * Math.cos(angle);
    vLine.attr("x1", px).attr("y1", py).attr("x2", vx).attr("y2", vy);
    vLabel.attr("x", vx - 8).attr("y", vy - 6);

    pDot.attr("cx", px).attr("cy", py);
  }

  // Initial angle 45 deg
  updateAngle(Math.PI / 4);

  // Hover telemetry
  const overlay = g.append("rect").attr("width", w).attr("height", h).attr("fill", "transparent").attr("pointer-events", "all");
  const badge = g.append("g").style("display", "none");
  const bRect = badge.append("rect").attr("rx", 6).attr("fill", "rgba(18, 18, 23, 0.92)").attr("stroke", "#34d399").attr("stroke-width", 1.5);
  const bText = badge.append("text").attr("fill", "#ffffff").attr("font-size", "11px").attr("font-family", "monospace");

  overlay
    .on("mouseenter", () => badge.style("display", null))
    .on("mouseleave", () => badge.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx, my] = d3.pointer(event, overlay.node());
      const angle = Math.atan2(cy - my, mx - cx);
      updateAngle(angle);

      const deg = ((angle * 180) / Math.PI + 360) % 360;
      const radiusM = 4.0;
      const speedV = 12.0;
      const acVal = (speedV * speedV) / radiusM;
      const omegaVal = speedV / radiusM;

      const txt = `θ = ${deg.toFixed(1)}° | v = 12 m/s, r = 4 m ⟹ ω = ${omegaVal.toFixed(1)} rad/s, a_c = ${acVal.toFixed(1)} m/s² (Inward)`;
      bText.text(txt);
      const textLen = bText.node()?.getComputedTextLength() || 260;
      let bx = Math.max(10, Math.min(w - textLen - 24, w / 2 - textLen / 2));
      let by = 15;
      bRect.attr("x", bx).attr("y", by).attr("width", textLen + 20).attr("height", 24);
      bText.attr("x", bx + 10).attr("y", by + 16);
    });
}

// ---------------------------------------------------------------------------
// Chart 18: NLM - Impulse Force-Time (F-t) Curve
// ---------------------------------------------------------------------------
function drawNLMImpulse(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (ms)", "Collision Force F (N)");

  const impulseData = d3.range(0, 10.1, 0.1).map((t) => {
    let fVal = 0;
    if (t >= 2 && t <= 8) {
      fVal = 85 * Math.sin(((t - 2) / 6) * Math.PI);
    }
    return { t, f: fVal };
  });

  const areaGen = d3
    .area<{ t: number; f: number }>()
    .x((d) => xScale(d.t))
    .y0(yScale(0))
    .y1((d) => yScale(d.f));

  g.append("path").datum(impulseData).attr("fill", "rgba(168, 85, 247, 0.2)").attr("d", areaGen);

  const lineGen = d3
    .line<{ t: number; f: number }>()
    .x((d) => xScale(d.t))
    .y((d) => yScale(d.f));

  g.append("path").datum(impulseData).attr("fill", "none").attr("stroke", "#c084fc").attr("stroke-width", 3.5).attr("d", lineGen);

  const fAvg = 54.1;
  g.append("line")
    .attr("x1", xScale(2))
    .attr("y1", yScale(fAvg))
    .attr("x2", xScale(8))
    .attr("y2", yScale(fAvg))
    .attr("stroke", "#fbbf24")
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "4 3");

  g.append("text")
    .attr("x", xScale(5))
    .attr("y", yScale(fAvg) - 8)
    .attr("fill", "#fbbf24")
    .attr("font-size", "10px")
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .text("F_avg = Δp / Δt");

  g.append("text")
    .attr("x", xScale(5))
    .attr("y", yScale(25))
    .attr("fill", "#c084fc")
    .attr("font-size", "11px")
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .text("Impulse J = ∫ F dt = Δp");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    let fVal = 0;
    if (t >= 2 && t <= 8) {
      fVal = 85 * Math.sin(((t - 2) / 6) * Math.PI);
    }
    return {
      xVal: t,
      yVal: fVal,
      label: `t = ${t.toFixed(1)}ms, F = ${fVal.toFixed(1)}N [Impulse Area = Δp]`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 19: NLM - Static vs Kinetic Friction Curve
// ---------------------------------------------------------------------------
function drawNLMFrictionCurve(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 70]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Applied Force F (N)", "Friction Force f (N)");

  const fsMax = 45;
  const fk = 32;

  g.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(fsMax))
    .attr("y2", yScale(fsMax))
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3.5);

  g.append("line")
    .attr("x1", xScale(fsMax))
    .attr("y1", yScale(fsMax))
    .attr("x2", xScale(fsMax))
    .attr("y2", yScale(fk))
    .attr("stroke", "#f43f5e")
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "3 3");

  g.append("line")
    .attr("x1", xScale(fsMax))
    .attr("y1", yScale(fk))
    .attr("x2", xScale(100))
    .attr("y2", yScale(fk))
    .attr("stroke", "#34d399")
    .attr("stroke-width", 3.5);

  g.append("circle").attr("cx", xScale(fsMax)).attr("cy", yScale(fsMax)).attr("r", 5).attr("fill", "#fbbf24");
  g.append("text").attr("x", xScale(fsMax)).attr("y", yScale(fsMax) - 8).attr("fill", "#fbbf24").attr("font-size", "10px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Limiting Friction: f_s(max) = μ_s N");

  g.append("text").attr("x", xScale(75)).attr("y", yScale(fk) - 8).attr("fill", "#34d399").attr("font-size", "10px").attr("font-weight", "600").attr("text-anchor", "middle").text("Kinetic Friction: f_k = μ_k N (const)");

  setupHoverTracker(g, w, h, xScale, yScale, (F) => {
    let fVal = F <= fsMax ? F : fk;
    let label = F <= fsMax ? `F = ${F.toFixed(1)}N, f = ${fVal.toFixed(1)}N (Static: Body at Rest)` : `F = ${F.toFixed(1)}N, f = ${fVal.toFixed(1)}N (Kinetic: Body Sliding)`;
    return { xVal: F, yVal: fVal, label };
  });
}

// ---------------------------------------------------------------------------
// Chart 20: WEP - Variable Work Integral F(x)
// ---------------------------------------------------------------------------
function drawWEPVariableWork(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 50]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Displacement x (m)", "Force F(x) (N)");

  const x1 = 2;
  const x2 = 8;
  const data = d3.range(0, 10.1, 0.1).map((x) => {
    const f = 10 + 30 * Math.sin((x / 10) * Math.PI);
    return { x, f };
  });

  const workData = data.filter((d) => d.x >= x1 && d.x <= x2);

  const areaGen = d3
    .area<{ x: number; f: number }>()
    .x((d) => xScale(d.x))
    .y0(yScale(0))
    .y1((d) => yScale(d.f));

  g.append("path").datum(workData).attr("fill", "rgba(52, 211, 153, 0.25)").attr("d", areaGen);

  const lineGen = d3
    .line<{ x: number; f: number }>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.f));

  g.append("path").datum(data).attr("fill", "none").attr("stroke", "#34d399").attr("stroke-width", 3).attr("d", lineGen);

  [x1, x2].forEach((xVal) => {
    const pt = data.find((d) => Math.abs(d.x - xVal) < 0.05);
    if (pt) {
      g.append("line")
        .attr("x1", xScale(xVal))
        .attr("y1", yScale(pt.f))
        .attr("x2", xScale(xVal))
        .attr("y2", yScale(0))
        .attr("stroke", "#71717a")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "3 3");
    }
  });

  g.append("text").attr("x", xScale(5)).attr("y", yScale(15)).attr("fill", "#34d399").attr("font-size", "11px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Work W = ∫ F(x) dx = ΔK");

  setupHoverTracker(g, w, h, xScale, yScale, (x) => {
    const fVal = 10 + 30 * Math.sin((x / 10) * Math.PI);
    return {
      xVal: x,
      yVal: fVal,
      label: `x = ${x.toFixed(1)}m, F(x) = ${fVal.toFixed(1)}N [Area = Work Done]`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 21: WEP - Power vs Time P(t)
// ---------------------------------------------------------------------------
function drawWEPPowerTime(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, w]);
  const yScale = d3.scaleLinear().domain([0, 80]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Time t (s)", "Instantaneous Power P (Watts)");

  const data = d3.range(0, 10.1, 0.1).map((t) => {
    const p = 65 * (1 - Math.exp(-t / 2.5));
    return { t, p };
  });

  const areaGen = d3
    .area<{ t: number; p: number }>()
    .x((d) => xScale(d.t))
    .y0(yScale(0))
    .y1((d) => yScale(d.p));

  g.append("path").datum(data).attr("fill", "rgba(251, 191, 36, 0.2)").attr("d", areaGen);

  const lineGen = d3
    .line<{ t: number; p: number }>()
    .x((d) => xScale(d.t))
    .y((d) => yScale(d.p));

  g.append("path").datum(data).attr("fill", "none").attr("stroke", "#fbbf24").attr("stroke-width", 3.5).attr("d", lineGen);

  g.append("text").attr("x", xScale(6)).attr("y", yScale(25)).attr("fill", "#fbbf24").attr("font-size", "11px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Energy Delivered = ∫ P(t) dt");

  setupHoverTracker(g, w, h, xScale, yScale, (t) => {
    const pVal = 65 * (1 - Math.exp(-t / 2.5));
    return {
      xVal: t,
      yVal: pVal,
      label: `t = ${t.toFixed(1)}s, P = ${pVal.toFixed(1)} W [Area = Energy]`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 22: Gravitation - Gravitational Potential V(r)
// ---------------------------------------------------------------------------
function drawGRVPotential(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number) {
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, w]);
  const yScale = d3.scaleLinear().domain([-15, 0]).range([h, 0]);

  addGridAndAxes(g, xScale, yScale, w, h, "Distance r / R", "Potential V(r) (×10⁷ J/kg)");

  const R = 1.0;
  const V0 = -12.0;

  const data = d3.range(R, 5.9, 0.05).map((r) => ({
    r,
    v: V0 / r,
  }));

  const lineGen = d3
    .line<{ r: number; v: number }>()
    .x((d) => xScale(d.r))
    .y((d) => yScale(d.v))
    .curve(d3.curveMonotoneX);

  g.append("path").datum(data).attr("fill", "none").attr("stroke", "#38bdf8").attr("stroke-width", 3.5).attr("d", lineGen);

  g.append("circle").attr("cx", xScale(R)).attr("cy", yScale(V0)).attr("r", 5).attr("fill", "#fbbf24");
  g.append("text").attr("x", xScale(R) + 8).attr("y", yScale(V0) + 4).attr("fill", "#fbbf24").attr("font-size", "10px").attr("font-weight", "bold").text("Surface: V(R) = -GM/R");

  g.append("text").attr("x", xScale(4.5)).attr("y", yScale(-1.5)).attr("fill", "#38bdf8").attr("font-size", "10px").attr("font-weight", "600").text("V(r) → 0 as r → ∞");

  setupHoverTracker(g, w, h, xScale, yScale, (r) => {
    const curR = Math.max(R, r);
    const vVal = V0 / curR;
    return {
      xVal: curR,
      yVal: vVal,
      label: `r = ${curR.toFixed(1)}R: V = ${vVal.toFixed(1)}×10⁷ J/kg`,
    };
  });
}

// ---------------------------------------------------------------------------
// Chart 23: Plane - Parallelogram Law Vector Addition
// ---------------------------------------------------------------------------
function drawPlaneParallelogram(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number, chartType: string) {
  const ox = 50;
  const oy = h - 35;
  const aLen = Math.min(w * 0.42, 210);
  const bLen = Math.min(w * 0.3, 140);
  const thetaDeg = 55;
  const thetaRad = (thetaDeg * Math.PI) / 180;

  const px = ox + aLen;
  const py = oy;

  const sx = ox + bLen * Math.cos(thetaRad);
  const sy = oy - bLen * Math.sin(thetaRad);

  const rx = px + bLen * Math.cos(thetaRad);
  const ry = sy;

  const nx = rx;
  const ny = oy;

  // Background subtle axes
  g.append("line").attr("x1", 20).attr("y1", oy).attr("x2", w - 20).attr("y2", oy).attr("stroke", "rgba(255,255,255,0.08)").attr("stroke-width", 1);
  g.append("line").attr("x1", ox).attr("y1", 20).attr("x2", ox).attr("y2", h - 10).attr("stroke", "rgba(255,255,255,0.08)").attr("stroke-width", 1);

  // Parallelogram body fill
  const polyPoints = `${ox},${oy} ${px},${py} ${rx},${ry} ${sx},${sy}`;
  g.append("polygon")
    .attr("points", polyPoints)
    .attr("fill", "rgba(56, 189, 248, 0.05)")
    .attr("stroke", "rgba(255, 255, 255, 0.15)")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "4 4");

  // Right-triangle Extension line PN
  g.append("line")
    .attr("x1", px)
    .attr("y1", py)
    .attr("x2", nx)
    .attr("y2", ny)
    .attr("stroke", "#fbbf24")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "3 3");

  // Vertical Perpendicular RN
  g.append("line")
    .attr("x1", rx)
    .attr("y1", ry)
    .attr("x2", nx)
    .attr("y2", ny)
    .attr("stroke", "#fbbf24")
    .attr("stroke-width", 2);

  // Right angle symbol at N
  const sq = 12;
  g.append("path")
    .attr("d", `M ${nx - sq} ${ny} L ${nx - sq} ${ny - sq} L ${nx} ${ny - sq}`)
    .attr("fill", "none")
    .attr("stroke", "#fbbf24")
    .attr("stroke-width", 1.5);

  // Vector A (Base: O -> P)
  g.append("line")
    .attr("x1", ox)
    .attr("y1", oy)
    .attr("x2", px - 4)
    .attr("y2", py)
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3.5)
    .attr("marker-end", `url(#arrow-cyan-${chartType})`);

  // Vector B (Side: O -> S)
  const bsLen = Math.sqrt((sx - ox) ** 2 + (sy - oy) ** 2);
  const bsDx = (sx - ox) / bsLen;
  const bsDy = (sy - oy) / bsLen;
  g.append("line")
    .attr("x1", ox)
    .attr("y1", oy)
    .attr("x2", sx - bsDx * 4)
    .attr("y2", sy - bsDy * 4)
    .attr("stroke", "#c084fc")
    .attr("stroke-width", 3.5)
    .attr("marker-end", `url(#arrow-purple-${chartType})`);

  // Resultant Vector R (Diagonal: O -> R)
  const rLen = Math.sqrt((rx - ox) ** 2 + (ry - oy) ** 2);
  const rDx = (rx - ox) / rLen;
  const rDy = (ry - oy) / rLen;
  g.append("line")
    .attr("x1", ox)
    .attr("y1", oy)
    .attr("x2", rx - rDx * 5)
    .attr("y2", ry - rDy * 5)
    .attr("stroke", "#34d399")
    .attr("stroke-width", 4)
    .attr("marker-end", `url(#arrow-emerald-${chartType})`);

  // Angle Arcs
  const arcTheta = d3.arc<any>().innerRadius(28).outerRadius(28).startAngle(Math.PI / 2).endAngle(Math.PI / 2 - thetaRad);
  g.append("path").attr("d", arcTheta({})).attr("transform", `translate(${ox},${oy})`).attr("fill", "none").attr("stroke", "#c084fc").attr("stroke-width", 2);
  g.append("text").attr("x", ox + 36).attr("y", oy - 14).attr("fill", "#c084fc").attr("font-size", "11px").attr("font-weight", "bold").text("θ");

  const betaRad = Math.atan2(oy - ry, rx - ox);
  const arcBeta = d3.arc<any>().innerRadius(44).outerRadius(44).startAngle(Math.PI / 2).endAngle(Math.PI / 2 - betaRad);
  g.append("path").attr("d", arcBeta({})).attr("transform", `translate(${ox},${oy})`).attr("fill", "none").attr("stroke", "#34d399").attr("stroke-width", 2);
  g.append("text").attr("x", ox + 52).attr("y", oy - 8).attr("fill", "#34d399").attr("font-size", "11px").attr("font-weight", "bold").text("β");

  const arcThetaP = d3.arc<any>().innerRadius(24).outerRadius(24).startAngle(Math.PI / 2).endAngle(Math.PI / 2 - thetaRad);
  g.append("path").attr("d", arcThetaP({})).attr("transform", `translate(${px},${py})`).attr("fill", "none").attr("stroke", "#fbbf24").attr("stroke-width", 1.5);
  g.append("text").attr("x", px + 28).attr("y", py - 10).attr("fill", "#fbbf24").attr("font-size", "10px").text("θ");

  // Point Circles
  const points = [
    { x: ox, y: oy, label: "O", color: "#ffffff" },
    { x: px, y: py, label: "P", color: "#38bdf8" },
    { x: sx, y: sy, label: "S", color: "#c084fc" },
    { x: rx, y: ry, label: "R", color: "#34d399" },
    { x: nx, y: ny, label: "N", color: "#fbbf24" },
  ];
  points.forEach((p) => {
    g.append("circle").attr("cx", p.x).attr("cy", p.y).attr("r", 4.5).attr("fill", p.color);
    g.append("text")
      .attr("x", p.x + (p.x === ox ? -12 : p.x === nx ? 8 : p.x === sx ? -12 : 8))
      .attr("y", p.y + (p.y >= oy ? 18 : -10))
      .attr("fill", p.color)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text(p.label);
  });

  // Vector Labels
  g.append("text").attr("x", ox + aLen / 2).attr("y", oy + 22).attr("fill", "#38bdf8").attr("font-size", "12px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Vector A (Base)");
  g.append("text").attr("x", ox + (sx - ox) / 2 - 16).attr("y", oy + (sy - oy) / 2).attr("fill", "#c084fc").attr("font-size", "12px").attr("font-weight", "bold").text("Vector B");
  g.append("text").attr("x", ox + (rx - ox) / 2).attr("y", oy + (ry - oy) / 2 - 12).attr("fill", "#34d399").attr("font-size", "13px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Resultant R = A + B");

  // Dimensions
  g.append("text").attr("x", px + (nx - px) / 2).attr("y", ny + 16).attr("fill", "#fbbf24").attr("font-size", "10px").attr("text-anchor", "middle").text("B cos θ");
  g.append("text").attr("x", nx + 10).attr("y", ry + (ny - ry) / 2).attr("fill", "#fbbf24").attr("font-size", "10px").text("B sin θ");

  // Hover telemetry
  const overlay = g.append("rect").attr("width", w).attr("height", h).attr("fill", "transparent").attr("pointer-events", "all");
  const badge = g.append("g").style("display", "none");
  const bRect = badge.append("rect").attr("rx", 6).attr("fill", "rgba(18, 18, 23, 0.92)").attr("stroke", "#34d399").attr("stroke-width", 1.5);
  const bText = badge.append("text").attr("fill", "#ffffff").attr("font-size", "11px").attr("font-family", "monospace");

  overlay
    .on("mouseenter", () => badge.style("display", null))
    .on("mouseleave", () => badge.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx] = d3.pointer(event, overlay.node());
      const frac = Math.max(0, Math.min(1, mx / w));
      const dynamicTheta = 30 + frac * 45;
      const thRad = (dynamicTheta * Math.PI) / 180;
      const magA = 10;
      const magB = 7;
      const magR = Math.sqrt(magA * magA + magB * magB + 2 * magA * magB * Math.cos(thRad));
      const bRad = Math.atan2(magB * Math.sin(thRad), magA + magB * Math.cos(thRad));
      const degB = (bRad * 180) / Math.PI;

      const txt = `θ = ${dynamicTheta.toFixed(1)}° | |A|=10, |B|=7 ⟹ Resultant |R| = ${magR.toFixed(2)} N, Direction β = ${degB.toFixed(1)}°`;
      bText.text(txt);
      const textLen = bText.node()?.getComputedTextLength() || 280;
      let bx = Math.max(10, Math.min(w - textLen - 24, mx - textLen / 2));
      let by = 15;
      bRect.attr("x", bx).attr("y", by).attr("width", textLen + 20).attr("height", 24);
      bText.attr("x", bx + 10).attr("y", by + 16);
    });
}

// ---------------------------------------------------------------------------
// Chart 24: Plane - Vector Resolution into Rectangular Components
// ---------------------------------------------------------------------------
function drawPlaneVectorResolution(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number, chartType: string) {
  const ox = 60;
  const oy = h - 45;
  const aLen = Math.min(w * 0.55, 230);
  const thetaDeg = 36.87;
  const thetaRad = (thetaDeg * Math.PI) / 180;

  const ax = aLen * Math.cos(thetaRad);
  const ay = aLen * Math.sin(thetaRad);
  const px = ox + ax;
  const py = oy - ay;

  // Axes
  g.append("line").attr("x1", ox - 20).attr("y1", oy).attr("x2", ox + aLen + 60).attr("y2", oy).attr("stroke", "#71717a").attr("stroke-width", 2);
  g.append("line").attr("x1", ox).attr("y1", oy + 20).attr("x2", ox).attr("y2", 20).attr("stroke", "#71717a").attr("stroke-width", 2);
  g.append("text").attr("x", ox + aLen + 50).attr("y", oy + 20).attr("fill", "#a1a1aa").attr("font-size", "12px").text("x");
  g.append("text").attr("x", ox - 18).attr("y", 25).attr("fill", "#a1a1aa").attr("font-size", "12px").text("y");

  // Projections
  g.append("line").attr("x1", px).attr("y1", py).attr("x2", px).attr("y2", oy).attr("stroke", "#71717a").attr("stroke-width", 1.5).attr("stroke-dasharray", "3 3");
  g.append("line").attr("x1", px).attr("y1", py).attr("x2", ox).attr("y2", py).attr("stroke", "#71717a").attr("stroke-width", 1.5).attr("stroke-dasharray", "3 3");

  // Component Vector Ax (cyan)
  g.append("line")
    .attr("x1", ox)
    .attr("y1", oy)
    .attr("x2", px - 4)
    .attr("y2", oy)
    .attr("stroke", "#38bdf8")
    .attr("stroke-width", 3.5)
    .attr("marker-end", `url(#arrow-cyan-${chartType})`);

  // Component Vector Ay (purple)
  g.append("line")
    .attr("x1", ox)
    .attr("y1", oy)
    .attr("x2", ox)
    .attr("y2", py + 4)
    .attr("stroke", "#c084fc")
    .attr("stroke-width", 3.5)
    .attr("marker-end", `url(#arrow-purple-${chartType})`);

  // Main Vector A (emerald)
  const vDx = (px - ox) / aLen;
  const vDy = (py - oy) / aLen;
  g.append("line")
    .attr("x1", ox)
    .attr("y1", oy)
    .attr("x2", px - vDx * 4)
    .attr("y2", py - vDy * 4)
    .attr("stroke", "#34d399")
    .attr("stroke-width", 4)
    .attr("marker-end", `url(#arrow-emerald-${chartType})`);

  // Angle Arc theta
  const arc = d3.arc<any>().innerRadius(32).outerRadius(32).startAngle(Math.PI / 2).endAngle(Math.PI / 2 - thetaRad);
  g.append("path").attr("d", arc({})).attr("transform", `translate(${ox},${oy})`).attr("fill", "none").attr("stroke", "#34d399").attr("stroke-width", 2);
  g.append("text").attr("x", ox + 42).attr("y", oy - 12).attr("fill", "#6ee7b7").attr("font-size", "12px").attr("font-weight", "bold").text("θ");

  // Point Markers
  g.append("circle").attr("cx", ox).attr("cy", oy).attr("r", 4).attr("fill", "#ffffff");
  g.append("circle").attr("cx", px).attr("cy", py).attr("r", 5).attr("fill", "#34d399");

  // Labels
  g.append("text").attr("x", ox + ax / 2).attr("y", oy + 24).attr("fill", "#38bdf8").attr("font-size", "12px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Ax = A cos θ");
  g.append("text").attr("x", ox - 12).attr("y", oy - ay / 2).attr("fill", "#c084fc").attr("font-size", "12px").attr("font-weight", "bold").attr("text-anchor", "end").text("Ay = A sin θ");
  g.append("text").attr("x", ox + ax / 2 + 10).attr("y", oy - ay / 2 - 12).attr("fill", "#34d399").attr("font-size", "14px").attr("font-weight", "bold").text("Vector A");

  // Interactive Hover
  const overlay = g.append("rect").attr("width", w).attr("height", h).attr("fill", "transparent").attr("pointer-events", "all");
  const badge = g.append("g").style("display", "none");
  const bRect = badge.append("rect").attr("rx", 6).attr("fill", "rgba(18, 18, 23, 0.92)").attr("stroke", "#38bdf8").attr("stroke-width", 1.5);
  const bText = badge.append("text").attr("fill", "#ffffff").attr("font-size", "11px").attr("font-family", "monospace");

  overlay
    .on("mouseenter", () => badge.style("display", null))
    .on("mouseleave", () => badge.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx] = d3.pointer(event, overlay.node());
      const frac = Math.max(0.1, Math.min(0.9, mx / w));
      const curAngleDeg = 15 + frac * 60;
      const curRad = (curAngleDeg * Math.PI) / 180;
      const mag = 10.0;
      const curAx = mag * Math.cos(curRad);
      const curAy = mag * Math.sin(curRad);

      const txt = `θ = ${curAngleDeg.toFixed(1)}°: |A| = 10 ⟹ Ax = ${curAx.toFixed(2)}î, Ay = ${curAy.toFixed(2)}ĵ | √(Ax²+Ay²) = ${mag.toFixed(1)}`;
      bText.text(txt);
      const textLen = bText.node()?.getComputedTextLength() || 260;
      let bx = Math.max(10, Math.min(w - textLen - 24, mx - textLen / 2));
      let by = 15;
      bRect.attr("x", bx).attr("y", by).attr("width", textLen + 20).attr("height", 24);
      bText.attr("x", bx + 10).attr("y", by + 16);
    });
}

// ---------------------------------------------------------------------------
// Chart 25: WEP - Work Done by Constant Force & Kinetic Energy Change
// ---------------------------------------------------------------------------
function drawWEPConstantForce(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number, chartType: string) {
  const groundY = h - 60;
  const x1 = 70;
  const x2 = Math.min(w - 90, 360);
  const bw = 54;
  const bh = 38;

  // Ground line
  g.append("line").attr("x1", 20).attr("y1", groundY).attr("x2", w - 20).attr("y2", groundY).attr("stroke", "#52525b").attr("stroke-width", 2);
  for (let x = 20; x < w - 20; x += 15) {
    g.append("line").attr("x1", x).attr("y1", groundY).attr("x2", x - 8).attr("y2", groundY + 8).attr("stroke", "#3f3f46").attr("stroke-width", 1);
  }

  // Position ticks xi and xf
  g.append("line").attr("x1", x1 + bw / 2).attr("y1", groundY).attr("x2", x1 + bw / 2).attr("y2", groundY + 12).attr("stroke", "#a1a1aa").attr("stroke-width", 1.5);
  g.append("line").attr("x1", x2 + bw / 2).attr("y1", groundY).attr("x2", x2 + bw / 2).attr("y2", groundY + 12).attr("stroke", "#a1a1aa").attr("stroke-width", 1.5);
  g.append("text").attr("x", x1 + bw / 2).attr("y", groundY + 26).attr("fill", "#a1a1aa").attr("font-size", "11px").attr("font-family", "monospace").attr("text-anchor", "middle").text("x_i");
  g.append("text").attr("x", x2 + bw / 2).attr("y", groundY + 26).attr("fill", "#a1a1aa").attr("font-size", "11px").attr("font-family", "monospace").attr("text-anchor", "middle").text("x_f");

  // Displacement dimension line below
  g.append("line").attr("x1", x1 + bw / 2).attr("y1", groundY + 36).attr("x2", x2 + bw / 2).attr("y2", groundY + 36).attr("stroke", "#fbbf24").attr("stroke-width", 1.5);
  g.append("circle").attr("cx", x1 + bw / 2).attr("cy", groundY + 36).attr("r", 2.5).attr("fill", "#fbbf24");
  g.append("circle").attr("cx", x2 + bw / 2).attr("cy", groundY + 36).attr("r", 2.5).attr("fill", "#fbbf24");
  g.append("text").attr("x", (x1 + x2 + bw) / 2).attr("y", groundY + 50).attr("fill", "#fbbf24").attr("font-size", "11px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Displacement s = x_f - x_i");

  // Initial State Block
  g.append("rect").attr("x", x1).attr("y", groundY - bh).attr("width", bw).attr("height", bh).attr("rx", 6).attr("fill", "rgba(56, 189, 248, 0.15)").attr("stroke", "#38bdf8").attr("stroke-width", 2);
  g.append("text").attr("x", x1 + bw / 2).attr("y", groundY - bh / 2 + 5).attr("fill", "#ffffff").attr("font-size", "13px").attr("font-weight", "bold").attr("text-anchor", "middle").text("m");

  // Constant Force Arrow F on block
  g.append("line").attr("x1", x1 + bw).attr("y1", groundY - bh / 2).attr("x2", x1 + bw + 45).attr("y2", groundY - bh / 2).attr("stroke", "#f43f5e").attr("stroke-width", 3).attr("marker-end", `url(#arrow-rose-${chartType})`);
  g.append("text").attr("x", x1 + bw + 24).attr("y", groundY - bh / 2 - 8).attr("fill", "#f43f5e").attr("font-size", "11px").attr("font-weight", "bold").text("F (const)");

  // Initial velocity arrow u
  g.append("line").attr("x1", x1 + bw / 2).attr("y1", groundY - bh - 12).attr("x2", x1 + bw / 2 + 35).attr("y2", groundY - bh - 12).attr("stroke", "#38bdf8").attr("stroke-width", 2.5).attr("marker-end", `url(#arrow-cyan-${chartType})`);
  g.append("text").attr("x", x1 + bw / 2 + 18).attr("y", groundY - bh - 18).attr("fill", "#38bdf8").attr("font-size", "11px").attr("font-weight", "bold").text("u");

  // Final State Block
  g.append("rect").attr("x", x2).attr("y", groundY - bh).attr("width", bw).attr("height", bh).attr("rx", 6).attr("fill", "rgba(52, 211, 153, 0.2)").attr("stroke", "#34d399").attr("stroke-width", 2);
  g.append("text").attr("x", x2 + bw / 2).attr("y", groundY - bh / 2 + 5).attr("fill", "#ffffff").attr("font-size", "13px").attr("font-weight", "bold").attr("text-anchor", "middle").text("m");

  // Final accelerated velocity arrow v
  g.append("line").attr("x1", x2 + bw / 2).attr("y1", groundY - bh - 12).attr("x2", x2 + bw / 2 + 65).attr("y2", groundY - bh - 12).attr("stroke", "#34d399").attr("stroke-width", 3).attr("marker-end", `url(#arrow-emerald-${chartType})`);
  g.append("text").attr("x", x2 + bw / 2 + 32).attr("y", groundY - bh - 18).attr("fill", "#34d399").attr("font-size", "12px").attr("font-weight", "bold").text("v > u");

  // Central Equation Callout
  g.append("text").attr("x", w / 2).attr("y", 28).attr("fill", "#f4f4f5").attr("font-size", "13px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Work Done W = F · s = ½mv² - ½mu² = ΔK");

  // Hover telemetry
  const overlay = g.append("rect").attr("width", w).attr("height", h).attr("fill", "transparent").attr("pointer-events", "all");
  const badge = g.append("g").style("display", "none");
  const bRect = badge.append("rect").attr("rx", 6).attr("fill", "rgba(18, 18, 23, 0.92)").attr("stroke", "#fbbf24").attr("stroke-width", 1.5);
  const bText = badge.append("text").attr("fill", "#ffffff").attr("font-size", "11px").attr("font-family", "monospace");

  overlay
    .on("mouseenter", () => badge.style("display", null))
    .on("mouseleave", () => badge.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx] = d3.pointer(event, overlay.node());
      const sFrac = Math.max(0, Math.min(1, (mx - x1) / (x2 - x1)));
      const sMeters = sFrac * 10;
      const FNewtons = 25;
      const workJ = FNewtons * sMeters;
      const mKg = 2.0;
      const uMs = 3.0;
      const vMs = Math.sqrt(uMs * uMs + (2 * FNewtons * sMeters) / mKg);

      const txt = `Displacement s = ${sMeters.toFixed(1)}m | F = 25N ⟹ Work W = ${workJ.toFixed(1)}J | Velocity v = ${vMs.toFixed(2)}m/s, ΔK = ${workJ.toFixed(1)}J`;
      bText.text(txt);
      const textLen = bText.node()?.getComputedTextLength() || 280;
      let bx = Math.max(10, Math.min(w - textLen - 24, mx - textLen / 2));
      let by = groundY - bh - 44;
      bRect.attr("x", bx).attr("y", by).attr("width", textLen + 20).attr("height", 24);
      bText.attr("x", bx + 10).attr("y", by + 16);
    });
}

// ---------------------------------------------------------------------------
// Chart 26: Plane - Horizontal Projectile from Height h
// ---------------------------------------------------------------------------
function drawPlaneHorizontalProjectile(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number, chartType: string) {
  const towerX = 60;
  const towerW = 40;
  const groundY = h - 45;
  const towerTopY = 60;
  const landingX = Math.min(w - 60, 380);

  // Ground line
  g.append("line").attr("x1", 20).attr("y1", groundY).attr("x2", w - 20).attr("y2", groundY).attr("stroke", "#71717a").attr("stroke-width", 2);

  // Tower rectangle
  g.append("rect").attr("x", towerX).attr("y", towerTopY).attr("width", towerW).attr("height", groundY - towerTopY).attr("fill", "rgba(255,255,255,0.05)").attr("stroke", "#71717a").attr("stroke-width", 1.5);
  g.append("text").attr("x", towerX - 16).attr("y", (towerTopY + groundY) / 2).attr("fill", "#a1a1aa").attr("font-size", "12px").attr("font-weight", "bold").text("h");

  // Launch vector u (cyan)
  const launchX = towerX + towerW;
  g.append("line").attr("x1", launchX).attr("y1", towerTopY).attr("x2", launchX + 55).attr("y2", towerTopY).attr("stroke", "#38bdf8").attr("stroke-width", 3).attr("marker-end", `url(#arrow-cyan-${chartType})`);
  g.append("text").attr("x", launchX + 28).attr("y", towerTopY - 10).attr("fill", "#38bdf8").attr("font-size", "12px").attr("font-weight", "bold").text("u (Horiz.)");

  // Parabolic path
  const trajPoints: [number, number][] = [];
  const dx = landingX - launchX;
  const dy = groundY - towerTopY;
  for (let x = launchX; x <= landingX; x += 3) {
    const normX = (x - launchX) / dx;
    const y = towerTopY + dy * normX * normX;
    trajPoints.push([x, y]);
  }

  const lineGen = d3.line<[number, number]>().x((d) => d[0]).y((d) => d[1]);
  g.append("path").datum(trajPoints).attr("fill", "none").attr("stroke", "#fbbf24").attr("stroke-width", 3).attr("d", lineGen);

  // Impact Point
  g.append("circle").attr("cx", landingX).attr("cy", groundY).attr("r", 5).attr("fill", "#ffffff");
  g.append("text").attr("x", landingX + 10).attr("y", groundY - 8).attr("fill", "#ffffff").attr("font-size", "11px").attr("font-weight", "bold").text("Impact Point");

  // Striking velocity components
  g.append("line").attr("x1", landingX).attr("y1", groundY).attr("x2", landingX + 35).attr("y2", groundY).attr("stroke", "#38bdf8").attr("stroke-width", 2).attr("marker-end", `url(#arrow-cyan-${chartType})`);
  g.append("line").attr("x1", landingX).attr("y1", groundY).attr("x2", landingX).attr("y2", groundY + 35).attr("stroke", "#f43f5e").attr("stroke-width", 2).attr("marker-end", `url(#arrow-rose-${chartType})`);
  g.append("text").attr("x", landingX + 40).attr("y", groundY + 4).attr("fill", "#38bdf8").attr("font-size", "10px").text("v_x = u");
  g.append("text").attr("x", landingX - 60).attr("y", groundY + 28).attr("fill", "#f43f5e").attr("font-size", "10px").text("v_y = √(2gh)");

  // Range line R
  g.append("line").attr("x1", launchX).attr("y1", groundY + 18).attr("x2", landingX).attr("y2", groundY + 18).attr("stroke", "#34d399").attr("stroke-width", 1.5).attr("stroke-dasharray", "3 3");
  g.append("text").attr("x", (launchX + landingX) / 2).attr("y", groundY + 32).attr("fill", "#34d399").attr("font-size", "11px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Range R = u√(2h/g)");

  // Hover telemetry
  const overlay = g.append("rect").attr("width", w).attr("height", h).attr("fill", "transparent").attr("pointer-events", "all");
  const badge = g.append("g").style("display", "none");
  const bRect = badge.append("rect").attr("rx", 6).attr("fill", "rgba(18, 18, 23, 0.92)").attr("stroke", "#fbbf24").attr("stroke-width", 1.5);
  const bText = badge.append("text").attr("fill", "#ffffff").attr("font-size", "11px").attr("font-family", "monospace");

  overlay
    .on("mouseenter", () => badge.style("display", null))
    .on("mouseleave", () => badge.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx] = d3.pointer(event, overlay.node());
      const curX = Math.max(launchX, Math.min(landingX, mx));
      const frac = (curX - launchX) / dx;
      const uSpeed = 20;
      const hHeight = 45;
      const gVal = 9.8;
      const t = frac * Math.sqrt((2 * hHeight) / gVal);
      const vy = gVal * t;
      const vNet = Math.sqrt(uSpeed * uSpeed + vy * vy);

      const txt = `t = ${t.toFixed(2)}s | x = ${(uSpeed * t).toFixed(1)}m, y = ${(0.5 * gVal * t * t).toFixed(1)}m | v_x = 20m/s, v_y = ${vy.toFixed(1)}m/s ⟹ Speed v = ${vNet.toFixed(1)}m/s`;
      bText.text(txt);
      const textLen = bText.node()?.getComputedTextLength() || 280;
      let bx = Math.max(10, Math.min(w - textLen - 24, mx - textLen / 2));
      let by = 20;
      bRect.attr("x", bx).attr("y", by).attr("width", textLen + 20).attr("height", 24);
      bText.attr("x", bx + 10).attr("y", by + 16);
    });
}

// ---------------------------------------------------------------------------
// Chart 27: WEP - Potential Energy Curve & Mechanical Equilibrium
// ---------------------------------------------------------------------------
function drawWEPPotentialEquilibrium(g: d3.Selection<SVGGElement, unknown, null, undefined>, w: number, h: number, chartType: string) {
  const xScale = d3.scaleLinear().domain([0, 10]).range([50, w - 30]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([h - 40, 30]);

  // Axes
  g.append("line").attr("x1", 40).attr("y1", h - 40).attr("x2", w - 20).attr("y2", h - 40).attr("stroke", "#71717a").attr("stroke-width", 2);
  g.append("line").attr("x1", 50).attr("y1", h - 30).attr("x2", 50).attr("y2", 20).attr("stroke", "#71717a").attr("stroke-width", 2);
  g.append("text").attr("x", w - 15).attr("y", h - 35).attr("fill", "#a1a1aa").attr("font-size", "11px").text("x");
  g.append("text").attr("x", 40).attr("y", 16).attr("fill", "#a1a1aa").attr("font-size", "11px").text("U(x)");

  const curveData = d3.range(1, 9.8, 0.1).map((x) => {
    let u = 0;
    if (x <= 5) {
      u = 25 + 15 * Math.pow(x - 3, 2);
    } else if (x <= 8) {
      u = 75 - 12 * Math.pow(x - 6.5, 2);
    } else {
      u = 58;
    }
    return { x, u: Math.max(10, Math.min(90, u)) };
  });

  const lineGen = d3.line<{ x: number; u: number }>().x((d) => xScale(d.x)).y((d) => yScale(d.u)).curve(d3.curveMonotoneX);
  g.append("path").datum(curveData).attr("fill", "none").attr("stroke", "#38bdf8").attr("stroke-width", 3.5).attr("d", lineGen);

  // Point 1: Stable Equilibrium (x=3)
  const x1 = 3;
  const y1 = 25;
  g.append("circle").attr("cx", xScale(x1)).attr("cy", yScale(y1)).attr("r", 5).attr("fill", "#34d399");
  g.append("line").attr("x1", xScale(x1)).attr("y1", yScale(y1)).attr("x2", xScale(x1)).attr("y2", h - 40).attr("stroke", "#71717a").attr("stroke-dasharray", "3 3");
  g.append("text").attr("x", xScale(x1)).attr("y", yScale(y1) + 20).attr("fill", "#34d399").attr("font-size", "10px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Stable (x₁)");
  g.append("text").attr("x", xScale(x1)).attr("y", h - 45).attr("fill", "#34d399").attr("font-size", "9px").attr("text-anchor", "middle").text("d²U/dx² > 0");

  // Point 2: Unstable Equilibrium (x=6.5)
  const x2 = 6.5;
  const y2 = 75;
  g.append("circle").attr("cx", xScale(x2)).attr("cy", yScale(y2)).attr("r", 5).attr("fill", "#f43f5e");
  g.append("line").attr("x1", xScale(x2)).attr("y1", yScale(y2)).attr("x2", xScale(x2)).attr("y2", h - 40).attr("stroke", "#71717a").attr("stroke-dasharray", "3 3");
  g.append("text").attr("x", xScale(x2)).attr("y", yScale(y2) - 10).attr("fill", "#f43f5e").attr("font-size", "10px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Unstable (x₂)");
  g.append("text").attr("x", xScale(x2)).attr("y", h - 45).attr("fill", "#f43f5e").attr("font-size", "9px").attr("text-anchor", "middle").text("d²U/dx² < 0");

  // Point 3: Neutral Equilibrium (x=9)
  const x3 = 9;
  const y3 = 58;
  g.append("circle").attr("cx", xScale(x3)).attr("cy", yScale(y3)).attr("r", 5).attr("fill", "#fbbf24");
  g.append("text").attr("x", xScale(x3)).attr("y", yScale(y3) - 10).attr("fill", "#fbbf24").attr("font-size", "10px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Neutral (x₃)");
  g.append("text").attr("x", xScale(x3)).attr("y", h - 45).attr("fill", "#fbbf24").attr("font-size", "9px").attr("text-anchor", "middle").text("d²U/dx² = 0");

  // Top Formula badge
  g.append("text").attr("x", w / 2).attr("y", 20).attr("fill", "#ffffff").attr("font-size", "12px").attr("font-weight", "bold").attr("text-anchor", "middle").text("Conservative Force: F(x) = - dU/dx (Negative Slope)");

  // Hover telemetry
  const overlay = g.append("rect").attr("width", w).attr("height", h).attr("fill", "transparent").attr("pointer-events", "all");
  const badge = g.append("g").style("display", "none");
  const bRect = badge.append("rect").attr("rx", 6).attr("fill", "rgba(18, 18, 23, 0.92)").attr("stroke", "#38bdf8").attr("stroke-width", 1.5);
  const bText = badge.append("text").attr("fill", "#ffffff").attr("font-size", "11px").attr("font-family", "monospace");

  overlay
    .on("mouseenter", () => badge.style("display", null))
    .on("mouseleave", () => badge.style("display", "none"))
    .on("mousemove", (event) => {
      const [mx] = d3.pointer(event, overlay.node());
      const curX = xScale.invert(Math.max(xScale(1), Math.min(xScale(9.5), mx)));
      let curU = 0;
      let curForce = 0;
      let state = "";
      if (curX <= 5) {
        curU = 25 + 15 * Math.pow(curX - 3, 2);
        curForce = -30 * (curX - 3);
        state = curX < 3 ? "Restoring Force F > 0 (points right)" : curX > 3 ? "Restoring Force F < 0 (points left)" : "Stable Equilibrium (F=0)";
      } else if (curX <= 8) {
        curU = 75 - 12 * Math.pow(curX - 6.5, 2);
        curForce = 24 * (curX - 6.5);
        state = curX < 6.5 ? "Repelling Force F < 0 (points left)" : curX > 6.5 ? "Repelling Force F > 0 (points right)" : "Unstable Equilibrium (F=0)";
      } else {
        curU = 58;
        curForce = 0;
        state = "Neutral Equilibrium (Flat: F=0 everywhere)";
      }

      const txt = `x = ${curX.toFixed(2)}m: U = ${curU.toFixed(1)}J, Force F = ${curForce.toFixed(1)}N | ${state}`;
      bText.text(txt);
      const textLen = bText.node()?.getComputedTextLength() || 280;
      let bx = Math.max(10, Math.min(w - textLen - 24, mx - textLen / 2));
      let by = 35;
      bRect.attr("x", bx).attr("y", by).attr("width", textLen + 20).attr("height", 24);
      bText.attr("x", bx + 10).attr("y", by + 16);
    });
}

