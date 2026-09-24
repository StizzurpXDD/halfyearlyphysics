---
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
  - 'F_{\text{net}} = \frac{d\vec{p}}{dt} = m\vec{a}'
  - 'v = v_0 + u_{\text{rel}}\ln\left(\frac{m_0}{m}\right) - gt'
  - 'f_{s,\max} = \mu_s N'
  - 'a = \frac{m_1 - m_2}{m_1 + m_2}g'
  - 'v_{\max} = \sqrt{rg\left(\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}\right)}'
accentColor: "emerald"
estimatedReadTime: "25 min"
---

# COMPLETE STUDY & REVISION SHEET: LAWS OF MOTION

*(As per the Latest Rationalized CBSE/NCERT Class 11 Physics Syllabus)*



---



## PART 1: COMPREHENSIVE FORMULA TABLES



### Table 1: Force, Momentum, Newton's Laws & Impulse



| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **1.1** | $\vec{p} = m\vec{v}$ | **Linear Momentum**: Product of mass ($m$) and instantaneous velocity ($\vec{v}$). | • SI unit: $\text{kg}\cdot\text{m/s}$ or $\text{N}\cdot\text{s}$<br>• Kinetic energy relation: $K = \frac{p^2}{2m} \implies p = \sqrt{2mK}$<br>• If $K$ is constant: $p \propto \sqrt{m}$; if $p$ is constant: $K \propto \frac{1}{m}$ |
| **1.2** | $\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}$ | **Newton’s Second Law (Fundamental Form)**: Net external force equals the time rate of change of linear momentum. | • General variable mass form:<br>$\vec{F} = m\frac{d\vec{v}}{dt} + \vec{v}\frac{dm}{dt}$<br>• If mass is constant ($\frac{dm}{dt} = 0$): $\vec{F} = m\vec{a}$ |
| **1.3** | $F_x = m\frac{d^2x}{dt^2}$, $F_y = m\frac{d^2y}{dt^2}$, $F_z = m\frac{d^2z}{dt^2}$ | **Cartesian Component Form of Newton’s Second Law**. | • Force along one axis affects acceleration exclusively along that specific axis (independence of orthogonal axes). |
| **1.4** | $\vec{J} = \int_{t_1}^{t_2} \vec{F}\,dt = \vec{F}_{\text{avg}}\Delta t = \Delta\vec{p}$ | **Impulse-Momentum Theorem**: Impulse ($\vec{J}$) of a large force acting over time interval $\Delta t$ equals change in momentum. | • $\vec{J} = m\vec{v} - m\vec{u}$<br>• $\vec{J} = \text{Area under Force-Time } (F-t) \text{ curve}$<br>• Ball bouncing off wall normally with speed $u$: $J = 2mu$<br>• Bouncing at angle $\theta$ to the normal: $J = 2mu\cos\theta$ |
| **1.5** | $\vec{F}_{AB} = -\vec{F}_{BA}$ | **Newton’s Third Law**: Action and reaction forces are equal in magnitude and opposite in direction. | • Act on two *different* bodies simultaneously; never cancel each other. |
| **1.6** | $\sum \vec{p}_{\text{initial}} = \sum \vec{p}_{\text{final}}$ | **Law of Conservation of Linear Momentum**: Total momentum is conserved when $\vec{F}_{\text{net, ext}} = \vec{0}$. | • For two-body collision: $m_1\vec{u}_1 + m_2\vec{u}_2 = m_1\vec{v}_1 + m_2\vec{v}_2$ |
| **1.7** | $v_R = -\left(\frac{m}{M}\right)v$ | **Recoil Velocity of a Gun**: $M$ is mass of gun, $m$ is mass of bullet, $v$ is muzzle speed of bullet. | • Negative sign signifies backward motion.<br>• Kinetic energy ratio: $\frac{K_{\text{bullet}}}{K_{\text{gun}}} = \frac{M}{m} > 1$ |
| **1.8** | $F_{\text{thrust}} = u_{\text{rel}}\left(-\frac{dm}{dt}\right)$<br>$a = \frac{u_{\text{rel}}}{m}\left(-\frac{dm}{dt}\right) - g$ | **Rocket Propulsion (Variable Mass Kinematics)**: Thrust produced by fuel ejection at relative velocity $u_{\text{rel}}$. | • Speed at time $t$ in gravity field:<br>$v = v_0 + u_{\text{rel}}\ln\left(\frac{m_0}{m}\right) - gt$<br>• In gravity-free space ($g = 0$):<br>$v = v_0 + u_{\text{rel}}\ln\left(\frac{m_0}{m}\right)$ |



---



### Table 2: Concurrent Forces Equilibrium & Apparent Weight (Lifts)



| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **2.1** | $\sum \vec{F} = \vec{0} \implies$<br>$\sum F_x = 0$, $\sum F_y = 0$ | **Equilibrium of Concurrent Forces**: Net vector sum of all forces meeting at a common point is zero. | • For three concurrent forces: $\vec{F}_1 + \vec{F}_2 + \vec{F}_3 = \vec{0}$ |
| **2.2** | $\frac{F_1}{\sin\alpha} = \frac{F_2}{\sin\beta} = \frac{F_3}{\sin\gamma}$ | **Lami’s Theorem**: Applicable to three coplanar, concurrent, non-collinear forces in equilibrium. | • $\alpha$: angle between $\vec{F}_2$ and $\vec{F}_3$<br>• $\beta$: angle between $\vec{F}_1$ and $\vec{F}_3$<br>• $\gamma$: angle between $\vec{F}_1$ and $\vec{F}_2$ |
| **2.3** | $R = m(g + a)$ | **Apparent Weight in Elevator (Accelerating Upward)**: Normal reaction $R$ registered by weighing scale. | • Apparent weight is greater than true weight ($R > mg$). |
| **2.4** | $R = m(g - a)$ | **Apparent Weight in Elevator (Accelerating Downward)**: Acceleration $a < g$ directed downwards. | • Apparent weight is less than true weight ($R < mg$). |
| **2.5** | $R = 0$ | **State of Weightlessness**: Elevator cable snaps, accelerating freely downward ($a = g$). | • If downward acceleration $a > g$: $R = -m(a - g)$ (body lifts off floor and presses against ceiling). |
| **2.6** | $R = mg$ | **Apparent Weight (Uniform Velocity / Rest)**: Elevator is static or moving with constant speed ($a = 0$). | • Apparent weight equals true gravitational weight. |



---



### Table 3: Friction (Static, Limiting, Kinetic & Incline Motion)



| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **3.1** | $0 \le f_s \le f_{s,\max}$ | **Static Friction**: Self-adjusting tangential force opposing the impending relative motion. | • Matches applied force $F_{\text{applied}}$ until limiting value is reached. |
| **3.2** | $f_{s,\max} = \mu_s N$ | **Limiting Friction**: Maximum threshold of static friction before relative sliding starts; $N$ is normal force. | • $\mu_s$: Coefficient of static friction (dimensionless, depends only on surface nature and roughness). |
| **3.3** | $f_k = \mu_k N$ | **Kinetic Friction**: Tangential force opposing actual relative sliding between contact surfaces. | • $\mu_k$: Coefficient of kinetic friction.<br>• Generally: $\mu_k < \mu_s \implies f_k < f_{s,\max}$ |
| **3.4** | $\tan\lambda = \mu_s$ | **Angle of Friction ($\lambda$)**: Angle made by the total resultant contact force ($\vec{R}_c = \vec{N} + \vec{f}_{s,\max}$) with normal $\vec{N}$. | • Resultant contact force: $R_c = \sqrt{N^2 + f_{s,\max}^2} = N\sqrt{1 + \mu_s^2}$ |
| **3.5** | $\tan\alpha = \mu_s$ | **Angle of Repose ($\alpha$)**: Maximum inclination of a rough plane at which a body rests on it without sliding down. | • $\alpha = \lambda$ (Angle of repose equals angle of friction).<br>• If $\theta < \alpha$: Body remains stationary.<br>• If $\theta = \alpha$: Body on verge of sliding.<br>• If $\theta > \alpha$: Body accelerates downwards. |
| **3.6** | $a = g(\sin\theta - \mu_k\cos\theta)$ | **Acceleration of Body Sliding Down a Rough Incline**: Incline angle $\theta > \alpha$. | • Smooth incline ($\mu_k = 0$): $a = g\sin\theta$<br>• Time taken to slide down distance $s$: $t = \sqrt{\frac{2s}{g(\sin\theta - \mu_k\cos\theta)}}$ |
| **3.7** | $a = g(\sin\theta + \mu_k\cos\theta)$ | **Retardation of Body Projected Up a Rough Incline**: Both gravity component and friction oppose upward motion. | • Time of ascent $t_a <$ Time of descent $t_d$ on a rough incline. |
| **3.8** | $F_{\min} = \frac{\mu_s mg}{\sqrt{1 + \mu_s^2}} = mg\sin\lambda$ | **Minimum Pulling Force to Move a Body on Horizontal Plane**: Applied at angle $\theta = \lambda = \tan^{-1}\mu_s$ above horizontal. | • Pulling is always easier than pushing because pulling decreases normal force $N$, reducing limiting friction. |



---



### Table 4: Connected Systems & Pulleys (Standard Class 11 Dynamics)



| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **4.1** | $a = \frac{F}{m_1 + m_2}$<br>$N_{\text{contact}} = \frac{m_2 F}{m_1 + m_2}$ | **Two Blocks in Contact (Horizontal Push)**: External force $F$ pushes block $m_1$, which pushes block $m_2$ on smooth ground. | • If force is applied on $m_2$ instead:<br>$N_{\text{contact}}' = \frac{m_1 F}{m_1 + m_2}$ |
| **4.2** | $a = \frac{m_1 - m_2}{m_1 + m_2}g$ | **Atwood Machine (Two Unequal Masses $m_1 > m_2$)**: Masses suspended vertically over a frictionless, massless pulley. | • If $m_1 = m_2$: $a = 0$<br>• If $m_1 \gg m_2$: $a \approx g$ |
| **4.3** | $T = \frac{2m_1 m_2}{m_1 + m_2}g$ | **Tension in Atwood Machine String**. | • Force on pulley support / clamp:<br>$F_{\text{clamp}} = 2T = \frac{4m_1 m_2}{m_1 + m_2}g$ |
| **4.4** | $a = \frac{m_2 g}{m_1 + m_2}$<br>$T = \frac{m_1 m_2 g}{m_1 + m_2}$ | **Mass on Smooth Table ($m_1$) Connected to Hanging Mass ($m_2$)**: Massless string passing over ideal corner pulley. | • With rough table (coefficient $\mu_k$):<br>$a = \frac{(m_2 - \mu_k m_1)g}{m_1 + m_2}$<br>$T = \frac{m_1 m_2(1 + \mu_k)g}{m_1 + m_2}$ |



---



### Table 5: Dynamics of Circular Motion



| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **5.1** | $F_c = \frac{mv^2}{r} = m\omega^2 r$ | **Centripetal Force**: Net real inward force required to keep mass $m$ traversing circular path of radius $r$ at speed $v$. | • Centripetal force is not an additional physical force; it is provided by tension, friction, gravity, or normal force. |
| **5.2** | $v_{\max} = \sqrt{\mu_s r g}$ | **Maximum Safe Speed on a Flat (Unbanked) Circular Road**: Friction alone provides centripetal force. | • Independent of vehicle mass $m$.<br>• If $v > v_{\max}$, vehicle skids outward radially. |
| **5.3** | $v_0 = \sqrt{r g \tan\theta}$ | **Optimum (Design) Speed on a Banked Road**: Negotiating curved track of radius $r$ banked at $\theta$ without relying on friction. | • Banking angle: $\tan\theta = \frac{v_0^2}{rg}$ |
| **5.4** | $v_{\max} = \sqrt{rg\left(\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}\right)}$ | **Maximum Safe Speed on a Banked Road with Friction**: Prevents vehicle from skidding upwards/outwards. | • If $\mu_s \ge \cot\theta$: No upper speed limit exists (vehicle cannot skid outward). |
| **5.5** | $v_{\min} = \sqrt{rg\left(\frac{\tan\theta - \mu_s}{1 + \mu_s\tan\theta}\right)}$ | **Minimum Safe Speed on a Banked Road with Friction**: Prevents vehicle from slipping downwards/inwards. | • If $\tan\theta \le \mu_s$: $v_{\min} = 0$ (vehicle remains parked on banked incline without slipping down). |
| **5.6** | $\tan\theta = \frac{v^2}{rg}$ | **Bending of a Cyclist**: Angle $\theta$ tilted with the *vertical* when executing turn of radius $r$ at speed $v$. | • Measured from the vertical to ensure ground normal reaction passes through center of gravity, preventing toppling torque. |



---



## PART 2: STEP-BY-STEP CLASS 11 DERIVATIONS



---



### Derivation 1: Newton’s Second Law is the Real / Fundamental Law of Motion



**1. Aim & Theoretical Statement:**  

To prove that Newton’s Second Law is the fundamental law of motion by demonstrating that:

* Part A: Newton's First Law is contained within the Second Law.

* Part B: Newton's Third Law is contained within the Second Law.



---



#### Part A: Derivation of First Law from Second Law

**2. Mathematical Steps:**  

According to Newton's Second Law:

$$\vec{F} = m\vec{a}$$



If no net external force acts on the body, then $\vec{F} = \vec{0}$:

$$m\vec{a} = \vec{0}$$



Since mass of a material body cannot be zero ($m \ne 0$):

$$\vec{a} = \vec{0}$$



By definition of acceleration:

$$\vec{a} = \frac{d\vec{v}}{dt} = \vec{0} \implies \vec{v} = \text{constant vector}$$



*Physical Interpretation:*  

* If the body was initially at rest ($\vec{v} = \vec{0}$), it remains at rest.

* If the body was in motion with velocity $\vec{v}$, it continues moving with that constant velocity (both magnitude and direction unchanged).  

This is precisely the statement of Newton's First Law of Motion.



---



#### Part B: Derivation of Third Law from Second Law

**2. Setup & Steps:**  

Consider an isolated system consisting of two interacting bodies, body $1$ and body $2$. Let no external force act on this composite system:

$$\vec{F}_{\text{ext}} = \vec{0}$$



Let $\vec{F}_{12}$ be the force exerted on body $1$ by body $2$ (action), and $\vec{F}_{21}$ be the force exerted on body $2$ by body $1$ (reaction).  

Let $\frac{d\vec{p}_1}{dt}$ and $\frac{d\vec{p}_2}{dt}$ be their respective rates of change of linear momentum.



By Newton’s Second Law applied to the individual bodies:

$$\vec{F}_{12} = \frac{d\vec{p}_1}{dt} \quad \text{and} \quad \vec{F}_{21} = \frac{d\vec{p}_2}{dt}$$



Summing the two equations:

$$\vec{F}_{12} + \vec{F}_{21} = \frac{d\vec{p}_1}{dt} + \frac{d\vec{p}_2}{dt} = \frac{d}{dt}(\vec{p}_1 + \vec{p}_2)$$



Here, $(\vec{p}_1 + \vec{p}_2) = \vec{P}_{\text{total}}$ is the total linear momentum of the isolated system.  

Since $\vec{F}_{\text{ext}} = \vec{0}$, by the Second Law, the total linear momentum must remain constant over time:

$$\frac{d}{dt}\vec{P}_{\text{total}} = \vec{0}$$



Therefore:

$$\vec{F}_{12} + \vec{F}_{21} = \vec{0}$$

$$\mathbf{\vec{F}_{12} = -\vec{F}_{21}}$$

$$\text{Action} = -\text{Reaction}$$



**3. Final Conclusion:**  

Because both the First Law and the Third Law can be directly deduced from the Second Law, **Newton's Second Law is the real/fundamental law of motion**.



---



### Derivation 2: Derivation of $\vec{F} = m\vec{a}$ from Rate of Change of Momentum



**1. Aim & Statement:**  

To derive the mathematical expression $\vec{F} = m\vec{a}$ from Newton's Second Law statement: *The rate of change of linear momentum of a body is directly proportional to the applied force and takes place in the direction of the force.*



**2. Mathematical Steps:**  

Let a body of mass $m$ move with instantaneous velocity $\vec{v}$.  

Its linear momentum is:

$$\vec{p} = m\vec{v}$$



According to Newton's Second Law:

$$\vec{F} \propto \frac{d\vec{p}}{dt}$$

$$\vec{F} = k\frac{d\vec{p}}{dt} \quad \text{--- (1)}$$

where $k$ is a constant of proportionality.



Substitute $\vec{p} = m\vec{v}$ into Equation (1):

$$\vec{F} = k\frac{d}{dt}(m\vec{v})$$



Using the product rule of differentiation:

$$\vec{F} = k\left[m\frac{d\vec{v}}{dt} + \vec{v}\frac{dm}{dt}\right]$$



For classical systems where mass $m$ remains invariant with time ($\frac{dm}{dt} = 0$):

$$\vec{F} = k\,m\frac{d\vec{v}}{dt}$$



Since acceleration is defined as $\vec{a} = \frac{d\vec{v}}{dt}$:

$$\vec{F} = k\,m\vec{a}$$



**3. Unit Definition:**  

In the SI metric system, the unit of force (the Newton) is explicitly defined such that a unit force produces unit acceleration ($1\text{ m/s}^2$) on a unit mass ($1\text{ kg}$):

$$1\text{ N} = k \times (1\text{ kg}) \times (1\text{ m/s}^2) \implies k = 1$$



**4. Final Result:**

$$\mathbf{\vec{F} = m\vec{a}}$$



---



### Derivation 3: The Impulse-Momentum Theorem



**1. Aim & Statement:**  

To establish that the impulse of a force acting on a body over a finite time interval is equal to the net change in linear momentum produced in the body.



**2. Mathematical Steps:**  

From Newton’s Second Law:

$$\vec{F} = \frac{d\vec{p}}{dt}$$



Cross-multiplying by differential time element $dt$:

$$d\vec{p} = \vec{F}\,dt$$



Integrate both sides within finite physical limits:

* At initial time $t_1$, momentum is $\vec{p}_1 = m\vec{u}$.

* At final time $t_2$, momentum is $\vec{p}_2 = m\vec{v}$.



$$\int_{\vec{p}_1}^{\vec{p}_2} d\vec{p} = \int_{t_1}^{t_2} \vec{F}\,dt$$



Evaluating the left-hand integral:

$$[\vec{p}]_{\vec{p}_1}^{\vec{p}_2} = \vec{p}_2 - \vec{p}_1 = \Delta\vec{p}$$



By physical definition, the time integral of force is defined as the Impulse $\vec{J}$:

$$\vec{J} = \int_{t_1}^{t_2} \vec{F}\,dt$$



Equating both expressions:

$$\mathbf{\vec{J} = \Delta\vec{p} = m\vec{v} - m\vec{u}}$$



If $\vec{F}_{\text{avg}}$ represents the average force during contact interval $\Delta t = t_2 - t_1$:

$$\mathbf{\vec{J} = \vec{F}_{\text{avg}}\Delta t = \Delta\vec{p}}$$



---




<div class="d3-chart-card" data-chart="nlm-impulse" style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.25rem; padding: 1.5rem; margin: 2rem 0; backdrop-filter: blur(12px); max-width: 580px;">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Interactive Impulse Curve: Collision Force $F(t)$ vs Time</div>
  <svg viewBox="0 0 420 230" style="width: 100%; max-width: 420px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <line x1="40" y1="190" x2="380" y2="190" stroke="#71717a" stroke-width="2"/>
    <line x1="40" y1="190" x2="40" y2="30" stroke="#71717a" stroke-width="2"/>
    <path d="M 80 190 Q 200 40 320 190" fill="rgba(168,85,247,0.2)" stroke="#c084fc" stroke-width="3"/>
    <text x="200" y="110" fill="#c084fc" font-size="12" text-anchor="middle">Area = Impulse J = Δp</text>
  </svg>
</div>


### Derivation 4: Law of Conservation of Linear Momentum



**1. Aim & Setup:**  

To prove conservation of total momentum for an isolated system of two interacting bodies undergoing collision.



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Two-Body Isolated Collision & Action-Reaction Pair</div>
  <svg viewBox="0 0 500 150" style="width: 100%; max-width: 500px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
    <!-- Body A -->
    <circle cx="160" cy="75" r="48" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="160" y="75" fill="#ffffff" font-size="15" font-weight="700" text-anchor="middle">Body A</text>
    <text x="160" y="95" fill="#38bdf8" font-size="12" text-anchor="middle">m₁</text>
    <!-- Body B -->
    <circle cx="260" cy="75" r="48" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2.5"/>
    <text x="260" y="75" fill="#ffffff" font-size="15" font-weight="700" text-anchor="middle">Body B</text>
    <text x="260" y="95" fill="#c084fc" font-size="12" text-anchor="middle">m₂</text>
    <!-- Contact point -->
    <circle cx="210" cy="75" r="4" fill="#f59e0b"/>
    <!-- Force F_12 on A by B (pointing left) -->
    <line x1="160" y1="40" x2="70" y2="40" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrRose_nlm)"/>
    <text x="115" y="30" fill="#fb7185" font-size="11" font-weight="600" text-anchor="middle">F₁₂ (Reaction on A)</text>
    <!-- Force F_21 on B by A (pointing right) -->
    <line x1="260" y1="40" x2="350" y2="40" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_nlm)"/>
    <text x="305" y="30" fill="#6ee7b7" font-size="11" font-weight="600" text-anchor="middle">F₂₁ (Action on B)</text>
    <text x="210" y="140" fill="#a1a1aa" font-size="12" font-family="monospace" text-anchor="middle">F₁₂ = -F₂₁  ⟹  dp₁/dt + dp₂/dt = 0  ⟹  P_total = const</text>
  </svg>
</div>



**2. Mathematical Steps:**  

* Let two bodies $A$ and $B$ of masses $m_1$ and $m_2$ travel along a straight line with initial velocities $\vec{u}_1$ and $\vec{u}_2$.

* They collide for a brief duration $\Delta t$.

* During collision, body $A$ exerts force $\vec{F}_{BA}$ on body $B$, and body $B$ exerts force $\vec{F}_{AB}$ on body $A$.

* Let their velocities after collision be $\vec{v}_1$ and $\vec{v}_2$.



Impulse delivered to body $A$:

$$\vec{J}_A = \vec{F}_{AB}\Delta t = m_1\vec{v}_1 - m_1\vec{u}_1 \quad \text{--- (1)}$$



Impulse delivered to body $B$:

$$\vec{J}_B = \vec{F}_{BA}\Delta t = m_2\vec{v}_2 - m_2\vec{u}_2 \quad \text{--- (2)}$$



According to Newton's Third Law:

$$\vec{F}_{AB} = -\vec{F}_{BA}$$



Multiply both sides by contact time $\Delta t$:

$$\vec{F}_{AB}\Delta t = -\vec{F}_{BA}\Delta t$$



Substitute Equations (1) and (2):

$$(m_1\vec{v}_1 - m_1\vec{u}_1) = -(m_2\vec{v}_2 - m_2\vec{u}_2)$$

$$m_1\vec{v}_1 - m_1\vec{u}_1 = -m_2\vec{v}_2 + m_2\vec{u}_2$$



Rearranging the terms (initial quantities on one side, final on the other):

$$\mathbf{m_1\vec{u}_1 + m_2\vec{u}_2 = m_1\vec{v}_1 + m_2\vec{v}_2}$$

$$\mathbf{\vec{P}_{\text{initial}} = \vec{P}_{\text{final}}}$$



---



### Derivation 5: Recoil Velocity of a Gun



**1. Aim & Setup:**  

* Mass of gun $= M$, Mass of bullet $= m$.

* Initial state: Gun and bullet are together at rest before firing.  

  $$\vec{P}_{\text{initial}} = (M + m)(\vec{0}) = \vec{0}$$

* When triggered, internal explosive forces propel the bullet forward with muzzle velocity $\vec{v}$.

* Let the resulting recoil velocity vector of the gun be $\vec{V}_R$.



**2. Mathematical Steps:**  

Since firing forces are purely internal to the gun-bullet system, $\vec{F}_{\text{ext}} = \vec{0}$.  

Applying the Law of Conservation of Linear Momentum:

$$\vec{P}_{\text{initial}} = \vec{P}_{\text{final}}$$

$$\vec{0} = M\vec{V}_R + m\vec{v}$$

$$M\vec{V}_R = -m\vec{v}$$



Dividing by gun mass $M$:

$$\mathbf{\vec{V}_R = -\left(\frac{m}{M}\right)\vec{v}}$$



**3. Physical Deductions:**  

* The negative sign signifies that the recoil velocity of the gun is oriented opposite to the bullet's trajectory.

* Because $M \gg m$, the recoil speed $V_R \ll v$.

* Ratio of kinetic energies:

  $$\frac{K_{\text{bullet}}}{K_{\text{gun}}} = \frac{\frac{p^2}{2m}}{\frac{p^2}{2M}} = \frac{M}{m}$$

  Since $M > m$, the bullet carries away the vast majority of the kinetic energy released.



---



### Derivation 6: Rocket Propulsion Equations (Thrust & Instantaneous Velocity)



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Variable-Mass Rocket Propulsion Dynamics</div>
  <svg viewBox="0 0 460 280" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Setup:**  

To derive expressions for the upthrust force and instantaneous velocity of a rocket operating under variable mass mechanics.  

* At time $t$: Rocket mass is $m$, moving with upward velocity $v$ relative to ground.

* In time interval $dt$: A small mass of fuel gas $(-dm)$ is ejected backward at constant speed $u_{\text{rel}}$ relative to the rocket body.

* Velocity of ejected gas relative to ground $= v - u_{\text{rel}}$.

* Mass of rocket reduces to $(m - dm)$, and its forward speed increases to $(v + dv)$.



**2. Mathematical Steps:**  

Momentum of system at time $t$:

$$P(t) = mv$$



Momentum of system at time $t + dt$:

$$P(t + dt) = (m - dm)(v + dv) + dm(v - u_{\text{rel}})$$



Expanding the product and neglecting the second-order differential $(dm \cdot dv)$:

$$P(t + dt) = mv + m\,dv - v\,dm + v\,dm - u_{\text{rel}}\,dm$$

$$P(t + dt) = mv + m\,dv - u_{\text{rel}}\,dm$$



Change in momentum over interval $dt$:

$$dP = P(t + dt) - P(t) = (mv + m\,dv - u_{\text{rel}}\,dm) - mv$$

$$dP = m\,dv - u_{\text{rel}}\,dm$$



From Newton’s Second Law ($F_{\text{ext}} = \frac{dP}{dt}$):

$$F_{\text{ext}} = m\frac{dv}{dt} - u_{\text{rel}}\frac{dm}{dt}$$

$$m\frac{dv}{dt} = u_{\text{rel}}\frac{dm}{dt} + F_{\text{ext}}$$



The forward **Thrust Force** acting on the rocket is:

$$\mathbf{F_{\text{thrust}} = u_{\text{rel}}\left(-\frac{dm}{dt}\right)}$$



In a uniform downward gravitational field, $F_{\text{ext}} = -mg$:

$$m\frac{dv}{dt} = -u_{\text{rel}}\frac{dm}{dt} - mg$$



Dividing through by $m$:

$$dv = -u_{\text{rel}}\frac{dm}{m} - g\,dt$$



Integrating from launch conditions ($t=0, m=m_0, v=v_0$) to time $t$ ($m=m, v=v$):

$$\int_{v_0}^{v} dv = -u_{\text{rel}}\int_{m_0}^{m}\frac{dm}{m} - g\int_{0}^{t} dt$$

$$v - v_0 = -u_{\text{rel}}[\ln m]_{m_0}^{m} - gt$$

$$v - v_0 = -u_{\text{rel}}(\ln m - \ln m_0) - gt$$

$$v - v_0 = u_{\text{rel}}(\ln m_0 - \ln m) - gt$$



**3. Final Result:**

$$\mathbf{v = v_0 + u_{\text{rel}}\ln\left(\frac{m_0}{m}\right) - gt}$$



*(In gravity-free outer space where $g=0$ and starting from rest $v_0=0$: $\mathbf{v = u_{\text{rel}}\ln\left(\frac{m_0}{m}\right)}$)*.



---



### Derivation 7: Apparent Weight of a Man in an Elevator / Lift



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Apparent Weight & Normal Reaction in an Elevator</div>
  <svg viewBox="0 0 520 230" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Setup:**  

Consider a person of mass $m$ standing on a weighing scale placed on the floor of an elevator. The weighing scale registers the normal reaction force $R$ exerted by the floor on the person.



---



#### Case A: Elevator Accelerating Upward with Acceleration $a$

Net motion is upward, so upward reaction $R$ exceeds downward weight $mg$:

$$F_{\text{net}} = R - mg$$



By Newton’s Second Law ($F_{\text{net}} = ma$):

$$R - mg = ma$$

$$\mathbf{R = m(g + a)}$$

*Conclusion:* Apparent weight is greater than true weight ($R > mg$).



---



#### Case B: Elevator Accelerating Downward with Acceleration $a$ ($a < g$)

Net motion is downward, so downward weight $mg$ exceeds upward reaction $R$:

$$F_{\text{net}} = mg - R$$



By Newton’s Second Law ($F_{\text{net}} = ma$):

$$mg - R = ma$$

$$\mathbf{R = m(g - a)}$$

*Conclusion:* Apparent weight is less than true weight ($R < mg$).



---



#### Case C: Elevator in Free Fall ($a = g$ Downward)

Substitute $a = g$ into Case B:

$$R = m(g - g) = m(0)$$

$$\mathbf{R = 0}$$

*Conclusion:* The person experiences the sensation of **weightlessness**.



---



#### Case D: Elevator Moving with Constant Velocity ($a = 0$)

Substitute $a = 0$ into either relation:

$$R = m(g \pm 0)$$

$$\mathbf{R = mg}$$

*Conclusion:* Apparent weight equals true gravitational weight.



---



### Derivation 8: Lami’s Theorem for Three Concurrent Forces



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Lami’s Theorem & Concurrent Forces Equilibrium</div>
  <svg viewBox="0 0 520 240" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Statement:**  

*Statement:* If three concurrent, coplanar forces acting at a point keep it in static equilibrium, each force is directly proportional to the sine of the angle between the other two forces.



**2. Setup:**  

* Three concurrent coplanar forces $\vec{F}_1, \vec{F}_2, \vec{F}_3$ maintain equilibrium at a point:

  $$\vec{F}_1 + \vec{F}_2 + \vec{F}_3 = \vec{0}$$

* Let the angle between $\vec{F}_2$ and $\vec{F}_3$ be $\alpha$.

* Let the angle between $\vec{F}_1$ and $\vec{F}_3$ be $\beta$.

* Let the angle between $\vec{F}_1$ and $\vec{F}_2$ be $\gamma$.



**3. Geometric Derivation:**  

Because the vector sum of the three forces is zero, they can be represented sequentially in magnitude and direction by the three sides of a closed triangle $\triangle ABC$.



Applying the trigonometric **Law of Sines** to triangle $\triangle ABC$:

$$\frac{AB}{\sin(\angle BCA)} = \frac{BC}{\sin(\angle CAB)} = \frac{CA}{\sin(\angle ABC)}$$



From the exterior angles formed by vectors $\vec{F}_1, \vec{F}_2, \vec{F}_3$:

* Angle opposite to side representing $F_1$ is $(180^\circ - \alpha)$.

* Angle opposite to side representing $F_2$ is $(180^\circ - \beta)$.

* Angle opposite to side representing $F_3$ is $(180^\circ - \gamma)$.



Substituting these angles into the Law of Sines:

$$\frac{F_1}{\sin(180^\circ - \alpha)} = \frac{F_2}{\sin(180^\circ - \beta)} = \frac{F_3}{\sin(180^\circ - \gamma)}$$



Using the identity $\sin(180^\circ - \theta) = \sin\theta$:



**4. Final Result:**

$$\mathbf{\frac{F_1}{\sin\alpha} = \frac{F_2}{\sin\beta} = \frac{F_3}{\sin\gamma}}$$



---



### Derivation 9: Relation Between Angle of Friction ($\lambda$) and Coefficient of Friction ($\mu_s$)



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Angle of Friction (λ) & Resultant Contact Force</div>
  <svg viewBox="0 0 460 250" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Definition:**  

*Definition:* The angle of friction $\lambda$ is defined as the angle which the resultant ($\vec{R}_c$) of the limiting frictional force ($\vec{f}_{s,\max}$) and the normal reaction force ($\vec{N}$) makes with the normal reaction $\vec{N}$.



**2. Mathematical Steps:**  

Let a block of mass $m$ rest on a horizontal surface.  

* Normal reaction acting vertically upwards $= N$.

* Maximum static frictional force acting horizontally $= f_{s,\max} = \mu_s N$.

* Total resultant contact force:

  $$\vec{R}_c = \vec{N} + \vec{f}_{s,\max}$$



In the right-angled vector triangle formed by $\vec{N}$, $\vec{f}_{s,\max}$, and $\vec{R}_c$:

$$\tan\lambda = \frac{|\vec{f}_{s,\max}|}{|\vec{N}|}$$



Substitute the empirical law of limiting friction $f_{s,\max} = \mu_s N$:

$$\tan\lambda = \frac{\mu_s N}{N}$$



**3. Final Result:**

$$\mathbf{\tan\lambda = \mu_s \implies \lambda = \tan^{-1}(\mu_s)}$$



---




<div class="d3-chart-card" data-chart="nlm-friction-curve" style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.25rem; padding: 1.5rem; margin: 2rem 0; backdrop-filter: blur(12px); max-width: 580px;">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Interactive Friction Characteristic Curve (Static vs Kinetic Frictional Force)</div>
  <svg viewBox="0 0 420 230" style="width: 100%; max-width: 420px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <line x1="40" y1="190" x2="380" y2="190" stroke="#71717a" stroke-width="2"/>
    <line x1="40" y1="190" x2="40" y2="30" stroke="#71717a" stroke-width="2"/>
    <line x1="40" y1="190" x2="200" y2="60" stroke="#38bdf8" stroke-width="3"/>
    <line x1="200" y1="80" x2="380" y2="80" stroke="#34d399" stroke-width="3"/>
    <text x="200" y="50" fill="#fbbf24" font-size="11" text-anchor="middle">f_s(max)</text>
  </svg>
</div>


### Derivation 10: Angle of Repose ($\alpha$) and its Equivalence to Angle of Friction ($\lambda$)



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Angle of Repose (α) & Rough Incline Force Resolution</div>
  <svg viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Definition:**  

*Definition:* The angle of repose ($\alpha$) is the minimum angle of inclination of an inclined plane with the horizontal such that a body placed upon it is on the verge of sliding down under gravity.



**2. Mathematical Steps:**  

Consider a block of mass $m$ placed on an adjustable inclined plane at angle $\alpha$.  

Resolving gravitational force $mg$:

1\. Component perpendicular to incline $= mg\cos\alpha$

2\. Component parallel to and down the incline $= mg\sin\alpha$



At the verge of sliding, the system remains in static equilibrium:

* Equilibrium perpendicular to plane:

  $$N = mg\cos\alpha \quad \text{--- (1)}$$

* Equilibrium parallel to plane:

  $$f_{s,\max} = mg\sin\alpha \quad \text{--- (2)}$$



By the law of limiting friction:

$$f_{s,\max} = \mu_s N$$



Substitute Equations (1) and (2) into the friction relation:

$$mg\sin\alpha = \mu_s(mg\cos\alpha)$$



Dividing both sides by $mg\cos\alpha$:

$$\frac{mg\sin\alpha}{mg\cos\alpha} = \mu_s \implies \tan\alpha = \mu_s$$



From Derivation 9, we know that $\tan\lambda = \mu_s$.  

Therefore:

$$\tan\alpha = \tan\lambda$$



**3. Final Result:**

$$\mathbf{\tan\alpha = \mu_s \implies \alpha = \lambda}$$

*Conclusion:* The **angle of repose is equal to the angle of friction**.



---



### Derivation 11: Acceleration of a Body Sliding Down a Rough Inclined Plane



**1. Aim & Setup:**  

To find the downward acceleration $a$ of a block of mass $m$ sliding down an incline inclined at angle $\theta$ where $\theta > \alpha$ (angle of repose) and coefficient of kinetic friction is $\mu_k$.



**2. Mathematical Steps:**  

Forces acting on the body:

* Downward gravitational component along the incline: $mg\sin\theta$

* Upward kinetic friction opposing downward motion: $f_k = \mu_k N$

* Normal reaction perpendicular to the incline: $N$

* Gravitational component balancing the normal reaction: $mg\cos\theta$



Setting up dynamic equilibrium perpendicular to the incline:

$$\sum F_{\perp} = 0 \implies N = mg\cos\theta$$



Kinetic friction is therefore:

$$f_k = \mu_k N = \mu_k mg\cos\theta$$



Setting up the equation of motion along the incline (downward direction as positive):

$$\sum F_{\parallel} = ma$$

$$mg\sin\theta - f_k = ma$$

$$mg\sin\theta - \mu_k mg\cos\theta = ma$$



Dividing both sides by mass $m$:



**3. Final Result:**

$$\mathbf{a = g(\sin\theta - \mu_k\cos\theta)}$$



---



### Derivation 12: Dynamics of the Atwood Machine (Two Connected Hanging Masses)



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Atwood Machine Dynamics (Connected Masses over Ideal Pulley)</div>
  <svg viewBox="0 0 460 260" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Assumptions:**  

To derive expressions for the common linear acceleration $a$ and string tension $T$ for two masses $m_1$ and $m_2$ ($m_1 > m_2$) connected by a light, inextensible string passing over a frictionless, massless pulley.



**2. Mathematical Steps:**  

Because the string is inextensible, both bodies accelerate with identical magnitude $a$:  

* Body $1$ ($m_1$) accelerates downward.

* Body $2$ ($m_2$) accelerates upward.



**Equation of motion for Body 1 ($m_1$):**

$$m_1 g - T = m_1 a \quad \text{--- (Equation 1)}$$



**Equation of motion for Body 2 ($m_2$):**

$$T - m_2 g = m_2 a \quad \text{--- (Equation 2)}$$



**Step I: Finding Common Acceleration ($a$):**  

Add Equation (1) and Equation (2) together to eliminate $T$:

$$(m_1 g - T) + (T - m_2 g) = m_1 a + m_2 a$$

$$m_1 g - m_2 g = (m_1 + m_2)a$$

$$(m_1 - m_2)g = (m_1 + m_2)a$$



Dividing by total mass $(m_1 + m_2)$:

$$\mathbf{a = \left(\frac{m_1 - m_2}{m_1 + m_2}\right)g}$$



**Step II: Finding Tension in String ($T$):**  

Divide Equation (1) by Equation (2):

$$\frac{m_1 g - T}{T - m_2 g} = \frac{m_1 a}{m_2 a} = \frac{m_1}{m_2}$$



Cross-multiply:

$$m_2(m_1 g - T) = m_1(T - m_2 g)$$

$$m_1 m_2 g - m_2 T = m_1 T - m_1 m_2 g$$

$$m_1 T + m_2 T = m_1 m_2 g + m_1 m_2 g$$

$$(m_1 + m_2)T = 2m_1 m_2 g$$



Dividing by $(m_1 + m_2)$:

$$\mathbf{T = \left(\frac{2m_1 m_2}{m_1 + m_2}\right)g}$$



**Step III: Force on the Pulley Support ($F_{\text{clamp}}$):**  

Since two segments of string pull downward on the pulley:

$$\mathbf{F_{\text{clamp}} = 2T = \left(\frac{4m_1 m_2}{m_1 + m_2}\right)g}$$



---



### Derivation 13: Maximum Safe Speed of a Vehicle on a Level Circular Road



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Vehicle on a Flat Unbanked Circular Track</div>
  <svg viewBox="0 0 460 210" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Physical Setup:**  

A car of mass $m$ negotiates a flat, horizontal circular curve of radius $r$. To find the maximum permissible speed $v_{\max}$ without skidding outward.



**2. Mathematical Steps:**  

Forces acting on the vehicle:

1\. Weight of the car acting downward: $W = mg$

2\. Normal reaction of ground acting upward: $N$

3\. Static friction $f_s$ between tires and road directed inward toward the center of curvature.



In the vertical direction, the car is in equilibrium:

$$\sum F_y = 0 \implies N = mg \quad \text{--- (1)}$$



In the horizontal direction, static friction provides the necessary centripetal acceleration:

$$f_s = \frac{mv^2}{r} \quad \text{--- (2)}$$



To prevent outward skidding, the required centripetal force cannot exceed the maximum available limiting friction:

$$f_s \le f_{s,\max}$$



Substitute $f_s = \frac{mv^2}{r}$ and $f_{s,\max} = \mu_s N$:

$$\frac{mv^2}{r} \le \mu_s N$$



Substitute $N = mg$ from Equation (1):

$$\frac{mv^2}{r} \le \mu_s mg$$



Divide both sides by mass $m$:

$$\frac{v^2}{r} \le \mu_s g \implies v^2 \le \mu_s r g$$



**3. Final Result:**

$$\mathbf{v_{\max} = \sqrt{\mu_s r g}}$$



---



### Derivation 14: Dynamics of a Banked Circular Track (With & Without Friction)



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Dynamics of a Banked Circular Track</div>
  <svg viewBox="0 0 520 250" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim:**  

To derive expressions for the optimum design speed $v_0$ and the absolute maximum safe speed $v_{\max}$ on a road banked at an angle $\theta$ having radius of curvature $r$.



---



#### Part A: Smooth Banked Road ($\mu_s = 0$, Optimum Speed $v_0$)

Resolving the normal reaction force $N$:

* Vertical component balances weight:

  $$N\cos\theta = mg \quad \text{--- (1)}$$

* Horizontal component provides centripetal acceleration toward center:

  $$N\sin\theta = \frac{mv_0^2}{r} \quad \text{--- (2)}$$



Dividing Equation (2) by Equation (1):

$$\frac{N\sin\theta}{N\cos\theta} = \frac{\left(\frac{mv_0^2}{r}\right)}{mg}$$

$$\tan\theta = \frac{v_0^2}{rg}$$



**Optimum Speed Result:**

$$\mathbf{v_0 = \sqrt{rg\tan\theta}}$$

$$\mathbf{\theta = \tan^{-1}\left(\frac{v_0^2}{rg}\right)}$$



---



#### Part B: Rough Banked Road (Maximum Safe Speed $v_{\max}$)

At maximum speed $v_{\max}$, the vehicle tends to slip outward/upward. Therefore, limiting friction $f_s = \mu_s N$ acts down the inclined banking plane.



Resolving all forces horizontally and vertically:



**1. Vertical Equilibrium:**

$$N\cos\theta - f_s\sin\theta = mg$$

Substitute $f_s = \mu_s N$:

$$N\cos\theta - \mu_s N\sin\theta = mg$$

$$N(\cos\theta - \mu_s\sin\theta) = mg \implies N = \frac{mg}{\cos\theta - \mu_s\sin\theta} \quad \text{--- (3)}$$



**2. Horizontal Radial Equation (Centripetal Requirement):**

$$N\sin\theta + f_s\cos\theta = \frac{mv_{\max}^2}{r}$$

Substitute $f_s = \mu_s N$:

$$N\sin\theta + \mu_s N\cos\theta = \frac{mv_{\max}^2}{r}$$

$$N(\sin\theta + \mu_s\cos\theta) = \frac{mv_{\max}^2}{r} \quad \text{--- (4)}$$



**3. Combining Equations:**  

Divide Equation (4) by Equation (3):

$$\frac{N(\sin\theta + \mu_s\cos\theta)}{N(\cos\theta - \mu_s\sin\theta)} = \frac{\left(\frac{mv_{\max}^2}{r}\right)}{mg}$$

$$\frac{\sin\theta + \mu_s\cos\theta}{\cos\theta - \mu_s\sin\theta} = \frac{v_{\max}^2}{rg}$$



Divide the numerator and denominator of the left-hand side by $\cos\theta$:

$$\frac{\frac{\sin\theta}{\cos\theta} + \mu_s\frac{\cos\theta}{\cos\theta}}{\frac{\cos\theta}{\cos\theta} - \mu_s\frac{\sin\theta}{\cos\theta}} = \frac{v_{\max}^2}{rg}$$

$$\frac{\tan\theta + \mu_s}{1 - \mu_s\tan\theta} = \frac{v_{\max}^2}{rg}$$



Solving for $v_{\max}$:



**Maximum Speed Result:**

$$\mathbf{v_{\max} = \sqrt{rg\left(\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}\right)}}$$



---



### Derivation 15: Bending of a Cyclist Negotiating a Curve



<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Bending of a Cyclist Negotiating a Curve</div>
  <svg viewBox="0 0 460 250" style="width: 100%; max-width: 460px; height: auto; display: block; margin: 0 auto; overflow: visible;">
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
    </defs>
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
</div>



**1. Aim & Setup:**  

To prevent toppling outward due to torque produced by centrifugal/friction forces, a cyclist tilts inward toward the center of the curve by an angle $\theta$ relative to the vertical.  

* Radius of curve $= r$, Speed of bicycle $= v$, Total mass $= m$.

* Ground reaction force $\vec{R}$ acts at angle $\theta$ with the vertical through the point of contact.



**2. Mathematical Steps:**  

Resolving ground reaction $\vec{R}$ into orthogonal components:

1\. Vertical component balances total weight:

   $$R\cos\theta = mg \quad \text{--- (1)}$$

2\. Horizontal component provides the required centripetal force:

   $$R\sin\theta = \frac{mv^2}{r} \quad \text{--- (2)}$$



Dividing Equation (2) by Equation (1):

$$\frac{R\sin\theta}{R\cos\theta} = \frac{\left(\frac{mv^2}{r}\right)}{mg}$$

$$\tan\theta = \frac{v^2}{rg}$$



**3. Final Result:**

$$\mathbf{\theta = \tan^{-1}\left(\frac{v^2}{rg}\right)}$$

*Conclusion:* The required tilt $\theta$ depends solely on speed $v$ and radius $r$, and is completely independent of the mass $m$ of the cyclist.

