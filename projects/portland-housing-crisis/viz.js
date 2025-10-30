// Visualization functions for Portland Housing Crisis

function createBarChart(selector, data, valueKey, labelKey, tooltipFormat, color) {
    const container = d3.select(selector);
    const width = Math.min(container.node().clientWidth, 800);
    const height = Math.max(400, data.length * 35);
    const margin = { top: 20, right: 30, bottom: 50, left: 200 };
    
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[valueKey])])
        .range([margin.left, width - margin.right]);
    
    const y = d3.scaleBand()
        .domain(data.map(d => d[labelKey]))
        .range([margin.top, height - margin.bottom])
        .padding(0.1);
    
    svg.append('g')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', margin.left)
        .attr('y', d => y(d[labelKey]))
        .attr('width', d => x(d[valueKey]) - margin.left)
        .attr('height', y.bandwidth())
        .attr('fill', color)
        .on('mouseover', function(event, d) {
            showTooltip(event, tooltipFormat(d));
        })
        .on('mouseout', hideTooltip);
    
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format(".2s")));
    
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
}

function createHistogram(selector, data, valueKey, labelKey, tooltipFormat, color) {
    const container = d3.select(selector);
    const width = Math.min(container.node().clientWidth, 800);
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 80, left: 60 };
    
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const x = d3.scaleBand()
        .domain(data.map(d => d[labelKey]))
        .range([margin.left, width - margin.right])
        .padding(0.1);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[valueKey])])
        .range([height - margin.bottom, margin.top]);
    
    svg.append('g')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d[labelKey]))
        .attr('y', d => y(d[valueKey]))
        .attr('width', x.bandwidth())
        .attr('height', d => height - margin.bottom - y(d[valueKey]))
        .attr('fill', color)
        .on('mouseover', function(event, d) {
            showTooltip(event, tooltipFormat(d));
        })
        .on('mouseout', hideTooltip);
    
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');
    
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format(".2s")));
}

function createOwnershipChart(selector, data) {
    const container = d3.select(selector);
    const width = Math.min(container.node().clientWidth, 600);
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 100, left: 80 };
    
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const x = d3.scaleBand()
        .domain(data.map(d => d.type))
        .range([margin.left, width - margin.right])
        .padding(0.3);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.total_value)])
        .range([height - margin.bottom, margin.top]);
    
    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.type))
        .range(['#7c2d12', '#16a34a']);
    
    svg.append('g')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.type))
        .attr('y', d => y(d.total_value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - margin.bottom - y(d.total_value))
        .attr('fill', d => colorScale(d.type))
        .on('mouseover', function(event, d) {
            showTooltip(event, 
                `<strong>${d.type}</strong><br>` +
                `Properties: ${d.count.toLocaleString()}<br>` +
                `Total Value: $${(d.total_value / 1e9).toFixed(1)}B<br>` +
                `Median Value: $${(d.median_value / 1000).toFixed(0)}K`
            );
        })
        .on('mouseout', hideTooltip);
    
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');
    
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(d => '$' + (d / 1e9).toFixed(0) + 'B'));
}

function showTooltip(event, html) {
    d3.selectAll('.tooltip').remove();
    d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 10) + 'px')
        .html(html);
}

function hideTooltip() {
    d3.selectAll('.tooltip').remove();
}
