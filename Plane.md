# COMPLETE STUDY & REVISION SHEET: MOTION IN A PLANE
*(As per the Latest Rationalized CBSE/NCERT Class 11 Physics Syllabus)*

---

## PART 1: COMPREHENSIVE FORMULA TABLES

### Table 1: Vectors, Components & Vector Operations

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **1.1** | $\|\vec{A}\| = A = \sqrt{A_x^2 + A_y^2 + A_z^2}$ | **Magnitude of a 3D Vector**: Length/norm of vector $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$. | • In 2D plane: $A = \sqrt{A_x^2 + A_y^2}$<br>• Distance between $P(x_1, y_1)$ and $Q(x_2, y_2)$:<br>$\|\Delta \vec{r}\| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| **1.2** | $\hat{A} = \frac{\vec{A}}{\|\vec{A}\|}$ | **Unit Vector**: Dimensionless vector having unit magnitude specifying direction along $\vec{A}$. | • $\hat{i} = \frac{\vec{x}}{\|x\|}$, $\hat{j} = \frac{\vec{y}}{\|y\|}$, $\hat{k} = \frac{\vec{z}}{\|z\|}$<br>• $\|\hat{A}\| = 1$ |
| **1.3** | $A_x = A\cos\theta$<br>$A_y = A\sin\theta$<br>$\tan\theta = \frac{A_y}{A_x}$ | **Rectangular Components in 2D**: Resolving a vector making angle $\theta$ with the $+x$-axis. | • If angle $\phi$ is measured with $+y$-axis:<br>$A_y = A\cos\phi$, $A_x = A\sin\phi$<br>• Direction cosines in 3D: $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$ |
| **1.4** | $R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$ | **Parallelogram / Triangle Law (Magnitude)**: Resultant of two vectors $\vec{A}$ and $\vec{B}$ inclined at angle $\theta$. | • If $\theta = 0^\circ$: $R_{\max} = A + B$<br>• If $\theta = 180^\circ$: $R_{\min} = \|A - B\|$<br>• If $\theta = 90^\circ$: $R = \sqrt{A^2 + B^2}$<br>• If $A = B$: $R = 2A\cos(\theta/2)$ |
| **1.5** | $\tan\beta = \frac{B\sin\theta}{A + B\cos\theta}$ | **Direction of Resultant Vector**: Angle $\beta$ made by resultant $\vec{R}$ with vector $\vec{A}$. | • If $A = B$: $\tan\beta = \tan(\theta/2) \implies \beta = \theta/2$ (bisects the angle between vectors). |
| **1.6** | $S = \sqrt{A^2 + B^2 - 2AB\cos\theta}$<br>$\tan\beta' = \frac{B\sin\theta}{A - B\cos\theta}$ | **Vector Subtraction**: Magnitude and direction of $\vec{S} = \vec{A} - \vec{B} = \vec{A} + (-\vec{B})$. | • If $A = B$: $S = 2A\sin(\theta/2)$<br>• If $\|\vec{A} + \vec{B}\| = \|\vec{A} - \vec{B}\|$, then $\theta = 90^\circ$ ($\vec{A} \perp \vec{B}$). |
| **1.7** | $\vec{A} \cdot \vec{B} = AB\cos\theta$<br>$= A_x B_x + A_y B_y + A_z B_z$ | **Scalar (Dot) Product**: Scalar projection of one vector along another. | • Condition for orthogonality: $\vec{A} \cdot \vec{B} = 0 \iff \vec{A} \perp \vec{B}$<br>• Angle between vectors: $\cos\theta = \frac{\vec{A} \cdot \vec{B}}{AB}$<br>• Self product: $\vec{A} \cdot \vec{A} = A^2$<br>• $\hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1$; $\hat{i}\cdot\hat{j} = 0$ |
| **1.8** | $\text{Proj}_{\vec{B}}\vec{A} = \frac{\vec{A} \cdot \vec{B}}{B}$ | **Projection of $\vec{A}$ on $\vec{B}$**: Scalar component of $\vec{A}$ along the direction of $\vec{B}$. | • Vector component of $\vec{A}$ along $\vec{B}$:<br>$(\vec{A} \cdot \hat{B})\hat{B} = \left(\frac{\vec{A} \cdot \vec{B}}{B^2}\right)\vec{B}$ |
| **1.9** | $\vec{A} \times \vec{B} = (AB\sin\theta)\hat{n}$<br>$= \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$ | **Vector (Cross) Product**: Vector perpendicular to both $\vec{A}$ and $\vec{B}$ via right-hand rule. | • Anti-commutative: $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$<br>• Condition for collinearity: $\vec{A} \times \vec{B} = \vec{0} \iff \vec{A} \parallel \vec{B}$<br>• $\hat{i}\times\hat{j}=\hat{k}$, $\hat{j}\times\hat{k}=\hat{i}$, $\hat{k}\times\hat{i}=\hat{j}$<br>• Area of parallelogram $= \|\vec{A} \times \vec{B}\|$<br>• Area of triangle $= \frac{1}{2}\|\vec{A} \times \vec{B}\|$ |

---

### Table 2: General 2D Kinematics (Two-Dimensional Motion)

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **2.1** | $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j}$ | **Position Vector**: Locates a particle in the $xy$-plane at time $t$. | • Magnitude: $r = \sqrt{x^2 + y^2}$<br>• Direction: $\tan\theta = y/x$ |
| **2.2** | $\Delta\vec{r} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}$ | **Displacement Vector**: Net straight-line change in position between $t_1$ and $t_2$. | • Magnitude: $\|\Delta\vec{r}\| = \sqrt{(\Delta x)^2 + (\Delta y)^2}$ |
| **2.3** | $\vec{v}_{\text{avg}} = \frac{\Delta\vec{r}}{\Delta t} = \frac{\Delta x}{\Delta t}\hat{i} + \frac{\Delta y}{\Delta t}\hat{j}$ | **Average Velocity**: Vector displacement per unit time. | • Direction is parallel to $\Delta\vec{r}$. |
| **2.4** | $\vec{v} = \frac{d\vec{r}}{dt} = v_x\hat{i} + v_y\hat{j}$ | **Instantaneous Velocity**: Tangent to the path at that instant. | • $v_x = \frac{dx}{dt}$, $v_y = \frac{dy}{dt}$<br>• Speed: $v = \sqrt{v_x^2 + v_y^2}$<br>• Angle of motion: $\tan\theta = \frac{v_y}{v_x}$ |
| **2.5** | $\vec{a} = \frac{d\vec{v}}{dt} = a_x\hat{i} + a_y\hat{j}$ | **Instantaneous Acceleration**: Rate of change of velocity vector. | • $a_x = \frac{dv_x}{dt} = \frac{d^2x}{dt^2}$, $a_y = \frac{dv_y}{dt} = \frac{d^2y}{dt^2}$<br>• Magnitude: $a = \sqrt{a_x^2 + a_y^2}$<br>• $\tan\alpha = \frac{a_y}{a_x}$ |
| **2.6** | $\vec{v} = \vec{u} + \vec{a}t$<br>$\vec{r} = \vec{r}_0 + \vec{u}t + \frac{1}{2}\vec{a}t^2$ | **Vector Kinematic Equations for Constant $\vec{a}$**: Motion decomposes into two completely independent 1D motions. | • Along $x$: $v_x = u_x + a_x t$, $x = x_0 + u_x t + \frac{1}{2}a_x t^2$<br>• Along $y$: $v_y = u_y + a_y t$, $y = y_0 + u_y t + \frac{1}{2}a_y t^2$<br>• $v_x^2 = u_x^2 + 2a_x(x - x_0)$, $v_y^2 = u_y^2 + 2a_y(y - y_0)$ |

---

### Table 3: Oblique Projectile Motion (Ground-to-Ground)
*Conditions: Launch speed $u$ at angle $\theta$ above horizontal; $a_x = 0$, $a_y = -g$; neglect air resistance.*

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **3.1** | $y = x\tan\theta - \frac{g x^2}{2u^2\cos^2\theta}$ | **Equation of Trajectory**: Relates vertical coordinate $y$ directly to horizontal coordinate $x$. | • Form in terms of Range $R$:<br>$y = x\tan\theta\left(1 - \frac{x}{R}\right)$<br>• Proves the path is an inverted parabola. |
| **3.2** | $T = \frac{2u\sin\theta}{g} = \frac{2u_y}{g}$ | **Total Time of Flight**: Duration from launch to landing at the same vertical level. | • Time to reach peak (Time of Ascent):<br>$t_a = \frac{u\sin\theta}{g} = \frac{T}{2}$<br>• Time of ascent = Time of descent. |
| **3.3** | $H_{\max} = \frac{u^2\sin^2\theta}{2g} = \frac{u_y^2}{2g}$ | **Maximum Height Attained**: Peak vertical elevation above launch plane. | • At highest point: $v_y = 0$, $v_x = u\cos\theta$<br>• Minimum speed during flight: $v_{\min} = u\cos\theta$<br>• Kinetic energy at peak: $K_{\text{peak}} = K_0 \cos^2\theta$ |
| **3.4** | $R = \frac{u^2\sin 2\theta}{g} = \frac{2u_x u_y}{g}$ | **Horizontal Range**: Total horizontal distance traversed during flight time $T$. | • Maximum range occurs at $\theta = 45^\circ$:<br>$R_{\max} = \frac{u^2}{g}$<br>• At $\theta = 45^\circ$: $H = \frac{R_{\max}}{4}$ |
| **3.5** | $R(\theta) = R(90^\circ - \theta)$ | **Complementary Angles of Projection**: Identical range for launch angles $\theta$ and $(90^\circ - \theta)$ at same $u$. | • Ratio of heights: $\frac{H_1}{H_2} = \tan^2\theta$<br>• Product of heights: $R = 4\sqrt{H_1 H_2}$<br>• Sum of heights: $H_1 + H_2 = \frac{u^2}{2g}$<br>• Flight times: $T_1 T_2 = \frac{2R}{g}$ |
| **3.6** | $\tan\theta = \frac{4H}{R}$ | **Relation Between $H$ and $R$**: Angle of projection in terms of maximum height and range. | • If $R = H \implies \tan\theta = 4 \implies \theta \approx 76^\circ$<br>• If $R = nH \implies \tan\theta = \frac{4}{n}$ |
| **3.7** | $\vec{v}(t) = (u\cos\theta)\hat{i} + (u\sin\theta - gt)\hat{j}$<br>$v(t) = \sqrt{u^2 - 2gy}$ | **Instantaneous Velocity**: Magnitude and vector velocity at time $t$ or elevation $y$. | • Direction at time $t$: $\tan\beta = \frac{u\sin\theta - gt}{u\cos\theta}$<br>• Time when $\vec{v} \perp \vec{u}$: $t = \frac{u}{g\sin\theta}$ |
| **3.8** | $\rho_{\text{top}} = \frac{u^2\cos^2\theta}{g}$ | **Radius of Curvature at Highest Point**: Curvature radius where $a_c = g$ and $v = u\cos\theta$. | • At launch point: $\rho_0 = \frac{u^2}{g\cos\theta}$ |
| **3.9** | $\Delta\vec{p} = -2mu\sin\theta\,\hat{j}$ | **Change in Linear Momentum**: Between launch point and striking point on ground. | • Magnitude: $\|\Delta\vec{p}\| = 2mu\sin\theta$<br>• From launch to peak: $\Delta\vec{p}_{\text{top}} = -mu\sin\theta\,\hat{j}$ |

---

### Table 4: Horizontal Projectile Motion (From a Height $h$)
*Conditions: Fired horizontally with speed $u$ from top of a tower; $u_x = u$, $u_y = 0$, $a_x = 0$, $a_y = +g$ (downward).*

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **4.1** | $y = \frac{g x^2}{2u^2}$ | **Trajectory Equation**: Origin taken at release point, with $+y$ directed downward. | • Parabolic path opening downward. |
| **4.2** | $T = \sqrt{\frac{2h}{g}}$ | **Time of Flight**: Time taken to strike the ground below. | • Completely independent of projection speed $u$. Same time as a freely dropped body! |
| **4.3** | $R = u\sqrt{\frac{2h}{g}}$ | **Horizontal Range**: Horizontal distance from the base of the cliff to the strike point. | • $R \propto u$; doubling $u$ doubles horizontal range. |
| **4.4** | $v = \sqrt{u^2 + 2gh}$<br>$\tan\beta = \frac{\sqrt{2gh}}{u}$ | **Velocity Upon Striking Ground**: Resultant striking velocity and impact angle $\beta$ with horizontal. | • $v_x = u = \text{constant}$<br>• $v_y = gt = \sqrt{2gh}$ |

---

### Table 5: Uniform Circular Motion (UCM)

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **5.1** | $\omega = \frac{d\theta}{dt} = \frac{2\pi}{T} = 2\pi f$ | **Angular Velocity**: Rate of change of angular displacement; $T$ is period, $f$ is frequency. | • SI Unit: $\text{rad/s}$<br>• Frequency $f = \frac{1}{T}$ in $\text{Hz}$ or $\text{rev/s}$ |
| **5.2** | $v = r\omega$<br>$\vec{v} = \vec{\omega} \times \vec{r}$ | **Linear Speed vs Angular Velocity**: Speed of particle traversing circle of radius $r$. | • Vector form: $\vec{v}$ is perpendicular to both $\vec{\omega}$ and $\vec{r}$. |
| **5.3** | $a_c = \frac{v^2}{r} = \omega^2 r = v\omega$ | **Centripetal (Radial) Acceleration**: Acceleration directed radially inward toward the center. | • In terms of frequency: $a_c = 4\pi^2 f^2 r$<br>• In terms of period: $a_c = \frac{4\pi^2 r}{T^2}$<br>• Vector form: $\vec{a}_c = -\omega^2\vec{r} = -\frac{v^2}{r}\hat{r}$ |
| **5.4** | $a_{\text{net}} = \sqrt{a_c^2 + a_t^2}$ | **Total Acceleration in Non-Uniform Circular Motion**: $a_c = \frac{v^2}{r}$ (radial), $a_t = \frac{dv}{dt} = r\alpha$ (tangential). | • Angle with radial line: $\tan\phi = \frac{a_t}{a_c}$<br>• In pure UCM: $a_t = 0 \implies a_{\text{net}} = a_c$ |

---

### Table 6: Relative Velocity in 2D (Rain-Man & River-Boat Reference)

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **6.1** | $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$ | **Relative Velocity in 2D**: Velocity of $A$ relative to frame of $B$. | • Magnitude: $v_{AB} = \sqrt{v_A^2 + v_B^2 - 2v_A v_B\cos\theta}$ |
| **6.2** | $\vec{v}_{r/m} = \vec{v}_r - \vec{v}_m$<br>$\tan\theta = \frac{v_m}{v_r}$ | **Rain-Man Problem**: Rain falling vertically at $\vec{v}_r = -v_r\hat{j}$; man walking horizontally at $\vec{v}_m = v_m\hat{i}$. | • Man must hold umbrella at angle $\theta = \tan^{-1}\left(\frac{v_m}{v_r}\right)$ with the vertical tilted forward. |
| **6.3** | $t = \frac{d}{v_b\cos\theta}$<br>$x = (v_r - v_b\sin\theta)t$ | **River-Boat General Case**: River width $d$, river flow speed $v_r$, boat speed in still water $v_b$ at angle $\theta$ upstream from normal. | • $x$ is the downstream drift. |
| **6.4** | $\sin\theta = \frac{v_r}{v_b}$<br>$t = \frac{d}{\sqrt{v_b^2 - v_r^2}}$ | **Shortest Path Crossing (Zero Drift)**: Boat lands directly opposite on the other bank ($x = 0$). | • Valid only when $v_b > v_r$.<br>• Ground speed: $v = \sqrt{v_b^2 - v_r^2}$ |

---

## PART 2: STEP-BY-STEP CLASS 11 DERIVATIONS

---

### Derivation 1: Parallelogram Law of Vector Addition (Magnitude & Direction)

**1. Aim & Law Statement:**  
*Statement:* If two vectors acting simultaneously at a point are represented both in magnitude and direction by the two adjacent sides of a parallelogram drawn from a point, then their resultant is represented both in magnitude and direction by the diagonal of the parallelogram passing through that point.

**2. Geometry & Proper Vector Plot:**

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Geometric Construction of the Parallelogram Law</div>
  <svg viewBox="0 0 520 260" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <defs>
      <marker id="arrCyan_p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#38bdf8"/>
      </marker>
      <marker id="arrPurple_p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#a855f7"/>
      </marker>
      <marker id="arrEmerald_p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#34d399"/>
      </marker>
    </defs>

    <polygon points="60,200 280,200 380,60 160,60" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="4 4"/>
    <line x1="280" y1="200" x2="380" y2="200" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="380" y1="60" x2="380" y2="200" stroke="#f59e0b" stroke-width="2"/>
    <path d="M 365 200 L 365 185 L 380 185" fill="none" stroke="#f59e0b" stroke-width="1.5"/>

    <line x1="60" y1="200" x2="275" y2="200" stroke="#38bdf8" stroke-width="3.5" marker-end="url(#arrCyan_p)"/>
    <line x1="60" y1="200" x2="155" y2="65" stroke="#a855f7" stroke-width="3.5" marker-end="url(#arrPurple_p)"/>
    <line x1="60" y1="200" x2="375" y2="65" stroke="#34d399" stroke-width="3.5" marker-end="url(#arrEmerald_p)"/>

    <circle cx="60" cy="200" r="5" fill="#ffffff"/>
    <circle cx="280" cy="200" r="4" fill="#38bdf8"/>
    <circle cx="160" cy="60" r="4" fill="#a855f7"/>
    <circle cx="380" cy="60" r="5" fill="#34d399"/>
    <circle cx="380" cy="200" r="4" fill="#f59e0b"/>

    <text x="45" y="215" fill="#ffffff" font-size="14" font-weight="700">O</text>
    <text x="275" y="222" fill="#38bdf8" font-size="14" font-weight="700">P</text>
    <text x="145" y="50" fill="#a855f7" font-size="14" font-weight="700">S</text>
    <text x="390" y="55" fill="#34d399" font-size="14" font-weight="700">R</text>
    <text x="385" y="220" fill="#f59e0b" font-size="14" font-weight="700">N</text>

    <text x="160" y="225" fill="#38bdf8" font-size="14" font-weight="600">A (Base)</text>
    <text x="80" y="120" fill="#c084fc" font-size="14" font-weight="600">B</text>
    <text x="235" y="115" fill="#34d399" font-size="15" font-weight="700">R = A + B</text>

    <path d="M 100 200 A 40 40 0 0 0 85 165" fill="none" stroke="#a855f7" stroke-width="2"/>
    <text x="105" y="180" fill="#c084fc" font-size="12">θ</text>
    <path d="M 125 200 A 65 65 0 0 0 115 170" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="132" y="195" fill="#6ee7b7" font-size="12">β</text>
    <path d="M 315 200 A 35 35 0 0 0 305 170" fill="none" stroke="#a855f7" stroke-width="1.5"/>
    <text x="322" y="190" fill="#c084fc" font-size="12">θ</text>

    <text x="390" y="140" fill="#fbbf24" font-size="12" font-family="monospace">B sin θ</text>
    <text x="300" y="220" fill="#fbbf24" font-size="12" font-family="monospace">B cos θ</text>
  </svg>
</div>

**3. Mathematical Derivation of Magnitude ($R$):**  
Let $\vec{OP} = \vec{A}$ and $\vec{OS} = \vec{B}$ inclined at angle $\theta$. By geometry, $\vec{PR} = \vec{OS} = \vec{B}$ and $\angle RPN = \theta$.

In the right-angled triangle $\triangle PNR$:
$$\cos\theta = \frac{PN}{PR} \implies PN = PR\cos\theta = B\cos\theta$$
$$\sin\theta = \frac{RN}{PR} \implies RN = PR\sin\theta = B\sin\theta$$

Now apply the Pythagorean Theorem to right-angled triangle $\triangle ONR$:
$$OR^2 = ON^2 + RN^2$$
$$OR^2 = (OP + PN)^2 + RN^2$$

Substitute geometric lengths:
$$R^2 = (A + B\cos\theta)^2 + (B\sin\theta)^2$$
$$R^2 = A^2 + 2AB\cos\theta + B^2\cos^2\theta + B^2\sin^2\theta$$
$$R^2 = A^2 + 2AB\cos\theta + B^2(\cos^2\theta + \sin^2\theta)$$

Since $\cos^2\theta + \sin^2\theta = 1$:
$$R^2 = A^2 + B^2 + 2AB\cos\theta$$
$$\mathbf{R = \sqrt{A^2 + B^2 + 2AB\cos\theta}}$$

**4. Mathematical Derivation of Direction ($\beta$):**  
Let $\beta$ be the angle which resultant $\vec{R}$ makes with vector $\vec{A}$. In right triangle $\triangle ONR$:
$$\tan\beta = \frac{RN}{ON} = \frac{RN}{OP + PN}$$
$$\mathbf{\tan\beta = \frac{B\sin\theta}{A + B\cos\theta}}$$

---

### Derivation 2: Resolution of a Vector into Rectangular Components in a Plane

**1. Aim & Setup:**  
To decompose a 2D vector $\vec{A}$ into two mutually perpendicular components along the $x$- and $y$-axes.

**2. Vector Component Construction:**

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <svg viewBox="0 0 380 240" style="width: 100%; max-width: 380px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <line x1="50" y1="200" x2="350" y2="200" stroke="#71717a" stroke-width="2"/>
    <line x1="50" y1="200" x2="50" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="340" y="220" fill="#a1a1aa" font-size="13">x</text>
    <text x="35" y="25" fill="#a1a1aa" font-size="13">y</text>

    <line x1="280" y1="70" x2="280" y2="200" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="50" y1="70" x2="280" y2="70" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3"/>

    <line x1="50" y1="200" x2="272" y2="200" stroke="#38bdf8" stroke-width="3.5" marker-end="url(#arrCyan_p)"/>
    <line x1="50" y1="200" x2="50" y2="78" stroke="#a855f7" stroke-width="3.5" marker-end="url(#arrPurple_p)"/>
    <line x1="50" y1="200" x2="274" y2="74" stroke="#34d399" stroke-width="3.5" marker-end="url(#arrEmerald_p)"/>

    <text x="140" y="222" fill="#38bdf8" font-size="13" font-weight="600">A_x = A cos θ</text>
    <text x="5" y="140" fill="#c084fc" font-size="13" font-weight="600">A_y = A sin θ</text>
    <text x="160" y="125" fill="#34d399" font-size="15" font-weight="700">A</text>

    <path d="M 90 200 A 40 40 0 0 0 83 175" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="98" y="190" fill="#6ee7b7" font-size="12">θ</text>
  </svg>
</div>

**3. Mathematical Steps:**  
By triangle law of vector addition:
$$\vec{A} = \vec{A}_x + \vec{A}_y = A_x\hat{i} + A_y\hat{j}$$

In right-angled triangle $\triangle OPQ$:
$$\cos\theta = \frac{A_x}{A} \implies \mathbf{A_x = A\cos\theta}$$
$$\sin\theta = \frac{A_y}{A} \implies \mathbf{A_y = A\sin\theta}$$

Squaring and adding both equations:
$$A_x^2 + A_y^2 = A^2(\cos^2\theta + \sin^2\theta) = A^2 \implies \mathbf{A = \sqrt{A_x^2 + A_y^2}}$$

Dividing equations gives the direction:
$$\frac{A_y}{A_x} = \frac{A\sin\theta}{A\cos\theta} = \tan\theta \implies \mathbf{\tan\theta = \frac{A_y}{A_x}}$$

---

### Derivation 3: Equation of Trajectory of an Oblique Projectile (Proof of Parabola)

**1. Aim & Setup:**  
A particle is projected from the origin $(0,0)$ with an initial velocity $u$ at an angle $\theta$ with the horizontal ground. Acceleration due to gravity acts downward: $a_x = 0$, $a_y = -g$.

**2. Trajectory Coordinate Geometry:**

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Oblique Projectile Trajectory ($y$ vs $x$)</div>
  <svg viewBox="0 0 540 240" style="width: 100%; max-width: 540px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <line x1="40" y1="200" x2="500" y2="200" stroke="#71717a" stroke-width="2"/>
    <line x1="40" y1="200" x2="40" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="490" y="220" fill="#a1a1aa" font-size="13">x (Horizontal)</text>
    <text x="15" y="25" fill="#a1a1aa" font-size="13">y</text>

    <path d="M 40 200 Q 250 -40, 460 200" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>

    <line x1="40" y1="200" x2="115" y2="105" stroke="#34d399" stroke-width="3" marker-end="url(#arrEmerald_p)"/>
    <text x="100" y="95" fill="#34d399" font-size="14" font-weight="700">u</text>

    <path d="M 75 200 A 35 35 0 0 0 65 170" fill="none" stroke="#34d399" stroke-width="2"/>
    <text x="80" y="190" fill="#6ee7b7" font-size="12">θ</text>

    <circle cx="250" cy="80" r="5" fill="#f59e0b"/>
    <line x1="250" y1="80" x2="310" y2="80" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrCyan_p)"/>
    <text x="315" y="85" fill="#38bdf8" font-size="12">v_x = u cos θ (v_y = 0)</text>

    <line x1="250" y1="80" x2="250" y2="200" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="210" y="145" fill="#fbbf24" font-size="13" font-weight="600">H_max</text>

    <circle cx="460" cy="200" r="5" fill="#ffffff"/>
    <text x="445" y="225" fill="#ffffff" font-size="13" font-weight="600">R (Landing)</text>

    <line x1="40" y1="230" x2="460" y2="230" stroke="#a1a1aa" stroke-width="1"/>
    <text x="230" y="235" fill="#a1a1aa" font-size="11">Horizontal Range (R)</text>
  </svg>
</div>

**3. Mathematical Steps:**  
Initial velocity components:
* $u_x = u\cos\theta$
* $u_y = u\sin\theta$

Accelerations:
* $a_x = 0$
* $a_y = -g$

**Step 1: Horizontal Motion**  
Since $a_x = 0$, horizontal motion proceeds with uniform velocity:
$$x = u_x \cdot t = (u\cos\theta)t$$
Solving for time $t$:
$$t = \frac{x}{u\cos\theta} \quad \text{--- (Equation 1)}$$

**Step 2: Vertical Motion**  
Under constant downward gravity $a_y = -g$:
$$y = u_y t - \frac{1}{2}g t^2 = (u\sin\theta)t - \frac{1}{2}g t^2 \quad \text{--- (Equation 2)}$$

**Step 3: Eliminate $t$ between Equations 1 and 2**  
Substitute Equation (1) into Equation (2):
$$y = (u\sin\theta)\left(\frac{x}{u\cos\theta}\right) - \frac{1}{2}g \left(\frac{x}{u\cos\theta}\right)^2$$
$$y = x\left(\frac{\sin\theta}{\cos\theta}\right) - \frac{g x^2}{2u^2\cos^2\theta}$$
$$\mathbf{y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}}$$

Let constants $A = \tan\theta$ and $B = \frac{g}{2u^2\cos^2\theta}$. The equation takes the canonical quadratic form:
$$y = Ax - Bx^2$$
This is the equation of an inverted parabola. Hence, the trajectory of a projectile is **strictly parabolic**.

---

### Derivation 4: Alternative Form of Trajectory Equation ($y = x\tan\theta(1 - x/R)$)

From Derivation 3:
$$y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}$$

Factor out $x\tan\theta$:
$$y = x\tan\theta \left[ 1 - \frac{gx}{2u^2\cos^2\theta \cdot \tan\theta} \right]$$

Since $\tan\theta = \frac{\sin\theta}{\cos\theta}$:
$$\cos^2\theta \cdot \tan\theta = \cos^2\theta \cdot \frac{\sin\theta}{\cos\theta} = \sin\theta\cos\theta$$

Therefore, the second term simplifies to:
$$\frac{gx}{2u^2\sin\theta\cos\theta} = \frac{x}{\frac{u^2(2\sin\theta\cos\theta)}{g}} = \frac{x}{\frac{u^2\sin 2\theta}{g}}$$

Recognizing that the horizontal range is $R = \frac{u^2\sin 2\theta}{g}$:
$$\mathbf{y = x\tan\theta \left(1 - \frac{x}{R}\right)}$$

---

### Derivation 5: Time of Ascent ($t_a$) and Total Time of Flight ($T$) of a Projectile

**1. Time of Ascent ($t_a$):**  
At highest point $P$, vertical velocity component drops to zero: $v_y = 0$.
$$v_y = u_y + a_y t$$
$$0 = u\sin\theta - gt_a \implies gt_a = u\sin\theta$$
$$\mathbf{t_a = \frac{u\sin\theta}{g}}$$

**2. Total Time of Flight ($T$):**  
When the projectile returns to the same ground level, net vertical displacement is zero ($y = 0$):
$$y = u_y T - \frac{1}{2}g T^2$$
$$0 = (u\sin\theta)T - \frac{1}{2}g T^2$$
$$T\left(u\sin\theta - \frac{1}{2}gT\right) = 0$$

Since $T > 0$:
$$\frac{1}{2}g T = u\sin\theta \implies \mathbf{T = \frac{2u\sin\theta}{g} = 2t_a}$$

---

### Derivation 6: Maximum Height Attained by a Projectile ($H_{\max}$)

Using the third vertical kinematic equation:
$$v_y^2 = u_y^2 + 2a_y y$$

At maximum height, $v_y = 0$, $a_y = -g$, and $y = H_{\max}$:
$$0^2 = (u\sin\theta)^2 + 2(-g)H_{\max}$$
$$0 = u^2\sin^2\theta - 2g H_{\max}$$
$$2g H_{\max} = u^2\sin^2\theta$$
$$\mathbf{H_{\max} = \frac{u^2\sin^2\theta}{2g}}$$

---

### Derivation 7: Horizontal Range ($R$) and Condition for Maximum Range

**1. Formula for Range:**  
Horizontal range is the horizontal distance covered during total time of flight $T$:
$$R = u_x \cdot T = (u\cos\theta) \cdot \left(\frac{2u\sin\theta}{g}\right)$$
$$R = \frac{u^2 (2\sin\theta\cos\theta)}{g}$$
Using trigonometric identity $2\sin\theta\cos\theta = \sin 2\theta$:
$$\mathbf{R = \frac{u^2\sin 2\theta}{g}}$$

**2. Maximum Range Condition:**  
For a given launch speed $u$, range $R$ is maximum when $\sin 2\theta$ reaches its maximum value:
$$\sin 2\theta = 1 \implies 2\theta = 90^\circ \implies \mathbf{\theta = 45^\circ}$$
$$\mathbf{R_{\max} = \frac{u^2}{g}}$$

At $\theta = 45^\circ$, the maximum height reached is:
$$H = \frac{u^2\sin^2(45^\circ)}{2g} = \frac{u^2(1/\sqrt{2})^2}{2g} = \frac{u^2}{4g} = \mathbf{\frac{R_{\max}}{4}}$$

---

### Derivation 8: Two Angles of Projection for the Same Range (Complementary Angles)

Let launch angles be $\theta_1 = \theta$ and $\theta_2 = 90^\circ - \theta$.

1. For angle $\theta_1 = \theta$:
   $$R_1 = \frac{u^2\sin 2\theta}{g}$$

2. For angle $\theta_2 = 90^\circ - \theta$:
   $$R_2 = \frac{u^2\sin[2(90^\circ - \theta)]}{g} = \frac{u^2\sin(180^\circ - 2\theta)}{g}$$
   Since $\sin(180^\circ - \alpha) = \sin\alpha$:
   $$R_2 = \frac{u^2\sin 2\theta}{g}$$

Thus:
$$\mathbf{R(\theta) = R(90^\circ - \theta)}$$

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.75rem; font-size: 0.95rem;">Complementary Launch Angles ($\theta$ vs $90^\circ - \theta$)</div>
  <svg viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <line x1="40" y1="180" x2="480" y2="180" stroke="#71717a" stroke-width="2"/>
    <line x1="40" y1="180" x2="40" y2="20" stroke="#71717a" stroke-width="2"/>

    <path d="M 40 180 Q 240 -80, 440 180" fill="none" stroke="#a855f7" stroke-width="3"/>
    <path d="M 40 180 Q 240 80, 440 180" fill="none" stroke="#38bdf8" stroke-width="3"/>

    <circle cx="440" cy="180" r="5" fill="#34d399"/>
    <text x="430" y="205" fill="#34d399" font-size="13" font-weight="700">Same Range R</text>
    <text x="210" y="45" fill="#c084fc" font-size="12">θ₂ = 60° (Greater Height H₂)</text>
    <text x="210" y="115" fill="#38bdf8" font-size="12">θ₁ = 30° (Lower Height H₁)</text>
  </svg>
</div>

---

### Derivation 9: Key Relations for Complementary Angles ($R = 4\sqrt{H_1 H_2}$ and $T_1 T_2 = \frac{2R}{g}$)

**1. Product of Maximum Heights ($R = 4\sqrt{H_1 H_2}$):**  
$$H_1 = \frac{u^2\sin^2\theta}{2g}, \quad H_2 = \frac{u^2\sin^2(90^\circ - \theta)}{2g} = \frac{u^2\cos^2\theta}{2g}$$
Multiplying the two heights:
$$H_1 H_2 = \frac{u^4 \sin^2\theta \cos^2\theta}{4g^2} = \frac{(u^2 \sin\theta\cos\theta)^2}{4g^2}$$
$$H_1 H_2 = \frac{\left(\frac{u^2 \cdot 2\sin\theta\cos\theta}{2g}\right)^2}{4} = \frac{\left(\frac{u^2\sin 2\theta}{g}\right)^2}{16} = \frac{R^2}{16}$$
$$R^2 = 16 H_1 H_2 \implies \mathbf{R = 4\sqrt{H_1 H_2}}$$

**2. Product of Flight Times ($T_1 T_2 = \frac{2R}{g}$):**  
$$T_1 = \frac{2u\sin\theta}{g}, \quad T_2 = \frac{2u\sin(90^\circ - \theta)}{g} = \frac{2u\cos\theta}{g}$$
$$T_1 T_2 = \frac{4u^2\sin\theta\cos\theta}{g^2} = \frac{2}{g}\left(\frac{u^2 \cdot 2\sin\theta\cos\theta}{g}\right) = \mathbf{\frac{2R}{g}}$$

---

### Derivation 10: Horizontal Projection from a Height $h$

**1. Aim & Setup:**  
A projectile is projected horizontally with velocity $u$ from the top of a cliff of height $h$.
* $u_x = u$, $u_y = 0$
* $a_x = 0$, $a_y = +g$ (downward coordinate convention)

**2. Physical Construction:**

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <svg viewBox="0 0 520 220" style="width: 100%; max-width: 520px; height: auto; display: block; margin: 0 auto; overflow: visible;">
    <line x1="30" y1="190" x2="480" y2="190" stroke="#71717a" stroke-width="2"/>

    <rect x="50" y="50" width="40" height="140" fill="rgba(255,255,255,0.05)" stroke="#71717a" stroke-width="1.5"/>
    <text x="30" y="125" fill="#a1a1aa" font-size="13">h</text>

    <line x1="90" y1="50" x2="170" y2="50" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan_p)"/>
    <text x="175" y="55" fill="#38bdf8" font-size="14" font-weight="700">u (Horizontal)</text>

    <path d="M 90 50 Q 240 55, 360 190" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>

    <circle cx="360" cy="190" r="5" fill="#ffffff"/>
    <text x="370" y="195" fill="#ffffff" font-size="12">Impact</text>

    <line x1="360" y1="190" x2="410" y2="190" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrCyan_p)"/>
    <line x1="360" y1="190" x2="360" y2="230" stroke="#ef4444" stroke-width="2"/>
    <text x="415" y="195" fill="#38bdf8" font-size="11">v_x = u</text>
    <text x="365" y="225" fill="#ef4444" font-size="11">v_y = √(2gh)</text>

    <line x1="90" y1="170" x2="360" y2="170" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="190" y="165" fill="#34d399" font-size="12">Range R = u√(2h/g)</text>
  </svg>
</div>

**3. Mathematical Steps:**  
1. **Equation of Trajectory:**  
   Horizontal position: $x = ut \implies t = \frac{x}{u}$  
   Vertical position: $y = \frac{1}{2}gt^2 = \frac{1}{2}g\left(\frac{x}{u}\right)^2 \implies \mathbf{y = \frac{gx^2}{2u^2}}$
2. **Time of Flight ($T$):**  
   At ground strike: $y = h \implies h = \frac{1}{2}gT^2 \implies \mathbf{T = \sqrt{\frac{2h}{g}}}$
3. **Horizontal Range ($R$):**  
   $$R = u \cdot T = \mathbf{u\sqrt{\frac{2h}{g}}}$$
4. **Striking Velocity ($v$):**  
   Horizontal component: $v_x = u$  
   Vertical component: $v_y = gt = g\sqrt{\frac{2h}{g}} = \sqrt{2gh}$  
   $$\mathbf{v = \sqrt{v_x^2 + v_y^2} = \sqrt{u^2 + 2gh}}$$

---

### Derivation 11: Centripetal Acceleration ($a_c = \frac{v^2}{r} = \omega^2 r$) in Uniform Circular Motion

**1. Aim & Theoretical Statement:**  
To derive the magnitude and inward radial direction of the centripetal acceleration experienced by a body traversing a circular path of radius $r$ at constant speed $v$.

**2. Circular Geometry & Velocity Triangle:**

<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0; backdrop-filter: blur(12px);">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; align-items: center;">
    <div>
      <div style="font-weight: 600; color: #a1a1aa; font-size: 0.85rem; margin-bottom: 0.5rem; text-align: center;">(A) Circular Orbit</div>
      <svg viewBox="0 0 240 220" style="width: 100%; max-width: 240px; height: auto; display: block; margin: 0 auto; overflow: visible;">
        <circle cx="120" cy="110" r="70" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <circle cx="120" cy="110" r="4" fill="#ffffff"/>
        <text x="110" y="130" fill="#ffffff" font-size="12">O</text>

        <line x1="120" y1="110" x2="190" y2="110" stroke="#38bdf8" stroke-width="2"/>
        <line x1="120" y1="110" x2="175" y2="60" stroke="#38bdf8" stroke-width="2"/>
        <text x="150" y="105" fill="#38bdf8" font-size="11">r₁</text>
        <text x="140" y="80" fill="#38bdf8" font-size="11">r₂</text>

        <line x1="190" y1="110" x2="175" y2="60" stroke="#f59e0b" stroke-width="2"/>
        <text x="190" y="85" fill="#f59e0b" font-size="11">Δr</text>

        <line x1="190" y1="110" x2="190" y2="60" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_p)"/>
        <line x1="175" y1="60" x2="135" y2="25" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrEmerald_p)"/>
        <text x="195" y="70" fill="#34d399" font-size="11">v₁</text>
        <text x="130" y="20" fill="#34d399" font-size="11">v₂</text>

        <line x1="190" y1="110" x2="140" y2="110" stroke="#ef4444" stroke-width="2.5"/>
        <text x="145" y="125" fill="#ef4444" font-size="10">a_c</text>
      </svg>
    </div>

    <div>
      <div style="font-weight: 600; color: #a1a1aa; font-size: 0.85rem; margin-bottom: 0.5rem; text-align: center;">(B) Velocity Vector Triangle</div>
      <svg viewBox="0 0 200 180" style="width: 100%; max-width: 200px; height: auto; display: block; margin: 0 auto; overflow: visible;">
        <line x1="60" y1="140" x2="60" y2="40" stroke="#34d399" stroke-width="2.5"/>
        <line x1="60" y1="140" x2="145" y2="65" stroke="#34d399" stroke-width="2.5"/>
        <line x1="60" y1="40" x2="145" y2="65" stroke="#f59e0b" stroke-width="2.5"/>

        <text x="45" y="90" fill="#34d399" font-size="12">v₁</text>
        <text x="110" y="120" fill="#34d399" font-size="12">v₂</text>
        <text x="105" y="45" fill="#f59e0b" font-size="13" font-weight="700">Δv</text>
        <text x="65" y="125" fill="#a1a1aa" font-size="11">Δθ</text>
      </svg>
    </div>
  </div>
</div>

**3. Mathematical Steps:**  
Let a particle move along a circle of radius $r$ with constant speed $v$. In a small time interval $\Delta t$, the position vector rotates through angle $\Delta\theta$:
$$\Delta\theta = \frac{\Delta s}{r}$$
As $\Delta t \to 0$, arc length $\Delta s \approx \|\Delta\vec{r}\|$.

From the velocity triangle, since speed remains constant ($v_1 = v_2 = v$), the two isosceles triangles formed by positions ($\triangle O P_1 P_2$) and velocities ($\triangle Q v_1 v_2$) are **similar**:
$$\frac{\|\Delta\vec{v}\|}{v} = \frac{\|\Delta\vec{r}\|}{r}$$
$$\|\Delta\vec{v}\| = \frac{v}{r} \|\Delta\vec{r}\|$$

Divide both sides by elapsed time $\Delta t$:
$$\frac{\|\Delta\vec{v}\|}{\Delta t} = \frac{v}{r} \left(\frac{\|\Delta\vec{r}\|}{\Delta t}\right)$$

Taking the limit as $\Delta t \to 0$:
$$a_c = \lim_{\Delta t \to 0}\frac{\|\Delta\vec{v}\|}{\Delta t} = \frac{v}{r} \left(\lim_{\Delta t \to 0}\frac{\|\Delta\vec{r}\|}{\Delta t}\right)$$
Since $\lim_{\Delta t \to 0}\frac{\|\Delta\vec{r}\|}{\Delta t} = v$:
$$\mathbf{a_c = \frac{v^2}{r}}$$

Using $v = r\omega$:
$$\mathbf{a_c = \frac{(r\omega)^2}{r} = \omega^2 r = v\omega}$$

As $\Delta t \to 0$, the direction of vector $\Delta\vec{v}$ becomes strictly perpendicular to $\vec{v}$ and points **radially inward toward the center $O$**.

---

### Derivation 12: Relation Between Linear Velocity and Angular Velocity ($v = r\omega$)

**1. Aim:**  
To establish the fundamental relationship between tangential linear speed $v$ and angular velocity $\omega$ for a circular path of radius $r$.

**2. Mathematical Steps:**  
Consider a particle traversing an arc of length $\Delta s$ along a circle of radius $r$, subtending an angle $\Delta\theta$ at the center in time $\Delta t$. By the geometric definition of radian angle:
$$\Delta\theta = \frac{\text{Arc Length}}{\text{Radius}} = \frac{\Delta s}{r}$$
$$\Delta s = r \cdot \Delta\theta$$

Dividing both sides by the infinitesimal time interval $\Delta t$:
$$\frac{\Delta s}{\Delta t} = r \left(\frac{\Delta\theta}{\Delta t}\right)$$

Taking the limit as $\Delta t \to 0$:
$$\lim_{\Delta t \to 0}\frac{\Delta s}{\Delta t} = r \cdot \lim_{\Delta t \to 0}\frac{\Delta\theta}{\Delta t}$$

By physical definitions:
* Linear instantaneous speed: $v = \frac{ds}{dt}$
* Angular instantaneous velocity: $\omega = \frac{d\theta}{dt}$

Substituting these definitions:
$$\mathbf{v = r\omega}$$

In full 3D vector cross-product notation:
$$\mathbf{\vec{v} = \vec{\omega} \times \vec{r}}$$
*(where $\vec{\omega}$ is an axial vector perpendicular to the orbital plane defined by the right-hand thumb rule).*
