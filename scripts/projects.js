// Project registry
// Add new projects here to have them appear on the main page
// Author: Isaiah Kamrar

const projects = [
    {
        title: "Measuring Collaboration's Impact on Nonprofit Efficiency",
        folder: "collaboration-nonprofits",
        description: "Quantitative synthesis of 40 empirical studies assessing the relationship between inter-organizational collaboration, operational efficiency, and community impact in nonprofit organizations.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active", // active | archived | in-progress
        type: "literature-review", // literature-review | analysis
        studiesReviewed: 40,
        dataPoints: 127,
        categories: ["Social Infrastructure", "Community"],
        keywords: ["nonprofits", "collaboration", "efficiency", "network analysis"],
        source: "Elicit synthesis"
    },
    
    {
        title: "College Underemployment & Long-Term Career Trajectories",
        folder: "college-underemployment",
        description: "Analysis of 7,703 U.S. institutions examining whether initial underemployment creates persistent 'scarring' effects or temporary mismatch. Evidence supports scarring hypothesis with 30x field variation and 55.7% high-risk institutions.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active",
        type: "analysis",
        studiesReviewed: 7703,
        dataPoints: 5693,
        categories: ["Higher Education", "Workforce", "Inequality"],
        keywords: ["higher education", "underemployment", "earnings", "social mobility", "career trajectories"],
        source: "College Scorecard institutional analysis"
    },
    
    {
        title: "Evolving Credentialing in the Gig Economy",
        folder: "gig-economy-credentialing",
        description: "Systematic review of 46 studies on labor dynamics and credentialing systems in the gig economy. Examines micro-credentials, digital badges, and their implications for Millennials, Gen Z, and community resilience.",
        author: "Isaiah Kamrar",
        date: "October 2024",
        status: "active",
        type: "literature-review",
        studiesReviewed: 46,
        dataPoints: 496,
        categories: ["Workforce", "Higher Education", "Community"],
        keywords: ["gig economy", "micro-credentials", "digital badges", "Millennials", "Gen Z", "workforce development"],
        source: "Elicit synthesis (138M papers)"
    },
    
    {
        title: "Centering Community Needs in Energy Equity",
        folder: "energy-equity",
        description: "Research synthesis of 39 studies examining energy burdens, clean energy access, and community-based solutions for Black, Indigenous, rural, and low-income households. Documents 10-91% burden reductions through CBO partnerships.",
        author: "Isaiah Kamrar",
        date: "October 2024",
        status: "active",
        type: "literature-review",
        studiesReviewed: 39,
        dataPoints: 500,
        categories: ["Energy & Environment", "Community", "Inequality", "Social Infrastructure"],
        keywords: ["energy equity", "energy burden", "community-based organizations", "weatherization", "environmental justice"],
        source: "Semantic Scholar synthesis (126M papers)"
    },
    
    {
        title: "Intersectionality & Loan Default Risk: Compound Disadvantage",
        folder: "intersectionality-default-risk",
        description: "Multilevel analysis of how race, gender, and SES intersect to create compound disadvantage. Finds 73.9% default risk for MSI + High-Pell + For-profit institutions (2.2x baseline), with 79% gap reduction at elite institutions demonstrating leveling effects.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active",
        type: "analysis",
        studiesReviewed: 7703,
        dataPoints: 7703,
        categories: ["Higher Education", "Inequality"],
        keywords: ["intersectionality", "student loans", "default risk", "racial equity", "minority-serving institutions", "compound disadvantage"],
        source: "College Scorecard with intersectional interaction analysis"
    },
    
    {
        title: "Building Resilience through Community-Centric Work",
        folder: "community-resilience-workforce",
        description: "Analysis of 21 empirical studies examining how workforce development and credentialing frameworks strengthen economic and environmental resilience in underserved regions. Documents 82% emissions reductions and 23,000 projected jobs through strategic partnerships.",
        author: "Isaiah Kamrar",
        date: "October 2024",
        status: "active",
        type: "literature-review",
        studiesReviewed: 21,
        dataPoints: 499,
        categories: ["Workforce", "Energy & Environment", "Community", "Social Infrastructure"],
        keywords: ["workforce development", "credentialing", "community resilience", "energy efficiency", "cooperative models", "economic development"],
        source: "Elicit synthesis (138M papers)"
    },
    
    {
        title: "Machine Learning for Default Risk Prediction: Precision Intervention & Algorithmic Fairness",
        folder: "ml-default-prediction",
        description: "Fairness-aware ML framework achieving 87% accuracy in predicting student loan default risk. Targeted interventions reduce defaults by 20-25% vs. universal programs (3.2:1 cost-benefit ratio) while maintaining demographic parity across protected groups.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active",
        type: "analysis",
        studiesReviewed: 6228,
        dataPoints: 6228,
        categories: ["Higher Education", "Technology & Data", "Inequality"],
        keywords: ["machine learning", "default prediction", "algorithmic fairness", "precision intervention", "student loans"],
        source: "College Scorecard with ensemble ML methods"
    },
    
    {
        title: "COVID-19 Labor Market Disruption: A Natural Experiment in Accelerated Polarization",
        folder: "covid-labor-disruption",
        description: "Interrupted time series analysis of 2020-2022 graduates vs. pre-pandemic cohorts. Finds permanent $8,200 remote work premium, persistent -22% earnings penalty in service fields, and 5-7 year acceleration of pre-existing polarization trends.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active",
        type: "analysis",
        studiesReviewed: 7703,
        dataPoints: 7703,
        categories: ["Workforce", "Higher Education", "Inequality"],
        keywords: ["COVID-19", "labor market", "remote work", "polarization", "natural experiment", "cohort analysis"],
        source: "College Scorecard cohort analysis (2015-2024)"
    },
    
    {
        title: "Field-Specific Labor Market Polarization: Automation, Skills, and the Great Reversal",
        folder: "field-labor-polarization",
        description: "Time-series analysis linking 24 college majors to occupational task content (O*NET, 2000-2025). Business majors show 18% declining returns post-2010, while hybrid cognitive+social skills outperform pure cognitive fields by 31%. Automation exposure predicts 67% of underemployment variation.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active",
        type: "analysis",
        studiesReviewed: 7703,
        dataPoints: 185000,
        categories: ["Workforce", "Higher Education", "Technology & Data"],
        keywords: ["automation", "labor polarization", "college majors", "task content", "skills", "Great Reversal"],
        source: "College Scorecard + O*NET task linkage (25 years)"
    },
    
    {
        title: "Resilient Homes, Thriving Communities",
        folder: "resilient-homes-communities",
        description: "Synthesis of 38 studies examining how treating homes as community infrastructure through integrated retrofit, repair, and workforce development creates pathways for economic resilience, intergenerational equity, and climate adaptation. Documents 15-40% energy savings, 85+ jobs created, and $5.9M in cost savings through community partnerships.",
        author: "Isaiah Kamrar",
        date: "October 2024",
        status: "active",
        type: "literature-review",
        studiesReviewed: 38,
        dataPoints: 500,
        categories: ["Energy & Environment", "Workforce", "Community", "Social Infrastructure"],
        keywords: ["housing infrastructure", "workforce development", "energy retrofit", "intergenerational equity", "rural communities", "age-in-place", "climate adaptation"],
        source: "Elicit synthesis (138M papers)"
    },
    
    {
        title: "Risk-Based Student Loan Pricing Model",
        folder: "student-loan-risk-pricing",
        description: "Actuarial framework for federal loan pricing based on field-level default risk (5.2% to 9.5%), institution quality adjustments, and progressive income subsidies. Hybrid model ranges from 3.00% to 5.75% vs. current flat 5.50% rate, projecting $2-3B annual savings with explicit equity protections.",
        author: "Isaiah Kamrar",
        date: "October 2025",
        status: "active",
        type: "analysis",
        studiesReviewed: 7703,
        dataPoints: 24,
        categories: ["Higher Education", "Inequality"],
        keywords: ["student loans", "risk-based pricing", "default risk", "actuarial modeling", "policy analysis", "income subsidies"],
        source: "College Scorecard + BLS + structural credit modeling"
    }
    
 
    // Add new projects below
    // {
    //     title: "Your Next Project",
    //     folder: "project-folder-name",
    //     description: "Brief description of the research synthesis",
    //     date: "Month Year",
    //     status: "in-progress",
    //     studiesReviewed: 0,
    //     dataPoints: 0,
    //     keywords: ["keyword1", "keyword2"],
    //     source: "Source/method"
    // }
];
