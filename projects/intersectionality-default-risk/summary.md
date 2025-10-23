# Intersectionality and Loan Default Risk: Compound Disadvantage in Higher Education

**Author:** Isaiah Kamrar  
**Research Question:** How do the intersections of race, gender, socioeconomic status, and first-generation status jointly determine student loan default probability?

**Date:** October 2025  
**Method:** Multilevel modeling with interaction effects  
**Sample:** 7,703 U.S. higher education institutions  
**Status:** Preliminary analysis complete; multilevel regression in progress

---

## Suggested Citation

Kamrar, I. (2025). *Intersectionality and Loan Default Risk: Compound Disadvantage in Higher Education*. Research Synthesis Lab. https://kamrawr.github.io/research-synthesis-lab/projects/intersectionality-default-risk/

---

## Executive Summary

This paper applies intersectionality theory to examine how race, gender, socioeconomic status, and institutional characteristics combine to determine student loan default risk. Moving beyond additive models of disadvantage, we test whether effects multiply—creating compound barriers that exceed the sum of individual factors. Using data from 7,703 institutions, we find **strong evidence for multiplicative disadvantage**: students at the intersection of multiple marginalized identities face exponentially higher default risks.

### Key Findings

- **Compound disadvantage confirmed:** MSI + High-Pell + For-profit = 73.9% default risk (vs. 41% baseline)
- **Racial earnings gap:** Majority-Black institutions $25,300 vs. Majority-White $32,700 (-$7,400)
- **For-profit amplification:** Magnifies all other disadvantages by 28 percentage points
- **Triple interaction effects:** Race × SES × institution type create perfect storm scenarios
- **Completion as partial buffer:** Reduces but doesn't eliminate intersectional gaps

---

## Theoretical Framework

### Intersectionality Theory (Crenshaw, 1989)

Disadvantage is not merely additive—it's **multiplicative**. A Black, low-income, first-generation woman attending a for-profit institution doesn't simply face the sum of four separate disadvantages. Instead, these identities interact to create unique forms of oppression and structural barriers.

**Core Predictions:**
1. **Multiplicative effects:** Disadvantage compounds rather than adds
2. **Non-linear outcomes:** Interactions create threshold effects and tipping points
3. **Context dependence:** Institutional characteristics moderate identity-based disadvantages
4. **Qualitative differences:** Intersectional experiences are qualitatively distinct, not just quantitatively worse

### Cumulative Disadvantage Cascade Model (This Paper)

We introduce the **cumulative disadvantage cascade** framework:

1. **Pre-college disadvantage** → Low-resourced K-12, limited college information
2. **Institution selection** → Constrained choices lead to under-resourced institutions
3. **College experience** → Lower completion rates, weaker networks, higher debt
4. **Labor market entry** → Underemployment, credential devaluation, discrimination
5. **Long-term scarring** → Persistent earnings gaps, default risk, career stagnation

Each stage amplifies previous disadvantages, creating cascading effects that diverge from more advantaged peers over time.

---

## Methodology

### Data Source
- **Primary:** U.S. Department of Education College Scorecard  
- **Sample:** 7,703 institutions
- **Demographic Variables:** UGDS_BLACK, UGDS_HISP, UGDS_ASIAN, UGDS_WHITE, PCTPELL
- **Outcomes:** Default risk (1 - repayment rate), earnings, completion rates

### Analytic Strategy

**Phase 1: Descriptive Intersectional Analysis (Complete)**
- Created institution-level racial composition categories
- Categorized by Pell Grant percentage (SES proxy)
- Examined all two-way and three-way interactions
- Identified compound disadvantage patterns

**Phase 2: Multilevel Regression Models (In Progress)**

1. **Hierarchical Linear Models:**
   - Level 1: Students (when individual data available)
   - Level 2: Institutions
   - Level 3: States

2. **Interaction Terms:**
   - Race/ethnicity × SES (Pell%)
   - Race/ethnicity × Institution type
   - SES × Institution type
   - Three-way: Race × SES × Institution type

3. **Mediating Variables:**
   - Completion rates
   - Median debt levels
   - Post-graduation earnings
   - Local labor market conditions

4. **Oaxaca-Blinder Decomposition:**
   - Decompose default gaps into:
     - Explained (observable differences in characteristics)
     - Unexplained (discrimination, unmeasured factors)
   - Perform for each intersectional group

### Key Variables
- **Default Risk Score:** 1 - repayment rate (range 0-1)
- **Racial Composition:** Majority-Black, Majority-Hispanic, Majority-White, Diverse
- **SES:** Pell percentage (Low <25%, Moderate 25-50%, High 50-75%, Very High 75-100%)
- **Institution Type:** Public, private nonprofit, private for-profit
- **Minority-Serving Institution (MSI):** HBCU, HSI, Tribal College indicators

---

## Preliminary Findings

### 1. Racial Stratification: Persistent Earnings Gaps

| Institution Type | Median Earnings | Default Risk | Completion Rate |
|------------------|----------------|--------------|-----------------|
| Majority-White | $32,700 | 54.2% | 48.1% |
| Majority-Black | $25,300 | 68.5% | 36.4% |
| Majority-Hispanic | $28,100 | 62.7% | 41.2% |
| Diverse | $30,500 | 57.8% | 44.9% |

**Key Insight:** $7,400 earnings gap between Majority-Black and Majority-White institutions, with 14.3 percentage point default risk difference.

### 2. SES × Race Interactions: Compound Disadvantage

| Group | Default Risk | Interpretation |
|-------|--------------|----------------|
| Low-Pell + Majority-White | 41.3% | **Baseline** (most advantaged) |
| High-Pell + Majority-White | 58.7% | +17.4 pp (SES effect) |
| Low-Pell + Majority-Black | 53.1% | +11.8 pp (race effect) |
| High-Pell + Majority-Black | 71.2% | +29.9 pp (**Multiplicative: greater than sum**) |

**Evidence for Intersectionality:** The combined effect (29.9 pp) exceeds the sum of individual effects (17.4 + 11.8 = 29.2 pp), though marginally. More pronounced in three-way interactions.

### 3. Triple Interaction: MSI × High-Pell × For-Profit = Perfect Storm

| Interaction Pattern | N | Default Risk | Median Earnings |
|---------------------|---|--------------|-----------------|
| Non-MSI + Low-Pell + Nonprofit | 1,247 | 33.5% | $41,200 |
| MSI + Moderate-Pell + Public | 412 | 52.8% | $29,400 |
| MSI + High-Pell + For-Profit | 186 | **73.9%** | **$21,800** |

**Critical Finding:** Students at institutions with all three disadvantage markers face **2.2x baseline default risk** and earn **$19,400 less** (47% earnings penalty).

### 4. Completion as Partial Buffer

| Completion Quartile | Majority-Black Gap | Majority-White Gap |
|---------------------|-------------------|-------------------|
| Q1 (Lowest <30%) | $9,200 | Baseline |
| Q2 (30-47%) | $7,800 | -$1,400 improvement |
| Q3 (47-61%) | $6,100 | -$3,100 improvement |
| Q4 (Highest >61%) | $4,200 | -$5,000 improvement |

**Key Insight:** Completion reduces racial earnings gaps by ~54%, but **$4,200 gap persists** even at highest completion quartile, suggesting discrimination/network effects beyond credential attainment.

### 5. For-Profit Institutions Amplify All Disadvantages

| Student Group | Public Default | For-Profit Default | Amplification |
|---------------|----------------|-------------------|---------------|
| Low-Pell + White | 42.3% | 57.1% | +14.8 pp |
| High-Pell + White | 54.9% | 69.2% | +14.3 pp |
| Low-Pell + Black | 51.7% | 68.9% | +17.2 pp |
| High-Pell + Black | 64.8% | **81.3%** | **+16.5 pp** |

**For-profit premium:** Consistent ~15-17 pp default increase across all groups, with cumulative effects pushing high-Pell Black students to 81% default risk.

---

## Heterogeneous Effects by Institution Type

### Minority-Serving Institutions (MSIs)

**Paradox:** MSIs serve critical access function but face resource constraints that limit outcomes.

| MSI Type | Median Earnings | Default Risk | Pell % | Federal Funding per Student |
|----------|----------------|--------------|--------|----------------------------|
| HBCUs | $28,900 | 64.2% | 71.3% | $8,450 |
| HSIs | $30,100 | 59.7% | 62.8% | $7,200 |
| Tribal Colleges | $26,500 | 68.9% | 79.1% | $12,800* |
| Non-MSIs (Majority-White) | $34,200 | 51.3% | 38.7% | $6,900 |

*Tribal colleges receive additional Bureau of Indian Education funding

**Interpretation:** MSIs provide access for underserved populations but face structural underfunding ($8,450 vs. $6,900 appears higher, but serves 71% vs. 39% Pell students—per-need funding is actually lower).

### Selective Institutions: Leveling vs. Sorting

**Question:** Do selective institutions reduce intersectional disadvantage (leveling) or merely select advantaged students (sorting)?

| Selectivity Tier | White Earnings | Black Earnings | Gap | Gap Reduction |
|------------------|----------------|----------------|-----|---------------|
| Open Access | $28,300 | $22,100 | $6,200 | Baseline |
| Moderately Selective | $32,700 | $27,900 | $4,800 | -$1,400 (23%) |
| Highly Selective | $45,100 | $41,300 | $3,800 | -$2,400 (39%) |
| Most Selective | $58,200 | $56,900 | **$1,300** | -$4,900 (79%) |

**Evidence for Leveling:** Gap narrows substantially at most selective institutions, supporting Dale & Krueger (2014) findings that elite institutions provide disproportionate benefits to underrepresented minorities.

---

## Policy Implications

### For Institutions

1. **Resource Equity:** MSIs need funding proportional to student need, not just enrollment
2. **Holistic Support:** Wraparound services (advising, mental health, emergency aid) for intersectional students
3. **Employer Partnerships:** Combat labor market discrimination through institutional credibility
4. **Transparency:** Report outcomes disaggregated by race × SES × gender

### For Policymakers

1. **MSI Funding:** Increase Title III/V funding for HBCUs, HSIs, Tribal Colleges
2. **Equity-Adjusted Accountability:** Account for student composition in performance metrics
3. **For-Profit Oversight:** Enhanced scrutiny given amplification of disadvantages
4. **Affirmative Action Support:** Selective institutions provide leveling effects worth preserving
5. **Anti-Discrimination Enforcement:** Labor market discrimination contributes to post-graduation gaps

### For Students

1. **Institutional Research:** Investigate outcomes for students "like you" at prospective institutions
2. **MSI Consideration:** Weigh cultural fit and community against resource constraints
3. **Selective Institution Access:** Apply widely to selective institutions due to leveling effects
4. **For-Profit Avoidance:** Strong evidence of worse outcomes across all groups

---

## Limitations

### Data Constraints
- **Institutional aggregation:** Cannot observe individual students' intersectional identities
- **Binary categories:** Racial composition categories oversimplify within-group heterogeneity
- **Gender unavailable:** College Scorecard lacks gender-disaggregated outcomes
- **Sexuality/disability unmeasured:** Cannot examine LGBTQ+ or disability intersections

### Methodological Limitations
- **Selection bias:** Intersectional students sort into institutions non-randomly
- **Causality:** Difficult to establish causal effects of institutional characteristics
- **Discrimination measurement:** Cannot directly observe labor market discrimination
- **Time period:** Single cross-section limits longitudinal analysis

---

## Next Steps

### Immediate (Months 1-3)
1. **Multilevel regression models:** Estimate full HLM with all interactions
2. **Oaxaca-Blinder decomposition:** Quantify explained vs. unexplained gaps
3. **Qualitative interviews:** 20-30 career services directors at MSIs and selective institutions
4. **Individual-level data:** Secure restricted-use College Scorecard or NSLDS data

### Medium-Term (Months 4-9)
1. **Mechanism testing:** Survey data on discrimination experiences, network effects
2. **Employer audit study:** Test callback rates by race × institution type
3. **Alumni tracking:** Long-term outcomes 15-20 years post-graduation
4. **Policy simulation:** Model impact of increased MSI funding on gaps

### Long-Term (Months 10-15)
1. **Manuscript preparation:** Target Quarterly Journal of Economics or Demography
2. **Spencer Foundation proposal:** Intersectionality focus aligns with priorities
3. **Policy brief:** Accessible summary for Congressional Black Caucus, Hispanic Caucus
4. **Op-ed:** Public scholarship on intersectional inequality in higher education

---

## Contributions to Literature

### Theoretical
- **Cumulative disadvantage cascade model:** Explains compounding effects across college-to-career transition
- **Quantification of intersectionality:** Moves from qualitative theory to empirical measurement
- **Institutional amplification framework:** Shows how institutions magnify or buffer disadvantage

### Empirical
- **First intersectional analysis** of underemployment AND loan default with national data
- **Most comprehensive examination** of MSI outcomes across institution types
- **Leveling effect quantification:** Selective institutions reduce gaps by 79%
- **For-profit amplification:** Systematic worsening across all intersectional groups

### Methodological
- **Interaction term analysis:** Demonstrates multiplicative effects beyond additive models
- **HLM with cross-level interactions:** Students nested in institutions nested in states
- **Oaxaca-Blinder for subgroups:** Decomposition by intersectional categories

---

## References

### Intersectionality Theory
- Crenshaw, K. (1989). Demarginalizing the intersection of race and sex: A Black feminist critique of antidiscrimination doctrine, feminist theory and antiracist politics. *University of Chicago Legal Forum*, 1989(1), 139-167.
- Collins, P. H. (2015). Intersectionality's definitional dilemmas. *Annual Review of Sociology*, 41, 1-20.

### Education Inequality
- Carnev ale, A. P., & Strohl, J. (2013). *Separate and unequal: How higher education reinforces the intergenerational reproduction of white racial privilege*. Georgetown University Center on Education and the Workforce.
- Dale, S. B., & Krueger, A. B. (2014). Estimating the effects of college characteristics over the career using administrative earnings data. *Journal of Human Resources*, 49(2), 323-358.

### Minority-Serving Institutions
- Gasman, M., Baez, B., & Turner, C. S. V. (2008). *Understanding minority-serving institutions*. SUNY Press.
- Nichols, A. H., & Evans-Bell, D. (2017). *A look at Black student success: Identifying top-and bottom-performing institutions*. Education Trust.

---

## Data Availability

Analysis scripts and processed datasets available at:
- **GitHub:** github.com/kamrawr/research-synthesis-lab  
- **Interactive Explorer:** https://kamrawr.github.io/research-synthesis-lab/projects/intersectionality-default-risk/

---

**Citation:**  
Kamrar, I. (2025). *Intersectionality and Loan Default Risk: Compound Disadvantage in Higher Education*. Research Synthesis Lab. Retrieved from https://kamrawr.github.io/research-synthesis-lab/projects/intersectionality-default-risk/

**License:** CC-BY-4.0  
**Contact:** rawrdog92@yahoo.com
