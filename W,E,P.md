# COMPLETE STUDY & REVISION SHEET: WORK, ENERGY AND POWER

*(As per the Latest Rationalized CBSE/NCERT Class 11 Physics Syllabus)*

---

## PART 1: COMPREHENSIVE FORMULA TABLES

### Table 1: Work Done & The Work-Energy Theorem

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **1.1** | $W = \vec{F} \cdot \vec{d} = F d \cos\theta$ | **Work Done by a Constant Force**: Scalar product of force vector $\vec{F}$ and displacement vector $\vec{d}$. | • $\theta < 90^\circ \implies W > 0$ (Positive work)<br>• $\theta = 90^\circ \implies W = 0$ (Zero work; e.g., centripetal force, porter carrying load on level ground)<br>• $90^\circ < \theta \le 180^\circ \implies W < 0$ (Negative work; e.g., kinetic friction)<br>• Component form: $W = F_x d_x + F_y d_y + F_z d_z$ |
| **1.2** | $W = \int_{x_i}^{x_f} F(x)\,dx$ | **Work Done by a 1D Variable Force**: Definite integral of position-dependent force $F(x)$ over displacement. | • $W = \text{Area under the } F-x \text{ graph}$<br>• In 3D: $W = \int_{\vec{r}_i}^{\vec{r}_f} \vec{F} \cdot d\vec{r} = \int_{x_i}^{x_f} F_x dx + \int_{y_i}^{y_f} F_y dy + \int_{z_i}^{z_f} F_z dz$ |
| **1.3** | $W_g = -mg\Delta h = mg(h_i - h_f)$ | **Work Done by Gravity**: Depends exclusively on vertical displacement; path-independent (conservative force). | • Moving downward: $W_g = +mgh$<br>• Moving upward: $W_g = -mgh$<br>• Round trip in closed path: $\oint \vec{F}_g \cdot d\vec{r} = 0$ |
| **1.4** | $W_s = -\frac{1}{2}k(x_f^2 - x_i^2)$ | **Work Done by an Ideal Spring Force**: $k$ is the spring stiffness constant; $x$ is extension/compression from equilibrium. | • From relaxed position ($x_i = 0$) to elongation $x$: $W_s = -\frac{1}{2}kx^2$<br>• Work done by external stretching agent: $W_{\text{ext}} = -W_s = +\frac{1}{2}kx^2$ |
| **1.5** | $K = \frac{1}{2}mv^2 = \frac{p^2}{2m}$ | **Kinetic Energy ($K$)**: Energy possessed by body of mass $m$ by virtue of motion. | • Momentum relation: $p = \sqrt{2mK}$<br>• Fractional change for small percentage variation ($\le 5\%$):<br>$\frac{\Delta K}{K} \approx 2\left(\frac{\Delta p}{p}\right)$ |
| **1.6** | $W_{\text{net}} = \Delta K = K_f - K_i$ | **Work-Energy Theorem (Fundamental Form)**: Net work done by ALL forces (conservative, non-conservative, external) equals change in kinetic energy. | • $\Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$<br>• Extended form: $W_c + W_{nc} + W_{\text{ext}} = \Delta K$<br>• If only conservative forces act: $\Delta K + \Delta U = 0$ |

---

### Table 2: Potential Energy & Conservation of Mechanical Energy

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **2.1** | $\Delta U = -W_c = -\int_{\vec{r}_i}^{\vec{r}_f} \vec{F}_c \cdot d\vec{r}$ | **Definition of Potential Energy ($\Delta U$)**: Negative of the work done by internal conservative forces. | • Potential energy is defined exclusively for conservative forces.<br>• Setting reference $U(\vec{r}_{\text{ref}}) = 0$: $U(\vec{r}) = -\int_{\vec{r}_{\text{ref}}}^{\vec{r}} \vec{F}_c \cdot d\vec{r}$ |
| **2.2** | $F(x) = -\frac{dU}{dx}$ | **Conservative Force as Negative Potential Gradient** (1D). | • In 3D Cartesian coordinates: $\vec{F} = -\nabla U = -\left(\frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k}\right)$ |
| **2.3** | $U_s(x) = \frac{1}{2}kx^2$ | **Elastic Potential Energy of an Ideal Spring**: Energy stored at displacement $x$. | • Always positive ($U_s \ge 0$) whether the spring is elongated ($+x$) or compressed ($-x$). |
| **2.4** | $\frac{dU}{dx} = 0$ | **Mechanical Equilibrium Condition**: Force vanishes at points of zero potential gradient. | • **Stable Equilibrium**: $\frac{d^2U}{dx^2} > 0$ ($U$ is local minimum)<br>• **Unstable Equilibrium**: $\frac{d^2U}{dx^2} < 0$ ($U$ is local maximum)<br>• **Neutral Equilibrium**: $\frac{d^2U}{dx^2} = 0$ ($U$ is constant plateau) |
| **2.5** | $E_{\text{mech}} = K + U = \text{constant}$ | **Law of Conservation of Mechanical Energy**: Holds when only conservative forces do work ($W_{nc} = 0$). | • Free-fall from height $H$: at any intermediate height $y$, $\frac{1}{2}mv^2 + mgy = mgH$<br>• Spring-mass oscillator: $\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2 = \text{const}$ |
| **2.6** | $W_{nc} = \Delta E_{\text{mech}} = \Delta K + \Delta U$ | **Energy Conservation with Non-Conservative Forces**: Non-conservative work accounts for changes in total mechanical energy. | • E.g., Work done against friction: $W_f = -\mu_k N d = \Delta E_{\text{mech}} < 0$ (thermal dissipation) |

---

### Table 3: Motion in a Vertical Circle (Light Inextensible String of Radius $R$)

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **3.1** | $T(\theta) = \frac{mv^2}{R} + mg\cos\theta$ | **Tension at Angle $\theta$**: Measured from the lowest point ($\theta = 0^\circ$). | • At lowest point ($\theta = 0^\circ$): $T_L = \frac{mv_L^2}{R} + mg$<br>• At horizontal position ($\theta = 90^\circ$): $T_M = \frac{mv_M^2}{R}$<br>• At highest point ($\theta = 180^\circ$): $T_H = \frac{mv_H^2}{R} - mg$ |
| **3.2** | $v_H \ge \sqrt{gR}$ | **Critical Speed at Highest Point ($H$)**: Minimum speed to prevent the string from slacking ($T_H \ge 0$). | • At critical threshold ($v_H = \sqrt{gR}$): $T_H = 0$. |
| **3.3** | $v_L \ge \sqrt{5gR}$ | **Minimum Speed at Lowest Point ($L$)**: Required to complete a full vertical circular loop. | • At this critical condition: $v_M = \sqrt{3gR}$ at horizontal position. |
| **3.4** | $T_L - T_H = 6mg$ | **Difference in String Tension**: Between lowest and highest points of a complete vertical circle. | • Completely independent of launch velocity, provided the body completes the circle. |
| **3.5** | $v_L \le \sqrt{2gR}$ | **Condition for Pure Oscillation**: Bob oscillates like a simple pendulum without reaching horizontal line ($\theta \le 90^\circ$). | • String never goes slack; velocity vanishes before tension does ($v=0$ while $T > 0$). |
| **3.6** | $\sqrt{2gR} < v_L < \sqrt{5gR}$ | **Condition for Leaving the Circular Path**: String slacks ($T=0$) in the upper hemisphere ($90^\circ < \theta < 180^\circ$). | • Bob leaves circular path and executes parabolic projectile motion under gravity. |
| **3.7** | $v_L \ge \sqrt{4gR} = 2\sqrt{gR}$ | **Critical Speed for a Light Rigid Rod**: Rod supports compression, so velocity at top can be zero ($v_H \ge 0$). | • Condition at peak: $v_H = 0 \implies v_L = \sqrt{4gR}$. Tension at top can be negative (compressive). |

---

### Table 4: Power & Machine Efficiency

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **4.1** | $P_{\text{avg}} = \frac{\Delta W}{\Delta t}$ | **Average Power**: Time rate of doing work over a finite time interval $\Delta t$. | • SI Unit: Watt ($\text{W} = \text{J/s}$)<br>• Dimensions: $[M^1 L^2 T^{-3}]$<br>• Practical units: $1\text{ hp} = 746\text{ W}$, $1\text{ kWh} = 3.6 \times 10^6\text{ J}$ |
| **4.2** | $P = \frac{dW}{dt} = \vec{F} \cdot \vec{v} = F v \cos\theta$ | **Instantaneous Power**: Rate of energy transfer at an exact instant. | • Vehicle moving at constant speed $v$ against resistance $F_{\text{drag}}$: $P = F_{\text{drag}} v$<br>• Uniformly accelerated vehicle from rest ($v = at$): $P(t) = (ma)(at) = m a^2 t \implies P \propto t$ |
| **4.3** | $P = \frac{\rho V g h}{t} = \left(\frac{dm}{dt}\right)gh$ | **Power of a Water Pump**: Lifting fluid of density $\rho$ through height $h$ at mass rate $\frac{dm}{dt}$. | • If water is also imparted a nozzle discharge speed $v$:<br>$P = \left(\frac{dm}{dt}\right)gh + \frac{1}{2}\left(\frac{dm}{dt}\right)v^2$ |
| **4.4** | $\eta = \frac{P_{\text{output}}}{P_{\text{input}}} \times 100\% = \frac{W_{\text{output}}}{W_{\text{input}}} \times 100\%$ | **Efficiency of a Machine ($\eta$)**. | • $\eta < 100\%$ due to non-conservative dissipative losses (heat, sound, friction). |

---

### Table 5: Collisions in One and Two Dimensions

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **5.1** | $e = \frac{v_2 - v_1}{u_1 - u_2} = \frac{\text{Relative velocity of separation}}{\text{Relative velocity of approach}}$ | **Newton’s Coefficient of Restitution ($e$)**. | • Perfectly Elastic: $e = 1$<br>• Inelastic: $0 < e < 1$<br>• Perfectly Inelastic (stick together): $e = 0$<br>• Superelastic (explosive release): $e > 1$ |
| **5.2** | $v_1 = \left(\frac{m_1 - m_2}{m_1 + m_2}\right)u_1 + \left(\frac{2m_2}{m_1 + m_2}\right)u_2$<br>$v_2 = \left(\frac{2m_1}{m_1 + m_2}\right)u_1 + \left(\frac{m_2 - m_1}{m_1 + m_2}\right)u_2$ | **1D Elastic Collision ($e = 1$)**: Final velocities after head-on collision. | • **Equal masses** ($m_1 = m_2$): $v_1 = u_2, v_2 = u_1$ (Velocities exchange completely)<br>• **Target at rest** ($u_2 = 0$):<br>$v_1 = \left(\frac{m_1 - m_2}{m_1 + m_2}\right)u_1$, $v_2 = \left(\frac{2m_1}{m_1 + m_2}\right)u_1$<br>• **Massive target at rest** ($m_2 \gg m_1, u_2 = 0$): $v_1 \approx -u_1, v_2 \approx 0$<br>• **Massive projectile** ($m_1 \gg m_2, u_2 = 0$): $v_1 \approx u_1, v_2 \approx 2u_1$ |
| **5.3** | $V_f = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$ | **1D Perfectly Inelastic Collision ($e = 0$)**: Common final velocity of coalesced masses. | • Target initially at rest ($u_2 = 0$): $V_f = \left(\frac{m_1}{m_1 + m_2}\right)u_1$ |
| **5.4** | $\Delta K = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(u_1 - u_2)^2(1 - e^2)$ | **Kinetic Energy Loss in 1D Collision**. | • For perfectly inelastic collision ($e = 0$):<br>$\Delta K_{\max} = \frac{1}{2}\mu(u_1 - u_2)^2$ where $\mu = \frac{m_1 m_2}{m_1 + m_2}$ is the reduced mass<br>• For elastic collision ($e = 1$): $\Delta K = 0$ |
| **5.5** | $h_n = e^{2n}h_0$<br>$v_n = e^n\sqrt{2gh_0}$ | **Rebounding Ball Dropped from Height $h_0$**: Velocity and height attained after $n$ successive floor impacts. | • Total distance traveled before coming to rest:<br>$H_{\text{total}} = h_0\left(\frac{1 + e^2}{1 - e^2}\right)$<br>• Total time elapsed before coming to rest:<br>$T_{\text{total}} = \sqrt{\frac{2h_0}{g}}\left(\frac{1 + e}{1 - e}\right)$ |
| **5.6** | $\theta_1 + \theta_2 = 90^\circ$ | **2D Elastic Collision of Identical Masses ($m_1 = m_2$) with Target at Rest ($u_2 = 0$)**. | • The two bodies always emerge at right angles ($90^\circ$) to each other in non-head-on (glancing) elastic collisions. |

---

## PART 2: STEP-BY-STEP CLASS 11 DERIVATIONS

---

### Derivation 1: Work-Energy Theorem for a Constant Force

**1. Aim & Statement:**  
To prove that the work done by a net constant force acting on a body along a straight line equals the change in its kinetic energy:
$$W_{\text{net}} = \Delta K$$

**2. Physical Setup & Assumptions:**  
* Consider a rigid body of constant mass $m$ moving rectilinearly along the $x$-axis.
* A constant net force $F$ acts on the body over a displacement $s = x_f - x_i$.
* Initial velocity at $x_i$ is $u$, and final velocity at $x_f$ is $v$.

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Work Done by a Constant Force & Kinetic Energy Change</div>
  <svg viewBox="0 0 540 160" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrCyan_wep_d1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrAmber_wep_d1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
      </marker>
    </defs>
    <!-- Ground line -->
    <line x1="40" y1="120" x2="500" y2="120" stroke="#52525b" stroke-width="2"/>
    <line x1="40" y1="125" x2="500" y2="125" stroke="#3f3f46" stroke-width="1" stroke-dasharray="4 4"/>

    <!-- Initial state block -->
    <rect x="80" y="70" width="70" height="50" rx="6" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="100" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">m</text>
    <text x="115" y="58" fill="#38bdf8" font-size="12" font-weight="600" text-anchor="middle">v = u</text>
    <line x1="150" y1="95" x2="190" y2="95" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrCyan_wep_d1)"/>
    <text x="115" y="142" fill="#71717a" font-size="12" text-anchor="middle">x = x_i</text>

    <!-- Force application vector -->
    <line x1="150" y1="85" x2="225" y2="55" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrAmber_wep_d1)"/>
    <text x="235" y="55" fill="#f59e0b" font-size="13" font-weight="700">F</text>
    <line x1="150" y1="85" x2="200" y2="85" stroke="#71717a" stroke-width="1" stroke-dasharray="3 3"/>
    <path d="M 175 85 A 25 25 0 0 0 171 77" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="180" y="80" fill="#fbbf24" font-size="11">θ</text>

    <!-- Displacement arrow -->
    <line x1="115" y1="135" x2="415" y2="135" stroke="#a1a1aa" stroke-width="1.5" marker-end="url(#arrCyan_wep_d1)"/>
    <text x="265" y="152" fill="#a1a1aa" font-size="12" text-anchor="middle">Displacement s = x_f - x_i</text>

    <!-- Final state block -->
    <rect x="380" y="70" width="70" height="50" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2"/>
    <text x="415" y="100" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">m</text>
    <text x="415" y="58" fill="#fbbf24" font-size="12" font-weight="600" text-anchor="middle">v = v_f</text>
    <line x1="450" y1="95" x2="500" y2="95" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrAmber_wep_d1)"/>
    <text x="415" y="142" fill="#71717a" font-size="12" text-anchor="middle">x = x_f</text>

    <!-- Kinetic Energy badges -->
    <text x="115" y="25" fill="#38bdf8" font-size="11" text-anchor="middle">K_i = ½mu²</text>
    <text x="415" y="25" fill="#f59e0b" font-size="11" text-anchor="middle">K_f = ½mv²</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.1: Rectilinear displacement under constant force producing an increase in kinetic energy: $W = F s \cos\theta = \Delta K$.</div>
</div>

**3. Mathematical Steps:**  
By definition, work done by the constant force component along displacement is:
$$W = F \cdot s \quad \text{--- (1)}$$

By Newton’s Second Law:
$$F = ma \quad \text{--- (2)}$$

Substitute Equation (2) into Equation (1):
$$W = (ma)s = m(as) \quad \text{--- (3)}$$

From the third kinematic equation of uniformly accelerated motion:
$$v^2 = u^2 + 2as \implies 2as = v^2 - u^2 \implies as = \frac{v^2 - u^2}{2}$$

Substitute this value of $(as)$ into Equation (3):
$$W = m\left(\frac{v^2 - u^2}{2}\right)$$
$$W = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

By definition, initial kinetic energy is $K_i = \frac{1}{2}mu^2$ and final kinetic energy is $K_f = \frac{1}{2}mv^2$:
$$W = K_f - K_i$$

**4. Final Result:**
$$\mathbf{W_{\text{net}} = \Delta K}$$

---

### Derivation 2: Work-Energy Theorem for a Variable Force (Calculus Method)

**1. Aim & Statement:**  
To establish the Work-Energy Theorem for a one-dimensional position-dependent variable force $F(x)$ using infinitesimal calculus.

**2. Physical Assumptions:**  
* A body of mass $m$ changes position from $x_i$ to $x_f$.
* Its velocity changes continuously from $v_i$ to $v_f$ under the influence of force $F(x)$.

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Variable Force F(x) – Displacement Curve: Area Equals Work Done</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <linearGradient id="varForceGrad_wep" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
      </linearGradient>
      <marker id="arrAxis_wep_d2" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
    </defs>

    <!-- Axes -->
    <line x1="60" y1="210" x2="490" y2="210" stroke="#71717a" stroke-width="2" marker-end="url(#arrAxis_wep_d2)"/>
    <line x1="60" y1="210" x2="60" y2="25" stroke="#71717a" stroke-width="2" marker-end="url(#arrAxis_wep_d2)"/>
    <text x="495" y="214" fill="#a1a1aa" font-size="13" font-weight="600">x</text>
    <text x="50" y="20" fill="#a1a1aa" font-size="13" font-weight="600">F(x)</text>

    <!-- Shaded area under curve from x_i (110) to x_f (440) -->
    <path d="M 110 210 L 110 150 C 170 120, 220 50, 280 65 C 340 80, 390 120, 440 90 L 440 210 Z" fill="url(#varForceGrad_wep)"/>

    <!-- Infinitesimal strip at x = 250, dx = 24 -->
    <rect x="250" y="62" width="24" height="148" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="250" y1="210" x2="250" y2="218" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="274" y1="210" x2="274" y2="218" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="262" y="232" fill="#38bdf8" font-size="11" font-weight="600" text-anchor="middle">dx</text>
    <text x="262" y="52" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">dW = F(x) dx</text>

    <!-- Continuous curve outline -->
    <path d="M 80 170 C 95 160, 100 155, 110 150 C 170 120, 220 50, 280 65 C 340 80, 390 120, 440 90 C 455 82, 470 78, 480 75" fill="none" stroke="#f59e0b" stroke-width="3"/>

    <!-- Boundary lines -->
    <line x1="110" y1="150" x2="110" y2="210" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="440" y1="90" x2="440" y2="210" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="110" y="228" fill="#fbbf24" font-size="13" font-weight="600" text-anchor="middle">x_i</text>
    <text x="440" y="228" fill="#fbbf24" font-size="13" font-weight="600" text-anchor="middle">x_f</text>

    <!-- Central annotation badge -->
    <rect x="140" y="105" width="95" height="42" rx="6" fill="rgba(24, 24, 27, 0.85)" stroke="rgba(255,255,255,0.1)"/>
    <text x="187" y="122" fill="#f4f4f5" font-size="11" font-weight="600" text-anchor="middle">Total Area =</text>
    <text x="187" y="138" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">∫ F(x) dx = W</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.2: Work done by a variable force equals the definite integral (total area under the $F-x$ curve) between $x_i$ and $x_f$.</div>
</div>

**3. Mathematical Steps:**  
The instantaneous kinetic energy of the particle is:
$$K = \frac{1}{2}mv^2$$

Differentiating both sides with respect to time $t$:
$$\frac{dK}{dt} = \frac{d}{dt}\left(\frac{1}{2}mv^2\right) = \frac{1}{2}m\left(2v\frac{dv}{dt}\right) = mv\frac{dv}{dt}$$

Using the definition of instantaneous acceleration $a = \frac{dv}{dt}$:
$$\frac{dK}{dt} = m a v$$

By Newton’s Second Law ($F = ma$):
$$\frac{dK}{dt} = F v$$

Since velocity is defined as $v = \frac{dx}{dt}$:
$$\frac{dK}{dt} = F \left(\frac{dx}{dt}\right)$$

Multiplying both sides by the time differential $dt$:
$$dK = F\,dx$$

Integrating both sides within the physical boundary conditions:
* At position $x = x_i$, kinetic energy is $K_i = \frac{1}{2}mv_i^2$.
* At position $x = x_f$, kinetic energy is $K_f = \frac{1}{2}mv_f^2$.

$$\int_{K_i}^{K_f} dK = \int_{x_i}^{x_f} F\,dx$$

Evaluating the left-hand integral:
$$[K]_{K_i}^{K_f} = K_f - K_i = \Delta K$$

The right-hand side represents the total work done $W$ by the variable force:
$$W = \int_{x_i}^{x_f} F\,dx$$

Equating the two sides:

**4. Final Result:**
$$\mathbf{W = \Delta K = K_f - K_i}$$

---

### Derivation 3: Work Done by a Spring Force & Elastic Potential Energy

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Spring-Mass Configurations: Equilibrium, Extension, and Compression</div>
  <svg viewBox="0 0 540 250" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrSpring_wep_d3" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrForce_wep_d3" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
      <marker id="arrExt_wep_d3" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#10b981"/>
      </marker>
    </defs>

    <!-- Support Wall on Left -->
    <line x1="50" y1="15" x2="50" y2="235" stroke="#71717a" stroke-width="4"/>
    <line x1="42" y1="20" x2="50" y2="30" stroke="#52525b" stroke-width="1.5"/>
    <line x1="42" y1="50" x2="50" y2="60" stroke="#52525b" stroke-width="1.5"/>
    <line x1="42" y1="80" x2="50" y2="90" stroke="#52525b" stroke-width="1.5"/>
    <line x1="42" y1="110" x2="50" y2="120" stroke="#52525b" stroke-width="1.5"/>
    <line x1="42" y1="140" x2="50" y2="150" stroke="#52525b" stroke-width="1.5"/>
    <line x1="42" y1="170" x2="50" y2="180" stroke="#52525b" stroke-width="1.5"/>
    <line x1="42" y1="200" x2="50" y2="210" stroke="#52525b" stroke-width="1.5"/>

    <!-- Reference line x = 0 -->
    <line x1="260" y1="15" x2="260" y2="235" stroke="#71717a" stroke-width="1.5" stroke-dasharray="4 4"/>
    <text x="260" y="12" fill="#a1a1aa" font-size="11" text-anchor="middle">Equilibrium (x = 0)</text>

    <!-- STATE 1: Relaxed (x = 0) -->
    <!-- Floor 1 -->
    <line x1="50" y1="75" x2="490" y2="75" stroke="#3f3f46" stroke-width="1"/>
    <!-- Spring 1 -->
    <path d="M 50 55 L 75 55 L 85 43 L 105 67 L 125 43 L 145 67 L 165 43 L 185 67 L 205 43 L 225 67 L 235 55 L 260 55" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <!-- Block 1 -->
    <rect x="260" y="35" width="45" height="40" rx="4" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="282" y="60" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">m</text>
    <text x="325" y="58" fill="#38bdf8" font-size="11" font-weight="600">Relaxed: x = 0, F_s = 0</text>

    <!-- STATE 2: Elongation (+x) -->
    <!-- Floor 2 -->
    <line x1="50" y1="155" x2="490" y2="155" stroke="#3f3f46" stroke-width="1"/>
    <!-- Spring 2 (stretched) -->
    <path d="M 50 135 L 85 135 L 100 123 L 130 147 L 160 123 L 190 147 L 220 123 L 250 147 L 280 123 L 310 147 L 330 135 L 360 135" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <!-- Block 2 -->
    <rect x="360" y="115" width="45" height="40" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
    <text x="382" y="140" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">m</text>
    <!-- Displacement vector -->
    <line x1="260" y1="168" x2="360" y2="168" stroke="#10b981" stroke-width="2" marker-end="url(#arrExt_wep_d3)"/>
    <text x="310" y="182" fill="#10b981" font-size="11" font-weight="600" text-anchor="middle">+x (Displacement)</text>
    <!-- Restoring force vector -->
    <line x1="360" y1="135" x2="290" y2="135" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrForce_wep_d3)"/>
    <text x="325" y="125" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">F_s = -kx</text>

    <!-- STATE 3: Compression (-x) -->
    <!-- Floor 3 -->
    <line x1="50" y1="230" x2="490" y2="230" stroke="#3f3f46" stroke-width="1"/>
    <!-- Spring 3 (compressed) -->
    <path d="M 50 210 L 65 210 L 72 198 L 86 222 L 100 198 L 114 222 L 128 198 L 142 222 L 156 198 L 170 222 L 177 210 L 190 210" fill="none" stroke="#a855f7" stroke-width="2"/>
    <!-- Block 3 -->
    <rect x="190" y="190" width="45" height="40" rx="4" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
    <text x="212" y="215" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">m</text>
    <!-- Compression displacement vector -->
    <line x1="260" y1="243" x2="235" y2="243" stroke="#a855f7" stroke-width="2" marker-end="url(#arrSpring_wep_d3)"/>
    <text x="260" y="247" fill="#c084fc" font-size="11" font-weight="600" text-anchor="start"> -x</text>
    <!-- Restoring force pushing right -->
    <line x1="235" y1="210" x2="280" y2="210" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrForce_wep_d3)"/>
    <text x="260" y="200" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">F_s = +k|x|</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.3: Physical configurations of an ideal spring-mass oscillator showing Hooke's restoring force acting opposite to displacement.</div>
</div>

**1. Aim:**  
To calculate the work done by the restoring spring force during elongation, and determine the elastic potential energy stored in the spring.

**2. Physical Assumptions:**  
* An ideal, massless spring obeying Hooke's Law rests on a frictionless horizontal plane.
* The restoring force exerted by the spring at displacement $x$ from equilibrium is:
  $$F_s = -kx$$
  where $k$ is the spring stiffness constant and the negative sign indicates the force acts opposite to displacement.

**3. Part A: Work Done by the Spring Force ($W_s$)**  
Let the block be displaced from an initial elongation $x_i$ to a final elongation $x_f$.  
The work done by the spring force for an infinitesimal displacement $dx$ is:
$$dW_s = F_s\,dx = (-kx)\,dx$$

Integrating from $x_i$ to $x_f$:
$$W_s = \int_{x_i}^{x_f} (-kx)\,dx = -k \int_{x_i}^{x_f} x\,dx$$
$$W_s = -k \left[ \frac{x^2}{2} \right]_{x_i}^{x_f} = -\frac{1}{2}k(x_f^2 - x_i^2)$$

If stretched from the unstretched reference position ($x_i = 0$) to final position $x_f = x$:
$$\mathbf{W_s = -\frac{1}{2}kx^2}$$

**4. Part B: Elastic Potential Energy ($U_s$)**  
By definition, change in potential energy is the negative of work done by the internal conservative force:
$$\Delta U = U(x) - U(0) = -W_s$$

Setting the relaxed spring position as the zero potential energy reference, $U(0) = 0$:
$$U(x) - 0 = -\left(-\frac{1}{2}kx^2\right)$$

**5. Final Result:**
$$\mathbf{U(x) = \frac{1}{2}kx^2}$$

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Spring Force-Displacement Plot & Potential Energy Well Parabola</div>
  <svg viewBox="0 0 540 230" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <linearGradient id="gradHooke_wep" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#34d399" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="gradWell_wep" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.02"/>
      </linearGradient>
      <marker id="arrHooke_wep_d4" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
    </defs>

    <!-- LEFT GRAPH: F vs x (Hooke's Law & Area) -->
    <g transform="translate(10, 0)">
      <text x="120" y="20" fill="#f4f4f5" font-size="12" font-weight="700" text-anchor="middle">Force-Displacement (Hooke's Law)</text>
      <!-- Axes -->
      <line x1="25" y1="120" x2="225" y2="120" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrHooke_wep_d4)"/>
      <line x1="120" y1="210" x2="120" y2="35" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrHooke_wep_d4)"/>
      <text x="230" y="124" fill="#a1a1aa" font-size="11">x</text>
      <text x="120" y="30" fill="#a1a1aa" font-size="11" text-anchor="middle">F</text>

      <!-- F_ext = +kx line & shaded triangle -->
      <polygon points="120,120 195,55 195,120" fill="url(#gradHooke_wep)"/>
      <line x1="45" y1="185" x2="195" y2="55" stroke="#34d399" stroke-width="2.5"/>
      <text x="200" y="52" fill="#34d399" font-size="10" font-weight="600">F_ext = kx</text>

      <!-- F_s = -kx line -->
      <line x1="45" y1="55" x2="195" y2="185" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3"/>
      <text x="200" y="190" fill="#f43f5e" font-size="10" font-weight="600">F_s = -kx</text>

      <!-- Annotations -->
      <text x="160" y="105" fill="#34d399" font-size="10" font-weight="700">Area = ½kx²</text>
      <line x1="195" y1="120" x2="195" y2="125" stroke="#71717a" stroke-width="1.5"/>
      <text x="195" y="137" fill="#a1a1aa" font-size="10" text-anchor="middle">+x_m</text>
    </g>

    <!-- RIGHT GRAPH: Parabolic Potential Energy Curve U(x) = 1/2 k x^2 -->
    <g transform="translate(280, 0)">
      <text x="120" y="20" fill="#f4f4f5" font-size="12" font-weight="700" text-anchor="middle">Energy vs Position (Potential Well)</text>
      <!-- Axes -->
      <line x1="20" y1="195" x2="230" y2="195" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrHooke_wep_d4)"/>
      <line x1="120" y1="195" x2="120" y2="35" stroke="#71717a" stroke-width="1.5" marker-end="url(#arrHooke_wep_d4)"/>
      <text x="235" y="198" fill="#a1a1aa" font-size="11">x</text>
      <text x="120" y="30" fill="#a1a1aa" font-size="11" text-anchor="middle">E</text>

      <!-- Total Energy horizontal line -->
      <line x1="45" y1="70" x2="195" y2="70" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="200" y="74" fill="#fbbf24" font-size="11" font-weight="700">E = ½kA²</text>

      <!-- Parabolic U(x) fill -->
      <path d="M 45 70 Q 120 205 195 70 L 195 195 L 45 195 Z" fill="url(#gradWell_wep)"/>

      <!-- Parabolic U(x) curve: U = 1/2 k x^2 -->
      <path d="M 45 70 Q 120 205 195 70" fill="none" stroke="#38bdf8" stroke-width="3"/>
      <text x="120" y="145" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">U(x) = ½kx²</text>

      <!-- Kinetic energy inverted parabola -->
      <path d="M 45 195 Q 120 60 195 195" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="3 3"/>
      <text x="120" y="85" fill="#c084fc" font-size="10" font-weight="600" text-anchor="middle">K(x) = E - ½kx²</text>

      <!-- Turning points -->
      <line x1="45" y1="70" x2="45" y2="195" stroke="#71717a" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="195" y1="70" x2="195" y2="195" stroke="#71717a" stroke-width="1" stroke-dasharray="2 2"/>
      <text x="45" y="210" fill="#a1a1aa" font-size="10" text-anchor="middle">-A</text>
      <text x="120" y="210" fill="#a1a1aa" font-size="10" text-anchor="middle">0</text>
      <text x="195" y="210" fill="#a1a1aa" font-size="10" text-anchor="middle">+A</text>
    </g>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.4: (Left) Work done as the triangular area under the external force curve. (Right) Symmetric parabolic potential energy well $U(x)$ and continuous exchange with kinetic energy $K(x)$.</div>
</div>

---

### Derivation 4: Conservation of Mechanical Energy for a Freely Falling Body

**1. Aim & Setup:**  
To verify that the total mechanical energy $E = K + U$ of an isolated object of mass $m$ dropped from rest at height $H$ remains constant at every point during its vertical fall under gravity.

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Free Fall Dynamics at Three Cardinal Elevations</div>
  <svg viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrFall_wep_d5" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
    </defs>

    <!-- Ground Level -->
    <line x1="40" y1="230" x2="480" y2="230" stroke="#71717a" stroke-width="2.5"/>
    <text x="490" y="234" fill="#a1a1aa" font-size="11">Ground (y = 0)</text>

    <!-- Height scale on left -->
    <line x1="70" y1="35" x2="70" y2="230" stroke="#52525b" stroke-width="1.5"/>
    <line x1="65" y1="35" x2="75" y2="35" stroke="#52525b" stroke-width="1.5"/>
    <line x1="65" y1="125" x2="75" y2="125" stroke="#52525b" stroke-width="1.5"/>
    <line x1="65" y1="230" x2="75" y2="230" stroke="#52525b" stroke-width="1.5"/>
    <text x="55" y="39" fill="#a1a1aa" font-size="11" text-anchor="end">y = H</text>
    <text x="55" y="129" fill="#a1a1aa" font-size="11" text-anchor="end">H - x</text>
    <text x="55" y="234" fill="#a1a1aa" font-size="11" text-anchor="end">y = 0</text>

    <!-- Fall trajectory line -->
    <line x1="150" y1="35" x2="150" y2="230" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4"/>

    <!-- Point A (Top) -->
    <circle cx="150" cy="35" r="14" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="150" y="39" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">A</text>
    <rect x="180" y="20" width="280" height="32" rx="6" fill="rgba(24, 24, 27, 0.85)" stroke="rgba(56, 189, 248, 0.3)"/>
    <text x="190" y="40" fill="#f4f4f5" font-size="11">Point A: v = 0, <tspan fill="#34d399">U = mgH</tspan>, <tspan fill="#38bdf8">K = 0</tspan> ⇒ <tspan fill="#fbbf24" font-weight="700">E_A = mgH</tspan></text>

    <!-- Distance fallen bracket -->
    <line x1="125" y1="35" x2="125" y2="125" stroke="#a1a1aa" stroke-width="1.5" marker-end="url(#arrFall_wep_d5)"/>
    <text x="115" y="85" fill="#a1a1aa" font-size="11" text-anchor="end">Fallen: x</text>

    <!-- Point B (Intermediate) -->
    <circle cx="150" cy="125" r="14" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" stroke-width="2"/>
    <text x="150" y="129" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">B</text>
    <line x1="150" y1="139" x2="150" y2="160" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrFall_wep_d5)"/>
    <rect x="180" y="110" width="310" height="32" rx="6" fill="rgba(24, 24, 27, 0.85)" stroke="rgba(245, 158, 11, 0.3)"/>
    <text x="190" y="130" fill="#f4f4f5" font-size="11">Point B: v_B = √(2gx), <tspan fill="#34d399">U = mg(H-x)</tspan>, <tspan fill="#38bdf8">K = mgx</tspan> ⇒ <tspan fill="#fbbf24" font-weight="700">E_B = mgH</tspan></text>

    <!-- Point C (Impact) -->
    <circle cx="150" cy="216" r="14" fill="rgba(52, 211, 153, 0.25)" stroke="#34d399" stroke-width="2"/>
    <text x="150" y="220" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">C</text>
    <line x1="150" y1="210" x2="150" y2="228" stroke="#34d399" stroke-width="2" marker-end="url(#arrFall_wep_d5)"/>
    <rect x="180" y="200" width="295" height="32" rx="6" fill="rgba(24, 24, 27, 0.85)" stroke="rgba(52, 211, 153, 0.3)"/>
    <text x="190" y="220" fill="#f4f4f5" font-size="11">Point C: v_C = √(2gH), <tspan fill="#34d399">U = 0</tspan>, <tspan fill="#38bdf8">K = mgH</tspan> ⇒ <tspan fill="#fbbf24" font-weight="700">E_C = mgH</tspan></text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.5: Free-fall trajectory tracking potential energy $U$ converting directly to kinetic energy $K$ with invariant sum $E = mgH$.</div>
</div>

**2. Physical Analysis at Three Cardinal Points:**

#### Point A (At Initial Height $H$ above Ground):
* Initial velocity: $v_A = 0$
* Kinetic Energy: $K_A = \frac{1}{2}m(0)^2 = 0$
* Potential Energy: $U_A = mgH$
* Total Mechanical Energy at $A$:
  $$E_A = K_A + U_A = 0 + mgH = mgH \quad \text{--- (Equation 1)}$$

#### Point B (At an Intermediate Height $(H - x)$ after Falling Distance $x$):
* Velocity at $B$ obtained via third kinematic equation ($v^2 = u^2 + 2as$):
  $$v_B^2 = 0^2 + 2gx = 2gx$$
* Kinetic Energy: $K_B = \frac{1}{2}mv_B^2 = \frac{1}{2}m(2gx) = mgx$
* Height above ground $= H - x$
* Potential Energy: $U_B = mg(H - x) = mgH - mgx$
* Total Mechanical Energy at $B$:
  $$E_B = K_B + U_B = mgx + (mgH - mgx) = mgH \quad \text{--- (Equation 2)}$$

#### Point C (At Ground Level, Just Before Impact):
* Total distance fallen $= H$
* Velocity at ground: $v_C^2 = 0^2 + 2gH = 2gH$
* Kinetic Energy: $K_C = \frac{1}{2}mv_C^2 = \frac{1}{2}m(2gH) = mgH$
* Height above ground $= 0 \implies U_C = mg(0) = 0$
* Total Mechanical Energy at $C$:
  $$E_C = K_C + U_C = mgH + 0 = mgH \quad \text{--- (Equation 3)}$$

**3. Final Conclusion:**  
Comparing Equations (1), (2), and (3):
$$\mathbf{E_A = E_B = E_C = mgH = \text{constant}}$$

Mechanical energy converts continuously from pure potential energy to pure kinetic energy while the sum remains invariant throughout free fall.

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Energy vs Height Graph for a Freely Falling Body</div>
  <svg viewBox="0 0 500 240" style="width: 100%; max-width: 500px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrEnergy_wep_d6" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
    </defs>

    <!-- Axes -->
    <line x1="70" y1="200" x2="450" y2="200" stroke="#71717a" stroke-width="2" marker-end="url(#arrEnergy_wep_d6)"/>
    <line x1="70" y1="200" x2="70" y2="30" stroke="#71717a" stroke-width="2" marker-end="url(#arrEnergy_wep_d6)"/>
    <text x="455" y="204" fill="#a1a1aa" font-size="13" font-weight="600">Height y</text>
    <text x="60" y="25" fill="#a1a1aa" font-size="13" font-weight="600">Energy</text>

    <!-- Axis Ticks & Marks -->
    <text x="70" y="218" fill="#a1a1aa" font-size="11" text-anchor="middle">0 (Ground)</text>
    <line x1="240" y1="200" x2="240" y2="205" stroke="#71717a" stroke-width="1.5"/>
    <text x="240" y="218" fill="#a1a1aa" font-size="11" text-anchor="middle">H/2</text>
    <line x1="410" y1="200" x2="410" y2="205" stroke="#71717a" stroke-width="1.5"/>
    <text x="410" y="218" fill="#a1a1aa" font-size="11" text-anchor="middle">H</text>

    <!-- Y-axis mark E = mgH -->
    <line x1="65" y1="60" x2="70" y2="60" stroke="#71717a" stroke-width="1.5"/>
    <text x="60" y="64" fill="#fbbf24" font-size="11" font-weight="600" text-anchor="end">mgH</text>
    <line x1="65" y1="130" x2="70" y2="130" stroke="#71717a" stroke-width="1.5"/>
    <text x="60" y="134" fill="#a1a1aa" font-size="11" text-anchor="end">½mgH</text>

    <!-- Total Mechanical Energy line (horizontal) -->
    <line x1="70" y1="60" x2="410" y2="60" stroke="#fbbf24" stroke-width="3"/>
    <text x="420" y="64" fill="#fbbf24" font-size="12" font-weight="700">E = K + U = mgH</text>

    <!-- Potential Energy Line: U = mgy (0 to mgH) -->
    <line x1="70" y1="200" x2="410" y2="60" stroke="#34d399" stroke-width="2.5"/>
    <text x="360" y="105" fill="#34d399" font-size="12" font-weight="700">U(y) = mgy</text>

    <!-- Kinetic Energy Line: K = mg(H - y) (mgH to 0) -->
    <line x1="70" y1="60" x2="410" y2="200" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="135" y="105" fill="#38bdf8" font-size="12" font-weight="700">K(y) = mg(H - y)</text>

    <!-- Equipartition intersection point at y = H/2 -->
    <circle cx="240" cy="130" r="5" fill="#f43f5e"/>
    <line x1="240" y1="130" x2="240" y2="200" stroke="#71717a" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="70" y1="130" x2="240" y2="130" stroke="#71717a" stroke-width="1" stroke-dasharray="3 3"/>
    <rect x="250" y="118" width="135" height="24" rx="4" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="317" y="134" fill="#f43f5e" font-size="11" font-weight="600" text-anchor="middle">At y = H/2: K = U = ½mgH</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.6: Variation of kinetic energy $K$, potential energy $U$, and total mechanical energy $E$ as a function of height $y$ above the ground.</div>
</div>

---

### Derivation 5: Complete Dynamics of Motion in a Vertical Circle

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Dynamics of Motion in a Vertical Circle (Light Inextensible String)</div>
  <svg viewBox="0 0 540 380" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrVcm_wep_d7" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrVcmRose_wep_d7" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
      <marker id="arrVcmAmber_wep_d7" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f59e0b"/>
      </marker>
      <marker id="arrVcmEmerald_wep_d7" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#34d399"/>
      </marker>
    </defs>

    <!-- Circular Orbit Track -->
    <circle cx="220" cy="190" r="130" fill="none" stroke="#3f3f46" stroke-width="2" stroke-dasharray="5 5"/>

    <!-- Center Pivot O -->
    <circle cx="220" cy="190" r="4" fill="#ffffff"/>
    <text x="210" y="185" fill="#ffffff" font-size="12" font-weight="700">O</text>
    <!-- Vertical guide line -->
    <line x1="220" y1="40" x2="220" y2="340" stroke="#52525b" stroke-width="1" stroke-dasharray="3 3"/>

    <!-- TOP POINT H (Highest Point, y = 2R, theta = 180 deg) -->
    <circle cx="220" cy="60" r="12" fill="rgba(244, 63, 94, 0.25)" stroke="#f43f5e" stroke-width="2"/>
    <text x="220" y="64" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">H</text>
    <!-- Velocity at top (leftward) -->
    <line x1="220" y1="60" x2="160" y2="60" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrVcm_wep_d7)"/>
    <text x="145" y="55" fill="#38bdf8" font-size="11" font-weight="700">v_H ≥ √(gR)</text>
    <!-- Forces at top (both downward) -->
    <line x1="214" y1="72" x2="214" y2="105" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrVcmRose_wep_d7)"/>
    <text x="205" y="95" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="end">T_H</text>
    <line x1="226" y1="72" x2="226" y2="115" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrVcmAmber_wep_d7)"/>
    <text x="235" y="105" fill="#f59e0b" font-size="10" font-weight="700">mg</text>

    <!-- HORIZONTAL POINT M (Midway, theta = 90 deg) -->
    <circle cx="90" cy="190" r="10" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
    <text x="90" y="194" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">M</text>
    <!-- Tension inward -->
    <line x1="90" y1="190" x2="135" y2="190" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrVcmRose_wep_d7)"/>
    <text x="115" y="180" fill="#f43f5e" font-size="10" font-weight="600">T_M = 3mg</text>
    <!-- Velocity downward -->
    <line x1="90" y1="190" x2="90" y2="135" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrVcm_wep_d7)"/>
    <text x="80" y="130" fill="#38bdf8" font-size="11" font-weight="700">v_M = √(3gR)</text>

    <!-- BOTTOM POINT L (Lowest Point, y = 0, theta = 0 deg) -->
    <circle cx="220" cy="320" r="12" fill="rgba(52, 211, 153, 0.25)" stroke="#34d399" stroke-width="2"/>
    <text x="220" y="324" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">L</text>
    <!-- Velocity at bottom (rightward) -->
    <line x1="220" y1="320" x2="300" y2="320" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrVcm_wep_d7)"/>
    <text x="310" y="324" fill="#38bdf8" font-size="11" font-weight="700">v_L ≥ √(5gR)</text>
    <!-- Tension upward -->
    <line x1="220" y1="320" x2="220" y2="265" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrVcmRose_wep_d7)"/>
    <text x="210" y="275" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="end">T_L</text>
    <!-- Gravity downward -->
    <line x1="220" y1="320" x2="220" y2="365" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrVcmAmber_wep_d7)"/>
    <text x="230" y="360" fill="#f59e0b" font-size="10" font-weight="700">mg</text>

    <!-- GENERAL POSITION P (Angle theta) -->
    <!-- Position at theta = 50 deg from bottom vertical: (220 + 130*sin(50), 190 + 130*cos(50)) = (320, 274) -->
    <line x1="220" y1="190" x2="320" y2="274" stroke="#a1a1aa" stroke-width="2"/>
    <circle cx="320" cy="274" r="11" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="320" y="278" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">P</text>
    <!-- String angle theta arc -->
    <path d="M 220 230 A 40 40 0 0 0 245 222" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="238" y="242" fill="#fbbf24" font-size="11">θ</text>
    <!-- Inward Tension vector along string -->
    <line x1="320" y1="274" x2="270" y2="232" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrVcmRose_wep_d7)"/>
    <text x="285" y="222" fill="#f43f5e" font-size="10" font-weight="700">T(θ)</text>
    <!-- Gravity straight down -->
    <line x1="320" y1="274" x2="320" y2="330" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrVcmAmber_wep_d7)"/>
    <text x="325" y="335" fill="#f59e0b" font-size="10" font-weight="700">mg</text>
    <!-- Component mg cos(theta) radially outward -->
    <line x1="320" y1="274" x2="355" y2="303" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arrVcmAmber_wep_d7)"/>
    <text x="365" y="315" fill="#f59e0b" font-size="9">mg cosθ</text>
    <!-- Component mg sin(theta) tangential retarding -->
    <line x1="320" y1="274" x2="285" y2="315" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arrVcmAmber_wep_d7)"/>
    <text x="270" y="335" fill="#f59e0b" font-size="9">mg sinθ</text>

    <!-- RIGHT SUMMARY PANEL -->
    <rect x="365" y="50" width="165" height="185" rx="8" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="447" y="70" fill="#f4f4f5" font-size="11" font-weight="700" text-anchor="middle">CRITICAL VALUES</text>
    <line x1="380" y1="78" x2="515" y2="78" stroke="#3f3f46" stroke-width="1"/>
    <text x="375" y="96" fill="#38bdf8" font-size="10" font-weight="600">v_L = √(5gR)</text>
    <text x="375" y="114" fill="#38bdf8" font-size="10" font-weight="600">v_M = √(3gR)</text>
    <text x="375" y="132" fill="#38bdf8" font-size="10" font-weight="600">v_H = √(gR)</text>
    <line x1="380" y1="140" x2="515" y2="140" stroke="#3f3f46" stroke-width="1"/>
    <text x="375" y="158" fill="#f43f5e" font-size="10" font-weight="600">T_L = 6mg</text>
    <text x="375" y="176" fill="#f43f5e" font-size="10" font-weight="600">T_H = 0 (critical)</text>
    <text x="375" y="196" fill="#34d399" font-size="10" font-weight="700">T_L - T_H = 6mg</text>
    <text x="375" y="222" fill="#a1a1aa" font-size="9">Independent of v_L</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.7: Motion in a vertical circle detailing centripetal balance, radial components, and threshold velocities for complete looping.</div>
</div>

**1. Aim:**  
To derive expressions for:
* Tension at any angle $\theta$
* Critical velocity at the highest point ($v_H$)
* Minimum launch velocity at the lowest point ($v_L$)
* Difference in string tension between bottom and top ($T_L - T_H$)

---

#### Part A: Tension at Any Angle $\theta$
Consider a bob of mass $m$ tied to a massless string of length $R$. Let its speed be $v$ when the string makes an angle $\theta$ with the downward vertical.  

Forces along the radial direction:
1. Tension $T$ acting inward toward the center $O$.
2. Radial component of gravity $mg\cos\theta$ acting outward away from the center.

Net radial centripetal force:
$$F_c = T - mg\cos\theta = \frac{mv^2}{R}$$
$$\mathbf{T(\theta) = \frac{mv^2}{R} + mg\cos\theta \quad \text{--- (1)}}$$

---

#### Part B: Critical Velocity at Highest Point ($v_H$)
At the top of the loop ($H$), the string is oriented vertically downward from the center, corresponding to $\theta = 180^\circ$ ($\cos 180^\circ = -1$):
$$T_H = \frac{mv_H^2}{R} + mg\cos(180^\circ) = \frac{mv_H^2}{R} - mg$$

To maintain a circular path without the string slacking, the tension must satisfy $T_H \ge 0$.  
At the threshold of looping the circle ($T_H = 0$):
$$\frac{mv_H^2}{R} - mg = 0 \implies \frac{mv_H^2}{R} = mg \implies v_H^2 = gR$$
$$\mathbf{v_H = \sqrt{gR}}$$

---

#### Part C: Critical Velocity at Lowest Point ($v_L$)
Applying the Law of Conservation of Mechanical Energy between lowest point $L$ (reference level $U = 0$) and highest point $H$ (elevation $2R$):
$$E_L = E_H$$
$$K_L + U_L = K_H + U_H$$
$$\frac{1}{2}mv_L^2 + 0 = \frac{1}{2}mv_H^2 + mg(2R)$$

Multiply through by $\frac{2}{m}$:
$$v_L^2 = v_H^2 + 4gR$$

Substitute the minimum required speed at top $v_H^2 = gR$:
$$v_L^2 = gR + 4gR = 5gR$$
$$\mathbf{v_L = \sqrt{5gR}}$$

---

#### Part D: Tension Difference Between Bottom and Top ($T_L - T_H$)
At the lowest point ($\theta = 0^\circ, \cos 0^\circ = 1$):
$$T_L = \frac{mv_L^2}{R} + mg$$

At the highest point:
$$T_H = \frac{mv_H^2}{R} - mg$$

Subtract $T_H$ from $T_L$:
$$T_L - T_H = \left(\frac{mv_L^2}{R} + mg\right) - \left(\frac{mv_H^2}{R} - mg\right)$$
$$T_L - T_H = \frac{m}{R}(v_L^2 - v_H^2) + 2mg$$

From energy conservation, we established that $v_L^2 - v_H^2 = 4gR$. Substitute this into the tension difference:
$$T_L - T_H = \frac{m}{R}(4gR) + 2mg = 4mg + 2mg$$

**Final Result:**
$$\mathbf{T_L - T_H = 6mg}$$

---

### Derivation 6: Elastic Collision in One Dimension (Head-On)

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">One-Dimensional Head-On Elastic Collision Stages</div>
  <svg viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrColCyan_wep_d8" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrColPurple_wep_d8" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#c084fc"/>
      </marker>
      <marker id="arrColRose_wep_d8" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
    </defs>

    <!-- STAGE 1: Before Collision -->
    <text x="30" y="45" fill="#a1a1aa" font-size="11" font-weight="700">1. Before:</text>
    <circle cx="150" cy="40" r="18" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="150" y="44" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <line x1="170" y1="40" x2="215" y2="40" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrColCyan_wep_d8)"/>
    <text x="190" y="32" fill="#38bdf8" font-size="11" font-weight="600">u₁</text>

    <circle cx="280" cy="40" r="18" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
    <text x="280" y="44" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₂</text>
    <line x1="300" y1="40" x2="330" y2="40" stroke="#c084fc" stroke-width="2" marker-end="url(#arrColPurple_wep_d8)"/>
    <text x="315" y="32" fill="#c084fc" font-size="11" font-weight="600">u₂</text>
    <text x="400" y="44" fill="#fbbf24" font-size="11">(u₁ > u₂: Approach)</text>
    <line x1="30" y1="75" x2="490" y2="75" stroke="#27272a" stroke-width="1"/>

    <!-- STAGE 2: During Collision (Impact) -->
    <text x="30" y="115" fill="#a1a1aa" font-size="11" font-weight="700">2. During:</text>
    <ellipse cx="215" cy="110" rx="16" ry="18" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="215" y="114" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <ellipse cx="245" cy="110" rx="16" ry="18" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
    <text x="245" y="114" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₂</text>
    <!-- Internal contact forces -->
    <line x1="205" y1="90" x2="175" y2="90" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrColRose_wep_d8)"/>
    <text x="190" y="84" fill="#f43f5e" font-size="10">F₂₁</text>
    <line x1="255" y1="90" x2="285" y2="90" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrColRose_wep_d8)"/>
    <text x="270" y="84" fill="#f43f5e" font-size="10">F₁₂</text>
    <text x="330" y="114" fill="#a1a1aa" font-size="11">Elastic deformation & recovery</text>
    <line x1="30" y1="145" x2="490" y2="145" stroke="#27272a" stroke-width="1"/>

    <!-- STAGE 3: After Collision -->
    <text x="30" y="185" fill="#a1a1aa" font-size="11" font-weight="700">3. After:</text>
    <circle cx="150" cy="180" r="18" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="150" y="184" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <line x1="170" y1="180" x2="200" y2="180" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrColCyan_wep_d8)"/>
    <text x="185" y="172" fill="#38bdf8" font-size="11" font-weight="600">v₁</text>

    <circle cx="280" cy="180" r="18" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
    <text x="280" y="184" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₂</text>
    <line x1="300" y1="180" x2="355" y2="180" stroke="#c084fc" stroke-width="2.5" marker-end="url(#arrColPurple_wep_d8)"/>
    <text x="325" y="172" fill="#c084fc" font-size="11" font-weight="600">v₂</text>
    <text x="400" y="184" fill="#34d399" font-size="11" font-weight="600">(v₂ > v₁: Separation)</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.8: Timeline of a 1D head-on elastic collision demonstrating approach, deformation, and relative separation.</div>
</div>

**1. Aim:**  
To derive final velocities $v_1$ and $v_2$ for two smooth spherical bodies undergoing a perfectly elastic head-on collision, and to prove that the relative velocity of separation equals the relative velocity of approach ($e = 1$).

**2. Physical Assumptions:**  
* Masses are $m_1$ and $m_2$ with initial velocities $u_1$ and $u_2$ along the $x$-axis ($u_1 > u_2$).
* Since the collision is elastic, both total linear momentum and total kinetic energy are conserved.

**3. Mathematical Steps:**

**Step I: Conservation of Linear Momentum:**
$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

Regrouping terms by mass:
$$m_1(u_1 - v_1) = m_2(v_2 - u_2) \quad \text{--- (Equation 1)}$$

**Step II: Conservation of Kinetic Energy:**
$$\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2$$

Multiplying by 2 and regrouping terms by mass:
$$m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2)$$

Applying algebraic identity $(a^2 - b^2) = (a - b)(a + b)$:
$$m_1(u_1 - v_1)(u_1 + v_1) = m_2(v_2 - u_2)(v_2 + u_2) \quad \text{--- (Equation 2)}$$

**Step III: Velocity of Approach Equals Velocity of Separation:**  
Divide Equation (2) by Equation (1):
$$\frac{m_1(u_1 - v_1)(u_1 + v_1)}{m_1(u_1 - v_1)} = \frac{m_2(v_2 - u_2)(v_2 + u_2)}{m_2(v_2 - u_2)}$$
$$u_1 + v_1 = v_2 + u_2$$

Rearranging terms:
$$\mathbf{u_1 - u_2 = v_2 - v_1}$$
$$\text{Relative Velocity of Approach} = \text{Relative Velocity of Separation}$$
$$e = \frac{v_2 - v_1}{u_1 - u_2} = 1$$

**Step IV: Solving for Final Velocities:**  
From above, express $v_2$ in terms of $v_1$:
$$v_2 = u_1 - u_2 + v_1 \quad \text{--- (Equation 3)}$$

Substitute Equation (3) into Equation (1):
$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2(u_1 - u_2 + v_1)$$
$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 u_1 - m_2 u_2 + m_2 v_1$$
$$(m_1 + m_2)v_1 = (m_1 - m_2)u_1 + 2m_2 u_2$$
$$\mathbf{v_1 = \left(\frac{m_1 - m_2}{m_1 + m_2}\right)u_1 + \left(\frac{2m_2}{m_1 + m_2}\right)u_2}$$

Similarly, substituting $v_1 = v_2 - (u_1 - u_2)$ into Equation (1) yields:
$$\mathbf{v_2 = \left(\frac{2m_1}{m_1 + m_2}\right)u_1 + \left(\frac{m_2 - m_1}{m_1 + m_2}\right)u_2}$$

---

### Derivation 7: Loss of Kinetic Energy in a Perfectly Inelastic Collision (1D)

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Perfect Inelastic Collision & Maximum Kinetic Energy Dissipation</div>
  <svg viewBox="0 0 520 180" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrInelasticCyan_wep_d9" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrInelasticAmber_wep_d9" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f59e0b"/>
      </marker>
    </defs>

    <!-- BEFORE COLLISION -->
    <text x="30" y="45" fill="#a1a1aa" font-size="11" font-weight="700">Before (e = 0):</text>
    <circle cx="150" cy="40" r="18" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <text x="150" y="44" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <line x1="170" y1="40" x2="215" y2="40" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrInelasticCyan_wep_d9)"/>
    <text x="190" y="32" fill="#38bdf8" font-size="11" font-weight="600">u₁</text>

    <circle cx="280" cy="40" r="18" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
    <text x="280" y="44" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₂</text>
    <line x1="300" y1="40" x2="330" y2="40" stroke="#c084fc" stroke-width="2" marker-end="url(#arrInelasticCyan_wep_d9)"/>
    <text x="315" y="32" fill="#c084fc" font-size="11" font-weight="600">u₂</text>
    <line x1="30" y1="75" x2="490" y2="75" stroke="#27272a" stroke-width="1"/>

    <!-- AFTER COLLISION (COALESCED BODY) -->
    <text x="30" y="125" fill="#a1a1aa" font-size="11" font-weight="700">After (Stuck):</text>
    <!-- Joined masses -->
    <rect x="150" y="105" width="80" height="40" rx="8" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" stroke-width="2"/>
    <line x1="190" y1="105" x2="190" y2="145" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="170" y="130" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <text x="210" y="130" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₂</text>

    <!-- Common velocity vector -->
    <line x1="230" y1="125" x2="310" y2="125" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrInelasticAmber_wep_d9)"/>
    <text x="270" y="115" fill="#fbbf24" font-size="12" font-weight="700">V_f = (m₁u₁ + m₂u₂) / (m₁ + m₂)</text>

    <!-- Energy loss callout badge -->
    <rect x="330" y="105" width="165" height="45" rx="6" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e"/>
    <text x="412" y="122" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">ΔK = ½μ(u₁ - u₂)² > 0</text>
    <text x="412" y="138" fill="#fda4af" font-size="10" text-anchor="middle">Lost to heat, sound & strain</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.9: Coalescence of two colliding bodies with maximum kinetic energy dissipation into non-mechanical forms.</div>
</div>

**1. Aim & Setup:**  
Two bodies of masses $m_1$ and $m_2$ moving with initial velocities $u_1$ and $u_2$ collide and stick together, moving forward as a single composite mass $(m_1 + m_2)$ with common final velocity $V_f$. To prove that mechanical kinetic energy is always dissipated ($\Delta K > 0$).

**2. Mathematical Steps:**  
By Conservation of Linear Momentum:
$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)V_f$$
$$V_f = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2} \quad \text{--- (1)}$$

Initial Kinetic Energy:
$$K_i = \frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2$$

Final Kinetic Energy:
$$K_f = \frac{1}{2}(m_1 + m_2)V_f^2$$

Substitute Equation (1) for $V_f$:
$$K_f = \frac{1}{2}(m_1 + m_2)\left(\frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}\right)^2 = \frac{(m_1 u_1 + m_2 u_2)^2}{2(m_1 + m_2)}$$

Loss of kinetic energy $\Delta K = K_i - K_f$:
$$\Delta K = \left(\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2\right) - \frac{(m_1 u_1 + m_2 u_2)^2}{2(m_1 + m_2)}$$

Taking common denominator $2(m_1 + m_2)$:
$$\Delta K = \frac{(m_1 u_1^2 + m_2 u_2^2)(m_1 + m_2) - (m_1 u_1 + m_2 u_2)^2}{2(m_1 + m_2)}$$

Expanding both numerator terms:
$$\text{Term 1} = m_1^2 u_1^2 + m_1 m_2 u_1^2 + m_1 m_2 u_2^2 + m_2^2 u_2^2$$
$$\text{Term 2} = m_1^2 u_1^2 + 2m_1 m_2 u_1 u_2 + m_2^2 u_2^2$$

Subtracting Term 2 from Term 1:
$$\text{Numerator} = m_1 m_2 u_1^2 + m_1 m_2 u_2^2 - 2m_1 m_2 u_1 u_2 = m_1 m_2 (u_1^2 + u_2^2 - 2u_1 u_2)$$
$$\text{Numerator} = m_1 m_2 (u_1 - u_2)^2$$

**3. Final Result:**
$$\mathbf{\Delta K = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(u_1 - u_2)^2 = \frac{1}{2}\mu(u_1 - u_2)^2}$$

Since masses $m_1, m_2 > 0$ and $(u_1 - u_2)^2 > 0$, **$\Delta K > 0$ always**.  
Kinetic energy is inevitably dissipated, transforming into internal thermal energy, permanent structural deformation work, and sound waves.

---

### Derivation 8: Glancing Elastic Collision of Two Equal Masses ($m_1 = m_2$) with Target at Rest

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">2D Glancing Elastic Collision of Equal Masses (Orthogonal Scattering)</div>
  <svg viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrGlanceCyan_wep_d10" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrGlancePurple_wep_d10" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#c084fc"/>
      </marker>
    </defs>

    <!-- Initial horizontal axis of motion -->
    <line x1="40" y1="130" x2="480" y2="130" stroke="#52525b" stroke-width="1.5" stroke-dasharray="4 4"/>
    <text x="485" y="134" fill="#a1a1aa" font-size="11">Initial Axis</text>

    <!-- Incident mass m_1 -->
    <circle cx="90" cy="130" r="16" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="134" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <line x1="110" y1="130" x2="165" y2="130" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrGlanceCyan_wep_d10)"/>
    <text x="135" y="120" fill="#38bdf8" font-size="12" font-weight="700">u₁</text>

    <!-- Impact Center -->
    <circle cx="210" cy="130" r="16" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="210" y="165" fill="#a1a1aa" font-size="10" text-anchor="middle">m₂ (at rest)</text>

    <!-- Post-collision scattered mass m_1 (theta_1 = 35 deg above axis) -->
    <line x1="210" y1="130" x2="350" y2="50" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrGlanceCyan_wep_d10)"/>
    <circle cx="350" cy="50" r="16" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="350" y="54" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₁</text>
    <text x="280" y="70" fill="#38bdf8" font-size="12" font-weight="700">v₁</text>

    <!-- Angle theta_1 arc -->
    <path d="M 260 130 A 50 50 0 0 0 251 101" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="270" y="112" fill="#38bdf8" font-size="11">θ₁</text>

    <!-- Post-collision recoiling mass m_2 (theta_2 = 55 deg below axis) -->
    <line x1="210" y1="130" x2="310" y2="212" stroke="#c084fc" stroke-width="2.5" marker-end="url(#arrGlancePurple_wep_d10)"/>
    <circle cx="310" cy="212" r="16" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
    <text x="310" y="216" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">m₂</text>
    <text x="250" y="190" fill="#c084fc" font-size="12" font-weight="700">v₂</text>

    <!-- Angle theta_2 arc -->
    <path d="M 260 130 A 50 50 0 0 1 239 171" fill="none" stroke="#c084fc" stroke-width="1.5"/>
    <text x="268" y="155" fill="#c084fc" font-size="11">θ₂</text>

    <!-- 90 Degree Right-Angle Indicator between v_1 and v_2 -->
    <path d="M 235 116 L 253 130 L 228 145" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="260" y="134" fill="#34d399" font-size="12" font-weight="700">90°</text>

    <!-- Invariant Box Callout -->
    <rect x="380" y="145" width="125" height="48" rx="6" fill="rgba(52, 211, 153, 0.15)" stroke="#34d399"/>
    <text x="442" y="165" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">θ₁ + θ₂ = 90°</text>
    <text x="442" y="181" fill="#a7f3d0" font-size="10" text-anchor="middle">v₁ ⟂ v₂ always</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.10: Glancing 2D elastic collision of equal masses ($m_1 = m_2$) with stationary target: post-collision velocities are strictly orthogonal ($\theta_1 + \theta_2 = 90^\circ$).</div>
</div>

**1. Aim & Statement:**  
To prove that when a moving particle collides elastically with an identical stationary target particle in two dimensions, the two particles fly off at right angles ($\theta_1 + \theta_2 = 90^\circ$) to each other.

**2. Physical Assumptions:**  
* $m_1 = m_2 = m$
* Initial velocities: $\vec{u}_1 \ne \vec{0}$, $\vec{u}_2 = \vec{0}$
* Final velocities: $\vec{v}_1$ and $\vec{v}_2$

**3. Mathematical Steps:**

**Step I: Conservation of Linear Momentum (Vector Form):**
$$m\vec{u}_1 + m(\vec{0}) = m\vec{v}_1 + m\vec{v}_2$$

Cancelling mass $m$:
$$\vec{u}_1 = \vec{v}_1 + \vec{v}_2$$

Taking the self-dot product of both sides:
$$\vec{u}_1 \cdot \vec{u}_1 = (\vec{v}_1 + \vec{v}_2) \cdot (\vec{v}_1 + \vec{v}_2)$$
$$u_1^2 = v_1^2 + v_2^2 + 2(\vec{v}_1 \cdot \vec{v}_2) \quad \text{--- (Equation 1)}$$

**Step II: Conservation of Kinetic Energy:**  
Because the collision is perfectly elastic:
$$\frac{1}{2}m u_1^2 = \frac{1}{2}m v_1^2 + \frac{1}{2}m v_2^2$$

Cancelling $\frac{1}{2}m$:
$$u_1^2 = v_1^2 + v_2^2 \quad \text{--- (Equation 2)}$$

**Step III: Equating the Equations:**  
Substitute Equation (2) into Equation (1):
$$v_1^2 + v_2^2 = v_1^2 + v_2^2 + 2(\vec{v}_1 \cdot \vec{v}_2)$$
$$2(\vec{v}_1 \cdot \vec{v}_2) = 0 \implies \vec{v}_1 \cdot \vec{v}_2 = 0$$

Expanding the scalar dot product:
$$v_1 v_2 \cos(\theta_1 + \theta_2) = 0$$

Assuming non-zero post-collision velocities ($v_1 \ne 0, v_2 \ne 0$):
$$\cos(\theta_1 + \theta_2) = 0$$
$$\mathbf{\theta_1 + \theta_2 = 90^\circ}$$

---

### Derivation 9: Height, Velocity, and Total Distance for a Bouncing Ball Dropped from Height $h_0$

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Damped Bouncing Ball Trajectory & Geometric Sequence of Rebound Peaks</div>
  <svg viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <linearGradient id="gradBounce_wep" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.0"/>
      </linearGradient>
    </defs>

    <!-- Ground baseline -->
    <line x1="30" y1="200" x2="510" y2="200" stroke="#71717a" stroke-width="2.5"/>
    <line x1="30" y1="206" x2="510" y2="206" stroke="#3f3f46" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="515" y="204" fill="#a1a1aa" font-size="11">Ground</text>

    <!-- Height scale on left -->
    <line x1="60" y1="35" x2="60" y2="200" stroke="#52525b" stroke-width="1.5"/>
    <line x1="55" y1="35" x2="65" y2="35" stroke="#52525b" stroke-width="1.5"/>
    <text x="50" y="39" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="end">h₀</text>

    <!-- Initial Drop from h_0 at x = 80 -->
    <circle cx="80" cy="35" r="10" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" stroke-width="2"/>
    <line x1="80" y1="45" x2="80" y2="195" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="80" y="25" fill="#fbbf24" font-size="11" font-weight="600" text-anchor="middle">Release h₀</text>

    <!-- 1st Bounce Arc (x = 80 to 200, peak at x = 140, height = 75% of h0: y = 76) -->
    <path d="M 80 200 Q 140 -48 200 200" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="140" cy="76" r="8" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="140" y1="76" x2="140" y2="200" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="140" y="65" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">h₁ = e²h₀</text>

    <!-- 2nd Bounce Arc (x = 200 to 300, peak at x = 250, y = 125) -->
    <path d="M 200 200 Q 250 50 300 200" fill="none" stroke="#34d399" stroke-width="2.5"/>
    <circle cx="250" cy="125" r="7" fill="rgba(52, 211, 153, 0.3)" stroke="#34d399" stroke-width="1.5"/>
    <line x1="250" y1="125" x2="250" y2="200" stroke="#34d399" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="250" y="115" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">h₂ = e⁴h₀</text>

    <!-- 3rd Bounce Arc (x = 300 to 370, peak at x = 335, y = 158) -->
    <path d="M 300 200 Q 335 116 370 200" fill="none" stroke="#a855f7" stroke-width="2"/>
    <circle cx="335" cy="158" r="6" fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" stroke-width="1.5"/>
    <text x="335" y="150" fill="#c084fc" font-size="9" font-weight="600" text-anchor="middle">h₃ = e⁶h₀</text>

    <!-- Subsequent Tiny Bounces -->
    <path d="M 370 200 Q 395 160 420 200" fill="none" stroke="#a1a1aa" stroke-width="1.5"/>
    <path d="M 420 200 Q 435 180 450 200" fill="none" stroke="#a1a1aa" stroke-width="1.5"/>

    <!-- Exponential Damping Envelope Curve connecting peaks -->
    <path d="M 80 35 Q 140 70 250 125 T 335 158 T 450 200" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="210" y="45" fill="#f43f5e" font-size="10" font-weight="600">Envelope: h_n = e²ⁿ h₀</text>

    <!-- Summary Box -->
    <rect x="360" y="25" width="160" height="60" rx="6" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="440" y="42" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">INFINITE TOTALS</text>
    <text x="370" y="58" fill="#f4f4f5" font-size="10">H_total = h₀(1+e²)/(1-e²)</text>
    <text x="370" y="74" fill="#f4f4f5" font-size="10">T_total = √(2h₀/g)(1+e)/(1-e)</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.11: Parabolic trajectory arcs of successive bounces converging as an infinite geometric series governed by coefficient of restitution $e$.</div>
</div>

**1. Aim:**  
To derive expressions for the rebound height after $n$ bounces, the total distance traveled, and the total time elapsed before coming to rest for a ball dropped from height $h_0$ onto a fixed floor with coefficient of restitution $e$.

**2. Mathematical Steps:**

**Rebound Velocities and Heights:**  
* Velocity just before first impact with ground:
  $$u_1 = \sqrt{2gh_0}$$
* Velocity immediately after first impact (by definition of $e$ with stationary floor $u_{\text{floor}} = 0$):
  $$v_1 = e u_1 = e\sqrt{2gh_0}$$
* Rebound height after 1st bounce:
  $$h_1 = \frac{v_1^2}{2g} = \frac{(e\sqrt{2gh_0})^2}{2g} = e^2 h_0$$
* Velocity after 2nd bounce: $v_2 = e v_1 = e^2\sqrt{2gh_0}$
* Rebound height after 2nd bounce: $h_2 = e^2 h_1 = e^4 h_0$
* Generalizing for the $n$-th bounce:
  $$\mathbf{v_n = e^n\sqrt{2gh_0}} \quad \text{and} \quad \mathbf{h_n = e^{2n}h_0}$$

**Total Distance Traveled ($H_{\text{total}}$):**  
The ball drops height $h_0$, then rises and falls through $h_1, h_2, \dots$ indefinitely:
$$H_{\text{total}} = h_0 + 2h_1 + 2h_2 + 2h_3 + \dots$$
$$H_{\text{total}} = h_0 + 2(e^2 h_0 + e^4 h_0 + e^6 h_0 + \dots)$$
$$H_{\text{total}} = h_0 + 2h_0 e^2(1 + e^2 + e^4 + \dots)$$

The bracketed expression is an infinite geometric series with first term $a = 1$ and common ratio $r = e^2$ ($|r| < 1$):
$$S_\infty = \frac{1}{1 - e^2}$$

Substitute this sum:
$$H_{\text{total}} = h_0 \left[1 + \frac{2e^2}{1 - e^2}\right] = h_0 \left[\frac{1 - e^2 + 2e^2}{1 - e^2}\right]$$

**Final Distance Result:**
$$\mathbf{H_{\text{total}} = h_0\left(\frac{1 + e^2}{1 - e^2}\right)}$$

**Total Time Elapsed ($T_{\text{total}}$):**  
Time to drop initial height: $t_0 = \sqrt{\frac{2h_0}{g}}$.  
Time for subsequent round trips: $2t_1 = 2e t_0$, $2t_2 = 2e^2 t_0$, etc.
$$T_{\text{total}} = t_0 + 2e t_0 + 2e^2 t_0 + 2e^3 t_0 + \dots = t_0\left[1 + 2e(1 + e + e^2 + \dots)\right]$$
$$T_{\text{total}} = t_0\left[1 + \frac{2e}{1 - e}\right] = t_0\left(\frac{1 + e}{1 - e}\right)$$

**Final Time Result:**
$$\mathbf{T_{\text{total}} = \sqrt{\frac{2h_0}{g}}\left(\frac{1 + e}{1 - e}\right)}$$

---

### Derivation 10: Potential Energy Gradient Relation ($F = -\frac{dU}{dx}$) & Equilibrium

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Potential Energy Curve U(x), Force Direction & Mechanical Equilibrium</div>
  <svg viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <linearGradient id="gradEquil_wep" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.02"/>
      </linearGradient>
      <marker id="arrEquil_wep_d12" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#a1a1aa"/>
      </marker>
      <marker id="arrForceGreen_wep_d12" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#34d399"/>
      </marker>
      <marker id="arrForceRose_wep_d12" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
        <polygon points="0 0, 7 3, 0 6" fill="#f43f5e"/>
      </marker>
    </defs>

    <!-- Axes -->
    <line x1="50" y1="210" x2="500" y2="210" stroke="#71717a" stroke-width="2" marker-end="url(#arrEquil_wep_d12)"/>
    <line x1="50" y1="210" x2="50" y2="25" stroke="#71717a" stroke-width="2" marker-end="url(#arrEquil_wep_d12)"/>
    <text x="505" y="214" fill="#a1a1aa" font-size="12" font-weight="600">x</text>
    <text x="40" y="20" fill="#a1a1aa" font-size="12" font-weight="600">U(x)</text>

    <!-- Potential curve U(x) -->
    <path d="M 60 60 C 100 120, 130 160, 170 160 C 210 160, 260 70, 300 70 C 340 70, 380 130, 420 130 L 480 130" fill="none" stroke="#38bdf8" stroke-width="3"/>

    <!-- Point 1: Stable Equilibrium (Minimum) -->
    <circle cx="170" cy="160" r="6" fill="#34d399"/>
    <line x1="170" y1="160" x2="170" y2="210" stroke="#71717a" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="170" y="225" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">x₁ (Stable)</text>
    <text x="170" y="180" fill="#34d399" font-size="10" text-anchor="middle">d²U/dx² > 0</text>
    <!-- Restoring forces around minimum -->
    <line x1="110" y1="140" x2="135" y2="140" stroke="#34d399" stroke-width="2" marker-end="url(#arrForceGreen_wep_d12)"/>
    <text x="122" y="130" fill="#34d399" font-size="10" text-anchor="middle">F > 0</text>
    <line x1="230" y1="140" x2="205" y2="140" stroke="#34d399" stroke-width="2" marker-end="url(#arrForceGreen_wep_d12)"/>
    <text x="218" y="130" fill="#34d399" font-size="10" text-anchor="middle">F < 0</text>

    <!-- Point 2: Unstable Equilibrium (Maximum) -->
    <circle cx="300" cy="70" r="6" fill="#f43f5e"/>
    <line x1="300" y1="70" x2="300" y2="210" stroke="#71717a" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="300" y="225" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">x₂ (Unstable)</text>
    <text x="300" y="55" fill="#f43f5e" font-size="10" text-anchor="middle">d²U/dx² < 0</text>
    <!-- Repelling forces around maximum -->
    <line x1="280" y1="85" x2="255" y2="85" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrForceRose_wep_d12)"/>
    <line x1="320" y1="85" x2="345" y2="85" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrForceRose_wep_d12)"/>

    <!-- Point 3: Neutral Equilibrium (Flat plateau) -->
    <circle cx="450" cy="130" r="5" fill="#fbbf24"/>
    <line x1="450" y1="130" x2="450" y2="210" stroke="#71717a" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="450" y="225" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">x₃ (Neutral)</text>
    <text x="450" y="115" fill="#fbbf24" font-size="10" text-anchor="middle">d²U/dx² = 0</text>

    <!-- Formula badge -->
    <rect x="55" y="40" width="130" height="28" rx="5" fill="rgba(24, 24, 27, 0.9)" stroke="rgba(255,255,255,0.1)"/>
    <text x="120" y="58" fill="#f4f4f5" font-size="11" font-weight="700" text-anchor="middle">F(x) = - dU/dx</text>
  </svg>
  <div style="text-align: center; color: #a1a1aa; font-size: 0.8rem; margin-top: 0.75rem;">Figure 5.12: The potential energy curve illustrates the negative gradient relationship $F = -dU/dx$ and criteria for stable, unstable, and neutral equilibrium.</div>
</div>

**1. Aim & Setup:**  
To establish the differential connection between a conservative force field $F(x)$ and its corresponding potential energy function $U(x)$.

**2. Mathematical Steps:**  
Let a conservative force $F(x)$ act on a particle moving through an infinitesimal displacement $dx$.  
The work done by this conservative force is:
$$dW_c = F(x)\,dx \quad \text{--- (1)}$$

By fundamental physical definition, the change in potential energy $dU$ represents the negative of the work done by the conservative force:
$$dU = -dW_c \quad \text{--- (2)}$$

Equating Equation (1) and Equation (2):
$$dU = -(F(x)\,dx)$$
$$dU = -F(x)\,dx$$

Dividing both sides by the spatial displacement differential $dx$:
$$\frac{dU}{dx} = -F(x)$$

Rearranging for force $F(x)$:

**3. Final Result:**
$$\mathbf{F(x) = -\frac{dU}{dx}}$$

*Physical Conclusion:*  
The magnitude of a conservative force equals the spatial rate of decrease of potential energy; the negative sign confirms that conservative forces always direct systems toward states of **minimum** potential energy.
