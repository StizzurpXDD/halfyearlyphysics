# COMPLETE STUDY & REVISION SHEET: GRAVITATION

*(As per the Latest Rationalized CBSE/NCERT Class 11 Physics Syllabus)*

---

## PART 1: COMPREHENSIVE FORMULA TABLES

### Table 1: Newton's Law of Gravitation & Kepler’s Laws of Planetary Motion

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **1.1** | $F = G\frac{m_1 m_2}{r^2}$ | **Universal Law of Gravitation (Scalar Form)**: Attractive force between two point masses $m_1, m_2$ separated by distance $r$. | • Universal Gravitational Constant:<br>$G = 6.674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$<br>• Dimensions of $G$: $[M^{-1} L^3 T^{-2}]$<br>• Medium-independent and strictly central. |
| **1.2** | $\vec{F}_{12} = -G\frac{m_1 m_2}{r^2}\hat{r}_{21} = -G\frac{m_1 m_2}{r^3}\vec{r}_{21}$ | **Universal Law of Gravitation (Vector Form)**: Force exerted on mass $1$ by mass $2$. | • $\vec{F}_{12} = -\vec{F}_{21}$ (Obeys Newton's Third Law)<br>• Acts along the line joining the centers of mass. |
| **1.3** | $\vec{F}_{\text{net}} = \sum_{i=1}^n \vec{F}_i$ | **Principle of Superposition of Gravitation**: Net force on a mass is the vector sum of individual gravitational forces. | • Gravitational interaction between any two masses is unaffected by the presence of other bodies. |
| **1.4** | $\frac{dA}{dt} = \frac{L}{2m} = \text{constant}$ | **Kepler’s Second Law (Law of Areas)**: Areal velocity of a planet revolving around the Sun is constant. | • Consequence of conservation of angular momentum ($\vec{\tau}_{\text{ext}} = \vec{0}$ under central gravity force).<br>• Speed is maximum at perihelion ($r_p$) and minimum at aphelion ($r_a$):<br>$v_p r_p = v_a r_a$ |
| **1.5** | $T^2 \propto a^3$<br>$T^2 = \left(\frac{4\pi^2}{GM_s}\right)a^3$ | **Kepler’s Third Law (Law of Periods)**: Square of orbital period ($T$) is proportional to the cube of semi-major axis ($a$). | • For circular orbits of radius $r$: $T^2 = \left(\frac{4\pi^2}{GM}\right)r^3$<br>• Semi-major axis: $a = \frac{r_p + r_a}{2}$ |

---

### Table 2: Acceleration Due to Gravity ($g$) & Its Variations

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **2.1** | $g = \frac{GM}{R^2} = \frac{4}{3}\pi \rho G R$ | **Acceleration Due to Gravity at Earth's Surface**: $M$ is mass, $R$ is radius, $\rho$ is mean density of Earth. | • At Earth's surface: $g \approx 9.8\text{ m/s}^2$<br>• If mass is constant: $g \propto \frac{1}{R^2}$<br>• If density $\rho$ is constant: $g \propto R$ |
| **2.2** | $g_h = \frac{GM}{(R+h)^2} = g\left(\frac{R}{R+h}\right)^2$ | **Variation of $g$ with Altitude (Exact Formula)**: Valid for any arbitrary height $h$ above Earth's surface. | • As $h \to \infty$, $g_h \to 0$.<br>• Written as: $g_h = g\left(1 + \frac{h}{R}\right)^{-2}$ |
| **2.3** | $g_h \approx g\left(1 - \frac{2h}{R}\right)$ | **Variation of $g$ with Altitude (Approximation for $h \ll R$)**: Using first-order binomial expansion. | • Fractional decrease: $\frac{\Delta g}{g} = \frac{g - g_h}{g} = \frac{2h}{R}$<br>• Percentage decrease: $\frac{\Delta g}{g} \times 100\% = \frac{2h}{R} \times 100\%$ |
| **2.4** | $g_d = g\left(1 - \frac{d}{R}\right)$ | **Variation of $g$ with Depth ($d$)**: Acceleration due to gravity at depth $d$ below Earth's surface. | • At the center of Earth ($d = R$): $g_{\text{center}} = 0$<br>• Fractional decrease: $\frac{\Delta g}{g} = \frac{d}{R}$<br>• For $h \ll R$, the decrease in $g$ at height $h$ equals the decrease at depth $d = 2h$. |
| **2.5** | $g' = g - \omega^2 R \cos^2\lambda$ | **Variation of $g$ with Latitude ($\lambda$) Due to Earth's Rotation**: $\omega$ is Earth's angular spin velocity. | • **At Equator** ($\lambda = 0^\circ$): $g_{\text{eq}} = g - \omega^2 R$ (Minimum)<br>• **At Poles** ($\lambda = 90^\circ$): $g_{\text{pole}} = g$ (Maximum)<br>• Difference: $g_{\text{pole}} - g_{\text{eq}} = \omega^2 R \approx 0.034\text{ m/s}^2$ |
| **2.6** | $g_p > g_e$ | **Variation Due to Non-Spherical Shape of Earth**: Earth is an oblate spheroid ($R_e \approx R_p + 21\text{ km}$). | • Since $g \propto \frac{1}{R^2}$, gravity is greater at poles than at the equator by shape alone. |

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Variation of Acceleration Due to Gravity with Latitude (Earth's Diurnal Rotation)</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrCyan_grv_lat" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrRose_grv_lat" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
      <marker id="arrAmber_grv_lat" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f59e0b"/>
      </marker>
    </defs>

    <!-- Earth globe circle -->
    <circle cx="210" cy="125" r="95" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" stroke-width="2"/>

    <!-- Polar Rotation Axis -->
    <line x1="210" y1="15" x2="210" y2="235" stroke="#71717a" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="210" y="10" fill="#a1a1aa" font-size="11" font-weight="700" text-anchor="middle">North Pole (λ = 90°)</text>
    <text x="210" y="248" fill="#a1a1aa" font-size="11" font-weight="700" text-anchor="middle">South Pole</text>

    <!-- Spin arrow omega -->
    <path d="M 195 25 A 20 10 0 1 1 225 25" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrAmber_grv_lat)"/>
    <text x="238" y="28" fill="#f59e0b" font-size="12" font-weight="700">ω</text>

    <!-- Equatorial Plane -->
    <line x1="105" y1="125" x2="315" y2="125" stroke="#52525b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="325" y="129" fill="#a1a1aa" font-size="10">Equator (λ = 0°)</text>

    <!-- Center O -->
    <circle cx="210" cy="125" r="3.5" fill="#ffffff"/>
    <text x="200" y="120" fill="#ffffff" font-size="11">O</text>

    <!-- Latitude Point P at lambda = 45 deg -->
    <!-- dx = 95*cos(45) = 67, dy = -95*sin(45) = -67 -->
    <circle cx="277" cy="58" r="5" fill="#38bdf8"/>
    <text x="288" y="54" fill="#38bdf8" font-size="12" font-weight="700">P (Mass m)</text>
    <line x1="210" y1="125" x2="277" y2="58" stroke="#a1a1aa" stroke-width="1.5"/>
    <text x="235" y="100" fill="#a1a1aa" font-size="10">R</text>

    <!-- Latitude Angle lambda arc -->
    <path d="M 245 125 A 35 35 0 0 0 235 100" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="245" y="112" fill="#fbbf24" font-size="11">λ</text>

    <!-- Circle of rotation at latitude lambda (horizontal radius r = R cos lambda) -->
    <line x1="210" y1="58" x2="277" y2="58" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2 2"/>
    <text x="238" y="52" fill="#38bdf8" font-size="10">r = R cosλ</text>

    <!-- Centrifugal Force outward -->
    <line x1="277" y1="58" x2="340" y2="58" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrRose_grv_lat)"/>
    <text x="345" y="55" fill="#f43f5e" font-size="10" font-weight="700">mω²R cosλ</text>

    <!-- True gravity towards center -->
    <line x1="277" y1="58" x2="235" y2="100" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrAmber_grv_lat)"/>
    <text x="240" y="82" fill="#f59e0b" font-size="10" font-weight="700">mg</text>

    <!-- Apparent Gravity vector g' -->
    <line x1="277" y1="58" x2="225" y2="116" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrCyan_grv_lat)"/>
    <text x="210" y="90" fill="#34d399" font-size="11" font-weight="700">mg'</text>

    <!-- Summary Box -->
    <rect x="360" y="90" width="150" height="110" rx="8" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="435" y="110" fill="#f4f4f5" font-size="11" font-weight="700" text-anchor="middle">LATITUDE FORMULA</text>
    <line x1="375" y1="118" x2="495" y2="118" stroke="#3f3f46" stroke-width="1"/>
    <text x="370" y="138" fill="#34d399" font-size="10" font-weight="700">g' = g - ω²R cos²λ</text>
    <text x="370" y="158" fill="#38bdf8" font-size="10">Poles: g_p = g (Max)</text>
    <text x="370" y="176" fill="#f43f5e" font-size="10">Equator: g_e = g - ω²R</text>
    <text x="370" y="194" fill="#a1a1aa" font-size="9">Δg = ω²R ≈ 0.034 m/s²</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.12: Inertial centrifugal effect of Earth's diurnal rotation reducing effective gravitational acceleration away from the poles.</div>
</div>

---

### Table 3: Gravitational Field, Potential & Potential Energy

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **3.1** | $\vec{E}_g = \frac{\vec{F}}{m_0} = -\frac{GM}{r^2}\hat{r}$ | **Gravitational Field Intensity ($\vec{E}_g$)**: Gravitational force per unit test mass placed at distance $r$. | • Magnitude at Earth surface: $E_g = g$<br>• SI Unit: $\text{N/kg}$ or $\text{m/s}^2$<br>• Dimensions: $[M^0 L^1 T^{-2}]$ |
| **3.2** | $V(r) = -\frac{GM}{r}$ | **Gravitational Potential ($V$)**: Work done in bringing a unit mass from infinity to distance $r$. | • Scalar quantity; always negative for attractive fields.<br>• Reference: $V(\infty) = 0$<br>• SI Unit: $\text{J/kg}$<br>• At surface: $V_s = -\frac{GM}{R}$ |
| **3.3** | $E_g = -\frac{dV}{dr}$ | **Relation Between Field and Potential**: Gravitational field equals negative gradient of potential. | • In 3D: $\vec{E}_g = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)$ |
| **3.4** | $U(r) = -\frac{GMm}{r}$ | **Gravitational Potential Energy ($U$)**: Work done in assembling two masses $M$ and $m$ from infinity to separation $r$. | • Bound system: $U < 0$<br>• For a system of three masses: $U = -G\left(\frac{m_1 m_2}{r_{12}} + \frac{m_2 m_3}{r_{23}} + \frac{m_1 m_3}{r_{13}}\right)$ |
| **3.5** | $\Delta U = \frac{mgh}{1 + \frac{h}{R}}$ | **Change in Potential Energy in Moving Mass $m$ to Height $h$ (Exact)**: $\Delta U = U(R+h) - U(R)$. | • For small heights ($h \ll R$): $\Delta U \approx mgh$<br>• When $h = R$: $\Delta U = \frac{1}{2}mgR$<br>• When $h \to \infty$: $\Delta U = mgR$ |

---

### Table 4: Escape Speed, Satellites & Orbital Mechanics

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **4.1** | $v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}$ | **Escape Speed from Earth's Surface**: Minimum speed required for a projectile to escape Earth's gravitational pull. | • For Earth: $v_e \approx 11.2\text{ km/s}$<br>• In terms of density: $v_e = R\sqrt{\frac{8}{3}\pi \rho G}$<br>• Independent of projectile mass and angle of projection. |
| **4.2** | $v_e(h) = \sqrt{\frac{2GM}{R+h}}$ | **Escape Speed from Altitude $h$ Above Surface**. | • As $h$ increases, escape speed decreases. |
| **4.3** | $v_\infty = \sqrt{v^2 - v_e^2}$ | **Interstellar Speed**: Final residual speed of a body projected with initial speed $v > v_e$ far away from Earth. | • If $v < v_e$, maximum height reached is:<br>$h = \frac{R}{\left(\frac{v_e}{v}\right)^2 - 1}$ |
| **4.4** | $v_o = \sqrt{\frac{GM}{r}} = \sqrt{\frac{GM}{R+h}}$ | **Orbital Velocity of a Satellite**: Speed required to maintain stable circular orbit of radius $r = R+h$. | • Orbiting close to Earth ($h \ll R$):<br>$v_o = \sqrt{gR} \approx 7.92\text{ km/s} \approx 8\text{ km/s}$<br>• In terms of $g$: $v_o = R\sqrt{\frac{g}{R+h}}$ |
| **4.5** | $v_e = \sqrt{2}v_o \approx 1.414 v_o$ | **Relation Between Escape Speed and Orbital Velocity (Near Earth)**. | • If the orbital speed of a satellite increases by $41.4\%$ ($\sqrt{2}-1$), it escapes its orbit. |
| **4.6** | $T = 2\pi\sqrt{\frac{(R+h)^3}{GM}}$ | **Time Period of Satellite Orbiting at Height $h$**. | • Near Earth surface ($h \ll R$):<br>$T = 2\pi\sqrt{\frac{R}{g}} \approx 84.6\text{ minutes}$<br>• In terms of density $\rho$: $T = \sqrt{\frac{3\pi}{G\rho}}$ |
| **4.7** | $K = \frac{GMm}{2r}$<br>$U = -\frac{GMm}{r}$<br>$E = -\frac{GMm}{2r}$ | **Energy Relations for an Orbiting Satellite**: Orbital radius $r = R+h$. | • $E = -K = \frac{U}{2}$<br>• Kinetic energy is always positive ($K > 0$)<br>• Total energy is negative ($E < 0$), confirming a bound gravitational orbit. |
| **4.8** | $BE = -E = \frac{GMm}{2r}$ | **Binding Energy of a Satellite**: Energy needed to remove the satellite completely from its orbit to infinity. | • Near Earth's surface: $BE \approx \frac{1}{2}mgR$ |
| **4.9** | $h = \left(\frac{T^2 R^2 g}{4\pi^2}\right)^{1/3} - R$ | **Height of a Geostationary (Parking) Satellite**: Period $T = 24\text{ hours}$. | • $h \approx 35,800\text{ km} \approx 36,000\text{ km}$<br>• Orbital radius $r \approx 42,200\text{ km}$<br>• Rotates West to East in equatorial plane. |

---

## PART 2: STEP-BY-STEP CLASS 11 DERIVATIONS

---

### Derivation 1: Vector Form of Newton's Law of Gravitation (Proof of Newton's Third Law)

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Newton's Universal Law of Gravitation in Vector Form</div>
  <svg viewBox="0 0 540 220" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrCyan_grv_d1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrPurple_grv_d1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#c084fc"/>
      </marker>
      <marker id="arrRose_grv_d1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#f43f5e"/>
      </marker>
      <marker id="arrAmber_grv_d1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
      </marker>
    </defs>

    <!-- Origin and Coordinate axes -->
    <line x1="50" y1="180" x2="500" y2="180" stroke="#52525b" stroke-width="1.5"/>
    <line x1="50" y1="180" x2="50" y2="20" stroke="#52525b" stroke-width="1.5"/>
    <text x="505" y="184" fill="#a1a1aa" font-size="11">X</text>
    <text x="45" y="15" fill="#a1a1aa" font-size="11">Y</text>
    <circle cx="50" cy="180" r="3.5" fill="#ffffff"/>
    <text x="40" y="195" fill="#ffffff" font-size="11">O</text>

    <!-- Position vectors r_1 and r_2 -->
    <line x1="50" y1="180" x2="160" y2="90" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arrCyan_grv_d1)"/>
    <text x="95" y="130" fill="#a1a1aa" font-size="11">r⃗₁</text>
    <line x1="50" y1="180" x2="380" y2="90" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arrPurple_grv_d1)"/>
    <text x="260" y="160" fill="#a1a1aa" font-size="11">r⃗₂</text>

    <!-- Mass m_1 -->
    <circle cx="160" cy="90" r="18" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="94" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">m₁</text>

    <!-- Mass m_2 -->
    <circle cx="380" cy="90" r="18" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
    <text x="380" y="94" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">m₂</text>

    <!-- Line of interaction -->
    <line x1="178" y1="90" x2="362" y2="90" stroke="#3f3f46" stroke-width="1.5" stroke-dasharray="4 4"/>

    <!-- Force F_12 on m_1 towards m_2 -->
    <line x1="178" y1="90" x2="235" y2="90" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrRose_grv_d1)"/>
    <text x="205" y="80" fill="#f43f5e" font-size="12" font-weight="700">F⃗₁₂</text>

    <!-- Force F_21 on m_2 towards m_1 -->
    <line x1="362" y1="90" x2="305" y2="90" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrAmber_grv_d1)"/>
    <text x="335" y="80" fill="#f59e0b" font-size="12" font-weight="700">F⃗₂₁</text>

    <!-- Displacement unit vectors -->
    <line x1="210" y1="120" x2="330" y2="120" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrCyan_grv_d1)"/>
    <text x="270" y="115" fill="#38bdf8" font-size="11" text-anchor="middle">r̂₁₂ (from 1 to 2)</text>

    <line x1="330" y1="135" x2="210" y2="135" stroke="#c084fc" stroke-width="1.5" marker-end="url(#arrPurple_grv_d1)"/>
    <text x="270" y="150" fill="#c084fc" font-size="11" text-anchor="middle">r̂₂₁ (from 2 to 1)</text>

    <!-- Result badge -->
    <rect x="200" y="25" width="140" height="30" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="270" y="45" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">F⃗₁₂ = - F⃗₂₁</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.1: Vector formulation of Newton's Law of Gravitation establishing an equal and opposite action-reaction central force pair.</div>
</div>

**1. Aim & Theoretical Statement:**  
To formulate Newton’s Universal Law of Gravitation in vector notation and prove that gravitational interaction obeys Newton’s Third Law of Motion ($\vec{F}_{12} = -\vec{F}_{21}$).

**2. Setup & Position Vectors:**  
* Consider two point masses $m_1$ and $m_2$ located at position vectors $\vec{r}_1$ and $\vec{r}_2$ with respect to origin $O$.
* The displacement vector pointing from $m_1$ to $m_2$ is:
  $$\vec{r}_{12} = \vec{r}_2 - \vec{r}_1$$
  Its magnitude is $r = \|\vec{r}_{12}\|$, and unit vector is $\hat{r}_{12} = \frac{\vec{r}_{12}}{r}$.
* The displacement vector pointing from $m_2$ to $m_1$ is:
  $$\vec{r}_{21} = \vec{r}_1 - \vec{r}_2 = -\vec{r}_{12}$$
  Its unit vector is $\hat{r}_{21} = -\hat{r}_{12}$.

**3. Mathematical Steps:**  
Gravitational force is purely attractive. Therefore:
* The force $\vec{F}_{12}$ exerted on mass $m_1$ by mass $m_2$ is directed towards $m_2$ (along $\hat{r}_{12}$):
  $$\vec{F}_{12} = G\frac{m_1 m_2}{r^2}\hat{r}_{12} = -G\frac{m_1 m_2}{r^2}\hat{r}_{21} \quad \text{--- (1)}$$

* The force $\vec{F}_{21}$ exerted on mass $m_2$ by mass $m_1$ is directed towards $m_1$ (along $\hat{r}_{21}$):
  $$\vec{F}_{21} = G\frac{m_1 m_2}{r^2}\hat{r}_{21} \quad \text{--- (2)}$$

Comparing Equation (1) and Equation (2):
$$\vec{F}_{12} = -\left(G\frac{m_1 m_2}{r^2}\hat{r}_{21}\right) = -\vec{F}_{21}$$

**4. Final Result:**
$$\mathbf{\vec{F}_{12} = -\vec{F}_{21}}$$

*Conclusion:* Gravitational forces between two isolated masses form an equal and opposite action-reaction pair along the line connecting their centers.

---

### Derivation 2: Kepler’s Second Law (Law of Areas) from Conservation of Angular Momentum

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Kepler's Second Law: Constant Areal Velocity from Angular Momentum Conservation</div>
  <svg viewBox="0 0 540 260" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <linearGradient id="gradSector1_grv" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="gradSector2_grv" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#a855f7" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#a855f7" stop-opacity="0.08"/>
      </linearGradient>
      <marker id="arrCyan_grv_d2" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
    </defs>

    <!-- Elliptical planetary orbit -->
    <!-- Center of ellipse at (270, 130), a = 190, b = 95 -->
    <!-- Sun focus at x = 270 - 70 = 200, y = 130 -->
    <ellipse cx="270" cy="130" rx="190" ry="95" fill="none" stroke="#3f3f46" stroke-width="2" stroke-dasharray="5 5"/>

    <!-- Sun at Focus S (200, 130) -->
    <circle cx="200" cy="130" r="12" fill="#fbbf24"/>
    <circle cx="200" cy="130" r="18" fill="rgba(251, 191, 36, 0.2)"/>
    <text x="200" y="158" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Sun (S)</text>

    <!-- Perihelion sector: P_1 at (80, 130) to P_2 at (95, 75) -->
    <!-- Distance to Sun = 200 - 80 = 120 (closer -> faster) -->
    <path d="M 200 130 L 80 130 A 190 95 0 0 1 105 70 Z" fill="url(#gradSector1_grv)"/>
    <line x1="200" y1="130" x2="80" y2="130" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="200" y1="130" x2="105" y2="70" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="80" cy="130" r="6" fill="#38bdf8"/>
    <text x="65" y="134" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">Perihelion (v_p)</text>
    <text x="125" y="115" fill="#38bdf8" font-size="11" font-weight="700">Area ΔA₁</text>

    <!-- Aphelion sector: A_1 at (460, 130) to A_2 at (450, 100) -->
    <!-- Distance to Sun = 460 - 200 = 260 (farther -> slower) -->
    <path d="M 200 130 L 460 130 A 190 95 0 0 0 450 95 Z" fill="url(#gradSector2_grv)"/>
    <line x1="200" y1="130" x2="460" y2="130" stroke="#a855f7" stroke-width="1.5"/>
    <line x1="200" y1="130" x2="450" y2="95" stroke="#a855f7" stroke-width="1.5"/>
    <circle cx="460" cy="130" r="6" fill="#a855f7"/>
    <text x="475" y="134" fill="#c084fc" font-size="11" font-weight="700">Aphelion (v_a)</text>
    <text x="345" y="115" fill="#c084fc" font-size="11" font-weight="700">Area ΔA₂</text>

    <!-- Differential triangle detail inset -->
    <line x1="80" y1="130" x2="105" y2="70" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrCyan_grv_d2)"/>
    <text x="82" y="95" fill="#f59e0b" font-size="10">dr⃗ = v⃗ dt</text>

    <!-- Equation Badge -->
    <rect x="180" y="20" width="180" height="42" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="270" y="38" fill="#f4f4f5" font-size="11" font-weight="600" text-anchor="middle">Equal Areas in Equal Times</text>
    <text x="270" y="54" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">dA/dt = L / (2m) = const</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.2: Kepler's Second Law: the radius vector sweeps out equal areas in equal time intervals ($\Delta A_1 = \Delta A_2$) because central gravity exerts zero torque ($\vec{\tau} = \vec{0}$).</div>
</div>

**1. Aim & Statement:**  
*Statement:* The line joining a planet to the Sun sweeps out equal areas in equal intervals of time; that is, the areal velocity $\frac{dA}{dt}$ is constant.

**2. Setup & Planetary Mechanics:**  
* Let the Sun of mass $M_s$ be situated at origin $S$.
* A planet of mass $m$ has position vector $\vec{r}$ at time $t$ (point $P_1$) and moves with velocity $\vec{v}$.
* In an infinitesimal time $dt$, the planet moves to point $P_2$ with displacement:
  $$d\vec{r} = \vec{v}\,dt$$

**3. Mathematical Steps:**  
The area $dA$ swept out by radius vector $\vec{r}$ in time $dt$ equals the area of triangle $S P_1 P_2$:
$$d\vec{A} = \frac{1}{2}(\vec{r} \times d\vec{r})$$

Substitute $d\vec{r} = \vec{v}\,dt$:
$$d\vec{A} = \frac{1}{2}(\vec{r} \times \vec{v}\,dt)$$

Dividing both sides by differential time $dt$:
$$\frac{d\vec{A}}{dt} = \frac{1}{2}(\vec{r} \times \vec{v})$$

Multiply and divide the right-hand side by the planet's mass $m$:
$$\frac{d\vec{A}}{dt} = \frac{1}{2m}(\vec{r} \times m\vec{v})$$

By definition, linear momentum is $\vec{p} = m\vec{v}$, and angular momentum is $\vec{L} = \vec{r} \times \vec{p}$:
$$\frac{d\vec{A}}{dt} = \frac{\vec{L}}{2m} \quad \text{--- (1)}$$

**4. Angular Momentum Conservation Analysis:**  
The gravitational force $\vec{F}_g$ acting on the planet is a central force: it acts along the radial position vector $\vec{r}$.  
The external torque acting on the planet about the Sun is:
$$\vec{\tau} = \vec{r} \times \vec{F}_g = \vec{r} \times \left(-F_g \hat{r}\right) = \vec{0}$$

Since torque $\vec{\tau} = \frac{d\vec{L}}{dt}$:
$$\frac{d\vec{L}}{dt} = \vec{0} \implies \vec{L} = \text{constant vector}$$

Because $\vec{L}$ and mass $m$ are constant over time:
$$\mathbf{\frac{dA}{dt} = \frac{L}{2m} = \text{constant}}$$

---

### Derivation 3: Kepler’s Third Law (Law of Periods) for a Circular Orbit

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Kepler's Third Law: Period-Radius Coordinate Graph (T² vs r³)</div>
  <svg viewBox="0 0 520 230" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrAxis_grv_d3" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
    </defs>

    <!-- LEFT GRAPH: T^2 vs r^3 -->
    <g transform="translate(10, 0)">
      <line x1="45" y1="190" x2="250" y2="190" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrAxis_grv_d3)"/>
      <line x1="45" y1="190" x2="45" y2="25" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrAxis_grv_d3)"/>
      <text x="255" y="194" fill="#a1a1aa" font-size="11">r³ (or a³)</text>
      <text x="35" y="20" fill="#a1a1aa" font-size="11">T²</text>

      <!-- Straight line T^2 = K r^3 -->
      <line x1="45" y1="190" x2="235" y2="45" stroke="#38bdf8" stroke-width="2.5"/>
      <!-- Planet points on line -->
      <circle cx="75" cy="167" r="3.5" fill="#34d399"/>
      <text x="75" y="180" fill="#34d399" font-size="9" text-anchor="middle">Mercury</text>
      <circle cx="105" cy="144" r="3.5" fill="#fbbf24"/>
      <text x="105" y="157" fill="#fbbf24" font-size="9" text-anchor="middle">Venus</text>
      <circle cx="135" cy="121" r="4" fill="#38bdf8"/>
      <text x="135" y="112" fill="#38bdf8" font-size="9" text-anchor="middle">Earth</text>
      <circle cx="170" cy="95" r="3.5" fill="#f43f5e"/>
      <text x="170" y="85" fill="#f43f5e" font-size="9" text-anchor="middle">Mars</text>
      <circle cx="215" cy="60" r="4.5" fill="#c084fc"/>
      <text x="215" y="50" fill="#c084fc" font-size="9" text-anchor="middle">Jupiter</text>

      <text x="120" y="50" fill="#38bdf8" font-size="10" font-weight="700">Slope = 4π² / (GM_s)</text>
    </g>

    <!-- RIGHT DIAGRAM: Circular Centripetal Balance -->
    <g transform="translate(280, 0)">
      <circle cx="120" cy="115" r="75" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-dasharray="4 3"/>
      <!-- Sun at center -->
      <circle cx="120" cy="115" r="10" fill="#fbbf24"/>
      <text x="120" y="119" fill="#18181b" font-size="8" font-weight="700" text-anchor="middle">Sun</text>
      <text x="120" y="138" fill="#fbbf24" font-size="10">M_s</text>

      <!-- Planet in orbit -->
      <circle cx="120" cy="40" r="6" fill="#38bdf8"/>
      <text x="120" y="30" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Planet (m)</text>

      <!-- Radius r -->
      <line x1="120" y1="115" x2="120" y2="46" stroke="#71717a" stroke-width="1"/>
      <text x="128" y="80" fill="#a1a1aa" font-size="10">r</text>

      <!-- Centripetal force towards center -->
      <line x1="120" y1="46" x2="120" y2="80" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrAxis_grv_d3)"/>
      <text x="100" y="70" fill="#f43f5e" font-size="9" font-weight="700">F_g</text>

      <!-- Orbital velocity tangential -->
      <line x1="126" y1="40" x2="175" y2="40" stroke="#34d399" stroke-width="2" marker-end="url(#arrAxis_grv_d3)"/>
      <text x="180" y="44" fill="#34d399" font-size="10" font-weight="700">v_o</text>
    </g>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.3: Kepler's Third Law showing linear dependence between $T^2$ and $r^3$ established by gravitational centripetal equilibrium.</div>
</div>

**1. Aim:**  
To prove that the square of the orbital period of revolution $T$ of a planet is directly proportional to the cube of the radius of its circular orbit ($T^2 \propto r^3$).

**2. Physical Assumptions:**  
* A planet of mass $m$ revolves in a circular orbit of radius $r$ around the Sun of mass $M_s$ with constant orbital speed $v_o$.
* The gravitational force provides the necessary centripetal force.

**3. Mathematical Steps:**  
Equating centripetal force to gravitational force:
$$F_c = F_g$$
$$\frac{m v_o^2}{r} = G\frac{M_s m}{r^2}$$

Canceling planet mass $m$ and one power of $r$:
$$v_o^2 = \frac{GM_s}{r} \implies v_o = \sqrt{\frac{GM_s}{r}} \quad \text{--- (1)}$$

The time period $T$ is the time taken to complete one full revolution of circumference $2\pi r$:
$$T = \frac{2\pi r}{v_o} \quad \text{--- (2)}$$

Substitute $v_o$ from Equation (1) into Equation (2):
$$T = \frac{2\pi r}{\sqrt{\frac{GM_s}{r}}} = 2\pi r \sqrt{\frac{r}{GM_s}} = 2\pi \sqrt{\frac{r^3}{GM_s}}$$

Squaring both sides:
$$T^2 = \frac{4\pi^2}{GM_s}r^3$$

Since $G$, $\pi$, and Sun mass $M_s$ are invariants, let $K = \frac{4\pi^2}{GM_s}$:
$$T^2 = K r^3$$

**4. Final Result:**
$$\mathbf{T^2 \propto r^3}$$

---

### Derivation 4: Relation Between Acceleration Due to Gravity ($g$) and Gravitational Constant ($G$)

**1. Aim:**  
To derive the relation between surface gravitational acceleration $g$, Earth's mass $M$, Earth's radius $R$, and mean density $\rho$.

**2. Mathematical Steps:**  
Consider a test mass $m$ placed on the surface of a spherical Earth of mass $M$ and radius $R$.  
According to Newton's Law of Gravitation, the attractive force on mass $m$ is:
$$F = G\frac{Mm}{R^2} \quad \text{--- (1)}$$

According to Newton's Second Law, this force represents the weight $W$ of the body:
$$F = mg \quad \text{--- (2)}$$

Equating Equation (1) and Equation (2):
$$mg = G\frac{Mm}{R^2}$$

Canceling test mass $m$:
$$\mathbf{g = \frac{GM}{R^2} \quad \text{--- (3)}}$$

**Expressing in Terms of Mean Density ($\rho$):**  
Assuming Earth is a uniform sphere of radius $R$:
$$\text{Volume } V = \frac{4}{3}\pi R^3$$
$$\text{Mass } M = \text{Volume} \times \text{Density} = \frac{4}{3}\pi R^3 \rho$$

Substitute $M$ into Equation (3):
$$g = \frac{G}{R^2}\left(\frac{4}{3}\pi R^3 \rho\right)$$

**Final Density Result:**
$$\mathbf{g = \frac{4}{3}\pi \rho G R}$$

---

### Derivation 5: Variation of Acceleration Due to Gravity with Altitude ($h$)

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Variation of Gravity with Altitude (Inverse-Square Decrease)</div>
  <svg viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrFall_grv_d5" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
    </defs>

    <!-- Earth sphere arc at bottom -->
    <path d="M 60 210 Q 260 120 460 210" fill="none" stroke="#6366f1" stroke-width="2.5"/>
    <text x="260" y="180" fill="#a1a1aa" font-size="11" text-anchor="middle">Earth Surface (r = R, g = GM/R²)</text>

    <!-- Center of Earth reference -->
    <circle cx="260" cy="240" r="4" fill="#ffffff"/>
    <text x="260" y="255" fill="#71717a" font-size="10" text-anchor="middle">Center O</text>

    <!-- Radial line from center to altitude -->
    <line x1="260" y1="150" x2="260" y2="40" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3"/>

    <!-- Altitude bracket -->
    <line x1="275" y1="150" x2="275" y2="40" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="285" y="98" fill="#f59e0b" font-size="11" font-weight="700">Altitude h</text>

    <!-- Body at height h -->
    <circle cx="260" cy="40" r="10" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="260" y="44" fill="#ffffff" font-size="9" font-weight="700" text-anchor="middle">m</text>

    <!-- Reduced gravity vector g_h pointing down -->
    <line x1="260" y1="52" x2="260" y2="85" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrFall_grv_d5)"/>
    <text x="245" y="72" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">g_h</text>

    <!-- Comparison panel -->
    <rect x="340" y="30" width="165" height="75" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="422" y="48" fill="#f4f4f5" font-size="11" font-weight="700" text-anchor="middle">ALTITUDE FORMULAS</text>
    <line x1="355" y1="55" x2="490" y2="55" stroke="#3f3f46" stroke-width="1"/>
    <text x="350" y="72" fill="#fbbf24" font-size="10">Exact: g_h = g [R/(R+h)]²</text>
    <text x="350" y="92" fill="#34d399" font-size="10">For h ≪ R: g_h ≈ g (1 - 2h/R)</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.5: Decrease of gravitational acceleration with altitude $h$ above Earth's surface.</div>
</div>

**1. Aim:**  
To establish how acceleration due to gravity decreases with height $h$ above the Earth's surface.

**2. Mathematical Steps:**  
At the surface of Earth ($r = R$):
$$g = \frac{GM}{R^2} \quad \text{--- (Equation 1)}$$

At height $h$ above Earth's surface, distance from Earth's center is $r = R + h$:
$$g_h = \frac{GM}{(R + h)^2} \quad \text{--- (Equation 2)}$$

Dividing Equation (2) by Equation (1):
$$\frac{g_h}{g} = \frac{\left[\frac{GM}{(R+h)^2}\right]}{\left[\frac{GM}{R^2}\right]} = \frac{R^2}{(R+h)^2} = \left(\frac{R}{R+h}\right)^2$$

**Exact Formulation:**
$$\mathbf{g_h = g\left(\frac{R}{R+h}\right)^2 = g\left(1 + \frac{h}{R}\right)^{-2} \quad \text{--- (3)}}$$

**Approximation for Heights Small Compared to Radius ($h \ll R$):**  
Since $\frac{h}{R} \ll 1$, we expand Equation (3) using the Binomial Theorem:
$$(1 + x)^n \approx 1 + nx \quad (\text{for } |x| \ll 1)$$

Here $x = \frac{h}{R}$ and $n = -2$:
$$\left(1 + \frac{h}{R}\right)^{-2} \approx 1 - \frac{2h}{R}$$

Substitute this back:
$$\mathbf{g_h \approx g\left(1 - \frac{2h}{R}\right)}$$

*Fractional Change:*
$$\frac{\Delta g}{g} = \frac{g - g_h}{g} = \frac{2h}{R}$$

---

### Derivation 6: Variation of Acceleration Due to Gravity with Depth ($d$)

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Variation of Gravity with Depth: Newton's Shell Theorem Model</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrDepth_grv_d6" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#34d399"/>
      </marker>
    </defs>

    <!-- Outer Earth circle radius R = 100 -->
    <circle cx="210" cy="125" r="100" fill="rgba(244, 63, 94, 0.08)" stroke="#f43f5e" stroke-width="2"/>
    <text x="210" y="240" fill="#f43f5e" font-size="10" text-anchor="middle">Outer Shell (Thickness d, Net Force = 0)</text>

    <!-- Inner sphere radius (R - d) = 65 -->
    <circle cx="210" cy="125" r="65" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="2"/>
    <text x="210" y="115" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Inner Sphere</text>
    <text x="210" y="130" fill="#34d399" font-size="10" text-anchor="middle">Mass M' = M(1 - d/R)³</text>

    <!-- Center O -->
    <circle cx="210" cy="125" r="3.5" fill="#ffffff"/>
    <text x="198" y="122" fill="#ffffff" font-size="10">O</text>

    <!-- Radius of inner sphere -->
    <line x1="210" y1="125" x2="275" y2="125" stroke="#34d399" stroke-width="1.5"/>
    <text x="242" y="140" fill="#34d399" font-size="10">R - d</text>

    <!-- Depth bracket -->
    <line x1="275" y1="125" x2="310" y2="125" stroke="#f59e0b" stroke-width="2"/>
    <text x="292" y="115" fill="#f59e0b" font-size="11" font-weight="700">d</text>

    <!-- Point P at depth d -->
    <circle cx="275" cy="125" r="5" fill="#38bdf8"/>
    <text x="275" y="105" fill="#38bdf8" font-size="11" font-weight="700">Point P</text>

    <!-- Gravity g_d pointing inward -->
    <line x1="275" y1="125" x2="245" y2="125" stroke="#34d399" stroke-width="2" marker-end="url(#arrDepth_grv_d6)"/>
    <text x="255" y="118" fill="#34d399" font-size="10" font-weight="700">g_d</text>

    <!-- Depth Formula Box -->
    <rect x="350" y="80" width="155" height="85" rx="8" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="427" y="102" fill="#f4f4f5" font-size="11" font-weight="700" text-anchor="middle">DEPTH FORMULA</text>
    <line x1="365" y1="110" x2="490" y2="110" stroke="#3f3f46" stroke-width="1"/>
    <text x="360" y="130" fill="#34d399" font-size="11" font-weight="700">g_d = g (1 - d/R)</text>
    <text x="360" y="150" fill="#38bdf8" font-size="10">Center (d = R): g = 0</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.6: Variation of acceleration due to gravity with depth: only the inner solid sphere of radius $(R-d)$ contributes to gravity at point $P$.</div>
</div>

**1. Aim:**  
To derive the expression for acceleration due to gravity at a depth $d$ below the Earth's surface.

**2. Physical Assumptions:**  
* Earth is modeled as a homogeneous sphere of uniform mass density $\rho$ and radius $R$.
* According to Newton’s Shell Theorem:
  1. The spherical shell of thickness $d$ exerts zero net gravitational force on a body placed inside it at depth $d$.
  2. The only gravitational attraction experienced at depth $d$ is due to the smaller concentric solid sphere of radius $(R - d)$.

**3. Mathematical Steps:**  
At the Earth's surface ($r = R$):
$$g = \frac{4}{3}\pi \rho G R \quad \text{--- (Equation 1)}$$

At depth $d$, the body lies on the surface of an inner sphere of radius $r' = R - d$.  
The mass $M'$ of this inner sphere is:
$$M' = \frac{4}{3}\pi (R - d)^3 \rho$$

The acceleration due to gravity $g_d$ produced by this inner mass is:
$$g_d = \frac{GM'}{(R - d)^2} = \frac{G \left[\frac{4}{3}\pi (R - d)^3 \rho\right]}{(R - d)^2}$$
$$g_d = \frac{4}{3}\pi \rho G (R - d) \quad \text{--- (Equation 2)}$$

Dividing Equation (2) by Equation (1):
$$\frac{g_d}{g} = \frac{\frac{4}{3}\pi \rho G (R - d)}{\frac{4}{3}\pi \rho G R} = \frac{R - d}{R} = 1 - \frac{d}{R}$$

Multiplying through by $g$:

**4. Final Result:**
$$\mathbf{g_d = g\left(1 - \frac{d}{R}\right)}$$

*Special Case:*  
At the center of Earth ($d = R$):
$$g_{\text{center}} = g\left(1 - \frac{R}{R}\right) = g(0) = \mathbf{0}$$

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Full Radial Profile of Gravitational Acceleration g(r) Inside & Outside Earth</div>
  <svg viewBox="0 0 540 260" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <linearGradient id="gradEarthInside_grv" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#34d399" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#34d399" stop-opacity="0.3"/>
      </linearGradient>
      <marker id="arrAxis_grv_d4" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
    </defs>

    <!-- Axes -->
    <line x1="60" y1="210" x2="500" y2="210" stroke="#71717a" stroke-width="2" marker-end="url(#arrAxis_grv_d4)"/>
    <line x1="60" y1="210" x2="60" y2="30" stroke="#71717a" stroke-width="2" marker-end="url(#arrAxis_grv_d4)"/>
    <text x="505" y="214" fill="#a1a1aa" font-size="12" font-weight="600">Distance r from Center</text>
    <text x="50" y="22" fill="#a1a1aa" font-size="12" font-weight="600">g(r)</text>

    <!-- Interior shaded background -->
    <polygon points="60,210 200,210 200,70 60,210" fill="url(#gradEarthInside_grv)"/>

    <!-- Inside Earth: Linear line from (60, 210) to (200, 70) -->
    <line x1="60" y1="210" x2="200" y2="70" stroke="#34d399" stroke-width="3"/>
    <text x="110" y="125" fill="#34d399" font-size="11" font-weight="700">g ∝ r (Inside)</text>

    <!-- Surface Peak at r = R (200, 70) -->
    <circle cx="200" cy="70" r="5" fill="#fbbf24"/>
    <line x1="200" y1="70" x2="200" y2="210" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="60" y1="70" x2="200" y2="70" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="200" y="226" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">r = R</text>
    <text x="50" y="74" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">g₀ ≈ 9.8</text>

    <!-- Outside Earth: Inverse-square decay curve from (200, 70) to (480, 185) -->
    <path d="M 200 70 Q 260 145 340 175 T 480 198" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="320" y="150" fill="#38bdf8" font-size="11" font-weight="700">g ∝ 1/r² (Outside)</text>

    <!-- Distance ticks: 2R, 3R -->
    <line x1="340" y1="210" x2="340" y2="215" stroke="#71717a" stroke-width="1.5"/>
    <text x="340" y="226" fill="#a1a1aa" font-size="10" text-anchor="middle">2R (g₀/4)</text>
    <line x1="450" y1="210" x2="450" y2="215" stroke="#71717a" stroke-width="1.5"/>
    <text x="450" y="226" fill="#a1a1aa" font-size="10" text-anchor="middle">3R (g₀/9)</text>

    <!-- Origin label -->
    <text x="60" y="226" fill="#a1a1aa" font-size="11" text-anchor="middle">0 (Center)</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.4: Unified radial plot of $g(r)$: increases linearly inside the Earth to a surface maximum $g_0$, followed by inverse-square hyperbolic decay outside.</div>
</div>

---

### Derivation 7: Gravitational Potential Energy ($U$) of a Two-Mass System

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Assembly of Two Masses from Infinity: Gravitational Potential Energy</div>
  <svg viewBox="0 0 540 180" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrInward_grv_d7" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
      <marker id="arrExt_grv_d7" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#34d399"/>
      </marker>
    </defs>

    <!-- Axis line from O to infinity -->
    <line x1="40" y1="100" x2="500" y2="100" stroke="#71717a" stroke-width="1.5"/>
    <text x="505" y="104" fill="#a1a1aa" font-size="11">∞ (U = 0)</text>

    <!-- Source Mass M at origin O -->
    <circle cx="70" cy="100" r="18" fill="rgba(99, 102, 241, 0.25)" stroke="#6366f1" stroke-width="2"/>
    <text x="70" y="104" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">M</text>
    <text x="70" y="130" fill="#a1a1aa" font-size="10" text-anchor="middle">Origin O</text>

    <!-- Target position P at distance r -->
    <line x1="70" y1="100" x2="220" y2="100" stroke="#fbbf24" stroke-width="2"/>
    <circle cx="220" cy="100" r="5" fill="#fbbf24"/>
    <text x="220" y="85" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Point P</text>
    <text x="145" y="118" fill="#fbbf24" font-size="11" text-anchor="middle">r</text>

    <!-- Intermediate position A at distance x -->
    <circle cx="360" cy="100" r="8" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="360" y="80" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">A (mass m)</text>
    <line x1="70" y1="140" x2="360" y2="140" stroke="#38bdf8" stroke-width="1"/>
    <text x="215" y="155" fill="#38bdf8" font-size="10" text-anchor="middle">x</text>

    <!-- Infinitesimal displacement dx towards O -->
    <line x1="360" y1="100" x2="325" y2="100" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrExt_grv_d7)"/>
    <text x="342" y="90" fill="#34d399" font-size="10" font-weight="700">dx</text>

    <!-- Force F_g towards O -->
    <line x1="360" y1="65" x2="315" y2="65" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrInward_grv_d7)"/>
    <text x="335" y="55" fill="#f43f5e" font-size="10">F_g = GMm/x²</text>

    <!-- Result badge -->
    <rect x="160" y="15" width="220" height="30" rx="5" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="270" y="35" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">U(r) = - GMm / r  (Bound, U &lt; 0)</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.7: Calculation of gravitational potential energy $U(r)$ by integrating external work done against gravity from infinity to separation $r$.</div>
</div>

**1. Aim & Definition:**  
*Definition:* Gravitational potential energy of a two-body system is defined as the work done in bringing one mass from infinity to its present separation $r$ against the gravitational field of the other mass.

**2. Mathematical Steps:**  
* Let a stationary mass $M$ be placed at origin $O$.
* Consider an intermediate point $A$ at distance $x$ from $O$.
* The gravitational force on test mass $m$ at $A$ directed towards $O$ is:
  $$F = \frac{GMm}{x^2}$$
* To move mass $m$ slowly without acceleration from $A$ to an adjacent point $B$ by displacement $dx$ towards $O$, an external agent must apply an opposing force $F_{\text{ext}} = -F$.

The work done by the external agent for displacement $dx$ is:
$$dW = \vec{F}_{\text{ext}} \cdot d\vec{x} = F_{\text{ext}}\,dx = \left(\frac{GMm}{x^2}\right)dx$$

To calculate the total work done in bringing mass $m$ from infinity ($x = \infty$) to distance $r$ ($x = r$):
$$W = \int_{\infty}^{r} \frac{GMm}{x^2}\,dx = GMm \int_{\infty}^{r} x^{-2}\,dx$$

Integrating using standard calculus rule $\int x^{-2}dx = -\frac{1}{x}$:
$$W = GMm \left[ -\frac{1}{x} \right]_{\infty}^{r} = -GMm \left[ \frac{1}{r} - \frac{1}{\infty} \right]$$

Since $\frac{1}{\infty} = 0$:
$$W = -\frac{GMm}{r}$$

By definition, this external work done equals the gravitational potential energy $U(r)$:

**3. Final Result:**
$$\mathbf{U(r) = -\frac{GMm}{r}}$$

---

### Derivation 8: Work Done in Lifting a Mass to Height $h$ and Expression for $\Delta U$

**1. Aim:**  
To derive the exact expression for the change in gravitational potential energy $\Delta U$ when a body of mass $m$ is raised from Earth's surface to altitude $h$.

**2. Mathematical Steps:**  
Potential energy of mass $m$ on Earth's surface ($r_1 = R$):
$$U_1 = -\frac{GMm}{R}$$

Potential energy at height $h$ ($r_2 = R + h$):
$$U_2 = -\frac{GMm}{R + h}$$

The change in potential energy is:
$$\Delta U = U_2 - U_1 = \left(-\frac{GMm}{R+h}\right) - \left(-\frac{GMm}{R}\right)$$
$$\Delta U = GMm \left[\frac{1}{R} - \frac{1}{R+h}\right]$$

Finding common denominator:
$$\Delta U = GMm \left[\frac{(R+h) - R}{R(R+h)}\right] = GMm \left[\frac{h}{R(R+h)}\right]$$
$$\Delta U = \frac{GMm h}{R^2\left(1 + \frac{h}{R}\right)}$$

From Derivation 4, substitute $\frac{GM}{R^2} = g$:
$$\Delta U = \frac{m \left(\frac{GM}{R^2}\right) h}{1 + \frac{h}{R}}$$

**3. Final Result:**
$$\mathbf{\Delta U = \frac{mgh}{1 + \frac{h}{R}}}$$

*Approximation for $h \ll R$:*  
The denominator term $\frac{h}{R} \approx 0$, yielding the familiar formula:
$$\mathbf{\Delta U \approx mgh}$$

---

### Derivation 9: Gravitational Potential ($V$) Due to a Point Mass

**1. Aim & Definition:**  
*Definition:* Gravitational potential $V$ at a point is the amount of work done in bringing a unit test mass ($m_0 = 1\text{ kg}$) from infinity to that point in the gravitational field.

**2. Mathematical Steps:**  
From Derivation 7, the total work done in bringing mass $m$ from infinity to distance $r$ from mass $M$ is:
$$W = -\frac{GMm}{r}$$

By definition, gravitational potential is potential energy per unit mass:
$$V(r) = \frac{U(r)}{m} = \frac{W}{m}$$
$$V(r) = \frac{\left(-\frac{GMm}{r}\right)}{m}$$

**3. Final Result:**
$$\mathbf{V(r) = -\frac{GM}{r}}$$

*Relation with Gravitational Field Intensity ($E_g$):*
$$-\frac{dV}{dr} = -\frac{d}{dr}\left(-\frac{GM}{r}\right) = GM\frac{d}{dr}\left(\frac{1}{r}\right) = GM\left(-\frac{1}{r^2}\right) = -\frac{GM}{r^2} = E_g$$
$$\mathbf{E_g = -\frac{dV}{dr}}$$

---

### Derivation 10: Escape Speed ($v_e$) from the Surface of Earth

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Escape Speed Dynamics from Earth's Surface to Infinity</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrEsc_grv_d10" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
    </defs>

    <!-- Earth globe at bottom -->
    <path d="M 60 230 Q 260 170 460 230" fill="none" stroke="#6366f1" stroke-width="2.5"/>
    <text x="260" y="240" fill="#a1a1aa" font-size="11" text-anchor="middle">Earth Surface (Radius R)</text>

    <!-- Launch body at surface -->
    <circle cx="260" cy="185" r="9" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" stroke-width="2"/>
    <text x="260" y="189" fill="#ffffff" font-size="9" font-weight="700" text-anchor="middle">m</text>

    <!-- Upward launch vector v_e -->
    <line x1="260" y1="175" x2="260" y2="40" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrEsc_grv_d10)"/>
    <text x="245" y="110" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">v_e = √(2gR)</text>

    <!-- Infinity boundary -->
    <line x1="160" y1="35" x2="360" y2="35" stroke="#71717a" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="260" y="25" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Infinity: v_∞ = 0, U = 0 ⇒ E_f = 0</text>

    <!-- Left Energy Badge (Surface) -->
    <rect x="40" y="70" width="160" height="70" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="120" y="88" fill="#f4f4f5" font-size="10" font-weight="700" text-anchor="middle">INITIAL AT SURFACE</text>
    <text x="50" y="108" fill="#38bdf8" font-size="10">K_i = ½ m v_e²</text>
    <text x="50" y="126" fill="#f43f5e" font-size="10">U_i = - GMm / R</text>

    <!-- Right Result Badge -->
    <rect x="330" y="70" width="160" height="70" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="410" y="88" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">ESCAPE THRESHOLD</text>
    <text x="340" y="108" fill="#34d399" font-size="10" font-weight="700">v_e = √(2GM / R)</text>
    <text x="340" y="126" fill="#fbbf24" font-size="10" font-weight="700">v_e ≈ 11.2 km/s</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.8: Escape speed requirement from mechanical energy conservation: kinetic energy at launch precisely cancels negative potential energy well ($E_i = 0$).</div>
</div>

**1. Aim & Definition:**  
*Definition:* Escape speed is the minimum initial velocity with which a body must be projected vertically upward from Earth's surface so that it overcomes Earth's gravitational field and never returns.

**2. Mathematical Steps via Energy Conservation:**  
Let a projectile of mass $m$ be projected from Earth's surface with escape velocity $v_e$.

**Initial Mechanical Energy at Earth Surface ($r = R$):**
$$E_i = K_i + U_i$$
$$E_i = \frac{1}{2}mv_e^2 + \left(-\frac{GMm}{R}\right) = \frac{1}{2}mv_e^2 - \frac{GMm}{R} \quad \text{--- (1)}$$

**Final Mechanical Energy at Infinity ($r \to \infty$):**  
At infinity, the body just reaches rest ($v_\infty = 0$) and the gravitational potential energy is zero:
$$K_f = 0$$
$$U_f = 0$$
$$E_f = K_f + U_f = 0 + 0 = 0 \quad \text{--- (2)}$$

Applying the Law of Conservation of Mechanical Energy ($E_i = E_f$):
$$\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0$$
$$\frac{1}{2}mv_e^2 = \frac{GMm}{R}$$

Canceling mass $m$:
$$v_e^2 = \frac{2GM}{R}$$
$$\mathbf{v_e = \sqrt{\frac{2GM}{R}} \quad \text{--- (3)}}$$

Since surface gravity is $g = \frac{GM}{R^2} \implies GM = gR^2$, substitute $GM$:
$$v_e = \sqrt{\frac{2(gR^2)}{R}}$$

**4. Final Result:**
$$\mathbf{v_e = \sqrt{2gR}}$$

*Numerical Value for Earth ($R \approx 6.4 \times 10^6\text{ m}, g = 9.8\text{ m/s}^2$):*
$$v_e = \sqrt{2 \times 9.8 \times 6.4 \times 10^6} \approx 11.2 \times 10^3\text{ m/s} = \mathbf{11.2\text{ km/s}}$$

---

### Derivation 11: Orbital Velocity ($v_o$) of a Satellite

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Circular Satellite Orbit: Centripetal Gravity Equilibrium</div>
  <svg viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrVo_grv_d11" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrFg_grv_d11" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
    </defs>

    <!-- Earth at center -->
    <circle cx="200" cy="130" r="50" fill="rgba(99, 102, 241, 0.25)" stroke="#6366f1" stroke-width="2"/>
    <text x="200" y="134" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">Earth (M)</text>

    <!-- Circular orbit r = R + h -->
    <circle cx="200" cy="130" r="95" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-dasharray="4 4"/>

    <!-- Radius vector -->
    <line x1="200" y1="130" x2="200" y2="35" stroke="#71717a" stroke-width="1.5"/>
    <text x="185" y="85" fill="#a1a1aa" font-size="10">r = R + h</text>

    <!-- Satellite at top of orbit -->
    <circle cx="200" cy="35" r="7" fill="#38bdf8"/>
    <text x="200" y="22" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Satellite (m)</text>

    <!-- Tangential orbital velocity v_o -->
    <line x1="200" y1="35" x2="270" y2="35" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrVo_grv_d11)"/>
    <text x="280" y="39" fill="#38bdf8" font-size="11" font-weight="700">v_o</text>

    <!-- Inward centripetal gravitational force F_g -->
    <line x1="200" y1="35" x2="200" y2="80" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrFg_grv_d11)"/>
    <text x="208" y="65" fill="#f43f5e" font-size="10" font-weight="700">F_g = GMm/r²</text>

    <!-- Values Panel -->
    <rect x="330" y="60" width="165" height="110" rx="8" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="412" y="80" fill="#f4f4f5" font-size="11" font-weight="700" text-anchor="middle">ORBITAL VALUES</text>
    <line x1="345" y1="88" x2="480" y2="88" stroke="#3f3f46" stroke-width="1"/>
    <text x="340" y="108" fill="#38bdf8" font-size="10" font-weight="600">v_o = √[GM/(R+h)]</text>
    <text x="340" y="128" fill="#34d399" font-size="10" font-weight="700">Near Earth: v_o ≈ 8 km/s</text>
    <text x="340" y="148" fill="#fbbf24" font-size="10">Period: T ≈ 84.6 min</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.9: Satellite in stable circular orbit under radial centripetal attraction of Earth's gravity.</div>
</div>

**1. Aim & Definition:**  
*Definition:* Orbital velocity is the horizontal velocity required to inject a satellite into a stable circular orbit around Earth at a given altitude $h$.

**2. Mathematical Steps:**  
* Mass of satellite $= m$, Mass of Earth $= M$, Earth radius $= R$.
* Orbit radius $= r = R + h$.
* For a stable circular orbit, the gravitational force provides the necessary centripetal force:
  $$F_c = F_g$$
  $$\frac{mv_o^2}{r} = \frac{GMm}{r^2}$$

Canceling satellite mass $m$ and one power of orbital radius $r$:
$$v_o^2 = \frac{GM}{r}$$
$$\mathbf{v_o = \sqrt{\frac{GM}{r}} = \sqrt{\frac{GM}{R+h}} \quad \text{--- (1)}}$$

Substitute $GM = gR^2$:
$$v_o = \sqrt{\frac{gR^2}{R+h}} = R\sqrt{\frac{g}{R+h}}$$

**Special Case: Satellite Orbiting Very Close to Earth ($h \ll R$):**  
Here $R + h \approx R$:
$$v_o = \sqrt{\frac{gR^2}{R}}$$
$$\mathbf{v_o = \sqrt{gR}}$$

*Numerical Value:*
$$v_o = \sqrt{9.8 \times 6.4 \times 10^6} \approx 7.92\text{ km/s} \approx \mathbf{8\text{ km/s}}$$

---

### Derivation 12: Time Period ($T$) of an Orbiting Satellite

**1. Aim:**  
To derive the formula for the orbital period $T$ of a satellite revolving at height $h$ above Earth's surface.

**2. Mathematical Steps:**  
The orbital time period is the duration required to complete one orbital revolution of path length $2\pi r = 2\pi(R + h)$:
$$T = \frac{2\pi(R + h)}{v_o}$$

From Derivation 11, substitute $v_o = \sqrt{\frac{GM}{R+h}}$:
$$T = \frac{2\pi(R + h)}{\sqrt{\frac{GM}{R+h}}} = 2\pi(R+h)\sqrt{\frac{R+h}{GM}}$$
$$\mathbf{T = 2\pi\sqrt{\frac{(R+h)^3}{GM}} \quad \text{--- (1)}}$$

Substitute $GM = gR^2$:
$$\mathbf{T = 2\pi\sqrt{\frac{(R+h)^3}{gR^2}}}$$

**Special Case: Satellite Orbiting Near Earth's Surface ($h \ll R$):**  
Substitute $h = 0$:
$$T = 2\pi\sqrt{\frac{R^3}{gR^2}} = 2\pi\sqrt{\frac{R}{g}}$$

*Numerical Value for Near-Earth Satellite:*
$$T = 2\pi\sqrt{\frac{6.4 \times 10^6}{9.8}} \approx 5078\text{ s} \approx \mathbf{84.6\text{ minutes}}$$

---

### Derivation 13: Total Mechanical Energy & Binding Energy of a Satellite

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Satellite Energy Curves: Kinetic (K), Potential (U), and Total Energy (E) vs Orbit Radius r</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrEnergy_grv_d13" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
    </defs>

    <!-- Horizontal zero-energy axis -->
    <line x1="50" y1="125" x2="480" y2="125" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrEnergy_grv_d13)"/>
    <text x="485" y="129" fill="#a1a1aa" font-size="11">Radius r</text>
    <text x="45" y="129" fill="#a1a1aa" font-size="11" text-anchor="end">0</text>

    <!-- Vertical Energy axis -->
    <line x1="100" y1="230" x2="100" y2="20" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrEnergy_grv_d13)"/>
    <text x="100" y="15" fill="#a1a1aa" font-size="11" text-anchor="middle">Energy</text>

    <!-- Surface radius vertical mark r = R -->
    <line x1="120" y1="25" x2="120" y2="225" stroke="#52525b" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="120" y="240" fill="#a1a1aa" font-size="10" text-anchor="middle">r = R</text>

    <!-- Kinetic Energy Curve K(r) = + GMm / (2r) > 0 -->
    <path d="M 120 70 Q 200 105 450 120" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="320" y="100" fill="#38bdf8" font-size="11" font-weight="700">K = +GMm / (2r)</text>

    <!-- Total Energy Curve E(r) = - GMm / (2r) < 0 -->
    <path d="M 120 180 Q 200 145 450 130" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
    <text x="320" y="155" fill="#fbbf24" font-size="11" font-weight="700">E = -GMm / (2r)</text>

    <!-- Potential Energy Curve U(r) = - GMm / r < 0 (Twice as negative as E) -->
    <path d="M 120 225 Q 180 175 450 135" fill="none" stroke="#34d399" stroke-width="2.5"/>
    <text x="320" y="195" fill="#34d399" font-size="11" font-weight="700">U = -GMm / r</text>

    <!-- Fundamental relations callout -->
    <rect x="260" y="25" width="220" height="35" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="370" y="47" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">E = -K = U / 2 &lt; 0  (Bound Orbit)</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.10: Energetics of an orbiting satellite as a function of orbital radius $r$: total mechanical energy is always negative ($E < 0$).</div>
</div>

**1. Aim:**  
To calculate the kinetic energy, potential energy, total energy, and binding energy of an orbiting satellite and prove the relation $E = -K = \frac{U}{2}$.

**2. Mathematical Steps:**

**Kinetic Energy ($K$):**  
From Derivation 11, orbital speed is $v_o = \sqrt{\frac{GM}{r}}$:
$$K = \frac{1}{2}mv_o^2 = \frac{1}{2}m\left(\frac{GM}{r}\right)$$
$$\mathbf{K = \frac{GMm}{2r} \quad \text{--- (1)}}$$

**Potential Energy ($U$):**  
From Derivation 7, gravitational potential energy at separation $r$ is:
$$\mathbf{U = -\frac{GMm}{r} \quad \text{--- (2)}}$$

**Total Mechanical Energy ($E$):**  
$$E = K + U = \frac{GMm}{2r} + \left(-\frac{GMm}{r}\right)$$
$$\mathbf{E = -\frac{GMm}{2r} \quad \text{--- (3)}}$$

**Comparing $E$, $K$, and $U$:**  
$$E = -K$$
$$E = \frac{1}{2}\left(-\frac{GMm}{r}\right) = \frac{U}{2}$$

**Energy Relation Result:**
$$\mathbf{E = -K = \frac{U}{2}}$$

**Binding Energy ($BE$):**  
Binding energy is the minimum energy required to liberate the satellite from its orbit to infinity ($E_f = 0$):
$$BE + E = 0 \implies BE = -E$$
$$\mathbf{BE = \frac{GMm}{2r}}$$

---

### Derivation 14: Exact Relation Between Escape Speed and Orbital Speed

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Orbit Geometry Transition: Circular to Parabolic Escape (ve = √2 vo)</div>
  <svg viewBox="0 0 540 260" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <!-- Earth at left focus -->
    <circle cx="160" cy="130" r="35" fill="rgba(99, 102, 241, 0.3)" stroke="#6366f1" stroke-width="2"/>
    <text x="160" y="134" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">Earth</text>

    <!-- Circular orbit v = v_o -->
    <circle cx="160" cy="130" r="70" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="50" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. v = v_o (Circle)</text>

    <!-- Elliptical orbit v_o < v < v_e -->
    <ellipse cx="205" cy="130" rx="115" ry="70" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="325" y="115" fill="#fbbf24" font-size="10" font-weight="700">2. v_o &lt; v &lt; √2 v_o (Ellipse)</text>

    <!-- Parabolic escape trajectory v = v_e = sqrt(2) v_o -->
    <path d="M 480 30 Q 120 30 160 200 Q 170 230 480 240" fill="none" stroke="#34d399" stroke-width="2.5"/>
    <text x="475" y="25" fill="#34d399" font-size="11" font-weight="700" text-anchor="end">3. v = √2 v_o (Parabolic Escape)</text>

    <!-- Launch point P at top of circle (160, 60) -->
    <circle cx="160" cy="60" r="6" fill="#ffffff"/>
    <line x1="160" y1="60" x2="230" y2="60" stroke="#f43f5e" stroke-width="2.5"/>
    <text x="235" y="64" fill="#f43f5e" font-size="11" font-weight="700">Launch Velocity</text>

    <!-- Callout percentage badge -->
    <rect x="280" y="150" width="220" height="45" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="390" y="168" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">v_e = √2 v_o ≈ 1.414 v_o</text>
    <text x="390" y="184" fill="#a1a1aa" font-size="10" text-anchor="middle">+41.4% speed boost to escape orbit</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 6.11: Orbital trajectory transitions as velocity increases from circular velocity $v_o$ to parabolic escape speed $v_e = \sqrt{2}v_o$.</div>
</div>

**1. Aim & Setup:**  
To establish the mathematical ratio between the escape velocity $v_e$ from Earth's surface and the orbital velocity $v_o$ of a satellite in a low-altitude orbit ($h \ll R$).

**2. Mathematical Steps:**  
From Derivation 10, the escape velocity from Earth's surface is:
$$v_e = \sqrt{2gR} \quad \text{--- (1)}$$

From Derivation 11, the orbital velocity of a satellite orbiting just above Earth's surface is:
$$v_o = \sqrt{gR} \quad \text{--- (2)}$$

Dividing Equation (1) by Equation (2):
$$\frac{v_e}{v_o} = \frac{\sqrt{2gR}}{\sqrt{gR}} = \sqrt{2}$$

Cross-multiplying:

**3. Final Result:**
$$\mathbf{v_e = \sqrt{2}v_o \approx 1.414 v_o}$$

*Conclusion:* If the velocity of an orbiting satellite near the Earth's surface increases by a factor of $\sqrt{2}$ (an increase of $\approx 41.4\%$), the satellite will break out of its closed elliptical/circular orbit and escape into outer space along a parabolic path.
