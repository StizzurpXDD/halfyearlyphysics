const fs = require('fs');

let content = fs.readFileSync('NLM.md', 'utf8');

// Unescape markdown
content = content
  .replace(/\\#/g, '#')
  .replace(/\\\*/g, '*')
  .replace(/\\---/g, '---')
  .replace(/\\\|/g, '|')
  .replace(/\\_/g, '_')
  .replace(/\\&/g, '&')
  .replace(/&#x20;/g, ' ')
  .replace(/\\\[/g, '[')
  .replace(/\\\]/g, ']');

// Helper markers defs
const markersDef = `
    <defs>
      <marker id="arrRose_nlm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#f43f5e"/>
      </marker>
      <marker id="arrEmerald_nlm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#34d399"/>
      </marker>
      <marker id="arrCyan_nlm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrAmber_nlm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
      </marker>
      <marker id="arrPurple_nlm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#a855f7"/>
      </marker>
      <linearGradient id="rocketExhaust_nlm" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.9"/>
        <stop offset="60%" stop-color="#ef4444" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#dc2626" stop-opacity="0.0"/>
      </linearGradient>
    </defs>`;

// 1. Rocket
const svgRocket = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Variable-Mass Rocket Propulsion Dynamics</div>
  <svg viewBox="0 0 460 280" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <line x1="230" y1="80" x2="230" y2="15" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_nlm)"/>
    <text x="245" y="25" fill="#38bdf8" font-size="13" font-weight="700">v (Instantaneous Velocity)</text>

    <line x1="300" y1="120" x2="300" y2="50" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_nlm)"/>
    <text x="310" y="60" fill="#34d399" font-size="12" font-weight="600">F_thrust = u_rel (-dm/dt)</text>

    <path d="M 230 50 L 205 90 L 205 180 L 255 180 L 255 90 Z" fill="rgba(255,255,255,0.06)" stroke="#ffffff" stroke-width="2"/>
    <path d="M 230 40 L 205 90 L 255 90 Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <polygon points="205,150 185,180 205,180" fill="#a855f7"/>
    <polygon points="255,150 275,180 255,180" fill="#a855f7"/>
    <text x="230" y="140" fill="#ffffff" font-size="13" font-weight="600" text-anchor="middle">m(t)</text>

    <path d="M 215 180 Q 230 260 220 275 Q 230 260 245 275 Q 235 250 245 180 Z" fill="url(#rocketExhaust_nlm)"/>
    <line x1="230" y1="200" x2="230" y2="265" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="260" y="235" fill="#f59e0b" font-size="12" font-weight="600">u_rel (Exhaust speed)</text>
    <text x="120" y="235" fill="#f87171" font-size="11" text-anchor="middle">Ejection: -dm/dt</text>
  </svg>
</div>`;

// 2. Elevator
const svgElevator = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Apparent Weight & Normal Reaction in an Elevator</div>
  <svg viewBox="0 0 520 230" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <rect x="50" y="25" width="160" height="185" rx="10" fill="rgba(255,255,255,0.02)" stroke="#71717a" stroke-width="2"/>
    <line x1="130" y1="0" x2="130" y2="25" stroke="#71717a" stroke-width="3"/>
    <rect x="80" y="180" width="100" height="12" rx="3" fill="#27272a" stroke="#38bdf8" stroke-width="1.5"/>

    <rect x="105" y="115" width="50" height="65" rx="6" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="130" y="152" fill="#ffffff" font-size="14" font-weight="600" text-anchor="middle">m</text>

    <line x1="130" y1="115" x2="130" y2="55" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_nlm)"/>
    <text x="145" y="65" fill="#34d399" font-size="13" font-weight="700">R (Normal Reaction)</text>

    <line x1="130" y1="180" x2="130" y2="225" stroke="#ef4444" stroke-width="3"/>
    <text x="145" y="220" fill="#ef4444" font-size="13" font-weight="700">W = mg</text>

    <line x1="250" y1="140" x2="250" y2="60" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrAmber_nlm)"/>
    <text x="265" y="70" fill="#f59e0b" font-size="13" font-weight="700">a (Upward)</text>

    <text x="250" y="125" fill="#a1a1aa" font-size="12">Net Force: R - mg = ma</text>
    <text x="250" y="150" fill="#34d399" font-size="13" font-weight="700">R = m(g + a)  [Heavier]</text>
    <text x="250" y="175" fill="#a1a1aa" font-size="12">Accelerating Downward:</text>
    <text x="250" y="195" fill="#38bdf8" font-size="13" font-weight="700">R = m(g - a)  [Lighter]</text>
  </svg>
</div>`;

// 3. Lami
const svgLami = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Lami’s Theorem & Concurrent Forces Equilibrium</div>
  <svg viewBox="0 0 520 240" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <circle cx="160" cy="130" r="5" fill="#ffffff"/>
    <text x="145" y="145" fill="#ffffff" font-size="13" font-weight="700">O</text>

    <line x1="160" y1="130" x2="160" y2="25" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_nlm)"/>
    <text x="170" y="35" fill="#38bdf8" font-size="14" font-weight="700">F₁</text>

    <line x1="160" y1="130" x2="250" y2="200" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_nlm)"/>
    <text x="260" y="210" fill="#34d399" font-size="14" font-weight="700">F₂</text>

    <line x1="160" y1="130" x2="60" y2="190" stroke="#a855f7" stroke-width="3" marker-end="url(#arrPurple_nlm)"/>
    <text x="45" y="200" fill="#c084fc" font-size="14" font-weight="700">F₃</text>

    <path d="M 190 155 A 40 40 0 0 1 125 150" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="155" y="180" fill="#fbbf24" font-size="13" font-weight="600">α</text>

    <path d="M 140 100 A 40 40 0 0 1 160 85" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="120" y="85" fill="#fbbf24" font-size="13" font-weight="600">β</text>

    <path d="M 160 85 A 40 40 0 0 1 185 110" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="180" y="90" fill="#fbbf24" font-size="13" font-weight="600">γ</text>

    <rect x="320" y="60" width="180" height="110" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <text x="410" y="95" fill="#ffffff" font-size="13" font-weight="600" text-anchor="middle">Equilibrium Condition:</text>
    <text x="410" y="125" fill="#38bdf8" font-size="13" font-family="monospace" text-anchor="middle">F₁ / sin α =</text>
    <text x="410" y="145" fill="#34d399" font-size="13" font-family="monospace" text-anchor="middle">F₂ / sin β =</text>
    <text x="410" y="165" fill="#c084fc" font-size="13" font-family="monospace" text-anchor="middle">F₃ / sin γ</text>
  </svg>
</div>`;

// 4. Angle of Friction
const svgFriction = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Angle of Friction (λ) & Resultant Contact Force</div>
  <svg viewBox="0 0 460 250" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <line x1="30" y1="180" x2="430" y2="180" stroke="#71717a" stroke-width="2"/>
    <rect x="180" y="110" width="80" height="70" rx="6" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2"/>
    <text x="220" y="150" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">m</text>

    <line x1="220" y1="110" x2="220" y2="40" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_nlm)"/>
    <text x="235" y="50" fill="#38bdf8" font-size="13" font-weight="700">R (Normal)</text>

    <line x1="220" y1="180" x2="220" y2="235" stroke="#ef4444" stroke-width="2.5"/>
    <text x="235" y="225" fill="#ef4444" font-size="13">mg</text>

    <line x1="180" y1="180" x2="90" y2="180" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrRose_nlm)"/>
    <text x="130" y="170" fill="#fb7185" font-size="12" font-weight="600" text-anchor="middle">f_s = μ_s R</text>

    <line x1="260" y1="145" x2="350" y2="145" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_nlm)"/>
    <text x="360" y="150" fill="#34d399" font-size="13" font-weight="700">P (Applied)</text>

    <line x1="220" y1="180" x2="135" y2="70" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrAmber_nlm)"/>
    <text x="110" y="65" fill="#fbbf24" font-size="14" font-weight="700">S (Resultant)</text>

    <path d="M 220 135 A 45 45 0 0 0 190 142" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="200" y="125" fill="#fbbf24" font-size="13" font-weight="600">λ</text>
  </svg>
</div>`;

// 5. Angle of Repose
const svgRepose = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Angle of Repose (α) & Rough Incline Force Resolution</div>
  <svg viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <polygon points="60,220 440,220 60,60" fill="rgba(255,255,255,0.03)" stroke="#71717a" stroke-width="2"/>
    <path d="M 390 220 A 50 50 0 0 0 405 205" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="375" y="212" fill="#fbbf24" font-size="14" font-weight="700">α</text>

    <g transform="translate(230, 132) rotate(-23)">
      <rect x="-35" y="-25" width="70" height="50" rx="5" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
      <text x="0" y="6" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">m</text>

      <line x1="0" y1="-25" x2="0" y2="-90" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_nlm)"/>
      <text x="15" y="-80" fill="#38bdf8" font-size="12" font-weight="700">N</text>

      <line x1="-35" y1="0" x2="-95" y2="0" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrRose_nlm)"/>
      <text x="-95" y="-12" fill="#fb7185" font-size="11" font-weight="600">f_s = μ N</text>

      <line x1="35" y1="0" x2="95" y2="0" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_nlm)"/>
      <text x="45" y="-12" fill="#6ee7b7" font-size="11" font-weight="600">mg sin α</text>

      <line x1="0" y1="25" x2="0" y2="85" stroke="#a855f7" stroke-width="2.5"/>
      <text x="12" y="80" fill="#c084fc" font-size="11">mg cos α</text>
    </g>

    <line x1="230" y1="132" x2="230" y2="215" stroke="#ef4444" stroke-width="2.5"/>
    <text x="240" y="205" fill="#ef4444" font-size="13" font-weight="700">W = mg</text>
  </svg>
</div>`;

// 6. Atwood Machine
const svgAtwood = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Atwood Machine Dynamics (Connected Masses over Ideal Pulley)</div>
  <svg viewBox="0 0 460 260" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <line x1="150" y1="20" x2="250" y2="20" stroke="#71717a" stroke-width="3"/>
    <line x1="200" y1="20" x2="200" y2="50" stroke="#71717a" stroke-width="2"/>

    <circle cx="200" cy="70" r="24" fill="#18181b" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="200" cy="70" r="4" fill="#ffffff"/>

    <line x1="176" y1="70" x2="176" y2="135" stroke="#ffffff" stroke-width="2"/>
    <line x1="224" y1="70" x2="224" y2="165" stroke="#ffffff" stroke-width="2"/>

    <rect x="204" y="165" width="40" height="45" rx="4" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
    <text x="224" y="192" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">m₁</text>

    <rect x="156" y="135" width="40" height="35" rx="4" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="176" y="157" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">m₂</text>

    <line x1="176" y1="130" x2="176" y2="100" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="160" y="115" fill="#34d399" font-size="12" font-weight="600">T</text>
    <line x1="224" y1="160" x2="224" y2="130" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="235" y="145" fill="#34d399" font-size="12" font-weight="600">T</text>

    <line x1="176" y1="170" x2="176" y2="210" stroke="#ef4444" stroke-width="2"/>
    <text x="155" y="215" fill="#ef4444" font-size="11">m₂g</text>
    <line x1="224" y1="210" x2="224" y2="250" stroke="#ef4444" stroke-width="2.5"/>
    <text x="235" y="245" fill="#ef4444" font-size="12" font-weight="700">m₁g</text>

    <line x1="140" y1="160" x2="140" y2="120" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrAmber_nlm)"/>
    <text x="125" y="140" fill="#f59e0b" font-size="12" font-weight="700">a ↑</text>
    <line x1="260" y1="170" x2="260" y2="210" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrAmber_nlm)"/>
    <text x="270" y="195" fill="#f59e0b" font-size="12" font-weight="700">a ↓</text>
  </svg>
</div>`;

// 7. Flat Road
const svgFlatRoad = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Vehicle on a Flat Unbanked Circular Track</div>
  <svg viewBox="0 0 460 210" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <line x1="40" y1="160" x2="420" y2="160" stroke="#71717a" stroke-width="2"/>
    <rect x="220" y="90" width="80" height="55" rx="8" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="235" cy="150" r="10" fill="#27272a" stroke="#71717a" stroke-width="2"/>
    <circle cx="285" cy="150" r="10" fill="#27272a" stroke="#71717a" stroke-width="2"/>
    <text x="260" y="125" fill="#ffffff" font-size="13" font-weight="600" text-anchor="middle">Car (m)</text>

    <line x1="260" y1="90" x2="260" y2="30" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_nlm)"/>
    <text x="275" y="40" fill="#38bdf8" font-size="13" font-weight="700">R = mg</text>

    <line x1="260" y1="145" x2="260" y2="200" stroke="#ef4444" stroke-width="2.5"/>
    <text x="275" y="195" fill="#ef4444" font-size="13">W = mg</text>

    <line x1="220" y1="150" x2="110" y2="150" stroke="#34d399" stroke-width="3.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="165" y="140" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">f_s (Inward Friction)</text>

    <text x="90" y="175" fill="#fbbf24" font-size="11" text-anchor="middle">Center of Curve</text>
    <circle cx="90" cy="150" r="4" fill="#fbbf24"/>
  </svg>
</div>`;

// 8. Banked Road
const svgBanked = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Dynamics of a Banked Circular Track</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <polygon points="50,210 440,210 50,70" fill="rgba(255,255,255,0.03)" stroke="#71717a" stroke-width="2"/>
    <path d="M 390 210 A 50 50 0 0 0 405 195" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="375" y="202" fill="#fbbf24" font-size="14" font-weight="700">θ</text>

    <g transform="translate(220, 130) rotate(-20)">
      <rect x="-35" y="-20" width="70" height="40" rx="6" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
      <text x="0" y="5" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle">m</text>

      <line x1="0" y1="-20" x2="0" y2="-90" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_nlm)"/>
      <text x="10" y="-80" fill="#38bdf8" font-size="12" font-weight="700">N</text>

      <line x1="35" y1="0" x2="85" y2="0" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrRose_nlm)"/>
      <text x="60" y="-10" fill="#fb7185" font-size="11" font-weight="600">f</text>
    </g>

    <line x1="220" y1="130" x2="220" y2="40" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="230" y="50" fill="#34d399" font-size="12" font-weight="600">N cos θ</text>

    <line x1="220" y1="130" x2="130" y2="130" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="145" y="120" fill="#34d399" font-size="11" font-weight="600">N sin θ</text>

    <line x1="220" y1="130" x2="220" y2="210" stroke="#ef4444" stroke-width="2.5"/>
    <text x="230" y="205" fill="#ef4444" font-size="12" font-weight="700">mg</text>
  </svg>
</div>`;

// 9. Cyclist
const svgCyclist = `<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Bending of a Cyclist Negotiating a Curve</div>
  <svg viewBox="0 0 460 250" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    ${markersDef}
    <line x1="40" y1="210" x2="420" y2="210" stroke="#71717a" stroke-width="2"/>
    <circle cx="250" cy="210" r="5" fill="#ffffff"/>
    <text x="260" y="225" fill="#ffffff" font-size="12">Ground Contact</text>

    <line x1="250" y1="210" x2="170" y2="70" stroke="#ffffff" stroke-width="3" stroke-dasharray="4 4"/>
    <circle cx="170" cy="70" r="14" fill="#a855f7"/>
    <text x="145" y="65" fill="#c084fc" font-size="12" font-weight="700">CG</text>

    <line x1="250" y1="210" x2="250" y2="40" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3"/>
    <path d="M 250 150 A 60 60 0 0 1 228 172" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="235" y="165" fill="#fbbf24" font-size="13" font-weight="700">θ</text>

    <line x1="250" y1="210" x2="140" y2="30" stroke="#38bdf8" stroke-width="3.5" marker-end="url(#arrCyan_nlm)"/>
    <text x="130" y="25" fill="#38bdf8" font-size="14" font-weight="700">R</text>

    <line x1="250" y1="210" x2="250" y2="110" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="260" y="120" fill="#34d399" font-size="12" font-weight="600">R cos θ = mg</text>

    <line x1="250" y1="210" x2="150" y2="210" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_nlm)"/>
    <text x="140" y="235" fill="#34d399" font-size="12" font-weight="600">R sin θ = mv²/r</text>

    <text x="70" y="110" fill="#fbbf24" font-size="13" font-weight="700">tan θ = v² / (rg)</text>
  </svg>
</div>`;

// Replace all 9 blocks precisely:
content = content.replace(/```[\s\S]*?Time t:[\s\S]*?Ejected fuel[\s\S]*?```/, svgRocket);
content = content.replace(/```[\s\S]*?Free Body Diagram \(FBD\):[\s\S]*?Gravity \(mg\)[\s\S]*?```/, svgElevator);
content = content.replace(/```[\s\S]*?Forces:[\s\S]*?Closed Force Triangle:[\s\S]*?```/, svgLami);
content = content.replace(/```[\s\S]*?Normal Reaction \(N\)[\s\S]*?Resultant Contact Force[\s\S]*?```/, svgFriction);
content = content.replace(/```[\s\S]*?mg cos α[\s\S]*?---------------------\+[\s\S]*?```/, svgRepose);
content = content.replace(/```[\s\S]*?\[ Pulley \][\s\S]*?m1 > m2[\s\S]*?```/, svgAtwood);
content = content.replace(/```[\s\S]*?Front View of Car on Level Circular Road:[\s\S]*?```/, svgFlatRoad);
content = content.replace(/```[\s\S]*?Cross-Section of Banked Road:[\s\S]*?```/, svgBanked);
content = content.replace(/```[\s\S]*?Vertical[\s\S]*?R \(Ground Reaction\)[\s\S]*?```/, svgCyclist);

// Frontmatter
const frontmatter = `---
chapterNumber: 4
title: "Laws of Motion"
slug: "laws-of-motion"
unit: "Dynamics"
description: "Newton's laws of motion, momentum & impulse, rocket dynamics, elevator physics, friction, pulleys & circular dynamics."
difficulty: "Advanced"
derivationsCount: 15
formulasCount: 30
topics:
  - "Newton's Laws & Momentum"
  - "Impulse & Conservation"
  - "Rocket Propulsion Dynamics"
  - "Elevator Apparent Weight"
  - "Lami's Theorem & Equilibrium"
  - "Static & Kinetic Friction"
  - "Atwood Machine & Pulleys"
  - "Banking of Roads & Cyclist"
keyFormulasPreview:
  - "F_{\\\\text{net}} = \\\\frac{d\\\\vec{p}}{dt} = m\\\\vec{a}"
  - "v = v_0 + u_{\\\\text{rel}}\\\\ln\\\\left(\\\\frac{m_0}{m}\\\\right) - gt"
  - "f_{s,\\\\max} = \\\\mu_s N"
  - "a = \\\\frac{m_1 - m_2}{m_1 + m_2}g"
  - "v_{\\\\max} = \\\\sqrt{rg\\\\left(\\\\frac{\\\\mu_s + \\\\tan\\\\theta}{1 - \\\\mu_s\\\\tan\\\\theta}\\\\right)}"
accentColor: "emerald"
estimatedReadTime: "25 min"
---

`;

const finalDoc = frontmatter + content;

fs.writeFileSync('content/chapters/laws-of-motion.md', finalDoc, 'utf8');
fs.writeFileSync('NLM.md', content, 'utf8');

console.log('Successfully completed full replacement of code blocks with SVGs');
