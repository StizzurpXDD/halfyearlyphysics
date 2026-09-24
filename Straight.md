# COMPLETE STUDY & REVISION SHEET: MOTION IN A STRAIGHT LINE
*(As per the Latest Rationalized CBSE/NCERT Class 11 Physics Syllabus)*

---

## PART 1: COMPREHENSIVE FORMULA TABLES

### Table 1: Fundamentals, Calculus Relations & Average Kinematic Quantities

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **1.1** | $\Delta x = x_2 - x_1$ | **Displacement**: Change in position coordinate in 1D.<br>• $x_1$: Initial position at $t_1$<br>• $x_2$: Final position at $t_2$ | • $\|\Delta x\| \le \text{Path Length (Distance)}$<br>• $\Delta x > 0$ (moved right), $\Delta x < 0$ (moved left), $\Delta x = 0$ (returned to start). |
| **1.2** | $v_{\text{avg}} = \frac{\text{Total Distance}}{\text{Total Time}} = \frac{s_{\text{total}}}{\Delta t}$ | **Average Speed**: Scalar rate of total distance covered over total elapsed time. | • **Equal time intervals** ($t_1 = t_2 = t$):<br>$v_{\text{avg}} = \frac{v_1 + v_2}{2}$ (Arithmetic Mean)<br>• **Equal distance intervals** ($s_1 = s_2 = s$):<br>$v_{\text{avg}} = \frac{2v_1 v_2}{v_1 + v_2}$ (Harmonic Mean)<br>• **$n$ equal distance intervals**:<br>$v_{\text{avg}} = \frac{n}{\sum_{i=1}^n \frac{1}{v_i}}$ |
| **1.3** | $\bar{v} = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$ | **Average Velocity**: Vector displacement divided by the time interval. | • $\|\bar{v}\| \le v_{\text{avg}}$<br>• For uniformly accelerated motion:<br>$\bar{v} = \frac{u + v}{2}$ |
| **1.4** | $v = \lim_{\Delta t \to 0}\frac{\Delta x}{\Delta t} = \frac{dx}{dt}$ | **Instantaneous Velocity**: Rate of change of position at a specific instant $t$. | • $v = \text{Slope of tangent to the } x-t \text{ graph}$<br>• Differential displacement: $dx = v\,dt \implies \Delta x = \int_{t_1}^{t_2} v\,dt$ |
| **1.5** | $\text{Speed} = \|v\| = \left\|\frac{dx}{dt}\right\|$ | **Instantaneous Speed**: Magnitude of instantaneous velocity at that exact moment. | • Instantaneous speed is always equal to the magnitude of instantaneous velocity. |
| **1.6** | $a_{\text{avg}} = \frac{\Delta v}{\Delta t} = \frac{v_2 - v_1}{t_2 - t_1}$ | **Average Acceleration**: Rate of change of velocity over a finite time interval $\Delta t$. | • Positive if velocity becomes more positive; negative if velocity becomes less positive (retardation occurs when $a$ and $v$ have opposite signs). |
| **1.7** | $a = \lim_{\Delta t \to 0}\frac{\Delta v}{\Delta t} = \frac{dv}{dt}$ | **Instantaneous Acceleration**: Rate of change of velocity at an infinitesimal instant. | • $a = \frac{d^2x}{dt^2}$ (second derivative of position)<br>• $dv = a\,dt \implies \Delta v = \int_{t_1}^{t_2} a\,dt$ (Area under $a-t$ graph) |
| **1.8** | $a = v\frac{dv}{dx}$ | **Velocity-Dependent Acceleration**: Acceleration expressed as a function of position $x$. | • Derived via chain rule: $a = \frac{dv}{dt} = \frac{dv}{dx}\frac{dx}{dt} = v\frac{dv}{dx}$<br>• Integrated form: $\int_{u}^{v} v\,dv = \int_{x_0}^{x} a\,dx$ |

---

### Table 2: Uniformly Accelerated Motion (Kinematics Equations)
*Condition: Acceleration $a = \text{constant}$.*

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **2.1** | $v = u + at$ | **First Equation of Motion**: Relates initial velocity ($u$), final velocity ($v$), acceleration ($a$), and time ($t$). | • From rest ($u=0$): $v = at$<br>• Under retardation ($a = -a_0$): $v = u - a_0 t$<br>• Time to stop: $t_{\text{stop}} = \frac{u}{a_0}$ |
| **2.2** | $s = ut + \frac{1}{2}at^2$ | **Second Equation of Motion**: Net displacement ($s = x - x_0$) accumulated over time $t$. | • Position form: $x(t) = x_0 + ut + \frac{1}{2}at^2$<br>• From rest ($u=0$): $s = \frac{1}{2}at^2 \implies s \propto t^2$<br>• Under retardation: $s = ut - \frac{1}{2}a_0 t^2$ |
| **2.3** | $v^2 = u^2 + 2as$ | **Third Equation of Motion**: Time-independent relation between velocities and displacement. | • $v = \sqrt{u^2 + 2as}$<br>• From rest ($u=0$): $v = \sqrt{2as}$<br>• Stopping condition ($v=0$, $a=-a_0$): $s = \frac{u^2}{2a_0}$ |
| **2.4** | $s_n = u + \frac{a}{2}(2n - 1)$ | **Displacement in the $n$-th Second**: Distance covered specifically between $t = n-1$ and $t = n$. | • For $u = 0$: $s_n = \frac{a}{2}(2n - 1) \implies s_n \propto (2n - 1)$<br>• Ratio of displacements in 1st, 2nd, 3rd sec: $1 : 3 : 5 : \dots$ (Galileo's Law of Odd Numbers) |
| **2.5** | $s = \left(\frac{u + v}{2}\right)t$ | **Displacement via Average Velocity**: Computes displacement without computing acceleration $a$. | • Valid strictly for constant acceleration fields. |
| **2.6** | $s = vt - \frac{1}{2}at^2$ | **Displacement in terms of Final Velocity**: Alternate kinematic form eliminating $u$. | • Useful when final velocity and deceleration are known. |
| **2.7** | $v_{\text{mid}} = \sqrt{\frac{u^2 + v^2}{2}}$ | **Velocity at the Midpoint of the Path**: Velocity of an accelerating particle exactly halfway through distance $s$. | • Independent of elapsed time and acceleration magnitude $a$. |

---

### Table 3: Motion Under Gravity (Vertical 1D Motion)
*Sign Convention: Upward direction is $+y$, downward direction is $-y$; $a = -g$ where $g \approx 9.8\text{ m/s}^2$ or $10\text{ m/s}^2$.*

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **3.1** | $v = -gt$<br>$h = -\frac{1}{2}gt^2$<br>$v^2 = 2gh$ | **Free Fall from Rest ($u=0$)**: A body dropped from height $H$ with downward displacement $h$. | • Speed after falling height $h$: $v = \sqrt{2gh}$<br>• Time to reach ground: $t = \sqrt{\frac{2H}{g}}$<br>• Ratio of distances in successive equal intervals $\tau$: $1 : 3 : 5 : 7 : \dots$ |
| **3.2** | $H_{\max} = \frac{u^2}{2g}$ | **Maximum Height Attained**: Peak vertical displacement of an object projected vertically upward with speed $u$. | • At the apex, instantaneous velocity $v = 0$, but acceleration $a = -g \ne 0$. |
| **3.3** | $t_a = \frac{u}{g}$ | **Time of Ascent**: Time taken to rise from release point to maximum height. | • Equals Time of Descent ($t_d = \frac{u}{g}$) in vacuum. |
| **3.4** | $T_{\text{flight}} = \frac{2u}{g} = t_a + t_d$ | **Total Time of Flight**: Total duration an object remains in the air before returning to launch level. | • Launch and return speeds are equal in magnitude: $v_{\text{return}} = -u$. |
| **3.5** | $h = \frac{1}{2}g\,t_1 t_2$<br>$u = \frac{1}{2}g(t_1 + t_2)$ | **Object Crossing the Same Height $h$ at Two Times**: Passing height $h$ upwards at $t_1$ and downwards at $t_2$. | • Total time of flight: $T = t_1 + t_2$<br>• Height at any instant: $h(t) = ut - \frac{1}{2}gt^2$ |
| **3.6** | $v_{\text{strike}} = \sqrt{u^2 + 2gh}$ | **Speed upon Striking Ground**: Object projected with speed $u$ (upward or downward) from a tower of height $h$. | • Identical landing speed regardless of whether initial velocity was directed upward, downward, or horizontally. |

---

### Table 4: Stopping Distance & Reaction Time

| No. | Formula | Usage / Meaning of Symbols | Variations & Special Cases |
| :--- | :--- | :--- | :--- |
| **4.1** | $d_s = \frac{u^2}{2a}$ | **Stopping Distance**: Distance traversed before coming to rest under constant braking retardation $a$. | • $d_s \propto u^2$: Doubling initial speed quadruples the required stopping distance.<br>• Stopping time: $t_s = \frac{u}{a}$. |
| **4.2** | $t_r = \sqrt{\frac{2d_{\text{ruler}}}{g}}$ | **Reaction Time**: Elapsed time between sensory stimulus and physical response (measured by dropping a ruler through distance $d_{\text{ruler}}$). | • Ruler starts from rest: $d_{\text{ruler}} = \frac{1}{2}g t_r^2$. |
| **4.3** | $d_{\text{total}} = (u \cdot t_r) + \frac{u^2}{2a}$ | **Total Stopping Distance**: Accounting for distance traveled during reaction delay plus braking distance. | • $u \cdot t_r$: Distance covered at constant velocity prior to brake engagement. |

---

## PART 2: STEP-BY-STEP CLASS 11 DERIVATIONS

---

### Derivation 1: First Equation of Motion ($v = u + at$) by Calculus Method

**1. Aim & Theoretical Statement:**  
To derive the relation connecting final velocity ($v$), initial velocity ($u$), uniform acceleration ($a$), and time ($t$) using differential and integral calculus.

**2. Physical Assumptions:**  
* The body moves along a straight coordinate line ($x$-axis).
* The acceleration $a$ remains uniform (constant) throughout the motion.
* At time $t = 0$, the initial velocity of the object is $u$.
* At time $t = t$, the instantaneous velocity of the object is $v$.

**3. Mathematical Steps:**  
By definition, instantaneous acceleration is the time derivative of velocity:
$$a = \frac{dv}{dt}$$

Separating the differential variables:
$$dv = a \, dt$$

Integrating both sides within the physical boundary conditions:
* Time limits: from $0$ to $t$
* Velocity limits: from $u$ to $v$

$$\int_{u}^{v} dv = \int_{0}^{t} a \, dt$$

Because acceleration $a$ is constant, factor it out of the integral:
$$\int_{u}^{v} dv = a \int_{0}^{t} dt$$

Evaluating the standard definite integrals ($\int dx = x$):
$$[v]_{u}^{v} = a [t]_{0}^{t}$$

Substituting the limits:
$$v - u = a(t - 0)$$
$$v - u = at$$

**4. Final Result:**
$$\mathbf{v = u + at}$$

---

### Derivation 2: Second Equation of Motion ($s = ut + \frac{1}{2}at^2$) by Calculus Method

**1. Aim & Theoretical Statement:**  
To derive the displacement-time relation for a body undergoing uniform acceleration using integral calculus.

**2. Physical Assumptions:**  
* Acceleration $a$ is uniform.
* At time $t = 0$, let the initial position coordinate be $x_0$.
* At time $t = t$, let the instantaneous position coordinate be $x$.
* Net displacement is $s = x - x_0$.

**3. Mathematical Steps:**  
By definition, instantaneous velocity is the rate of change of position:
$$v = \frac{dx}{dt} \implies dx = v \, dt$$

Substitute the first equation of motion ($v = u + at$) into the expression:
$$dx = (u + at) \, dt$$

Integrating both sides between the boundary limits:
$$\int_{x_0}^{x} dx = \int_{0}^{t} (u + at) \, dt$$

Distributing the integral across terms:
$$\int_{x_0}^{x} dx = u \int_{0}^{t} dt + a \int_{0}^{t} t \, dt$$

Applying the standard power rule of integration ($\int t \, dt = \frac{t^2}{2}$):
$$[x]_{x_0}^{x} = u [t]_0^t + a \left[ \frac{t^2}{2} \right]_0^t$$

Applying the upper and lower limits:
$$x - x_0 = u(t - 0) + \frac{1}{2}a(t^2 - 0)$$
$$x - x_0 = ut + \frac{1}{2}at^2$$

Substituting net displacement $s = x - x_0$:

**4. Final Result:**
$$\mathbf{s = ut + \frac{1}{2}at^2}$$

---

### Derivation 3: Third Equation of Motion ($v^2 = u^2 + 2as$) by Calculus Method

**1. Aim & Theoretical Statement:**  
To derive the velocity-displacement relation independent of time $t$ using differential chain rule.

**2. Physical Assumptions:**  
* Acceleration $a$ is constant.
* Velocity changes from $u$ to $v$ as position coordinates change from $x_0$ to $x$.
* Displacement is $s = x - x_0$.

**3. Mathematical Steps:**  
Instantaneous acceleration is defined as:
$$a = \frac{dv}{dt}$$

Applying the chain rule of differentiation:
$$a = \frac{dv}{dx} \cdot \frac{dx}{dt}$$

Since $v = \frac{dx}{dt}$:
$$a = v \frac{dv}{dx}$$

Separating the variables $x$ and $v$:
$$a \, dx = v \, dv$$

Integrating both sides across corresponding boundary limits:
$$\int_{x_0}^{x} a \, dx = \int_{u}^{v} v \, dv$$

Factoring out the uniform acceleration $a$:
$$a \int_{x_0}^{x} dx = \int_{u}^{v} v \, dv$$

Evaluating the integrals:
$$a [x]_{x_0}^x = \left[ \frac{v^2}{2} \right]_u^v$$

Applying the limits:
$$a(x - x_0) = \frac{v^2 - u^2}{2}$$

Substituting displacement $s = x - x_0$:
$$as = \frac{v^2 - u^2}{2}$$

Multiplying both sides by 2:
$$2as = v^2 - u^2$$

**4. Final Result:**
$$\mathbf{v^2 = u^2 + 2as}$$

---

### Derivation 4: Distance Traveled in the $n$-th Second of Motion

**1. Aim:**  
To find the distance covered by a uniformly accelerated object specifically during the $n$-th second (the time interval between $t = n - 1$ and $t = n$ seconds).

#### Method A: Algebraic Method
Let $s_n$ represent the displacement during the $n$-th second. This equals the displacement after $n$ seconds ($S_n$) minus the displacement after $(n-1)$ seconds ($S_{n-1}$):
$$s_n = S_n - S_{n-1}$$

Using the second kinematic equation $S(t) = ut + \frac{1}{2}at^2$:

1. At $t = n$:
   $$S_n = un + \frac{1}{2}an^2$$

2. At $t = n - 1$:
   $$S_{n-1} = u(n - 1) + \frac{1}{2}a(n - 1)^2$$
   $$S_{n-1} = un - u + \frac{1}{2}a(n^2 - 2n + 1)$$
   $$S_{n-1} = un - u + \frac{1}{2}an^2 - an + \frac{1}{2}a$$

Subtracting $S_{n-1}$ from $S_n$:
$$s_n = \left(un + \frac{1}{2}an^2\right) - \left(un - u + \frac{1}{2}an^2 - an + \frac{1}{2}a\right)$$
$$s_n = un + \frac{1}{2}an^2 - un + u - \frac{1}{2}an^2 + an - \frac{1}{2}a$$
$$s_n = u + an - \frac{1}{2}a$$

Factoring out $\frac{a}{2}$:
$$s_n = u + \frac{a}{2}(2n - 1)$$

#### Method B: Calculus Method
Instantaneous velocity is $v = \frac{ds}{dt} = u + at \implies ds = (u + at)\,dt$.

Integrating between limits $t = n-1$ and $t = n$:
$$s_n = \int_{n-1}^{n} (u + at)\,dt = \left[ ut + \frac{1}{2}at^2 \right]_{n-1}^{n}$$
$$s_n = u[n - (n - 1)] + \frac{1}{2}a[n^2 - (n-1)^2]$$
$$s_n = u(1) + \frac{1}{2}a[n^2 - (n^2 - 2n + 1)]$$
$$s_n = u + \frac{a}{2}(2n - 1)$$

**Final Result:**
$$\mathbf{s_n = u + \frac{a}{2}(2n - 1)}$$
*(Note: Dimensionally, the numeral $1$ carries the unit of $[T]$, ensuring dimensional homogeneity).*

---

### Derivation 5: Galileo’s Law of Odd Numbers for Free Fall

**1. Aim & Theoretical Statement:**  
*Statement:* The distances traversed during equal successive intervals of time by a body falling freely from rest stand to one another in the same ratio as the odd integers beginning with unity ($1 : 3 : 5 : 7 : \dots$).

**2. Physical Assumptions:**  
* The body starts from rest: $u = 0$.
* Constant downward acceleration: $a = g$.
* Time is partitioned into equal intervals of duration $\tau$, such that $t = 0, \tau, 2\tau, 3\tau, 4\tau, \dots$

**3. Mathematical Steps:**  
The cumulative distance fallen from rest in total time $t$ is:
$$y(t) = \frac{1}{2}g t^2$$

Define the fundamental distance unit for the first interval:
$$y_0 = \frac{1}{2}g \tau^2$$

Compute total cumulative distance at each successive milestone:
* At $t = \tau$: $y(\tau) = \frac{1}{2}g\tau^2 = y_0$
* At $t = 2\tau$: $y(2\tau) = \frac{1}{2}g(2\tau)^2 = 4\left(\frac{1}{2}g\tau^2\right) = 4y_0$
* At $t = 3\tau$: $y(3\tau) = \frac{1}{2}g(3\tau)^2 = 9\left(\frac{1}{2}g\tau^2\right) = 9y_0$
* At $t = 4\tau$: $y(4\tau) = \frac{1}{2}g(4\tau)^2 = 16\left(\frac{1}{2}g\tau^2\right) = 16y_0$

Now compute the distance traversed specifically *within* each successive time interval $\tau$:
* In 1st interval ($\Delta y_1$): $\Delta y_1 = y(\tau) - y(0) = y_0 - 0 = \mathbf{y_0}$
* In 2nd interval ($\Delta y_2$): $\Delta y_2 = y(2\tau) - y(\tau) = 4y_0 - y_0 = \mathbf{3y_0}$
* In 3rd interval ($\Delta y_3$): $\Delta y_3 = y(3\tau) - y(2\tau) = 9y_0 - 4y_0 = \mathbf{5y_0}$
* In 4th interval ($\Delta y_4$): $\Delta y_4 = y(4\tau) - y(3\tau) = 16y_0 - 9y_0 = \mathbf{7y_0}$

Taking the ratio of distances in successive equal intervals:
$$\Delta y_1 : \Delta y_2 : \Delta y_3 : \Delta y_4 : \dots = y_0 : 3y_0 : 5y_0 : 7y_0 : \dots$$

**4. Final Result:**
$$\mathbf{\Delta y_1 : \Delta y_2 : \Delta y_3 : \dots = 1 : 3 : 5 : 7 : \dots}$$

---

### Derivation 6: Maximum Height ($H_{\max}$) and Total Flight Time ($T$) for Vertical Projection

**1. Aim & Setup:**  
A projectile is thrown vertically upward with initial speed $u$ under gravitational acceleration $a = -g$.

**2. Maximum Height ($H_{\max}$):**  
At the highest point, instantaneous velocity vanishes: $v = 0$. Let displacement be $s = H_{\max}$.

Using the third equation of motion:
$$v^2 = u^2 + 2as$$
$$0^2 = u^2 + 2(-g)H_{\max}$$
$$2g H_{\max} = u^2$$
$$\mathbf{H_{\max} = \frac{u^2}{2g}}$$

**3. Time of Ascent ($t_a$) and Total Time of Flight ($T$):**  
Using the first equation of motion for upward journey to peak ($v = 0$):
$$v = u + at \implies 0 = u - g t_a \implies \mathbf{t_a = \frac{u}{g}}$$

For the full round trip back to launch level, net vertical displacement is zero ($s = 0$):
$$s = uT - \frac{1}{2}gT^2$$
$$0 = T\left(u - \frac{1}{2}gT\right)$$

Since $T \ne 0$:
$$u - \frac{1}{2}gT = 0 \implies \mathbf{T = \frac{2u}{g}}$$

Notice that time of ascent equals time of descent: $t_a = t_d = \frac{u}{g}$.

---

### Derivation 7: Object Crossing the Same Height $h$ at Two Times ($t_1$ and $t_2$)

**1. Aim:**  
To establish relations between initial speed $u$, elevation $h$, and the two distinct times $t_1$ and $t_2$ at which the particle passes height $h$ (once during ascent and once during descent).

**2. Mathematical Steps:**  
Position at time $t$ under gravity ($a = -g$):
$$h = ut - \frac{1}{2}gt^2$$

Rearranging into a standard quadratic equation in $t$:
$$\frac{1}{2}gt^2 - ut + h = 0 \implies gt^2 - 2ut + 2h = 0$$

Using standard relations for quadratic roots ($At^2 + Bt + C = 0$, where $A = g$, $B = -2u$, $C = 2h$):

1. **Sum of roots ($t_1 + t_2$):**
   $$t_1 + t_2 = -\frac{B}{A} = -\frac{-2u}{g} = \frac{2u}{g}$$
   $$\mathbf{u = \frac{1}{2}g(t_1 + t_2)}$$
   *(Notice that $t_1 + t_2 = T_{\text{total flight}}$).*

2. **Product of roots ($t_1 \cdot t_2$):**
   $$t_1 \cdot t_2 = \frac{C}{A} = \frac{2h}{g}$$
   $$\mathbf{h = \frac{1}{2}g\,t_1 t_2}$$

---

### Derivation 8: Stopping Distance ($d_s = \frac{u^2}{2a}$) and Stopping Time ($t_s = \frac{u}{a}$)

**1. Aim & Setup:**  
A vehicle traveling at velocity $u$ undergoes uniform braking retardation of magnitude $a$.

**2. Mathematical Steps:**  
* Initial velocity $= u$
* Final velocity $v = 0$ (comes to rest)
* Acceleration $= -a$
* Distance traversed $= d_s$

Applying the third kinematic equation:
$$v^2 = u^2 + 2as$$
$$0^2 = u^2 + 2(-a)d_s \implies 2a d_s = u^2$$
$$\mathbf{d_s = \frac{u^2}{2a}}$$

Using the first equation of motion to find stopping time $t_s$:
$$v = u + at \implies 0 = u - a t_s \implies \mathbf{t_s = \frac{u}{a}}$$

---

### Derivation 9: Average Speed in Special Cases

#### Case A: Body Covers Two Equal Time Intervals at Speeds $v_1$ and $v_2$
Let total time be $2t$. The body travels for duration $t$ at $v_1$ and duration $t$ at $v_2$:
* Total distance: $s_{\text{total}} = v_1 t + v_2 t = (v_1 + v_2)t$
* Total time: $t_{\text{total}} = 2t$

$$v_{\text{avg}} = \frac{s_{\text{total}}}{t_{\text{total}}} = \frac{(v_1 + v_2)t}{2t}$$
$$\mathbf{v_{\text{avg}} = \frac{v_1 + v_2}{2}} \quad \text{(Arithmetic Mean)}$$

#### Case B: Body Covers Two Equal Distance Intervals at Speeds $v_1$ and $v_2$
Let total distance be $2s$. The body travels distance $s$ at $v_1$ and distance $s$ at $v_2$:
* Total time: $t_{\text{total}} = \frac{s}{v_1} + \frac{s}{v_2} = s\left(\frac{v_1 + v_2}{v_1 v_2}\right)$
* Total distance: $s_{\text{total}} = 2s$

$$v_{\text{avg}} = \frac{s_{\text{total}}}{t_{\text{total}}} = \frac{2s}{s\left(\frac{v_1 + v_2}{v_1 v_2}\right)}$$
$$\mathbf{v_{\text{avg}} = \frac{2 v_1 v_2}{v_1 + v_2}} \quad \text{(Harmonic Mean)}$$

---

## PART 3: PROPER KINEMATIC GRAPHICAL ANALYSIS

Graphs are one of the most powerful analytical tools in one-dimensional kinematics. Below are the precise mathematical coordinate plots illustrating all key motion states.

### 1. Position–Time ($x-t$) Graphs

The slope of the tangent to an $x-t$ curve represents **instantaneous velocity** ($v = \frac{dx}{dt}$).

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">

<!-- Graph 1: Stationary Object -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(a) Object at Rest</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <defs>
      <pattern id="grid_s1" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="140" x2="280" y2="140" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="140" x2="30" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="158" fill="#a1a1aa" font-size="12" font-family="sans-serif">Time (t)</text>
    <text x="10" y="25" fill="#a1a1aa" font-size="12" font-family="sans-serif">Position (x)</text>
    
    <line x1="30" y1="70" x2="260" y2="70" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="70" r="4" fill="#38bdf8"/>
    <text x="38" y="62" fill="#38bdf8" font-size="12" font-weight="600" font-family="monospace">x = x₀</text>
    <text x="130" y="95" fill="#94a3b8" font-size="11" font-family="sans-serif">Slope = 0 ⟹ v = 0</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Position coordinate remains constant at $x_0$ for all values of $t$.</p>
</div>

<!-- Graph 2: Uniform Motion -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(b) Uniform Velocity ($v > 0$)</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="140" x2="280" y2="140" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="140" x2="30" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="158" fill="#a1a1aa" font-size="12" font-family="sans-serif">Time (t)</text>
    <text x="10" y="25" fill="#a1a1aa" font-size="12" font-family="sans-serif">Position (x)</text>
    
    <line x1="30" y1="110" x2="240" y2="35" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="110" r="4" fill="#34d399"/>
    <text x="38" y="125" fill="#34d399" font-size="12" font-weight="600" font-family="monospace">x₀</text>
    <text x="120" y="60" fill="#34d399" font-size="11" font-family="sans-serif">Slope = const = v</text>
    <text x="130" y="80" fill="#94a3b8" font-size="11" font-family="sans-serif">Acceleration a = 0</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Straight line with constant positive slope represents uniform velocity without acceleration.</p>
</div>

<!-- Graph 3: Uniform Acceleration -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(c) Accelerated Motion ($a > 0$)</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="140" x2="280" y2="140" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="140" x2="30" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="158" fill="#a1a1aa" font-size="12" font-family="sans-serif">Time (t)</text>
    <text x="10" y="25" fill="#a1a1aa" font-size="12" font-family="sans-serif">Position (x)</text>
    
    <path d="M 30 140 Q 140 135, 230 35" fill="none" stroke="#a855f7" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="140" r="4" fill="#a855f7"/>
    <text x="130" y="70" fill="#c084fc" font-size="11" font-family="sans-serif">Slope increases</text>
    <text x="130" y="90" fill="#94a3b8" font-size="11" font-family="sans-serif">x ∝ t² (a &gt; 0)</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Parabola opening upward. The slope increases continuously as time progresses.</p>
</div>

<!-- Graph 4: Uniform Retardation -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(d) Retarded Motion ($a < 0$)</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="140" x2="280" y2="140" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="140" x2="30" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="158" fill="#a1a1aa" font-size="12" font-family="sans-serif">Time (t)</text>
    <text x="10" y="25" fill="#a1a1aa" font-size="12" font-family="sans-serif">Position (x)</text>
    
    <path d="M 30 140 Q 110 50, 230 45" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="140" r="4" fill="#f43f5e"/>
    <text x="120" y="70" fill="#fb7185" font-size="11" font-family="sans-serif">Slope decreases</text>
    <text x="120" y="90" fill="#94a3b8" font-size="11" font-family="sans-serif">Deceleration (a &lt; 0)</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Curve bends toward the horizontal as velocity slows down to a momentary halt.</p>
</div>

</div>

---

### 2. Velocity–Time ($v-t$) Graphs

* The **slope** of the tangent represents **instantaneous acceleration** ($a = \frac{dv}{dt}$).
* The **area under the $v-t$ curve** represents **net displacement** ($\Delta x = \int v\,dt$).

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">

<!-- v-t Graph 1: Uniform Acceleration with u > 0 -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(a) Uniform Acceleration ($u > 0$)</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <defs>
      <linearGradient id="areaGrad_s1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.02"/>
      </linearGradient>
    </defs>
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="140" x2="280" y2="140" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="140" x2="30" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="158" fill="#a1a1aa" font-size="12" font-family="sans-serif">t</text>
    <text x="12" y="25" fill="#a1a1aa" font-size="12" font-family="sans-serif">v</text>
    
    <polygon points="30,100 230,30 230,140 30,140" fill="url(#areaGrad_s1)"/>
    <line x1="230" y1="30" x2="230" y2="140" stroke="#71717a" stroke-dasharray="3 3"/>
    
    <line x1="30" y1="100" x2="230" y2="30" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="100" r="4" fill="#38bdf8"/>
    <circle cx="230" cy="30" r="4" fill="#38bdf8"/>
    
    <text x="14" y="104" fill="#38bdf8" font-size="12" font-family="monospace">u</text>
    <text x="236" y="34" fill="#38bdf8" font-size="12" font-family="monospace">v</text>
    <text x="225" y="155" fill="#a1a1aa" font-size="11" font-family="monospace">t</text>
    <text x="95" y="60" fill="#38bdf8" font-size="11" font-family="sans-serif">Slope = a = const</text>
    <text x="95" y="115" fill="#bae6fd" font-size="11" font-family="sans-serif">Area = Displacement (s)</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Trapezoidal area gives total displacement $s = ut + \frac{1}{2}at^2$. Constant positive slope $= a$.</p>
</div>

<!-- v-t Graph 2: Motion Under Gravity (Vertical Launch) -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(b) Ball Thrown Upward Under Gravity</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="85" x2="280" y2="85" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="160" x2="30" y2="15" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="102" fill="#a1a1aa" font-size="12" font-family="sans-serif">Time (t)</text>
    <text x="12" y="20" fill="#a1a1aa" font-size="12" font-family="sans-serif">+v</text>
    <text x="12" y="160" fill="#a1a1aa" font-size="12" font-family="sans-serif">-v</text>
    
    <line x1="30" y1="25" x2="230" y2="145" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="25" r="4" fill="#f59e0b"/>
    <circle cx="130" cy="85" r="4" fill="#38bdf8"/>
    <circle cx="230" cy="145" r="4" fill="#f59e0b"/>
    
    <text x="38" y="32" fill="#f59e0b" font-size="11" font-family="monospace">+u</text>
    <text x="120" y="75" fill="#38bdf8" font-size="10" font-family="sans-serif">v=0 (Peak)</text>
    <text x="120" y="100" fill="#a1a1aa" font-size="10" font-family="monospace">t = u/g</text>
    <text x="215" y="160" fill="#f59e0b" font-size="11" font-family="monospace">-u (T = 2u/g)</text>
    <text x="160" y="45" fill="#fbbf24" font-size="11" font-family="sans-serif">Slope = -g</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Linear negative slope $-g$. Reaches $v = 0$ at peak $t = u/g$, then reverses direction with $-u$ at $T = 2u/g$.</p>
</div>

<!-- v-t Graph 3: Free Fall from Rest -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(c) Free Fall from Rest ($u = 0$)</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="30" x2="280" y2="30" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="30" x2="30" y2="160" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="45" fill="#a1a1aa" font-size="12" font-family="sans-serif">Time (t)</text>
    <text x="10" y="160" fill="#a1a1aa" font-size="12" font-family="sans-serif">-v</text>
    
    <line x1="30" y1="30" x2="230" y2="145" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="30" r="4" fill="#ef4444"/>
    
    <text x="45" y="45" fill="#ef4444" font-size="11" font-family="monospace">u = 0</text>
    <text x="120" y="75" fill="#f87171" font-size="11" font-family="sans-serif">v = -gt</text>
    <text x="120" y="95" fill="#a1a1aa" font-size="11" font-family="sans-serif">Slope = -g = const</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Speed increases linearly downward with time: $v = -gt$. Constant downward slope equal to $-g$.</p>
</div>

</div>

---

### 3. Acceleration–Time ($a-t$) Graphs

* The **area under the $a-t$ curve** represents **net change in velocity**:
$$\Delta v = v_2 - v_1 = \int_{t_1}^{t_2} a \, dt$$

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">

<!-- a-t Graph 1: Constant Acceleration -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(a) Uniform Positive Acceleration</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="140" x2="280" y2="140" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="140" x2="30" y2="20" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="158" fill="#a1a1aa" font-size="12" font-family="sans-serif">t</text>
    <text x="12" y="25" fill="#a1a1aa" font-size="12" font-family="sans-serif">a</text>
    
    <rect x="30" y="60" width="180" height="80" fill="url(#areaGrad_s1)"/>
    <line x1="30" y1="60" x2="210" y2="60" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/>
    <line x1="210" y1="60" x2="210" y2="140" stroke="#71717a" stroke-dasharray="3 3"/>
    
    <text x="12" y="65" fill="#06b6d4" font-size="12" font-family="monospace">a₀</text>
    <text x="205" y="155" fill="#a1a1aa" font-size="11" font-family="monospace">t</text>
    <text x="65" y="105" fill="#67e8f9" font-size="11" font-family="sans-serif">Area = a₀ · t = Δv = v - u</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Horizontal line indicates uniform acceleration. The rectangular area equals the gain in velocity $\Delta v = at$.</p>
</div>

<!-- a-t Graph 2: Free Fall -->
<div style="background: rgba(18, 18, 23, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.25rem; backdrop-filter: blur(12px);">
  <div style="font-weight: 600; color: #f4f4f5; margin-bottom: 0.5rem; font-size: 0.95rem;">(b) Free Fall Acceleration</div>
  <svg viewBox="0 0 300 180" style="width: 100%; height: auto; display: block; overflow: visible;">
    <rect width="280" height="150" fill="url(#grid_s1)" x="20" y="10" rx="8" />
    <line x1="30" y1="40" x2="280" y2="40" stroke="#71717a" stroke-width="2"/>
    <line x1="30" y1="20" x2="30" y2="160" stroke="#71717a" stroke-width="2"/>
    <text x="270" y="55" fill="#a1a1aa" font-size="12" font-family="sans-serif">t</text>
    <text x="12" y="30" fill="#a1a1aa" font-size="12" font-family="sans-serif">0</text>
    <text x="8" y="125" fill="#ef4444" font-size="11" font-family="sans-serif">-g</text>
    
    <line x1="30" y1="120" x2="240" y2="120" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    <text x="85" y="105" fill="#f87171" font-size="11" font-family="sans-serif">a = -9.8 m/s² (constant)</text>
  </svg>
  <p style="font-size: 0.8rem; color: #a1a1aa; margin-top: 0.5rem; line-height: 1.4;">Gravitational acceleration remains strictly constant at $-g$ for all vertical motions regardless of height.</p>
</div>

</div>

---

### Graphical Summary Reference

| Graph Type | Slope of Tangent Represents | Area Under Curve Represents |
| :--- | :--- | :--- |
| **Position–Time ($x-t$)** | Instantaneous Velocity ($v = \frac{dx}{dt}$) | *No physical significance* |
| **Velocity–Time ($v-t$)** | Instantaneous Acceleration ($a = \frac{dv}{dt}$) | Net Displacement ($\Delta x = \int v\,dt$) |
| **Speed–Time** | Magnitude of tangential acceleration | Total Path Length / Distance traveled |
| **Acceleration–Time ($a-t$)** | Rate of change of acceleration (Jerk) | Change in Velocity ($\Delta v = \int a\,dt$) |

> **Key Exam Takeaways:**
> 1. An object can have zero instantaneous velocity yet non-zero acceleration (e.g. at the apex of vertical throw where $v=0$ and $a = -g$).
> 2. Slope of chord between two points on $x-t$ graph gives **average velocity**, while slope of tangent gives **instantaneous velocity**.
> 3. If acceleration is opposite in sign to velocity, the particle is **decelerating (retarding)**. If signs are identical, it is **speeding up**.