// Field risk data from College Scorecard analysis
const fieldRiskData = [
    {field: "Philosophy/Religion", earnings: 28500, underemployment: 0.30, institutions: 10, defaultRisk: 0.095},
    {field: "Family/Consumer Sciences", earnings: 30200, underemployment: 0.242, institutions: 91, defaultRisk: 0.086},
    {field: "Health Professions", earnings: 29500, underemployment: 0.207, institutions: 2947, defaultRisk: 0.081},
    {field: "Legal Professions", earnings: 29100, underemployment: 0.185, institutions: 65, defaultRisk: 0.078},
    {field: "Natural Resources", earnings: 32600, underemployment: 0.174, institutions: 23, defaultRisk: 0.076},
    {field: "Public Administration", earnings: 34500, underemployment: 0.174, institutions: 69, defaultRisk: 0.076},
    {field: "Security/Protective Services", earnings: 31700, underemployment: 0.137, institutions: 503, defaultRisk: 0.071},
    {field: "Engineering Technologies", earnings: 38800, underemployment: 0.129, institutions: 342, defaultRisk: 0.069},
    {field: "Theology", earnings: 30200, underemployment: 0.126, institutions: 111, defaultRisk: 0.069},
    {field: "Business/Management", earnings: 35700, underemployment: 0.103, institutions: 2239, defaultRisk: 0.065},
    {field: "Computer Science", earnings: 38800, underemployment: 0.092, institutions: 424, defaultRisk: 0.064},
    {field: "Communications Technologies", earnings: 29400, underemployment: 0.085, institutions: 47, defaultRisk: 0.063},
    {field: "Liberal Arts", earnings: 30150, underemployment: 0.082, institutions: 1024, defaultRisk: 0.062},
    {field: "Physical Sciences", earnings: 48150, underemployment: 0.071, institutions: 14, defaultRisk: 0.061},
    {field: "Education", earnings: 36600, underemployment: 0.069, institutions: 461, defaultRisk: 0.060},
    {field: "Agriculture", earnings: 34500, underemployment: 0.068, institutions: 44, defaultRisk: 0.060},
    {field: "Visual/Performing Arts", earnings: 33800, underemployment: 0.058, institutions: 343, defaultRisk: 0.059},
    {field: "English", earnings: 42700, underemployment: 0.048, institutions: 42, defaultRisk: 0.057},
    {field: "Communication", earnings: 42300, underemployment: 0.040, institutions: 125, defaultRisk: 0.056},
    {field: "Biological Sciences", earnings: 44200, underemployment: 0.030, institutions: 269, defaultRisk: 0.054},
    {field: "Engineering", earnings: 52900, underemployment: 0.013, institutions: 151, defaultRisk: 0.052},
    {field: "Psychology", earnings: 40300, underemployment: 0.012, institutions: 331, defaultRisk: 0.052},
    {field: "Social Sciences", earnings: 45400, underemployment: 0.011, institutions: 369, defaultRisk: 0.052},
    {field: "Architecture", earnings: 46500, underemployment: 0.000, institutions: 17, defaultRisk: 0.050}
];

// Graduate program data
const graduatePrograms = [
    {program: "MBA (Master of Business Administration)", field: "Business/Management", earnings: 95000, debt: 66000, underemployment: 0.05, duration: 2},
    {program: "JD (Juris Doctor)", field: "Legal Professions", earnings: 85000, debt: 145000, underemployment: 0.12, duration: 3},
    {program: "MD (Doctor of Medicine)", field: "Health Professions", earnings: 220000, debt: 200000, underemployment: 0.01, duration: 4},
    {program: "DDS/DMD (Dentistry)", field: "Health Professions", earnings: 180000, debt: 285000, underemployment: 0.02, duration: 4},
    {program: "PharmD (Pharmacy)", field: "Health Professions", earnings: 128000, debt: 180000, underemployment: 0.08, duration: 4},
    {program: "MS Computer Science", field: "Computer Science", earnings: 115000, debt: 45000, underemployment: 0.03, duration: 2},
    {program: "MS Engineering", field: "Engineering", earnings: 105000, debt: 42000, underemployment: 0.02, duration: 2},
    {program: "MSW (Social Work)", field: "Social Sciences", earnings: 55000, debt: 52000, underemployment: 0.15, duration: 2},
    {program: "MEd (Education)", field: "Education", earnings: 58000, debt: 48000, underemployment: 0.08, duration: 2},
    {program: "MFA (Fine Arts)", field: "Visual/Performing Arts", earnings: 48000, debt: 58000, underemployment: 0.25, duration: 3},
    {program: "PhD STEM", field: "Physical Sciences", earnings: 95000, debt: 35000, underemployment: 0.08, duration: 6},
    {program: "PhD Humanities", field: "Liberal Arts", earnings: 65000, debt: 45000, underemployment: 0.22, duration: 6},
    {program: "MPA (Public Administration)", field: "Public Administration", earnings: 68000, debt: 50000, underemployment: 0.12, duration: 2},
    {program: "MPH (Public Health)", field: "Health Professions", earnings: 72000, debt: 55000, underemployment: 0.10, duration: 2},
    {program: "MA Psychology/Counseling", field: "Psychology", earnings: 52000, debt: 48000, underemployment: 0.18, duration: 2}
];

// Institution quality multipliers
const institutionMultipliers = {
    'elite': 0.40,          // R1 + Most Selective + Private (MIT, Harvard, etc.)
    'flagship': 0.70,       // R1 + Selective + Public (UC Berkeley, UMich, etc.)
    'state': 0.90,          // Master's + Moderate + Public
    'regional': 1.15,       // Bachelor's + Low + Public
    'community': 1.32,      // Associate + Open + Public
    'forprofit': 2.18       // For-Profit
};

// Income subsidy tiers (percentage point reductions)
const incomeSubsidies = {
    'high': 0,          // $100k+
    'medium': 0.50,     // $60k-100k
    'low': 1.90         // <$60k (can be field-adjusted, up to 2.0pp)
};

// Current federal rates (2024)
const currentRates = {
    undergraduate: 5.50,
    graduatePlus: 6.54,
    parentPlus: 7.54
};

// Pricing parameters
const pricingParams = {
    baseRate: 5.00,                // Proposed base for all undergrads
    baseRateGrad: 5.50,            // Proposed base for graduate
    lgd: 0.70,                     // Loss Given Default
    duration: 10,                  // Years
    riskCapMultiplier: 0.5         // Cap risk premium at 50% of actuarial fair
};

// Calculate risk-adjusted rate
function calculateRate(defaultRisk, institutionType, incomeLevel, isGraduate = false) {
    const baseRate = isGraduate ? pricingParams.baseRateGrad : pricingParams.baseRate;
    
    // Risk premium (actuarially fair, then capped)
    const institutionMultiplier = institutionMultipliers[institutionType] || 1.0;
    const adjustedRisk = defaultRisk * institutionMultiplier;
    const fairPremium = (adjustedRisk * pricingParams.lgd * 100) / pricingParams.duration;
    const cappedPremium = fairPremium * pricingParams.riskCapMultiplier;
    
    // Income subsidy
    const subsidy = incomeSubsidies[incomeLevel] || 0;
    
    // Final rate
    const finalRate = baseRate + cappedPremium - subsidy;
    
    return {
        baseRate: baseRate,
        riskPremium: cappedPremium,
        incomeSubsidy: subsidy,
        finalRate: Math.max(finalRate, 2.50), // Floor at 2.50%
        adjustedRisk: adjustedRisk
    };
}

// Calculate monthly payment
function calculateMonthlyPayment(principal, annualRate, years = 10) {
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = years * 12;
    
    if (monthlyRate === 0) return principal / numPayments;
    
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                    (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return payment;
}
