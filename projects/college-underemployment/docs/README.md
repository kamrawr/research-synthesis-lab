# College Underemployment Project

## Overview

This research synthesis examines whether initial underemployment creates persistent "scarring" effects or represents temporary mismatch that graduates recover from over time.

**Key Finding:** Strong evidence supports the scarring hypothesis—initial underemployment creates lasting disadvantages through skill atrophy, credential devaluation, employer signaling, and debt accumulation.

## Project Structure

```
college-underemployment/
├── explore.html          # Interactive visualization with D3.js charts and 8 analysis tabs
├── summary.md            # Comprehensive 554-line markdown report
├── data/
│   └── findings.json     # Complete analysis results (7,703 institutions)
├── docs/
│   └── README.md         # This file
└── visualizations/       # Future: static charts and figures
```

## Data Source

**U.S. Department of Education College Scorecard**
- Institutional-level outcomes data
- 7,703 institutions analyzed
- 5,693 with complete earnings metrics
- Earnings measured 10 years post-enrollment

## Key Findings Summary

1. **Field-Level Risk:** 30x variation (Philosophy/Religion 30% → Architecture 0%)
2. **Completion Gradient:** $13,400 earnings gap across quartiles
3. **Institution Type:** For-profit institutions 38% lower earnings than private nonprofits
4. **SES Stratification:** $20,550 gap between low-Pell and very high-Pell institutions
5. **Career Scarring:** 55.7% of institutions show high-risk characteristics

## Analysis Origin

This project synthesizes PhD-level research from:
- **Source Repository:** `/Users/isaiah/labor-dynamics-analysis`
- **Analysis Module:** `src/analysis/underemployment_analyzer.py`
- **Original Research:** Paper 1 of dissertation on underemployment and career trajectories
- **Integration Date:** October 22, 2025

## Interactive Features

The `explore.html` page includes:
- **Summary Tab:** Executive summary and key statistics
- **Key Findings Tab:** 5 major findings with policy implications
- **Field Risk Tab:** Interactive D3.js bar charts + data table (24 fields)
- **Completion Gradient Tab:** Earnings progression across quartiles
- **Institution Effects Tab:** Public vs. Private Nonprofit vs. For-Profit comparison
- **SES Stratification Tab:** Pell Grant percentage analysis
- **Career Scarring Tab:** High-risk institution identification
- **Data Export Tab:** JSON download and methodology

## Theoretical Framework

**Scarring Hypothesis (Supported):**
- Initial underemployment → persistent disadvantage
- Mechanisms: skill atrophy, credential devaluation, networks, debt, psychology
- Evidence: large persistent gaps, low repayment rates, SES concentration

**Temporary Mismatch Hypothesis (Not Supported):**
- Initial underemployment → gradual recovery
- Would expect: smaller gaps, high repayment, random distribution
- Not observed in data

## Policy Implications

**For Students:**
- Field choice matters enormously (30x risk differential)
- Use College Scorecard before committing to institution/program
- Prioritize completion but recognize it's not sufficient alone

**For Policymakers:**
- Strengthen for-profit regulation (gainful employment rules)
- Increase Pell Grant maximum to cover full cost
- Enhance consumer information (field-level outcomes)
- Target high-risk fields for intervention

**For Institutions:**
- Invest in completion supports (advising, aid, mentoring)
- Develop employer partnerships for job placement
- Measure and report equity gaps by SES/race
- Close or improve persistently underperforming programs

## Methodology

**Analysis Type:** Descriptive institutional-level analysis  
**Aggregation:** Medians and means grouped by field, completion, institution type, Pell %  
**Limitation:** Cannot establish causality—need student-level IV or DiD for causal claims  
**Future Work:** Causal identification using instruments (local unemployment, policy changes)

## Technical Details

**Data Processing:**
- Python script: `extract_underemployment_data.py`
- Handles pandas multilevel indices from groupby operations
- Exports to clean JSON for D3.js consumption

**Visualizations:**
- D3.js v7 for interactive charts
- Responsive design with hover tooltips
- Color scales indicating risk levels
- Grouped bar charts for multi-metric comparisons

## Related Files

- **Labor Dynamics Analysis:** `/Users/isaiah/labor-dynamics-analysis`
- **Original Python Module:** `src/analysis/underemployment_analyzer.py`
- **Integration Docs:** `UNDEREMPLOYMENT_INTEGRATION.md`, `docs/INTEGRATION_REVIEW.md`
- **Quick Start Guide:** `docs/UNDEREMPLOYMENT_QUICKSTART.md`

## Usage

**View Online:**
1. Open `explore.html` in browser
2. Navigate tabs to explore different analyses
3. Hover over charts for detailed tooltips
4. Download JSON from Data Export tab

**Read Comprehensive Report:**
1. Open `summary.md` for full 554-line analysis
2. Includes methodology, findings, implications, limitations
3. Academic references and theoretical framework
4. Future research directions

## Citation

```
Research Synthesis Lab. (2025). College Underemployment & Long-Term Career Trajectories: 
Evidence from 7,703 U.S. Institutions. Retrieved from 
https://kamrawr.github.io/research-synthesis-lab/projects/college-underemployment/
```

## License

CC-BY-4.0 - Attribution required for derivative works

## Contact

For questions or collaboration:
- Email: rawrdog92@yahoo.com
- GitHub: @kamrawr
