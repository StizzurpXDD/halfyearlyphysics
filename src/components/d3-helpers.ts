import * as d3 from "d3";

export function addGridAndAxes(
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

export function setupHoverTracker(
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
