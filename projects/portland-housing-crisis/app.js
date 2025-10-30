// Main application logic

function showTab(tabName) {
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById('tab-' + tabName).classList.add('active');
    event.target.classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load and visualize data
d3.json('data.json').then(data => {
    console.log('Data loaded successfully:', data);
    
    // Populate stats
    document.getElementById('total-properties').textContent = 
        data.metadata.total_properties.toLocaleString();
    document.getElementById('total-value').textContent = 
        '$' + (data.metadata.total_market_value / 1e9).toFixed(1) + 'B';
    document.getElementById('median-value').textContent = 
        '$' + (data.metadata.median_value / 1000).toFixed(0) + 'K';
    document.getElementById('neighborhoods').textContent = 
        data.metadata.neighborhoods;
    
    // Create all visualizations
    console.log('Creating visualizations...');
    
    // 1. Top Neighborhoods (horizontal bar)
    createBarChart('#viz-top-neighborhoods', data.top_neighborhoods, 'value', 'neighborhood',
        d => `<strong>${d.neighborhood}</strong><br>Median Value: $${(d.value / 1000).toFixed(0)}K<br>${d.count.toLocaleString()} properties`, 
        '#dc2626');
    
    // 2. Bottom Neighborhoods (horizontal bar)
    createBarChart('#viz-bottom-neighborhoods', data.bottom_neighborhoods, 'value', 'neighborhood',
        d => `<strong>${d.neighborhood}</strong><br>Median Value: $${(d.value / 1000).toFixed(0)}K<br>${d.count.toLocaleString()} properties`, 
        '#16a34a');
    
    // 3. Building Decades (vertical histogram)
    createHistogram('#viz-building-decades', data.building_decades, 'count', 'decade',
        d => `<strong>${d.decade}s</strong><br>${d.count.toLocaleString()} properties<br>Median Value: $${(d.median_value / 1000).toFixed(0)}K`, 
        '#3b82f6');
    
    // 4. Affordability Tiers (vertical histogram)
    createHistogram('#viz-affordability', data.affordability_tiers, 'count', 'tier',
        d => `<strong>${d.tier}</strong><br>${d.count.toLocaleString()} properties<br>${d.percentage}% of total`, 
        '#f59e0b');
    
    // 5. Displacement Risk (horizontal bar)
    createBarChart('#viz-displacement-risk', data.displacement_risk, 'risk_score', 'neighborhood',
        d => `<strong>${d.neighborhood}</strong><br>Risk Score: ${d.risk_score}<br>Median Value: $${(d.median_value/1000).toFixed(0)}K<br>Age: ${d.building_age} years`, 
        '#dc2626');
    
    // 6. Ownership Breakdown (special)
    createOwnershipChart('#viz-ownership', data.ownership_breakdown);
    
    // 7. Corporate Concentration (horizontal bar)
    createBarChart('#viz-corporate-concentration', data.corporate_concentration, 'corporate_pct', 'neighborhood',
        d => `<strong>${d.neighborhood}</strong><br>${d.corporate_pct}% corporate<br>${d.corporate_count} of ${d.total_count} properties`, 
        '#7c2d12');
    
    // 8. Value Concentration (horizontal bar)
    createBarChart('#viz-concentration', data.value_concentration, 'total_value', 'neighborhood',
        d => `<strong>${d.neighborhood}</strong><br>$${(d.total_value / 1e9).toFixed(1)}B (${d.percentage}% of total)`, 
        '#dc2626');
    
    // 9. Ultra Luxury (horizontal bar)
    createBarChart('#viz-ultra-luxury', data.ultra_luxury, 'count', 'neighborhood',
        d => `<strong>${d.neighborhood}</strong><br>${d.count} properties over $2M<br>Maximum: $${(d.max_value / 1e6).toFixed(1)}M`, 
        '#7c2d12');
    
    console.log('All visualizations created');
}).catch(error => {
    console.error('Error loading data:', error);
    alert('Error loading data. Please check the console.');
});
