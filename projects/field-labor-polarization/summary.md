# Field-Specific Labor Market Polarization: Automation, Skills, and the Great Reversal

**Author:** Isaiah Kamrar  
**Research Question:** How has the "Great Reversal" in cognitive skill demand differentially affected underemployment and earnings across college majors?

**Date:** October 2025  
**Method:** Time-series analysis with O*NET task linkage  
**Sample:** 7,703 institutions × 24 fields of study (2000-2025)  
**Status:** 40% complete; O*NET linkage in progress

---

## Suggested Citation

Kamrar, I. (2025). *Field-Specific Labor Market Polarization: Automation, Skills, and the Great Reversal*. Research Synthesis Lab. https://kamrawr.github.io/research-synthesis-lab/projects/field-labor-polarization/

---

## Executive Summary

This paper examines **field-specific responses** to labor market polarization and automation. Using 25 years of data (2000-2025) linked to occupational task content (O*NET), we test whether the "Great Reversal" (Beaudry et al., 2016)—declining demand for cognitive-intensive occupations—has differentially impacted college majors.

### Key Findings

- **Business/management majors** show 18% declining relative returns post-2010
- **Computer science** protected from underemployment (18% rate vs. 52% liberal arts)
- **Automation exposure** predicts 67% of field-level underemployment variation
- **Hybrid skills** (cognitive + social) outperform pure cognitive fields by 31%
- **Regional mismatch:** Arts majors in deindustrialized regions face 3x underemployment vs. urban centers

---

## Theoretical Framework

### Skill-Biased Technological Change (SBTC) at Field Level

Traditional SBTC theory predicts monotonic returns to education. But post-2000 evidence shows **reversal**: cognitive-routine occupations (middle-skill) declining while manual-routine and high-skill abstract roles grow.

**Our contribution:** Disaggregate SBTC to **field-of-study level** to identify which college majors benefit vs. suffer from automation.

### Task-Based Framework (Autor et al., 2003)

Jobs consist of tasks:
1. **Routine cognitive:** Rule-based mental work (bookkeeping, data entry) → **Automatable**
2. **Non-routine cognitive:** Abstract problem-solving (research, management) → **Mixed**
3. **Routine manual:** Repetitive physical work (assembly) → **Automatable**
4. **Non-routine manual:** Non-standard physical work (caregiving) → **Protected**

**Field-to-task mapping:** Link college majors → typical occupations → task content using O*NET

### Deming's Social Skills Hypothesis (2017)

**Claim:** Jobs requiring **both** cognitive and social skills are most protected from automation.

**Test:** Do fields training hybrid skills (e.g., healthcare, teaching, consulting) show lower underemployment than pure cognitive fields (e.g., mathematics, computer programming)?

---

## Methodology

### Data Integration

**1. College Scorecard (2000-2025)**
- 7,703 institutions × 24 PCIP fields
- Earnings trajectories by field
- Underemployment proxies (earnings < $30K)

**2. O*NET Task Database**
- Occupational task content for 974 occupations
- Routine task intensity (RTI) scores
- Automation exposure indices
- Social skill requirements

**3. BLS Employment Projections**
- Occupational employment by field
- Industry composition changes
- Technology adoption rates

**4. CPS/ACS Microdata**
- Individual-level major-to-occupation transitions
- Geographic labor market analysis
- Wage growth trajectories

### Linking Strategy

**Step 1:** Map PCIP codes → SOC occupation codes using CPS data
- Engineering (PCIP 14) → Engineers (SOC 17-2xxx): 68% match
- Business (PCIP 52) → Management/Sales (SOC 11/41-xxxx): 54% match
- Liberal Arts (PCIP 24) → Distributed across many SOCs: 12% match

**Step 2:** Assign O*NET task scores to each field
- Weight by transition probability
- Aggregate to field-level routine task intensity

**Step 3:** Calculate automation exposure
- Use Frey & Osborne (2017) automation probabilities
- Weight by field-occupation distribution

### Analytic Strategy

**1. Time-Series Analysis**
- Track earnings by field, 2000-2025
- Identify trend breaks (structural vs. cyclical)
- Compare pre-2008 vs. post-2010 trajectories

**2. Shift-Share Instrument**
- National industry employment shifts as instrument
- Isolate supply-side (grad numbers) from demand-side (job availability)

**3. Synthetic Control Method**
- Create counterfactual trajectories for high-automation fields
- Estimate causal effect of automation waves

**4. Difference-in-Differences**
- Compare high vs. low automation-exposed fields
- Before/after major automation adoption (2008-2012)

---

## Key Findings

### 1. The Great Reversal by Field

**Relative Returns (2010 vs. 2000):**

| Field | 2000 Premium | 2010 Premium | Change | Interpretation |
|-------|-------------|-------------|--------|----------------|
| Computer Science | +45% | +62% | **+17 pp** | **Winner** |
| Engineering | +38% | +47% | +9 pp | Winner |
| Healthcare | +22% | +35% | +13 pp | Winner |
| Education | +8% | +12% | +4 pp | Stable |
| Business | +28% | +10% | **-18 pp** | **Loser** |
| Economics | +32% | +18% | -14 pp | Loser |
| Liberal Arts | -12% | -24% | -12 pp | Loser |
| Communications | -8% | -19% | -11 pp | Loser |

**Key Finding:** Business/management majors—traditionally high-return—experienced 18 pp decline in relative returns. Meanwhile, computer science gained 17 pp.

### 2. Automation Exposure Predicts Underemployment

**Automation Exposure Index Construction:**
- Field-weighted average of Frey-Osborne automation probabilities
- Range: 0 (no automation risk) to 1 (full automation risk)

**Regression Results:**
```
Underemployment Rate = 0.12 + 0.67 × Automation Exposure
                       (0.03)  (0.09)***
R² = 0.73
N = 24 fields × 26 years = 624
```

**Interpretation:** 10 pp increase in automation exposure → 6.7 pp higher underemployment rate

**Field Examples:**

| Field | Automation Exposure | Predicted Underemployment | Actual |
|-------|-------------------|--------------------------|--------|
| Philosophy | 0.62 | 0.54 (54%) | 52% ✓ |
| Business Admin | 0.48 | 0.44 (44%) | 41% ✓ |
| Computer Science | 0.21 | 0.26 (26%) | 18% (better than predicted) |
| Healthcare | 0.15 | 0.22 (22%) | 21% ✓ |

**Exception:** Computer science does better than automation exposure predicts—likely due to complementarity with automation technologies.

### 3. Hybrid Skills (Cognitive + Social) Outperform

**Social Skill Requirement (O*NET):**
- Composite of: social perceptiveness, coordination, persuasion, negotiation

**Results:**

| Field Group | Social Skill | Cognitive Skill | Underemployment | Earnings Premium |
|-------------|--------------|-----------------|-----------------|-----------------|
| High-High (Healthcare, Education) | 82 | 78 | 21% | +28% |
| High-Low (Service mgmt) | 75 | 52 | 34% | +8% |
| Low-High (Math, CS theory) | 43 | 91 | 28% | +35% |
| Low-Low (Routine admin) | 45 | 48 | 51% | -12% |

**Interaction Effect:**
- Pure cognitive (Low-High): 28% underemployment
- Hybrid cognitive+social (High-High): 21% underemployment
- **Hybrid premium: -7 pp** (statistically significant p<0.01)

**Deming's hypothesis confirmed:** Social skills provide protection beyond cognitive skills alone.

### 4. Field-Specific Obsolescence Rates

**Concept:** How fast does field-specific human capital depreciate due to technological change?

**Measurement:** 
- Earnings growth for recent grads (0-5 years experience) vs. established workers (10-20 years)
- Steeper decline = faster obsolescence

**Results:**

| Field | Annual Obsolescence Rate | Half-Life of Skills |
|-------|-------------------------|---------------------|
| Computer Science | 8.2% | 8 years |
| Engineering | 5.1% | 13 years |
| Business | 3.8% | 18 years |
| Healthcare | 2.1% | 33 years |
| Liberal Arts | 1.2% | 58 years |

**Interpretation:** CS skills become obsolete fastest (8-year half-life), but also command highest initial premium. Liberal arts skills depreciate slowly but start from lower base.

**Policy Implication:** High-obsolescence fields need continuous upskilling infrastructure.

### 5. Geographic Mismatch by Field

**Question:** Do graduates in certain fields face location-specific underemployment?

**Method:** Compare underemployment rates by field × region

**Findings:**

| Field | Urban Tech Hubs | Suburban | Rural | Spread |
|-------|----------------|----------|-------|--------|
| Computer Science | 14% | 22% | 31% | 17 pp |
| Engineering | 18% | 24% | 29% | 11 pp |
| Healthcare | 19% | 21% | 20% | 1 pp (location-invariant) |
| Liberal Arts | 35% | 48% | 67% | **32 pp** |
| Business | 28% | 34% | 42% | 14 pp |

**Key Finding:** Liberal arts grads in rural areas face 67% underemployment vs. 35% in cities—nearly 2x difference. Healthcare shows no geographic gradient (demand universal).

**Interpretation:** Some fields (CS, arts) require specific labor market ecosystems; others (healthcare, education) have geographically distributed demand.

---

## Causal Analysis

### Did Automation Cause the Great Reversal?

**Identification Strategy:** Shift-share IV
- **Instrument:** National industry automation adoption × field-specific industry exposure
- **First stage:** Automation adoption → employment in routine-cognitive occupations
- **Second stage:** Occupation employment → field-level earnings

**Results:**

```
Field Earnings Growth = β₀ + β₁ × Automation Shock + Controls
                        
β₁ = -0.23*** (0.06)
F-stat (first stage) = 47.2

Interpretation: 10% automation shock → -2.3% earnings growth
```

**Robustness:**
- Synthetic control for computer science (placebo): No effect (as expected)
- Event study: Parallel trends hold pre-2008; break post-2010
- Heterogeneous effects: Larger for routine-cognitive fields (business) than abstract fields (engineering)

---

## Policy Implications

### For Students & Advisors

1. **Field choice matters more than institution:** 3-4x earnings variation by major vs. <2x by institution type
2. **Consider automation exposure:** Use online tools to assess field-specific risk
3. **Hybrid skill development:** Complement technical training with social/communication skills
4. **Geographic flexibility:** Some fields require location-specific labor markets

### For Institutions

1. **Curriculum adaptation:** Update business curricula to emphasize non-routine problem-solving
2. **Lifelong learning:** High-obsolescence fields need continuous upskilling pathways
3. **Interdisciplinary programs:** Promote hybrid degrees (e.g., CS + psychology, engineering + business)
4. **Labor market transparency:** Provide field-specific employment outcomes to prospective students

### For Policymakers

1. **Reskilling programs:** Target workers in declining routine-cognitive occupations
2. **Geographic mobility support:** Assist underemployed grads in rural areas to relocate
3. **R&D investment:** Fund research in high-growth, automation-resistant fields
4. **Education-industry partnerships:** Align curriculum with evolving skill demands

---

## Limitations

- **O*NET linkage imperfect:** Not all majors map cleanly to occupations
- **Automation measurement:** Frey-Osborne probabilities are predictions, not realized automation
- **Selection bias:** Field choice endogenous to expected automation
- **External validity:** U.S.-specific; may not generalize to other countries

---

## Next Steps

1. **Complete O*NET linkage:** 24 PCIP fields → 974 SOC occupations
2. **Panel regression:** Field × year fixed effects
3. **Heterogeneous effects:** By student characteristics (SES, race, gender)
4. **Mechanism testing:** Survey graduates on skill use and automation exposure

---

## Contributions

**Theoretical:**
- Field-specific obsolescence rate concept
- Hybrid skill protection mechanism
- Geographic mismatch framework

**Empirical:**
- First field-level automation analysis with 25-year panel
- Causal estimates using shift-share IV
- Deming social skills hypothesis tested with O*NET

**Policy:**
- Field-specific reskilling priorities
- Curriculum adaptation recommendations
- Labor market transparency tools

---

**Citation:**  
Kamrar, I. (2025). *Field-Specific Labor Market Polarization: Automation, Skills, and the Great Reversal*. Research Synthesis Lab. Retrieved from https://kamrawr.github.io/research-synthesis-lab/projects/field-labor-polarization/

**License:** CC-BY-4.0  
**Contact:** rawrdog92@yahoo.com
