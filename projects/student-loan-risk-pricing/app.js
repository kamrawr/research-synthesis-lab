// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        // Update active button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active panel
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
        
        // Render visualizations when tabs are activated
        if (targetTab === 'field-risk') {
            renderFieldVisualizations();
        } else if (targetTab === 'graduate') {
            renderGraduateVisualizations();
        }
    });
});

// Populate dropdowns on page load
document.addEventListener('DOMContentLoaded', () => {
    // Populate undergraduate field dropdown
    const fieldSelect = document.getElementById('calc-field');
    fieldRiskData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.field;
        option.textContent = item.field;
        fieldSelect.appendChild(option);
    });
    
    // Populate graduate program dropdown
    const gradSelect = document.getElementById('calc-grad-program');
    graduatePrograms.forEach(item => {
        const option = document.createElement('option');
        option.value = item.program;
        option.textContent = item.program;
        gradSelect.appendChild(option);
    });
    
    // Program type toggle
    document.getElementById('calc-program-type').addEventListener('change', (e) => {
        const isGrad = e.target.value === 'graduate';
        document.getElementById('undergrad-field-group').style.display = isGrad ? 'none' : 'block';
        document.getElementById('grad-program-group').style.display = isGrad ? 'block' : 'none';
    });
    
    // Loan amount slider
    document.getElementById('calc-loan-amount').addEventListener('input', (e) => {
        document.getElementById('loan-amount-display').textContent = parseInt(e.target.value).toLocaleString();
    });
    
    // Populate field data table
    populateFieldDataTable();
    
    // Populate graduate data table
    populateGraduateDataTable();
    
    // Render initial visualizations
    renderFieldVisualizations();
});

// Calculator function
function calculatePricing() {
    const programType = document.getElementById('calc-program-type').value;
    const isGrad = programType === 'graduate';
    const income = document.getElementById('calc-income').value;
    const institution = document.getElementById('calc-institution').value;
    const loanAmount = parseInt(document.getElementById('calc-loan-amount').value);
    
    let defaultRisk, fieldName, earnings;
    
    if (isGrad) {
        const programName = document.getElementById('calc-grad-program').value;
        const program = graduatePrograms.find(p => p.program === programName);
        defaultRisk = 0.15 * program.underemployment + 0.05;
        fieldName = program.program;
        earnings = program.earnings;
    } else {
        const field = document.getElementById('calc-field').value;
        const fieldData = fieldRiskData.find(f => f.field === field);
        defaultRisk = fieldData.defaultRisk;
        fieldName = fieldData.field;
        earnings = fieldData.earnings;
    }
    
    // Calculate rates
    const currentRate = isGrad ? currentRates.graduatePlus : currentRates.undergraduate;
    const rateCalc = calculateRate(defaultRisk, institution, income, isGrad);
    
    // Calculate payments
    const currentPayment = calculateMonthlyPayment(loanAmount, currentRate);
    const proposedPayment = calculateMonthlyPayment(loanAmount, rateCalc.finalRate);
    const difference = proposedPayment - currentPayment;
    const lifetimeDiff = difference * 12 * 10;
    
    // Display results
    const resultsDiv = document.getElementById('calculator-results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <h4>Your Pricing Results</h4>
        <p><strong>Field/Program:</strong> ${fieldName}</p>
        <p><strong>Median Earnings:</strong> $${earnings.toLocaleString()}</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div>
                <h4 style="color: #6b7280;">Current System</h4>
                <div class="result-value">${currentRate.toFixed(2)}%</div>
                <p>Monthly Payment: <strong>$${currentPayment.toFixed(0)}</strong></p>
            </div>
            <div>
                <h4 style="color: #2563eb;">Proposed Hybrid Model</h4>
                <div class="result-value">${rateCalc.finalRate.toFixed(2)}%</div>
                <p>Monthly Payment: <strong>$${proposedPayment.toFixed(0)}</strong></p>
            </div>
        </div>
        
        <div style="background: ${difference < 0 ? '#dcfce7' : '#fee2e2'}; padding: 16px; border-radius: 8px;">
            <h4 style="color: #1f2937;">Impact</h4>
            <p><strong>Monthly Difference:</strong> ${difference > 0 ? '+' : ''}$${difference.toFixed(0)} (${difference > 0 ? 'increase' : 'savings'})</p>
            <p><strong>10-Year Total:</strong> ${lifetimeDiff > 0 ? '+' : ''}$${lifetimeDiff.toFixed(0)}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <h5>Rate Breakdown</h5>
            <ul style="margin: 10px 0;">
                <li>Base Rate: ${rateCalc.baseRate.toFixed(2)}%</li>
                <li>Risk Premium: +${rateCalc.riskPremium.toFixed(2)}%</li>
                <li>Income Subsidy: -${rateCalc.incomeSubsidy.toFixed(2)}%</li>
                <li><strong>Final Rate: ${rateCalc.finalRate.toFixed(2)}%</strong></li>
            </ul>
        </div>
    `;
}

// Populate field data table
function populateFieldDataTable() {
    const tbody = document.querySelector('#field-data-table tbody');
    tbody.innerHTML = '';
    
    fieldRiskData.forEach(field => {
        // Calculate pure risk-based rate (current base + risk premium, no subsidy/institution adjustment)
        const fairPremium = (field.defaultRisk * pricingParams.lgd * 100) / pricingParams.duration;
        const cappedPremium = fairPremium * pricingParams.riskCapMultiplier;
        const pureRiskRate = currentRates.undergraduate + cappedPremium;
        
        const row = document.createElement('tr');
        
        const isHigh = field.defaultRisk > 0.07;
        const isLow = field.defaultRisk < 0.055;
        
        row.innerHTML = `
            <td>${field.field}</td>
            <td>$${field.earnings.toLocaleString()}</td>
            <td>${(field.underemployment * 100).toFixed(1)}%</td>
            <td>${field.institutions}</td>
            <td class="${isHigh ? 'highlight-high' : isLow ? 'highlight-low' : ''}">${(field.defaultRisk * 100).toFixed(1)}%</td>
            <td>${pureRiskRate.toFixed(2)}%</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Populate graduate data table
function populateGraduateDataTable() {
    const tbody = document.querySelector('#grad-data-table tbody');
    tbody.innerHTML = '';
    
    graduatePrograms.forEach(program => {
        const defaultRisk = 0.15 * program.underemployment + 0.05;
        const proposedRate = calculateRate(defaultRisk, 'state', 'medium', true).finalRate;
        const debtToIncome = program.debt / program.earnings;
        const monthlyPayment = calculateMonthlyPayment(program.debt, proposedRate);
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${program.program}</td>
            <td>$${program.debt.toLocaleString()}</td>
            <td>$${program.earnings.toLocaleString()}</td>
            <td>${debtToIncome.toFixed(2)}x</td>
            <td>${currentRates.graduatePlus.toFixed(2)}%</td>
            <td>${proposedRate.toFixed(2)}%</td>
            <td>$${monthlyPayment.toFixed(0)}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Field risk visualizations
function renderFieldVisualizations() {
    // Scatter plot: Earnings vs. Underemployment
    renderScatterPlot();
    
    // Bar chart: Risk-adjusted rates
    renderRatesBarChart();
}

function renderScatterPlot() {
    const container = document.getElementById('scatter-viz');
    container.innerHTML = '';
    
    const margin = {top: 20, right: 120, bottom: 60, left: 80};
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    
    const svg = d3.select('#scatter-viz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Scales
    const x = d3.scaleLinear()
        .domain([25000, 55000])
        .range([0, width]);
    
    const y = d3.scaleLinear()
        .domain([0, 0.35])
        .range([height, 0]);
    
    const size = d3.scaleSqrt()
        .domain([0, d3.max(fieldRiskData, d => d.institutions)])
        .range([5, 30]);
    
    const color = d3.scaleSequential(d3.interpolateRdYlGn)
        .domain([0.10, 0.05]);
    
    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d => '$' + (d/1000).toFixed(0) + 'k'))
        .attr('class', 'axis');
    
    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => (d*100).toFixed(0) + '%'))
        .attr('class', 'axis');
    
    // Labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + 45)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Median Earnings');
    
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -60)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Underemployment Rate');
    
    // Tooltip
    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
    
    // Circles
    svg.selectAll('circle')
        .data(fieldRiskData)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.earnings))
        .attr('cy', d => y(d.underemployment))
        .attr('r', d => size(d.institutions))
        .attr('fill', d => color(d.defaultRisk))
        .attr('opacity', 0.7)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on('mouseover', function(event, d) {
            tooltip.transition().duration(200).style('opacity', 1);
            tooltip.html(`
                <strong>${d.field}</strong><br/>
                Earnings: $${d.earnings.toLocaleString()}<br/>
                Underemployment: ${(d.underemployment * 100).toFixed(1)}%<br/>
                Default Risk: ${(d.defaultRisk * 100).toFixed(1)}%<br/>
                Institutions: ${d.institutions}
            `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
            
            d3.select(this).attr('stroke', '#2563eb').attr('stroke-width', 3);
        })
        .on('mouseout', function() {
            tooltip.transition().duration(200).style('opacity', 0);
            d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
        });
    
    // Legend
    const legendData = [
        {label: 'Low Risk (<5.5%)', color: color(0.05)},
        {label: 'Medium Risk (5.5-7.0%)', color: color(0.065)},
        {label: 'High Risk (>7.0%)', color: color(0.08)}
    ];
    
    const legend = svg.append('g')
        .attr('transform', `translate(${width + 10}, 20)`);
    
    legend.selectAll('rect')
        .data(legendData)
        .enter()
        .append('rect')
        .attr('y', (d, i) => i * 25)
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', d => d.color);
    
    legend.selectAll('text')
        .data(legendData)
        .enter()
        .append('text')
        .attr('x', 24)
        .attr('y', (d, i) => i * 25 + 13)
        .style('font-size', '12px')
        .text(d => d.label);
}

function renderRatesBarChart() {
    const container = document.getElementById('rates-viz');
    container.innerHTML = '';
    
    const margin = {top: 20, right: 30, bottom: 120, left: 60};
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    
    const svg = d3.select('#rates-viz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Calculate pure risk-based rates for visualization (using current 5.50% base)
    const rateData = fieldRiskData.map(field => {
        // For visualization: Current base rate + risk premium (no subsidy, no institution multiplier)
        const fairPremium = (field.defaultRisk * pricingParams.lgd * 100) / pricingParams.duration;
        const cappedPremium = fairPremium * pricingParams.riskCapMultiplier;
        const pureRiskRate = currentRates.undergraduate + cappedPremium;
        
        return {
            field: field.field,
            currentRate: currentRates.undergraduate,
            proposedRate: pureRiskRate
        };
    }).sort((a, b) => b.proposedRate - a.proposedRate);
    
    // Scales
    const x = d3.scaleBand()
        .domain(rateData.map(d => d.field))
        .range([0, width])
        .padding(0.2);
    
    const y = d3.scaleLinear()
        .domain([5.3, 5.9])
        .range([height, 0]);
    
    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end')
        .attr('class', 'axis');
    
    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => d.toFixed(1) + '%'))
        .attr('class', 'axis');
    
    // Reference line for current rate
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', y(currentRates.undergraduate))
        .attr('y2', y(currentRates.undergraduate))
        .attr('stroke', '#ef4444')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5');
    
    svg.append('text')
        .attr('x', width - 5)
        .attr('y', y(currentRates.undergraduate) - 5)
        .style('text-anchor', 'end')
        .style('font-size', '12px')
        .style('fill', '#ef4444')
        .text('Current Rate (5.50%)');
    
    // Tooltip
    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
    
    // Bars
    svg.selectAll('.bar')
        .data(rateData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.field))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d.proposedRate))
        .attr('height', d => height - y(d.proposedRate))
        .attr('fill', d => {
            if (d.proposedRate > 5.6) return '#ef4444';
            if (d.proposedRate < 5.3) return '#10b981';
            return '#f59e0b';
        })
        .on('mouseover', function(event, d) {
            tooltip.transition().duration(200).style('opacity', 1);
            tooltip.html(`
                <strong>${d.field}</strong><br/>
                Current Rate: ${d.currentRate.toFixed(2)}%<br/>
                Proposed Rate: ${d.proposedRate.toFixed(2)}%<br/>
                Difference: ${(d.proposedRate - d.currentRate).toFixed(2)}pp
            `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
            
            d3.select(this).attr('opacity', 0.7);
        })
        .on('mouseout', function() {
            tooltip.transition().duration(200).style('opacity', 0);
            d3.select(this).attr('opacity', 1);
        });
}

// Graduate visualizations
function renderGraduateVisualizations() {
    renderGraduateScatterPlot();
}

function renderGraduateScatterPlot() {
    const container = document.getElementById('grad-scatter-viz');
    container.innerHTML = '';
    
    const margin = {top: 20, right: 120, bottom: 60, left: 80};
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    
    const svg = d3.select('#grad-scatter-viz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Scales
    const x = d3.scaleLinear()
        .domain([0, 300000])
        .range([0, width]);
    
    const y = d3.scaleLinear()
        .domain([0, 250000])
        .range([height, 0]);
    
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    
    // Axes
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d => '$' + (d/1000).toFixed(0) + 'k'))
        .attr('class', 'axis');
    
    svg.append('g')
        .call(d3.axisLeft(y).tickFormat(d => '$' + (d/1000).toFixed(0) + 'k'))
        .attr('class', 'axis');
    
    // Labels
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + 45)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Median Debt');
    
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -60)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Median Earnings');
    
    // Diagonal line (debt = earnings)
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', height)
        .attr('y2', y(250000))
        .attr('stroke', '#9ca3af')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5');
    
    svg.append('text')
        .attr('x', width - 100)
        .attr('y', y(200000))
        .style('font-size', '11px')
        .style('fill', '#6b7280')
        .text('Debt = Earnings');
    
    // Tooltip
    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
    
    // Circles
    svg.selectAll('circle')
        .data(graduatePrograms)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.debt))
        .attr('cy', d => y(d.earnings))
        .attr('r', 10)
        .attr('fill', (d, i) => color(i))
        .attr('opacity', 0.7)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on('mouseover', function(event, d) {
            const debtToIncome = d.debt / d.earnings;
            const defaultRisk = 0.15 * d.underemployment + 0.05;
            const proposedRate = calculateRate(defaultRisk, 'state', 'medium', true).finalRate;
            
            tooltip.transition().duration(200).style('opacity', 1);
            tooltip.html(`
                <strong>${d.program}</strong><br/>
                Debt: $${d.debt.toLocaleString()}<br/>
                Earnings: $${d.earnings.toLocaleString()}<br/>
                Debt-to-Income: ${debtToIncome.toFixed(2)}x<br/>
                Proposed Rate: ${proposedRate.toFixed(2)}%
            `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
            
            d3.select(this).attr('stroke', '#2563eb').attr('stroke-width', 3);
        })
        .on('mouseout', function() {
            tooltip.transition().duration(200).style('opacity', 0);
            d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
        });
    
    // Labels for notable programs
    const notablePrograms = ['MD (Doctor of Medicine)', 'DDS/DMD (Dentistry)', 'JD (Juris Doctor)', 'MFA (Fine Arts)'];
    
    svg.selectAll('.label')
        .data(graduatePrograms.filter(d => notablePrograms.includes(d.program)))
        .enter()
        .append('text')
        .attr('x', d => x(d.debt) + 15)
        .attr('y', d => y(d.earnings) + 4)
        .style('font-size', '11px')
        .style('font-weight', '600')
        .text(d => d.program.split(' ')[0]);
}
