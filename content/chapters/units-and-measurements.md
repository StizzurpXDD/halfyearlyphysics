---
chapterNumber: 1
title: "Units and Measurements"
slug: "units-and-measurements"
unit: "Foundations"
description: "Dimensional analysis, principle of homogeneity, error propagation, significant figures, and instrument limits."
difficulty: "Essential"
derivationsCount: 3
formulasCount: 18
topics:
  - "Fundamental & Derived Units"
  - "Dimensional Analysis"
  - "Principle of Homogeneity"
  - "Error Propagation"
  - "Vernier & Screw Gauge"
keyFormulasPreview:
  - "T = 2\\pi \\sqrt{\\frac{l}{g}}"
  - "\\frac{\\Delta Z}{Z} = a\\frac{\\Delta A}{A} + b\\frac{\\Delta B}{B}"
  - "\\text{L.C.} = \\frac{\\text{Pitch}}{\\text{No. of Divisions}}"
accentColor: "cyan"
estimatedReadTime: "12 min"
---

# Units and Measurements

Physical quantities are quantities that can be measured and in terms of which laws of physics are expressed.

$$\text{Physical Quantity} = \text{Numerical Value } (n) \times \text{Unit } (u)$$

Since the magnitude of a physical quantity remains constant regardless of the unit chosen:

$$n_1 u_1 = n_2 u_2 \implies n \propto \frac{1}{u}$$

---

## 1. System of Units & Fundamental Quantities

The International System of Units (SI) is based on **7 fundamental quantities** and **2 supplementary quantities**:

| Physical Quantity | SI Unit | Symbol | Dimension |
| :--- | :--- | :--- | :--- |
| **Length** | Metre | $\text{m}$ | $[L]$ |
| **Mass** | Kilogram | $\text{kg}$ | $[M]$ |
| **Time** | Second | $\text{s}$ | $[T]$ |
| **Electric Current** | Ampere | $\text{A}$ | $[A]$ or $[I]$ |
| **Thermodynamic Temperature** | Kelvin | $\text{K}$ | $[K]$ or $[\theta]$ |
| **Amount of Substance** | Mole | $\text{mol}$ | $[\text{mol}]$ |
| **Luminous Intensity** | Candela | $\text{cd}$ | $[cd]$ |
| **Plane Angle** (Supplementary) | Radian | $\text{rad}$ | Dimensionless |
| **Solid Angle** (Supplementary) | Steradian | $\text{sr}$ | Dimensionless |

---

## 2. Principle of Homogeneity of Dimensions

> **Principle**: According to this principle, a physical equation is dimensionally correct if the dimensions of each and every term on both sides of the equation are the same.
> Only quantities of the same nature (dimensions) can be added, subtracted, or equated.

If $A + B = C$, then:

$$[A] = [B] = [C]$$

---

## 3. Derivation 1: Time Period of a Simple Pendulum

Let the time period $T$ of a simple pendulum depend upon:
1. Mass of the bob $m$ raised to power $a$: $m^a$
2. Effective length of pendulum $l$ raised to power $b$: $l^b$
3. Acceleration due to gravity $g$ raised to power $c$: $g^c$

### Step-by-Step Proof

**Step 1: Formulate the proportionality relation**
$$T \propto m^a \cdot l^b \cdot g^c$$
$$T = k \cdot m^a \cdot l^b \cdot g^c \quad \text{--- (Equation 1)}$$

*(where $k$ is a dimensionless constant of proportionality)*

**Step 2: Write dimensional formulas of both sides**
- $[T] = [M^0 L^0 T^1]$
- $[m] = [M^1 L^0 T^0]$
- $[l] = [M^0 L^1 T^0]$
- $[g] = [M^0 L^1 T^{-2}]$

Substitute these into Equation 1:
$$[M^0 L^0 T^1] = [M]^a \cdot [L]^b \cdot [L T^{-2}]^c$$
$$[M^0 L^0 T^1] = [M^a \cdot L^{b+c} \cdot T^{-2c}]$$

**Step 3: Equate powers on both sides by Principle of Homogeneity**
- For $[M]$: $a = 0$
- For $[T]$: $-2c = 1 \implies c = -\frac{1}{2}$
- For $[L]$: $b + c = 0 \implies b = -c = \frac{1}{2}$

**Step 4: Substitute exponents back into Equation 1**
$$T = k \cdot m^0 \cdot l^{1/2} \cdot g^{-1/2}$$
$$T = k \sqrt{\frac{l}{g}}$$

Experimentally, the dimensionless constant is found to be $k = 2\pi$. Hence:

$$\mathbf{T = 2\pi \sqrt{\frac{l}{g}}}$$

---

## 4. Errors in Measurement & Error Propagation

### Types of Errors
- **Absolute Error**: $\Delta a_i = |a_{\text{mean}} - a_i|$
- **Mean Absolute Error**:
  $$\Delta a_{\text{mean}} = \frac{1}{n} \sum_{i=1}^n |\Delta a_i|$$
- **Relative (Fractional) Error**:
  $$\text{Relative Error} = \frac{\Delta a_{\text{mean}}}{a_{\text{mean}}}$$
- **Percentage Error**:
  $$\text{Percentage Error} = \frac{\Delta a_{\text{mean}}}{a_{\text{mean}}} \times 100\%$$

### Propagation of Errors

| Operation | Mathematical Form | Resulting Absolute / Relative Error |
| :--- | :--- | :--- |
| **Sum** | $Z = A + B$ | $\Delta Z = \Delta A + \Delta B$ |
| **Difference** | $Z = A - B$ | $\Delta Z = \Delta A + \Delta B$ *(Errors always add)* |
| **Product** | $Z = A \cdot B$ | $\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}$ |
| **Quotient** | $Z = \frac{A}{B}$ | $\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}$ |
| **Power** | $Z = \frac{A^p B^q}{C^r}$ | $\frac{\Delta Z}{Z} = p\left(\frac{\Delta A}{A}\right) + q\left(\frac{\Delta B}{B}\right) + r\left(\frac{\Delta C}{C}\right)$ |

---

## 5. Measuring Instruments & Least Count

### Vernier Caliper
$$\text{Least Count (L.C.)} = 1\text{ M.S.D.} - 1\text{ V.S.D.}$$
$$\text{Total Reading} = \text{M.S.R.} + (\text{V.S.R.} \times \text{L.C.}) - (\pm \text{Zero Error})$$

### Screw Gauge
$$\text{Least Count} = \frac{\text{Pitch of the Screw}}{\text{Total Number of Circular Scale Divisions}}$$
$$\text{Total Reading} = \text{Pitch Scale Reading} + (\text{Circular Scale Reading} \times \text{L.C.}) - (\pm \text{Zero Error})$$

> **Key Exam Tip**: Errors in measurements are always compounded (added) in worst-case scenarios, never subtracted, even when physical quantities are divided or subtracted.
